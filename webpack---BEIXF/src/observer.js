import {
    headMeta,
    scriptClass,
    styleClass,
    SELECTORS
} from "./constants";
import {
    Logger
} from "./loggger";

export function observeComponent(BEJSSDKObserver) {
    let observer = void 0;
    let listeners = [];
    let doc = window.document;
    let readySet = [];
    let MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

    if (process.env.CUSTOM && process.env.SPA) {
        /**
         * Polyfill for IE browsers
         * ChildNode.remove()
         */
        [Element.prototype, CharacterData.prototype, DocumentType.prototype].forEach(function(item) {
            if (item.hasOwnProperty('remove')) {
                return;
            }

            Object.defineProperty(item, 'remove', {
                configurable: true,
                enumerable: true,
                writable: true,
                value: function remove() {
                    this.parentNode.removeChild(this);
                }
            });
        });

        BEJSSDKObserver.clean = function() {
            Logger.debug("Clean tags and reset elements for SPA...");
            // remove old meta
            for (let metaKey in headMeta) {
                let metaElement = document.querySelector('meta[name="' + headMeta[metaKey].name + '"]');
                if (metaElement) {
                    metaElement.remove();
                }
            }

            //remove old scripts
            for (let scriptClassKey in scriptClass) {
                let scriptElements = document.getElementsByClassName(scriptClass[scriptClassKey].name);
                if (scriptElements) {
                    for (let i = 0; i < scriptElements.length; i++) {
                        scriptElements[i].remove();
                    }
                }
            }

            //remote old style tags
            for (let styleClassKey in styleClass) {
                let styleElements = document.getElementsByClassName(styleClass[styleClassKey].name);
                if (styleElements) {
                    for (let i = 0; i < styleElements.length; i++) {
                        styleElements[i].remove();
                    }
                }
            }

            // remove other scripts
            let fingerPrint = document.querySelector('[data-id="bec"]');
            if (fingerPrint) {
                fingerPrint.remove();
            }

            let beCtaBar = document.getElementById('bectabarscriptid');
            if (beCtaBar) {
                beCtaBar.remove();
            }

            let beCookieBar = document.getElementById('becookiebarscriptid');
            if (beCookieBar) {
                beCookieBar.remove();
            }

            // reset head and body
            document.head.ready = false;
            document.body.ready = false;
            // reset footer
            let footerElements = doc.querySelectorAll('footer, .footer, #footer');
            if (footerElements) {
                for (let j = 0; j < footerElements.length; j++) {
                    footerElements[j].ready = false;
                }
            }

            let elements = doc.querySelectorAll('.be-ix-link-block');
            for (let i = 0; i < elements.length; i++) {
                elements[i].ready = false;
                elements[i].innerHTML = "";
            }
            listeners = [];
            readySet = [];
            Logger.debug("Clean tags and reset elements for SPA done.");
        };
    }

    function checkSelector(selector, fn) {
        Logger.debug("Check Selector...");
        Logger.debug("Selector: ", selector);
        Logger.debug("Function: ", fn);
        if (selector && selector.length) {
            let elements = doc.querySelectorAll(selector);
            Logger.debug("Elements: ", elements);
            let lb_selectors = SELECTORS.LINK_BLOCK_CONTAINER.selector.split(",");
            for (let i = 0, len = elements.length; i < len; i++) {
                let element = elements[i];
                for (let j = 0; j < readySet.length; j++) {
                    if (readySet[j] === element.className || readySet[j] === element.id) {
                        if (!element.firstChild && lb_selectors.indexOf(selector) >= 0) {
                            fn.call(element, element);
                            Logger.debug("Inserted element", element);
                            Logger.debug("Inserted in selector", selector);
                        }
                        Logger.debug("Return checkSelector because readySet has element", readySet);
                        return;
                    }
                }
                if (element.className) {
                    readySet.push(element.className);
                }
                if (element.id) {
                    readySet.push(element.id);
                }
                if ((!element.firstChild && lb_selectors.indexOf(selector) >= 0) || (!element.ready || MutationObserver == null)) {
                    element.ready = true;
                    fn.call(element, element);
                    Logger.debug("Inserted element", element);
                    Logger.debug("Inserted in selector", selector);
                }
            }
        }
    }

    function checkListeners() {
        listeners.forEach(function(listener) {
            return checkSelector(listener.selector, listener.fn);
        });
    }

    function removeListener(selector, fn) {
        let i = listeners.length;
        while (i--) {
            let listener = listeners[i];
            if (listener.selector === selector && listener.fn === fn) {
                if (selector && selector.firstChild) {
                    listeners.splice(i, 1);
                    if (!listeners.length && observer) {
                        observer.disconnect();
                        observer = null;
                        Logger.debug("RemoveListener: ", selector);
                    }
                }
            }
        }
    }

    /**
     * Fire event on first js selector
     * @param selector string to watch on
     * @param fn       callback function
     */
    BEJSSDKObserver.jsElementReady = function(selector, fn) {
        Logger.debug("JS Element Ready --------------------------------------------");
        if (Logger.debugMode) {
            const beIxLinkBlock = document.getElementsByClassName("be-ix-link-block");
            Logger.debug("Link Block: ", beIxLinkBlock);
        }

        if (MutationObserver != null) {
            if (!observer) {
                observer = new MutationObserver(checkListeners);
                observer.observe(doc.documentElement, {
                    childList: true,
                    subtree: true
                });
            }
            listeners.push({
                selector: selector,
                fn: fn
            });
        } else {
            // <= IE8
            if (!document.addEventListener) {
                document.addEventListener = document.attachEvent;
            }
            document.addEventListener("DOMContentLoaded", function(event) {
                if (selector && selector.length) {
                    let elements = doc.querySelectorAll(selector);
                    for (let i = 0, len = elements.length; i < len; i++) {
                        let element = elements[i];
                        element.ready = true;
                        fn.call(element, element);
                    }
                }
            });
        }

        checkSelector(selector, fn);
        return function() {
            return removeListener(selector, fn);
        };
    };

    return BEJSSDKObserver.jsElementReady;
}