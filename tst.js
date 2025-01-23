// This is just a sample script. Paste your real code (javascript or HTML) here.
! function(n, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = n.document ? t(n, !0) : function(n) {
        if (!n.document) throw new Error("jQuery requires a window with a document");
        return t(n)
    } : t(n)
}("undefined" != typeof window ? window : this, function(n, t) {
    "use strict";

    function kr(n, t, i) {
        var r, e, u = (i = i || f).createElement("script");
        if (u.text = n, t)
            for (r in oe)(e = t[r] || t.getAttribute && t.getAttribute(r)) && u.setAttribute(r, e);
        i.head.appendChild(u).parentNode.removeChild(u)
    }

    function ut(n) {
        return null == n ? n + "" : "object" == typeof n || "function" == typeof n ? ri[wr.call(n)] || "object" : typeof n
    }

    function pi(n) {
        var t = !!n && "length" in n && n.length,
            i = ut(n);
        return !u(n) && !rt(n) && ("array" === i || 0 === t || "number" == typeof t && 0 < t && t - 1 in n)
    }

    function c(n, t) {
        return n.nodeName && n.nodeName.toLowerCase() === t.toLowerCase()
    }

    function bi(n, t, r) {
        return u(t) ? i.grep(n, function(n, i) {
            return !!t.call(n, i, n) !== r
        }) : t.nodeType ? i.grep(n, function(n) {
            return n === t !== r
        }) : "string" != typeof t ? i.grep(n, function(n) {
            return -1 < ii.call(t, n) !== r
        }) : i.filter(t, n, r)
    }

    function fu(n, t) {
        while ((n = n[t]) && 1 !== n.nodeType);
        return n
    }

    function et(n) {
        return n
    }

    function fi(n) {
        throw n;
    }

    function eu(n, t, i, r) {
        var f;
        try {
            n && u(f = n.promise) ? f.call(n).done(t).fail(i) : n && u(f = n.then) ? f.call(n, t, i) : t.apply(void 0, [n].slice(r))
        } catch (n) {
            i.apply(void 0, [n])
        }
    }

    function oi() {
        f.removeEventListener("DOMContentLoaded", oi);
        n.removeEventListener("load", oi);
        i.ready()
    }

    function ce(n, t) {
        return t.toUpperCase()
    }

    function y(n) {
        return n.replace(se, "ms-").replace(he, ce)
    }

    function bt() {
        this.expando = i.expando + bt.uid++
    }

    function su(n, t, i) {
        var u, r;
        if (void 0 === i && 1 === n.nodeType)
            if (u = "data-" + t.replace(ae, "-$&").toLowerCase(), "string" == typeof(i = n.getAttribute(u))) {
                try {
                    i = "true" === (r = i) || "false" !== r && ("null" === r ? null : r === +r + "" ? +r : le.test(r) ? JSON.parse(r) : r)
                } catch (n) {}
                o.set(n, t, i)
            } else i = void 0;
        return i
    }

    function cu(n, t, r, u) {
        var s, h, c = 20,
            l = u ? function() {
                return u.cur()
            } : function() {
                return i.css(n, t, "")
            },
            o = l(),
            e = r && r[3] || (i.cssNumber[t] ? "" : "px"),
            f = n.nodeType && (i.cssNumber[t] || "px" !== e && +o) && kt.exec(i.css(n, t));
        if (f && f[3] !== e) {
            for (o /= 2, e = e || f[3], f = +o || 1; c--;) i.style(n, t, f + e), (1 - h) * (1 - (h = l() / o || .5)) <= 0 && (c = 0), f /= h;
            f *= 2;
            i.style(n, t, f + e);
            r = r || []
        }
        return r && (f = +f || +o || 0, s = r[1] ? f + (r[1] + 1) * r[2] : +r[2], u && (u.unit = e, u.start = f, u.end = s)), s
    }

    function ht(n, t) {
        for (var h, f, a, s, c, l, e, o = [], u = 0, v = n.length; u < v; u++)(f = n[u]).style && (h = f.style.display, t ? ("none" === h && (o[u] = r.get(f, "display") || null, o[u] || (f.style.display = "")), "" === f.style.display && dt(f) && (o[u] = (e = c = s = void 0, c = (a = f).ownerDocument, l = a.nodeName, (e = ki[l]) || (s = c.body.appendChild(c.createElement(l)), e = i.css(s, "display"), s.parentNode.removeChild(s), "none" === e && (e = "block"), ki[l] = e)))) : "none" !== h && (o[u] = "none", r.set(f, "display", h)));
        for (u = 0; u < v; u++) null != o[u] && (n[u].style.display = o[u]);
        return n
    }

    function s(n, t) {
        var r;
        return r = "undefined" != typeof n.getElementsByTagName ? n.getElementsByTagName(t || "*") : "undefined" != typeof n.querySelectorAll ? n.querySelectorAll(t || "*") : [], void 0 === t || t && c(n, t) ? i.merge([n], r) : r
    }

    function di(n, t) {
        for (var i = 0, u = n.length; i < u; i++) r.set(n[i], "globalEval", !t || r.get(t[i], "globalEval"))
    }

    function yu(n, t, r, u, f) {
        for (var e, o, p, a, w, v, c = t.createDocumentFragment(), y = [], l = 0, b = n.length; l < b; l++)
            if ((e = n[l]) || 0 === e)
                if ("object" === ut(e)) i.merge(y, e.nodeType ? [e] : e);
                else if (vu.test(e)) {
            for (o = o || c.appendChild(t.createElement("div")), p = (lu.exec(e) || ["", ""])[1].toLowerCase(), a = h[p] || h._default, o.innerHTML = a[1] + i.htmlPrefilter(e) + a[2], v = a[0]; v--;) o = o.lastChild;
            i.merge(y, o.childNodes);
            (o = c.firstChild).textContent = ""
        } else y.push(t.createTextNode(e));
        for (c.textContent = "", l = 0; e = y[l++];)
            if (u && -1 < i.inArray(e, u)) f && f.push(e);
            else if (w = st(e), o = s(c.appendChild(e), "script"), w && di(o), r)
            for (v = 0; e = o[v++];) au.test(e.type || "") && r.push(e);
        return c
    }

    function ct() {
        return !0
    }

    function lt() {
        return !1
    }

    function ye(n, t) {
        return n === function() {
            try {
                return f.activeElement
            } catch (n) {}
        }() == ("focus" === t)
    }

    function nr(n, t, r, u, f, e) {
        var o, s;
        if ("object" == typeof t) {
            for (s in "string" != typeof r && (u = u || r, r = void 0), t) nr(n, s, r, u, t[s], e);
            return n
        }
        if (null == u && null == f ? (f = r, u = r = void 0) : null == f && ("string" == typeof r ? (f = u, u = void 0) : (f = u, u = r, r = void 0)), !1 === f) f = lt;
        else if (!f) return n;
        return 1 === e && (o = f, (f = function(n) {
            return i().off(n), o.apply(this, arguments)
        }).guid = o.guid || (o.guid = i.guid++)), n.each(function() {
            i.event.add(this, t, f, u, r)
        })
    }

    function hi(n, t, u) {
        u ? (r.set(n, t, !1), i.event.add(n, t, {
            namespace: !1,
            handler: function(n) {
                var o, e, f = r.get(this, t);
                if (1 & n.isTrigger && this[t]) {
                    if (f.length)(i.event.special[t] || {}).delegateType && n.stopPropagation();
                    else if (f = k.call(arguments), r.set(this, t, f), o = u(this, t), this[t](), f !== (e = r.get(this, t)) || o ? r.set(this, t, !1) : e = {}, f !== e) return n.stopImmediatePropagation(), n.preventDefault(), e && e.value
                } else f.length && (r.set(this, t, {
                    value: i.event.trigger(i.extend(f[0], i.Event.prototype), f.slice(1), this)
                }), n.stopImmediatePropagation())
            }
        })) : void 0 === r.get(n, t) && i.event.add(n, t, ct)
    }

    function pu(n, t) {
        return c(n, "table") && c(11 !== t.nodeType ? t : t.firstChild, "tr") && i(n).children("tbody")[0] || n
    }

    function ke(n) {
        return n.type = (null !== n.getAttribute("type")) + "/" + n.type, n
    }

    function de(n) {
        return "true/" === (n.type || "").slice(0, 5) ? n.type = n.type.slice(5) : n.removeAttribute("type"), n
    }

    function wu(n, t) {
        var u, s, f, h, c, e;
        if (1 === t.nodeType) {
            if (r.hasData(n) && (e = r.get(n).events))
                for (f in r.remove(t, "handle events"), e)
                    for (u = 0, s = e[f].length; u < s; u++) i.event.add(t, f, e[f][u]);
            o.hasData(n) && (h = o.access(n), c = i.extend({}, h), o.set(t, c))
        }
    }

    function at(n, t, f, o) {
        t = pr(t);
        var a, b, l, v, h, y, c = 0,
            p = n.length,
            d = p - 1,
            w = t[0],
            k = u(w);
        if (k || 1 < p && "string" == typeof w && !e.checkClone && we.test(w)) return n.each(function(i) {
            var r = n.eq(i);
            k && (t[0] = w.call(this, i, r.html()));
            at(r, t, f, o)
        });
        if (p && (b = (a = yu(t, n[0].ownerDocument, !1, n, o)).firstChild, 1 === a.childNodes.length && (a = b), b || o)) {
            for (v = (l = i.map(s(a, "script"), ke)).length; c < p; c++) h = a, c !== d && (h = i.clone(h, !0, !0), v && i.merge(l, s(h, "script"))), f.call(n[c], h, c);
            if (v)
                for (y = l[l.length - 1].ownerDocument, i.map(l, de), c = 0; c < v; c++) h = l[c], au.test(h.type || "") && !r.access(h, "globalEval") && i.contains(y, h) && (h.src && "module" !== (h.type || "").toLowerCase() ? i._evalUrl && !h.noModule && i._evalUrl(h.src, {
                    nonce: h.nonce || h.getAttribute("nonce")
                }, y) : kr(h.textContent.replace(be, ""), h, y))
        }
        return n
    }

    function bu(n, t, r) {
        for (var u, e = t ? i.filter(t, n) : n, f = 0; null != (u = e[f]); f++) r || 1 !== u.nodeType || i.cleanData(s(u)), u.parentNode && (r && st(u) && di(s(u, "script")), u.parentNode.removeChild(u));
        return n
    }

    function ni(n, t, r) {
        var o, s, h, f, u = n.style;
        return (r = r || ci(n)) && ("" !== (f = r.getPropertyValue(t) || r[t]) || st(n) || (f = i.style(n, t)), !e.pixelBoxStyles() && tr.test(f) && ge.test(t) && (o = u.width, s = u.minWidth, h = u.maxWidth, u.minWidth = u.maxWidth = u.width = f, f = r.width, u.width = o, u.minWidth = s, u.maxWidth = h)), void 0 !== f ? f + "" : f
    }

    function du(n, t) {
        return {
            get: function() {
                if (!n()) return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }

    function ir(n) {
        var t = i.cssProps[n] || tf[n];
        return t || (n in nf ? n : tf[n] = function(n) {
            for (var i = n[0].toUpperCase() + n.slice(1), t = gu.length; t--;)
                if ((n = gu[t] + i) in nf) return n
        }(n) || n)
    }

    function ff(n, t, i) {
        var r = kt.exec(t);
        return r ? Math.max(0, r[2] - (i || 0)) + (r[3] || "px") : t
    }

    function rr(n, t, r, u, f, e) {
        var o = "width" === t ? 1 : 0,
            h = 0,
            s = 0;
        if (r === (u ? "border" : "content")) return 0;
        for (; o < 4; o += 2) "margin" === r && (s += i.css(n, r + b[o], !0, f)), u ? ("content" === r && (s -= i.css(n, "padding" + b[o], !0, f)), "margin" !== r && (s -= i.css(n, "border" + b[o] + "Width", !0, f))) : (s += i.css(n, "padding" + b[o], !0, f), "padding" !== r ? s += i.css(n, "border" + b[o] + "Width", !0, f) : h += i.css(n, "border" + b[o] + "Width", !0, f));
        return !u && 0 <= e && (s += Math.max(0, Math.ceil(n["offset" + t[0].toUpperCase() + t.slice(1)] - e - s - h - .5)) || 0), s
    }

    function ef(n, t, r) {
        var f = ci(n),
            o = (!e.boxSizingReliable() || r) && "border-box" === i.css(n, "boxSizing", !1, f),
            s = o,
            u = ni(n, t, f),
            h = "offset" + t[0].toUpperCase() + t.slice(1);
        if (tr.test(u)) {
            if (!r) return u;
            u = "auto"
        }
        return (!e.boxSizingReliable() && o || !e.reliableTrDimensions() && c(n, "tr") || "auto" === u || !parseFloat(u) && "inline" === i.css(n, "display", !1, f)) && n.getClientRects().length && (o = "border-box" === i.css(n, "boxSizing", !1, f), (s = h in n) && (u = n[h])), (u = parseFloat(u) || 0) + rr(n, t, r || (o ? "border" : "content"), s, f, u) + "px"
    }

    function a(n, t, i, r, u) {
        return new a.prototype.init(n, t, i, r, u)
    }

    function ur() {
        li && (!1 === f.hidden && n.requestAnimationFrame ? n.requestAnimationFrame(ur) : n.setTimeout(ur, i.fx.interval), i.fx.tick())
    }

    function cf() {
        return n.setTimeout(function() {
            vt = void 0
        }), vt = Date.now()
    }

    function ai(n, t) {
        var u, r = 0,
            i = {
                height: n
            };
        for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (u = b[r])] = i["padding" + u] = n;
        return t && (i.opacity = i.width = n), i
    }

    function lf(n, t, i) {
        for (var u, f = (v.tweeners[t] || []).concat(v.tweeners["*"]), r = 0, e = f.length; r < e; r++)
            if (u = f[r].call(i, t, n)) return u
    }

    function v(n, t, r) {
        var o, s, h = 0,
            a = v.prefilters.length,
            e = i.Deferred().always(function() {
                delete l.elem
            }),
            l = function() {
                if (s) return !1;
                for (var o = vt || cf(), t = Math.max(0, f.startTime + f.duration - o), i = 1 - (t / f.duration || 0), r = 0, u = f.tweens.length; r < u; r++) f.tweens[r].run(i);
                return e.notifyWith(n, [f, i, t]), i < 1 && u ? t : (u || e.notifyWith(n, [f, 1, 0]), e.resolveWith(n, [f]), !1)
            },
            f = e.promise({
                elem: n,
                props: i.extend({}, t),
                opts: i.extend(!0, {
                    specialEasing: {},
                    easing: i.easing._default
                }, r),
                originalProperties: t,
                originalOptions: r,
                startTime: vt || cf(),
                duration: r.duration,
                tweens: [],
                createTween: function(t, r) {
                    var u = i.Tween(n, f.opts, t, r, f.opts.specialEasing[t] || f.opts.easing);
                    return f.tweens.push(u), u
                },
                stop: function(t) {
                    var i = 0,
                        r = t ? f.tweens.length : 0;
                    if (s) return this;
                    for (s = !0; i < r; i++) f.tweens[i].run(1);
                    return t ? (e.notifyWith(n, [f, 1, 0]), e.resolveWith(n, [f, t])) : e.rejectWith(n, [f, t]), this
                }
            }),
            c = f.props;
        for (! function(n, t) {
                var r, f, e, u, o;
                for (r in n)
                    if (e = t[f = y(r)], u = n[r], Array.isArray(u) && (e = u[1], u = n[r] = u[0]), r !== f && (n[f] = u, delete n[r]), (o = i.cssHooks[f]) && "expand" in o)
                        for (r in u = o.expand(u), delete n[f], u) r in n || (n[r] = u[r], t[r] = e);
                    else t[f] = e
            }(c, f.opts.specialEasing); h < a; h++)
            if (o = v.prefilters[h].call(f, n, c, f.opts)) return u(o.stop) && (i._queueHooks(f.elem, f.opts.queue).stop = o.stop.bind(o)), o;
        return i.map(c, lf, f), u(f.opts.start) && f.opts.start.call(n, f), f.progress(f.opts.progress).done(f.opts.done, f.opts.complete).fail(f.opts.fail).always(f.opts.always), i.fx.timer(i.extend(l, {
            elem: n,
            anim: f,
            queue: f.opts.queue
        })), f
    }

    function tt(n) {
        return (n.match(l) || []).join(" ")
    }

    function it(n) {
        return n.getAttribute && n.getAttribute("class") || ""
    }

    function fr(n) {
        return Array.isArray(n) ? n : "string" == typeof n && n.match(l) || []
    }

    function hr(n, t, r, u) {
        var f;
        if (Array.isArray(t)) i.each(t, function(t, i) {
            r || io.test(n) ? u(n, i) : hr(n + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, r, u)
        });
        else if (r || "object" !== ut(t)) u(n, t);
        else
            for (f in t) hr(n + "[" + f + "]", t[f], r, u)
    }

    function gf(n) {
        return function(t, i) {
            "string" != typeof t && (i = t, t = "*");
            var r, f = 0,
                e = t.toLowerCase().match(l) || [];
            if (u(i))
                while (r = e[f++]) "+" === r[0] ? (r = r.slice(1) || "*", (n[r] = n[r] || []).unshift(i)) : (n[r] = n[r] || []).push(i)
        }
    }

    function ne(n, t, r, u) {
        function e(s) {
            var h;
            return f[s] = !0, i.each(n[s] || [], function(n, i) {
                var s = i(t, r, u);
                return "string" != typeof s || o || f[s] ? o ? !(h = s) : void 0 : (t.dataTypes.unshift(s), e(s), !1)
            }), h
        }
        var f = {},
            o = n === cr;
        return e(t.dataTypes[0]) || !f["*"] && e("*")
    }

    function ar(n, t) {
        var r, u, f = i.ajaxSettings.flatOptions || {};
        for (r in t) void 0 !== t[r] && ((f[r] ? n : u || (u = {}))[r] = t[r]);
        return u && i.extend(!0, n, u), n
    }
    var p = [],
        yr = Object.getPrototypeOf,
        k = p.slice,
        pr = p.flat ? function(n) {
            return p.flat.call(n)
        } : function(n) {
            return p.concat.apply([], n)
        },
        yi = p.push,
        ii = p.indexOf,
        ri = {},
        wr = ri.toString,
        ui = ri.hasOwnProperty,
        br = ui.toString,
        ee = br.call(Object),
        e = {},
        u = function(n) {
            return "function" == typeof n && "number" != typeof n.nodeType && "function" != typeof n.item
        },
        rt = function(n) {
            return null != n && n === n.window
        },
        f = n.document,
        oe = {
            type: !0,
            src: !0,
            nonce: !0,
            noModule: !0
        },
        dr = "3.6.0",
        i = function(n, t) {
            return new i.fn.init(n, t)
        },
        d, wi, tu, iu, ru, uu, l, ou, ei, ot, dt, ki, h, vu, gi, vt, li, yt, of, sf, hf, af, pt, vf, yf, pf, er, or, te, wt, ie, vr, vi, re, ue, fe;
    i.fn = i.prototype = {
        jquery: dr,
        constructor: i,
        length: 0,
        toArray: function() {
            return k.call(this)
        },
        get: function(n) {
            return null == n ? k.call(this) : n < 0 ? this[n + this.length] : this[n]
        },
        pushStack: function(n) {
            var t = i.merge(this.constructor(), n);
            return t.prevObject = this, t
        },
        each: function(n) {
            return i.each(this, n)
        },
        map: function(n) {
            return this.pushStack(i.map(this, function(t, i) {
                return n.call(t, i, t)
            }))
        },
        slice: function() {
            return this.pushStack(k.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        even: function() {
            return this.pushStack(i.grep(this, function(n, t) {
                return (t + 1) % 2
            }))
        },
        odd: function() {
            return this.pushStack(i.grep(this, function(n, t) {
                return t % 2
            }))
        },
        eq: function(n) {
            var i = this.length,
                t = +n + (n < 0 ? i : 0);
            return this.pushStack(0 <= t && t < i ? [this[t]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: yi,
        sort: p.sort,
        splice: p.splice
    };
    i.extend = i.fn.extend = function() {
        var s, f, e, t, o, c, n = arguments[0] || {},
            r = 1,
            l = arguments.length,
            h = !1;
        for ("boolean" == typeof n && (h = n, n = arguments[r] || {}, r++), "object" == typeof n || u(n) || (n = {}), r === l && (n = this, r--); r < l; r++)
            if (null != (s = arguments[r]))
                for (f in s) t = s[f], "__proto__" !== f && n !== t && (h && t && (i.isPlainObject(t) || (o = Array.isArray(t))) ? (e = n[f], c = o && !Array.isArray(e) ? [] : o || i.isPlainObject(e) ? e : {}, o = !1, n[f] = i.extend(h, c, t)) : void 0 !== t && (n[f] = t));
        return n
    };
    i.extend({
        expando: "jQuery" + (dr + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(n) {
            throw new Error(n);
        },
        noop: function() {},
        isPlainObject: function(n) {
            var t, i;
            return !(!n || "[object Object]" !== wr.call(n)) && (!(t = yr(n)) || "function" == typeof(i = ui.call(t, "constructor") && t.constructor) && br.call(i) === ee)
        },
        isEmptyObject: function(n) {
            for (var t in n) return !1;
            return !0
        },
        globalEval: function(n, t, i) {
            kr(n, {
                nonce: t && t.nonce
            }, i)
        },
        each: function(n, t) {
            var r, i = 0;
            if (pi(n)) {
                for (r = n.length; i < r; i++)
                    if (!1 === t.call(n[i], i, n[i])) break
            } else
                for (i in n)
                    if (!1 === t.call(n[i], i, n[i])) break;
            return n
        },
        makeArray: function(n, t) {
            var r = t || [];
            return null != n && (pi(Object(n)) ? i.merge(r, "string" == typeof n ? [n] : n) : yi.call(r, n)), r
        },
        inArray: function(n, t, i) {
            return null == t ? -1 : ii.call(t, n, i)
        },
        merge: function(n, t) {
            for (var u = +t.length, i = 0, r = n.length; i < u; i++) n[r++] = t[i];
            return n.length = r, n
        },
        grep: function(n, t, i) {
            for (var u = [], r = 0, f = n.length, e = !i; r < f; r++) !t(n[r], r) !== e && u.push(n[r]);
            return u
        },
        map: function(n, t, i) {
            var e, u, r = 0,
                f = [];
            if (pi(n))
                for (e = n.length; r < e; r++) null != (u = t(n[r], r, i)) && f.push(u);
            else
                for (r in n) null != (u = t(n[r], r, i)) && f.push(u);
            return pr(f)
        },
        guid: 1,
        support: e
    });
    "function" == typeof Symbol && (i.fn[Symbol.iterator] = p[Symbol.iterator]);
    i.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(n, t) {
        ri["[object " + t + "]"] = t.toLowerCase()
    });
    d = function(n) {
        function u(n, t, r, u) {
            var s, y, c, l, p, w, d, v = t && t.ownerDocument,
                a = t ? t.nodeType : 9;
            if (r = r || [], "string" != typeof n || !n || 1 !== a && 9 !== a && 11 !== a) return r;
            if (!u && (b(t), t = t || i, h)) {
                if (11 !== a && (p = ar.exec(n)))
                    if (s = p[1]) {
                        if (9 === a) {
                            if (!(c = t.getElementById(s))) return r;
                            if (c.id === s) return r.push(c), r
                        } else if (v && (c = v.getElementById(s)) && et(t, c) && c.id === s) return r.push(c), r
                    } else {
                        if (p[2]) return k.apply(r, t.getElementsByTagName(n)), r;
                        if ((s = p[3]) && f.getElementsByClassName && t.getElementsByClassName) return k.apply(r, t.getElementsByClassName(s)), r
                    } if (f.qsa && !lt[n + " "] && (!o || !o.test(n)) && (1 !== a || "object" !== t.nodeName.toLowerCase())) {
                    if (d = n, v = t, 1 === a && (er.test(n) || yi.test(n))) {
                        for ((v = ti.test(n) && ri(t.parentNode) || t) === t && f.scope || ((l = t.getAttribute("id")) ? l = l.replace(pi, wi) : t.setAttribute("id", l = e)), y = (w = ft(n)).length; y--;) w[y] = (l ? "#" + l : ":scope") + " " + pt(w[y]);
                        d = w.join(",")
                    }
                    try {
                        return k.apply(r, v.querySelectorAll(d)), r
                    } catch (t) {
                        lt(n, !0)
                    } finally {
                        l === e && t.removeAttribute("id")
                    }
                }
            }
            return si(n.replace(at, "$1"), t, r, u)
        }

        function yt() {
            var n = [];
            return function i(r, u) {
                return n.push(r + " ") > t.cacheLength && delete i[n.shift()], i[r + " "] = u
            }
        }

        function l(n) {
            return n[e] = !0, n
        }

        function a(n) {
            var t = i.createElement("fieldset");
            try {
                return !!n(t)
            } catch (n) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t);
                t = null
            }
        }

        function ii(n, i) {
            for (var r = n.split("|"), u = r.length; u--;) t.attrHandle[r[u]] = i
        }

        function ki(n, t) {
            var i = t && n,
                r = i && 1 === n.nodeType && 1 === t.nodeType && n.sourceIndex - t.sourceIndex;
            if (r) return r;
            if (i)
                while (i = i.nextSibling)
                    if (i === t) return -1;
            return n ? 1 : -1
        }

        function yr(n) {
            return function(t) {
                return "input" === t.nodeName.toLowerCase() && t.type === n
            }
        }

        function pr(n) {
            return function(t) {
                var i = t.nodeName.toLowerCase();
                return ("input" === i || "button" === i) && t.type === n
            }
        }

        function di(n) {
            return function(t) {
                return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === n : t.disabled === n : t.isDisabled === n || t.isDisabled !== !n && vr(t) === n : t.disabled === n : "label" in t && t.disabled === n
            }
        }

        function it(n) {
            return l(function(t) {
                return t = +t, l(function(i, r) {
                    for (var u, f = n([], i.length, t), e = f.length; e--;) i[u = f[e]] && (i[u] = !(r[u] = i[u]))
                })
            })
        }

        function ri(n) {
            return n && "undefined" != typeof n.getElementsByTagName && n
        }

        function gi() {}

        function pt(n) {
            for (var t = 0, r = n.length, i = ""; t < r; t++) i += n[t].value;
            return i
        }

        function wt(n, t, i) {
            var r = t.dir,
                u = t.next,
                f = u || r,
                o = i && "parentNode" === f,
                s = nr++;
            return t.first ? function(t, i, u) {
                while (t = t[r])
                    if (1 === t.nodeType || o) return n(t, i, u);
                return !1
            } : function(t, i, h) {
                var c, l, a, y = [v, s];
                if (h) {
                    while (t = t[r])
                        if ((1 === t.nodeType || o) && n(t, i, h)) return !0
                } else
                    while (t = t[r])
                        if (1 === t.nodeType || o)
                            if (l = (a = t[e] || (t[e] = {}))[t.uniqueID] || (a[t.uniqueID] = {}), u && u === t.nodeName.toLowerCase()) t = t[r] || t;
                            else {
                                if ((c = l[f]) && c[0] === v && c[1] === s) return y[2] = c[2];
                                if ((l[f] = y)[2] = n(t, i, h)) return !0
                            } return !1
            }
        }

        function ui(n) {
            return 1 < n.length ? function(t, i, r) {
                for (var u = n.length; u--;)
                    if (!n[u](t, i, r)) return !1;
                return !0
            } : n[0]
        }

        function bt(n, t, i, r, u) {
            for (var e, o = [], f = 0, s = n.length, h = null != t; f < s; f++)(e = n[f]) && (i && !i(e, r, u) || (o.push(e), h && t.push(f)));
            return o
        }

        function fi(n, t, i, r, f, o) {
            return r && !r[e] && (r = fi(r)), f && !f[e] && (f = fi(f, o)), l(function(e, o, s, h) {
                var a, l, v, w = [],
                    p = [],
                    b = o.length,
                    d = e || function(n, t, i) {
                        for (var r = 0, f = t.length; r < f; r++) u(n, t[r], i);
                        return i
                    }(t || "*", s.nodeType ? [s] : s, []),
                    y = !n || !e && t ? d : bt(d, w, n, s, h),
                    c = i ? f || (e ? n : b || r) ? [] : o : y;
                if (i && i(y, c, s, h), r)
                    for (a = bt(c, p), r(a, [], s, h), l = a.length; l--;)(v = a[l]) && (c[p[l]] = !(y[p[l]] = v));
                if (e) {
                    if (f || n) {
                        if (f) {
                            for (a = [], l = c.length; l--;)(v = c[l]) && a.push(y[l] = v);
                            f(null, c = [], a, h)
                        }
                        for (l = c.length; l--;)(v = c[l]) && -1 < (a = f ? nt(e, v) : w[l]) && (e[a] = !(o[a] = v))
                    }
                } else c = bt(c === o ? c.splice(b, c.length) : c), f ? f(null, o, c, h) : k.apply(o, c)
            })
        }

        function ei(n) {
            for (var o, u, r, s = n.length, h = t.relative[n[0].type], c = h || t.relative[" "], i = h ? 1 : 0, l = wt(function(n) {
                    return n === o
                }, c, !0), a = wt(function(n) {
                    return -1 < nt(o, n)
                }, c, !0), f = [function(n, t, i) {
                    var r = !h && (i || t !== ht) || ((o = t).nodeType ? l(n, t, i) : a(n, t, i));
                    return o = null, r
                }]; i < s; i++)
                if (u = t.relative[n[i].type]) f = [wt(ui(f), u)];
                else {
                    if ((u = t.filter[n[i].type].apply(null, n[i].matches))[e]) {
                        for (r = ++i; r < s; r++)
                            if (t.relative[n[r].type]) break;
                        return fi(1 < i && ui(f), 1 < i && pt(n.slice(0, i - 1).concat({
                            value: " " === n[i - 2].type ? "*" : ""
                        })).replace(at, "$1"), u, i < r && ei(n.slice(i, r)), r < s && ei(n = n.slice(r)), r < s && pt(n))
                    }
                    f.push(u)
                } return ui(f)
        }
        var rt, f, t, st, oi, ft, kt, si, ht, w, ut, b, i, s, h, o, d, ct, et, e = "sizzle" + 1 * new Date,
            c = n.document,
            v = 0,
            nr = 0,
            hi = yt(),
            ci = yt(),
            li = yt(),
            lt = yt(),
            dt = function(n, t) {
                return n === t && (ut = !0), 0
            },
            tr = {}.hasOwnProperty,
            g = [],
            ir = g.pop,
            rr = g.push,
            k = g.push,
            ai = g.slice,
            nt = function(n, t) {
                for (var i = 0, r = n.length; i < r; i++)
                    if (n[i] === t) return i;
                return -1
            },
            gt = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            r = "[\\x20\\t\\r\\n\\f]",
            tt = "(?:\\\\[\\da-fA-F]{1,6}" + r + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
            vi = "\\[" + r + "*(" + tt + ")(?:" + r + "*([*^$|!~]?=)" + r + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + tt + "))|)" + r + "*\\]",
            ni = ":(" + tt + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + vi + ")*)|.*)\\)|)",
            ur = new RegExp(r + "+", "g"),
            at = new RegExp("^" + r + "+|((?:^|[^\\\\])(?:\\\\.)*)" + r + "+$", "g"),
            fr = new RegExp("^" + r + "*," + r + "*"),
            yi = new RegExp("^" + r + "*([>+~]|" + r + ")" + r + "*"),
            er = new RegExp(r + "|>"),
            or = new RegExp(ni),
            sr = new RegExp("^" + tt + "$"),
            vt = {
                ID: new RegExp("^#(" + tt + ")"),
                CLASS: new RegExp("^\\.(" + tt + ")"),
                TAG: new RegExp("^(" + tt + "|[*])"),
                ATTR: new RegExp("^" + vi),
                PSEUDO: new RegExp("^" + ni),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + r + "*(even|odd|(([+-]|)(\\d*)n|)" + r + "*(?:([+-]|)" + r + "*(\\d+)|))" + r + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + gt + ")$", "i"),
                needsContext: new RegExp("^" + r + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + r + "*((?:-\\d)?\\d*)" + r + "*\\)|)(?=[^-]|$)", "i")
            },
            hr = /HTML$/i,
            cr = /^(?:input|select|textarea|button)$/i,
            lr = /^h\d$/i,
            ot = /^[^{]+\{\s*\[native \w/,
            ar = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ti = /[+~]/,
            y = new RegExp("\\\\[\\da-fA-F]{1,6}" + r + "?|\\\\([^\\r\\n\\f])", "g"),
            p = function(n, t) {
                var i = "0x" + n.slice(1) - 65536;
                return t || (i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320))
            },
            pi = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            wi = function(n, t) {
                return t ? "\0" === n ? "�" : n.slice(0, -1) + "\\" + n.charCodeAt(n.length - 1).toString(16) + " " : "\\" + n
            },
            bi = function() {
                b()
            },
            vr = wt(function(n) {
                return !0 === n.disabled && "fieldset" === n.nodeName.toLowerCase()
            }, {
                dir: "parentNode",
                next: "legend"
            });
        try {
            k.apply(g = ai.call(c.childNodes), c.childNodes);
            g[c.childNodes.length].nodeType
        } catch (rt) {
            k = {
                apply: g.length ? function(n, t) {
                    rr.apply(n, ai.call(t))
                } : function(n, t) {
                    for (var i = n.length, r = 0; n[i++] = t[r++];);
                    n.length = i - 1
                }
            }
        }
        for (rt in f = u.support = {}, oi = u.isXML = function(n) {
                var i = n && n.namespaceURI,
                    t = n && (n.ownerDocument || n).documentElement;
                return !hr.test(i || t && t.nodeName || "HTML")
            }, b = u.setDocument = function(n) {
                var v, u, l = n ? n.ownerDocument || n : c;
                return l != i && 9 === l.nodeType && l.documentElement && (s = (i = l).documentElement, h = !oi(i), c != i && (u = i.defaultView) && u.top !== u && (u.addEventListener ? u.addEventListener("unload", bi, !1) : u.attachEvent && u.attachEvent("onunload", bi)), f.scope = a(function(n) {
                    return s.appendChild(n).appendChild(i.createElement("div")), "undefined" != typeof n.querySelectorAll && !n.querySelectorAll(":scope fieldset div").length
                }), f.attributes = a(function(n) {
                    return n.className = "i", !n.getAttribute("className")
                }), f.getElementsByTagName = a(function(n) {
                    return n.appendChild(i.createComment("")), !n.getElementsByTagName("*").length
                }), f.getElementsByClassName = ot.test(i.getElementsByClassName), f.getById = a(function(n) {
                    return s.appendChild(n).id = e, !i.getElementsByName || !i.getElementsByName(e).length
                }), f.getById ? (t.filter.ID = function(n) {
                    var t = n.replace(y, p);
                    return function(n) {
                        return n.getAttribute("id") === t
                    }
                }, t.find.ID = function(n, t) {
                    if ("undefined" != typeof t.getElementById && h) {
                        var i = t.getElementById(n);
                        return i ? [i] : []
                    }
                }) : (t.filter.ID = function(n) {
                    var t = n.replace(y, p);
                    return function(n) {
                        var i = "undefined" != typeof n.getAttributeNode && n.getAttributeNode("id");
                        return i && i.value === t
                    }
                }, t.find.ID = function(n, t) {
                    if ("undefined" != typeof t.getElementById && h) {
                        var r, u, f, i = t.getElementById(n);
                        if (i) {
                            if ((r = i.getAttributeNode("id")) && r.value === n) return [i];
                            for (f = t.getElementsByName(n), u = 0; i = f[u++];)
                                if ((r = i.getAttributeNode("id")) && r.value === n) return [i]
                        }
                        return []
                    }
                }), t.find.TAG = f.getElementsByTagName ? function(n, t) {
                    return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(n) : f.qsa ? t.querySelectorAll(n) : void 0
                } : function(n, t) {
                    var i, r = [],
                        f = 0,
                        u = t.getElementsByTagName(n);
                    if ("*" === n) {
                        while (i = u[f++]) 1 === i.nodeType && r.push(i);
                        return r
                    }
                    return u
                }, t.find.CLASS = f.getElementsByClassName && function(n, t) {
                    if ("undefined" != typeof t.getElementsByClassName && h) return t.getElementsByClassName(n)
                }, d = [], o = [], (f.qsa = ot.test(i.querySelectorAll)) && (a(function(n) {
                    var t;
                    s.appendChild(n).innerHTML = "<a id='" + e + "'><\/a><select id='" + e + "-\r\\' msallowcapture=''><option selected=''><\/option><\/select>";
                    n.querySelectorAll("[msallowcapture^='']").length && o.push("[*^$]=" + r + "*(?:''|\"\")");
                    n.querySelectorAll("[selected]").length || o.push("\\[" + r + "*(?:value|" + gt + ")");
                    n.querySelectorAll("[id~=" + e + "-]").length || o.push("~=");
                    (t = i.createElement("input")).setAttribute("name", "");
                    n.appendChild(t);
                    n.querySelectorAll("[name='']").length || o.push("\\[" + r + "*name" + r + "*=" + r + "*(?:''|\"\")");
                    n.querySelectorAll(":checked").length || o.push(":checked");
                    n.querySelectorAll("a#" + e + "+*").length || o.push(".#.+[+~]");
                    n.querySelectorAll("\\\f");
                    o.push("[\\r\\n\\f]")
                }), a(function(n) {
                    n.innerHTML = "<a href='' disabled='disabled'><\/a><select disabled='disabled'><option/><\/select>";
                    var t = i.createElement("input");
                    t.setAttribute("type", "hidden");
                    n.appendChild(t).setAttribute("name", "D");
                    n.querySelectorAll("[name=d]").length && o.push("name" + r + "*[*^$|!~]?=");
                    2 !== n.querySelectorAll(":enabled").length && o.push(":enabled", ":disabled");
                    s.appendChild(n).disabled = !0;
                    2 !== n.querySelectorAll(":disabled").length && o.push(":enabled", ":disabled");
                    n.querySelectorAll("*,:x");
                    o.push(",.*:")
                })), (f.matchesSelector = ot.test(ct = s.matches || s.webkitMatchesSelector || s.mozMatchesSelector || s.oMatchesSelector || s.msMatchesSelector)) && a(function(n) {
                    f.disconnectedMatch = ct.call(n, "*");
                    ct.call(n, "[s!='']:x");
                    d.push("!=", ni)
                }), o = o.length && new RegExp(o.join("|")), d = d.length && new RegExp(d.join("|")), v = ot.test(s.compareDocumentPosition), et = v || ot.test(s.contains) ? function(n, t) {
                    var r = 9 === n.nodeType ? n.documentElement : n,
                        i = t && t.parentNode;
                    return n === i || !(!i || 1 !== i.nodeType || !(r.contains ? r.contains(i) : n.compareDocumentPosition && 16 & n.compareDocumentPosition(i)))
                } : function(n, t) {
                    if (t)
                        while (t = t.parentNode)
                            if (t === n) return !0;
                    return !1
                }, dt = v ? function(n, t) {
                    if (n === t) return ut = !0, 0;
                    var r = !n.compareDocumentPosition - !t.compareDocumentPosition;
                    return r || (1 & (r = (n.ownerDocument || n) == (t.ownerDocument || t) ? n.compareDocumentPosition(t) : 1) || !f.sortDetached && t.compareDocumentPosition(n) === r ? n == i || n.ownerDocument == c && et(c, n) ? -1 : t == i || t.ownerDocument == c && et(c, t) ? 1 : w ? nt(w, n) - nt(w, t) : 0 : 4 & r ? -1 : 1)
                } : function(n, t) {
                    if (n === t) return ut = !0, 0;
                    var r, u = 0,
                        o = n.parentNode,
                        s = t.parentNode,
                        f = [n],
                        e = [t];
                    if (!o || !s) return n == i ? -1 : t == i ? 1 : o ? -1 : s ? 1 : w ? nt(w, n) - nt(w, t) : 0;
                    if (o === s) return ki(n, t);
                    for (r = n; r = r.parentNode;) f.unshift(r);
                    for (r = t; r = r.parentNode;) e.unshift(r);
                    while (f[u] === e[u]) u++;
                    return u ? ki(f[u], e[u]) : f[u] == c ? -1 : e[u] == c ? 1 : 0
                }), i
            }, u.matches = function(n, t) {
                return u(n, null, null, t)
            }, u.matchesSelector = function(n, t) {
                if (b(n), f.matchesSelector && h && !lt[t + " "] && (!d || !d.test(t)) && (!o || !o.test(t))) try {
                    var r = ct.call(n, t);
                    if (r || f.disconnectedMatch || n.document && 11 !== n.document.nodeType) return r
                } catch (n) {
                    lt(t, !0)
                }
                return 0 < u(t, i, null, [n]).length
            }, u.contains = function(n, t) {
                return (n.ownerDocument || n) != i && b(n), et(n, t)
            }, u.attr = function(n, r) {
                (n.ownerDocument || n) != i && b(n);
                var e = t.attrHandle[r.toLowerCase()],
                    u = e && tr.call(t.attrHandle, r.toLowerCase()) ? e(n, r, !h) : void 0;
                return void 0 !== u ? u : f.attributes || !h ? n.getAttribute(r) : (u = n.getAttributeNode(r)) && u.specified ? u.value : null
            }, u.escape = function(n) {
                return (n + "").replace(pi, wi)
            }, u.error = function(n) {
                throw new Error("Syntax error, unrecognized expression: " + n);
            }, u.uniqueSort = function(n) {
                var r, u = [],
                    t = 0,
                    i = 0;
                if (ut = !f.detectDuplicates, w = !f.sortStable && n.slice(0), n.sort(dt), ut) {
                    while (r = n[i++]) r === n[i] && (t = u.push(i));
                    while (t--) n.splice(u[t], 1)
                }
                return w = null, n
            }, st = u.getText = function(n) {
                var r, i = "",
                    u = 0,
                    t = n.nodeType;
                if (t) {
                    if (1 === t || 9 === t || 11 === t) {
                        if ("string" == typeof n.textContent) return n.textContent;
                        for (n = n.firstChild; n; n = n.nextSibling) i += st(n)
                    } else if (3 === t || 4 === t) return n.nodeValue
                } else
                    while (r = n[u++]) i += st(r);
                return i
            }, (t = u.selectors = {
                cacheLength: 50,
                createPseudo: l,
                match: vt,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(n) {
                        return n[1] = n[1].replace(y, p), n[3] = (n[3] || n[4] || n[5] || "").replace(y, p), "~=" === n[2] && (n[3] = " " + n[3] + " "), n.slice(0, 4)
                    },
                    CHILD: function(n) {
                        return n[1] = n[1].toLowerCase(), "nth" === n[1].slice(0, 3) ? (n[3] || u.error(n[0]), n[4] = +(n[4] ? n[5] + (n[6] || 1) : 2 * ("even" === n[3] || "odd" === n[3])), n[5] = +(n[7] + n[8] || "odd" === n[3])) : n[3] && u.error(n[0]), n
                    },
                    PSEUDO: function(n) {
                        var i, t = !n[6] && n[2];
                        return vt.CHILD.test(n[0]) ? null : (n[3] ? n[2] = n[4] || n[5] || "" : t && or.test(t) && (i = ft(t, !0)) && (i = t.indexOf(")", t.length - i) - t.length) && (n[0] = n[0].slice(0, i), n[2] = t.slice(0, i)), n.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(n) {
                        var t = n.replace(y, p).toLowerCase();
                        return "*" === n ? function() {
                            return !0
                        } : function(n) {
                            return n.nodeName && n.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function(n) {
                        var t = hi[n + " "];
                        return t || (t = new RegExp("(^|" + r + ")" + n + "(" + r + "|$)")) && hi(n, function(n) {
                            return t.test("string" == typeof n.className && n.className || "undefined" != typeof n.getAttribute && n.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(n, t, i) {
                        return function(r) {
                            var f = u.attr(r, n);
                            return null == f ? "!=" === t : !t || (f += "", "=" === t ? f === i : "!=" === t ? f !== i : "^=" === t ? i && 0 === f.indexOf(i) : "*=" === t ? i && -1 < f.indexOf(i) : "$=" === t ? i && f.slice(-i.length) === i : "~=" === t ? -1 < (" " + f.replace(ur, " ") + " ").indexOf(i) : "|=" === t && (f === i || f.slice(0, i.length + 1) === i + "-"))
                        }
                    },
                    CHILD: function(n, t, i, r, u) {
                        var s = "nth" !== n.slice(0, 3),
                            o = "last" !== n.slice(-4),
                            f = "of-type" === t;
                        return 1 === r && 0 === u ? function(n) {
                            return !!n.parentNode
                        } : function(t, i, h) {
                            var p, d, y, c, a, w, b = s !== o ? "nextSibling" : "previousSibling",
                                k = t.parentNode,
                                nt = f && t.nodeName.toLowerCase(),
                                g = !h && !f,
                                l = !1;
                            if (k) {
                                if (s) {
                                    while (b) {
                                        for (c = t; c = c[b];)
                                            if (f ? c.nodeName.toLowerCase() === nt : 1 === c.nodeType) return !1;
                                        w = b = "only" === n && !w && "nextSibling"
                                    }
                                    return !0
                                }
                                if (w = [o ? k.firstChild : k.lastChild], o && g) {
                                    for (l = (a = (p = (d = (y = (c = k)[e] || (c[e] = {}))[c.uniqueID] || (y[c.uniqueID] = {}))[n] || [])[0] === v && p[1]) && p[2], c = a && k.childNodes[a]; c = ++a && c && c[b] || (l = a = 0) || w.pop();)
                                        if (1 === c.nodeType && ++l && c === t) {
                                            d[n] = [v, a, l];
                                            break
                                        }
                                } else if (g && (l = a = (p = (d = (y = (c = t)[e] || (c[e] = {}))[c.uniqueID] || (y[c.uniqueID] = {}))[n] || [])[0] === v && p[1]), !1 === l)
                                    while (c = ++a && c && c[b] || (l = a = 0) || w.pop())
                                        if ((f ? c.nodeName.toLowerCase() === nt : 1 === c.nodeType) && ++l && (g && ((d = (y = c[e] || (c[e] = {}))[c.uniqueID] || (y[c.uniqueID] = {}))[n] = [v, l]), c === t)) break;
                                return (l -= u) === r || l % r == 0 && 0 <= l / r
                            }
                        }
                    },
                    PSEUDO: function(n, i) {
                        var f, r = t.pseudos[n] || t.setFilters[n.toLowerCase()] || u.error("unsupported pseudo: " + n);
                        return r[e] ? r(i) : 1 < r.length ? (f = [n, n, "", i], t.setFilters.hasOwnProperty(n.toLowerCase()) ? l(function(n, t) {
                            for (var e, u = r(n, i), f = u.length; f--;) n[e = nt(n, u[f])] = !(t[e] = u[f])
                        }) : function(n) {
                            return r(n, 0, f)
                        }) : r
                    }
                },
                pseudos: {
                    not: l(function(n) {
                        var t = [],
                            r = [],
                            i = kt(n.replace(at, "$1"));
                        return i[e] ? l(function(n, t, r, u) {
                            for (var e, o = i(n, null, u, []), f = n.length; f--;)(e = o[f]) && (n[f] = !(t[f] = e))
                        }) : function(n, u, f) {
                            return t[0] = n, i(t, null, f, r), t[0] = null, !r.pop()
                        }
                    }),
                    has: l(function(n) {
                        return function(t) {
                            return 0 < u(n, t).length
                        }
                    }),
                    contains: l(function(n) {
                        return n = n.replace(y, p),
                            function(t) {
                                return -1 < (t.textContent || st(t)).indexOf(n)
                            }
                    }),
                    lang: l(function(n) {
                        return sr.test(n || "") || u.error("unsupported lang: " + n), n = n.replace(y, p).toLowerCase(),
                            function(t) {
                                var i;
                                do
                                    if (i = h ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (i = i.toLowerCase()) === n || 0 === i.indexOf(n + "-"); while ((t = t.parentNode) && 1 === t.nodeType);
                                return !1
                            }
                    }),
                    target: function(t) {
                        var i = n.location && n.location.hash;
                        return i && i.slice(1) === t.id
                    },
                    root: function(n) {
                        return n === s
                    },
                    focus: function(n) {
                        return n === i.activeElement && (!i.hasFocus || i.hasFocus()) && !!(n.type || n.href || ~n.tabIndex)
                    },
                    enabled: di(!1),
                    disabled: di(!0),
                    checked: function(n) {
                        var t = n.nodeName.toLowerCase();
                        return "input" === t && !!n.checked || "option" === t && !!n.selected
                    },
                    selected: function(n) {
                        return n.parentNode && n.parentNode.selectedIndex, !0 === n.selected
                    },
                    empty: function(n) {
                        for (n = n.firstChild; n; n = n.nextSibling)
                            if (n.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(n) {
                        return !t.pseudos.empty(n)
                    },
                    header: function(n) {
                        return lr.test(n.nodeName)
                    },
                    input: function(n) {
                        return cr.test(n.nodeName)
                    },
                    button: function(n) {
                        var t = n.nodeName.toLowerCase();
                        return "input" === t && "button" === n.type || "button" === t
                    },
                    text: function(n) {
                        var t;
                        return "input" === n.nodeName.toLowerCase() && "text" === n.type && (null == (t = n.getAttribute("type")) || "text" === t.toLowerCase())
                    },
                    first: it(function() {
                        return [0]
                    }),
                    last: it(function(n, t) {
                        return [t - 1]
                    }),
                    eq: it(function(n, t, i) {
                        return [i < 0 ? i + t : i]
                    }),
                    even: it(function(n, t) {
                        for (var i = 0; i < t; i += 2) n.push(i);
                        return n
                    }),
                    odd: it(function(n, t) {
                        for (var i = 1; i < t; i += 2) n.push(i);
                        return n
                    }),
                    lt: it(function(n, t, i) {
                        for (var r = i < 0 ? i + t : t < i ? t : i; 0 <= --r;) n.push(r);
                        return n
                    }),
                    gt: it(function(n, t, i) {
                        for (var r = i < 0 ? i + t : i; ++r < t;) n.push(r);
                        return n
                    })
                }
            }).pseudos.nth = t.pseudos.eq, {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) t.pseudos[rt] = yr(rt);
        for (rt in {
                submit: !0,
                reset: !0
            }) t.pseudos[rt] = pr(rt);
        return gi.prototype = t.filters = t.pseudos, t.setFilters = new gi, ft = u.tokenize = function(n, i) {
            var e, f, s, o, r, h, c, l = ci[n + " "];
            if (l) return i ? 0 : l.slice(0);
            for (r = n, h = [], c = t.preFilter; r;) {
                for (o in e && !(f = fr.exec(r)) || (f && (r = r.slice(f[0].length) || r), h.push(s = [])), e = !1, (f = yi.exec(r)) && (e = f.shift(), s.push({
                        value: e,
                        type: f[0].replace(at, " ")
                    }), r = r.slice(e.length)), t.filter)(f = vt[o].exec(r)) && (!c[o] || (f = c[o](f))) && (e = f.shift(), s.push({
                    value: e,
                    type: o,
                    matches: f
                }), r = r.slice(e.length));
                if (!e) break
            }
            return i ? r.length : r ? u.error(n) : ci(n, h).slice(0)
        }, kt = u.compile = function(n, r) {
            var s, c, a, o, y, p, w = [],
                d = [],
                f = li[n + " "];
            if (!f) {
                for (r || (r = ft(n)), s = r.length; s--;)(f = ei(r[s]))[e] ? w.push(f) : d.push(f);
                (f = li(n, (c = d, o = 0 < (a = w).length, y = 0 < c.length, p = function(n, r, f, e, s) {
                    var l, nt, d, g = 0,
                        p = "0",
                        tt = n && [],
                        w = [],
                        it = ht,
                        rt = n || y && t.find.TAG("*", s),
                        ut = v += null == it ? 1 : Math.random() || .1,
                        ft = rt.length;
                    for (s && (ht = r == i || r || s); p !== ft && null != (l = rt[p]); p++) {
                        if (y && l) {
                            for (nt = 0, r || l.ownerDocument == i || (b(l), f = !h); d = c[nt++];)
                                if (d(l, r || i, f)) {
                                    e.push(l);
                                    break
                                } s && (v = ut)
                        }
                        o && ((l = !d && l) && g--, n && tt.push(l))
                    }
                    if (g += p, o && p !== g) {
                        for (nt = 0; d = a[nt++];) d(tt, w, r, f);
                        if (n) {
                            if (0 < g)
                                while (p--) tt[p] || w[p] || (w[p] = ir.call(e));
                            w = bt(w)
                        }
                        k.apply(e, w);
                        s && !n && 0 < w.length && 1 < g + a.length && u.uniqueSort(e)
                    }
                    return s && (v = ut, ht = it), tt
                }, o ? l(p) : p))).selector = n
            }
            return f
        }, si = u.select = function(n, i, r, u) {
            var o, f, e, l, a, c = "function" == typeof n && n,
                s = !u && ft(n = c.selector || n);
            if (r = r || [], 1 === s.length) {
                if (2 < (f = s[0] = s[0].slice(0)).length && "ID" === (e = f[0]).type && 9 === i.nodeType && h && t.relative[f[1].type]) {
                    if (!(i = (t.find.ID(e.matches[0].replace(y, p), i) || [])[0])) return r;
                    c && (i = i.parentNode);
                    n = n.slice(f.shift().value.length)
                }
                for (o = vt.needsContext.test(n) ? 0 : f.length; o--;) {
                    if (e = f[o], t.relative[l = e.type]) break;
                    if ((a = t.find[l]) && (u = a(e.matches[0].replace(y, p), ti.test(f[0].type) && ri(i.parentNode) || i))) {
                        if (f.splice(o, 1), !(n = u.length && pt(f))) return k.apply(r, u), r;
                        break
                    }
                }
            }
            return (c || kt(n, s))(u, i, !h, r, !i || ti.test(n) && ri(i.parentNode) || i), r
        }, f.sortStable = e.split("").sort(dt).join("") === e, f.detectDuplicates = !!ut, b(), f.sortDetached = a(function(n) {
            return 1 & n.compareDocumentPosition(i.createElement("fieldset"))
        }), a(function(n) {
            return n.innerHTML = "<a href='#'><\/a>", "#" === n.firstChild.getAttribute("href")
        }) || ii("type|href|height|width", function(n, t, i) {
            if (!i) return n.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), f.attributes && a(function(n) {
            return n.innerHTML = "<input/>", n.firstChild.setAttribute("value", ""), "" === n.firstChild.getAttribute("value")
        }) || ii("value", function(n, t, i) {
            if (!i && "input" === n.nodeName.toLowerCase()) return n.defaultValue
        }), a(function(n) {
            return null == n.getAttribute("disabled")
        }) || ii(gt, function(n, t, i) {
            var r;
            if (!i) return !0 === n[t] ? t.toLowerCase() : (r = n.getAttributeNode(t)) && r.specified ? r.value : null
        }), u
    }(n);
    i.find = d;
    i.expr = d.selectors;
    i.expr[":"] = i.expr.pseudos;
    i.uniqueSort = i.unique = d.uniqueSort;
    i.text = d.getText;
    i.isXMLDoc = d.isXML;
    i.contains = d.contains;
    i.escapeSelector = d.escape;
    var ft = function(n, t, r) {
            for (var u = [], f = void 0 !== r;
                (n = n[t]) && 9 !== n.nodeType;)
                if (1 === n.nodeType) {
                    if (f && i(n).is(r)) break;
                    u.push(n)
                } return u
        },
        gr = function(n, t) {
            for (var i = []; n; n = n.nextSibling) 1 === n.nodeType && n !== t && i.push(n);
            return i
        },
        nu = i.expr.match.needsContext;
    wi = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    i.filter = function(n, t, r) {
        var u = t[0];
        return r && (n = ":not(" + n + ")"), 1 === t.length && 1 === u.nodeType ? i.find.matchesSelector(u, n) ? [u] : [] : i.find.matches(n, i.grep(t, function(n) {
            return 1 === n.nodeType
        }))
    };
    i.fn.extend({
        find: function(n) {
            var t, r, u = this.length,
                f = this;
            if ("string" != typeof n) return this.pushStack(i(n).filter(function() {
                for (t = 0; t < u; t++)
                    if (i.contains(f[t], this)) return !0
            }));
            for (r = this.pushStack([]), t = 0; t < u; t++) i.find(n, f[t], r);
            return 1 < u ? i.uniqueSort(r) : r
        },
        filter: function(n) {
            return this.pushStack(bi(this, n || [], !1))
        },
        not: function(n) {
            return this.pushStack(bi(this, n || [], !0))
        },
        is: function(n) {
            return !!bi(this, "string" == typeof n && nu.test(n) ? i(n) : n || [], !1).length
        }
    });
    iu = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (i.fn.init = function(n, t, r) {
        var e, o;
        if (!n) return this;
        if (r = r || tu, "string" == typeof n) {
            if (!(e = "<" === n[0] && ">" === n[n.length - 1] && 3 <= n.length ? [null, n, null] : iu.exec(n)) || !e[1] && t) return !t || t.jquery ? (t || r).find(n) : this.constructor(t).find(n);
            if (e[1]) {
                if (t = t instanceof i ? t[0] : t, i.merge(this, i.parseHTML(e[1], t && t.nodeType ? t.ownerDocument || t : f, !0)), wi.test(e[1]) && i.isPlainObject(t))
                    for (e in t) u(this[e]) ? this[e](t[e]) : this.attr(e, t[e]);
                return this
            }
            return (o = f.getElementById(e[2])) && (this[0] = o, this.length = 1), this
        }
        return n.nodeType ? (this[0] = n, this.length = 1, this) : u(n) ? void 0 !== r.ready ? r.ready(n) : n(i) : i.makeArray(n, this)
    }).prototype = i.fn;
    tu = i(f);
    ru = /^(?:parents|prev(?:Until|All))/;
    uu = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    i.fn.extend({
        has: function(n) {
            var t = i(n, this),
                r = t.length;
            return this.filter(function() {
                for (var n = 0; n < r; n++)
                    if (i.contains(this, t[n])) return !0
            })
        },
        closest: function(n, t) {
            var r, f = 0,
                o = this.length,
                u = [],
                e = "string" != typeof n && i(n);
            if (!nu.test(n))
                for (; f < o; f++)
                    for (r = this[f]; r && r !== t; r = r.parentNode)
                        if (r.nodeType < 11 && (e ? -1 < e.index(r) : 1 === r.nodeType && i.find.matchesSelector(r, n))) {
                            u.push(r);
                            break
                        } return this.pushStack(1 < u.length ? i.uniqueSort(u) : u)
        },
        index: function(n) {
            return n ? "string" == typeof n ? ii.call(i(n), this[0]) : ii.call(this, n.jquery ? n[0] : n) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(n, t) {
            return this.pushStack(i.uniqueSort(i.merge(this.get(), i(n, t))))
        },
        addBack: function(n) {
            return this.add(null == n ? this.prevObject : this.prevObject.filter(n))
        }
    });
    i.each({
        parent: function(n) {
            var t = n.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(n) {
            return ft(n, "parentNode")
        },
        parentsUntil: function(n, t, i) {
            return ft(n, "parentNode", i)
        },
        next: function(n) {
            return fu(n, "nextSibling")
        },
        prev: function(n) {
            return fu(n, "previousSibling")
        },
        nextAll: function(n) {
            return ft(n, "nextSibling")
        },
        prevAll: function(n) {
            return ft(n, "previousSibling")
        },
        nextUntil: function(n, t, i) {
            return ft(n, "nextSibling", i)
        },
        prevUntil: function(n, t, i) {
            return ft(n, "previousSibling", i)
        },
        siblings: function(n) {
            return gr((n.parentNode || {}).firstChild, n)
        },
        children: function(n) {
            return gr(n.firstChild)
        },
        contents: function(n) {
            return null != n.contentDocument && yr(n.contentDocument) ? n.contentDocument : (c(n, "template") && (n = n.content || n), i.merge([], n.childNodes))
        }
    }, function(n, t) {
        i.fn[n] = function(r, u) {
            var f = i.map(this, t, r);
            return "Until" !== n.slice(-5) && (u = r), u && "string" == typeof u && (f = i.filter(u, f)), 1 < this.length && (uu[n] || i.uniqueSort(f), ru.test(n) && f.reverse()), this.pushStack(f)
        }
    });
    l = /[^\x20\t\r\n\f]+/g;
    i.Callbacks = function(n) {
        var a, h;
        n = "string" == typeof n ? (a = n, h = {}, i.each(a.match(l) || [], function(n, t) {
            h[t] = !0
        }), h) : i.extend({}, n);
        var o, r, v, f, t = [],
            s = [],
            e = -1,
            y = function() {
                for (f = f || n.once, v = o = !0; s.length; e = -1)
                    for (r = s.shift(); ++e < t.length;) !1 === t[e].apply(r[0], r[1]) && n.stopOnFalse && (e = t.length, r = !1);
                n.memory || (r = !1);
                o = !1;
                f && (t = r ? [] : "")
            },
            c = {
                add: function() {
                    return t && (r && !o && (e = t.length - 1, s.push(r)), function f(r) {
                        i.each(r, function(i, r) {
                            u(r) ? n.unique && c.has(r) || t.push(r) : r && r.length && "string" !== ut(r) && f(r)
                        })
                    }(arguments), r && !o && y()), this
                },
                remove: function() {
                    return i.each(arguments, function(n, r) {
                        for (var u; - 1 < (u = i.inArray(r, t, u));) t.splice(u, 1), u <= e && e--
                    }), this
                },
                has: function(n) {
                    return n ? -1 < i.inArray(n, t) : 0 < t.length
                },
                empty: function() {
                    return t && (t = []), this
                },
                disable: function() {
                    return f = s = [], t = r = "", this
                },
                disabled: function() {
                    return !t
                },
                lock: function() {
                    return f = s = [], r || o || (t = r = ""), this
                },
                locked: function() {
                    return !!f
                },
                fireWith: function(n, t) {
                    return f || (t = [n, (t = t || []).slice ? t.slice() : t], s.push(t), o || y()), this
                },
                fire: function() {
                    return c.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!v
                }
            };
        return c
    };
    i.extend({
        Deferred: function(t) {
            var f = [
                    ["notify", "progress", i.Callbacks("memory"), i.Callbacks("memory"), 2],
                    ["resolve", "done", i.Callbacks("once memory"), i.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", i.Callbacks("once memory"), i.Callbacks("once memory"), 1, "rejected"]
                ],
                o = "pending",
                e = {
                    state: function() {
                        return o
                    },
                    always: function() {
                        return r.done(arguments).fail(arguments), this
                    },
                    "catch": function(n) {
                        return e.then(null, n)
                    },
                    pipe: function() {
                        var n = arguments;
                        return i.Deferred(function(t) {
                            i.each(f, function(i, f) {
                                var e = u(n[f[4]]) && n[f[4]];
                                r[f[1]](function() {
                                    var n = e && e.apply(this, arguments);
                                    n && u(n.promise) ? n.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[f[0] + "With"](this, e ? [n] : arguments)
                                })
                            });
                            n = null
                        }).promise()
                    },
                    then: function(t, r, e) {
                        function s(t, r, f, e) {
                            return function() {
                                var h = this,
                                    c = arguments,
                                    l = function() {
                                        var n, i;
                                        if (!(t < o)) {
                                            if ((n = f.apply(h, c)) === r.promise()) throw new TypeError("Thenable self-resolution");
                                            i = n && ("object" == typeof n || "function" == typeof n) && n.then;
                                            u(i) ? e ? i.call(n, s(o, r, et, e), s(o, r, fi, e)) : (o++, i.call(n, s(o, r, et, e), s(o, r, fi, e), s(o, r, et, r.notifyWith))) : (f !== et && (h = void 0, c = [n]), (e || r.resolveWith)(h, c))
                                        }
                                    },
                                    a = e ? l : function() {
                                        try {
                                            l()
                                        } catch (l) {
                                            i.Deferred.exceptionHook && i.Deferred.exceptionHook(l, a.stackTrace);
                                            o <= t + 1 && (f !== fi && (h = void 0, c = [l]), r.rejectWith(h, c))
                                        }
                                    };
                                t ? a() : (i.Deferred.getStackHook && (a.stackTrace = i.Deferred.getStackHook()), n.setTimeout(a))
                            }
                        }
                        var o = 0;
                        return i.Deferred(function(n) {
                            f[0][3].add(s(0, n, u(e) ? e : et, n.notifyWith));
                            f[1][3].add(s(0, n, u(t) ? t : et));
                            f[2][3].add(s(0, n, u(r) ? r : fi))
                        }).promise()
                    },
                    promise: function(n) {
                        return null != n ? i.extend(n, e) : e
                    }
                },
                r = {};
            return i.each(f, function(n, t) {
                var i = t[2],
                    u = t[5];
                e[t[1]] = i.add;
                u && i.add(function() {
                    o = u
                }, f[3 - n][2].disable, f[3 - n][3].disable, f[0][2].lock, f[0][3].lock);
                i.add(t[3].fire);
                r[t[0]] = function() {
                    return r[t[0] + "With"](this === r ? void 0 : this, arguments), this
                };
                r[t[0] + "With"] = i.fireWith
            }), e.promise(r), t && t.call(r, r), r
        },
        when: function(n) {
            var e = arguments.length,
                t = e,
                o = Array(t),
                f = k.call(arguments),
                r = i.Deferred(),
                s = function(n) {
                    return function(t) {
                        o[n] = this;
                        f[n] = 1 < arguments.length ? k.call(arguments) : t;
                        --e || r.resolveWith(o, f)
                    }
                };
            if (e <= 1 && (eu(n, r.done(s(t)).resolve, r.reject, !e), "pending" === r.state() || u(f[t] && f[t].then))) return r.then();
            while (t--) eu(f[t], s(t), r.reject);
            return r.promise()
        }
    });
    ou = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    i.Deferred.exceptionHook = function(t, i) {
        n.console && n.console.warn && t && ou.test(t.name) && n.console.warn("jQuery.Deferred exception: " + t.message, t.stack, i)
    };
    i.readyException = function(t) {
        n.setTimeout(function() {
            throw t;
        })
    };
    ei = i.Deferred();
    i.fn.ready = function(n) {
        return ei.then(n)["catch"](function(n) {
            i.readyException(n)
        }), this
    };
    i.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(n) {
            (!0 === n ? --i.readyWait : i.isReady) || (i.isReady = !0) !== n && 0 < --i.readyWait || ei.resolveWith(f, [i])
        }
    });
    i.ready.then = ei.then;
    "complete" === f.readyState || "loading" !== f.readyState && !f.documentElement.doScroll ? n.setTimeout(i.ready) : (f.addEventListener("DOMContentLoaded", oi), n.addEventListener("load", oi));
    var w = function(n, t, r, f, e, o, s) {
            var h = 0,
                l = n.length,
                c = null == r;
            if ("object" === ut(r))
                for (h in e = !0, r) w(n, t, h, r[h], !0, o, s);
            else if (void 0 !== f && (e = !0, u(f) || (s = !0), c && (s ? (t.call(n, f), t = null) : (c = t, t = function(n, t, r) {
                    return c.call(i(n), r)
                })), t))
                for (; h < l; h++) t(n[h], r, s ? f : f.call(n[h], h, t(n[h], r)));
            return e ? n : c ? t.call(n) : l ? t(n[0], r) : o
        },
        se = /^-ms-/,
        he = /-([a-z])/g;
    ot = function(n) {
        return 1 === n.nodeType || 9 === n.nodeType || !+n.nodeType
    };
    bt.uid = 1;
    bt.prototype = {
        cache: function(n) {
            var t = n[this.expando];
            return t || (t = {}, ot(n) && (n.nodeType ? n[this.expando] = t : Object.defineProperty(n, this.expando, {
                value: t,
                configurable: !0
            }))), t
        },
        set: function(n, t, i) {
            var r, u = this.cache(n);
            if ("string" == typeof t) u[y(t)] = i;
            else
                for (r in t) u[y(r)] = t[r];
            return u
        },
        get: function(n, t) {
            return void 0 === t ? this.cache(n) : n[this.expando] && n[this.expando][y(t)]
        },
        access: function(n, t, i) {
            return void 0 === t || t && "string" == typeof t && void 0 === i ? this.get(n, t) : (this.set(n, t, i), void 0 !== i ? i : t)
        },
        remove: function(n, t) {
            var u, r = n[this.expando];
            if (void 0 !== r) {
                if (void 0 !== t)
                    for (u = (t = Array.isArray(t) ? t.map(y) : (t = y(t)) in r ? [t] : t.match(l) || []).length; u--;) delete r[t[u]];
                (void 0 === t || i.isEmptyObject(r)) && (n.nodeType ? n[this.expando] = void 0 : delete n[this.expando])
            }
        },
        hasData: function(n) {
            var t = n[this.expando];
            return void 0 !== t && !i.isEmptyObject(t)
        }
    };
    var r = new bt,
        o = new bt,
        le = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        ae = /[A-Z]/g;
    i.extend({
        hasData: function(n) {
            return o.hasData(n) || r.hasData(n)
        },
        data: function(n, t, i) {
            return o.access(n, t, i)
        },
        removeData: function(n, t) {
            o.remove(n, t)
        },
        _data: function(n, t, i) {
            return r.access(n, t, i)
        },
        _removeData: function(n, t) {
            r.remove(n, t)
        }
    });
    i.fn.extend({
        data: function(n, t) {
            var f, u, e, i = this[0],
                s = i && i.attributes;
            if (void 0 === n) {
                if (this.length && (e = o.get(i), 1 === i.nodeType && !r.get(i, "hasDataAttrs"))) {
                    for (f = s.length; f--;) s[f] && 0 === (u = s[f].name).indexOf("data-") && (u = y(u.slice(5)), su(i, u, e[u]));
                    r.set(i, "hasDataAttrs", !0)
                }
                return e
            }
            return "object" == typeof n ? this.each(function() {
                o.set(this, n)
            }) : w(this, function(t) {
                var r;
                if (i && void 0 === t) return void 0 !== (r = o.get(i, n)) ? r : void 0 !== (r = su(i, n)) ? r : void 0;
                this.each(function() {
                    o.set(this, n, t)
                })
            }, null, t, 1 < arguments.length, null, !0)
        },
        removeData: function(n) {
            return this.each(function() {
                o.remove(this, n)
            })
        }
    });
    i.extend({
        queue: function(n, t, u) {
            var f;
            if (n) return t = (t || "fx") + "queue", f = r.get(n, t), u && (!f || Array.isArray(u) ? f = r.access(n, t, i.makeArray(u)) : f.push(u)), f || []
        },
        dequeue: function(n, t) {
            t = t || "fx";
            var r = i.queue(n, t),
                e = r.length,
                u = r.shift(),
                f = i._queueHooks(n, t);
            "inprogress" === u && (u = r.shift(), e--);
            u && ("fx" === t && r.unshift("inprogress"), delete f.stop, u.call(n, function() {
                i.dequeue(n, t)
            }, f));
            !e && f && f.empty.fire()
        },
        _queueHooks: function(n, t) {
            var u = t + "queueHooks";
            return r.get(n, u) || r.access(n, u, {
                empty: i.Callbacks("once memory").add(function() {
                    r.remove(n, [t + "queue", u])
                })
            })
        }
    });
    i.fn.extend({
        queue: function(n, t) {
            var r = 2;
            return "string" != typeof n && (t = n, n = "fx", r--), arguments.length < r ? i.queue(this[0], n) : void 0 === t ? this : this.each(function() {
                var r = i.queue(this, n, t);
                i._queueHooks(this, n);
                "fx" === n && "inprogress" !== r[0] && i.dequeue(this, n)
            })
        },
        dequeue: function(n) {
            return this.each(function() {
                i.dequeue(this, n)
            })
        },
        clearQueue: function(n) {
            return this.queue(n || "fx", [])
        },
        promise: function(n, t) {
            var u, e = 1,
                o = i.Deferred(),
                f = this,
                s = this.length,
                h = function() {
                    --e || o.resolveWith(f, [f])
                };
            for ("string" != typeof n && (t = n, n = void 0), n = n || "fx"; s--;)(u = r.get(f[s], n + "queueHooks")) && u.empty && (e++, u.empty.add(h));
            return h(), o.promise(t)
        }
    });
    var hu = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        kt = new RegExp("^(?:([+-])=|)(" + hu + ")([a-z%]*)$", "i"),
        b = ["Top", "Right", "Bottom", "Left"],
        g = f.documentElement,
        st = function(n) {
            return i.contains(n.ownerDocument, n)
        },
        ve = {
            composed: !0
        };
    g.getRootNode && (st = function(n) {
        return i.contains(n.ownerDocument, n) || n.getRootNode(ve) === n.ownerDocument
    });
    dt = function(n, t) {
        return "none" === (n = t || n).style.display || "" === n.style.display && st(n) && "none" === i.css(n, "display")
    };
    ki = {};
    i.fn.extend({
        show: function() {
            return ht(this, !0)
        },
        hide: function() {
            return ht(this)
        },
        toggle: function(n) {
            return "boolean" == typeof n ? n ? this.show() : this.hide() : this.each(function() {
                dt(this) ? i(this).show() : i(this).hide()
            })
        }
    });
    var nt, si, gt = /^(?:checkbox|radio)$/i,
        lu = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        au = /^$|^module$|\/(?:java|ecma)script/i;
    nt = f.createDocumentFragment().appendChild(f.createElement("div"));
    (si = f.createElement("input")).setAttribute("type", "radio");
    si.setAttribute("checked", "checked");
    si.setAttribute("name", "t");
    nt.appendChild(si);
    e.checkClone = nt.cloneNode(!0).cloneNode(!0).lastChild.checked;
    nt.innerHTML = "<textarea>x<\/textarea>";
    e.noCloneChecked = !!nt.cloneNode(!0).lastChild.defaultValue;
    nt.innerHTML = "<option><\/option>";
    e.option = !!nt.lastChild;
    h = {
        thead: [1, "<table>", "<\/table>"],
        col: [2, "<table><colgroup>", "<\/colgroup><\/table>"],
        tr: [2, "<table><tbody>", "<\/tbody><\/table>"],
        td: [3, "<table><tbody><tr>", "<\/tr><\/tbody><\/table>"],
        _default: [0, "", ""]
    };
    h.tbody = h.tfoot = h.colgroup = h.caption = h.thead;
    h.th = h.td;
    e.option || (h.optgroup = h.option = [1, "<select multiple='multiple'>", "<\/select>"]);
    vu = /<|&#?\w+;/;
    gi = /^([^.]*)(?:\.(.+)|)/;
    i.event = {
        global: {},
        add: function(n, t, u, f, e) {
            var p, a, k, v, w, h, s, c, o, b, d, y = r.get(n);
            if (ot(n))
                for (u.handler && (u = (p = u).handler, e = p.selector), e && i.find.matchesSelector(g, e), u.guid || (u.guid = i.guid++), (v = y.events) || (v = y.events = Object.create(null)), (a = y.handle) || (a = y.handle = function(t) {
                        if ("undefined" != typeof i && i.event.triggered !== t.type) return i.event.dispatch.apply(n, arguments)
                    }), w = (t = (t || "").match(l) || [""]).length; w--;) o = d = (k = gi.exec(t[w]) || [])[1], b = (k[2] || "").split(".").sort(), o && (s = i.event.special[o] || {}, o = (e ? s.delegateType : s.bindType) || o, s = i.event.special[o] || {}, h = i.extend({
                    type: o,
                    origType: d,
                    data: f,
                    handler: u,
                    guid: u.guid,
                    selector: e,
                    needsContext: e && i.expr.match.needsContext.test(e),
                    namespace: b.join(".")
                }, p), (c = v[o]) || ((c = v[o] = []).delegateCount = 0, s.setup && !1 !== s.setup.call(n, f, b, a) || n.addEventListener && n.addEventListener(o, a)), s.add && (s.add.call(n, h), h.handler.guid || (h.handler.guid = u.guid)), e ? c.splice(c.delegateCount++, 0, h) : c.push(h), i.event.global[o] = !0)
        },
        remove: function(n, t, u, f, e) {
            var y, k, c, v, p, s, h, a, o, b, d, w = r.hasData(n) && r.get(n);
            if (w && (v = w.events)) {
                for (p = (t = (t || "").match(l) || [""]).length; p--;)
                    if (o = d = (c = gi.exec(t[p]) || [])[1], b = (c[2] || "").split(".").sort(), o) {
                        for (h = i.event.special[o] || {}, a = v[o = (f ? h.delegateType : h.bindType) || o] || [], c = c[2] && new RegExp("(^|\\.)" + b.join("\\.(?:.*\\.|)") + "(\\.|$)"), k = y = a.length; y--;) s = a[y], !e && d !== s.origType || u && u.guid !== s.guid || c && !c.test(s.namespace) || f && f !== s.selector && ("**" !== f || !s.selector) || (a.splice(y, 1), s.selector && a.delegateCount--, h.remove && h.remove.call(n, s));
                        k && !a.length && (h.teardown && !1 !== h.teardown.call(n, b, w.handle) || i.removeEvent(n, o, w.handle), delete v[o])
                    } else
                        for (o in v) i.event.remove(n, o + t[p], u, f, !0);
                i.isEmptyObject(v) && r.remove(n, "handle events")
            }
        },
        dispatch: function(n) {
            var u, h, c, e, f, l, s = new Array(arguments.length),
                t = i.event.fix(n),
                a = (r.get(this, "events") || Object.create(null))[t.type] || [],
                o = i.event.special[t.type] || {};
            for (s[0] = t, u = 1; u < arguments.length; u++) s[u] = arguments[u];
            if (t.delegateTarget = this, !o.preDispatch || !1 !== o.preDispatch.call(this, t)) {
                for (l = i.event.handlers.call(this, t, a), u = 0;
                    (e = l[u++]) && !t.isPropagationStopped();)
                    for (t.currentTarget = e.elem, h = 0;
                        (f = e.handlers[h++]) && !t.isImmediatePropagationStopped();) t.rnamespace && !1 !== f.namespace && !t.rnamespace.test(f.namespace) || (t.handleObj = f, t.data = f.data, void 0 !== (c = ((i.event.special[f.origType] || {}).handle || f.handler).apply(e.elem, s)) && !1 === (t.result = c) && (t.preventDefault(), t.stopPropagation()));
                return o.postDispatch && o.postDispatch.call(this, t), t.result
            }
        },
        handlers: function(n, t) {
            var f, h, u, e, o, c = [],
                s = t.delegateCount,
                r = n.target;
            if (s && r.nodeType && !("click" === n.type && 1 <= n.button))
                for (; r !== this; r = r.parentNode || this)
                    if (1 === r.nodeType && ("click" !== n.type || !0 !== r.disabled)) {
                        for (e = [], o = {}, f = 0; f < s; f++) void 0 === o[u = (h = t[f]).selector + " "] && (o[u] = h.needsContext ? -1 < i(u, this).index(r) : i.find(u, this, null, [r]).length), o[u] && e.push(h);
                        e.length && c.push({
                            elem: r,
                            handlers: e
                        })
                    } return r = this, s < t.length && c.push({
                elem: r,
                handlers: t.slice(s)
            }), c
        },
        addProp: function(n, t) {
            Object.defineProperty(i.Event.prototype, n, {
                enumerable: !0,
                configurable: !0,
                get: u(t) ? function() {
                    if (this.originalEvent) return t(this.originalEvent)
                } : function() {
                    if (this.originalEvent) return this.originalEvent[n]
                },
                set: function(t) {
                    Object.defineProperty(this, n, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: t
                    })
                }
            })
        },
        fix: function(n) {
            return n[i.expando] ? n : new i.Event(n)
        },
        special: {
            load: {
                noBubble: !0
            },
            click: {
                setup: function(n) {
                    var t = this || n;
                    return gt.test(t.type) && t.click && c(t, "input") && hi(t, "click", ct), !1
                },
                trigger: function(n) {
                    var t = this || n;
                    return gt.test(t.type) && t.click && c(t, "input") && hi(t, "click"), !0
                },
                _default: function(n) {
                    var t = n.target;
                    return gt.test(t.type) && t.click && c(t, "input") && r.get(t, "click") || c(t, "a")
                }
            },
            beforeunload: {
                postDispatch: function(n) {
                    void 0 !== n.result && n.originalEvent && (n.originalEvent.returnValue = n.result)
                }
            }
        }
    };
    i.removeEvent = function(n, t, i) {
        n.removeEventListener && n.removeEventListener(t, i)
    };
    i.Event = function(n, t) {
        if (!(this instanceof i.Event)) return new i.Event(n, t);
        n && n.type ? (this.originalEvent = n, this.type = n.type, this.isDefaultPrevented = n.defaultPrevented || void 0 === n.defaultPrevented && !1 === n.returnValue ? ct : lt, this.target = n.target && 3 === n.target.nodeType ? n.target.parentNode : n.target, this.currentTarget = n.currentTarget, this.relatedTarget = n.relatedTarget) : this.type = n;
        t && i.extend(this, t);
        this.timeStamp = n && n.timeStamp || Date.now();
        this[i.expando] = !0
    };
    i.Event.prototype = {
        constructor: i.Event,
        isDefaultPrevented: lt,
        isPropagationStopped: lt,
        isImmediatePropagationStopped: lt,
        isSimulated: !1,
        preventDefault: function() {
            var n = this.originalEvent;
            this.isDefaultPrevented = ct;
            n && !this.isSimulated && n.preventDefault()
        },
        stopPropagation: function() {
            var n = this.originalEvent;
            this.isPropagationStopped = ct;
            n && !this.isSimulated && n.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var n = this.originalEvent;
            this.isImmediatePropagationStopped = ct;
            n && !this.isSimulated && n.stopImmediatePropagation();
            this.stopPropagation()
        }
    };
    i.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: !0
    }, i.event.addProp);
    i.each({
        focus: "focusin",
        blur: "focusout"
    }, function(n, t) {
        i.event.special[n] = {
            setup: function() {
                return hi(this, n, ye), !1
            },
            trigger: function() {
                return hi(this, n), !0
            },
            _default: function() {
                return !0
            },
            delegateType: t
        }
    });
    i.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(n, t) {
        i.event.special[n] = {
            delegateType: t,
            bindType: t,
            handle: function(n) {
                var u, r = n.relatedTarget,
                    f = n.handleObj;
                return r && (r === this || i.contains(this, r)) || (n.type = f.origType, u = f.handler.apply(this, arguments), n.type = t), u
            }
        }
    });
    i.fn.extend({
        on: function(n, t, i, r) {
            return nr(this, n, t, i, r)
        },
        one: function(n, t, i, r) {
            return nr(this, n, t, i, r, 1)
        },
        off: function(n, t, r) {
            var u, f;
            if (n && n.preventDefault && n.handleObj) return u = n.handleObj, i(n.delegateTarget).off(u.namespace ? u.origType + "." + u.namespace : u.origType, u.selector, u.handler), this;
            if ("object" == typeof n) {
                for (f in n) this.off(f, t, n[f]);
                return this
            }
            return !1 !== t && "function" != typeof t || (r = t, t = void 0), !1 === r && (r = lt), this.each(function() {
                i.event.remove(this, n, r, t)
            })
        }
    });
    var pe = /<script|<style|<link/i,
        we = /checked\s*(?:[^=]|=\s*.checked.)/i,
        be = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    i.extend({
        htmlPrefilter: function(n) {
            return n
        },
        clone: function(n, t, r) {
            var u, c, o, f, l, a, v, h = n.cloneNode(!0),
                y = st(n);
            if (!(e.noCloneChecked || 1 !== n.nodeType && 11 !== n.nodeType || i.isXMLDoc(n)))
                for (f = s(h), u = 0, c = (o = s(n)).length; u < c; u++) l = o[u], a = f[u], void 0, "input" === (v = a.nodeName.toLowerCase()) && gt.test(l.type) ? a.checked = l.checked : "input" !== v && "textarea" !== v || (a.defaultValue = l.defaultValue);
            if (t)
                if (r)
                    for (o = o || s(n), f = f || s(h), u = 0, c = o.length; u < c; u++) wu(o[u], f[u]);
                else wu(n, h);
            return 0 < (f = s(h, "script")).length && di(f, !y && s(n, "script")), h
        },
        cleanData: function(n) {
            for (var u, t, f, s = i.event.special, e = 0; void 0 !== (t = n[e]); e++)
                if (ot(t)) {
                    if (u = t[r.expando]) {
                        if (u.events)
                            for (f in u.events) s[f] ? i.event.remove(t, f) : i.removeEvent(t, f, u.handle);
                        t[r.expando] = void 0
                    }
                    t[o.expando] && (t[o.expando] = void 0)
                }
        }
    });
    i.fn.extend({
        detach: function(n) {
            return bu(this, n, !0)
        },
        remove: function(n) {
            return bu(this, n)
        },
        text: function(n) {
            return w(this, function(n) {
                return void 0 === n ? i.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = n)
                })
            }, null, n, arguments.length)
        },
        append: function() {
            return at(this, arguments, function(n) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || pu(this, n).appendChild(n)
            })
        },
        prepend: function() {
            return at(this, arguments, function(n) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = pu(this, n);
                    t.insertBefore(n, t.firstChild)
                }
            })
        },
        before: function() {
            return at(this, arguments, function(n) {
                this.parentNode && this.parentNode.insertBefore(n, this)
            })
        },
        after: function() {
            return at(this, arguments, function(n) {
                this.parentNode && this.parentNode.insertBefore(n, this.nextSibling)
            })
        },
        empty: function() {
            for (var n, t = 0; null != (n = this[t]); t++) 1 === n.nodeType && (i.cleanData(s(n, !1)), n.textContent = "");
            return this
        },
        clone: function(n, t) {
            return n = null != n && n, t = null == t ? n : t, this.map(function() {
                return i.clone(this, n, t)
            })
        },
        html: function(n) {
            return w(this, function(n) {
                var t = this[0] || {},
                    r = 0,
                    u = this.length;
                if (void 0 === n && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof n && !pe.test(n) && !h[(lu.exec(n) || ["", ""])[1].toLowerCase()]) {
                    n = i.htmlPrefilter(n);
                    try {
                        for (; r < u; r++) 1 === (t = this[r] || {}).nodeType && (i.cleanData(s(t, !1)), t.innerHTML = n);
                        t = 0
                    } catch (n) {}
                }
                t && this.empty().append(n)
            }, null, n, arguments.length)
        },
        replaceWith: function() {
            var n = [];
            return at(this, arguments, function(t) {
                var r = this.parentNode;
                i.inArray(this, n) < 0 && (i.cleanData(s(this)), r && r.replaceChild(t, this))
            }, n)
        }
    });
    i.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(n, t) {
        i.fn[n] = function(n) {
            for (var u, f = [], e = i(n), o = e.length - 1, r = 0; r <= o; r++) u = r === o ? this : this.clone(!0), i(e[r])[t](u), yi.apply(f, u.get());
            return this.pushStack(f)
        }
    });
    var tr = new RegExp("^(" + hu + ")(?!px)[a-z%]+$", "i"),
        ci = function(t) {
            var i = t.ownerDocument.defaultView;
            return i && i.opener || (i = n), i.getComputedStyle(t)
        },
        ku = function(n, t, i) {
            var u, r, f = {};
            for (r in t) f[r] = n.style[r], n.style[r] = t[r];
            for (r in u = i.call(n), t) n.style[r] = f[r];
            return u
        },
        ge = new RegExp(b.join("|"), "i");
    ! function() {
        function r() {
            if (t) {
                s.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0";
                t.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%";
                g.appendChild(s).appendChild(t);
                var i = n.getComputedStyle(t);
                h = "1%" !== i.top;
                v = 12 === u(i.marginLeft);
                t.style.right = "60%";
                a = 36 === u(i.right);
                c = 36 === u(i.width);
                t.style.position = "absolute";
                l = 12 === u(t.offsetWidth / 3);
                g.removeChild(s);
                t = null
            }
        }

        function u(n) {
            return Math.round(parseFloat(n))
        }
        var h, c, l, a, o, v, s = f.createElement("div"),
            t = f.createElement("div");
        t.style && (t.style.backgroundClip = "content-box", t.cloneNode(!0).style.backgroundClip = "", e.clearCloneStyle = "content-box" === t.style.backgroundClip, i.extend(e, {
            boxSizingReliable: function() {
                return r(), c
            },
            pixelBoxStyles: function() {
                return r(), a
            },
            pixelPosition: function() {
                return r(), h
            },
            reliableMarginLeft: function() {
                return r(), v
            },
            scrollboxSize: function() {
                return r(), l
            },
            reliableTrDimensions: function() {
                var i, t, r, u;
                return null == o && (i = f.createElement("table"), t = f.createElement("tr"), r = f.createElement("div"), i.style.cssText = "position:absolute;left:-11111px;border-collapse:separate", t.style.cssText = "border:1px solid", t.style.height = "1px", r.style.height = "9px", r.style.display = "block", g.appendChild(i).appendChild(t).appendChild(r), u = n.getComputedStyle(t), o = parseInt(u.height, 10) + parseInt(u.borderTopWidth, 10) + parseInt(u.borderBottomWidth, 10) === t.offsetHeight, g.removeChild(i)), o
            }
        }))
    }();
    var gu = ["Webkit", "Moz", "ms"],
        nf = f.createElement("div").style,
        tf = {};
    var no = /^(none|table(?!-c[ea]).+)/,
        rf = /^--/,
        to = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        uf = {
            letterSpacing: "0",
            fontWeight: "400"
        };
    i.extend({
        cssHooks: {
            opacity: {
                get: function(n, t) {
                    if (t) {
                        var i = ni(n, "opacity");
                        return "" === i ? "1" : i
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function(n, t, r, u) {
            if (n && 3 !== n.nodeType && 8 !== n.nodeType && n.style) {
                var f, h, o, c = y(t),
                    l = rf.test(t),
                    s = n.style;
                if (l || (t = ir(c)), o = i.cssHooks[t] || i.cssHooks[c], void 0 === r) return o && "get" in o && void 0 !== (f = o.get(n, !1, u)) ? f : s[t];
                "string" == (h = typeof r) && (f = kt.exec(r)) && f[1] && (r = cu(n, t, f), h = "number");
                null != r && r == r && ("number" !== h || l || (r += f && f[3] || (i.cssNumber[c] ? "" : "px")), e.clearCloneStyle || "" !== r || 0 !== t.indexOf("background") || (s[t] = "inherit"), o && "set" in o && void 0 === (r = o.set(n, r, u)) || (l ? s.setProperty(t, r) : s[t] = r))
            }
        },
        css: function(n, t, r, u) {
            var f, e, o, s = y(t);
            return rf.test(t) || (t = ir(s)), (o = i.cssHooks[t] || i.cssHooks[s]) && "get" in o && (f = o.get(n, !0, r)), void 0 === f && (f = ni(n, t, u)), "normal" === f && t in uf && (f = uf[t]), "" === r || r ? (e = parseFloat(f), !0 === r || isFinite(e) ? e || 0 : f) : f
        }
    });
    i.each(["height", "width"], function(n, t) {
        i.cssHooks[t] = {
            get: function(n, r, u) {
                if (r) return !no.test(i.css(n, "display")) || n.getClientRects().length && n.getBoundingClientRect().width ? ef(n, t, u) : ku(n, to, function() {
                    return ef(n, t, u)
                })
            },
            set: function(n, r, u) {
                var s, f = ci(n),
                    h = !e.scrollboxSize() && "absolute" === f.position,
                    c = (h || u) && "border-box" === i.css(n, "boxSizing", !1, f),
                    o = u ? rr(n, t, u, c, f) : 0;
                return c && h && (o -= Math.ceil(n["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(f[t]) - rr(n, t, "border", !1, f) - .5)), o && (s = kt.exec(r)) && "px" !== (s[3] || "px") && (n.style[t] = r, r = i.css(n, t)), ff(0, r, o)
            }
        }
    });
    i.cssHooks.marginLeft = du(e.reliableMarginLeft, function(n, t) {
        if (t) return (parseFloat(ni(n, "marginLeft")) || n.getBoundingClientRect().left - ku(n, {
            marginLeft: 0
        }, function() {
            return n.getBoundingClientRect().left
        })) + "px"
    });
    i.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(n, t) {
        i.cssHooks[n + t] = {
            expand: function(i) {
                for (var r = 0, f = {}, u = "string" == typeof i ? i.split(" ") : [i]; r < 4; r++) f[n + b[r] + t] = u[r] || u[r - 2] || u[0];
                return f
            }
        };
        "margin" !== n && (i.cssHooks[n + t].set = ff)
    });
    i.fn.extend({
        css: function(n, t) {
            return w(this, function(n, t, r) {
                var f, e, o = {},
                    u = 0;
                if (Array.isArray(t)) {
                    for (f = ci(n), e = t.length; u < e; u++) o[t[u]] = i.css(n, t[u], !1, f);
                    return o
                }
                return void 0 !== r ? i.style(n, t, r) : i.css(n, t)
            }, n, t, 1 < arguments.length)
        }
    });
    ((i.Tween = a).prototype = {
        constructor: a,
        init: function(n, t, r, u, f, e) {
            this.elem = n;
            this.prop = r;
            this.easing = f || i.easing._default;
            this.options = t;
            this.start = this.now = this.cur();
            this.end = u;
            this.unit = e || (i.cssNumber[r] ? "" : "px")
        },
        cur: function() {
            var n = a.propHooks[this.prop];
            return n && n.get ? n.get(this) : a.propHooks._default.get(this)
        },
        run: function(n) {
            var t, r = a.propHooks[this.prop];
            return this.pos = this.options.duration ? t = i.easing[this.easing](n, this.options.duration * n, 0, 1, this.options.duration) : t = n, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), r && r.set ? r.set(this) : a.propHooks._default.set(this), this
        }
    }).init.prototype = a.prototype;
    (a.propHooks = {
        _default: {
            get: function(n) {
                var t;
                return 1 !== n.elem.nodeType || null != n.elem[n.prop] && null == n.elem.style[n.prop] ? n.elem[n.prop] : (t = i.css(n.elem, n.prop, "")) && "auto" !== t ? t : 0
            },
            set: function(n) {
                i.fx.step[n.prop] ? i.fx.step[n.prop](n) : 1 !== n.elem.nodeType || !i.cssHooks[n.prop] && null == n.elem.style[ir(n.prop)] ? n.elem[n.prop] = n.now : i.style(n.elem, n.prop, n.now + n.unit)
            }
        }
    }).scrollTop = a.propHooks.scrollLeft = {
        set: function(n) {
            n.elem.nodeType && n.elem.parentNode && (n.elem[n.prop] = n.now)
        }
    };
    i.easing = {
        linear: function(n) {
            return n
        },
        swing: function(n) {
            return .5 - Math.cos(n * Math.PI) / 2
        },
        _default: "swing"
    };
    i.fx = a.prototype.init;
    i.fx.step = {};
    sf = /^(?:toggle|show|hide)$/;
    hf = /queueHooks$/;
    i.Animation = i.extend(v, {
        tweeners: {
            "*": [function(n, t) {
                var i = this.createTween(n, t);
                return cu(i.elem, n, kt.exec(t), i), i
            }]
        },
        tweener: function(n, t) {
            u(n) ? (t = n, n = ["*"]) : n = n.match(l);
            for (var i, r = 0, f = n.length; r < f; r++) i = n[r], v.tweeners[i] = v.tweeners[i] || [], v.tweeners[i].unshift(t)
        },
        prefilters: [function(n, t, u) {
            var f, y, w, c, b, h, o, l, k = "width" in t || "height" in t,
                v = this,
                p = {},
                s = n.style,
                a = n.nodeType && dt(n),
                e = r.get(n, "fxshow");
            for (f in u.queue || (null == (c = i._queueHooks(n, "fx")).unqueued && (c.unqueued = 0, b = c.empty.fire, c.empty.fire = function() {
                    c.unqueued || b()
                }), c.unqueued++, v.always(function() {
                    v.always(function() {
                        c.unqueued--;
                        i.queue(n, "fx").length || c.empty.fire()
                    })
                })), t)
                if (y = t[f], sf.test(y)) {
                    if (delete t[f], w = w || "toggle" === y, y === (a ? "hide" : "show")) {
                        if ("show" !== y || !e || void 0 === e[f]) continue;
                        a = !0
                    }
                    p[f] = e && e[f] || i.style(n, f)
                } if ((h = !i.isEmptyObject(t)) || !i.isEmptyObject(p))
                for (f in k && 1 === n.nodeType && (u.overflow = [s.overflow, s.overflowX, s.overflowY], null == (o = e && e.display) && (o = r.get(n, "display")), "none" === (l = i.css(n, "display")) && (o ? l = o : (ht([n], !0), o = n.style.display || o, l = i.css(n, "display"), ht([n]))), ("inline" === l || "inline-block" === l && null != o) && "none" === i.css(n, "float") && (h || (v.done(function() {
                        s.display = o
                    }), null == o && (l = s.display, o = "none" === l ? "" : l)), s.display = "inline-block")), u.overflow && (s.overflow = "hidden", v.always(function() {
                        s.overflow = u.overflow[0];
                        s.overflowX = u.overflow[1];
                        s.overflowY = u.overflow[2]
                    })), h = !1, p) h || (e ? "hidden" in e && (a = e.hidden) : e = r.access(n, "fxshow", {
                    display: o
                }), w && (e.hidden = !a), a && ht([n], !0), v.done(function() {
                    for (f in a || ht([n]), r.remove(n, "fxshow"), p) i.style(n, f, p[f])
                })), h = lf(a ? e[f] : 0, f, v), f in e || (e[f] = h.start, a && (h.end = h.start, h.start = 0))
        }],
        prefilter: function(n, t) {
            t ? v.prefilters.unshift(n) : v.prefilters.push(n)
        }
    });
    i.speed = function(n, t, r) {
        var f = n && "object" == typeof n ? i.extend({}, n) : {
            complete: r || !r && t || u(n) && n,
            duration: n,
            easing: r && t || t && !u(t) && t
        };
        return i.fx.off ? f.duration = 0 : "number" != typeof f.duration && (f.duration = f.duration in i.fx.speeds ? i.fx.speeds[f.duration] : i.fx.speeds._default), null != f.queue && !0 !== f.queue || (f.queue = "fx"), f.old = f.complete, f.complete = function() {
            u(f.old) && f.old.call(this);
            f.queue && i.dequeue(this, f.queue)
        }, f
    };
    i.fn.extend({
        fadeTo: function(n, t, i, r) {
            return this.filter(dt).css("opacity", 0).show().end().animate({
                opacity: t
            }, n, i, r)
        },
        animate: function(n, t, u, f) {
            var s = i.isEmptyObject(n),
                o = i.speed(t, u, f),
                e = function() {
                    var t = v(this, i.extend({}, n), o);
                    (s || r.get(this, "finish")) && t.stop(!0)
                };
            return e.finish = e, s || !1 === o.queue ? this.each(e) : this.queue(o.queue, e)
        },
        stop: function(n, t, u) {
            var f = function(n) {
                var t = n.stop;
                delete n.stop;
                t(u)
            };
            return "string" != typeof n && (u = t, t = n, n = void 0), t && this.queue(n || "fx", []), this.each(function() {
                var s = !0,
                    t = null != n && n + "queueHooks",
                    o = i.timers,
                    e = r.get(this);
                if (t) e[t] && e[t].stop && f(e[t]);
                else
                    for (t in e) e[t] && e[t].stop && hf.test(t) && f(e[t]);
                for (t = o.length; t--;) o[t].elem !== this || null != n && o[t].queue !== n || (o[t].anim.stop(u), s = !1, o.splice(t, 1));
                !s && u || i.dequeue(this, n)
            })
        },
        finish: function(n) {
            return !1 !== n && (n = n || "fx"), this.each(function() {
                var t, e = r.get(this),
                    u = e[n + "queue"],
                    o = e[n + "queueHooks"],
                    f = i.timers,
                    s = u ? u.length : 0;
                for (e.finish = !0, i.queue(this, n, []), o && o.stop && o.stop.call(this, !0), t = f.length; t--;) f[t].elem === this && f[t].queue === n && (f[t].anim.stop(!0), f.splice(t, 1));
                for (t = 0; t < s; t++) u[t] && u[t].finish && u[t].finish.call(this);
                delete e.finish
            })
        }
    });
    i.each(["toggle", "show", "hide"], function(n, t) {
        var r = i.fn[t];
        i.fn[t] = function(n, i, u) {
            return null == n || "boolean" == typeof n ? r.apply(this, arguments) : this.animate(ai(t, !0), n, i, u)
        }
    });
    i.each({
        slideDown: ai("show"),
        slideUp: ai("hide"),
        slideToggle: ai("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(n, t) {
        i.fn[n] = function(n, i, r) {
            return this.animate(t, n, i, r)
        }
    });
    i.timers = [];
    i.fx.tick = function() {
        var r, n = 0,
            t = i.timers;
        for (vt = Date.now(); n < t.length; n++)(r = t[n])() || t[n] !== r || t.splice(n--, 1);
        t.length || i.fx.stop();
        vt = void 0
    };
    i.fx.timer = function(n) {
        i.timers.push(n);
        i.fx.start()
    };
    i.fx.interval = 13;
    i.fx.start = function() {
        li || (li = !0, ur())
    };
    i.fx.stop = function() {
        li = null
    };
    i.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    };
    i.fn.delay = function(t, r) {
        return t = i.fx && i.fx.speeds[t] || t, r = r || "fx", this.queue(r, function(i, r) {
            var u = n.setTimeout(i, t);
            r.stop = function() {
                n.clearTimeout(u)
            }
        })
    };
    yt = f.createElement("input");
    of = f.createElement("select").appendChild(f.createElement("option"));
    yt.type = "checkbox";
    e.checkOn = "" !== yt.value;
    e.optSelected = of.selected;
    (yt = f.createElement("input")).value = "t";
    yt.type = "radio";
    e.radioValue = "t" === yt.value;
    pt = i.expr.attrHandle;
    i.fn.extend({
        attr: function(n, t) {
            return w(this, i.attr, n, t, 1 < arguments.length)
        },
        removeAttr: function(n) {
            return this.each(function() {
                i.removeAttr(this, n)
            })
        }
    });
    i.extend({
        attr: function(n, t, r) {
            var f, u, e = n.nodeType;
            if (3 !== e && 8 !== e && 2 !== e) return "undefined" == typeof n.getAttribute ? i.prop(n, t, r) : (1 === e && i.isXMLDoc(n) || (u = i.attrHooks[t.toLowerCase()] || (i.expr.match.bool.test(t) ? af : void 0)), void 0 !== r ? null === r ? void i.removeAttr(n, t) : u && "set" in u && void 0 !== (f = u.set(n, r, t)) ? f : (n.setAttribute(t, r + ""), r) : u && "get" in u && null !== (f = u.get(n, t)) ? f : null == (f = i.find.attr(n, t)) ? void 0 : f)
        },
        attrHooks: {
            type: {
                set: function(n, t) {
                    if (!e.radioValue && "radio" === t && c(n, "input")) {
                        var i = n.value;
                        return n.setAttribute("type", t), i && (n.value = i), t
                    }
                }
            }
        },
        removeAttr: function(n, t) {
            var i, u = 0,
                r = t && t.match(l);
            if (r && 1 === n.nodeType)
                while (i = r[u++]) n.removeAttribute(i)
        }
    });
    af = {
        set: function(n, t, r) {
            return !1 === t ? i.removeAttr(n, r) : n.setAttribute(r, r), r
        }
    };
    i.each(i.expr.match.bool.source.match(/\w+/g), function(n, t) {
        var r = pt[t] || i.find.attr;
        pt[t] = function(n, t, i) {
            var f, e, u = t.toLowerCase();
            return i || (e = pt[u], pt[u] = f, f = null != r(n, t, i) ? u : null, pt[u] = e), f
        }
    });
    vf = /^(?:input|select|textarea|button)$/i;
    yf = /^(?:a|area)$/i;
    i.fn.extend({
        prop: function(n, t) {
            return w(this, i.prop, n, t, 1 < arguments.length)
        },
        removeProp: function(n) {
            return this.each(function() {
                delete this[i.propFix[n] || n]
            })
        }
    });
    i.extend({
        prop: function(n, t, r) {
            var f, u, e = n.nodeType;
            if (3 !== e && 8 !== e && 2 !== e) return 1 === e && i.isXMLDoc(n) || (t = i.propFix[t] || t, u = i.propHooks[t]), void 0 !== r ? u && "set" in u && void 0 !== (f = u.set(n, r, t)) ? f : n[t] = r : u && "get" in u && null !== (f = u.get(n, t)) ? f : n[t]
        },
        propHooks: {
            tabIndex: {
                get: function(n) {
                    var t = i.find.attr(n, "tabindex");
                    return t ? parseInt(t, 10) : vf.test(n.nodeName) || yf.test(n.nodeName) && n.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    });
    e.optSelected || (i.propHooks.selected = {
        get: function(n) {
            var t = n.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        },
        set: function(n) {
            var t = n.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    });
    i.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        i.propFix[this.toLowerCase()] = this
    });
    i.fn.extend({
        addClass: function(n) {
            var o, t, r, f, e, s, h, c = 0;
            if (u(n)) return this.each(function(t) {
                i(this).addClass(n.call(this, t, it(this)))
            });
            if ((o = fr(n)).length)
                while (t = this[c++])
                    if (f = it(t), r = 1 === t.nodeType && " " + tt(f) + " ") {
                        for (s = 0; e = o[s++];) r.indexOf(" " + e + " ") < 0 && (r += e + " ");
                        f !== (h = tt(r)) && t.setAttribute("class", h)
                    } return this
        },
        removeClass: function(n) {
            var o, r, t, f, e, s, h, c = 0;
            if (u(n)) return this.each(function(t) {
                i(this).removeClass(n.call(this, t, it(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ((o = fr(n)).length)
                while (r = this[c++])
                    if (f = it(r), t = 1 === r.nodeType && " " + tt(f) + " ") {
                        for (s = 0; e = o[s++];)
                            while (-1 < t.indexOf(" " + e + " ")) t = t.replace(" " + e + " ", " ");
                        f !== (h = tt(t)) && r.setAttribute("class", h)
                    } return this
        },
        toggleClass: function(n, t) {
            var f = typeof n,
                e = "string" === f || Array.isArray(n);
            return "boolean" == typeof t && e ? t ? this.addClass(n) : this.removeClass(n) : u(n) ? this.each(function(r) {
                i(this).toggleClass(n.call(this, r, it(this), t), t)
            }) : this.each(function() {
                var t, o, u, s;
                if (e)
                    for (o = 0, u = i(this), s = fr(n); t = s[o++];) u.hasClass(t) ? u.removeClass(t) : u.addClass(t);
                else void 0 !== n && "boolean" !== f || ((t = it(this)) && r.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === n ? "" : r.get(this, "__className__") || ""))
            })
        },
        hasClass: function(n) {
            for (var t, r = 0, i = " " + n + " "; t = this[r++];)
                if (1 === t.nodeType && -1 < (" " + tt(it(t)) + " ").indexOf(i)) return !0;
            return !1
        }
    });
    pf = /\r/g;
    i.fn.extend({
        val: function(n) {
            var t, r, e, f = this[0];
            return arguments.length ? (e = u(n), this.each(function(r) {
                var u;
                1 === this.nodeType && (null == (u = e ? n.call(this, r, i(this).val()) : n) ? u = "" : "number" == typeof u ? u += "" : Array.isArray(u) && (u = i.map(u, function(n) {
                    return null == n ? "" : n + ""
                })), (t = i.valHooks[this.type] || i.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, u, "value") || (this.value = u))
            })) : f ? (t = i.valHooks[f.type] || i.valHooks[f.nodeName.toLowerCase()]) && "get" in t && void 0 !== (r = t.get(f, "value")) ? r : "string" == typeof(r = f.value) ? r.replace(pf, "") : null == r ? "" : r : void 0
        }
    });
    i.extend({
        valHooks: {
            option: {
                get: function(n) {
                    var t = i.find.attr(n, "value");
                    return null != t ? t : tt(i.text(n))
                }
            },
            select: {
                get: function(n) {
                    for (var e, t, o = n.options, u = n.selectedIndex, f = "select-one" === n.type, s = f ? null : [], h = f ? u + 1 : o.length, r = u < 0 ? h : f ? u : 0; r < h; r++)
                        if (((t = o[r]).selected || r === u) && !t.disabled && (!t.parentNode.disabled || !c(t.parentNode, "optgroup"))) {
                            if (e = i(t).val(), f) return e;
                            s.push(e)
                        } return s
                },
                set: function(n, t) {
                    for (var r, u, f = n.options, e = i.makeArray(t), o = f.length; o--;)((u = f[o]).selected = -1 < i.inArray(i.valHooks.option.get(u), e)) && (r = !0);
                    return r || (n.selectedIndex = -1), e
                }
            }
        }
    });
    i.each(["radio", "checkbox"], function() {
        i.valHooks[this] = {
            set: function(n, t) {
                if (Array.isArray(t)) return n.checked = -1 < i.inArray(i(n).val(), t)
            }
        };
        e.checkOn || (i.valHooks[this].get = function(n) {
            return null === n.getAttribute("value") ? "on" : n.value
        })
    });
    e.focusin = "onfocusin" in n;
    er = /^(?:focusinfocus|focusoutblur)$/;
    or = function(n) {
        n.stopPropagation()
    };
    i.extend(i.event, {
        trigger: function(t, e, o, s) {
            var k, c, l, d, v, y, a, p, w = [o || f],
                h = ui.call(t, "type") ? t.type : t,
                b = ui.call(t, "namespace") ? t.namespace.split(".") : [];
            if (c = p = l = o = o || f, 3 !== o.nodeType && 8 !== o.nodeType && !er.test(h + i.event.triggered) && (-1 < h.indexOf(".") && (h = (b = h.split(".")).shift(), b.sort()), v = h.indexOf(":") < 0 && "on" + h, (t = t[i.expando] ? t : new i.Event(h, "object" == typeof t && t)).isTrigger = s ? 2 : 3, t.namespace = b.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + b.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = o), e = null == e ? [t] : i.makeArray(e, [t]), a = i.event.special[h] || {}, s || !a.trigger || !1 !== a.trigger.apply(o, e))) {
                if (!s && !a.noBubble && !rt(o)) {
                    for (d = a.delegateType || h, er.test(d + h) || (c = c.parentNode); c; c = c.parentNode) w.push(c), l = c;
                    l === (o.ownerDocument || f) && w.push(l.defaultView || l.parentWindow || n)
                }
                for (k = 0;
                    (c = w[k++]) && !t.isPropagationStopped();) p = c, t.type = 1 < k ? d : a.bindType || h, (y = (r.get(c, "events") || Object.create(null))[t.type] && r.get(c, "handle")) && y.apply(c, e), (y = v && c[v]) && y.apply && ot(c) && (t.result = y.apply(c, e), !1 === t.result && t.preventDefault());
                return t.type = h, s || t.isDefaultPrevented() || a._default && !1 !== a._default.apply(w.pop(), e) || !ot(o) || v && u(o[h]) && !rt(o) && ((l = o[v]) && (o[v] = null), i.event.triggered = h, t.isPropagationStopped() && p.addEventListener(h, or), o[h](), t.isPropagationStopped() && p.removeEventListener(h, or), i.event.triggered = void 0, l && (o[v] = l)), t.result
            }
        },
        simulate: function(n, t, r) {
            var u = i.extend(new i.Event, r, {
                type: n,
                isSimulated: !0
            });
            i.event.trigger(u, null, t)
        }
    });
    i.fn.extend({
        trigger: function(n, t) {
            return this.each(function() {
                i.event.trigger(n, t, this)
            })
        },
        triggerHandler: function(n, t) {
            var r = this[0];
            if (r) return i.event.trigger(n, t, r, !0)
        }
    });
    e.focusin || i.each({
        focus: "focusin",
        blur: "focusout"
    }, function(n, t) {
        var u = function(n) {
            i.event.simulate(t, n.target, i.event.fix(n))
        };
        i.event.special[t] = {
            setup: function() {
                var i = this.ownerDocument || this.document || this,
                    f = r.access(i, t);
                f || i.addEventListener(n, u, !0);
                r.access(i, t, (f || 0) + 1)
            },
            teardown: function() {
                var i = this.ownerDocument || this.document || this,
                    f = r.access(i, t) - 1;
                f ? r.access(i, t, f) : (i.removeEventListener(n, u, !0), r.remove(i, t))
            }
        }
    });
    var ti = n.location,
        wf = {
            guid: Date.now()
        },
        sr = /\?/;
    i.parseXML = function(t) {
        var r, u;
        if (!t || "string" != typeof t) return null;
        try {
            r = (new n.DOMParser).parseFromString(t, "text/xml")
        } catch (t) {}
        return u = r && r.getElementsByTagName("parsererror")[0], r && !u || i.error("Invalid XML: " + (u ? i.map(u.childNodes, function(n) {
            return n.textContent
        }).join("\n") : t)), r
    };
    var io = /\[\]$/,
        bf = /\r?\n/g,
        ro = /^(?:submit|button|image|reset|file)$/i,
        uo = /^(?:input|select|textarea|keygen)/i;
    i.param = function(n, t) {
        var r, f = [],
            e = function(n, t) {
                var i = u(t) ? t() : t;
                f[f.length] = encodeURIComponent(n) + "=" + encodeURIComponent(null == i ? "" : i)
            };
        if (null == n) return "";
        if (Array.isArray(n) || n.jquery && !i.isPlainObject(n)) i.each(n, function() {
            e(this.name, this.value)
        });
        else
            for (r in n) hr(r, n[r], t, e);
        return f.join("&")
    };
    i.fn.extend({
        serialize: function() {
            return i.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var n = i.prop(this, "elements");
                return n ? i.makeArray(n) : this
            }).filter(function() {
                var n = this.type;
                return this.name && !i(this).is(":disabled") && uo.test(this.nodeName) && !ro.test(n) && (this.checked || !gt.test(n))
            }).map(function(n, t) {
                var r = i(this).val();
                return null == r ? null : Array.isArray(r) ? i.map(r, function(n) {
                    return {
                        name: t.name,
                        value: n.replace(bf, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: r.replace(bf, "\r\n")
                }
            }).get()
        }
    });
    var fo = /%20/g,
        eo = /#.*$/,
        oo = /([?&])_=[^&]*/,
        so = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        ho = /^(?:GET|HEAD)$/,
        co = /^\/\//,
        kf = {},
        cr = {},
        df = "*/".concat("*"),
        lr = f.createElement("a");
    return lr.href = ti.href, i.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: ti.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(ti.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": df,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": i.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(n, t) {
            return t ? ar(ar(n, i.ajaxSettings), t) : ar(i.ajaxSettings, n)
        },
        ajaxPrefilter: gf(kf),
        ajaxTransport: gf(cr),
        ajax: function(t, r) {
            function b(t, r, f, c) {
                var v, rt, b, p, g, l = r;
                s || (s = !0, d && n.clearTimeout(d), a = void 0, k = c || "", e.readyState = 0 < t ? 4 : 0, v = 200 <= t && t < 300 || 304 === t, f && (p = function(n, t, i) {
                    for (var e, u, f, o, s = n.contents, r = n.dataTypes;
                        "*" === r[0];) r.shift(), void 0 === e && (e = n.mimeType || t.getResponseHeader("Content-Type"));
                    if (e)
                        for (u in s)
                            if (s[u] && s[u].test(e)) {
                                r.unshift(u);
                                break
                            } if (r[0] in i) f = r[0];
                    else {
                        for (u in i) {
                            if (!r[0] || n.converters[u + " " + r[0]]) {
                                f = u;
                                break
                            }
                            o || (o = u)
                        }
                        f = f || o
                    }
                    if (f) return f !== r[0] && r.unshift(f), i[f]
                }(u, e, f)), !v && -1 < i.inArray("script", u.dataTypes) && i.inArray("json", u.dataTypes) < 0 && (u.converters["text script"] = function() {}), p = function(n, t, i, r) {
                    var h, u, f, s, e, o = {},
                        c = n.dataTypes.slice();
                    if (c[1])
                        for (f in n.converters) o[f.toLowerCase()] = n.converters[f];
                    for (u = c.shift(); u;)
                        if (n.responseFields[u] && (i[n.responseFields[u]] = t), !e && r && n.dataFilter && (t = n.dataFilter(t, n.dataType)), e = u, u = c.shift())
                            if ("*" === u) u = e;
                            else if ("*" !== e && e !== u) {
                        if (!(f = o[e + " " + u] || o["* " + u]))
                            for (h in o)
                                if ((s = h.split(" "))[1] === u && (f = o[e + " " + s[0]] || o["* " + s[0]])) {
                                    !0 === f ? f = o[h] : !0 !== o[h] && (u = s[0], c.unshift(s[1]));
                                    break
                                } if (!0 !== f)
                            if (f && n.throws) t = f(t);
                            else try {
                                t = f(t)
                            } catch (n) {
                                return {
                                    state: "parsererror",
                                    error: f ? n : "No conversion from " + e + " to " + u
                                }
                            }
                    }
                    return {
                        state: "success",
                        data: t
                    }
                }(u, p, e, v), v ? (u.ifModified && ((g = e.getResponseHeader("Last-Modified")) && (i.lastModified[o] = g), (g = e.getResponseHeader("etag")) && (i.etag[o] = g)), 204 === t || "HEAD" === u.type ? l = "nocontent" : 304 === t ? l = "notmodified" : (l = p.state, rt = p.data, v = !(b = p.error))) : (b = l, !t && l || (l = "error", t < 0 && (t = 0))), e.status = t, e.statusText = (r || l) + "", v ? tt.resolveWith(h, [rt, l, e]) : tt.rejectWith(h, [e, l, b]), e.statusCode(w), w = void 0, y && nt.trigger(v ? "ajaxSuccess" : "ajaxError", [e, u, v ? rt : b]), it.fireWith(h, [e, l]), y && (nt.trigger("ajaxComplete", [e, u]), --i.active || i.event.trigger("ajaxStop")))
            }
            "object" == typeof t && (r = t, t = void 0);
            r = r || {};
            var a, o, k, v, d, c, s, y, g, p, u = i.ajaxSetup({}, r),
                h = u.context || u,
                nt = u.context && (h.nodeType || h.jquery) ? i(h) : i.event,
                tt = i.Deferred(),
                it = i.Callbacks("once memory"),
                w = u.statusCode || {},
                rt = {},
                ut = {},
                ft = "canceled",
                e = {
                    readyState: 0,
                    getResponseHeader: function(n) {
                        var t;
                        if (s) {
                            if (!v)
                                for (v = {}; t = so.exec(k);) v[t[1].toLowerCase() + " "] = (v[t[1].toLowerCase() + " "] || []).concat(t[2]);
                            t = v[n.toLowerCase() + " "]
                        }
                        return null == t ? null : t.join(", ")
                    },
                    getAllResponseHeaders: function() {
                        return s ? k : null
                    },
                    setRequestHeader: function(n, t) {
                        return null == s && (n = ut[n.toLowerCase()] = ut[n.toLowerCase()] || n, rt[n] = t), this
                    },
                    overrideMimeType: function(n) {
                        return null == s && (u.mimeType = n), this
                    },
                    statusCode: function(n) {
                        var t;
                        if (n)
                            if (s) e.always(n[e.status]);
                            else
                                for (t in n) w[t] = [w[t], n[t]];
                        return this
                    },
                    abort: function(n) {
                        var t = n || ft;
                        return a && a.abort(t), b(0, t), this
                    }
                };
            if (tt.promise(e), u.url = ((t || u.url || ti.href) + "").replace(co, ti.protocol + "//"), u.type = r.method || r.type || u.method || u.type, u.dataTypes = (u.dataType || "*").toLowerCase().match(l) || [""], null == u.crossDomain) {
                c = f.createElement("a");
                try {
                    c.href = u.url;
                    c.href = c.href;
                    u.crossDomain = lr.protocol + "//" + lr.host != c.protocol + "//" + c.host
                } catch (t) {
                    u.crossDomain = !0
                }
            }
            if (u.data && u.processData && "string" != typeof u.data && (u.data = i.param(u.data, u.traditional)), ne(kf, u, r, e), s) return e;
            for (g in (y = i.event && u.global) && 0 == i.active++ && i.event.trigger("ajaxStart"), u.type = u.type.toUpperCase(), u.hasContent = !ho.test(u.type), o = u.url.replace(eo, ""), u.hasContent ? u.data && u.processData && 0 === (u.contentType || "").indexOf("application/x-www-form-urlencoded") && (u.data = u.data.replace(fo, "+")) : (p = u.url.slice(o.length), u.data && (u.processData || "string" == typeof u.data) && (o += (sr.test(o) ? "&" : "?") + u.data, delete u.data), !1 === u.cache && (o = o.replace(oo, "$1"), p = (sr.test(o) ? "&" : "?") + "_=" + wf.guid++ + p), u.url = o + p), u.ifModified && (i.lastModified[o] && e.setRequestHeader("If-Modified-Since", i.lastModified[o]), i.etag[o] && e.setRequestHeader("If-None-Match", i.etag[o])), (u.data && u.hasContent && !1 !== u.contentType || r.contentType) && e.setRequestHeader("Content-Type", u.contentType), e.setRequestHeader("Accept", u.dataTypes[0] && u.accepts[u.dataTypes[0]] ? u.accepts[u.dataTypes[0]] + ("*" !== u.dataTypes[0] ? ", " + df + "; q=0.01" : "") : u.accepts["*"]), u.headers) e.setRequestHeader(g, u.headers[g]);
            if (u.beforeSend && (!1 === u.beforeSend.call(h, e, u) || s)) return e.abort();
            if (ft = "abort", it.add(u.complete), e.done(u.success), e.fail(u.error), a = ne(cr, u, r, e)) {
                if (e.readyState = 1, y && nt.trigger("ajaxSend", [e, u]), s) return e;
                u.async && 0 < u.timeout && (d = n.setTimeout(function() {
                    e.abort("timeout")
                }, u.timeout));
                try {
                    s = !1;
                    a.send(rt, b)
                } catch (t) {
                    if (s) throw t;
                    b(-1, t)
                }
            } else b(-1, "No Transport");
            return e
        },
        getJSON: function(n, t, r) {
            return i.get(n, t, r, "json")
        },
        getScript: function(n, t) {
            return i.get(n, void 0, t, "script")
        }
    }), i.each(["get", "post"], function(n, t) {
        i[t] = function(n, r, f, e) {
            return u(r) && (e = e || f, f = r, r = void 0), i.ajax(i.extend({
                url: n,
                type: t,
                dataType: e,
                data: r,
                success: f
            }, i.isPlainObject(n) && n))
        }
    }), i.ajaxPrefilter(function(n) {
        for (var t in n.headers) "content-type" === t.toLowerCase() && (n.contentType = n.headers[t] || "")
    }), i._evalUrl = function(n, t, r) {
        return i.ajax({
            url: n,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            converters: {
                "text script": function() {}
            },
            dataFilter: function(n) {
                i.globalEval(n, t, r)
            }
        })
    }, i.fn.extend({
        wrapAll: function(n) {
            var t;
            return this[0] && (u(n) && (n = n.call(this[0])), t = i(n, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                for (var n = this; n.firstElementChild;) n = n.firstElementChild;
                return n
            }).append(this)), this
        },
        wrapInner: function(n) {
            return u(n) ? this.each(function(t) {
                i(this).wrapInner(n.call(this, t))
            }) : this.each(function() {
                var t = i(this),
                    r = t.contents();
                r.length ? r.wrapAll(n) : t.append(n)
            })
        },
        wrap: function(n) {
            var t = u(n);
            return this.each(function(r) {
                i(this).wrapAll(t ? n.call(this, r) : n)
            })
        },
        unwrap: function(n) {
            return this.parent(n).not("body").each(function() {
                i(this).replaceWith(this.childNodes)
            }), this
        }
    }), i.expr.pseudos.hidden = function(n) {
        return !i.expr.pseudos.visible(n)
    }, i.expr.pseudos.visible = function(n) {
        return !!(n.offsetWidth || n.offsetHeight || n.getClientRects().length)
    }, i.ajaxSettings.xhr = function() {
        try {
            return new n.XMLHttpRequest
        } catch (t) {}
    }, te = {
        0: 200,
        1223: 204
    }, wt = i.ajaxSettings.xhr(), e.cors = !!wt && "withCredentials" in wt, e.ajax = wt = !!wt, i.ajaxTransport(function(t) {
        var i, r;
        if (e.cors || wt && !t.crossDomain) return {
            send: function(u, f) {
                var o, e = t.xhr();
                if (e.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                    for (o in t.xhrFields) e[o] = t.xhrFields[o];
                for (o in t.mimeType && e.overrideMimeType && e.overrideMimeType(t.mimeType), t.crossDomain || u["X-Requested-With"] || (u["X-Requested-With"] = "XMLHttpRequest"), u) e.setRequestHeader(o, u[o]);
                i = function(n) {
                    return function() {
                        i && (i = r = e.onload = e.onerror = e.onabort = e.ontimeout = e.onreadystatechange = null, "abort" === n ? e.abort() : "error" === n ? "number" != typeof e.status ? f(0, "error") : f(e.status, e.statusText) : f(te[e.status] || e.status, e.statusText, "text" !== (e.responseType || "text") || "string" != typeof e.responseText ? {
                            binary: e.response
                        } : {
                            text: e.responseText
                        }, e.getAllResponseHeaders()))
                    }
                };
                e.onload = i();
                r = e.onerror = e.ontimeout = i("error");
                void 0 !== e.onabort ? e.onabort = r : e.onreadystatechange = function() {
                    4 === e.readyState && n.setTimeout(function() {
                        i && r()
                    })
                };
                i = i("abort");
                try {
                    e.send(t.hasContent && t.data || null)
                } catch (u) {
                    if (i) throw u;
                }
            },
            abort: function() {
                i && i()
            }
        }
    }), i.ajaxPrefilter(function(n) {
        n.crossDomain && (n.contents.script = !1)
    }), i.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(n) {
                return i.globalEval(n), n
            }
        }
    }), i.ajaxPrefilter("script", function(n) {
        void 0 === n.cache && (n.cache = !1);
        n.crossDomain && (n.type = "GET")
    }), i.ajaxTransport("script", function(n) {
        var r, t;
        if (n.crossDomain || n.scriptAttrs) return {
            send: function(u, e) {
                r = i("<script>").attr(n.scriptAttrs || {}).prop({
                    charset: n.scriptCharset,
                    src: n.url
                }).on("load error", t = function(n) {
                    r.remove();
                    t = null;
                    n && e("error" === n.type ? 404 : 200, n.type)
                });
                f.head.appendChild(r[0])
            },
            abort: function() {
                t && t()
            }
        }
    }), vr = [], vi = /(=)\?(?=&|$)|\?\?/, i.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var n = vr.pop() || i.expando + "_" + wf.guid++;
            return this[n] = !0, n
        }
    }), i.ajaxPrefilter("json jsonp", function(t, r, f) {
        var e, o, s, h = !1 !== t.jsonp && (vi.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && vi.test(t.data) && "data");
        if (h || "jsonp" === t.dataTypes[0]) return e = t.jsonpCallback = u(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, h ? t[h] = t[h].replace(vi, "$1" + e) : !1 !== t.jsonp && (t.url += (sr.test(t.url) ? "&" : "?") + t.jsonp + "=" + e), t.converters["script json"] = function() {
            return s || i.error(e + " was not called"), s[0]
        }, t.dataTypes[0] = "json", o = n[e], n[e] = function() {
            s = arguments
        }, f.always(function() {
            void 0 === o ? i(n).removeProp(e) : n[e] = o;
            t[e] && (t.jsonpCallback = r.jsonpCallback, vr.push(e));
            s && u(o) && o(s[0]);
            s = o = void 0
        }), "script"
    }), e.createHTMLDocument = ((ie = f.implementation.createHTMLDocument("").body).innerHTML = "<form><\/form><form><\/form>", 2 === ie.childNodes.length), i.parseHTML = function(n, t, r) {
        return "string" != typeof n ? [] : ("boolean" == typeof t && (r = t, t = !1), t || (e.createHTMLDocument ? ((s = (t = f.implementation.createHTMLDocument("")).createElement("base")).href = f.location.href, t.head.appendChild(s)) : t = f), u = !r && [], (o = wi.exec(n)) ? [t.createElement(o[1])] : (o = yu([n], t, u), u && u.length && i(u).remove(), i.merge([], o.childNodes)));
        var s, o, u
    }, i.fn.load = function(n, t, r) {
        var f, s, h, e = this,
            o = n.indexOf(" ");
        return -1 < o && (f = tt(n.slice(o)), n = n.slice(0, o)), u(t) ? (r = t, t = void 0) : t && "object" == typeof t && (s = "POST"), 0 < e.length && i.ajax({
            url: n,
            type: s || "GET",
            dataType: "html",
            data: t
        }).done(function(n) {
            h = arguments;
            e.html(f ? i("<div>").append(i.parseHTML(n)).find(f) : n)
        }).always(r && function(n, t) {
            e.each(function() {
                r.apply(this, h || [n.responseText, t, n])
            })
        }), this
    }, i.expr.pseudos.animated = function(n) {
        return i.grep(i.timers, function(t) {
            return n === t.elem
        }).length
    }, i.offset = {
        setOffset: function(n, t, r) {
            var v, o, s, h, f, c, l = i.css(n, "position"),
                a = i(n),
                e = {};
            "static" === l && (n.style.position = "relative");
            f = a.offset();
            s = i.css(n, "top");
            c = i.css(n, "left");
            ("absolute" === l || "fixed" === l) && -1 < (s + c).indexOf("auto") ? (h = (v = a.position()).top, o = v.left) : (h = parseFloat(s) || 0, o = parseFloat(c) || 0);
            u(t) && (t = t.call(n, r, i.extend({}, f)));
            null != t.top && (e.top = t.top - f.top + h);
            null != t.left && (e.left = t.left - f.left + o);
            "using" in t ? t.using.call(n, e) : a.css(e)
        }
    }, i.fn.extend({
        offset: function(n) {
            if (arguments.length) return void 0 === n ? this : this.each(function(t) {
                i.offset.setOffset(this, n, t)
            });
            var r, u, t = this[0];
            if (t) return t.getClientRects().length ? (r = t.getBoundingClientRect(), u = t.ownerDocument.defaultView, {
                top: r.top + u.pageYOffset,
                left: r.left + u.pageXOffset
            }) : {
                top: 0,
                left: 0
            }
        },
        position: function() {
            if (this[0]) {
                var n, r, u, t = this[0],
                    f = {
                        top: 0,
                        left: 0
                    };
                if ("fixed" === i.css(t, "position")) r = t.getBoundingClientRect();
                else {
                    for (r = this.offset(), u = t.ownerDocument, n = t.offsetParent || u.documentElement; n && (n === u.body || n === u.documentElement) && "static" === i.css(n, "position");) n = n.parentNode;
                    n && n !== t && 1 === n.nodeType && ((f = i(n).offset()).top += i.css(n, "borderTopWidth", !0), f.left += i.css(n, "borderLeftWidth", !0))
                }
                return {
                    top: r.top - f.top - i.css(t, "marginTop", !0),
                    left: r.left - f.left - i.css(t, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var n = this.offsetParent; n && "static" === i.css(n, "position");) n = n.offsetParent;
                return n || g
            })
        }
    }), i.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(n, t) {
        var r = "pageYOffset" === t;
        i.fn[n] = function(i) {
            return w(this, function(n, i, u) {
                var f;
                if (rt(n) ? f = n : 9 === n.nodeType && (f = n.defaultView), void 0 === u) return f ? f[t] : n[i];
                f ? f.scrollTo(r ? f.pageXOffset : u, r ? u : f.pageYOffset) : n[i] = u
            }, n, i, arguments.length)
        }
    }), i.each(["top", "left"], function(n, t) {
        i.cssHooks[t] = du(e.pixelPosition, function(n, r) {
            if (r) return r = ni(n, t), tr.test(r) ? i(n).position()[t] + "px" : r
        })
    }), i.each({
        Height: "height",
        Width: "width"
    }, function(n, t) {
        i.each({
            padding: "inner" + n,
            content: t,
            "": "outer" + n
        }, function(r, u) {
            i.fn[u] = function(f, e) {
                var o = arguments.length && (r || "boolean" != typeof f),
                    s = r || (!0 === f || !0 === e ? "margin" : "border");
                return w(this, function(t, r, f) {
                    var e;
                    return rt(t) ? 0 === u.indexOf("outer") ? t["inner" + n] : t.document.documentElement["client" + n] : 9 === t.nodeType ? (e = t.documentElement, Math.max(t.body["scroll" + n], e["scroll" + n], t.body["offset" + n], e["offset" + n], e["client" + n])) : void 0 === f ? i.css(t, r, s) : i.style(t, r, f, s)
                }, t, o ? f : void 0, o)
            }
        })
    }), i.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(n, t) {
        i.fn[t] = function(n) {
            return this.on(t, n)
        }
    }), i.fn.extend({
        bind: function(n, t, i) {
            return this.on(n, null, t, i)
        },
        unbind: function(n, t) {
            return this.off(n, null, t)
        },
        delegate: function(n, t, i, r) {
            return this.on(t, n, i, r)
        },
        undelegate: function(n, t, i) {
            return 1 === arguments.length ? this.off(n, "**") : this.off(t, n || "**", i)
        },
        hover: function(n, t) {
            return this.mouseenter(n).mouseleave(t || n)
        }
    }), i.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(n, t) {
        i.fn[t] = function(n, i) {
            return 0 < arguments.length ? this.on(t, null, n, i) : this.trigger(t)
        }
    }), re = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, i.proxy = function(n, t) {
        var r, f, e;
        if ("string" == typeof t && (r = n[t], t = n, n = r), u(n)) return f = k.call(arguments, 2), (e = function() {
            return n.apply(t || this, f.concat(k.call(arguments)))
        }).guid = n.guid = n.guid || i.guid++, e
    }, i.holdReady = function(n) {
        n ? i.readyWait++ : i.ready(!0)
    }, i.isArray = Array.isArray, i.parseJSON = JSON.parse, i.nodeName = c, i.isFunction = u, i.isWindow = rt, i.camelCase = y, i.type = ut, i.now = Date.now, i.isNumeric = function(n) {
        var t = i.type(n);
        return ("number" === t || "string" === t) && !isNaN(n - parseFloat(n))
    }, i.trim = function(n) {
        return null == n ? "" : (n + "").replace(re, "")
    }, "function" == typeof define && define.amd && define("jquery", [], function() {
        return i
    }), ue = n.jQuery, fe = n.$, i.noConflict = function(t) {
        return n.$ === i && (n.$ = fe), t && n.jQuery === i && (n.jQuery = ue), i
    }, "undefined" == typeof t && (n.jQuery = n.$ = i), i
});
! function(n, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = n.document ? t(n, !0) : function(n) {
        if (!n.document) throw new Error("jQuery requires a window with a document");
        return t(n)
    } : t(n)
}("undefined" != typeof window ? window : this, function(n, t) {
    "use strict";

    function nu(n, t, i) {
        var r, e, f = (i = i || u).createElement("script");
        if (f.text = n, t)
            for (r in le)(e = t[r] || t.getAttribute && t.getAttribute(r)) && f.setAttribute(r, e);
        i.head.appendChild(f).parentNode.removeChild(f)
    }

    function et(n) {
        return null == n ? n + "" : "object" == typeof n || "function" == typeof n ? oi[dr.call(n)] || "object" : typeof n
    }

    function ki(n) {
        var t = !!n && "length" in n && n.length,
            i = et(n);
        return !e(n) && !ft(n) && ("array" === i || 0 === t || "number" == typeof t && 0 < t && t - 1 in n)
    }

    function s(n, t) {
        return n.nodeName && n.nodeName.toLowerCase() === t.toLowerCase()
    }

    function we(n, t) {
        return t ? "\0" === n ? "�" : n.slice(0, -1) + "\\" + n.charCodeAt(n.length - 1).toString(16) + " " : "\\" + n
    }

    function di(n, t, r) {
        return e(t) ? i.grep(n, function(n, i) {
            return !!t.call(n, i, n) !== r
        }) : t.nodeType ? i.grep(n, function(n) {
            return n === t !== r
        }) : "string" != typeof t ? i.grep(n, function(n) {
            return -1 < d.call(t, n) !== r
        }) : i.filter(t, n, r)
    }

    function cu(n, t) {
        while ((n = n[t]) && 1 !== n.nodeType);
        return n
    }

    function st(n) {
        return n
    }

    function hi(n) {
        throw n;
    }

    function lu(n, t, i, r) {
        var u;
        try {
            n && e(u = n.promise) ? u.call(n).done(t).fail(i) : n && e(u = n.then) ? u.call(n, t, i) : t.apply(void 0, [n].slice(r))
        } catch (n) {
            i.apply(void 0, [n])
        }
    }

    function li() {
        u.removeEventListener("DOMContentLoaded", li);
        n.removeEventListener("load", li);
        i.ready()
    }

    function de(n, t) {
        return t.toUpperCase()
    }

    function k(n) {
        return n.replace(be, "ms-").replace(ke, de)
    }

    function ni() {
        this.expando = i.expando + ni.uid++
    }

    function vu(n, t, i) {
        var u, r;
        if (void 0 === i && 1 === n.nodeType)
            if (u = "data-" + t.replace(no, "-$&").toLowerCase(), "string" == typeof(i = n.getAttribute(u))) {
                try {
                    i = "true" === (r = i) || "false" !== r && ("null" === r ? null : r === +r + "" ? +r : ge.test(r) ? JSON.parse(r) : r)
                } catch (n) {}
                c.set(n, t, i)
            } else i = void 0;
        return i
    }

    function pu(n, t, r, u) {
        var s, h, c = 20,
            l = u ? function() {
                return u.cur()
            } : function() {
                return i.css(n, t, "")
            },
            o = l(),
            e = r && r[3] || (i.cssNumber[t] ? "" : "px"),
            f = n.nodeType && (i.cssNumber[t] || "px" !== e && +o) && ti.exec(i.css(n, t));
        if (f && f[3] !== e) {
            for (o /= 2, e = e || f[3], f = +o || 1; c--;) i.style(n, t, f + e), (1 - h) * (1 - (h = l() / o || .5)) <= 0 && (c = 0), f /= h;
            f *= 2;
            i.style(n, t, f + e);
            r = r || []
        }
        return r && (f = +f || +o || 0, s = r[1] ? f + (r[1] + 1) * r[2] : +r[2], u && (u.unit = e, u.start = f, u.end = s)), s
    }

    function lt(n, t) {
        for (var h, f, a, s, c, l, e, o = [], u = 0, v = n.length; u < v; u++)(f = n[u]).style && (h = f.style.display, t ? ("none" === h && (o[u] = r.get(f, "display") || null, o[u] || (f.style.display = "")), "" === f.style.display && ii(f) && (o[u] = (e = c = s = void 0, c = (a = f).ownerDocument, l = a.nodeName, (e = gi[l]) || (s = c.body.appendChild(c.createElement(l)), e = i.css(s, "display"), s.parentNode.removeChild(s), "none" === e && (e = "block"), gi[l] = e)))) : "none" !== h && (o[u] = "none", r.set(f, "display", h)));
        for (u = 0; u < v; u++) null != o[u] && (n[u].style.display = o[u]);
        return n
    }

    function l(n, t) {
        var r;
        return r = "undefined" != typeof n.getElementsByTagName ? n.getElementsByTagName(t || "*") : "undefined" != typeof n.querySelectorAll ? n.querySelectorAll(t || "*") : [], void 0 === t || t && s(n, t) ? i.merge([n], r) : r
    }

    function nr(n, t) {
        for (var i = 0, u = n.length; i < u; i++) r.set(n[i], "globalEval", !t || r.get(t[i], "globalEval"))
    }

    function du(n, t, r, u, f) {
        for (var e, o, p, c, w, a, s = t.createDocumentFragment(), y = [], h = 0, b = n.length; h < b; h++)
            if ((e = n[h]) || 0 === e)
                if ("object" === et(e)) i.merge(y, e.nodeType ? [e] : e);
                else if (ku.test(e)) {
            for (o = o || s.appendChild(t.createElement("div")), p = (wu.exec(e) || ["", ""])[1].toLowerCase(), c = v[p] || v._default, o.innerHTML = c[1] + i.htmlPrefilter(e) + c[2], a = c[0]; a--;) o = o.lastChild;
            i.merge(y, o.childNodes);
            (o = s.firstChild).textContent = ""
        } else y.push(t.createTextNode(e));
        for (s.textContent = "", h = 0; e = y[h++];)
            if (u && -1 < i.inArray(e, u)) f && f.push(e);
            else if (w = ct(e), o = l(s.appendChild(e), "script"), w && nr(o), r)
            for (a = 0; e = o[a++];) bu.test(e.type || "") && r.push(e);
        return s
    }

    function at() {
        return !0
    }

    function vt() {
        return !1
    }

    function ir(n, t, r, u, f, e) {
        var o, s;
        if ("object" == typeof t) {
            for (s in "string" != typeof r && (u = u || r, r = void 0), t) ir(n, s, r, u, t[s], e);
            return n
        }
        if (null == u && null == f ? (f = r, u = r = void 0) : null == f && ("string" == typeof r ? (f = u, u = void 0) : (f = u, u = r, r = void 0)), !1 === f) f = vt;
        else if (!f) return n;
        return 1 === e && (o = f, (f = function(n) {
            return i().off(n), o.apply(this, arguments)
        }).guid = o.guid || (o.guid = i.guid++)), n.each(function() {
            i.event.add(this, t, f, u, r)
        })
    }

    function vi(n, t, u) {
        u ? (r.set(n, t, !1), i.event.add(n, t, {
            namespace: !1,
            handler: function(n) {
                var f, u = r.get(this, t);
                if (1 & n.isTrigger && this[t]) {
                    if (u)(i.event.special[t] || {}).delegateType && n.stopPropagation();
                    else if (u = a.call(arguments), r.set(this, t, u), this[t](), f = r.get(this, t), r.set(this, t, !1), u !== f) return n.stopImmediatePropagation(), n.preventDefault(), f
                } else u && (r.set(this, t, i.event.trigger(u[0], u.slice(1), this)), n.stopPropagation(), n.isImmediatePropagationStopped = at)
            }
        })) : void 0 === r.get(n, t) && i.event.add(n, t, at)
    }

    function gu(n, t) {
        return s(n, "table") && s(11 !== t.nodeType ? t : t.firstChild, "tr") && i(n).children("tbody")[0] || n
    }

    function fo(n) {
        return n.type = (null !== n.getAttribute("type")) + "/" + n.type, n
    }

    function eo(n) {
        return "true/" === (n.type || "").slice(0, 5) ? n.type = n.type.slice(5) : n.removeAttribute("type"), n
    }

    function nf(n, t) {
        var u, o, f, s, h, e;
        if (1 === t.nodeType) {
            if (r.hasData(n) && (e = r.get(n).events))
                for (f in r.remove(t, "handle events"), e)
                    for (u = 0, o = e[f].length; u < o; u++) i.event.add(t, f, e[f][u]);
            c.hasData(n) && (s = c.access(n), h = i.extend({}, s), c.set(t, h))
        }
    }

    function yt(n, t, u, o) {
        t = kr(t);
        var a, b, c, v, s, y, h = 0,
            p = n.length,
            d = p - 1,
            w = t[0],
            k = e(w);
        if (k || 1 < p && "string" == typeof w && !f.checkClone && ro.test(w)) return n.each(function(i) {
            var r = n.eq(i);
            k && (t[0] = w.call(this, i, r.html()));
            yt(r, t, u, o)
        });
        if (p && (b = (a = du(t, n[0].ownerDocument, !1, n, o)).firstChild, 1 === a.childNodes.length && (a = b), b || o)) {
            for (v = (c = i.map(l(a, "script"), fo)).length; h < p; h++) s = a, h !== d && (s = i.clone(s, !0, !0), v && i.merge(c, l(s, "script"))), u.call(n[h], s, h);
            if (v)
                for (y = c[c.length - 1].ownerDocument, i.map(c, eo), h = 0; h < v; h++) s = c[h], bu.test(s.type || "") && !r.access(s, "globalEval") && i.contains(y, s) && (s.src && "module" !== (s.type || "").toLowerCase() ? i._evalUrl && !s.noModule && i._evalUrl(s.src, {
                    nonce: s.nonce || s.getAttribute("nonce")
                }, y) : nu(s.textContent.replace(uo, ""), s, y))
        }
        return n
    }

    function tf(n, t, r) {
        for (var u, e = t ? i.filter(t, n) : n, f = 0; null != (u = e[f]); f++) r || 1 !== u.nodeType || i.cleanData(l(u)), u.parentNode && (r && ct(u) && nr(l(u, "script")), u.parentNode.removeChild(u));
        return n
    }

    function ui(n, t, r) {
        var o, s, h, u, c = ur.test(t),
            e = n.style;
        return (r = r || yi(n)) && (u = r.getPropertyValue(t) || r[t], c && u && (u = u.replace(gt, "$1") || void 0), "" !== u || ct(n) || (u = i.style(n, t)), !f.pixelBoxStyles() && rr.test(u) && oo.test(t) && (o = e.width, s = e.minWidth, h = e.maxWidth, e.minWidth = e.maxWidth = e.width = u, u = r.width, e.width = o, e.minWidth = s, e.maxWidth = h)), void 0 !== u ? u + "" : u
    }

    function uf(n, t) {
        return {
            get: function() {
                if (!n()) return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }

    function fr(n) {
        var t = i.cssProps[n] || of [n];
        return t || (n in ef ? n : of [n] = function(n) {
            for (var i = n[0].toUpperCase() + n.slice(1), t = ff.length; t--;)
                if ((n = ff[t] + i) in ef) return n
        }(n) || n)
    }

    function hf(n, t, i) {
        var r = ti.exec(t);
        return r ? Math.max(0, r[2] - (i || 0)) + (r[3] || "px") : t
    }

    function er(n, t, r, u, f, e) {
        var o = "width" === t ? 1 : 0,
            h = 0,
            s = 0,
            c = 0;
        if (r === (u ? "border" : "content")) return 0;
        for (; o < 4; o += 2) "margin" === r && (c += i.css(n, r + nt[o], !0, f)), u ? ("content" === r && (s -= i.css(n, "padding" + nt[o], !0, f)), "margin" !== r && (s -= i.css(n, "border" + nt[o] + "Width", !0, f))) : (s += i.css(n, "padding" + nt[o], !0, f), "padding" !== r ? s += i.css(n, "border" + nt[o] + "Width", !0, f) : h += i.css(n, "border" + nt[o] + "Width", !0, f));
        return !u && 0 <= e && (s += Math.max(0, Math.ceil(n["offset" + t[0].toUpperCase() + t.slice(1)] - e - s - h - .5)) || 0), s + c
    }

    function cf(n, t, r) {
        var e = yi(n),
            o = (!f.boxSizingReliable() || r) && "border-box" === i.css(n, "boxSizing", !1, e),
            h = o,
            u = ui(n, t, e),
            c = "offset" + t[0].toUpperCase() + t.slice(1);
        if (rr.test(u)) {
            if (!r) return u;
            u = "auto"
        }
        return (!f.boxSizingReliable() && o || !f.reliableTrDimensions() && s(n, "tr") || "auto" === u || !parseFloat(u) && "inline" === i.css(n, "display", !1, e)) && n.getClientRects().length && (o = "border-box" === i.css(n, "boxSizing", !1, e), (h = c in n) && (u = n[c])), (u = parseFloat(u) || 0) + er(n, t, r || (o ? "border" : "content"), h, e, u) + "px"
    }

    function p(n, t, i, r, u) {
        return new p.prototype.init(n, t, i, r, u)
    }

    function or() {
        pi && (!1 === u.hidden && n.requestAnimationFrame ? n.requestAnimationFrame(or) : n.setTimeout(or, i.fx.interval), i.fx.tick())
    }

    function yf() {
        return n.setTimeout(function() {
            pt = void 0
        }), pt = Date.now()
    }

    function wi(n, t) {
        var u, r = 0,
            i = {
                height: n
            };
        for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (u = nt[r])] = i["padding" + u] = n;
        return t && (i.opacity = i.width = n), i
    }

    function pf(n, t, i) {
        for (var u, f = (w.tweeners[t] || []).concat(w.tweeners["*"]), r = 0, e = f.length; r < e; r++)
            if (u = f[r].call(i, t, n)) return u
    }

    function w(n, t, r) {
        var o, s, h = 0,
            a = w.prefilters.length,
            f = i.Deferred().always(function() {
                delete l.elem
            }),
            l = function() {
                if (s) return !1;
                for (var o = pt || yf(), t = Math.max(0, u.startTime + u.duration - o), i = 1 - (t / u.duration || 0), r = 0, e = u.tweens.length; r < e; r++) u.tweens[r].run(i);
                return f.notifyWith(n, [u, i, t]), i < 1 && e ? t : (e || f.notifyWith(n, [u, 1, 0]), f.resolveWith(n, [u]), !1)
            },
            u = f.promise({
                elem: n,
                props: i.extend({}, t),
                opts: i.extend(!0, {
                    specialEasing: {},
                    easing: i.easing._default
                }, r),
                originalProperties: t,
                originalOptions: r,
                startTime: pt || yf(),
                duration: r.duration,
                tweens: [],
                createTween: function(t, r) {
                    var f = i.Tween(n, u.opts, t, r, u.opts.specialEasing[t] || u.opts.easing);
                    return u.tweens.push(f), f
                },
                stop: function(t) {
                    var i = 0,
                        r = t ? u.tweens.length : 0;
                    if (s) return this;
                    for (s = !0; i < r; i++) u.tweens[i].run(1);
                    return t ? (f.notifyWith(n, [u, 1, 0]), f.resolveWith(n, [u, t])) : f.rejectWith(n, [u, t]), this
                }
            }),
            c = u.props;
        for (! function(n, t) {
                var r, f, e, u, o;
                for (r in n)
                    if (e = t[f = k(r)], u = n[r], Array.isArray(u) && (e = u[1], u = n[r] = u[0]), r !== f && (n[f] = u, delete n[r]), (o = i.cssHooks[f]) && "expand" in o)
                        for (r in u = o.expand(u), delete n[f], u) r in n || (n[r] = u[r], t[r] = e);
                    else t[f] = e
            }(c, u.opts.specialEasing); h < a; h++)
            if (o = w.prefilters[h].call(u, n, c, u.opts)) return e(o.stop) && (i._queueHooks(u.elem, u.opts.queue).stop = o.stop.bind(o)), o;
        return i.map(c, pf, u), e(u.opts.start) && u.opts.start.call(n, u), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always), i.fx.timer(i.extend(l, {
            elem: n,
            anim: u,
            queue: u.opts.queue
        })), u
    }

    function rt(n) {
        return (n.match(y) || []).join(" ")
    }

    function ut(n) {
        return n.getAttribute && n.getAttribute("class") || ""
    }

    function sr(n) {
        return Array.isArray(n) ? n : "string" == typeof n && n.match(y) || []
    }

    function ar(n, t, r, u) {
        var f;
        if (Array.isArray(t)) i.each(t, function(t, i) {
            r || co.test(n) ? u(n, i) : ar(n + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, r, u)
        });
        else if (r || "object" !== et(t)) u(n, t);
        else
            for (f in t) ar(n + "[" + f + "]", t[f], r, u)
    }

    function re(n) {
        return function(t, i) {
            "string" != typeof t && (i = t, t = "*");
            var r, u = 0,
                f = t.toLowerCase().match(y) || [];
            if (e(i))
                while (r = f[u++]) "+" === r[0] ? (r = r.slice(1) || "*", (n[r] = n[r] || []).unshift(i)) : (n[r] = n[r] || []).push(i)
        }
    }

    function ue(n, t, r, u) {
        function e(s) {
            var h;
            return f[s] = !0, i.each(n[s] || [], function(n, i) {
                var s = i(t, r, u);
                return "string" != typeof s || o || f[s] ? o ? !(h = s) : void 0 : (t.dataTypes.unshift(s), e(s), !1)
            }), h
        }
        var f = {},
            o = n === vr;
        return e(t.dataTypes[0]) || !f["*"] && e("*")
    }

    function pr(n, t) {
        var r, u, f = i.ajaxSettings.flatOptions || {};
        for (r in t) void 0 !== t[r] && ((f[r] ? n : u || (u = {}))[r] = t[r]);
        return u && i.extend(!0, n, u), n
    }
    var h = [],
        br = Object.getPrototypeOf,
        a = h.slice,
        kr = h.flat ? function(n) {
            return h.flat.call(n)
        } : function(n) {
            return h.concat.apply([], n)
        },
        ei = h.push,
        d = h.indexOf,
        oi = {},
        dr = oi.toString,
        dt = oi.hasOwnProperty,
        gr = dt.toString,
        ce = gr.call(Object),
        f = {},
        e = function(n) {
            return "function" == typeof n && "number" != typeof n.nodeType && "function" != typeof n.item
        },
        ft = function(n) {
            return null != n && n === n.window
        },
        u = n.document,
        le = {
            type: !0,
            src: !0,
            nonce: !0,
            noModule: !0
        },
        tu = "3.7.0",
        ae = /HTML$/i,
        i = function(n, t) {
            return new i.fn.init(n, t)
        },
        iu, b, si, eu, ou, su, hu, y, au, ci, ht, ii, gi, v, ku, tr, pt, pi, wt, lf, af, vf, wf, bt, bf, kf, df, cr, lr, fe, kt, ee, wr, bi, oe, se, he;
    i.fn = i.prototype = {
        jquery: tu,
        constructor: i,
        length: 0,
        toArray: function() {
            return a.call(this)
        },
        get: function(n) {
            return null == n ? a.call(this) : n < 0 ? this[n + this.length] : this[n]
        },
        pushStack: function(n) {
            var t = i.merge(this.constructor(), n);
            return t.prevObject = this, t
        },
        each: function(n) {
            return i.each(this, n)
        },
        map: function(n) {
            return this.pushStack(i.map(this, function(t, i) {
                return n.call(t, i, t)
            }))
        },
        slice: function() {
            return this.pushStack(a.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        even: function() {
            return this.pushStack(i.grep(this, function(n, t) {
                return (t + 1) % 2
            }))
        },
        odd: function() {
            return this.pushStack(i.grep(this, function(n, t) {
                return t % 2
            }))
        },
        eq: function(n) {
            var i = this.length,
                t = +n + (n < 0 ? i : 0);
            return this.pushStack(0 <= t && t < i ? [this[t]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: ei,
        sort: h.sort,
        splice: h.splice
    };
    i.extend = i.fn.extend = function() {
        var s, u, f, t, o, c, n = arguments[0] || {},
            r = 1,
            l = arguments.length,
            h = !1;
        for ("boolean" == typeof n && (h = n, n = arguments[r] || {}, r++), "object" == typeof n || e(n) || (n = {}), r === l && (n = this, r--); r < l; r++)
            if (null != (s = arguments[r]))
                for (u in s) t = s[u], "__proto__" !== u && n !== t && (h && t && (i.isPlainObject(t) || (o = Array.isArray(t))) ? (f = n[u], c = o && !Array.isArray(f) ? [] : o || i.isPlainObject(f) ? f : {}, o = !1, n[u] = i.extend(h, c, t)) : void 0 !== t && (n[u] = t));
        return n
    };
    i.extend({
        expando: "jQuery" + (tu + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(n) {
            throw new Error(n);
        },
        noop: function() {},
        isPlainObject: function(n) {
            var t, i;
            return !(!n || "[object Object]" !== dr.call(n)) && (!(t = br(n)) || "function" == typeof(i = dt.call(t, "constructor") && t.constructor) && gr.call(i) === ce)
        },
        isEmptyObject: function(n) {
            for (var t in n) return !1;
            return !0
        },
        globalEval: function(n, t, i) {
            nu(n, {
                nonce: t && t.nonce
            }, i)
        },
        each: function(n, t) {
            var r, i = 0;
            if (ki(n)) {
                for (r = n.length; i < r; i++)
                    if (!1 === t.call(n[i], i, n[i])) break
            } else
                for (i in n)
                    if (!1 === t.call(n[i], i, n[i])) break;
            return n
        },
        text: function(n) {
            var r, u = "",
                f = 0,
                t = n.nodeType;
            if (t) {
                if (1 === t || 9 === t || 11 === t) return n.textContent;
                if (3 === t || 4 === t) return n.nodeValue
            } else
                while (r = n[f++]) u += i.text(r);
            return u
        },
        makeArray: function(n, t) {
            var r = t || [];
            return null != n && (ki(Object(n)) ? i.merge(r, "string" == typeof n ? [n] : n) : ei.call(r, n)), r
        },
        inArray: function(n, t, i) {
            return null == t ? -1 : d.call(t, n, i)
        },
        isXMLDoc: function(n) {
            var i = n && n.namespaceURI,
                t = n && (n.ownerDocument || n).documentElement;
            return !ae.test(i || t && t.nodeName || "HTML")
        },
        merge: function(n, t) {
            for (var u = +t.length, i = 0, r = n.length; i < u; i++) n[r++] = t[i];
            return n.length = r, n
        },
        grep: function(n, t, i) {
            for (var u = [], r = 0, f = n.length, e = !i; r < f; r++) !t(n[r], r) !== e && u.push(n[r]);
            return u
        },
        map: function(n, t, i) {
            var e, u, r = 0,
                f = [];
            if (ki(n))
                for (e = n.length; r < e; r++) null != (u = t(n[r], r, i)) && f.push(u);
            else
                for (r in n) null != (u = t(n[r], r, i)) && f.push(u);
            return kr(f)
        },
        guid: 1,
        support: f
    });
    "function" == typeof Symbol && (i.fn[Symbol.iterator] = h[Symbol.iterator]);
    i.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(n, t) {
        oi["[object " + t + "]"] = t.toLowerCase()
    });
    var ve = h.pop,
        ye = h.sort,
        pe = h.splice,
        o = "[\\x20\\t\\r\\n\\f]",
        gt = new RegExp("^" + o + "+|((?:^|[^\\\\])(?:\\\\.)*)" + o + "+$", "g");
    i.contains = function(n, t) {
        var i = t && t.parentNode;
        return n === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : n.compareDocumentPosition && 16 & n.compareDocumentPosition(i)))
    };
    iu = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;
    i.escapeSelector = function(n) {
        return (n + "").replace(iu, we)
    };
    b = u;
    si = ei;
    ! function() {
        function r(n, t, o, s) {
            var h, b, a, y, k, d, g, w = t && t.ownerDocument,
                p = t ? t.nodeType : 9;
            if (o = o || [], "string" != typeof n || !n || 1 !== p && 9 !== p && 11 !== p) return o;
            if (!s && (nt(t), t = t || u, l)) {
                if (11 !== p && (k = ir.exec(n)))
                    if (h = k[1]) {
                        if (9 === p) {
                            if (!(a = t.getElementById(h))) return o;
                            if (a.id === h) return v.call(o, a), o
                        } else if (w && (a = w.getElementById(h)) && r.contains(t, a) && a.id === h) return v.call(o, a), o
                    } else {
                        if (k[2]) return v.apply(o, t.getElementsByTagName(n)), o;
                        if ((h = k[3]) && t.getElementsByClassName) return v.apply(o, t.getElementsByClassName(h)), o
                    } if (!(st[n + " "] || c && c.test(n))) {
                    if (g = n, w = t, 1 === p && (ki.test(n) || li.test(n))) {
                        for ((w = bt.test(n) && kt(t.parentNode) || t) == t && f.scope || ((y = t.getAttribute("id")) ? y = i.escapeSelector(y) : t.setAttribute("id", y = e)), b = (d = lt(n)).length; b--;) d[b] = (y ? "#" + y : ":scope") + " " + at(d[b]);
                        g = d.join(",")
                    }
                    try {
                        return v.apply(o, w.querySelectorAll(g)), o
                    } catch (t) {
                        st(n, !0)
                    } finally {
                        y === e && t.removeAttribute("id")
                    }
                }
            }
            return yi(n.replace(gt, "$1"), t, o, s)
        }

        function ct() {
            var n = [];
            return function i(r, u) {
                return n.push(r + " ") > t.cacheLength && delete i[n.shift()], i[r + " "] = u
            }
        }

        function y(n) {
            return n[e] = !0, n
        }

        function ut(n) {
            var t = u.createElement("fieldset");
            try {
                return !!n(t)
            } catch (n) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t);
                t = null
            }
        }

        function fr(n) {
            return function(t) {
                return s(t, "input") && t.type === n
            }
        }

        function er(n) {
            return function(t) {
                return (s(t, "input") || s(t, "button")) && t.type === n
            }
        }

        function ai(n) {
            return function(t) {
                return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === n : t.disabled === n : t.isDisabled === n || t.isDisabled !== !n && ur(t) === n : t.disabled === n : "label" in t && t.disabled === n
            }
        }

        function it(n) {
            return y(function(t) {
                return t = +t, y(function(i, r) {
                    for (var u, f = n([], i.length, t), e = f.length; e--;) i[u = f[e]] && (i[u] = !(r[u] = i[u]))
                })
            })
        }

        function kt(n) {
            return n && "undefined" != typeof n.getElementsByTagName && n
        }

        function nt(n) {
            var s, h = n ? n.ownerDocument || n : b;
            return h != u && 9 === h.nodeType && h.documentElement && (g = (u = h).documentElement, l = !i.isXMLDoc(u), pt = g.matches || g.webkitMatchesSelector || g.msMatchesSelector, b != u && (s = u.defaultView) && s.top !== s && s.addEventListener("unload", rr), f.getById = ut(function(n) {
                return g.appendChild(n).id = i.expando, !u.getElementsByName || !u.getElementsByName(i.expando).length
            }), f.disconnectedMatch = ut(function(n) {
                return pt.call(n, "*")
            }), f.scope = ut(function() {
                return u.querySelectorAll(":scope")
            }), f.cssHas = ut(function() {
                try {
                    return u.querySelector(":has(*,:jqfake)"), !1
                } catch (n) {
                    return !0
                }
            }), f.getById ? (t.filter.ID = function(n) {
                var t = n.replace(w, k);
                return function(n) {
                    return n.getAttribute("id") === t
                }
            }, t.find.ID = function(n, t) {
                if ("undefined" != typeof t.getElementById && l) {
                    var i = t.getElementById(n);
                    return i ? [i] : []
                }
            }) : (t.filter.ID = function(n) {
                var t = n.replace(w, k);
                return function(n) {
                    var i = "undefined" != typeof n.getAttributeNode && n.getAttributeNode("id");
                    return i && i.value === t
                }
            }, t.find.ID = function(n, t) {
                if ("undefined" != typeof t.getElementById && l) {
                    var r, u, f, i = t.getElementById(n);
                    if (i) {
                        if ((r = i.getAttributeNode("id")) && r.value === n) return [i];
                        for (f = t.getElementsByName(n), u = 0; i = f[u++];)
                            if ((r = i.getAttributeNode("id")) && r.value === n) return [i]
                    }
                    return []
                }
            }), t.find.TAG = function(n, t) {
                return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(n) : t.querySelectorAll(n)
            }, t.find.CLASS = function(n, t) {
                if ("undefined" != typeof t.getElementsByClassName && l) return t.getElementsByClassName(n)
            }, c = [], ut(function(n) {
                var t;
                g.appendChild(n).innerHTML = "<a id='" + e + "' href='' disabled='disabled'><\/a><select id='" + e + "-\r\\' disabled='disabled'><option selected=''><\/option><\/select>";
                n.querySelectorAll("[selected]").length || c.push("\\[" + o + "*(?:value|" + oi + ")");
                n.querySelectorAll("[id~=" + e + "-]").length || c.push("~=");
                n.querySelectorAll("a#" + e + "+*").length || c.push(".#.+[+~]");
                n.querySelectorAll(":checked").length || c.push(":checked");
                (t = u.createElement("input")).setAttribute("type", "hidden");
                n.appendChild(t).setAttribute("name", "D");
                g.appendChild(n).disabled = !0;
                2 !== n.querySelectorAll(":disabled").length && c.push(":enabled", ":disabled");
                (t = u.createElement("input")).setAttribute("name", "");
                n.appendChild(t);
                n.querySelectorAll("[name='']").length || c.push("\\[" + o + "*name" + o + "*=" + o + "*(?:''|\"\")")
            }), f.cssHas || c.push(":has"), c = c.length && new RegExp(c.join("|")), wt = function(n, t) {
                if (n === t) return ot = !0, 0;
                var i = !n.compareDocumentPosition - !t.compareDocumentPosition;
                return i || (1 & (i = (n.ownerDocument || n) == (t.ownerDocument || t) ? n.compareDocumentPosition(t) : 1) || !f.sortDetached && t.compareDocumentPosition(n) === i ? n === u || n.ownerDocument == b && r.contains(b, n) ? -1 : t === u || t.ownerDocument == b && r.contains(b, t) ? 1 : ft ? d.call(ft, n) - d.call(ft, t) : 0 : 4 & i ? -1 : 1)
            }), u
        }

        function vi() {}

        function lt(n, i) {
            var e, f, s, o, u, h, c, l = fi[n + " "];
            if (l) return i ? 0 : l.slice(0);
            for (u = n, h = [], c = t.preFilter; u;) {
                for (o in e && !(f = bi.exec(u)) || (f && (u = u.slice(f[0].length) || u), h.push(s = [])), e = !1, (f = li.exec(u)) && (e = f.shift(), s.push({
                        value: e,
                        type: f[0].replace(gt, " ")
                    }), u = u.slice(e.length)), t.filter)(f = ht[o].exec(u)) && (!c[o] || (f = c[o](f))) && (e = f.shift(), s.push({
                    value: e,
                    type: o,
                    matches: f
                }), u = u.slice(e.length));
                if (!e) break
            }
            return i ? u.length : u ? r.error(n) : fi(n, h).slice(0)
        }

        function at(n) {
            for (var t = 0, r = n.length, i = ""; t < r; t++) i += n[t].value;
            return i
        }

        function vt(n, t, i) {
            var r = t.dir,
                u = t.next,
                f = u || r,
                o = i && "parentNode" === f,
                h = pi++;
            return t.first ? function(t, i, u) {
                while (t = t[r])
                    if (1 === t.nodeType || o) return n(t, i, u);
                return !1
            } : function(t, i, c) {
                var l, a, v = [p, h];
                if (c) {
                    while (t = t[r])
                        if ((1 === t.nodeType || o) && n(t, i, c)) return !0
                } else
                    while (t = t[r])
                        if (1 === t.nodeType || o)
                            if (a = t[e] || (t[e] = {}), u && s(t, u)) t = t[r] || t;
                            else {
                                if ((l = a[f]) && l[0] === p && l[1] === h) return v[2] = l[2];
                                if ((a[f] = v)[2] = n(t, i, c)) return !0
                            } return !1
            }
        }

        function ni(n) {
            return 1 < n.length ? function(t, i, r) {
                for (var u = n.length; u--;)
                    if (!n[u](t, i, r)) return !1;
                return !0
            } : n[0]
        }

        function yt(n, t, i, r, u) {
            for (var e, o = [], f = 0, s = n.length, h = null != t; f < s; f++)(e = n[f]) && (i && !i(e, r, u) || (o.push(e), h && t.push(f)));
            return o
        }

        function ti(n, t, i, u, f, o) {
            return u && !u[e] && (u = ti(u)), f && !f[e] && (f = ti(f, o)), y(function(e, o, s, h) {
                var a, l, y, c, b = [],
                    w = [],
                    k = o.length,
                    g = e || function(n, t, i) {
                        for (var u = 0, f = t.length; u < f; u++) r(n, t[u], i);
                        return i
                    }(t || "*", s.nodeType ? [s] : s, []),
                    p = !n || !e && t ? g : yt(g, b, n, s, h);
                if (i ? i(p, c = f || (e ? n : k || u) ? [] : o, s, h) : c = p, u)
                    for (a = yt(c, w), u(a, [], s, h), l = a.length; l--;)(y = a[l]) && (c[w[l]] = !(p[w[l]] = y));
                if (e) {
                    if (f || n) {
                        if (f) {
                            for (a = [], l = c.length; l--;)(y = c[l]) && a.push(p[l] = y);
                            f(null, c = [], a, h)
                        }
                        for (l = c.length; l--;)(y = c[l]) && -1 < (a = f ? d.call(e, y) : b[l]) && (e[a] = !(o[a] = y))
                    }
                } else c = yt(c === o ? c.splice(k, c.length) : c), f ? f(null, o, c, h) : v.apply(o, c)
            })
        }

        function ii(n) {
            for (var o, u, r, s = n.length, h = t.relative[n[0].type], c = h || t.relative[" "], i = h ? 1 : 0, l = vt(function(n) {
                    return n === o
                }, c, !0), a = vt(function(n) {
                    return -1 < d.call(o, n)
                }, c, !0), f = [function(n, t, i) {
                    var r = !h && (i || t != et) || ((o = t).nodeType ? l(n, t, i) : a(n, t, i));
                    return o = null, r
                }]; i < s; i++)
                if (u = t.relative[n[i].type]) f = [vt(ni(f), u)];
                else {
                    if ((u = t.filter[n[i].type].apply(null, n[i].matches))[e]) {
                        for (r = ++i; r < s; r++)
                            if (t.relative[n[r].type]) break;
                        return ti(1 < i && ni(f), 1 < i && at(n.slice(0, i - 1).concat({
                            value: " " === n[i - 2].type ? "*" : ""
                        })).replace(gt, "$1"), u, i < r && ii(n.slice(i, r)), r < s && ii(n = n.slice(r)), r < s && at(n))
                    }
                    f.push(u)
                } return ni(f)
        }

        function ri(n, r) {
            var s, h, c, o, a, w, b = [],
                k = [],
                f = ei[n + " "];
            if (!f) {
                for (r || (r = lt(n)), s = r.length; s--;)(f = ii(r[s]))[e] ? b.push(f) : k.push(f);
                (f = ei(n, (h = k, o = 0 < (c = b).length, a = 0 < h.length, w = function(n, r, f, e, s) {
                    var y, g, k, d = 0,
                        w = "0",
                        tt = n && [],
                        b = [],
                        it = et,
                        rt = n || a && t.find.TAG("*", s),
                        ut = p += null == it ? 1 : Math.random() || .1,
                        ft = rt.length;
                    for (s && (et = r == u || r || s); w !== ft && null != (y = rt[w]); w++) {
                        if (a && y) {
                            for (g = 0, r || y.ownerDocument == u || (nt(y), f = !l); k = h[g++];)
                                if (k(y, r || u, f)) {
                                    v.call(e, y);
                                    break
                                } s && (p = ut)
                        }
                        o && ((y = !k && y) && d--, n && tt.push(y))
                    }
                    if (d += w, o && w !== d) {
                        for (g = 0; k = c[g++];) k(tt, b, r, f);
                        if (n) {
                            if (0 < d)
                                while (w--) tt[w] || b[w] || (b[w] = ve.call(e));
                            b = yt(b)
                        }
                        v.apply(e, b);
                        s && !n && 0 < b.length && 1 < d + c.length && i.uniqueSort(e)
                    }
                    return s && (p = ut, et = it), tt
                }, o ? y(w) : w))).selector = n
            }
            return f
        }

        function yi(n, i, r, u) {
            var o, f, e, c, a, h = "function" == typeof n && n,
                s = !u && lt(n = h.selector || n);
            if (r = r || [], 1 === s.length) {
                if (2 < (f = s[0] = s[0].slice(0)).length && "ID" === (e = f[0]).type && 9 === i.nodeType && l && t.relative[f[1].type]) {
                    if (!(i = (t.find.ID(e.matches[0].replace(w, k), i) || [])[0])) return r;
                    h && (i = i.parentNode);
                    n = n.slice(f.shift().value.length)
                }
                for (o = ht.needsContext.test(n) ? 0 : f.length; o--;) {
                    if (e = f[o], t.relative[c = e.type]) break;
                    if ((a = t.find[c]) && (u = a(e.matches[0].replace(w, k), bt.test(f[0].type) && kt(i.parentNode) || i))) {
                        if (f.splice(o, 1), !(n = u.length && at(f))) return v.apply(r, u), r;
                        break
                    }
                }
            }
            return (h || ri(n, s))(u, i, !l, r, !i || bt.test(n) && kt(i.parentNode) || i), r
        }
        var rt, t, et, ft, ot, u, g, l, c, pt, v = si,
            e = i.expando,
            p = 0,
            pi = 0,
            ui = ct(),
            fi = ct(),
            ei = ct(),
            st = ct(),
            wt = function(n, t) {
                return n === t && (ot = !0), 0
            },
            oi = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            tt = "(?:\\\\[\\da-fA-F]{1,6}" + o + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
            hi = "\\[" + o + "*(" + tt + ")(?:" + o + "*([*^$|!~]?=)" + o + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + tt + "))|)" + o + "*\\]",
            ci = ":(" + tt + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + hi + ")*)|.*)\\)|)",
            wi = new RegExp(o + "+", "g"),
            bi = new RegExp("^" + o + "*," + o + "*"),
            li = new RegExp("^" + o + "*([>+~]|" + o + ")" + o + "*"),
            ki = new RegExp(o + "|>"),
            di = new RegExp(ci),
            gi = new RegExp("^" + tt + "$"),
            ht = {
                ID: new RegExp("^#(" + tt + ")"),
                CLASS: new RegExp("^\\.(" + tt + ")"),
                TAG: new RegExp("^(" + tt + "|[*])"),
                ATTR: new RegExp("^" + hi),
                PSEUDO: new RegExp("^" + ci),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + o + "*(even|odd|(([+-]|)(\\d*)n|)" + o + "*(?:([+-]|)" + o + "*(\\d+)|))" + o + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + oi + ")$", "i"),
                needsContext: new RegExp("^" + o + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + o + "*((?:-\\d)?\\d*)" + o + "*\\)|)(?=[^-]|$)", "i")
            },
            nr = /^(?:input|select|textarea|button)$/i,
            tr = /^h\d$/i,
            ir = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            bt = /[+~]/,
            w = new RegExp("\\\\[\\da-fA-F]{1,6}" + o + "?|\\\\([^\\r\\n\\f])", "g"),
            k = function(n, t) {
                var i = "0x" + n.slice(1) - 65536;
                return t || (i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320))
            },
            rr = function() {
                nt()
            },
            ur = vt(function(n) {
                return !0 === n.disabled && s(n, "fieldset")
            }, {
                dir: "parentNode",
                next: "legend"
            });
        try {
            v.apply(h = a.call(b.childNodes), b.childNodes);
            h[b.childNodes.length].nodeType
        } catch (rt) {
            v = {
                apply: function(n, t) {
                    si.apply(n, a.call(t))
                },
                call: function(n) {
                    si.apply(n, a.call(arguments, 1))
                }
            }
        }
        for (rt in r.matches = function(n, t) {
                return r(n, null, null, t)
            }, r.matchesSelector = function(n, t) {
                if (nt(n), l && !st[t + " "] && (!c || !c.test(t))) try {
                    var i = pt.call(n, t);
                    if (i || f.disconnectedMatch || n.document && 11 !== n.document.nodeType) return i
                } catch (n) {
                    st(t, !0)
                }
                return 0 < r(t, u, null, [n]).length
            }, r.contains = function(n, t) {
                return (n.ownerDocument || n) != u && nt(n), i.contains(n, t)
            }, r.attr = function(n, i) {
                (n.ownerDocument || n) != u && nt(n);
                var r = t.attrHandle[i.toLowerCase()],
                    f = r && dt.call(t.attrHandle, i.toLowerCase()) ? r(n, i, !l) : void 0;
                return void 0 !== f ? f : n.getAttribute(i)
            }, r.error = function(n) {
                throw new Error("Syntax error, unrecognized expression: " + n);
            }, i.uniqueSort = function(n) {
                var r, u = [],
                    t = 0,
                    i = 0;
                if (ot = !f.sortStable, ft = !f.sortStable && a.call(n, 0), ye.call(n, wt), ot) {
                    while (r = n[i++]) r === n[i] && (t = u.push(i));
                    while (t--) pe.call(n, u[t], 1)
                }
                return ft = null, n
            }, i.fn.uniqueSort = function() {
                return this.pushStack(i.uniqueSort(a.apply(this)))
            }, (t = i.expr = {
                cacheLength: 50,
                createPseudo: y,
                match: ht,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(n) {
                        return n[1] = n[1].replace(w, k), n[3] = (n[3] || n[4] || n[5] || "").replace(w, k), "~=" === n[2] && (n[3] = " " + n[3] + " "), n.slice(0, 4)
                    },
                    CHILD: function(n) {
                        return n[1] = n[1].toLowerCase(), "nth" === n[1].slice(0, 3) ? (n[3] || r.error(n[0]), n[4] = +(n[4] ? n[5] + (n[6] || 1) : 2 * ("even" === n[3] || "odd" === n[3])), n[5] = +(n[7] + n[8] || "odd" === n[3])) : n[3] && r.error(n[0]), n
                    },
                    PSEUDO: function(n) {
                        var i, t = !n[6] && n[2];
                        return ht.CHILD.test(n[0]) ? null : (n[3] ? n[2] = n[4] || n[5] || "" : t && di.test(t) && (i = lt(t, !0)) && (i = t.indexOf(")", t.length - i) - t.length) && (n[0] = n[0].slice(0, i), n[2] = t.slice(0, i)), n.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(n) {
                        var t = n.replace(w, k).toLowerCase();
                        return "*" === n ? function() {
                            return !0
                        } : function(n) {
                            return s(n, t)
                        }
                    },
                    CLASS: function(n) {
                        var t = ui[n + " "];
                        return t || (t = new RegExp("(^|" + o + ")" + n + "(" + o + "|$)")) && ui(n, function(n) {
                            return t.test("string" == typeof n.className && n.className || "undefined" != typeof n.getAttribute && n.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(n, t, i) {
                        return function(u) {
                            var f = r.attr(u, n);
                            return null == f ? "!=" === t : !t || (f += "", "=" === t ? f === i : "!=" === t ? f !== i : "^=" === t ? i && 0 === f.indexOf(i) : "*=" === t ? i && -1 < f.indexOf(i) : "$=" === t ? i && f.slice(-i.length) === i : "~=" === t ? -1 < (" " + f.replace(wi, " ") + " ").indexOf(i) : "|=" === t && (f === i || f.slice(0, i.length + 1) === i + "-"))
                        }
                    },
                    CHILD: function(n, t, i, r, u) {
                        var h = "nth" !== n.slice(0, 3),
                            o = "last" !== n.slice(-4),
                            f = "of-type" === t;
                        return 1 === r && 0 === u ? function(n) {
                            return !!n.parentNode
                        } : function(t, i, c) {
                            var w, d, l, v, b, k = h !== o ? "nextSibling" : "previousSibling",
                                y = t.parentNode,
                                nt = f && t.nodeName.toLowerCase(),
                                g = !c && !f,
                                a = !1;
                            if (y) {
                                if (h) {
                                    while (k) {
                                        for (l = t; l = l[k];)
                                            if (f ? s(l, nt) : 1 === l.nodeType) return !1;
                                        b = k = "only" === n && !b && "nextSibling"
                                    }
                                    return !0
                                }
                                if (b = [o ? y.firstChild : y.lastChild], o && g) {
                                    for (a = (v = (w = (d = y[e] || (y[e] = {}))[n] || [])[0] === p && w[1]) && w[2], l = v && y.childNodes[v]; l = ++v && l && l[k] || (a = v = 0) || b.pop();)
                                        if (1 === l.nodeType && ++a && l === t) {
                                            d[n] = [p, v, a];
                                            break
                                        }
                                } else if (g && (a = v = (w = (d = t[e] || (t[e] = {}))[n] || [])[0] === p && w[1]), !1 === a)
                                    while (l = ++v && l && l[k] || (a = v = 0) || b.pop())
                                        if ((f ? s(l, nt) : 1 === l.nodeType) && ++a && (g && ((d = l[e] || (l[e] = {}))[n] = [p, a]), l === t)) break;
                                return (a -= u) === r || a % r == 0 && 0 <= a / r
                            }
                        }
                    },
                    PSEUDO: function(n, i) {
                        var f, u = t.pseudos[n] || t.setFilters[n.toLowerCase()] || r.error("unsupported pseudo: " + n);
                        return u[e] ? u(i) : 1 < u.length ? (f = [n, n, "", i], t.setFilters.hasOwnProperty(n.toLowerCase()) ? y(function(n, t) {
                            for (var e, r = u(n, i), f = r.length; f--;) n[e = d.call(n, r[f])] = !(t[e] = r[f])
                        }) : function(n) {
                            return u(n, 0, f)
                        }) : u
                    }
                },
                pseudos: {
                    not: y(function(n) {
                        var t = [],
                            r = [],
                            i = ri(n.replace(gt, "$1"));
                        return i[e] ? y(function(n, t, r, u) {
                            for (var e, o = i(n, null, u, []), f = n.length; f--;)(e = o[f]) && (n[f] = !(t[f] = e))
                        }) : function(n, u, f) {
                            return t[0] = n, i(t, null, f, r), t[0] = null, !r.pop()
                        }
                    }),
                    has: y(function(n) {
                        return function(t) {
                            return 0 < r(n, t).length
                        }
                    }),
                    contains: y(function(n) {
                        return n = n.replace(w, k),
                            function(t) {
                                return -1 < (t.textContent || i.text(t)).indexOf(n)
                            }
                    }),
                    lang: y(function(n) {
                        return gi.test(n || "") || r.error("unsupported lang: " + n), n = n.replace(w, k).toLowerCase(),
                            function(t) {
                                var i;
                                do
                                    if (i = l ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (i = i.toLowerCase()) === n || 0 === i.indexOf(n + "-"); while ((t = t.parentNode) && 1 === t.nodeType);
                                return !1
                            }
                    }),
                    target: function(t) {
                        var i = n.location && n.location.hash;
                        return i && i.slice(1) === t.id
                    },
                    root: function(n) {
                        return n === g
                    },
                    focus: function(n) {
                        return n === function() {
                            try {
                                return u.activeElement
                            } catch (n) {}
                        }() && u.hasFocus() && !!(n.type || n.href || ~n.tabIndex)
                    },
                    enabled: ai(!1),
                    disabled: ai(!0),
                    checked: function(n) {
                        return s(n, "input") && !!n.checked || s(n, "option") && !!n.selected
                    },
                    selected: function(n) {
                        return n.parentNode && n.parentNode.selectedIndex, !0 === n.selected
                    },
                    empty: function(n) {
                        for (n = n.firstChild; n; n = n.nextSibling)
                            if (n.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(n) {
                        return !t.pseudos.empty(n)
                    },
                    header: function(n) {
                        return tr.test(n.nodeName)
                    },
                    input: function(n) {
                        return nr.test(n.nodeName)
                    },
                    button: function(n) {
                        return s(n, "input") && "button" === n.type || s(n, "button")
                    },
                    text: function(n) {
                        var t;
                        return s(n, "input") && "text" === n.type && (null == (t = n.getAttribute("type")) || "text" === t.toLowerCase())
                    },
                    first: it(function() {
                        return [0]
                    }),
                    last: it(function(n, t) {
                        return [t - 1]
                    }),
                    eq: it(function(n, t, i) {
                        return [i < 0 ? i + t : i]
                    }),
                    even: it(function(n, t) {
                        for (var i = 0; i < t; i += 2) n.push(i);
                        return n
                    }),
                    odd: it(function(n, t) {
                        for (var i = 1; i < t; i += 2) n.push(i);
                        return n
                    }),
                    lt: it(function(n, t, i) {
                        for (var r = i < 0 ? i + t : t < i ? t : i; 0 <= --r;) n.push(r);
                        return n
                    }),
                    gt: it(function(n, t, i) {
                        for (var r = i < 0 ? i + t : i; ++r < t;) n.push(r);
                        return n
                    })
                }
            }).pseudos.nth = t.pseudos.eq, {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) t.pseudos[rt] = fr(rt);
        for (rt in {
                submit: !0,
                reset: !0
            }) t.pseudos[rt] = er(rt);
        vi.prototype = t.filters = t.pseudos;
        t.setFilters = new vi;
        f.sortStable = e.split("").sort(wt).join("") === e;
        nt();
        f.sortDetached = ut(function(n) {
            return 1 & n.compareDocumentPosition(u.createElement("fieldset"))
        });
        i.find = r;
        i.expr[":"] = i.expr.pseudos;
        i.unique = i.uniqueSort;
        r.compile = ri;
        r.select = yi;
        r.setDocument = nt;
        r.escape = i.escapeSelector;
        r.getText = i.text;
        r.isXML = i.isXMLDoc;
        r.selectors = i.expr;
        r.support = i.support;
        r.uniqueSort = i.uniqueSort
    }();
    var ot = function(n, t, r) {
            for (var u = [], f = void 0 !== r;
                (n = n[t]) && 9 !== n.nodeType;)
                if (1 === n.nodeType) {
                    if (f && i(n).is(r)) break;
                    u.push(n)
                } return u
        },
        ru = function(n, t) {
            for (var i = []; n; n = n.nextSibling) 1 === n.nodeType && n !== t && i.push(n);
            return i
        },
        uu = i.expr.match.needsContext,
        fu = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    i.filter = function(n, t, r) {
        var u = t[0];
        return r && (n = ":not(" + n + ")"), 1 === t.length && 1 === u.nodeType ? i.find.matchesSelector(u, n) ? [u] : [] : i.find.matches(n, i.grep(t, function(n) {
            return 1 === n.nodeType
        }))
    };
    i.fn.extend({
        find: function(n) {
            var t, r, u = this.length,
                f = this;
            if ("string" != typeof n) return this.pushStack(i(n).filter(function() {
                for (t = 0; t < u; t++)
                    if (i.contains(f[t], this)) return !0
            }));
            for (r = this.pushStack([]), t = 0; t < u; t++) i.find(n, f[t], r);
            return 1 < u ? i.uniqueSort(r) : r
        },
        filter: function(n) {
            return this.pushStack(di(this, n || [], !1))
        },
        not: function(n) {
            return this.pushStack(di(this, n || [], !0))
        },
        is: function(n) {
            return !!di(this, "string" == typeof n && uu.test(n) ? i(n) : n || [], !1).length
        }
    });
    ou = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (i.fn.init = function(n, t, r) {
        var f, o;
        if (!n) return this;
        if (r = r || eu, "string" == typeof n) {
            if (!(f = "<" === n[0] && ">" === n[n.length - 1] && 3 <= n.length ? [null, n, null] : ou.exec(n)) || !f[1] && t) return !t || t.jquery ? (t || r).find(n) : this.constructor(t).find(n);
            if (f[1]) {
                if (t = t instanceof i ? t[0] : t, i.merge(this, i.parseHTML(f[1], t && t.nodeType ? t.ownerDocument || t : u, !0)), fu.test(f[1]) && i.isPlainObject(t))
                    for (f in t) e(this[f]) ? this[f](t[f]) : this.attr(f, t[f]);
                return this
            }
            return (o = u.getElementById(f[2])) && (this[0] = o, this.length = 1), this
        }
        return n.nodeType ? (this[0] = n, this.length = 1, this) : e(n) ? void 0 !== r.ready ? r.ready(n) : n(i) : i.makeArray(n, this)
    }).prototype = i.fn;
    eu = i(u);
    su = /^(?:parents|prev(?:Until|All))/;
    hu = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    i.fn.extend({
        has: function(n) {
            var t = i(n, this),
                r = t.length;
            return this.filter(function() {
                for (var n = 0; n < r; n++)
                    if (i.contains(this, t[n])) return !0
            })
        },
        closest: function(n, t) {
            var r, f = 0,
                o = this.length,
                u = [],
                e = "string" != typeof n && i(n);
            if (!uu.test(n))
                for (; f < o; f++)
                    for (r = this[f]; r && r !== t; r = r.parentNode)
                        if (r.nodeType < 11 && (e ? -1 < e.index(r) : 1 === r.nodeType && i.find.matchesSelector(r, n))) {
                            u.push(r);
                            break
                        } return this.pushStack(1 < u.length ? i.uniqueSort(u) : u)
        },
        index: function(n) {
            return n ? "string" == typeof n ? d.call(i(n), this[0]) : d.call(this, n.jquery ? n[0] : n) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(n, t) {
            return this.pushStack(i.uniqueSort(i.merge(this.get(), i(n, t))))
        },
        addBack: function(n) {
            return this.add(null == n ? this.prevObject : this.prevObject.filter(n))
        }
    });
    i.each({
        parent: function(n) {
            var t = n.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(n) {
            return ot(n, "parentNode")
        },
        parentsUntil: function(n, t, i) {
            return ot(n, "parentNode", i)
        },
        next: function(n) {
            return cu(n, "nextSibling")
        },
        prev: function(n) {
            return cu(n, "previousSibling")
        },
        nextAll: function(n) {
            return ot(n, "nextSibling")
        },
        prevAll: function(n) {
            return ot(n, "previousSibling")
        },
        nextUntil: function(n, t, i) {
            return ot(n, "nextSibling", i)
        },
        prevUntil: function(n, t, i) {
            return ot(n, "previousSibling", i)
        },
        siblings: function(n) {
            return ru((n.parentNode || {}).firstChild, n)
        },
        children: function(n) {
            return ru(n.firstChild)
        },
        contents: function(n) {
            return null != n.contentDocument && br(n.contentDocument) ? n.contentDocument : (s(n, "template") && (n = n.content || n), i.merge([], n.childNodes))
        }
    }, function(n, t) {
        i.fn[n] = function(r, u) {
            var f = i.map(this, t, r);
            return "Until" !== n.slice(-5) && (u = r), u && "string" == typeof u && (f = i.filter(u, f)), 1 < this.length && (hu[n] || i.uniqueSort(f), su.test(n) && f.reverse()), this.pushStack(f)
        }
    });
    y = /[^\x20\t\r\n\f]+/g;
    i.Callbacks = function(n) {
        var l, h;
        n = "string" == typeof n ? (l = n, h = {}, i.each(l.match(y) || [], function(n, t) {
            h[t] = !0
        }), h) : i.extend({}, n);
        var o, r, a, u, t = [],
            s = [],
            f = -1,
            v = function() {
                for (u = u || n.once, a = o = !0; s.length; f = -1)
                    for (r = s.shift(); ++f < t.length;) !1 === t[f].apply(r[0], r[1]) && n.stopOnFalse && (f = t.length, r = !1);
                n.memory || (r = !1);
                o = !1;
                u && (t = r ? [] : "")
            },
            c = {
                add: function() {
                    return t && (r && !o && (f = t.length - 1, s.push(r)), function u(r) {
                        i.each(r, function(i, r) {
                            e(r) ? n.unique && c.has(r) || t.push(r) : r && r.length && "string" !== et(r) && u(r)
                        })
                    }(arguments), r && !o && v()), this
                },
                remove: function() {
                    return i.each(arguments, function(n, r) {
                        for (var u; - 1 < (u = i.inArray(r, t, u));) t.splice(u, 1), u <= f && f--
                    }), this
                },
                has: function(n) {
                    return n ? -1 < i.inArray(n, t) : 0 < t.length
                },
                empty: function() {
                    return t && (t = []), this
                },
                disable: function() {
                    return u = s = [], t = r = "", this
                },
                disabled: function() {
                    return !t
                },
                lock: function() {
                    return u = s = [], r || o || (t = r = ""), this
                },
                locked: function() {
                    return !!u
                },
                fireWith: function(n, t) {
                    return u || (t = [n, (t = t || []).slice ? t.slice() : t], s.push(t), o || v()), this
                },
                fire: function() {
                    return c.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!a
                }
            };
        return c
    };
    i.extend({
        Deferred: function(t) {
            var u = [
                    ["notify", "progress", i.Callbacks("memory"), i.Callbacks("memory"), 2],
                    ["resolve", "done", i.Callbacks("once memory"), i.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", i.Callbacks("once memory"), i.Callbacks("once memory"), 1, "rejected"]
                ],
                o = "pending",
                f = {
                    state: function() {
                        return o
                    },
                    always: function() {
                        return r.done(arguments).fail(arguments), this
                    },
                    "catch": function(n) {
                        return f.then(null, n)
                    },
                    pipe: function() {
                        var n = arguments;
                        return i.Deferred(function(t) {
                            i.each(u, function(i, u) {
                                var f = e(n[u[4]]) && n[u[4]];
                                r[u[1]](function() {
                                    var n = f && f.apply(this, arguments);
                                    n && e(n.promise) ? n.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[u[0] + "With"](this, f ? [n] : arguments)
                                })
                            });
                            n = null
                        }).promise()
                    },
                    then: function(t, r, f) {
                        function s(t, r, u, f) {
                            return function() {
                                var h = this,
                                    c = arguments,
                                    a = function() {
                                        var n, i;
                                        if (!(t < o)) {
                                            if ((n = u.apply(h, c)) === r.promise()) throw new TypeError("Thenable self-resolution");
                                            i = n && ("object" == typeof n || "function" == typeof n) && n.then;
                                            e(i) ? f ? i.call(n, s(o, r, st, f), s(o, r, hi, f)) : (o++, i.call(n, s(o, r, st, f), s(o, r, hi, f), s(o, r, st, r.notifyWith))) : (u !== st && (h = void 0, c = [n]), (f || r.resolveWith)(h, c))
                                        }
                                    },
                                    l = f ? a : function() {
                                        try {
                                            a()
                                        } catch (a) {
                                            i.Deferred.exceptionHook && i.Deferred.exceptionHook(a, l.error);
                                            o <= t + 1 && (u !== hi && (h = void 0, c = [a]), r.rejectWith(h, c))
                                        }
                                    };
                                t ? l() : (i.Deferred.getErrorHook ? l.error = i.Deferred.getErrorHook() : i.Deferred.getStackHook && (l.error = i.Deferred.getStackHook()), n.setTimeout(l))
                            }
                        }
                        var o = 0;
                        return i.Deferred(function(n) {
                            u[0][3].add(s(0, n, e(f) ? f : st, n.notifyWith));
                            u[1][3].add(s(0, n, e(t) ? t : st));
                            u[2][3].add(s(0, n, e(r) ? r : hi))
                        }).promise()
                    },
                    promise: function(n) {
                        return null != n ? i.extend(n, f) : f
                    }
                },
                r = {};
            return i.each(u, function(n, t) {
                var i = t[2],
                    e = t[5];
                f[t[1]] = i.add;
                e && i.add(function() {
                    o = e
                }, u[3 - n][2].disable, u[3 - n][3].disable, u[0][2].lock, u[0][3].lock);
                i.add(t[3].fire);
                r[t[0]] = function() {
                    return r[t[0] + "With"](this === r ? void 0 : this, arguments), this
                };
                r[t[0] + "With"] = i.fireWith
            }), f.promise(r), t && t.call(r, r), r
        },
        when: function(n) {
            var f = arguments.length,
                t = f,
                o = Array(t),
                u = a.call(arguments),
                r = i.Deferred(),
                s = function(n) {
                    return function(t) {
                        o[n] = this;
                        u[n] = 1 < arguments.length ? a.call(arguments) : t;
                        --f || r.resolveWith(o, u)
                    }
                };
            if (f <= 1 && (lu(n, r.done(s(t)).resolve, r.reject, !f), "pending" === r.state() || e(u[t] && u[t].then))) return r.then();
            while (t--) lu(u[t], s(t), r.reject);
            return r.promise()
        }
    });
    au = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    i.Deferred.exceptionHook = function(t, i) {
        n.console && n.console.warn && t && au.test(t.name) && n.console.warn("jQuery.Deferred exception: " + t.message, t.stack, i)
    };
    i.readyException = function(t) {
        n.setTimeout(function() {
            throw t;
        })
    };
    ci = i.Deferred();
    i.fn.ready = function(n) {
        return ci.then(n)["catch"](function(n) {
            i.readyException(n)
        }), this
    };
    i.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(n) {
            (!0 === n ? --i.readyWait : i.isReady) || (i.isReady = !0) !== n && 0 < --i.readyWait || ci.resolveWith(u, [i])
        }
    });
    i.ready.then = ci.then;
    "complete" === u.readyState || "loading" !== u.readyState && !u.documentElement.doScroll ? n.setTimeout(i.ready) : (u.addEventListener("DOMContentLoaded", li), n.addEventListener("load", li));
    var g = function(n, t, r, u, f, o, s) {
            var h = 0,
                l = n.length,
                c = null == r;
            if ("object" === et(r))
                for (h in f = !0, r) g(n, t, h, r[h], !0, o, s);
            else if (void 0 !== u && (f = !0, e(u) || (s = !0), c && (s ? (t.call(n, u), t = null) : (c = t, t = function(n, t, r) {
                    return c.call(i(n), r)
                })), t))
                for (; h < l; h++) t(n[h], r, s ? u : u.call(n[h], h, t(n[h], r)));
            return f ? n : c ? t.call(n) : l ? t(n[0], r) : o
        },
        be = /^-ms-/,
        ke = /-([a-z])/g;
    ht = function(n) {
        return 1 === n.nodeType || 9 === n.nodeType || !+n.nodeType
    };
    ni.uid = 1;
    ni.prototype = {
        cache: function(n) {
            var t = n[this.expando];
            return t || (t = {}, ht(n) && (n.nodeType ? n[this.expando] = t : Object.defineProperty(n, this.expando, {
                value: t,
                configurable: !0
            }))), t
        },
        set: function(n, t, i) {
            var r, u = this.cache(n);
            if ("string" == typeof t) u[k(t)] = i;
            else
                for (r in t) u[k(r)] = t[r];
            return u
        },
        get: function(n, t) {
            return void 0 === t ? this.cache(n) : n[this.expando] && n[this.expando][k(t)]
        },
        access: function(n, t, i) {
            return void 0 === t || t && "string" == typeof t && void 0 === i ? this.get(n, t) : (this.set(n, t, i), void 0 !== i ? i : t)
        },
        remove: function(n, t) {
            var u, r = n[this.expando];
            if (void 0 !== r) {
                if (void 0 !== t)
                    for (u = (t = Array.isArray(t) ? t.map(k) : (t = k(t)) in r ? [t] : t.match(y) || []).length; u--;) delete r[t[u]];
                (void 0 === t || i.isEmptyObject(r)) && (n.nodeType ? n[this.expando] = void 0 : delete n[this.expando])
            }
        },
        hasData: function(n) {
            var t = n[this.expando];
            return void 0 !== t && !i.isEmptyObject(t)
        }
    };
    var r = new ni,
        c = new ni,
        ge = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        no = /[A-Z]/g;
    i.extend({
        hasData: function(n) {
            return c.hasData(n) || r.hasData(n)
        },
        data: function(n, t, i) {
            return c.access(n, t, i)
        },
        removeData: function(n, t) {
            c.remove(n, t)
        },
        _data: function(n, t, i) {
            return r.access(n, t, i)
        },
        _removeData: function(n, t) {
            r.remove(n, t)
        }
    });
    i.fn.extend({
        data: function(n, t) {
            var f, u, e, i = this[0],
                o = i && i.attributes;
            if (void 0 === n) {
                if (this.length && (e = c.get(i), 1 === i.nodeType && !r.get(i, "hasDataAttrs"))) {
                    for (f = o.length; f--;) o[f] && 0 === (u = o[f].name).indexOf("data-") && (u = k(u.slice(5)), vu(i, u, e[u]));
                    r.set(i, "hasDataAttrs", !0)
                }
                return e
            }
            return "object" == typeof n ? this.each(function() {
                c.set(this, n)
            }) : g(this, function(t) {
                var r;
                if (i && void 0 === t) return void 0 !== (r = c.get(i, n)) ? r : void 0 !== (r = vu(i, n)) ? r : void 0;
                this.each(function() {
                    c.set(this, n, t)
                })
            }, null, t, 1 < arguments.length, null, !0)
        },
        removeData: function(n) {
            return this.each(function() {
                c.remove(this, n)
            })
        }
    });
    i.extend({
        queue: function(n, t, u) {
            var f;
            if (n) return t = (t || "fx") + "queue", f = r.get(n, t), u && (!f || Array.isArray(u) ? f = r.access(n, t, i.makeArray(u)) : f.push(u)), f || []
        },
        dequeue: function(n, t) {
            t = t || "fx";
            var r = i.queue(n, t),
                e = r.length,
                u = r.shift(),
                f = i._queueHooks(n, t);
            "inprogress" === u && (u = r.shift(), e--);
            u && ("fx" === t && r.unshift("inprogress"), delete f.stop, u.call(n, function() {
                i.dequeue(n, t)
            }, f));
            !e && f && f.empty.fire()
        },
        _queueHooks: function(n, t) {
            var u = t + "queueHooks";
            return r.get(n, u) || r.access(n, u, {
                empty: i.Callbacks("once memory").add(function() {
                    r.remove(n, [t + "queue", u])
                })
            })
        }
    });
    i.fn.extend({
        queue: function(n, t) {
            var r = 2;
            return "string" != typeof n && (t = n, n = "fx", r--), arguments.length < r ? i.queue(this[0], n) : void 0 === t ? this : this.each(function() {
                var r = i.queue(this, n, t);
                i._queueHooks(this, n);
                "fx" === n && "inprogress" !== r[0] && i.dequeue(this, n)
            })
        },
        dequeue: function(n) {
            return this.each(function() {
                i.dequeue(this, n)
            })
        },
        clearQueue: function(n) {
            return this.queue(n || "fx", [])
        },
        promise: function(n, t) {
            var u, e = 1,
                o = i.Deferred(),
                f = this,
                s = this.length,
                h = function() {
                    --e || o.resolveWith(f, [f])
                };
            for ("string" != typeof n && (t = n, n = void 0), n = n || "fx"; s--;)(u = r.get(f[s], n + "queueHooks")) && u.empty && (e++, u.empty.add(h));
            return h(), o.promise(t)
        }
    });
    var yu = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        ti = new RegExp("^(?:([+-])=|)(" + yu + ")([a-z%]*)$", "i"),
        nt = ["Top", "Right", "Bottom", "Left"],
        tt = u.documentElement,
        ct = function(n) {
            return i.contains(n.ownerDocument, n)
        },
        to = {
            composed: !0
        };
    tt.getRootNode && (ct = function(n) {
        return i.contains(n.ownerDocument, n) || n.getRootNode(to) === n.ownerDocument
    });
    ii = function(n, t) {
        return "none" === (n = t || n).style.display || "" === n.style.display && ct(n) && "none" === i.css(n, "display")
    };
    gi = {};
    i.fn.extend({
        show: function() {
            return lt(this, !0)
        },
        hide: function() {
            return lt(this)
        },
        toggle: function(n) {
            return "boolean" == typeof n ? n ? this.show() : this.hide() : this.each(function() {
                ii(this) ? i(this).show() : i(this).hide()
            })
        }
    });
    var it, ai, ri = /^(?:checkbox|radio)$/i,
        wu = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        bu = /^$|^module$|\/(?:java|ecma)script/i;
    it = u.createDocumentFragment().appendChild(u.createElement("div"));
    (ai = u.createElement("input")).setAttribute("type", "radio");
    ai.setAttribute("checked", "checked");
    ai.setAttribute("name", "t");
    it.appendChild(ai);
    f.checkClone = it.cloneNode(!0).cloneNode(!0).lastChild.checked;
    it.innerHTML = "<textarea>x<\/textarea>";
    f.noCloneChecked = !!it.cloneNode(!0).lastChild.defaultValue;
    it.innerHTML = "<option><\/option>";
    f.option = !!it.lastChild;
    v = {
        thead: [1, "<table>", "<\/table>"],
        col: [2, "<table><colgroup>", "<\/colgroup><\/table>"],
        tr: [2, "<table><tbody>", "<\/tbody><\/table>"],
        td: [3, "<table><tbody><tr>", "<\/tr><\/tbody><\/table>"],
        _default: [0, "", ""]
    };
    v.tbody = v.tfoot = v.colgroup = v.caption = v.thead;
    v.th = v.td;
    f.option || (v.optgroup = v.option = [1, "<select multiple='multiple'>", "<\/select>"]);
    ku = /<|&#?\w+;/;
    tr = /^([^.]*)(?:\.(.+)|)/;
    i.event = {
        global: {},
        add: function(n, t, u, f, e) {
            var p, l, k, a, w, h, s, c, o, b, d, v = r.get(n);
            if (ht(n))
                for (u.handler && (u = (p = u).handler, e = p.selector), e && i.find.matchesSelector(tt, e), u.guid || (u.guid = i.guid++), (a = v.events) || (a = v.events = Object.create(null)), (l = v.handle) || (l = v.handle = function(t) {
                        if ("undefined" != typeof i && i.event.triggered !== t.type) return i.event.dispatch.apply(n, arguments)
                    }), w = (t = (t || "").match(y) || [""]).length; w--;) o = d = (k = tr.exec(t[w]) || [])[1], b = (k[2] || "").split(".").sort(), o && (s = i.event.special[o] || {}, o = (e ? s.delegateType : s.bindType) || o, s = i.event.special[o] || {}, h = i.extend({
                    type: o,
                    origType: d,
                    data: f,
                    handler: u,
                    guid: u.guid,
                    selector: e,
                    needsContext: e && i.expr.match.needsContext.test(e),
                    namespace: b.join(".")
                }, p), (c = a[o]) || ((c = a[o] = []).delegateCount = 0, s.setup && !1 !== s.setup.call(n, f, b, l) || n.addEventListener && n.addEventListener(o, l)), s.add && (s.add.call(n, h), h.handler.guid || (h.handler.guid = u.guid)), e ? c.splice(c.delegateCount++, 0, h) : c.push(h), i.event.global[o] = !0)
        },
        remove: function(n, t, u, f, e) {
            var v, k, c, a, p, s, h, l, o, b, d, w = r.hasData(n) && r.get(n);
            if (w && (a = w.events)) {
                for (p = (t = (t || "").match(y) || [""]).length; p--;)
                    if (o = d = (c = tr.exec(t[p]) || [])[1], b = (c[2] || "").split(".").sort(), o) {
                        for (h = i.event.special[o] || {}, l = a[o = (f ? h.delegateType : h.bindType) || o] || [], c = c[2] && new RegExp("(^|\\.)" + b.join("\\.(?:.*\\.|)") + "(\\.|$)"), k = v = l.length; v--;) s = l[v], !e && d !== s.origType || u && u.guid !== s.guid || c && !c.test(s.namespace) || f && f !== s.selector && ("**" !== f || !s.selector) || (l.splice(v, 1), s.selector && l.delegateCount--, h.remove && h.remove.call(n, s));
                        k && !l.length && (h.teardown && !1 !== h.teardown.call(n, b, w.handle) || i.removeEvent(n, o, w.handle), delete a[o])
                    } else
                        for (o in a) i.event.remove(n, o + t[p], u, f, !0);
                i.isEmptyObject(a) && r.remove(n, "handle events")
            }
        },
        dispatch: function(n) {
            var u, h, c, e, f, l, s = new Array(arguments.length),
                t = i.event.fix(n),
                a = (r.get(this, "events") || Object.create(null))[t.type] || [],
                o = i.event.special[t.type] || {};
            for (s[0] = t, u = 1; u < arguments.length; u++) s[u] = arguments[u];
            if (t.delegateTarget = this, !o.preDispatch || !1 !== o.preDispatch.call(this, t)) {
                for (l = i.event.handlers.call(this, t, a), u = 0;
                    (e = l[u++]) && !t.isPropagationStopped();)
                    for (t.currentTarget = e.elem, h = 0;
                        (f = e.handlers[h++]) && !t.isImmediatePropagationStopped();) t.rnamespace && !1 !== f.namespace && !t.rnamespace.test(f.namespace) || (t.handleObj = f, t.data = f.data, void 0 !== (c = ((i.event.special[f.origType] || {}).handle || f.handler).apply(e.elem, s)) && !1 === (t.result = c) && (t.preventDefault(), t.stopPropagation()));
                return o.postDispatch && o.postDispatch.call(this, t), t.result
            }
        },
        handlers: function(n, t) {
            var f, h, u, e, o, c = [],
                s = t.delegateCount,
                r = n.target;
            if (s && r.nodeType && !("click" === n.type && 1 <= n.button))
                for (; r !== this; r = r.parentNode || this)
                    if (1 === r.nodeType && ("click" !== n.type || !0 !== r.disabled)) {
                        for (e = [], o = {}, f = 0; f < s; f++) void 0 === o[u = (h = t[f]).selector + " "] && (o[u] = h.needsContext ? -1 < i(u, this).index(r) : i.find(u, this, null, [r]).length), o[u] && e.push(h);
                        e.length && c.push({
                            elem: r,
                            handlers: e
                        })
                    } return r = this, s < t.length && c.push({
                elem: r,
                handlers: t.slice(s)
            }), c
        },
        addProp: function(n, t) {
            Object.defineProperty(i.Event.prototype, n, {
                enumerable: !0,
                configurable: !0,
                get: e(t) ? function() {
                    if (this.originalEvent) return t(this.originalEvent)
                } : function() {
                    if (this.originalEvent) return this.originalEvent[n]
                },
                set: function(t) {
                    Object.defineProperty(this, n, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: t
                    })
                }
            })
        },
        fix: function(n) {
            return n[i.expando] ? n : new i.Event(n)
        },
        special: {
            load: {
                noBubble: !0
            },
            click: {
                setup: function(n) {
                    var t = this || n;
                    return ri.test(t.type) && t.click && s(t, "input") && vi(t, "click", !0), !1
                },
                trigger: function(n) {
                    var t = this || n;
                    return ri.test(t.type) && t.click && s(t, "input") && vi(t, "click"), !0
                },
                _default: function(n) {
                    var t = n.target;
                    return ri.test(t.type) && t.click && s(t, "input") && r.get(t, "click") || s(t, "a")
                }
            },
            beforeunload: {
                postDispatch: function(n) {
                    void 0 !== n.result && n.originalEvent && (n.originalEvent.returnValue = n.result)
                }
            }
        }
    };
    i.removeEvent = function(n, t, i) {
        n.removeEventListener && n.removeEventListener(t, i)
    };
    i.Event = function(n, t) {
        if (!(this instanceof i.Event)) return new i.Event(n, t);
        n && n.type ? (this.originalEvent = n, this.type = n.type, this.isDefaultPrevented = n.defaultPrevented || void 0 === n.defaultPrevented && !1 === n.returnValue ? at : vt, this.target = n.target && 3 === n.target.nodeType ? n.target.parentNode : n.target, this.currentTarget = n.currentTarget, this.relatedTarget = n.relatedTarget) : this.type = n;
        t && i.extend(this, t);
        this.timeStamp = n && n.timeStamp || Date.now();
        this[i.expando] = !0
    };
    i.Event.prototype = {
        constructor: i.Event,
        isDefaultPrevented: vt,
        isPropagationStopped: vt,
        isImmediatePropagationStopped: vt,
        isSimulated: !1,
        preventDefault: function() {
            var n = this.originalEvent;
            this.isDefaultPrevented = at;
            n && !this.isSimulated && n.preventDefault()
        },
        stopPropagation: function() {
            var n = this.originalEvent;
            this.isPropagationStopped = at;
            n && !this.isSimulated && n.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var n = this.originalEvent;
            this.isImmediatePropagationStopped = at;
            n && !this.isSimulated && n.stopImmediatePropagation();
            this.stopPropagation()
        }
    };
    i.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: !0
    }, i.event.addProp);
    i.each({
        focus: "focusin",
        blur: "focusout"
    }, function(n, t) {
        function f(n) {
            if (u.documentMode) {
                var e = r.get(this, "handle"),
                    f = i.event.fix(n);
                f.type = "focusin" === n.type ? "focus" : "blur";
                f.isSimulated = !0;
                e(n);
                f.target === f.currentTarget && e(f)
            } else i.event.simulate(t, n.target, i.event.fix(n))
        }
        i.event.special[n] = {
            setup: function() {
                var i;
                if (vi(this, n, !0), !u.documentMode) return !1;
                (i = r.get(this, t)) || this.addEventListener(t, f);
                r.set(this, t, (i || 0) + 1)
            },
            trigger: function() {
                return vi(this, n), !0
            },
            teardown: function() {
                var n;
                if (!u.documentMode) return !1;
                (n = r.get(this, t) - 1) ? r.set(this, t, n): (this.removeEventListener(t, f), r.remove(this, t))
            },
            _default: function(t) {
                return r.get(t.target, n)
            },
            delegateType: t
        };
        i.event.special[t] = {
            setup: function() {
                var i = this.ownerDocument || this.document || this,
                    e = u.documentMode ? this : i,
                    o = r.get(e, t);
                o || (u.documentMode ? this.addEventListener(t, f) : i.addEventListener(n, f, !0));
                r.set(e, t, (o || 0) + 1)
            },
            teardown: function() {
                var e = this.ownerDocument || this.document || this,
                    i = u.documentMode ? this : e,
                    o = r.get(i, t) - 1;
                o ? r.set(i, t, o) : (u.documentMode ? this.removeEventListener(t, f) : e.removeEventListener(n, f, !0), r.remove(i, t))
            }
        }
    });
    i.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(n, t) {
        i.event.special[n] = {
            delegateType: t,
            bindType: t,
            handle: function(n) {
                var u, r = n.relatedTarget,
                    f = n.handleObj;
                return r && (r === this || i.contains(this, r)) || (n.type = f.origType, u = f.handler.apply(this, arguments), n.type = t), u
            }
        }
    });
    i.fn.extend({
        on: function(n, t, i, r) {
            return ir(this, n, t, i, r)
        },
        one: function(n, t, i, r) {
            return ir(this, n, t, i, r, 1)
        },
        off: function(n, t, r) {
            var u, f;
            if (n && n.preventDefault && n.handleObj) return u = n.handleObj, i(n.delegateTarget).off(u.namespace ? u.origType + "." + u.namespace : u.origType, u.selector, u.handler), this;
            if ("object" == typeof n) {
                for (f in n) this.off(f, t, n[f]);
                return this
            }
            return !1 !== t && "function" != typeof t || (r = t, t = void 0), !1 === r && (r = vt), this.each(function() {
                i.event.remove(this, n, r, t)
            })
        }
    });
    var io = /<script|<style|<link/i,
        ro = /checked\s*(?:[^=]|=\s*.checked.)/i,
        uo = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
    i.extend({
        htmlPrefilter: function(n) {
            return n
        },
        clone: function(n, t, r) {
            var u, h, o, e, c, a, v, s = n.cloneNode(!0),
                y = ct(n);
            if (!(f.noCloneChecked || 1 !== n.nodeType && 11 !== n.nodeType || i.isXMLDoc(n)))
                for (e = l(s), u = 0, h = (o = l(n)).length; u < h; u++) c = o[u], a = e[u], void 0, "input" === (v = a.nodeName.toLowerCase()) && ri.test(c.type) ? a.checked = c.checked : "input" !== v && "textarea" !== v || (a.defaultValue = c.defaultValue);
            if (t)
                if (r)
                    for (o = o || l(n), e = e || l(s), u = 0, h = o.length; u < h; u++) nf(o[u], e[u]);
                else nf(n, s);
            return 0 < (e = l(s, "script")).length && nr(e, !y && l(n, "script")), s
        },
        cleanData: function(n) {
            for (var u, t, f, o = i.event.special, e = 0; void 0 !== (t = n[e]); e++)
                if (ht(t)) {
                    if (u = t[r.expando]) {
                        if (u.events)
                            for (f in u.events) o[f] ? i.event.remove(t, f) : i.removeEvent(t, f, u.handle);
                        t[r.expando] = void 0
                    }
                    t[c.expando] && (t[c.expando] = void 0)
                }
        }
    });
    i.fn.extend({
        detach: function(n) {
            return tf(this, n, !0)
        },
        remove: function(n) {
            return tf(this, n)
        },
        text: function(n) {
            return g(this, function(n) {
                return void 0 === n ? i.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = n)
                })
            }, null, n, arguments.length)
        },
        append: function() {
            return yt(this, arguments, function(n) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || gu(this, n).appendChild(n)
            })
        },
        prepend: function() {
            return yt(this, arguments, function(n) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = gu(this, n);
                    t.insertBefore(n, t.firstChild)
                }
            })
        },
        before: function() {
            return yt(this, arguments, function(n) {
                this.parentNode && this.parentNode.insertBefore(n, this)
            })
        },
        after: function() {
            return yt(this, arguments, function(n) {
                this.parentNode && this.parentNode.insertBefore(n, this.nextSibling)
            })
        },
        empty: function() {
            for (var n, t = 0; null != (n = this[t]); t++) 1 === n.nodeType && (i.cleanData(l(n, !1)), n.textContent = "");
            return this
        },
        clone: function(n, t) {
            return n = null != n && n, t = null == t ? n : t, this.map(function() {
                return i.clone(this, n, t)
            })
        },
        html: function(n) {
            return g(this, function(n) {
                var t = this[0] || {},
                    r = 0,
                    u = this.length;
                if (void 0 === n && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof n && !io.test(n) && !v[(wu.exec(n) || ["", ""])[1].toLowerCase()]) {
                    n = i.htmlPrefilter(n);
                    try {
                        for (; r < u; r++) 1 === (t = this[r] || {}).nodeType && (i.cleanData(l(t, !1)), t.innerHTML = n);
                        t = 0
                    } catch (n) {}
                }
                t && this.empty().append(n)
            }, null, n, arguments.length)
        },
        replaceWith: function() {
            var n = [];
            return yt(this, arguments, function(t) {
                var r = this.parentNode;
                i.inArray(this, n) < 0 && (i.cleanData(l(this)), r && r.replaceChild(t, this))
            }, n)
        }
    });
    i.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(n, t) {
        i.fn[n] = function(n) {
            for (var u, f = [], e = i(n), o = e.length - 1, r = 0; r <= o; r++) u = r === o ? this : this.clone(!0), i(e[r])[t](u), ei.apply(f, u.get());
            return this.pushStack(f)
        }
    });
    var rr = new RegExp("^(" + yu + ")(?!px)[a-z%]+$", "i"),
        ur = /^--/,
        yi = function(t) {
            var i = t.ownerDocument.defaultView;
            return i && i.opener || (i = n), i.getComputedStyle(t)
        },
        rf = function(n, t, i) {
            var u, r, f = {};
            for (r in t) f[r] = n.style[r], n.style[r] = t[r];
            for (r in u = i.call(n), t) n.style[r] = f[r];
            return u
        },
        oo = new RegExp(nt.join("|"), "i");
    ! function() {
        function r() {
            if (t) {
                s.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0";
                t.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%";
                tt.appendChild(s).appendChild(t);
                var i = n.getComputedStyle(t);
                h = "1%" !== i.top;
                v = 12 === e(i.marginLeft);
                t.style.right = "60%";
                a = 36 === e(i.right);
                c = 36 === e(i.width);
                t.style.position = "absolute";
                l = 12 === e(t.offsetWidth / 3);
                tt.removeChild(s);
                t = null
            }
        }

        function e(n) {
            return Math.round(parseFloat(n))
        }
        var h, c, l, a, o, v, s = u.createElement("div"),
            t = u.createElement("div");
        t.style && (t.style.backgroundClip = "content-box", t.cloneNode(!0).style.backgroundClip = "", f.clearCloneStyle = "content-box" === t.style.backgroundClip, i.extend(f, {
            boxSizingReliable: function() {
                return r(), c
            },
            pixelBoxStyles: function() {
                return r(), a
            },
            pixelPosition: function() {
                return r(), h
            },
            reliableMarginLeft: function() {
                return r(), v
            },
            scrollboxSize: function() {
                return r(), l
            },
            reliableTrDimensions: function() {
                var i, t, r, f;
                return null == o && (i = u.createElement("table"), t = u.createElement("tr"), r = u.createElement("div"), i.style.cssText = "position:absolute;left:-11111px;border-collapse:separate", t.style.cssText = "border:1px solid", t.style.height = "1px", r.style.height = "9px", r.style.display = "block", tt.appendChild(i).appendChild(t).appendChild(r), f = n.getComputedStyle(t), o = parseInt(f.height, 10) + parseInt(f.borderTopWidth, 10) + parseInt(f.borderBottomWidth, 10) === t.offsetHeight, tt.removeChild(i)), o
            }
        }))
    }();
    var ff = ["Webkit", "Moz", "ms"],
        ef = u.createElement("div").style,
        of = {};
    var so = /^(none|table(?!-c[ea]).+)/,
        ho = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        sf = {
            letterSpacing: "0",
            fontWeight: "400"
        };
    i.extend({
        cssHooks: {
            opacity: {
                get: function(n, t) {
                    if (t) {
                        var i = ui(n, "opacity");
                        return "" === i ? "1" : i
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            aspectRatio: !0,
            borderImageSlice: !0,
            columnCount: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            scale: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
            fillOpacity: !0,
            floodOpacity: !0,
            stopOpacity: !0,
            strokeMiterlimit: !0,
            strokeOpacity: !0
        },
        cssProps: {},
        style: function(n, t, r, u) {
            if (n && 3 !== n.nodeType && 8 !== n.nodeType && n.style) {
                var e, h, o, c = k(t),
                    l = ur.test(t),
                    s = n.style;
                if (l || (t = fr(c)), o = i.cssHooks[t] || i.cssHooks[c], void 0 === r) return o && "get" in o && void 0 !== (e = o.get(n, !1, u)) ? e : s[t];
                "string" == (h = typeof r) && (e = ti.exec(r)) && e[1] && (r = pu(n, t, e), h = "number");
                null != r && r == r && ("number" !== h || l || (r += e && e[3] || (i.cssNumber[c] ? "" : "px")), f.clearCloneStyle || "" !== r || 0 !== t.indexOf("background") || (s[t] = "inherit"), o && "set" in o && void 0 === (r = o.set(n, r, u)) || (l ? s.setProperty(t, r) : s[t] = r))
            }
        },
        css: function(n, t, r, u) {
            var f, e, o, s = k(t);
            return ur.test(t) || (t = fr(s)), (o = i.cssHooks[t] || i.cssHooks[s]) && "get" in o && (f = o.get(n, !0, r)), void 0 === f && (f = ui(n, t, u)), "normal" === f && t in sf && (f = sf[t]), "" === r || r ? (e = parseFloat(f), !0 === r || isFinite(e) ? e || 0 : f) : f
        }
    });
    i.each(["height", "width"], function(n, t) {
        i.cssHooks[t] = {
            get: function(n, r, u) {
                if (r) return !so.test(i.css(n, "display")) || n.getClientRects().length && n.getBoundingClientRect().width ? cf(n, t, u) : rf(n, ho, function() {
                    return cf(n, t, u)
                })
            },
            set: function(n, r, u) {
                var s, e = yi(n),
                    h = !f.scrollboxSize() && "absolute" === e.position,
                    c = (h || u) && "border-box" === i.css(n, "boxSizing", !1, e),
                    o = u ? er(n, t, u, c, e) : 0;
                return c && h && (o -= Math.ceil(n["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(e[t]) - er(n, t, "border", !1, e) - .5)), o && (s = ti.exec(r)) && "px" !== (s[3] || "px") && (n.style[t] = r, r = i.css(n, t)), hf(0, r, o)
            }
        }
    });
    i.cssHooks.marginLeft = uf(f.reliableMarginLeft, function(n, t) {
        if (t) return (parseFloat(ui(n, "marginLeft")) || n.getBoundingClientRect().left - rf(n, {
            marginLeft: 0
        }, function() {
            return n.getBoundingClientRect().left
        })) + "px"
    });
    i.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(n, t) {
        i.cssHooks[n + t] = {
            expand: function(i) {
                for (var r = 0, f = {}, u = "string" == typeof i ? i.split(" ") : [i]; r < 4; r++) f[n + nt[r] + t] = u[r] || u[r - 2] || u[0];
                return f
            }
        };
        "margin" !== n && (i.cssHooks[n + t].set = hf)
    });
    i.fn.extend({
        css: function(n, t) {
            return g(this, function(n, t, r) {
                var f, e, o = {},
                    u = 0;
                if (Array.isArray(t)) {
                    for (f = yi(n), e = t.length; u < e; u++) o[t[u]] = i.css(n, t[u], !1, f);
                    return o
                }
                return void 0 !== r ? i.style(n, t, r) : i.css(n, t)
            }, n, t, 1 < arguments.length)
        }
    });
    ((i.Tween = p).prototype = {
        constructor: p,
        init: function(n, t, r, u, f, e) {
            this.elem = n;
            this.prop = r;
            this.easing = f || i.easing._default;
            this.options = t;
            this.start = this.now = this.cur();
            this.end = u;
            this.unit = e || (i.cssNumber[r] ? "" : "px")
        },
        cur: function() {
            var n = p.propHooks[this.prop];
            return n && n.get ? n.get(this) : p.propHooks._default.get(this)
        },
        run: function(n) {
            var t, r = p.propHooks[this.prop];
            return this.pos = this.options.duration ? t = i.easing[this.easing](n, this.options.duration * n, 0, 1, this.options.duration) : t = n, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), r && r.set ? r.set(this) : p.propHooks._default.set(this), this
        }
    }).init.prototype = p.prototype;
    (p.propHooks = {
        _default: {
            get: function(n) {
                var t;
                return 1 !== n.elem.nodeType || null != n.elem[n.prop] && null == n.elem.style[n.prop] ? n.elem[n.prop] : (t = i.css(n.elem, n.prop, "")) && "auto" !== t ? t : 0
            },
            set: function(n) {
                i.fx.step[n.prop] ? i.fx.step[n.prop](n) : 1 !== n.elem.nodeType || !i.cssHooks[n.prop] && null == n.elem.style[fr(n.prop)] ? n.elem[n.prop] = n.now : i.style(n.elem, n.prop, n.now + n.unit)
            }
        }
    }).scrollTop = p.propHooks.scrollLeft = {
        set: function(n) {
            n.elem.nodeType && n.elem.parentNode && (n.elem[n.prop] = n.now)
        }
    };
    i.easing = {
        linear: function(n) {
            return n
        },
        swing: function(n) {
            return .5 - Math.cos(n * Math.PI) / 2
        },
        _default: "swing"
    };
    i.fx = p.prototype.init;
    i.fx.step = {};
    af = /^(?:toggle|show|hide)$/;
    vf = /queueHooks$/;
    i.Animation = i.extend(w, {
        tweeners: {
            "*": [function(n, t) {
                var i = this.createTween(n, t);
                return pu(i.elem, n, ti.exec(t), i), i
            }]
        },
        tweener: function(n, t) {
            e(n) ? (t = n, n = ["*"]) : n = n.match(y);
            for (var i, r = 0, u = n.length; r < u; r++) i = n[r], w.tweeners[i] = w.tweeners[i] || [], w.tweeners[i].unshift(t)
        },
        prefilters: [function(n, t, u) {
            var f, y, w, c, b, h, o, l, k = "width" in t || "height" in t,
                v = this,
                p = {},
                s = n.style,
                a = n.nodeType && ii(n),
                e = r.get(n, "fxshow");
            for (f in u.queue || (null == (c = i._queueHooks(n, "fx")).unqueued && (c.unqueued = 0, b = c.empty.fire, c.empty.fire = function() {
                    c.unqueued || b()
                }), c.unqueued++, v.always(function() {
                    v.always(function() {
                        c.unqueued--;
                        i.queue(n, "fx").length || c.empty.fire()
                    })
                })), t)
                if (y = t[f], af.test(y)) {
                    if (delete t[f], w = w || "toggle" === y, y === (a ? "hide" : "show")) {
                        if ("show" !== y || !e || void 0 === e[f]) continue;
                        a = !0
                    }
                    p[f] = e && e[f] || i.style(n, f)
                } if ((h = !i.isEmptyObject(t)) || !i.isEmptyObject(p))
                for (f in k && 1 === n.nodeType && (u.overflow = [s.overflow, s.overflowX, s.overflowY], null == (o = e && e.display) && (o = r.get(n, "display")), "none" === (l = i.css(n, "display")) && (o ? l = o : (lt([n], !0), o = n.style.display || o, l = i.css(n, "display"), lt([n]))), ("inline" === l || "inline-block" === l && null != o) && "none" === i.css(n, "float") && (h || (v.done(function() {
                        s.display = o
                    }), null == o && (l = s.display, o = "none" === l ? "" : l)), s.display = "inline-block")), u.overflow && (s.overflow = "hidden", v.always(function() {
                        s.overflow = u.overflow[0];
                        s.overflowX = u.overflow[1];
                        s.overflowY = u.overflow[2]
                    })), h = !1, p) h || (e ? "hidden" in e && (a = e.hidden) : e = r.access(n, "fxshow", {
                    display: o
                }), w && (e.hidden = !a), a && lt([n], !0), v.done(function() {
                    for (f in a || lt([n]), r.remove(n, "fxshow"), p) i.style(n, f, p[f])
                })), h = pf(a ? e[f] : 0, f, v), f in e || (e[f] = h.start, a && (h.end = h.start, h.start = 0))
        }],
        prefilter: function(n, t) {
            t ? w.prefilters.unshift(n) : w.prefilters.push(n)
        }
    });
    i.speed = function(n, t, r) {
        var u = n && "object" == typeof n ? i.extend({}, n) : {
            complete: r || !r && t || e(n) && n,
            duration: n,
            easing: r && t || t && !e(t) && t
        };
        return i.fx.off ? u.duration = 0 : "number" != typeof u.duration && (u.duration = u.duration in i.fx.speeds ? i.fx.speeds[u.duration] : i.fx.speeds._default), null != u.queue && !0 !== u.queue || (u.queue = "fx"), u.old = u.complete, u.complete = function() {
            e(u.old) && u.old.call(this);
            u.queue && i.dequeue(this, u.queue)
        }, u
    };
    i.fn.extend({
        fadeTo: function(n, t, i, r) {
            return this.filter(ii).css("opacity", 0).show().end().animate({
                opacity: t
            }, n, i, r)
        },
        animate: function(n, t, u, f) {
            var s = i.isEmptyObject(n),
                o = i.speed(t, u, f),
                e = function() {
                    var t = w(this, i.extend({}, n), o);
                    (s || r.get(this, "finish")) && t.stop(!0)
                };
            return e.finish = e, s || !1 === o.queue ? this.each(e) : this.queue(o.queue, e)
        },
        stop: function(n, t, u) {
            var f = function(n) {
                var t = n.stop;
                delete n.stop;
                t(u)
            };
            return "string" != typeof n && (u = t, t = n, n = void 0), t && this.queue(n || "fx", []), this.each(function() {
                var s = !0,
                    t = null != n && n + "queueHooks",
                    o = i.timers,
                    e = r.get(this);
                if (t) e[t] && e[t].stop && f(e[t]);
                else
                    for (t in e) e[t] && e[t].stop && vf.test(t) && f(e[t]);
                for (t = o.length; t--;) o[t].elem !== this || null != n && o[t].queue !== n || (o[t].anim.stop(u), s = !1, o.splice(t, 1));
                !s && u || i.dequeue(this, n)
            })
        },
        finish: function(n) {
            return !1 !== n && (n = n || "fx"), this.each(function() {
                var t, e = r.get(this),
                    u = e[n + "queue"],
                    o = e[n + "queueHooks"],
                    f = i.timers,
                    s = u ? u.length : 0;
                for (e.finish = !0, i.queue(this, n, []), o && o.stop && o.stop.call(this, !0), t = f.length; t--;) f[t].elem === this && f[t].queue === n && (f[t].anim.stop(!0), f.splice(t, 1));
                for (t = 0; t < s; t++) u[t] && u[t].finish && u[t].finish.call(this);
                delete e.finish
            })
        }
    });
    i.each(["toggle", "show", "hide"], function(n, t) {
        var r = i.fn[t];
        i.fn[t] = function(n, i, u) {
            return null == n || "boolean" == typeof n ? r.apply(this, arguments) : this.animate(wi(t, !0), n, i, u)
        }
    });
    i.each({
        slideDown: wi("show"),
        slideUp: wi("hide"),
        slideToggle: wi("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(n, t) {
        i.fn[n] = function(n, i, r) {
            return this.animate(t, n, i, r)
        }
    });
    i.timers = [];
    i.fx.tick = function() {
        var r, n = 0,
            t = i.timers;
        for (pt = Date.now(); n < t.length; n++)(r = t[n])() || t[n] !== r || t.splice(n--, 1);
        t.length || i.fx.stop();
        pt = void 0
    };
    i.fx.timer = function(n) {
        i.timers.push(n);
        i.fx.start()
    };
    i.fx.interval = 13;
    i.fx.start = function() {
        pi || (pi = !0, or())
    };
    i.fx.stop = function() {
        pi = null
    };
    i.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    };
    i.fn.delay = function(t, r) {
        return t = i.fx && i.fx.speeds[t] || t, r = r || "fx", this.queue(r, function(i, r) {
            var u = n.setTimeout(i, t);
            r.stop = function() {
                n.clearTimeout(u)
            }
        })
    };
    wt = u.createElement("input");
    lf = u.createElement("select").appendChild(u.createElement("option"));
    wt.type = "checkbox";
    f.checkOn = "" !== wt.value;
    f.optSelected = lf.selected;
    (wt = u.createElement("input")).value = "t";
    wt.type = "radio";
    f.radioValue = "t" === wt.value;
    bt = i.expr.attrHandle;
    i.fn.extend({
        attr: function(n, t) {
            return g(this, i.attr, n, t, 1 < arguments.length)
        },
        removeAttr: function(n) {
            return this.each(function() {
                i.removeAttr(this, n)
            })
        }
    });
    i.extend({
        attr: function(n, t, r) {
            var f, u, e = n.nodeType;
            if (3 !== e && 8 !== e && 2 !== e) return "undefined" == typeof n.getAttribute ? i.prop(n, t, r) : (1 === e && i.isXMLDoc(n) || (u = i.attrHooks[t.toLowerCase()] || (i.expr.match.bool.test(t) ? wf : void 0)), void 0 !== r ? null === r ? void i.removeAttr(n, t) : u && "set" in u && void 0 !== (f = u.set(n, r, t)) ? f : (n.setAttribute(t, r + ""), r) : u && "get" in u && null !== (f = u.get(n, t)) ? f : null == (f = i.find.attr(n, t)) ? void 0 : f)
        },
        attrHooks: {
            type: {
                set: function(n, t) {
                    if (!f.radioValue && "radio" === t && s(n, "input")) {
                        var i = n.value;
                        return n.setAttribute("type", t), i && (n.value = i), t
                    }
                }
            }
        },
        removeAttr: function(n, t) {
            var i, u = 0,
                r = t && t.match(y);
            if (r && 1 === n.nodeType)
                while (i = r[u++]) n.removeAttribute(i)
        }
    });
    wf = {
        set: function(n, t, r) {
            return !1 === t ? i.removeAttr(n, r) : n.setAttribute(r, r), r
        }
    };
    i.each(i.expr.match.bool.source.match(/\w+/g), function(n, t) {
        var r = bt[t] || i.find.attr;
        bt[t] = function(n, t, i) {
            var f, e, u = t.toLowerCase();
            return i || (e = bt[u], bt[u] = f, f = null != r(n, t, i) ? u : null, bt[u] = e), f
        }
    });
    bf = /^(?:input|select|textarea|button)$/i;
    kf = /^(?:a|area)$/i;
    i.fn.extend({
        prop: function(n, t) {
            return g(this, i.prop, n, t, 1 < arguments.length)
        },
        removeProp: function(n) {
            return this.each(function() {
                delete this[i.propFix[n] || n]
            })
        }
    });
    i.extend({
        prop: function(n, t, r) {
            var f, u, e = n.nodeType;
            if (3 !== e && 8 !== e && 2 !== e) return 1 === e && i.isXMLDoc(n) || (t = i.propFix[t] || t, u = i.propHooks[t]), void 0 !== r ? u && "set" in u && void 0 !== (f = u.set(n, r, t)) ? f : n[t] = r : u && "get" in u && null !== (f = u.get(n, t)) ? f : n[t]
        },
        propHooks: {
            tabIndex: {
                get: function(n) {
                    var t = i.find.attr(n, "tabindex");
                    return t ? parseInt(t, 10) : bf.test(n.nodeName) || kf.test(n.nodeName) && n.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    });
    f.optSelected || (i.propHooks.selected = {
        get: function(n) {
            var t = n.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        },
        set: function(n) {
            var t = n.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    });
    i.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        i.propFix[this.toLowerCase()] = this
    });
    i.fn.extend({
        addClass: function(n) {
            var u, t, f, o, r, s;
            return e(n) ? this.each(function(t) {
                i(this).addClass(n.call(this, t, ut(this)))
            }) : (u = sr(n)).length ? this.each(function() {
                if (f = ut(this), t = 1 === this.nodeType && " " + rt(f) + " ") {
                    for (r = 0; r < u.length; r++) o = u[r], t.indexOf(" " + o + " ") < 0 && (t += o + " ");
                    s = rt(t);
                    f !== s && this.setAttribute("class", s)
                }
            }) : this
        },
        removeClass: function(n) {
            var u, t, f, o, r, s;
            return e(n) ? this.each(function(t) {
                i(this).removeClass(n.call(this, t, ut(this)))
            }) : arguments.length ? (u = sr(n)).length ? this.each(function() {
                if (f = ut(this), t = 1 === this.nodeType && " " + rt(f) + " ") {
                    for (r = 0; r < u.length; r++)
                        for (o = u[r]; - 1 < t.indexOf(" " + o + " ");) t = t.replace(" " + o + " ", " ");
                    s = rt(t);
                    f !== s && this.setAttribute("class", s)
                }
            }) : this : this.attr("class", "")
        },
        toggleClass: function(n, t) {
            var s, u, f, o, h = typeof n,
                c = "string" === h || Array.isArray(n);
            return e(n) ? this.each(function(r) {
                i(this).toggleClass(n.call(this, r, ut(this), t), t)
            }) : "boolean" == typeof t && c ? t ? this.addClass(n) : this.removeClass(n) : (s = sr(n), this.each(function() {
                if (c)
                    for (o = i(this), f = 0; f < s.length; f++) u = s[f], o.hasClass(u) ? o.removeClass(u) : o.addClass(u);
                else void 0 !== n && "boolean" !== h || ((u = ut(this)) && r.set(this, "__className__", u), this.setAttribute && this.setAttribute("class", u || !1 === n ? "" : r.get(this, "__className__") || ""))
            }))
        },
        hasClass: function(n) {
            for (var t, r = 0, i = " " + n + " "; t = this[r++];)
                if (1 === t.nodeType && -1 < (" " + rt(ut(t)) + " ").indexOf(i)) return !0;
            return !1
        }
    });
    df = /\r/g;
    i.fn.extend({
        val: function(n) {
            var t, r, f, u = this[0];
            return arguments.length ? (f = e(n), this.each(function(r) {
                var u;
                1 === this.nodeType && (null == (u = f ? n.call(this, r, i(this).val()) : n) ? u = "" : "number" == typeof u ? u += "" : Array.isArray(u) && (u = i.map(u, function(n) {
                    return null == n ? "" : n + ""
                })), (t = i.valHooks[this.type] || i.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, u, "value") || (this.value = u))
            })) : u ? (t = i.valHooks[u.type] || i.valHooks[u.nodeName.toLowerCase()]) && "get" in t && void 0 !== (r = t.get(u, "value")) ? r : "string" == typeof(r = u.value) ? r.replace(df, "") : null == r ? "" : r : void 0
        }
    });
    i.extend({
        valHooks: {
            option: {
                get: function(n) {
                    var t = i.find.attr(n, "value");
                    return null != t ? t : rt(i.text(n))
                }
            },
            select: {
                get: function(n) {
                    for (var e, t, o = n.options, u = n.selectedIndex, f = "select-one" === n.type, h = f ? null : [], c = f ? u + 1 : o.length, r = u < 0 ? c : f ? u : 0; r < c; r++)
                        if (((t = o[r]).selected || r === u) && !t.disabled && (!t.parentNode.disabled || !s(t.parentNode, "optgroup"))) {
                            if (e = i(t).val(), f) return e;
                            h.push(e)
                        } return h
                },
                set: function(n, t) {
                    for (var r, u, f = n.options, e = i.makeArray(t), o = f.length; o--;)((u = f[o]).selected = -1 < i.inArray(i.valHooks.option.get(u), e)) && (r = !0);
                    return r || (n.selectedIndex = -1), e
                }
            }
        }
    });
    i.each(["radio", "checkbox"], function() {
        i.valHooks[this] = {
            set: function(n, t) {
                if (Array.isArray(t)) return n.checked = -1 < i.inArray(i(n).val(), t)
            }
        };
        f.checkOn || (i.valHooks[this].get = function(n) {
            return null === n.getAttribute("value") ? "on" : n.value
        })
    });
    var fi = n.location,
        gf = {
            guid: Date.now()
        },
        hr = /\?/;
    i.parseXML = function(t) {
        var r, u;
        if (!t || "string" != typeof t) return null;
        try {
            r = (new n.DOMParser).parseFromString(t, "text/xml")
        } catch (t) {}
        return u = r && r.getElementsByTagName("parsererror")[0], r && !u || i.error("Invalid XML: " + (u ? i.map(u.childNodes, function(n) {
            return n.textContent
        }).join("\n") : t)), r
    };
    cr = /^(?:focusinfocus|focusoutblur)$/;
    lr = function(n) {
        n.stopPropagation()
    };
    i.extend(i.event, {
        trigger: function(t, f, o, s) {
            var k, c, l, d, v, y, a, p, w = [o || u],
                h = dt.call(t, "type") ? t.type : t,
                b = dt.call(t, "namespace") ? t.namespace.split(".") : [];
            if (c = p = l = o = o || u, 3 !== o.nodeType && 8 !== o.nodeType && !cr.test(h + i.event.triggered) && (-1 < h.indexOf(".") && (h = (b = h.split(".")).shift(), b.sort()), v = h.indexOf(":") < 0 && "on" + h, (t = t[i.expando] ? t : new i.Event(h, "object" == typeof t && t)).isTrigger = s ? 2 : 3, t.namespace = b.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + b.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = o), f = null == f ? [t] : i.makeArray(f, [t]), a = i.event.special[h] || {}, s || !a.trigger || !1 !== a.trigger.apply(o, f))) {
                if (!s && !a.noBubble && !ft(o)) {
                    for (d = a.delegateType || h, cr.test(d + h) || (c = c.parentNode); c; c = c.parentNode) w.push(c), l = c;
                    l === (o.ownerDocument || u) && w.push(l.defaultView || l.parentWindow || n)
                }
                for (k = 0;
                    (c = w[k++]) && !t.isPropagationStopped();) p = c, t.type = 1 < k ? d : a.bindType || h, (y = (r.get(c, "events") || Object.create(null))[t.type] && r.get(c, "handle")) && y.apply(c, f), (y = v && c[v]) && y.apply && ht(c) && (t.result = y.apply(c, f), !1 === t.result && t.preventDefault());
                return t.type = h, s || t.isDefaultPrevented() || a._default && !1 !== a._default.apply(w.pop(), f) || !ht(o) || v && e(o[h]) && !ft(o) && ((l = o[v]) && (o[v] = null), i.event.triggered = h, t.isPropagationStopped() && p.addEventListener(h, lr), o[h](), t.isPropagationStopped() && p.removeEventListener(h, lr), i.event.triggered = void 0, l && (o[v] = l)), t.result
            }
        },
        simulate: function(n, t, r) {
            var u = i.extend(new i.Event, r, {
                type: n,
                isSimulated: !0
            });
            i.event.trigger(u, null, t)
        }
    });
    i.fn.extend({
        trigger: function(n, t) {
            return this.each(function() {
                i.event.trigger(n, t, this)
            })
        },
        triggerHandler: function(n, t) {
            var r = this[0];
            if (r) return i.event.trigger(n, t, r, !0)
        }
    });
    var co = /\[\]$/,
        ne = /\r?\n/g,
        lo = /^(?:submit|button|image|reset|file)$/i,
        ao = /^(?:input|select|textarea|keygen)/i;
    i.param = function(n, t) {
        var r, u = [],
            f = function(n, t) {
                var i = e(t) ? t() : t;
                u[u.length] = encodeURIComponent(n) + "=" + encodeURIComponent(null == i ? "" : i)
            };
        if (null == n) return "";
        if (Array.isArray(n) || n.jquery && !i.isPlainObject(n)) i.each(n, function() {
            f(this.name, this.value)
        });
        else
            for (r in n) ar(r, n[r], t, f);
        return u.join("&")
    };
    i.fn.extend({
        serialize: function() {
            return i.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var n = i.prop(this, "elements");
                return n ? i.makeArray(n) : this
            }).filter(function() {
                var n = this.type;
                return this.name && !i(this).is(":disabled") && ao.test(this.nodeName) && !lo.test(n) && (this.checked || !ri.test(n))
            }).map(function(n, t) {
                var r = i(this).val();
                return null == r ? null : Array.isArray(r) ? i.map(r, function(n) {
                    return {
                        name: t.name,
                        value: n.replace(ne, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: r.replace(ne, "\r\n")
                }
            }).get()
        }
    });
    var vo = /%20/g,
        yo = /#.*$/,
        po = /([?&])_=[^&]*/,
        wo = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        bo = /^(?:GET|HEAD)$/,
        ko = /^\/\//,
        te = {},
        vr = {},
        ie = "*/".concat("*"),
        yr = u.createElement("a");
    return yr.href = fi.href, i.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: fi.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(fi.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": ie,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": i.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(n, t) {
            return t ? pr(pr(n, i.ajaxSettings), t) : pr(i.ajaxSettings, n)
        },
        ajaxPrefilter: re(te),
        ajaxTransport: re(vr),
        ajax: function(t, r) {
            function b(t, r, u, c) {
                var y, rt, b, p, g, a = r;
                s || (s = !0, d && n.clearTimeout(d), l = void 0, k = c || "", e.readyState = 0 < t ? 4 : 0, y = 200 <= t && t < 300 || 304 === t, u && (p = function(n, t, i) {
                    for (var e, u, f, o, s = n.contents, r = n.dataTypes;
                        "*" === r[0];) r.shift(), void 0 === e && (e = n.mimeType || t.getResponseHeader("Content-Type"));
                    if (e)
                        for (u in s)
                            if (s[u] && s[u].test(e)) {
                                r.unshift(u);
                                break
                            } if (r[0] in i) f = r[0];
                    else {
                        for (u in i) {
                            if (!r[0] || n.converters[u + " " + r[0]]) {
                                f = u;
                                break
                            }
                            o || (o = u)
                        }
                        f = f || o
                    }
                    if (f) return f !== r[0] && r.unshift(f), i[f]
                }(f, e, u)), !y && -1 < i.inArray("script", f.dataTypes) && i.inArray("json", f.dataTypes) < 0 && (f.converters["text script"] = function() {}), p = function(n, t, i, r) {
                    var h, u, f, s, e, o = {},
                        c = n.dataTypes.slice();
                    if (c[1])
                        for (f in n.converters) o[f.toLowerCase()] = n.converters[f];
                    for (u = c.shift(); u;)
                        if (n.responseFields[u] && (i[n.responseFields[u]] = t), !e && r && n.dataFilter && (t = n.dataFilter(t, n.dataType)), e = u, u = c.shift())
                            if ("*" === u) u = e;
                            else if ("*" !== e && e !== u) {
                        if (!(f = o[e + " " + u] || o["* " + u]))
                            for (h in o)
                                if ((s = h.split(" "))[1] === u && (f = o[e + " " + s[0]] || o["* " + s[0]])) {
                                    !0 === f ? f = o[h] : !0 !== o[h] && (u = s[0], c.unshift(s[1]));
                                    break
                                } if (!0 !== f)
                            if (f && n.throws) t = f(t);
                            else try {
                                t = f(t)
                            } catch (n) {
                                return {
                                    state: "parsererror",
                                    error: f ? n : "No conversion from " + e + " to " + u
                                }
                            }
                    }
                    return {
                        state: "success",
                        data: t
                    }
                }(f, p, e, y), y ? (f.ifModified && ((g = e.getResponseHeader("Last-Modified")) && (i.lastModified[o] = g), (g = e.getResponseHeader("etag")) && (i.etag[o] = g)), 204 === t || "HEAD" === f.type ? a = "nocontent" : 304 === t ? a = "notmodified" : (a = p.state, rt = p.data, y = !(b = p.error))) : (b = a, !t && a || (a = "error", t < 0 && (t = 0))), e.status = t, e.statusText = (r || a) + "", y ? tt.resolveWith(h, [rt, a, e]) : tt.rejectWith(h, [e, a, b]), e.statusCode(w), w = void 0, v && nt.trigger(y ? "ajaxSuccess" : "ajaxError", [e, f, y ? rt : b]), it.fireWith(h, [e, a]), v && (nt.trigger("ajaxComplete", [e, f]), --i.active || i.event.trigger("ajaxStop")))
            }
            "object" == typeof t && (r = t, t = void 0);
            r = r || {};
            var l, o, k, a, d, c, s, v, g, p, f = i.ajaxSetup({}, r),
                h = f.context || f,
                nt = f.context && (h.nodeType || h.jquery) ? i(h) : i.event,
                tt = i.Deferred(),
                it = i.Callbacks("once memory"),
                w = f.statusCode || {},
                rt = {},
                ut = {},
                ft = "canceled",
                e = {
                    readyState: 0,
                    getResponseHeader: function(n) {
                        var t;
                        if (s) {
                            if (!a)
                                for (a = {}; t = wo.exec(k);) a[t[1].toLowerCase() + " "] = (a[t[1].toLowerCase() + " "] || []).concat(t[2]);
                            t = a[n.toLowerCase() + " "]
                        }
                        return null == t ? null : t.join(", ")
                    },
                    getAllResponseHeaders: function() {
                        return s ? k : null
                    },
                    setRequestHeader: function(n, t) {
                        return null == s && (n = ut[n.toLowerCase()] = ut[n.toLowerCase()] || n, rt[n] = t), this
                    },
                    overrideMimeType: function(n) {
                        return null == s && (f.mimeType = n), this
                    },
                    statusCode: function(n) {
                        var t;
                        if (n)
                            if (s) e.always(n[e.status]);
                            else
                                for (t in n) w[t] = [w[t], n[t]];
                        return this
                    },
                    abort: function(n) {
                        var t = n || ft;
                        return l && l.abort(t), b(0, t), this
                    }
                };
            if (tt.promise(e), f.url = ((t || f.url || fi.href) + "").replace(ko, fi.protocol + "//"), f.type = r.method || r.type || f.method || f.type, f.dataTypes = (f.dataType || "*").toLowerCase().match(y) || [""], null == f.crossDomain) {
                c = u.createElement("a");
                try {
                    c.href = f.url;
                    c.href = c.href;
                    f.crossDomain = yr.protocol + "//" + yr.host != c.protocol + "//" + c.host
                } catch (t) {
                    f.crossDomain = !0
                }
            }
            if (f.data && f.processData && "string" != typeof f.data && (f.data = i.param(f.data, f.traditional)), ue(te, f, r, e), s) return e;
            for (g in (v = i.event && f.global) && 0 == i.active++ && i.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !bo.test(f.type), o = f.url.replace(yo, ""), f.hasContent ? f.data && f.processData && 0 === (f.contentType || "").indexOf("application/x-www-form-urlencoded") && (f.data = f.data.replace(vo, "+")) : (p = f.url.slice(o.length), f.data && (f.processData || "string" == typeof f.data) && (o += (hr.test(o) ? "&" : "?") + f.data, delete f.data), !1 === f.cache && (o = o.replace(po, "$1"), p = (hr.test(o) ? "&" : "?") + "_=" + gf.guid++ + p), f.url = o + p), f.ifModified && (i.lastModified[o] && e.setRequestHeader("If-Modified-Since", i.lastModified[o]), i.etag[o] && e.setRequestHeader("If-None-Match", i.etag[o])), (f.data && f.hasContent && !1 !== f.contentType || r.contentType) && e.setRequestHeader("Content-Type", f.contentType), e.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + ie + "; q=0.01" : "") : f.accepts["*"]), f.headers) e.setRequestHeader(g, f.headers[g]);
            if (f.beforeSend && (!1 === f.beforeSend.call(h, e, f) || s)) return e.abort();
            if (ft = "abort", it.add(f.complete), e.done(f.success), e.fail(f.error), l = ue(vr, f, r, e)) {
                if (e.readyState = 1, v && nt.trigger("ajaxSend", [e, f]), s) return e;
                f.async && 0 < f.timeout && (d = n.setTimeout(function() {
                    e.abort("timeout")
                }, f.timeout));
                try {
                    s = !1;
                    l.send(rt, b)
                } catch (t) {
                    if (s) throw t;
                    b(-1, t)
                }
            } else b(-1, "No Transport");
            return e
        },
        getJSON: function(n, t, r) {
            return i.get(n, t, r, "json")
        },
        getScript: function(n, t) {
            return i.get(n, void 0, t, "script")
        }
    }), i.each(["get", "post"], function(n, t) {
        i[t] = function(n, r, u, f) {
            return e(r) && (f = f || u, u = r, r = void 0), i.ajax(i.extend({
                url: n,
                type: t,
                dataType: f,
                data: r,
                success: u
            }, i.isPlainObject(n) && n))
        }
    }), i.ajaxPrefilter(function(n) {
        for (var t in n.headers) "content-type" === t.toLowerCase() && (n.contentType = n.headers[t] || "")
    }), i._evalUrl = function(n, t, r) {
        return i.ajax({
            url: n,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            converters: {
                "text script": function() {}
            },
            dataFilter: function(n) {
                i.globalEval(n, t, r)
            }
        })
    }, i.fn.extend({
        wrapAll: function(n) {
            var t;
            return this[0] && (e(n) && (n = n.call(this[0])), t = i(n, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                for (var n = this; n.firstElementChild;) n = n.firstElementChild;
                return n
            }).append(this)), this
        },
        wrapInner: function(n) {
            return e(n) ? this.each(function(t) {
                i(this).wrapInner(n.call(this, t))
            }) : this.each(function() {
                var t = i(this),
                    r = t.contents();
                r.length ? r.wrapAll(n) : t.append(n)
            })
        },
        wrap: function(n) {
            var t = e(n);
            return this.each(function(r) {
                i(this).wrapAll(t ? n.call(this, r) : n)
            })
        },
        unwrap: function(n) {
            return this.parent(n).not("body").each(function() {
                i(this).replaceWith(this.childNodes)
            }), this
        }
    }), i.expr.pseudos.hidden = function(n) {
        return !i.expr.pseudos.visible(n)
    }, i.expr.pseudos.visible = function(n) {
        return !!(n.offsetWidth || n.offsetHeight || n.getClientRects().length)
    }, i.ajaxSettings.xhr = function() {
        try {
            return new n.XMLHttpRequest
        } catch (t) {}
    }, fe = {
        0: 200,
        1223: 204
    }, kt = i.ajaxSettings.xhr(), f.cors = !!kt && "withCredentials" in kt, f.ajax = kt = !!kt, i.ajaxTransport(function(t) {
        var i, r;
        if (f.cors || kt && !t.crossDomain) return {
            send: function(u, f) {
                var o, e = t.xhr();
                if (e.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                    for (o in t.xhrFields) e[o] = t.xhrFields[o];
                for (o in t.mimeType && e.overrideMimeType && e.overrideMimeType(t.mimeType), t.crossDomain || u["X-Requested-With"] || (u["X-Requested-With"] = "XMLHttpRequest"), u) e.setRequestHeader(o, u[o]);
                i = function(n) {
                    return function() {
                        i && (i = r = e.onload = e.onerror = e.onabort = e.ontimeout = e.onreadystatechange = null, "abort" === n ? e.abort() : "error" === n ? "number" != typeof e.status ? f(0, "error") : f(e.status, e.statusText) : f(fe[e.status] || e.status, e.statusText, "text" !== (e.responseType || "text") || "string" != typeof e.responseText ? {
                            binary: e.response
                        } : {
                            text: e.responseText
                        }, e.getAllResponseHeaders()))
                    }
                };
                e.onload = i();
                r = e.onerror = e.ontimeout = i("error");
                void 0 !== e.onabort ? e.onabort = r : e.onreadystatechange = function() {
                    4 === e.readyState && n.setTimeout(function() {
                        i && r()
                    })
                };
                i = i("abort");
                try {
                    e.send(t.hasContent && t.data || null)
                } catch (u) {
                    if (i) throw u;
                }
            },
            abort: function() {
                i && i()
            }
        }
    }), i.ajaxPrefilter(function(n) {
        n.crossDomain && (n.contents.script = !1)
    }), i.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(n) {
                return i.globalEval(n), n
            }
        }
    }), i.ajaxPrefilter("script", function(n) {
        void 0 === n.cache && (n.cache = !1);
        n.crossDomain && (n.type = "GET")
    }), i.ajaxTransport("script", function(n) {
        var r, t;
        if (n.crossDomain || n.scriptAttrs) return {
            send: function(f, e) {
                r = i("<script>").attr(n.scriptAttrs || {}).prop({
                    charset: n.scriptCharset,
                    src: n.url
                }).on("load error", t = function(n) {
                    r.remove();
                    t = null;
                    n && e("error" === n.type ? 404 : 200, n.type)
                });
                u.head.appendChild(r[0])
            },
            abort: function() {
                t && t()
            }
        }
    }), wr = [], bi = /(=)\?(?=&|$)|\?\?/, i.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var n = wr.pop() || i.expando + "_" + gf.guid++;
            return this[n] = !0, n
        }
    }), i.ajaxPrefilter("json jsonp", function(t, r, u) {
        var f, o, s, h = !1 !== t.jsonp && (bi.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && bi.test(t.data) && "data");
        if (h || "jsonp" === t.dataTypes[0]) return f = t.jsonpCallback = e(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, h ? t[h] = t[h].replace(bi, "$1" + f) : !1 !== t.jsonp && (t.url += (hr.test(t.url) ? "&" : "?") + t.jsonp + "=" + f), t.converters["script json"] = function() {
            return s || i.error(f + " was not called"), s[0]
        }, t.dataTypes[0] = "json", o = n[f], n[f] = function() {
            s = arguments
        }, u.always(function() {
            void 0 === o ? i(n).removeProp(f) : n[f] = o;
            t[f] && (t.jsonpCallback = r.jsonpCallback, wr.push(f));
            s && e(o) && o(s[0]);
            s = o = void 0
        }), "script"
    }), f.createHTMLDocument = ((ee = u.implementation.createHTMLDocument("").body).innerHTML = "<form><\/form><form><\/form>", 2 === ee.childNodes.length), i.parseHTML = function(n, t, r) {
        return "string" != typeof n ? [] : ("boolean" == typeof t && (r = t, t = !1), t || (f.createHTMLDocument ? ((s = (t = u.implementation.createHTMLDocument("")).createElement("base")).href = u.location.href, t.head.appendChild(s)) : t = u), e = !r && [], (o = fu.exec(n)) ? [t.createElement(o[1])] : (o = du([n], t, e), e && e.length && i(e).remove(), i.merge([], o.childNodes)));
        var s, o, e
    }, i.fn.load = function(n, t, r) {
        var u, s, h, f = this,
            o = n.indexOf(" ");
        return -1 < o && (u = rt(n.slice(o)), n = n.slice(0, o)), e(t) ? (r = t, t = void 0) : t && "object" == typeof t && (s = "POST"), 0 < f.length && i.ajax({
            url: n,
            type: s || "GET",
            dataType: "html",
            data: t
        }).done(function(n) {
            h = arguments;
            f.html(u ? i("<div>").append(i.parseHTML(n)).find(u) : n)
        }).always(r && function(n, t) {
            f.each(function() {
                r.apply(this, h || [n.responseText, t, n])
            })
        }), this
    }, i.expr.pseudos.animated = function(n) {
        return i.grep(i.timers, function(t) {
            return n === t.elem
        }).length
    }, i.offset = {
        setOffset: function(n, t, r) {
            var v, o, s, h, u, c, l = i.css(n, "position"),
                a = i(n),
                f = {};
            "static" === l && (n.style.position = "relative");
            u = a.offset();
            s = i.css(n, "top");
            c = i.css(n, "left");
            ("absolute" === l || "fixed" === l) && -1 < (s + c).indexOf("auto") ? (h = (v = a.position()).top, o = v.left) : (h = parseFloat(s) || 0, o = parseFloat(c) || 0);
            e(t) && (t = t.call(n, r, i.extend({}, u)));
            null != t.top && (f.top = t.top - u.top + h);
            null != t.left && (f.left = t.left - u.left + o);
            "using" in t ? t.using.call(n, f) : a.css(f)
        }
    }, i.fn.extend({
        offset: function(n) {
            if (arguments.length) return void 0 === n ? this : this.each(function(t) {
                i.offset.setOffset(this, n, t)
            });
            var r, u, t = this[0];
            if (t) return t.getClientRects().length ? (r = t.getBoundingClientRect(), u = t.ownerDocument.defaultView, {
                top: r.top + u.pageYOffset,
                left: r.left + u.pageXOffset
            }) : {
                top: 0,
                left: 0
            }
        },
        position: function() {
            if (this[0]) {
                var n, r, u, t = this[0],
                    f = {
                        top: 0,
                        left: 0
                    };
                if ("fixed" === i.css(t, "position")) r = t.getBoundingClientRect();
                else {
                    for (r = this.offset(), u = t.ownerDocument, n = t.offsetParent || u.documentElement; n && (n === u.body || n === u.documentElement) && "static" === i.css(n, "position");) n = n.parentNode;
                    n && n !== t && 1 === n.nodeType && ((f = i(n).offset()).top += i.css(n, "borderTopWidth", !0), f.left += i.css(n, "borderLeftWidth", !0))
                }
                return {
                    top: r.top - f.top - i.css(t, "marginTop", !0),
                    left: r.left - f.left - i.css(t, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var n = this.offsetParent; n && "static" === i.css(n, "position");) n = n.offsetParent;
                return n || tt
            })
        }
    }), i.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(n, t) {
        var r = "pageYOffset" === t;
        i.fn[n] = function(i) {
            return g(this, function(n, i, u) {
                var f;
                if (ft(n) ? f = n : 9 === n.nodeType && (f = n.defaultView), void 0 === u) return f ? f[t] : n[i];
                f ? f.scrollTo(r ? f.pageXOffset : u, r ? u : f.pageYOffset) : n[i] = u
            }, n, i, arguments.length)
        }
    }), i.each(["top", "left"], function(n, t) {
        i.cssHooks[t] = uf(f.pixelPosition, function(n, r) {
            if (r) return r = ui(n, t), rr.test(r) ? i(n).position()[t] + "px" : r
        })
    }), i.each({
        Height: "height",
        Width: "width"
    }, function(n, t) {
        i.each({
            padding: "inner" + n,
            content: t,
            "": "outer" + n
        }, function(r, u) {
            i.fn[u] = function(f, e) {
                var o = arguments.length && (r || "boolean" != typeof f),
                    s = r || (!0 === f || !0 === e ? "margin" : "border");
                return g(this, function(t, r, f) {
                    var e;
                    return ft(t) ? 0 === u.indexOf("outer") ? t["inner" + n] : t.document.documentElement["client" + n] : 9 === t.nodeType ? (e = t.documentElement, Math.max(t.body["scroll" + n], e["scroll" + n], t.body["offset" + n], e["offset" + n], e["client" + n])) : void 0 === f ? i.css(t, r, s) : i.style(t, r, f, s)
                }, t, o ? f : void 0, o)
            }
        })
    }), i.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(n, t) {
        i.fn[t] = function(n) {
            return this.on(t, n)
        }
    }), i.fn.extend({
        bind: function(n, t, i) {
            return this.on(n, null, t, i)
        },
        unbind: function(n, t) {
            return this.off(n, null, t)
        },
        delegate: function(n, t, i, r) {
            return this.on(t, n, i, r)
        },
        undelegate: function(n, t, i) {
            return 1 === arguments.length ? this.off(n, "**") : this.off(t, n || "**", i)
        },
        hover: function(n, t) {
            return this.mouseenter(n).mouseleave(t || n)
        }
    }), i.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(n, t) {
        i.fn[t] = function(n, i) {
            return 0 < arguments.length ? this.on(t, null, n, i) : this.trigger(t)
        }
    }), oe = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g, i.proxy = function(n, t) {
        var r, u, f;
        if ("string" == typeof t && (r = n[t], t = n, n = r), e(n)) return u = a.call(arguments, 2), (f = function() {
            return n.apply(t || this, u.concat(a.call(arguments)))
        }).guid = n.guid = n.guid || i.guid++, f
    }, i.holdReady = function(n) {
        n ? i.readyWait++ : i.ready(!0)
    }, i.isArray = Array.isArray, i.parseJSON = JSON.parse, i.nodeName = s, i.isFunction = e, i.isWindow = ft, i.camelCase = k, i.type = et, i.now = Date.now, i.isNumeric = function(n) {
        var t = i.type(n);
        return ("number" === t || "string" === t) && !isNaN(n - parseFloat(n))
    }, i.trim = function(n) {
        return null == n ? "" : (n + "").replace(oe, "$1")
    }, "function" == typeof define && define.amd && define("jquery", [], function() {
        return i
    }), se = n.jQuery, he = n.$, i.noConflict = function(t) {
        return n.$ === i && (n.$ = he), t && n.jQuery === i && (n.jQuery = se), i
    }, "undefined" == typeof t && (n.jQuery = n.$ = i), i
});
! function(n, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : n.moment = t()
}(this, function() {
    "use strict";

    function t() {
        return df.apply(null, arguments)
    }

    function it(n) {
        return n instanceof Array || "[object Array]" === Object.prototype.toString.call(n)
    }

    function ii(n) {
        return null != n && "[object Object]" === Object.prototype.toString.call(n)
    }

    function s(n, t) {
        return Object.prototype.hasOwnProperty.call(n, t)
    }

    function au(n) {
        if (Object.getOwnPropertyNames) return 0 === Object.getOwnPropertyNames(n).length;
        for (var t in n)
            if (s(n, t)) return;
        return 1
    }

    function k(n) {
        return void 0 === n
    }

    function lt(n) {
        return "number" == typeof n || "[object Number]" === Object.prototype.toString.call(n)
    }

    function nr(n) {
        return n instanceof Date || "[object Date]" === Object.prototype.toString.call(n)
    }

    function gf(n, t) {
        for (var r = [], u = n.length, i = 0; i < u; ++i) r.push(t(n[i], i));
        return r
    }

    function dt(n, t) {
        for (var i in t) s(t, i) && (n[i] = t[i]);
        return s(t, "toString") && (n.toString = t.toString), s(t, "valueOf") && (n.valueOf = t.valueOf), n
    }

    function et(n, t, i, r) {
        return no(n, t, i, r, !0).utc()
    }

    function f(n) {
        return null == n._pf && (n._pf = {
            empty: !1,
            unusedTokens: [],
            unusedInput: [],
            overflow: -2,
            charsLeftOver: 0,
            nullInput: !1,
            invalidEra: null,
            invalidMonth: null,
            invalidFormat: !1,
            userInvalidated: !1,
            iso: !1,
            parsedDateParts: [],
            era: null,
            meridiem: null,
            rfc2822: !1,
            weekdayMismatch: !1
        }), n._pf
    }

    function vu(n) {
        if (null == n._isValid) {
            var t = f(n),
                i = ts.call(t.parsedDateParts, function(n) {
                    return null != n
                }),
                i = !isNaN(n._d.getTime()) && t.overflow < 0 && !t.empty && !t.invalidEra && !t.invalidMonth && !t.invalidWeekday && !t.weekdayMismatch && !t.nullInput && !t.invalidFormat && !t.userInvalidated && (!t.meridiem || t.meridiem && i);
            if (n._strict && (i = i && 0 === t.charsLeftOver && 0 === t.unusedTokens.length && void 0 === t.bigHour), null != Object.isFrozen && Object.isFrozen(n)) return i;
            n._isValid = i
        }
        return n._isValid
    }

    function cr(n) {
        var t = et(NaN);
        return null != n ? dt(f(t), n) : f(t).userInvalidated = !0, t
    }

    function pu(n, t) {
        var i, r, u, e = ne.length;
        if (k(t._isAMomentObject) || (n._isAMomentObject = t._isAMomentObject), k(t._i) || (n._i = t._i), k(t._f) || (n._f = t._f), k(t._l) || (n._l = t._l), k(t._strict) || (n._strict = t._strict), k(t._tzm) || (n._tzm = t._tzm), k(t._isUTC) || (n._isUTC = t._isUTC), k(t._offset) || (n._offset = t._offset), k(t._pf) || (n._pf = f(t)), k(t._locale) || (n._locale = t._locale), 0 < e)
            for (i = 0; i < e; i++) k(u = t[r = ne[i]]) || (n[r] = u);
        return n
    }

    function tr(n) {
        pu(this, n);
        this._d = new Date(null != n._d ? n._d.getTime() : NaN);
        this.isValid() || (this._d = new Date(NaN));
        !1 === yu && (yu = !0, t.updateOffset(this), yu = !1)
    }

    function rt(n) {
        return n instanceof tr || null != n && null != n._isAMomentObject
    }

    function te(n) {
        !1 === t.suppressDeprecationWarnings && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + n)
    }

    function g(n, i) {
        var r = !0;
        return dt(function() {
            if (null != t.deprecationHandler && t.deprecationHandler(null, n), r) {
                for (var u, e, o = [], h = arguments.length, f = 0; f < h; f++) {
                    if (u = "", "object" == typeof arguments[f]) {
                        for (e in u += "\n[" + f + "] ", arguments[0]) s(arguments[0], e) && (u += e + ": " + arguments[0][e] + ", ");
                        u = u.slice(0, -2)
                    } else u = arguments[f];
                    o.push(u)
                }
                te(n + "\nArguments: " + Array.prototype.slice.call(o).join("") + "\n" + (new Error).stack);
                r = !1
            }
            return i.apply(this, arguments)
        }, i)
    }

    function re(n, i) {
        null != t.deprecationHandler && t.deprecationHandler(n, i);
        ie[n] || (te(i), ie[n] = !0)
    }

    function ot(n) {
        return "undefined" != typeof Function && n instanceof Function || "[object Function]" === Object.prototype.toString.call(n)
    }

    function wu(n, t) {
        var i, r = dt({}, n);
        for (i in t) s(t, i) && (ii(n[i]) && ii(t[i]) ? (r[i] = {}, dt(r[i], n[i]), dt(r[i], t[i])) : null != t[i] ? r[i] = t[i] : delete r[i]);
        for (i in n) s(n, i) && !s(t, i) && ii(n[i]) && (r[i] = dt({}, r[i]));
        return r
    }

    function bu(n) {
        null != n && this.set(n)
    }

    function st(n, t, i) {
        var r = "" + Math.abs(n);
        return (0 <= n ? i ? "+" : "" : "-") + Math.pow(10, Math.max(0, t - r.length)).toString().substr(1) + r
    }

    function r(n, t, i, r) {
        var u = "string" == typeof r ? function() {
            return this[r]()
        } : r;
        n && (hi[n] = u);
        t && (hi[t[0]] = function() {
            return st(u.apply(this, arguments), t[1], t[2])
        });
        i && (hi[i] = function() {
            return this.localeData().ordinal(u.apply(this, arguments), n)
        })
    }

    function ar(n, t) {
        return n.isValid() ? (t = fe(t, n.localeData()), du[t] = du[t] || function(n) {
            for (var r, t = n.match(ku), i = 0, u = t.length; i < u; i++) t[i] = hi[t[i]] ? hi[t[i]] : (r = t[i]).match(/\[[\s\S]/) ? r.replace(/^\[|\]$/g, "") : r.replace(/\\/g, "");
            return function(i) {
                for (var f = "", r = 0; r < u; r++) f += ot(t[r]) ? t[r].call(i, n) : t[r];
                return f
            }
        }(t), du[t](n)) : n.localeData().invalidDate()
    }

    function fe(n, t) {
        function r(n) {
            return t.longDateFormat(n) || n
        }
        var i = 5;
        for (lr.lastIndex = 0; 0 <= i && lr.test(n);) n = n.replace(lr, r), lr.lastIndex = 0, --i;
        return n
    }

    function p(n, t) {
        var i = n.toLowerCase();
        ci[i] = ci[i + "s"] = ci[t] = n
    }

    function nt(n) {
        if ("string" == typeof n) return ci[n] || ci[n.toLowerCase()]
    }

    function gu(n) {
        var i, t, r = {};
        for (t in n) s(n, t) && (i = nt(t)) && (r[i] = n[t]);
        return r
    }

    function w(n, t) {
        nf[n] = t
    }

    function vr(n) {
        return n % 4 == 0 && n % 100 != 0 || n % 400 == 0
    }

    function tt(n) {
        return n < 0 ? Math.ceil(n) || 0 : Math.floor(n)
    }

    function e(n) {
        var n = +n;
        return 0 != n && isFinite(n) ? tt(n) : 0
    }

    function li(n, i) {
        return function(r) {
            return null != r ? (ee(this, n, r), t.updateOffset(this, i), this) : yr(this, n)
        }
    }

    function yr(n, t) {
        return n.isValid() ? n._d["get" + (n._isUTC ? "UTC" : "") + t]() : NaN
    }

    function ee(n, t, i) {
        n.isValid() && !isNaN(i) && ("FullYear" === t && vr(n.year()) && 1 === n.month() && 29 === n.date() ? (i = e(i), n._d["set" + (n._isUTC ? "UTC" : "") + t](i, n.month(), gr(i, n.month()))) : n._d["set" + (n._isUTC ? "UTC" : "") + t](i))
    }

    function i(n, t, i) {
        kr[n] = ot(t) ? t : function(n) {
            return n && i ? i : t
        }
    }

    function rs(n, t) {
        return s(kr, n) ? kr[n](t._strict, t._locale) : new RegExp(d(n.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(n, t, i, r, u) {
            return t || i || r || u
        })))
    }

    function d(n) {
        return n.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
    }

    function h(n, t) {
        var i, r, u = t;
        for ("string" == typeof n && (n = [n]), lt(t) && (u = function(n, i) {
                i[t] = e(n)
            }), r = n.length, i = 0; i < r; i++) dr[n[i]] = u
    }

    function ir(n, t) {
        h(n, function(n, i, r, u) {
            r._w = r._w || {};
            t(n, r._w, r, u)
        })
    }

    function gr(n, t) {
        if (isNaN(n) || isNaN(t)) return NaN;
        var i = (t % (i = 12) + i) % i;
        return n += (t - i) / 12, 1 == i ? vr(n) ? 29 : 28 : 31 - i % 7 % 2
    }

    function he(n, t) {
        var i;
        if (n.isValid()) {
            if ("string" == typeof t)
                if (/^\d+$/.test(t)) t = e(t);
                else if (!lt(t = n.localeData().monthsParse(t))) return;
            i = Math.min(n.date(), gr(n.year(), t));
            n._d["set" + (n._isUTC ? "UTC" : "") + "Month"](t, i)
        }
    }

    function ce(n) {
        return null != n ? (he(this, n), t.updateOffset(this, !0), this) : yr(this, "Month")
    }

    function le() {
        function f(n, t) {
            return t.length - n.length
        }
        for (var i, r = [], u = [], t = [], n = 0; n < 12; n++) i = et([2e3, n]), r.push(this.monthsShort(i, "")), u.push(this.months(i, "")), t.push(this.months(i, "")), t.push(this.monthsShort(i, ""));
        for (r.sort(f), u.sort(f), t.sort(f), n = 0; n < 12; n++) r[n] = d(r[n]), u[n] = d(u[n]);
        for (n = 0; n < 24; n++) t[n] = d(t[n]);
        this._monthsRegex = new RegExp("^(" + t.join("|") + ")", "i");
        this._monthsShortRegex = this._monthsRegex;
        this._monthsStrictRegex = new RegExp("^(" + u.join("|") + ")", "i");
        this._monthsShortStrictRegex = new RegExp("^(" + r.join("|") + ")", "i")
    }

    function ur(n) {
        return vr(n) ? 366 : 365
    }

    function ss(n, t, i, r, u, f, e) {
        var o;
        return n < 100 && 0 <= n ? (o = new Date(n + 400, t, i, r, u, f, e), isFinite(o.getFullYear()) && o.setFullYear(n)) : o = new Date(n, t, i, r, u, f, e), o
    }

    function fr(n) {
        var t;
        return n < 100 && 0 <= n ? ((t = Array.prototype.slice.call(arguments))[0] = n + 400, t = new Date(Date.UTC.apply(null, t)), isFinite(t.getUTCFullYear()) && t.setUTCFullYear(n)) : t = new Date(Date.UTC.apply(null, arguments)), t
    }

    function tu(n, t, i) {
        return i = 7 + t - i, i - (7 + fr(n, 0, i).getUTCDay() - t) % 7 - 1
    }

    function ae(n, t, i, r, u) {
        var f, t = 1 + 7 * (t - 1) + (7 + i - r) % 7 + tu(n, r, u),
            i = t <= 0 ? ur(f = n - 1) + t : t > ur(n) ? (f = n + 1, t - ur(n)) : (f = n, t);
        return {
            year: f,
            dayOfYear: i
        }
    }

    function er(n, t, i) {
        var u, f, r = tu(n.year(), t, i),
            r = Math.floor((n.dayOfYear() - r - 1) / 7) + 1;
        return r < 1 ? u = r + pt(f = n.year() - 1, t, i) : r > pt(n.year(), t, i) ? (u = r - pt(n.year(), t, i), f = n.year() + 1) : (f = n.year(), u = r), {
            week: u,
            year: f
        }
    }

    function pt(n, t, i) {
        var r = tu(n, t, i),
            t = tu(n + 1, t, i);
        return (ur(n) - r + t) / 7
    }

    function tf(n, t) {
        return n.slice(t, 7).concat(n.slice(0, t))
    }

    function rf() {
        function i(n, t) {
            return t.length - n.length
        }
        for (var r, u, n, f = [], e = [], o = [], t = [], s = 0; s < 7; s++) n = et([2e3, 1]).day(s), r = d(this.weekdaysMin(n, "")), u = d(this.weekdaysShort(n, "")), n = d(this.weekdays(n, "")), f.push(r), e.push(u), o.push(n), t.push(r), t.push(u), t.push(n);
        f.sort(i);
        e.sort(i);
        o.sort(i);
        t.sort(i);
        this._weekdaysRegex = new RegExp("^(" + t.join("|") + ")", "i");
        this._weekdaysShortRegex = this._weekdaysRegex;
        this._weekdaysMinRegex = this._weekdaysRegex;
        this._weekdaysStrictRegex = new RegExp("^(" + o.join("|") + ")", "i");
        this._weekdaysShortStrictRegex = new RegExp("^(" + e.join("|") + ")", "i");
        this._weekdaysMinStrictRegex = new RegExp("^(" + f.join("|") + ")", "i")
    }

    function uf() {
        return this.hours() % 12 || 12
    }

    function ye(n, t) {
        r(n, 0, 0, function() {
            return this.localeData().meridiem(this.hours(), this.minutes(), t)
        })
    }

    function pe(n, t) {
        return t._meridiemParse
    }

    function be(n) {
        return n && n.toLowerCase().replace("_", "-")
    }

    function as(n) {
        for (var t, i, f, u, r = 0; r < n.length;) {
            for (t = (u = be(n[r]).split("-")).length, i = (i = be(n[r + 1])) ? i.split("-") : null; 0 < t;) {
                if (f = ru(u.slice(0, t).join("-"))) return f;
                if (i && i.length >= t && function(n, t) {
                        for (var r = Math.min(n.length, t.length), i = 0; i < r; i += 1)
                            if (n[i] !== t[i]) return i;
                        return r
                    }(u, i) >= t - 1) break;
                t--
            }
            r++
        }
        return sr
    }

    function ru(n) {
        var t;
        if (void 0 === a[n] && "undefined" != typeof module && module && module.exports && null != n.match("^[^/\\\\]*$")) try {
            t = sr._abbr;
            require("./locale/" + n);
            ni(t)
        } catch (t) {
            a[n] = null
        }
        return a[n]
    }

    function ni(n, t) {
        return n && ((t = k(t) ? wt(n) : ff(n, t)) ? sr = t : "undefined" != typeof console && console.warn && console.warn("Locale " + n + " not found. Did you forget to load it?")), sr._abbr
    }

    function ff(n, t) {
        if (null === t) return delete a[n], null;
        var r, i = we;
        if (t.abbr = n, null != a[n]) re("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."), i = a[n]._config;
        else if (null != t.parentLocale)
            if (null != a[t.parentLocale]) i = a[t.parentLocale]._config;
            else {
                if (null == (r = ru(t.parentLocale))) return hr[t.parentLocale] || (hr[t.parentLocale] = []), hr[t.parentLocale].push({
                    name: n,
                    config: t
                }), null;
                i = r._config
            } return a[n] = new bu(wu(i, t)), hr[n] && hr[n].forEach(function(n) {
            ff(n.name, n.config)
        }), ni(n), a[n]
    }

    function wt(n) {
        var t;
        if (!(n = n && n._locale && n._locale._abbr ? n._locale._abbr : n)) return sr;
        if (!it(n)) {
            if (t = ru(n)) return t;
            n = [n]
        }
        return as(n)
    }

    function ef(n) {
        var t = n._a;
        return t && -2 === f(n).overflow && (t = t[vt] < 0 || 11 < t[vt] ? vt : t[ht] < 1 || t[ht] > gr(t[b], t[vt]) ? ht : t[y] < 0 || 24 < t[y] || 24 === t[y] && (0 !== t[ut] || 0 !== t[yt] || 0 !== t[ei]) ? y : t[ut] < 0 || 59 < t[ut] ? ut : t[yt] < 0 || 59 < t[yt] ? yt : t[ei] < 0 || 999 < t[ei] ? ei : -1, f(n)._overflowDayOfYear && (t < b || ht < t) && (t = ht), f(n)._overflowWeeks && -1 === t && (t = us), f(n)._overflowWeekday && -1 === t && (t = fs), f(n).overflow = t), n
    }

    function ke(n) {
        var t, r, s, e, u, h, o = n._i,
            i = vs.exec(o) || ys.exec(o),
            o = uu.length,
            c = of.length;
        if (i) {
            for (f(n).iso = !0, t = 0, r = o; t < r; t++)
                if (uu[t][1].exec(i[1])) {
                    e = uu[t][0];
                    s = !1 !== uu[t][2];
                    break
                } if (null == e) n._isValid = !1;
            else {
                if (i[3]) {
                    for (t = 0, r = c; t < r; t++)
                        if (of [t][1].exec(i[3])) {
                            u = (i[2] || " ") + of [t][0];
                            break
                        } if (null == u) return void(n._isValid = !1)
                }
                if (s || null == u) {
                    if (i[4]) {
                        if (!ps.exec(i[4])) return void(n._isValid = !1);
                        h = "Z"
                    }
                    n._f = e + (u || "") + (h || "");
                    hf(n)
                } else n._isValid = !1
            }
        } else n._isValid = !1
    }

    function ds(n, t, i, r, u, f) {
        return n = [function(n) {
            return (n = parseInt(n, 10), n <= 49) ? 2e3 + n : n <= 999 ? 1900 + n : n
        }(n), oe.indexOf(t), parseInt(i, 10), parseInt(r, 10), parseInt(u, 10)], f && n.push(parseInt(f, 10)), n
    }

    function de(n) {
        var e, i, r, u, t = bs.exec(n._i.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, ""));
        t ? (e = ds(t[4], t[3], t[2], t[5], t[6], t[7]), i = t[1], r = e, u = n, i && ve.indexOf(i) !== new Date(r[0], r[1], r[2]).getDay() ? (f(u).weekdayMismatch = !0, u._isValid = !1) : (n._a = e, n._tzm = (i = t[8], r = t[9], u = t[10], i ? ks[i] : r ? 0 : 60 * (((i = parseInt(u, 10)) - (r = i % 100)) / 100) + r), n._d = fr.apply(null, n._a), n._d.setUTCMinutes(n._d.getUTCMinutes() - n._tzm), f(n).rfc2822 = !0)) : n._isValid = !1
    }

    function wi(n, t, i) {
        return null != n ? n : null != t ? t : i
    }

    function sf(n) {
        var r, p, u, i, h, a, e, o, v, s, c, w = [];
        if (!n._d) {
            for (u = n, i = new Date(t.now()), p = u._useUTC ? [i.getUTCFullYear(), i.getUTCMonth(), i.getUTCDate()] : [i.getFullYear(), i.getMonth(), i.getDate()], n._w && null == n._a[ht] && null == n._a[vt] && (null != (i = (u = n)._w).GG || null != i.W || null != i.E ? (o = 1, v = 4, h = wi(i.GG, u._a[b], er(l(), 1, 4).year), a = wi(i.W, 1), ((e = wi(i.E, 1)) < 1 || 7 < e) && (s = !0)) : (o = u._locale._week.dow, v = u._locale._week.doy, c = er(l(), o, v), h = wi(i.gg, u._a[b], c.year), a = wi(i.w, c.week), null != i.d ? ((e = i.d) < 0 || 6 < e) && (s = !0) : null != i.e ? (e = i.e + o, (i.e < 0 || 6 < i.e) && (s = !0)) : e = o), a < 1 || a > pt(h, o, v) ? f(u)._overflowWeeks = !0 : null != s ? f(u)._overflowWeekday = !0 : (c = ae(h, a, e, o, v), u._a[b] = c.year, u._dayOfYear = c.dayOfYear)), null != n._dayOfYear && (i = wi(n._a[b], p[b]), (n._dayOfYear > ur(i) || 0 === n._dayOfYear) && (f(n)._overflowDayOfYear = !0), s = fr(i, 0, n._dayOfYear), n._a[vt] = s.getUTCMonth(), n._a[ht] = s.getUTCDate()), r = 0; r < 3 && null == n._a[r]; ++r) n._a[r] = w[r] = p[r];
            for (; r < 7; r++) n._a[r] = w[r] = null == n._a[r] ? 2 === r ? 1 : 0 : n._a[r];
            24 === n._a[y] && 0 === n._a[ut] && 0 === n._a[yt] && 0 === n._a[ei] && (n._nextDay = !0, n._a[y] = 0);
            n._d = (n._useUTC ? fr : ss).apply(null, w);
            h = n._useUTC ? n._d.getUTCDay() : n._d.getDay();
            null != n._tzm && n._d.setUTCMinutes(n._d.getUTCMinutes() - n._tzm);
            n._nextDay && (n._a[y] = 24);
            n._w && void 0 !== n._w.d && n._w.d !== h && (f(n).weekdayMismatch = !0)
        }
    }

    function hf(n) {
        if (n._f === t.ISO_8601) ke(n);
        else if (n._f === t.RFC_2822) de(n);
        else {
            n._a = [];
            f(n).empty = !0;
            for (var r, u, e, l, o, i = "" + n._i, h = i.length, a = 0, v = fe(n._f, n._locale).match(ku) || [], p = v.length, c = 0; c < p; c++) u = v[c], (r = (i.match(rs(u, n)) || [])[0]) && (0 < (e = i.substr(0, i.indexOf(r))).length && f(n).unusedInput.push(e), i = i.slice(i.indexOf(r) + r.length), a += r.length), hi[u] ? (r ? f(n).empty = !1 : f(n).unusedTokens.push(u), e = u, o = n, null != (l = r) && s(dr, e) && dr[e](l, o._a, o, e)) : n._strict && !r && f(n).unusedTokens.push(u);
            f(n).charsLeftOver = h - a;
            0 < i.length && f(n).unusedInput.push(i);
            n._a[y] <= 12 && !0 === f(n).bigHour && 0 < n._a[y] && (f(n).bigHour = void 0);
            f(n).parsedDateParts = n._a.slice(0);
            f(n).meridiem = n._meridiem;
            n._a[y] = function(n, t, i) {
                return null == i ? t : null != n.meridiemHour ? n.meridiemHour(t, i) : null != n.isPM ? ((n = n.isPM(i)) && t < 12 && (t += 12), t = n || 12 !== t ? t : 0) : t
            }(n._locale, n._a[y], n._meridiem);
            null !== (h = f(n).era) && (n._a[b] = n._locale.erasConvertYear(h, n._a[b]));
            sf(n);
            ef(n)
        }
    }

    function ge(n) {
        var e, i, o, r = n._i,
            u = n._f;
        return (n._locale = n._locale || wt(n._l), null === r || void 0 === u && "" === r) ? cr({
            nullInput: !0
        }) : ("string" == typeof r && (n._i = r = n._locale.preparse(r)), rt(r)) ? new tr(ef(r)) : (nr(r) ? n._d = r : it(u) ? ! function(n) {
            var t, o, r, u, i, e, s = !1,
                h = n._f.length;
            if (0 === h) return f(n).invalidFormat = !0, n._d = new Date(NaN);
            for (u = 0; u < h; u++) i = 0, e = !1, t = pu({}, n), null != n._useUTC && (t._useUTC = n._useUTC), t._f = n._f[u], hf(t), vu(t) && (e = !0), i = (i += f(t).charsLeftOver) + 10 * f(t).unusedTokens.length, f(t).score = i, s ? i < r && (r = i, o = t) : (null == r || i < r || e) && (r = i, o = t, e && (s = !0));
            dt(n, o || t)
        }(n) : u ? hf(n) : k(u = (r = n)._i) ? r._d = new Date(t.now()) : nr(u) ? r._d = new Date(u.valueOf()) : "string" == typeof u ? (i = r, null !== (e = ws.exec(i._i)) ? i._d = new Date(+e[1]) : (ke(i), !1 === i._isValid && (delete i._isValid, de(i), !1 === i._isValid && (delete i._isValid, i._strict ? i._isValid = !1 : t.createFromInputFallback(i))))) : it(u) ? (r._a = gf(u.slice(0), function(n) {
            return parseInt(n, 10)
        }), sf(r)) : ii(u) ? (e = r)._d || (o = void 0 === (i = gu(e._i)).day ? i.date : i.day, e._a = gf([i.year, i.month, o, i.hour, i.minute, i.second, i.millisecond], function(n) {
            return n && parseInt(n, 10)
        }), sf(e)) : lt(u) ? r._d = new Date(u) : t.createFromInputFallback(r), vu(n) || (n._d = null), n)
    }

    function no(n, t, i, r, u) {
        var f = {};
        return !0 !== t && !1 !== t || (r = t, t = void 0), !0 !== i && !1 !== i || (r = i, i = void 0), (ii(n) && au(n) || it(n) && 0 === n.length) && (n = void 0), f._isAMomentObject = !0, f._useUTC = f._isUTC = u, f._l = i, f._i = n, f._f = t, f._strict = r, (u = new tr(ef(ge(u = f))))._nextDay && (u.add(1, "d"), u._nextDay = void 0), u
    }

    function l(n, t, i, r) {
        return no(n, t, i, r, !1)
    }

    function to(n, t) {
        var r, i;
        if (!(t = 1 === t.length && it(t[0]) ? t[0] : t).length) return l();
        for (r = t[0], i = 1; i < t.length; ++i) t[i].isValid() && !t[i][n](r) || (r = t[i]);
        return r
    }

    function fu(n) {
        var n = gu(n),
            t = n.year || 0,
            i = n.quarter || 0,
            r = n.month || 0,
            u = n.week || n.isoWeek || 0,
            f = n.day || 0,
            o = n.hour || 0,
            h = n.minute || 0,
            c = n.second || 0,
            l = n.millisecond || 0;
        this._isValid = function(n) {
            var i, t, r = !1,
                u = bi.length;
            for (i in n)
                if (s(n, i) && (-1 === v.call(bi, i) || null != n[i] && isNaN(n[i]))) return !1;
            for (t = 0; t < u; ++t)
                if (n[bi[t]]) {
                    if (r) return !1;
                    parseFloat(n[bi[t]]) !== e(n[bi[t]]) && (r = !0)
                } return !0
        }(n);
        this._milliseconds = +l + 1e3 * c + 6e4 * h + 36e5 * o;
        this._days = +f + 7 * u;
        this._months = +r + 3 * i + 12 * t;
        this._data = {};
        this._locale = wt();
        this._bubble()
    }

    function eu(n) {
        return n instanceof fu
    }

    function cf(n) {
        return n < 0 ? -1 * Math.round(-1 * n) : Math.round(n)
    }

    function io(n, t) {
        r(n, 0, 0, function() {
            var n = this.utcOffset(),
                i = "+";
            return n < 0 && (n = -n, i = "-"), i + st(~~(n / 60), 2) + t + st(~~n % 60, 2)
        })
    }

    function lf(n, t) {
        var t = (t || "").match(n);
        return null === t ? null : 0 === (t = 60 * (n = ((t[t.length - 1] || []) + "").match(ro) || ["-", 0, 0])[1] + e(n[2])) ? 0 : "+" === n[0] ? t : -t
    }

    function af(n, i) {
        var r;
        return i._isUTC ? (i = i.clone(), r = (rt(n) || nr(n) ? n : l(n)).valueOf() - i.valueOf(), i._d.setTime(i._d.valueOf() + r), t.updateOffset(i, !1), i) : l(n).local()
    }

    function vf(n) {
        return -Math.round(n._d.getTimezoneOffset())
    }

    function uo() {
        return !!this.isValid() && this._isUTC && 0 === this._offset
    }

    function ft(n, t) {
        var u, r = n,
            i = null;
        return eu(n) ? r = {
            ms: n._milliseconds,
            d: n._days,
            M: n._months
        } : lt(n) || !isNaN(+n) ? (r = {}, t ? r[t] = +n : r.milliseconds = +n) : (i = fo.exec(n)) ? (u = "-" === i[1] ? -1 : 1, r = {
            y: 0,
            d: e(i[ht]) * u,
            h: e(i[y]) * u,
            m: e(i[ut]) * u,
            s: e(i[yt]) * u,
            ms: e(cf(1e3 * i[ei])) * u
        }) : (i = eo.exec(n)) ? (u = "-" === i[1] ? -1 : 1, r = {
            y: oi(i[2], u),
            M: oi(i[3], u),
            w: oi(i[4], u),
            d: oi(i[5], u),
            h: oi(i[6], u),
            m: oi(i[7], u),
            s: oi(i[8], u)
        }) : null == r ? r = {} : "object" == typeof r && ("from" in r || "to" in r) && (t = function(n, t) {
            var i;
            return !n.isValid() || !t.isValid() ? {
                milliseconds: 0,
                months: 0
            } : (t = af(t, n), n.isBefore(t) ? i = oo(n, t) : ((i = oo(t, n)).milliseconds = -i.milliseconds, i.months = -i.months), i)
        }(l(r.from), l(r.to)), (r = {}).ms = t.milliseconds, r.M = t.months), i = new fu(r), eu(n) && s(n, "_locale") && (i._locale = n._locale), eu(n) && s(n, "_isValid") && (i._isValid = n._isValid), i
    }

    function oi(n, t) {
        return n = n && parseFloat(n.replace(",", ".")), (isNaN(n) ? 0 : n) * t
    }

    function oo(n, t) {
        var i = {};
        return i.months = t.month() - n.month() + 12 * (t.year() - n.year()), n.clone().add(i.months, "M").isAfter(t) && --i.months, i.milliseconds = +t - +n.clone().add(i.months, "M"), i
    }

    function so(n, t) {
        return function(i, r) {
            var u;
            return null === r || isNaN(+r) || (re(t, "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."), u = i, i = r, r = u), ho(this, ft(i, r), n), this
        }
    }

    function ho(n, i, r, u) {
        var e = i._milliseconds,
            f = cf(i._days),
            i = cf(i._months);
        n.isValid() && (u = null == u || u, i && he(n, yr(n, "Month") + i * r), f && ee(n, "Date", yr(n, "Date") + f * r), e && n._d.setTime(n._d.valueOf() + e * r), u && t.updateOffset(n, f || i))
    }

    function co(n) {
        return "string" == typeof n || n instanceof String
    }

    function gs(n) {
        return rt(n) || nr(n) || co(n) || lt(n) || function(n) {
            var t = it(n),
                i = !1;
            return t && (i = 0 === n.filter(function(t) {
                return !lt(t) && co(n)
            }).length), t && i
        }(n) || function(n) {
            for (var r, f = ii(n) && !au(n), i = !1, u = ["years", "year", "y", "months", "month", "M", "days", "day", "d", "dates", "date", "D", "hours", "hour", "h", "minutes", "minute", "m", "seconds", "second", "s", "milliseconds", "millisecond", "ms"], e = u.length, t = 0; t < e; t += 1) r = u[t], i = i || s(n, r);
            return f && i
        }(n) || null == n
    }

    function ou(n, t) {
        if (n.date() < t.date()) return -ou(t, n);
        var r = 12 * (t.year() - n.year()) + (t.month() - n.month()),
            i = n.clone().add(r, "months"),
            t = t - i < 0 ? (t - i) / (i - n.clone().add(r - 1, "months")) : (t - i) / (n.clone().add(1 + r, "months") - i);
        return -(r + t) || 0
    }

    function lo(n) {
        return void 0 === n ? this._locale._abbr : (null != (n = wt(n)) && (this._locale = n), this)
    }

    function ao() {
        return this._locale
    }

    function ki(n, t) {
        return (n % t + t) % t
    }

    function vo(n, t, i) {
        return n < 100 && 0 <= n ? new Date(n + 400, t, i) - yf : new Date(n, t, i).valueOf()
    }

    function yo(n, t, i) {
        return n < 100 && 0 <= n ? Date.UTC(n + 400, t, i) - yf : Date.UTC(n, t, i)
    }

    function pf(n, t) {
        return t.erasAbbrRegex(n)
    }

    function wf() {
        for (var r = [], u = [], f = [], i = [], t = this.eras(), n = 0, e = t.length; n < e; ++n) u.push(d(t[n].name)), r.push(d(t[n].abbr)), f.push(d(t[n].narrow)), i.push(d(t[n].name)), i.push(d(t[n].abbr)), i.push(d(t[n].narrow));
        this._erasRegex = new RegExp("^(" + i.join("|") + ")", "i");
        this._erasNameRegex = new RegExp("^(" + u.join("|") + ")", "i");
        this._erasAbbrRegex = new RegExp("^(" + r.join("|") + ")", "i");
        this._erasNarrowRegex = new RegExp("^(" + f.join("|") + ")", "i")
    }

    function su(n, t) {
        r(0, [n, n.length], 0, t)
    }

    function po(n, t, i, r, u) {
        var f;
        return null == n ? er(this, r, u).year : (f = pt(n, r, u), function(n, t, i, r, u) {
            return n = ae(n, t, i, r, u), t = fr(n.year, 0, n.dayOfYear), this.year(t.getUTCFullYear()), this.month(t.getUTCMonth()), this.date(t.getUTCDate()), this
        }.call(this, n, t = f < t ? f : t, i, r, u))
    }

    function nh(n, t) {
        t[ei] = e(1e3 * ("0." + n))
    }

    function wo(n) {
        return n
    }

    function hu(n, t, i, r) {
        var u = wt(),
            r = et().set(r, t);
        return u[i](r, n)
    }

    function bo(n, t, i) {
        if (lt(n) && (t = n, n = void 0), n = n || "", null != t) return hu(n, t, i, "month");
        for (var u = [], r = 0; r < 12; r++) u[r] = hu(n, r, i, "month");
        return u
    }

    function bf(n, t, i, r) {
        t = ("boolean" == typeof n ? lt(t) && (i = t, t = void 0) : (t = n, n = !1, lt(i = t) && (i = t, t = void 0)), t || "");
        var u, o = wt(),
            f = n ? o._week.dow : 0,
            e = [];
        if (null != i) return hu(t, (i + f) % 7, r, "day");
        for (u = 0; u < 7; u++) e[u] = hu(t, (u + f) % 7, r, "day");
        return e
    }

    function ko(n, t, i, r) {
        return t = ft(t, i), n._milliseconds += r * t._milliseconds, n._days += r * t._days, n._months += r * t._months, n._bubble()
    }

    function go(n) {
        return n < 0 ? Math.floor(n) : Math.ceil(n)
    }

    function ns(n) {
        return 4800 * n / 146097
    }

    function kf(n) {
        return 146097 * n / 4800
    }

    function bt(n) {
        return function() {
            return this.as(n)
        }
    }

    function si(n) {
        return function() {
            return this.isValid() ? this._data[n] : NaN
        }
    }

    function uh(n, t, i, r) {
        var f = ft(n).abs(),
            u = kt(f.as("s")),
            e = kt(f.as("m")),
            o = kt(f.as("h")),
            s = kt(f.as("d")),
            h = kt(f.as("M")),
            c = kt(f.as("w")),
            f = kt(f.as("y")),
            u = (u <= i.ss ? ["s", u] : u < i.s && ["ss", u]) || e <= 1 && ["m"] || e < i.m && ["mm", e] || o <= 1 && ["h"] || o < i.h && ["hh", o] || s <= 1 && ["d"] || s < i.d && ["dd", s];
        return (u = (u = null != i.w ? u || c <= 1 && ["w"] || c < i.w && ["ww", c] : u) || h <= 1 && ["M"] || h < i.M && ["MM", h] || f <= 1 && ["y"] || ["yy", f])[2] = t, u[3] = 0 < +n, u[4] = r,
            function(n, t, i, r, u) {
                return u.relativeTime(t || 1, !!i, n, r)
            }.apply(null, u)
    }

    function gi(n) {
        return (0 < n) - (n < 0) || +n
    }

    function lu() {
        if (!this.isValid()) return this.localeData().invalidDate();
        var n, r, e, s, o, h, u, t = cu(this._milliseconds) / 1e3,
            c = cu(this._days),
            f = cu(this._months),
            i = this.asSeconds();
        return i ? (n = tt(t / 60), r = tt(n / 60), t %= 60, n %= 60, e = tt(f / 12), f %= 12, s = t ? t.toFixed(3).replace(/\.?0+$/, "") : "", o = gi(this._months) !== gi(i) ? "-" : "", h = gi(this._days) !== gi(i) ? "-" : "", u = gi(this._milliseconds) !== gi(i) ? "-" : "", (i < 0 ? "-" : "") + "P" + (e ? o + e + "Y" : "") + (f ? o + f + "M" : "") + (c ? h + c + "D" : "") + (r || n || t ? "T" : "") + (r ? u + r + "H" : "") + (n ? u + n + "M" : "") + (t ? u + s + "S" : "")) : "P0D"
    }
    var df, ts = Array.prototype.some || function(n) {
            for (var i = Object(this), r = i.length >>> 0, t = 0; t < r; t++)
                if (t in i && n.call(this, i[t], t, i)) return !0;
            return !1
        },
        ne = t.momentProperties = [],
        yu = !1,
        ie = {},
        ue, ci, nf, kr, dr, nu, bi, ro, fo, eo, yf, ti, ri, gt, ct, cu, o;
    t.suppressDeprecationWarnings = !1;
    t.deprecationHandler = null;
    ue = Object.keys || function(n) {
        var t, i = [];
        for (t in n) s(n, t) && i.push(t);
        return i
    };
    var ku = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
        lr = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
        du = {},
        hi = {};
    ci = {};
    nf = {};
    var n = /\d/,
        u = /\d\d/,
        pr = /\d{3}/,
        ri = /\d{4}/,
        ui = /[+-]?\d{6}/,
        c = /\d\d?/,
        ai = /\d\d\d\d?/,
        vi = /\d\d\d\d\d\d?/,
        yi = /\d{1,3}/,
        fi = /\d{1,4}/,
        gt = /[+-]?\d{1,6}/,
        pi = /\d+/,
        wr = /[+-]?\d+/,
        is = /Z|[+-]\d\d:?\d\d/gi,
        br = /Z|[+-]\d\d(?::?\d\d)?/gi,
        at = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i;
    kr = {};
    dr = {};
    var v, b = 0,
        vt = 1,
        ht = 2,
        y = 3,
        ut = 4,
        yt = 5,
        ei = 6,
        us = 7,
        fs = 8;
    v = Array.prototype.indexOf || function(n) {
        for (var t = 0; t < this.length; ++t)
            if (this[t] === n) return t;
        return -1
    };
    r("M", ["MM", 2], "Mo", function() {
        return this.month() + 1
    });
    r("MMM", 0, 0, function(n) {
        return this.localeData().monthsShort(this, n)
    });
    r("MMMM", 0, 0, function(n) {
        return this.localeData().months(this, n)
    });
    p("month", "M");
    w("month", 8);
    i("M", c);
    i("MM", c, u);
    i("MMM", function(n, t) {
        return t.monthsShortRegex(n)
    });
    i("MMMM", function(n, t) {
        return t.monthsRegex(n)
    });
    h(["M", "MM"], function(n, t) {
        t[vt] = e(n) - 1
    });
    h(["MMM", "MMMM"], function(n, t, i, r) {
        r = i._locale.monthsParse(n, r, i._strict);
        null != r ? t[vt] = r : f(i).invalidMonth = n
    });
    var rr = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
        oe = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
        se = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
        es = at,
        os = at;
    r("Y", 0, 0, function() {
        var n = this.year();
        return n <= 9999 ? st(n, 4) : "+" + n
    });
    r(0, ["YY", 2], 0, function() {
        return this.year() % 100
    });
    r(0, ["YYYY", 4], 0, "year");
    r(0, ["YYYYY", 5], 0, "year");
    r(0, ["YYYYYY", 6, !0], 0, "year");
    p("year", "y");
    w("year", 1);
    i("Y", wr);
    i("YY", c, u);
    i("YYYY", fi, ri);
    i("YYYYY", gt, ui);
    i("YYYYYY", gt, ui);
    h(["YYYYY", "YYYYYY"], b);
    h("YYYY", function(n, i) {
        i[b] = 2 === n.length ? t.parseTwoDigitYear(n) : e(n)
    });
    h("YY", function(n, i) {
        i[b] = t.parseTwoDigitYear(n)
    });
    h("Y", function(n, t) {
        t[b] = parseInt(n, 10)
    });
    t.parseTwoDigitYear = function(n) {
        return e(n) + (68 < e(n) ? 1900 : 2e3)
    };
    nu = li("FullYear", !0);
    r("w", ["ww", 2], "wo", "week");
    r("W", ["WW", 2], "Wo", "isoWeek");
    p("week", "w");
    p("isoWeek", "W");
    w("week", 5);
    w("isoWeek", 5);
    i("w", c);
    i("ww", c, u);
    i("W", c);
    i("WW", c, u);
    ir(["w", "ww", "W", "WW"], function(n, t, i, r) {
        t[r.substr(0, 1)] = e(n)
    });
    r("d", 0, "do", "day");
    r("dd", 0, 0, function(n) {
        return this.localeData().weekdaysMin(this, n)
    });
    r("ddd", 0, 0, function(n) {
        return this.localeData().weekdaysShort(this, n)
    });
    r("dddd", 0, 0, function(n) {
        return this.localeData().weekdays(this, n)
    });
    r("e", 0, 0, "weekday");
    r("E", 0, 0, "isoWeekday");
    p("day", "d");
    p("weekday", "e");
    p("isoWeekday", "E");
    w("day", 11);
    w("weekday", 11);
    w("isoWeekday", 11);
    i("d", c);
    i("e", c);
    i("E", c);
    i("dd", function(n, t) {
        return t.weekdaysMinRegex(n)
    });
    i("ddd", function(n, t) {
        return t.weekdaysShortRegex(n)
    });
    i("dddd", function(n, t) {
        return t.weekdaysRegex(n)
    });
    ir(["dd", "ddd", "dddd"], function(n, t, i, r) {
        r = i._locale.weekdaysParse(n, r, i._strict);
        null != r ? t.d = r : f(i).invalidWeekday = n
    });
    ir(["d", "e", "E"], function(n, t, i, r) {
        t[r] = e(n)
    });
    var or = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        ve = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
        iu = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
        hs = at,
        cs = at,
        ls = at;
    r("H", ["HH", 2], 0, "hour");
    r("h", ["hh", 2], 0, uf);
    r("k", ["kk", 2], 0, function() {
        return this.hours() || 24
    });
    r("hmm", 0, 0, function() {
        return "" + uf.apply(this) + st(this.minutes(), 2)
    });
    r("hmmss", 0, 0, function() {
        return "" + uf.apply(this) + st(this.minutes(), 2) + st(this.seconds(), 2)
    });
    r("Hmm", 0, 0, function() {
        return "" + this.hours() + st(this.minutes(), 2)
    });
    r("Hmmss", 0, 0, function() {
        return "" + this.hours() + st(this.minutes(), 2) + st(this.seconds(), 2)
    });
    ye("a", !0);
    ye("A", !1);
    p("hour", "h");
    w("hour", 13);
    i("a", pe);
    i("A", pe);
    i("H", c);
    i("h", c);
    i("k", c);
    i("HH", c, u);
    i("hh", c, u);
    i("kk", c, u);
    i("hmm", ai);
    i("hmmss", vi);
    i("Hmm", ai);
    i("Hmmss", vi);
    h(["H", "HH"], y);
    h(["k", "kk"], function(n, t) {
        n = e(n);
        t[y] = 24 === n ? 0 : n
    });
    h(["a", "A"], function(n, t, i) {
        i._isPm = i._locale.isPM(n);
        i._meridiem = n
    });
    h(["h", "hh"], function(n, t, i) {
        t[y] = e(n);
        f(i).bigHour = !0
    });
    h("hmm", function(n, t, i) {
        var r = n.length - 2;
        t[y] = e(n.substr(0, r));
        t[ut] = e(n.substr(r));
        f(i).bigHour = !0
    });
    h("hmmss", function(n, t, i) {
        var r = n.length - 4,
            u = n.length - 2;
        t[y] = e(n.substr(0, r));
        t[ut] = e(n.substr(r, 2));
        t[yt] = e(n.substr(u));
        f(i).bigHour = !0
    });
    h("Hmm", function(n, t) {
        var i = n.length - 2;
        t[y] = e(n.substr(0, i));
        t[ut] = e(n.substr(i))
    });
    h("Hmmss", function(n, t) {
        var i = n.length - 4,
            r = n.length - 2;
        t[y] = e(n.substr(0, i));
        t[ut] = e(n.substr(i, 2));
        t[yt] = e(n.substr(r))
    });
    at = li("Hours", !0);
    var sr, we = {
            calendar: {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            },
            longDateFormat: {
                LTS: "h:mm:ss A",
                LT: "h:mm A",
                L: "MM/DD/YYYY",
                LL: "MMMM D, YYYY",
                LLL: "MMMM D, YYYY h:mm A",
                LLLL: "dddd, MMMM D, YYYY h:mm A"
            },
            invalidDate: "Invalid date",
            ordinal: "%d",
            dayOfMonthOrdinalParse: /\d{1,2}/,
            relativeTime: {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                ss: "%d seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                w: "a week",
                ww: "%d weeks",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            },
            months: rr,
            monthsShort: oe,
            week: {
                dow: 0,
                doy: 6
            },
            weekdays: or,
            weekdaysMin: iu,
            weekdaysShort: ve,
            meridiemParse: /[ap]\.?m?\.?/i
        },
        a = {},
        hr = {};
    var vs = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
        ys = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
        ps = /Z|[+-]\d\d(?::?\d\d)?/,
        uu = [
            ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
            ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
            ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
            ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
            ["YYYY-DDD", /\d{4}-\d{3}/],
            ["YYYY-MM", /\d{4}-\d\d/, !1],
            ["YYYYYYMMDD", /[+-]\d{10}/],
            ["YYYYMMDD", /\d{8}/],
            ["GGGG[W]WWE", /\d{4}W\d{3}/],
            ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
            ["YYYYDDD", /\d{7}/],
            ["YYYYMM", /\d{6}/, !1],
            ["YYYY", /\d{4}/, !1]
        ],
        of = [
            ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
            ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
            ["HH:mm:ss", /\d\d:\d\d:\d\d/],
            ["HH:mm", /\d\d:\d\d/],
            ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
            ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
            ["HHmmss", /\d\d\d\d\d\d/],
            ["HHmm", /\d\d\d\d/],
            ["HH", /\d\d/]
        ],
        ws = /^\/?Date\((-?\d+)/i,
        bs = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,
        ks = {
            UT: 0,
            GMT: 0,
            EDT: -240,
            EST: -300,
            CDT: -300,
            CST: -360,
            MDT: -360,
            MST: -420,
            PDT: -420,
            PST: -480
        };
    for (t.createFromInputFallback = g("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", function(n) {
            n._d = new Date(n._i + (n._useUTC ? " UTC" : ""))
        }), t.ISO_8601 = function() {}, t.RFC_2822 = function() {}, ai = g("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
            var n = l.apply(null, arguments);
            return this.isValid() && n.isValid() ? n < this ? this : n : cr()
        }), vi = g("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
            var n = l.apply(null, arguments);
            return this.isValid() && n.isValid() ? this < n ? this : n : cr()
        }), bi = ["year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond"], io("Z", ":"), io("ZZ", ""), i("Z", br), i("ZZ", br), h(["Z", "ZZ"], function(n, t, i) {
            i._useUTC = !0;
            i._tzm = lf(br, n)
        }), ro = /([\+\-]|\d\d)/gi, t.updateOffset = function() {}, fo = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/, eo = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/, ft.fn = fu.prototype, ft.invalid = function() {
            return ft(NaN)
        }, rr = so(1, "add"), or = so(-1, "subtract"), t.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", t.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]", iu = g("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function(n) {
            return void 0 === n ? this.localeData() : this.locale(n)
        }), yf = 126227808e5, r("N", 0, 0, "eraAbbr"), r("NN", 0, 0, "eraAbbr"), r("NNN", 0, 0, "eraAbbr"), r("NNNN", 0, 0, "eraName"), r("NNNNN", 0, 0, "eraNarrow"), r("y", ["y", 1], "yo", "eraYear"), r("y", ["yy", 2], 0, "eraYear"), r("y", ["yyy", 3], 0, "eraYear"), r("y", ["yyyy", 4], 0, "eraYear"), i("N", pf), i("NN", pf), i("NNN", pf), i("NNNN", function(n, t) {
            return t.erasNameRegex(n)
        }), i("NNNNN", function(n, t) {
            return t.erasNarrowRegex(n)
        }), h(["N", "NN", "NNN", "NNNN", "NNNNN"], function(n, t, i, r) {
            r = i._locale.erasParse(n, r, i._strict);
            r ? f(i).era = r : f(i).invalidEra = n
        }), i("y", pi), i("yy", pi), i("yyy", pi), i("yyyy", pi), i("yo", function(n, t) {
            return t._eraYearOrdinalRegex || pi
        }), h(["y", "yy", "yyy", "yyyy"], b), h(["yo"], function(n, t, i) {
            var r;
            i._locale._eraYearOrdinalRegex && (r = n.match(i._locale._eraYearOrdinalRegex));
            t[b] = i._locale.eraYearOrdinalParse ? i._locale.eraYearOrdinalParse(n, r) : parseInt(n, 10)
        }), r(0, ["gg", 2], 0, function() {
            return this.weekYear() % 100
        }), r(0, ["GG", 2], 0, function() {
            return this.isoWeekYear() % 100
        }), su("gggg", "weekYear"), su("ggggg", "weekYear"), su("GGGG", "isoWeekYear"), su("GGGGG", "isoWeekYear"), p("weekYear", "gg"), p("isoWeekYear", "GG"), w("weekYear", 1), w("isoWeekYear", 1), i("G", wr), i("g", wr), i("GG", c, u), i("gg", c, u), i("GGGG", fi, ri), i("gggg", fi, ri), i("GGGGG", gt, ui), i("ggggg", gt, ui), ir(["gggg", "ggggg", "GGGG", "GGGGG"], function(n, t, i, r) {
            t[r.substr(0, 2)] = e(n)
        }), ir(["gg", "GG"], function(n, i, r, u) {
            i[u] = t.parseTwoDigitYear(n)
        }), r("Q", 0, "Qo", "quarter"), p("quarter", "Q"), w("quarter", 7), i("Q", n), h("Q", function(n, t) {
            t[vt] = 3 * (e(n) - 1)
        }), r("D", ["DD", 2], "Do", "date"), p("date", "D"), w("date", 9), i("D", c), i("DD", c, u), i("Do", function(n, t) {
            return n ? t._dayOfMonthOrdinalParse || t._ordinalParse : t._dayOfMonthOrdinalParseLenient
        }), h(["D", "DD"], ht), h("Do", function(n, t) {
            t[ht] = e(n.match(c)[0])
        }), fi = li("Date", !0), r("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), p("dayOfYear", "DDD"), w("dayOfYear", 4), i("DDD", yi), i("DDDD", pr), h(["DDD", "DDDD"], function(n, t, i) {
            i._dayOfYear = e(n)
        }), r("m", ["mm", 2], 0, "minute"), p("minute", "m"), w("minute", 14), i("m", c), i("mm", c, u), h(["m", "mm"], ut), ri = li("Minutes", !1), gt = (r("s", ["ss", 2], 0, "second"), p("second", "s"), w("second", 15), i("s", c), i("ss", c, u), h(["s", "ss"], yt), li("Seconds", !1)), r("S", 0, 0, function() {
            return ~~(this.millisecond() / 100)
        }), r(0, ["SS", 2], 0, function() {
            return ~~(this.millisecond() / 10)
        }), r(0, ["SSS", 3], 0, "millisecond"), r(0, ["SSSS", 4], 0, function() {
            return 10 * this.millisecond()
        }), r(0, ["SSSSS", 5], 0, function() {
            return 100 * this.millisecond()
        }), r(0, ["SSSSSS", 6], 0, function() {
            return 1e3 * this.millisecond()
        }), r(0, ["SSSSSSS", 7], 0, function() {
            return 1e4 * this.millisecond()
        }), r(0, ["SSSSSSSS", 8], 0, function() {
            return 1e5 * this.millisecond()
        }), r(0, ["SSSSSSSSS", 9], 0, function() {
            return 1e6 * this.millisecond()
        }), p("millisecond", "ms"), w("millisecond", 16), i("S", yi, n), i("SS", yi, u), i("SSS", yi, pr), ti = "SSSS"; ti.length <= 9; ti += "S") i(ti, pi);
    for (ti = "S"; ti.length <= 9; ti += "S") h(ti, nh);
    ui = li("Milliseconds", !1);
    r("z", 0, 0, "zoneAbbr");
    r("zz", 0, 0, "zoneName");
    n = tr.prototype;
    n.add = rr;
    n.calendar = function(n, i) {
        1 === arguments.length && (arguments[0] ? gs(arguments[0]) ? (n = arguments[0], i = void 0) : function(n) {
            for (var u = ii(n) && !au(n), t = !1, r = ["sameDay", "nextDay", "lastDay", "nextWeek", "lastWeek", "sameElse"], i = 0; i < r.length; i += 1) t = t || s(n, r[i]);
            return u && t
        }(arguments[0]) && (i = arguments[0], n = void 0) : i = n = void 0);
        var n = n || l(),
            r = af(n, this).startOf("day"),
            r = t.calendarFormat(this, r) || "sameElse",
            i = i && (ot(i[r]) ? i[r].call(this, n) : i[r]);
        return this.format(i || this.localeData().calendar(r, this, l(n)))
    };
    n.clone = function() {
        return new tr(this)
    };
    n.diff = function(n, t, i) {
        var r, f, u;
        if (!this.isValid()) return NaN;
        if (!(r = af(n, this)).isValid()) return NaN;
        switch (f = 6e4 * (r.utcOffset() - this.utcOffset()), t = nt(t)) {
            case "year":
                u = ou(this, r) / 12;
                break;
            case "month":
                u = ou(this, r);
                break;
            case "quarter":
                u = ou(this, r) / 3;
                break;
            case "second":
                u = (this - r) / 1e3;
                break;
            case "minute":
                u = (this - r) / 6e4;
                break;
            case "hour":
                u = (this - r) / 36e5;
                break;
            case "day":
                u = (this - r - f) / 864e5;
                break;
            case "week":
                u = (this - r - f) / 6048e5;
                break;
            default:
                u = this - r
        }
        return i ? u : tt(u)
    };
    n.endOf = function(n) {
        var i, r;
        if (void 0 === (n = nt(n)) || "millisecond" === n || !this.isValid()) return this;
        switch (r = this._isUTC ? yo : vo, n) {
            case "year":
                i = r(this.year() + 1, 0, 1) - 1;
                break;
            case "quarter":
                i = r(this.year(), this.month() - this.month() % 3 + 3, 1) - 1;
                break;
            case "month":
                i = r(this.year(), this.month() + 1, 1) - 1;
                break;
            case "week":
                i = r(this.year(), this.month(), this.date() - this.weekday() + 7) - 1;
                break;
            case "isoWeek":
                i = r(this.year(), this.month(), this.date() - (this.isoWeekday() - 1) + 7) - 1;
                break;
            case "day":
            case "date":
                i = r(this.year(), this.month(), this.date() + 1) - 1;
                break;
            case "hour":
                i = this._d.valueOf();
                i += 3599999 - ki(i + (this._isUTC ? 0 : 6e4 * this.utcOffset()), 36e5);
                break;
            case "minute":
                i = this._d.valueOf();
                i += 59999 - ki(i, 6e4);
                break;
            case "second":
                i = this._d.valueOf();
                i += 999 - ki(i, 1e3)
        }
        return this._d.setTime(i), t.updateOffset(this, !0), this
    };
    n.format = function(n) {
        return n = n || (this.isUtc() ? t.defaultFormatUtc : t.defaultFormat), n = ar(this, n), this.localeData().postformat(n)
    };
    n.from = function(n, t) {
        return this.isValid() && (rt(n) && n.isValid() || l(n).isValid()) ? ft({
            to: this,
            from: n
        }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
    };
    n.fromNow = function(n) {
        return this.from(l(), n)
    };
    n.to = function(n, t) {
        return this.isValid() && (rt(n) && n.isValid() || l(n).isValid()) ? ft({
            from: this,
            to: n
        }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
    };
    n.toNow = function(n) {
        return this.to(l(), n)
    };
    n.get = function(n) {
        return ot(this[n = nt(n)]) ? this[n]() : this
    };
    n.invalidAt = function() {
        return f(this).overflow
    };
    n.isAfter = function(n, t) {
        return n = rt(n) ? n : l(n), !(!this.isValid() || !n.isValid()) && ("millisecond" === (t = nt(t) || "millisecond") ? this.valueOf() > n.valueOf() : n.valueOf() < this.clone().startOf(t).valueOf())
    };
    n.isBefore = function(n, t) {
        return n = rt(n) ? n : l(n), !(!this.isValid() || !n.isValid()) && ("millisecond" === (t = nt(t) || "millisecond") ? this.valueOf() < n.valueOf() : this.clone().endOf(t).valueOf() < n.valueOf())
    };
    n.isBetween = function(n, t, i, r) {
        return n = rt(n) ? n : l(n), t = rt(t) ? t : l(t), !!(this.isValid() && n.isValid() && t.isValid()) && ("(" === (r = r || "()")[0] ? this.isAfter(n, i) : !this.isBefore(n, i)) && (")" === r[1] ? this.isBefore(t, i) : !this.isAfter(t, i))
    };
    n.isSame = function(n, t) {
        var n = rt(n) ? n : l(n);
        return !(!this.isValid() || !n.isValid()) && ("millisecond" === (t = nt(t) || "millisecond") ? this.valueOf() === n.valueOf() : (n = n.valueOf(), this.clone().startOf(t).valueOf() <= n && n <= this.clone().endOf(t).valueOf()))
    };
    n.isSameOrAfter = function(n, t) {
        return this.isSame(n, t) || this.isAfter(n, t)
    };
    n.isSameOrBefore = function(n, t) {
        return this.isSame(n, t) || this.isBefore(n, t)
    };
    n.isValid = function() {
        return vu(this)
    };
    n.lang = iu;
    n.locale = lo;
    n.localeData = ao;
    n.max = vi;
    n.min = ai;
    n.parsingFlags = function() {
        return dt({}, f(this))
    };
    n.set = function(n, t) {
        if ("object" == typeof n)
            for (var r = function(n) {
                    var t, i = [];
                    for (t in n) s(n, t) && i.push({
                        unit: t,
                        priority: nf[t]
                    });
                    return i.sort(function(n, t) {
                        return n.priority - t.priority
                    }), i
                }(n = gu(n)), u = r.length, i = 0; i < u; i++) this[r[i].unit](n[r[i].unit]);
        else if (ot(this[n = nt(n)])) return this[n](t);
        return this
    };
    n.startOf = function(n) {
        var i, r;
        if (void 0 === (n = nt(n)) || "millisecond" === n || !this.isValid()) return this;
        switch (r = this._isUTC ? yo : vo, n) {
            case "year":
                i = r(this.year(), 0, 1);
                break;
            case "quarter":
                i = r(this.year(), this.month() - this.month() % 3, 1);
                break;
            case "month":
                i = r(this.year(), this.month(), 1);
                break;
            case "week":
                i = r(this.year(), this.month(), this.date() - this.weekday());
                break;
            case "isoWeek":
                i = r(this.year(), this.month(), this.date() - (this.isoWeekday() - 1));
                break;
            case "day":
            case "date":
                i = r(this.year(), this.month(), this.date());
                break;
            case "hour":
                i = this._d.valueOf();
                i -= ki(i + (this._isUTC ? 0 : 6e4 * this.utcOffset()), 36e5);
                break;
            case "minute":
                i = this._d.valueOf();
                i -= ki(i, 6e4);
                break;
            case "second":
                i = this._d.valueOf();
                i -= ki(i, 1e3)
        }
        return this._d.setTime(i), t.updateOffset(this, !0), this
    };
    n.subtract = or;
    n.toArray = function() {
        var n = this;
        return [n.year(), n.month(), n.date(), n.hour(), n.minute(), n.second(), n.millisecond()]
    };
    n.toObject = function() {
        var n = this;
        return {
            years: n.year(),
            months: n.month(),
            date: n.date(),
            hours: n.hours(),
            minutes: n.minutes(),
            seconds: n.seconds(),
            milliseconds: n.milliseconds()
        }
    };
    n.toDate = function() {
        return new Date(this.valueOf())
    };
    n.toISOString = function(n) {
        if (!this.isValid()) return null;
        var t = (n = !0 !== n) ? this.clone().utc() : this;
        return t.year() < 0 || 9999 < t.year() ? ar(t, n ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ") : ot(Date.prototype.toISOString) ? n ? this.toDate().toISOString() : new Date(this.valueOf() + 6e4 * this.utcOffset()).toISOString().replace("Z", ar(t, "Z")) : ar(t, n ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ")
    };
    n.inspect = function() {
        if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";
        var t, n = "moment",
            i = "";
        return this.isLocal() || (n = 0 === this.utcOffset() ? "moment.utc" : "moment.parseZone", i = "Z"), n = "[" + n + '("]', t = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY", this.format(n + t + "-MM-DD[T]HH:mm:ss.SSS" + (i + '[")]'))
    };
    "undefined" != typeof Symbol && null != Symbol.for && (n[Symbol.for("nodejs.util.inspect.custom")] = function() {
        return "Moment<" + this.format() + ">"
    });
    n.toJSON = function() {
        return this.isValid() ? this.toISOString() : null
    };
    n.toString = function() {
        return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
    };
    n.unix = function() {
        return Math.floor(this.valueOf() / 1e3)
    };
    n.valueOf = function() {
        return this._d.valueOf() - 6e4 * (this._offset || 0)
    };
    n.creationData = function() {
        return {
            input: this._i,
            format: this._f,
            locale: this._locale,
            isUTC: this._isUTC,
            strict: this._strict
        }
    };
    n.eraName = function() {
        for (var i, t = this.localeData().eras(), n = 0, r = t.length; n < r; ++n)
            if ((i = this.clone().startOf("day").valueOf(), t[n].since <= i && i <= t[n].until) || t[n].until <= i && i <= t[n].since) return t[n].name;
        return ""
    };
    n.eraNarrow = function() {
        for (var i, t = this.localeData().eras(), n = 0, r = t.length; n < r; ++n)
            if ((i = this.clone().startOf("day").valueOf(), t[n].since <= i && i <= t[n].until) || t[n].until <= i && i <= t[n].since) return t[n].narrow;
        return ""
    };
    n.eraAbbr = function() {
        for (var i, t = this.localeData().eras(), n = 0, r = t.length; n < r; ++n)
            if ((i = this.clone().startOf("day").valueOf(), t[n].since <= i && i <= t[n].until) || t[n].until <= i && i <= t[n].since) return t[n].abbr;
        return ""
    };
    n.eraYear = function() {
        for (var u, r, i = this.localeData().eras(), n = 0, f = i.length; n < f; ++n)
            if (u = i[n].since <= i[n].until ? 1 : -1, r = this.clone().startOf("day").valueOf(), i[n].since <= r && r <= i[n].until || i[n].until <= r && r <= i[n].since) return (this.year() - t(i[n].since).year()) * u + i[n].offset;
        return this.year()
    };
    n.year = nu;
    n.isLeapYear = function() {
        return vr(this.year())
    };
    n.weekYear = function(n) {
        return po.call(this, n, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy)
    };
    n.isoWeekYear = function(n) {
        return po.call(this, n, this.isoWeek(), this.isoWeekday(), 1, 4)
    };
    n.quarter = n.quarters = function(n) {
        return null == n ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (n - 1) + this.month() % 3)
    };
    n.month = ce;
    n.daysInMonth = function() {
        return gr(this.year(), this.month())
    };
    n.week = n.weeks = function(n) {
        var t = this.localeData().week(this);
        return null == n ? t : this.add(7 * (n - t), "d")
    };
    n.isoWeek = n.isoWeeks = function(n) {
        var t = er(this, 1, 4).week;
        return null == n ? t : this.add(7 * (n - t), "d")
    };
    n.weeksInYear = function() {
        var n = this.localeData()._week;
        return pt(this.year(), n.dow, n.doy)
    };
    n.weeksInWeekYear = function() {
        var n = this.localeData()._week;
        return pt(this.weekYear(), n.dow, n.doy)
    };
    n.isoWeeksInYear = function() {
        return pt(this.year(), 1, 4)
    };
    n.isoWeeksInISOWeekYear = function() {
        return pt(this.isoWeekYear(), 1, 4)
    };
    n.date = fi;
    n.day = n.days = function(n) {
        if (!this.isValid()) return null != n ? this : NaN;
        var t, i, r = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
        return null != n ? (t = n, i = this.localeData(), n = "string" != typeof t ? t : isNaN(t) ? "number" == typeof(t = i.weekdaysParse(t)) ? t : null : parseInt(t, 10), this.add(n - r, "d")) : r
    };
    n.weekday = function(n) {
        if (!this.isValid()) return null != n ? this : NaN;
        var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
        return null == n ? t : this.add(n - t, "d")
    };
    n.isoWeekday = function(n) {
        return this.isValid() ? null != n ? (t = n, i = this.localeData(), i = "string" == typeof t ? i.weekdaysParse(t) % 7 || 7 : isNaN(t) ? null : t, this.day(this.day() % 7 ? i : i - 7)) : this.day() || 7 : null != n ? this : NaN;
        var t, i
    };
    n.dayOfYear = function(n) {
        var t = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
        return null == n ? t : this.add(n - t, "d")
    };
    n.hour = n.hours = at;
    n.minute = n.minutes = ri;
    n.second = n.seconds = gt;
    n.millisecond = n.milliseconds = ui;
    n.utcOffset = function(n, i, r) {
        var u, f = this._offset || 0;
        if (!this.isValid()) return null != n ? this : NaN;
        if (null == n) return this._isUTC ? f : vf(this);
        if ("string" == typeof n) {
            if (null === (n = lf(br, n))) return this
        } else Math.abs(n) < 16 && !r && (n *= 60);
        return !this._isUTC && i && (u = vf(this)), this._offset = n, this._isUTC = !0, null != u && this.add(u, "m"), f !== n && (!i || this._changeInProgress ? ho(this, ft(n - f, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, t.updateOffset(this, !0), this._changeInProgress = null)), this
    };
    n.utc = function(n) {
        return this.utcOffset(0, n)
    };
    n.local = function(n) {
        return this._isUTC && (this.utcOffset(0, n), this._isUTC = !1, n && this.subtract(vf(this), "m")), this
    };
    n.parseZone = function() {
        var n;
        return null != this._tzm ? this.utcOffset(this._tzm, !1, !0) : "string" == typeof this._i && (null != (n = lf(is, this._i)) ? this.utcOffset(n) : this.utcOffset(0, !0)), this
    };
    n.hasAlignedHourOffset = function(n) {
        return !!this.isValid() && (n = n ? l(n).utcOffset() : 0, (this.utcOffset() - n) % 60 == 0)
    };
    n.isDST = function() {
        return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
    };
    n.isLocal = function() {
        return !!this.isValid() && !this._isUTC
    };
    n.isUtcOffset = function() {
        return !!this.isValid() && this._isUTC
    };
    n.isUtc = uo;
    n.isUTC = uo;
    n.zoneAbbr = function() {
        return this._isUTC ? "UTC" : ""
    };
    n.zoneName = function() {
        return this._isUTC ? "Coordinated Universal Time" : ""
    };
    n.dates = g("dates accessor is deprecated. Use date instead.", fi);
    n.months = g("months accessor is deprecated. Use month instead", ce);
    n.years = g("years accessor is deprecated. Use year instead", nu);
    n.zone = g("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", function(n, t) {
        return null != n ? (this.utcOffset(n = "string" != typeof n ? -n : n, t), this) : -this.utcOffset()
    });
    n.isDSTShifted = g("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", function() {
        if (!k(this._isDSTShifted)) return this._isDSTShifted;
        var t, n = {};
        return pu(n, this), (n = ge(n))._a ? (t = (n._isUTC ? et : l)(n._a), this._isDSTShifted = this.isValid() && 0 < function(n, t, i) {
            for (var f = Math.min(n.length, t.length), o = Math.abs(n.length - t.length), u = 0, r = 0; r < f; r++)(i && n[r] !== t[r] || !i && e(n[r]) !== e(t[r])) && u++;
            return u + o
        }(n._a, t.toArray())) : this._isDSTShifted = !1, this._isDSTShifted
    });
    u = bu.prototype;
    u.calendar = function(n, t, i) {
        return ot(n = this._calendar[n] || this._calendar.sameElse) ? n.call(t, i) : n
    };
    u.longDateFormat = function(n) {
        var t = this._longDateFormat[n],
            i = this._longDateFormat[n.toUpperCase()];
        return t || !i ? t : (this._longDateFormat[n] = i.match(ku).map(function(n) {
            return "MMMM" === n || "MM" === n || "DD" === n || "dddd" === n ? n.slice(1) : n
        }).join(""), this._longDateFormat[n])
    };
    u.invalidDate = function() {
        return this._invalidDate
    };
    u.ordinal = function(n) {
        return this._ordinal.replace("%d", n)
    };
    u.preparse = wo;
    u.postformat = wo;
    u.relativeTime = function(n, t, i, r) {
        var u = this._relativeTime[i];
        return ot(u) ? u(n, t, i, r) : u.replace(/%d/i, n)
    };
    u.pastFuture = function(n, t) {
        return ot(n = this._relativeTime[0 < n ? "future" : "past"]) ? n(t) : n.replace(/%s/i, t)
    };
    u.set = function(n) {
        var i;
        for (var t in n) s(n, t) && (ot(i = n[t]) ? this[t] = i : this["_" + t] = i);
        this._config = n;
        this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source)
    };
    u.eras = function() {
        for (var r, n = this._eras || wt("en")._eras, i = 0, u = n.length; i < u; ++i) {
            switch (typeof n[i].since) {
                case "string":
                    r = t(n[i].since).startOf("day");
                    n[i].since = r.valueOf()
            }
            switch (typeof n[i].until) {
                case "undefined":
                    n[i].until = 1 / 0;
                    break;
                case "string":
                    r = t(n[i].until).startOf("day").valueOf();
                    n[i].until = r.valueOf()
            }
        }
        return n
    };
    u.erasParse = function(n, t, i) {
        var r, s, f, e, o, u = this.eras();
        for (n = n.toUpperCase(), r = 0, s = u.length; r < s; ++r)
            if (f = u[r].name.toUpperCase(), e = u[r].abbr.toUpperCase(), o = u[r].narrow.toUpperCase(), i) switch (t) {
                case "N":
                case "NN":
                case "NNN":
                    if (e === n) return u[r];
                    break;
                case "NNNN":
                    if (f === n) return u[r];
                    break;
                case "NNNNN":
                    if (o === n) return u[r]
            } else if (0 <= [f, e, o].indexOf(n)) return u[r]
    };
    u.erasConvertYear = function(n, i) {
        var r = n.since <= n.until ? 1 : -1;
        return void 0 === i ? t(n.since).year() : t(n.since).year() + (i - n.offset) * r
    };
    u.erasAbbrRegex = function(n) {
        return s(this, "_erasAbbrRegex") || wf.call(this), n ? this._erasAbbrRegex : this._erasRegex
    };
    u.erasNameRegex = function(n) {
        return s(this, "_erasNameRegex") || wf.call(this), n ? this._erasNameRegex : this._erasRegex
    };
    u.erasNarrowRegex = function(n) {
        return s(this, "_erasNarrowRegex") || wf.call(this), n ? this._erasNarrowRegex : this._erasRegex
    };
    u.months = function(n, t) {
        return n ? (it(this._months) ? this._months : this._months[(this._months.isFormat || se).test(t) ? "format" : "standalone"])[n.month()] : it(this._months) ? this._months : this._months.standalone
    };
    u.monthsShort = function(n, t) {
        return n ? (it(this._monthsShort) ? this._monthsShort : this._monthsShort[se.test(t) ? "format" : "standalone"])[n.month()] : it(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone
    };
    u.monthsParse = function(n, t, i) {
        var r, u;
        if (this._monthsParseExact) return function(n, t, i) {
            var u, r, f, n = n.toLocaleLowerCase();
            if (!this._monthsParse)
                for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], u = 0; u < 12; ++u) f = et([2e3, u]), this._shortMonthsParse[u] = this.monthsShort(f, "").toLocaleLowerCase(), this._longMonthsParse[u] = this.months(f, "").toLocaleLowerCase();
            return i ? "MMM" === t ? -1 !== (r = v.call(this._shortMonthsParse, n)) ? r : null : -1 !== (r = v.call(this._longMonthsParse, n)) ? r : null : "MMM" === t ? -1 !== (r = v.call(this._shortMonthsParse, n)) || -1 !== (r = v.call(this._longMonthsParse, n)) ? r : null : -1 !== (r = v.call(this._longMonthsParse, n)) || -1 !== (r = v.call(this._shortMonthsParse, n)) ? r : null
        }.call(this, n, t, i);
        for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), r = 0; r < 12; r++)
            if ((u = et([2e3, r]), i && !this._longMonthsParse[r] && (this._longMonthsParse[r] = new RegExp("^" + this.months(u, "").replace(".", "") + "$", "i"), this._shortMonthsParse[r] = new RegExp("^" + this.monthsShort(u, "").replace(".", "") + "$", "i")), i || this._monthsParse[r] || (u = "^" + this.months(u, "") + "|^" + this.monthsShort(u, ""), this._monthsParse[r] = new RegExp(u.replace(".", ""), "i")), i && "MMMM" === t && this._longMonthsParse[r].test(n)) || i && "MMM" === t && this._shortMonthsParse[r].test(n) || !i && this._monthsParse[r].test(n)) return r
    };
    u.monthsRegex = function(n) {
        return this._monthsParseExact ? (s(this, "_monthsRegex") || le.call(this), n ? this._monthsStrictRegex : this._monthsRegex) : (s(this, "_monthsRegex") || (this._monthsRegex = os), this._monthsStrictRegex && n ? this._monthsStrictRegex : this._monthsRegex)
    };
    u.monthsShortRegex = function(n) {
        return this._monthsParseExact ? (s(this, "_monthsRegex") || le.call(this), n ? this._monthsShortStrictRegex : this._monthsShortRegex) : (s(this, "_monthsShortRegex") || (this._monthsShortRegex = es), this._monthsShortStrictRegex && n ? this._monthsShortStrictRegex : this._monthsShortRegex)
    };
    u.week = function(n) {
        return er(n, this._week.dow, this._week.doy).week
    };
    u.firstDayOfYear = function() {
        return this._week.doy
    };
    u.firstDayOfWeek = function() {
        return this._week.dow
    };
    u.weekdays = function(n, t) {
        return t = it(this._weekdays) ? this._weekdays : this._weekdays[n && !0 !== n && this._weekdays.isFormat.test(t) ? "format" : "standalone"], !0 === n ? tf(t, this._week.dow) : n ? t[n.day()] : t
    };
    u.weekdaysMin = function(n) {
        return !0 === n ? tf(this._weekdaysMin, this._week.dow) : n ? this._weekdaysMin[n.day()] : this._weekdaysMin
    };
    u.weekdaysShort = function(n) {
        return !0 === n ? tf(this._weekdaysShort, this._week.dow) : n ? this._weekdaysShort[n.day()] : this._weekdaysShort
    };
    u.weekdaysParse = function(n, t, i) {
        var r, u;
        if (this._weekdaysParseExact) return function(n, t, i) {
            var u, r, f, n = n.toLocaleLowerCase();
            if (!this._weekdaysParse)
                for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], u = 0; u < 7; ++u) f = et([2e3, 1]).day(u), this._minWeekdaysParse[u] = this.weekdaysMin(f, "").toLocaleLowerCase(), this._shortWeekdaysParse[u] = this.weekdaysShort(f, "").toLocaleLowerCase(), this._weekdaysParse[u] = this.weekdays(f, "").toLocaleLowerCase();
            return i ? "dddd" === t ? -1 !== (r = v.call(this._weekdaysParse, n)) ? r : null : "ddd" === t ? -1 !== (r = v.call(this._shortWeekdaysParse, n)) ? r : null : -1 !== (r = v.call(this._minWeekdaysParse, n)) ? r : null : "dddd" === t ? -1 !== (r = v.call(this._weekdaysParse, n)) || -1 !== (r = v.call(this._shortWeekdaysParse, n)) || -1 !== (r = v.call(this._minWeekdaysParse, n)) ? r : null : "ddd" === t ? -1 !== (r = v.call(this._shortWeekdaysParse, n)) || -1 !== (r = v.call(this._weekdaysParse, n)) || -1 !== (r = v.call(this._minWeekdaysParse, n)) ? r : null : -1 !== (r = v.call(this._minWeekdaysParse, n)) || -1 !== (r = v.call(this._weekdaysParse, n)) || -1 !== (r = v.call(this._shortWeekdaysParse, n)) ? r : null
        }.call(this, n, t, i);
        for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), r = 0; r < 7; r++)
            if ((u = et([2e3, 1]).day(r), i && !this._fullWeekdaysParse[r] && (this._fullWeekdaysParse[r] = new RegExp("^" + this.weekdays(u, "").replace(".", "\\.?") + "$", "i"), this._shortWeekdaysParse[r] = new RegExp("^" + this.weekdaysShort(u, "").replace(".", "\\.?") + "$", "i"), this._minWeekdaysParse[r] = new RegExp("^" + this.weekdaysMin(u, "").replace(".", "\\.?") + "$", "i")), this._weekdaysParse[r] || (u = "^" + this.weekdays(u, "") + "|^" + this.weekdaysShort(u, "") + "|^" + this.weekdaysMin(u, ""), this._weekdaysParse[r] = new RegExp(u.replace(".", ""), "i")), i && "dddd" === t && this._fullWeekdaysParse[r].test(n)) || i && "ddd" === t && this._shortWeekdaysParse[r].test(n) || i && "dd" === t && this._minWeekdaysParse[r].test(n) || !i && this._weekdaysParse[r].test(n)) return r
    };
    u.weekdaysRegex = function(n) {
        return this._weekdaysParseExact ? (s(this, "_weekdaysRegex") || rf.call(this), n ? this._weekdaysStrictRegex : this._weekdaysRegex) : (s(this, "_weekdaysRegex") || (this._weekdaysRegex = hs), this._weekdaysStrictRegex && n ? this._weekdaysStrictRegex : this._weekdaysRegex)
    };
    u.weekdaysShortRegex = function(n) {
        return this._weekdaysParseExact ? (s(this, "_weekdaysRegex") || rf.call(this), n ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (s(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = cs), this._weekdaysShortStrictRegex && n ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
    };
    u.weekdaysMinRegex = function(n) {
        return this._weekdaysParseExact ? (s(this, "_weekdaysRegex") || rf.call(this), n ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (s(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = ls), this._weekdaysMinStrictRegex && n ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
    };
    u.isPM = function(n) {
        return "p" === (n + "").toLowerCase().charAt(0)
    };
    u.meridiem = function(n, t, i) {
        return 11 < n ? i ? "pm" : "PM" : i ? "am" : "AM"
    };
    ni("en", {
        eras: [{
            since: "0001-01-01",
            until: 1 / 0,
            offset: 1,
            name: "Anno Domini",
            narrow: "AD",
            abbr: "AD"
        }, {
            since: "0000-12-31",
            until: -1 / 0,
            offset: 1,
            name: "Before Christ",
            narrow: "BC",
            abbr: "BC"
        }],
        dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
        ordinal: function(n) {
            var t = n % 10;
            return n + (1 === e(n % 100 / 10) ? "th" : 1 == t ? "st" : 2 == t ? "nd" : 3 == t ? "rd" : "th")
        }
    });
    t.lang = g("moment.lang is deprecated. Use moment.locale instead.", ni);
    t.langData = g("moment.langData is deprecated. Use moment.localeData instead.", wt);
    ct = Math.abs;
    yi = bt("ms");
    pr = bt("s");
    rr = bt("m");
    vi = bt("h");
    ai = bt("d");
    or = bt("w");
    at = bt("M");
    ri = bt("Q");
    gt = bt("y");
    var ui = si("milliseconds"),
        fi = si("seconds"),
        nu = si("minutes"),
        u = si("hours"),
        th = si("days"),
        ih = si("months"),
        rh = si("years"),
        kt = Math.round,
        di = {
            ss: 44,
            s: 45,
            m: 45,
            h: 22,
            d: 26,
            w: null,
            M: 11
        };
    return cu = Math.abs, o = fu.prototype, o.isValid = function() {
        return this._isValid
    }, o.abs = function() {
        var n = this._data;
        return this._milliseconds = ct(this._milliseconds), this._days = ct(this._days), this._months = ct(this._months), n.milliseconds = ct(n.milliseconds), n.seconds = ct(n.seconds), n.minutes = ct(n.minutes), n.hours = ct(n.hours), n.months = ct(n.months), n.years = ct(n.years), this
    }, o.add = function(n, t) {
        return ko(this, n, t, 1)
    }, o.subtract = function(n, t) {
        return ko(this, n, t, -1)
    }, o.as = function(n) {
        if (!this.isValid()) return NaN;
        var t, r, i = this._milliseconds;
        if ("month" === (n = nt(n)) || "quarter" === n || "year" === n) switch (t = this._days + i / 864e5, r = this._months + ns(t), n) {
            case "month":
                return r;
            case "quarter":
                return r / 3;
            case "year":
                return r / 12
        } else switch (t = this._days + Math.round(kf(this._months)), n) {
            case "week":
                return t / 7 + i / 6048e5;
            case "day":
                return t + i / 864e5;
            case "hour":
                return 24 * t + i / 36e5;
            case "minute":
                return 1440 * t + i / 6e4;
            case "second":
                return 86400 * t + i / 1e3;
            case "millisecond":
                return Math.floor(864e5 * t) + i;
            default:
                throw new Error("Unknown unit " + n);
        }
    }, o.asMilliseconds = yi, o.asSeconds = pr, o.asMinutes = rr, o.asHours = vi, o.asDays = ai, o.asWeeks = or, o.asMonths = at, o.asQuarters = ri, o.asYears = gt, o.valueOf = function() {
        return this.isValid() ? this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * e(this._months / 12) : NaN
    }, o._bubble = function() {
        var n = this._milliseconds,
            t = this._days,
            i = this._months,
            r = this._data;
        return 0 <= n && 0 <= t && 0 <= i || n <= 0 && t <= 0 && i <= 0 || (n += 864e5 * go(kf(i) + t), i = t = 0), r.milliseconds = n % 1e3, n = tt(n / 1e3), r.seconds = n % 60, n = tt(n / 60), r.minutes = n % 60, n = tt(n / 60), r.hours = n % 24, t += tt(n / 24), i += n = tt(ns(t)), t -= go(kf(n)), n = tt(i / 12), i %= 12, r.days = t, r.months = i, r.years = n, this
    }, o.clone = function() {
        return ft(this)
    }, o.get = function(n) {
        return n = nt(n), this.isValid() ? this[n + "s"]() : NaN
    }, o.milliseconds = ui, o.seconds = fi, o.minutes = nu, o.hours = u, o.days = th, o.weeks = function() {
        return tt(this.days() / 7)
    }, o.months = ih, o.years = rh, o.humanize = function(n, t) {
        if (!this.isValid()) return this.localeData().invalidDate();
        var i = !1,
            r = di;
        return "object" == typeof n && (t = n, n = !1), "boolean" == typeof n && (i = n), "object" == typeof t && (r = Object.assign({}, di, t), null != t.s && null == t.ss && (r.ss = t.s - 1)), n = this.localeData(), t = uh(this, !i, r, n), i && (t = n.pastFuture(+this, t)), n.postformat(t)
    }, o.toISOString = lu, o.toString = lu, o.toJSON = lu, o.locale = lo, o.localeData = ao, o.toIsoString = g("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", lu), o.lang = iu, r("X", 0, 0, "unix"), r("x", 0, 0, "valueOf"), i("x", wr), i("X", /[+-]?\d+(\.\d{1,3})?/), h("X", function(n, t, i) {
        i._d = new Date(1e3 * parseFloat(n))
    }), h("x", function(n, t, i) {
        i._d = new Date(e(n))
    }), t.version = "2.29.4", df = l, t.fn = n, t.min = function() {
        return to("isBefore", [].slice.call(arguments, 0))
    }, t.max = function() {
        return to("isAfter", [].slice.call(arguments, 0))
    }, t.now = function() {
        return Date.now ? Date.now() : +new Date
    }, t.utc = et, t.unix = function(n) {
        return l(1e3 * n)
    }, t.months = function(n, t) {
        return bo(n, t, "months")
    }, t.isDate = nr, t.locale = ni, t.invalid = cr, t.duration = ft, t.isMoment = rt, t.weekdays = function(n, t, i) {
        return bf(n, t, i, "weekdays")
    }, t.parseZone = function() {
        return l.apply(null, arguments).parseZone()
    }, t.localeData = wt, t.isDuration = eu, t.monthsShort = function(n, t) {
        return bo(n, t, "monthsShort")
    }, t.weekdaysMin = function(n, t, i) {
        return bf(n, t, i, "weekdaysMin")
    }, t.defineLocale = ff, t.updateLocale = function(n, t) {
        var r, i;
        return null != t ? (i = we, null != a[n] && null != a[n].parentLocale ? a[n].set(wu(a[n]._config, t)) : (t = wu(i = null != (r = ru(n)) ? r._config : i, t), null == r && (t.abbr = n), (i = new bu(t)).parentLocale = a[n], a[n] = i), ni(n)) : null != a[n] && (null != a[n].parentLocale ? (a[n] = a[n].parentLocale, n === ni() && ni(n)) : null != a[n] && delete a[n]), a[n]
    }, t.locales = function() {
        return ue(a)
    }, t.weekdaysShort = function(n, t, i) {
        return bf(n, t, i, "weekdaysShort")
    }, t.normalizeUnits = nt, t.relativeTimeRounding = function(n) {
        return void 0 === n ? kt : "function" == typeof n && (kt = n, !0)
    }, t.relativeTimeThreshold = function(n, t) {
        return void 0 !== di[n] && (void 0 === t ? di[n] : (di[n] = t, "s" === n && (di.ss = t - 1), !0))
    }, t.calendarFormat = function(n, t) {
        return (n = n.diff(t, "days", !0)) < -6 ? "sameElse" : n < -1 ? "lastWeek" : n < 0 ? "lastDay" : n < 1 ? "sameDay" : n < 2 ? "nextDay" : n < 7 ? "nextWeek" : "sameElse"
    }, t.prototype = n, t.HTML5_FMT = {
        DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
        DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
        DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
        DATE: "YYYY-MM-DD",
        TIME: "HH:mm",
        TIME_SECONDS: "HH:mm:ss",
        TIME_MS: "HH:mm:ss.SSS",
        WEEK: "GGGG-[W]WW",
        MONTH: "YYYY-MM"
    }, t
});
var hasInputCheckValidity = typeof HTMLInputElement.prototype.checkValidity == "function",
    hasTextAreaCheckValidity = typeof HTMLTextAreaElement.prototype.checkValidity == "function",
    hasSelectCheckValidity = typeof HTMLSelectElement.prototype.checkValidity == "function",
    hasFieldSetCheckValidity = typeof HTMLFieldSetElement.prototype.checkValidity == "function",
    hasFormCheckValidity = typeof HTMLFormElement.prototype.checkValidity == "function";
hasInputCheckValidity || (HTMLInputElement.prototype.checkValidity = function() {
    var n = !0,
        p = this.getAttribute("name"),
        w = !(this.type == "button" || this.type == "image" || this.type == "reset" || this.type == "submit" || this.type == "hidden" || this.type == "file"),
        c, l, i, e, o, s, h, t;
    if (w)
        if (c = this.type == "checkbox", l = this.type == "radio", c || l) {
            var u = this.form.elements[p],
                a = !1,
                f = !1;
            for (i = 0; i < u; i++) u[i].getAttribute("required") != null && (f = !0), u[i].checked && (a = !0);
            f && !a && (n = !1)
        } else {
            var f = this.getAttribute("required") != null,
                r = this.value == "",
                v = this.getAttribute("pattern") != null,
                y = !0;
            v && (t = new RegExp(this.getAttribute("pattern")), y = t.test(this.value));
            e = this.type == "url";
            o = !0;
            e && (t = new RegExp('^(https?|ftps?):[^ "]*$'), o = t.test(this.value));
            s = this.type == "email";
            h = !0;
            s && (t = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/, h = t.test(this.value));
            f && r ? n = !1 : !v || y || r ? !e || o || r ? !s || h || r || (n = !1) : n = !1 : n = !1
        } return n
});
hasTextAreaCheckValidity || (HTMLTextAreaElement.prototype.checkValidity = function() {
    var n = !0,
        t = this.getAttribute("required") != null,
        i = this.value == "",
        r;
    return t && i && (n = !1), r = this.getAttribute("name"), n
});
hasSelectCheckValidity || (HTMLSelectElement.prototype.checkValidity = function() {
    var n = !0,
        t = this.getAttribute("required") != null,
        i = this.value == "",
        r;
    return t && i && (n = !1), r = this.getAttribute("name"), n
});
hasFieldSetCheckValidity || (HTMLFieldSetElement.prototype.checkValidity = function() {
    return !0
});
HTMLFieldSetElement.prototype.checkFieldsetValidity = function() {
    for (var i, f, e, r = !0, u = this.children, t = [], n = 0; n < u.length; n++) i = function(i) {
        for (var f = u[n].getElementsByTagName(i), r = 0; r < f.length; r++) t = t.concat(f[r])
    }, i("textarea"), i("select"), i("input");
    for (n = 0; n < t.length; n++)
        if (f = t[n].getAttribute("required") != null, e = t[n].value == "", f && e) {
            r = !1;
            break
        } return r
};
hasFormCheckValidity || (HTMLFormElement.prototype.checkValidity = function() {
        for (var i, t = !0, n = 0; n < this.elements.length; n++) i = this.elements[n].checkValidity(), i == !1 && (t = !1);
        return t
    }),
    function() {
        (function(n) {
            var r = this || eval("this"),
                i = r.document,
                f = r.navigator,
                t = r.jQuery,
                u = r.JSON;
            t || "undefined" == typeof jQuery || (t = jQuery),
                function(n) {
                    "function" == typeof define && define.amd ? define(["exports", "require"], n) : "object" == typeof exports && "object" == typeof module ? n(module.exports || exports) : n(r.ko = {})
                }(function(e, o) {
                    function b(n, t) {
                        return null === n || typeof n in d ? n === t : !1
                    }

                    function g(t, i) {
                        var r;
                        return function() {
                            r || (r = s.a.setTimeout(function() {
                                r = n;
                                t()
                            }, i))
                        }
                    }

                    function nt(n, t) {
                        var i;
                        return function() {
                            clearTimeout(i);
                            i = s.a.setTimeout(n, t)
                        }
                    }

                    function tt(n, t) {
                        t && "change" !== t ? "beforeChange" === t ? this.pc(n) : this.gb(n, t) : this.qc(n)
                    }

                    function it(n, t) {
                        null !== t && t.s && t.s()
                    }

                    function rt(n, t) {
                        var i = this.qd,
                            r = i[h];
                        r.ra || (this.Qb && this.mb[t] ? (i.uc(t, n, this.mb[t]), this.mb[t] = null, --this.Qb) : r.I[t] || i.uc(t, n, r.J ? {
                            da: n
                        } : i.$c(n)), n.Ja && n.gd())
                    }
                    var s = "undefined" != typeof e ? e : {},
                        d, l, v, a, y, h, p, k, w;
                    s.b = function(n, t) {
                        for (var i = n.split("."), r = s, u = 0; u < i.length - 1; u++) r = r[i[u]];
                        r[i[i.length - 1]] = t
                    };
                    s.L = function(n, t, i) {
                        n[t] = i
                    };
                    s.version = "3.5.1";
                    s.b("version", s.version);
                    s.options = {
                        deferUpdates: !1,
                        useOnlyNativeEvents: !1,
                        foreachHidesDestroyed: !1
                    };
                    s.a = function() {
                        function o(n, t) {
                            for (var i in n) h.call(n, i) && t(i, n[i])
                        }

                        function v(n, t) {
                            if (t)
                                for (var i in t) h.call(t, i) && (n[i] = t[i]);
                            return n
                        }

                        function y(n, t) {
                            return n.__proto__ = t, n
                        }

                        function p(n, t, i, r) {
                            var u = n[t].match(l) || [];
                            s.a.D(i.match(l), function(n) {
                                s.a.Na(u, n, r)
                            });
                            n[t] = u.join(" ")
                        }
                        var h = Object.prototype.hasOwnProperty,
                            w = {
                                __proto__: []
                            }
                        instanceof Array, k = "function" == typeof Symbol, c = {}, b = {};
                        c[f && /Firefox\/2/i.test(f.userAgent) ? "KeyboardEvent" : "UIEvents"] = ["keyup", "keydown", "keypress"];
                        c.MouseEvents = "click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave".split(" ");
                        o(c, function(n, t) {
                            if (t.length)
                                for (var i = 0, r = t.length; i < r; i++) b[t[i]] = n
                        });
                        var d = {
                                propertychange: !0
                            },
                            e = i && function() {
                                for (var t = 3, r = i.createElement("div"), u = r.getElementsByTagName("i"); r.innerHTML = "<!--[if gt IE " + ++t + "]><i><\/i><![endif]-->", u[0];);
                                return 4 < t ? t : n
                            }(),
                            l = /\S+/g,
                            a;
                        return {
                            Jc: ["authenticity_token", /^__RequestVerificationToken(_.*)?$/],
                            D: function(n, t, i) {
                                for (var r = 0, u = n.length; r < u; r++) t.call(i, n[r], r, n)
                            },
                            A: "function" == typeof Array.prototype.indexOf ? function(n, t) {
                                return Array.prototype.indexOf.call(n, t)
                            } : function(n, t) {
                                for (var i = 0, r = n.length; i < r; i++)
                                    if (n[i] === t) return i;
                                return -1
                            },
                            Lb: function(t, i, r) {
                                for (var u = 0, f = t.length; u < f; u++)
                                    if (i.call(r, t[u], u, t)) return t[u];
                                return n
                            },
                            Pa: function(n, t) {
                                var i = s.a.A(n, t);
                                0 < i ? n.splice(i, 1) : 0 === i && n.shift()
                            },
                            wc: function(n) {
                                var t = [];
                                return n && s.a.D(n, function(n) {
                                    0 > s.a.A(t, n) && t.push(n)
                                }), t
                            },
                            Mb: function(n, t, i) {
                                var u = [],
                                    r, f;
                                if (n)
                                    for (r = 0, f = n.length; r < f; r++) u.push(t.call(i, n[r], r));
                                return u
                            },
                            jb: function(n, t, i) {
                                var u = [],
                                    r, f;
                                if (n)
                                    for (r = 0, f = n.length; r < f; r++) t.call(i, n[r], r) && u.push(n[r]);
                                return u
                            },
                            Nb: function(n, t) {
                                if (t instanceof Array) n.push.apply(n, t);
                                else
                                    for (var i = 0, r = t.length; i < r; i++) n.push(t[i]);
                                return n
                            },
                            Na: function(n, t, i) {
                                var r = s.a.A(s.a.bc(n), t);
                                0 > r ? i && n.push(t) : i || n.splice(r, 1)
                            },
                            Ba: w,
                            extend: v,
                            setPrototypeOf: y,
                            Ab: w ? y : v,
                            P: o,
                            Ga: function(n, t, i) {
                                if (!n) return n;
                                var u = {};
                                for (var r in n) h.call(n, r) && (u[r] = t.call(i, n[r], r, n));
                                return u
                            },
                            Tb: function(n) {
                                for (; n.firstChild;) s.removeNode(n.firstChild)
                            },
                            Yb: function(n) {
                                n = s.a.la(n);
                                for (var r = (n[0] && n[0].ownerDocument || i).createElement("div"), t = 0, u = n.length; t < u; t++) r.appendChild(s.oa(n[t]));
                                return r
                            },
                            Ca: function(n, t) {
                                for (var r, i = 0, f = n.length, u = []; i < f; i++) r = n[i].cloneNode(!0), u.push(t ? s.oa(r) : r);
                                return u
                            },
                            va: function(n, t) {
                                if (s.a.Tb(n), t)
                                    for (var i = 0, r = t.length; i < r; i++) n.appendChild(t[i])
                            },
                            Xc: function(n, t) {
                                var r = n.nodeType ? [n] : n;
                                if (0 < r.length) {
                                    for (var f = r[0], e = f.parentNode, i = 0, u = t.length; i < u; i++) e.insertBefore(t[i], f);
                                    for (i = 0, u = r.length; i < u; i++) s.removeNode(r[i])
                                }
                            },
                            Ua: function(n, t) {
                                if (n.length) {
                                    for (t = 8 === t.nodeType && t.parentNode || t; n.length && n[0].parentNode !== t;) n.splice(0, 1);
                                    for (; 1 < n.length && n[n.length - 1].parentNode !== t;) n.length--;
                                    if (1 < n.length) {
                                        var i = n[0],
                                            r = n[n.length - 1];
                                        for (n.length = 0; i !== r;) n.push(i), i = i.nextSibling;
                                        n.push(r)
                                    }
                                }
                                return n
                            },
                            Zc: function(n, t) {
                                7 > e ? n.setAttribute("selected", t) : n.selected = t
                            },
                            Db: function(t) {
                                return null === t || t === n ? "" : t.trim ? t.trim() : t.toString().replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
                            },
                            Ud: function(n, t) {
                                return n = n || "", t.length > n.length ? !1 : n.substring(0, t.length) === t
                            },
                            vd: function(n, t) {
                                if (n === t) return !0;
                                if (11 === n.nodeType) return !1;
                                if (t.contains) return t.contains(1 !== n.nodeType ? n.parentNode : n);
                                if (t.compareDocumentPosition) return 16 == (t.compareDocumentPosition(n) & 16);
                                for (; n && n != t;) n = n.parentNode;
                                return !!n
                            },
                            Sb: function(n) {
                                return s.a.vd(n, n.ownerDocument.documentElement)
                            },
                            kd: function(n) {
                                return !!s.a.Lb(n, s.a.Sb)
                            },
                            R: function(n) {
                                return n && n.tagName && n.tagName.toLowerCase()
                            },
                            Ac: function(n) {
                                return s.onError ? function() {
                                    try {
                                        return n.apply(this, arguments)
                                    } catch (t) {
                                        throw s.onError && s.onError(t), t;
                                    }
                                } : n
                            },
                            setTimeout: function(n, t) {
                                return setTimeout(s.a.Ac(n), t)
                            },
                            Gc: function(n) {
                                setTimeout(function() {
                                    s.onError && s.onError(n);
                                    throw n;
                                }, 0)
                            },
                            B: function(n, i, r) {
                                var u = s.a.Ac(r),
                                    f, e;
                                if (r = d[i], s.options.useOnlyNativeEvents || r || !t)
                                    if (r || "function" != typeof n.addEventListener)
                                        if ("undefined" != typeof n.attachEvent) f = function(t) {
                                            u.call(n, t)
                                        }, e = "on" + i, n.attachEvent(e, f), s.a.K.za(n, function() {
                                            n.detachEvent(e, f)
                                        });
                                        else throw Error("Browser doesn't support addEventListener or attachEvent");
                                else n.addEventListener(i, u, !1);
                                else a || (a = "function" == typeof t(n).on ? "on" : "bind"), t(n)[a](i, u)
                            },
                            Fb: function(n, u) {
                                if (!n || !n.nodeType) throw Error("element must be a DOM node when calling triggerEvent");
                                var f;
                                if ("input" === s.a.R(n) && n.type && "click" == u.toLowerCase() ? (f = n.type, f = "checkbox" == f || "radio" == f) : f = !1, s.options.useOnlyNativeEvents || !t || f)
                                    if ("function" == typeof i.createEvent)
                                        if ("function" == typeof n.dispatchEvent) f = i.createEvent(b[u] || "HTMLEvents"), f.initEvent(u, !0, !0, r, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, n), n.dispatchEvent(f);
                                        else throw Error("The supplied element doesn't support dispatchEvent");
                                else if (f && n.click) n.click();
                                else if ("undefined" != typeof n.fireEvent) n.fireEvent("on" + u);
                                else throw Error("Browser doesn't support triggering events");
                                else t(n).trigger(u)
                            },
                            f: function(n) {
                                return s.O(n) ? n() : n
                            },
                            bc: function(n) {
                                return s.O(n) ? n.v() : n
                            },
                            Eb: function(n, t, i) {
                                var r;
                                t && ("object" == typeof n.classList ? (r = n.classList[i ? "add" : "remove"], s.a.D(t.match(l), function(t) {
                                    r.call(n.classList, t)
                                })) : "string" == typeof n.className.baseVal ? p(n.className, "baseVal", t, i) : p(n, "className", t, i))
                            },
                            Bb: function(t, i) {
                                var r = s.a.f(i),
                                    u;
                                (null === r || r === n) && (r = "");
                                u = s.h.firstChild(t);
                                !u || 3 != u.nodeType || s.h.nextSibling(u) ? s.h.va(t, [t.ownerDocument.createTextNode(r)]) : u.data = r;
                                s.a.Ad(t)
                            },
                            Yc: function(n, t) {
                                if (n.name = t, 7 >= e) try {
                                    var r = n.name.replace(/[&<>'"]/g, function(n) {
                                        return "&#" + n.charCodeAt(0) + ";"
                                    });
                                    n.mergeAttributes(i.createElement("<input name='" + r + "'/>"), !1)
                                } catch (u) {}
                            },
                            Ad: function(n) {
                                9 <= e && (n = 1 == n.nodeType ? n : n.parentNode, n.style && (n.style.zoom = n.style.zoom))
                            },
                            wd: function(n) {
                                if (e) {
                                    var t = n.style.width;
                                    n.style.width = 0;
                                    n.style.width = t
                                }
                            },
                            Pd: function(n, t) {
                                n = s.a.f(n);
                                t = s.a.f(t);
                                for (var r = [], i = n; i <= t; i++) r.push(i);
                                return r
                            },
                            la: function(n) {
                                for (var i = [], t = 0, r = n.length; t < r; t++) i.push(n[t]);
                                return i
                            },
                            Da: function(n) {
                                return k ? Symbol(n) : n
                            },
                            Zd: 6 === e,
                            $d: 7 === e,
                            W: e,
                            Lc: function(n, t) {
                                for (var r = s.a.la(n.getElementsByTagName("input")).concat(s.a.la(n.getElementsByTagName("textarea"))), f = "string" == typeof t ? function(n) {
                                        return n.name === t
                                    } : function(n) {
                                        return t.test(n.name)
                                    }, u = [], i = r.length - 1; 0 <= i; i--) f(r[i]) && u.push(r[i]);
                                return u
                            },
                            Nd: function(n) {
                                return "string" == typeof n && (n = s.a.Db(n)) ? u && u.parse ? u.parse(n) : new Function("return " + n)() : null
                            },
                            hc: function(n, t, i) {
                                if (!u || !u.stringify) throw Error("Cannot find JSON.stringify(). Some browsers (e.g., IE < 8) don't support it natively, but you can overcome this by adding a script reference to json2.js, downloadable from http://www.json.org/json2.js");
                                return u.stringify(s.a.f(n), t, i)
                            },
                            Od: function(n, t, r) {
                                var v, e, h, f, u, c;
                                r = r || {};
                                var l = r.params || {},
                                    a = r.includeFields || this.Jc,
                                    v = n;
                                if ("object" == typeof n && "form" === s.a.R(n))
                                    for (v = n.action, e = a.length - 1; 0 <= e; e--)
                                        for (h = s.a.Lc(n, a[e]), f = h.length - 1; 0 <= f; f--) l[h[f].name] = h[f].value;
                                t = s.a.f(t);
                                u = i.createElement("form");
                                u.style.display = "none";
                                u.action = v;
                                u.method = "post";
                                for (c in t) n = i.createElement("input"), n.type = "hidden", n.name = c, n.value = s.a.hc(s.a.f(t[c])), u.appendChild(n);
                                o(l, function(n, t) {
                                    var r = i.createElement("input");
                                    r.type = "hidden";
                                    r.name = n;
                                    r.value = t;
                                    u.appendChild(r)
                                });
                                i.body.appendChild(u);
                                r.submitter ? r.submitter(u) : u.submit();
                                setTimeout(function() {
                                    u.parentNode.removeChild(u)
                                }, 0)
                            }
                        }
                    }();
                    s.b("utils", s.a);
                    s.b("utils.arrayForEach", s.a.D);
                    s.b("utils.arrayFirst", s.a.Lb);
                    s.b("utils.arrayFilter", s.a.jb);
                    s.b("utils.arrayGetDistinctValues", s.a.wc);
                    s.b("utils.arrayIndexOf", s.a.A);
                    s.b("utils.arrayMap", s.a.Mb);
                    s.b("utils.arrayPushAll", s.a.Nb);
                    s.b("utils.arrayRemoveItem", s.a.Pa);
                    s.b("utils.cloneNodes", s.a.Ca);
                    s.b("utils.createSymbolOrString", s.a.Da);
                    s.b("utils.extend", s.a.extend);
                    s.b("utils.fieldsIncludedWithJsonPost", s.a.Jc);
                    s.b("utils.getFormFields", s.a.Lc);
                    s.b("utils.objectMap", s.a.Ga);
                    s.b("utils.peekObservable", s.a.bc);
                    s.b("utils.postJson", s.a.Od);
                    s.b("utils.parseJson", s.a.Nd);
                    s.b("utils.registerEventHandler", s.a.B);
                    s.b("utils.stringifyJson", s.a.hc);
                    s.b("utils.range", s.a.Pd);
                    s.b("utils.toggleDomNodeCssClass", s.a.Eb);
                    s.b("utils.triggerEvent", s.a.Fb);
                    s.b("utils.unwrapObservable", s.a.f);
                    s.b("utils.objectForEach", s.a.P);
                    s.b("utils.addOrRemoveItem", s.a.Na);
                    s.b("utils.setTextContent", s.a.Bb);
                    s.b("unwrap", s.a.f);
                    Function.prototype.bind || (Function.prototype.bind = function(n) {
                        var t = this,
                            i;
                        return 1 === arguments.length ? function() {
                            return t.apply(n, arguments)
                        } : (i = Array.prototype.slice.call(arguments, 1), function() {
                            var r = i.slice(0);
                            return r.push.apply(r, arguments), t.apply(n, r)
                        })
                    });
                    s.a.g = new function() {
                        var f = 0,
                            t = "__ko__" + (new Date).getTime(),
                            r = {},
                            i, u;
                        return s.a.W ? (i = function(i, u) {
                            var e = i[t];
                            if (!e || "null" === e || !r[e]) {
                                if (!u) return n;
                                e = i[t] = "ko" + f++;
                                r[e] = {}
                            }
                            return r[e]
                        }, u = function(n) {
                            var i = n[t];
                            return i ? (delete r[i], n[t] = null, !0) : !1
                        }) : (i = function(n, i) {
                            var r = n[t];
                            return !r && i && (r = n[t] = {}), r
                        }, u = function(n) {
                            return n[t] ? (delete n[t], !0) : !1
                        }), {
                            get: function(n, t) {
                                var r = i(n, !1);
                                return r && r[t]
                            },
                            set: function(t, r, u) {
                                (t = i(t, u !== n)) && (t[r] = u)
                            },
                            Ub: function(n, t, r) {
                                return n = i(n, !0), n[t] || (n[t] = r)
                            },
                            clear: u,
                            Z: function() {
                                return f++ + t
                            }
                        }
                    };
                    s.b("utils.domData", s.a.g);
                    s.b("utils.domData.clear", s.a.g.clear);
                    s.a.K = new function() {
                        function i(t, i) {
                            var u = s.a.g.get(t, r);
                            return u === n && i && (u = [], s.a.g.set(t, r, u)), u
                        }

                        function u(n) {
                            var t = i(n, !1),
                                r;
                            if (t)
                                for (t = t.slice(0), r = 0; r < t.length; r++) t[r](n);
                            s.a.g.clear(n);
                            s.a.K.cleanExternalData(n);
                            e[n.nodeType] && f(n.childNodes, !0)
                        }

                        function f(n, t) {
                            for (var r = [], f, i = 0; i < n.length; i++)
                                if ((!t || 8 === n[i].nodeType) && (u(r[r.length] = f = n[i]), n[i] !== f))
                                    for (; i-- && -1 == s.a.A(r, n[i]););
                        }
                        var r = s.a.g.Z(),
                            o = {
                                1: !0,
                                8: !0,
                                9: !0
                            },
                            e = {
                                1: !0,
                                9: !0
                            };
                        return {
                            za: function(n, t) {
                                if ("function" != typeof t) throw Error("Callback must be a function");
                                i(n, !0).push(t)
                            },
                            yb: function(t, u) {
                                var f = i(t, !1);
                                f && (s.a.Pa(f, u), 0 == f.length && s.a.g.set(t, r, n))
                            },
                            oa: function(n) {
                                return s.u.G(function() {
                                    o[n.nodeType] && (u(n), e[n.nodeType] && f(n.getElementsByTagName("*")))
                                }), n
                            },
                            removeNode: function(n) {
                                s.oa(n);
                                n.parentNode && n.parentNode.removeChild(n)
                            },
                            cleanExternalData: function(n) {
                                t && "function" == typeof t.cleanData && t.cleanData([n])
                            }
                        }
                    };
                    s.oa = s.a.K.oa;
                    s.removeNode = s.a.K.removeNode;
                    s.b("cleanNode", s.oa);
                    s.b("removeNode", s.removeNode);
                    s.b("utils.domNodeDisposal", s.a.K);
                    s.b("utils.domNodeDisposal.addDisposeCallback", s.a.K.za);
                    s.b("utils.domNodeDisposal.removeDisposeCallback", s.a.K.yb),
                        function() {
                            var h = [0, "", ""],
                                u = [1, "<table>", "<\/table>"],
                                f = [3, "<table><tbody><tr>", "<\/tr><\/tbody><\/table>"],
                                e = [1, "<select multiple='multiple'>", "<\/select>"],
                                c = {
                                    thead: u,
                                    tbody: u,
                                    tfoot: u,
                                    tr: [2, "<table><tbody>", "<\/tbody><\/table>"],
                                    td: f,
                                    th: f,
                                    option: e,
                                    optgroup: e
                                },
                                o = 8 >= s.a.W;
                            s.a.ua = function(n, u) {
                                var f, e;
                                if (t) {
                                    if (t.parseHTML) f = t.parseHTML(n, u) || [];
                                    else if ((f = t.clean([n], u)) && f[0]) {
                                        for (e = f[0]; e.parentNode && 11 !== e.parentNode.nodeType;) e = e.parentNode;
                                        e.parentNode && e.parentNode.removeChild(e)
                                    }
                                } else {
                                    (f = u) || (f = i);
                                    var e = f.parentWindow || f.defaultView || r,
                                        v = s.a.Db(n).toLowerCase(),
                                        l = f.createElement("div"),
                                        a;
                                    for (a = (v = v.match(/^(?:\x3c!--.*?--\x3e\s*?)*?<([a-z]+)[\s>]/)) && c[v[1]] || h, v = a[0], a = "ignored<div>" + a[1] + n + a[2] + "<\/div>", "function" == typeof e.innerShiv ? l.appendChild(e.innerShiv(a)) : (o && f.body.appendChild(l), l.innerHTML = a, o && l.parentNode.removeChild(l)); v--;) l = l.lastChild;
                                    f = s.a.la(l.lastChild.childNodes)
                                }
                                return f
                            };
                            s.a.Md = function(n, t) {
                                var i = s.a.ua(n, t);
                                return i.length && i[0].parentElement || s.a.Yb(i)
                            };
                            s.a.fc = function(i, r) {
                                if (s.a.Tb(i), r = s.a.f(r), null !== r && r !== n)
                                    if ("string" != typeof r && (r = r.toString()), t) t(i).html(r);
                                    else
                                        for (var f = s.a.ua(r, i.ownerDocument), u = 0; u < f.length; u++) i.appendChild(f[u])
                            }
                        }();
                    s.b("utils.parseHtmlFragment", s.a.ua);
                    s.b("utils.setHtml", s.a.fc);
                    s.aa = function() {
                        function i(n, t) {
                            var r;
                            if (n)
                                if (8 == n.nodeType) r = s.aa.Uc(n.nodeValue), null != r && t.push({
                                    ud: n,
                                    Kd: r
                                });
                                else if (1 == n.nodeType)
                                for (var r = 0, u = n.childNodes, f = u.length; r < f; r++) i(u[r], t)
                        }
                        var t = {};
                        return {
                            Xb: function(n) {
                                if ("function" != typeof n) throw Error("You can only pass a function to ko.memoization.memoize()");
                                var i = (4294967296 * (1 + Math.random()) | 0).toString(16).substring(1) + (4294967296 * (1 + Math.random()) | 0).toString(16).substring(1);
                                return t[i] = n, "<!--[ko_memo:" + i + "]-->"
                            },
                            bd: function(i, r) {
                                var u = t[i];
                                if (u === n) throw Error("Couldn't find any memo with ID " + i + ". Perhaps it's already been unmemoized.");
                                try {
                                    return u.apply(null, r || []), !0
                                } finally {
                                    delete t[i]
                                }
                            },
                            cd: function(n, t) {
                                var f = [],
                                    u, o, r, e;
                                for (i(n, f), u = 0, o = f.length; u < o; u++) r = f[u].ud, e = [r], t && s.a.Nb(e, t), s.aa.bd(f[u].Kd, e), r.nodeValue = "", r.parentNode && r.parentNode.removeChild(r)
                            },
                            Uc: function(n) {
                                return (n = n.match(/^\[ko_memo\:(.*?)\]$/)) ? n[1] : null
                            }
                        }
                    }();
                    s.b("memoization", s.aa);
                    s.b("memoization.memoize", s.aa.Xb);
                    s.b("memoization.unmemoize", s.aa.bd);
                    s.b("memoization.parseMemoText", s.aa.Uc);
                    s.b("memoization.unmemoizeDomNodeAndDescendants", s.aa.cd);
                    s.na = function() {
                        function f() {
                            if (n)
                                for (var i = n, r = 0, f; t < n;)
                                    if (f = u[t++]) {
                                        if (t > i) {
                                            if (5e3 <= ++r) {
                                                t = n;
                                                s.a.Gc(Error("'Too much recursion' after processing " + r + " task groups."));
                                                break
                                            }
                                            i = n
                                        }
                                        try {
                                            f()
                                        } catch (e) {
                                            s.a.Gc(e)
                                        }
                                    }
                        }

                        function e() {
                            f();
                            t = n = u.length = 0
                        }
                        var o, u = [],
                            n = 0,
                            h = 1,
                            t = 0;
                        return o = r.MutationObserver ? function(n) {
                            var t = i.createElement("div");
                            return new MutationObserver(n).observe(t, {
                                    attributes: !0
                                }),
                                function() {
                                    t.classList.toggle("foo")
                                }
                        }(e) : i && "onreadystatechange" in i.createElement("script") ? function(n) {
                            var t = i.createElement("script");
                            t.onreadystatechange = function() {
                                t.onreadystatechange = null;
                                i.documentElement.removeChild(t);
                                t = null;
                                n()
                            };
                            i.documentElement.appendChild(t)
                        } : function(n) {
                            setTimeout(n, 0)
                        }, {
                            scheduler: o,
                            zb: function(t) {
                                return n || s.na.scheduler(e), u[n++] = t, h++
                            },
                            cancel: function(i) {
                                i = i - (h - n);
                                i >= t && i < n && (u[i] = null)
                            },
                            resetForTesting: function() {
                                var i = n - t;
                                return t = n = u.length = 0, i
                            },
                            Sd: f
                        }
                    }();
                    s.b("tasks", s.na);
                    s.b("tasks.schedule", s.na.zb);
                    s.b("tasks.runEarly", s.na.Sd);
                    s.Ta = {
                        throttle: function(n, t) {
                            n.throttleEvaluation = t;
                            var i = null;
                            return s.$({
                                read: n,
                                write: function(r) {
                                    clearTimeout(i);
                                    i = s.a.setTimeout(function() {
                                        n(r)
                                    }, t)
                                }
                            })
                        },
                        rateLimit: function(n, t) {
                            var r, i, u;
                            "number" == typeof t ? r = t : (r = t.timeout, i = t.method);
                            n.Hb = !1;
                            u = "function" == typeof i ? i : "notifyWhenChangesStop" == i ? nt : g;
                            n.ub(function(n) {
                                return u(n, r, t)
                            })
                        },
                        deferred: function(t, i) {
                            if (!0 !== i) throw Error("The 'deferred' extender only accepts the value 'true', because it is not supported to turn deferral off once enabled.");
                            t.Hb || (t.Hb = !0, t.ub(function(i) {
                                var u, r = !1;
                                return function() {
                                    if (!r) {
                                        s.na.cancel(u);
                                        u = s.na.zb(i);
                                        try {
                                            r = !0;
                                            t.notifySubscribers(n, "dirty")
                                        } finally {
                                            r = !1
                                        }
                                    }
                                }
                            }))
                        },
                        notify: function(n, t) {
                            n.equalityComparer = "always" == t ? null : b
                        }
                    };
                    d = {
                        undefined: 1,
                        boolean: 1,
                        number: 1,
                        string: 1
                    };
                    s.b("extenders", s.Ta);
                    s.ic = function(n, t, i) {
                        this.da = n;
                        this.lc = t;
                        this.mc = i;
                        this.Ib = !1;
                        this.fb = this.Jb = null;
                        s.L(this, "dispose", this.s);
                        s.L(this, "disposeWhenNodeIsRemoved", this.l)
                    };
                    s.ic.prototype.s = function() {
                        this.Ib || (this.fb && s.a.K.yb(this.Jb, this.fb), this.Ib = !0, this.mc(), this.da = this.lc = this.mc = this.Jb = this.fb = null)
                    };
                    s.ic.prototype.l = function(n) {
                        this.Jb = n;
                        s.a.K.za(n, this.fb = this.s.bind(this))
                    };
                    s.T = function() {
                        s.a.Ab(this, l);
                        l.qb(this)
                    };
                    l = {
                        qb: function(n) {
                            n.U = {
                                change: []
                            };
                            n.sc = 1
                        },
                        subscribe: function(n, t, i) {
                            var r = this,
                                u;
                            return i = i || "change", u = new s.ic(r, t ? n.bind(t) : n, function() {
                                s.a.Pa(r.U[i], u);
                                r.hb && r.hb(i)
                            }), r.Qa && r.Qa(i), r.U[i] || (r.U[i] = []), r.U[i].push(u), u
                        },
                        notifySubscribers: function(n, t) {
                            var u, i, r;
                            if (t = t || "change", "change" === t && this.Gb(), this.Wa(t)) {
                                u = "change" === t && this.ed || this.U[t].slice(0);
                                try {
                                    for (s.u.xc(), i = 0; r = u[i]; ++i) r.Ib || r.lc(n)
                                } finally {
                                    s.u.end()
                                }
                            }
                        },
                        ob: function() {
                            return this.sc
                        },
                        Dd: function(n) {
                            return this.ob() !== n
                        },
                        Gb: function() {
                            ++this.sc
                        },
                        ub: function(n) {
                            var t = this,
                                h = s.O(t),
                                f, e, r, i, u, o;
                            t.gb || (t.gb = t.notifySubscribers, t.notifySubscribers = tt);
                            o = n(function() {
                                t.Ja = !1;
                                h && i === t && (i = t.nc ? t.nc() : t());
                                var n = e || u && t.sb(r, i);
                                u = e = f = !1;
                                n && t.gb(r = i)
                            });
                            t.qc = function(n, r) {
                                r && t.Ja || (u = !r);
                                t.ed = t.U.change.slice(0);
                                t.Ja = f = !0;
                                i = n;
                                o()
                            };
                            t.pc = function(n) {
                                f || (r = n, t.gb(n, "beforeChange"))
                            };
                            t.rc = function() {
                                u = !0
                            };
                            t.gd = function() {
                                t.sb(r, t.v(!0)) && (e = !0)
                            }
                        },
                        Wa: function(n) {
                            return this.U[n] && this.U[n].length
                        },
                        Bd: function(n) {
                            if (n) return this.U[n] && this.U[n].length || 0;
                            var t = 0;
                            return s.a.P(this.U, function(n, i) {
                                "dirty" !== n && (t += i.length)
                            }), t
                        },
                        sb: function(n, t) {
                            return !this.equalityComparer || !this.equalityComparer(n, t)
                        },
                        toString: function() {
                            return "[object Object]"
                        },
                        extend: function(n) {
                            var t = this;
                            return n && s.a.P(n, function(n, i) {
                                var r = s.Ta[n];
                                "function" == typeof r && (t = r(t, i) || t)
                            }), t
                        }
                    };
                    s.L(l, "init", l.qb);
                    s.L(l, "subscribe", l.subscribe);
                    s.L(l, "extend", l.extend);
                    s.L(l, "getSubscriptionsCount", l.Bd);
                    s.a.Ba && s.a.setPrototypeOf(l, Function.prototype);
                    s.T.fn = l;
                    s.Qc = function(n) {
                        return null != n && "function" == typeof n.subscribe && "function" == typeof n.notifySubscribers
                    };
                    s.b("subscribable", s.T);
                    s.b("isSubscribable", s.Qc);
                    s.S = s.u = function() {
                        function t(t) {
                            r.push(n);
                            n = t
                        }

                        function i() {
                            n = r.pop()
                        }
                        var r = [],
                            n, u = 0;
                        return {
                            xc: t,
                            end: i,
                            cc: function(t) {
                                if (n) {
                                    if (!s.Qc(t)) throw Error("Only subscribable things can act as dependencies");
                                    n.od.call(n.pd, t, t.fd || (t.fd = ++u))
                                }
                            },
                            G: function(n, r, u) {
                                try {
                                    return t(), n.apply(r, u || [])
                                } finally {
                                    i()
                                }
                            },
                            qa: function() {
                                if (n) return n.o.qa()
                            },
                            Va: function() {
                                if (n) return n.o.Va()
                            },
                            Ya: function() {
                                if (n) return n.Ya
                            },
                            o: function() {
                                if (n) return n.o
                            }
                        }
                    }();
                    s.b("computedContext", s.S);
                    s.b("computedContext.getDependenciesCount", s.S.qa);
                    s.b("computedContext.getDependencies", s.S.Va);
                    s.b("computedContext.isInitial", s.S.Ya);
                    s.b("computedContext.registerDependency", s.S.cc);
                    s.b("ignoreDependencies", s.Yd = s.u.G);
                    v = s.a.Da("_latestValue");
                    s.ta = function(n) {
                        function t() {
                            return 0 < arguments.length ? (t.sb(t[v], arguments[0]) && (t.ya(), t[v] = arguments[0], t.xa()), this) : (s.u.cc(t), t[v])
                        }
                        return t[v] = n, s.a.Ba || s.a.extend(t, s.T.fn), s.T.fn.qb(t), s.a.Ab(t, a), s.options.deferUpdates && s.Ta.deferred(t, !0), t
                    };
                    a = {
                        equalityComparer: b,
                        v: function() {
                            return this[v]
                        },
                        xa: function() {
                            this.notifySubscribers(this[v], "spectate");
                            this.notifySubscribers(this[v])
                        },
                        ya: function() {
                            this.notifySubscribers(this[v], "beforeChange")
                        }
                    };
                    s.a.Ba && s.a.setPrototypeOf(a, s.T.fn);
                    y = s.ta.Ma = "__ko_proto__";
                    a[y] = s.ta;
                    s.O = function(n) {
                        if ((n = "function" == typeof n && n[y]) && n !== a[y] && n !== s.o.fn[y]) throw Error("Invalid object that looks like an observable; possibly from another Knockout instance");
                        return !!n
                    };
                    s.Za = function(n) {
                        return "function" == typeof n && (n[y] === a[y] || n[y] === s.o.fn[y] && n.Nc)
                    };
                    s.b("observable", s.ta);
                    s.b("isObservable", s.O);
                    s.b("isWriteableObservable", s.Za);
                    s.b("isWritableObservable", s.Za);
                    s.b("observable.fn", a);
                    s.L(a, "peek", a.v);
                    s.L(a, "valueHasMutated", a.xa);
                    s.L(a, "valueWillMutate", a.ya);
                    s.Ha = function(n) {
                        if (n = n || [], "object" != typeof n || !("length" in n)) throw Error("The argument passed when initializing an observable array must be an array, or null, or undefined.");
                        return n = s.ta(n), s.a.Ab(n, s.Ha.fn), n.extend({
                            trackArrayChanges: !0
                        })
                    };
                    s.Ha.fn = {
                        remove: function(n) {
                            for (var u, i = this.v(), r = [], f = "function" != typeof n || s.O(n) ? function(t) {
                                    return t === n
                                } : n, t = 0; t < i.length; t++)
                                if (u = i[t], f(u)) {
                                    if (0 === r.length && this.ya(), i[t] !== u) throw Error("Array modified during remove; cannot remove item");
                                    r.push(u);
                                    i.splice(t, 1);
                                    t--
                                } return r.length && this.xa(), r
                        },
                        removeAll: function(t) {
                            if (t === n) {
                                var i = this.v(),
                                    r = i.slice(0);
                                return this.ya(), i.splice(0, i.length), this.xa(), r
                            }
                            return t ? this.remove(function(n) {
                                return 0 <= s.a.A(t, n)
                            }) : []
                        },
                        destroy: function(n) {
                            var r = this.v(),
                                u = "function" != typeof n || s.O(n) ? function(t) {
                                    return t === n
                                } : n,
                                t, i;
                            for (this.ya(), t = r.length - 1; 0 <= t; t--) i = r[t], u(i) && (i._destroy = !0);
                            this.xa()
                        },
                        destroyAll: function(t) {
                            return t === n ? this.destroy(function() {
                                return !0
                            }) : t ? this.destroy(function(n) {
                                return 0 <= s.a.A(t, n)
                            }) : []
                        },
                        indexOf: function(n) {
                            var t = this();
                            return s.a.A(t, n)
                        },
                        replace: function(n, t) {
                            var i = this.indexOf(n);
                            0 <= i && (this.ya(), this.v()[i] = t, this.xa())
                        },
                        sorted: function(n) {
                            var t = this().slice(0);
                            return n ? t.sort(n) : t.sort()
                        },
                        reversed: function() {
                            return this().slice(0).reverse()
                        }
                    };
                    s.a.Ba && s.a.setPrototypeOf(s.Ha.fn, s.ta.fn);
                    s.a.D("pop push reverse shift sort splice unshift".split(" "), function(n) {
                        s.Ha.fn[n] = function() {
                            var t = this.v(),
                                i;
                            return this.ya(), this.zc(t, n, arguments), i = t[n].apply(t, arguments), this.xa(), i === t ? this : i
                        }
                    });
                    s.a.D(["slice"], function(n) {
                        s.Ha.fn[n] = function() {
                            var t = this();
                            return t[n].apply(t, arguments)
                        }
                    });
                    s.Pc = function(n) {
                        return s.O(n) && "function" == typeof n.remove && "function" == typeof n.push
                    };
                    s.b("observableArray", s.Ha);
                    s.b("isObservableArray", s.Pc);
                    s.Ta.trackArrayChanges = function(t, i) {
                        function a() {
                            function n() {
                                if (u) {
                                    var i = [].concat(t.v() || []),
                                        n;
                                    t.Wa("arrayChange") && ((!r || 1 < u) && (r = s.a.Pb(h, i, t.Ob)), n = r);
                                    h = i;
                                    r = null;
                                    u = 0;
                                    n && n.length && t.notifySubscribers(n, "arrayChange")
                                }
                            }
                            f ? n() : (f = !0, o = t.subscribe(function() {
                                ++u
                            }, null, "spectate"), h = [].concat(t.v() || []), r = null, e = t.subscribe(n))
                        }
                        if (t.Ob = {}, i && "object" == typeof i && s.a.extend(t.Ob, i), t.Ob.sparse = !0, !t.zc) {
                            var f = !1,
                                r = null,
                                e, o, u = 0,
                                h, c = t.Qa,
                                l = t.hb;
                            t.Qa = function(n) {
                                c && c.call(t, n);
                                "arrayChange" === n && a()
                            };
                            t.hb = function(i) {
                                l && l.call(t, i);
                                "arrayChange" !== i || t.Wa("arrayChange") || (e && e.s(), o && o.s(), o = e = null, f = !1, h = n)
                            };
                            t.zc = function(n, t, i) {
                                function c(n, t, i) {
                                    return l[l.length] = {
                                        status: n,
                                        value: t,
                                        index: i
                                    }
                                }
                                if (f && !u) {
                                    var l = [],
                                        e = n.length,
                                        h = i.length,
                                        o = 0;
                                    switch (t) {
                                        case "push":
                                            o = e;
                                        case "unshift":
                                            for (t = 0; t < h; t++) c("added", i[t], o + t);
                                            break;
                                        case "pop":
                                            o = e - 1;
                                        case "shift":
                                            e && c("deleted", n[o], o);
                                            break;
                                        case "splice":
                                            t = Math.min(Math.max(0, 0 > i[0] ? e + i[0] : i[0]), e);
                                            for (var e = 1 === h ? e : Math.min(t + (i[1] || 0), e), h = t + h - 2, o = Math.max(e, h), a = [], v = [], y = 2; t < o; ++t, ++y) t < e && v.push(c("deleted", n[t], t)), t < h && a.push(c("added", i[y], t));
                                            s.a.Kc(v, a);
                                            break;
                                        default:
                                            return
                                    }
                                    r = l
                                }
                            }
                        }
                    };
                    h = s.a.Da("_state");
                    s.o = s.$ = function(t, i, r) {
                        function f() {
                            if (0 < arguments.length) {
                                if ("function" == typeof e) e.apply(u.nb, arguments);
                                else throw Error("Cannot write a value to a ko.computed unless you specify a 'write' option. If you wish to read the current value, don't pass any parameters.");
                                return this
                            }
                            return u.ra || s.u.cc(f), (u.ka || u.J && f.Xa()) && f.ha(), u.X
                        }
                        if ("object" == typeof t ? r = t : (r = r || {}, t && (r.read = t)), "function" != typeof r.read) throw Error("Pass a function that returns the value of the ko.computed");
                        var e = r.write,
                            u = {
                                X: n,
                                sa: !0,
                                ka: !0,
                                rb: !1,
                                jc: !1,
                                ra: !1,
                                wb: !1,
                                J: !1,
                                Wc: r.read,
                                nb: i || r.owner,
                                l: r.disposeWhenNodeIsRemoved || r.l || null,
                                Sa: r.disposeWhen || r.Sa,
                                Rb: null,
                                I: {},
                                V: 0,
                                Ic: null
                            };
                        return f[h] = u, f.Nc = "function" == typeof e, s.a.Ba || s.a.extend(f, s.T.fn), s.T.fn.qb(f), s.a.Ab(f, c), r.pure ? (u.wb = !0, u.J = !0, s.a.extend(f, ut)) : r.deferEvaluation && s.a.extend(f, ft), s.options.deferUpdates && s.Ta.deferred(f, !0), u.l && (u.jc = !0, u.l.nodeType || (u.l = null)), u.J || r.deferEvaluation || f.ha(), u.l && f.ja() && s.a.K.za(u.l, u.Rb = function() {
                            f.s()
                        }), f
                    };
                    var c = {
                            equalityComparer: b,
                            qa: function() {
                                return this[h].V
                            },
                            Va: function() {
                                var n = [];
                                return s.a.P(this[h].I, function(t, i) {
                                    n[i.Ka] = i.da
                                }), n
                            },
                            Vb: function(n) {
                                if (!this[h].V) return !1;
                                var t = this.Va();
                                return -1 !== s.a.A(t, n) ? !0 : !!s.a.Lb(t, function(t) {
                                    return t.Vb && t.Vb(n)
                                })
                            },
                            uc: function(n, t, i) {
                                if (this[h].wb && t === this) throw Error("A 'pure' computed must not be called recursively");
                                this[h].I[n] = i;
                                i.Ka = this[h].V++;
                                i.La = t.ob()
                            },
                            Xa: function() {
                                var t, n, i = this[h].I;
                                for (t in i)
                                    if (Object.prototype.hasOwnProperty.call(i, t) && (n = i[t], this.Ia && n.da.Ja || n.da.Dd(n.La))) return !0
                            },
                            Jd: function() {
                                this.Ia && !this[h].rb && this.Ia(!1)
                            },
                            ja: function() {
                                var n = this[h];
                                return n.ka || 0 < n.V
                            },
                            Rd: function() {
                                this.Ja ? this[h].ka && (this[h].sa = !0) : this.Hc()
                            },
                            $c: function(n) {
                                if (n.Hb) {
                                    var t = n.subscribe(this.Jd, this, "dirty"),
                                        i = n.subscribe(this.Rd, this);
                                    return {
                                        da: n,
                                        s: function() {
                                            t.s();
                                            i.s()
                                        }
                                    }
                                }
                                return n.subscribe(this.Hc, this)
                            },
                            Hc: function() {
                                var n = this,
                                    t = n.throttleEvaluation;
                                t && 0 <= t ? (clearTimeout(this[h].Ic), this[h].Ic = s.a.setTimeout(function() {
                                    n.ha(!0)
                                }, t)) : n.Ia ? n.Ia(!0) : n.ha(!0)
                            },
                            ha: function(n) {
                                var t = this[h],
                                    i = t.Sa,
                                    r = !1;
                                if (!t.rb && !t.ra) {
                                    if (t.l && !s.a.Sb(t.l) || i && i()) {
                                        if (!t.jc) {
                                            this.s();
                                            return
                                        }
                                    } else t.jc = !1;
                                    t.rb = !0;
                                    try {
                                        r = this.zd(n)
                                    } finally {
                                        t.rb = !1
                                    }
                                    return r
                                }
                            },
                            zd: function(t) {
                                var i = this[h],
                                    r = !1,
                                    f = i.wb ? n : !i.V,
                                    r = {
                                        qd: this,
                                        mb: i.I,
                                        Qb: i.V
                                    },
                                    u;
                                return s.u.xc({
                                    pd: r,
                                    od: rt,
                                    o: this,
                                    Ya: f
                                }), i.I = {}, i.V = 0, u = this.yd(i, r), i.V ? r = this.sb(i.X, u) : (this.s(), r = !0), r && (i.J ? this.Gb() : this.notifySubscribers(i.X, "beforeChange"), i.X = u, this.notifySubscribers(i.X, "spectate"), !i.J && t && this.notifySubscribers(i.X), this.rc && this.rc()), f && this.notifySubscribers(i.X, "awake"), r
                            },
                            yd: function(n, t) {
                                try {
                                    var i = n.Wc;
                                    return n.nb ? i.call(n.nb) : i()
                                } finally {
                                    s.u.end();
                                    t.Qb && !n.J && s.a.P(t.mb, it);
                                    n.sa = n.ka = !1
                                }
                            },
                            v: function(n) {
                                var t = this[h];
                                return (t.ka && (n || !t.V) || t.J && this.Xa()) && this.ha(), t.X
                            },
                            ub: function(n) {
                                s.T.fn.ub.call(this, n);
                                this.nc = function() {
                                    return this[h].J || (this[h].sa ? this.ha() : this[h].ka = !1), this[h].X
                                };
                                this.Ia = function(n) {
                                    this.pc(this[h].X);
                                    this[h].ka = !0;
                                    n && (this[h].sa = !0);
                                    this.qc(this, !n)
                                }
                            },
                            s: function() {
                                var t = this[h];
                                !t.J && t.I && s.a.P(t.I, function(n, t) {
                                    t.s && t.s()
                                });
                                t.l && t.Rb && s.a.K.yb(t.l, t.Rb);
                                t.I = n;
                                t.V = 0;
                                t.ra = !0;
                                t.sa = !1;
                                t.ka = !1;
                                t.J = !1;
                                t.l = n;
                                t.Sa = n;
                                t.Wc = n;
                                this.Nc || (t.nb = n)
                            }
                        },
                        ut = {
                            Qa: function(n) {
                                var i = this,
                                    t = i[h],
                                    r;
                                !t.ra && t.J && "change" == n && (t.J = !1, t.sa || i.Xa() ? (t.I = null, t.V = 0, i.ha() && i.Gb()) : (r = [], s.a.P(t.I, function(n, t) {
                                    r[t.Ka] = n
                                }), s.a.D(r, function(n, r) {
                                    var f = t.I[n],
                                        u = i.$c(f.da);
                                    u.Ka = r;
                                    u.La = f.La;
                                    t.I[n] = u
                                }), i.Xa() && i.ha() && i.Gb()), t.ra || i.notifySubscribers(t.X, "awake"))
                            },
                            hb: function(t) {
                                var i = this[h];
                                i.ra || "change" != t || this.Wa("change") || (s.a.P(i.I, function(n, t) {
                                    t.s && (i.I[n] = {
                                        da: t.da,
                                        Ka: t.Ka,
                                        La: t.La
                                    }, t.s())
                                }), i.J = !0, this.notifySubscribers(n, "asleep"))
                            },
                            ob: function() {
                                var n = this[h];
                                return n.J && (n.sa || this.Xa()) && this.ha(), s.T.fn.ob.call(this)
                            }
                        },
                        ft = {
                            Qa: function(n) {
                                "change" != n && "beforeChange" != n || this.v()
                            }
                        };
                    s.a.Ba && s.a.setPrototypeOf(c, s.T.fn);
                    p = s.ta.Ma;
                    c[p] = s.o;
                    s.Oc = function(n) {
                        return "function" == typeof n && n[p] === c[p]
                    };
                    s.Fd = function(n) {
                        return s.Oc(n) && n[h] && n[h].wb
                    };
                    s.b("computed", s.o);
                    s.b("dependentObservable", s.o);
                    s.b("isComputed", s.Oc);
                    s.b("isPureComputed", s.Fd);
                    s.b("computed.fn", c);
                    s.L(c, "peek", c.v);
                    s.L(c, "dispose", c.s);
                    s.L(c, "isActive", c.ja);
                    s.L(c, "getDependenciesCount", c.qa);
                    s.L(c, "getDependencies", c.Va);
                    s.xb = function(n, t) {
                        return "function" == typeof n ? s.o(n, t, {
                            pure: !0
                        }) : (n = s.a.extend({}, n), n.pure = !0, s.o(n, t))
                    };
                    s.b("pureComputed", s.xb),
                        function() {
                            function i(u, f, e) {
                                if (e = e || new t, u = f(u), "object" != typeof u || null === u || u === n || u instanceof RegExp || u instanceof Date || u instanceof String || u instanceof Number || u instanceof Boolean) return u;
                                var o = u instanceof Array ? [] : {};
                                return e.save(u, o), r(u, function(t) {
                                    var r = f(u[t]),
                                        s;
                                    switch (typeof r) {
                                        case "boolean":
                                        case "number":
                                        case "string":
                                        case "function":
                                            o[t] = r;
                                            break;
                                        case "object":
                                        case "undefined":
                                            s = e.get(r);
                                            o[t] = s !== n ? s : i(r, f, e)
                                    }
                                }), o
                            }

                            function r(n, t) {
                                if (n instanceof Array) {
                                    for (var i = 0; i < n.length; i++) t(i);
                                    "function" == typeof n.toJSON && t("toJSON")
                                } else
                                    for (i in n) t(i)
                            }

                            function t() {
                                this.keys = [];
                                this.values = []
                            }
                            s.ad = function(n) {
                                if (0 == arguments.length) throw Error("When calling ko.toJS, pass the object you want to convert.");
                                return i(n, function(n) {
                                    for (var t = 0; s.O(n) && 10 > t; t++) n = n();
                                    return n
                                })
                            };
                            s.toJSON = function(n, t, i) {
                                return n = s.ad(n), s.a.hc(n, t, i)
                            };
                            t.prototype = {
                                constructor: t,
                                save: function(n, t) {
                                    var i = s.a.A(this.keys, n);
                                    0 <= i ? this.values[i] = t : (this.keys.push(n), this.values.push(t))
                                },
                                get: function(t) {
                                    return t = s.a.A(this.keys, t), 0 <= t ? this.values[t] : n
                                }
                            }
                        }();
                    s.b("toJS", s.ad);
                    s.b("toJSON", s.toJSON);
                    s.Wd = function(n, t, i) {
                        function r(t) {
                            var r = s.xb(n, i).extend({
                                    ma: "always"
                                }),
                                u = r.subscribe(function(n) {
                                    n && (u.s(), t(n))
                                });
                            return r.notifySubscribers(r.v()), u
                        }
                        return "function" != typeof Promise || t ? r(t.bind(i)) : new Promise(r)
                    };
                    s.b("when", s.Wd),
                        function() {
                            s.w = {
                                M: function(t) {
                                    switch (s.a.R(t)) {
                                        case "option":
                                            return !0 === t.__ko__hasDomDataOptionValue__ ? s.a.g.get(t, s.c.options.$b) : 7 >= s.a.W ? t.getAttributeNode("value") && t.getAttributeNode("value").specified ? t.value : t.text : t.value;
                                        case "select":
                                            return 0 <= t.selectedIndex ? s.w.M(t.options[t.selectedIndex]) : n;
                                        default:
                                            return t.value
                                    }
                                },
                                cb: function(t, i, r) {
                                    switch (s.a.R(t)) {
                                        case "option":
                                            "string" == typeof i ? (s.a.g.set(t, s.c.options.$b, n), "__ko__hasDomDataOptionValue__" in t && delete t.__ko__hasDomDataOptionValue__, t.value = i) : (s.a.g.set(t, s.c.options.$b, i), t.__ko__hasDomDataOptionValue__ = !0, t.value = "number" == typeof i ? i : "");
                                            break;
                                        case "select":
                                            ("" === i || null === i) && (i = n);
                                            for (var u = -1, f = 0, o = t.options.length, e; f < o; ++f)
                                                if (e = s.w.M(t.options[f]), e == i || "" === e && i === n) {
                                                    u = f;
                                                    break
                                                }(r || 0 <= u || i === n && 1 < t.size) && (t.selectedIndex = u, 6 === s.a.W && s.a.setTimeout(function() {
                                                    t.selectedIndex = u
                                                }, 0));
                                            break;
                                        default:
                                            (null === i || i === n) && (i = "");
                                            t.value = i
                                    }
                                }
                            }
                        }();
                    s.b("selectExtensions", s.w);
                    s.b("selectExtensions.readValue", s.w.M);
                    s.b("selectExtensions.writeValue", s.w.cb);
                    s.m = function() {
                        function t(n) {
                            var c, r, t;
                            n = s.a.Db(n);
                            123 === n.charCodeAt(0) && (n = n.slice(1, -1));
                            n += "\n,";
                            var a = [],
                                l = n.match(i),
                                o, u = [],
                                h = 0;
                            if (1 < l.length) {
                                for (c = 0; r = l[c]; ++c) {
                                    if (t = r.charCodeAt(0), 44 === t) {
                                        if (0 >= h) {
                                            a.push(o && u.length ? {
                                                key: o,
                                                value: u.join("")
                                            } : {
                                                unknown: o || u.join("")
                                            });
                                            o = h = 0;
                                            u = [];
                                            continue
                                        }
                                    } else if (58 === t) {
                                        if (!h && !o && 1 === u.length) {
                                            o = u.pop();
                                            continue
                                        }
                                    } else if (47 === t && 1 < r.length && (47 === r.charCodeAt(1) || 42 === r.charCodeAt(1))) continue;
                                    else 47 === t && c && 1 < r.length ? (t = l[c - 1].match(f)) && !e[t[0]] && (n = n.substr(n.indexOf(r) + 1), l = n.match(i), c = -1, r = "/") : 40 === t || 123 === t || 91 === t ? ++h : 41 === t || 125 === t || 93 === t ? --h : o || u.length || 34 !== t && 39 !== t || (r = r.slice(1, -1));
                                    u.push(r)
                                }
                                if (0 < h) throw Error("Unbalanced parentheses, braces, or brackets");
                            }
                            return a
                        }
                        var r = ["true", "false", "null", "undefined"],
                            u = /^(?:[$_a-z][$\w]*|(.+)(\.\s*[$_a-z][$\w]*|\[.+\]))$/i,
                            i = RegExp("\"(?:\\\\.|[^\"])*\"|'(?:\\\\.|[^'])*'|`(?:\\\\.|[^`])*`|/\\*(?:[^*]|\\*+[^*/])*\\*+/|//.*\n|/(?:\\\\.|[^/])+/w*|[^\\s:,/][^,\"'`{}()/:[\\]]*[^\\s,\"'`{}()/:[\\]]|[^\\s]", "g"),
                            f = /[\])"'A-Za-z0-9_$]+$/,
                            e = {
                                "in": 1,
                                "return": 1,
                                "typeof": 1
                            },
                            n = {};
                        return {
                            Ra: [],
                            wa: n,
                            ac: t,
                            vb: function(i, f) {
                                function e(t, i) {
                                    var a, f;
                                    if (!l) {
                                        if (f = s.getBindingHandler(t), f && f.preprocess && !(i = f.preprocess(i, t, e))) return;
                                        (f = n[t]) && (a = i, 0 <= s.a.A(r, a) ? a = !1 : (f = a.match(u), a = null === f ? !1 : f[1] ? "Object(" + f[1] + ")" + f[2] : a), f = a);
                                        f && o.push("'" + ("string" == typeof n[t] ? n[t] : t) + "':function(_z){" + a + "=_z}")
                                    }
                                    c && (i = "function(){return " + i + " }");
                                    h.push("'" + t + "':" + i)
                                }
                                f = f || {};
                                var h = [],
                                    o = [],
                                    c = f.valueAccessors,
                                    l = f.bindingParams,
                                    a = "string" == typeof i ? t(i) : i;
                                return s.a.D(a, function(n) {
                                    e(n.key || n.unknown, n.value)
                                }), o.length && e("_ko_property_writers", "{" + o.join(",") + " }"), h.join(",")
                            },
                            Id: function(n, t) {
                                for (var i = 0; i < n.length; i++)
                                    if (n[i].key == t) return !0;
                                return !1
                            },
                            eb: function(n, t, i, r, u) {
                                n && s.O(n) ? !s.Za(n) || u && n.v() === r || n(r) : (n = t.get("_ko_property_writers")) && n[i] && n[i](r)
                            }
                        }
                    }();
                    s.b("expressionRewriting", s.m);
                    s.b("expressionRewriting.bindingRewriteValidators", s.m.Ra);
                    s.b("expressionRewriting.parseObjectLiteral", s.m.ac);
                    s.b("expressionRewriting.preProcessBindings", s.m.vb);
                    s.b("expressionRewriting._twoWayBindings", s.m.wa);
                    s.b("jsonExpressionRewriting", s.m);
                    s.b("jsonExpressionRewriting.insertPropertyAccessorsIntoJson", s.m.vb),
                        function() {
                            function n(n) {
                                return 8 == n.nodeType && e.test(r ? n.text : n.nodeValue)
                            }

                            function t(n) {
                                return 8 == n.nodeType && h.test(r ? n.text : n.nodeValue)
                            }

                            function u(i, r) {
                                for (var u = i, f = 1, e = []; u = u.nextSibling;) {
                                    if (t(u) && (s.a.g.set(u, o, !0), f--, 0 === f)) return e;
                                    e.push(u);
                                    n(u) && f++
                                }
                                if (!r) throw Error("Cannot find closing comment tag to match: " + i.nodeValue);
                                return null
                            }

                            function f(n, t) {
                                var i = u(n, t);
                                return i ? 0 < i.length ? i[i.length - 1].nextSibling : n.nextSibling : null
                            }
                            var r = i && "<!--test-->" === i.createComment("test").text,
                                e = r ? /^\x3c!--\s*ko(?:\s+([\s\S]+))?\s*--\x3e$/ : /^\s*ko(?:\s+([\s\S]+))?\s*$/,
                                h = r ? /^\x3c!--\s*\/ko\s*--\x3e$/ : /^\s*\/ko\s*$/,
                                c = {
                                    ul: !0,
                                    ol: !0
                                },
                                o = "__ko_matchedEndComment__";
                            s.h = {
                                ea: {},
                                childNodes: function(t) {
                                    return n(t) ? u(t) : t.childNodes
                                },
                                Ea: function(t) {
                                    if (n(t)) {
                                        t = s.h.childNodes(t);
                                        for (var i = 0, r = t.length; i < r; i++) s.removeNode(t[i])
                                    } else s.a.Tb(t)
                                },
                                va: function(t, i) {
                                    if (n(t)) {
                                        s.h.Ea(t);
                                        for (var u = t.nextSibling, r = 0, f = i.length; r < f; r++) u.parentNode.insertBefore(i[r], u)
                                    } else s.a.va(t, i)
                                },
                                Vc: function(t, i) {
                                    var r;
                                    n(t) ? (r = t.nextSibling, t = t.parentNode) : r = t.firstChild;
                                    r ? i !== r && t.insertBefore(i, r) : t.appendChild(i)
                                },
                                Wb: function(t, i, r) {
                                    r ? (r = r.nextSibling, n(t) && (t = t.parentNode), r ? i !== r && t.insertBefore(i, r) : t.appendChild(i)) : s.h.Vc(t, i)
                                },
                                firstChild: function(i) {
                                    if (n(i)) return !i.nextSibling || t(i.nextSibling) ? null : i.nextSibling;
                                    if (i.firstChild && t(i.firstChild)) throw Error("Found invalid end comment, as the first child of " + i);
                                    return i.firstChild
                                },
                                nextSibling: function(i) {
                                    if (n(i) && (i = f(i)), i.nextSibling && t(i.nextSibling)) {
                                        var r = i.nextSibling;
                                        if (t(r) && !s.a.g.get(r, o)) throw Error("Found end comment without a matching opening comment, as child of " + i);
                                        return null
                                    }
                                    return i.nextSibling
                                },
                                Cd: n,
                                Vd: function(n) {
                                    return (n = (r ? n.text : n.nodeValue).match(e)) ? n[1] : null
                                },
                                Sc: function(i) {
                                    var o, r, u, e;
                                    if (c[s.a.R(i)] && (o = i.firstChild, o))
                                        do
                                            if (1 === o.nodeType) {
                                                if (r = o.firstChild, u = null, r)
                                                    do u ? u.push(r) : n(r) ? (e = f(r, !0), e ? r = e : u = [r]) : t(r) && (u = [r]); while (r = r.nextSibling);
                                                if (r = u)
                                                    for (u = o.nextSibling, e = 0; e < r.length; e++) u ? i.insertBefore(r[e], u) : i.appendChild(r[e])
                                            } while (o = o.nextSibling)
                                }
                            }
                        }();
                    s.b("virtualElements", s.h);
                    s.b("virtualElements.allowedBindings", s.h.ea);
                    s.b("virtualElements.emptyNode", s.h.Ea);
                    s.b("virtualElements.insertAfter", s.h.Wb);
                    s.b("virtualElements.prepend", s.h.Vc);
                    s.b("virtualElements.setDomNodeChildren", s.h.va),
                        function() {
                            s.ga = function() {
                                this.nd = {}
                            };
                            s.a.extend(s.ga.prototype, {
                                nodeHasBindings: function(n) {
                                    switch (n.nodeType) {
                                        case 1:
                                            return null != n.getAttribute("data-bind") || s.j.getComponentNameForNode(n);
                                        case 8:
                                            return s.h.Cd(n);
                                        default:
                                            return !1
                                    }
                                },
                                getBindings: function(n, t) {
                                    var i = this.getBindingsString(n, t),
                                        i = i ? this.parseBindingsString(i, t, n) : null;
                                    return s.j.tc(i, n, t, !1)
                                },
                                getBindingAccessors: function(n, t) {
                                    var i = this.getBindingsString(n, t),
                                        i = i ? this.parseBindingsString(i, t, n, {
                                            valueAccessors: !0
                                        }) : null;
                                    return s.j.tc(i, n, t, !0)
                                },
                                getBindingsString: function(n) {
                                    switch (n.nodeType) {
                                        case 1:
                                            return n.getAttribute("data-bind");
                                        case 8:
                                            return s.h.Vd(n);
                                        default:
                                            return null
                                    }
                                },
                                parseBindingsString: function(n, t, i, r) {
                                    var u, f, e, h, c;
                                    try {
                                        return u = this.nd, f = n + (r && r.valueAccessors || ""), (e = u[f]) || (c = "with($context){with($data||{}){return{" + s.m.vb(n, r) + "}}}", h = new Function("$context", "$element", c), e = u[f] = h), e(t, i)
                                    } catch (o) {
                                        throw o.message = "Unable to parse bindings.\nBindings value: " + n + "\nMessage: " + o.message, o;
                                    }
                                }
                            });
                            s.ga.instance = new s.ga
                        }();
                    s.b("bindingProvider", s.ga),
                        function() {
                            function v(n) {
                                var t = (n = s.a.g.get(n, f)) && n.N;
                                t && (n.N = null, t.Tc())
                            }

                            function o(n, t, i) {
                                this.node = n;
                                this.yc = t;
                                this.kb = [];
                                this.H = !1;
                                t.N || s.a.K.za(n, v);
                                i && i.N && (i.N.kb.push(n), this.Kb = i)
                            }

                            function d(n) {
                                return function() {
                                    return n
                                }
                            }

                            function l(n) {
                                return n()
                            }

                            function y(n) {
                                return s.a.Ga(s.u.G(n), function(t, i) {
                                    return function() {
                                        return n()[i]
                                    }
                                })
                            }

                            function g(n, t, i) {
                                return "function" == typeof n ? y(n.bind(null, t, i)) : s.a.Ga(n, d)
                            }

                            function nt(n, t) {
                                return y(this.getBindings.bind(this, n, t))
                            }

                            function p(n, t) {
                                var i = s.h.firstChild(t),
                                    r, u, f;
                                if (i) {
                                    if (u = s.ga.instance, f = u.preprocessNode, f) {
                                        for (; r = i;) i = s.h.nextSibling(r), f.call(u, r);
                                        i = s.h.firstChild(t)
                                    }
                                    for (; r = i;) i = s.h.nextSibling(r), w(n, r)
                                }
                                s.i.ma(t, s.i.H)
                            }

                            function w(n, t) {
                                var i = n,
                                    r = 1 === t.nodeType;
                                r && s.h.Sc(t);
                                (r || s.ga.instance.nodeHasBindings(t)) && (i = b(t, null, n).bindingContextForDescendants);
                                i && !k[s.a.R(t)] && p(i, t)
                            }

                            function tt(n) {
                                var i = [],
                                    r = {},
                                    t = [];
                                return s.a.P(n, function u(f) {
                                    if (!r[f]) {
                                        var e = s.getBindingHandler(f);
                                        e && (e.after && (t.push(f), s.a.D(e.after, function(i) {
                                            if (n[i]) {
                                                if (-1 !== s.a.A(t, i)) throw Error("Cannot combine the following bindings, because they have a cyclic dependency: " + t.join(", "));
                                                u(i)
                                            }
                                        }), t.length--), i.push({
                                            key: f,
                                            Mc: e
                                        }));
                                        r[f] = !0
                                    }
                                }), i
                            }

                            function b(t, i, r) {
                                var o = s.a.g.Ub(t, f, {}),
                                    w = o.hd,
                                    e, h, y, v, p;
                                if (!i) {
                                    if (w) throw Error("You cannot apply bindings multiple times to the same element.");
                                    o.hd = !0
                                }
                                if (w || (o.context = r), o.Zb || (o.Zb = {}), i && "function" != typeof i) e = i;
                                else {
                                    var b = s.ga.instance,
                                        k = b.getBindingAccessors || nt,
                                        c = s.$(function() {
                                            return (e = i ? i(r, t) : k.call(b, t, r)) && (r[u] && r[u](), r[a] && r[a]()), e
                                        }, null, {
                                            l: t
                                        });
                                    e && c.ja() || (c = null)
                                }
                                return h = r, e && (v = function() {
                                    return s.a.Ga(c ? c() : e, l)
                                }, p = c ? function(n) {
                                    return function() {
                                        return l(c()[n])
                                    }
                                } : function(n) {
                                    return e[n]
                                }, v.get = function(n) {
                                    return e[n] && l(p(n))
                                }, v.has = function(n) {
                                    return n in e
                                }, s.i.H in e && s.i.subscribe(t, s.i.H, function() {
                                    var i = e[s.i.H](),
                                        n;
                                    i && (n = s.h.childNodes(t), n.length && i(n, s.Ec(n[0])))
                                }), s.i.pa in e && (h = s.i.Cb(t, r), s.i.subscribe(t, s.i.pa, function() {
                                    var n = e[s.i.pa]();
                                    n && s.h.firstChild(t) && n(t)
                                })), o = tt(e), s.a.D(o, function(i) {
                                    var f = i.Mc.init,
                                        o = i.Mc.update,
                                        r = i.key;
                                    if (8 === t.nodeType && !s.h.ea[r]) throw Error("The binding '" + r + "' cannot be used with virtual elements");
                                    try {
                                        "function" == typeof f && s.u.G(function() {
                                            var i = f(t, p(r), v, h.$data, h);
                                            if (i && i.controlsDescendantBindings) {
                                                if (y !== n) throw Error("Multiple bindings (" + y + " and " + r + ") are trying to control descendant bindings of the same element. You cannot use these bindings together on the same element.");
                                                y = r
                                            }
                                        });
                                        "function" == typeof o && s.$(function() {
                                            o(t, p(r), v, h.$data, h)
                                        }, null, {
                                            l: t
                                        })
                                    } catch (u) {
                                        throw u.message = 'Unable to process binding "' + r + ": " + e[r] + '"\nMessage: ' + u.message, u;
                                    }
                                })), o = y === n, {
                                    shouldBindDescendants: o,
                                    bindingContextForDescendants: o && h
                                }
                            }

                            function h(t, i) {
                                return t && t instanceof s.fa ? t : new s.fa(t, n, n, i)
                            }
                            var u = s.a.Da("_subscribable"),
                                e = s.a.Da("_ancestorBindingInfo"),
                                a = s.a.Da("_dataDependency"),
                                k, c, f;
                            s.c = {};
                            k = {
                                script: !0,
                                textarea: !0,
                                template: !0
                            };
                            s.getBindingHandler = function(n) {
                                return s.c[n]
                            };
                            c = {};
                            s.fa = function(t, i, r, f, o) {
                                function y() {
                                    var t = b ? v() : v,
                                        n = s.a.f(t);
                                    return i ? (s.a.extend(h, i), e in i && (h[e] = i[e])) : (h.$parents = [], h.$root = n, h.ko = s), h[u] = l, p ? n = h.$data : (h.$rawData = t, h.$data = n), r && (h[r] = n), f && f(h, i, n), i && i[u] && !s.S.o().Vb(i[u]) && i[u](), w && (h[a] = w), h.$data
                                }
                                var h = this,
                                    p = t === c,
                                    v = p ? n : t,
                                    b = "function" == typeof v && !s.O(v),
                                    l, w = o && o.dataDependency;
                                o && o.exportDependencies ? y() : (l = s.xb(y), l.v(), l.ja() ? l.equalityComparer = null : h[u] = n)
                            };
                            s.fa.prototype.createChildContext = function(n, t, i, r) {
                                if (!r && t && "object" == typeof t && (r = t, t = r.as, i = r.extend), t && r && r.noChildContext) {
                                    var u = "function" == typeof n && !s.O(n);
                                    return new s.fa(c, this, null, function(r) {
                                        i && i(r);
                                        r[t] = u ? n() : n
                                    }, r)
                                }
                                return new s.fa(n, this, t, function(n, t) {
                                    n.$parentContext = t;
                                    n.$parent = t.$data;
                                    n.$parents = (t.$parents || []).slice(0);
                                    n.$parents.unshift(n.$parent);
                                    i && i(n)
                                }, r)
                            };
                            s.fa.prototype.extend = function(n, t) {
                                return new s.fa(c, this, null, function(t) {
                                    s.a.extend(t, "function" == typeof n ? n(t) : n)
                                }, t)
                            };
                            f = s.a.g.Z();
                            o.prototype.Tc = function() {
                                this.Kb && this.Kb.N && this.Kb.N.sd(this.node)
                            };
                            o.prototype.sd = function(n) {
                                s.a.Pa(this.kb, n);
                                !this.kb.length && this.H && this.Cc()
                            };
                            o.prototype.Cc = function() {
                                this.H = !0;
                                this.yc.N && !this.kb.length && (this.yc.N = null, s.a.K.yb(this.node, v), s.i.ma(this.node, s.i.pa), this.Tc())
                            };
                            s.i = {
                                H: "childrenComplete",
                                pa: "descendantsComplete",
                                subscribe: function(n, t, i, r, u) {
                                    var e = s.a.g.Ub(n, f, {});
                                    return e.Fa || (e.Fa = new s.T), u && u.notifyImmediately && e.Zb[t] && s.u.G(i, r, [n]), e.Fa.subscribe(i, r, t)
                                },
                                ma: function(t, i) {
                                    var r = s.a.g.get(t, f);
                                    if (r && (r.Zb[i] = !0, r.Fa && r.Fa.notifySubscribers(t, i), i == s.i.H))
                                        if (r.N) r.N.Cc();
                                        else if (r.N === n && r.Fa && r.Fa.Wa(s.i.pa)) throw Error("descendantsComplete event not supported for bindings on this node");
                                },
                                Cb: function(n, t) {
                                    var i = s.a.g.Ub(n, f, {});
                                    return i.N || (i.N = new o(n, i, t[e])), t[e] == i ? t : t.extend(function(n) {
                                        n[e] = i
                                    })
                                }
                            };
                            s.Td = function(n) {
                                return (n = s.a.g.get(n, f)) && n.context
                            };
                            s.ib = function(n, t, i) {
                                return 1 === n.nodeType && s.h.Sc(n), b(n, t, h(i))
                            };
                            s.ld = function(n, t, i) {
                                return i = h(i), s.ib(n, g(t, i, n), i)
                            };
                            s.Oa = function(n, t) {
                                1 !== t.nodeType && 8 !== t.nodeType || p(h(n), t)
                            };
                            s.vc = function(n, u, f) {
                                if (!t && r.jQuery && (t = r.jQuery), 2 > arguments.length) {
                                    if (u = i.body, !u) throw Error("ko.applyBindings: could not find document.body; has the document been loaded?");
                                } else if (!u || 1 !== u.nodeType && 8 !== u.nodeType) throw Error("ko.applyBindings: first parameter should be your view model; second parameter should be a DOM node");
                                w(h(n, f), u)
                            };
                            s.Dc = function(t) {
                                return !t || 1 !== t.nodeType && 8 !== t.nodeType ? n : s.Td(t)
                            };
                            s.Ec = function(t) {
                                return (t = s.Dc(t)) ? t.$data : n
                            };
                            s.b("bindingHandlers", s.c);
                            s.b("bindingEvent", s.i);
                            s.b("bindingEvent.subscribe", s.i.subscribe);
                            s.b("bindingEvent.startPossiblyAsyncContentBinding", s.i.Cb);
                            s.b("applyBindings", s.vc);
                            s.b("applyBindingsToDescendants", s.Oa);
                            s.b("applyBindingAccessorsToNode", s.ib);
                            s.b("applyBindingsToNode", s.ld);
                            s.b("contextFor", s.Dc);
                            s.b("dataFor", s.Ec)
                        }(),
                        function(n) {
                            function u(t, u) {
                                var e = Object.prototype.hasOwnProperty.call(i, t) ? i[t] : n,
                                    o;
                                e ? e.subscribe(u) : (e = i[t] = new s.T, e.subscribe(u), f(t, function(n, u) {
                                    var f = !(!u || !u.synchronous);
                                    r[t] = {
                                        definition: n,
                                        Gd: f
                                    };
                                    delete i[t];
                                    o || f ? e.notifySubscribers(n) : s.na.zb(function() {
                                        e.notifySubscribers(n)
                                    })
                                }), o = !0)
                            }

                            function f(n, i) {
                                t("getConfig", [n], function(r) {
                                    r ? t("loadComponent", [n, r], function(n) {
                                        i(n, r)
                                    }) : i(null, null)
                                })
                            }

                            function t(i, r, u, f) {
                                var e, o, h;
                                if (f || (f = s.j.loaders.slice(0)), e = f.shift(), e)
                                    if (o = e[i], o) {
                                        if (h = !1, o.apply(e, r.concat(function(n) {
                                                h ? u(null) : null !== n ? u(n) : t(i, r, u, f)
                                            })) !== n && (h = !0, !e.suppressLoaderExceptions)) throw Error("Component loaders must supply values by invoking the callback, not by returning values synchronously.");
                                    } else t(i, r, u, f);
                                else u(null)
                            }
                            var i = {},
                                r = {};
                            s.j = {
                                get: function(t, i) {
                                    var f = Object.prototype.hasOwnProperty.call(r, t) ? r[t] : n;
                                    f ? f.Gd ? s.u.G(function() {
                                        i(f.definition)
                                    }) : s.na.zb(function() {
                                        i(f.definition)
                                    }) : u(t, i)
                                },
                                Bc: function(n) {
                                    delete r[n]
                                },
                                oc: t
                            };
                            s.j.loaders = [];
                            s.b("components", s.j);
                            s.b("components.get", s.j.get);
                            s.b("components.clearCachedDefinition", s.j.Bc)
                        }(),
                        function() {
                            function l(n, i, r, f) {
                                function e() {
                                    0 == --c && f(o)
                                }
                                var o = {},
                                    c = 2,
                                    h = r.template;
                                r = r.viewModel;
                                h ? u(i, h, function(t) {
                                    s.j.oc("loadTemplate", [n, t], function(n) {
                                        o.template = n;
                                        e()
                                    })
                                }) : e();
                                r ? u(i, r, function(i) {
                                    s.j.oc("loadViewModel", [n, i], function(n) {
                                        o[t] = n;
                                        e()
                                    })
                                }) : e()
                            }

                            function e(n, i, r) {
                                if ("function" == typeof i) r(function(n) {
                                    return new i(n)
                                });
                                else if ("function" == typeof i[t]) r(i[t]);
                                else if ("instance" in i) {
                                    var u = i.instance;
                                    r(function() {
                                        return u
                                    })
                                } else "viewModel" in i ? e(n, i.viewModel, r) : n("Unknown viewModel value: " + i)
                            }

                            function h(n) {
                                switch (s.a.R(n)) {
                                    case "script":
                                        return s.a.ua(n.text);
                                    case "textarea":
                                        return s.a.ua(n.value);
                                    case "template":
                                        if (c(n.content)) return s.a.Ca(n.content.childNodes)
                                }
                                return s.a.Ca(n.childNodes)
                            }

                            function c(n) {
                                return r.DocumentFragment ? n instanceof DocumentFragment : n && 11 === n.nodeType
                            }

                            function u(n, t, i) {
                                "string" == typeof t.require ? o || r.require ? (o || r.require)([t.require], function(n) {
                                    n && "object" == typeof n && n.Xd && n["default"] && (n = n["default"]);
                                    i(n)
                                }) : n("Uses require, but no AMD loader is present") : i(t)
                            }

                            function f(n) {
                                return function(t) {
                                    throw Error("Component '" + n + "': " + t);
                                }
                            }
                            var n = {},
                                t;
                            s.j.register = function(t, i) {
                                if (!i) throw Error("Invalid configuration for " + t);
                                if (s.j.tb(t)) throw Error("Component " + t + " is already registered");
                                n[t] = i
                            };
                            s.j.tb = function(t) {
                                return Object.prototype.hasOwnProperty.call(n, t)
                            };
                            s.j.unregister = function(t) {
                                delete n[t];
                                s.j.Bc(t)
                            };
                            s.j.Fc = {
                                getConfig: function(t, i) {
                                    i(s.j.tb(t) ? n[t] : null)
                                },
                                loadComponent: function(n, t, i) {
                                    var r = f(n);
                                    u(r, t, function(t) {
                                        l(n, r, t, i)
                                    })
                                },
                                loadTemplate: function(n, t, u) {
                                    if (n = f(n), "string" == typeof t) u(s.a.ua(t));
                                    else if (t instanceof Array) u(t);
                                    else if (c(t)) u(s.a.la(t.childNodes));
                                    else if (t.element)
                                        if (t = t.element, r.HTMLElement ? t instanceof HTMLElement : t && t.tagName && 1 === t.nodeType) u(h(t));
                                        else if ("string" == typeof t) {
                                        var e = i.getElementById(t);
                                        e ? u(h(e)) : n("Cannot find element with ID " + t)
                                    } else n("Unknown element type: " + t);
                                    else n("Unknown template value: " + t)
                                },
                                loadViewModel: function(n, t, i) {
                                    e(f(n), t, i)
                                }
                            };
                            t = "createViewModel";
                            s.b("components.register", s.j.register);
                            s.b("components.isRegistered", s.j.tb);
                            s.b("components.unregister", s.j.unregister);
                            s.b("components.defaultLoader", s.j.Fc);
                            s.j.loaders.push(s.j.Fc);
                            s.j.dd = n
                        }(),
                        function() {
                            function n(n, i) {
                                var r = n.getAttribute("params");
                                if (r) {
                                    var r = t.parseBindingsString(r, i, n, {
                                            valueAccessors: !0,
                                            bindingParams: !0
                                        }),
                                        r = s.a.Ga(r, function(t) {
                                            return s.o(t, null, {
                                                l: n
                                            })
                                        }),
                                        u = s.a.Ga(r, function(t) {
                                            var i = t.v();
                                            return t.ja() ? s.o({
                                                read: function() {
                                                    return s.a.f(t())
                                                },
                                                write: s.Za(i) && function(n) {
                                                    t()(n)
                                                },
                                                l: n
                                            }) : i
                                        });
                                    return Object.prototype.hasOwnProperty.call(u, "$raw") || (u.$raw = r), u
                                }
                                return {
                                    $raw: {}
                                }
                            }
                            s.j.getComponentNameForNode = function(n) {
                                var t = s.a.R(n);
                                if (s.j.tb(t) && (-1 != t.indexOf("-") || "[object HTMLUnknownElement]" == "" + n || 8 >= s.a.W && n.tagName === t)) return t
                            };
                            s.j.tc = function(t, i, r, u) {
                                var f, e;
                                if (1 === i.nodeType && (f = s.j.getComponentNameForNode(i), f)) {
                                    if (t = t || {}, t.component) throw Error('Cannot use the "component" binding on a custom element matching a component');
                                    e = {
                                        name: f,
                                        params: n(i, r)
                                    };
                                    t.component = u ? function() {
                                        return e
                                    } : e
                                }
                                return t
                            };
                            var t = new s.ga;
                            9 > s.a.W && (s.j.register = function(n) {
                                return function() {
                                    return n.apply(this, arguments)
                                }
                            }(s.j.register), i.createDocumentFragment = function(n) {
                                return function() {
                                    var t = n(),
                                        i = s.j.dd;
                                    for (var r in i);
                                    return t
                                }
                            }(i.createDocumentFragment))
                        }(),
                        function() {
                            function n(n, t, i) {
                                if (t = t.template, !t) throw Error("Component '" + n + "' has no template");
                                n = s.a.Ca(t);
                                s.h.va(i, n)
                            }

                            function t(n, t, i) {
                                var r = n.createViewModel;
                                return r ? r.call(n, t, i) : t
                            }
                            var i = 0;
                            s.c.component = {
                                init: function(r, u, f, e, o) {
                                    function a() {
                                        var n = h && h.dispose;
                                        "function" == typeof n && n.call(h);
                                        c && c.s();
                                        l = h = c = null
                                    }
                                    var h, l, c, v = s.a.la(s.h.childNodes(r));
                                    return s.h.Ea(r), s.a.K.za(r, a), s.o(function() {
                                        var e = s.a.f(u()),
                                            f, y, p, w;
                                        if ("string" == typeof e ? f = e : (f = s.a.f(e.name), y = s.a.f(e.params)), !f) throw Error("No component name specified");
                                        p = s.i.Cb(r, o);
                                        w = l = ++i;
                                        s.j.get(f, function(i) {
                                            if (l === w) {
                                                if (a(), !i) throw Error("Unknown component '" + f + "'");
                                                n(f, i, r);
                                                var u = t(i, y, {
                                                    element: r,
                                                    templateNodes: v
                                                });
                                                i = p.createChildContext(u, {
                                                    extend: function(n) {
                                                        n.$component = u;
                                                        n.$componentTemplateNodes = v
                                                    }
                                                });
                                                u && u.koDescendantsComplete && (c = s.i.subscribe(r, s.i.pa, u.koDescendantsComplete, u));
                                                h = u;
                                                s.Oa(i, r)
                                            }
                                        })
                                    }, null, {
                                        l: r
                                    }), {
                                        controlsDescendantBindings: !0
                                    }
                                }
                            };
                            s.h.ea.component = !0
                        }();
                    k = {
                        "class": "className",
                        "for": "htmlFor"
                    };
                    s.c.attr = {
                            update: function(t, i) {
                                var r = s.a.f(i()) || {};
                                s.a.P(r, function(i, r) {
                                    r = s.a.f(r);
                                    var u = i.indexOf(":"),
                                        u = "lookupNamespaceURI" in t && 0 < u && t.lookupNamespaceURI(i.substr(0, u)),
                                        f = !1 === r || null === r || r === n;
                                    f ? u ? t.removeAttributeNS(u, i) : t.removeAttribute(i) : r = r.toString();
                                    8 >= s.a.W && i in k ? (i = k[i], f ? t.removeAttribute(i) : t[i] = r) : f || (u ? t.setAttributeNS(u, i, r) : t.setAttribute(i, r));
                                    "name" === i && s.a.Yc(t, f ? "" : r)
                                })
                            }
                        },
                        function() {
                            s.c.checked = {
                                after: ["value", "attr"],
                                init: function(t, i, r) {
                                    function l() {
                                        var v = t.checked,
                                            h = f(),
                                            l, y, p;
                                        s.S.Ya() || !v && (o || s.S.qa()) || (l = s.u.G(i), u ? (y = a ? l.v() : l, p = c, c = h, p !== h ? v && (s.a.Na(y, h, !0), s.a.Na(y, p, !1)) : s.a.Na(y, h, v), a && s.Za(l) && l(y)) : (e && (h === n ? h = v : v || (h = n)), s.m.eb(l, r, "checked", h, !0)))
                                    }

                                    function v() {
                                        var r = s.a.f(i()),
                                            o = f();
                                        u ? (t.checked = 0 <= s.a.A(r, o), c = o) : t.checked = e && o === n ? !!r : f() === r
                                    }
                                    var f = s.xb(function() {
                                            return r.has("checkedValue") ? s.a.f(r.get("checkedValue")) : y ? r.has("value") ? s.a.f(r.get("value")) : t.value : void 0
                                        }),
                                        e = "checkbox" == t.type,
                                        o = "radio" == t.type;
                                    if (e || o) {
                                        var h = i(),
                                            u = e && s.a.f(h) instanceof Array,
                                            a = !(u && h.push && h.splice),
                                            y = o || u,
                                            c = u ? f() : n;
                                        o && !t.name && s.c.uniqueName.init(t, function() {
                                            return !0
                                        });
                                        s.o(l, null, {
                                            l: t
                                        });
                                        s.a.B(t, "click", l);
                                        s.o(v, null, {
                                            l: t
                                        });
                                        h = n
                                    }
                                }
                            };
                            s.m.wa.checked = !0;
                            s.c.checkedValue = {
                                update: function(n, t) {
                                    n.value = s.a.f(t())
                                }
                            }
                        }();
                    s.c["class"] = {
                        update: function(n, t) {
                            var i = s.a.Db(s.a.f(t()));
                            s.a.Eb(n, n.__ko__cssValue, !1);
                            n.__ko__cssValue = i;
                            s.a.Eb(n, i, !0)
                        }
                    };
                    s.c.css = {
                        update: function(n, t) {
                            var i = s.a.f(t());
                            null !== i && "object" == typeof i ? s.a.P(i, function(t, i) {
                                i = s.a.f(i);
                                s.a.Eb(n, t, i)
                            }) : s.c["class"].update(n, t)
                        }
                    };
                    s.c.enable = {
                        update: function(n, t) {
                            var i = s.a.f(t());
                            i && n.disabled ? n.removeAttribute("disabled") : i || n.disabled || (n.disabled = !0)
                        }
                    };
                    s.c.disable = {
                        update: function(n, t) {
                            s.c.enable.update(n, function() {
                                return !s.a.f(t())
                            })
                        }
                    };
                    s.c.event = {
                        init: function(n, t, i, r, u) {
                            var f = t() || {};
                            s.a.P(f, function(f) {
                                "string" == typeof f && s.a.B(n, f, function(n) {
                                    var o, h = t()[f],
                                        e;
                                    if (h) {
                                        try {
                                            e = s.a.la(arguments);
                                            r = u.$data;
                                            e.unshift(r);
                                            o = h.apply(r, e)
                                        } finally {
                                            !0 !== o && (n.preventDefault ? n.preventDefault() : n.returnValue = !1)
                                        }!1 === i.get(f + "Bubble") && (n.cancelBubble = !0, n.stopPropagation && n.stopPropagation())
                                    }
                                })
                            })
                        }
                    };
                    s.c.foreach = {
                        Rc: function(n) {
                            return function() {
                                var i = n(),
                                    t = s.a.bc(i);
                                return !t || "number" == typeof t.length ? {
                                    foreach: i,
                                    templateEngine: s.ba.Ma
                                } : (s.a.f(i), {
                                    foreach: t.data,
                                    as: t.as,
                                    noChildContext: t.noChildContext,
                                    includeDestroyed: t.includeDestroyed,
                                    afterAdd: t.afterAdd,
                                    beforeRemove: t.beforeRemove,
                                    afterRender: t.afterRender,
                                    beforeMove: t.beforeMove,
                                    afterMove: t.afterMove,
                                    templateEngine: s.ba.Ma
                                })
                            }
                        },
                        init: function(n, t) {
                            return s.c.template.init(n, s.c.foreach.Rc(t))
                        },
                        update: function(n, t, i, r, u) {
                            return s.c.template.update(n, s.c.foreach.Rc(t), i, r, u)
                        }
                    };
                    s.m.Ra.foreach = !1;
                    s.h.ea.foreach = !0;
                    s.c.hasfocus = {
                        init: function(n, t, i) {
                            function r(r) {
                                var u, f;
                                if (n.__ko_hasfocusUpdating = !0, u = n.ownerDocument, "activeElement" in u) {
                                    try {
                                        f = u.activeElement
                                    } catch (e) {
                                        f = u.body
                                    }
                                    r = f === n
                                }
                                u = t();
                                s.m.eb(u, i, "hasfocus", r, !0);
                                n.__ko_hasfocusLastValue = r;
                                n.__ko_hasfocusUpdating = !1
                            }
                            var u = r.bind(null, !0),
                                f = r.bind(null, !1);
                            s.a.B(n, "focus", u);
                            s.a.B(n, "focusin", u);
                            s.a.B(n, "blur", f);
                            s.a.B(n, "focusout", f);
                            n.__ko_hasfocusLastValue = !1
                        },
                        update: function(n, t) {
                            var i = !!s.a.f(t());
                            n.__ko_hasfocusUpdating || n.__ko_hasfocusLastValue === i || (i ? n.focus() : n.blur(), !i && n.__ko_hasfocusLastValue && n.ownerDocument.body.focus(), s.u.G(s.a.Fb, null, [n, i ? "focusin" : "focusout"]))
                        }
                    };
                    s.m.wa.hasfocus = !0;
                    s.c.hasFocus = s.c.hasfocus;
                    s.m.wa.hasFocus = "hasfocus";
                    s.c.html = {
                            init: function() {
                                return {
                                    controlsDescendantBindings: !0
                                }
                            },
                            update: function(n, t) {
                                s.a.fc(n, t())
                            }
                        },
                        function() {
                            function n(n, t, i) {
                                s.c[n] = {
                                    init: function(n, r, u, f, e) {
                                        var a, c, o = {},
                                            v, y, h, l;
                                        return t && (f = u.get("as"), l = u.get("noChildContext"), h = !(f && l), o = {
                                            as: f,
                                            noChildContext: l,
                                            exportDependencies: h
                                        }), y = (v = "render" == u.get("completeOn")) || u.has(s.i.pa), s.o(function() {
                                            var f = s.a.f(r()),
                                                u = !i != !f,
                                                l = !c,
                                                p;
                                            (h || u !== a) && (y && (e = s.i.Cb(n, e)), u && ((!t || h) && (o.dataDependency = s.S.o()), p = t ? e.createChildContext("function" == typeof f ? f : r, o) : s.S.qa() ? e.extend(null, o) : e), l && s.S.qa() && (c = s.a.Ca(s.h.childNodes(n), !0)), u ? (l || s.h.va(n, s.a.Ca(c)), s.Oa(p, n)) : (s.h.Ea(n), v || s.i.ma(n, s.i.H)), a = u)
                                        }, null, {
                                            l: n
                                        }), {
                                            controlsDescendantBindings: !0
                                        }
                                    }
                                };
                                s.m.Ra[n] = !1;
                                s.h.ea[n] = !0
                            }
                            n("if");
                            n("ifnot", !1, !0);
                            n("with", !0)
                        }();
                    s.c.let = {
                        init: function(n, t, i, r, u) {
                            return t = u.extend(t), s.Oa(t, n), {
                                controlsDescendantBindings: !0
                            }
                        }
                    };
                    s.h.ea.let = !0;
                    w = {};
                    s.c.options = {
                        init: function(n) {
                            if ("select" !== s.a.R(n)) throw Error("options binding applies only to SELECT elements");
                            for (; 0 < n.length;) n.remove(0);
                            return {
                                controlsDescendantBindings: !0
                            }
                        },
                        update: function(t, i, r) {
                            function a() {
                                return s.a.jb(t.options, function(n) {
                                    return n.selected
                                })
                            }

                            function v(n, t, i) {
                                var r = typeof t;
                                return "function" == r ? t(n) : "string" == r ? n[t] : i
                            }

                            function y(n, i) {
                                if (o && e) s.i.ma(t, s.i.H);
                                else if (f.length) {
                                    var r = 0 <= s.a.A(f, s.w.M(i[0]));
                                    s.a.Zc(i[0], r);
                                    o && !r && s.u.G(s.a.Fb, null, [t, "change"])
                                }
                            }
                            var h = t.multiple,
                                c = 0 != t.length && h ? t.scrollTop : null,
                                u = s.a.f(i()),
                                e = r.get("valueAllowUnset") && r.has("value"),
                                b = r.get("optionsIncludeDestroyed"),
                                l, f, o, p;
                            i = {};
                            f = [];
                            e || (h ? f = s.a.Mb(a(), s.w.M) : 0 <= t.selectedIndex && f.push(s.w.M(t.options[t.selectedIndex])));
                            u && ("undefined" == typeof u.length && (u = [u]), l = s.a.jb(u, function(t) {
                                return b || t === n || null === t || !s.a.f(t._destroy)
                            }), r.has("optionsCaption") && (u = s.a.f(r.get("optionsCaption")), null !== u && u !== n && l.unshift(w)));
                            o = !1;
                            i.beforeRemove = function(n) {
                                t.removeChild(n)
                            };
                            u = y;
                            r.has("optionsAfterRender") && "function" == typeof r.get("optionsAfterRender") && (u = function(t, i) {
                                y(0, i);
                                s.u.G(r.get("optionsAfterRender"), null, [i[0], t !== w ? t : n])
                            });
                            s.a.ec(t, l, function(i, u, h) {
                                return h.length && (f = !e && h[0].selected ? [s.w.M(h[0])] : [], o = !0), u = t.ownerDocument.createElement("option"), i === w ? (s.a.Bb(u, r.get("optionsCaption")), s.w.cb(u, n)) : (h = v(i, r.get("optionsValue"), i), s.w.cb(u, s.a.f(h)), i = v(i, r.get("optionsText"), h), s.a.Bb(u, i)), [u]
                            }, i, u);
                            e || (p = h ? f.length && a().length < f.length : f.length && 0 <= t.selectedIndex ? s.w.M(t.options[t.selectedIndex]) !== f[0] : f.length || 0 <= t.selectedIndex, p && s.u.G(s.a.Fb, null, [t, "change"]));
                            (e || s.S.Ya()) && s.i.ma(t, s.i.H);
                            s.a.wd(t);
                            c && 20 < Math.abs(c - t.scrollTop) && (t.scrollTop = c)
                        }
                    };
                    s.c.options.$b = s.a.g.Z();
                    s.c.selectedOptions = {
                        init: function(n, t, i) {
                            function r() {
                                var u = t(),
                                    r = [];
                                s.a.D(n.getElementsByTagName("option"), function(n) {
                                    n.selected && r.push(s.w.M(n))
                                });
                                s.m.eb(u, i, "selectedOptions", r)
                            }

                            function f() {
                                var i = s.a.f(t()),
                                    r = n.scrollTop;
                                i && "number" == typeof i.length && s.a.D(n.getElementsByTagName("option"), function(n) {
                                    var t = 0 <= s.a.A(i, s.w.M(n));
                                    n.selected != t && s.a.Zc(n, t)
                                });
                                n.scrollTop = r
                            }
                            if ("select" != s.a.R(n)) throw Error("selectedOptions binding applies only to SELECT elements");
                            var u;
                            s.i.subscribe(n, s.i.H, function() {
                                u ? r() : (s.a.B(n, "change", r), u = s.o(f, null, {
                                    l: n
                                }))
                            }, null, {
                                notifyImmediately: !0
                            })
                        },
                        update: function() {}
                    };
                    s.m.wa.selectedOptions = !0;
                    s.c.style = {
                        update: function(i, r) {
                            var u = s.a.f(r() || {});
                            s.a.P(u, function(r, u) {
                                if (u = s.a.f(u), (null === u || u === n || !1 === u) && (u = ""), t) t(i).css(r, u);
                                else if (/^--/.test(r)) i.style.setProperty(r, u);
                                else {
                                    r = r.replace(/-(\w)/g, function(n, t) {
                                        return t.toUpperCase()
                                    });
                                    var f = i.style[r];
                                    i.style[r] = u;
                                    u === f || i.style[r] != f || isNaN(u) || (i.style[r] = u + "px")
                                }
                            })
                        }
                    };
                    s.c.submit = {
                        init: function(n, t, i, r, u) {
                            if ("function" != typeof t()) throw Error("The value for a submit binding must be a function");
                            s.a.B(n, "submit", function(i) {
                                var r, f = t();
                                try {
                                    r = f.call(u.$data, n)
                                } finally {
                                    !0 !== r && (i.preventDefault ? i.preventDefault() : i.returnValue = !1)
                                }
                            })
                        }
                    };
                    s.c.text = {
                        init: function() {
                            return {
                                controlsDescendantBindings: !0
                            }
                        },
                        update: function(n, t) {
                            s.a.Bb(n, t())
                        }
                    };
                    s.h.ea.text = !0,
                        function() {
                            var i, u, f, e, o, t, h;
                            if (r && r.navigator && (i = function(n) {
                                    if (n) return parseFloat(n[1])
                                }, u = r.navigator.userAgent, (f = r.opera && r.opera.version && parseInt(r.opera.version())) || (h = i(u.match(/Edge\/([^ ]+)$/))) || i(u.match(/Chrome\/([^ ]+)/)) || (e = i(u.match(/Version\/([^ ]+) Safari/))) || (o = i(u.match(/Firefox\/([^ ]+)/))) || (t = s.a.W || i(u.match(/MSIE ([^ ]+)/))) || (t = i(u.match(/rv:([^ )]+)/)))), 8 <= t && 10 > t) var c = s.a.g.Z(),
                                l = s.a.g.Z(),
                                v = function(n) {
                                    var t = this.activeElement;
                                    (t = t && s.a.g.get(t, l)) && t(n)
                                },
                                a = function(n, t) {
                                    var i = n.ownerDocument;
                                    s.a.g.get(i, c) || (s.a.g.set(i, c, !0), s.a.B(i, "selectionchange", v));
                                    s.a.g.set(n, l, t)
                                };
                            s.c.textInput = {
                                init: function(i, r, u) {
                                    function c(n, t) {
                                        s.a.B(i, n, t)
                                    }

                                    function d() {
                                        var t = s.a.f(r());
                                        (null === t || t === n) && (t = "");
                                        p !== n && t === p ? s.a.setTimeout(d, 4) : i.value !== t && (k = !0, i.value = t, k = !1, w = i.value)
                                    }

                                    function v() {
                                        y || (p = i.value, y = s.a.setTimeout(l, 4))
                                    }

                                    function l() {
                                        clearTimeout(y);
                                        p = y = n;
                                        var t = i.value;
                                        w !== t && (w = t, s.m.eb(r(), u, "textInput", t))
                                    }
                                    var w = i.value,
                                        y, p, b = 9 == s.a.W ? v : l,
                                        k = !1;
                                    t && c("keypress", l);
                                    11 > t && c("propertychange", function(n) {
                                        k || "value" !== n.propertyName || b(n)
                                    });
                                    8 == t && (c("keyup", l), c("keydown", l));
                                    a && (a(i, b), c("dragend", v));
                                    (!t || 9 <= t) && c("input", b);
                                    5 > e && "textarea" === s.a.R(i) ? (c("keydown", v), c("paste", v), c("cut", v)) : 11 > f ? c("keydown", v) : 4 > o ? (c("DOMAutoComplete", l), c("dragdrop", l), c("drop", l)) : h && "number" === i.type && c("keydown", v);
                                    c("change", l);
                                    c("blur", l);
                                    s.o(d, null, {
                                        l: i
                                    })
                                }
                            };
                            s.m.wa.textInput = !0;
                            s.c.textinput = {
                                preprocess: function(n, t, i) {
                                    i("textInput", n)
                                }
                            }
                        }();
                    s.c.uniqueName = {
                        init: function(n, t) {
                            if (t()) {
                                var i = "ko_unique_" + ++s.c.uniqueName.rd;
                                s.a.Yc(n, i)
                            }
                        }
                    };
                    s.c.uniqueName.rd = 0;
                    s.c.using = {
                        init: function(n, t, i, r, u) {
                            var f;
                            return i.has("as") && (f = {
                                as: i.get("as"),
                                noChildContext: i.get("noChildContext")
                            }), t = u.createChildContext(t, f), s.Oa(t, n), {
                                controlsDescendantBindings: !0
                            }
                        }
                    };
                    s.h.ea.using = !0;
                    s.c.value = {
                        init: function(t, i, r) {
                            var l = s.a.R(t),
                                a = "input" == l,
                                u, f, v;
                            if (a && ("checkbox" == t.type || "radio" == t.type)) s.ib(t, {
                                checkedValue: i
                            });
                            else {
                                var e = [],
                                    o = r.get("valueUpdate"),
                                    h = !1,
                                    c = null;
                                o && (e = "string" == typeof o ? [o] : s.a.wc(o), s.a.Pa(e, "change"));
                                u = function() {
                                    c = null;
                                    h = !1;
                                    var n = i(),
                                        u = s.w.M(t);
                                    s.m.eb(n, r, "value", u)
                                };
                                s.a.W && a && "text" == t.type && "off" != t.autocomplete && (!t.form || "off" != t.form.autocomplete) && -1 == s.a.A(e, "propertychange") && (s.a.B(t, "propertychange", function() {
                                    h = !0
                                }), s.a.B(t, "focus", function() {
                                    h = !1
                                }), s.a.B(t, "blur", function() {
                                    h && u()
                                }));
                                s.a.D(e, function(n) {
                                    var i = u;
                                    s.a.Ud(n, "after") && (i = function() {
                                        c = s.w.M(t);
                                        s.a.setTimeout(u, 0)
                                    }, n = n.substring(5));
                                    s.a.B(t, n, i)
                                });
                                f = a && "file" == t.type ? function() {
                                    var r = s.a.f(i());
                                    null === r || r === n || "" === r ? t.value = "" : s.u.G(u)
                                } : function() {
                                    var e = s.a.f(i()),
                                        o = s.w.M(t);
                                    null !== c && e === c ? s.a.setTimeout(f, 0) : (e !== o || o === n) && ("select" === l ? (o = r.get("valueAllowUnset"), s.w.cb(t, e, o), o || e === s.w.M(t) || s.u.G(u)) : s.w.cb(t, e))
                                };
                                "select" === l ? s.i.subscribe(t, s.i.H, function() {
                                    v ? r.get("valueAllowUnset") ? f() : u() : (s.a.B(t, "change", u), v = s.o(f, null, {
                                        l: t
                                    }))
                                }, null, {
                                    notifyImmediately: !0
                                }) : (s.a.B(t, "change", u), s.o(f, null, {
                                    l: t
                                }))
                            }
                        },
                        update: function() {}
                    };
                    s.m.wa.value = !0;
                    s.c.visible = {
                        update: function(n, t) {
                            var i = s.a.f(t()),
                                r = "none" != n.style.display;
                            i && !r ? n.style.display = "" : !i && r && (n.style.display = "none")
                        }
                    };
                    s.c.hidden = {
                            update: function(n, t) {
                                s.c.visible.update(n, function() {
                                    return !s.a.f(t())
                                })
                            }
                        },
                        function(n) {
                            s.c[n] = {
                                init: function(t, i, r, u, f) {
                                    return s.c.event.init.call(this, t, function() {
                                        var t = {};
                                        return t[n] = i(), t
                                    }, r, u, f)
                                }
                            }
                        }("click");
                    s.ca = function() {};
                    s.ca.prototype.renderTemplateSource = function() {
                        throw Error("Override renderTemplateSource");
                    };
                    s.ca.prototype.createJavaScriptEvaluatorBlock = function() {
                        throw Error("Override createJavaScriptEvaluatorBlock");
                    };
                    s.ca.prototype.makeTemplateSource = function(n, t) {
                        if ("string" == typeof n) {
                            t = t || i;
                            var r = t.getElementById(n);
                            if (!r) throw Error("Cannot find template with ID " + n);
                            return new s.C.F(r)
                        }
                        if (1 == n.nodeType || 8 == n.nodeType) return new s.C.ia(n);
                        throw Error("Unknown template type: " + n);
                    };
                    s.ca.prototype.renderTemplate = function(n, t, i, r) {
                        return n = this.makeTemplateSource(n, r), this.renderTemplateSource(n, t, i, r)
                    };
                    s.ca.prototype.isTemplateRewritten = function(n, t) {
                        return !1 === this.allowTemplateRewriting ? !0 : this.makeTemplateSource(n, t).data("isRewritten")
                    };
                    s.ca.prototype.rewriteTemplate = function(n, t, i) {
                        n = this.makeTemplateSource(n, i);
                        t = t(n.text());
                        n.text(t);
                        n.data("isRewritten", !0)
                    };
                    s.b("templateEngine", s.ca);
                    s.kc = function() {
                        function n(n, t, i, r) {
                            var o, f, u, e;
                            for (n = s.m.ac(n), o = s.m.Ra, f = 0; f < n.length; f++)
                                if (u = n[f].key, Object.prototype.hasOwnProperty.call(o, u))
                                    if (e = o[u], "function" == typeof e) {
                                        if (u = e(n[f].value)) throw Error(u);
                                    } else if (!e) throw Error("This template engine does not support the '" + u + "' binding within its templates");
                            return i = "ko.__tr_ambtns(function($context,$element){return(function(){return{ " + s.m.vb(n, {
                                valueAccessors: !0
                            }) + " } })()},'" + i.toLowerCase() + "')", r.createJavaScriptEvaluatorBlock(i) + t
                        }
                        var t = /(<([a-z]+\d*)(?:\s+(?!data-bind\s*=\s*)[a-z0-9\-]+(?:=(?:\"[^\"]*\"|\'[^\']*\'|[^>]*))?)*\s+)data-bind\s*=\s*(["'])([\s\S]*?)\3/gi,
                            i = /\x3c!--\s*ko\b\s*([\s\S]*?)\s*--\x3e/g;
                        return {
                            xd: function(n, t, i) {
                                t.isTemplateRewritten(n, i) || t.rewriteTemplate(n, function(n) {
                                    return s.kc.Ld(n, t)
                                }, i)
                            },
                            Ld: function(r, u) {
                                return r.replace(t, function(t, i, r, f, e) {
                                    return n(e, i, r, u)
                                }).replace(i, function(t, i) {
                                    return n(i, "<!-- ko -->", "#comment", u)
                                })
                            },
                            md: function(n, t) {
                                return s.aa.Xb(function(i, r) {
                                    var u = i.nextSibling;
                                    u && u.nodeName.toLowerCase() === t && s.ib(u, n, r)
                                })
                            }
                        }
                    }();
                    s.b("__tr_ambtns", s.kc.md),
                        function() {
                            var i, t;
                            s.C = {};
                            s.C.F = function(n) {
                                if (this.F = n) {
                                    var t = s.a.R(n);
                                    this.ab = "script" === t ? 1 : "textarea" === t ? 2 : "template" == t && n.content && 11 === n.content.nodeType ? 3 : 4
                                }
                            };
                            s.C.F.prototype.text = function() {
                                var n = 1 === this.ab ? "text" : 2 === this.ab ? "value" : "innerHTML",
                                    t;
                                if (0 == arguments.length) return this.F[n];
                                t = arguments[0];
                                "innerHTML" === n ? s.a.fc(this.F, t) : this.F[n] = t
                            };
                            i = s.a.g.Z() + "_";
                            s.C.F.prototype.data = function(n) {
                                if (1 === arguments.length) return s.a.g.get(this.F, i + n);
                                s.a.g.set(this.F, i + n, arguments[1])
                            };
                            t = s.a.g.Z();
                            s.C.F.prototype.nodes = function() {
                                var i = this.F,
                                    r, u, f;
                                if (0 == arguments.length) return r = s.a.g.get(i, t) || {}, u = r.lb || (3 === this.ab ? i.content : 4 === this.ab ? i : n), (!u || r.jd) && (f = this.text(), f && f !== r.bb && (u = s.a.Md(f, i.ownerDocument), s.a.g.set(i, t, {
                                    lb: u,
                                    bb: f,
                                    jd: !0
                                }))), u;
                                r = arguments[0];
                                this.ab !== n && this.text("");
                                s.a.g.set(i, t, {
                                    lb: r
                                })
                            };
                            s.C.ia = function(n) {
                                this.F = n
                            };
                            s.C.ia.prototype = new s.C.F;
                            s.C.ia.prototype.constructor = s.C.ia;
                            s.C.ia.prototype.text = function() {
                                if (0 == arguments.length) {
                                    var i = s.a.g.get(this.F, t) || {};
                                    return i.bb === n && i.lb && (i.bb = i.lb.innerHTML), i.bb
                                }
                                s.a.g.set(this.F, t, {
                                    bb: arguments[0]
                                })
                            };
                            s.b("templateSources", s.C);
                            s.b("templateSources.domElement", s.C.F);
                            s.b("templateSources.anonymousTemplate", s.C.ia)
                        }(),
                        function() {
                            function t(n, t, i) {
                                var r;
                                for (t = s.h.nextSibling(t); n && (r = n) !== t;) n = s.h.nextSibling(r), i(r, n)
                            }

                            function e(n, i) {
                                if (n.length) {
                                    var r = n[0],
                                        u = n[n.length - 1],
                                        f = r.parentNode,
                                        e = s.ga.instance,
                                        o = e.preprocessNode;
                                    if (o) {
                                        if (t(r, u, function(n, t) {
                                                var f = n.previousSibling,
                                                    i = o.call(e, n);
                                                i && (n === r && (r = i[0] || t), n === u && (u = i[i.length - 1] || f))
                                            }), n.length = 0, !r) return;
                                        r === u ? n.push(r) : (n.push(r, u), s.a.Ua(n, f))
                                    }
                                    t(r, u, function(n) {
                                        1 !== n.nodeType && 8 !== n.nodeType || s.vc(i, n)
                                    });
                                    t(r, u, function(n) {
                                        1 !== n.nodeType && 8 !== n.nodeType || s.aa.cd(n, [i])
                                    });
                                    s.a.Ua(n, f)
                                }
                            }

                            function i(n) {
                                return n.nodeType ? n : 0 < n.length ? n[0] : null
                            }

                            function o(n, t, u, f, o) {
                                o = o || {};
                                var h = (n && i(n) || u || {}).ownerDocument,
                                    c = o.templateEngine || r;
                                if (s.kc.xd(u, c, h), u = c.renderTemplate(u, f, o, h), "number" != typeof u.length || 0 < u.length && "number" != typeof u[0].nodeType) throw Error("Template engine must return an array of DOM nodes");
                                h = !1;
                                switch (t) {
                                    case "replaceChildren":
                                        s.h.va(n, u);
                                        h = !0;
                                        break;
                                    case "replaceNode":
                                        s.a.Xc(n, u);
                                        h = !0;
                                        break;
                                    case "ignoreTargetNode":
                                        break;
                                    default:
                                        throw Error("Unknown renderMode: " + t);
                                }
                                return h && (e(u, f), o.afterRender && s.u.G(o.afterRender, null, [u, f[o.as || "$data"]]), "replaceChildren" == t && s.i.ma(n, s.i.H)), u
                            }

                            function h(n, t, i) {
                                return s.O(n) ? n() : "function" == typeof n ? n(t, i) : n
                            }
                            var r, u, f;
                            s.gc = function(t) {
                                if (t != n && !(t instanceof s.ca)) throw Error("templateEngine must inherit from ko.templateEngine");
                                r = t
                            };
                            s.dc = function(t, u, f, e, c) {
                                if (f = f || {}, (f.templateEngine || r) == n) throw Error("Set a template engine before calling renderTemplate");
                                if (c = c || "replaceChildren", e) {
                                    var l = i(e);
                                    return s.$(function() {
                                        var n = u && u instanceof s.fa ? u : new s.fa(u, null, null, null, {
                                                exportDependencies: !0
                                            }),
                                            r = h(t, n.$data, n),
                                            n = o(e, c, r, n, f);
                                        "replaceNode" == c && (e = n, l = i(e))
                                    }, null, {
                                        Sa: function() {
                                            return !l || !s.a.Sb(l)
                                        },
                                        l: l && "replaceNode" == c ? l.parentNode : l
                                    })
                                }
                                return s.aa.Xb(function(n) {
                                    s.dc(t, u, f, n, "replaceNode")
                                })
                            };
                            s.Qd = function(t, i, r, u, f) {
                                function l(n, t) {
                                    s.u.G(s.a.ec, null, [u, n, w, r, p, t]);
                                    s.i.ma(u, s.i.H)
                                }

                                function p(n, t) {
                                    e(t, c);
                                    r.afterRender && r.afterRender(t, n);
                                    c = null
                                }

                                function w(n, i) {
                                    c = f.createChildContext(n, {
                                        as: a,
                                        noChildContext: r.noChildContext,
                                        extend: function(n) {
                                            n.$index = i;
                                            a && (n[a + "Index"] = i)
                                        }
                                    });
                                    var e = h(t, n, c);
                                    return o(u, "ignoreTargetNode", e, c, r)
                                }
                                var c, a = r.as,
                                    y = !1 === r.includeDestroyed || s.options.foreachHidesDestroyed && !r.includeDestroyed,
                                    v;
                                return y || r.beforeRemove || !s.Pc(i) ? s.$(function() {
                                    var t = s.a.f(i) || [];
                                    "undefined" == typeof t.length && (t = [t]);
                                    y && (t = s.a.jb(t, function(t) {
                                        return t === n || null === t || !s.a.f(t._destroy)
                                    }));
                                    l(t)
                                }, null, {
                                    l: u
                                }) : (l(i.v()), v = i.subscribe(function(n) {
                                    l(i(), n)
                                }, null, "arrayChange"), v.l(u), v)
                            };
                            u = s.a.g.Z();
                            f = s.a.g.Z();
                            s.c.template = {
                                init: function(n, t) {
                                    var i = s.a.f(t()),
                                        r;
                                    if ("string" == typeof i || "name" in i) s.h.Ea(n);
                                    else if ("nodes" in i) {
                                        if (i = i.nodes || [], s.O(i)) throw Error('The "nodes" option must be a plain, non-observable array.');
                                        r = i[0] && i[0].parentNode;
                                        r && s.a.g.get(r, f) || (r = s.a.Yb(i), s.a.g.set(r, f, !0));
                                        new s.C.ia(n).nodes(r)
                                    } else if (i = s.h.childNodes(n), 0 < i.length) r = s.a.Yb(i), new s.C.ia(n).nodes(r);
                                    else throw Error("Anonymous template defined, but no template content was provided");
                                    return {
                                        controlsDescendantBindings: !0
                                    }
                                },
                                update: function(t, i, r, f, e) {
                                    var o = i();
                                    i = s.a.f(o);
                                    r = !0;
                                    f = null;
                                    "string" == typeof i ? i = {} : (o = "name" in i ? i.name : t, "if" in i && (r = s.a.f(i["if"])), r && "ifnot" in i && (r = !s.a.f(i.ifnot)), r && !o && (r = !1));
                                    "foreach" in i ? f = s.Qd(o, r && i.foreach || [], i, t, e) : r ? (r = e, "data" in i && (r = e.createChildContext(i.data, {
                                        as: i.as,
                                        noChildContext: i.noChildContext,
                                        exportDependencies: !0
                                    })), f = s.dc(o, r, i, t)) : s.h.Ea(t);
                                    e = f;
                                    (i = s.a.g.get(t, u)) && "function" == typeof i.s && i.s();
                                    s.a.g.set(t, u, !e || e.ja && !e.ja() ? n : e)
                                }
                            };
                            s.m.Ra.template = function(n) {
                                return n = s.m.ac(n), 1 == n.length && n[0].unknown || s.m.Id(n, "name") ? null : "This template engine does not support anonymous templates nested within its templates"
                            };
                            s.h.ea.template = !0
                        }();
                    s.b("setTemplateEngine", s.gc);
                    s.b("renderTemplate", s.dc);
                    s.a.Kc = function(n, t, i) {
                        if (n.length && t.length)
                            for (var o, r, f, e, u = o = 0;
                                (!i || u < i) && (f = n[o]); ++o) {
                                for (r = 0; e = t[r]; ++r)
                                    if (f.value === e.value) {
                                        f.moved = e.index;
                                        e.moved = f.index;
                                        t.splice(r, 1);
                                        u = r = 0;
                                        break
                                    } u += r
                            }
                    };
                    s.a.Pb = function() {
                        function n(n, t, i, r, u) {
                            for (var o = Math.min, l = Math.max, a = [], c = n.length, f, h = t.length, v = h - c || 1, w = c + h + 1, y, p, b, e = 0; e <= c; e++)
                                for (p = y, a.push(y = []), b = o(h, e + v), f = l(0, e - 1); f <= b; f++) y[f] = f ? e ? n[e - 1] === t[f - 1] ? p[f - 1] : o(p[f] || w, y[f - 1] || w) + 1 : f + 1 : e + 1;
                            for (o = [], l = [], v = [], e = c, f = h; e || f;) h = a[e][f] - 1, f && h === a[e][f - 1] ? l.push(o[o.length] = {
                                status: i,
                                value: t[--f],
                                index: f
                            }) : e && h === a[e - 1][f] ? v.push(o[o.length] = {
                                status: r,
                                value: n[--e],
                                index: e
                            }) : (--f, --e, u.sparse || o.push({
                                status: "retained",
                                value: t[f]
                            }));
                            return s.a.Kc(v, l, !u.dontLimitMoves && 10 * c), o.reverse()
                        }
                        return function(t, i, r) {
                            return r = "boolean" == typeof r ? {
                                dontLimitMoves: r
                            } : r || {}, t = t || [], i = i || [], t.length < i.length ? n(t, i, "added", "deleted", r) : n(i, t, "deleted", "added", r)
                        }
                    }();
                    s.b("utils.compareArrays", s.a.Pb),
                        function() {
                            function r(t, i, r, u, f) {
                                var e = [],
                                    o = s.$(function() {
                                        var n = i(r, f, s.a.Ua(e, t)) || [];
                                        0 < e.length && (s.a.Xc(e, n), u && s.u.G(u, null, [r, n, f]));
                                        e.length = 0;
                                        s.a.Nb(e, n)
                                    }, null, {
                                        l: t,
                                        Sa: function() {
                                            return !s.a.kd(e)
                                        }
                                    });
                                return {
                                    Y: e,
                                    $: o.ja() ? o : n
                                }
                            }
                            var t = s.a.g.Z(),
                                i = s.a.g.Z();
                            s.a.ec = function(u, f, e, o, h, c) {
                                function st(n) {
                                    l = {
                                        Aa: n,
                                        pb: s.ta(b++)
                                    };
                                    y.push(l);
                                    ht || ct.push(l)
                                }

                                function d(n) {
                                    l = w[n];
                                    b !== l.pb.v() && et.push(l);
                                    l.pb(b++);
                                    s.a.Ua(l.Y, u);
                                    y.push(l)
                                }

                                function g(n, t) {
                                    if (n)
                                        for (var i = 0, r = t.length; i < r; i++) s.a.D(t[i].Y, function(r) {
                                            n(r, i, t[i].Aa)
                                        })
                                }
                                var a, k, tt, ot, p, it, rt;
                                f = f || [];
                                "undefined" == typeof f.length && (f = [f]);
                                o = o || {};
                                var w = s.a.g.get(u, t),
                                    ht = !w,
                                    y = [],
                                    v = 0,
                                    b = 0,
                                    ut = [],
                                    ft = [],
                                    nt = [],
                                    et = [],
                                    ct = [],
                                    l, lt = 0;
                                if (ht) s.a.D(f, st);
                                else {
                                    for ((!c || w && w._countWaitingForRemove) && (a = s.a.Mb(w, function(n) {
                                            return n.Aa
                                        }), c = s.a.Pb(a, f, {
                                            dontLimitMoves: o.dontLimitMoves,
                                            sparse: !0
                                        })), a = 0; k = c[a]; a++) switch (tt = k.moved, ot = k.index, k.status) {
                                        case "deleted":
                                            for (; v < ot;) d(v++);
                                            tt === n && (l = w[v], l.$ && (l.$.s(), l.$ = n), s.a.Ua(l.Y, u).length && (o.beforeRemove && (y.push(l), lt++, l.Aa === i ? l = null : nt.push(l)), l && ut.push.apply(ut, l.Y)));
                                            v++;
                                            break;
                                        case "added":
                                            for (; b < ot;) d(v++);
                                            tt !== n ? (ft.push(y.length), d(tt)) : st(k.value)
                                    }
                                    for (; b < f.length;) d(v++);
                                    y._countWaitingForRemove = lt
                                }
                                s.a.g.set(u, t, y);
                                g(o.beforeMove, et);
                                s.a.D(ut, o.beforeRemove ? s.oa : s.removeNode);
                                try {
                                    rt = u.ownerDocument.activeElement
                                } catch (at) {}
                                if (ft.length)
                                    for (;
                                        (a = ft.shift()) != n;) {
                                        for (l = y[a], p = n; a;)
                                            if ((it = y[--a].Y) && it.length) {
                                                p = it[it.length - 1];
                                                break
                                            } for (f = 0; v = l.Y[f]; p = v, f++) s.h.Wb(u, v, p)
                                    }
                                for (a = 0; l = y[a]; a++) {
                                    for (l.Y || s.a.extend(l, r(u, e, l.Aa, h, l.pb)), f = 0; v = l.Y[f]; p = v, f++) s.h.Wb(u, v, p);
                                    !l.Ed && h && (h(l.Aa, l.Y, l.pb), l.Ed = !0, p = l.Y[l.Y.length - 1])
                                }
                                for (rt && u.ownerDocument.activeElement != rt && rt.focus(), g(o.beforeRemove, nt), a = 0; a < nt.length; ++a) nt[a].Aa = i;
                                g(o.afterMove, et);
                                g(o.afterAdd, ct)
                            }
                        }();
                    s.b("utils.setDomNodeChildrenFromArrayMapping", s.a.ec);
                    s.ba = function() {
                        this.allowTemplateRewriting = !1
                    };
                    s.ba.prototype = new s.ca;
                    s.ba.prototype.constructor = s.ba;
                    s.ba.prototype.renderTemplateSource = function(n, t, i, r) {
                        return (t = (9 > s.a.W ? 0 : n.nodes) ? n.nodes() : null) ? s.a.la(t.cloneNode(!0).childNodes) : (n = n.text(), s.a.ua(n, r))
                    };
                    s.ba.Ma = new s.ba;
                    s.gc(s.ba.Ma);
                    s.b("nativeTemplateEngine", s.ba),
                        function() {
                            s.$a = function() {
                                var n = this.Hd = function() {
                                    if (!t || !t.tmpl) return 0;
                                    try {
                                        if (0 <= t.tmpl.tag.tmpl.open.toString().indexOf("__")) return 2
                                    } catch (n) {}
                                    return 1
                                }();
                                this.renderTemplateSource = function(r, u, f, e) {
                                    if (e = e || i, f = f || {}, 2 > n) throw Error("Your version of jQuery.tmpl is too old. Please upgrade to jQuery.tmpl 1.0.0pre or later.");
                                    var o = r.data("precompiled");
                                    return o || (o = r.text() || "", o = t.template(null, "{{ko_with $item.koBindingContext}}" + o + "{{/ko_with}}"), r.data("precompiled", o)), r = [u.$data], u = t.extend({
                                        koBindingContext: u
                                    }, f.templateOptions), u = t.tmpl(o, r, u), u.appendTo(e.createElement("div")), t.fragments = {}, u
                                };
                                this.createJavaScriptEvaluatorBlock = function(n) {
                                    return "{{ko_code ((function() { return " + n + " })()) }}"
                                };
                                this.addTemplate = function(n, t) {
                                    i.write("<script type='text/html' id='" + n + "'>" + t + "<\/script>")
                                };
                                0 < n && (t.tmpl.tag.ko_code = {
                                    open: "__.push($1 || '');"
                                }, t.tmpl.tag.ko_with = {
                                    open: "with($1) {",
                                    close: "} "
                                })
                            };
                            s.$a.prototype = new s.ca;
                            s.$a.prototype.constructor = s.$a;
                            var n = new s.$a;
                            0 < n.Hd && s.gc(n);
                            s.b("jqueryTmplTemplateEngine", s.$a)
                        }()
                })
        })()
    }()