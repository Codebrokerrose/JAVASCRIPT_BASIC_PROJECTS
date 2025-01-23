import {
    scriptClass
} from "./constants";

const url = require("url");

function pad(num, size) {
    let s = num + "";
    while (s.length < size) {
        s = "0" + s;
    }
    return s;
}

export class SDKUtils {
    static getPageHash(pageUrl) {
        let hash = 0;

        if (pageUrl === null || pageUrl.length === 0) {
            return hash;
        }

        for (let i = 0; i < pageUrl.length; i++) {
            let charCode = pageUrl.charCodeAt(i);
            hash = ((hash << 5) - hash) + charCode;
            hash = hash & hash; // Convert to 32bit integer
        }

        // if hash is a negative number, remove '-' and append '0' in front
        if (hash < 0) {
            hash = "0" + (-hash);
        } else {
            hash = "" + hash;
        }

        return hash;
    }

    static getBooleanValue(value) {
        if (value === undefined || value == null) {
            return false;
        }

        value = value.toLowerCase();

        return value === "1" || value === "true" || value === "on" || value === "t";
    }

    static normalizeUrl(originalUrl, whitelistParameters, normalizeRequestKeys) {
        const urlObject = url.parse(originalUrl, true);
        // www.valuemyweb.com
        let hostname = urlObject.hostname;
        // http:
        let protocol = urlObject.protocol;
        // ""
        let port = urlObject.port;
        // "/exclude/js-sdk-test.php"

        if (port === null ||
            (protocol === "http:" && port === "80") ||
            (protocol === "https:" && port === "443")) {
            port = "";
        } else {
            port = ":" + port;
        }

        let path = urlObject.pathname;
        let queryDict = urlObject.query;

        let keys = Object.keys(queryDict).sort();
        let queryStringList = [];
        if (keys.length > 0) {
            for (let keyIndex = 0; keyIndex < keys.length; keyIndex++) {
                let key = keys[keyIndex];
                let normalizedKey = key;
                if (normalizeRequestKeys) {
                    normalizedKey = key.toLowerCase();
                }
                if (!whitelistParameters || whitelistParameters.indexOf(normalizedKey) === -1) {
                    continue;
                }

                if (Array.isArray(queryDict[key])) {
                    let sortedValues = queryDict[key].sort();
                    for (let i = 0; i < sortedValues.length; i++) {
                        queryStringList.push(normalizedKey + "=" + encodeURIComponent(sortedValues[i]));
                    }
                } else {
                    let value = encodeURIComponent(queryDict[key]);
                    queryStringList.push(normalizedKey + "=" + value);
                }
            }
        }

        if (queryStringList.length > 0) {
            let queryString = queryStringList.join("&");
            return protocol + "//" + hostname + port + path + "?" + queryString;
        } else {
            return protocol + "//" + hostname + port + path;
        }
    }

    // get a parameter dictionary from url
    static getParameterDictionaryFromUrl(originalUrl) {
        return url.parse(originalUrl, true).query;
    }

    static overrideHostInURL(originalUrl, canonicalHost) {
        let parts = canonicalHost.split(":");
        let canonicalPort = -1;

        if (parts.length === 2) {
            canonicalHost = parts[0];
            canonicalPort = parts[1];
        }
        const urlObject = url.parse(originalUrl, true);
        let protocol = urlObject.protocol;

        urlObject.hostname = canonicalHost;
        // url format uses host rather than hostname:port
        urlObject.host = canonicalHost;

        if (canonicalPort > -1) {
            if (!((protocol === "http:" && canonicalPort === "80") ||
                    (protocol === "https:" && canonicalPort === "443"))) {
                urlObject.port = canonicalPort.toString();
                urlObject.host = urlObject.host + ":" + canonicalPort;
            }
        }

        return url.format(urlObject);
    }

    static overrideProtocolInURL(originalUrl, protocol) {
        const urlObject = url.parse(originalUrl, true);
        urlObject.protocol = protocol + ":";
        return url.format(urlObject);
    }

    static userAgentMatchesRegex(userAgent, userAgentRegexPattern) {
        let userAgentRegex = new RegExp(userAgentRegexPattern, "gi");
        return userAgentRegex.test(userAgent);
    }


    static isDaylightSavings(day, month, dow) {
        // month [1,12]
        // dow [0,6]

        // January, february, and december are out.
        if (month < 3 || month > 11) {
            return false;
        }
        // April to October are in
        if (month > 3 && month < 11) {
            return true;
        }
        let previousSunday = day - dow;
        // In march, we are DST if our previous sunday was on or after the 8th.
        if (month === 3) {
            return previousSunday >= 8;
        }
        // In november we must be before the first sunday to be dst.
        // That means the previous sunday must be before the 1st.
        return previousSunday <= 0;
    }

    static convertToNormalizedGoogleIndexTimeZone(epochMilliseconds, prefix) {
        // get date in current location
        let local_date = new Date(epochMilliseconds);

        // convert to target timestamp
        let offset = -8; // standard PST offset
        let targetTimestamp = local_date.getTime() + (local_date.getTimezoneOffset() * 60000);
        let targetDate = new Date(targetTimestamp + (3600000 * offset));

        if (SDKUtils.isDaylightSavings(targetDate.getDate(), targetDate.getMonth() + 1, targetDate.getDay())) {
            offset = -7; // PDT offset
            targetDate = new Date(targetTimestamp + (3600000 * offset));
        }

        return prefix + "y_" + targetDate.getFullYear() + "; " +
            prefix + "m_" + pad(targetDate.getMonth() + 1, 2) + "; " +
            prefix + "d_" + pad(targetDate.getDate(), 2) + "; " +
            prefix + "h_" + pad(targetDate.getHours(), 2) + "; " +
            prefix + "mh_" + pad(targetDate.getMinutes(), 2) + "; " +
            prefix + "_epoch:" + epochMilliseconds;
    }

    static convertToNormalizedTimeZone(epochMilliseconds, prefix) {
        // get date in current location
        let local_date = new Date(epochMilliseconds);

        // convert to target timestamp
        let offset = -8; // standard PST offset
        let targetTimestamp = local_date.getTime() + (local_date.getTimezoneOffset() * 60000);
        let targetDate = new Date(targetTimestamp + (3600000 * offset));

        if (SDKUtils.isDaylightSavings(targetDate.getDate(), targetDate.getMonth() + 1, targetDate.getDay())) {
            offset = -7; // PDT offset
            targetDate = new Date(targetTimestamp + (3600000 * offset));
        }

        return prefix + "_tstr:" + targetDate.toString() + "; " + prefix + "_epoch:" + epochMilliseconds;
    }

    static matchIncludeRules(includeRules, normalizedUrl) {
        for (let ruleIndex = 0; ruleIndex < includeRules.length; ruleIndex++) {
            let regex = RegExp(includeRules[ruleIndex]);
            if (regex.test(normalizedUrl)) {
                return true;
            }
        }
        return false;
    }

    static derivePageGroup(normalizedUrl, pageGroupConfig) {
        for (let pgIndex = 0; pgIndex < pageGroupConfig.length; pgIndex++) {
            let includeRules = pageGroupConfig[pgIndex]["include_rules"];
            let excludeRules = pageGroupConfig[pgIndex]["exclude_rules"];
            let ruleName = pageGroupConfig[pgIndex]["name"];

            if (excludeRules) {
                // scan through the exclude rules first
                let excludeMatch = false;
                for (let ruleIndex = 0; ruleIndex < excludeRules.length; ruleIndex++) {
                    let regex = RegExp(excludeRules[ruleIndex]);
                    if (regex.test(normalizedUrl)) {
                        excludeMatch = true;
                        break;
                    }
                }
                // check the include rules only if exclude rules don't match
                if (!excludeMatch) {
                    if (SDKUtils.matchIncludeRules(includeRules, normalizedUrl)) {
                        return ruleName;
                    }
                }
            } else {
                if (SDKUtils.matchIncludeRules(includeRules, normalizedUrl)) {
                    return ruleName;
                }
            }
        }
        return null;
    }

    /**
     * Simple implementation of Object.assign()
     * @param target: original object
     * @param source: additional object
     * @returns merged object
     */
    static simpleAssign(target, source) {
        if (source !== null && source !== undefined) {
            for (let key in source) {
                if (source.hasOwnProperty(key)) {
                    target[key] = source[key];
                }
            }

            return target;
        }
    }

    static isLegacy() {
        let iev = 0;
        let ieOldRegex = /MSIE (\d+\.\d+)/;
        let ieOld = ieOldRegex.test(navigator.userAgent);
        let trident = !!navigator.userAgent.match(/Trident\/7.0/);
        let rv = navigator.userAgent.indexOf("rv:11.0");

        if (ieOld) {
            let match = ieOldRegex.exec(navigator.userAgent);
            iev = match[1];
        }
        if (navigator.appVersion.indexOf("MSIE 10") !== -1) iev = 10;
        if (trident && rv !== -1) iev = 11;

        return iev !== 0 && iev < 10;
    }

    static htmlEntities(str) {
        return String(str)
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;");
    }

    static createCommentScript(commentContent, strType = false) {
        let commentElement = document.createElement("script");
        commentElement.type = "be:comment";
        let content = "\n /*\n";
        content += " " + commentContent + "\n";
        content += "*/\n";
        commentElement.innerHTML = content;
        commentElement.classList.add(scriptClass.COMMENT.name);
        if (strType) {
            return commentElement.outerHTML;
        }
        return commentElement;
    }
}