import {
    SDKUtils
} from "./sdkutils";
import {
    observeComponent
} from "./observer";
import {
    linkBlockGeneratorComponent
} from "./link-block-generator";
import {
    headMeta,
    scriptClass,
    styleClass,
    SELECTORS
} from "./constants";
import {
    Logger,
    logLevelConstants
} from "./loggger";

let sdkConfig = {};

window.jsElementReady = observeComponent(window.BEJSSDKObserver = window.BEJSSDKObserver || {});

linkBlockGeneratorComponent(window.BELinkBlockGenerator || {});

(function(BEJSSDK) {
    // Private Properties
    let environment = BEJSSDK.ENVIRONMENT_PRODUCTION;
    let capsuleResponse = null;
    let config = null;
    let originalUrl = null;
    let normalizedUrl = null;
    let getCapsuleApiUrl = null;
    let displayCapsuleUrl = null;
    let allowDirectApi = true;
    // lower case the request parameters
    let normalizeRequestParameters = false;

    // XHR handler
    let xhr = null;
    let legacyIE = false;

    // a list of errors that is retained and spewed out in the footer primarily for debugging
    let errorMessages = [];

    // an array of [entry point, time]
    let profileHistory = [];

    BEJSSDK.capsule = null;

    BEJSSDK.startTime = 0;
    BEJSSDK.connectTime = 0;

    BEJSSDK.PRODUCT_NAME = "be_ixf";
    BEJSSDK.CLIENT_NAME = "js_sdk";
    BEJSSDK.CLIENT_VERSION = process.env.SDK_VERSION;
    BEJSSDK.API_VERSION = "1.0.0";

    // Public Properties
    BEJSSDK.ENVIRONMENT_CONFIG = "sdk.environment";
    BEJSSDK.CHARSET_CONFIG = "sdk.charset";
    BEJSSDK.API_ENDPOINT_CONFIG = "api.endpoint";
    BEJSSDK.ACCOUNT_ID_CONFIG = "sdk.account";
    BEJSSDK.CONNECT_TIMEOUT_CONFIG = "sdk.connectTimeout";
    BEJSSDK.SOCKET_TIMEOUT_CONFIG = "sdk.socketTimeout";
    BEJSSDK.CRAWLER_CONNECT_TIMEOUT_CONFIG = "sdk.crawlerConnectTimeout";
    BEJSSDK.CRAWLER_SOCKET_TIMEOUT_CONFIG = "sdk.crawlerSocketTimeout";
    BEJSSDK.LOG_LEVEL_CONFIG = "loglevel";

    BEJSSDK.WHITELIST_PARAMETER_LIST_CONFIG = "whitelist.parameter.list";
    BEJSSDK.FDAPI_PARAMETER_LIST_CONFIG = "forcedirectapi.parameter.list";
    BEJSSDK.REQUESTPARAMETERS_CASEINSENSITIVE_CONFIG = "requestparameters.caseinsensitive";

    BEJSSDK.CRAWLER_USER_AGENTS_CONFIG = "crawler.useragents";

    BEJSSDK.CANONICAL_PROTOCOL_CONFIG = "canonical.protocol";
    BEJSSDK.CANONICAL_HOST_CONFIG = "canonical.host";
    BEJSSDK.CANONICAL_PAGE_CONFIG = "canonical.page";

    // environment definitions
    BEJSSDK.ENVIRONMENT_PRODUCTION = "production";
    BEJSSDK.ENVIRONMENT_STAGING = "staging";
    BEJSSDK.ENVIRONMENT_TESTING = "testing";

    BEJSSDK.DEFAULT_CHARSET = "UTF-8";
    BEJSSDK.DEFAULT_DIRECT_API_ENDPOINT = "https://api.brightedge.com";
    BEJSSDK.DEFAULT_API_ENDPOINT = "https://ixfd2-api.bc0a.com";
    BEJSSDK.DEFAULT_ACCOUNT_ID = "0";
    BEJSSDK.DEFAULT_CONNECT_TIMEOUT = "1000";
    BEJSSDK.DEFAULT_SOCKET_TIMEOUT = "1000";
    BEJSSDK.DEFAULT_CRAWLER_CONNECT_TIMEOUT = "2000";
    BEJSSDK.DEFAULT_CRAWLER_SOCKET_TIMEOUT = "2000";

    // a list of query string parameters that are kept separated by |
    BEJSSDK.DEFAULT_WHITELIST_PARAMETER_LIST = "";
    // a list of query string parameters that are kept separated by |
    BEJSSDK.DEFAULT_FD_PARAMETER_LIST = 'ixf-api|ixf';
    // a list of crawler user agents case insensitive regex, so separate by |
    BEJSSDK.DEFAULT_CRAWLER_USER_AGENTS = "google|bingbot|msnbot|slurp|duckduckbot|baiduspider|yandexbot|sogou|exabot|facebot|ia_archiver|brightedge";
    // request parameters default to case sensitive
    BEJSSDK.DEFAULT_REQUESTPARAMETERS_CASEINSENSITIVE = false;
    // Public Method
    BEJSSDK.construct = function(additionalConfig) {
        BEJSSDK.startTime = new Date().getTime();
        config = {
            [BEJSSDK.ENVIRONMENT_CONFIG]: BEJSSDK.ENVIRONMENT_PRODUCTION,
            [BEJSSDK.API_ENDPOINT_CONFIG]: BEJSSDK.DEFAULT_API_ENDPOINT,
            [BEJSSDK.CHARSET_CONFIG]: BEJSSDK.DEFAULT_CHARSET,
            [BEJSSDK.ACCOUNT_ID_CONFIG]: BEJSSDK.DEFAULT_ACCOUNT_ID,
            [BEJSSDK.CONNECT_TIMEOUT_CONFIG]: BEJSSDK.DEFAULT_CONNECT_TIMEOUT,
            [BEJSSDK.SOCKET_TIMEOUT_CONFIG]: BEJSSDK.DEFAULT_SOCKET_TIMEOUT,
            [BEJSSDK.CRAWLER_CONNECT_TIMEOUT_CONFIG]: BEJSSDK.DEFAULT_CRAWLER_CONNECT_TIMEOUT,
            [BEJSSDK.CRAWLER_SOCKET_TIMEOUT_CONFIG]: BEJSSDK.DEFAULT_CRAWLER_SOCKET_TIMEOUT,
            [BEJSSDK.CRAWLER_USER_AGENTS_CONFIG]: BEJSSDK.DEFAULT_CRAWLER_USER_AGENTS,
            [BEJSSDK.WHITELIST_PARAMETER_LIST_CONFIG]: BEJSSDK.DEFAULT_WHITELIST_PARAMETER_LIST,
            [BEJSSDK.FDAPI_PARAMETER_LIST_CONFIG]: BEJSSDK.DEFAULT_FD_PARAMETER_LIST,
            [BEJSSDK.LOG_LEVEL_CONFIG]: logLevelConstants.WARNING,
            [BEJSSDK.REQUESTPARAMETERS_CASEINSENSITIVE_CONFIG]: BEJSSDK.DEFAULT_REQUESTPARAMETERS_CASEINSENSITIVE,
        };

        config = SDKUtils.simpleAssign(config, additionalConfig);

        // init logger
        Logger.initLogger(parseInt(config[BEJSSDK.LOG_LEVEL_CONFIG]));

        /**
         * Build SDK by Webpack.
         * This section can only be in this file.
         * if custom SDK, we check if Marvel is enabled.
         * if not custom SDK, we use config file and insert Marvel into SDK
         * Note: process.env is required for building SDK by Webpack.
         */
        if (process.env.CUSTOM) {
            if (process.env.MARVEL_ENABLED) {
                const {
                    enableMarvel
                } = require("@brightedge/marvel");
                // get Marvel config
                let marvelConfig = {};
                if (process.env.MARVEL_CONFIG_CONSISTENCY_CUSTOM) {
                    marvelConfig = JSON.parse(process.env.MARVEL_CONFIG_CONSISTENCY_CUSTOM)
                } else {
                    if (process.env.MARVEL_CUSTOMER_ID) {
                        marvelConfig['data-customerid'] = process.env.MARVEL_CUSTOMER_ID;
                    }

                    if (process.env.MARVEL_TEST_MODE) {
                        marvelConfig["data-testmode"] = process.env.MARVEL_TEST_MODE;
                    }
                }
                // get marvel config from script tag
                if (document.currentScript) {
                    const currentScriptAttrs = document.currentScript.attributes;
                    const ignoreAttrs = ['src', 'async', 'defer', 'type'];

                    for (let i = 0; i < currentScriptAttrs.length; i++) {
                        let attr = currentScriptAttrs[i];
                        if (ignoreAttrs.indexOf(attr.nodeName) !== -1) continue;
                        let val = attr.nodeValue;
                        if (val === 'true' || val === 'false') {
                            val = val === 'true';
                        }

                        marvelConfig[attr.nodeName] = val;
                    }
                }

                enableMarvel(marvelConfig);
            }
        } else {
            const {
                enableMarvel
            } = require("@brightedge/marvel");
            let marvelValidAccounts = null;
            if (process.env.MARVEL_API_ACCOUNTS) {
                marvelValidAccounts = JSON.parse(process.env.MARVEL_API_ACCOUNTS);
            } else {
                marvelValidAccounts = require("./marvel-valid-accounts").marvelValidAccounts;
            }

            const accountId = config[BEJSSDK.ACCOUNT_ID_CONFIG];
            if (marvelValidAccounts && marvelValidAccounts.hasOwnProperty(accountId)) {
                enableMarvel(marvelValidAccounts[accountId]);
            }
        }

        originalUrl = document.location.href;

        normalizeRequestParameters = config[BEJSSDK.REQUESTPARAMETERS_CASEINSENSITIVE_CONFIG];

        let parameterDict = SDKUtils.getParameterDictionaryFromUrl(originalUrl);
        if (parameterDict['ixf-endpoint'] != null) {
            allowDirectApi = false;
            if (parameterDict['ixf-endpoint'].endsWith('api.bc0a.com') || parameterDict['ixf-endpoint'].endsWith('brightedge.com')) {
                config[BEJSSDK.API_ENDPOINT_CONFIG] = parameterDict['ixf-endpoint'];
            }
        }

        Logger.debug("SDK config:", config);

        environment = config[BEJSSDK.ENVIRONMENT_CONFIG];
        Logger.debug("force direct api list parameter=" + config[BEJSSDK.FDAPI_PARAMETER_LIST_CONFIG]);
        let whiteListParameter = config[BEJSSDK.WHITELIST_PARAMETER_LIST_CONFIG];
        Logger.debug("white list parameter=" + whiteListParameter);
        let whitelistParameterList = whiteListParameter.split('|');

        // determine the correct timeout to use
        let connectTimeout = config[BEJSSDK.CONNECT_TIMEOUT_CONFIG];
        if (SDKUtils.userAgentMatchesRegex(navigator.userAgent, config[BEJSSDK.CRAWLER_USER_AGENTS_CONFIG])) {
            connectTimeout = config[BEJSSDK.CRAWLER_CONNECT_TIMEOUT_CONFIG];
            Logger.debug("Detected browser using timeout=" + connectTimeout);
        }

        // #1 one construct the canonical URL
        normalizedUrl = SDKUtils.normalizeUrl(originalUrl, whitelistParameterList, normalizeRequestParameters);

        if (config[BEJSSDK.CANONICAL_PAGE_CONFIG]) {
            normalizedUrl = config[BEJSSDK.CANONICAL_PAGE_CONFIG];
        } else if (config[BEJSSDK.CANONICAL_HOST_CONFIG]) {
            Logger.debug("Got in canonical host");
            normalizedUrl = SDKUtils.overrideHostInURL(normalizedUrl, config[BEJSSDK.CANONICAL_HOST_CONFIG]);
        }
        if (config[BEJSSDK.CANONICAL_PROTOCOL_CONFIG]) {
            normalizedUrl = SDKUtils.overrideProtocolInURL(normalizedUrl, config[BEJSSDK.CANONICAL_PROTOCOL_CONFIG]);
        }
        let pageHash = SDKUtils.getPageHash(normalizedUrl);

        // force api key
        if (allowDirectApi) {
            let forceDirectApiListParameterList = config[BEJSSDK.FDAPI_PARAMETER_LIST_CONFIG].split('|');
            for (let key in parameterDict) {
                if (forceDirectApiListParameterList.indexOf(key) !== -1) {
                    config[BEJSSDK.API_ENDPOINT_CONFIG] = 'https://api.brightedge.com';
                    Logger.debug("Using overridden api endpoint");
                    break;
                }
            }
        }

        let apiBase = config[BEJSSDK.API_ENDPOINT_CONFIG];
        let account_id = config[BEJSSDK.ACCOUNT_ID_CONFIG];
        let requestPath = '/api/ixf/' + BEJSSDK.API_VERSION + '/get_capsule/' + account_id + '/' + pageHash;
        getCapsuleApiUrl = apiBase + requestPath + "?client=" + encodeURIComponent(BEJSSDK.CLIENT_NAME) +
            "&client_version=" + encodeURIComponent(BEJSSDK.CLIENT_VERSION) + "&orig_url=" + encodeURIComponent(originalUrl) +
            "&base_url=" + encodeURIComponent(normalizedUrl) + "&user_agent=" + encodeURIComponent(navigator.userAgent);
        Logger.debug("Page_hash normalized_url=" + normalizedUrl + ", page_hash=" + pageHash + ", api_url=" + getCapsuleApiUrl);

        displayCapsuleUrl = apiBase + requestPath;

        if (process.env.DEV) {
            getCapsuleApiUrl = process.env.DEV_DOMAIN + pageHash;
            displayCapsuleUrl = getCapsuleApiUrl;
        }

        // XHR works in Chrome, Firefox, and IE 10 and above
        // IE9/IE8 gives SCRIPT5: Access is denied. see @https://www.leggetter.co.uk/2010/03/12/making-cross-domain-javascript-requests-using-xmlhttprequest-or-xdomainrequest.html

        legacyIE = SDKUtils.isLegacy();

        if (legacyIE) {
            let documentProtocol = document.location.protocol.substring(0, document.location.protocol.length - 1);
            getCapsuleApiUrl = SDKUtils.overrideProtocolInURL(getCapsuleApiUrl, documentProtocol);

            // @see https://developer.mozilla.org/en-US/docs/Web/API/XDomainRequest
            xhr = new window.XDomainRequest();
        } else {
            xhr = new XMLHttpRequest();
        }

        if (BEJSSDK.IS_SPA) {
            xhr.open("GET", getCapsuleApiUrl, false);
            xhr.send(null);
            BEJSSDK.processCapsule(xhr.responseText);
        } else {
            xhr.onload = BEJSSDK.xhrHandler;
            xhr.onerror = BEJSSDK.xhrErrorHandler;
            xhr.open("GET", getCapsuleApiUrl, true);
            // timeout is not supported on IE: SCRIPT5022: InvalidStateError
            // @see https://github.com/stephanebachelier/superapi/issues/5
            xhr.timeout = connectTimeout;
            xhr.send(null);
        }
    };

    // XHR callback to process capsule
    BEJSSDK.xhrHandler = function(xhr_event) {
        if (legacyIE) {
            BEJSSDK.processCapsule(xhr.responseText);
        } else {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    Logger.debug("Get capsule successfully: ", xhr);
                    BEJSSDK.processCapsule(xhr.responseText);
                } else {
                    Logger.warn("Cannot get capsule: ", xhr);
                    addErrorMessage('API request invalid HTTP status=' + xhr.status +
                        ", capsule_url=" + getCapsuleApiUrl);
                }
            }
        }
    };

    // XHR error callback
    BEJSSDK.xhrErrorHandler = function(xhr_event) {
        Logger.warn("Could not get capsule=" + getCapsuleApiUrl + ", error=" + xhr_event.statusText);
        addErrorMessage('API request invalid response=' + xhr.statusText +
            ", capsule_url=" + getCapsuleApiUrl);
    };

    BEJSSDK.processCapsule = function(capsule_response) {
        capsuleResponse = capsule_response;
        // have to put body close fires
        BEJSSDK.connectTime = new Date().getTime() - BEJSSDK.startTime;
        addToProfileHistory("constructor", BEJSSDK.connectTime);

        try {
            BEJSSDK.capsule = JSON.parse(capsuleResponse);
        } catch (err) {
            addErrorMessage("Invalid JSON capsule_url=" + getCapsuleApiUrl + ", error_msg=" + err.message);
            return
        }

        if (BEJSSDK.capsule.config.page_groups) {
            // get page_type based on normalized_url and set page_group_nodes for capsule
            let pageGroupConfig = BEJSSDK.capsule.config.page_groups;
            try {
                let pageGroup = SDKUtils.derivePageGroup(normalizedUrl, pageGroupConfig);
                Logger.debug("page group is " + pageGroup);
                // set page_group
                BEJSSDK.capsule.page_group = pageGroup;

                let page_group_nodes = BEJSSDK.getPageGroupNodes(pageGroup);
                BEJSSDK.setPageGroupNodes(page_group_nodes);
            } catch (err) {
                addErrorMessage("Exception occurred while getting page group" + ", error_msg=" + err.message);
                return
            }
        }

        // Add page group nodes into the nodes
        let hasBodyOpenNode = false;
        if (BEJSSDK.capsule.page_group_nodes) {
            for (let pgNodeIndex = 0; pgNodeIndex < BEJSSDK.capsule.page_group_nodes.length; pgNodeIndex++) {
                let pgNode = BEJSSDK.capsule.page_group_nodes[pgNodeIndex];
                let pgNodeType = pgNode.type;
                let pgFeatureGroup = pgNode.feature_group;
                let overrideNode = false;

                // override node with page_group_node if it exists
                for (let capsuleIndex = 0; capsuleIndex < BEJSSDK.capsule.nodes.length; capsuleIndex++) {
                    let node = BEJSSDK.capsule.nodes[capsuleIndex];
                    if (pgFeatureGroup === node.feature_group && node.type === pgNodeType) {
                        BEJSSDK.capsule.nodes[capsuleIndex] = pgNode;
                        overrideNode = true;
                        break;
                    }
                }

                if (!overrideNode) {
                    BEJSSDK.capsule.nodes.push(pgNode);
                }
            }
        }
        // process nodes
        for (let capsuleIndex = 0; capsuleIndex < BEJSSDK.capsule.nodes.length; capsuleIndex++) {
            let node = BEJSSDK.capsule.nodes[capsuleIndex];
            let nodeType = node.type;
            let featureGroup = node.feature_group;

            // JS sdk uses non_script_content rather than content
            // since JS content needs to be separated out
            let content = "";
            if (node.non_script_content) {
                content = node.non_script_content;
            }
            let scriptContent = node.script_content;
            let nodePublishingEngine = node.publishing_engine;
            let nodeEngineVersion = node.engine_version;
            let nodeDatePublished = node.date_published;
            let metaString = null;
            if (node.metaString) {
                metaString = node.meta_string;
            }
            addErrorMessage("Adding selector index=" + capsuleIndex + " node=" + nodeType + "/" + featureGroup);

            if (process.env.CUSTOM && process.env.CONTENT_ONLY) {
                content = node.content;
                scriptContent = "";
            }

            if (nodeType === 'bodystr' && featureGroup === '_body_open') {
                Logger.debug("Adding selector for index=" + capsuleIndex + " node=" + nodeType + "/" + featureGroup);
                BEJSSDKObserver.jsElementReady(
                    'body',
                    wrapContentFunction(
                        function updateBody(
                            bodySelector,
                            content,
                            scriptContent,
                            nodePublishingEngine,
                            nodeEngineVersion,
                            nodeType,
                            metaString,
                        ) {
                            if (process.env.CUSTOM && process.env.CONTENT_ONLY) {
                                if (content && content.length > 0) {
                                    const beLinkBlockContainers = document.querySelectorAll(SELECTORS.LINK_BLOCK_CONTAINER.selector);

                                    if (beLinkBlockContainers && beLinkBlockContainers.length !== 0) {
                                        beLinkBlockContainers[0].innerHTML = content;
                                    }
                                }
                            } else {
                                if (content && content.length > 0) {
                                    content = content.replace('<style>', '<style class="' + styleClass.LINK_STYLE.name + '">').trim();
                                    bodySelector.insertAdjacentHTML('afterbegin', content);
                                }
                                if (scriptContent && scriptContent.length > 0) {
                                    insertNewScript(scriptContent, bodySelector, scriptClass.BODY.name);
                                }
                                hasBodyOpenNode = true;
                            }
                            // show node specific messages in debugMode only
                            if (Logger.debugMode) {
                                insertAdornment(
                                    bodySelector,
                                    true,
                                    nodePublishingEngine,
                                    nodeEngineVersion,
                                    nodeType,
                                    metaString,
                                    nodeDatePublished,
                                );
                                insertBodyClose(bodySelector);
                            }
                        },
                        content,
                        scriptContent,
                        nodePublishingEngine,
                        nodeEngineVersion,
                        nodeType,
                        metaString,
                        nodeDatePublished,
                    )
                );
            } else if (nodeType === 'headstr' && featureGroup === '_head_open') {
                Logger.debug("Adding selector for index=" + capsuleIndex + " node=" + nodeType + "/" + featureGroup);
                BEJSSDKObserver.jsElementReady(
                    'head',
                    wrapContentFunction(
                        function updateHead(
                            headSelector,
                            content,
                            scriptContent,
                            nodePublishingEngine,
                            nodeEngineVersion,
                            nodeType,
                            metaString,
                        ) {
                            let addAdornment = false;
                            let metaAdded = false;
                            let head_meta = getHeadOpenDiagString();

                            if (!legacyIE) {
                                if (content && content.length > 0) {
                                    // post-pend otherwise causes some issues on sites like udemy
                                    content = content.replace('<style>', '<style class="' + styleClass.LINK_STYLE.name + '">').trim();
                                    headSelector.insertAdjacentHTML('beforeend', content);
                                    if (!metaAdded) {
                                        headSelector.insertAdjacentHTML('beforeend', head_meta);
                                        metaAdded = true;
                                    }
                                    Logger.debug("Loading head content...");
                                    addAdornment = true;
                                }
                            } else {
                                // legacyIE doesn't support changing head's innerhtml
                                // head content is always style
                                let normalizedContent = content.replace('<style>', '').trim();
                                if (normalizedContent.length > 0) {
                                    let styleSelector = document.createElement('style');
                                    styleSelector.classList.add(styleClass.LINK_STYLE.name);
                                    styleSelector.innerHTML = normalizedContent + "\n";
                                    headSelector.appendChild(styleSelector);
                                    addAdornment = true;
                                }
                            }

                            if (scriptContent && scriptContent.length > 0) {
                                insertNewScript(scriptContent, headSelector, scriptClass.HEAD.name);
                                let head_meta = getHeadOpenDiagString();
                                if (!metaAdded) {
                                    headSelector.insertAdjacentHTML('beforeend', head_meta);
                                    metaAdded = true;
                                }
                                Logger.debug("Loading script_content...");
                                addAdornment = true;
                            }
                            if (addAdornment) {
                                insertAdornment(
                                    headSelector,
                                    false,
                                    nodePublishingEngine,
                                    nodeEngineVersion,
                                    nodeType,
                                    metaString,
                                    nodeDatePublished,
                                );
                            }
                        },
                        content,
                        scriptContent,
                        nodePublishingEngine,
                        nodeEngineVersion,
                        nodeType,
                        metaString,
                        nodeDatePublished,
                    )
                );
            } else {
                Logger.debug("Skipping non-implicit and unspecified explict selector for index=" + capsuleIndex + " node=" + nodeType + "/" + featureGroup);
            }
        }
        // if body open node is not generated force body close call
        if (!hasBodyOpenNode && Logger.debugMode) {
            BEJSSDKObserver.jsElementReady(
                'body',
                wrapContentFunction(
                    function updateBody(bodySelector) {
                        insertBodyClose(bodySelector);
                    }
                )
            );
        }
    };


    BEJSSDK.getNodes = function() {
        return BEJSSDK.capsule.nodes;
    };

    BEJSSDK.getPageGroupNodes = function(pageGroup) {
        return BEJSSDK.capsule.page_group_nodes[pageGroup];
    };

    BEJSSDK.setPageGroupNodes = function(pgNodesArray) {
        BEJSSDK.capsule.page_group_nodes = pgNodesArray;
    };

    BEJSSDK.getPageGroupNodesConfig = function() {
        return BEJSSDK.capsule.config.page_group_nodes;
    };

    /**
     * Insert a brand new script
     * (use this to work around innerHTML not executing
     */
    function insertNewScript(scriptContent, targetSelector, className = '') {
        let s = document.createElement('script');
        s.type = 'text/javascript';
        s.textContent = scriptContent;
        if (className) {
            s.classList.add(className);
        }

        targetSelector.appendChild(s);
    }

    function getHeadOpenDiagString() {
        let sb = SDKUtils.createCommentScript("be_ixf, sdk, gho", true);
        let pageHideOriginalUrl = false;
        if (BEJSSDK.PAGE_HIDE_ORIGINALURL && !Logger.debugMode) {
            pageHideOriginalUrl = SDKUtils.getBooleanValue(BEJSSDK.PAGE_HIDE_ORIGINALURL);
        }
        sb += "\n<meta name=\"" + headMeta.SDK.name + "\" content=\"" + BEJSSDK.CLIENT_NAME + "_" + BEJSSDK.CLIENT_VERSION + "\" />";

        let sdkType = 'global';
        if (process.env.CUSTOM) {
            sdkType = 'custom';
        }

        sb += "\n<meta name=\"" + headMeta.SDK_TYPE.name + "\" content=\"" + sdkType + "\" />";

        if (BEJSSDK.IS_SPA) {
            sb += "\n<meta name=\"" + headMeta.IS_SPA.name + "\" content=\"" + true + "\" />";
        }

        if (process.env.CONTENT_ONLY) {
            sb += "\n<meta name=\"" + headMeta.CONTENT_ONLY.name + "\" content=\"" + true + "\" />";
        }

        sb += "\n<meta name=\"" + headMeta.TIMER.name + "\" content=\"" + BEJSSDK.connectTime + "ms\" />";
        if (!pageHideOriginalUrl) {
            sb += "\n<meta name=\"" + headMeta.ORIG_URL.name + "\" content=\"" + SDKUtils.htmlEntities(originalUrl) + "\" />";
        }
        sb += "\n<meta name=\"" + headMeta.NORM_URL.name + "\" content=\"" + SDKUtils.htmlEntities(normalizedUrl) + "\" />";
        sb += "\n<meta name=\"" + headMeta.CAPSULE_URL.name + "\" content=\"" + SDKUtils.htmlEntities(displayCapsuleUrl) + "\" />";
        if (BEJSSDK.capsule != null) {
            sb += "\n<meta name=\"" + headMeta.API_DT.name + "\" content=\"" + SDKUtils.convertToNormalizedGoogleIndexTimeZone(BEJSSDK.capsule.date_created, "p") + "\" />";
            sb += "\n<meta name=\"" + headMeta.MOD_DT.name + "\" content=\"" + SDKUtils.convertToNormalizedGoogleIndexTimeZone(BEJSSDK.capsule.date_created, "p") + "\" />";
        }
        let hasErrorMessages = errorMessages.length > 0 ? "true" : "false";
        sb += "\n<meta name=\"" + headMeta.MESSAGES.name + "\" content=\"" + hasErrorMessages + "\" />";
        return sb;
    }

    function addErrorMessage(msg) {
        errorMessages.push(msg);
    }

    function addToProfileHistory(item, elapsedTime) {
        profileHistory.push([item, elapsedTime]);
    }

    function insertAdornment(
        element,
        isBodyOpen,
        nodePublishingEngine,
        nodeEngineVersion,
        nodeType,
        metaString,
        datePublished
    ) {
        if (process.env.DISABLE_DEBUG_ELEMENTS) {
            return;
        }

        if (isBodyOpen) {
            // add body open comments
            let openComment = SDKUtils.createCommentScript("be_ixf, bodystr, _body_opens");
            element.appendChild(openComment);

            let capsuleUl = document.createElement('ul');
            capsuleUl.setAttribute('id', 'be_sdkms_capsule');
            capsuleUl.setAttribute('style', 'display:none!important');

            let capsuleIndexTimeLi = document.createElement('li');
            capsuleIndexTimeLi.setAttribute('id', 'be_sdkms_capsule_index_time');
            capsuleIndexTimeLi.innerHTML = SDKUtils.convertToNormalizedGoogleIndexTimeZone(new Date().getTime(), "i");
            capsuleUl.appendChild(capsuleIndexTimeLi);

            if (BEJSSDK.capsule != null) {
                let publishingEngine = BEJSSDK.capsule.publishing_engine;
                let capsuleVersion = BEJSSDK.capsule.capsule_version;
                let capsuleLine = publishingEngine + "; " + publishingEngine + "_" + capsuleVersion;

                let capsulePublisherLi = document.createElement('li');
                capsulePublisherLi.setAttribute('id', 'be_sdkms_capsule_pub');
                capsulePublisherLi.innerHTML = capsuleLine;
                capsuleUl.appendChild(capsulePublisherLi);

                let capsuleModifiedLi = document.createElement('li');
                capsuleModifiedLi.setAttribute('id', 'be_sdkms_capsule_date_modified');
                capsuleModifiedLi.innerHTML = SDKUtils.convertToNormalizedGoogleIndexTimeZone(BEJSSDK.capsule.date_published, "p");
                capsuleUl.appendChild(capsuleModifiedLi);
            }
            // insert as first thing
            element.insertBefore(capsuleUl, element.firstChild);
        }

        // body string is html
        // otherwise it is comments
        let nodePublisherLine = nodePublishingEngine + "; " +
            nodePublishingEngine + "_" +
            nodeEngineVersion + "; " +
            nodeType;
        if (metaString != null) {
            nodePublisherLine = nodePublisherLine + "; " + metaString;
        }
        let nodePublishedDate = SDKUtils.convertToNormalizedTimeZone(datePublished, "p");
        if (nodeType === 'bodystr') {
            if (Logger.debugMode) {
                let nodeUl = document.createElement('ul');
                nodeUl.setAttribute('id', 'be_sdkms_node');
                nodeUl.setAttribute('style', 'display:none!important');

                let nodePublisherLi = document.createElement('li');
                nodePublisherLi.setAttribute('class', 'be_sdkms_pub');
                nodePublisherLi.innerHTML = nodePublisherLine;
                nodeUl.appendChild(nodePublisherLi);

                let nodeModifiedLi = document.createElement('li');
                nodeModifiedLi.setAttribute('class', 'be_sdkms_date_modified');
                nodeModifiedLi.innerHTML = nodePublishedDate;
                nodeUl.appendChild(nodeModifiedLi);

                element.appendChild(nodeUl);
            }
            const bodyComment = SDKUtils.createCommentScript("be_ixf, bodystr");
            element.appendChild(bodyComment);
        } else {
            if (!legacyIE) {
                let commentString = "be_sdkms_pub: " + nodePublisherLine + "\n";
                commentString += "be_sdkms_date_modified: " + nodePublishedDate + "\n";

                let scriptCommentString = SDKUtils.createCommentScript(commentString, true);
                element.insertAdjacentHTML('beforeend', scriptCommentString);
            }
        }
    }

    // insert the body close section at the end of body
    function insertBodyClose(bodySelector) {
        if (process.env.DISABLE_DEBUG_ELEMENTS) {
            return;
        }
        // body close debug info
        let closeComment = SDKUtils.createCommentScript("be_ixf, sdk, is");
        bodySelector.appendChild(closeComment);

        let capsuleUl = document.createElement('ul');
        capsuleUl.setAttribute('id', 'be_sdkms_capsule');
        capsuleUl.setAttribute('style', 'display:none!important');
        // move out capsule messages
        if (errorMessages.length > 0) {
            let capsuleMessageUl = document.createElement('ul');
            capsuleMessageUl.setAttribute('id', 'be_sdkms_capsule_messages');
            for (let errorIndex = 0; errorIndex < errorMessages.length; errorIndex++) {
                let errorMessage = errorMessages[errorIndex];
                capsuleMessageUl.innerHTML = capsuleMessageUl.innerHTML + "<!-- ixf_msg: " + errorMessage + " -->\n";
            }
            capsuleUl.appendChild(capsuleMessageUl);
        }

        let capsuleConfigLi = document.createElement('li');
        capsuleConfigLi.setAttribute('id', 'be_sdkms_configuration');
        capsuleConfigLi.innerHTML = JSON.stringify(config);
        capsuleUl.appendChild(capsuleConfigLi);

        let capsulePageGroupLi = document.createElement('li');
        capsulePageGroupLi.setAttribute('id', 'be_sdkms_page_group');
        if (BEJSSDK.capsule.page_group) {
            capsulePageGroupLi.innerHTML = JSON.stringify(BEJSSDK.capsule.page_group);
        }
        capsuleUl.appendChild(capsulePageGroupLi);

        let capsuleResponseLi = document.createElement('li');
        capsuleResponseLi.setAttribute('id', 'be_sdkms_capsule_response');
        capsuleResponseLi.innerHTML = btoa(capsuleResponse);
        capsuleUl.appendChild(capsuleResponseLi);

        let capsuleProfileLi = document.createElement('li');
        capsuleProfileLi.setAttribute('id', 'be_sdkms_capsule_profile');

        for (let profileIndex = 0; profileIndex < profileHistory.length; profileIndex++) {
            let profileItem = profileHistory[profileIndex];
            let profileItemLi = document.createElement('li');
            profileItemLi.setAttribute('id', profileItem[0]);
            profileItemLi.setAttribute('time', profileItem[1]);
            capsuleProfileLi.appendChild(profileItemLi);
        }
        capsuleUl.appendChild(capsuleProfileLi);
        bodySelector.appendChild(capsuleUl);
    }

    function wrapContentFunction(fn) {
        let retainedArgumentsArray = Array.prototype.slice.call(arguments, 1);
        return function(element) {
            let newArgsArray = [element].concat(retainedArgumentsArray);
            return fn.apply(this, newArgsArray);
        };
    }

    // custom SDK activate
    if (process.env.CUSTOM) {
        if (process.env.SDK_ACCOUNT_ID) {
            sdkConfig[BEJSSDK.ACCOUNT_ID_CONFIG] = process.env.SDK_ACCOUNT_ID;
        }

        if (process.env.SDK_WHITELIST) {
            sdkConfig[BEJSSDK.WHITELIST_PARAMETER_LIST_CONFIG] = process.env.SDK_WHITELIST;
        }

        if (process.env.SDK_CANONICAL_PROTOCOL) {
            sdkConfig[BEJSSDK.CANONICAL_PROTOCOL_CONFIG] = process.env.SDK_CANONICAL_PROTOCOL;
        }

        if (process.env.SDK_CANONICAL_HOST) {
            sdkConfig[BEJSSDK.CANONICAL_HOST_CONFIG] = process.env.SDK_CANONICAL_HOST;
        }

        if (process.env.SDK_LOG_LEVEL) {
            sdkConfig[BEJSSDK.LOG_LEVEL_CONFIG] = process.env.SDK_LOG_LEVEL;
        }

        if (process.env.SDK_REQUEST_PARAMETERS_CASE_SENSITIVE) {
            sdkConfig[BEJSSDK.REQUESTPARAMETERS_CASEINSENSITIVE_CONFIG] = process.env.SDK_REQUEST_PARAMETERS_CASE_SENSITIVE;
        }

        window.BEJSSDK.construct(sdkConfig);
    }
}(window.BEJSSDK = window.BEJSSDK || {}));

if (process.env.CUSTOM && process.env.SPA) {
    window.BEJSSDK.IS_SPA = true;
    history.pushState = function(f) {
        return function pushState() {
            let ret = f.apply(this, arguments);
            window.BEJSSDKObserver.clean();
            window.BEJSSDK.construct(sdkConfig);
            return ret;
        };
    }(history.pushState);

    window.addEventListener('popstate', function(e) {
        window.BEJSSDKObserver.clean();
        window.BEJSSDK.construct(sdkConfig);
    });
}