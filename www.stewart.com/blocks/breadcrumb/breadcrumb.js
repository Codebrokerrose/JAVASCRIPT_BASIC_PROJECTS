import {
    getMetadata,
    toClassName
} from '../../scripts/lib-franklin.js';
import {
    createElement,
    fetchMetadataJson
} from '../../scripts/scripts.js';

const loadBreadcrumb = async (breadcrumb) => {
    const path = window.location.pathname;
    const pathSegments = path.split('/');

    let sectionLandingFound = false;
    for (let i = pathSegments.length; i > 0; i -= 1) {
        const curPath = pathSegments.slice(0, i).join('/');
        if (curPath === path) {
            const title = getMetadata('navigation-title') || getMetadata('og:title');
            const el = createElement('span', {
                'aria-current': 'page'
            }, title);
            breadcrumb.prepend(el);
        } else {
            // eslint-disable-next-line no-await-in-loop
            const pageMeta = await fetchMetadataJson(curPath);
            const template = toClassName(pageMeta.template);
            if (sectionLandingFound && template !== 'section-landing-page') {
                break;
            }
            if (pageMeta['og:title'] || pageMeta['navigation-title']) {
                // breadcrumb.prepend(createElement('span', { class: 'breadcrumb-separator' }, '>'));
                breadcrumb.prepend(createElement('a', {
                    href: curPath
                }, pageMeta['navigation-title'] || pageMeta['og:title']));
                if ([
                        'market-landing-page',
                        'state-landing-page',
                        'home-page',
                    ].includes(template)) {
                    break;
                } else if (template === 'section-landing-page') {
                    if (sectionLandingFound) {
                        break;
                    } else {
                        sectionLandingFound = true;
                    }
                }
            }
        }
    }
};

export default async function decorate(block) {
    const breadcrumb = createElement('nav', {
        'aria-label': 'Breadcrumb',
    });
    block.innerHTML = '';
    block.append(breadcrumb);

    loadBreadcrumb(breadcrumb).then(() => {
        block.classList.add('appear');
    });
}