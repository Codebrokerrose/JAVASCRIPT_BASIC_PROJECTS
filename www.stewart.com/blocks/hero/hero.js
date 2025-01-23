import {
    createElement
} from '../../scripts/scripts.js';
import {
    decorateBlock
} from '../../scripts/lib-franklin.js';

/**
 * decorate the hero
 * @param {Element} block the block
 */
export default function decorate(block) {
    const elementContainer = block.querySelector(':scope > div > div');
    const heroInner = createElement('div', {
        class: 'hero-inner'
    });
    const heroInnerWrapper = createElement('div', {
        class: 'hero-inner-wrapper'
    }, heroInner);
    const pic = elementContainer.querySelector('picture');
    if (pic) {
        const picParent = pic.parentElement;
        pic.classList.add('hero-bg');
        // Add alt element to img if it doesn't exist
        const img = pic.querySelector('img');
        if (img && !img.hasAttribute('alt')) {
            img.setAttribute('alt', '');
        }
        block.append(pic);

        // prevent left behind empty p tag
        if (picParent.tagName === 'P') {
            picParent.remove();
        }
    }

    [...elementContainer.children].forEach((child) => {
        heroInner.append(child);
        if (child.tagName === 'DIV' && child.className !== '' && !child.className.endsWith('-wrapper')) {
            decorateBlock(child);
        }
    });

    const nonBgImages = heroInner.querySelectorAll(':scope > p > picture, :scope > p > a > picture');
    const svgs = heroInner.querySelectorAll('.svg');
    if (nonBgImages.length > 0 || svgs.length > 0) {
        heroInner.classList.add('hero-inner-grid');
        nonBgImages.forEach((nonBgImage) => {
            nonBgImage.closest('p').classList.add('hero-inner-secondary-image');
        });
        svgs.forEach((svg) => {
            svg.classList.add('hero-inner-secondary-image');
        });
    }

    elementContainer.parentElement.remove();
    block.append(heroInnerWrapper);
}