window.BEIXF = function(e) {
    var t = {};

    function n(r) {
        if (t[r]) return t[r].exports;
        var o = t[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports
    }
    return n.m = e, n.c = t, n.d = function(e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: r
        })
    }, n.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, n.t = function(e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var r = Object.create(null);
        if (n.r(r), Object.defineProperty(r, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var o in e) n.d(r, o, function(t) {
                return e[t]
            }.bind(null, o));
        return r
    }, n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e["default"]
        } : function() {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "", n(n.s = 6)
}([function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.headMeta = {
        SDK: {
            name: "be:sdk"
        },
        SDK_TYPE: {
            name: "be:sdk_type"
        },
        TIMER: {
            name: "be:timer"
        },
        ORIG_URL: {
            name: "be:orig_url"
        },
        NORM_URL: {
            name: "be:norm_url"
        },
        CAPSULE_URL: {
            name: "be:capsule_url"
        },
        API_DT: {
            name: "be:api_dt"
        },
        MOD_DT: {
            name: "be:mod_dt"
        },
        MESSAGES: {
            name: "be:messages"
        },
        IS_SPA: {
            name: "be:is_spa"
        },
        CONTENT_ONLY: {
            name: "be:content_only"
        }
    }, t.scriptClass = {
        HEAD: {
            name: "be:head_script"
        },
        BODY: {
            name: "be:body_script"
        },
        COMMENT: {
            name: "be:comment_script"
        }
    }, t.styleClass = {
        LINK_STYLE: {
            name: "be:link_style"
        }
    }, t.SELECTORS = {
        LINK_BLOCK_CONTAINER: {
            selector: ".be-ix-link-block,.be-ixf-link-block,.BrightEdgeRelatedLinks,.be-related-link-container,.o-AutoPilot__m-AutoPilot-Wrap",
            name: "link-block-container"
        }
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.SDKUtils = void 0;
    var r = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(),
        o = n(0);
    var a = n(8);

    function i(e, t) {
        for (var n = e + ""; n.length < t;) n = "0" + n;
        return n
    }
    t.SDKUtils = function() {
        function e() {
            ! function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, e)
        }
        return r(e, null, [{
            key: "getPageHash",
            value: function(e) {
                var t = 0;
                if (null === e || 0 === e.length) return t;
                for (var n = 0; n < e.length; n++) {
                    t = (t << 5) - t + e.charCodeAt(n), t &= t
                }
                return t = t < 0 ? "0" + -t : "" + t
            }
        }, {
            key: "getBooleanValue",
            value: function(e) {
                return void 0 !== e && null != e && ("1" === (e = e.toLowerCase()) || "true" === e || "on" === e || "t" === e)
            }
        }, {
            key: "normalizeUrl",
            value: function(e, t, n) {
                var r = a.parse(e, !0),
                    o = r.hostname,
                    i = r.protocol,
                    s = r.port;
                s = null === s || "http:" === i && "80" === s || "https:" === i && "443" === s ? "" : ":" + s;
                var l = r.pathname,
                    u = r.query,
                    c = Object.keys(u).sort(),
                    d = [];
                if (c.length > 0)
                    for (var h = 0; h < c.length; h++) {
                        var f = c[h],
                            p = f;
                        if (n && (p = f.toLowerCase()), t && -1 !== t.indexOf(p))
                            if (Array.isArray(u[f]))
                                for (var g = u[f].sort(), m = 0; m < g.length; m++) d.push(p + "=" + encodeURIComponent(g[m]));
                            else {
                                var _ = encodeURIComponent(u[f]);
                                d.push(p + "=" + _)
                            }
                    }
                return d.length > 0 ? i + "//" + o + s + l + "?" + d.join("&") : i + "//" + o + s + l
            }
        }, {
            key: "getParameterDictionaryFromUrl",
            value: function(e) {
                return a.parse(e, !0).query
            }
        }, {
            key: "overrideHostInURL",
            value: function(e, t) {
                var n = t.split(":"),
                    r = -1;
                2 === n.length && (t = n[0], r = n[1]);
                var o = a.parse(e, !0),
                    i = o.protocol;
                return o.hostname = t, o.host = t, r > -1 && ("http:" === i && "80" === r || "https:" === i && "443" === r || (o.port = r.toString(), o.host = o.host + ":" + r)), a.format(o)
            }
        }, {
            key: "overrideProtocolInURL",
            value: function(e, t) {
                var n = a.parse(e, !0);
                return n.protocol = t + ":", a.format(n)
            }
        }, {
            key: "userAgentMatchesRegex",
            value: function(e, t) {
                return new RegExp(t, "gi").test(e)
            }
        }, {
            key: "isDaylightSavings",
            value: function(e, t, n) {
                if (t < 3 || t > 11) return !1;
                if (t > 3 && t < 11) return !0;
                var r = e - n;
                return 3 === t ? r >= 8 : r <= 0
            }
        }, {
            key: "convertToNormalizedGoogleIndexTimeZone",
            value: function(t, n) {
                var r = new Date(t),
                    o = -8,
                    a = r.getTime() + 6e4 * r.getTimezoneOffset(),
                    s = new Date(a + 36e5 * o);
                return e.isDaylightSavings(s.getDate(), s.getMonth() + 1, s.getDay()) && (o = -7, s = new Date(a + 36e5 * o)), n + "y_" + s.getFullYear() + "; " + n + "m_" + i(s.getMonth() + 1, 2) + "; " + n + "d_" + i(s.getDate(), 2) + "; " + n + "h_" + i(s.getHours(), 2) + "; " + n + "mh_" + i(s.getMinutes(), 2) + "; " + n + "_epoch:" + t
            }
        }, {
            key: "convertToNormalizedTimeZone",
            value: function(t, n) {
                var r = new Date(t),
                    o = -8,
                    a = r.getTime() + 6e4 * r.getTimezoneOffset(),
                    i = new Date(a + 36e5 * o);
                return e.isDaylightSavings(i.getDate(), i.getMonth() + 1, i.getDay()) && (o = -7, i = new Date(a + 36e5 * o)), n + "_tstr:" + i.toString() + "; " + n + "_epoch:" + t
            }
        }, {
            key: "matchIncludeRules",
            value: function(e, t) {
                for (var n = 0; n < e.length; n++) {
                    if (RegExp(e[n]).test(t)) return !0
                }
                return !1
            }
        }, {
            key: "derivePageGroup",
            value: function(t, n) {
                for (var r = 0; r < n.length; r++) {
                    var o = n[r].include_rules,
                        a = n[r].exclude_rules,
                        i = n[r].name;
                    if (a) {
                        for (var s = !1, l = 0; l < a.length; l++) {
                            if (RegExp(a[l]).test(t)) {
                                s = !0;
                                break
                            }
                        }
                        if (!s && e.matchIncludeRules(o, t)) return i
                    } else if (e.matchIncludeRules(o, t)) return i
                }
                return null
            }
        }, {
            key: "simpleAssign",
            value: function(e, t) {
                if (null != t) {
                    for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
                    return e
                }
            }
        }, {
            key: "isLegacy",
            value: function() {
                var e = 0,
                    t = /MSIE (\d+\.\d+)/,
                    n = t.test(navigator.userAgent),
                    r = !!navigator.userAgent.match(/Trident\/7.0/),
                    o = navigator.userAgent.indexOf("rv:11.0");
                n && (e = t.exec(navigator.userAgent)[1]);
                return -1 !== navigator.appVersion.indexOf("MSIE 10") && (e = 10), r && -1 !== o && (e = 11), 0 !== e && e < 10
            }
        }, {
            key: "htmlEntities",
            value: function(e) {
                return String(e).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
            }
        }, {
            key: "createCommentScript",
            value: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = document.createElement("script");
                n.type = "be:comment";
                var r = "\n /*\n";
                return r += " " + e + "\n", r += "*/\n", n.innerHTML = r, n.classList.add(o.scriptClass.COMMENT.name), t ? n.outerHTML : n
            }
        }]), e
    }()
}, function(e, t) {
    e.exports = function(e) {
        return e.webpackPolyfill || (e.deprecate = function() {}, e.paths = [], e.children || (e.children = []), Object.defineProperty(e, "loaded", {
            enumerable: !0,
            get: function() {
                return e.l
            }
        }), Object.defineProperty(e, "id", {
            enumerable: !0,
            get: function() {
                return e.i
            }
        }), e.webpackPolyfill = 1), e
    }
}, function(e, t) {
    var n;
    n = function() {
        return this
    }();
    try {
        n = n || new Function("return this")()
    } catch (e) {
        "object" == typeof window && (n = window)
    }
    e.exports = n
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.Logger = t.logLevelConstants = void 0;
    var r = n(1),
        o = t.logLevelConstants = {
            DEBUG: 0,
            INFO: 1,
            WARNING: 2,
            ERROR: 3,
            FATAL: 4
        };
    t.Logger = {
        debugMode: !1,
        logLevel: o.WARNING,
        initLogger: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o.WARNING;
            isNaN(e) || (this.logLevel = e);
            var t = document.location.href,
                n = r.SDKUtils.getParameterDictionaryFromUrl(t);
            n["ixf-debug"] && (this.debugMode = r.SDKUtils.getBooleanValue(n["ixf-debug"])), this.debugMode && (this.logLevel = o.DEBUG)
        },
        log: function(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
            t < this.logLevel || void 0 !== window.console && (console.log(e), n && console.log(n))
        },
        info: function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            return this.log("[INFO] " + e, o.INFO, t)
        },
        debug: function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            return this.log("[DEBUG] " + e, o.DEBUG, t)
        },
        warn: function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            return this.log("[WARNING] " + e, o.WARNING, t)
        }
    }
}, function(e, t, n) {
    (function(e, n) {
        ! function() {
            "use strict";
            var r, o, a, i, s, l, u, c, d, h, f, p, g, m, _, v, E = !0,
                b = !1,
                T = !0,
                C = !1,
                N = [];

            function A(e) {
                r = e;
                var t, n, A, L = !1;
                try {
                    if (-1 !== navigator.userAgent.indexOf("MSIE") || navigator.appVersion.indexOf("Trident/") > -1) return;
                    if (o = document.getElementById("marvel")) L = o.getAttribute("data-testmode"), a = o.getAttribute("data-customerid"), p = o.getAttribute("data-opt");
                    else {
                        if (!r) return;
                        L = e["data-testmode"], a = e["data-customerid"], p = e["data-opt"]
                    }
                    I("data-opt") && (p = I("data-opt")), b = !1, (t = I("marvel-debug")) && "true" == t && (b = !0), L ? (E = !1, (A = I("marvel-testpage")) && "true" == A && (E = !0)) : (E = !0, (n = I("marvel-activate")) && "false" == n && (E = !1)), a ? 0 == (a = a.trim()).length && (E = !1) : E = !1, b && (O("marveltestmode=" + L), O("marvel-testpage=" + A), O("marvelopt=" + p)),
                        function() {
                            var e, t, n, p, m, _, v = !1;
                            o ? (e = o.getAttribute("data-cname"), t = o.getAttribute("data-domain"), m = o.getAttribute("data-url"), v = o.getAttribute("data-ignoreselfdomain"), _ = o.getAttribute("data-ignorepath"), n = o.getAttribute("data-unblockurl"), g = o.getAttribute("data-droponerror"), T = o.getAttribute("data-dropsrcset")) : r && (e = r["data-cname"], t = r["data-domain"], m = r["data-url"], v = r["data-ignoreselfdomain"], _ = r["data-ignorepath"], n = r["data-unblockurl"], g = r["data-droponerror"], T = r["data-dropsrcset"]);
                            v && "true" == v && (C = !0);
                            T = !(!T || "true" != T);
                            _ && _.trim().length > 0 && (N = N.concat(_.split(",")));
                            (!e || e.trim().length <= 0) && (e = "marvel-b1-cdn.bc0a.com");
                            e = e.trim(), p = ["adminblock"];
                            var A = 0;
                            for (A = 0; A < p.length; A++) a == p[A] && (O("Customer Blocked!=" + a), E = !1);
                            i = ["marvel-b1-cdn.bc0a.com", "marvel-b1-cdn.b3e5.com", ".doubleclick.", ".bizible.", ".bing.", ".google.", ".googleapis.", "adnxs.", "cdninstagram.", "fbcdn.", "googleusercontent.", ".hubspot.", ".youtube.", ".track.", ".hotjar.", "webtraxs.", ".datapro.", ".facebook.", ".clicksapp.", ".domclickext.", ".pingclock.", ".addthis.", "pixel", "choozle", ".chrome-extension.", ".youvisit.", ".twitter.", ".b0e8.", "bidswitch", ".adsrvr.", ".gstatic.", ".gravatar.", ".amazon-adsystem.", ".countmake.", ".rlcdn.", ".visitor-track.", ".adroll.", ".bidr.", "mapbox.", "turn.", "igodigital.com", "pubmatic.com", "cartocdn.com", "sonobi.com", "ids.ad.gt", "demdex.net"], t && t.trim().length > 0 && (t = t.toLowerCase(), i = i.concat(t.split(",")));
                            C && (i = i.concat([document.location.host]));
                            u = e + "/" + a + "/", c = window.location.protocol + "//", h = window.location.host, d = window.location.pathname, f = h + d, s = ["chrome-extension", "adstream", "/metric/", "{{"], m && m.trim().length > 0 && (m = m.toLowerCase(), s = s.concat(m.split(",")));
                            l = [], n && n.trim().length > 0 && (n = n.toLowerCase(), l = l.concat(n.split(",")));
                            b && (O("marvelversion=marvel-1.77.0"), O("marvelbeCDN=" + u), O("marvelcustomerid=" + a), O("marvelcname=" + e), O("marvelblacklistcustomer=" + p), O("marvelignoreselfdomain=" + C), O("marveldatadomain=" + t), O("marvelignoreDomain=" + i), O("marveldataurl=" + m), O("marvelurllist=" + s), O("marveldataunblockurl=" + n), O("marvelunblockurllist=" + l), O("marvelprotocol=" + c), O("marvelhost=" + h), O("marvelpath=" + d), O("marvelurl=" + f), O("marvelignorepath=" + N), O("marveldatadroponerror=" + g), O("marveldropsrcset=" + T))
                        }();
                    var y = 0;
                    for (y = 0; y < N.length; y++)
                        if (f.indexOf(N[y]) >= 0) {
                            E = !1;
                            break
                        }
                    O("marvelactivate=" + E), E && (1 == p ? (v = {
                        childList: !0
                    }, (m = new MutationObserver(M)).observe(document.documentElement, v)) : (_ = {
                        childList: !0,
                        subtree: !0,
                        attributeFilter: ["src", "srcset", "style"]
                    }, new MutationObserver(x).observe(document.documentElement, _)))
                } catch (e) {
                    O(e)
                }
            }

            function I(e) {
                var t = RegExp("[?&]" + e + "=([^&]*)").exec(window.location.search);
                return t && decodeURIComponent(t[1].replace(/\+/g, " "))
            }

            function O(e) {
                b && console.log(e)
            }

            function L(e) {
                if (!e) return !1;
                if (0 == (e = e.trim()).length) return !1;
                if (e.length > 500) return !1;
                if ((e = e.toLowerCase()).indexOf(u) > 0) return !1;
                if (e.indexOf(".svg") >= 0 || e.indexOf(".gif") >= 0 || e.indexOf(".mp4") >= 0 || e.indexOf(".webm") >= 0 || e.indexOf(".ogv") >= 0) return !1;
                var t = function(e) {
                    var t = e,
                        n = e.indexOf("//");
                    if (n >= 0) {
                        var r = (e = e.substring(n + 2)).indexOf("/");
                        return r >= 0 && (t = e.substring(0, r)), "." + t
                    }
                    return document.location.host
                }(e);
                O("marvelgetdomain=" + t);
                var n = 0;
                for (n = 0; n < l.length; n++)
                    if (e.indexOf(l[n]) >= 0) return !0;
                var r = 0;
                for (r = 0; r < i.length; r++)
                    if (t.indexOf(i[r]) >= 0) return !1;
                var o = 0;
                for (o = 0; o < s.length; o++)
                    if (e.indexOf(s[o]) >= 0) return !1;
                return !0
            }

            function y(e) {
                if (!e) return e;
                var t = "",
                    n = (e = e.trim()).toLowerCase();
                if (0 == n.indexOf("http://")) t = e.substring(7);
                else if (0 == n.indexOf("https://")) t = e.substring(8);
                else if (0 == n.indexOf("//")) t = e.substring(2);
                else {
                    if (0 == n.indexOf("data:")) return "";
                    0 == (t = new URL(e, document.baseURI).href).indexOf("http://") ? t = t.substring(7) : 0 == t.indexOf("https://") && (t = t.substring(8))
                }
                return c + u + t
            }

            function S(e) {
                var t = "";
                if (!e) return t;
                var n = (e = e.trim()).split(","),
                    r = 0;
                for (r = 0; r < n.length; r++) {
                    var o = n[r].trim().split(" ");
                    t = L(o[0]) ? 1 == o.length ? t + y(o[0]) + " ," : 2 == o.length ? t + y(o[0]) + " " + o[1] + "," : 3 == o.length ? t + y(o[0]) + " " + o[1] + " " + o[2] + "," : t + n[r] + "," : (t = t + n[r] + ",").trim()
                }
                return t.endsWith(",") && (t = t.substring(0, t.length - 1)), t.trim()
            }

            function R(e) {
                var t = "";
                if (!e) return t;
                var n = (e = e.trim()).toLowerCase(),
                    r = n.indexOf("background-image");
                if (r < 0 && (r = n.indexOf("background:")), r < 0 && (r = n.indexOf("background ")), r >= 0) {
                    var o = n.indexOf("url", r);
                    if (o < 0) return t;
                    var a = n.indexOf("(", o);
                    if (a > 0) {
                        var i = n.indexOf(")", o);
                        if (i > 0) {
                            var s = e.substring(a + 1, i);
                            if (((s = s.trim()).startsWith("'") || s.startsWith('"')) && (s = s.substring(1)), (s.endsWith("'") || s.endsWith('"')) && (s = s.substring(0, s.length - 1)), L(s)) {
                                var l = y(s);
                                if (l && l.trim().length > 0 && s != l) return l = "'" + l + "'", t = e.substring(a + 1, 0) + l + e.substring(i)
                            }
                        }
                    }
                }
                return t
            }

            function M(e) {
                var t, n;
                for (n = 0; n < e.length; n++) {
                    if ((t = e[n]) && t.addedNodes && t.addedNodes.length > 0) "body" == t.addedNodes[0].nodeName.toLowerCase() && (b && O("Body found"), m.disconnect(), _ = {
                        childList: !0,
                        subtree: !0,
                        attributeFilter: ["src", "srcset", "style"]
                    }, new MutationObserver(x).observe(t.addedNodes[0], _))
                }
            }

            function D(e) {
                var t = e.nodeName.toLowerCase(),
                    n = e.attributes;
                if ("img" == t || "source" == t)
                    for (s = 0; s < n.length; s++) {
                        if ("src" == (l = n[s].nodeName.toLowerCase()) || "data-src" == l) {
                            var r = n[s].nodeValue;
                            if (b && O("Checking[node," + t + "," + l + "]==>" + r), L(r)) {
                                var o = y(r);
                                o && o.trim().length > 0 && o != r && (b && O("Changing[node," + t + "," + l + "]==>" + o), n[s].nodeValue = o, "src" == l && (e.setAttribute("be_marvel", "1"), "true" == g || e.getAttribute("onerror") || e.setAttribute("onerror", "this.onerror=null;this.src='" + r + "'")))
                            }
                        } else if ("srcset" != l || T) {
                            if ("style" == l) {
                                var a = n[s].nodeValue;
                                b && O("Checking[node,img/source,style]==>" + a), (u = R(a)) && u.trim().length > 0 && a != u && (b && O("Changing[node,img/source,style]==>" + u), n[s].nodeValue = u, e.setAttribute("be_marvel", "1"))
                            }
                        } else {
                            var i = n[s].nodeValue;
                            b && O("Checking[node," + t + ",scrset]==>" + i), (c = S(i)) && c.trim().length > 0 && i != c && (b && O("Changing[node," + t + ",scrset]==>" + c), n[s].nodeValue = c, e.setAttribute("be_marvel", "1"))
                        }
                    } else if ("div" == t || "section" == t || "article" == t || "figure" == t || "a" == t) {
                        var s;
                        for (s = 0; s < n.length; s++) {
                            var l;
                            if ("style" == (l = n[s].nodeName.toLowerCase())) {
                                var u;
                                a = n[s].nodeValue;
                                b && O("Checking[node," + t + ",style]==>" + a), (u = R(a)) && u.trim().length > 0 && a != u && (b && O("Changing[node," + t + ",style]==>" + u), n[s].nodeValue = u, e.setAttribute("be_marvel", "1"))
                            } else if ("srcset" == l && !T) {
                                var c;
                                i = n[s].nodeValue;
                                b && O("Checking[node," + t + ",srcset]==>" + i), (c = S(i)) && c.trim().length > 0 && i != c && (b && O("Changing[node," + t + ",srcset]==>" + c), n[s].nodeValue = c, e.setAttribute("be_marvel", "1"))
                            }
                        }
                    }
                if (e.childNodes && e.childNodes.length > 0)
                    for (var d = 0; d < e.childNodes.length; d++) "1" == e.childNodes[d].nodeType && D(e.childNodes[d])
            }

            function U(e, t) {
                var n = e.nodeName.toLowerCase();
                t = t.toLowerCase();
                if ("img" == n || "source" == n) {
                    if ("src" == t) {
                        var r = e.src;
                        if (b && O("Checking[attribute," + n + ",src]==>" + r), L(r)) {
                            var o = y(r);
                            o && o.trim().length > 0 && o != r && (b && O("Changing[attribute," + n + ",src]==>" + o), e.src = o, e.setAttribute("be_marvel", "1"), "true" == g || e.getAttribute("onerror") || e.setAttribute("onerror", "this.onerror=null;this.src='" + r + "'"))
                        }
                    }
                    if ("srcset" == t && !T) {
                        var a = e.getAttribute("srcset");
                        b && O("Checking[attribute,+" + n + "+,srcset]==>" + a);
                        var i = S(a);
                        i && i.trim().length > 0 && a != i && (b && O("Changing[attribute," + n + ",srcset]==>" + i), e.setAttribute("srcset", i), e.setAttribute("be_marvel", "1"))
                    }
                } else if (("div" == n || "section" == n || "article" == n || "figure" == n || "a" == n) && "style" == t) {
                    var s = e.getAttribute("style");
                    b && O("Checking[attribute,div," + n + "]==>" + s);
                    var l = R(s);
                    l && l.trim().length > 0 && s != l && (b && O("Changing[attribute,div," + n + "]==>" + l), e.setAttribute("style", l), e.setAttribute("be_marvel", "1"))
                }
            }

            function x(e) {
                var t, n, r;
                for (r = 0; r < e.length; r++)(t = e[r]) && (t.addedNodes.length > 0 && "1" == t.addedNodes[0].nodeType ? (n = t.addedNodes[0].getAttribute("be_marvel")) && "1" == n || D(t.addedNodes[0]) : "attributes" == t.type && "1" == t.target.nodeType && ((n = t.target.getAttribute("be_marvel")) && "1" == n || U(t.target, t.attributeName)))
            }
            var P = "object" == typeof e && e && e.Object === Object && e,
                w = "object" == typeof self && self && self.Object === Object && self,
                G = P || w || Function("return this")(),
                k = t && !t.nodeType && t,
                F = k && "object" == typeof n && n && !n.nodeType && n;
            F ? ((F.exports = A).enableMarvel = A, k.enableMarvel = A) : (G.enableMarvel = A, A(null))
        }()
    }).call(this, n(3), n(2)(e))
}, function(e, t, n) {
    "use strict";
    (function(e) {
        var t = n(1),
            r = n(14),
            o = n(15),
            a = n(0),
            i = n(4);

        function s(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }
        var l = {};
        window.jsElementReady = (0, r.observeComponent)(window.BEJSSDKObserver = window.BEJSSDKObserver || {}), (0, o.linkBlockGeneratorComponent)(window.BELinkBlockGenerator || {}),
            function(r) {
                r.ENVIRONMENT_PRODUCTION;
                var o = null,
                    u = null,
                    c = null,
                    d = null,
                    h = null,
                    f = null,
                    p = !0,
                    g = !1,
                    m = null,
                    _ = !1,
                    v = [],
                    E = [];

                function b(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
                        r = document.createElement("script");
                    r.type = "text/javascript", r.textContent = e, n && r.classList.add(n), t.appendChild(r)
                }

                function T() {
                    var e = t.SDKUtils.createCommentScript("be_ixf, sdk, gho", !0),
                        n = !1;
                    r.PAGE_HIDE_ORIGINALURL && !i.Logger.debugMode && (n = t.SDKUtils.getBooleanValue(r.PAGE_HIDE_ORIGINALURL)), e += '\n<meta name="' + a.headMeta.SDK.name + '" content="' + r.CLIENT_NAME + "_" + r.CLIENT_VERSION + '" />';
                    var o = "global";
                    o = "custom", e += '\n<meta name="' + a.headMeta.SDK_TYPE.name + '" content="' + o + '" />', r.IS_SPA && (e += '\n<meta name="' + a.headMeta.IS_SPA.name + '" content="' + !0 + '" />'), e += '\n<meta name="' + a.headMeta.TIMER.name + '" content="' + r.connectTime + 'ms" />', n || (e += '\n<meta name="' + a.headMeta.ORIG_URL.name + '" content="' + t.SDKUtils.htmlEntities(c) + '" />'), e += '\n<meta name="' + a.headMeta.NORM_URL.name + '" content="' + t.SDKUtils.htmlEntities(d) + '" />', e += '\n<meta name="' + a.headMeta.CAPSULE_URL.name + '" content="' + t.SDKUtils.htmlEntities(f) + '" />', null != r.capsule && (e += '\n<meta name="' + a.headMeta.API_DT.name + '" content="' + t.SDKUtils.convertToNormalizedGoogleIndexTimeZone(r.capsule.date_created, "p") + '" />', e += '\n<meta name="' + a.headMeta.MOD_DT.name + '" content="' + t.SDKUtils.convertToNormalizedGoogleIndexTimeZone(r.capsule.date_created, "p") + '" />');
                    var s = v.length > 0 ? "true" : "false";
                    return e += '\n<meta name="' + a.headMeta.MESSAGES.name + '" content="' + s + '" />'
                }

                function C(e) {
                    v.push(e)
                }

                function N(e, n, o, a, s, l, u) {
                    if (n) {
                        var c = t.SDKUtils.createCommentScript("be_ixf, bodystr, _body_opens");
                        e.appendChild(c);
                        var d = document.createElement("ul");
                        d.setAttribute("id", "be_sdkms_capsule"), d.setAttribute("style", "display:none!important");
                        var h = document.createElement("li");
                        if (h.setAttribute("id", "be_sdkms_capsule_index_time"), h.innerHTML = t.SDKUtils.convertToNormalizedGoogleIndexTimeZone((new Date).getTime(), "i"), d.appendChild(h), null != r.capsule) {
                            var f = r.capsule.publishing_engine,
                                p = f + "; " + f + "_" + r.capsule.capsule_version,
                                g = document.createElement("li");
                            g.setAttribute("id", "be_sdkms_capsule_pub"), g.innerHTML = p, d.appendChild(g);
                            var m = document.createElement("li");
                            m.setAttribute("id", "be_sdkms_capsule_date_modified"), m.innerHTML = t.SDKUtils.convertToNormalizedGoogleIndexTimeZone(r.capsule.date_published, "p"), d.appendChild(m)
                        }
                        e.insertBefore(d, e.firstChild)
                    }
                    var v = o + "; " + o + "_" + a + "; " + s;
                    null != l && (v = v + "; " + l);
                    var E = t.SDKUtils.convertToNormalizedTimeZone(u, "p");
                    if ("bodystr" === s) {
                        if (i.Logger.debugMode) {
                            var b = document.createElement("ul");
                            b.setAttribute("id", "be_sdkms_node"), b.setAttribute("style", "display:none!important");
                            var T = document.createElement("li");
                            T.setAttribute("class", "be_sdkms_pub"), T.innerHTML = v, b.appendChild(T);
                            var C = document.createElement("li");
                            C.setAttribute("class", "be_sdkms_date_modified"), C.innerHTML = E, b.appendChild(C), e.appendChild(b)
                        }
                        var N = t.SDKUtils.createCommentScript("be_ixf, bodystr");
                        e.appendChild(N)
                    } else if (!_) {
                        var A = "be_sdkms_pub: " + v + "\n";
                        A += "be_sdkms_date_modified: " + E + "\n";
                        var I = t.SDKUtils.createCommentScript(A, !0);
                        e.insertAdjacentHTML("beforeend", I)
                    }
                }

                function A(e) {
                    var n = t.SDKUtils.createCommentScript("be_ixf, sdk, is");
                    e.appendChild(n);
                    var a = document.createElement("ul");
                    if (a.setAttribute("id", "be_sdkms_capsule"), a.setAttribute("style", "display:none!important"), v.length > 0) {
                        var i = document.createElement("ul");
                        i.setAttribute("id", "be_sdkms_capsule_messages");
                        for (var s = 0; s < v.length; s++) {
                            var l = v[s];
                            i.innerHTML = i.innerHTML + "\x3c!-- ixf_msg: " + l + " --\x3e\n"
                        }
                        a.appendChild(i)
                    }
                    var c = document.createElement("li");
                    c.setAttribute("id", "be_sdkms_configuration"), c.innerHTML = JSON.stringify(u), a.appendChild(c);
                    var d = document.createElement("li");
                    d.setAttribute("id", "be_sdkms_page_group"), r.capsule.page_group && (d.innerHTML = JSON.stringify(r.capsule.page_group)), a.appendChild(d);
                    var h = document.createElement("li");
                    h.setAttribute("id", "be_sdkms_capsule_response"), h.innerHTML = btoa(o), a.appendChild(h);
                    var f = document.createElement("li");
                    f.setAttribute("id", "be_sdkms_capsule_profile");
                    for (var p = 0; p < E.length; p++) {
                        var g = E[p],
                            m = document.createElement("li");
                        m.setAttribute("id", g[0]), m.setAttribute("time", g[1]), f.appendChild(m)
                    }
                    a.appendChild(f), e.appendChild(a)
                }

                function I(e) {
                    var t = Array.prototype.slice.call(arguments, 1);
                    return function(n) {
                        var r = [n].concat(t);
                        return e.apply(this, r)
                    }
                }
                r.capsule = null, r.startTime = 0, r.connectTime = 0, r.PRODUCT_NAME = "be_ixf", r.CLIENT_NAME = "js_sdk", r.CLIENT_VERSION = "1.5.4", r.API_VERSION = "1.0.0", r.ENVIRONMENT_CONFIG = "sdk.environment", r.CHARSET_CONFIG = "sdk.charset", r.API_ENDPOINT_CONFIG = "api.endpoint", r.ACCOUNT_ID_CONFIG = "sdk.account", r.CONNECT_TIMEOUT_CONFIG = "sdk.connectTimeout", r.SOCKET_TIMEOUT_CONFIG = "sdk.socketTimeout", r.CRAWLER_CONNECT_TIMEOUT_CONFIG = "sdk.crawlerConnectTimeout", r.CRAWLER_SOCKET_TIMEOUT_CONFIG = "sdk.crawlerSocketTimeout", r.LOG_LEVEL_CONFIG = "loglevel", r.WHITELIST_PARAMETER_LIST_CONFIG = "whitelist.parameter.list", r.FDAPI_PARAMETER_LIST_CONFIG = "forcedirectapi.parameter.list", r.REQUESTPARAMETERS_CASEINSENSITIVE_CONFIG = "requestparameters.caseinsensitive", r.CRAWLER_USER_AGENTS_CONFIG = "crawler.useragents", r.CANONICAL_PROTOCOL_CONFIG = "canonical.protocol", r.CANONICAL_HOST_CONFIG = "canonical.host", r.CANONICAL_PAGE_CONFIG = "canonical.page", r.ENVIRONMENT_PRODUCTION = "production", r.ENVIRONMENT_STAGING = "staging", r.ENVIRONMENT_TESTING = "testing", r.DEFAULT_CHARSET = "UTF-8", r.DEFAULT_DIRECT_API_ENDPOINT = "https://api.brightedge.com", r.DEFAULT_API_ENDPOINT = "https://ixfd2-api.bc0a.com", r.DEFAULT_ACCOUNT_ID = "0", r.DEFAULT_CONNECT_TIMEOUT = "1000", r.DEFAULT_SOCKET_TIMEOUT = "1000", r.DEFAULT_CRAWLER_CONNECT_TIMEOUT = "2000", r.DEFAULT_CRAWLER_SOCKET_TIMEOUT = "2000", r.DEFAULT_WHITELIST_PARAMETER_LIST = "", r.DEFAULT_FD_PARAMETER_LIST = "ixf-api|ixf", r.DEFAULT_CRAWLER_USER_AGENTS = "google|bingbot|msnbot|slurp|duckduckbot|baiduspider|yandexbot|sogou|exabot|facebot|ia_archiver|brightedge", r.DEFAULT_REQUESTPARAMETERS_CASEINSENSITIVE = !1, r.construct = function(o) {
                    var a;
                    r.startTime = (new Date).getTime(), s(a = {}, r.ENVIRONMENT_CONFIG, r.ENVIRONMENT_PRODUCTION), s(a, r.API_ENDPOINT_CONFIG, r.DEFAULT_API_ENDPOINT), s(a, r.CHARSET_CONFIG, r.DEFAULT_CHARSET), s(a, r.ACCOUNT_ID_CONFIG, r.DEFAULT_ACCOUNT_ID), s(a, r.CONNECT_TIMEOUT_CONFIG, r.DEFAULT_CONNECT_TIMEOUT), s(a, r.SOCKET_TIMEOUT_CONFIG, r.DEFAULT_SOCKET_TIMEOUT), s(a, r.CRAWLER_CONNECT_TIMEOUT_CONFIG, r.DEFAULT_CRAWLER_CONNECT_TIMEOUT), s(a, r.CRAWLER_SOCKET_TIMEOUT_CONFIG, r.DEFAULT_CRAWLER_SOCKET_TIMEOUT), s(a, r.CRAWLER_USER_AGENTS_CONFIG, r.DEFAULT_CRAWLER_USER_AGENTS), s(a, r.WHITELIST_PARAMETER_LIST_CONFIG, r.DEFAULT_WHITELIST_PARAMETER_LIST), s(a, r.FDAPI_PARAMETER_LIST_CONFIG, r.DEFAULT_FD_PARAMETER_LIST), s(a, r.LOG_LEVEL_CONFIG, i.logLevelConstants.WARNING), s(a, r.REQUESTPARAMETERS_CASEINSENSITIVE_CONFIG, r.DEFAULT_REQUESTPARAMETERS_CASEINSENSITIVE), u = a, u = t.SDKUtils.simpleAssign(u, o), i.Logger.initLogger(parseInt(u[r.LOG_LEVEL_CONFIG]));
                    var l = n(16).enableMarvel,
                        v = {};
                    if (v = JSON.parse('{"data-testmode":true,"data-customerid":"f00000000129937"}'), document.currentScript)
                        for (var E = document.currentScript.attributes, b = ["src", "async", "defer", "type"], T = 0; T < E.length; T++) {
                            var C = E[T];
                            if (-1 === b.indexOf(C.nodeName)) {
                                var N = C.nodeValue;
                                "true" !== N && "false" !== N || (N = "true" === N), v[C.nodeName] = N
                            }
                        }
                    l(v), c = document.location.href, g = u[r.REQUESTPARAMETERS_CASEINSENSITIVE_CONFIG];
                    var A = t.SDKUtils.getParameterDictionaryFromUrl(c);
                    null != A["ixf-endpoint"] && (p = !1, (A["ixf-endpoint"].endsWith("api.bc0a.com") || A["ixf-endpoint"].endsWith("brightedge.com")) && (u[r.API_ENDPOINT_CONFIG] = A["ixf-endpoint"])), i.Logger.debug("SDK config:", u), u[r.ENVIRONMENT_CONFIG], i.Logger.debug("force direct api list parameter=" + u[r.FDAPI_PARAMETER_LIST_CONFIG]);
                    var I = u[r.WHITELIST_PARAMETER_LIST_CONFIG];
                    i.Logger.debug("white list parameter=" + I);
                    var O = I.split("|"),
                        L = u[r.CONNECT_TIMEOUT_CONFIG];
                    t.SDKUtils.userAgentMatchesRegex(navigator.userAgent, u[r.CRAWLER_USER_AGENTS_CONFIG]) && (L = u[r.CRAWLER_CONNECT_TIMEOUT_CONFIG], i.Logger.debug("Detected browser using timeout=" + L)), d = t.SDKUtils.normalizeUrl(c, O, g), u[r.CANONICAL_PAGE_CONFIG] ? d = u[r.CANONICAL_PAGE_CONFIG] : u[r.CANONICAL_HOST_CONFIG] && (i.Logger.debug("Got in canonical host"), d = t.SDKUtils.overrideHostInURL(d, u[r.CANONICAL_HOST_CONFIG])), u[r.CANONICAL_PROTOCOL_CONFIG] && (d = t.SDKUtils.overrideProtocolInURL(d, u[r.CANONICAL_PROTOCOL_CONFIG]));
                    var y = t.SDKUtils.getPageHash(d);
                    if (p) {
                        var S = u[r.FDAPI_PARAMETER_LIST_CONFIG].split("|");
                        for (var R in A)
                            if (-1 !== S.indexOf(R)) {
                                u[r.API_ENDPOINT_CONFIG] = "https://api.brightedge.com", i.Logger.debug("Using overridden api endpoint");
                                break
                            }
                    }
                    var M = u[r.API_ENDPOINT_CONFIG],
                        D = u[r.ACCOUNT_ID_CONFIG],
                        U = "/api/ixf/" + r.API_VERSION + "/get_capsule/" + D + "/" + y;
                    if (h = M + U + "?client=" + encodeURIComponent(r.CLIENT_NAME) + "&client_version=" + encodeURIComponent(r.CLIENT_VERSION) + "&orig_url=" + encodeURIComponent(c) + "&base_url=" + encodeURIComponent(d) + "&user_agent=" + encodeURIComponent(navigator.userAgent), i.Logger.debug("Page_hash normalized_url=" + d + ", page_hash=" + y + ", api_url=" + h), f = M + U, e.env.DEV && (h = e.env.DEV_DOMAIN + y, f = h), _ = t.SDKUtils.isLegacy()) {
                        var x = document.location.protocol.substring(0, document.location.protocol.length - 1);
                        h = t.SDKUtils.overrideProtocolInURL(h, x), m = new window.XDomainRequest
                    } else m = new XMLHttpRequest;
                    r.IS_SPA ? (m.open("GET", h, !1), m.send(null), r.processCapsule(m.responseText)) : (m.onload = r.xhrHandler, m.onerror = r.xhrErrorHandler, m.open("GET", h, !0), m.timeout = L, m.send(null))
                }, r.xhrHandler = function(e) {
                    _ ? r.processCapsule(m.responseText) : 4 === m.readyState && (200 === m.status ? (i.Logger.debug("Get capsule successfully: ", m), r.processCapsule(m.responseText)) : (i.Logger.warn("Cannot get capsule: ", m), C("API request invalid HTTP status=" + m.status + ", capsule_url=" + h)))
                }, r.xhrErrorHandler = function(e) {
                    i.Logger.warn("Could not get capsule=" + h + ", error=" + e.statusText), C("API request invalid response=" + m.statusText + ", capsule_url=" + h)
                }, r.processCapsule = function(e) {
                    var n, s;
                    o = e, r.connectTime = (new Date).getTime() - r.startTime, n = "constructor", s = r.connectTime, E.push([n, s]);
                    try {
                        r.capsule = JSON.parse(o)
                    } catch (e) {
                        return void C("Invalid JSON capsule_url=" + h + ", error_msg=" + e.message)
                    }
                    if (r.capsule.config.page_groups) {
                        var l = r.capsule.config.page_groups;
                        try {
                            var u = t.SDKUtils.derivePageGroup(d, l);
                            i.Logger.debug("page group is " + u), r.capsule.page_group = u;
                            var c = r.getPageGroupNodes(u);
                            r.setPageGroupNodes(c)
                        } catch (e) {
                            return void C("Exception occurred while getting page group, error_msg=" + e.message)
                        }
                    }
                    var f = !1;
                    if (r.capsule.page_group_nodes)
                        for (var p = 0; p < r.capsule.page_group_nodes.length; p++) {
                            for (var g = r.capsule.page_group_nodes[p], m = g.type, v = g.feature_group, O = !1, L = 0; L < r.capsule.nodes.length; L++) {
                                var y = r.capsule.nodes[L];
                                if (v === y.feature_group && y.type === m) {
                                    r.capsule.nodes[L] = g, O = !0;
                                    break
                                }
                            }
                            O || r.capsule.nodes.push(g)
                        }
                    for (var S = function(e) {
                            var t = r.capsule.nodes[e],
                                n = t.type,
                                o = t.feature_group,
                                s = "";
                            t.non_script_content && (s = t.non_script_content);
                            var l = t.script_content,
                                u = t.publishing_engine,
                                c = t.engine_version,
                                d = t.date_published,
                                h = null;
                            t.metaString && (h = t.meta_string), C("Adding selector index=" + e + " node=" + n + "/" + o), "bodystr" === n && "_body_open" === o ? (i.Logger.debug("Adding selector for index=" + e + " node=" + n + "/" + o), BEJSSDKObserver.jsElementReady("body", I((function(e, t, n, r, o, s, l) {
                                t && t.length > 0 && (t = t.replace("<style>", '<style class="' + a.styleClass.LINK_STYLE.name + '">').trim(), e.insertAdjacentHTML("afterbegin", t)), n && n.length > 0 && b(n, e, a.scriptClass.BODY.name), f = !0, i.Logger.debugMode && (N(e, !0, r, o, s, l, d), A(e))
                            }), s, l, u, c, n, h, d))) : "headstr" === n && "_head_open" === o ? (i.Logger.debug("Adding selector for index=" + e + " node=" + n + "/" + o), BEJSSDKObserver.jsElementReady("head", I((function(e, t, n, r, o, s, l) {
                                var u = !1,
                                    c = !1,
                                    h = T();
                                if (_) {
                                    var f = t.replace("<style>", "").trim();
                                    if (f.length > 0) {
                                        var p = document.createElement("style");
                                        p.classList.add(a.styleClass.LINK_STYLE.name), p.innerHTML = f + "\n", e.appendChild(p), u = !0
                                    }
                                } else t && t.length > 0 && (t = t.replace("<style>", '<style class="' + a.styleClass.LINK_STYLE.name + '">').trim(), e.insertAdjacentHTML("beforeend", t), c || (e.insertAdjacentHTML("beforeend", h), c = !0), i.Logger.debug("Loading head content..."), u = !0);
                                if (n && n.length > 0) {
                                    b(n, e, a.scriptClass.HEAD.name);
                                    var g = T();
                                    c || (e.insertAdjacentHTML("beforeend", g), c = !0), i.Logger.debug("Loading script_content..."), u = !0
                                }
                                u && N(e, !1, r, o, s, l, d)
                            }), s, l, u, c, n, h, d))) : i.Logger.debug("Skipping non-implicit and unspecified explict selector for index=" + e + " node=" + n + "/" + o)
                        }, R = 0; R < r.capsule.nodes.length; R++) S(R);
                    !f && i.Logger.debugMode && BEJSSDKObserver.jsElementReady("body", I((function(e) {
                        A(e)
                    })))
                }, r.getNodes = function() {
                    return r.capsule.nodes
                }, r.getPageGroupNodes = function(e) {
                    return r.capsule.page_group_nodes[e]
                }, r.setPageGroupNodes = function(e) {
                    r.capsule.page_group_nodes = e
                }, r.getPageGroupNodesConfig = function() {
                    return r.capsule.config.page_group_nodes
                }, l[r.ACCOUNT_ID_CONFIG] = "f00000000129937", l[r.WHITELIST_PARAMETER_LIST_CONFIG] = "ixf", l[r.LOG_LEVEL_CONFIG] = 2, window.BEJSSDK.construct(l)
            }(window.BEJSSDK = window.BEJSSDK || {})
    }).call(this, n(7))
}, function(e, t) {
    var n, r, o = e.exports = {};

    function a() {
        throw new Error("setTimeout has not been defined")
    }

    function i() {
        throw new Error("clearTimeout has not been defined")
    }

    function s(e) {
        if (n === setTimeout) return setTimeout(e, 0);
        if ((n === a || !n) && setTimeout) return n = setTimeout, setTimeout(e, 0);
        try {
            return n(e, 0)
        } catch (t) {
            try {
                return n.call(null, e, 0)
            } catch (t) {
                return n.call(this, e, 0)
            }
        }
    }! function() {
        try {
            n = "function" == typeof setTimeout ? setTimeout : a
        } catch (e) {
            n = a
        }
        try {
            r = "function" == typeof clearTimeout ? clearTimeout : i
        } catch (e) {
            r = i
        }
    }();
    var l, u = [],
        c = !1,
        d = -1;

    function h() {
        c && l && (c = !1, l.length ? u = l.concat(u) : d = -1, u.length && f())
    }

    function f() {
        if (!c) {
            var e = s(h);
            c = !0;
            for (var t = u.length; t;) {
                for (l = u, u = []; ++d < t;) l && l[d].run();
                d = -1, t = u.length
            }
            l = null, c = !1,
                function(e) {
                    if (r === clearTimeout) return clearTimeout(e);
                    if ((r === i || !r) && clearTimeout) return r = clearTimeout, clearTimeout(e);
                    try {
                        r(e)
                    } catch (t) {
                        try {
                            return r.call(null, e)
                        } catch (t) {
                            return r.call(this, e)
                        }
                    }
                }(e)
        }
    }

    function p(e, t) {
        this.fun = e, this.array = t
    }

    function g() {}
    o.nextTick = function(e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1)
            for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        u.push(new p(e, t)), 1 !== u.length || c || s(f)
    }, p.prototype.run = function() {
        this.fun.apply(null, this.array)
    }, o.title = "browser", o.browser = !0, o.env = {}, o.argv = [], o.version = "", o.versions = {}, o.on = g, o.addListener = g, o.once = g, o.off = g, o.removeListener = g, o.removeAllListeners = g, o.emit = g, o.prependListener = g, o.prependOnceListener = g, o.listeners = function(e) {
        return []
    }, o.binding = function(e) {
        throw new Error("process.binding is not supported")
    }, o.cwd = function() {
        return "/"
    }, o.chdir = function(e) {
        throw new Error("process.chdir is not supported")
    }, o.umask = function() {
        return 0
    }
}, function(e, t, n) {
    "use strict";
    var r = n(9),
        o = n(10);

    function a() {
        this.protocol = null, this.slashes = null, this.auth = null, this.host = null, this.port = null, this.hostname = null, this.hash = null, this.search = null, this.query = null, this.pathname = null, this.path = null, this.href = null
    }
    t.parse = E, t.resolve = function(e, t) {
        return E(e, !1, !0).resolve(t)
    }, t.resolveObject = function(e, t) {
        return e ? E(e, !1, !0).resolveObject(t) : t
    }, t.format = function(e) {
        o.isString(e) && (e = E(e));
        return e instanceof a ? e.format() : a.prototype.format.call(e)
    }, t.Url = a;
    var i = /^([a-z0-9.+-]+:)/i,
        s = /:[0-9]*$/,
        l = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,
        u = ["{", "}", "|", "\\", "^", "`"].concat(["<", ">", '"', "`", " ", "\r", "\n", "\t"]),
        c = ["'"].concat(u),
        d = ["%", "/", "?", ";", "#"].concat(c),
        h = ["/", "?", "#"],
        f = /^[+a-z0-9A-Z_-]{0,63}$/,
        p = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
        g = {
            javascript: !0,
            "javascript:": !0
        },
        m = {
            javascript: !0,
            "javascript:": !0
        },
        _ = {
            http: !0,
            https: !0,
            ftp: !0,
            gopher: !0,
            file: !0,
            "http:": !0,
            "https:": !0,
            "ftp:": !0,
            "gopher:": !0,
            "file:": !0
        },
        v = n(11);

    function E(e, t, n) {
        if (e && o.isObject(e) && e instanceof a) return e;
        var r = new a;
        return r.parse(e, t, n), r
    }
    a.prototype.parse = function(e, t, n) {
        if (!o.isString(e)) throw new TypeError("Parameter 'url' must be a string, not " + typeof e);
        var a = e.indexOf("?"),
            s = -1 !== a && a < e.indexOf("#") ? "?" : "#",
            u = e.split(s);
        u[0] = u[0].replace(/\\/g, "/");
        var E = e = u.join(s);
        if (E = E.trim(), !n && 1 === e.split("#").length) {
            var b = l.exec(E);
            if (b) return this.path = E, this.href = E, this.pathname = b[1], b[2] ? (this.search = b[2], this.query = t ? v.parse(this.search.substr(1)) : this.search.substr(1)) : t && (this.search = "", this.query = {}), this
        }
        var T = i.exec(E);
        if (T) {
            var C = (T = T[0]).toLowerCase();
            this.protocol = C, E = E.substr(T.length)
        }
        if (n || T || E.match(/^\/\/[^@\/]+@[^@\/]+/)) {
            var N = "//" === E.substr(0, 2);
            !N || T && m[T] || (E = E.substr(2), this.slashes = !0)
        }
        if (!m[T] && (N || T && !_[T])) {
            for (var A, I, O = -1, L = 0; L < h.length; L++) {
                -1 !== (y = E.indexOf(h[L])) && (-1 === O || y < O) && (O = y)
            } - 1 !== (I = -1 === O ? E.lastIndexOf("@") : E.lastIndexOf("@", O)) && (A = E.slice(0, I), E = E.slice(I + 1), this.auth = decodeURIComponent(A)), O = -1;
            for (L = 0; L < d.length; L++) {
                var y; - 1 !== (y = E.indexOf(d[L])) && (-1 === O || y < O) && (O = y)
            } - 1 === O && (O = E.length), this.host = E.slice(0, O), E = E.slice(O), this.parseHost(), this.hostname = this.hostname || "";
            var S = "[" === this.hostname[0] && "]" === this.hostname[this.hostname.length - 1];
            if (!S)
                for (var R = this.hostname.split(/\./), M = (L = 0, R.length); L < M; L++) {
                    var D = R[L];
                    if (D && !D.match(f)) {
                        for (var U = "", x = 0, P = D.length; x < P; x++) D.charCodeAt(x) > 127 ? U += "x" : U += D[x];
                        if (!U.match(f)) {
                            var w = R.slice(0, L),
                                G = R.slice(L + 1),
                                k = D.match(p);
                            k && (w.push(k[1]), G.unshift(k[2])), G.length && (E = "/" + G.join(".") + E), this.hostname = w.join(".");
                            break
                        }
                    }
                }
            this.hostname.length > 255 ? this.hostname = "" : this.hostname = this.hostname.toLowerCase(), S || (this.hostname = r.toASCII(this.hostname));
            var F = this.port ? ":" + this.port : "",
                j = this.hostname || "";
            this.host = j + F, this.href += this.host, S && (this.hostname = this.hostname.substr(1, this.hostname.length - 2), "/" !== E[0] && (E = "/" + E))
        }
        if (!g[C])
            for (L = 0, M = c.length; L < M; L++) {
                var K = c[L];
                if (-1 !== E.indexOf(K)) {
                    var H = encodeURIComponent(K);
                    H === K && (H = escape(K)), E = E.split(K).join(H)
                }
            }
        var B = E.indexOf("#"); - 1 !== B && (this.hash = E.substr(B), E = E.slice(0, B));
        var V = E.indexOf("?");
        if (-1 !== V ? (this.search = E.substr(V), this.query = E.substr(V + 1), t && (this.query = v.parse(this.query)), E = E.slice(0, V)) : t && (this.search = "", this.query = {}), E && (this.pathname = E), _[C] && this.hostname && !this.pathname && (this.pathname = "/"), this.pathname || this.search) {
            F = this.pathname || "";
            var W = this.search || "";
            this.path = F + W
        }
        return this.href = this.format(), this
    }, a.prototype.format = function() {
        var e = this.auth || "";
        e && (e = (e = encodeURIComponent(e)).replace(/%3A/i, ":"), e += "@");
        var t = this.protocol || "",
            n = this.pathname || "",
            r = this.hash || "",
            a = !1,
            i = "";
        this.host ? a = e + this.host : this.hostname && (a = e + (-1 === this.hostname.indexOf(":") ? this.hostname : "[" + this.hostname + "]"), this.port && (a += ":" + this.port)), this.query && o.isObject(this.query) && Object.keys(this.query).length && (i = v.stringify(this.query));
        var s = this.search || i && "?" + i || "";
        return t && ":" !== t.substr(-1) && (t += ":"), this.slashes || (!t || _[t]) && !1 !== a ? (a = "//" + (a || ""), n && "/" !== n.charAt(0) && (n = "/" + n)) : a || (a = ""), r && "#" !== r.charAt(0) && (r = "#" + r), s && "?" !== s.charAt(0) && (s = "?" + s), t + a + (n = n.replace(/[?#]/g, (function(e) {
            return encodeURIComponent(e)
        }))) + (s = s.replace("#", "%23")) + r
    }, a.prototype.resolve = function(e) {
        return this.resolveObject(E(e, !1, !0)).format()
    }, a.prototype.resolveObject = function(e) {
        if (o.isString(e)) {
            var t = new a;
            t.parse(e, !1, !0), e = t
        }
        for (var n = new a, r = Object.keys(this), i = 0; i < r.length; i++) {
            var s = r[i];
            n[s] = this[s]
        }
        if (n.hash = e.hash, "" === e.href) return n.href = n.format(), n;
        if (e.slashes && !e.protocol) {
            for (var l = Object.keys(e), u = 0; u < l.length; u++) {
                var c = l[u];
                "protocol" !== c && (n[c] = e[c])
            }
            return _[n.protocol] && n.hostname && !n.pathname && (n.path = n.pathname = "/"), n.href = n.format(), n
        }
        if (e.protocol && e.protocol !== n.protocol) {
            if (!_[e.protocol]) {
                for (var d = Object.keys(e), h = 0; h < d.length; h++) {
                    var f = d[h];
                    n[f] = e[f]
                }
                return n.href = n.format(), n
            }
            if (n.protocol = e.protocol, e.host || m[e.protocol]) n.pathname = e.pathname;
            else {
                for (var p = (e.pathname || "").split("/"); p.length && !(e.host = p.shift()););
                e.host || (e.host = ""), e.hostname || (e.hostname = ""), "" !== p[0] && p.unshift(""), p.length < 2 && p.unshift(""), n.pathname = p.join("/")
            }
            if (n.search = e.search, n.query = e.query, n.host = e.host || "", n.auth = e.auth, n.hostname = e.hostname || e.host, n.port = e.port, n.pathname || n.search) {
                var g = n.pathname || "",
                    v = n.search || "";
                n.path = g + v
            }
            return n.slashes = n.slashes || e.slashes, n.href = n.format(), n
        }
        var E = n.pathname && "/" === n.pathname.charAt(0),
            b = e.host || e.pathname && "/" === e.pathname.charAt(0),
            T = b || E || n.host && e.pathname,
            C = T,
            N = n.pathname && n.pathname.split("/") || [],
            A = (p = e.pathname && e.pathname.split("/") || [], n.protocol && !_[n.protocol]);
        if (A && (n.hostname = "", n.port = null, n.host && ("" === N[0] ? N[0] = n.host : N.unshift(n.host)), n.host = "", e.protocol && (e.hostname = null, e.port = null, e.host && ("" === p[0] ? p[0] = e.host : p.unshift(e.host)), e.host = null), T = T && ("" === p[0] || "" === N[0])), b) n.host = e.host || "" === e.host ? e.host : n.host, n.hostname = e.hostname || "" === e.hostname ? e.hostname : n.hostname, n.search = e.search, n.query = e.query, N = p;
        else if (p.length) N || (N = []), N.pop(), N = N.concat(p), n.search = e.search, n.query = e.query;
        else if (!o.isNullOrUndefined(e.search)) {
            if (A) n.hostname = n.host = N.shift(), (S = !!(n.host && n.host.indexOf("@") > 0) && n.host.split("@")) && (n.auth = S.shift(), n.host = n.hostname = S.shift());
            return n.search = e.search, n.query = e.query, o.isNull(n.pathname) && o.isNull(n.search) || (n.path = (n.pathname ? n.pathname : "") + (n.search ? n.search : "")), n.href = n.format(), n
        }
        if (!N.length) return n.pathname = null, n.search ? n.path = "/" + n.search : n.path = null, n.href = n.format(), n;
        for (var I = N.slice(-1)[0], O = (n.host || e.host || N.length > 1) && ("." === I || ".." === I) || "" === I, L = 0, y = N.length; y >= 0; y--) "." === (I = N[y]) ? N.splice(y, 1) : ".." === I ? (N.splice(y, 1), L++) : L && (N.splice(y, 1), L--);
        if (!T && !C)
            for (; L--; L) N.unshift("..");
        !T || "" === N[0] || N[0] && "/" === N[0].charAt(0) || N.unshift(""), O && "/" !== N.join("/").substr(-1) && N.push("");
        var S, R = "" === N[0] || N[0] && "/" === N[0].charAt(0);
        A && (n.hostname = n.host = R ? "" : N.length ? N.shift() : "", (S = !!(n.host && n.host.indexOf("@") > 0) && n.host.split("@")) && (n.auth = S.shift(), n.host = n.hostname = S.shift()));
        return (T = T || n.host && N.length) && !R && N.unshift(""), N.length ? n.pathname = N.join("/") : (n.pathname = null, n.path = null), o.isNull(n.pathname) && o.isNull(n.search) || (n.path = (n.pathname ? n.pathname : "") + (n.search ? n.search : "")), n.auth = e.auth || n.auth, n.slashes = n.slashes || e.slashes, n.href = n.format(), n
    }, a.prototype.parseHost = function() {
        var e = this.host,
            t = s.exec(e);
        t && (":" !== (t = t[0]) && (this.port = t.substr(1)), e = e.substr(0, e.length - t.length)), e && (this.hostname = e)
    }
}, function(e, t, n) {
    (function(e, r) {
        var o; /*! https://mths.be/punycode v1.4.1 by @mathias */
        ! function(a) {
            t && t.nodeType, e && e.nodeType;
            var i = "object" == typeof r && r;
            i.global !== i && i.window !== i && i.self;
            var s, l = 2147483647,
                u = /^xn--/,
                c = /[^\x20-\x7E]/,
                d = /[\x2E\u3002\uFF0E\uFF61]/g,
                h = {
                    overflow: "Overflow: input needs wider integers to process",
                    "not-basic": "Illegal input >= 0x80 (not a basic code point)",
                    "invalid-input": "Invalid input"
                },
                f = Math.floor,
                p = String.fromCharCode;

            function g(e) {
                throw new RangeError(h[e])
            }

            function m(e, t) {
                for (var n = e.length, r = []; n--;) r[n] = t(e[n]);
                return r
            }

            function _(e, t) {
                var n = e.split("@"),
                    r = "";
                return n.length > 1 && (r = n[0] + "@", e = n[1]), r + m((e = e.replace(d, ".")).split("."), t).join(".")
            }

            function v(e) {
                for (var t, n, r = [], o = 0, a = e.length; o < a;)(t = e.charCodeAt(o++)) >= 55296 && t <= 56319 && o < a ? 56320 == (64512 & (n = e.charCodeAt(o++))) ? r.push(((1023 & t) << 10) + (1023 & n) + 65536) : (r.push(t), o--) : r.push(t);
                return r
            }

            function E(e) {
                return m(e, (function(e) {
                    var t = "";
                    return e > 65535 && (t += p((e -= 65536) >>> 10 & 1023 | 55296), e = 56320 | 1023 & e), t += p(e)
                })).join("")
            }

            function b(e, t) {
                return e + 22 + 75 * (e < 26) - ((0 != t) << 5)
            }

            function T(e, t, n) {
                var r = 0;
                for (e = n ? f(e / 700) : e >> 1, e += f(e / t); e > 455; r += 36) e = f(e / 35);
                return f(r + 36 * e / (e + 38))
            }

            function C(e) {
                var t, n, r, o, a, i, s, u, c, d, h, p = [],
                    m = e.length,
                    _ = 0,
                    v = 128,
                    b = 72;
                for ((n = e.lastIndexOf("-")) < 0 && (n = 0), r = 0; r < n; ++r) e.charCodeAt(r) >= 128 && g("not-basic"), p.push(e.charCodeAt(r));
                for (o = n > 0 ? n + 1 : 0; o < m;) {
                    for (a = _, i = 1, s = 36; o >= m && g("invalid-input"), ((u = (h = e.charCodeAt(o++)) - 48 < 10 ? h - 22 : h - 65 < 26 ? h - 65 : h - 97 < 26 ? h - 97 : 36) >= 36 || u > f((l - _) / i)) && g("overflow"), _ += u * i, !(u < (c = s <= b ? 1 : s >= b + 26 ? 26 : s - b)); s += 36) i > f(l / (d = 36 - c)) && g("overflow"), i *= d;
                    b = T(_ - a, t = p.length + 1, 0 == a), f(_ / t) > l - v && g("overflow"), v += f(_ / t), _ %= t, p.splice(_++, 0, v)
                }
                return E(p)
            }

            function N(e) {
                var t, n, r, o, a, i, s, u, c, d, h, m, _, E, C, N = [];
                for (m = (e = v(e)).length, t = 128, n = 0, a = 72, i = 0; i < m; ++i)(h = e[i]) < 128 && N.push(p(h));
                for (r = o = N.length, o && N.push("-"); r < m;) {
                    for (s = l, i = 0; i < m; ++i)(h = e[i]) >= t && h < s && (s = h);
                    for (s - t > f((l - n) / (_ = r + 1)) && g("overflow"), n += (s - t) * _, t = s, i = 0; i < m; ++i)
                        if ((h = e[i]) < t && ++n > l && g("overflow"), h == t) {
                            for (u = n, c = 36; !(u < (d = c <= a ? 1 : c >= a + 26 ? 26 : c - a)); c += 36) C = u - d, E = 36 - d, N.push(p(b(d + C % E, 0))), u = f(C / E);
                            N.push(p(b(u, 0))), a = T(n, _, r == o), n = 0, ++r
                        }++n, ++t
                }
                return N.join("")
            }
            s = {
                version: "1.4.1",
                ucs2: {
                    decode: v,
                    encode: E
                },
                decode: C,
                encode: N,
                toASCII: function(e) {
                    return _(e, (function(e) {
                        return c.test(e) ? "xn--" + N(e) : e
                    }))
                },
                toUnicode: function(e) {
                    return _(e, (function(e) {
                        return u.test(e) ? C(e.slice(4).toLowerCase()) : e
                    }))
                }
            }, void 0 === (o = function() {
                return s
            }.call(t, n, t, e)) || (e.exports = o)
        }()
    }).call(this, n(2)(e), n(3))
}, function(e, t, n) {
    "use strict";
    e.exports = {
        isString: function(e) {
            return "string" == typeof e
        },
        isObject: function(e) {
            return "object" == typeof e && null !== e
        },
        isNull: function(e) {
            return null === e
        },
        isNullOrUndefined: function(e) {
            return null == e
        }
    }
}, function(e, t, n) {
    "use strict";
    t.decode = t.parse = n(12), t.encode = t.stringify = n(13)
}, function(e, t, n) {
    "use strict";

    function r(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    e.exports = function(e, t, n, a) {
        t = t || "&", n = n || "=";
        var i = {};
        if ("string" != typeof e || 0 === e.length) return i;
        var s = /\+/g;
        e = e.split(t);
        var l = 1e3;
        a && "number" == typeof a.maxKeys && (l = a.maxKeys);
        var u = e.length;
        l > 0 && u > l && (u = l);
        for (var c = 0; c < u; ++c) {
            var d, h, f, p, g = e[c].replace(s, "%20"),
                m = g.indexOf(n);
            m >= 0 ? (d = g.substr(0, m), h = g.substr(m + 1)) : (d = g, h = ""), f = decodeURIComponent(d), p = decodeURIComponent(h), r(i, f) ? o(i[f]) ? i[f].push(p) : i[f] = [i[f], p] : i[f] = p
        }
        return i
    };
    var o = Array.isArray || function(e) {
        return "[object Array]" === Object.prototype.toString.call(e)
    }
}, function(e, t, n) {
    "use strict";
    var r = function(e) {
        switch (typeof e) {
            case "string":
                return e;
            case "boolean":
                return e ? "true" : "false";
            case "number":
                return isFinite(e) ? e : "";
            default:
                return ""
        }
    };
    e.exports = function(e, t, n, s) {
        return t = t || "&", n = n || "=", null === e && (e = void 0), "object" == typeof e ? a(i(e), (function(i) {
            var s = encodeURIComponent(r(i)) + n;
            return o(e[i]) ? a(e[i], (function(e) {
                return s + encodeURIComponent(r(e))
            })).join(t) : s + encodeURIComponent(r(e[i]))
        })).join(t) : s ? encodeURIComponent(r(s)) + n + encodeURIComponent(r(e)) : ""
    };
    var o = Array.isArray || function(e) {
        return "[object Array]" === Object.prototype.toString.call(e)
    };

    function a(e, t) {
        if (e.map) return e.map(t);
        for (var n = [], r = 0; r < e.length; r++) n.push(t(e[r], r));
        return n
    }
    var i = Object.keys || function(e) {
        var t = [];
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.push(n);
        return t
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.observeComponent = function(e) {
        var t = void 0,
            n = [],
            a = window.document,
            i = [],
            s = window.MutationObserver || window.WebKitMutationObserver;
        0;

        function l(e, t) {
            if (o.Logger.debug("Check Selector..."), o.Logger.debug("Selector: ", e), o.Logger.debug("Function: ", t), e && e.length) {
                var n = a.querySelectorAll(e);
                o.Logger.debug("Elements: ", n);
                for (var l = r.SELECTORS.LINK_BLOCK_CONTAINER.selector.split(","), u = 0, c = n.length; u < c; u++) {
                    for (var d = n[u], h = 0; h < i.length; h++)
                        if (i[h] === d.className || i[h] === d.id) return !d.firstChild && l.indexOf(e) >= 0 && (t.call(d, d), o.Logger.debug("Inserted element", d), o.Logger.debug("Inserted in selector", e)), void o.Logger.debug("Return checkSelector because readySet has element", i);
                    d.className && i.push(d.className), d.id && i.push(d.id), (!d.firstChild && l.indexOf(e) >= 0 || !d.ready || null == s) && (d.ready = !0, t.call(d, d), o.Logger.debug("Inserted element", d), o.Logger.debug("Inserted in selector", e))
                }
            }
        }

        function u() {
            n.forEach((function(e) {
                return l(e.selector, e.fn)
            }))
        }
        return e.jsElementReady = function(e, r) {
            if (o.Logger.debug("JS Element Ready --------------------------------------------"), o.Logger.debugMode) {
                var i = document.getElementsByClassName("be-ix-link-block");
                o.Logger.debug("Link Block: ", i)
            }
            return null != s ? (t || (t = new s(u)).observe(a.documentElement, {
                    childList: !0,
                    subtree: !0
                }), n.push({
                    selector: e,
                    fn: r
                })) : (document.addEventListener || (document.addEventListener = document.attachEvent), document.addEventListener("DOMContentLoaded", (function(t) {
                    if (e && e.length)
                        for (var n = a.querySelectorAll(e), o = 0, i = n.length; o < i; o++) {
                            var s = n[o];
                            s.ready = !0, r.call(s, s)
                        }
                }))), l(e, r),
                function() {
                    return function(e, r) {
                        var a = n.length;
                        for (; a--;) {
                            var i = n[a];
                            i.selector === e && i.fn === r && e && e.firstChild && (n.splice(a, 1), !n.length && t && (t.disconnect(), t = null, o.Logger.debug("RemoveListener: ", e)))
                        }
                    }(e, r)
                }
        }, e.jsElementReady
    };
    var r = n(0),
        o = n(4)
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.linkBlockGeneratorComponent = function(e) {
        e.MAXIMUM_HEADLINE_LENGTH = 100, e.MAXIMUM_DESC_LENGTH = 200, e.IND_LINK_BLOCK_TYPE_URL_TYPE = 0, e.IND_LINK_BLOCK_TYPE_HEADLINE_TYPE = 1, e.IND_LINK_BLOCK_TYPE_DESCRIPTION_TYPE = 2, e.IND_LINK_BLOCK_TYPE_IMAGE_TYPE = 3, e.REPLACEMENT_STRATEGY_OVERWRITE = 0, e.REPLACEMENT_STRATEGY_POST_APPEND_ELEMENT = 1, e.REPLACEMENT_STRATEGY_PRE_APPEND_ELEMENT = 2, e.REPLACEMENT_STRATEGY_PRE_APPEND_PARENT = 3, e.setMaximumHeadlineLength = function(t) {
            e.MAXIMUM_HEADLINE_LENGTH = t
        }, e.setMaximumDescriptionLength = function(t) {
            e.MAXIMUM_DESC_LENGTH = t
        }, e.generateIndividualLinks = function(t, n, r) {
            var o = n[0],
                a = document.createElement(o),
                i = n[1],
                s = n[2],
                l = n[3];
            for (var u in i) a.setAttribute(u, i[u]);
            var c = !1;
            if (s.indexOf(e.IND_LINK_BLOCK_TYPE_URL_TYPE) >= 0 && (a.setAttribute("href", r.url), c = !0), s.indexOf(e.IND_LINK_BLOCK_TYPE_HEADLINE_TYPE) >= 0 && r.h1) {
                var d = r.h1;
                d.length > e.MAXIMUM_HEADLINE_LENGTH && (d = d.substring(0, e.MAXIMUM_HEADLINE_LENGTH) + "...");
                var h = document.createTextNode(d);
                a.appendChild(h), c = !0
            }
            if (s.indexOf(e.IND_LINK_BLOCK_TYPE_DESCRIPTION_TYPE) >= 0 && r.desc) {
                var f = r.desc;
                f.length, e.MAXIMUM_DESC_LENGTH;
                var p = document.createTextNode(f);
                a.appendChild(p), c = !0
            }
            if (s.indexOf(e.IND_LINK_BLOCK_TYPE_IMAGE_TYPE) >= 0 && r.image && (a.setAttribute("src", r.image), c = !0), c || 0 === s.length) {
                for (var g = 0; g < l.length; g++) {
                    var m = l[g];
                    e.generateIndividualLinks(a, m, r)
                }
                t.appendChild(a)
            }
        }, e.insertLinkBlocks = function(t, n, r, o, a, i) {
            if (null != t) {
                if (n === e.REPLACEMENT_STRATEGY_OVERWRITE)
                    for (; t.firstChild;) t.removeChild(t.firstChild);
                for (var s = t, l = 0; l < r.length; l++) {
                    var u = r[l],
                        c = u[0],
                        d = document.createElement(c),
                        h = u[1];
                    for (var f in h) d.setAttribute(f, h[f]);
                    if (i && i[0] === l) {
                        var p = i[1],
                            g = document.createElement(p),
                            m = i[2],
                            _ = i[3];
                        for (var v in m) g.setAttribute(v, m[v]);
                        var E = document.createTextNode(_);
                        g.appendChild(E), d.appendChild(g)
                    }
                    if (l === r.length - 1)
                        for (var b = 0; b < a.length; b++)
                            for (var T = a[b], C = 0; C < o.length; C++) e.generateIndividualLinks(d, o[C], T);
                    if (s === t)
                        if (n === e.REPLACEMENT_STRATEGY_PRE_APPEND_ELEMENT) s.insertBefore(d, t.firstChild);
                        else if (n === e.REPLACEMENT_STRATEGY_PRE_APPEND_PARENT) {
                        s.parentElement.insertBefore(d, s)
                    } else s.appendChild(d);
                    else s.appendChild(d);
                    s = d
                }
            }
        }
    }
}, function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n(5);
    n.d(t, "enableMarvel", (function() {
        return r.enableMarvel
    }))
}]);
//# sourceMappingURL=autopilot_sdk.js.map