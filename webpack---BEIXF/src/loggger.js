import {
    SDKUtils
} from "./sdkutils";

export const logLevelConstants = {
    DEBUG: 0,
    INFO: 1,
    WARNING: 2,
    ERROR: 3,
    FATAL: 4
};

export const Logger = {
    debugMode: false,
    logLevel: logLevelConstants.WARNING,

    initLogger: function(loggerLevel = logLevelConstants.WARNING) {
        if (!isNaN(loggerLevel)) {
            this.logLevel = loggerLevel;
        }

        // debugMode
        const originalUrl = document.location.href;
        const parameters = SDKUtils.getParameterDictionaryFromUrl(originalUrl);
        if (parameters['ixf-debug']) {
            this.debugMode = SDKUtils.getBooleanValue(parameters['ixf-debug']);
        }

        if (this.debugMode) {
            this.logLevel = logLevelConstants.DEBUG;
        }
    },

    log: function(msg, msgLogLevel, object = null) {
        if (msgLogLevel < this.logLevel) {
            return;
        }

        if (typeof window.console !== "undefined") {
            console.log(msg);
            if (object) {
                console.log(object);
            }
        }
    },

    info: function(msg, object = null) {
        return this.log("[INFO] " + msg, logLevelConstants.INFO, object);
    },

    debug: function(msg, object = null) {
        return this.log("[DEBUG] " + msg, logLevelConstants.DEBUG, object);
    },

    warn: function(msg, object = null) {
        return this.log("[WARNING] " + msg, logLevelConstants.WARNING, object);
    }
};