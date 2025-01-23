import {
    readBlockConfig,
    loadScript,
} from '../../scripts/lib-franklin.js';
import {
    createElement,
    decorateIcons,
    wrapImgsInLinks,
    decorateAndAutoBlockLinks,
    checkBrowserDomain,
} from '../../scripts/scripts.js';

function createIconsList(ele) {
    const list = document.createElement('ul');
    list.className = 'icons-wrapper';
    [...ele.children].forEach((icon) => {
        const listItem = document.createElement('li');
        listItem.append(icon.querySelector('a'));
        list.append(listItem);
    });

    return list;
}

function createLinksList(ele) {
    const list = document.createElement('ul');
    list.className = 'links-list';
    [...ele.children].forEach((p) => {
        const listItem = document.createElement('li');
        listItem.append(p.querySelector('a'));
        list.append(listItem);
    });

    return list;
}

/**
 * Load Bright edge links.
 * can't be deferred til delayed because whole purpose of this is SEO, so we do it here
 * since footer is lazy loaded, I'm optimistic this won't kill page speed.
 */
async function loadBrightEdge() {
    await loadScript('https://cdn.bc0a.com/autopilot/f00000000129937/autopilot_sdk.js', {
        type: 'text/javascript',
    });
    if (window.BEJSSDK) {
        const beSdkOpts = {
            'api.endpoint': 'https://ixfd1-api.bc0a.com',
            'sdk.account': 'f00000000186049',
            'whitelist.parameter.list': 'ixf',
        };
        window.BEJSSDK.construct(beSdkOpts);
        window.BEJSSDK.processCapsule();
    }
}

/**
 * loads and decorates the footer
 * @param {Element} block The footer block element
 */
export default async function decorate(block) {
    const cfg = readBlockConfig(block);
    block.textContent = '';

    // fetch footer content
    const domainCheck = checkBrowserDomain();
    const lang = domainCheck.isProd ? document.documentElement.lang : 'en';
    const footerPath = cfg.footer || `/${lang}/footer`;
    const resp = await fetch(`${footerPath}.plain.html`, window.location.pathname.endsWith('/footer') ? {
        cache: 'reload'
    } : {});

    if (resp.ok) {
        const html = await resp.text();

        // decorate footer DOM
        const footer = createElement('div');
        footer.className = 'inner-wrapper';
        footer.innerHTML = html;

        const firstColumn = document.createElement('div');
        firstColumn.className = 'column-1';
        const secondColumn = document.createElement('div');
        secondColumn.className = 'column-2';

        [...footer.children].forEach((ele, index, array) => {
            if (array.length - 1 === index && ele.querySelector('.icon, .fa-icon')) {
                const iconsList = createIconsList(ele);
                secondColumn.append(iconsList);
            } else {
                if (ele.querySelector('picture') && ele.querySelector('a')) {
                    wrapImgsInLinks(ele);
                    ele.className = 'logo';
                }
                if (!ele.querySelector('picture') && ele.querySelector('a')) {
                    const linskList = createLinksList(ele);
                    ele.className = 'links-wrapper';
                    ele.replaceChildren(linskList);
                }
                if (!ele.querySelector('picture') && !ele.querySelector('a')) {
                    ele.className = 'legal-text';
                }
                firstColumn.append(ele);
            }
        });
        footer.replaceChildren(firstColumn, secondColumn);
        decorateIcons(footer);
        decorateAndAutoBlockLinks(footer);
        block.append(footer);

        if (!block.classList.contains('skip-be-ix')) {
            block.prepend(createElement('div', {
                class: 'be-ix-link-block'
            }));
            await loadBrightEdge();
        }
    }
}