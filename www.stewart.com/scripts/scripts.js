import {
    sampleRUM,
    buildBlock,
    decorateBlock,
    loadHeader,
    loadFooter,
    decorateIcons as libFranklinDecorateIcons,
    decorateSections,
    decorateBlocks,
    decorateTemplateAndTheme,
    waitForLCP,
    loadBlocks,
    loadCSS,
    toClassName,
    getMetadata,
    fetchPlaceholders,
    loadBlock,
} from './lib-franklin.js';
import ffetch from './ffetch.js';

window.delayedPromises = window.delayedPromises || [];

// valid template for which we have css/js files
const VALID_TEMPLATES = [
    'blog-article-page',
    'landing-page',
    'press-release-page',
    'real-estate-dictionary-entry-page',
];
export const PRODUCTION_DOMAINS = ['www.stewart.com', 'preprod.stewart.com'];
const LCP_BLOCKS = ['hero', 'alert']; // add your LCP blocks to the list

export function checkDomain(url) {
    const urlToCheck = typeof url === 'string' ? new URL(url) : url;

    const isProd = PRODUCTION_DOMAINS.some((host) => urlToCheck.hostname.includes(host));
    const isHlx = ['hlx.page', 'hlx.live', 'aem.page', 'aem.live'].some((host) => urlToCheck.hostname.includes(host));
    const isLocal = urlToCheck.hostname.includes('localhost');
    const isPreview = isLocal || urlToCheck.hostname.includes('hlx.page');
    const isKnown = isProd || isHlx || isLocal;
    const isExternal = !isKnown && !urlToCheck.hostname.includes('.stewart.com');
    return {
        isProd,
        isHlx,
        isLocal,
        isKnown,
        isExternal,
        isPreview,
    };
}

let browserDomainCheck;
export function checkBrowserDomain() {
    if (!browserDomainCheck) {
        browserDomainCheck = checkDomain(window.location);
    }
    return browserDomainCheck;
}

/**
 * create an element.
 * @param {string} tagName the tag for the element
 * @param {object} props properties to apply
 * @param {string|Element} html content to add
 * @returns the element
 */
export function createElement(tagName, props, html) {
    const elem = document.createElement(tagName);
    if (props) {
        Object.keys(props).forEach((propName) => {
            const val = props[propName];
            if (propName === 'class') {
                const classesArr = (typeof val === 'string') ? [val] : val;
                elem.classList.add(...classesArr);
            } else {
                elem.setAttribute(propName, val);
            }
        });
    }

    if (html) {
        const appendEl = (el) => {
            if (el instanceof HTMLElement || el instanceof SVGElement) {
                elem.append(el);
            } else {
                elem.insertAdjacentHTML('beforeend', el);
            }
        };

        if (Array.isArray(html)) {
            html.forEach(appendEl);
        } else {
            appendEl(html);
        }
    }

    return elem;
}

/**
 * Extension of decorateIcons from lib-franklin.
 * adds special handing for fa icons from icon font
 * @param {Element} element the container element
 */
export async function decorateIcons(element) {
    const faPrefixes = ['fa-', 'far-', 'fab-', 'fas-', 'fal-'];
    element.querySelectorAll('span.icon').forEach((icon) => {
        const iconName = Array.from(icon.classList).find((c) => c.startsWith('icon-')).substring(5);
        const isFaIcon = faPrefixes.some((prefix) => iconName.startsWith(prefix));
        if (isFaIcon) {
            const faIcon = iconName.split('-');
            const faPrefix = faIcon[0];
            const faIconName = faIcon.slice(1).join('-');
            icon.setAttribute('data-icon-name', iconName);
            icon.className = `fa-icon ${faPrefix} fa-${faIconName}`;
            icon.setAttribute('role', 'img');
            if (!icon.hasAttribute('aria-label')) {
                const friendlyIconName = faIconName
                    .split('-')
                    .map((word) => `${word.substring(0, 1).toUpperCase()}${word.substring(1)}`)
                    .join(' ');
                icon.setAttribute('aria-label', friendlyIconName);
            }
        }
    });

    libFranklinDecorateIcons(element);
}

/**
 * build columns blocks from sections containing the columns style
 * @param {Element} main the main element
 */
export function buildAutoColumns(main) {
    main.querySelectorAll('.section.columns').forEach((colSect) => {
        const blockTable = [];
        const row = [];
        [...colSect.children].forEach((wrapper) => {
            let removeWrapper = true;
            let hasBgImage = false;
            const elems = [];
            const isDefaultContent = wrapper.classList.contains('default-content-wrapper');
            [...wrapper.children].forEach((child, idx) => {
                if (isDefaultContent && idx === 0 && child.tagName === 'PICTURE' && child.classList.contains('bg-image')) {
                    removeWrapper = false;
                    hasBgImage = true;
                } else if (isDefaultContent && hasBgImage && idx === 1 && child.tagName === 'H2') {
                    removeWrapper = false;
                    hasBgImage = true;
                } else {
                    elems.push(child);
                }
            });
            row.push({
                elems
            });
            if (removeWrapper) wrapper.remove();
        });
        blockTable.push(row);
        const block = buildBlock('columns', blockTable);

        const variants = [...colSect.classList].filter((cls) => cls.startsWith('split-') || cls === 'line-separator');
        block.classList.add(...variants);

        colSect.classList.remove('columns');
        colSect.classList.remove(...variants);

        const wrapper = createElement('div');
        wrapper.append(block);
        colSect.append(wrapper);
        decorateBlock(block);
    });
}

export function buildBreadcrumbBlock(main) {
    const hasBreadcrumb = main.querySelector('.breadcrumb');
    if (!hasBreadcrumb && !main.classList.contains('error')) {
        const template = toClassName(getMetadata('template'));
        if (template === 'landing-page') return;

        const pageLevel = window.location.pathname.split('/').length - 1;
        if (pageLevel > 3 || template === 'blog-article-page' || template === 'press-release-page') {
            const breadcrumb = buildBlock('breadcrumb', {
                elems: []
            });
            const h1 = main.querySelector('h1');
            const heroBlock = main.querySelector('.hero');
            const sectionNav = main.querySelector('.section-navigation');
            if (sectionNav) {
                sectionNav.insertAdjacentElement('afterend', breadcrumb);
            } else if (heroBlock) {
                heroBlock.parentElement.closest('div') ? .insertAdjacentElement('afterend', createElement('div', {}, breadcrumb));
            } else if (h1) {
                h1.insertAdjacentElement('beforebegin', breadcrumb);
            }
        }
    }
}

export async function buildSectionNavBlock(main) {
    const sectionNav = main.querySelector('.section-navigation');
    if (getMetadata('hide-nav') || sectionNav) return;

    const ignoredTemplates = [
        'blog-article-page',
        'press-release-page',
        'landing-page',
    ];
    const template = toClassName(getMetadata('template'));
    if (ignoredTemplates.includes(template)) return;

    const results = await ffetch('/query-index.json')
        .sheet('nav')
        .filter((p) => window.location.pathname.startsWith(p.path + "/") &&
            p.path !== window.location.pathname)
        .all();

    // sort array by level then get the last element
    // this will give us the closest ancestor to the current page
    const parent = results.map((r) => ({
        path: r.path,
        level: r.path.split('/').length,
    })).sort((a, b) => a.level - b.level).pop();
    if (parent) {
        const block = buildBlock('section-navigation', [
            ['Parent', parent.path],
        ]);

        const heroBlock = main.querySelector('.hero');
        if (heroBlock) {
            heroBlock.parentElement.closest('div') ? .insertAdjacentElement('afterend', createElement('div', {}, block));
        }
    }
}

/**
 * Builds hero block and prepends to main in a new section.
 * @param {Element} main The container element
 */
export function buildHeroBlock(main) {
    if (main.querySelector('.hero')) return;

    const template = toClassName(getMetadata('template'));
    if (template === 'blog-article-page' || template === 'press-release-page') return;

    const h1 = main.querySelector('h1');
    if (!h1) {
        return;
    }

    const section = h1.closest('div');

    if (section.querySelector('.section-metadata') && section.querySelector('.section-metadata').querySelector('picture')) {
        // don't create hero if in a section with a bg image
        return;
    }

    const picture = section.querySelector('picture');
    if (!picture) {
        return;
    }

    const elems = [...section.children];
    const filtered = elems.filter((el) => !el.classList.contains('section-metadata') && !el.classList.contains('alert'));
    const block = buildBlock('hero', {
        elems: filtered
    });
    section.append(block);
}

function replaceParagraphWithBlock(link, block) {
    const parent = link.parentElement;
    if (parent && parent.tagName === 'P') {
        parent.replaceWith(block);
    } else {
        link.replaceWith(block);
    }
}

export function buildEmbed(link) {
    // If previous sibling is an image, capture the picture element and add it to the embed block
    const elems = [link.cloneNode(true)];
    const prevSibling = link.previousElementSibling;
    // If the link is a youtube video
    const url = new URL(link.href);
    if (url.hostname.includes('youtube.com') && url.pathname.startsWith('/embed') &&
        prevSibling && prevSibling.tagName === 'PICTURE') {
        elems.push(prevSibling);
    }
    const block = buildBlock('embed', {
        elems
    });
    replaceParagraphWithBlock(link, block);
    decorateBlock(block);
}

export function buildSvg(link) {
    const block = buildBlock('svg', link.cloneNode(true));
    replaceParagraphWithBlock(link, block);
    decorateBlock(block);
}

let fragmentCount = 0;
export function buildFragment(link) {
    fragmentCount += 1;
    const block = buildBlock('fragment', link.cloneNode(true));
    if (fragmentCount > 2) {
        // for pages with large number of fragments
        // defer everything after the first few
        // 2 is somewhat arbitrary here, gaol is just to ensure above the fold are loaded synchronously
        // mostly an optimization for office page staff fragments
        block.classList.add('deferred');
    }
    replaceParagraphWithBlock(link, block);
    // add dedicated fragment wrapper so that we don't obliterate existing content around it
    const fragmentWrapper = createElement('div');
    block.before(fragmentWrapper);
    fragmentWrapper.append(block);
    decorateBlock(block);
}

export function buildForm(link) {
    // don't auto-block if link is in a form block
    if (link.closest('.form') || link.closest('.cpl') || link.closest('.order-services')) return;

    const block = buildBlock('form', link.cloneNode(true));
    link.replaceWith(block);
    decorateBlock(block);
}

/**
 * check in a language aware way if link text is same as the href
 */
export function linkTextIncludesHref(link, urlPath = '') {
    const href = urlPath || link.getAttribute('href');
    const textcontent = link.textContent;
    const langLocalTextContent = textcontent.replace('/en', `/${document.documentElement.lang}`);

    return textcontent.includes(href) || langLocalTextContent.includes(href);
}

function autoBlockLink(a) {
    const url = new URL(a.href);
    const domainCheck = checkDomain(url);
    let autoBlocked = false;
    const isDam = url.pathname.startsWith('/content/dam/');
    if (domainCheck.isKnown && !isDam && url.pathname.includes('/fragments/') && linkTextIncludesHref(a, url.pathname)) {
        buildFragment(a);
        autoBlocked = true;
    } else if (domainCheck.isKnown && !isDam &&
        url.pathname.includes('/forms/') && url.pathname.endsWith('.json') &&
        linkTextIncludesHref(a, url.pathname)) {
        buildForm(a);
        autoBlocked = true;
    } else if (url.hostname.includes('youtube.com') && url.pathname.startsWith('/embed')) {
        buildEmbed(a);
        autoBlocked = true;
    } else if (domainCheck.isKnown &&
        (url.pathname.includes('/svgs/') || isDam) &&
        url.pathname.endsWith('.svg')) {
        buildSvg(a);
        autoBlocked = true;
    }

    return autoBlocked;
}

/**
 * Builds all synthetic blocks in a container element.
 * @param {Element} main The container element
 */
export async function buildAutoBlocks(main, isFragment = false) {
    if (!isFragment) {
        buildHeroBlock(main);
        await buildSectionNavBlock(main);
        buildBreadcrumbBlock(main);
    }
}

/**
 * filter the link siblings to get only the siblings that are not empty text nodes
 * @param {Element} link the link
 * @returns a list of sibling nodes that aren't empty text nodes or the current link
 */
function getLinkSiblings(link) {
    const parent = link.parentElement;
    const linkSiblings = [...parent.childNodes].filter((node) => {
        if (link === node) return false; // The link itself is not a sibling
        if (node.nodeType === Node.TEXT_NODE) {
            // If a sibling is a text that is more than whitespace
            // then this link is inside other text.
            return node.textContent.trim().length > 0;
        }
        return true;
    });

    return linkSiblings;
}

function isLinkOutsideParagraph(link) {
    const parent = link.parentElement;

    if (['LI', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6'].includes(parent.tagName)) {
        return false;
    }

    // Check for siblings which would indicate this link is in other text.
    const linkSiblings = getLinkSiblings(link);
    // filter further to remove all links or strong/em containing only links
    const siblings = linkSiblings.filter((node) => {
        if (node.nodeType === Node.ELEMENT_NODE) {
            const tagName = node.tagName.toLowerCase();
            if (tagName === 'a') {
                return false;
            }
            if (tagName === 'strong' || tagName === 'em') {
                const innerSiblings = [...node.children].filter((child) => child.tagName === 'A');
                return innerSiblings.length === 0;
            }

            return true;
        }
        return true;
    });

    // Recurse up one level if the link should be a secondary or tertiary button.
    if (parent.tagName === 'STRONG' || parent.tagName === 'EM') {
        return siblings.length === 0 && (
            parent.parentElement.childNodes.size === 0 ||
            isLinkOutsideParagraph(parent));
    }

    return siblings.length === 0;
}

function decorateButton(a) {
    const isMailto = a.href.startsWith('mailto:');
    const emailText = a.textContent.match(/[\w.]+@[\w.]+/);

    if (!(isMailto && emailText) &&
        a.href !== a.textContent &&
        !a.querySelector('img') &&
        isLinkOutsideParagraph(a)) {
        // special case for icons as standalone links
        if (a.children.length === 1 && a.firstChild.classList.contains('fa-icon') && a.firstChild.tagName === 'SPAN') {
            a.classList.add('icon-link');
            return;
        }
        const up = a.parentElement;
        const twoup = up.parentElement;
        if (up.tagName === 'STRONG') {
            a.className = 'button tertiary';
            twoup.classList.add('button-container');
        } else if (up.tagName === 'EM') {
            a.className = 'button secondary';
            twoup.classList.add('button-container');
        } else if (up) {
            a.className = 'button primary'; // default
            up.classList.add('button-container');
        }
    }
}

export function rewriteLinkUrl(a) {
    const url = new URL(a.href);
    const domainCheck = checkDomain(url);
    // protect against maito: links or other weirdness
    const isHttp = url.protocol === 'https:' || url.protocol === 'http:';

    if (isHttp && domainCheck.isKnown) {
        if (url.pathname.startsWith('/content/dam/')) {
            a.target = '_blank';
            if (checkBrowserDomain().isProd) {
                a.href = `${url.pathname}${url.search}${url.hash}`;
            }
        } else {
            // local links are rewritten to be relative
            a.href = `${url.pathname.replace('.html', '')}${url.search}${url.hash}`;
        }
    } else if (isHttp && domainCheck.isExternal) {
        // non local open in a new tab
        // but if a different stewart.com sub-domain, leave absolute, don't open in a new tab
        a.target = '_blank';
        a.rel = 'noopener noreferrer';
    }

    return a;
}

// This normalizes all whitespace and then trims the string
// Trim by itself does not remove newlines
function trimAllWhitespace(text) {
    return text ? text.replace(/\s/g, ' ').trim() : '';
}

export function decorateAndAutoBlockLinks(element) {
    element.querySelectorAll('a').forEach((a) => {
        try {
            a.title = trimAllWhitespace(a.title || a.textContent);
            if (!a.title && a.querySelector('[aria-label]')) {
                // eslint-disable-next-line prefer-destructuring
                a.title = a.querySelector('[aria-label]').getAttribute('aria-label').split(' ')[0];
            }
            if (!a.title || trimAllWhitespace(a.title).length === 0) {
                a.removeAttribute('title');
            }
            if (a.href) {
                rewriteLinkUrl(a);

                const isAutoBlocked = autoBlockLink(a);
                if (!isAutoBlocked) {
                    decorateButton(a);
                }
            }
        } catch (e) {
            // something went wrong
            // eslint-disable-next-line no-console
            console.log(e);
        }
    });
}

export function autoBlockLinkTargets(element) {
    // Look for any code elements that start with "Link target:" case insensitive
    // Take the rest of the text and create a link target block with that text as the child element
    element.querySelectorAll('code').forEach((code) => {
        if (code.textContent.toLowerCase().startsWith('link target:')) {
            const text = code.textContent.substring(12);
            const block = buildBlock('link-target', [
                [text]
            ]);
            code.replaceWith(block);
            decorateBlock(block);
        }
    });
}

/**
 * Wraps images followed by links within a matching <a> tag.
 * @param {Element} container The container element
 */
export function wrapImgsInLinks(container) {
    const ignorePatterns = ['/fragments/', '/forms/'];
    const pictures = container.querySelectorAll('picture');
    pictures.forEach((pic) => {
        // need to deal with 2 use cases here
        // 1) <picture><br/><a>
        // 2) <p><picture></p><p><a></p>
        if (pic.nextElementSibling && pic.nextElementSibling.tagName === 'BR' &&
            pic.nextElementSibling.nextElementSibling && pic.nextElementSibling.nextElementSibling.tagName === 'A') {
            const link = pic.nextElementSibling.nextElementSibling;
            if (linkTextIncludesHref(link)) {
                const linkHref = new URL(link.getAttribute('href'));
                const domainCheck = checkDomain(linkHref);
                if (domainCheck.isKnown && !linkHref.pathname.startsWith('/content/dam/') &&
                    ignorePatterns.some((pattern) => linkHref.pathname.includes(pattern))) {
                    return;
                }
                pic.nextElementSibling.remove();
                link.innerHTML = pic.outerHTML;
                pic.replaceWith(link);
                return;
            }
        }

        const parent = pic.parentNode;
        if (!parent.nextElementSibling) {
            // eslint-disable-next-line no-console
            console.warn('no next element');
            return;
        }
        const nextSibling = parent.nextElementSibling;
        if (parent.tagName !== 'P' || nextSibling.tagName !== 'P' || nextSibling.children.length > 1) {
            // eslint-disable-next-line no-console
            console.warn('next element not viable link container');
            return;
        }
        const link = nextSibling.querySelector('a');
        if (link && linkTextIncludesHref(link)) {
            if (ignorePatterns.some((pattern) => link.getAttribute('href').includes(pattern))) {
                return;
            }
            const linkSiblings = getLinkSiblings(link);
            if (linkSiblings.length > 0) {
                return;
            }
            link.parentElement.remove();
            link.innerHTML = pic.outerHTML;
            pic.replaceWith(link);
        }
    });
}

export async function fetchIndexMetadataJson(path, sheet = '') {
    const data = {};
    const keyMap = {
        image: 'og:image',
        title: 'og:title',
        date: 'publication-date',
    };
    const dateProps = ['date', 'publication-date', 'lastModified'];
    const result = await ffetch('/query-index.json')
        .sheet(sheet || '')
        .filter((entry) => entry.path === path)
        .first();
    if (result) {
        Object.keys(result).forEach((key) => {
            const mappedKey = keyMap[key] || key;
            if (key !== 'path') {
                const val = (dateProps.includes(key) && result[key]) ?
                    new Date(result[key] * 1000) : result[key];
                data[mappedKey] = val;
            }
        });
    }

    return data;
}

/**
 * Returns the true origin of the current page in the browser.
 * If the page is running in a iframe with srcdoc, the ancestor origin is returned.
 * @returns {String} The true origin
 */
export function getOrigin() {
    return window.location.href === 'about:srcdoc' ? window.parent.location.origin : window.location.origin;
}

/**
 * fetches page and returns a json representation of all it's metadata
 * @param {string} path path to the page to fetch
 */
export async function fetchMetadataJson(path) {
    const data = {};
    const resp = await fetch(path);
    const respUrl = resp.url;
    // check response is from the same domain
    if (resp.ok && new URL(respUrl).origin === getOrigin()) {
        const html = await resp.text();
        const parser = new DOMParser();
        const contentDoc = parser.parseFromString(html, 'text/html');
        contentDoc.querySelectorAll('head > meta').forEach((metaTag) => {
            const name = metaTag.getAttribute('name') || metaTag.getAttribute('property');
            const value = metaTag.getAttribute('content');
            if (data[name]) {
                let val = data[name];
                if (!Array.isArray(val)) {
                    val = [val];
                }
                val.push(value);
                data[name] = val;
            } else {
                data[name] = value;
            }
        });

        // add lost modified
        data.lastModified = resp.headers.get('Last-Modified');
    }

    return data;
}
/**
 * decorates section background images out of section metadata
 * @param {element} main the container element
 */
function decorateSectionBackgroundImages(main) {
    main.querySelectorAll('div.section-metadata').forEach((sectionMeta) => {
        sectionMeta.querySelectorAll(':scope > div').forEach((row) => {
            if (row.children) {
                const cols = [...row.children];
                if (cols[1]) {
                    const name = toClassName(cols[0].textContent);
                    if (name === 'background') {
                        const pic = cols[1].querySelector('picture');
                        if (pic) {
                            const section = sectionMeta.parentElement;
                            pic.classList.add('bg-image');
                            section.prepend(pic);
                            section.classList.add('has-bg-image');
                            row.remove();
                        }
                    }
                    if (name === 'background-style') {
                        const section = sectionMeta.parentElement;
                        cols[1].textContent.split(',').forEach((pos) => {
                            section.classList.add(`bg-image-${pos.trim().toLowerCase()}`);
                        });
                    }
                }
            }
        });
    });
}

/**
 * Builds accordion blocks from default content
 * @param {Element} main The container element
 */
function buildAccordions(main) {
    const accordionSectionContainers = main.querySelectorAll('.section.accordion');
    accordionSectionContainers.forEach((accordion) => {
        const classes = ['all-expanded', 'first-expanded', 'single-expansion'];
        const accordionOptions = [...accordion.classList].filter((cls) => classes.includes(cls));
        accordion.classList.remove(...accordionOptions);
        const contentWrappers = accordion.querySelectorAll(':scope > div');
        const blockTable = [];
        let row;
        contentWrappers.forEach((wrapper) => {
            let removeWrapper = true;
            [...wrapper.children].forEach((child) => {
                if (child.nodeName === 'H2') {
                    if (row) {
                        blockTable.push(row);
                    }

                    row = [{
                        elems: []
                    }, {
                        elems: []
                    }];
                    row[0].elems.push(child);
                }

                if (!row) {
                    // if there is content in the section before the first h2
                    // then that content is preserved
                    // otherwise, we remove the wrapper
                    removeWrapper = false;
                }
                if (row && child.nodeName !== 'H2') {
                    row[1].elems.push(child);
                }
            });
            if (removeWrapper) wrapper.remove();
        });

        // add last row
        if (row) {
            blockTable.push(row);
        }

        const block = buildBlock('accordion', blockTable);
        block.classList.add(...accordionOptions);
        const wrapper = createElement('div');
        wrapper.append(block);
        accordion.append(wrapper);
        decorateBlock(block);
    });
}

/**
 * perform additional section class decoration
 * @param {Element} main the container element
 */
function decorateSectionsExt(main) {
    const bgClasses = ['has-bg-image', 'teal', 'blue', 'black', 'gray', 'grey'];
    const opacityClasses = ['opacity-100', 'opacity-90', 'opacity-80', 'opacity-70', 'opacity-60', 'opacity-55', 'opacity-50'];
    const allSections = main.querySelectorAll('div.section');
    for (let i = 0; i < allSections.length; i += 1) {
        const section = allSections[i];

        const hasBg = [...section.classList].some((cls) => bgClasses.includes(cls));
        if (hasBg) {
            section.classList.add('has-bg');
        }

        const hasOpacity = [...section.classList].some((cls) => opacityClasses.includes(cls));
        if (hasOpacity) {
            section.classList.add('has-opacity');
        }
        // if the section has a background
        // and the next one does not, then the section gets no bottom margin
        let nextSection;
        if (i <= (allSections.length - 1)) nextSection = allSections[i + 1];
        const thisHasBg = section.querySelector('.locator-results') || section.querySelector('.hero') || [...section.classList].some((cls) => bgClasses.includes(cls));
        if (nextSection) {
            const nextHasBg = [...nextSection.classList].some((cls) => bgClasses.includes(cls));
            if (thisHasBg && nextHasBg) {
                section.classList.add('no-margin');
            }
        } else if (thisHasBg) {
            section.classList.add('no-margin');
        }
    }
}

/**
 * load template css and js.
 * @param {string} template the template to load.
 * @param {element} main the main element to pass to template decorate function
 * @returns promise which resolves to the templates js module if there is one.
 */
async function loadTemplate(templateName) {
    if (!VALID_TEMPLATES.some((t) => t === templateName)) {
        return null;
    }

    try {
        let mod;
        const cssLoaded = new Promise((resolve) => {
            try {
                loadCSS(`${window.hlx.codeBasePath}/templates/${templateName}/${templateName}.css`);
            } catch (error) {
                // eslint-disable-next-line no-console
                console.log(`failed to load styles for ${templateName}`, error);
            }
            resolve();
        });
        const decorationComplete = new Promise((resolve) => {
            (async () => {
                try {
                    mod = await
                    import (`../templates/${templateName}/${templateName}.js`);
                } catch (error) {
                    // eslint-disable-next-line no-console
                    console.log(`failed to load module for ${templateName}`, error);
                }
                resolve();
            })();
        });
        await Promise.all([cssLoaded, decorationComplete]);
        return mod;
    } catch (error) {
        // eslint-disable-next-line no-console
        console.log(`failed to load block ${templateName}`, error);
    }

    return null;
}

const decorateCardSections = (main) => {
    main.querySelectorAll('.section.card').forEach((cardSect) => {
        const newWrapper = createElement('div');
        const contentWrappers = cardSect.querySelectorAll(':scope > div');
        contentWrappers.forEach((wrapper, i) => {
            if (i === 0 && wrapper.classList.contains('default-content-wrapper') && wrapper.querySelector('.bg-image')) {
                const bgImage = wrapper.querySelector('.bg-image');
                const replaceWrapper = createElement('div', {
                    class: 'default-content-wrapper'
                });
                replaceWrapper.append(bgImage);

                const isLanding = toClassName(getMetadata('template')) === 'landing-page';
                if (isLanding) {
                    // when on a landing page and creating a card with bg image
                    // lift the first image out of card as well
                    const logoImage = wrapper.querySelector(':scope > p:first-child > picture, :scope > p:first-child > a > picture');
                    if (logoImage) {
                        replaceWrapper.append(logoImage.closest('p'));
                    }
                }

                cardSect.prepend(replaceWrapper);
            }
            if (!wrapper.classList.contains('logos-wrapper')) {
                newWrapper.append(wrapper);
            }
        });
        const block = buildBlock('card', [
            [newWrapper]
        ]);
        cardSect.append(block);
        decorateBlock(block);

        cardSect.classList.remove('card');
        if (cardSect.classList.contains('box')) {
            block.classList.add('box');
            cardSect.classList.remove('box');
        }
    });
};

async function addPageSchema() {
    // skip error pages or if ld+json already exists
    if (document.querySelector('main.error')) return;
    if (document.querySelector('head > script[type="application/ld+json"]')) return;

    const path = window.location.pathname;
    const pageMeta = await fetchMetadataJson(path);

    const script = document.createElement('script');
    script.setAttribute('type', 'application/ld+json');

    const schemaInfo = {
        '@context': 'http://schema.org/',
    };
    const template = toClassName(getMetadata('template'));
    switch (template) {
        case 'home-page':
            schemaInfo['@type'] = 'WebSite';
            schemaInfo['url'] = 'https://www.stewart.com/',
                schemaInfo['name'] = 'Stewart Title',
                schemaInfo['potentialAction'] = [{
                    '@type': 'SearchAction',
                    'query-input': 'required name=search_term_string',
                    target: {
                        '@type': 'EntryPoint',
                        urlTemplate: 'https://www.stewart.com/en/search-result?q={search_term_string}',
                    },
                }];
            break;
        case 'blog-article-page':
            schemaInfo['@type'] = 'NewsArticle';
            schemaInfo['headline'] = getMetadata('og:title');
            schemaInfo['image'] = [getMetadata('og:image')];
            schemaInfo['datePublished'] = new Date(getMetadata('publication-date')).toISOString();
            schemaInfo['dateModified'] = new Date(pageMeta.lastModified).toISOString();
            schemaInfo['author'] = [{
                '@type': 'Person',
                name: getMetadata('author'),
                //url:'',
            }];
            break;
        default:
            schemaInfo['@type'] = 'WebPage';
            schemaInfo['description'] = getMetadata('description'),
                schemaInfo['url'] = document.querySelector("link[rel='canonical']").href,
                schemaInfo['name'] = document.title;
    }

    script.appendChild(document.createTextNode(
        JSON.stringify(schemaInfo, null, 2),
    ));

    document.querySelector('head').appendChild(script);
}

/**
 * Decorates the main element.
 * @param {Element} main The main element
 */
// eslint-disable-next-line import/prefer-default-export
export async function decorateMain(main, isFragment = false) {
    // hopefully forward compatible button decoration
    wrapImgsInLinks(main);
    decorateIcons(main);
    decorateAndAutoBlockLinks(main);
    autoBlockLinkTargets(main);
    await buildAutoBlocks(main, isFragment);

    const template = toClassName(getMetadata('template'));
    try {
        if (template) {
            // template js, if they exist, must call appropriate auto-blocks on their own
            const templateMod = await loadTemplate(template);
            if (templateMod && templateMod.default) {
                await templateMod.default(main, isFragment);
            }
        }
    } catch (error) {
        // eslint-disable-next-line no-console
        console.error('Auto Blocking failed', error);
    }

    decorateSectionBackgroundImages(main);
    decorateSections(main);
    decorateSectionsExt(main);
    decorateBlocks(main);
    decorateCardSections(main);
    buildAccordions(main);
    buildAutoColumns(main);
    addPageSchema();
}

/**
 * load fonts.css and set a session storage flag
 */
async function loadFonts() {
    await loadCSS(`${window.hlx.codeBasePath}/fonts/fonts.css`);
    try {
        if (!window.location.hostname.includes('localhost')) sessionStorage.setItem('fonts-loaded', 'true');
    } catch (e) {
        // do nothing
    }
}

/**
 * Adds a parameter to the URL.
 * @param {String} key
 * @param {String} value
 */
export function addQueryParamToURL(key, value) {
    const url = new URL(window.location.href);
    url.searchParams.set(key, value);
    window.history.pushState({}, '', url.toString());
}

/**
 * Gets a query param from the URL.
 * @param {String} key
 * @returns {String} the value of the query parameter
 */
export function getQueryParamFromURL(key) {
    const url = new URL(window.location.href);
    return url.searchParams.get(key) || '';
}

export function getPropFromSessionStorageObj(prop, key) {
    const obj = JSON.parse(sessionStorage.getItem(prop));
    return obj && obj[key] ? obj[key] : '';
}

/**
 * Generic debounce function
 */
export const debounce = (func, timeout = 300) => {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            func.apply(this, args);
        }, timeout);
    };
};

function updateTitleSuffix() {
    const suffix = getMetadata('title-suffix');
    if (suffix) {
        const withoutSuffix = document.title.split('|')[0].trim();
        const withsuffix = `${withoutSuffix} | ${suffix}`;
        document.title = withsuffix;
    }
}

export function hasWrapper(el) {
    return !!el.firstElementChild && window.getComputedStyle(el.firstElementChild).display === 'block';
}

/**
 * get the value of a cookie
 * @param {string} name the cookie name
 * @returns the cookie value
 */
export function getCookieValue(name) {
    const cookies = decodeURIComponent(document.cookie);
    let cookieVal = '';
    cookies.split(';').forEach((cookie) => {
        const c = cookie.trim();
        if (c.indexOf(name) === 0) {
            cookieVal = c.substring(name.length + 1, c.length);
        }
    });

    return cookieVal;
}

/**
 * set a new cookie
 * @param {string} name the cookie name
 * @param {string} value the cookie value
 * @param {number} duration the cookie duration in seconds
 */
export function setCookie(name, value, duration) {
    const expires = new Date();
    expires.setTime(expires.getTime() + (duration * 1000));
    const cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
    document.cookie = cookie;
}

/**
 * Loads everything needed to get to LCP.
 * @param {Element} doc The container element
 */
async function loadEager(doc) {
    const gated = getMetadata('gated');
    const {
        isPreview
    } = checkBrowserDomain();
    if (!isPreview && gated) {
        const gateCookie = getCookieValue('stewartpreferred');
        if (gateCookie !== 'stewartpreferred') {
            window.location = `${gated}?refUrl=${window.location.pathname}`;
            return;
        }
    }

    const {
        isKnown
    } = checkBrowserDomain();
    if (!isKnown) {
        try {
            const domainRedirect = await ffetch('/domain-redirects.json').filter((redir) => {
                const {
                    Source
                } = redir;
                const sourceUrl = new URL(Source);
                return sourceUrl.hostname === window.location.hostname;
            }).first();
            if (domainRedirect) {
                window.location = domainRedirect.Destination;
                return;
            }
        } catch (e) {
            // no op
        }
    }

    // client side hash redirect to lowercase
    const {
        hash
    } = window.location;
    if (hash) {
        window.location.hash = hash.toLowerCase();
    }

    // init page lang
    const validLangs = ['en', 'es', 'zh', 'vi', 'ko'];
    let lang = 'en';
    const pathSegments = window.location.pathname.split('/');
    if (pathSegments.length > 1) {
        [, lang] = pathSegments;
    }
    if (!validLangs.includes(lang)) lang = 'en';
    document.documentElement.lang = lang;

    decorateTemplateAndTheme();

    updateTitleSuffix();

    const main = doc.querySelector('main');
    if (main) {
        await decorateMain(main);
        document.body.classList.add('appear');
        await waitForLCP(LCP_BLOCKS);
    }

    try {
        /* if fonts already loaded, load fonts.css */
        if (sessionStorage.getItem('fonts-loaded')) {
            await loadFonts();
        }
    } catch (e) {
        // do nothing
    }
}

/**
 * @returns the global placeholders from the window object.
 */
export function getGlobalPlaceholders() {
    if (!window.placeholders || !window.placeholders.default) {
        console.error('global placeholders not initialized yet.'); // eslint-disable-line no-console
        return {};
    }

    return window.placeholders.default;
}

/**
 * @returns the locale specific placeholders from the window object.
 */
export function getLocalePlaceholders() {
    if (!window.placeholders || !window.placeholders[document.documentElement.lang]) {
        console.error('locale placeholders not initialized yet.'); // eslint-disable-line no-console
        return {};
    }

    return window.placeholders[document.documentElement.lang];
}

/** remove icon names from heading ids */
function rewriteHashLinks(main) {
    const ids = [];
    main.querySelectorAll('h1[id], h2[id], h3[id], h4[id], h5[id], h6[id]').forEach((heading) => {
        const {
            id
        } = heading;
        const icon = heading.querySelector('span.fa-icon[data-icon-name]');
        if (id && icon) {
            const iconName = icon.getAttribute('data-icon-name');
            let newId = id.replace(`${iconName}-`, '');
            if (ids.includes(newId)) {
                newId = `${newId}-${ids.length}`;
            }

            // update refering links to new hash
            document.querySelectorAll(`a[href="${window.location.pathname}#${id}"]`).forEach((link) => {
                link.href = `${window.location.pathname}#${newId}`;
            });

            ids.push(newId);
            heading.id = newId;
        } else {
            ids.push(id);
        }
    });
}

/**
 * Loads everything that doesn't need to be delayed.
 * @param {Element} doc The container element
 */
async function loadLazy(doc) {
    const main = doc.querySelector('main');
    await Promise.allSettled([fetchPlaceholders(), fetchPlaceholders(document.documentElement.lang)]);

    await loadBlocks(main);

    rewriteHashLinks(main);

    const {
        hash
    } = window.location;
    const element = hash ? doc.getElementById(hash.substring(1)) : false;
    if (hash && element) element.scrollIntoView();

    const template = getMetadata('template');
    if (toClassName(template) === 'landing-page') {
        // landing pages get no header or footer
        // this isn't autoblocking in main, so need to do this here
        doc.querySelector('header').remove();
        doc.querySelector('footer').remove();
    } else {
        await loadHeader(doc.querySelector('header'));
        await loadFooter(doc.querySelector('footer'));
    }

    loadCSS(`${window.hlx.codeBasePath}/styles/lazy-styles.css`);
    await loadFonts();

    // add a back to top element
    // this is so authors can link to #top
    const backToTop = createElement('span', {
        class: ['back-to-top', 'visually-hidden'],
        id: 'top',
        'aria-hidden': 'true'
    });
    main.prepend(backToTop);

    sampleRUM('lazy');
    sampleRUM.observe(main.querySelectorAll('div[data-block-name]'));
    sampleRUM.observe(main.querySelectorAll('picture > img'));
}

function sidekickBlockListener(blockName) {
    return () => {
        const blockModal = document.querySelector(`#${blockName}-dialog`);
        if (!blockModal) {
            const block = buildBlock(blockName, '');
            document.querySelector('main').append(block);
            decorateBlock(block);
            loadBlock(block);
        } else {
            window.postMessage({
                sidekickInit: true,
                block: blockName
            }, getOrigin());
        }
    };
}

function initSidekick() {
    let sk = document.querySelector('helix-sidekick');

    const dialogPlugins = ['preflight', 'references'];

    if (sk) {
        dialogPlugins.forEach((plugin) => {
            sk.addEventListener(`custom:${plugin}`, sidekickBlockListener(plugin));
        });
    } else {
        // wait for sidekick to be loaded
        document.addEventListener('helix-sidekick-ready', () => {
            sk = document.querySelector('helix-sidekick');
            dialogPlugins.forEach((plugin) => {
                sk.addEventListener(`custom:${plugin}`, sidekickBlockListener(plugin));
            });
        }, {
            once: true
        });
    }
}

/**
 * Add a listener for clicks outside an element, and execute the callback when they happen.
 * useful for closing menus when they are clicked outside of.
 * @param {Element} elem the element
 * @param {function} callback the callback function
 */
export function addOutsideClickListener(elem, callback) {
    let outsideClickListener;
    const removeClickListener = (() => {
        document.removeEventListener('click', outsideClickListener);
    });
    outsideClickListener = ((event) => {
        if (!elem.contains(event.target)) {
            callback();
            removeClickListener();
        }
    });
    document.addEventListener('click', outsideClickListener);
}

/**
 * Loads everything that happens a lot later,
 * without impacting the user experience.
 */
function loadDelayed() {
    if (window.delayedPromises.length > 0) {
        Promise.all(window.delayedPromises).then(() => {
            // eslint-disable-next-line import/no-cycle
            window.setTimeout(() =>
                import ('./delayed.js'), 3000);
        });
    } else {
        // eslint-disable-next-line import/no-cycle
        window.setTimeout(() =>
            import ('./delayed.js'), 3000);
    }

    // load anything that can be postponed to the latest here
    initSidekick();
}

async function loadPage() {
    await loadEager(document);
    await loadLazy(document);
    loadDelayed();
}

loadPage();