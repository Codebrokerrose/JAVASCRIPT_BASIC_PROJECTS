import {
    createElement,
    getLocalePlaceholders
} from './scripts.js';
import {
    readBlockConfig
} from './lib-franklin.js';

export const queryIndexPath = '/query-index.json';
const SearchConfigs = {
    default: {
        path: '/',
        tagFacet: false,
        'page-size': 10,
    },
    insights: {
        path: '/en/insights/',
        sheet: 'blog',
        tagFacet: 'content-types/insights',
        'page-size': 5,
    },
    news: {
        path: '/en/news/press-releases/',
        tagFacet: 'content-types/press-release',
        sheet: 'news',
        'page-size': 5,
    },
    'real-estate-dictionary': {
        path: '/en/real-estate-dictionary/',
        tagFacet: false,
        sheet: 'real-estate-dictionary',
        'page-size': 25,
    },
};

export const getSearchConfig = (block) => {
    const cfg = readBlockConfig(block);
    const variant = Object.keys(SearchConfigs).find((varName) => block.classList.contains(varName)) || 'default';
    Object.keys(SearchConfigs[variant]).forEach((key) => {
        if (!cfg[key]) {
            cfg[key] = SearchConfigs[variant][key];
        }
    });

    // this allows author to remove the facet via config if desired
    if ('tag-facet' in cfg && cfg['tag-facet'] === 'false') {
        cfg.tagFacet = false;
    }

    return cfg;
};

export const createPaginationButton = (page, currentPage) => {
    const placeholders = getLocalePlaceholders();
    const pageLookup = {
        '>': {
            value: currentPage + 1,
            text: '<span class="fa-icon far fa-chevron-right"></span>',
            cssClass: 'arrow',
            ariaLabel: placeholders.nextPage || 'Next page',
        },
        '<': {
            cssClass: 'arrow',
            value: currentPage - 1,
            text: '<span class="fa-icon far fa-chevron-left"></span>',
            ariaLabel: placeholders.previousPage || 'Previous page',
        },
        default: {
            cssClass: '',
            value: page,
            text: page,
            ariaLabel: `Page ${page}`,
        },
    };

    const item = pageLookup[page] || pageLookup.default;

    const {
        value,
        text,
        cssClass,
        ariaLabel,
    } = item;

    const isActive = currentPage === page;

    const markup = `<li class="search-results-pagination-item">
    <button class="search-results-pagination-button ${isActive ? 'active' : ''} ${cssClass}" ${isActive || page === '…' ? 'disabled' : ''} data-page="${value}" aria-label="Go to ${ariaLabel}" ${isActive ? 'aria-current="page"' : ''} role="button">
      ${text}
    </button>
  </li>`;

    return markup;
};

export const generatePaginationData = (currentPage, totalPages) => {
    if (!currentPage || !totalPages) {
        return null;
    }

    const prev = currentPage === 1 ? null : currentPage - 1;
    const next = currentPage === totalPages ? null : currentPage + 1;
    const items = [1];

    if (currentPage === 1 && totalPages === 1) {
        return items;
    }

    if (currentPage > 3) {
        items.push('…');
    }

    const pageOffset = 1;
    const offsetLeft = currentPage - pageOffset;
    const offsetRight = currentPage + pageOffset;

    for (let i = offsetLeft > 2 ? offsetLeft : 2; i <= Math.min(totalPages, offsetRight); i += 1) {
        items.push(i);
    }

    if (offsetRight + 1 < totalPages) {
        items.push('…');
    }

    if (offsetRight < totalPages) {
        items.push(totalPages);
    }

    if (next) {
        items.push('>');
    }

    if (prev) {
        items.unshift('<');
    }

    return items;
};

export const createSearchForm = async ({
    type,
    action
}) => {
    const formAction = action || '/en/search-result';
    const {
        searchButtonText,
        searchFieldPlaceholder
    } = getLocalePlaceholders();

    const buttonHTML = {
        default: `<span>${searchButtonText || 'Search'}</span>`,
        minimal: '<span class="fa-icon far fa-search"></span>',
    };

    const uuid = Math.random().toString(36).slice(-6);

    const formElement = createElement('div', {
        class: 'search-form-container',
    }, createElement('form', {
        action: formAction,
        class: ['search-form', type],
        role: 'search',
    }, `<label class="search-label" for="searchbox-${uuid}"></label>
          <input type="search" class="search-input" name="q" id="searchbox-${uuid}" required placeholder="${searchFieldPlaceholder || 'Enter a search term...'}">
            <button class="search-form-button" type="submit">
              ${buttonHTML[type]}
            </button>`));

    return formElement;
};