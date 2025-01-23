import {
    createElement
} from '../../scripts/scripts.js';
import {
    loadScript
} from '../../scripts/lib-franklin.js';

const wrapObserver = (block, callback) => {
    const observer = new IntersectionObserver((entries) => {
        if (entries.some((e) => e.isIntersecting)) {
            observer.disconnect();
            callback();
        }
    });
    observer.observe(block);
};

const subscribeToIframeMessage = (iFrame) => {
    window.addEventListener('message', (e) => {
        if (iFrame ? .style.height !== e.data.windowHeight) {
            iFrame.parentElement.style.removeProperty('height');
            iFrame.parentElement.style.removeProperty('padding-bottom');
            iFrame.style.removeProperty('position');
            iFrame.style.height = `${e.data.windowHeight}px`;
        }
    });
};

const defultEmbed = (block, url) => {
    wrapObserver(block, () => {
        const embedDiv = createElement('div', {
            style: 'left: 0; width: 100%; height: 0; position: relative; padding-bottom: 56.25%;',
        }, [
            createElement('iframe', {
                src: url.href,
                style: 'border: 0; top: 0; left: 0; width: 100%; height: 100%; position: absolute;',
                allowfullscreen: '',
                scrolling: 'no',
                allow: 'encrypted-media',
                title: `Content from ${url.hostname}`,
                loading: 'lazy',
                class: 'embed-iframe',
            }),
        ]);
        block.append(embedDiv);
        subscribeToIframeMessage(embedDiv.querySelector('iframe'));
        block.classList.add('embed-is-loaded');
    });
};

const createPlaceholder = (placeholder, clickHandler) => {
    const wrapper = document.createElement('div');
    wrapper.className = 'embed-placeholder';
    wrapper.innerHTML = '<div class="embed-placeholder-play"><button title="Play"></button></div>';
    wrapper.prepend(placeholder);
    wrapper.addEventListener('click', clickHandler);

    return wrapper;
};

const embedYoutube = (block, url, placeholder) => {
    const usp = new URLSearchParams(url.search);

    const parseVideoId = () => {
        const embed = url.pathname;
        let vid = encodeURIComponent(usp.get('v') || embed.split('/').pop());
        if (url.origin.includes('youtu.be')) {
            [, vid] = url.pathname.split('/|\\?');
        }

        return vid;
    };

    const isAutoPlay = usp.get('autoplay') && usp.get('autoplay') === '1';

    const loadYoutube = (autoplay) => {
        const vid = parseVideoId();
        const suffix = autoplay ? '&muted=1&autoplay=1' : '';
        const embed = url.pathname;
        let embedUrl;
        if (vid === 'videoseries') {
            embedUrl = `/embed/videoseries?listType=${usp.get('listType')}&list=${usp.get('list')}${suffix}`;
        } else {
            embedUrl = vid ? `/embed/${vid}?rel=0&v=${vid}${suffix}` : embed;
        }

        return createElement('div', {
            style: 'left: 0; width: 100%; height: 0; position: relative; padding-bottom: 56.25%;',
        }, [
            createElement('iframe', {
                src: `https://www.youtube.com${embedUrl}`,
                style: 'border: 0; top: 0; left: 0; width: 100%; height: 100%; position: absolute;',
                allow: 'autoplay; fullscreen; picture-in-picture; encrypted-media; accelerometer; gyroscope; picture-in-picture',
                allowfullscreen: '',
                scrolling: 'no',
                title: 'Content from Youtube',
                loading: 'lazy',
            }),
        ]);
    };

    if (placeholder) {
        const wrapper = createPlaceholder(placeholder, () => {
            const ytEl = loadYoutube(true);
            block.replaceChildren(ytEl);
        });
        block.append(wrapper);
    } else {
        const section = block.closest('.section');
        // only attempt to create a placeholder from yt preview images
        // when the video is not in a fragment
        if (window.document.body.contains(block) && section) {
            const prevSib = section.previousElementSibling;
            if (!prevSib) {
                // when in first section
                // create placeholder from the yt thumbnail image and load that
                const vid = parseVideoId();
                if (vid && vid !== 'videoseries') {
                    const img = createElement('picture', {}, [
                        createElement('source', {
                            srcset: `https://i.ytimg.com/vi_webp/${vid}/maxresdefault.webp`,
                            media: '(min-width: 600px)',
                            type: 'image/webp',
                        }),
                        createElement('source', {
                            srcset: `https://i.ytimg.com/vi_webp/${vid}/hqdefault.webp`,
                            type: 'image/webp',
                        }),
                        createElement('source', {
                            srcset: `https://i.ytimg.com/vi/${vid}/maxresdefault.jpg`,
                            media: '(min-width: 600px)',
                        }),
                        createElement('source', {
                            srcset: `https://i.ytimg.com/vi/${vid}/hqdefault.jpg`,
                        }),
                        createElement('img', {
                            loading: 'eager',
                            alt: 'Youtube video thumbnail',
                            src: `https://i.ytimg.com/vi/${vid}/hqdefault.jpg`,
                        }),
                    ]);
                    const wrapper = createPlaceholder(img, () => {
                        const ytEl = loadYoutube(true);
                        block.replaceChildren(ytEl);
                    });
                    block.append(wrapper);
                    return;
                }
            }
        }

        wrapObserver(block, () => {
            const ytEl = loadYoutube(isAutoPlay);
            block.replaceChildren(ytEl);
        });
    }
};

const embedVimeo = (block, url, placeholder) => {
    const loadVimeo = (autoplay) => {
        const [, video] = url.pathname.split('/');
        const suffix = autoplay ? '?muted=1&autoplay=1' : '';

        return createElement('div', {
            style: 'left: 0; width: 100%; height: 0; position: relative; padding-bottom: 56.25%;',
        }, [
            createElement('iframe', {
                src: `https://player.vimeo.com/video/${video}${suffix}`,
                style: 'border: 0; top: 0; left: 0; width: 100%; height: 100%; position: absolute;',
                frameborder: '0',
                allow: 'autoplay; fullscreen; picture-in-picture',
                allowfullscreen: '',
                title: 'Content from Vimeo',
                loading: 'lazy',
            }),
        ]);
    };

    if (placeholder) {
        const wrapper = createPlaceholder(placeholder, () => {
            const vimeoEl = loadVimeo(true);
            block.replaceChildren(vimeoEl);
        });
        block.append(wrapper);
    } else {
        wrapObserver(block, () => {
            const vimeoEl = loadVimeo(false);
            block.replaceChildren(vimeoEl);
        });
    }
};

const embedTwitter = (block, url) => {
    wrapObserver(block, () => {
        block.append(createElement('blockquote', {
            class: 'twitter-tweet',
        }, [
            createElement('a', {
                href: url.href,
            }),
        ]));
        loadScript('https://platform.twitter.com/widgets.js');
        block.classList.add('embed-is-loaded');
    });
};

export default function decorate(block) {
    const placeholder = block.querySelector('picture');
    const link = block.querySelector('a').href;
    block.textContent = '';

    const EMBEDS_CONFIG = [{
            match: ['youtube', 'youtu.be'],
            embed: embedYoutube,
        },
        {
            match: ['vimeo'],
            embed: embedVimeo,
        },
        {
            match: ['twitter'],
            embed: embedTwitter,
        },
    ];

    const config = EMBEDS_CONFIG.find((e) => e.match.some((match) => link.includes(match)));
    const url = new URL(link);
    if (config) {
        block.classList.add(`embed-${config.match[0]}`);
        config.embed(block, url, placeholder);
    } else {
        defultEmbed(block, url, placeholder);
    }
}