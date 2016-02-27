/*! jQuery v1.10.2 | (c) 2005, 2013 jQuery Foundation, Inc. | jquery.org/license
 //@ sourceMappingURL=jquery-1.10.2.min.map
 */
(function (e, t) {
    var n, r, i = typeof t, o = e.location, a = e.document, s = a.documentElement, l = e.jQuery, u = e.$, c = {}, p = [], f = "1.10.2", d = p.concat, h = p.push, g = p.slice, m = p.indexOf, y = c.toString, v = c.hasOwnProperty, b = f.trim, x = function (e, t) {
        return new x.fn.init(e, t, r)
    }, w = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, T = /\S+/g, C = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, N = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, k = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, E = /^[\],:{}\s]*$/, S = /(?:^|:|,)(?:\s*\[)+/g, A = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g, j = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g, D = /^-ms-/, L = /-([\da-z])/gi, H = function (e, t) {
        return t.toUpperCase()
    }, q = function (e) {
        (a.addEventListener || "load" === e.type || "complete" === a.readyState) && (_(), x.ready())
    }, _ = function () {
        a.addEventListener ? (a.removeEventListener("DOMContentLoaded", q, !1), e.removeEventListener("load", q, !1)) : (a.detachEvent("onreadystatechange", q), e.detachEvent("onload", q))
    };
    x.fn = x.prototype = {
        jquery: f, constructor: x, init: function (e, n, r) {
            var i, o;
            if (!e)return this;
            if ("string" == typeof e) {
                if (i = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : N.exec(e), !i || !i[1] && n)return !n || n.jquery ? (n || r).find(e) : this.constructor(n).find(e);
                if (i[1]) {
                    if (n = n instanceof x ? n[0] : n, x.merge(this, x.parseHTML(i[1], n && n.nodeType ? n.ownerDocument || n : a, !0)), k.test(i[1]) && x.isPlainObject(n))for (i in n)x.isFunction(this[i]) ? this[i](n[i]) : this.attr(i, n[i]);
                    return this
                }
                if (o = a.getElementById(i[2]), o && o.parentNode) {
                    if (o.id !== i[2])return r.find(e);
                    this.length = 1, this[0] = o
                }
                return this.context = a, this.selector = e, this
            }
            return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : x.isFunction(e) ? r.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), x.makeArray(e, this))
        }, selector: "", length: 0, toArray: function () {
            return g.call(this)
        }, get: function (e) {
            return null == e ? this.toArray() : 0 > e ? this[this.length + e] : this[e]
        }, pushStack: function (e) {
            var t = x.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t
        }, each: function (e, t) {
            return x.each(this, e, t)
        }, ready: function (e) {
            return x.ready.promise().done(e), this
        }, slice: function () {
            return this.pushStack(g.apply(this, arguments))
        }, first: function () {
            return this.eq(0)
        }, last: function () {
            return this.eq(-1)
        }, eq: function (e) {
            var t = this.length, n = +e + (0 > e ? t : 0);
            return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
        }, map: function (e) {
            return this.pushStack(x.map(this, function (t, n) {
                return e.call(t, n, t)
            }))
        }, end: function () {
            return this.prevObject || this.constructor(null)
        }, push: h, sort: [].sort, splice: [].splice
    }, x.fn.init.prototype = x.fn, x.extend = x.fn.extend = function () {
        var e, n, r, i, o, a, s = arguments[0] || {}, l = 1, u = arguments.length, c = !1;
        for ("boolean" == typeof s && (c = s, s = arguments[1] || {}, l = 2), "object" == typeof s || x.isFunction(s) || (s = {}), u === l && (s = this, --l); u > l; l++)if (null != (o = arguments[l]))for (i in o)e = s[i], r = o[i], s !== r && (c && r && (x.isPlainObject(r) || (n = x.isArray(r))) ? (n ? (n = !1, a = e && x.isArray(e) ? e : []) : a = e && x.isPlainObject(e) ? e : {}, s[i] = x.extend(c, a, r)) : r !== t && (s[i] = r));
        return s
    }, x.extend({
        expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""), noConflict: function (t) {
            return e.$ === x && (e.$ = u), t && e.jQuery === x && (e.jQuery = l), x
        }, isReady: !1, readyWait: 1, holdReady: function (e) {
            e ? x.readyWait++ : x.ready(!0)
        }, ready: function (e) {
            if (e === !0 ? !--x.readyWait : !x.isReady) {
                if (!a.body)return setTimeout(x.ready);
                x.isReady = !0, e !== !0 && --x.readyWait > 0 || (n.resolveWith(a, [x]), x.fn.trigger && x(a).trigger("ready").off("ready"))
            }
        }, isFunction: function (e) {
            return "function" === x.type(e)
        }, isArray: Array.isArray || function (e) {
            return "array" === x.type(e)
        }, isWindow: function (e) {
            return null != e && e == e.window
        }, isNumeric: function (e) {
            return !isNaN(parseFloat(e)) && isFinite(e)
        }, type: function (e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? c[y.call(e)] || "object" : typeof e
        }, isPlainObject: function (e) {
            var n;
            if (!e || "object" !== x.type(e) || e.nodeType || x.isWindow(e))return !1;
            try {
                if (e.constructor && !v.call(e, "constructor") && !v.call(e.constructor.prototype, "isPrototypeOf"))return !1
            } catch (r) {
                return !1
            }
            if (x.support.ownLast)for (n in e)return v.call(e, n);
            for (n in e);
            return n === t || v.call(e, n)
        }, isEmptyObject: function (e) {
            var t;
            for (t in e)return !1;
            return !0
        }, error: function (e) {
            throw Error(e)
        }, parseHTML: function (e, t, n) {
            if (!e || "string" != typeof e)return null;
            "boolean" == typeof t && (n = t, t = !1), t = t || a;
            var r = k.exec(e), i = !n && [];
            return r ? [t.createElement(r[1])] : (r = x.buildFragment([e], t, i), i && x(i).remove(), x.merge([], r.childNodes))
        }, parseJSON: function (n) {
            return e.JSON && e.JSON.parse ? e.JSON.parse(n) : null === n ? n : "string" == typeof n && (n = x.trim(n), n && E.test(n.replace(A, "@").replace(j, "]").replace(S, ""))) ? Function("return " + n)() : (x.error("Invalid JSON: " + n), t)
        }, parseXML: function (n) {
            var r, i;
            if (!n || "string" != typeof n)return null;
            try {
                e.DOMParser ? (i = new DOMParser, r = i.parseFromString(n, "text/xml")) : (r = new ActiveXObject("Microsoft.XMLDOM"), r.async = "false", r.loadXML(n))
            } catch (o) {
                r = t
            }
            return r && r.documentElement && !r.getElementsByTagName("parsererror").length || x.error("Invalid XML: " + n), r
        }, noop: function () {
        }, globalEval: function (t) {
            t && x.trim(t) && (e.execScript || function (t) {
                e.eval.call(e, t)
            })(t)
        }, camelCase: function (e) {
            return e.replace(D, "ms-").replace(L, H)
        }, nodeName: function (e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        }, each: function (e, t, n) {
            var r, i = 0, o = e.length, a = M(e);
            if (n) {
                if (a) {
                    for (; o > i; i++)if (r = t.apply(e[i], n), r === !1)break
                } else for (i in e)if (r = t.apply(e[i], n), r === !1)break
            } else if (a) {
                for (; o > i; i++)if (r = t.call(e[i], i, e[i]), r === !1)break
            } else for (i in e)if (r = t.call(e[i], i, e[i]), r === !1)break;
            return e
        }, trim: b && !b.call("\ufeff\u00a0") ? function (e) {
            return null == e ? "" : b.call(e)
        } : function (e) {
            return null == e ? "" : (e + "").replace(C, "")
        }, makeArray: function (e, t) {
            var n = t || [];
            return null != e && (M(Object(e)) ? x.merge(n, "string" == typeof e ? [e] : e) : h.call(n, e)), n
        }, inArray: function (e, t, n) {
            var r;
            if (t) {
                if (m)return m.call(t, e, n);
                for (r = t.length, n = n ? 0 > n ? Math.max(0, r + n) : n : 0; r > n; n++)if (n in t && t[n] === e)return n
            }
            return -1
        }, merge: function (e, n) {
            var r = n.length, i = e.length, o = 0;
            if ("number" == typeof r)for (; r > o; o++)e[i++] = n[o]; else while (n[o] !== t)e[i++] = n[o++];
            return e.length = i, e
        }, grep: function (e, t, n) {
            var r, i = [], o = 0, a = e.length;
            for (n = !!n; a > o; o++)r = !!t(e[o], o), n !== r && i.push(e[o]);
            return i
        }, map: function (e, t, n) {
            var r, i = 0, o = e.length, a = M(e), s = [];
            if (a)for (; o > i; i++)r = t(e[i], i, n), null != r && (s[s.length] = r); else for (i in e)r = t(e[i], i, n), null != r && (s[s.length] = r);
            return d.apply([], s)
        }, guid: 1, proxy: function (e, n) {
            var r, i, o;
            return "string" == typeof n && (o = e[n], n = e, e = o), x.isFunction(e) ? (r = g.call(arguments, 2), i = function () {
                return e.apply(n || this, r.concat(g.call(arguments)))
            }, i.guid = e.guid = e.guid || x.guid++, i) : t
        }, access: function (e, n, r, i, o, a, s) {
            var l = 0, u = e.length, c = null == r;
            if ("object" === x.type(r)) {
                o = !0;
                for (l in r)x.access(e, n, l, r[l], !0, a, s)
            } else if (i !== t && (o = !0, x.isFunction(i) || (s = !0), c && (s ? (n.call(e, i), n = null) : (c = n, n = function (e, t, n) {
                    return c.call(x(e), n)
                })), n))for (; u > l; l++)n(e[l], r, s ? i : i.call(e[l], l, n(e[l], r)));
            return o ? e : c ? n.call(e) : u ? n(e[0], r) : a
        }, now: function () {
            return (new Date).getTime()
        }, swap: function (e, t, n, r) {
            var i, o, a = {};
            for (o in t)a[o] = e.style[o], e.style[o] = t[o];
            i = n.apply(e, r || []);
            for (o in t)e.style[o] = a[o];
            return i
        }
    }), x.ready.promise = function (t) {
        if (!n)if (n = x.Deferred(), "complete" === a.readyState)setTimeout(x.ready); else if (a.addEventListener)a.addEventListener("DOMContentLoaded", q, !1), e.addEventListener("load", q, !1); else {
            a.attachEvent("onreadystatechange", q), e.attachEvent("onload", q);
            var r = !1;
            try {
                r = null == e.frameElement && a.documentElement
            } catch (i) {
            }
            r && r.doScroll && function o() {
                if (!x.isReady) {
                    try {
                        r.doScroll("left")
                    } catch (e) {
                        return setTimeout(o, 50)
                    }
                    _(), x.ready()
                }
            }()
        }
        return n.promise(t)
    }, x.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (e, t) {
        c["[object " + t + "]"] = t.toLowerCase()
    });
    function M(e) {
        var t = e.length, n = x.type(e);
        return x.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || "function" !== n && (0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }

    r = x(a), function (e, t) {
        var n, r, i, o, a, s, l, u, c, p, f, d, h, g, m, y, v, b = "sizzle" + -new Date, w = e.document, T = 0, C = 0, N = st(), k = st(), E = st(), S = !1, A = function (e, t) {
            return e === t ? (S = !0, 0) : 0
        }, j = typeof t, D = 1 << 31, L = {}.hasOwnProperty, H = [], q = H.pop, _ = H.push, M = H.push, O = H.slice, F = H.indexOf || function (e) {
                var t = 0, n = this.length;
                for (; n > t; t++)if (this[t] === e)return t;
                return -1
            }, B = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", P = "[\\x20\\t\\r\\n\\f]", R = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", W = R.replace("w", "w#"), $ = "\\[" + P + "*(" + R + ")" + P + "*(?:([*^$|!~]?=)" + P + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + W + ")|)|)" + P + "*\\]", I = ":(" + R + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + $.replace(3, 8) + ")*)|.*)\\)|)", z = RegExp("^" + P + "+|((?:^|[^\\\\])(?:\\\\.)*)" + P + "+$", "g"), X = RegExp("^" + P + "*," + P + "*"), U = RegExp("^" + P + "*([>+~]|" + P + ")" + P + "*"), V = RegExp(P + "*[+~]"), Y = RegExp("=" + P + "*([^\\]'\"]*)" + P + "*\\]", "g"), J = RegExp(I), G = RegExp("^" + W + "$"), Q = {
            ID: RegExp("^#(" + R + ")"),
            CLASS: RegExp("^\\.(" + R + ")"),
            TAG: RegExp("^(" + R.replace("w", "w*") + ")"),
            ATTR: RegExp("^" + $),
            PSEUDO: RegExp("^" + I),
            CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + P + "*(even|odd|(([+-]|)(\\d*)n|)" + P + "*(?:([+-]|)" + P + "*(\\d+)|))" + P + "*\\)|)", "i"),
            bool: RegExp("^(?:" + B + ")$", "i"),
            needsContext: RegExp("^" + P + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + P + "*((?:-\\d)?\\d*)" + P + "*\\)|)(?=[^-]|$)", "i")
        }, K = /^[^{]+\{\s*\[native \w/, Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, et = /^(?:input|select|textarea|button)$/i, tt = /^h\d$/i, nt = /'|\\/g, rt = RegExp("\\\\([\\da-f]{1,6}" + P + "?|(" + P + ")|.)", "ig"), it = function (e, t, n) {
            var r = "0x" + t - 65536;
            return r !== r || n ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(55296 | r >> 10, 56320 | 1023 & r)
        };
        try {
            M.apply(H = O.call(w.childNodes), w.childNodes), H[w.childNodes.length].nodeType
        } catch (ot) {
            M = {
                apply: H.length ? function (e, t) {
                    _.apply(e, O.call(t))
                } : function (e, t) {
                    var n = e.length, r = 0;
                    while (e[n++] = t[r++]);
                    e.length = n - 1
                }
            }
        }
        function at(e, t, n, i) {
            var o, a, s, l, u, c, d, m, y, x;
            if ((t ? t.ownerDocument || t : w) !== f && p(t), t = t || f, n = n || [], !e || "string" != typeof e)return n;
            if (1 !== (l = t.nodeType) && 9 !== l)return [];
            if (h && !i) {
                if (o = Z.exec(e))if (s = o[1]) {
                    if (9 === l) {
                        if (a = t.getElementById(s), !a || !a.parentNode)return n;
                        if (a.id === s)return n.push(a), n
                    } else if (t.ownerDocument && (a = t.ownerDocument.getElementById(s)) && v(t, a) && a.id === s)return n.push(a), n
                } else {
                    if (o[2])return M.apply(n, t.getElementsByTagName(e)), n;
                    if ((s = o[3]) && r.getElementsByClassName && t.getElementsByClassName)return M.apply(n, t.getElementsByClassName(s)), n
                }
                if (r.qsa && (!g || !g.test(e))) {
                    if (m = d = b, y = t, x = 9 === l && e, 1 === l && "object" !== t.nodeName.toLowerCase()) {
                        c = mt(e), (d = t.getAttribute("id")) ? m = d.replace(nt, "\\$&") : t.setAttribute("id", m), m = "[id='" + m + "'] ", u = c.length;
                        while (u--)c[u] = m + yt(c[u]);
                        y = V.test(e) && t.parentNode || t, x = c.join(",")
                    }
                    if (x)try {
                        return M.apply(n, y.querySelectorAll(x)), n
                    } catch (T) {
                    } finally {
                        d || t.removeAttribute("id")
                    }
                }
            }
            return kt(e.replace(z, "$1"), t, n, i)
        }

        function st() {
            var e = [];

            function t(n, r) {
                return e.push(n += " ") > o.cacheLength && delete t[e.shift()], t[n] = r
            }

            return t
        }

        function lt(e) {
            return e[b] = !0, e
        }

        function ut(e) {
            var t = f.createElement("div");
            try {
                return !!e(t)
            } catch (n) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function ct(e, t) {
            var n = e.split("|"), r = e.length;
            while (r--)o.attrHandle[n[r]] = t
        }

        function pt(e, t) {
            var n = t && e, r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || D) - (~e.sourceIndex || D);
            if (r)return r;
            if (n)while (n = n.nextSibling)if (n === t)return -1;
            return e ? 1 : -1
        }

        function ft(e) {
            return function (t) {
                var n = t.nodeName.toLowerCase();
                return "input" === n && t.type === e
            }
        }

        function dt(e) {
            return function (t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }

        function ht(e) {
            return lt(function (t) {
                return t = +t, lt(function (n, r) {
                    var i, o = e([], n.length, t), a = o.length;
                    while (a--)n[i = o[a]] && (n[i] = !(r[i] = n[i]))
                })
            })
        }

        s = at.isXML = function (e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return t ? "HTML" !== t.nodeName : !1
        }, r = at.support = {}, p = at.setDocument = function (e) {
            var n = e ? e.ownerDocument || e : w, i = n.defaultView;
            return n !== f && 9 === n.nodeType && n.documentElement ? (f = n, d = n.documentElement, h = !s(n), i && i.attachEvent && i !== i.top && i.attachEvent("onbeforeunload", function () {
                p()
            }), r.attributes = ut(function (e) {
                return e.className = "i", !e.getAttribute("className")
            }), r.getElementsByTagName = ut(function (e) {
                return e.appendChild(n.createComment("")), !e.getElementsByTagName("*").length
            }), r.getElementsByClassName = ut(function (e) {
                return e.innerHTML = "<div class='a'></div><div class='a i'></div>", e.firstChild.className = "i", 2 === e.getElementsByClassName("i").length
            }), r.getById = ut(function (e) {
                return d.appendChild(e).id = b, !n.getElementsByName || !n.getElementsByName(b).length
            }), r.getById ? (o.find.ID = function (e, t) {
                if (typeof t.getElementById !== j && h) {
                    var n = t.getElementById(e);
                    return n && n.parentNode ? [n] : []
                }
            }, o.filter.ID = function (e) {
                var t = e.replace(rt, it);
                return function (e) {
                    return e.getAttribute("id") === t
                }
            }) : (delete o.find.ID, o.filter.ID = function (e) {
                var t = e.replace(rt, it);
                return function (e) {
                    var n = typeof e.getAttributeNode !== j && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }), o.find.TAG = r.getElementsByTagName ? function (e, n) {
                return typeof n.getElementsByTagName !== j ? n.getElementsByTagName(e) : t
            } : function (e, t) {
                var n, r = [], i = 0, o = t.getElementsByTagName(e);
                if ("*" === e) {
                    while (n = o[i++])1 === n.nodeType && r.push(n);
                    return r
                }
                return o
            }, o.find.CLASS = r.getElementsByClassName && function (e, n) {
                return typeof n.getElementsByClassName !== j && h ? n.getElementsByClassName(e) : t
            }, m = [], g = [], (r.qsa = K.test(n.querySelectorAll)) && (ut(function (e) {
                e.innerHTML = "<select><option selected=''></option></select>", e.querySelectorAll("[selected]").length || g.push("\\[" + P + "*(?:value|" + B + ")"), e.querySelectorAll(":checked").length || g.push(":checked")
            }), ut(function (e) {
                var t = n.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("t", ""), e.querySelectorAll("[t^='']").length && g.push("[*^$]=" + P + "*(?:''|\"\")"), e.querySelectorAll(":enabled").length || g.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), g.push(",.*:")
            })), (r.matchesSelector = K.test(y = d.webkitMatchesSelector || d.mozMatchesSelector || d.oMatchesSelector || d.msMatchesSelector)) && ut(function (e) {
                r.disconnectedMatch = y.call(e, "div"), y.call(e, "[s!='']:x"), m.push("!=", I)
            }), g = g.length && RegExp(g.join("|")), m = m.length && RegExp(m.join("|")), v = K.test(d.contains) || d.compareDocumentPosition ? function (e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e, r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
            } : function (e, t) {
                if (t)while (t = t.parentNode)if (t === e)return !0;
                return !1
            }, A = d.compareDocumentPosition ? function (e, t) {
                if (e === t)return S = !0, 0;
                var i = t.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(t);
                return i ? 1 & i || !r.sortDetached && t.compareDocumentPosition(e) === i ? e === n || v(w, e) ? -1 : t === n || v(w, t) ? 1 : c ? F.call(c, e) - F.call(c, t) : 0 : 4 & i ? -1 : 1 : e.compareDocumentPosition ? -1 : 1
            } : function (e, t) {
                var r, i = 0, o = e.parentNode, a = t.parentNode, s = [e], l = [t];
                if (e === t)return S = !0, 0;
                if (!o || !a)return e === n ? -1 : t === n ? 1 : o ? -1 : a ? 1 : c ? F.call(c, e) - F.call(c, t) : 0;
                if (o === a)return pt(e, t);
                r = e;
                while (r = r.parentNode)s.unshift(r);
                r = t;
                while (r = r.parentNode)l.unshift(r);
                while (s[i] === l[i])i++;
                return i ? pt(s[i], l[i]) : s[i] === w ? -1 : l[i] === w ? 1 : 0
            }, n) : f
        }, at.matches = function (e, t) {
            return at(e, null, null, t)
        }, at.matchesSelector = function (e, t) {
            if ((e.ownerDocument || e) !== f && p(e), t = t.replace(Y, "='$1']"), !(!r.matchesSelector || !h || m && m.test(t) || g && g.test(t)))try {
                var n = y.call(e, t);
                if (n || r.disconnectedMatch || e.document && 11 !== e.document.nodeType)return n
            } catch (i) {
            }
            return at(t, f, null, [e]).length > 0
        }, at.contains = function (e, t) {
            return (e.ownerDocument || e) !== f && p(e), v(e, t)
        }, at.attr = function (e, n) {
            (e.ownerDocument || e) !== f && p(e);
            var i = o.attrHandle[n.toLowerCase()], a = i && L.call(o.attrHandle, n.toLowerCase()) ? i(e, n, !h) : t;
            return a === t ? r.attributes || !h ? e.getAttribute(n) : (a = e.getAttributeNode(n)) && a.specified ? a.value : null : a
        }, at.error = function (e) {
            throw Error("Syntax error, unrecognized expression: " + e)
        }, at.uniqueSort = function (e) {
            var t, n = [], i = 0, o = 0;
            if (S = !r.detectDuplicates, c = !r.sortStable && e.slice(0), e.sort(A), S) {
                while (t = e[o++])t === e[o] && (i = n.push(o));
                while (i--)e.splice(n[i], 1)
            }
            return e
        }, a = at.getText = function (e) {
            var t, n = "", r = 0, i = e.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof e.textContent)return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling)n += a(e)
                } else if (3 === i || 4 === i)return e.nodeValue
            } else for (; t = e[r]; r++)n += a(t);
            return n
        }, o = at.selectors = {
            cacheLength: 50,
            createPseudo: lt,
            match: Q,
            attrHandle: {},
            find: {},
            relative: {
                ">": {dir: "parentNode", first: !0},
                " ": {dir: "parentNode"},
                "+": {dir: "previousSibling", first: !0},
                "~": {dir: "previousSibling"}
            },
            preFilter: {
                ATTR: function (e) {
                    return e[1] = e[1].replace(rt, it), e[3] = (e[4] || e[5] || "").replace(rt, it), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                }, CHILD: function (e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || at.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && at.error(e[0]), e
                }, PSEUDO: function (e) {
                    var n, r = !e[5] && e[2];
                    return Q.CHILD.test(e[0]) ? null : (e[3] && e[4] !== t ? e[2] = e[4] : r && J.test(r) && (n = mt(r, !0)) && (n = r.indexOf(")", r.length - n) - r.length) && (e[0] = e[0].slice(0, n), e[2] = r.slice(0, n)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function (e) {
                    var t = e.replace(rt, it).toLowerCase();
                    return "*" === e ? function () {
                        return !0
                    } : function (e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                }, CLASS: function (e) {
                    var t = N[e + " "];
                    return t || (t = RegExp("(^|" + P + ")" + e + "(" + P + "|$)")) && N(e, function (e) {
                        return t.test("string" == typeof e.className && e.className || typeof e.getAttribute !== j && e.getAttribute("class") || "")
                    })
                }, ATTR: function (e, t, n) {
                    return function (r) {
                        var i = at.attr(r, e);
                        return null == i ? "!=" === t : t ? (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i + " ").indexOf(n) > -1 : "|=" === t ? i === n || i.slice(0, n.length + 1) === n + "-" : !1) : !0
                    }
                }, CHILD: function (e, t, n, r, i) {
                    var o = "nth" !== e.slice(0, 3), a = "last" !== e.slice(-4), s = "of-type" === t;
                    return 1 === r && 0 === i ? function (e) {
                        return !!e.parentNode
                    } : function (t, n, l) {
                        var u, c, p, f, d, h, g = o !== a ? "nextSibling" : "previousSibling", m = t.parentNode, y = s && t.nodeName.toLowerCase(), v = !l && !s;
                        if (m) {
                            if (o) {
                                while (g) {
                                    p = t;
                                    while (p = p[g])if (s ? p.nodeName.toLowerCase() === y : 1 === p.nodeType)return !1;
                                    h = g = "only" === e && !h && "nextSibling"
                                }
                                return !0
                            }
                            if (h = [a ? m.firstChild : m.lastChild], a && v) {
                                c = m[b] || (m[b] = {}), u = c[e] || [], d = u[0] === T && u[1], f = u[0] === T && u[2], p = d && m.childNodes[d];
                                while (p = ++d && p && p[g] || (f = d = 0) || h.pop())if (1 === p.nodeType && ++f && p === t) {
                                    c[e] = [T, d, f];
                                    break
                                }
                            } else if (v && (u = (t[b] || (t[b] = {}))[e]) && u[0] === T)f = u[1]; else while (p = ++d && p && p[g] || (f = d = 0) || h.pop())if ((s ? p.nodeName.toLowerCase() === y : 1 === p.nodeType) && ++f && (v && ((p[b] || (p[b] = {}))[e] = [T, f]), p === t))break;
                            return f -= i, f === r || 0 === f % r && f / r >= 0
                        }
                    }
                }, PSEUDO: function (e, t) {
                    var n, r = o.pseudos[e] || o.setFilters[e.toLowerCase()] || at.error("unsupported pseudo: " + e);
                    return r[b] ? r(t) : r.length > 1 ? (n = [e, e, "", t], o.setFilters.hasOwnProperty(e.toLowerCase()) ? lt(function (e, n) {
                        var i, o = r(e, t), a = o.length;
                        while (a--)i = F.call(e, o[a]), e[i] = !(n[i] = o[a])
                    }) : function (e) {
                        return r(e, 0, n)
                    }) : r
                }
            },
            pseudos: {
                not: lt(function (e) {
                    var t = [], n = [], r = l(e.replace(z, "$1"));
                    return r[b] ? lt(function (e, t, n, i) {
                        var o, a = r(e, null, i, []), s = e.length;
                        while (s--)(o = a[s]) && (e[s] = !(t[s] = o))
                    }) : function (e, i, o) {
                        return t[0] = e, r(t, null, o, n), !n.pop()
                    }
                }), has: lt(function (e) {
                    return function (t) {
                        return at(e, t).length > 0
                    }
                }), contains: lt(function (e) {
                    return function (t) {
                        return (t.textContent || t.innerText || a(t)).indexOf(e) > -1
                    }
                }), lang: lt(function (e) {
                    return G.test(e || "") || at.error("unsupported lang: " + e), e = e.replace(rt, it).toLowerCase(), function (t) {
                        var n;
                        do if (n = h ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-"); while ((t = t.parentNode) && 1 === t.nodeType);
                        return !1
                    }
                }), target: function (t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                }, root: function (e) {
                    return e === d
                }, focus: function (e) {
                    return e === f.activeElement && (!f.hasFocus || f.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                }, enabled: function (e) {
                    return e.disabled === !1
                }, disabled: function (e) {
                    return e.disabled === !0
                }, checked: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                }, selected: function (e) {
                    return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                }, empty: function (e) {
                    for (e = e.firstChild; e; e = e.nextSibling)if (e.nodeName > "@" || 3 === e.nodeType || 4 === e.nodeType)return !1;
                    return !0
                }, parent: function (e) {
                    return !o.pseudos.empty(e)
                }, header: function (e) {
                    return tt.test(e.nodeName)
                }, input: function (e) {
                    return et.test(e.nodeName)
                }, button: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                }, text: function (e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || t.toLowerCase() === e.type)
                }, first: ht(function () {
                    return [0]
                }), last: ht(function (e, t) {
                    return [t - 1]
                }), eq: ht(function (e, t, n) {
                    return [0 > n ? n + t : n]
                }), even: ht(function (e, t) {
                    var n = 0;
                    for (; t > n; n += 2)e.push(n);
                    return e
                }), odd: ht(function (e, t) {
                    var n = 1;
                    for (; t > n; n += 2)e.push(n);
                    return e
                }), lt: ht(function (e, t, n) {
                    var r = 0 > n ? n + t : n;
                    for (; --r >= 0;)e.push(r);
                    return e
                }), gt: ht(function (e, t, n) {
                    var r = 0 > n ? n + t : n;
                    for (; t > ++r;)e.push(r);
                    return e
                })
            }
        }, o.pseudos.nth = o.pseudos.eq;
        for (n in{radio: !0, checkbox: !0, file: !0, password: !0, image: !0})o.pseudos[n] = ft(n);
        for (n in{submit: !0, reset: !0})o.pseudos[n] = dt(n);
        function gt() {
        }

        gt.prototype = o.filters = o.pseudos, o.setFilters = new gt;
        function mt(e, t) {
            var n, r, i, a, s, l, u, c = k[e + " "];
            if (c)return t ? 0 : c.slice(0);
            s = e, l = [], u = o.preFilter;
            while (s) {
                (!n || (r = X.exec(s))) && (r && (s = s.slice(r[0].length) || s), l.push(i = [])), n = !1, (r = U.exec(s)) && (n = r.shift(), i.push({
                    value: n,
                    type: r[0].replace(z, " ")
                }), s = s.slice(n.length));
                for (a in o.filter)!(r = Q[a].exec(s)) || u[a] && !(r = u[a](r)) || (n = r.shift(), i.push({
                    value: n,
                    type: a,
                    matches: r
                }), s = s.slice(n.length));
                if (!n)break
            }
            return t ? s.length : s ? at.error(e) : k(e, l).slice(0)
        }

        function yt(e) {
            var t = 0, n = e.length, r = "";
            for (; n > t; t++)r += e[t].value;
            return r
        }

        function vt(e, t, n) {
            var r = t.dir, o = n && "parentNode" === r, a = C++;
            return t.first ? function (t, n, i) {
                while (t = t[r])if (1 === t.nodeType || o)return e(t, n, i)
            } : function (t, n, s) {
                var l, u, c, p = T + " " + a;
                if (s) {
                    while (t = t[r])if ((1 === t.nodeType || o) && e(t, n, s))return !0
                } else while (t = t[r])if (1 === t.nodeType || o)if (c = t[b] || (t[b] = {}), (u = c[r]) && u[0] === p) {
                    if ((l = u[1]) === !0 || l === i)return l === !0
                } else if (u = c[r] = [p], u[1] = e(t, n, s) || i, u[1] === !0)return !0
            }
        }

        function bt(e) {
            return e.length > 1 ? function (t, n, r) {
                var i = e.length;
                while (i--)if (!e[i](t, n, r))return !1;
                return !0
            } : e[0]
        }

        function xt(e, t, n, r, i) {
            var o, a = [], s = 0, l = e.length, u = null != t;
            for (; l > s; s++)(o = e[s]) && (!n || n(o, r, i)) && (a.push(o), u && t.push(s));
            return a
        }

        function wt(e, t, n, r, i, o) {
            return r && !r[b] && (r = wt(r)), i && !i[b] && (i = wt(i, o)), lt(function (o, a, s, l) {
                var u, c, p, f = [], d = [], h = a.length, g = o || Nt(t || "*", s.nodeType ? [s] : s, []), m = !e || !o && t ? g : xt(g, f, e, s, l), y = n ? i || (o ? e : h || r) ? [] : a : m;
                if (n && n(m, y, s, l), r) {
                    u = xt(y, d), r(u, [], s, l), c = u.length;
                    while (c--)(p = u[c]) && (y[d[c]] = !(m[d[c]] = p))
                }
                if (o) {
                    if (i || e) {
                        if (i) {
                            u = [], c = y.length;
                            while (c--)(p = y[c]) && u.push(m[c] = p);
                            i(null, y = [], u, l)
                        }
                        c = y.length;
                        while (c--)(p = y[c]) && (u = i ? F.call(o, p) : f[c]) > -1 && (o[u] = !(a[u] = p))
                    }
                } else y = xt(y === a ? y.splice(h, y.length) : y), i ? i(null, a, y, l) : M.apply(a, y)
            })
        }

        function Tt(e) {
            var t, n, r, i = e.length, a = o.relative[e[0].type], s = a || o.relative[" "], l = a ? 1 : 0, c = vt(function (e) {
                return e === t
            }, s, !0), p = vt(function (e) {
                return F.call(t, e) > -1
            }, s, !0), f = [function (e, n, r) {
                return !a && (r || n !== u) || ((t = n).nodeType ? c(e, n, r) : p(e, n, r))
            }];
            for (; i > l; l++)if (n = o.relative[e[l].type])f = [vt(bt(f), n)]; else {
                if (n = o.filter[e[l].type].apply(null, e[l].matches), n[b]) {
                    for (r = ++l; i > r; r++)if (o.relative[e[r].type])break;
                    return wt(l > 1 && bt(f), l > 1 && yt(e.slice(0, l - 1).concat({value: " " === e[l - 2].type ? "*" : ""})).replace(z, "$1"), n, r > l && Tt(e.slice(l, r)), i > r && Tt(e = e.slice(r)), i > r && yt(e))
                }
                f.push(n)
            }
            return bt(f)
        }

        function Ct(e, t) {
            var n = 0, r = t.length > 0, a = e.length > 0, s = function (s, l, c, p, d) {
                var h, g, m, y = [], v = 0, b = "0", x = s && [], w = null != d, C = u, N = s || a && o.find.TAG("*", d && l.parentNode || l), k = T += null == C ? 1 : Math.random() || .1;
                for (w && (u = l !== f && l, i = n); null != (h = N[b]); b++) {
                    if (a && h) {
                        g = 0;
                        while (m = e[g++])if (m(h, l, c)) {
                            p.push(h);
                            break
                        }
                        w && (T = k, i = ++n)
                    }
                    r && ((h = !m && h) && v--, s && x.push(h))
                }
                if (v += b, r && b !== v) {
                    g = 0;
                    while (m = t[g++])m(x, y, l, c);
                    if (s) {
                        if (v > 0)while (b--)x[b] || y[b] || (y[b] = q.call(p));
                        y = xt(y)
                    }
                    M.apply(p, y), w && !s && y.length > 0 && v + t.length > 1 && at.uniqueSort(p)
                }
                return w && (T = k, u = C), x
            };
            return r ? lt(s) : s
        }

        l = at.compile = function (e, t) {
            var n, r = [], i = [], o = E[e + " "];
            if (!o) {
                t || (t = mt(e)), n = t.length;
                while (n--)o = Tt(t[n]), o[b] ? r.push(o) : i.push(o);
                o = E(e, Ct(i, r))
            }
            return o
        };
        function Nt(e, t, n) {
            var r = 0, i = t.length;
            for (; i > r; r++)at(e, t[r], n);
            return n
        }

        function kt(e, t, n, i) {
            var a, s, u, c, p, f = mt(e);
            if (!i && 1 === f.length) {
                if (s = f[0] = f[0].slice(0), s.length > 2 && "ID" === (u = s[0]).type && r.getById && 9 === t.nodeType && h && o.relative[s[1].type]) {
                    if (t = (o.find.ID(u.matches[0].replace(rt, it), t) || [])[0], !t)return n;
                    e = e.slice(s.shift().value.length)
                }
                a = Q.needsContext.test(e) ? 0 : s.length;
                while (a--) {
                    if (u = s[a], o.relative[c = u.type])break;
                    if ((p = o.find[c]) && (i = p(u.matches[0].replace(rt, it), V.test(s[0].type) && t.parentNode || t))) {
                        if (s.splice(a, 1), e = i.length && yt(s), !e)return M.apply(n, i), n;
                        break
                    }
                }
            }
            return l(e, f)(i, t, !h, n, V.test(e)), n
        }

        r.sortStable = b.split("").sort(A).join("") === b, r.detectDuplicates = S, p(), r.sortDetached = ut(function (e) {
            return 1 & e.compareDocumentPosition(f.createElement("div"))
        }), ut(function (e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || ct("type|href|height|width", function (e, n, r) {
            return r ? t : e.getAttribute(n, "type" === n.toLowerCase() ? 1 : 2)
        }), r.attributes && ut(function (e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || ct("value", function (e, n, r) {
            return r || "input" !== e.nodeName.toLowerCase() ? t : e.defaultValue
        }), ut(function (e) {
            return null == e.getAttribute("disabled")
        }) || ct(B, function (e, n, r) {
            var i;
            return r ? t : (i = e.getAttributeNode(n)) && i.specified ? i.value : e[n] === !0 ? n.toLowerCase() : null
        }), x.find = at, x.expr = at.selectors, x.expr[":"] = x.expr.pseudos, x.unique = at.uniqueSort, x.text = at.getText, x.isXMLDoc = at.isXML, x.contains = at.contains
    }(e);
    var O = {};

    function F(e) {
        var t = O[e] = {};
        return x.each(e.match(T) || [], function (e, n) {
            t[n] = !0
        }), t
    }

    x.Callbacks = function (e) {
        e = "string" == typeof e ? O[e] || F(e) : x.extend({}, e);
        var n, r, i, o, a, s, l = [], u = !e.once && [], c = function (t) {
            for (r = e.memory && t, i = !0, a = s || 0, s = 0, o = l.length, n = !0; l && o > a; a++)if (l[a].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
                r = !1;
                break
            }
            n = !1, l && (u ? u.length && c(u.shift()) : r ? l = [] : p.disable())
        }, p = {
            add: function () {
                if (l) {
                    var t = l.length;
                    (function i(t) {
                        x.each(t, function (t, n) {
                            var r = x.type(n);
                            "function" === r ? e.unique && p.has(n) || l.push(n) : n && n.length && "string" !== r && i(n)
                        })
                    })(arguments), n ? o = l.length : r && (s = t, c(r))
                }
                return this
            }, remove: function () {
                return l && x.each(arguments, function (e, t) {
                    var r;
                    while ((r = x.inArray(t, l, r)) > -1)l.splice(r, 1), n && (o >= r && o--, a >= r && a--)
                }), this
            }, has: function (e) {
                return e ? x.inArray(e, l) > -1 : !(!l || !l.length)
            }, empty: function () {
                return l = [], o = 0, this
            }, disable: function () {
                return l = u = r = t, this
            }, disabled: function () {
                return !l
            }, lock: function () {
                return u = t, r || p.disable(), this
            }, locked: function () {
                return !u
            }, fireWith: function (e, t) {
                return !l || i && !u || (t = t || [], t = [e, t.slice ? t.slice() : t], n ? u.push(t) : c(t)), this
            }, fire: function () {
                return p.fireWith(this, arguments), this
            }, fired: function () {
                return !!i
            }
        };
        return p
    }, x.extend({
        Deferred: function (e) {
            var t = [["resolve", "done", x.Callbacks("once memory"), "resolved"], ["reject", "fail", x.Callbacks("once memory"), "rejected"], ["notify", "progress", x.Callbacks("memory")]], n = "pending", r = {
                state: function () {
                    return n
                }, always: function () {
                    return i.done(arguments).fail(arguments), this
                }, then: function () {
                    var e = arguments;
                    return x.Deferred(function (n) {
                        x.each(t, function (t, o) {
                            var a = o[0], s = x.isFunction(e[t]) && e[t];
                            i[o[1]](function () {
                                var e = s && s.apply(this, arguments);
                                e && x.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[a + "With"](this === r ? n.promise() : this, s ? [e] : arguments)
                            })
                        }), e = null
                    }).promise()
                }, promise: function (e) {
                    return null != e ? x.extend(e, r) : r
                }
            }, i = {};
            return r.pipe = r.then, x.each(t, function (e, o) {
                var a = o[2], s = o[3];
                r[o[1]] = a.add, s && a.add(function () {
                    n = s
                }, t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = function () {
                    return i[o[0] + "With"](this === i ? r : this, arguments), this
                }, i[o[0] + "With"] = a.fireWith
            }), r.promise(i), e && e.call(i, i), i
        }, when: function (e) {
            var t = 0, n = g.call(arguments), r = n.length, i = 1 !== r || e && x.isFunction(e.promise) ? r : 0, o = 1 === i ? e : x.Deferred(), a = function (e, t, n) {
                return function (r) {
                    t[e] = this, n[e] = arguments.length > 1 ? g.call(arguments) : r, n === s ? o.notifyWith(t, n) : --i || o.resolveWith(t, n)
                }
            }, s, l, u;
            if (r > 1)for (s = Array(r), l = Array(r), u = Array(r); r > t; t++)n[t] && x.isFunction(n[t].promise) ? n[t].promise().done(a(t, u, n)).fail(o.reject).progress(a(t, l, s)) : --i;
            return i || o.resolveWith(u, n), o.promise()
        }
    }), x.support = function (t) {
        var n, r, o, s, l, u, c, p, f, d = a.createElement("div");
        if (d.setAttribute("className", "t"), d.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = d.getElementsByTagName("*") || [], r = d.getElementsByTagName("a")[0], !r || !r.style || !n.length)return t;
        s = a.createElement("select"), u = s.appendChild(a.createElement("option")), o = d.getElementsByTagName("input")[0], r.style.cssText = "top:1px;float:left;opacity:.5", t.getSetAttribute = "t" !== d.className, t.leadingWhitespace = 3 === d.firstChild.nodeType, t.tbody = !d.getElementsByTagName("tbody").length, t.htmlSerialize = !!d.getElementsByTagName("link").length, t.style = /top/.test(r.getAttribute("style")), t.hrefNormalized = "/a" === r.getAttribute("href"), t.opacity = /^0.5/.test(r.style.opacity), t.cssFloat = !!r.style.cssFloat, t.checkOn = !!o.value, t.optSelected = u.selected, t.enctype = !!a.createElement("form").enctype, t.html5Clone = "<:nav></:nav>" !== a.createElement("nav").cloneNode(!0).outerHTML, t.inlineBlockNeedsLayout = !1, t.shrinkWrapBlocks = !1, t.pixelPosition = !1, t.deleteExpando = !0, t.noCloneEvent = !0, t.reliableMarginRight = !0, t.boxSizingReliable = !0, o.checked = !0, t.noCloneChecked = o.cloneNode(!0).checked, s.disabled = !0, t.optDisabled = !u.disabled;
        try {
            delete d.test
        } catch (h) {
            t.deleteExpando = !1
        }
        o = a.createElement("input"), o.setAttribute("value", ""), t.input = "" === o.getAttribute("value"), o.value = "t", o.setAttribute("type", "radio"), t.radioValue = "t" === o.value, o.setAttribute("checked", "t"), o.setAttribute("name", "t"), l = a.createDocumentFragment(), l.appendChild(o), t.appendChecked = o.checked, t.checkClone = l.cloneNode(!0).cloneNode(!0).lastChild.checked, d.attachEvent && (d.attachEvent("onclick", function () {
            t.noCloneEvent = !1
        }), d.cloneNode(!0).click());
        for (f in{
            submit: !0,
            change: !0,
            focusin: !0
        })d.setAttribute(c = "on" + f, "t"), t[f + "Bubbles"] = c in e || d.attributes[c].expando === !1;
        d.style.backgroundClip = "content-box", d.cloneNode(!0).style.backgroundClip = "", t.clearCloneStyle = "content-box" === d.style.backgroundClip;
        for (f in x(t))break;
        return t.ownLast = "0" !== f, x(function () {
            var n, r, o, s = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;", l = a.getElementsByTagName("body")[0];
            l && (n = a.createElement("div"), n.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", l.appendChild(n).appendChild(d), d.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", o = d.getElementsByTagName("td"), o[0].style.cssText = "padding:0;margin:0;border:0;display:none", p = 0 === o[0].offsetHeight, o[0].style.display = "", o[1].style.display = "none", t.reliableHiddenOffsets = p && 0 === o[0].offsetHeight, d.innerHTML = "", d.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", x.swap(l, null != l.style.zoom ? {zoom: 1} : {}, function () {
                t.boxSizing = 4 === d.offsetWidth
            }), e.getComputedStyle && (t.pixelPosition = "1%" !== (e.getComputedStyle(d, null) || {}).top, t.boxSizingReliable = "4px" === (e.getComputedStyle(d, null) || {width: "4px"}).width, r = d.appendChild(a.createElement("div")), r.style.cssText = d.style.cssText = s, r.style.marginRight = r.style.width = "0", d.style.width = "1px", t.reliableMarginRight = !parseFloat((e.getComputedStyle(r, null) || {}).marginRight)), typeof d.style.zoom !== i && (d.innerHTML = "", d.style.cssText = s + "width:1px;padding:1px;display:inline;zoom:1", t.inlineBlockNeedsLayout = 3 === d.offsetWidth, d.style.display = "block", d.innerHTML = "<div></div>", d.firstChild.style.width = "5px", t.shrinkWrapBlocks = 3 !== d.offsetWidth, t.inlineBlockNeedsLayout && (l.style.zoom = 1)), l.removeChild(n), n = d = o = r = null)
        }), n = s = l = u = r = o = null, t
    }({});
    var B = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/, P = /([A-Z])/g;

    function R(e, n, r, i) {
        if (x.acceptData(e)) {
            var o, a, s = x.expando, l = e.nodeType, u = l ? x.cache : e, c = l ? e[s] : e[s] && s;
            if (c && u[c] && (i || u[c].data) || r !== t || "string" != typeof n)return c || (c = l ? e[s] = p.pop() || x.guid++ : s), u[c] || (u[c] = l ? {} : {toJSON: x.noop}), ("object" == typeof n || "function" == typeof n) && (i ? u[c] = x.extend(u[c], n) : u[c].data = x.extend(u[c].data, n)), a = u[c], i || (a.data || (a.data = {}), a = a.data), r !== t && (a[x.camelCase(n)] = r), "string" == typeof n ? (o = a[n], null == o && (o = a[x.camelCase(n)])) : o = a, o
        }
    }

    function W(e, t, n) {
        if (x.acceptData(e)) {
            var r, i, o = e.nodeType, a = o ? x.cache : e, s = o ? e[x.expando] : x.expando;
            if (a[s]) {
                if (t && (r = n ? a[s] : a[s].data)) {
                    x.isArray(t) ? t = t.concat(x.map(t, x.camelCase)) : t in r ? t = [t] : (t = x.camelCase(t), t = t in r ? [t] : t.split(" ")), i = t.length;
                    while (i--)delete r[t[i]];
                    if (n ? !I(r) : !x.isEmptyObject(r))return
                }
                (n || (delete a[s].data, I(a[s]))) && (o ? x.cleanData([e], !0) : x.support.deleteExpando || a != a.window ? delete a[s] : a[s] = null)
            }
        }
    }

    x.extend({
        cache: {},
        noData: {applet: !0, embed: !0, object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},
        hasData: function (e) {
            return e = e.nodeType ? x.cache[e[x.expando]] : e[x.expando], !!e && !I(e)
        },
        data: function (e, t, n) {
            return R(e, t, n)
        },
        removeData: function (e, t) {
            return W(e, t)
        },
        _data: function (e, t, n) {
            return R(e, t, n, !0)
        },
        _removeData: function (e, t) {
            return W(e, t, !0)
        },
        acceptData: function (e) {
            if (e.nodeType && 1 !== e.nodeType && 9 !== e.nodeType)return !1;
            var t = e.nodeName && x.noData[e.nodeName.toLowerCase()];
            return !t || t !== !0 && e.getAttribute("classid") === t
        }
    }), x.fn.extend({
        data: function (e, n) {
            var r, i, o = null, a = 0, s = this[0];
            if (e === t) {
                if (this.length && (o = x.data(s), 1 === s.nodeType && !x._data(s, "parsedAttrs"))) {
                    for (r = s.attributes; r.length > a; a++)i = r[a].name, 0 === i.indexOf("data-") && (i = x.camelCase(i.slice(5)), $(s, i, o[i]));
                    x._data(s, "parsedAttrs", !0)
                }
                return o
            }
            return "object" == typeof e ? this.each(function () {
                x.data(this, e)
            }) : arguments.length > 1 ? this.each(function () {
                x.data(this, e, n)
            }) : s ? $(s, e, x.data(s, e)) : null
        }, removeData: function (e) {
            return this.each(function () {
                x.removeData(this, e)
            })
        }
    });
    function $(e, n, r) {
        if (r === t && 1 === e.nodeType) {
            var i = "data-" + n.replace(P, "-$1").toLowerCase();
            if (r = e.getAttribute(i), "string" == typeof r) {
                try {
                    r = "true" === r ? !0 : "false" === r ? !1 : "null" === r ? null : +r + "" === r ? +r : B.test(r) ? x.parseJSON(r) : r
                } catch (o) {
                }
                x.data(e, n, r)
            } else r = t
        }
        return r
    }

    function I(e) {
        var t;
        for (t in e)if (("data" !== t || !x.isEmptyObject(e[t])) && "toJSON" !== t)return !1;
        return !0
    }

    x.extend({
        queue: function (e, n, r) {
            var i;
            return e ? (n = (n || "fx") + "queue", i = x._data(e, n), r && (!i || x.isArray(r) ? i = x._data(e, n, x.makeArray(r)) : i.push(r)), i || []) : t
        }, dequeue: function (e, t) {
            t = t || "fx";
            var n = x.queue(e, t), r = n.length, i = n.shift(), o = x._queueHooks(e, t), a = function () {
                x.dequeue(e, t)
            };
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire()
        }, _queueHooks: function (e, t) {
            var n = t + "queueHooks";
            return x._data(e, n) || x._data(e, n, {
                empty: x.Callbacks("once memory").add(function () {
                    x._removeData(e, t + "queue"), x._removeData(e, n)
                })
            })
        }
    }), x.fn.extend({
        queue: function (e, n) {
            var r = 2;
            return "string" != typeof e && (n = e, e = "fx", r--), r > arguments.length ? x.queue(this[0], e) : n === t ? this : this.each(function () {
                var t = x.queue(this, e, n);
                x._queueHooks(this, e), "fx" === e && "inprogress" !== t[0] && x.dequeue(this, e)
            })
        }, dequeue: function (e) {
            return this.each(function () {
                x.dequeue(this, e)
            })
        }, delay: function (e, t) {
            return e = x.fx ? x.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function (t, n) {
                var r = setTimeout(t, e);
                n.stop = function () {
                    clearTimeout(r)
                }
            })
        }, clearQueue: function (e) {
            return this.queue(e || "fx", [])
        }, promise: function (e, n) {
            var r, i = 1, o = x.Deferred(), a = this, s = this.length, l = function () {
                --i || o.resolveWith(a, [a])
            };
            "string" != typeof e && (n = e, e = t), e = e || "fx";
            while (s--)r = x._data(a[s], e + "queueHooks"), r && r.empty && (i++, r.empty.add(l));
            return l(), o.promise(n)
        }
    });
    var z, X, U = /[\t\r\n\f]/g, V = /\r/g, Y = /^(?:input|select|textarea|button|object)$/i, J = /^(?:a|area)$/i, G = /^(?:checked|selected)$/i, Q = x.support.getSetAttribute, K = x.support.input;
    x.fn.extend({
        attr: function (e, t) {
            return x.access(this, x.attr, e, t, arguments.length > 1)
        }, removeAttr: function (e) {
            return this.each(function () {
                x.removeAttr(this, e)
            })
        }, prop: function (e, t) {
            return x.access(this, x.prop, e, t, arguments.length > 1)
        }, removeProp: function (e) {
            return e = x.propFix[e] || e, this.each(function () {
                try {
                    this[e] = t, delete this[e]
                } catch (n) {
                }
            })
        }, addClass: function (e) {
            var t, n, r, i, o, a = 0, s = this.length, l = "string" == typeof e && e;
            if (x.isFunction(e))return this.each(function (t) {
                x(this).addClass(e.call(this, t, this.className))
            });
            if (l)for (t = (e || "").match(T) || []; s > a; a++)if (n = this[a], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(U, " ") : " ")) {
                o = 0;
                while (i = t[o++])0 > r.indexOf(" " + i + " ") && (r += i + " ");
                n.className = x.trim(r)
            }
            return this
        }, removeClass: function (e) {
            var t, n, r, i, o, a = 0, s = this.length, l = 0 === arguments.length || "string" == typeof e && e;
            if (x.isFunction(e))return this.each(function (t) {
                x(this).removeClass(e.call(this, t, this.className))
            });
            if (l)for (t = (e || "").match(T) || []; s > a; a++)if (n = this[a], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(U, " ") : "")) {
                o = 0;
                while (i = t[o++])while (r.indexOf(" " + i + " ") >= 0)r = r.replace(" " + i + " ", " ");
                n.className = e ? x.trim(r) : ""
            }
            return this
        }, toggleClass: function (e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : x.isFunction(e) ? this.each(function (n) {
                x(this).toggleClass(e.call(this, n, this.className, t), t)
            }) : this.each(function () {
                if ("string" === n) {
                    var t, r = 0, o = x(this), a = e.match(T) || [];
                    while (t = a[r++])o.hasClass(t) ? o.removeClass(t) : o.addClass(t)
                } else(n === i || "boolean" === n) && (this.className && x._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : x._data(this, "__className__") || "")
            })
        }, hasClass: function (e) {
            var t = " " + e + " ", n = 0, r = this.length;
            for (; r > n; n++)if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(U, " ").indexOf(t) >= 0)return !0;
            return !1
        }, val: function (e) {
            var n, r, i, o = this[0];
            {
                if (arguments.length)return i = x.isFunction(e), this.each(function (n) {
                    var o;
                    1 === this.nodeType && (o = i ? e.call(this, n, x(this).val()) : e, null == o ? o = "" : "number" == typeof o ? o += "" : x.isArray(o) && (o = x.map(o, function (e) {
                        return null == e ? "" : e + ""
                    })), r = x.valHooks[this.type] || x.valHooks[this.nodeName.toLowerCase()], r && "set"in r && r.set(this, o, "value") !== t || (this.value = o))
                });
                if (o)return r = x.valHooks[o.type] || x.valHooks[o.nodeName.toLowerCase()], r && "get"in r && (n = r.get(o, "value")) !== t ? n : (n = o.value, "string" == typeof n ? n.replace(V, "") : null == n ? "" : n)
            }
        }
    }), x.extend({
        valHooks: {
            option: {
                get: function (e) {
                    var t = x.find.attr(e, "value");
                    return null != t ? t : e.text
                }
            }, select: {
                get: function (e) {
                    var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type || 0 > i, a = o ? null : [], s = o ? i + 1 : r.length, l = 0 > i ? s : o ? i : 0;
                    for (; s > l; l++)if (n = r[l], !(!n.selected && l !== i || (x.support.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && x.nodeName(n.parentNode, "optgroup"))) {
                        if (t = x(n).val(), o)return t;
                        a.push(t)
                    }
                    return a
                }, set: function (e, t) {
                    var n, r, i = e.options, o = x.makeArray(t), a = i.length;
                    while (a--)r = i[a], (r.selected = x.inArray(x(r).val(), o) >= 0) && (n = !0);
                    return n || (e.selectedIndex = -1), o
                }
            }
        }, attr: function (e, n, r) {
            var o, a, s = e.nodeType;
            if (e && 3 !== s && 8 !== s && 2 !== s)return typeof e.getAttribute === i ? x.prop(e, n, r) : (1 === s && x.isXMLDoc(e) || (n = n.toLowerCase(), o = x.attrHooks[n] || (x.expr.match.bool.test(n) ? X : z)), r === t ? o && "get"in o && null !== (a = o.get(e, n)) ? a : (a = x.find.attr(e, n), null == a ? t : a) : null !== r ? o && "set"in o && (a = o.set(e, r, n)) !== t ? a : (e.setAttribute(n, r + ""), r) : (x.removeAttr(e, n), t))
        }, removeAttr: function (e, t) {
            var n, r, i = 0, o = t && t.match(T);
            if (o && 1 === e.nodeType)while (n = o[i++])r = x.propFix[n] || n, x.expr.match.bool.test(n) ? K && Q || !G.test(n) ? e[r] = !1 : e[x.camelCase("default-" + n)] = e[r] = !1 : x.attr(e, n, ""), e.removeAttribute(Q ? n : r)
        }, attrHooks: {
            type: {
                set: function (e, t) {
                    if (!x.support.radioValue && "radio" === t && x.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        }, propFix: {"for": "htmlFor", "class": "className"}, prop: function (e, n, r) {
            var i, o, a, s = e.nodeType;
            if (e && 3 !== s && 8 !== s && 2 !== s)return a = 1 !== s || !x.isXMLDoc(e), a && (n = x.propFix[n] || n, o = x.propHooks[n]), r !== t ? o && "set"in o && (i = o.set(e, r, n)) !== t ? i : e[n] = r : o && "get"in o && null !== (i = o.get(e, n)) ? i : e[n]
        }, propHooks: {
            tabIndex: {
                get: function (e) {
                    var t = x.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : Y.test(e.nodeName) || J.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        }
    }), X = {
        set: function (e, t, n) {
            return t === !1 ? x.removeAttr(e, n) : K && Q || !G.test(n) ? e.setAttribute(!Q && x.propFix[n] || n, n) : e[x.camelCase("default-" + n)] = e[n] = !0, n
        }
    }, x.each(x.expr.match.bool.source.match(/\w+/g), function (e, n) {
        var r = x.expr.attrHandle[n] || x.find.attr;
        x.expr.attrHandle[n] = K && Q || !G.test(n) ? function (e, n, i) {
            var o = x.expr.attrHandle[n], a = i ? t : (x.expr.attrHandle[n] = t) != r(e, n, i) ? n.toLowerCase() : null;
            return x.expr.attrHandle[n] = o, a
        } : function (e, n, r) {
            return r ? t : e[x.camelCase("default-" + n)] ? n.toLowerCase() : null
        }
    }), K && Q || (x.attrHooks.value = {
        set: function (e, n, r) {
            return x.nodeName(e, "input") ? (e.defaultValue = n, t) : z && z.set(e, n, r)
        }
    }), Q || (z = {
        set: function (e, n, r) {
            var i = e.getAttributeNode(r);
            return i || e.setAttributeNode(i = e.ownerDocument.createAttribute(r)), i.value = n += "", "value" === r || n === e.getAttribute(r) ? n : t
        }
    }, x.expr.attrHandle.id = x.expr.attrHandle.name = x.expr.attrHandle.coords = function (e, n, r) {
        var i;
        return r ? t : (i = e.getAttributeNode(n)) && "" !== i.value ? i.value : null
    }, x.valHooks.button = {
        get: function (e, n) {
            var r = e.getAttributeNode(n);
            return r && r.specified ? r.value : t
        }, set: z.set
    }, x.attrHooks.contenteditable = {
        set: function (e, t, n) {
            z.set(e, "" === t ? !1 : t, n)
        }
    }, x.each(["width", "height"], function (e, n) {
        x.attrHooks[n] = {
            set: function (e, r) {
                return "" === r ? (e.setAttribute(n, "auto"), r) : t
            }
        }
    })), x.support.hrefNormalized || x.each(["href", "src"], function (e, t) {
        x.propHooks[t] = {
            get: function (e) {
                return e.getAttribute(t, 4)
            }
        }
    }), x.support.style || (x.attrHooks.style = {
        get: function (e) {
            return e.style.cssText || t
        }, set: function (e, t) {
            return e.style.cssText = t + ""
        }
    }), x.support.optSelected || (x.propHooks.selected = {
        get: function (e) {
            var t = e.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
        }
    }), x.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        x.propFix[this.toLowerCase()] = this
    }), x.support.enctype || (x.propFix.enctype = "encoding"), x.each(["radio", "checkbox"], function () {
        x.valHooks[this] = {
            set: function (e, n) {
                return x.isArray(n) ? e.checked = x.inArray(x(e).val(), n) >= 0 : t
            }
        }, x.support.checkOn || (x.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    });
    var Z = /^(?:input|select|textarea)$/i, et = /^key/, tt = /^(?:mouse|contextmenu)|click/, nt = /^(?:focusinfocus|focusoutblur)$/, rt = /^([^.]*)(?:\.(.+)|)$/;

    function it() {
        return !0
    }

    function ot() {
        return !1
    }

    function at() {
        try {
            return a.activeElement
        } catch (e) {
        }
    }

    x.event = {
        global: {},
        add: function (e, n, r, o, a) {
            var s, l, u, c, p, f, d, h, g, m, y, v = x._data(e);
            if (v) {
                r.handler && (c = r, r = c.handler, a = c.selector), r.guid || (r.guid = x.guid++), (l = v.events) || (l = v.events = {}), (f = v.handle) || (f = v.handle = function (e) {
                    return typeof x === i || e && x.event.triggered === e.type ? t : x.event.dispatch.apply(f.elem, arguments)
                }, f.elem = e), n = (n || "").match(T) || [""], u = n.length;
                while (u--)s = rt.exec(n[u]) || [], g = y = s[1], m = (s[2] || "").split(".").sort(), g && (p = x.event.special[g] || {}, g = (a ? p.delegateType : p.bindType) || g, p = x.event.special[g] || {}, d = x.extend({
                    type: g,
                    origType: y,
                    data: o,
                    handler: r,
                    guid: r.guid,
                    selector: a,
                    needsContext: a && x.expr.match.needsContext.test(a),
                    namespace: m.join(".")
                }, c), (h = l[g]) || (h = l[g] = [], h.delegateCount = 0, p.setup && p.setup.call(e, o, m, f) !== !1 || (e.addEventListener ? e.addEventListener(g, f, !1) : e.attachEvent && e.attachEvent("on" + g, f))), p.add && (p.add.call(e, d), d.handler.guid || (d.handler.guid = r.guid)), a ? h.splice(h.delegateCount++, 0, d) : h.push(d), x.event.global[g] = !0);
                e = null
            }
        },
        remove: function (e, t, n, r, i) {
            var o, a, s, l, u, c, p, f, d, h, g, m = x.hasData(e) && x._data(e);
            if (m && (c = m.events)) {
                t = (t || "").match(T) || [""], u = t.length;
                while (u--)if (s = rt.exec(t[u]) || [], d = g = s[1], h = (s[2] || "").split(".").sort(), d) {
                    p = x.event.special[d] || {}, d = (r ? p.delegateType : p.bindType) || d, f = c[d] || [], s = s[2] && RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = o = f.length;
                    while (o--)a = f[o], !i && g !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || r && r !== a.selector && ("**" !== r || !a.selector) || (f.splice(o, 1), a.selector && f.delegateCount--, p.remove && p.remove.call(e, a));
                    l && !f.length && (p.teardown && p.teardown.call(e, h, m.handle) !== !1 || x.removeEvent(e, d, m.handle), delete c[d])
                } else for (d in c)x.event.remove(e, d + t[u], n, r, !0);
                x.isEmptyObject(c) && (delete m.handle, x._removeData(e, "events"))
            }
        },
        trigger: function (n, r, i, o) {
            var s, l, u, c, p, f, d, h = [i || a], g = v.call(n, "type") ? n.type : n, m = v.call(n, "namespace") ? n.namespace.split(".") : [];
            if (u = f = i = i || a, 3 !== i.nodeType && 8 !== i.nodeType && !nt.test(g + x.event.triggered) && (g.indexOf(".") >= 0 && (m = g.split("."), g = m.shift(), m.sort()), l = 0 > g.indexOf(":") && "on" + g, n = n[x.expando] ? n : new x.Event(g, "object" == typeof n && n), n.isTrigger = o ? 2 : 3, n.namespace = m.join("."), n.namespace_re = n.namespace ? RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, n.result = t, n.target || (n.target = i), r = null == r ? [n] : x.makeArray(r, [n]), p = x.event.special[g] || {}, o || !p.trigger || p.trigger.apply(i, r) !== !1)) {
                if (!o && !p.noBubble && !x.isWindow(i)) {
                    for (c = p.delegateType || g, nt.test(c + g) || (u = u.parentNode); u; u = u.parentNode)h.push(u), f = u;
                    f === (i.ownerDocument || a) && h.push(f.defaultView || f.parentWindow || e)
                }
                d = 0;
                while ((u = h[d++]) && !n.isPropagationStopped())n.type = d > 1 ? c : p.bindType || g, s = (x._data(u, "events") || {})[n.type] && x._data(u, "handle"), s && s.apply(u, r), s = l && u[l], s && x.acceptData(u) && s.apply && s.apply(u, r) === !1 && n.preventDefault();
                if (n.type = g, !o && !n.isDefaultPrevented() && (!p._default || p._default.apply(h.pop(), r) === !1) && x.acceptData(i) && l && i[g] && !x.isWindow(i)) {
                    f = i[l], f && (i[l] = null), x.event.triggered = g;
                    try {
                        i[g]()
                    } catch (y) {
                    }
                    x.event.triggered = t, f && (i[l] = f)
                }
                return n.result
            }
        },
        dispatch: function (e) {
            e = x.event.fix(e);
            var n, r, i, o, a, s = [], l = g.call(arguments), u = (x._data(this, "events") || {})[e.type] || [], c = x.event.special[e.type] || {};
            if (l[0] = e, e.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, e) !== !1) {
                s = x.event.handlers.call(this, e, u), n = 0;
                while ((o = s[n++]) && !e.isPropagationStopped()) {
                    e.currentTarget = o.elem, a = 0;
                    while ((i = o.handlers[a++]) && !e.isImmediatePropagationStopped())(!e.namespace_re || e.namespace_re.test(i.namespace)) && (e.handleObj = i, e.data = i.data, r = ((x.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, l), r !== t && (e.result = r) === !1 && (e.preventDefault(), e.stopPropagation()))
                }
                return c.postDispatch && c.postDispatch.call(this, e), e.result
            }
        },
        handlers: function (e, n) {
            var r, i, o, a, s = [], l = n.delegateCount, u = e.target;
            if (l && u.nodeType && (!e.button || "click" !== e.type))for (; u != this; u = u.parentNode || this)if (1 === u.nodeType && (u.disabled !== !0 || "click" !== e.type)) {
                for (o = [], a = 0; l > a; a++)i = n[a], r = i.selector + " ", o[r] === t && (o[r] = i.needsContext ? x(r, this).index(u) >= 0 : x.find(r, this, null, [u]).length), o[r] && o.push(i);
                o.length && s.push({elem: u, handlers: o})
            }
            return n.length > l && s.push({elem: this, handlers: n.slice(l)}), s
        },
        fix: function (e) {
            if (e[x.expando])return e;
            var t, n, r, i = e.type, o = e, s = this.fixHooks[i];
            s || (this.fixHooks[i] = s = tt.test(i) ? this.mouseHooks : et.test(i) ? this.keyHooks : {}), r = s.props ? this.props.concat(s.props) : this.props, e = new x.Event(o), t = r.length;
            while (t--)n = r[t], e[n] = o[n];
            return e.target || (e.target = o.srcElement || a), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, s.filter ? s.filter(e, o) : e
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "), filter: function (e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (e, n) {
                var r, i, o, s = n.button, l = n.fromElement;
                return null == e.pageX && null != n.clientX && (i = e.target.ownerDocument || a, o = i.documentElement, r = i.body, e.pageX = n.clientX + (o && o.scrollLeft || r && r.scrollLeft || 0) - (o && o.clientLeft || r && r.clientLeft || 0), e.pageY = n.clientY + (o && o.scrollTop || r && r.scrollTop || 0) - (o && o.clientTop || r && r.clientTop || 0)), !e.relatedTarget && l && (e.relatedTarget = l === e.target ? n.toElement : l), e.which || s === t || (e.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0), e
            }
        },
        special: {
            load: {noBubble: !0}, focus: {
                trigger: function () {
                    if (this !== at() && this.focus)try {
                        return this.focus(), !1
                    } catch (e) {
                    }
                }, delegateType: "focusin"
            }, blur: {
                trigger: function () {
                    return this === at() && this.blur ? (this.blur(), !1) : t
                }, delegateType: "focusout"
            }, click: {
                trigger: function () {
                    return x.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : t
                }, _default: function (e) {
                    return x.nodeName(e.target, "a")
                }
            }, beforeunload: {
                postDispatch: function (e) {
                    e.result !== t && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function (e, t, n, r) {
            var i = x.extend(new x.Event, n, {type: e, isSimulated: !0, originalEvent: {}});
            r ? x.event.trigger(i, null, t) : x.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault()
        }
    }, x.removeEvent = a.removeEventListener ? function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    } : function (e, t, n) {
        var r = "on" + t;
        e.detachEvent && (typeof e[r] === i && (e[r] = null), e.detachEvent(r, n))
    }, x.Event = function (e, n) {
        return this instanceof x.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? it : ot) : this.type = e, n && x.extend(this, n), this.timeStamp = e && e.timeStamp || x.now(), this[x.expando] = !0, t) : new x.Event(e, n)
    }, x.Event.prototype = {
        isDefaultPrevented: ot,
        isPropagationStopped: ot,
        isImmediatePropagationStopped: ot,
        preventDefault: function () {
            var e = this.originalEvent;
            this.isDefaultPrevented = it, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
        },
        stopPropagation: function () {
            var e = this.originalEvent;
            this.isPropagationStopped = it, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
        },
        stopImmediatePropagation: function () {
            this.isImmediatePropagationStopped = it, this.stopPropagation()
        }
    }, x.each({mouseenter: "mouseover", mouseleave: "mouseout"}, function (e, t) {
        x.event.special[e] = {
            delegateType: t, bindType: t, handle: function (e) {
                var n, r = this, i = e.relatedTarget, o = e.handleObj;
                return (!i || i !== r && !x.contains(r, i)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), x.support.submitBubbles || (x.event.special.submit = {
        setup: function () {
            return x.nodeName(this, "form") ? !1 : (x.event.add(this, "click._submit keypress._submit", function (e) {
                var n = e.target, r = x.nodeName(n, "input") || x.nodeName(n, "button") ? n.form : t;
                r && !x._data(r, "submitBubbles") && (x.event.add(r, "submit._submit", function (e) {
                    e._submit_bubble = !0
                }), x._data(r, "submitBubbles", !0))
            }), t)
        }, postDispatch: function (e) {
            e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && x.event.simulate("submit", this.parentNode, e, !0))
        }, teardown: function () {
            return x.nodeName(this, "form") ? !1 : (x.event.remove(this, "._submit"), t)
        }
    }), x.support.changeBubbles || (x.event.special.change = {
        setup: function () {
            return Z.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (x.event.add(this, "propertychange._change", function (e) {
                "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
            }), x.event.add(this, "click._change", function (e) {
                this._just_changed && !e.isTrigger && (this._just_changed = !1), x.event.simulate("change", this, e, !0)
            })), !1) : (x.event.add(this, "beforeactivate._change", function (e) {
                var t = e.target;
                Z.test(t.nodeName) && !x._data(t, "changeBubbles") && (x.event.add(t, "change._change", function (e) {
                    !this.parentNode || e.isSimulated || e.isTrigger || x.event.simulate("change", this.parentNode, e, !0)
                }), x._data(t, "changeBubbles", !0))
            }), t)
        }, handle: function (e) {
            var n = e.target;
            return this !== n || e.isSimulated || e.isTrigger || "radio" !== n.type && "checkbox" !== n.type ? e.handleObj.handler.apply(this, arguments) : t
        }, teardown: function () {
            return x.event.remove(this, "._change"), !Z.test(this.nodeName)
        }
    }), x.support.focusinBubbles || x.each({focus: "focusin", blur: "focusout"}, function (e, t) {
        var n = 0, r = function (e) {
            x.event.simulate(t, e.target, x.event.fix(e), !0)
        };
        x.event.special[t] = {
            setup: function () {
                0 === n++ && a.addEventListener(e, r, !0)
            }, teardown: function () {
                0 === --n && a.removeEventListener(e, r, !0)
            }
        }
    }), x.fn.extend({
        on: function (e, n, r, i, o) {
            var a, s;
            if ("object" == typeof e) {
                "string" != typeof n && (r = r || n, n = t);
                for (a in e)this.on(a, n, r, e[a], o);
                return this
            }
            if (null == r && null == i ? (i = n, r = n = t) : null == i && ("string" == typeof n ? (i = r, r = t) : (i = r, r = n, n = t)), i === !1)i = ot; else if (!i)return this;
            return 1 === o && (s = i, i = function (e) {
                return x().off(e), s.apply(this, arguments)
            }, i.guid = s.guid || (s.guid = x.guid++)), this.each(function () {
                x.event.add(this, e, i, r, n)
            })
        }, one: function (e, t, n, r) {
            return this.on(e, t, n, r, 1)
        }, off: function (e, n, r) {
            var i, o;
            if (e && e.preventDefault && e.handleObj)return i = e.handleObj, x(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" == typeof e) {
                for (o in e)this.off(o, n, e[o]);
                return this
            }
            return (n === !1 || "function" == typeof n) && (r = n, n = t), r === !1 && (r = ot), this.each(function () {
                x.event.remove(this, e, r, n)
            })
        }, trigger: function (e, t) {
            return this.each(function () {
                x.event.trigger(e, t, this)
            })
        }, triggerHandler: function (e, n) {
            var r = this[0];
            return r ? x.event.trigger(e, n, r, !0) : t
        }
    });
    var st = /^.[^:#\[\.,]*$/, lt = /^(?:parents|prev(?:Until|All))/, ut = x.expr.match.needsContext, ct = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    x.fn.extend({
        find: function (e) {
            var t, n = [], r = this, i = r.length;
            if ("string" != typeof e)return this.pushStack(x(e).filter(function () {
                for (t = 0; i > t; t++)if (x.contains(r[t], this))return !0
            }));
            for (t = 0; i > t; t++)x.find(e, r[t], n);
            return n = this.pushStack(i > 1 ? x.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, n
        }, has: function (e) {
            var t, n = x(e, this), r = n.length;
            return this.filter(function () {
                for (t = 0; r > t; t++)if (x.contains(this, n[t]))return !0
            })
        }, not: function (e) {
            return this.pushStack(ft(this, e || [], !0))
        }, filter: function (e) {
            return this.pushStack(ft(this, e || [], !1))
        }, is: function (e) {
            return !!ft(this, "string" == typeof e && ut.test(e) ? x(e) : e || [], !1).length
        }, closest: function (e, t) {
            var n, r = 0, i = this.length, o = [], a = ut.test(e) || "string" != typeof e ? x(e, t || this.context) : 0;
            for (; i > r; r++)for (n = this[r]; n && n !== t; n = n.parentNode)if (11 > n.nodeType && (a ? a.index(n) > -1 : 1 === n.nodeType && x.find.matchesSelector(n, e))) {
                n = o.push(n);
                break
            }
            return this.pushStack(o.length > 1 ? x.unique(o) : o)
        }, index: function (e) {
            return e ? "string" == typeof e ? x.inArray(this[0], x(e)) : x.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        }, add: function (e, t) {
            var n = "string" == typeof e ? x(e, t) : x.makeArray(e && e.nodeType ? [e] : e), r = x.merge(this.get(), n);
            return this.pushStack(x.unique(r))
        }, addBack: function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    });
    function pt(e, t) {
        do e = e[t]; while (e && 1 !== e.nodeType);
        return e
    }

    x.each({
        parent: function (e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        }, parents: function (e) {
            return x.dir(e, "parentNode")
        }, parentsUntil: function (e, t, n) {
            return x.dir(e, "parentNode", n)
        }, next: function (e) {
            return pt(e, "nextSibling")
        }, prev: function (e) {
            return pt(e, "previousSibling")
        }, nextAll: function (e) {
            return x.dir(e, "nextSibling")
        }, prevAll: function (e) {
            return x.dir(e, "previousSibling")
        }, nextUntil: function (e, t, n) {
            return x.dir(e, "nextSibling", n)
        }, prevUntil: function (e, t, n) {
            return x.dir(e, "previousSibling", n)
        }, siblings: function (e) {
            return x.sibling((e.parentNode || {}).firstChild, e)
        }, children: function (e) {
            return x.sibling(e.firstChild)
        }, contents: function (e) {
            return x.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : x.merge([], e.childNodes)
        }
    }, function (e, t) {
        x.fn[e] = function (n, r) {
            var i = x.map(this, t, n);
            return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = x.filter(r, i)), this.length > 1 && (ct[e] || (i = x.unique(i)), lt.test(e) && (i = i.reverse())), this.pushStack(i)
        }
    }), x.extend({
        filter: function (e, t, n) {
            var r = t[0];
            return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? x.find.matchesSelector(r, e) ? [r] : [] : x.find.matches(e, x.grep(t, function (e) {
                return 1 === e.nodeType
            }))
        }, dir: function (e, n, r) {
            var i = [], o = e[n];
            while (o && 9 !== o.nodeType && (r === t || 1 !== o.nodeType || !x(o).is(r)))1 === o.nodeType && i.push(o), o = o[n];
            return i
        }, sibling: function (e, t) {
            var n = [];
            for (; e; e = e.nextSibling)1 === e.nodeType && e !== t && n.push(e);
            return n
        }
    });
    function ft(e, t, n) {
        if (x.isFunction(t))return x.grep(e, function (e, r) {
            return !!t.call(e, r, e) !== n
        });
        if (t.nodeType)return x.grep(e, function (e) {
            return e === t !== n
        });
        if ("string" == typeof t) {
            if (st.test(t))return x.filter(t, e, n);
            t = x.filter(t, e)
        }
        return x.grep(e, function (e) {
            return x.inArray(e, t) >= 0 !== n
        })
    }

    function dt(e) {
        var t = ht.split("|"), n = e.createDocumentFragment();
        if (n.createElement)while (t.length)n.createElement(t.pop());
        return n
    }

    var ht = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video", gt = / jQuery\d+="(?:null|\d+)"/g, mt = RegExp("<(?:" + ht + ")[\\s/>]", "i"), yt = /^\s+/, vt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, bt = /<([\w:]+)/, xt = /<tbody/i, wt = /<|&#?\w+;/, Tt = /<(?:script|style|link)/i, Ct = /^(?:checkbox|radio)$/i, Nt = /checked\s*(?:[^=]|=\s*.checked.)/i, kt = /^$|\/(?:java|ecma)script/i, Et = /^true\/(.*)/, St = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, At = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        area: [1, "<map>", "</map>"],
        param: [1, "<object>", "</object>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: x.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
    }, jt = dt(a), Dt = jt.appendChild(a.createElement("div"));
    At.optgroup = At.option, At.tbody = At.tfoot = At.colgroup = At.caption = At.thead, At.th = At.td, x.fn.extend({
        text: function (e) {
            return x.access(this, function (e) {
                return e === t ? x.text(this) : this.empty().append((this[0] && this[0].ownerDocument || a).createTextNode(e))
            }, null, e, arguments.length)
        }, append: function () {
            return this.domManip(arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = Lt(this, e);
                    t.appendChild(e)
                }
            })
        }, prepend: function () {
            return this.domManip(arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = Lt(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        }, before: function () {
            return this.domManip(arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        }, after: function () {
            return this.domManip(arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        }, remove: function (e, t) {
            var n, r = e ? x.filter(e, this) : this, i = 0;
            for (; null != (n = r[i]); i++)t || 1 !== n.nodeType || x.cleanData(Ft(n)), n.parentNode && (t && x.contains(n.ownerDocument, n) && _t(Ft(n, "script")), n.parentNode.removeChild(n));
            return this
        }, empty: function () {
            var e, t = 0;
            for (; null != (e = this[t]); t++) {
                1 === e.nodeType && x.cleanData(Ft(e, !1));
                while (e.firstChild)e.removeChild(e.firstChild);
                e.options && x.nodeName(e, "select") && (e.options.length = 0)
            }
            return this
        }, clone: function (e, t) {
            return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function () {
                return x.clone(this, e, t)
            })
        }, html: function (e) {
            return x.access(this, function (e) {
                var n = this[0] || {}, r = 0, i = this.length;
                if (e === t)return 1 === n.nodeType ? n.innerHTML.replace(gt, "") : t;
                if (!("string" != typeof e || Tt.test(e) || !x.support.htmlSerialize && mt.test(e) || !x.support.leadingWhitespace && yt.test(e) || At[(bt.exec(e) || ["", ""])[1].toLowerCase()])) {
                    e = e.replace(vt, "<$1></$2>");
                    try {
                        for (; i > r; r++)n = this[r] || {}, 1 === n.nodeType && (x.cleanData(Ft(n, !1)), n.innerHTML = e);
                        n = 0
                    } catch (o) {
                    }
                }
                n && this.empty().append(e)
            }, null, e, arguments.length)
        }, replaceWith: function () {
            var e = x.map(this, function (e) {
                return [e.nextSibling, e.parentNode]
            }), t = 0;
            return this.domManip(arguments, function (n) {
                var r = e[t++], i = e[t++];
                i && (r && r.parentNode !== i && (r = this.nextSibling), x(this).remove(), i.insertBefore(n, r))
            }, !0), t ? this : this.remove()
        }, detach: function (e) {
            return this.remove(e, !0)
        }, domManip: function (e, t, n) {
            e = d.apply([], e);
            var r, i, o, a, s, l, u = 0, c = this.length, p = this, f = c - 1, h = e[0], g = x.isFunction(h);
            if (g || !(1 >= c || "string" != typeof h || x.support.checkClone) && Nt.test(h))return this.each(function (r) {
                var i = p.eq(r);
                g && (e[0] = h.call(this, r, i.html())), i.domManip(e, t, n)
            });
            if (c && (l = x.buildFragment(e, this[0].ownerDocument, !1, !n && this), r = l.firstChild, 1 === l.childNodes.length && (l = r), r)) {
                for (a = x.map(Ft(l, "script"), Ht), o = a.length; c > u; u++)i = l, u !== f && (i = x.clone(i, !0, !0), o && x.merge(a, Ft(i, "script"))), t.call(this[u], i, u);
                if (o)for (s = a[a.length - 1].ownerDocument, x.map(a, qt), u = 0; o > u; u++)i = a[u], kt.test(i.type || "") && !x._data(i, "globalEval") && x.contains(s, i) && (i.src ? x._evalUrl(i.src) : x.globalEval((i.text || i.textContent || i.innerHTML || "").replace(St, "")));
                l = r = null
            }
            return this
        }
    });
    function Lt(e, t) {
        return x.nodeName(e, "table") && x.nodeName(1 === t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function Ht(e) {
        return e.type = (null !== x.find.attr(e, "type")) + "/" + e.type, e
    }

    function qt(e) {
        var t = Et.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function _t(e, t) {
        var n, r = 0;
        for (; null != (n = e[r]); r++)x._data(n, "globalEval", !t || x._data(t[r], "globalEval"))
    }

    function Mt(e, t) {
        if (1 === t.nodeType && x.hasData(e)) {
            var n, r, i, o = x._data(e), a = x._data(t, o), s = o.events;
            if (s) {
                delete a.handle, a.events = {};
                for (n in s)for (r = 0, i = s[n].length; i > r; r++)x.event.add(t, n, s[n][r])
            }
            a.data && (a.data = x.extend({}, a.data))
        }
    }

    function Ot(e, t) {
        var n, r, i;
        if (1 === t.nodeType) {
            if (n = t.nodeName.toLowerCase(), !x.support.noCloneEvent && t[x.expando]) {
                i = x._data(t);
                for (r in i.events)x.removeEvent(t, r, i.handle);
                t.removeAttribute(x.expando)
            }
            "script" === n && t.text !== e.text ? (Ht(t).text = e.text, qt(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), x.support.html5Clone && e.innerHTML && !x.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && Ct.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
        }
    }

    x.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (e, t) {
        x.fn[e] = function (e) {
            var n, r = 0, i = [], o = x(e), a = o.length - 1;
            for (; a >= r; r++)n = r === a ? this : this.clone(!0), x(o[r])[t](n), h.apply(i, n.get());
            return this.pushStack(i)
        }
    });
    function Ft(e, n) {
        var r, o, a = 0, s = typeof e.getElementsByTagName !== i ? e.getElementsByTagName(n || "*") : typeof e.querySelectorAll !== i ? e.querySelectorAll(n || "*") : t;
        if (!s)for (s = [], r = e.childNodes || e; null != (o = r[a]); a++)!n || x.nodeName(o, n) ? s.push(o) : x.merge(s, Ft(o, n));
        return n === t || n && x.nodeName(e, n) ? x.merge([e], s) : s
    }

    function Bt(e) {
        Ct.test(e.type) && (e.defaultChecked = e.checked)
    }

    x.extend({
        clone: function (e, t, n) {
            var r, i, o, a, s, l = x.contains(e.ownerDocument, e);
            if (x.support.html5Clone || x.isXMLDoc(e) || !mt.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (Dt.innerHTML = e.outerHTML, Dt.removeChild(o = Dt.firstChild)), !(x.support.noCloneEvent && x.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || x.isXMLDoc(e)))for (r = Ft(o), s = Ft(e), a = 0; null != (i = s[a]); ++a)r[a] && Ot(i, r[a]);
            if (t)if (n)for (s = s || Ft(e), r = r || Ft(o), a = 0; null != (i = s[a]); a++)Mt(i, r[a]); else Mt(e, o);
            return r = Ft(o, "script"), r.length > 0 && _t(r, !l && Ft(e, "script")), r = s = i = null, o
        }, buildFragment: function (e, t, n, r) {
            var i, o, a, s, l, u, c, p = e.length, f = dt(t), d = [], h = 0;
            for (; p > h; h++)if (o = e[h], o || 0 === o)if ("object" === x.type(o))x.merge(d, o.nodeType ? [o] : o); else if (wt.test(o)) {
                s = s || f.appendChild(t.createElement("div")), l = (bt.exec(o) || ["", ""])[1].toLowerCase(), c = At[l] || At._default, s.innerHTML = c[1] + o.replace(vt, "<$1></$2>") + c[2], i = c[0];
                while (i--)s = s.lastChild;
                if (!x.support.leadingWhitespace && yt.test(o) && d.push(t.createTextNode(yt.exec(o)[0])), !x.support.tbody) {
                    o = "table" !== l || xt.test(o) ? "<table>" !== c[1] || xt.test(o) ? 0 : s : s.firstChild, i = o && o.childNodes.length;
                    while (i--)x.nodeName(u = o.childNodes[i], "tbody") && !u.childNodes.length && o.removeChild(u)
                }
                x.merge(d, s.childNodes), s.textContent = "";
                while (s.firstChild)s.removeChild(s.firstChild);
                s = f.lastChild
            } else d.push(t.createTextNode(o));
            s && f.removeChild(s), x.support.appendChecked || x.grep(Ft(d, "input"), Bt), h = 0;
            while (o = d[h++])if ((!r || -1 === x.inArray(o, r)) && (a = x.contains(o.ownerDocument, o), s = Ft(f.appendChild(o), "script"), a && _t(s), n)) {
                i = 0;
                while (o = s[i++])kt.test(o.type || "") && n.push(o)
            }
            return s = null, f
        }, cleanData: function (e, t) {
            var n, r, o, a, s = 0, l = x.expando, u = x.cache, c = x.support.deleteExpando, f = x.event.special;
            for (; null != (n = e[s]); s++)if ((t || x.acceptData(n)) && (o = n[l], a = o && u[o])) {
                if (a.events)for (r in a.events)f[r] ? x.event.remove(n, r) : x.removeEvent(n, r, a.handle);
                u[o] && (delete u[o], c ? delete n[l] : typeof n.removeAttribute !== i ? n.removeAttribute(l) : n[l] = null, p.push(o))
            }
        }, _evalUrl: function (e) {
            return x.ajax({url: e, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0})
        }
    }), x.fn.extend({
        wrapAll: function (e) {
            if (x.isFunction(e))return this.each(function (t) {
                x(this).wrapAll(e.call(this, t))
            });
            if (this[0]) {
                var t = x(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                    var e = this;
                    while (e.firstChild && 1 === e.firstChild.nodeType)e = e.firstChild;
                    return e
                }).append(this)
            }
            return this
        }, wrapInner: function (e) {
            return x.isFunction(e) ? this.each(function (t) {
                x(this).wrapInner(e.call(this, t))
            }) : this.each(function () {
                var t = x(this), n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        }, wrap: function (e) {
            var t = x.isFunction(e);
            return this.each(function (n) {
                x(this).wrapAll(t ? e.call(this, n) : e)
            })
        }, unwrap: function () {
            return this.parent().each(function () {
                x.nodeName(this, "body") || x(this).replaceWith(this.childNodes)
            }).end()
        }
    });
    var Pt, Rt, Wt, $t = /alpha\([^)]*\)/i, It = /opacity\s*=\s*([^)]*)/, zt = /^(top|right|bottom|left)$/, Xt = /^(none|table(?!-c[ea]).+)/, Ut = /^margin/, Vt = RegExp("^(" + w + ")(.*)$", "i"), Yt = RegExp("^(" + w + ")(?!px)[a-z%]+$", "i"), Jt = RegExp("^([+-])=(" + w + ")", "i"), Gt = {BODY: "block"}, Qt = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, Kt = {
        letterSpacing: 0,
        fontWeight: 400
    }, Zt = ["Top", "Right", "Bottom", "Left"], en = ["Webkit", "O", "Moz", "ms"];

    function tn(e, t) {
        if (t in e)return t;
        var n = t.charAt(0).toUpperCase() + t.slice(1), r = t, i = en.length;
        while (i--)if (t = en[i] + n, t in e)return t;
        return r
    }

    function nn(e, t) {
        return e = t || e, "none" === x.css(e, "display") || !x.contains(e.ownerDocument, e)
    }

    function rn(e, t) {
        var n, r, i, o = [], a = 0, s = e.length;
        for (; s > a; a++)r = e[a], r.style && (o[a] = x._data(r, "olddisplay"), n = r.style.display, t ? (o[a] || "none" !== n || (r.style.display = ""), "" === r.style.display && nn(r) && (o[a] = x._data(r, "olddisplay", ln(r.nodeName)))) : o[a] || (i = nn(r), (n && "none" !== n || !i) && x._data(r, "olddisplay", i ? n : x.css(r, "display"))));
        for (a = 0; s > a; a++)r = e[a], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[a] || "" : "none"));
        return e
    }

    x.fn.extend({
        css: function (e, n) {
            return x.access(this, function (e, n, r) {
                var i, o, a = {}, s = 0;
                if (x.isArray(n)) {
                    for (o = Rt(e), i = n.length; i > s; s++)a[n[s]] = x.css(e, n[s], !1, o);
                    return a
                }
                return r !== t ? x.style(e, n, r) : x.css(e, n)
            }, e, n, arguments.length > 1)
        }, show: function () {
            return rn(this, !0)
        }, hide: function () {
            return rn(this)
        }, toggle: function (e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
                nn(this) ? x(this).show() : x(this).hide()
            })
        }
    }), x.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var n = Wt(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {"float": x.support.cssFloat ? "cssFloat" : "styleFloat"},
        style: function (e, n, r, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o, a, s, l = x.camelCase(n), u = e.style;
                if (n = x.cssProps[l] || (x.cssProps[l] = tn(u, l)), s = x.cssHooks[n] || x.cssHooks[l], r === t)return s && "get"in s && (o = s.get(e, !1, i)) !== t ? o : u[n];
                if (a = typeof r, "string" === a && (o = Jt.exec(r)) && (r = (o[1] + 1) * o[2] + parseFloat(x.css(e, n)), a = "number"), !(null == r || "number" === a && isNaN(r) || ("number" !== a || x.cssNumber[l] || (r += "px"), x.support.clearCloneStyle || "" !== r || 0 !== n.indexOf("background") || (u[n] = "inherit"), s && "set"in s && (r = s.set(e, r, i)) === t)))try {
                    u[n] = r
                } catch (c) {
                }
            }
        },
        css: function (e, n, r, i) {
            var o, a, s, l = x.camelCase(n);
            return n = x.cssProps[l] || (x.cssProps[l] = tn(e.style, l)), s = x.cssHooks[n] || x.cssHooks[l], s && "get"in s && (a = s.get(e, !0, r)), a === t && (a = Wt(e, n, i)), "normal" === a && n in Kt && (a = Kt[n]), "" === r || r ? (o = parseFloat(a), r === !0 || x.isNumeric(o) ? o || 0 : a) : a
        }
    }), e.getComputedStyle ? (Rt = function (t) {
        return e.getComputedStyle(t, null)
    }, Wt = function (e, n, r) {
        var i, o, a, s = r || Rt(e), l = s ? s.getPropertyValue(n) || s[n] : t, u = e.style;
        return s && ("" !== l || x.contains(e.ownerDocument, e) || (l = x.style(e, n)), Yt.test(l) && Ut.test(n) && (i = u.width, o = u.minWidth, a = u.maxWidth, u.minWidth = u.maxWidth = u.width = l, l = s.width, u.width = i, u.minWidth = o, u.maxWidth = a)), l
    }) : a.documentElement.currentStyle && (Rt = function (e) {
        return e.currentStyle
    }, Wt = function (e, n, r) {
        var i, o, a, s = r || Rt(e), l = s ? s[n] : t, u = e.style;
        return null == l && u && u[n] && (l = u[n]), Yt.test(l) && !zt.test(n) && (i = u.left, o = e.runtimeStyle, a = o && o.left, a && (o.left = e.currentStyle.left), u.left = "fontSize" === n ? "1em" : l, l = u.pixelLeft + "px", u.left = i, a && (o.left = a)), "" === l ? "auto" : l
    });
    function on(e, t, n) {
        var r = Vt.exec(t);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
    }

    function an(e, t, n, r, i) {
        var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0;
        for (; 4 > o; o += 2)"margin" === n && (a += x.css(e, n + Zt[o], !0, i)), r ? ("content" === n && (a -= x.css(e, "padding" + Zt[o], !0, i)), "margin" !== n && (a -= x.css(e, "border" + Zt[o] + "Width", !0, i))) : (a += x.css(e, "padding" + Zt[o], !0, i), "padding" !== n && (a += x.css(e, "border" + Zt[o] + "Width", !0, i)));
        return a
    }

    function sn(e, t, n) {
        var r = !0, i = "width" === t ? e.offsetWidth : e.offsetHeight, o = Rt(e), a = x.support.boxSizing && "border-box" === x.css(e, "boxSizing", !1, o);
        if (0 >= i || null == i) {
            if (i = Wt(e, t, o), (0 > i || null == i) && (i = e.style[t]), Yt.test(i))return i;
            r = a && (x.support.boxSizingReliable || i === e.style[t]), i = parseFloat(i) || 0
        }
        return i + an(e, t, n || (a ? "border" : "content"), r, o) + "px"
    }

    function ln(e) {
        var t = a, n = Gt[e];
        return n || (n = un(e, t), "none" !== n && n || (Pt = (Pt || x("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(t.documentElement), t = (Pt[0].contentWindow || Pt[0].contentDocument).document, t.write("<!doctype html><html><body>"), t.close(), n = un(e, t), Pt.detach()), Gt[e] = n), n
    }

    function un(e, t) {
        var n = x(t.createElement(e)).appendTo(t.body), r = x.css(n[0], "display");
        return n.remove(), r
    }

    x.each(["height", "width"], function (e, n) {
        x.cssHooks[n] = {
            get: function (e, r, i) {
                return r ? 0 === e.offsetWidth && Xt.test(x.css(e, "display")) ? x.swap(e, Qt, function () {
                    return sn(e, n, i)
                }) : sn(e, n, i) : t
            }, set: function (e, t, r) {
                var i = r && Rt(e);
                return on(e, t, r ? an(e, n, r, x.support.boxSizing && "border-box" === x.css(e, "boxSizing", !1, i), i) : 0)
            }
        }
    }), x.support.opacity || (x.cssHooks.opacity = {
        get: function (e, t) {
            return It.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
        }, set: function (e, t) {
            var n = e.style, r = e.currentStyle, i = x.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "", o = r && r.filter || n.filter || "";
            n.zoom = 1, (t >= 1 || "" === t) && "" === x.trim(o.replace($t, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || r && !r.filter) || (n.filter = $t.test(o) ? o.replace($t, i) : o + " " + i)
        }
    }), x(function () {
        x.support.reliableMarginRight || (x.cssHooks.marginRight = {
            get: function (e, n) {
                return n ? x.swap(e, {display: "inline-block"}, Wt, [e, "marginRight"]) : t
            }
        }), !x.support.pixelPosition && x.fn.position && x.each(["top", "left"], function (e, n) {
            x.cssHooks[n] = {
                get: function (e, r) {
                    return r ? (r = Wt(e, n), Yt.test(r) ? x(e).position()[n] + "px" : r) : t
                }
            }
        })
    }), x.expr && x.expr.filters && (x.expr.filters.hidden = function (e) {
        return 0 >= e.offsetWidth && 0 >= e.offsetHeight || !x.support.reliableHiddenOffsets && "none" === (e.style && e.style.display || x.css(e, "display"))
    }, x.expr.filters.visible = function (e) {
        return !x.expr.filters.hidden(e)
    }), x.each({margin: "", padding: "", border: "Width"}, function (e, t) {
        x.cssHooks[e + t] = {
            expand: function (n) {
                var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n];
                for (; 4 > r; r++)i[e + Zt[r] + t] = o[r] || o[r - 2] || o[0];
                return i
            }
        }, Ut.test(e) || (x.cssHooks[e + t].set = on)
    });
    var cn = /%20/g, pn = /\[\]$/, fn = /\r?\n/g, dn = /^(?:submit|button|image|reset|file)$/i, hn = /^(?:input|select|textarea|keygen)/i;
    x.fn.extend({
        serialize: function () {
            return x.param(this.serializeArray())
        }, serializeArray: function () {
            return this.map(function () {
                var e = x.prop(this, "elements");
                return e ? x.makeArray(e) : this
            }).filter(function () {
                var e = this.type;
                return this.name && !x(this).is(":disabled") && hn.test(this.nodeName) && !dn.test(e) && (this.checked || !Ct.test(e))
            }).map(function (e, t) {
                var n = x(this).val();
                return null == n ? null : x.isArray(n) ? x.map(n, function (e) {
                    return {name: t.name, value: e.replace(fn, "\r\n")}
                }) : {name: t.name, value: n.replace(fn, "\r\n")}
            }).get()
        }
    }), x.param = function (e, n) {
        var r, i = [], o = function (e, t) {
            t = x.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
        };
        if (n === t && (n = x.ajaxSettings && x.ajaxSettings.traditional), x.isArray(e) || e.jquery && !x.isPlainObject(e))x.each(e, function () {
            o(this.name, this.value)
        }); else for (r in e)gn(r, e[r], n, o);
        return i.join("&").replace(cn, "+")
    };
    function gn(e, t, n, r) {
        var i;
        if (x.isArray(t))x.each(t, function (t, i) {
            n || pn.test(e) ? r(e, i) : gn(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r)
        }); else if (n || "object" !== x.type(t))r(e, t); else for (i in t)gn(e + "[" + i + "]", t[i], n, r)
    }

    x.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, t) {
        x.fn[t] = function (e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), x.fn.extend({
        hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }, bind: function (e, t, n) {
            return this.on(e, null, t, n)
        }, unbind: function (e, t) {
            return this.off(e, null, t)
        }, delegate: function (e, t, n, r) {
            return this.on(t, e, n, r)
        }, undelegate: function (e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    });
    var mn, yn, vn = x.now(), bn = /\?/, xn = /#.*$/, wn = /([?&])_=[^&]*/, Tn = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, Cn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Nn = /^(?:GET|HEAD)$/, kn = /^\/\//, En = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/, Sn = x.fn.load, An = {}, jn = {}, Dn = "*/".concat("*");
    try {
        yn = o.href
    } catch (Ln) {
        yn = a.createElement("a"), yn.href = "", yn = yn.href
    }
    mn = En.exec(yn.toLowerCase()) || [];
    function Hn(e) {
        return function (t, n) {
            "string" != typeof t && (n = t, t = "*");
            var r, i = 0, o = t.toLowerCase().match(T) || [];
            if (x.isFunction(n))while (r = o[i++])"+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }

    function qn(e, n, r, i) {
        var o = {}, a = e === jn;

        function s(l) {
            var u;
            return o[l] = !0, x.each(e[l] || [], function (e, l) {
                var c = l(n, r, i);
                return "string" != typeof c || a || o[c] ? a ? !(u = c) : t : (n.dataTypes.unshift(c), s(c), !1)
            }), u
        }

        return s(n.dataTypes[0]) || !o["*"] && s("*")
    }

    function _n(e, n) {
        var r, i, o = x.ajaxSettings.flatOptions || {};
        for (i in n)n[i] !== t && ((o[i] ? e : r || (r = {}))[i] = n[i]);
        return r && x.extend(!0, e, r), e
    }

    x.fn.load = function (e, n, r) {
        if ("string" != typeof e && Sn)return Sn.apply(this, arguments);
        var i, o, a, s = this, l = e.indexOf(" ");
        return l >= 0 && (i = e.slice(l, e.length), e = e.slice(0, l)), x.isFunction(n) ? (r = n, n = t) : n && "object" == typeof n && (a = "POST"), s.length > 0 && x.ajax({
            url: e,
            type: a,
            dataType: "html",
            data: n
        }).done(function (e) {
            o = arguments, s.html(i ? x("<div>").append(x.parseHTML(e)).find(i) : e)
        }).complete(r && function (e, t) {
            s.each(r, o || [e.responseText, t, e])
        }), this
    }, x.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
        x.fn[t] = function (e) {
            return this.on(t, e)
        }
    }), x.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: yn,
            type: "GET",
            isLocal: Cn.test(mn[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Dn,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {xml: /xml/, html: /html/, json: /json/},
            responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
            converters: {"* text": String, "text html": !0, "text json": x.parseJSON, "text xml": x.parseXML},
            flatOptions: {url: !0, context: !0}
        },
        ajaxSetup: function (e, t) {
            return t ? _n(_n(e, x.ajaxSettings), t) : _n(x.ajaxSettings, e)
        },
        ajaxPrefilter: Hn(An),
        ajaxTransport: Hn(jn),
        ajax: function (e, n) {
            "object" == typeof e && (n = e, e = t), n = n || {};
            var r, i, o, a, s, l, u, c, p = x.ajaxSetup({}, n), f = p.context || p, d = p.context && (f.nodeType || f.jquery) ? x(f) : x.event, h = x.Deferred(), g = x.Callbacks("once memory"), m = p.statusCode || {}, y = {}, v = {}, b = 0, w = "canceled", C = {
                readyState: 0,
                getResponseHeader: function (e) {
                    var t;
                    if (2 === b) {
                        if (!c) {
                            c = {};
                            while (t = Tn.exec(a))c[t[1].toLowerCase()] = t[2]
                        }
                        t = c[e.toLowerCase()]
                    }
                    return null == t ? null : t
                },
                getAllResponseHeaders: function () {
                    return 2 === b ? a : null
                },
                setRequestHeader: function (e, t) {
                    var n = e.toLowerCase();
                    return b || (e = v[n] = v[n] || e, y[e] = t), this
                },
                overrideMimeType: function (e) {
                    return b || (p.mimeType = e), this
                },
                statusCode: function (e) {
                    var t;
                    if (e)if (2 > b)for (t in e)m[t] = [m[t], e[t]]; else C.always(e[C.status]);
                    return this
                },
                abort: function (e) {
                    var t = e || w;
                    return u && u.abort(t), k(0, t), this
                }
            };
            if (h.promise(C).complete = g.add, C.success = C.done, C.error = C.fail, p.url = ((e || p.url || yn) + "").replace(xn, "").replace(kn, mn[1] + "//"), p.type = n.method || n.type || p.method || p.type, p.dataTypes = x.trim(p.dataType || "*").toLowerCase().match(T) || [""], null == p.crossDomain && (r = En.exec(p.url.toLowerCase()), p.crossDomain = !(!r || r[1] === mn[1] && r[2] === mn[2] && (r[3] || ("http:" === r[1] ? "80" : "443")) === (mn[3] || ("http:" === mn[1] ? "80" : "443")))), p.data && p.processData && "string" != typeof p.data && (p.data = x.param(p.data, p.traditional)), qn(An, p, n, C), 2 === b)return C;
            l = p.global, l && 0 === x.active++ && x.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !Nn.test(p.type), o = p.url, p.hasContent || (p.data && (o = p.url += (bn.test(o) ? "&" : "?") + p.data, delete p.data), p.cache === !1 && (p.url = wn.test(o) ? o.replace(wn, "$1_=" + vn++) : o + (bn.test(o) ? "&" : "?") + "_=" + vn++)), p.ifModified && (x.lastModified[o] && C.setRequestHeader("If-Modified-Since", x.lastModified[o]), x.etag[o] && C.setRequestHeader("If-None-Match", x.etag[o])), (p.data && p.hasContent && p.contentType !== !1 || n.contentType) && C.setRequestHeader("Content-Type", p.contentType), C.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Dn + "; q=0.01" : "") : p.accepts["*"]);
            for (i in p.headers)C.setRequestHeader(i, p.headers[i]);
            if (p.beforeSend && (p.beforeSend.call(f, C, p) === !1 || 2 === b))return C.abort();
            w = "abort";
            for (i in{success: 1, error: 1, complete: 1})C[i](p[i]);
            if (u = qn(jn, p, n, C)) {
                C.readyState = 1, l && d.trigger("ajaxSend", [C, p]), p.async && p.timeout > 0 && (s = setTimeout(function () {
                    C.abort("timeout")
                }, p.timeout));
                try {
                    b = 1, u.send(y, k)
                } catch (N) {
                    if (!(2 > b))throw N;
                    k(-1, N)
                }
            } else k(-1, "No Transport");
            function k(e, n, r, i) {
                var c, y, v, w, T, N = n;
                2 !== b && (b = 2, s && clearTimeout(s), u = t, a = i || "", C.readyState = e > 0 ? 4 : 0, c = e >= 200 && 300 > e || 304 === e, r && (w = Mn(p, C, r)), w = On(p, w, C, c), c ? (p.ifModified && (T = C.getResponseHeader("Last-Modified"), T && (x.lastModified[o] = T), T = C.getResponseHeader("etag"), T && (x.etag[o] = T)), 204 === e || "HEAD" === p.type ? N = "nocontent" : 304 === e ? N = "notmodified" : (N = w.state, y = w.data, v = w.error, c = !v)) : (v = N, (e || !N) && (N = "error", 0 > e && (e = 0))), C.status = e, C.statusText = (n || N) + "", c ? h.resolveWith(f, [y, N, C]) : h.rejectWith(f, [C, N, v]), C.statusCode(m), m = t, l && d.trigger(c ? "ajaxSuccess" : "ajaxError", [C, p, c ? y : v]), g.fireWith(f, [C, N]), l && (d.trigger("ajaxComplete", [C, p]), --x.active || x.event.trigger("ajaxStop")))
            }

            return C
        },
        getJSON: function (e, t, n) {
            return x.get(e, t, n, "json")
        },
        getScript: function (e, n) {
            return x.get(e, t, n, "script")
        }
    }), x.each(["get", "post"], function (e, n) {
        x[n] = function (e, r, i, o) {
            return x.isFunction(r) && (o = o || i, i = r, r = t), x.ajax({
                url: e,
                type: n,
                dataType: o,
                data: r,
                success: i
            })
        }
    });
    function Mn(e, n, r) {
        var i, o, a, s, l = e.contents, u = e.dataTypes;
        while ("*" === u[0])u.shift(), o === t && (o = e.mimeType || n.getResponseHeader("Content-Type"));
        if (o)for (s in l)if (l[s] && l[s].test(o)) {
            u.unshift(s);
            break
        }
        if (u[0]in r)a = u[0]; else {
            for (s in r) {
                if (!u[0] || e.converters[s + " " + u[0]]) {
                    a = s;
                    break
                }
                i || (i = s)
            }
            a = a || i
        }
        return a ? (a !== u[0] && u.unshift(a), r[a]) : t
    }

    function On(e, t, n, r) {
        var i, o, a, s, l, u = {}, c = e.dataTypes.slice();
        if (c[1])for (a in e.converters)u[a.toLowerCase()] = e.converters[a];
        o = c.shift();
        while (o)if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = c.shift())if ("*" === o)o = l; else if ("*" !== l && l !== o) {
            if (a = u[l + " " + o] || u["* " + o], !a)for (i in u)if (s = i.split(" "), s[1] === o && (a = u[l + " " + s[0]] || u["* " + s[0]])) {
                a === !0 ? a = u[i] : u[i] !== !0 && (o = s[0], c.unshift(s[1]));
                break
            }
            if (a !== !0)if (a && e["throws"])t = a(t); else try {
                t = a(t)
            } catch (p) {
                return {state: "parsererror", error: a ? p : "No conversion from " + l + " to " + o}
            }
        }
        return {state: "success", data: t}
    }

    x.ajaxSetup({
        accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
        contents: {script: /(?:java|ecma)script/},
        converters: {
            "text script": function (e) {
                return x.globalEval(e), e
            }
        }
    }), x.ajaxPrefilter("script", function (e) {
        e.cache === t && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
    }), x.ajaxTransport("script", function (e) {
        if (e.crossDomain) {
            var n, r = a.head || x("head")[0] || a.documentElement;
            return {
                send: function (t, i) {
                    n = a.createElement("script"), n.async = !0, e.scriptCharset && (n.charset = e.scriptCharset), n.src = e.url, n.onload = n.onreadystatechange = function (e, t) {
                        (t || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null, n.parentNode && n.parentNode.removeChild(n), n = null, t || i(200, "success"))
                    }, r.insertBefore(n, r.firstChild)
                }, abort: function () {
                    n && n.onload(t, !0)
                }
            }
        }
    });
    var Fn = [], Bn = /(=)\?(?=&|$)|\?\?/;
    x.ajaxSetup({
        jsonp: "callback", jsonpCallback: function () {
            var e = Fn.pop() || x.expando + "_" + vn++;
            return this[e] = !0, e
        }
    }), x.ajaxPrefilter("json jsonp", function (n, r, i) {
        var o, a, s, l = n.jsonp !== !1 && (Bn.test(n.url) ? "url" : "string" == typeof n.data && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Bn.test(n.data) && "data");
        return l || "jsonp" === n.dataTypes[0] ? (o = n.jsonpCallback = x.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, l ? n[l] = n[l].replace(Bn, "$1" + o) : n.jsonp !== !1 && (n.url += (bn.test(n.url) ? "&" : "?") + n.jsonp + "=" + o), n.converters["script json"] = function () {
            return s || x.error(o + " was not called"), s[0]
        }, n.dataTypes[0] = "json", a = e[o], e[o] = function () {
            s = arguments
        }, i.always(function () {
            e[o] = a, n[o] && (n.jsonpCallback = r.jsonpCallback, Fn.push(o)), s && x.isFunction(a) && a(s[0]), s = a = t
        }), "script") : t
    });
    var Pn, Rn, Wn = 0, $n = e.ActiveXObject && function () {
            var e;
            for (e in Pn)Pn[e](t, !0)
        };

    function In() {
        try {
            return new e.XMLHttpRequest
        } catch (t) {
        }
    }

    function zn() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP")
        } catch (t) {
        }
    }

    x.ajaxSettings.xhr = e.ActiveXObject ? function () {
        return !this.isLocal && In() || zn()
    } : In, Rn = x.ajaxSettings.xhr(), x.support.cors = !!Rn && "withCredentials"in Rn, Rn = x.support.ajax = !!Rn, Rn && x.ajaxTransport(function (n) {
        if (!n.crossDomain || x.support.cors) {
            var r;
            return {
                send: function (i, o) {
                    var a, s, l = n.xhr();
                    if (n.username ? l.open(n.type, n.url, n.async, n.username, n.password) : l.open(n.type, n.url, n.async), n.xhrFields)for (s in n.xhrFields)l[s] = n.xhrFields[s];
                    n.mimeType && l.overrideMimeType && l.overrideMimeType(n.mimeType), n.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (s in i)l.setRequestHeader(s, i[s])
                    } catch (u) {
                    }
                    l.send(n.hasContent && n.data || null), r = function (e, i) {
                        var s, u, c, p;
                        try {
                            if (r && (i || 4 === l.readyState))if (r = t, a && (l.onreadystatechange = x.noop, $n && delete Pn[a]), i)4 !== l.readyState && l.abort(); else {
                                p = {}, s = l.status, u = l.getAllResponseHeaders(), "string" == typeof l.responseText && (p.text = l.responseText);
                                try {
                                    c = l.statusText
                                } catch (f) {
                                    c = ""
                                }
                                s || !n.isLocal || n.crossDomain ? 1223 === s && (s = 204) : s = p.text ? 200 : 404
                            }
                        } catch (d) {
                            i || o(-1, d)
                        }
                        p && o(s, c, p, u)
                    }, n.async ? 4 === l.readyState ? setTimeout(r) : (a = ++Wn, $n && (Pn || (Pn = {}, x(e).unload($n)), Pn[a] = r), l.onreadystatechange = r) : r()
                }, abort: function () {
                    r && r(t, !0)
                }
            }
        }
    });
    var Xn, Un, Vn = /^(?:toggle|show|hide)$/, Yn = RegExp("^(?:([+-])=|)(" + w + ")([a-z%]*)$", "i"), Jn = /queueHooks$/, Gn = [nr], Qn = {
        "*": [function (e, t) {
            var n = this.createTween(e, t), r = n.cur(), i = Yn.exec(t), o = i && i[3] || (x.cssNumber[e] ? "" : "px"), a = (x.cssNumber[e] || "px" !== o && +r) && Yn.exec(x.css(n.elem, e)), s = 1, l = 20;
            if (a && a[3] !== o) {
                o = o || a[3], i = i || [], a = +r || 1;
                do s = s || ".5", a /= s, x.style(n.elem, e, a + o); while (s !== (s = n.cur() / r) && 1 !== s && --l)
            }
            return i && (a = n.start = +a || +r || 0, n.unit = o, n.end = i[1] ? a + (i[1] + 1) * i[2] : +i[2]), n
        }]
    };

    function Kn() {
        return setTimeout(function () {
            Xn = t
        }), Xn = x.now()
    }

    function Zn(e, t, n) {
        var r, i = (Qn[t] || []).concat(Qn["*"]), o = 0, a = i.length;
        for (; a > o; o++)if (r = i[o].call(n, t, e))return r
    }

    function er(e, t, n) {
        var r, i, o = 0, a = Gn.length, s = x.Deferred().always(function () {
            delete l.elem
        }), l = function () {
            if (i)return !1;
            var t = Xn || Kn(), n = Math.max(0, u.startTime + u.duration - t), r = n / u.duration || 0, o = 1 - r, a = 0, l = u.tweens.length;
            for (; l > a; a++)u.tweens[a].run(o);
            return s.notifyWith(e, [u, o, n]), 1 > o && l ? n : (s.resolveWith(e, [u]), !1)
        }, u = s.promise({
            elem: e,
            props: x.extend({}, t),
            opts: x.extend(!0, {specialEasing: {}}, n),
            originalProperties: t,
            originalOptions: n,
            startTime: Xn || Kn(),
            duration: n.duration,
            tweens: [],
            createTween: function (t, n) {
                var r = x.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
                return u.tweens.push(r), r
            },
            stop: function (t) {
                var n = 0, r = t ? u.tweens.length : 0;
                if (i)return this;
                for (i = !0; r > n; n++)u.tweens[n].run(1);
                return t ? s.resolveWith(e, [u, t]) : s.rejectWith(e, [u, t]), this
            }
        }), c = u.props;
        for (tr(c, u.opts.specialEasing); a > o; o++)if (r = Gn[o].call(u, e, c, u.opts))return r;
        return x.map(c, Zn, u), x.isFunction(u.opts.start) && u.opts.start.call(e, u), x.fx.timer(x.extend(l, {
            elem: e,
            anim: u,
            queue: u.opts.queue
        })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
    }

    function tr(e, t) {
        var n, r, i, o, a;
        for (n in e)if (r = x.camelCase(n), i = t[r], o = e[n], x.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), a = x.cssHooks[r], a && "expand"in a) {
            o = a.expand(o), delete e[r];
            for (n in o)n in e || (e[n] = o[n], t[n] = i)
        } else t[r] = i
    }

    x.Animation = x.extend(er, {
        tweener: function (e, t) {
            x.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
            var n, r = 0, i = e.length;
            for (; i > r; r++)n = e[r], Qn[n] = Qn[n] || [], Qn[n].unshift(t)
        }, prefilter: function (e, t) {
            t ? Gn.unshift(e) : Gn.push(e)
        }
    });
    function nr(e, t, n) {
        var r, i, o, a, s, l, u = this, c = {}, p = e.style, f = e.nodeType && nn(e), d = x._data(e, "fxshow");
        n.queue || (s = x._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, l = s.empty.fire, s.empty.fire = function () {
            s.unqueued || l()
        }), s.unqueued++, u.always(function () {
            u.always(function () {
                s.unqueued--, x.queue(e, "fx").length || s.empty.fire()
            })
        })), 1 === e.nodeType && ("height"in t || "width"in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], "inline" === x.css(e, "display") && "none" === x.css(e, "float") && (x.support.inlineBlockNeedsLayout && "inline" !== ln(e.nodeName) ? p.zoom = 1 : p.display = "inline-block")), n.overflow && (p.overflow = "hidden", x.support.shrinkWrapBlocks || u.always(function () {
            p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
        }));
        for (r in t)if (i = t[r], Vn.exec(i)) {
            if (delete t[r], o = o || "toggle" === i, i === (f ? "hide" : "show"))continue;
            c[r] = d && d[r] || x.style(e, r)
        }
        if (!x.isEmptyObject(c)) {
            d ? "hidden"in d && (f = d.hidden) : d = x._data(e, "fxshow", {}), o && (d.hidden = !f), f ? x(e).show() : u.done(function () {
                x(e).hide()
            }), u.done(function () {
                var t;
                x._removeData(e, "fxshow");
                for (t in c)x.style(e, t, c[t])
            });
            for (r in c)a = Zn(f ? d[r] : 0, r, u), r in d || (d[r] = a.start, f && (a.end = a.start, a.start = "width" === r || "height" === r ? 1 : 0))
        }
    }

    function rr(e, t, n, r, i) {
        return new rr.prototype.init(e, t, n, r, i)
    }

    x.Tween = rr, rr.prototype = {
        constructor: rr, init: function (e, t, n, r, i, o) {
            this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (x.cssNumber[n] ? "" : "px")
        }, cur: function () {
            var e = rr.propHooks[this.prop];
            return e && e.get ? e.get(this) : rr.propHooks._default.get(this)
        }, run: function (e) {
            var t, n = rr.propHooks[this.prop];
            return this.pos = t = this.options.duration ? x.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : rr.propHooks._default.set(this), this
        }
    }, rr.prototype.init.prototype = rr.prototype, rr.propHooks = {
        _default: {
            get: function (e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = x.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
            }, set: function (e) {
                x.fx.step[e.prop] ? x.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[x.cssProps[e.prop]] || x.cssHooks[e.prop]) ? x.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    }, rr.propHooks.scrollTop = rr.propHooks.scrollLeft = {
        set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, x.each(["toggle", "show", "hide"], function (e, t) {
        var n = x.fn[t];
        x.fn[t] = function (e, r, i) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ir(t, !0), e, r, i)
        }
    }), x.fn.extend({
        fadeTo: function (e, t, n, r) {
            return this.filter(nn).css("opacity", 0).show().end().animate({opacity: t}, e, n, r)
        }, animate: function (e, t, n, r) {
            var i = x.isEmptyObject(e), o = x.speed(t, n, r), a = function () {
                var t = er(this, x.extend({}, e), o);
                (i || x._data(this, "finish")) && t.stop(!0)
            };
            return a.finish = a, i || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
        }, stop: function (e, n, r) {
            var i = function (e) {
                var t = e.stop;
                delete e.stop, t(r)
            };
            return "string" != typeof e && (r = n, n = e, e = t), n && e !== !1 && this.queue(e || "fx", []), this.each(function () {
                var t = !0, n = null != e && e + "queueHooks", o = x.timers, a = x._data(this);
                if (n)a[n] && a[n].stop && i(a[n]); else for (n in a)a[n] && a[n].stop && Jn.test(n) && i(a[n]);
                for (n = o.length; n--;)o[n].elem !== this || null != e && o[n].queue !== e || (o[n].anim.stop(r), t = !1, o.splice(n, 1));
                (t || !r) && x.dequeue(this, e)
            })
        }, finish: function (e) {
            return e !== !1 && (e = e || "fx"), this.each(function () {
                var t, n = x._data(this), r = n[e + "queue"], i = n[e + "queueHooks"], o = x.timers, a = r ? r.length : 0;
                for (n.finish = !0, x.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;)o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                for (t = 0; a > t; t++)r[t] && r[t].finish && r[t].finish.call(this);
                delete n.finish
            })
        }
    });
    function ir(e, t) {
        var n, r = {height: e}, i = 0;
        for (t = t ? 1 : 0; 4 > i; i += 2 - t)n = Zt[i], r["margin" + n] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e), r
    }

    x.each({
        slideDown: ir("show"),
        slideUp: ir("hide"),
        slideToggle: ir("toggle"),
        fadeIn: {opacity: "show"},
        fadeOut: {opacity: "hide"},
        fadeToggle: {opacity: "toggle"}
    }, function (e, t) {
        x.fn[e] = function (e, n, r) {
            return this.animate(t, e, n, r)
        }
    }), x.speed = function (e, t, n) {
        var r = e && "object" == typeof e ? x.extend({}, e) : {
            complete: n || !n && t || x.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !x.isFunction(t) && t
        };
        return r.duration = x.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in x.fx.speeds ? x.fx.speeds[r.duration] : x.fx.speeds._default, (null == r.queue || r.queue === !0) && (r.queue = "fx"), r.old = r.complete, r.complete = function () {
            x.isFunction(r.old) && r.old.call(this), r.queue && x.dequeue(this, r.queue)
        }, r
    }, x.easing = {
        linear: function (e) {
            return e
        }, swing: function (e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }
    }, x.timers = [], x.fx = rr.prototype.init, x.fx.tick = function () {
        var e, n = x.timers, r = 0;
        for (Xn = x.now(); n.length > r; r++)e = n[r], e() || n[r] !== e || n.splice(r--, 1);
        n.length || x.fx.stop(), Xn = t
    }, x.fx.timer = function (e) {
        e() && x.timers.push(e) && x.fx.start()
    }, x.fx.interval = 13, x.fx.start = function () {
        Un || (Un = setInterval(x.fx.tick, x.fx.interval))
    }, x.fx.stop = function () {
        clearInterval(Un), Un = null
    }, x.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, x.fx.step = {}, x.expr && x.expr.filters && (x.expr.filters.animated = function (e) {
        return x.grep(x.timers, function (t) {
            return e === t.elem
        }).length
    }), x.fn.offset = function (e) {
        if (arguments.length)return e === t ? this : this.each(function (t) {
            x.offset.setOffset(this, e, t)
        });
        var n, r, o = {top: 0, left: 0}, a = this[0], s = a && a.ownerDocument;
        if (s)return n = s.documentElement, x.contains(n, a) ? (typeof a.getBoundingClientRect !== i && (o = a.getBoundingClientRect()), r = or(s), {
            top: o.top + (r.pageYOffset || n.scrollTop) - (n.clientTop || 0),
            left: o.left + (r.pageXOffset || n.scrollLeft) - (n.clientLeft || 0)
        }) : o
    }, x.offset = {
        setOffset: function (e, t, n) {
            var r = x.css(e, "position");
            "static" === r && (e.style.position = "relative");
            var i = x(e), o = i.offset(), a = x.css(e, "top"), s = x.css(e, "left"), l = ("absolute" === r || "fixed" === r) && x.inArray("auto", [a, s]) > -1, u = {}, c = {}, p, f;
            l ? (c = i.position(), p = c.top, f = c.left) : (p = parseFloat(a) || 0, f = parseFloat(s) || 0), x.isFunction(t) && (t = t.call(e, n, o)), null != t.top && (u.top = t.top - o.top + p), null != t.left && (u.left = t.left - o.left + f), "using"in t ? t.using.call(e, u) : i.css(u)
        }
    }, x.fn.extend({
        position: function () {
            if (this[0]) {
                var e, t, n = {top: 0, left: 0}, r = this[0];
                return "fixed" === x.css(r, "position") ? t = r.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), x.nodeName(e[0], "html") || (n = e.offset()), n.top += x.css(e[0], "borderTopWidth", !0), n.left += x.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - n.top - x.css(r, "marginTop", !0),
                    left: t.left - n.left - x.css(r, "marginLeft", !0)
                }
            }
        }, offsetParent: function () {
            return this.map(function () {
                var e = this.offsetParent || s;
                while (e && !x.nodeName(e, "html") && "static" === x.css(e, "position"))e = e.offsetParent;
                return e || s
            })
        }
    }), x.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (e, n) {
        var r = /Y/.test(n);
        x.fn[e] = function (i) {
            return x.access(this, function (e, i, o) {
                var a = or(e);
                return o === t ? a ? n in a ? a[n] : a.document.documentElement[i] : e[i] : (a ? a.scrollTo(r ? x(a).scrollLeft() : o, r ? o : x(a).scrollTop()) : e[i] = o, t)
            }, e, i, arguments.length, null)
        }
    });
    function or(e) {
        return x.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1
    }

    x.each({Height: "height", Width: "width"}, function (e, n) {
        x.each({padding: "inner" + e, content: n, "": "outer" + e}, function (r, i) {
            x.fn[i] = function (i, o) {
                var a = arguments.length && (r || "boolean" != typeof i), s = r || (i === !0 || o === !0 ? "margin" : "border");
                return x.access(this, function (n, r, i) {
                    var o;
                    return x.isWindow(n) ? n.document.documentElement["client" + e] : 9 === n.nodeType ? (o = n.documentElement, Math.max(n.body["scroll" + e], o["scroll" + e], n.body["offset" + e], o["offset" + e], o["client" + e])) : i === t ? x.css(n, r, s) : x.style(n, r, i, s)
                }, n, a ? i : t, a, null)
            }
        })
    }), x.fn.size = function () {
        return this.length
    }, x.fn.andSelf = x.fn.addBack, "object" == typeof module && module && "object" == typeof module.exports ? module.exports = x : (e.jQuery = e.$ = x, "function" == typeof define && define.amd && define("jquery", [], function () {
        return x
    }))
})(window);


window.google = window.google || {};
google.maps = google.maps || {};
(function() {
  
  function getScript(src) {
    document.write('<' + 'script src="' + src + '"><' + '/script>');
  }
  
  var modules = google.maps.modules = {};
  google.maps.__gjsload__ = function(name, text) {
    modules[name] = text;
  };
  
  google.maps.Load = function(apiLoad) {
    delete google.maps.Load;
    apiLoad([0.009999999776482582,[[["https://mts0.googleapis.com/maps/vt?lyrs=m@338000000\u0026src=api\u0026hl=en-US\u0026","https://mts1.googleapis.com/maps/vt?lyrs=m@338000000\u0026src=api\u0026hl=en-US\u0026"],null,null,null,null,"m@338000000",["https://mts0.google.com/maps/vt?lyrs=m@338000000\u0026src=api\u0026hl=en-US\u0026","https://mts1.google.com/maps/vt?lyrs=m@338000000\u0026src=api\u0026hl=en-US\u0026"]],[["https://khms0.googleapis.com/kh?v=196\u0026hl=en-US\u0026","https://khms1.googleapis.com/kh?v=196\u0026hl=en-US\u0026"],null,null,null,1,"196",["https://khms0.google.com/kh?v=196\u0026hl=en-US\u0026","https://khms1.google.com/kh?v=196\u0026hl=en-US\u0026"]],null,[["https://mts0.googleapis.com/maps/vt?lyrs=t@132,r@338000000\u0026src=api\u0026hl=en-US\u0026","https://mts1.googleapis.com/maps/vt?lyrs=t@132,r@338000000\u0026src=api\u0026hl=en-US\u0026"],null,null,null,null,"t@132,r@338000000",["https://mts0.google.com/maps/vt?lyrs=t@132,r@338000000\u0026src=api\u0026hl=en-US\u0026","https://mts1.google.com/maps/vt?lyrs=t@132,r@338000000\u0026src=api\u0026hl=en-US\u0026"]],null,null,[["https://cbks0.googleapis.com/cbk?","https://cbks1.googleapis.com/cbk?"]],[["https://khms0.googleapis.com/kh?v=96\u0026hl=en-US\u0026","https://khms1.googleapis.com/kh?v=96\u0026hl=en-US\u0026"],null,null,null,null,"96",["https://khms0.google.com/kh?v=96\u0026hl=en-US\u0026","https://khms1.google.com/kh?v=96\u0026hl=en-US\u0026"]],[["https://mts0.googleapis.com/mapslt?hl=en-US\u0026","https://mts1.googleapis.com/mapslt?hl=en-US\u0026"]],[["https://mts0.googleapis.com/mapslt/ft?hl=en-US\u0026","https://mts1.googleapis.com/mapslt/ft?hl=en-US\u0026"]],[["https://mts0.googleapis.com/maps/vt?hl=en-US\u0026","https://mts1.googleapis.com/maps/vt?hl=en-US\u0026"]],[["https://mts0.googleapis.com/mapslt/loom?hl=en-US\u0026","https://mts1.googleapis.com/mapslt/loom?hl=en-US\u0026"]],[["https://mts0.googleapis.com/mapslt?hl=en-US\u0026","https://mts1.googleapis.com/mapslt?hl=en-US\u0026"]],[["https://mts0.googleapis.com/mapslt/ft?hl=en-US\u0026","https://mts1.googleapis.com/mapslt/ft?hl=en-US\u0026"]],[["https://mts0.googleapis.com/mapslt/loom?hl=en-US\u0026","https://mts1.googleapis.com/mapslt/loom?hl=en-US\u0026"]]],["en-US","US",null,0,null,null,"https://maps.gstatic.com/mapfiles/","https://csi.gstatic.com","https://maps.googleapis.com","https://maps.googleapis.com",null,"https://maps.google.com","https://gg.google.com","https://maps.gstatic.com/maps-api-v3/api/images/","https://www.google.com/maps",0,"https://www.google.com"],["https://maps.googleapis.com/maps-api-v3/api/js/24/0","3.24.0"],[2780094395],1,null,null,null,null,null,"",null,null,1,"https://khms.googleapis.com/mz?v=196\u0026","AIzaSyAwk6wzMEnz2z58YepPrxwwcCf_tOd20lg","https://earthbuilder.googleapis.com","https://earthbuilder.googleapis.com",null,"https://mts.googleapis.com/maps/vt/icon",[["https://maps.googleapis.com/maps/vt"],["https://maps.googleapis.com/maps/vt"],null,null,null,null,null,null,null,null,null,null,["https://www.google.com/maps/vt"],"/maps/vt",338000000,132],2,500,[null,"https://g0.gstatic.com/landmark/tour","https://g0.gstatic.com/landmark/config",null,"https://www.google.com/maps/preview/log204","","https://static.panoramio.com.storage.googleapis.com/photos/",["https://geo0.ggpht.com/cbk","https://geo1.ggpht.com/cbk","https://geo2.ggpht.com/cbk","https://geo3.ggpht.com/cbk"],"https://maps.googleapis.com/maps/api/js/GeoPhotoService.GetMetadata","https://maps.googleapis.com/maps/api/js/GeoPhotoService.SingleImageSearch",["https://lh3.ggpht.com/","https://lh4.ggpht.com/","https://lh5.ggpht.com/","https://lh6.ggpht.com/"]],["https://www.google.com/maps/api/js/master?pb=!1m2!1u24!2s0!2sen-US!3sUS!4s24/0","https://www.google.com/maps/api/js/widget?pb=!1m2!1u24!2s0!2sen-US"],null,0,null,"/maps/api/js/ApplicationService.GetEntityDetails",0,null,null,[null,null,null,null,null,null,null,null,null,[0,0],[null,null,null,null,null,null,null,null,0,0,null,null,null,"U"],null,null],null,[],["24.0"]], loadScriptTime);
  };
  var loadScriptTime = (new Date).getTime();
})();
// inlined
(function(_){'use strict';var Da,Ea,Qa,$a,fb,gb,hb,ib,nb,ob,rb,ub,qb,vb,wb,Ab,Hb,Lb,Qb,Xb,$b,cc,fc,hc,jc,lc,gc,ic,oc,rc,sc,vc,Kc,Lc,Mc,Nc,Oc,Pc,Tc,Vc,Xc,Zc,Yc,bd,gd,hd,md,td,wd,xd,Kd,Ld,Nd,Qd,Ud,Td,Vd,$d,ae,de,he,je,ke,le,oe,qe,re,se,te,ue,ve,we,xe,Ae,Je,Ke,Le,Me,Ne,Ue,Ve,We,Ze,bf,ye,hf,kf,nf,qf,Bf,Cf,Df,Ef,Ff,Gf,If,Jf,Kf,Pf,Rf,$f,ag,fg,ig,jg,ng,qg,rg,yg,zg,Cg,Dg,Eg,Fg,Gg,Aa,Ba;_.aa="ERROR";_.ba="INVALID_REQUEST";_.ca="MAX_DIMENSIONS_EXCEEDED";_.da="MAX_ELEMENTS_EXCEEDED";_.fa="MAX_WAYPOINTS_EXCEEDED";_.ga="NOT_FOUND";
_.ha="OK";_.ia="OVER_QUERY_LIMIT";_.ja="REQUEST_DENIED";_.ka="UNKNOWN_ERROR";_.la="ZERO_RESULTS";_.ma=function(){return function(a){return a}};_.k=function(){return function(){}};_.na=function(a){return function(b){this[a]=b}};_.m=function(a){return function(){return this[a]}};_.pa=function(a){return function(){return a}};_.ra=function(a){return function(){return _.qa[a].apply(this,arguments)}};_.sa=function(a){return void 0!==a};_.ta=_.k();_.ua=function(a){a.Nc=function(){return a.Nb?a.Nb:a.Nb=new a}};
_.va=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b};_.wa=function(a){var b=_.va(a);return"array"==b||"object"==b&&"number"==typeof a.length};_.xa=function(a){return"string"==typeof a};_.ya=function(a){return"number"==typeof a};_.za=function(a){var b=typeof a;return"object"==b&&null!=a||"function"==b};_.Ca=function(a){return a[Aa]||(a[Aa]=++Ba)};Da=function(a,b,c){return a.call.apply(a.bind,arguments)};
Ea=function(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}};_.u=function(a,b,c){_.u=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Da:Ea;return _.u.apply(null,arguments)};_.Fa=function(){return+new Date};
_.v=function(a,b){function c(){}c.prototype=b.prototype;a.rd=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.ur=function(a,c,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[c].apply(a,g)}};_.w=function(a){return a?a.length:0};_.Ga=function(a,b){return function(c){return b(a(c))}};_.Ia=function(a,b){_.Ha(b,function(c){a[c]=b[c]})};_.Ja=function(a){for(var b in a)return!1;return!0};
_.Ka=function(a,b,c){null!=b&&(a=Math.max(a,b));null!=c&&(a=Math.min(a,c));return a};_.La=function(a,b,c){c=c-b;return((a-b)%c+c)%c+b};_.Ma=function(a,b,c){return Math.abs(a-b)<=(c||1E-9)};_.Na=function(a,b){for(var c=[],d=_.w(a),e=0;e<d;++e)c.push(b(a[e],e));return c};_.Pa=function(a,b){for(var c=_.Oa(void 0,_.w(b)),d=_.Oa(void 0,0);d<c;++d)a.push(b[d])};Qa=function(a){return null==a};_.E=function(a){return"undefined"!=typeof a};_.F=function(a){return"number"==typeof a};
_.Ra=function(a){return"object"==typeof a};_.Oa=function(a,b){return null==a?b:a};_.Sa=function(a){return"string"==typeof a};_.Ua=function(a){return a===!!a};_.G=function(a,b){for(var c=0,d=_.w(a);c<d;++c)b(a[c],c)};_.Ha=function(a,b){for(var c in a)b(c,a[c])};_.Wa=function(a,b,c){var d=_.Va(arguments,2);return function(){return b.apply(a,d)}};_.Va=function(a,b,c){return Function.prototype.call.apply(Array.prototype.slice,arguments)};
_.Xa=function(a){return null!=a&&"object"==typeof a&&"number"==typeof a.length};_.Za=function(a){return function(){var b=this,c=arguments;_.Ya(function(){a.apply(b,c)})}};_.Ya=function(a){return window.setTimeout(a,0)};$a=function(a,b){if(Object.prototype.hasOwnProperty.call(a,b))return a[b]};_.ab=function(a){window.console&&window.console.error&&window.console.error(a)};_.db=function(a){a=a||window.event;_.bb(a);_.cb(a)};_.bb=function(a){a.cancelBubble=!0;a.stopPropagation&&a.stopPropagation()};
_.cb=function(a){a.preventDefault&&_.E(a.defaultPrevented)?a.preventDefault():a.returnValue=!1};_.eb=function(a){a.handled=!0;_.E(a.bubbles)||(a.returnValue="handled")};fb=function(a,b){a.__e3_||(a.__e3_={});var c=a.__e3_;c[b]||(c[b]={});return c[b]};gb=function(a,b){var c,d=a.__e3_||{};if(b)c=d[b]||{};else{c={};for(var e in d)_.Ia(c,d[e])}return c};hb=function(a,b){return function(c){return b.call(a,c,this)}};
ib=function(a,b,c){return function(d){var e=[b,a];_.Pa(e,arguments);_.I.trigger.apply(this,e);c&&_.eb.apply(null,arguments)}};nb=function(a,b,c,d){this.Nb=a;this.R=b;this.j=c;this.S=null;this.U=d;this.id=++kb;fb(a,b)[this.id]=this;lb&&"tagName"in a&&(mb[this.id]=this)};
ob=function(a){return a.S=function(b){b||(b=window.event);if(b&&!b.target)try{b.target=b.srcElement}catch(d){}var c;c=a.j.apply(a.Nb,[b]);return b&&"click"==b.type&&(b=b.srcElement)&&"A"==b.tagName&&"javascript:void(0)"==b.href?!1:c}};_.pb=function(a){return""+(_.za(a)?_.Ca(a):a)};_.J=_.k();rb=function(a,b){var c=b+"_changed";if(a[c])a[c]();else a.changed(b);var c=qb(a,b),d;for(d in c){var e=c[d];rb(e.Qd,e.kc)}_.I.trigger(a,b.toLowerCase()+"_changed")};
_.tb=function(a){return sb[a]||(sb[a]=a.substr(0,1).toUpperCase()+a.substr(1))};ub=function(a){a.gm_accessors_||(a.gm_accessors_={});return a.gm_accessors_};qb=function(a,b){a.gm_bindings_||(a.gm_bindings_={});a.gm_bindings_.hasOwnProperty(b)||(a.gm_bindings_[b]={});return a.gm_bindings_[b]};vb=_.k();wb=function(a){this.message=a;this.name="InvalidValueError";this.stack=Error().stack};_.xb=function(a,b){var c="";if(null!=b){if(!(b instanceof wb))return b;c=": "+b.message}return new wb(a+c)};
_.yb=function(a){if(!(a instanceof wb))throw a;_.ab(a.name+": "+a.message)};_.zb=function(a,b){return function(c){if(!c||!_.Ra(c))throw _.xb("not an Object");var d={},e;for(e in c)if(d[e]=c[e],!b&&!a[e])throw _.xb("unknown property "+e);for(e in a)try{var f=a[e](d[e]);if(_.E(f)||Object.prototype.hasOwnProperty.call(c,e))d[e]=a[e](d[e])}catch(g){throw _.xb("in property "+e,g);}return d}};Ab=function(a){try{return!!a.cloneNode}catch(b){return!1}};
_.Bb=function(a,b,c){return c?function(c){if(c instanceof a)return c;try{return new a(c)}catch(e){throw _.xb("when calling new "+b,e);}}:function(c){if(c instanceof a)return c;throw _.xb("not an instance of "+b);}};_.Cb=function(a){return function(b){for(var c in a)if(a[c]==b)return b;throw _.xb(b);}};_.Db=function(a){return function(b){if(!_.Xa(b))throw _.xb("not an Array");return _.Na(b,function(b,d){try{return a(b)}catch(e){throw _.xb("at index "+d,e);}})}};
_.Eb=function(a,b){return function(c){if(a(c))return c;throw _.xb(b||""+c);}};_.Fb=function(a){var b=arguments;return function(a){for(var d=[],e=0,f=b.length;e<f;++e){var g=b[e];try{(g.Vh||g)(a)}catch(h){if(!(h instanceof wb))throw h;d.push(h.message);continue}return(g.then||g)(a)}throw _.xb(d.join("; and "));}};_.Gb=function(a){return function(b){return null==b?b:a(b)}};Hb=function(a){return function(b){if(b&&null!=b[a])return b;throw _.xb("no "+a+" property");}};
_.Ib=function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")};_.Kb=function(){return-1!=_.Jb.toLowerCase().indexOf("webkit")};
_.Mb=function(a,b){for(var c=0,d=_.Ib(String(a)).split("."),e=_.Ib(String(b)).split("."),f=Math.max(d.length,e.length),g=0;0==c&&g<f;g++){var h=d[g]||"",l=e[g]||"",n=/(\d*)(\D*)/g,p=/(\d*)(\D*)/g;do{var q=n.exec(h)||["","",""],r=p.exec(l)||["","",""];if(0==q[0].length&&0==r[0].length)break;c=Lb(0==q[1].length?0:(0,window.parseInt)(q[1],10),0==r[1].length?0:(0,window.parseInt)(r[1],10))||Lb(0==q[2].length,0==r[2].length)||Lb(q[2],r[2])}while(0==c)}return c};Lb=function(a,b){return a<b?-1:a>b?1:0};
_.Nb=function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;if(_.xa(a))return _.xa(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1};_.Ob=function(a,b,c){for(var d=a.length,e=_.xa(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)};Qb=function(a,b){for(var c=a.length,d=_.xa(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a))return e;return-1};_.Sb=function(a,b){var c=_.Nb(a,b),d;(d=0<=c)&&_.Rb(a,c);return d};
_.Rb=function(a,b){Array.prototype.splice.call(a,b,1)};_.K=function(a){return a*Math.PI/180};_.Tb=function(a){return 180*a/Math.PI};_.L=function(a,b,c){if(a&&(a.lat||a.lng))try{Ub(a),b=a.lng,a=a.lat,c=!1}catch(d){_.yb(d)}a-=0;b-=0;c||(a=_.Ka(a,-90,90),180!=b&&(b=_.La(b,-180,180)));this.lat=function(){return a};this.lng=function(){return b}};_.Vb=function(a){return _.K(a.lat())};_.Wb=function(a){return _.K(a.lng())};Xb=function(a,b){var c=Math.pow(10,b);return Math.round(a*c)/c};
_.Yb=function(a){try{if(a instanceof _.L)return a;a=Ub(a);return new _.L(a.lat,a.lng)}catch(b){throw _.xb("not a LatLng or LatLngLiteral",b);}};_.Zb=function(a){this.j=_.Yb(a)};$b=function(a){if(a instanceof vb)return a;try{return new _.Zb(_.Yb(a))}catch(b){}throw _.xb("not a Geometry or LatLng or LatLngLiteral object");};_.ac=function(a,b){if(a)return function(){--a||b()};b();return _.ta};
_.bc=function(a,b,c){var d=a.getElementsByTagName("head")[0];a=a.createElement("script");a.type="text/javascript";a.charset="UTF-8";a.src=b;c&&(a.onerror=c);d.appendChild(a);return a};cc=function(a){for(var b="",c=0,d=arguments.length;c<d;++c){var e=arguments[c];e.length&&"/"==e[0]?b=e:(b&&"/"!=b[b.length-1]&&(b+="/"),b+=e)}return b};fc=function(a){this.S=window.document;this.j={};this.R=a};hc=function(){this.U={};this.R={};this.V={};this.j={};this.S=new gc};
jc=function(a,b){a.U[b]||(a.U[b]=!0,ic(a.S,function(c){for(var d=c.uj[b],e=d?d.length:0,f=0;f<e;++f){var g=d[f];a.j[g]||jc(a,g)}c=c.Ao;c.j[b]||_.bc(c.S,cc(c.R,b)+".js")}))};lc=function(a,b){var c=kc;this.Ao=a;this.uj=c;var d={},e;for(e in c)for(var f=c[e],g=0,h=f.length;g<h;++g){var l=f[g];d[l]||(d[l]=[]);d[l].push(e)}this.Op=d;this.Tm=b};gc=function(){this.j=[]};ic=function(a,b){a.R?b(a.R):a.j.push(b)};
_.M=function(a,b,c){var d=hc.Nc();a=""+a;d.j[a]?b(d.j[a]):((d.R[a]=d.R[a]||[]).push(b),c||jc(d,a))};_.nc=function(a,b){hc.Nc().j[""+a]=b};oc=function(a,b,c){var d=[],e=_.ac(a.length,function(){b.apply(null,d)});_.Ob(a,function(a,b){_.M(a,function(a){d[b]=a;e()},c)})};_.pc=function(a){a=a||{};this.S=a.id;this.j=null;try{this.j=a.geometry?$b(a.geometry):null}catch(b){_.yb(b)}this.R=a.properties||{}};_.N=function(a,b){this.x=a;this.y=b};
rc=function(a){if(a instanceof _.N)return a;try{_.zb({x:_.qc,y:_.qc},!0)(a)}catch(b){throw _.xb("not a Point",b);}return new _.N(a.x,a.y)};_.O=function(a,b,c,d){this.width=a;this.height=b;this.S=c||"px";this.R=d||"px"};sc=function(a){if(a instanceof _.O)return a;try{_.zb({height:_.qc,width:_.qc},!0)(a)}catch(b){throw _.xb("not a Size",b);}return new _.O(a.width,a.height)};_.P=function(a){return function(){return this.get(a)}};
_.tc=function(a,b){return b?function(c){try{this.set(a,b(c))}catch(d){_.yb(_.xb("set"+_.tb(a),d))}}:function(b){this.set(a,b)}};_.uc=function(a,b){_.Ha(b,function(b,d){var e=_.P(b);a["get"+_.tb(b)]=e;d&&(e=_.tc(b,d),a["set"+_.tb(b)]=e)})};_.wc=function(a){this.j=a||[];vc(this)};vc=function(a){a.set("length",a.j.length)};_.xc=function(a){this.S=a||_.pb;this.R={}};_.yc=function(a,b){var c=a.R,d=a.S(b);c[d]||(c[d]=b,_.I.trigger(a,"insert",b),a.j&&a.j(b))};_.zc=_.na("j");
_.Ac=function(a,b,c){this.heading=a;this.pitch=_.Ka(b,-90,90);this.zoom=Math.max(0,c)};_.Bc=function(){this.__gm=new _.J;this.S=null};_.Cc=_.ma();_.Dc=function(a,b,c){for(var d in a)b.call(c,a[d],d,a)};_.Hc=function(a){return-1!=_.Jb.indexOf(a)};_.Ic=function(){return _.Hc("Opera")||_.Hc("OPR")};_.Jc=function(){return _.Hc("Trident")||_.Hc("MSIE")};Kc=function(){return(_.Hc("Chrome")||_.Hc("CriOS"))&&!_.Ic()&&!_.Hc("Edge")};Lc=function(a,b,c){this.U=c;this.S=a;this.V=b;this.R=0;this.j=null};
Mc=function(){this.R=this.j=null};Nc=function(){this.next=this.j=this.Ld=null};Oc=function(a,b){return function(c){return c.Ld==a&&c.context==(b||null)}};Pc=function(a){this.Ga=[];this.j=a&&a.Ee||_.ta;this.R=a&&a.Ge||_.ta};_.Qc=function(){this.Ga=new Pc({Ee:(0,_.u)(this.Ee,this),Ge:(0,_.u)(this.Ge,this)})};_.Rc=function(){_.Qc.call(this)};_.Sc=function(a){_.Qc.call(this);this.j=a};Tc=_.k();
Vc=function(a){var b=a;if(a instanceof Array)b=Array(a.length),_.Uc(b,a);else if(a instanceof Object){var c=b={},d;for(d in a)a.hasOwnProperty(d)&&(c[d]=Vc(a[d]))}return b};_.Uc=function(a,b){for(var c=0;c<b.length;++c)b.hasOwnProperty(c)&&(a[c]=Vc(b[c]))};_.Q=function(a,b){a[b]||(a[b]=[]);return a[b]};_.Wc=function(a,b){return a[b]?a[b].length:0};Xc=_.k();
Zc=function(a,b,c){for(var d=1;d<b.ra.length;++d){var e=b.ra[d],f=a[d+b.qa];if(null!=f&&e)if(3==e.label)for(var g=0;g<f.length;++g)Yc(f[g],d,e,c);else Yc(f,d,e,c)}};Yc=function(a,b,c,d){if("m"==c.type){var e=d.length;Zc(a,c.ka,d);d.splice(e,0,[b,"m",d.length-e].join(""))}else"b"==c.type&&(a=a?"1":"0"),d.push([b,c.type,(0,window.encodeURIComponent)(a)].join(""))};_.$c=function(){return _.Hc("iPhone")&&!_.Hc("iPod")&&!_.Hc("iPad")};bd=function(){var a=_.ad.document;return a?a.documentMode:void 0};
_.ed=function(a){return cd[a]||(cd[a]=0<=_.Mb(_.dd,a))};_.fd=function(a,b){this.j=a||0;this.R=b||0};gd=_.k();hd=function(a,b){-180==a&&180!=b&&(a=180);-180==b&&180!=a&&(b=180);this.j=a;this.R=b};_.id=function(a){return a.j>a.R};_.kd=function(a,b){return 1E-9>=Math.abs(b.j-a.j)%360+Math.abs(_.jd(b)-_.jd(a))};_.ld=function(a,b){var c=b-a;return 0<=c?c:b+180-(a-180)};_.jd=function(a){return a.isEmpty()?0:_.id(a)?360-(a.j-a.R):a.R-a.j};md=function(a,b){this.R=a;this.j=b};
_.nd=function(a){return a.isEmpty()?0:a.j-a.R};_.od=function(a,b){a=a&&_.Yb(a);b=b&&_.Yb(b);if(a){b=b||a;var c=_.Ka(a.lat(),-90,90),d=_.Ka(b.lat(),-90,90);this.R=new md(c,d);c=a.lng();d=b.lng();360<=d-c?this.j=new hd(-180,180):(c=_.La(c,-180,180),d=_.La(d,-180,180),this.j=new hd(c,d))}else this.R=new md(1,-1),this.j=new hd(180,-180)};_.pd=function(a,b,c,d){return new _.od(new _.L(a,b,!0),new _.L(c,d,!0))};
_.rd=function(a){if(a instanceof _.od)return a;try{return a=qd(a),_.pd(a.south,a.west,a.north,a.east)}catch(b){throw _.xb("not a LatLngBounds or LatLngBoundsLiteral",b);}};_.sd=_.na("__gm");td=function(){this.j={};this.S={};this.R={}};wd=function(){this.j={}};xd=function(a){this.j=new wd;var b=this;_.I.addListenerOnce(a,"addfeature",function(){_.M("data",function(c){c.j(b,a,b.j)})})};_.zd=function(a){this.j=[];try{this.j=yd(a)}catch(b){_.yb(b)}};_.Bd=function(a){this.j=(0,_.Ad)(a)};
_.Dd=function(a){this.j=Cd(a)};_.Ed=function(a){this.j=(0,_.Ad)(a)};_.Fd=function(a){this.j=(0,_.Ad)(a)};_.Hd=function(a){this.j=Gd(a)};_.Jd=function(a){this.j=Id(a)};Kd=function(a){a=a||{};a.clickable=_.Oa(a.clickable,!0);a.visible=_.Oa(a.visible,!0);this.setValues(a);_.M("marker",_.ta)};Ld=function(a){var b=_,c=hc.Nc().S;a=c.R=new lc(new fc(a),b);for(var b=0,d=c.j.length;b<d;++b)c.j[b](a);c.j.length=0};_.Md=function(a){this.__gm={set:null,Ef:null};Kd.call(this,a)};
Nd=function(a){a=a||{};a.visible=_.Oa(a.visible,!0);return a};_.Od=function(a){return a&&a.radius||6378137};Qd=function(a){return a instanceof _.wc?Pd(a):new _.wc((0,_.Ad)(a))};Ud=function(a){var b;_.Xa(a)?0==_.w(a)?b=!0:(b=a instanceof _.wc?a.getAt(0):a[0],b=_.Xa(b)):b=!1;return b?a instanceof _.wc?Td(Pd)(a):new _.wc(_.Db(Qd)(a)):new _.wc([Qd(a)])};
Td=function(a){return function(b){if(!(b instanceof _.wc))throw _.xb("not an MVCArray");b.forEach(function(b,d){try{a(b)}catch(e){throw _.xb("at index "+d,e);}});return b}};Vd=function(a){this.set("latLngs",new _.wc([new _.wc]));this.setValues(Nd(a));_.M("poly",_.ta)};_.Wd=function(a){Vd.call(this,a)};_.Xd=function(a){Vd.call(this,a)};
_.Yd=function(a,b,c){function d(a){if(!a)throw _.xb("not a Feature");if("Feature"!=a.type)throw _.xb('type != "Feature"');var b=a.geometry;try{b=null==b?null:e(b)}catch(d){throw _.xb('in property "geometry"',d);}var f=a.properties||{};if(!_.Ra(f))throw _.xb("properties is not an Object");var g=c.idPropertyName;a=g?f[g]:a.id;if(null!=a&&!_.F(a)&&!_.Sa(a))throw _.xb((g||"id")+" is not a string or number");return{id:a,geometry:b,properties:f}}function e(a){if(null==a)throw _.xb("is null");var b=(a.type+
"").toLowerCase(),c=a.coordinates;try{switch(b){case "point":return new _.Zb(h(c));case "multipoint":return new _.Ed(n(c));case "linestring":return g(c);case "multilinestring":return new _.Dd(p(c));case "polygon":return f(c);case "multipolygon":return new _.Jd(r(c))}}catch(d){throw _.xb('in property "coordinates"',d);}if("geometrycollection"==b)try{return new _.zd(z(a.geometries))}catch(d){throw _.xb('in property "geometries"',d);}throw _.xb("invalid type");}function f(a){return new _.Hd(q(a))}function g(a){return new _.Bd(n(a))}
function h(a){a=l(a);return _.Yb({lat:a[1],lng:a[0]})}if(!b)return[];c=c||{};var l=_.Db(_.qc),n=_.Db(h),p=_.Db(g),q=_.Db(function(a){a=n(a);if(!a.length)throw _.xb("contains no elements");if(!a[0].j(a[a.length-1]))throw _.xb("first and last positions are not equal");return new _.Fd(a.slice(0,-1))}),r=_.Db(f),z=_.Db(e),x=_.Db(d);if("FeatureCollection"==b.type){b=b.features;try{return _.Na(x(b),function(b){return a.add(b)})}catch(y){throw _.xb('in property "features"',y);}}if("Feature"==b.type)return[a.add(d(b))];
throw _.xb("not a Feature or FeatureCollection");};$d=function(a){var b=this;this.setValues(a||{});this.j=new td;_.I.forward(this.j,"addfeature",this);_.I.forward(this.j,"removefeature",this);_.I.forward(this.j,"setgeometry",this);_.I.forward(this.j,"setproperty",this);_.I.forward(this.j,"removeproperty",this);this.R=new xd(this.j);this.R.bindTo("map",this);this.R.bindTo("style",this);_.G(_.Zd,function(a){_.I.forward(b.R,a,b)});this.S=!1};ae=function(a){a.S||(a.S=!0,_.M("drawing_impl",function(b){b.Tn(a)}))};
_.be=function(a){this.j=a||[]};_.ce=function(a){this.j=a||[]};de=function(a){this.j=a||[]};_.ee=function(a){this.j=a||[]};_.fe=function(a){this.j=a||[]};_.ge=function(a){function b(){d||(d=!0,_.M("infowindow",function(a){a.zm(c)}))}window.setTimeout(function(){_.M("infowindow",_.ta)},100);var c=this,d=!1;_.I.addListenerOnce(this,"anchor_changed",b);_.I.addListenerOnce(this,"map_changed",b);this.setValues(a)};he=function(a){this.setValues(a)};_.ie=_.k();je=_.k();ke=_.k();le=_.k();
_.me=function(){_.M("geocoder",_.ta)};_.ne=function(a,b,c){this.wa=null;this.set("url",a);this.set("bounds",_.Gb(_.rd)(b));this.setValues(c)};oe=function(a,b){_.Sa(a)?(this.set("url",a),this.setValues(b)):this.setValues(a)};_.pe=function(){this.wa=null;_.M("layers",_.ta)};qe=function(){this.wa=null;_.M("layers",_.ta)};re=function(){this.wa=null;_.M("layers",_.ta)};se=function(a){this.j=a||[]};te=function(a){this.j=a||[]};ue=function(a){this.j=a||[]};ve=function(a){this.j=a||[]};
we=function(a){this.j=a||[]};xe=function(a){this.j=a||[]};Ae=function(){var a=ye().j[10],a=(a?new we(a):ze).j[8];return null!=a?a:0};_.Be=function(a){this.j=a||[]};_.Ce=function(a){this.j=a||[]};_.De=function(a){this.j=a||[]};_.Ie=function(a){this.j=a||[]};Je=function(a){this.j=a||[]};Ke=function(a){this.j=a||[]};Le=function(a){this.j=a||[]};Me=function(a){this.j=a||[]};Ne=function(a){this.j=a||[]};_.Oe=function(a){this.j=a||[]};_.Pe=function(a){this.j=a||[]};
_.Qe=function(a){a=a.j[0];return null!=a?a:""};_.Re=function(a){a=a.j[1];return null!=a?a:""};_.Te=function(){var a=_.Se(_.S).j[9];return null!=a?a:""};Ue=function(){var a=_.Se(_.S).j[7];return null!=a?a:""};Ve=function(){var a=_.Se(_.S).j[12];return null!=a?a:""};We=function(a){a=a.j[0];return null!=a?a:""};_.Xe=function(a){a=a.j[1];return null!=a?a:""};Ze=function(){var a=_.S.j[4],a=(a?new Le(a):Ye).j[0];return null!=a?a:0};_.$e=function(){var a=_.S.j[0];return null!=a?a:1};
_.af=function(a){a=a.j[6];return null!=a?a:""};bf=function(){var a=_.S.j[11];return null!=a?a:""};_.cf=function(){var a=_.S.j[16];return null!=a?a:""};_.Se=function(a){return(a=a.j[2])?new Je(a):df};_.ff=function(){var a=_.S.j[3];return a?new Ke(a):ef};ye=function(){var a=_.S.j[33];return a?new te(a):gf};hf=function(a){return _.Q(_.S.j,8)[a]};kf=function(){var a=_.S.j[36],a=(a?new Ne(a):jf).j[0];return null!=a?a:""};
nf=function(a,b){_.Bc.call(this);this.__gm=new _.J;this.R=null;b&&b.client&&(this.R=_.lf[b.client]||null);var c=this.controls=[];_.Ha(_.mf,function(a,b){c[b]=new _.wc});this.U=!0;this.j=a;this.setPov(new _.Ac(0,0,1));b&&b.Ec&&!_.F(b.Ec.zoom)&&(b.Ec.zoom=_.F(b.zoom)?b.zoom:1);this.setValues(b);void 0==this.getVisible()&&this.setVisible(!0);this.__gm.Pd=b&&b.Pd||new _.xc;_.I.addListenerOnce(this,"pano_changed",_.Za(function(){_.M("marker",(0,_.u)(function(a){a.j(this.__gm.Pd,this)},this))}))};
_.pf=function(){this.U=[];this.R=this.j=this.S=null};qf=function(a,b,c){this.Ia=b;this.j=new _.Sc(new _.zc([]));this.W=new _.xc;this.ya=new _.wc;this.ta=new _.xc;this.ua=new _.xc;this.U=new _.xc;this.Pd=new _.xc;this.Ea=[];var d=this.Pd;d.j=function(){delete d.j;_.M("marker",_.Za(function(b){b.j(d,a)}))};this.S=new nf(b,{visible:!1,enableCloseButton:!0,Pd:d});this.S.bindTo("reportErrorControl",a);this.S.U=!1;this.R=new _.pf;this.Pa=c};_.rf=function(){this.Ga=new Pc};
_.sf=function(){this.j=new _.N(128,128);this.S=256/360;this.U=256/(2*Math.PI);this.R=!0};_.tf=function(a){this.Aa=this.Ba=window.Infinity;this.Fa=this.Da=-window.Infinity;_.G(a,(0,_.u)(this.extend,this))};_.uf=function(a,b,c,d){var e=new _.tf;e.Ba=a;e.Aa=b;e.Da=c;e.Fa=d;return e};_.vf=function(a,b,c){if(a=a.fromLatLngToPoint(b))c=Math.pow(2,c),a.x*=c,a.y*=c;return a};
_.wf=function(a,b){var c=a.lat()+_.Tb(b);90<c&&(c=90);var d=a.lat()-_.Tb(b);-90>d&&(d=-90);var e=Math.sin(b),f=Math.cos(_.K(a.lat()));if(90==c||-90==d||1E-6>f)return new _.od(new _.L(d,-180),new _.L(c,180));e=_.Tb(Math.asin(e/f));return new _.od(new _.L(d,a.lng()-e),new _.L(c,a.lng()+e))};_.xf=function(a){this.tl=a||0;_.I.bind(this,"forceredraw",this,this.ma)};_.yf=function(a,b){var c=a.style;c.width=b.width+b.S;c.height=b.height+b.R};_.Af=function(a){return new _.O(a.offsetWidth,a.offsetHeight)};
Bf=function(a){this.j=a||[]};Cf=function(a){this.j=a||[]};Df=function(a){this.j=a||[]};Ef=function(a){this.j=a||[]};Ff=function(a){this.j=a||[]};Gf=function(a,b,c,d){_.xf.call(this);this.V=b;this.U=new _.sf;this.W=c+"/maps/api/js/StaticMapService.GetMapImage";this.R=this.j=null;this.S=d;this.set("div",a);this.set("loading",!0)};If=function(a){var b=a.get("tilt")||a.get("mapMaker")||_.w(a.get("styles"));a=a.get("mapTypeId");return b?null:Hf[a]};Jf=function(a){a.parentNode&&a.parentNode.removeChild(a)};
Kf=function(a,b,c,d,e){var f=_.T[15]?Ve():Ue();this.j=a;this.R=d;this.S=_.sa(e)?e:_.Fa();var g=f+"/csi?v=2&s=mapsapi3&v3v="+kf()+"&action="+a;_.Dc(c,function(a,b){g+="&"+(0,window.encodeURIComponent)(b)+"="+(0,window.encodeURIComponent)(a)});b&&(g+="&e="+b);this.U=g};_.Mf=function(a,b){var c={};c[b]=void 0;_.Lf(a,c)};
_.Lf=function(a,b){var c="";_.Dc(b,function(a,b){var d=(null!=a?a:_.Fa())-this.S;c&&(c+=",");c+=b+"."+Math.round(d);null==a&&window.performance&&window.performance.mark&&window.performance.mark("mapsapi:"+this.j+":"+b)},a);var d=a.U+"&rt="+c;a.R.createElement("img").src=d;var e=_.ad.__gm_captureCSI;e&&e(d)};
_.Nf=function(a,b){var c=b||{},d=c.qp||{},e=_.Q(_.S.j,12).join(",");e&&(d.libraries=e);var e=_.af(_.S),f=ye(),g=[];e&&g.push(e);_.Ob(f.$(),function(a,b){a&&_.Ob(a,function(a,c){null!=a&&g.push(b+1+"_"+(c+1)+"_"+a)})});c.pn&&(g=g.concat(c.pn));return new Kf(a,g.join(","),d,c.document||window.document,c.startTime)};Pf=function(){this.R=_.Nf("apiboot2",{startTime:_.Of});_.Mf(this.R,"main");this.j=!1};Rf=function(){var a=Qf;a.j||(a.j=!0,_.Mf(a.R,"firstmap"))};_.Sf=_.k();_.Tf=function(){this.j=""};
_.Uf=function(a){var b=new _.Tf;b.j=a;return b};_.Wf=function(){this.Xg="";this.Kl=_.Vf;this.j=null};_.Xf=function(a,b){var c=new _.Wf;c.Xg=a;c.j=b;return c};_.Yf=function(a,b){b.parentNode&&b.parentNode.insertBefore(a,b.nextSibling)};_.Zf=function(a){return a&&a.parentNode?a.parentNode.removeChild(a):null};$f=function(a,b,c,d,e){this.j=!!b;this.node=null;this.R=0;this.S=!1;this.U=!c;a&&this.setPosition(a,d);this.depth=void 0!=e?e:this.R||0;this.j&&(this.depth*=-1)};
ag=function(a,b,c,d){$f.call(this,a,b,c,null,d)};_.cg=function(a){for(var b;b=a.firstChild;)_.bg(b),a.removeChild(b)};_.bg=function(a){a=new ag(a);try{for(;;)_.I.clearInstanceListeners(a.next())}catch(b){if(b!==_.dg)throw b;}};
_.hg=function(a,b){var c=_.Fa();Qf&&Rf();var d=new _.rf;_.sd.call(this,new qf(this,a,d));var e=b||{};_.E(e.mapTypeId)||(e.mapTypeId="roadmap");this.setValues(e);this.__gm.Ka=e.Ka;this.mapTypes=new gd;this.features=new _.J;_.eg.push(a);this.notify("streetView");var f=_.Af(a);e.noClear||_.cg(a);var g=this.__gm,h=_.ad.gm_force_experiments;h&&(g.Ea=h);var l=null,g=!!_.S&&fg(e.useStaticMap,f);_.S&&+Ae()&&(g=!1);g&&(l=new Gf(a,_.gg,_.Te(),new _.Sc(null)),_.I.forward(l,"staticmaploaded",this),l.set("size",
f),l.bindTo("center",this),l.bindTo("zoom",this),l.bindTo("mapTypeId",this),l.bindTo("styles",this),l.bindTo("mapMaker",this));this.overlayMapTypes=new _.wc;var n=this.controls=[];_.Ha(_.mf,function(a,b){n[b]=new _.wc});var p=this,q=!0;_.M("map",function(a){a.R(p,e,l,q,c,d)});q=!1;this.data=new $d({map:this})};fg=function(a,b){if(_.E(a))return!!a;var c=b.width,d=b.height;return 384E3>=c*d&&800>=c&&800>=d};ig=function(){_.M("maxzoom",_.ta)};
jg=function(a,b){!a||_.Sa(a)||_.F(a)?(this.set("tableId",a),this.setValues(b)):this.setValues(a)};_.kg=_.k();_.lg=function(a){this.setValues(Nd(a));_.M("poly",_.ta)};_.mg=function(a){this.setValues(Nd(a));_.M("poly",_.ta)};ng=function(){this.j=null};_.og=function(){this.j=null};
_.pg=function(a){this.tileSize=a.tileSize||new _.O(256,256);this.name=a.name;this.alt=a.alt;this.minZoom=a.minZoom;this.maxZoom=a.maxZoom;this.S=(0,_.u)(a.getTileUrl,a);this.j=new _.xc;this.R=null;this.set("opacity",a.opacity);_.ad.window&&_.I.addDomListener(window,"online",(0,_.u)(this.lp,this));var b=this;_.M("map",function(a){var d=b.R=a.j,e=b.tileSize||new _.O(256,256);b.j.forEach(function(a){var c=a.__gmimt,h=c.Oa,l=c.zoom,n=b.S(h,l);c.Fc=d(h,l,e,a,n,function(){_.I.trigger(a,"load")})})})};
qg=function(a,b){null!=a.style.opacity?a.style.opacity=b:a.style.filter=b&&"alpha(opacity="+Math.round(100*b)+")"};rg=function(a){a=a.get("opacity");return"number"==typeof a?a:1};_.sg=_.k();_.wg=function(a,b){this.set("styles",a);var c=b||{};this.j=c.baseMapTypeId||"roadmap";this.minZoom=c.minZoom;this.maxZoom=c.maxZoom||20;this.name=c.name;this.alt=c.alt;this.projection=null;this.tileSize=new _.O(256,256)};
_.xg=function(a,b){_.Eb(Ab,"container is not a Node")(a);this.setValues(b);_.M("controls",(0,_.u)(function(b){b.Pm(this,a)},this))};yg=_.na("j");zg=function(a,b,c){for(var d=Array(b.length),e=0,f=b.length;e<f;++e)d[e]=b.charCodeAt(e);d.unshift(c);a=a.j;c=b=0;for(e=d.length;c<e;++c)b*=1729,b+=d[c],b%=a;return b};
Cg=function(){var a=Ze(),b=new yg(131071),c=(0,window.unescape)("%26%74%6F%6B%65%6E%3D");return function(d){d=d.replace(Ag,"%27");var e=d+c;Bg||(Bg=/(?:https?:\/\/[^/]+)?(.*)/);d=Bg.exec(d);return e+zg(b,d&&d[1],a)}};Dg=function(){var a=new yg(2147483647);return function(b){return zg(a,b,0)}};Eg=function(a){for(var b=a.split("."),c=window,d=window,e=0;e<b.length;e++)if(d=c,c=c[b[e]],!c)throw _.xb(a+" is not a function");return function(){c.apply(d)}};
Fg=function(){for(var a in Object.prototype)window.console&&window.console.error("This site adds property <"+a+"> to Object.prototype. Extending Object.prototype breaks JavaScript for..in loops, which are used heavily in Google Maps API v3.")};Gg=function(a){(a="version"in a)&&window.console&&window.console.error("You have included the Google Maps API multiple times on this page. This may cause unexpected errors.");return a};_.qa=[];_.ad=this;Aa="closure_uid_"+(1E9*Math.random()>>>0);Ba=0;var lb,mb;_.I={};lb="undefined"!=typeof window.navigator&&-1!=window.navigator.userAgent.toLowerCase().indexOf("msie");mb={};_.I.addListener=function(a,b,c){return new nb(a,b,c,0)};_.I.hasListeners=function(a,b){var c=a.__e3_,c=c&&c[b];return!!c&&!_.Ja(c)};_.I.removeListener=function(a){a&&a.remove()};_.I.clearListeners=function(a,b){_.Ha(gb(a,b),function(a,b){b&&b.remove()})};_.I.clearInstanceListeners=function(a){_.Ha(gb(a),function(a,c){c&&c.remove()})};
_.I.trigger=function(a,b,c){if(_.I.hasListeners(a,b)){var d=_.Va(arguments,2),e=gb(a,b),f;for(f in e){var g=e[f];g&&g.j.apply(g.Nb,d)}}};_.I.addDomListener=function(a,b,c,d){if(a.addEventListener){var e=d?4:1;a.addEventListener(b,c,d);c=new nb(a,b,c,e)}else a.attachEvent?(c=new nb(a,b,c,2),a.attachEvent("on"+b,ob(c))):(a["on"+b]=c,c=new nb(a,b,c,3));return c};_.I.addDomListenerOnce=function(a,b,c,d){var e=_.I.addDomListener(a,b,function(){e.remove();return c.apply(this,arguments)},d);return e};
_.I.La=function(a,b,c,d){return _.I.addDomListener(a,b,hb(c,d))};_.I.bind=function(a,b,c,d){return _.I.addListener(a,b,(0,_.u)(d,c))};_.I.addListenerOnce=function(a,b,c){var d=_.I.addListener(a,b,function(){d.remove();return c.apply(this,arguments)});return d};_.I.forward=function(a,b,c){return _.I.addListener(a,b,ib(b,c))};_.I.Gb=function(a,b,c,d){return _.I.addDomListener(a,b,ib(b,c,!d))};_.I.mk=function(){var a=mb,b;for(b in a)a[b].remove();mb={};(a=_.ad.CollectGarbage)&&a()};
_.I.Gp=function(){lb&&_.I.addDomListener(window,"unload",_.I.mk)};var kb=0;nb.prototype.remove=function(){if(this.Nb){switch(this.U){case 1:this.Nb.removeEventListener(this.R,this.j,!1);break;case 4:this.Nb.removeEventListener(this.R,this.j,!0);break;case 2:this.Nb.detachEvent("on"+this.R,this.S);break;case 3:this.Nb["on"+this.R]=null}delete fb(this.Nb,this.R)[this.id];this.S=this.j=this.Nb=null;delete mb[this.id]}};_.t=_.J.prototype;_.t.get=function(a){var b=ub(this);a=a+"";b=$a(b,a);if(_.E(b)){if(b){a=b.kc;var b=b.Qd,c="get"+_.tb(a);return b[c]?b[c]():b.get(a)}return this[a]}};_.t.set=function(a,b){var c=ub(this);a=a+"";var d=$a(c,a);if(d){var c=d.kc,d=d.Qd,e="set"+_.tb(c);if(d[e])d[e](b);else d.set(c,b)}else this[a]=b,c[a]=null,rb(this,a)};_.t.notify=function(a){var b=ub(this);a=a+"";(b=$a(b,a))?b.Qd.notify(b.kc):rb(this,a)};
_.t.setValues=function(a){for(var b in a){var c=a[b],d="set"+_.tb(b);if(this[d])this[d](c);else this.set(b,c)}};_.t.setOptions=_.J.prototype.setValues;_.t.changed=_.k();var sb={};_.J.prototype.bindTo=function(a,b,c,d){a=a+"";c=(c||a)+"";this.unbind(a);var e={Qd:this,kc:a},f={Qd:b,kc:c,Ci:e};ub(this)[a]=f;qb(b,c)[_.pb(e)]=e;d||rb(this,a)};_.J.prototype.unbind=function(a){var b=ub(this),c=b[a];c&&(c.Ci&&delete qb(c.Qd,c.kc)[_.pb(c.Ci)],this[a]=this.get(a),b[a]=null)};
_.J.prototype.unbindAll=function(){var a=(0,_.u)(this.unbind,this),b=ub(this),c;for(c in b)a(c)};_.J.prototype.addListener=function(a,b){return _.I.addListener(this,a,b)};_.Hg={ROADMAP:"roadmap",SATELLITE:"satellite",HYBRID:"hybrid",TERRAIN:"terrain"};_.mf={TOP_LEFT:1,TOP_CENTER:2,TOP:2,TOP_RIGHT:3,LEFT_CENTER:4,LEFT_TOP:5,LEFT:5,LEFT_BOTTOM:6,RIGHT_TOP:7,RIGHT:7,RIGHT_CENTER:8,RIGHT_BOTTOM:9,BOTTOM_LEFT:10,BOTTOM_CENTER:11,BOTTOM:11,BOTTOM_RIGHT:12,CENTER:13};var Ig={$q:"Point",Xq:"LineString",POLYGON:"Polygon"};_.v(wb,Error);_.qc=_.Eb(_.F,"not a number");_.Jg=_.Eb(_.Sa,"not a string");_.Kg=_.Gb(_.qc);_.Lg=_.Gb(_.Jg);_.Mg=_.Gb(_.Eb(_.Ua,"not a boolean"));var Ub=_.zb({lat:_.qc,lng:_.qc},!0);_.L.prototype.toString=function(){return"("+this.lat()+", "+this.lng()+")"};_.L.prototype.toJSON=function(){return{lat:this.lat(),lng:this.lng()}};_.L.prototype.j=function(a){return a?_.Ma(this.lat(),a.lat())&&_.Ma(this.lng(),a.lng()):!1};_.L.prototype.equals=_.L.prototype.j;_.L.prototype.toUrlValue=function(a){a=_.E(a)?a:6;return Xb(this.lat(),a)+","+Xb(this.lng(),a)};_.Ad=_.Db(_.Yb);_.v(_.Zb,vb);_.Zb.prototype.getType=_.pa("Point");_.Zb.prototype.get=_.m("j");var yd=_.Db($b);_.ua(hc);hc.prototype.Sc=function(a,b){var c=this,d=c.V;ic(c.S,function(e){for(var f=e.uj[a]||[],g=e.Op[a]||[],h=d[a]=_.ac(f.length,function(){delete d[a];b(e.Tm);for(var f=c.R[a],h=f?f.length:0,l=0;l<h;++l)f[l](c.j[a]);delete c.R[a];l=0;for(f=g.length;l<f;++l)h=g[l],d[h]&&d[h]()}),l=0,n=f.length;l<n;++l)c.j[f[l]]&&h()})};_.t=_.pc.prototype;_.t.getId=_.m("S");_.t.getGeometry=_.m("j");_.t.setGeometry=function(a){var b=this.j;try{this.j=a?$b(a):null}catch(c){_.yb(c);return}_.I.trigger(this,"setgeometry",{feature:this,newGeometry:this.j,oldGeometry:b})};_.t.getProperty=function(a){return $a(this.R,a)};_.t.setProperty=function(a,b){if(void 0===b)this.removeProperty(a);else{var c=this.getProperty(a);this.R[a]=b;_.I.trigger(this,"setproperty",{feature:this,name:a,newValue:b,oldValue:c})}};
_.t.removeProperty=function(a){var b=this.getProperty(a);delete this.R[a];_.I.trigger(this,"removeproperty",{feature:this,name:a,oldValue:b})};_.t.forEachProperty=function(a){for(var b in this.R)a(this.getProperty(b),b)};_.t.toGeoJson=function(a){var b=this;_.M("data",function(c){c.R(b,a)})};_.Ng=new _.N(0,0);_.N.prototype.toString=function(){return"("+this.x+", "+this.y+")"};_.N.prototype.j=function(a){return a?a.x==this.x&&a.y==this.y:!1};_.N.prototype.equals=_.N.prototype.j;_.N.prototype.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y)};_.N.prototype.Kf=_.ra(0);_.Og=new _.O(0,0);_.O.prototype.toString=function(){return"("+this.width+", "+this.height+")"};_.O.prototype.j=function(a){return a?a.width==this.width&&a.height==this.height:!1};_.O.prototype.equals=_.O.prototype.j;var Pg={CIRCLE:0,FORWARD_CLOSED_ARROW:1,FORWARD_OPEN_ARROW:2,BACKWARD_CLOSED_ARROW:3,BACKWARD_OPEN_ARROW:4};_.v(_.wc,_.J);_.t=_.wc.prototype;_.t.getAt=function(a){return this.j[a]};_.t.indexOf=function(a){for(var b=0,c=this.j.length;b<c;++b)if(a===this.j[b])return b;return-1};_.t.forEach=function(a){for(var b=0,c=this.j.length;b<c;++b)a(this.j[b],b)};_.t.setAt=function(a,b){var c=this.j[a],d=this.j.length;if(a<d)this.j[a]=b,_.I.trigger(this,"set_at",a,c),this.U&&this.U(a,c);else{for(c=d;c<a;++c)this.insertAt(c,void 0);this.insertAt(a,b)}};
_.t.insertAt=function(a,b){this.j.splice(a,0,b);vc(this);_.I.trigger(this,"insert_at",a);this.R&&this.R(a)};_.t.removeAt=function(a){var b=this.j[a];this.j.splice(a,1);vc(this);_.I.trigger(this,"remove_at",a,b);this.S&&this.S(a,b);return b};_.t.push=function(a){this.insertAt(this.j.length,a);return this.j.length};_.t.pop=function(){return this.removeAt(this.j.length-1)};_.t.getArray=_.m("j");_.t.clear=function(){for(;this.get("length");)this.pop()};_.uc(_.wc.prototype,{length:null});_.xc.prototype.remove=function(a){var b=this.R,c=this.S(a);b[c]&&(delete b[c],_.I.trigger(this,"remove",a),this.onRemove&&this.onRemove(a))};_.xc.prototype.contains=function(a){return!!this.R[this.S(a)]};_.xc.prototype.forEach=function(a){var b=this.R,c;for(c in b)a.call(this,b[c])};_.zc.prototype.lc=_.ra(1);_.zc.prototype.forEach=function(a,b){_.Ob(this.j,function(c,d){a.call(b,c,d)})};var Qg=_.zb({zoom:_.Kg,heading:_.qc,pitch:_.qc});_.v(_.Bc,_.J);var Rg=function(a){return function(){return a}}(null);a:{var Sg=_.ad.navigator;if(Sg){var Tg=Sg.userAgent;if(Tg){_.Jb=Tg;break a}}_.Jb=""};Lc.prototype.get=function(){var a;0<this.R?(this.R--,a=this.j,this.j=a.next,a.next=null):a=this.S();return a};_.Ug=new Lc(function(){return new Nc},function(a){a.reset()},100);Mc.prototype.add=function(a,b){var c=_.Ug.get();c.set(a,b);this.R?this.R.next=c:this.j=c;this.R=c};Mc.prototype.remove=function(){var a=null;this.j&&(a=this.j,this.j=this.j.next,this.j||(this.R=null),a.next=null);return a};Nc.prototype.set=function(a,b){this.Ld=a;this.j=b;this.next=null};Nc.prototype.reset=function(){this.next=this.j=this.Ld=null};_.Vg=new Mc;Pc.prototype.addListener=function(a,b,c){c=c?{Fi:!1}:null;var d=!this.Ga.length,e;e=this.Ga;var f=Qb(e,Oc(a,b));(e=0>f?null:_.xa(e)?e.charAt(f):e[f])?e.He=e.He&&c:this.Ga.push({Ld:a,context:b||null,He:c});d&&this.R();return a};Pc.prototype.addListenerOnce=function(a,b){this.addListener(a,b,!0);return a};Pc.prototype.removeListener=function(a,b){if(this.Ga.length){var c=this.Ga,d=Qb(c,Oc(a,b));0<=d&&_.Rb(c,d);this.Ga.length||this.j()}};
Pc.prototype.forEach=function(a,b){var c=this.Ga.slice(0),d=this;(function(){_.Ob(c,function(c){a.call(b||null,function(a){if(c.He){if(c.He.Fi)return;c.He.Fi=!0;_.Sb(d.Ga,c);d.Ga.length||d.j()}c.Ld.call(c.context,a)})})})()};_.t=_.Qc.prototype;_.t.Ge=_.k();_.t.Ee=_.k();_.t.addListener=function(a,b){return this.Ga.addListener(a,b)};_.t.addListenerOnce=function(a,b){return this.Ga.addListenerOnce(a,b)};_.t.removeListener=function(a,b){return this.Ga.removeListener(a,b)};_.t.Nf=function(){this.Ga.forEach(function(a){a(this.get())},this)};_.v(_.Rc,_.Qc);_.Rc.prototype.set=function(a){this.$j(a);this.notify()};_.Rc.prototype.notify=function(){this.Nf()};_.v(_.Sc,_.Rc);_.Sc.prototype.get=_.m("j");_.Sc.prototype.$j=_.na("j");_.v(Tc,_.J);var Xg;_.Wg=new Xc;Xg=/'/g;Xc.prototype.j=function(a,b){var c=[];Zc(a,b,c);return c.join("&").replace(Xg,"%27")};var ih,cd,mh;_.Yg=_.Ic();_.Zg=_.Jc();_.$g=_.Hc("Edge");_.ah=_.Hc("Gecko")&&!(_.Kb()&&!_.Hc("Edge"))&&!(_.Hc("Trident")||_.Hc("MSIE"))&&!_.Hc("Edge");_.bh=_.Kb()&&!_.Hc("Edge");_.ch=_.Hc("Macintosh");_.dh=_.Hc("Windows");_.eh=_.Hc("Linux")||_.Hc("CrOS");_.fh=_.Hc("Android");_.gh=_.$c();_.hh=_.Hc("iPad");
a:{var jh="",kh=function(){var a=_.Jb;if(_.ah)return/rv\:([^\);]+)(\)|;)/.exec(a);if(_.$g)return/Edge\/([\d\.]+)/.exec(a);if(_.Zg)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(_.bh)return/WebKit\/(\S+)/.exec(a);if(_.Yg)return/(?:Version)[ \/]?(\S+)/.exec(a)}();kh&&(jh=kh?kh[1]:"");if(_.Zg){var lh=bd();if(null!=lh&&lh>(0,window.parseFloat)(jh)){ih=String(lh);break a}}ih=jh}_.dd=ih;cd={};mh=_.ad.document;_.nh=mh&&_.Zg?bd()||("CSS1Compat"==mh.compatMode?(0,window.parseInt)(_.dd,10):5):void 0;_.oh=_.Hc("Firefox");_.ph=_.$c()||_.Hc("iPod");_.qh=_.Hc("iPad");_.rh=_.Hc("Android")&&!(Kc()||_.Hc("Firefox")||_.Ic()||_.Hc("Silk"));_.sh=Kc();_.th=_.Hc("Safari")&&!(Kc()||_.Hc("Coast")||_.Ic()||_.Hc("Edge")||_.Hc("Silk")||_.Hc("Android"))&&!(_.$c()||_.Hc("iPad")||_.Hc("iPod"));_.fd.prototype.heading=_.m("j");_.fd.prototype.Ib=_.ra(2);_.fd.prototype.toString=function(){return this.j+","+this.R};_.uh=new _.fd;_.v(gd,_.J);gd.prototype.set=function(a,b){if(null!=b&&!(b&&_.F(b.maxZoom)&&b.tileSize&&b.tileSize.width&&b.tileSize.height&&b.getTile&&b.getTile.apply))throw Error("Expected value implementing google.maps.MapType");return _.J.prototype.set.apply(this,arguments)};_.t=hd.prototype;_.t.isEmpty=function(){return 360==this.j-this.R};_.t.intersects=function(a){var b=this.j,c=this.R;return this.isEmpty()||a.isEmpty()?!1:_.id(this)?_.id(a)||a.j<=this.R||a.R>=b:_.id(a)?a.j<=c||a.R>=b:a.j<=c&&a.R>=b};_.t.contains=function(a){-180==a&&(a=180);var b=this.j,c=this.R;return _.id(this)?(a>=b||a<=c)&&!this.isEmpty():a>=b&&a<=c};_.t.extend=function(a){this.contains(a)||(this.isEmpty()?this.j=this.R=a:_.ld(a,this.j)<_.ld(this.R,a)?this.j=a:this.R=a)};
_.t.Lc=function(){var a=(this.j+this.R)/2;_.id(this)&&(a=_.La(a+180,-180,180));return a};_.t=md.prototype;_.t.isEmpty=function(){return this.R>this.j};_.t.intersects=function(a){var b=this.R,c=this.j;return b<=a.R?a.R<=c&&a.R<=a.j:b<=a.j&&b<=c};_.t.contains=function(a){return a>=this.R&&a<=this.j};_.t.extend=function(a){this.isEmpty()?this.j=this.R=a:a<this.R?this.R=a:a>this.j&&(this.j=a)};_.t.Lc=function(){return(this.j+this.R)/2};_.t=_.od.prototype;_.t.getCenter=function(){return new _.L(this.R.Lc(),this.j.Lc())};_.t.toString=function(){return"("+this.getSouthWest()+", "+this.getNorthEast()+")"};_.t.toJSON=function(){return{south:this.R.R,west:this.j.j,north:this.R.j,east:this.j.R}};_.t.toUrlValue=function(a){var b=this.getSouthWest(),c=this.getNorthEast();return[b.toUrlValue(a),c.toUrlValue(a)].join()};
_.t.Tk=function(a){if(!a)return!1;a=_.rd(a);var b=this.R,c=a.R;return(b.isEmpty()?c.isEmpty():1E-9>=Math.abs(c.R-b.R)+Math.abs(b.j-c.j))&&_.kd(this.j,a.j)};_.od.prototype.equals=_.od.prototype.Tk;_.t=_.od.prototype;_.t.contains=function(a){return this.R.contains(a.lat())&&this.j.contains(a.lng())};_.t.intersects=function(a){a=_.rd(a);return this.R.intersects(a.R)&&this.j.intersects(a.j)};_.t.extend=function(a){this.R.extend(a.lat());this.j.extend(a.lng());return this};
_.t.union=function(a){a=_.rd(a);if(!a||a.isEmpty())return this;this.extend(a.getSouthWest());this.extend(a.getNorthEast());return this};_.t.getSouthWest=function(){return new _.L(this.R.R,this.j.j,!0)};_.t.getNorthEast=function(){return new _.L(this.R.j,this.j.R,!0)};_.t.toSpan=function(){return new _.L(_.nd(this.R),_.jd(this.j),!0)};_.t.isEmpty=function(){return this.R.isEmpty()||this.j.isEmpty()};var qd=_.zb({south:_.qc,west:_.qc,north:_.qc,east:_.qc},!1);_.v(_.sd,_.J);_.eg=[];_.t=td.prototype;_.t.contains=function(a){return this.j.hasOwnProperty(_.pb(a))};_.t.getFeatureById=function(a){return $a(this.R,a)};
_.t.add=function(a){a=a||{};a=a instanceof _.pc?a:new _.pc(a);if(!this.contains(a)){var b=a.getId();if(b){var c=this.getFeatureById(b);c&&this.remove(c)}c=_.pb(a);this.j[c]=a;b&&(this.R[b]=a);var d=_.I.forward(a,"setgeometry",this),e=_.I.forward(a,"setproperty",this),f=_.I.forward(a,"removeproperty",this);this.S[c]=function(){_.I.removeListener(d);_.I.removeListener(e);_.I.removeListener(f)};_.I.trigger(this,"addfeature",{feature:a})}return a};
_.t.remove=function(a){var b=_.pb(a),c=a.getId();if(this.j[b]){delete this.j[b];c&&delete this.R[c];if(c=this.S[b])delete this.S[b],c();_.I.trigger(this,"removefeature",{feature:a})}};_.t.forEach=function(a){for(var b in this.j)a(this.j[b])};wd.prototype.get=function(a){return this.j[a]};wd.prototype.set=function(a,b){var c=this.j;c[a]||(c[a]={});_.Ia(c[a],b);_.I.trigger(this,"changed",a)};wd.prototype.reset=function(a){delete this.j[a];_.I.trigger(this,"changed",a)};wd.prototype.forEach=function(a){_.Ha(this.j,a)};_.v(xd,_.J);xd.prototype.overrideStyle=function(a,b){this.j.set(_.pb(a),b)};xd.prototype.revertStyle=function(a){a?this.j.reset(_.pb(a)):this.j.forEach((0,_.u)(this.j.reset,this.j))};_.v(_.zd,vb);_.zd.prototype.getType=_.pa("GeometryCollection");_.zd.prototype.getLength=function(){return this.j.length};_.zd.prototype.getAt=function(a){return this.j[a]};_.zd.prototype.getArray=function(){return this.j.slice()};_.v(_.Bd,vb);_.Bd.prototype.getType=_.pa("LineString");_.Bd.prototype.getLength=function(){return this.j.length};_.Bd.prototype.getAt=function(a){return this.j[a]};_.Bd.prototype.getArray=function(){return this.j.slice()};var Cd=_.Db(_.Bb(_.Bd,"google.maps.Data.LineString",!0));_.v(_.Dd,vb);_.Dd.prototype.getType=_.pa("MultiLineString");_.Dd.prototype.getLength=function(){return this.j.length};_.Dd.prototype.getAt=function(a){return this.j[a]};_.Dd.prototype.getArray=function(){return this.j.slice()};_.v(_.Ed,vb);_.Ed.prototype.getType=_.pa("MultiPoint");_.Ed.prototype.getLength=function(){return this.j.length};_.Ed.prototype.getAt=function(a){return this.j[a]};_.Ed.prototype.getArray=function(){return this.j.slice()};_.v(_.Fd,vb);_.Fd.prototype.getType=_.pa("LinearRing");_.Fd.prototype.getLength=function(){return this.j.length};_.Fd.prototype.getAt=function(a){return this.j[a]};_.Fd.prototype.getArray=function(){return this.j.slice()};var Gd=_.Db(_.Bb(_.Fd,"google.maps.Data.LinearRing",!0));_.v(_.Hd,vb);_.Hd.prototype.getType=_.pa("Polygon");_.Hd.prototype.getLength=function(){return this.j.length};_.Hd.prototype.getAt=function(a){return this.j[a]};_.Hd.prototype.getArray=function(){return this.j.slice()};var Id=_.Db(_.Bb(_.Hd,"google.maps.Data.Polygon",!0));_.v(_.Jd,vb);_.Jd.prototype.getType=_.pa("MultiPolygon");_.Jd.prototype.getLength=function(){return this.j.length};_.Jd.prototype.getAt=function(a){return this.j[a]};_.Jd.prototype.getArray=function(){return this.j.slice()};var vh=_.zb({source:_.Jg,webUrl:_.Lg,iosDeepLinkId:_.Lg});var wh=_.Ga(_.zb({placeId:_.Lg,query:_.Lg,location:_.Yb}),function(a){if(a.placeId&&a.query)throw _.xb("cannot set both placeId and query");if(!a.placeId&&!a.query)throw _.xb("must set one of placeId or query");return a});_.v(Kd,_.J);
_.uc(Kd.prototype,{position:_.Gb(_.Yb),title:_.Lg,icon:_.Gb(_.Fb(_.Jg,{Vh:Hb("url"),then:_.zb({url:_.Jg,scaledSize:_.Gb(sc),size:_.Gb(sc),origin:_.Gb(rc),anchor:_.Gb(rc),labelOrigin:_.Gb(rc),path:_.Eb(Qa)},!0)},{Vh:Hb("path"),then:_.zb({path:_.Fb(_.Jg,_.Cb(Pg)),anchor:_.Gb(rc),labelOrigin:_.Gb(rc),fillColor:_.Lg,fillOpacity:_.Kg,rotation:_.Kg,scale:_.Kg,strokeColor:_.Lg,strokeOpacity:_.Kg,strokeWeight:_.Kg,url:_.Eb(Qa)},!0)})),label:_.Gb(_.Fb(_.Jg,{Vh:Hb("text"),then:_.zb({text:_.Jg,fontSize:_.Lg,fontWeight:_.Lg,
fontFamily:_.Lg},!0)})),shadow:_.Cc,shape:_.Cc,cursor:_.Lg,clickable:_.Mg,animation:_.Cc,draggable:_.Mg,visible:_.Mg,flat:_.Cc,zIndex:_.Kg,opacity:_.Kg,place:_.Gb(wh),attribution:_.Gb(vh)});var kc={main:[],common:["main"],util:["common"],adsense:["main"],controls:["util"],data:["util"],directions:["util","geometry"],distance_matrix:["util"],drawing:["main"],drawing_impl:["controls"],elevation:["util","geometry"],geocoder:["util"],geojson:["main"],imagery_viewer:["main"],geometry:["main"],infowindow:["util"],kml:["onion","util","map"],layers:["map"],map:["common"],marker:["util"],maxzoom:["util"],onion:["util","map"],overlay:["common"],panoramio:["main"],places:["main"],places_impl:["controls"],
poly:["util","map","geometry"],search:["main"],search_impl:["onion"],stats:["util"],streetview:["util","geometry"],usage:["util"],visualization:["main"],visualization_impl:["onion"],weather:["main"],zombie:["main"]};var xh=_.ad.google.maps,yh=hc.Nc(),zh=(0,_.u)(yh.Sc,yh);xh.__gjsload__=zh;_.Ha(xh.modules,zh);delete xh.modules;_.Ah=_.Gb(_.Bb(_.sd,"Map"));var Bh=_.Gb(_.Bb(_.Bc,"StreetViewPanorama"));_.v(_.Md,Kd);_.Md.prototype.map_changed=function(){this.__gm.set&&this.__gm.set.remove(this);var a=this.get("map");this.__gm.set=a&&a.__gm.Pd;this.__gm.set&&_.yc(this.__gm.set,this)};_.Md.MAX_ZINDEX=1E6;_.uc(_.Md.prototype,{map:_.Fb(_.Ah,Bh)});var Pd=Td(_.Bb(_.L,"LatLng"));_.v(Vd,_.J);Vd.prototype.map_changed=Vd.prototype.visible_changed=function(){var a=this;_.M("poly",function(b){b.R(a)})};Vd.prototype.getPath=function(){return this.get("latLngs").getAt(0)};Vd.prototype.setPath=function(a){try{this.get("latLngs").setAt(0,Qd(a))}catch(b){_.yb(b)}};_.uc(Vd.prototype,{draggable:_.Mg,editable:_.Mg,map:_.Ah,visible:_.Mg});_.v(_.Wd,Vd);_.Wd.prototype.Bb=!0;_.Wd.prototype.getPaths=function(){return this.get("latLngs")};_.Wd.prototype.setPaths=function(a){this.set("latLngs",Ud(a))};_.v(_.Xd,Vd);_.Xd.prototype.Bb=!1;_.Zd="click dblclick mousedown mousemove mouseout mouseover mouseup rightclick".split(" ");_.v($d,_.J);_.t=$d.prototype;_.t.contains=function(a){return this.j.contains(a)};_.t.getFeatureById=function(a){return this.j.getFeatureById(a)};_.t.add=function(a){return this.j.add(a)};_.t.remove=function(a){this.j.remove(a)};_.t.forEach=function(a){this.j.forEach(a)};_.t.addGeoJson=function(a,b){return _.Yd(this.j,a,b)};_.t.loadGeoJson=function(a,b,c){var d=this.j;_.M("data",function(e){e.rn(d,a,b,c)})};_.t.toGeoJson=function(a){var b=this.j;_.M("data",function(c){c.nn(b,a)})};
_.t.overrideStyle=function(a,b){this.R.overrideStyle(a,b)};_.t.revertStyle=function(a){this.R.revertStyle(a)};_.t.controls_changed=function(){this.get("controls")&&ae(this)};_.t.drawingMode_changed=function(){this.get("drawingMode")&&ae(this)};_.uc($d.prototype,{map:_.Ah,style:_.Cc,controls:_.Gb(_.Db(_.Cb(Ig))),controlPosition:_.Gb(_.Cb(_.mf)),drawingMode:_.Gb(_.Cb(Ig))});_.be.prototype.$=_.m("j");_.ce.prototype.$=_.m("j");_.Ch=new _.be;_.Dh=new _.be;de.prototype.$=_.m("j");_.Eh=new _.ee;_.ee.prototype.$=_.m("j");_.Fh=new _.be;_.Gh=new de;_.fe.prototype.$=_.m("j");_.Hh=new _.ce;_.Ih=new _.fe;_.Jh={METRIC:0,IMPERIAL:1};_.Kh={DRIVING:"DRIVING",WALKING:"WALKING",BICYCLING:"BICYCLING",TRANSIT:"TRANSIT"};_.Lh={BEST_GUESS:"bestguess",OPTIMISTIC:"optimistic",PESSIMISTIC:"pessimistic"};_.Mh={BUS:"BUS",RAIL:"RAIL",SUBWAY:"SUBWAY",TRAIN:"TRAIN",TRAM:"TRAM"};_.Nh={LESS_WALKING:"LESS_WALKING",FEWER_TRANSFERS:"FEWER_TRANSFERS"};var Oh=_.zb({routes:_.Db(_.Eb(_.Ra))},!0);_.v(_.ge,_.J);_.uc(_.ge.prototype,{content:_.Fb(_.Lg,_.Eb(Ab)),position:_.Gb(_.Yb),size:_.Gb(sc),map:_.Fb(_.Ah,Bh),anchor:_.Gb(_.Bb(_.J,"MVCObject")),zIndex:_.Kg});_.ge.prototype.open=function(a,b){this.set("anchor",b);this.set("map",a)};_.ge.prototype.close=function(){this.set("map",null)};_.v(he,_.J);he.prototype.changed=function(a){if("map"==a||"panel"==a){var b=this;_.M("directions",function(c){c.R(b,a)})}};_.uc(he.prototype,{directions:Oh,map:_.Ah,panel:_.Gb(_.Eb(Ab)),routeIndex:_.Kg});_.Ph=new _.ie;je.prototype.route=function(a,b){_.M("directions",function(c){c.j(a,b,!0)})};ke.prototype.getDistanceMatrix=function(a,b){_.M("distance_matrix",function(c){c.j(a,b)})};le.prototype.getElevationAlongPath=function(a,b){_.M("elevation",function(c){c.j(a,b)})};le.prototype.getElevationForLocations=function(a,b){_.M("elevation",function(c){c.R(a,b)})};_.Qh=_.Bb(_.od,"LatLngBounds");_.me.prototype.geocode=function(a,b){_.M("geocoder",function(c){c.geocode(a,b)})};_.v(_.ne,_.J);_.ne.prototype.map_changed=function(){var a=this;_.M("kml",function(b){b.j(a)})};_.uc(_.ne.prototype,{map:_.Ah,url:null,bounds:null,opacity:_.Kg});_.Sh={UNKNOWN:"UNKNOWN",OK:_.ha,INVALID_REQUEST:_.ba,DOCUMENT_NOT_FOUND:"DOCUMENT_NOT_FOUND",FETCH_ERROR:"FETCH_ERROR",INVALID_DOCUMENT:"INVALID_DOCUMENT",DOCUMENT_TOO_LARGE:"DOCUMENT_TOO_LARGE",LIMITS_EXCEEDED:"LIMITS_EXECEEDED",TIMED_OUT:"TIMED_OUT"};_.v(oe,_.J);_.t=oe.prototype;_.t.Xe=function(){var a=this;_.M("kml",function(b){b.R(a)})};_.t.url_changed=oe.prototype.Xe;_.t.driveFileId_changed=oe.prototype.Xe;_.t.map_changed=oe.prototype.Xe;_.t.zIndex_changed=oe.prototype.Xe;_.uc(oe.prototype,{map:_.Ah,defaultViewport:null,metadata:null,status:null,url:_.Lg,screenOverlays:_.Mg,zIndex:_.Kg});_.v(_.pe,_.J);_.pe.prototype.map_changed=function(){var a=this;_.M("layers",function(b){b.j(a)})};_.uc(_.pe.prototype,{map:_.Ah});_.v(qe,_.J);qe.prototype.map_changed=function(){var a=this;_.M("layers",function(b){b.R(a)})};_.uc(qe.prototype,{map:_.Ah});_.v(re,_.J);re.prototype.map_changed=function(){var a=this;_.M("layers",function(b){b.S(a)})};_.uc(re.prototype,{map:_.Ah});_.lf={japan_prequake:20,japan_postquake2010:24};_.Th={NEAREST:"nearest",BEST:"best"};_.Uh={DEFAULT:"default",OUTDOOR:"outdoor"};se.prototype.$=_.m("j");_.Vh=new se;var Wh,Xh,Yh,Zh,$h;te.prototype.$=_.m("j");var ai=new ue,bi=new ve,ze=new we,ci=new xe;ue.prototype.$=_.m("j");ve.prototype.$=_.m("j");we.prototype.$=_.m("j");xe.prototype.$=_.m("j");_.Be.prototype.$=_.m("j");_.di=new _.Be;_.ei=new _.Be;var df,ef,Ye,gf,jf;_.Ce.prototype.$=_.m("j");_.Ce.prototype.getUrl=function(a){return _.Q(this.j,0)[a]};_.Ce.prototype.setUrl=function(a,b){_.Q(this.j,0)[a]=b};_.De.prototype.$=_.m("j");_.Ie.prototype.$=_.m("j");_.fi=new _.Ce;_.gi=new _.Ce;_.hi=new _.Ce;_.ii=new _.Ce;_.ji=new _.Ce;Je.prototype.$=_.m("j");Ke.prototype.$=_.m("j");Le.prototype.$=_.m("j");Me.prototype.$=_.m("j");_.ki=new _.Ie;_.li=new _.De;df=new Je;ef=new Ke;Ye=new Le;_.mi=new _.Oe;_.ni=new _.Pe;gf=new te;jf=new Ne;Ne.prototype.$=_.m("j");
_.Oe.prototype.$=_.m("j");_.Pe.prototype.$=_.m("j");_.v(nf,_.Bc);nf.prototype.visible_changed=function(){var a=this;!a.V&&a.getVisible()&&(a.V=!0,_.M("streetview",function(b){var c;a.R&&(c=a.R);b.mp(a,c)}))};_.uc(nf.prototype,{visible:_.Mg,pano:_.Lg,position:_.Gb(_.Yb),pov:_.Gb(Qg),photographerPov:null,location:null,links:_.Db(_.Eb(_.Ra)),status:null,zoom:_.Kg,enableCloseButton:_.Mg});nf.prototype.registerPanoProvider=_.tc("panoProvider");_.t=_.pf.prototype;_.t.jf=_.ra(3);_.t.vc=_.ra(4);_.t.Qe=_.ra(5);_.t.Pe=_.ra(6);_.t.Oe=_.ra(7);_.v(qf,Tc);_.rf.prototype.addListener=function(a,b){this.Ga.addListener(a,b)};_.rf.prototype.addListenerOnce=function(a,b){this.Ga.addListenerOnce(a,b)};_.rf.prototype.removeListener=function(a,b){this.Ga.removeListener(a,b)};_.rf.prototype.j=_.ra(8);_.T={};_.sf.prototype.fromLatLngToPoint=function(a,b){var c=b||new _.N(0,0),d=this.j;c.x=d.x+a.lng()*this.S;var e=_.Ka(Math.sin(_.K(a.lat())),-(1-1E-15),1-1E-15);c.y=d.y+.5*Math.log((1+e)/(1-e))*-this.U;return c};_.sf.prototype.fromPointToLatLng=function(a,b){var c=this.j;return new _.L(_.Tb(2*Math.atan(Math.exp((a.y-c.y)/-this.U))-Math.PI/2),(a.x-c.x)/this.S,b)};_.tf.prototype.isEmpty=function(){return!(this.Ba<this.Da&&this.Aa<this.Fa)};_.tf.prototype.extend=function(a){a&&(this.Ba=Math.min(this.Ba,a.x),this.Da=Math.max(this.Da,a.x),this.Aa=Math.min(this.Aa,a.y),this.Fa=Math.max(this.Fa,a.y))};_.tf.prototype.getCenter=function(){return new _.N((this.Ba+this.Da)/2,(this.Aa+this.Fa)/2)};_.oi=_.uf(-window.Infinity,-window.Infinity,window.Infinity,window.Infinity);_.pi=_.uf(0,0,0,0);_.v(_.xf,_.J);_.xf.prototype.Ca=function(){var a=this;a.ua||(a.ua=window.setTimeout(function(){a.ua=void 0;a.Na()},a.tl))};_.xf.prototype.ma=function(){this.ua&&window.clearTimeout(this.ua);this.ua=void 0;this.Na()};var qi,ri;Bf.prototype.$=_.m("j");Cf.prototype.$=_.m("j");var si=new Bf;var ti,ui;Df.prototype.$=_.m("j");Ef.prototype.$=_.m("j");var vi;Ff.prototype.$=_.m("j");Ff.prototype.getZoom=function(){var a=this.j[2];return null!=a?a:0};Ff.prototype.setZoom=function(a){this.j[2]=a};var wi=new Df,xi=new Ef,yi=new Cf,zi=new te;_.v(Gf,_.xf);var Hf={roadmap:0,satellite:2,hybrid:3,terrain:4},Ai={0:1,2:2,3:2,4:2};_.t=Gf.prototype;_.t.Zi=_.P("center");_.t.mi=_.P("zoom");_.t.changed=function(){var a=this.Zi(),b=this.mi(),c=If(this);if(a&&!a.j(this.va)||this.ta!=b||this.ya!=c)Jf(this.R),this.Ca(),this.ta=b,this.ya=c;this.va=a};
_.t.Na=function(){var a="",b=this.Zi(),c=this.mi(),d=If(this),e=this.get("size");if(b&&(0,window.isFinite)(b.lat())&&(0,window.isFinite)(b.lng())&&1<c&&null!=d&&e&&e.width&&e.height&&this.j){_.yf(this.j,e);var f;(b=_.vf(this.U,b,c))?(f=new _.tf,f.Ba=Math.round(b.x-e.width/2),f.Da=f.Ba+e.width,f.Aa=Math.round(b.y-e.height/2),f.Fa=f.Aa+e.height):f=null;b=Ai[d];if(f){var a=new Ff,g;a.j[0]=a.j[0]||[];g=new Df(a.j[0]);g.j[0]=f.Ba;g.j[1]=f.Aa;a.j[1]=b;a.setZoom(c);a.j[3]=a.j[3]||[];c=new Ef(a.j[3]);c.j[0]=
f.Da-f.Ba;c.j[1]=f.Fa-f.Aa;a.j[4]=a.j[4]||[];c=new Cf(a.j[4]);c.j[0]=d;c.j[4]=_.Qe(_.Se(_.S));c.j[5]=_.Re(_.Se(_.S)).toLowerCase();c.j[9]=!0;c.j[11]=!0;d=this.W+(0,window.unescape)("%3F");vi||(c=[],vi={qa:-1,ra:c},ti||(b=[],ti={qa:-1,ra:b},b[1]={type:"i",label:1,T:0},b[2]={type:"i",label:1,T:0}),c[1]={type:"m",label:1,T:wi,ka:ti},c[2]={type:"e",label:1,T:0},c[3]={type:"u",label:1,T:0},ui||(b=[],ui={qa:-1,ra:b},b[1]={type:"u",label:1,T:0},b[2]={type:"u",label:1,T:0},b[3]={type:"e",label:1,T:1}),c[4]=
{type:"m",label:1,T:xi,ka:ui},ri||(b=[],ri={qa:-1,ra:b},b[1]={type:"e",label:1,T:0},b[2]={type:"b",label:1,T:!1},b[3]={type:"b",label:1,T:!1},b[5]={type:"s",label:1,T:""},b[6]={type:"s",label:1,T:""},qi||(f=[],qi={qa:-1,ra:f},f[1]={type:"e",label:3},f[2]={type:"b",label:1,T:!1}),b[9]={type:"m",label:1,T:si,ka:qi},b[10]={type:"b",label:1,T:!1},b[11]={type:"b",label:1,T:!1},b[12]={type:"b",label:1,T:!1},b[100]={type:"b",label:1,T:!1}),c[5]={type:"m",label:1,T:yi,ka:ri},Wh||(b=[],Wh={qa:-1,ra:b},Xh||
(f=[],Xh={qa:-1,ra:f},f[1]={type:"b",label:1,T:!1}),b[1]={type:"m",label:1,T:ai,ka:Xh},Yh||(f=[],Yh={qa:-1,ra:f},f[1]={type:"b",label:1,T:!1}),b[12]={type:"m",label:1,T:bi,ka:Yh},Zh||(f=[],Zh={qa:-1,ra:f},f[9]={type:"j",label:1,T:0},f[10]={type:"j",label:1,T:0},f[14]={type:"s",label:1,T:""}),b[11]={type:"m",label:1,T:ze,ka:Zh},$h||(f=[],$h={qa:-1,ra:f},f[1]={type:"b",label:1,T:!1},f[2]={type:"b",label:1,T:!1}),b[10]={type:"m",label:1,T:ci,ka:$h}),c[6]={type:"m",label:1,T:zi,ka:Wh});a=_.Wg.j(a.j,vi);
a=this.V(d+a)}}this.R&&e&&(_.yf(this.R,e),e=a,a=this.R,e!=a.src?(Jf(a),a.onload=_.Wa(this,this.ni,!0),a.onerror=_.Wa(this,this.ni,!1),a.src=e):!a.parentNode&&e&&this.j.appendChild(a))};_.t.ni=function(a){var b=this.R;b.onload=null;b.onerror=null;a&&(b.parentNode||this.j.appendChild(b),_.yf(b,this.get("size")),_.I.trigger(this,"staticmaploaded"),this.S.set(_.Fa()));this.set("loading",!1)};
_.t.div_changed=function(){var a=this.get("div"),b=this.j;if(a)if(b)a.appendChild(b);else{b=this.j=window.document.createElement("div");b.style.overflow="hidden";var c=this.R=window.document.createElement("img");_.I.addDomListener(b,"contextmenu",_.cb);c.ontouchstart=c.ontouchmove=c.ontouchend=c.ontouchcancel=_.db;_.yf(c,_.Og);a.appendChild(b);this.Na()}else b&&(Jf(b),this.j=null)};var Qf;_.dg="StopIteration"in _.ad?_.ad.StopIteration:{message:"StopIteration",stack:""};_.Sf.prototype.next=function(){throw _.dg;};_.Sf.prototype.yg=function(){return this};_.Tf.prototype.Zg=!0;_.Tf.prototype.od=_.ra(10);_.Tf.prototype.lj=!0;_.Tf.prototype.Af=_.ra(12);_.Uf("about:blank");_.Wf.prototype.lj=!0;_.Wf.prototype.Af=_.ra(11);_.Wf.prototype.Zg=!0;_.Wf.prototype.od=_.ra(9);_.Vf={};_.Xf("<!DOCTYPE html>",0);_.Xf("",0);_.Xf("<br>",0);!_.ah&&!_.Zg||_.Zg&&9<=Number(_.nh)||_.ah&&_.ed("1.9.1");_.Zg&&_.ed("9");_.v($f,_.Sf);$f.prototype.setPosition=function(a,b,c){if(this.node=a)this.R=_.ya(b)?b:1!=this.node.nodeType?0:this.j?-1:1;_.ya(c)&&(this.depth=c)};
$f.prototype.next=function(){var a;if(this.S){if(!this.node||this.U&&0==this.depth)throw _.dg;a=this.node;var b=this.j?-1:1;if(this.R==b){var c=this.j?a.lastChild:a.firstChild;c?this.setPosition(c):this.setPosition(a,-1*b)}else(c=this.j?a.previousSibling:a.nextSibling)?this.setPosition(c):this.setPosition(a.parentNode,-1*b);this.depth+=this.R*(this.j?-1:1)}else this.S=!0;a=this.node;if(!this.node)throw _.dg;return a};
$f.prototype.splice=function(a){var b=this.node,c=this.j?1:-1;this.R==c&&(this.R=-1*c,this.depth+=this.R*(this.j?-1:1));this.j=!this.j;$f.prototype.next.call(this);this.j=!this.j;for(var c=_.wa(arguments[0])?arguments[0]:arguments,d=c.length-1;0<=d;d--)_.Yf(c[d],b);_.Zf(b)};_.v(ag,$f);ag.prototype.next=function(){do ag.rd.next.call(this);while(-1==this.R);return this.node};_.Ci=_.ad.document&&_.ad.document.createElement("div");_.v(_.hg,_.sd);_.t=_.hg.prototype;_.t.streetView_changed=function(){this.get("streetView")||this.set("streetView",this.__gm.S)};_.t.getDiv=function(){return this.__gm.Ia};_.t.panBy=function(a,b){var c=this.__gm;_.M("map",function(){_.I.trigger(c,"panby",a,b)})};_.t.panTo=function(a){var b=this.__gm;a=_.Yb(a);_.M("map",function(){_.I.trigger(b,"panto",a)})};_.t.panToBounds=function(a){var b=this.__gm,c=_.rd(a);_.M("map",function(){_.I.trigger(b,"pantolatlngbounds",c)})};
_.t.fitBounds=function(a){var b=this;a=_.rd(a);_.M("map",function(c){c.fitBounds(b,a)})};_.uc(_.hg.prototype,{bounds:null,streetView:Bh,center:_.Gb(_.Yb),zoom:_.Kg,mapTypeId:_.Lg,projection:null,heading:_.Kg,tilt:_.Kg});ig.prototype.getMaxZoomAtLatLng=function(a,b){_.M("maxzoom",function(c){c.getMaxZoomAtLatLng(a,b)})};_.v(jg,_.J);jg.prototype.changed=function(a){if("suppressInfoWindows"!=a&&"clickable"!=a){var b=this;_.M("onion",function(a){a.j(b)})}};_.uc(jg.prototype,{map:_.Ah,tableId:_.Kg,query:_.Gb(_.Fb(_.Jg,_.Eb(_.Ra,"not an Object")))});_.v(_.kg,_.J);_.kg.prototype.map_changed=function(){var a=this;_.M("overlay",function(b){b.j(a)})};_.uc(_.kg.prototype,{panes:null,projection:null,map:_.Fb(_.Ah,Bh)});_.v(_.lg,_.J);_.lg.prototype.map_changed=_.lg.prototype.visible_changed=function(){var a=this;_.M("poly",function(b){b.j(a)})};_.lg.prototype.center_changed=function(){_.I.trigger(this,"bounds_changed")};_.lg.prototype.radius_changed=_.lg.prototype.center_changed;_.lg.prototype.getBounds=function(){var a=this.get("radius"),b=this.get("center");if(b&&_.F(a)){var c=this.get("map"),c=c&&c.__gm.get("mapType");return _.wf(b,a/_.Od(c))}return null};
_.uc(_.lg.prototype,{center:_.Gb(_.Yb),draggable:_.Mg,editable:_.Mg,map:_.Ah,radius:_.Kg,visible:_.Mg});_.v(_.mg,_.J);_.mg.prototype.map_changed=_.mg.prototype.visible_changed=function(){var a=this;_.M("poly",function(b){b.S(a)})};_.uc(_.mg.prototype,{draggable:_.Mg,editable:_.Mg,bounds:_.Gb(_.rd),map:_.Ah,visible:_.Mg});_.v(ng,_.J);ng.prototype.map_changed=function(){var a=this;_.M("streetview",function(b){b.Am(a)})};_.uc(ng.prototype,{map:_.Ah});_.og.prototype.getPanorama=function(a,b){var c=this.j||void 0;_.M("streetview",function(d){_.M("geometry",function(e){d.An(a,b,e.computeHeading,c)})})};_.og.prototype.getPanoramaByLocation=function(a,b,c){this.getPanorama({location:a,radius:b,preference:50>(b||0)?"best":"nearest"},c)};_.og.prototype.getPanoramaById=function(a,b){this.getPanorama({pano:a},b)};_.v(_.pg,_.J);_.t=_.pg.prototype;_.t.getTile=function(a,b,c){if(!a||!c)return null;var d=c.createElement("div");c={Oa:a,zoom:b,Fc:null};d.__gmimt=c;_.yc(this.j,d);var e=rg(this);1!=e&&qg(d,e);if(this.R){var e=this.tileSize||new _.O(256,256),f=this.S(a,b);c.Fc=this.R(a,b,e,d,f,function(){_.I.trigger(d,"load")})}return d};_.t.releaseTile=function(a){a&&this.j.contains(a)&&(this.j.remove(a),(a=a.__gmimt.Fc)&&a.release())};_.t.Qg=_.ra(13);_.t.lp=function(){this.R&&this.j.forEach(function(a){a.__gmimt.Fc.jc()})};
_.t.opacity_changed=function(){var a=rg(this);this.j.forEach(function(b){qg(b,a)})};_.t.Zd=!0;_.uc(_.pg.prototype,{opacity:_.Kg});_.v(_.sg,_.J);_.sg.prototype.getTile=Rg;_.sg.prototype.tileSize=new _.O(256,256);_.sg.prototype.Zd=!0;_.v(_.wg,_.sg);_.v(_.xg,_.J);_.uc(_.xg.prototype,{attribution:_.Gb(vh),place:_.Gb(wh)});var Di={Animation:{BOUNCE:1,DROP:2,ar:3,Yq:4},Circle:_.lg,ControlPosition:_.mf,Data:$d,GroundOverlay:_.ne,ImageMapType:_.pg,InfoWindow:_.ge,LatLng:_.L,LatLngBounds:_.od,MVCArray:_.wc,MVCObject:_.J,Map:_.hg,MapTypeControlStyle:{DEFAULT:0,HORIZONTAL_BAR:1,DROPDOWN_MENU:2,INSET:3,INSET_LARGE:4},MapTypeId:_.Hg,MapTypeRegistry:gd,Marker:_.Md,MarkerImage:function(a,b,c,d,e){this.url=a;this.size=b||e;this.origin=c;this.anchor=d;this.scaledSize=e;this.labelOrigin=null},NavigationControlStyle:{DEFAULT:0,SMALL:1,
ANDROID:2,ZOOM_PAN:3,br:4,hm:5},OverlayView:_.kg,Point:_.N,Polygon:_.Wd,Polyline:_.Xd,Rectangle:_.mg,ScaleControlStyle:{DEFAULT:0},Size:_.O,StreetViewPreference:_.Th,StreetViewSource:_.Uh,StrokePosition:{CENTER:0,INSIDE:1,OUTSIDE:2},SymbolPath:Pg,ZoomControlStyle:{DEFAULT:0,SMALL:1,LARGE:2,hm:3},event:_.I};
_.Ia(Di,{BicyclingLayer:_.pe,DirectionsRenderer:he,DirectionsService:je,DirectionsStatus:{OK:_.ha,UNKNOWN_ERROR:_.ka,OVER_QUERY_LIMIT:_.ia,REQUEST_DENIED:_.ja,INVALID_REQUEST:_.ba,ZERO_RESULTS:_.la,MAX_WAYPOINTS_EXCEEDED:_.fa,NOT_FOUND:_.ga},DirectionsTravelMode:_.Kh,DirectionsUnitSystem:_.Jh,DistanceMatrixService:ke,DistanceMatrixStatus:{OK:_.ha,INVALID_REQUEST:_.ba,OVER_QUERY_LIMIT:_.ia,REQUEST_DENIED:_.ja,UNKNOWN_ERROR:_.ka,MAX_ELEMENTS_EXCEEDED:_.da,MAX_DIMENSIONS_EXCEEDED:_.ca},DistanceMatrixElementStatus:{OK:_.ha,
NOT_FOUND:_.ga,ZERO_RESULTS:_.la},ElevationService:le,ElevationStatus:{OK:_.ha,UNKNOWN_ERROR:_.ka,OVER_QUERY_LIMIT:_.ia,REQUEST_DENIED:_.ja,INVALID_REQUEST:_.ba,Vq:"DATA_NOT_AVAILABLE"},FusionTablesLayer:jg,Geocoder:_.me,GeocoderLocationType:{ROOFTOP:"ROOFTOP",RANGE_INTERPOLATED:"RANGE_INTERPOLATED",GEOMETRIC_CENTER:"GEOMETRIC_CENTER",APPROXIMATE:"APPROXIMATE"},GeocoderStatus:{OK:_.ha,UNKNOWN_ERROR:_.ka,OVER_QUERY_LIMIT:_.ia,REQUEST_DENIED:_.ja,INVALID_REQUEST:_.ba,ZERO_RESULTS:_.la,ERROR:_.aa},KmlLayer:oe,
KmlLayerStatus:_.Sh,MaxZoomService:ig,MaxZoomStatus:{OK:_.ha,ERROR:_.aa},SaveWidget:_.xg,StreetViewCoverageLayer:ng,StreetViewPanorama:nf,StreetViewService:_.og,StreetViewStatus:{OK:_.ha,UNKNOWN_ERROR:_.ka,ZERO_RESULTS:_.la},StyledMapType:_.wg,TrafficLayer:qe,TrafficModel:_.Lh,TransitLayer:re,TransitMode:_.Mh,TransitRoutePreference:_.Nh,TravelMode:_.Kh,UnitSystem:_.Jh});_.Ia($d,{Feature:_.pc,Geometry:vb,GeometryCollection:_.zd,LineString:_.Bd,LinearRing:_.Fd,MultiLineString:_.Dd,MultiPoint:_.Ed,MultiPolygon:_.Jd,Point:_.Zb,Polygon:_.Hd});var Ag=/'/g,Bg;_.nc("main",{});window.google.maps.Load(function(a,b){var c=window.google.maps;Fg();var d=Gg(c);_.S=new Me(a);_.Ji=Math.random()<_.$e();_.Ki=Math.round(1E15*Math.random()).toString(36);_.gg=Cg();_.Rh=Dg();_.Bi=new _.wc;_.Of=b;for(var e=0;e<_.Wc(_.S.j,8);++e)_.T[hf(e)]=!0;e=_.ff();Ld(We(e));_.Ha(Di,function(a,b){c[a]=b});c.version=_.Xe(e);window.setTimeout(function(){oc(["util","stats"],function(a,b){a.R.j();a.S();d&&b.j.j({ev:"api_alreadyloaded",client:_.af(_.S),key:_.cf()})})},5E3);_.I.Gp();Qf=new Pf;(e=bf())&&
oc(_.Q(_.S.j,12),Eg(e),!0)});}).call(this,{});


(function(){"use strict";var root=this,previous=root.Chart;var Chart=function(context){var chart=this;this.canvas=context.canvas;this.ctx=context;var width=this.width=context.canvas.width;var height=this.height=context.canvas.height;this.aspectRatio=this.width/this.height;helpers.retinaScale(this);return this;};Chart.defaults={global:{animation:true,animationSteps:60,animationEasing:"easeOutQuart",showScale:true,scaleOverride:false,scaleSteps:null,scaleStepWidth:null,scaleStartValue:null,scaleLineColor:"rgba(0,0,0,.1)",scaleLineWidth:1,scaleShowLabels:true,scaleLabel:"<%=value%>",scaleIntegersOnly:true,scaleBeginAtZero:false,scaleFontFamily:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",scaleFontSize:12,scaleFontStyle:"normal",scaleFontColor:"#666",responsive:false,showTooltips:true,tooltipEvents:["mousemove","touchstart","touchmove","mouseout"],tooltipFillColor:"rgba(0,0,0,0.8)",tooltipFontFamily:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",tooltipFontSize:14,tooltipFontStyle:"normal",tooltipFontColor:"#fff",tooltipTitleFontFamily:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",tooltipTitleFontSize:14,tooltipTitleFontStyle:"bold",tooltipTitleFontColor:"#fff",tooltipYPadding:6,tooltipXPadding:6,tooltipCaretSize:8,tooltipCornerRadius:6,tooltipXOffset:10,tooltipTemplate:"<%if (label){%><%=label%>: <%}%><%= value %>",multiTooltipTemplate:"<%= value %>",multiTooltipKeyBackground:'#fff',onAnimationProgress:function(){},onAnimationComplete:function(){}}};Chart.types={};var helpers=Chart.helpers={};var each=helpers.each=function(loopable,callback,self){var additionalArgs=Array.prototype.slice.call(arguments,3);if(loopable){if(loopable.length===+loopable.length){var i;for(i=0;i<loopable.length;i++){callback.apply(self,[loopable[i],i].concat(additionalArgs));}}
else{for(var item in loopable){callback.apply(self,[loopable[item],item].concat(additionalArgs));}}}},clone=helpers.clone=function(obj){var objClone={};each(obj,function(value,key){if(obj.hasOwnProperty(key))objClone[key]=value;});return objClone;},extend=helpers.extend=function(base){each(Array.prototype.slice.call(arguments,1),function(extensionObject){each(extensionObject,function(value,key){if(extensionObject.hasOwnProperty(key))base[key]=value;});});return base;},merge=helpers.merge=function(base,master){var args=Array.prototype.slice.call(arguments,0);args.unshift({});return extend.apply(null,args);},indexOf=helpers.indexOf=function(arrayToSearch,item){if(Array.prototype.indexOf){return arrayToSearch.indexOf(item);}
else{for(var i=0;i<arrayToSearch.length;i++){if(arrayToSearch[i]===item)return i;}
return-1;}},inherits=helpers.inherits=function(extensions){var parent=this;var ChartElement=(extensions&&extensions.hasOwnProperty("constructor"))?extensions.constructor:function(){return parent.apply(this,arguments);};var Surrogate=function(){this.constructor=ChartElement;};Surrogate.prototype=parent.prototype;ChartElement.prototype=new Surrogate();ChartElement.extend=inherits;if(extensions)extend(ChartElement.prototype,extensions);ChartElement.__super__=parent.prototype;return ChartElement;},noop=helpers.noop=function(){},uid=helpers.uid=(function(){var id=0;return function(){return"chart-"+id++;};})(),warn=helpers.warn=function(str){if(window.console&&typeof window.console.warn=="function")console.warn(str);},amd=helpers.amd=(typeof root.define=='function'&&root.define.amd),isNumber=helpers.isNumber=function(n){return!isNaN(parseFloat(n))&&isFinite(n);},max=helpers.max=function(array){return Math.max.apply(Math,array);},min=helpers.min=function(array){return Math.min.apply(Math,array);},cap=helpers.cap=function(valueToCap,maxValue,minValue){if(isNumber(maxValue)){if(valueToCap>maxValue){return maxValue;}}
else if(isNumber(minValue)){if(valueToCap<minValue){return minValue;}}
return valueToCap;},getDecimalPlaces=helpers.getDecimalPlaces=function(num){if(num%1!==0&&isNumber(num)){return num.toString().split(".")[1].length;}
else{return 0;}},toRadians=helpers.radians=function(degrees){return degrees*(Math.PI/180);},getAngleFromPoint=helpers.getAngleFromPoint=function(centrePoint,anglePoint){var distanceFromXCenter=anglePoint.x-centrePoint.x,distanceFromYCenter=anglePoint.y-centrePoint.y,radialDistanceFromCenter=Math.sqrt(distanceFromXCenter*distanceFromXCenter+distanceFromYCenter*distanceFromYCenter);var angle=Math.PI*2+Math.atan2(distanceFromYCenter,distanceFromXCenter);if(distanceFromXCenter<0&&distanceFromYCenter<0){angle+=Math.PI*2;}
return{angle:angle,distance:radialDistanceFromCenter};},aliasPixel=helpers.aliasPixel=function(pixelWidth){return(pixelWidth%2===0)?0:0.5;},splineCurve=helpers.splineCurve=function(FirstPoint,MiddlePoint,AfterPoint,t){var d01=Math.sqrt(Math.pow(MiddlePoint.x-FirstPoint.x,2)+Math.pow(MiddlePoint.y-FirstPoint.y,2)),d12=Math.sqrt(Math.pow(AfterPoint.x-MiddlePoint.x,2)+Math.pow(AfterPoint.y-MiddlePoint.y,2)),fa=t*d01/(d01+d12),fb=t*d12/(d01+d12);return{inner:{x:MiddlePoint.x-fa*(AfterPoint.x-FirstPoint.x),y:MiddlePoint.y-fa*(AfterPoint.y-FirstPoint.y)},outer:{x:MiddlePoint.x+fb*(AfterPoint.x-FirstPoint.x),y:MiddlePoint.y+fb*(AfterPoint.y-FirstPoint.y)}};},calculateOrderOfMagnitude=helpers.calculateOrderOfMagnitude=function(val){return Math.floor(Math.log(val)/Math.LN10);},calculateScaleRange=helpers.calculateScaleRange=function(valuesArray,drawingSize,textSize,startFromZero,integersOnly){var minSteps=2,maxSteps=Math.floor(drawingSize/(textSize*1.5)),skipFitting=(minSteps>=maxSteps);var maxValue=max(valuesArray),minValue=min(valuesArray);if(maxValue===minValue){maxValue+=0.5;if(minValue>=0.5&&!startFromZero){minValue-=0.5;}
else{maxValue+=0.5;}}
var valueRange=Math.abs(maxValue-minValue),rangeOrderOfMagnitude=calculateOrderOfMagnitude(valueRange),graphMax=Math.ceil(maxValue/(1*Math.pow(10,rangeOrderOfMagnitude)))*Math.pow(10,rangeOrderOfMagnitude),graphMin=(startFromZero)?0:Math.floor(minValue/(1*Math.pow(10,rangeOrderOfMagnitude)))*Math.pow(10,rangeOrderOfMagnitude),graphRange=graphMax-graphMin,stepValue=Math.pow(10,rangeOrderOfMagnitude),numberOfSteps=Math.round(graphRange/stepValue);while((numberOfSteps>maxSteps||(numberOfSteps*2)<maxSteps)&&!skipFitting){if(numberOfSteps>maxSteps){stepValue*=2;numberOfSteps=Math.round(graphRange/stepValue);if(numberOfSteps%1!==0){skipFitting=true;}}
else{if(integersOnly&&rangeOrderOfMagnitude>=0){if(stepValue/2%1===0){stepValue/=2;numberOfSteps=Math.round(graphRange/stepValue);}
else{break;}}
else{stepValue/=2;numberOfSteps=Math.round(graphRange/stepValue);}}}
if(skipFitting){numberOfSteps=minSteps;stepValue=graphRange/numberOfSteps;}
return{steps:numberOfSteps,stepValue:stepValue,min:graphMin,max:graphMin+(numberOfSteps*stepValue)};},template=helpers.template=function(templateString,valuesObject){var cache={};function tmpl(str,data){var fn=!/\W/.test(str)?cache[str]=cache[str]:new Function("obj","var p=[],print=function(){p.push.apply(p,arguments);};"+"with(obj){p.push('"+
str.replace(/[\r\t\n]/g," ").split("<%").join("\t").replace(/((^|%>)[^\t]*)'/g,"$1\r").replace(/\t=(.*?)%>/g,"',$1,'").split("\t").join("');").split("%>").join("p.push('").split("\r").join("\\'")+"');}return p.join('');");return data?fn(data):fn;}
return tmpl(templateString,valuesObject);},generateLabels=helpers.generateLabels=function(templateString,numberOfSteps,graphMin,stepValue){var labelsArray=new Array(numberOfSteps);if(labelTemplateString){each(labelsArray,function(val,index){labelsArray[index]=template(templateString,{value:(graphMin+(stepValue*(index+1)))});});}
return labelsArray;},easingEffects=helpers.easingEffects={linear:function(t){return t;},easeInQuad:function(t){return t*t;},easeOutQuad:function(t){return-1*t*(t-2);},easeInOutQuad:function(t){if((t/=1/2)<1)return 1/2*t*t;return-1/2*((--t)*(t-2)-1);},easeInCubic:function(t){return t*t*t;},easeOutCubic:function(t){return 1*((t=t/1-1)*t*t+1);},easeInOutCubic:function(t){if((t/=1/2)<1)return 1/2*t*t*t;return 1/2*((t-=2)*t*t+2);},easeInQuart:function(t){return t*t*t*t;},easeOutQuart:function(t){return-1*((t=t/1-1)*t*t*t-1);},easeInOutQuart:function(t){if((t/=1/2)<1)return 1/2*t*t*t*t;return-1/2*((t-=2)*t*t*t-2);},easeInQuint:function(t){return 1*(t/=1)*t*t*t*t;},easeOutQuint:function(t){return 1*((t=t/1-1)*t*t*t*t+1);},easeInOutQuint:function(t){if((t/=1/2)<1)return 1/2*t*t*t*t*t;return 1/2*((t-=2)*t*t*t*t+2);},easeInSine:function(t){return-1*Math.cos(t/1*(Math.PI/2))+1;},easeOutSine:function(t){return 1*Math.sin(t/1*(Math.PI/2));},easeInOutSine:function(t){return-1/2*(Math.cos(Math.PI*t/1)-1);},easeInExpo:function(t){return(t===0)?1:1*Math.pow(2,10*(t/1-1));},easeOutExpo:function(t){return(t===1)?1:1*(-Math.pow(2,-10*t/1)+1);},easeInOutExpo:function(t){if(t===0)return 0;if(t===1)return 1;if((t/=1/2)<1)return 1/2*Math.pow(2,10*(t-1));return 1/2*(-Math.pow(2,-10* --t)+2);},easeInCirc:function(t){if(t>=1)return t;return-1*(Math.sqrt(1-(t/=1)*t)-1);},easeOutCirc:function(t){return 1*Math.sqrt(1-(t=t/1-1)*t);},easeInOutCirc:function(t){if((t/=1/2)<1)return-1/2*(Math.sqrt(1-t*t)-1);return 1/2*(Math.sqrt(1-(t-=2)*t)+1);},easeInElastic:function(t){var s=1.70158;var p=0;var a=1;if(t===0)return 0;if((t/=1)==1)return 1;if(!p)p=1*0.3;if(a<Math.abs(1)){a=1;s=p/4;}else s=p/(2*Math.PI)*Math.asin(1/a);return-(a*Math.pow(2,10*(t-=1))*Math.sin((t*1-s)*(2*Math.PI)/p));},easeOutElastic:function(t){var s=1.70158;var p=0;var a=1;if(t===0)return 0;if((t/=1)==1)return 1;if(!p)p=1*0.3;if(a<Math.abs(1)){a=1;s=p/4;}else s=p/(2*Math.PI)*Math.asin(1/a);return a*Math.pow(2,-10*t)*Math.sin((t*1-s)*(2*Math.PI)/p)+1;},easeInOutElastic:function(t){var s=1.70158;var p=0;var a=1;if(t===0)return 0;if((t/=1/2)==2)return 1;if(!p)p=1*(0.3*1.5);if(a<Math.abs(1)){a=1;s=p/4;}else s=p/(2*Math.PI)*Math.asin(1/a);if(t<1)return-0.5*(a*Math.pow(2,10*(t-=1))*Math.sin((t*1-s)*(2*Math.PI)/p));return a*Math.pow(2,-10*(t-=1))*Math.sin((t*1-s)*(2*Math.PI)/p)*0.5+1;},easeInBack:function(t){var s=1.70158;return 1*(t/=1)*t*((s+1)*t-s);},easeOutBack:function(t){var s=1.70158;return 1*((t=t/1-1)*t*((s+1)*t+s)+1);},easeInOutBack:function(t){var s=1.70158;if((t/=1/2)<1)return 1/2*(t*t*(((s*=(1.525))+1)*t-s));return 1/2*((t-=2)*t*(((s*=(1.525))+1)*t+s)+2);},easeInBounce:function(t){return 1-easingEffects.easeOutBounce(1-t);},easeOutBounce:function(t){if((t/=1)<(1/2.75)){return 1*(7.5625*t*t);}else if(t<(2/2.75)){return 1*(7.5625*(t-=(1.5/2.75))*t+0.75);}else if(t<(2.5/2.75)){return 1*(7.5625*(t-=(2.25/2.75))*t+0.9375);}else{return 1*(7.5625*(t-=(2.625/2.75))*t+0.984375);}},easeInOutBounce:function(t){if(t<1/2)return easingEffects.easeInBounce(t*2)*0.5;return easingEffects.easeOutBounce(t*2-1)*0.5+1*0.5;}},requestAnimFrame=helpers.requestAnimFrame=(function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(callback){return window.setTimeout(callback,1000/60);};})(),cancelAnimFrame=helpers.cancelAnimFrame=(function(){return window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||window.oCancelAnimationFrame||window.msCancelAnimationFrame||function(callback){return window.clearTimeout(callback,1000/60);};})(),animationLoop=helpers.animationLoop=function(callback,totalSteps,easingString,onProgress,onComplete,chartInstance){var currentStep=0,easingFunction=easingEffects[easingString]||easingEffects.linear;var animationFrame=function(){currentStep++;var stepDecimal=currentStep/totalSteps;var easeDecimal=easingFunction(stepDecimal);callback.call(chartInstance,easeDecimal,stepDecimal,currentStep);onProgress.call(chartInstance,easeDecimal,stepDecimal);if(currentStep<totalSteps){chartInstance.animationFrame=requestAnimFrame(animationFrame);}else{onComplete.apply(chartInstance);}};requestAnimFrame(animationFrame);},getRelativePosition=helpers.getRelativePosition=function(evt){var mouseX,mouseY;var e=evt.originalEvent||evt,canvas=evt.currentTarget||evt.srcElement,boundingRect=canvas.getBoundingClientRect();if(e.touches){mouseX=e.touches[0].clientX-boundingRect.left;mouseY=e.touches[0].clientY-boundingRect.top;}
else{mouseX=e.clientX-boundingRect.left;mouseY=e.clientY-boundingRect.top;}
return{x:mouseX,y:mouseY};},addEvent=helpers.addEvent=function(node,eventType,method){if(node.addEventListener){node.addEventListener(eventType,method);}else if(node.attachEvent){node.attachEvent("on"+eventType,method);}else{node["on"+eventType]=method;}},removeEvent=helpers.removeEvent=function(node,eventType,handler){if(node.removeEventListener){node.removeEventListener(eventType,handler,false);}else if(node.detachEvent){node.detachEvent("on"+eventType,handler);}else{node["on"+eventType]=noop;}},bindEvents=helpers.bindEvents=function(chartInstance,arrayOfEvents,handler){if(!chartInstance.events)chartInstance.events={};each(arrayOfEvents,function(eventName){chartInstance.events[eventName]=function(){handler.apply(chartInstance,arguments);};addEvent(chartInstance.chart.canvas,eventName,chartInstance.events[eventName]);});},unbindEvents=helpers.unbindEvents=function(chartInstance,arrayOfEvents){each(arrayOfEvents,function(handler,eventName){removeEvent(chartInstance.chart.canvas,eventName,handler);});},getMaximumSize=helpers.getMaximumSize=function(domNode){var container=domNode.parentNode;return container.clientWidth;},retinaScale=helpers.retinaScale=function(chart){var ctx=chart.ctx,width=chart.canvas.width,height=chart.canvas.height;if(window.devicePixelRatio){ctx.canvas.style.width=width+"px";ctx.canvas.style.height=height+"px";ctx.canvas.height=height*window.devicePixelRatio;ctx.canvas.width=width*window.devicePixelRatio;ctx.scale(window.devicePixelRatio,window.devicePixelRatio);}},clear=helpers.clear=function(chart){chart.ctx.clearRect(0,0,chart.width,chart.height);},fontString=helpers.fontString=function(pixelSize,fontStyle,fontFamily){return fontStyle+" "+pixelSize+"px "+fontFamily;},longestText=helpers.longestText=function(ctx,font,arrayOfStrings){ctx.font=font;var longest=0;each(arrayOfStrings,function(string){var textWidth=ctx.measureText(string).width;longest=(textWidth>longest)?textWidth:longest;});return longest;},drawRoundedRectangle=helpers.drawRoundedRectangle=function(ctx,x,y,width,height,radius){ctx.beginPath();ctx.moveTo(x+radius,y);ctx.lineTo(x+width-radius,y);ctx.quadraticCurveTo(x+width,y,x+width,y+radius);ctx.lineTo(x+width,y+height-radius);ctx.quadraticCurveTo(x+width,y+height,x+width-radius,y+height);ctx.lineTo(x+radius,y+height);ctx.quadraticCurveTo(x,y+height,x,y+height-radius);ctx.lineTo(x,y+radius);ctx.quadraticCurveTo(x,y,x+radius,y);ctx.closePath();};Chart.instances={};Chart.Type=function(data,options,chart){this.options=options;this.chart=chart;this.id=uid();Chart.instances[this.id]=this;if(options.responsive){this.resize();}
this.initialize.call(this,data);};extend(Chart.Type.prototype,{initialize:function(){return this;},clear:function(){clear(this.chart);return this;},stop:function(){helpers.cancelAnimFrame.call(root,this.animationFrame);return this;},resize:function(callback){this.stop();var canvas=this.chart.canvas,newWidth=getMaximumSize(this.chart.canvas),newHeight=newWidth/this.chart.aspectRatio;canvas.width=this.chart.width=newWidth;canvas.height=this.chart.height=newHeight;retinaScale(this.chart);if(typeof callback==="function"){callback.apply(this,Array.prototype.slice.call(arguments,1));}
return this;},reflow:noop,render:function(reflow){if(reflow){this.reflow();}
if(this.options.animation&&!reflow){helpers.animationLoop(this.draw,this.options.animationSteps,this.options.animationEasing,this.options.onAnimationProgress,this.options.onAnimationComplete,this);}
else{this.draw();this.options.onAnimationComplete.call(this);}
return this;},generateLegend:function(){return template(this.options.legendTemplate,this);},destroy:function(){this.clear();unbindEvents(this,this.events);delete Chart.instances[this.id];},showTooltip:function(ChartElements,forceRedraw){if(typeof this.activeElements==='undefined')this.activeElements=[];var isChanged=(function(Elements){var changed=false;if(Elements.length!==this.activeElements.length){changed=true;return changed;}
each(Elements,function(element,index){if(element!==this.activeElements[index]){changed=true;}},this);return changed;}).call(this,ChartElements);if(!isChanged&&!forceRedraw){return;}
else{this.activeElements=ChartElements;}
this.draw();if(ChartElements.length>0){if(this.datasets&&this.datasets.length>1){var dataArray,dataIndex;for(var i=this.datasets.length-1;i>=0;i--){dataArray=this.datasets[i].points||this.datasets[i].bars||this.datasets[i].segments;dataIndex=indexOf(dataArray,ChartElements[0]);if(dataIndex!==-1){break;}}
var tooltipLabels=[],tooltipColors=[],medianPosition=(function(index){var Elements=[],dataCollection,xPositions=[],yPositions=[],xMax,yMax,xMin,yMin;helpers.each(this.datasets,function(dataset){dataCollection=dataset.points||dataset.bars||dataset.segments;if(dataCollection[dataIndex]){Elements.push(dataCollection[dataIndex]);}});helpers.each(Elements,function(element){xPositions.push(element.x);yPositions.push(element.y);tooltipLabels.push(helpers.template(this.options.multiTooltipTemplate,element));tooltipColors.push({fill:element._saved.fillColor||element.fillColor,stroke:element._saved.strokeColor||element.strokeColor});},this);yMin=min(yPositions);yMax=max(yPositions);xMin=min(xPositions);xMax=max(xPositions);return{x:(xMin>this.chart.width/2)?xMin:xMax,y:(yMin+yMax)/2};}).call(this,dataIndex);new Chart.MultiTooltip({x:medianPosition.x,y:medianPosition.y,xPadding:this.options.tooltipXPadding,yPadding:this.options.tooltipYPadding,xOffset:this.options.tooltipXOffset,fillColor:this.options.tooltipFillColor,textColor:this.options.tooltipFontColor,fontFamily:this.options.tooltipFontFamily,fontStyle:this.options.tooltipFontStyle,fontSize:this.options.tooltipFontSize,titleTextColor:this.options.tooltipTitleFontColor,titleFontFamily:this.options.tooltipTitleFontFamily,titleFontStyle:this.options.tooltipTitleFontStyle,titleFontSize:this.options.tooltipTitleFontSize,cornerRadius:this.options.tooltipCornerRadius,labels:tooltipLabels,legendColors:tooltipColors,legendColorBackground:this.options.multiTooltipKeyBackground,title:ChartElements[0].label,chart:this.chart,ctx:this.chart.ctx}).draw();}else{each(ChartElements,function(Element){var tooltipPosition=Element.tooltipPosition();new Chart.Tooltip({x:Math.round(tooltipPosition.x),y:Math.round(tooltipPosition.y),xPadding:this.options.tooltipXPadding,yPadding:this.options.tooltipYPadding,fillColor:this.options.tooltipFillColor,textColor:this.options.tooltipFontColor,fontFamily:this.options.tooltipFontFamily,fontStyle:this.options.tooltipFontStyle,fontSize:this.options.tooltipFontSize,caretHeight:this.options.tooltipCaretSize,cornerRadius:this.options.tooltipCornerRadius,text:template(this.options.tooltipTemplate,Element),chart:this.chart}).draw();},this);}}
return this;},toBase64Image:function(){return this.chart.canvas.toDataURL.apply(this.chart.canvas,arguments);}});Chart.Type.extend=function(extensions){var parent=this;var ChartType=function(){return parent.apply(this,arguments);};ChartType.prototype=clone(parent.prototype);extend(ChartType.prototype,extensions);ChartType.extend=Chart.Type.extend;if(extensions.name||parent.prototype.name){var chartName=extensions.name||parent.prototype.name;var baseDefaults=(Chart.defaults[parent.prototype.name])?clone(Chart.defaults[parent.prototype.name]):{};Chart.defaults[chartName]=extend(baseDefaults,extensions.defaults);Chart.types[chartName]=ChartType;Chart.prototype[chartName]=function(data,options){var config=merge(Chart.defaults.global,Chart.defaults[chartName],options||{});return new ChartType(data,config,this);};}else{warn("Name not provided for this chart, so it hasn't been registered");}
return parent;};Chart.Element=function(configuration){extend(this,configuration);this.initialize.apply(this,arguments);this.save();};extend(Chart.Element.prototype,{initialize:function(){},restore:function(props){if(!props){extend(this,this._saved);}else{each(props,function(key){this[key]=this._saved[key];},this);}
return this;},save:function(){this._saved=clone(this);delete this._saved._saved;return this;},update:function(newProps){each(newProps,function(value,key){this._saved[key]=this[key];this[key]=value;},this);return this;},transition:function(props,ease){each(props,function(value,key){this[key]=((value-this._saved[key])*ease)+this._saved[key];},this);return this;},tooltipPosition:function(){return{x:this.x,y:this.y};}});Chart.Element.extend=inherits;Chart.Point=Chart.Element.extend({display:true,inRange:function(chartX,chartY){var hitDetectionRange=this.hitDetectionRadius+this.radius;return((Math.pow(chartX-this.x,2)+Math.pow(chartY-this.y,2))<Math.pow(hitDetectionRange,2));},draw:function(){if(this.display){var ctx=this.ctx;ctx.beginPath();ctx.arc(this.x,this.y,this.radius,0,Math.PI*2);ctx.closePath();ctx.strokeStyle=this.strokeColor;ctx.lineWidth=this.strokeWidth;ctx.fillStyle=this.fillColor;ctx.fill();ctx.stroke();}}});Chart.Arc=Chart.Element.extend({inRange:function(chartX,chartY){var pointRelativePosition=helpers.getAngleFromPoint(this,{x:chartX,y:chartY});var betweenAngles=(pointRelativePosition.angle>=this.startAngle&&pointRelativePosition.angle<=this.endAngle),withinRadius=(pointRelativePosition.distance>=this.innerRadius&&pointRelativePosition.distance<=this.outerRadius);return(betweenAngles&&withinRadius);},tooltipPosition:function(){var centreAngle=this.startAngle+((this.endAngle-this.startAngle)/2),rangeFromCentre=(this.outerRadius-this.innerRadius)/2+this.innerRadius;return{x:this.x+(Math.cos(centreAngle)*rangeFromCentre),y:this.y+(Math.sin(centreAngle)*rangeFromCentre)};},draw:function(animationPercent){var easingDecimal=animationPercent||1;var ctx=this.ctx;ctx.beginPath();ctx.arc(this.x,this.y,this.outerRadius,this.startAngle,this.endAngle);ctx.arc(this.x,this.y,this.innerRadius,this.endAngle,this.startAngle,true);ctx.closePath();ctx.strokeStyle=this.strokeColor;ctx.lineWidth=this.strokeWidth;ctx.fillStyle=this.fillColor;ctx.fill();ctx.lineJoin='bevel';if(this.showStroke){ctx.stroke();}}});Chart.Rectangle=Chart.Element.extend({draw:function(){var ctx=this.ctx,halfWidth=this.width/2,leftX=this.x-halfWidth,rightX=this.x+halfWidth,top=this.base-(this.base-this.y),halfStroke=this.strokeWidth/2;if(this.showStroke){leftX+=halfStroke;rightX-=halfStroke;top+=halfStroke;}
ctx.beginPath();ctx.fillStyle=this.fillColor;ctx.strokeStyle=this.strokeColor;ctx.lineWidth=this.strokeWidth;ctx.moveTo(leftX,this.base);ctx.lineTo(leftX,top);ctx.lineTo(rightX,top);ctx.lineTo(rightX,this.base);ctx.fill();if(this.showStroke){ctx.stroke();}},height:function(){return this.base-this.y;},inRange:function(chartX,chartY){return(chartX>=this.x-this.width/2&&chartX<=this.x+this.width/2)&&(chartY>=this.y&&chartY<=this.base);}});Chart.Tooltip=Chart.Element.extend({draw:function(){var ctx=this.chart.ctx;ctx.font=fontString(this.fontSize,this.fontStyle,this.fontFamily);this.xAlign="center";this.yAlign="above";var caretPadding=2;var tooltipWidth=ctx.measureText(this.text).width+2*this.xPadding,tooltipRectHeight=this.fontSize+2*this.yPadding,tooltipHeight=tooltipRectHeight+this.caretHeight+caretPadding;if(this.x+tooltipWidth/2>this.chart.width){this.xAlign="left";}else if(this.x-tooltipWidth/2<0){this.xAlign="right";}
if(this.y-tooltipHeight<0){this.yAlign="below";}
var tooltipX=this.x-tooltipWidth/2,tooltipY=this.y-tooltipHeight;ctx.fillStyle=this.fillColor;switch(this.yAlign){case"above":ctx.beginPath();ctx.moveTo(this.x,this.y-caretPadding);ctx.lineTo(this.x+this.caretHeight,this.y-(caretPadding+this.caretHeight));ctx.lineTo(this.x-this.caretHeight,this.y-(caretPadding+this.caretHeight));ctx.closePath();ctx.fill();break;case"below":tooltipY=this.y+caretPadding+this.caretHeight;ctx.beginPath();ctx.moveTo(this.x,this.y+caretPadding);ctx.lineTo(this.x+this.caretHeight,this.y+caretPadding+this.caretHeight);ctx.lineTo(this.x-this.caretHeight,this.y+caretPadding+this.caretHeight);ctx.closePath();ctx.fill();break;}
switch(this.xAlign){case"left":tooltipX=this.x-tooltipWidth+(this.cornerRadius+this.caretHeight);break;case"right":tooltipX=this.x-(this.cornerRadius+this.caretHeight);break;}
drawRoundedRectangle(ctx,tooltipX,tooltipY,tooltipWidth,tooltipRectHeight,this.cornerRadius);ctx.fill();ctx.fillStyle=this.textColor;ctx.textAlign="center";ctx.textBaseline="middle";ctx.fillText(this.text,tooltipX+tooltipWidth/2,tooltipY+tooltipRectHeight/2);}});Chart.MultiTooltip=Chart.Element.extend({initialize:function(){this.font=fontString(this.fontSize,this.fontStyle,this.fontFamily);this.titleFont=fontString(this.titleFontSize,this.titleFontStyle,this.titleFontFamily);this.height=(this.labels.length*this.fontSize)+((this.labels.length-1)*(this.fontSize/2))+(this.yPadding*2)+this.titleFontSize*1.5;this.ctx.font=this.titleFont;var titleWidth=this.ctx.measureText(this.title).width,labelWidth=longestText(this.ctx,this.font,this.labels)+this.fontSize+3,longestTextWidth=max([labelWidth,titleWidth]);this.width=longestTextWidth+(this.xPadding*2);var halfHeight=this.height/2;if(this.y-halfHeight<0){this.y=halfHeight;}else if(this.y+halfHeight>this.chart.height){this.y=this.chart.height-halfHeight;}
if(this.x>this.chart.width/2){this.x-=this.xOffset+this.width;}else{this.x+=this.xOffset;}},getLineHeight:function(index){var baseLineHeight=this.y-(this.height/2)+this.yPadding,afterTitleIndex=index-1;if(index===0){return baseLineHeight+this.titleFontSize/2;}else{return baseLineHeight+((this.fontSize*1.5*afterTitleIndex)+this.fontSize/2)+this.titleFontSize*1.5;}},draw:function(){drawRoundedRectangle(this.ctx,this.x,this.y-this.height/2,this.width,this.height,this.cornerRadius);var ctx=this.ctx;ctx.fillStyle=this.fillColor;ctx.fill();ctx.closePath();ctx.textAlign="left";ctx.textBaseline="middle";ctx.fillStyle=this.titleTextColor;ctx.font=this.titleFont;ctx.fillText(this.title,this.x+this.xPadding,this.getLineHeight(0));ctx.font=this.font;helpers.each(this.labels,function(label,index){ctx.fillStyle=this.textColor;ctx.fillText(label,this.x+this.xPadding+this.fontSize+3,this.getLineHeight(index+1));ctx.fillStyle=this.legendColorBackground;ctx.fillRect(this.x+this.xPadding,this.getLineHeight(index+1)-this.fontSize/2,this.fontSize,this.fontSize);ctx.fillStyle=this.legendColors[index].fill;ctx.fillRect(this.x+this.xPadding,this.getLineHeight(index+1)-this.fontSize/2,this.fontSize,this.fontSize);},this);}});Chart.Scale=Chart.Element.extend({initialize:function(){this.fit();},buildYLabels:function(){this.yLabels=[];var stepDecimalPlaces=getDecimalPlaces(this.stepValue);for(var i=0;i<=this.steps;i++){this.yLabels.push(template(this.templateString,{value:(this.min+(i*this.stepValue)).toFixed(stepDecimalPlaces)}));}
this.yLabelWidth=(this.display&&this.showLabels)?longestText(this.ctx,this.font,this.yLabels):0;},addXLabel:function(label){this.xLabels.push(label);this.valuesCount++;this.fit();},removeXLabel:function(){this.xLabels.shift();this.valuesCount--;this.fit();},fit:function(){this.startPoint=(this.display)?this.fontSize:0;this.endPoint=(this.display)?this.height-(this.fontSize*1.5)-5:this.height;this.startPoint+=this.padding;this.endPoint-=this.padding;var cachedHeight=this.endPoint-this.startPoint,cachedYLabelWidth;this.calculateYRange(cachedHeight);this.buildYLabels();this.calculateXLabelRotation();while((cachedHeight>this.endPoint-this.startPoint)){cachedHeight=this.endPoint-this.startPoint;cachedYLabelWidth=this.yLabelWidth;this.calculateYRange(cachedHeight);this.buildYLabels();if(cachedYLabelWidth<this.yLabelWidth){this.calculateXLabelRotation();}}},calculateXLabelRotation:function(){this.ctx.font=this.font;var firstWidth=this.ctx.measureText(this.xLabels[0]).width,lastWidth=this.ctx.measureText(this.xLabels[this.xLabels.length-1]).width,firstRotated,lastRotated;this.xScalePaddingRight=lastWidth/2+3;this.xScalePaddingLeft=(firstWidth/2>this.yLabelWidth+10)?firstWidth/2:this.yLabelWidth+10;this.xLabelRotation=0;if(this.display){var originalLabelWidth=longestText(this.ctx,this.font,this.xLabels),cosRotation,firstRotatedWidth;this.xLabelWidth=originalLabelWidth;var xGridWidth=Math.floor(this.calculateX(1)-this.calculateX(0))-6;while((this.xLabelWidth>xGridWidth&&this.xLabelRotation===0)||(this.xLabelWidth>xGridWidth&&this.xLabelRotation<=90&&this.xLabelRotation>0)){cosRotation=Math.cos(toRadians(this.xLabelRotation));firstRotated=cosRotation*firstWidth;lastRotated=cosRotation*lastWidth;if(firstRotated+this.fontSize/2>this.yLabelWidth+8){this.xScalePaddingLeft=firstRotated+this.fontSize/2;}
this.xScalePaddingRight=this.fontSize/2;this.xLabelRotation++;this.xLabelWidth=cosRotation*originalLabelWidth;}
if(this.xLabelRotation>0){this.endPoint-=Math.sin(toRadians(this.xLabelRotation))*originalLabelWidth+3;}}
else{this.xLabelWidth=0;this.xScalePaddingRight=this.padding;this.xScalePaddingLeft=this.padding;}},calculateYRange:noop,drawingArea:function(){return this.startPoint-this.endPoint;},calculateY:function(value){var scalingFactor=this.drawingArea()/(this.min-this.max);return this.endPoint-(scalingFactor*(value-this.min));},calculateX:function(index){var isRotated=(this.xLabelRotation>0),innerWidth=this.width-(this.xScalePaddingLeft+this.xScalePaddingRight),valueWidth=innerWidth/(this.valuesCount-((this.offsetGridLines)?0:1)),valueOffset=(valueWidth*index)+this.xScalePaddingLeft;if(this.offsetGridLines){valueOffset+=(valueWidth/2);}
return Math.round(valueOffset);},update:function(newProps){helpers.extend(this,newProps);this.fit();},draw:function(){var ctx=this.ctx,yLabelGap=(this.endPoint-this.startPoint)/this.steps,xStart=Math.round(this.xScalePaddingLeft);if(this.display){ctx.fillStyle=this.textColor;ctx.font=this.font;each(this.yLabels,function(labelString,index){var yLabelCenter=this.endPoint-(yLabelGap*index),linePositionY=Math.round(yLabelCenter);ctx.textAlign="right";ctx.textBaseline="middle";if(this.showLabels){ctx.fillText(labelString,xStart-10,yLabelCenter);}
ctx.beginPath();if(index>0){ctx.lineWidth=this.gridLineWidth;ctx.strokeStyle=this.gridLineColor;}else{ctx.lineWidth=this.lineWidth;ctx.strokeStyle=this.lineColor;}
linePositionY+=helpers.aliasPixel(ctx.lineWidth);ctx.moveTo(xStart,linePositionY);ctx.lineTo(this.width,linePositionY);ctx.stroke();ctx.closePath();ctx.lineWidth=this.lineWidth;ctx.strokeStyle=this.lineColor;ctx.beginPath();ctx.moveTo(xStart-5,linePositionY);ctx.lineTo(xStart,linePositionY);ctx.stroke();ctx.closePath();},this);each(this.xLabels,function(label,index){var xPos=this.calculateX(index)+aliasPixel(this.lineWidth),linePos=this.calculateX(index-(this.offsetGridLines?0.5:0))+aliasPixel(this.lineWidth),isRotated=(this.xLabelRotation>0);ctx.beginPath();if(index>0){ctx.lineWidth=this.gridLineWidth;ctx.strokeStyle=this.gridLineColor;}else{ctx.lineWidth=this.lineWidth;ctx.strokeStyle=this.lineColor;}
ctx.moveTo(linePos,this.endPoint);ctx.lineTo(linePos,this.startPoint-3);ctx.stroke();ctx.closePath();ctx.lineWidth=this.lineWidth;ctx.strokeStyle=this.lineColor;ctx.beginPath();ctx.moveTo(linePos,this.endPoint);ctx.lineTo(linePos,this.endPoint+5);ctx.stroke();ctx.closePath();ctx.save();ctx.translate(xPos,(isRotated)?this.endPoint+12:this.endPoint+8);ctx.rotate(toRadians(this.xLabelRotation)* -1);ctx.font=this.font;ctx.textAlign=(isRotated)?"right":"center";ctx.textBaseline=(isRotated)?"middle":"top";ctx.fillText(label,0,0);ctx.restore();},this);}}});Chart.RadialScale=Chart.Element.extend({initialize:function(){this.size=min([this.height,this.width]);this.drawingArea=(this.display)?(this.size/2)-(this.fontSize/2+this.backdropPaddingY):(this.size/2);},calculateCenterOffset:function(value){var scalingFactor=this.drawingArea/(this.max-this.min);return(value-this.min)*scalingFactor;},update:function(){if(!this.lineArc){this.setScaleSize();}else{this.drawingArea=(this.display)?(this.size/2)-(this.fontSize/2+this.backdropPaddingY):(this.size/2);}
this.buildYLabels();},buildYLabels:function(){this.yLabels=[];var stepDecimalPlaces=getDecimalPlaces(this.stepValue);for(var i=0;i<=this.steps;i++){this.yLabels.push(template(this.templateString,{value:(this.min+(i*this.stepValue)).toFixed(stepDecimalPlaces)}));}},getCircumference:function(){return((Math.PI*2)/this.valuesCount);},setScaleSize:function(){var largestPossibleRadius=min([(this.height/2-this.pointLabelFontSize-5),this.width/2]),pointPosition,i,textWidth,halfTextWidth,furthestRight=this.width,furthestRightIndex,furthestRightAngle,furthestLeft=0,furthestLeftIndex,furthestLeftAngle,xProtrusionLeft,xProtrusionRight,radiusReductionRight,radiusReductionLeft,maxWidthRadius;this.ctx.font=fontString(this.pointLabelFontSize,this.pointLabelFontStyle,this.pointLabelFontFamily);for(i=0;i<this.valuesCount;i++){pointPosition=this.getPointPosition(i,largestPossibleRadius);textWidth=this.ctx.measureText(template(this.templateString,{value:this.labels[i]})).width+5;if(i===0||i===this.valuesCount/2){halfTextWidth=textWidth/2;if(pointPosition.x+halfTextWidth>furthestRight){furthestRight=pointPosition.x+halfTextWidth;furthestRightIndex=i;}
if(pointPosition.x-halfTextWidth<furthestLeft){furthestLeft=pointPosition.x-halfTextWidth;furthestLeftIndex=i;}}
else if(i<this.valuesCount/2){if(pointPosition.x+textWidth>furthestRight){furthestRight=pointPosition.x+textWidth;furthestRightIndex=i;}}
else if(i>this.valuesCount/2){if(pointPosition.x-textWidth<furthestLeft){furthestLeft=pointPosition.x-textWidth;furthestLeftIndex=i;}}}
xProtrusionLeft=furthestLeft;xProtrusionRight=Math.ceil(furthestRight-this.width);furthestRightAngle=this.getIndexAngle(furthestRightIndex);furthestLeftAngle=this.getIndexAngle(furthestLeftIndex);radiusReductionRight=xProtrusionRight/Math.sin(furthestRightAngle+Math.PI/2);radiusReductionLeft=xProtrusionLeft/Math.sin(furthestLeftAngle+Math.PI/2);radiusReductionRight=(isNumber(radiusReductionRight))?radiusReductionRight:0;radiusReductionLeft=(isNumber(radiusReductionLeft))?radiusReductionLeft:0;this.drawingArea=largestPossibleRadius-(radiusReductionLeft+radiusReductionRight)/2;this.setCenterPoint(radiusReductionLeft,radiusReductionRight);},setCenterPoint:function(leftMovement,rightMovement){var maxRight=this.width-rightMovement-this.drawingArea,maxLeft=leftMovement+this.drawingArea;this.xCenter=(maxLeft+maxRight)/2;this.yCenter=(this.height/2);},getIndexAngle:function(index){var angleMultiplier=(Math.PI*2)/this.valuesCount;return index*angleMultiplier-(Math.PI/2);},getPointPosition:function(index,distanceFromCenter){var thisAngle=this.getIndexAngle(index);return{x:(Math.cos(thisAngle)*distanceFromCenter)+this.xCenter,y:(Math.sin(thisAngle)*distanceFromCenter)+this.yCenter};},draw:function(){if(this.display){var ctx=this.ctx;each(this.yLabels,function(label,index){if(index>0){var yCenterOffset=index*(this.drawingArea/this.steps),yHeight=this.yCenter-yCenterOffset,pointPosition;if(this.lineWidth>0){ctx.strokeStyle=this.lineColor;ctx.lineWidth=this.lineWidth;if(this.lineArc){ctx.beginPath();ctx.arc(this.xCenter,this.yCenter,yCenterOffset,0,Math.PI*2);ctx.closePath();ctx.stroke();}else{ctx.beginPath();for(var i=0;i<this.valuesCount;i++){pointPosition=this.getPointPosition(i,this.calculateCenterOffset(this.min+(index*this.stepValue)));if(i===0){ctx.moveTo(pointPosition.x,pointPosition.y);}else{ctx.lineTo(pointPosition.x,pointPosition.y);}}
ctx.closePath();ctx.stroke();}}
if(this.showLabels){ctx.font=fontString(this.fontSize,this.fontStyle,this.fontFamily);if(this.showLabelBackdrop){var labelWidth=ctx.measureText(label).width;ctx.fillStyle=this.backdropColor;ctx.fillRect(this.xCenter-labelWidth/2-this.backdropPaddingX,yHeight-this.fontSize/2-this.backdropPaddingY,labelWidth+this.backdropPaddingX*2,this.fontSize+this.backdropPaddingY*2);}
ctx.textAlign='center';ctx.textBaseline="middle";ctx.fillStyle=this.fontColor;ctx.fillText(label,this.xCenter,yHeight);}}},this);if(!this.lineArc){ctx.lineWidth=this.angleLineWidth;ctx.strokeStyle=this.angleLineColor;for(var i=this.valuesCount-1;i>=0;i--){if(this.angleLineWidth>0){var outerPosition=this.getPointPosition(i,this.calculateCenterOffset(this.max));ctx.beginPath();ctx.moveTo(this.xCenter,this.yCenter);ctx.lineTo(outerPosition.x,outerPosition.y);ctx.stroke();ctx.closePath();}
var pointLabelPosition=this.getPointPosition(i,this.calculateCenterOffset(this.max)+5);ctx.font=fontString(this.pointLabelFontSize,this.pointLabelFontStyle,this.pointLabelFontFamily);ctx.fillStyle=this.pointLabelFontColor;var labelsCount=this.labels.length,halfLabelsCount=this.labels.length/2,quarterLabelsCount=halfLabelsCount/2,upperHalf=(i<quarterLabelsCount||i>labelsCount-quarterLabelsCount),exactQuarter=(i===quarterLabelsCount||i===labelsCount-quarterLabelsCount);if(i===0){ctx.textAlign='center';}else if(i===halfLabelsCount){ctx.textAlign='center';}else if(i<halfLabelsCount){ctx.textAlign='left';}else{ctx.textAlign='right';}
if(exactQuarter){ctx.textBaseline='middle';}else if(upperHalf){ctx.textBaseline='bottom';}else{ctx.textBaseline='top';}
ctx.fillText(this.labels[i],pointLabelPosition.x,pointLabelPosition.y);}}}}});helpers.addEvent(window,"resize",(function(){var timeout;return function(){clearTimeout(timeout);timeout=setTimeout(function(){each(Chart.instances,function(instance){if(instance.options.responsive){instance.resize(instance.render,true);}});},50);};})());if(amd){define(function(){return Chart;});}else if(typeof module==='object'&&module.exports){module.exports=Chart;}
root.Chart=Chart;Chart.noConflict=function(){root.Chart=previous;return Chart;};}).call(this);(function(){"use strict";var root=this,Chart=root.Chart,helpers=Chart.helpers;var defaultConfig={scaleBeginAtZero:true,scaleShowGridLines:true,scaleGridLineColor:"rgba(0,0,0,.05)",scaleGridLineWidth:1,barShowStroke:true,barStrokeWidth:2,barValueSpacing:5,barDatasetSpacing:1,legendTemplate:"<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].fillColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"};Chart.Type.extend({name:"Bar",defaults:defaultConfig,initialize:function(data){var options=this.options;this.ScaleClass=Chart.Scale.extend({offsetGridLines:true,calculateBarX:function(datasetCount,datasetIndex,barIndex){var xWidth=this.calculateBaseWidth(),xAbsolute=this.calculateX(barIndex)-(xWidth/2),barWidth=this.calculateBarWidth(datasetCount);return xAbsolute+(barWidth*datasetIndex)+(datasetIndex*options.barDatasetSpacing)+barWidth/2;},calculateBaseWidth:function(){return(this.calculateX(1)-this.calculateX(0))-(2*options.barValueSpacing);},calculateBarWidth:function(datasetCount){var baseWidth=this.calculateBaseWidth()-((datasetCount-1)*options.barDatasetSpacing);return(baseWidth/datasetCount);}});this.datasets=[];if(this.options.showTooltips){helpers.bindEvents(this,this.options.tooltipEvents,function(evt){var activeBars=(evt.type!=='mouseout')?this.getBarsAtEvent(evt):[];this.eachBars(function(bar){bar.restore(['fillColor','strokeColor']);});helpers.each(activeBars,function(activeBar){activeBar.fillColor=activeBar.highlightFill;activeBar.strokeColor=activeBar.highlightStroke;});this.showTooltip(activeBars);});}
this.BarClass=Chart.Rectangle.extend({strokeWidth:this.options.barStrokeWidth,showStroke:this.options.barShowStroke,ctx:this.chart.ctx});helpers.each(data.datasets,function(dataset,datasetIndex){var datasetObject={label:dataset.label||null,fillColor:dataset.fillColor,strokeColor:dataset.strokeColor,bars:[]};this.datasets.push(datasetObject);helpers.each(dataset.data,function(dataPoint,index){if(helpers.isNumber(dataPoint)){datasetObject.bars.push(new this.BarClass({value:dataPoint,label:data.labels[index],datasetLabel:dataset.label,strokeColor:dataset.strokeColor,fillColor:dataset.fillColor,highlightFill:dataset.highlightFill||dataset.fillColor,highlightStroke:dataset.highlightStroke||dataset.strokeColor}));}},this);},this);this.buildScale(data.labels);this.BarClass.prototype.base=this.scale.endPoint;this.eachBars(function(bar,index,datasetIndex){helpers.extend(bar,{width:this.scale.calculateBarWidth(this.datasets.length),x:this.scale.calculateBarX(this.datasets.length,datasetIndex,index),y:this.scale.endPoint});bar.save();},this);this.render();},update:function(){this.scale.update();helpers.each(this.activeElements,function(activeElement){activeElement.restore(['fillColor','strokeColor']);});this.eachBars(function(bar){bar.save();});this.render();},eachBars:function(callback){helpers.each(this.datasets,function(dataset,datasetIndex){helpers.each(dataset.bars,callback,this,datasetIndex);},this);},getBarsAtEvent:function(e){var barsArray=[],eventPosition=helpers.getRelativePosition(e),datasetIterator=function(dataset){barsArray.push(dataset.bars[barIndex]);},barIndex;for(var datasetIndex=0;datasetIndex<this.datasets.length;datasetIndex++){for(barIndex=0;barIndex<this.datasets[datasetIndex].bars.length;barIndex++){if(this.datasets[datasetIndex].bars[barIndex].inRange(eventPosition.x,eventPosition.y)){helpers.each(this.datasets,datasetIterator);return barsArray;}}}
return barsArray;},buildScale:function(labels){var self=this;var dataTotal=function(){var values=[];self.eachBars(function(bar){values.push(bar.value);});return values;};var scaleOptions={templateString:this.options.scaleLabel,height:this.chart.height,width:this.chart.width,ctx:this.chart.ctx,textColor:this.options.scaleFontColor,fontSize:this.options.scaleFontSize,fontStyle:this.options.scaleFontStyle,fontFamily:this.options.scaleFontFamily,valuesCount:labels.length,beginAtZero:this.options.scaleBeginAtZero,integersOnly:this.options.scaleIntegersOnly,calculateYRange:function(currentHeight){var updatedRanges=helpers.calculateScaleRange(dataTotal(),currentHeight,this.fontSize,this.beginAtZero,this.integersOnly);helpers.extend(this,updatedRanges);},xLabels:labels,font:helpers.fontString(this.options.scaleFontSize,this.options.scaleFontStyle,this.options.scaleFontFamily),lineWidth:this.options.scaleLineWidth,lineColor:this.options.scaleLineColor,gridLineWidth:(this.options.scaleShowGridLines)?this.options.scaleGridLineWidth:0,gridLineColor:(this.options.scaleShowGridLines)?this.options.scaleGridLineColor:"rgba(0,0,0,0)",padding:(this.options.showScale)?0:(this.options.barShowStroke)?this.options.barStrokeWidth:0,showLabels:this.options.scaleShowLabels,display:this.options.showScale};if(this.options.scaleOverride){helpers.extend(scaleOptions,{calculateYRange:helpers.noop,steps:this.options.scaleSteps,stepValue:this.options.scaleStepWidth,min:this.options.scaleStartValue,max:this.options.scaleStartValue+(this.options.scaleSteps*this.options.scaleStepWidth)});}
this.scale=new this.ScaleClass(scaleOptions);},addData:function(valuesArray,label){helpers.each(valuesArray,function(value,datasetIndex){if(helpers.isNumber(value)){this.datasets[datasetIndex].bars.push(new this.BarClass({value:value,label:label,x:this.scale.calculateBarX(this.datasets.length,datasetIndex,this.scale.valuesCount+1),y:this.scale.endPoint,width:this.scale.calculateBarWidth(this.datasets.length),base:this.scale.endPoint,strokeColor:this.datasets[datasetIndex].strokeColor,fillColor:this.datasets[datasetIndex].fillColor}));}},this);this.scale.addXLabel(label);this.update();},removeData:function(){this.scale.removeXLabel();helpers.each(this.datasets,function(dataset){dataset.bars.shift();},this);this.update();},reflow:function(){helpers.extend(this.BarClass.prototype,{y:this.scale.endPoint,base:this.scale.endPoint});var newScaleProps=helpers.extend({height:this.chart.height,width:this.chart.width});this.scale.update(newScaleProps);},draw:function(ease){var easingDecimal=ease||1;this.clear();var ctx=this.chart.ctx;this.scale.draw(easingDecimal);helpers.each(this.datasets,function(dataset,datasetIndex){helpers.each(dataset.bars,function(bar,index){bar.base=this.scale.endPoint;bar.transition({x:this.scale.calculateBarX(this.datasets.length,datasetIndex,index),y:this.scale.calculateY(bar.value),width:this.scale.calculateBarWidth(this.datasets.length)},easingDecimal).draw();},this);},this);}});}).call(this);(function(){"use strict";var root=this,Chart=root.Chart,helpers=Chart.helpers;var defaultConfig={segmentShowStroke:true,segmentStrokeColor:"#fff",segmentStrokeWidth:2,percentageInnerCutout:50,animationSteps:100,animationEasing:"easeOutBounce",animateRotate:true,animateScale:false,legendTemplate:"<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>"};Chart.Type.extend({name:"Doughnut",defaults:defaultConfig,initialize:function(data){this.segments=[];this.outerRadius=(helpers.min([this.chart.width,this.chart.height])-this.options.segmentStrokeWidth/2)/2;this.SegmentArc=Chart.Arc.extend({ctx:this.chart.ctx,x:this.chart.width/2,y:this.chart.height/2});if(this.options.showTooltips){helpers.bindEvents(this,this.options.tooltipEvents,function(evt){var activeSegments=(evt.type!=='mouseout')?this.getSegmentsAtEvent(evt):[];helpers.each(this.segments,function(segment){segment.restore(["fillColor"]);});helpers.each(activeSegments,function(activeSegment){activeSegment.fillColor=activeSegment.highlightColor;});this.showTooltip(activeSegments);});}
this.calculateTotal(data);helpers.each(data,function(datapoint,index){this.addData(datapoint,index,true);},this);this.render();},getSegmentsAtEvent:function(e){var segmentsArray=[];var location=helpers.getRelativePosition(e);helpers.each(this.segments,function(segment){if(segment.inRange(location.x,location.y))segmentsArray.push(segment);},this);return segmentsArray;},addData:function(segment,atIndex,silent){var index=atIndex||this.segments.length;this.segments.splice(index,0,new this.SegmentArc({value:segment.value,outerRadius:(this.options.animateScale)?0:this.outerRadius,innerRadius:(this.options.animateScale)?0:(this.outerRadius/100)*this.options.percentageInnerCutout,fillColor:segment.color,highlightColor:segment.highlight||segment.color,showStroke:this.options.segmentShowStroke,strokeWidth:this.options.segmentStrokeWidth,strokeColor:this.options.segmentStrokeColor,startAngle:Math.PI*1.5,circumference:(this.options.animateRotate)?0:this.calculateCircumference(segment.value),label:segment.label}));if(!silent){this.reflow();this.update();}},calculateCircumference:function(value){return(Math.PI*2)*(value/this.total);},calculateTotal:function(data){this.total=0;helpers.each(data,function(segment){this.total+=segment.value;},this);},update:function(){this.calculateTotal(this.segments);helpers.each(this.activeElements,function(activeElement){activeElement.restore(['fillColor']);});helpers.each(this.segments,function(segment){segment.save();});this.render();},removeData:function(atIndex){var indexToDelete=(helpers.isNumber(atIndex))?atIndex:this.segments.length-1;this.segments.splice(indexToDelete,1);this.reflow();this.update();},reflow:function(){helpers.extend(this.SegmentArc.prototype,{x:this.chart.width/2,y:this.chart.height/2});this.outerRadius=(helpers.min([this.chart.width,this.chart.height])-this.options.segmentStrokeWidth/2)/2;helpers.each(this.segments,function(segment){segment.update({outerRadius:this.outerRadius,innerRadius:(this.outerRadius/100)*this.options.percentageInnerCutout});},this);},draw:function(easeDecimal){var animDecimal=(easeDecimal)?easeDecimal:1;this.clear();helpers.each(this.segments,function(segment,index){segment.transition({circumference:this.calculateCircumference(segment.value),outerRadius:this.outerRadius,innerRadius:(this.outerRadius/100)*this.options.percentageInnerCutout},animDecimal);segment.endAngle=segment.startAngle+segment.circumference;segment.draw();if(index===0){segment.startAngle=Math.PI*1.5;}
if(index<this.segments.length-1){this.segments[index+1].startAngle=segment.endAngle;}},this);}});Chart.types.Doughnut.extend({name:"Pie",defaults:helpers.merge(defaultConfig,{percentageInnerCutout:0})});}).call(this);(function(){"use strict";var root=this,Chart=root.Chart,helpers=Chart.helpers;var defaultConfig={scaleShowGridLines:true,scaleGridLineColor:"rgba(0,0,0,.05)",scaleGridLineWidth:1,bezierCurve:true,bezierCurveTension:0.4,pointDot:true,pointDotRadius:4,pointDotStrokeWidth:1,pointHitDetectionRadius:20,datasetStroke:true,datasetStrokeWidth:2,datasetFill:true,legendTemplate:"<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].strokeColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"};Chart.Type.extend({name:"Line",defaults:defaultConfig,initialize:function(data){this.PointClass=Chart.Point.extend({strokeWidth:this.options.pointDotStrokeWidth,radius:this.options.pointDotRadius,display:this.options.pointDot,hitDetectionRadius:this.options.pointHitDetectionRadius,ctx:this.chart.ctx,inRange:function(mouseX){return(Math.pow(mouseX-this.x,2)<Math.pow(this.radius+this.hitDetectionRadius,2));}});this.datasets=[];if(this.options.showTooltips){helpers.bindEvents(this,this.options.tooltipEvents,function(evt){var activePoints=(evt.type!=='mouseout')?this.getPointsAtEvent(evt):[];this.eachPoints(function(point){point.restore(['fillColor','strokeColor']);});helpers.each(activePoints,function(activePoint){activePoint.fillColor=activePoint.highlightFill;activePoint.strokeColor=activePoint.highlightStroke;});this.showTooltip(activePoints);});}
helpers.each(data.datasets,function(dataset){var datasetObject={label:dataset.label||null,fillColor:dataset.fillColor,strokeColor:dataset.strokeColor,pointColor:dataset.pointColor,pointStrokeColor:dataset.pointStrokeColor,points:[]};this.datasets.push(datasetObject);helpers.each(dataset.data,function(dataPoint,index){if(helpers.isNumber(dataPoint)){datasetObject.points.push(new this.PointClass({value:dataPoint,label:data.labels[index],datasetLabel:dataset.label,strokeColor:dataset.pointStrokeColor,fillColor:dataset.pointColor,highlightFill:dataset.pointHighlightFill||dataset.pointColor,highlightStroke:dataset.pointHighlightStroke||dataset.pointStrokeColor}));}},this);this.buildScale(data.labels);this.eachPoints(function(point,index){helpers.extend(point,{x:this.scale.calculateX(index),y:this.scale.endPoint});point.save();},this);},this);this.render();},update:function(){this.scale.update();helpers.each(this.activeElements,function(activeElement){activeElement.restore(['fillColor','strokeColor']);});this.eachPoints(function(point){point.save();});this.render();},eachPoints:function(callback){helpers.each(this.datasets,function(dataset){helpers.each(dataset.points,callback,this);},this);},getPointsAtEvent:function(e){var pointsArray=[],eventPosition=helpers.getRelativePosition(e);helpers.each(this.datasets,function(dataset){helpers.each(dataset.points,function(point){if(point.inRange(eventPosition.x,eventPosition.y))pointsArray.push(point);});},this);return pointsArray;},buildScale:function(labels){var self=this;var dataTotal=function(){var values=[];self.eachPoints(function(point){values.push(point.value);});return values;};var scaleOptions={templateString:this.options.scaleLabel,height:this.chart.height,width:this.chart.width,ctx:this.chart.ctx,textColor:this.options.scaleFontColor,fontSize:this.options.scaleFontSize,fontStyle:this.options.scaleFontStyle,fontFamily:this.options.scaleFontFamily,valuesCount:labels.length,beginAtZero:this.options.scaleBeginAtZero,integersOnly:this.options.scaleIntegersOnly,calculateYRange:function(currentHeight){var updatedRanges=helpers.calculateScaleRange(dataTotal(),currentHeight,this.fontSize,this.beginAtZero,this.integersOnly);helpers.extend(this,updatedRanges);},xLabels:labels,font:helpers.fontString(this.options.scaleFontSize,this.options.scaleFontStyle,this.options.scaleFontFamily),lineWidth:this.options.scaleLineWidth,lineColor:this.options.scaleLineColor,gridLineWidth:(this.options.scaleShowGridLines)?this.options.scaleGridLineWidth:0,gridLineColor:(this.options.scaleShowGridLines)?this.options.scaleGridLineColor:"rgba(0,0,0,0)",padding:(this.options.showScale)?0:this.options.pointDotRadius+this.options.pointDotStrokeWidth,showLabels:this.options.scaleShowLabels,display:this.options.showScale};if(this.options.scaleOverride){helpers.extend(scaleOptions,{calculateYRange:helpers.noop,steps:this.options.scaleSteps,stepValue:this.options.scaleStepWidth,min:this.options.scaleStartValue,max:this.options.scaleStartValue+(this.options.scaleSteps*this.options.scaleStepWidth)});}
this.scale=new Chart.Scale(scaleOptions);},addData:function(valuesArray,label){helpers.each(valuesArray,function(value,datasetIndex){if(helpers.isNumber(value)){this.datasets[datasetIndex].points.push(new this.PointClass({value:value,label:label,x:this.scale.calculateX(this.scale.valuesCount+1),y:this.scale.endPoint,strokeColor:this.datasets[datasetIndex].pointStrokeColor,fillColor:this.datasets[datasetIndex].pointColor}));}},this);this.scale.addXLabel(label);this.update();},removeData:function(){this.scale.removeXLabel();helpers.each(this.datasets,function(dataset){dataset.points.shift();},this);this.update();},reflow:function(){var newScaleProps=helpers.extend({height:this.chart.height,width:this.chart.width});this.scale.update(newScaleProps);},draw:function(ease){var easingDecimal=ease||1;this.clear();var ctx=this.chart.ctx;this.scale.draw(easingDecimal);helpers.each(this.datasets,function(dataset){helpers.each(dataset.points,function(point,index){point.transition({y:this.scale.calculateY(point.value),x:this.scale.calculateX(index)},easingDecimal);},this);if(this.options.bezierCurve){helpers.each(dataset.points,function(point,index){if(index===0){point.controlPoints=helpers.splineCurve(point,point,dataset.points[index+1],0);}
else if(index>=dataset.points.length-1){point.controlPoints=helpers.splineCurve(dataset.points[index-1],point,point,0);}
else{point.controlPoints=helpers.splineCurve(dataset.points[index-1],point,dataset.points[index+1],this.options.bezierCurveTension);}},this);}
ctx.lineWidth=this.options.datasetStrokeWidth;ctx.strokeStyle=dataset.strokeColor;ctx.beginPath();helpers.each(dataset.points,function(point,index){if(index>0){if(this.options.bezierCurve){ctx.bezierCurveTo(dataset.points[index-1].controlPoints.outer.x,dataset.points[index-1].controlPoints.outer.y,point.controlPoints.inner.x,point.controlPoints.inner.y,point.x,point.y);}
else{ctx.lineTo(point.x,point.y);}}
else{ctx.moveTo(point.x,point.y);}},this);ctx.stroke();if(this.options.datasetFill){ctx.lineTo(dataset.points[dataset.points.length-1].x,this.scale.endPoint);ctx.lineTo(this.scale.calculateX(0),this.scale.endPoint);ctx.fillStyle=dataset.fillColor;ctx.closePath();ctx.fill();}
helpers.each(dataset.points,function(point){point.draw();});},this);}});}).call(this);(function(){"use strict";var root=this,Chart=root.Chart,helpers=Chart.helpers;var defaultConfig={scaleShowLabelBackdrop:true,scaleBackdropColor:"rgba(255,255,255,0.75)",scaleBeginAtZero:true,scaleBackdropPaddingY:2,scaleBackdropPaddingX:2,scaleShowLine:true,segmentShowStroke:true,segmentStrokeColor:"#fff",segmentStrokeWidth:2,animationSteps:100,animationEasing:"easeOutBounce",animateRotate:true,animateScale:false,legendTemplate:"<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>"};Chart.Type.extend({name:"PolarArea",defaults:defaultConfig,initialize:function(data){this.segments=[];this.SegmentArc=Chart.Arc.extend({showStroke:this.options.segmentShowStroke,strokeWidth:this.options.segmentStrokeWidth,strokeColor:this.options.segmentStrokeColor,ctx:this.chart.ctx,innerRadius:0,x:this.chart.width/2,y:this.chart.height/2});this.scale=new Chart.RadialScale({display:this.options.showScale,fontStyle:this.options.scaleFontStyle,fontSize:this.options.scaleFontSize,fontFamily:this.options.scaleFontFamily,fontColor:this.options.scaleFontColor,showLabels:this.options.scaleShowLabels,showLabelBackdrop:this.options.scaleShowLabelBackdrop,backdropColor:this.options.scaleBackdropColor,backdropPaddingY:this.options.scaleBackdropPaddingY,backdropPaddingX:this.options.scaleBackdropPaddingX,lineWidth:(this.options.scaleShowLine)?this.options.scaleLineWidth:0,lineColor:this.options.scaleLineColor,lineArc:true,width:this.chart.width,height:this.chart.height,xCenter:this.chart.width/2,yCenter:this.chart.height/2,ctx:this.chart.ctx,templateString:this.options.scaleLabel,valuesCount:data.length});this.updateScaleRange(data);this.scale.update();helpers.each(data,function(segment,index){this.addData(segment,index,true);},this);if(this.options.showTooltips){helpers.bindEvents(this,this.options.tooltipEvents,function(evt){var activeSegments=(evt.type!=='mouseout')?this.getSegmentsAtEvent(evt):[];helpers.each(this.segments,function(segment){segment.restore(["fillColor"]);});helpers.each(activeSegments,function(activeSegment){activeSegment.fillColor=activeSegment.highlightColor;});this.showTooltip(activeSegments);});}
this.render();},getSegmentsAtEvent:function(e){var segmentsArray=[];var location=helpers.getRelativePosition(e);helpers.each(this.segments,function(segment){if(segment.inRange(location.x,location.y))segmentsArray.push(segment);},this);return segmentsArray;},addData:function(segment,atIndex,silent){var index=atIndex||this.segments.length;this.segments.splice(index,0,new this.SegmentArc({fillColor:segment.color,highlightColor:segment.highlight||segment.color,label:segment.label,value:segment.value,outerRadius:(this.options.animateScale)?0:this.scale.calculateCenterOffset(segment.value),circumference:(this.options.animateRotate)?0:this.scale.getCircumference(),startAngle:Math.PI*1.5}));if(!silent){this.reflow();this.update();}},removeData:function(atIndex){var indexToDelete=(helpers.isNumber(atIndex))?atIndex:this.segments.length-1;this.segments.splice(indexToDelete,1);this.reflow();this.update();},calculateTotal:function(data){this.total=0;helpers.each(data,function(segment){this.total+=segment.value;},this);this.scale.valuesCount=this.segments.length;},updateScaleRange:function(datapoints){var valuesArray=[];helpers.each(datapoints,function(segment){valuesArray.push(segment.value);});var scaleSizes=(this.options.scaleOverride)?{steps:this.options.scaleSteps,stepValue:this.options.scaleStepWidth,min:this.options.scaleStartValue,max:this.options.scaleStartValue+(this.options.scaleSteps*this.options.scaleStepWidth)}:helpers.calculateScaleRange(valuesArray,helpers.min([this.chart.width,this.chart.height])/2,this.options.scaleFontSize,this.options.scaleBeginAtZero,this.options.scaleIntegersOnly);helpers.extend(this.scale,scaleSizes,{size:helpers.min([this.chart.width,this.chart.height]),xCenter:this.chart.width/2,yCenter:this.chart.height/2});},update:function(){this.calculateTotal(this.segments);helpers.each(this.segments,function(segment){segment.save();});this.render();},reflow:function(){helpers.extend(this.SegmentArc.prototype,{x:this.chart.width/2,y:this.chart.height/2});this.updateScaleRange(this.segments);this.scale.update();helpers.extend(this.scale,{xCenter:this.chart.width/2,yCenter:this.chart.height/2});helpers.each(this.segments,function(segment){segment.update({outerRadius:this.scale.calculateCenterOffset(segment.value)});},this);},draw:function(ease){var easingDecimal=ease||1;this.clear();helpers.each(this.segments,function(segment,index){segment.transition({circumference:this.scale.getCircumference(),outerRadius:this.scale.calculateCenterOffset(segment.value)},easingDecimal);segment.endAngle=segment.startAngle+segment.circumference;if(index===0){segment.startAngle=Math.PI*1.5;}
if(index<this.segments.length-1){this.segments[index+1].startAngle=segment.endAngle;}
segment.draw();},this);this.scale.draw();}});}).call(this);(function(){"use strict";var root=this,Chart=root.Chart,helpers=Chart.helpers;Chart.Type.extend({name:"Radar",defaults:{scaleShowLine:true,angleShowLineOut:true,scaleShowLabels:false,scaleBeginAtZero:true,angleLineColor:"rgba(0,0,0,.1)",angleLineWidth:1,pointLabelFontFamily:"'Arial'",pointLabelFontStyle:"normal",pointLabelFontSize:10,pointLabelFontColor:"#666",pointDot:true,pointDotRadius:3,pointDotStrokeWidth:1,pointHitDetectionRadius:20,datasetStroke:true,datasetStrokeWidth:2,datasetFill:true,legendTemplate:"<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].strokeColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"},initialize:function(data){this.PointClass=Chart.Point.extend({strokeWidth:this.options.pointDotStrokeWidth,radius:this.options.pointDotRadius,display:this.options.pointDot,hitDetectionRadius:this.options.pointHitDetectionRadius,ctx:this.chart.ctx});this.datasets=[];this.buildScale(data);if(this.options.showTooltips){helpers.bindEvents(this,this.options.tooltipEvents,function(evt){var activePointsCollection=(evt.type!=='mouseout')?this.getPointsAtEvent(evt):[];this.eachPoints(function(point){point.restore(['fillColor','strokeColor']);});helpers.each(activePointsCollection,function(activePoint){activePoint.fillColor=activePoint.highlightFill;activePoint.strokeColor=activePoint.highlightStroke;});this.showTooltip(activePointsCollection);});}
helpers.each(data.datasets,function(dataset){var datasetObject={label:dataset.label||null,fillColor:dataset.fillColor,strokeColor:dataset.strokeColor,pointColor:dataset.pointColor,pointStrokeColor:dataset.pointStrokeColor,points:[]};this.datasets.push(datasetObject);helpers.each(dataset.data,function(dataPoint,index){if(helpers.isNumber(dataPoint)){var pointPosition;if(!this.scale.animation){pointPosition=this.scale.getPointPosition(index,this.scale.calculateCenterOffset(dataPoint));}
datasetObject.points.push(new this.PointClass({value:dataPoint,label:data.labels[index],datasetLabel:dataset.label,x:(this.options.animation)?this.scale.xCenter:pointPosition.x,y:(this.options.animation)?this.scale.yCenter:pointPosition.y,strokeColor:dataset.pointStrokeColor,fillColor:dataset.pointColor,highlightFill:dataset.pointHighlightFill||dataset.pointColor,highlightStroke:dataset.pointHighlightStroke||dataset.pointStrokeColor}));}},this);},this);this.render();},eachPoints:function(callback){helpers.each(this.datasets,function(dataset){helpers.each(dataset.points,callback,this);},this);},getPointsAtEvent:function(evt){var mousePosition=helpers.getRelativePosition(evt),fromCenter=helpers.getAngleFromPoint({x:this.scale.xCenter,y:this.scale.yCenter},mousePosition);var anglePerIndex=(Math.PI*2)/this.scale.valuesCount,pointIndex=Math.round((fromCenter.angle-Math.PI*1.5)/anglePerIndex),activePointsCollection=[];if(pointIndex>=this.scale.valuesCount||pointIndex<0){pointIndex=0;}
if(fromCenter.distance<=this.scale.drawingArea){helpers.each(this.datasets,function(dataset){activePointsCollection.push(dataset.points[pointIndex]);});}
return activePointsCollection;},buildScale:function(data){this.scale=new Chart.RadialScale({display:this.options.showScale,fontStyle:this.options.scaleFontStyle,fontSize:this.options.scaleFontSize,fontFamily:this.options.scaleFontFamily,fontColor:this.options.scaleFontColor,showLabels:this.options.scaleShowLabels,showLabelBackdrop:this.options.scaleShowLabelBackdrop,backdropColor:this.options.scaleBackdropColor,backdropPaddingY:this.options.scaleBackdropPaddingY,backdropPaddingX:this.options.scaleBackdropPaddingX,lineWidth:(this.options.scaleShowLine)?this.options.scaleLineWidth:0,lineColor:this.options.scaleLineColor,angleLineColor:this.options.angleLineColor,angleLineWidth:(this.options.angleShowLineOut)?this.options.angleLineWidth:0,pointLabelFontColor:this.options.pointLabelFontColor,pointLabelFontSize:this.options.pointLabelFontSize,pointLabelFontFamily:this.options.pointLabelFontFamily,pointLabelFontStyle:this.options.pointLabelFontStyle,height:this.chart.height,width:this.chart.width,xCenter:this.chart.width/2,yCenter:this.chart.height/2,ctx:this.chart.ctx,templateString:this.options.scaleLabel,labels:data.labels,valuesCount:data.datasets[0].data.length});this.scale.setScaleSize();this.updateScaleRange(data.datasets);this.scale.buildYLabels();},updateScaleRange:function(datasets){var valuesArray=(function(){var totalDataArray=[];helpers.each(datasets,function(dataset){if(dataset.data){totalDataArray=totalDataArray.concat(dataset.data);}
else{helpers.each(dataset.points,function(point){totalDataArray.push(point.value);});}});return totalDataArray;})();var scaleSizes=(this.options.scaleOverride)?{steps:this.options.scaleSteps,stepValue:this.options.scaleStepWidth,min:this.options.scaleStartValue,max:this.options.scaleStartValue+(this.options.scaleSteps*this.options.scaleStepWidth)}:helpers.calculateScaleRange(valuesArray,helpers.min([this.chart.width,this.chart.height])/2,this.options.scaleFontSize,this.options.scaleBeginAtZero,this.options.scaleIntegersOnly);helpers.extend(this.scale,scaleSizes);},addData:function(valuesArray,label){this.scale.valuesCount++;helpers.each(valuesArray,function(value,datasetIndex){if(helpers.isNumber(value)){var pointPosition=this.scale.getPointPosition(this.scale.valuesCount,this.scale.calculateCenterOffset(value));this.datasets[datasetIndex].points.push(new this.PointClass({value:value,label:label,x:pointPosition.x,y:pointPosition.y,strokeColor:this.datasets[datasetIndex].pointStrokeColor,fillColor:this.datasets[datasetIndex].pointColor}));}},this);this.scale.labels.push(label);this.reflow();this.update();},removeData:function(){this.scale.valuesCount--;this.scale.labels.shift();helpers.each(this.datasets,function(dataset){dataset.points.shift();},this);this.reflow();this.update();},update:function(){this.eachPoints(function(point){point.save();});this.reflow();this.render();},reflow:function(){helpers.extend(this.scale,{width:this.chart.width,height:this.chart.height,size:helpers.min([this.chart.width,this.chart.height]),xCenter:this.chart.width/2,yCenter:this.chart.height/2});this.updateScaleRange(this.datasets);this.scale.setScaleSize();this.scale.buildYLabels();},draw:function(ease){var easeDecimal=ease||1,ctx=this.chart.ctx;this.clear();this.scale.draw();helpers.each(this.datasets,function(dataset){helpers.each(dataset.points,function(point,index){point.transition(this.scale.getPointPosition(index,this.scale.calculateCenterOffset(point.value)),easeDecimal);},this);ctx.lineWidth=this.options.datasetStrokeWidth;ctx.strokeStyle=dataset.strokeColor;ctx.beginPath();helpers.each(dataset.points,function(point,index){if(index===0){ctx.moveTo(point.x,point.y);}
else{ctx.lineTo(point.x,point.y);}},this);ctx.closePath();ctx.stroke();ctx.fillStyle=dataset.fillColor;ctx.fill();helpers.each(dataset.points,function(point){point.draw();});},this);}});}).call(this);;;(function(){function require(name){var module=require.modules[name];if(!module)throw new Error('failed to require "'+name+'"');if(!('exports'in module)&&typeof module.definition==='function'){module.client=module.component=true;module.definition.call(this,module.exports={},module);delete module.definition;}
return module.exports;}
require.modules={};require.register=function(name,definition){require.modules[name]={definition:definition};};require.define=function(name,exports){require.modules[name]={exports:exports};};require.register("dropzone",function(exports,module){module.exports=require("dropzone/lib/dropzone.js");});require.register("dropzone/lib/dropzone.js",function(exports,module){(function(){var Dropzone,Emitter,camelize,contentLoaded,detectVerticalSquash,drawImageIOSFix,noop,without,__slice=[].slice,__hasProp={}.hasOwnProperty,__extends=function(child,parent){for(var key in parent){if(__hasProp.call(parent,key))child[key]=parent[key];}function ctor(){this.constructor=child;}ctor.prototype=parent.prototype;child.prototype=new ctor();child.__super__=parent.prototype;return child;};noop=function(){};Emitter=(function(){function Emitter(){}
Emitter.prototype.addEventListener=Emitter.prototype.on;Emitter.prototype.on=function(event,fn){this._callbacks=this._callbacks||{};if(!this._callbacks[event]){this._callbacks[event]=[];}
this._callbacks[event].push(fn);return this;};Emitter.prototype.emit=function(){var args,callback,callbacks,event,_i,_len;event=arguments[0],args=2<=arguments.length?__slice.call(arguments,1):[];this._callbacks=this._callbacks||{};callbacks=this._callbacks[event];if(callbacks){for(_i=0,_len=callbacks.length;_i<_len;_i++){callback=callbacks[_i];callback.apply(this,args);}}
return this;};Emitter.prototype.removeListener=Emitter.prototype.off;Emitter.prototype.removeAllListeners=Emitter.prototype.off;Emitter.prototype.removeEventListener=Emitter.prototype.off;Emitter.prototype.off=function(event,fn){var callback,callbacks,i,_i,_len;if(!this._callbacks||arguments.length===0){this._callbacks={};return this;}
callbacks=this._callbacks[event];if(!callbacks){return this;}
if(arguments.length===1){delete this._callbacks[event];return this;}
for(i=_i=0,_len=callbacks.length;_i<_len;i=++_i){callback=callbacks[i];if(callback===fn){callbacks.splice(i,1);break;}}
return this;};return Emitter;})();Dropzone=(function(_super){var extend,resolveOption;__extends(Dropzone,_super);Dropzone.prototype.Emitter=Emitter;Dropzone.prototype.events=["drop","dragstart","dragend","dragenter","dragover","dragleave","addedfile","removedfile","thumbnail","error","errormultiple","processing","processingmultiple","uploadprogress","totaluploadprogress","sending","sendingmultiple","success","successmultiple","canceled","canceledmultiple","complete","completemultiple","reset","maxfilesexceeded","maxfilesreached","queuecomplete"];Dropzone.prototype.defaultOptions={url:null,method:"post",withCredentials:false,parallelUploads:2,uploadMultiple:false,maxFilesize:256,paramName:"file",createImageThumbnails:true,maxThumbnailFilesize:10,thumbnailWidth:100,thumbnailHeight:100,maxFiles:null,params:{},clickable:true,ignoreHiddenFiles:true,acceptedFiles:null,acceptedMimeTypes:null,autoProcessQueue:true,autoQueue:true,addRemoveLinks:false,previewsContainer:null,capture:null,dictDefaultMessage:"Drop files here to upload",dictFallbackMessage:"Your browser does not support drag'n'drop file uploads.",dictFallbackText:"Please use the fallback form below to upload your files like in the olden days.",dictFileTooBig:"File is too big ({{filesize}}MiB). Max filesize: {{maxFilesize}}MiB.",dictInvalidFileType:"You can't upload files of this type.",dictResponseError:"Server responded with {{statusCode}} code.",dictCancelUpload:"Cancel upload",dictCancelUploadConfirmation:"Are you sure you want to cancel this upload?",dictRemoveFile:"Remove file",dictRemoveFileConfirmation:null,dictMaxFilesExceeded:"You can not upload any more files.",accept:function(file,done){return done();},init:function(){return noop;},forceFallback:false,fallback:function(){var child,messageElement,span,_i,_len,_ref;this.element.className=""+this.element.className+" dz-browser-not-supported";_ref=this.element.getElementsByTagName("div");for(_i=0,_len=_ref.length;_i<_len;_i++){child=_ref[_i];if(/(^| )dz-message($| )/.test(child.className)){messageElement=child;child.className="dz-message";continue;}}
if(!messageElement){messageElement=Dropzone.createElement("<div class=\"dz-message\"><span></span></div>");this.element.appendChild(messageElement);}
span=messageElement.getElementsByTagName("span")[0];if(span){span.textContent=this.options.dictFallbackMessage;}
return this.element.appendChild(this.getFallbackForm());},resize:function(file){var info,srcRatio,trgRatio;info={srcX:0,srcY:0,srcWidth:file.width,srcHeight:file.height};srcRatio=file.width/file.height;info.optWidth=this.options.thumbnailWidth;info.optHeight=this.options.thumbnailHeight;if((info.optWidth==null)&&(info.optHeight==null)){info.optWidth=info.srcWidth;info.optHeight=info.srcHeight;}else if(info.optWidth==null){info.optWidth=srcRatio*info.optHeight;}else if(info.optHeight==null){info.optHeight=(1/srcRatio)*info.optWidth;}
trgRatio=info.optWidth/info.optHeight;if(file.height<info.optHeight||file.width<info.optWidth){info.trgHeight=info.srcHeight;info.trgWidth=info.srcWidth;}else{if(srcRatio>trgRatio){info.srcHeight=file.height;info.srcWidth=info.srcHeight*trgRatio;}else{info.srcWidth=file.width;info.srcHeight=info.srcWidth/trgRatio;}}
info.srcX=(file.width-info.srcWidth)/2;info.srcY=(file.height-info.srcHeight)/2;return info;},drop:function(e){return this.element.classList.remove("dz-drag-hover");},dragstart:noop,dragend:function(e){return this.element.classList.remove("dz-drag-hover");},dragenter:function(e){return this.element.classList.add("dz-drag-hover");},dragover:function(e){return this.element.classList.add("dz-drag-hover");},dragleave:function(e){return this.element.classList.remove("dz-drag-hover");},paste:noop,reset:function(){return this.element.classList.remove("dz-started");},addedfile:function(file){var node,removeFileEvent,removeLink,_i,_j,_k,_len,_len1,_len2,_ref,_ref1,_ref2,_results;if(this.element===this.previewsContainer){this.element.classList.add("dz-started");}
if(this.previewsContainer){file.previewElement=Dropzone.createElement(this.options.previewTemplate.trim());file.previewTemplate=file.previewElement;this.previewsContainer.appendChild(file.previewElement);_ref=file.previewElement.querySelectorAll("[data-dz-name]");for(_i=0,_len=_ref.length;_i<_len;_i++){node=_ref[_i];node.textContent=file.name;}
_ref1=file.previewElement.querySelectorAll("[data-dz-size]");for(_j=0,_len1=_ref1.length;_j<_len1;_j++){node=_ref1[_j];node.innerHTML=this.filesize(file.size);}
if(this.options.addRemoveLinks){file._removeLink=Dropzone.createElement("<a class=\"dz-remove\" href=\"javascript:undefined;\" data-dz-remove>"+this.options.dictRemoveFile+"</a>");file.previewElement.appendChild(file._removeLink);}
removeFileEvent=(function(_this){return function(e){e.preventDefault();e.stopPropagation();if(file.status===Dropzone.UPLOADING){return Dropzone.confirm(_this.options.dictCancelUploadConfirmation,function(){return _this.removeFile(file);});}else{if(_this.options.dictRemoveFileConfirmation){return Dropzone.confirm(_this.options.dictRemoveFileConfirmation,function(){return _this.removeFile(file);});}else{return _this.removeFile(file);}}};})(this);_ref2=file.previewElement.querySelectorAll("[data-dz-remove]");_results=[];for(_k=0,_len2=_ref2.length;_k<_len2;_k++){removeLink=_ref2[_k];_results.push(removeLink.addEventListener("click",removeFileEvent));}
return _results;}},removedfile:function(file){var _ref;if(file.previewElement){if((_ref=file.previewElement)!=null){_ref.parentNode.removeChild(file.previewElement);}}
return this._updateMaxFilesReachedClass();},thumbnail:function(file,dataUrl){var thumbnailElement,_i,_len,_ref,_results;if(file.previewElement){file.previewElement.classList.remove("dz-file-preview");file.previewElement.classList.add("dz-image-preview");_ref=file.previewElement.querySelectorAll("[data-dz-thumbnail]");_results=[];for(_i=0,_len=_ref.length;_i<_len;_i++){thumbnailElement=_ref[_i];thumbnailElement.alt=file.name;_results.push(thumbnailElement.src=dataUrl);}
return _results;}},error:function(file,message){var node,_i,_len,_ref,_results;if(file.previewElement){file.previewElement.classList.add("dz-error");if(typeof message!=="String"&&message.error){message=message.error;}
_ref=file.previewElement.querySelectorAll("[data-dz-errormessage]");_results=[];for(_i=0,_len=_ref.length;_i<_len;_i++){node=_ref[_i];_results.push(node.textContent=message);}
return _results;}},errormultiple:noop,processing:function(file){if(file.previewElement){file.previewElement.classList.add("dz-processing");if(file._removeLink){return file._removeLink.textContent=this.options.dictCancelUpload;}}},processingmultiple:noop,uploadprogress:function(file,progress,bytesSent){var node,_i,_len,_ref,_results;if(file.previewElement){_ref=file.previewElement.querySelectorAll("[data-dz-uploadprogress]");_results=[];for(_i=0,_len=_ref.length;_i<_len;_i++){node=_ref[_i];if(node.nodeName==='PROGRESS'){_results.push(node.value=progress);}else{_results.push(node.style.width=""+progress+"%");}}
return _results;}},totaluploadprogress:noop,sending:noop,sendingmultiple:noop,success:function(file){if(file.previewElement){return file.previewElement.classList.add("dz-success");}},successmultiple:noop,canceled:function(file){return this.emit("error",file,"Upload canceled.");},canceledmultiple:noop,complete:function(file){if(file._removeLink){return file._removeLink.textContent=this.options.dictRemoveFile;}},completemultiple:noop,maxfilesexceeded:noop,maxfilesreached:noop,queuecomplete:noop,previewTemplate:"<div class=\"dz-preview dz-file-preview\">\n  <div class=\"dz-details\">\n    <div class=\"dz-filename\"><span data-dz-name></span></div>\n    <div class=\"dz-size\" data-dz-size></div>\n    <img data-dz-thumbnail />\n  </div>\n  <div class=\"dz-progress\"><span class=\"dz-upload\" data-dz-uploadprogress></span></div>\n  <div class=\"dz-success-mark\"><span>✔</span></div>\n  <div class=\"dz-error-mark\"><span>✘</span></div>\n  <div class=\"dz-error-message\"><span data-dz-errormessage></span></div>\n</div>"};extend=function(){var key,object,objects,target,val,_i,_len;target=arguments[0],objects=2<=arguments.length?__slice.call(arguments,1):[];for(_i=0,_len=objects.length;_i<_len;_i++){object=objects[_i];for(key in object){val=object[key];target[key]=val;}}
return target;};function Dropzone(element,options){var elementOptions,fallback,_ref;this.element=element;this.version=Dropzone.version;this.defaultOptions.previewTemplate=this.defaultOptions.previewTemplate.replace(/\n*/g,"");this.clickableElements=[];this.listeners=[];this.files=[];if(typeof this.element==="string"){this.element=document.querySelector(this.element);}
if(!(this.element&&(this.element.nodeType!=null))){throw new Error("Invalid dropzone element.");}
if(this.element.dropzone){throw new Error("Dropzone already attached.");}
Dropzone.instances.push(this);this.element.dropzone=this;elementOptions=(_ref=Dropzone.optionsForElement(this.element))!=null?_ref:{};this.options=extend({},this.defaultOptions,elementOptions,options!=null?options:{});if(this.options.forceFallback||!Dropzone.isBrowserSupported()){return this.options.fallback.call(this);}
if(this.options.url==null){this.options.url=this.element.getAttribute("action");}
if(!this.options.url){throw new Error("No URL provided.");}
if(this.options.acceptedFiles&&this.options.acceptedMimeTypes){throw new Error("You can't provide both 'acceptedFiles' and 'acceptedMimeTypes'. 'acceptedMimeTypes' is deprecated.");}
if(this.options.acceptedMimeTypes){this.options.acceptedFiles=this.options.acceptedMimeTypes;delete this.options.acceptedMimeTypes;}
this.options.method=this.options.method.toUpperCase();if((fallback=this.getExistingFallback())&&fallback.parentNode){fallback.parentNode.removeChild(fallback);}
if(this.options.previewsContainer!==false){if(this.options.previewsContainer){this.previewsContainer=Dropzone.getElement(this.options.previewsContainer,"previewsContainer");}else{this.previewsContainer=this.element;}}
if(this.options.clickable){if(this.options.clickable===true){this.clickableElements=[this.element];}else{this.clickableElements=Dropzone.getElements(this.options.clickable,"clickable");}}
this.init();}
Dropzone.prototype.getAcceptedFiles=function(){var file,_i,_len,_ref,_results;_ref=this.files;_results=[];for(_i=0,_len=_ref.length;_i<_len;_i++){file=_ref[_i];if(file.accepted){_results.push(file);}}
return _results;};Dropzone.prototype.getRejectedFiles=function(){var file,_i,_len,_ref,_results;_ref=this.files;_results=[];for(_i=0,_len=_ref.length;_i<_len;_i++){file=_ref[_i];if(!file.accepted){_results.push(file);}}
return _results;};Dropzone.prototype.getFilesWithStatus=function(status){var file,_i,_len,_ref,_results;_ref=this.files;_results=[];for(_i=0,_len=_ref.length;_i<_len;_i++){file=_ref[_i];if(file.status===status){_results.push(file);}}
return _results;};Dropzone.prototype.getQueuedFiles=function(){return this.getFilesWithStatus(Dropzone.QUEUED);};Dropzone.prototype.getUploadingFiles=function(){return this.getFilesWithStatus(Dropzone.UPLOADING);};Dropzone.prototype.getActiveFiles=function(){var file,_i,_len,_ref,_results;_ref=this.files;_results=[];for(_i=0,_len=_ref.length;_i<_len;_i++){file=_ref[_i];if(file.status===Dropzone.UPLOADING||file.status===Dropzone.QUEUED){_results.push(file);}}
return _results;};Dropzone.prototype.init=function(){var eventName,noPropagation,setupHiddenFileInput,_i,_len,_ref,_ref1;if(this.element.tagName==="form"){this.element.setAttribute("enctype","multipart/form-data");}
if(this.element.classList.contains("dropzone")&&!this.element.querySelector(".dz-message")){this.element.appendChild(Dropzone.createElement("<div class=\"dz-default dz-message\"><span>"+this.options.dictDefaultMessage+"</span></div>"));}
if(this.clickableElements.length){setupHiddenFileInput=(function(_this){return function(){if(_this.hiddenFileInput){document.body.removeChild(_this.hiddenFileInput);}
_this.hiddenFileInput=document.createElement("input");_this.hiddenFileInput.setAttribute("type","file");if((_this.options.maxFiles==null)||_this.options.maxFiles>1){_this.hiddenFileInput.setAttribute("multiple","multiple");}
_this.hiddenFileInput.className="dz-hidden-input";if(_this.options.acceptedFiles!=null){_this.hiddenFileInput.setAttribute("accept",_this.options.acceptedFiles);}
if(_this.options.capture!=null){_this.hiddenFileInput.setAttribute("capture",_this.options.capture);}
_this.hiddenFileInput.style.visibility="hidden";_this.hiddenFileInput.style.position="absolute";_this.hiddenFileInput.style.top="0";_this.hiddenFileInput.style.left="0";_this.hiddenFileInput.style.height="0";_this.hiddenFileInput.style.width="0";document.body.appendChild(_this.hiddenFileInput);return _this.hiddenFileInput.addEventListener("change",function(){var file,files,_i,_len;files=_this.hiddenFileInput.files;if(files.length){for(_i=0,_len=files.length;_i<_len;_i++){file=files[_i];_this.addFile(file);}}
return setupHiddenFileInput();});};})(this);setupHiddenFileInput();}
this.URL=(_ref=window.URL)!=null?_ref:window.webkitURL;_ref1=this.events;for(_i=0,_len=_ref1.length;_i<_len;_i++){eventName=_ref1[_i];this.on(eventName,this.options[eventName]);}
this.on("uploadprogress",(function(_this){return function(){return _this.updateTotalUploadProgress();};})(this));this.on("removedfile",(function(_this){return function(){return _this.updateTotalUploadProgress();};})(this));this.on("canceled",(function(_this){return function(file){return _this.emit("complete",file);};})(this));this.on("complete",(function(_this){return function(file){if(_this.getUploadingFiles().length===0&&_this.getQueuedFiles().length===0){return setTimeout((function(){return _this.emit("queuecomplete");}),0);}};})(this));noPropagation=function(e){e.stopPropagation();if(e.preventDefault){return e.preventDefault();}else{return e.returnValue=false;}};this.listeners=[{element:this.element,events:{"dragstart":(function(_this){return function(e){return _this.emit("dragstart",e);};})(this),"dragenter":(function(_this){return function(e){noPropagation(e);return _this.emit("dragenter",e);};})(this),"dragover":(function(_this){return function(e){var efct;try{efct=e.dataTransfer.effectAllowed;}catch(_error){}
e.dataTransfer.dropEffect='move'===efct||'linkMove'===efct?'move':'copy';noPropagation(e);return _this.emit("dragover",e);};})(this),"dragleave":(function(_this){return function(e){return _this.emit("dragleave",e);};})(this),"drop":(function(_this){return function(e){noPropagation(e);return _this.drop(e);};})(this),"dragend":(function(_this){return function(e){return _this.emit("dragend",e);};})(this)}}];this.clickableElements.forEach((function(_this){return function(clickableElement){return _this.listeners.push({element:clickableElement,events:{"click":function(evt){if((clickableElement!==_this.element)||(evt.target===_this.element||Dropzone.elementInside(evt.target,_this.element.querySelector(".dz-message")))){return _this.hiddenFileInput.click();}}}});};})(this));this.enable();return this.options.init.call(this);};Dropzone.prototype.destroy=function(){var _ref;this.disable();this.removeAllFiles(true);if((_ref=this.hiddenFileInput)!=null?_ref.parentNode:void 0){this.hiddenFileInput.parentNode.removeChild(this.hiddenFileInput);this.hiddenFileInput=null;}
delete this.element.dropzone;return Dropzone.instances.splice(Dropzone.instances.indexOf(this),1);};Dropzone.prototype.updateTotalUploadProgress=function(){var activeFiles,file,totalBytes,totalBytesSent,totalUploadProgress,_i,_len,_ref;totalBytesSent=0;totalBytes=0;activeFiles=this.getActiveFiles();if(activeFiles.length){_ref=this.getActiveFiles();for(_i=0,_len=_ref.length;_i<_len;_i++){file=_ref[_i];totalBytesSent+=file.upload.bytesSent;totalBytes+=file.upload.total;}
totalUploadProgress=100*totalBytesSent/totalBytes;}else{totalUploadProgress=100;}
return this.emit("totaluploadprogress",totalUploadProgress,totalBytes,totalBytesSent);};Dropzone.prototype._getParamName=function(n){if(typeof this.options.paramName==="function"){return this.options.paramName(n);}else{return""+this.options.paramName+(this.options.uploadMultiple?"["+n+"]":"");}};Dropzone.prototype.getFallbackForm=function(){var existingFallback,fields,fieldsString,form;if(existingFallback=this.getExistingFallback()){return existingFallback;}
fieldsString="<div class=\"dz-fallback\">";if(this.options.dictFallbackText){fieldsString+="<p>"+this.options.dictFallbackText+"</p>";}
fieldsString+="<input type=\"file\" name=\""+(this._getParamName(0))+"\" "+(this.options.uploadMultiple?'multiple="multiple"':void 0)+" /><input type=\"submit\" value=\"Upload!\"></div>";fields=Dropzone.createElement(fieldsString);if(this.element.tagName!=="FORM"){form=Dropzone.createElement("<form action=\""+this.options.url+"\" enctype=\"multipart/form-data\" method=\""+this.options.method+"\"></form>");form.appendChild(fields);}else{this.element.setAttribute("enctype","multipart/form-data");this.element.setAttribute("method",this.options.method);}
return form!=null?form:fields;};Dropzone.prototype.getExistingFallback=function(){var fallback,getFallback,tagName,_i,_len,_ref;getFallback=function(elements){var el,_i,_len;for(_i=0,_len=elements.length;_i<_len;_i++){el=elements[_i];if(/(^| )fallback($| )/.test(el.className)){return el;}}};_ref=["div","form"];for(_i=0,_len=_ref.length;_i<_len;_i++){tagName=_ref[_i];if(fallback=getFallback(this.element.getElementsByTagName(tagName))){return fallback;}}};Dropzone.prototype.setupEventListeners=function(){var elementListeners,event,listener,_i,_len,_ref,_results;_ref=this.listeners;_results=[];for(_i=0,_len=_ref.length;_i<_len;_i++){elementListeners=_ref[_i];_results.push((function(){var _ref1,_results1;_ref1=elementListeners.events;_results1=[];for(event in _ref1){listener=_ref1[event];_results1.push(elementListeners.element.addEventListener(event,listener,false));}
return _results1;})());}
return _results;};Dropzone.prototype.removeEventListeners=function(){var elementListeners,event,listener,_i,_len,_ref,_results;_ref=this.listeners;_results=[];for(_i=0,_len=_ref.length;_i<_len;_i++){elementListeners=_ref[_i];_results.push((function(){var _ref1,_results1;_ref1=elementListeners.events;_results1=[];for(event in _ref1){listener=_ref1[event];_results1.push(elementListeners.element.removeEventListener(event,listener,false));}
return _results1;})());}
return _results;};Dropzone.prototype.disable=function(){var file,_i,_len,_ref,_results;this.clickableElements.forEach(function(element){return element.classList.remove("dz-clickable");});this.removeEventListeners();_ref=this.files;_results=[];for(_i=0,_len=_ref.length;_i<_len;_i++){file=_ref[_i];_results.push(this.cancelUpload(file));}
return _results;};Dropzone.prototype.enable=function(){this.clickableElements.forEach(function(element){return element.classList.add("dz-clickable");});return this.setupEventListeners();};Dropzone.prototype.filesize=function(size){var string;if(size>=1024*1024*1024*1024/10){size=size/(1024*1024*1024*1024/10);string="TiB";}else if(size>=1024*1024*1024/10){size=size/(1024*1024*1024/10);string="GiB";}else if(size>=1024*1024/10){size=size/(1024*1024/10);string="MiB";}else if(size>=1024/10){size=size/(1024/10);string="KiB";}else{size=size*10;string="b";}
return"<strong>"+(Math.round(size)/10)+"</strong> "+string;};Dropzone.prototype._updateMaxFilesReachedClass=function(){if((this.options.maxFiles!=null)&&this.getAcceptedFiles().length>=this.options.maxFiles){if(this.getAcceptedFiles().length===this.options.maxFiles){this.emit('maxfilesreached',this.files);}
return this.element.classList.add("dz-max-files-reached");}else{return this.element.classList.remove("dz-max-files-reached");}};Dropzone.prototype.drop=function(e){var files,items;if(!e.dataTransfer){return;}
this.emit("drop",e);files=e.dataTransfer.files;if(files.length){items=e.dataTransfer.items;if(items&&items.length&&(items[0].webkitGetAsEntry!=null)){this._addFilesFromItems(items);}else{this.handleFiles(files);}}};Dropzone.prototype.paste=function(e){var items,_ref;if((e!=null?(_ref=e.clipboardData)!=null?_ref.items:void 0:void 0)==null){return;}
this.emit("paste",e);items=e.clipboardData.items;if(items.length){return this._addFilesFromItems(items);}};Dropzone.prototype.handleFiles=function(files){var file,_i,_len,_results;_results=[];for(_i=0,_len=files.length;_i<_len;_i++){file=files[_i];_results.push(this.addFile(file));}
return _results;};Dropzone.prototype._addFilesFromItems=function(items){var entry,item,_i,_len,_results;_results=[];for(_i=0,_len=items.length;_i<_len;_i++){item=items[_i];if((item.webkitGetAsEntry!=null)&&(entry=item.webkitGetAsEntry())){if(entry.isFile){_results.push(this.addFile(item.getAsFile()));}else if(entry.isDirectory){_results.push(this._addFilesFromDirectory(entry,entry.name));}else{_results.push(void 0);}}else if(item.getAsFile!=null){if((item.kind==null)||item.kind==="file"){_results.push(this.addFile(item.getAsFile()));}else{_results.push(void 0);}}else{_results.push(void 0);}}
return _results;};Dropzone.prototype._addFilesFromDirectory=function(directory,path){var dirReader,entriesReader;dirReader=directory.createReader();entriesReader=(function(_this){return function(entries){var entry,_i,_len;for(_i=0,_len=entries.length;_i<_len;_i++){entry=entries[_i];if(entry.isFile){entry.file(function(file){if(_this.options.ignoreHiddenFiles&&file.name.substring(0,1)==='.'){return;}
file.fullPath=""+path+"/"+file.name;return _this.addFile(file);});}else if(entry.isDirectory){_this._addFilesFromDirectory(entry,""+path+"/"+entry.name);}}};})(this);return dirReader.readEntries(entriesReader,function(error){return typeof console!=="undefined"&&console!==null?typeof console.log==="function"?console.log(error):void 0:void 0;});};Dropzone.prototype.accept=function(file,done){if(file.size>this.options.maxFilesize*1024*1024){return done(this.options.dictFileTooBig.replace("{{filesize}}",Math.round(file.size/1024/10.24)/100).replace("{{maxFilesize}}",this.options.maxFilesize));}else if(!Dropzone.isValidFile(file,this.options.acceptedFiles)){return done(this.options.dictInvalidFileType);}else if((this.options.maxFiles!=null)&&this.getAcceptedFiles().length>=this.options.maxFiles){done(this.options.dictMaxFilesExceeded.replace("{{maxFiles}}",this.options.maxFiles));return this.emit("maxfilesexceeded",file);}else{return this.options.accept.call(this,file,done);}};Dropzone.prototype.addFile=function(file){file.upload={progress:0,total:file.size,bytesSent:0};this.files.push(file);file.status=Dropzone.ADDED;this.emit("addedfile",file);this._enqueueThumbnail(file);return this.accept(file,(function(_this){return function(error){if(error){file.accepted=false;_this._errorProcessing([file],error);}else{file.accepted=true;if(_this.options.autoQueue){_this.enqueueFile(file);}}
return _this._updateMaxFilesReachedClass();};})(this));};Dropzone.prototype.enqueueFiles=function(files){var file,_i,_len;for(_i=0,_len=files.length;_i<_len;_i++){file=files[_i];this.enqueueFile(file);}
return null;};Dropzone.prototype.enqueueFile=function(file){if(file.status===Dropzone.ADDED&&file.accepted===true){file.status=Dropzone.QUEUED;if(this.options.autoProcessQueue){return setTimeout(((function(_this){return function(){return _this.processQueue();};})(this)),0);}}else{throw new Error("This file can't be queued because it has already been processed or was rejected.");}};Dropzone.prototype._thumbnailQueue=[];Dropzone.prototype._processingThumbnail=false;Dropzone.prototype._enqueueThumbnail=function(file){if(this.options.createImageThumbnails&&file.type.match(/image.*/)&&file.size<=this.options.maxThumbnailFilesize*1024*1024){this._thumbnailQueue.push(file);return setTimeout(((function(_this){return function(){return _this._processThumbnailQueue();};})(this)),0);}};Dropzone.prototype._processThumbnailQueue=function(){if(this._processingThumbnail||this._thumbnailQueue.length===0){return;}
this._processingThumbnail=true;return this.createThumbnail(this._thumbnailQueue.shift(),(function(_this){return function(){_this._processingThumbnail=false;return _this._processThumbnailQueue();};})(this));};Dropzone.prototype.removeFile=function(file){if(file.status===Dropzone.UPLOADING){this.cancelUpload(file);}
this.files=without(this.files,file);this.emit("removedfile",file);if(this.files.length===0){return this.emit("reset");}};Dropzone.prototype.removeAllFiles=function(cancelIfNecessary){var file,_i,_len,_ref;if(cancelIfNecessary==null){cancelIfNecessary=false;}
_ref=this.files.slice();for(_i=0,_len=_ref.length;_i<_len;_i++){file=_ref[_i];if(file.status!==Dropzone.UPLOADING||cancelIfNecessary){this.removeFile(file);}}
return null;};Dropzone.prototype.createThumbnail=function(file,callback){var fileReader;fileReader=new FileReader;fileReader.onload=(function(_this){return function(){var img;if(file.type==="image/svg+xml"){_this.emit("thumbnail",file,fileReader.result);if(callback!=null){callback();}
return;}
img=document.createElement("img");img.onload=function(){var canvas,ctx,resizeInfo,thumbnail,_ref,_ref1,_ref2,_ref3;file.width=img.width;file.height=img.height;resizeInfo=_this.options.resize.call(_this,file);if(resizeInfo.trgWidth==null){resizeInfo.trgWidth=resizeInfo.optWidth;}
if(resizeInfo.trgHeight==null){resizeInfo.trgHeight=resizeInfo.optHeight;}
canvas=document.createElement("canvas");ctx=canvas.getContext("2d");canvas.width=resizeInfo.trgWidth;canvas.height=resizeInfo.trgHeight;drawImageIOSFix(ctx,img,(_ref=resizeInfo.srcX)!=null?_ref:0,(_ref1=resizeInfo.srcY)!=null?_ref1:0,resizeInfo.srcWidth,resizeInfo.srcHeight,(_ref2=resizeInfo.trgX)!=null?_ref2:0,(_ref3=resizeInfo.trgY)!=null?_ref3:0,resizeInfo.trgWidth,resizeInfo.trgHeight);thumbnail=canvas.toDataURL("image/png");_this.emit("thumbnail",file,thumbnail);if(callback!=null){return callback();}};return img.src=fileReader.result;};})(this);return fileReader.readAsDataURL(file);};Dropzone.prototype.processQueue=function(){var i,parallelUploads,processingLength,queuedFiles;parallelUploads=this.options.parallelUploads;processingLength=this.getUploadingFiles().length;i=processingLength;if(processingLength>=parallelUploads){return;}
queuedFiles=this.getQueuedFiles();if(!(queuedFiles.length>0)){return;}
if(this.options.uploadMultiple){return this.processFiles(queuedFiles.slice(0,parallelUploads-processingLength));}else{while(i<parallelUploads){if(!queuedFiles.length){return;}
this.processFile(queuedFiles.shift());i++;}}};Dropzone.prototype.processFile=function(file){return this.processFiles([file]);};Dropzone.prototype.processFiles=function(files){var file,_i,_len;for(_i=0,_len=files.length;_i<_len;_i++){file=files[_i];file.processing=true;file.status=Dropzone.UPLOADING;this.emit("processing",file);}
if(this.options.uploadMultiple){this.emit("processingmultiple",files);}
return this.uploadFiles(files);};Dropzone.prototype._getFilesWithXhr=function(xhr){var file,files;return files=(function(){var _i,_len,_ref,_results;_ref=this.files;_results=[];for(_i=0,_len=_ref.length;_i<_len;_i++){file=_ref[_i];if(file.xhr===xhr){_results.push(file);}}
return _results;}).call(this);};Dropzone.prototype.cancelUpload=function(file){var groupedFile,groupedFiles,_i,_j,_len,_len1,_ref;if(file.status===Dropzone.UPLOADING){groupedFiles=this._getFilesWithXhr(file.xhr);for(_i=0,_len=groupedFiles.length;_i<_len;_i++){groupedFile=groupedFiles[_i];groupedFile.status=Dropzone.CANCELED;}
file.xhr.abort();for(_j=0,_len1=groupedFiles.length;_j<_len1;_j++){groupedFile=groupedFiles[_j];this.emit("canceled",groupedFile);}
if(this.options.uploadMultiple){this.emit("canceledmultiple",groupedFiles);}}else if((_ref=file.status)===Dropzone.ADDED||_ref===Dropzone.QUEUED){file.status=Dropzone.CANCELED;this.emit("canceled",file);if(this.options.uploadMultiple){this.emit("canceledmultiple",[file]);}}
if(this.options.autoProcessQueue){return this.processQueue();}};resolveOption=function(){var args,option;option=arguments[0],args=2<=arguments.length?__slice.call(arguments,1):[];if(typeof option==='function'){return option.apply(this,args);}
return option;};Dropzone.prototype.uploadFile=function(file){return this.uploadFiles([file]);};Dropzone.prototype.uploadFiles=function(files){var file,formData,handleError,headerName,headerValue,headers,i,input,inputName,inputType,key,method,option,progressObj,response,updateProgress,url,value,xhr,_i,_j,_k,_l,_len,_len1,_len2,_len3,_m,_ref,_ref1,_ref2,_ref3,_ref4,_ref5;xhr=new XMLHttpRequest();for(_i=0,_len=files.length;_i<_len;_i++){file=files[_i];file.xhr=xhr;}
method=resolveOption(this.options.method,files);url=resolveOption(this.options.url,files);xhr.open(method,url,true);xhr.withCredentials=!!this.options.withCredentials;response=null;handleError=(function(_this){return function(){var _j,_len1,_results;_results=[];for(_j=0,_len1=files.length;_j<_len1;_j++){file=files[_j];_results.push(_this._errorProcessing(files,response||_this.options.dictResponseError.replace("{{statusCode}}",xhr.status),xhr));}
return _results;};})(this);updateProgress=(function(_this){return function(e){var allFilesFinished,progress,_j,_k,_l,_len1,_len2,_len3,_results;if(e!=null){progress=100*e.loaded/e.total;for(_j=0,_len1=files.length;_j<_len1;_j++){file=files[_j];file.upload={progress:progress,total:e.total,bytesSent:e.loaded};}}else{allFilesFinished=true;progress=100;for(_k=0,_len2=files.length;_k<_len2;_k++){file=files[_k];if(!(file.upload.progress===100&&file.upload.bytesSent===file.upload.total)){allFilesFinished=false;}
file.upload.progress=progress;file.upload.bytesSent=file.upload.total;}
if(allFilesFinished){return;}}
_results=[];for(_l=0,_len3=files.length;_l<_len3;_l++){file=files[_l];_results.push(_this.emit("uploadprogress",file,progress,file.upload.bytesSent));}
return _results;};})(this);xhr.onload=(function(_this){return function(e){var _ref;if(files[0].status===Dropzone.CANCELED){return;}
if(xhr.readyState!==4){return;}
response=xhr.responseText;if(xhr.getResponseHeader("content-type")&&~xhr.getResponseHeader("content-type").indexOf("application/json")){try{response=JSON.parse(response);}catch(_error){e=_error;response="Invalid JSON response from server.";}}
updateProgress();if(!((200<=(_ref=xhr.status)&&_ref<300))){return handleError();}else{return _this._finished(files,response,e);}};})(this);xhr.onerror=(function(_this){return function(){if(files[0].status===Dropzone.CANCELED){return;}
return handleError();};})(this);progressObj=(_ref=xhr.upload)!=null?_ref:xhr;progressObj.onprogress=updateProgress;headers={"Accept":"application/json","Cache-Control":"no-cache","X-Requested-With":"XMLHttpRequest"};if(this.options.headers){extend(headers,this.options.headers);}
for(headerName in headers){headerValue=headers[headerName];xhr.setRequestHeader(headerName,headerValue);}
formData=new FormData();if(this.options.params){_ref1=this.options.params;for(key in _ref1){value=_ref1[key];formData.append(key,value);}}
for(_j=0,_len1=files.length;_j<_len1;_j++){file=files[_j];this.emit("sending",file,xhr,formData);}
if(this.options.uploadMultiple){this.emit("sendingmultiple",files,xhr,formData);}
if(this.element.tagName==="FORM"){_ref2=this.element.querySelectorAll("input, textarea, select, button");for(_k=0,_len2=_ref2.length;_k<_len2;_k++){input=_ref2[_k];inputName=input.getAttribute("name");inputType=input.getAttribute("type");if(input.tagName==="SELECT"&&input.hasAttribute("multiple")){_ref3=input.options;for(_l=0,_len3=_ref3.length;_l<_len3;_l++){option=_ref3[_l];if(option.selected){formData.append(inputName,option.value);}}}else if(!inputType||((_ref4=inputType.toLowerCase())!=="checkbox"&&_ref4!=="radio")||input.checked){formData.append(inputName,input.value);}}}
for(i=_m=0,_ref5=files.length-1;0<=_ref5?_m<=_ref5:_m>=_ref5;i=0<=_ref5?++_m:--_m){formData.append(this._getParamName(i),files[i],files[i].name);}
return xhr.send(formData);};Dropzone.prototype._finished=function(files,responseText,e){var file,_i,_len;for(_i=0,_len=files.length;_i<_len;_i++){file=files[_i];file.status=Dropzone.SUCCESS;this.emit("success",file,responseText,e);this.emit("complete",file);}
if(this.options.uploadMultiple){this.emit("successmultiple",files,responseText,e);this.emit("completemultiple",files);}
if(this.options.autoProcessQueue){return this.processQueue();}};Dropzone.prototype._errorProcessing=function(files,message,xhr){var file,_i,_len;for(_i=0,_len=files.length;_i<_len;_i++){file=files[_i];file.status=Dropzone.ERROR;this.emit("error",file,message,xhr);this.emit("complete",file);}
if(this.options.uploadMultiple){this.emit("errormultiple",files,message,xhr);this.emit("completemultiple",files);}
if(this.options.autoProcessQueue){return this.processQueue();}};return Dropzone;})(Emitter);Dropzone.version="3.12.0";Dropzone.options={};Dropzone.optionsForElement=function(element){if(element.getAttribute("id")){return Dropzone.options[camelize(element.getAttribute("id"))];}else{return void 0;}};Dropzone.instances=[];Dropzone.forElement=function(element){if(typeof element==="string"){element=document.querySelector(element);}
if((element!=null?element.dropzone:void 0)==null){throw new Error("No Dropzone found for given element. This is probably because you're trying to access it before Dropzone had the time to initialize. Use the `init` option to setup any additional observers on your Dropzone.");}
return element.dropzone;};Dropzone.autoDiscover=true;Dropzone.discover=function(){var checkElements,dropzone,dropzones,_i,_len,_results;if(document.querySelectorAll){dropzones=document.querySelectorAll(".dropzone");}else{dropzones=[];checkElements=function(elements){var el,_i,_len,_results;_results=[];for(_i=0,_len=elements.length;_i<_len;_i++){el=elements[_i];if(/(^| )dropzone($| )/.test(el.className)){_results.push(dropzones.push(el));}else{_results.push(void 0);}}
return _results;};checkElements(document.getElementsByTagName("div"));checkElements(document.getElementsByTagName("form"));}
_results=[];for(_i=0,_len=dropzones.length;_i<_len;_i++){dropzone=dropzones[_i];if(Dropzone.optionsForElement(dropzone)!==false){_results.push(new Dropzone(dropzone));}else{_results.push(void 0);}}
return _results;};Dropzone.blacklistedBrowsers=[/opera.*Macintosh.*version\/12/i];Dropzone.isBrowserSupported=function(){var capableBrowser,regex,_i,_len,_ref;capableBrowser=true;if(window.File&&window.FileReader&&window.FileList&&window.Blob&&window.FormData&&document.querySelector){if(!("classList"in document.createElement("a"))){capableBrowser=false;}else{_ref=Dropzone.blacklistedBrowsers;for(_i=0,_len=_ref.length;_i<_len;_i++){regex=_ref[_i];if(regex.test(navigator.userAgent)){capableBrowser=false;continue;}}}}else{capableBrowser=false;}
return capableBrowser;};without=function(list,rejectedItem){var item,_i,_len,_results;_results=[];for(_i=0,_len=list.length;_i<_len;_i++){item=list[_i];if(item!==rejectedItem){_results.push(item);}}
return _results;};camelize=function(str){return str.replace(/[\-_](\w)/g,function(match){return match.charAt(1).toUpperCase();});};Dropzone.createElement=function(string){var div;div=document.createElement("div");div.innerHTML=string;return div.childNodes[0];};Dropzone.elementInside=function(element,container){if(element===container){return true;}
while(element=element.parentNode){if(element===container){return true;}}
return false;};Dropzone.getElement=function(el,name){var element;if(typeof el==="string"){element=document.querySelector(el);}else if(el.nodeType!=null){element=el;}
if(element==null){throw new Error("Invalid `"+name+"` option provided. Please provide a CSS selector or a plain HTML element.");}
return element;};Dropzone.getElements=function(els,name){var e,el,elements,_i,_j,_len,_len1,_ref;if(els instanceof Array){elements=[];try{for(_i=0,_len=els.length;_i<_len;_i++){el=els[_i];elements.push(this.getElement(el,name));}}catch(_error){e=_error;elements=null;}}else if(typeof els==="string"){elements=[];_ref=document.querySelectorAll(els);for(_j=0,_len1=_ref.length;_j<_len1;_j++){el=_ref[_j];elements.push(el);}}else if(els.nodeType!=null){elements=[els];}
if(!((elements!=null)&&elements.length)){throw new Error("Invalid `"+name+"` option provided. Please provide a CSS selector, a plain HTML element or a list of those.");}
return elements;};Dropzone.confirm=function(question,accepted,rejected){if(window.confirm(question)){return accepted();}else if(rejected!=null){return rejected();}};Dropzone.isValidFile=function(file,acceptedFiles){var baseMimeType,mimeType,validType,_i,_len;if(!acceptedFiles){return true;}
acceptedFiles=acceptedFiles.split(",");mimeType=file.type;baseMimeType=mimeType.replace(/\/.*$/,"");for(_i=0,_len=acceptedFiles.length;_i<_len;_i++){validType=acceptedFiles[_i];validType=validType.trim();if(validType.charAt(0)==="."){if(file.name.toLowerCase().indexOf(validType.toLowerCase(),file.name.length-validType.length)!==-1){return true;}}else if(/\/\*$/.test(validType)){if(baseMimeType===validType.replace(/\/.*$/,"")){return true;}}else{if(mimeType===validType){return true;}}}
return false;};if(typeof jQuery!=="undefined"&&jQuery!==null){jQuery.fn.dropzone=function(options){return this.each(function(){return new Dropzone(this,options);});};}
if(typeof module!=="undefined"&&module!==null){module.exports=Dropzone;}else{window.Dropzone=Dropzone;}
Dropzone.ADDED="added";Dropzone.QUEUED="queued";Dropzone.ACCEPTED=Dropzone.QUEUED;Dropzone.UPLOADING="uploading";Dropzone.PROCESSING=Dropzone.UPLOADING;Dropzone.CANCELED="canceled";Dropzone.ERROR="error";Dropzone.SUCCESS="success";detectVerticalSquash=function(img){var alpha,canvas,ctx,data,ey,ih,iw,py,ratio,sy;iw=img.naturalWidth;ih=img.naturalHeight;canvas=document.createElement("canvas");canvas.width=1;canvas.height=ih;ctx=canvas.getContext("2d");ctx.drawImage(img,0,0);data=ctx.getImageData(0,0,1,ih).data;sy=0;ey=ih;py=ih;while(py>sy){alpha=data[(py-1)*4+3];if(alpha===0){ey=py;}else{sy=py;}
py=(ey+sy)>>1;}
ratio=py/ih;if(ratio===0){return 1;}else{return ratio;}};drawImageIOSFix=function(ctx,img,sx,sy,sw,sh,dx,dy,dw,dh){var vertSquashRatio;vertSquashRatio=detectVerticalSquash(img);return ctx.drawImage(img,sx,sy,sw,sh,dx,dy,dw,dh/vertSquashRatio);};contentLoaded=function(win,fn){var add,doc,done,init,poll,pre,rem,root,top;done=false;top=true;doc=win.document;root=doc.documentElement;add=(doc.addEventListener?"addEventListener":"attachEvent");rem=(doc.addEventListener?"removeEventListener":"detachEvent");pre=(doc.addEventListener?"":"on");init=function(e){if(e.type==="readystatechange"&&doc.readyState!=="complete"){return;}
(e.type==="load"?win:doc)[rem](pre+e.type,init,false);if(!done&&(done=true)){return fn.call(win,e.type||e);}};poll=function(){var e;try{root.doScroll("left");}catch(_error){e=_error;setTimeout(poll,50);return;}
return init("poll");};if(doc.readyState!=="complete"){if(doc.createEventObject&&root.doScroll){try{top=!win.frameElement;}catch(_error){}
if(top){poll();}}
doc[add](pre+"DOMContentLoaded",init,false);doc[add](pre+"readystatechange",init,false);return win[add](pre+"load",init,false);}};Dropzone._autoDiscoverFunction=function(){if(Dropzone.autoDiscover){return Dropzone.discover();}};contentLoaded(window,Dropzone._autoDiscoverFunction);}).call(this);});if(typeof exports=="object"){module.exports=require("dropzone");}else if(typeof define=="function"&&define.amd){define([],function(){return require("dropzone");});}else{this["Dropzone"]=require("dropzone");}})();
(function(c){"function"===typeof define&&define.amd?define("pnotify",["jquery"],c):c(jQuery)})(function(c){var p={dir1:"down",dir2:"left",push:"bottom",spacing1:25,spacing2:25,context:c("body")},f,g,h=c(window),m=function(){g=c("body");PNotify.prototype.options.stack.context=g;h=c(window);h.bind("resize",function(){f&&clearTimeout(f);f=setTimeout(function(){PNotify.positionAll(!0)},10)})};PNotify=function(b){this.parseOptions(b);this.init()};c.extend(PNotify.prototype,{version:"2.0.1",options:{title:!1,title_escape:!1,text:!1,text_escape:!1,styling:"bootstrap3",addclass:"",cornerclass:"",auto_display:!0,width:"300px",min_height:"16px",type:"notice",icon:!0,opacity:1,animation:"fade",animate_speed:"slow",position_animate_speed:500,shadow:!0,hide:!0,delay:8E3,mouse_reset:!0,remove:!0,insert_brs:!0,destroy:!0,stack:p},modules:{},runModules:function(b,a){var c,e;for(e in this.modules)if(c="object"===typeof a&&e in a?a[e]:a,"function"===typeof this.modules[e][b])this.modules[e][b](this,"object"===typeof this.options[e]?this.options[e]:{},c)},state:"initializing",timer:null,styles:null,elem:null,container:null,title_container:null,text_container:null,animating:!1,timerHide:!1,init:function(){var b=this;this.modules={};c.extend(!0,this.modules,PNotify.prototype.modules);this.styles="object"===typeof this.options.styling?this.options.styling:PNotify.styling[this.options.styling];this.elem=c("<div />",{"class":"ui-pnotify "+this.options.addclass,css:{display:"none"},mouseenter:function(a){if(b.options.mouse_reset&&"out"===b.animating){if(!b.timerHide)return;b.cancelRemove()}b.options.hide&&b.options.mouse_reset&&b.cancelRemove()},mouseleave:function(a){b.options.hide&&b.options.mouse_reset&&b.queueRemove();PNotify.positionAll()}});this.container=c("<div />",{"class":this.styles.container+" ui-pnotify-container "+("error"===this.options.type?this.styles.error:"info"===this.options.type?this.styles.info:"success"===this.options.type?this.styles.success:this.styles.notice)}).appendTo(this.elem);""!==this.options.cornerclass&&this.container.removeClass("ui-corner-all").addClass(this.options.cornerclass);this.options.shadow&&this.container.addClass("ui-pnotify-shadow");!1!==this.options.icon&&c("<div />",{"class":"ui-pnotify-icon"}).append(c("<span />",{"class":!0===this.options.icon?"error"===this.options.type?this.styles.error_icon:"info"===this.options.type?this.styles.info_icon:"success"===this.options.type?this.styles.success_icon:this.styles.notice_icon:this.options.icon})).prependTo(this.container);this.title_container=c("<h4 />",{"class":"ui-pnotify-title"}).appendTo(this.container);!1===this.options.title?this.title_container.hide():this.options.title_escape?this.title_container.text(this.options.title):this.title_container.html(this.options.title);this.text_container=c("<div />",{"class":"ui-pnotify-text"}).appendTo(this.container);!1===this.options.text?this.text_container.hide():this.options.text_escape?this.text_container.text(this.options.text):this.text_container.html(this.options.insert_brs?String(this.options.text).replace(/\n/g,"<br />"):this.options.text);"string"===typeof this.options.width&&this.elem.css("width",this.options.width);"string"===typeof this.options.min_height&&this.container.css("min-height",this.options.min_height);PNotify.notices="top"===this.options.stack.push?c.merge([this],PNotify.notices):c.merge(PNotify.notices,[this]);"top"===this.options.stack.push&&this.queuePosition(!1,1);this.options.stack.animation=!1;this.runModules("init");this.options.auto_display&&this.open();return this},update:function(b){var a=this.options;this.parseOptions(a,b);this.options.cornerclass!==a.cornerclass&&this.container.removeClass("ui-corner-all "+a.cornerclass).addClass(this.options.cornerclass);this.options.shadow!==a.shadow&&(this.options.shadow?this.container.addClass("ui-pnotify-shadow"):this.container.removeClass("ui-pnotify-shadow"));!1===this.options.addclass?this.elem.removeClass(a.addclass):this.options.addclass!==a.addclass&&this.elem.removeClass(a.addclass).addClass(this.options.addclass);!1===this.options.title?this.title_container.slideUp("fast"):this.options.title!==a.title&&(this.options.title_escape?this.title_container.text(this.options.title):this.title_container.html(this.options.title),!1===a.title&&this.title_container.slideDown(200));!1===this.options.text?this.text_container.slideUp("fast"):this.options.text!==a.text&&(this.options.text_escape?this.text_container.text(this.options.text):this.text_container.html(this.options.insert_brs?String(this.options.text).replace(/\n/g,"<br />"):this.options.text),!1===a.text&&this.text_container.slideDown(200));this.options.type!==a.type&&this.container.removeClass(this.styles.error+" "+this.styles.notice+" "+this.styles.success+" "+this.styles.info).addClass("error"===this.options.type?this.styles.error:"info"===this.options.type?this.styles.info:"success"===this.options.type?this.styles.success:this.styles.notice);if(this.options.icon!==a.icon||!0===this.options.icon&&this.options.type!==a.type)this.container.find("div.ui-pnotify-icon").remove(),!1!==this.options.icon&&c("<div />",{"class":"ui-pnotify-icon"}).append(c("<span />",{"class":!0===this.options.icon?"error"===this.options.type?this.styles.error_icon:"info"===this.options.type?this.styles.info_icon:"success"===this.options.type?this.styles.success_icon:this.styles.notice_icon:this.options.icon})).prependTo(this.container);this.options.width!==a.width&&this.elem.animate({width:this.options.width});this.options.min_height!==a.min_height&&this.container.animate({minHeight:this.options.min_height});this.options.opacity!==a.opacity&&this.elem.fadeTo(this.options.animate_speed,this.options.opacity);this.options.hide?a.hide||this.queueRemove():this.cancelRemove();this.queuePosition(!0);this.runModules("update",a);return this},open:function(){this.state="opening";this.runModules("beforeOpen");var b=this;this.elem.parent().length||this.elem.appendTo(this.options.stack.context?this.options.stack.context:g);"top"!==this.options.stack.push&&this.position(!0);"fade"===this.options.animation||"fade"===this.options.animation.effect_in?this.elem.show().fadeTo(0,0).hide():1!==this.options.opacity&&this.elem.show().fadeTo(0,this.options.opacity).hide();this.animateIn(function(){b.queuePosition(!0);b.options.hide&&b.queueRemove();b.state="open";b.runModules("afterOpen")});return this},remove:function(b){this.state="closing";this.timerHide=!!b;this.runModules("beforeClose");var a=this;this.timer&&(window.clearTimeout(this.timer),this.timer=null);this.animateOut(function(){a.state="closed";a.runModules("afterClose");a.queuePosition(!0);a.options.remove&&a.elem.detach();a.runModules("beforeDestroy");if(a.options.destroy&&null!==PNotify.notices){var b=c.inArray(a,PNotify.notices);-1!==b&&PNotify.notices.splice(b,1)}a.runModules("afterDestroy")});return this},get:function(){return this.elem},parseOptions:function(b,a){this.options=c.extend(!0,{},PNotify.prototype.options);this.options.stack=PNotify.prototype.options.stack;var n=[b,a],e,f;for(f in n){e=n[f];if("undefined"==typeof e)break;if("object"!==typeof e)this.options.text=e;else for(var d in e)this.modules[d]?c.extend(!0,this.options[d],e[d]):this.options[d]=e[d]}},animateIn:function(b){this.animating="in";var a;a="undefined"!==typeof this.options.animation.effect_in?this.options.animation.effect_in:this.options.animation;"none"===a?(this.elem.show(),b()):"show"===a?this.elem.show(this.options.animate_speed,b):"fade"===a?this.elem.show().fadeTo(this.options.animate_speed,this.options.opacity,b):"slide"===a?this.elem.slideDown(this.options.animate_speed,b):"function"===typeof a?a("in",b,this.elem):this.elem.show(a,"object"===typeof this.options.animation.options_in?this.options.animation.options_in:{},this.options.animate_speed,b);this.elem.parent().hasClass("ui-effects-wrapper")&&this.elem.parent().css({position:"fixed",overflow:"visible"});"slide"!==a&&this.elem.css("overflow","visible");this.container.css("overflow","hidden")},animateOut:function(b){this.animating="out";var a;a="undefined"!==typeof this.options.animation.effect_out?this.options.animation.effect_out:this.options.animation;"none"===a?(this.elem.hide(),b()):"show"===a?this.elem.hide(this.options.animate_speed,b):"fade"===a?this.elem.fadeOut(this.options.animate_speed,b):"slide"===a?this.elem.slideUp(this.options.animate_speed,b):"function"===typeof a?a("out",b,this.elem):this.elem.hide(a,"object"===typeof this.options.animation.options_out?this.options.animation.options_out:{},this.options.animate_speed,b);this.elem.parent().hasClass("ui-effects-wrapper")&&this.elem.parent().css({position:"fixed",overflow:"visible"});"slide"!==a&&this.elem.css("overflow","visible");this.container.css("overflow","hidden")},position:function(b){var a=this.options.stack,c=this.elem;c.parent().hasClass("ui-effects-wrapper")&&(c=this.elem.css({left:"0",top:"0",right:"0",bottom:"0"}).parent());"undefined"===typeof a.context&&(a.context=g);if(a){"number"!==typeof a.nextpos1&&(a.nextpos1=a.firstpos1);"number"!==typeof a.nextpos2&&(a.nextpos2=a.firstpos2);"number"!==typeof a.addpos2&&(a.addpos2=0);var e="none"===c.css("display");if(!e||b){var f,d={},k;switch(a.dir1){case"down":k="top";break;case"up":k="bottom";break;case"left":k="right";break;case"right":k="left"}b=parseInt(c.css(k).replace(/(?:\..*|[^0-9.])/g,""));isNaN(b)&&(b=0);"undefined"!==typeof a.firstpos1||e||(a.firstpos1=b,a.nextpos1=a.firstpos1);var l;switch(a.dir2){case"down":l="top";break;case"up":l="bottom";break;case"left":l="right";break;case"right":l="left"}f=parseInt(c.css(l).replace(/(?:\..*|[^0-9.])/g,""));isNaN(f)&&(f=0);"undefined"!==typeof a.firstpos2||e||(a.firstpos2=f,a.nextpos2=a.firstpos2);if("down"===a.dir1&&a.nextpos1+c.height()>(a.context.is(g)?h.height():a.context.prop("scrollHeight"))||"up"===a.dir1&&a.nextpos1+c.height()>(a.context.is(g)?h.height():a.context.prop("scrollHeight"))||"left"===a.dir1&&a.nextpos1+c.width()>(a.context.is(g)?h.width():a.context.prop("scrollWidth"))||"right"===a.dir1&&a.nextpos1+c.width()>(a.context.is(g)?h.width():a.context.prop("scrollWidth")))a.nextpos1=a.firstpos1,a.nextpos2+=a.addpos2+("undefined"===typeof a.spacing2?25:a.spacing2),a.addpos2=0;if(a.animation&&a.nextpos2<f)switch(a.dir2){case"down":d.top=a.nextpos2+"px";break;case"up":d.bottom=a.nextpos2+"px";break;case"left":d.right=a.nextpos2+"px";break;case"right":d.left=a.nextpos2+"px"}else"number"===typeof a.nextpos2&&c.css(l,a.nextpos2+"px");switch(a.dir2){case"down":case"up":c.outerHeight(!0)>a.addpos2&&(a.addpos2=c.height());break;case"left":case"right":c.outerWidth(!0)>a.addpos2&&(a.addpos2=c.width())}if("number"===typeof a.nextpos1)if(a.animation&&(b>a.nextpos1||d.top||d.bottom||d.right||d.left))switch(a.dir1){case"down":d.top=a.nextpos1+"px";break;case"up":d.bottom=a.nextpos1+"px";break;case"left":d.right=a.nextpos1+"px";break;case"right":d.left=a.nextpos1+"px"}else c.css(k,a.nextpos1+"px");(d.top||d.bottom||d.right||d.left)&&c.animate(d,{duration:this.options.position_animate_speed,queue:!1});switch(a.dir1){case"down":case"up":a.nextpos1+=c.height()+("undefined"===typeof a.spacing1?25:a.spacing1);break;case"left":case"right":a.nextpos1+=c.width()+("undefined"===typeof a.spacing1?25:a.spacing1)}}return this}},queuePosition:function(b,a){f&&clearTimeout(f);a||(a=10);f=setTimeout(function(){PNotify.positionAll(b)},a);return this},cancelRemove:function(){this.timer&&window.clearTimeout(this.timer);"closing"===this.state&&(this.elem.stop(!0),this.state="open",this.animating="in",this.elem.css("height","auto").animate({width:this.options.width,opacity:this.options.opacity},"fast"));return this},queueRemove:function(){var b=this;this.cancelRemove();this.timer=window.setTimeout(function(){b.remove(!0)},isNaN(this.options.delay)?0:this.options.delay);return this}});c.extend(PNotify,{notices:[],removeAll:function(){c.each(PNotify.notices,function(){this.remove&&this.remove()})},positionAll:function(b){f&&clearTimeout(f);f=null;c.each(PNotify.notices,function(){var a=this.options.stack;a&&(a.nextpos1=a.firstpos1,a.nextpos2=a.firstpos2,a.addpos2=0,a.animation=b)});c.each(PNotify.notices,function(){this.position()})},styling:{jqueryui:{container:"ui-widget ui-widget-content ui-corner-all",notice:"ui-state-highlight",notice_icon:"ui-icon ui-icon-info",info:"",info_icon:"ui-icon ui-icon-info",success:"ui-state-default",success_icon:"ui-icon ui-icon-circle-check",error:"ui-state-error",error_icon:"ui-icon ui-icon-alert"},bootstrap2:{container:"alert",notice:"",notice_icon:"icon-exclamation-sign",info:"alert-info",info_icon:"icon-info-sign",success:"alert-success",success_icon:"icon-ok-sign",error:"alert-error",error_icon:"icon-warning-sign"},bootstrap3:{container:"alert",notice:"alert-warning",notice_icon:"glyphicon glyphicon-exclamation-sign",info:"alert-info",info_icon:"glyphicon glyphicon-info-sign",success:"alert-success",success_icon:"glyphicon glyphicon-ok-sign",error:"alert-danger",error_icon:"glyphicon glyphicon-warning-sign"}}});PNotify.styling.fontawesome=c.extend({},PNotify.styling.bootstrap3);c.extend(PNotify.styling.fontawesome,{notice_icon:"fa fa-exclamation-circle",info_icon:"fa fa-info",success_icon:"fa fa-check",error_icon:"fa fa-warning"});document.body?m():c(m);return PNotify});(function(c){"function"===typeof define&&define.amd?define("pnotify.buttons",["jquery","pnotify"],c):c(jQuery,PNotify)})(function(c,e){e.prototype.options.buttons={closer:!0,closer_hover:!0,sticker:!0,sticker_hover:!0,labels:{close:"Close",stick:"Stick"}};e.prototype.modules.buttons={myOptions:null,closer:null,sticker:null,init:function(a,b){var d=this;this.myOptions=b;a.elem.on({mouseenter:function(b){!d.myOptions.sticker||a.options.nonblock&&a.options.nonblock.nonblock||d.sticker.trigger("pnotify_icon").css("visibility","visible");!d.myOptions.closer||a.options.nonblock&&a.options.nonblock.nonblock||d.closer.css("visibility","visible")},mouseleave:function(a){d.myOptions.sticker_hover&&d.sticker.css("visibility","hidden");d.myOptions.closer_hover&&d.closer.css("visibility","hidden")}});this.sticker=c("<div />",{"class":"ui-pnotify-sticker",css:{cursor:"pointer",visibility:b.sticker_hover?"hidden":"visible"},click:function(){a.options.hide=!a.options.hide;a.options.hide?a.queueRemove():a.cancelRemove();c(this).trigger("pnotify_icon")}}).bind("pnotify_icon",function(){c(this).children().removeClass(a.styles.pin_up+" "+a.styles.pin_down).addClass(a.options.hide?a.styles.pin_up:a.styles.pin_down)}).append(c("<span />",{"class":a.styles.pin_up,title:b.labels.stick})).prependTo(a.container);(!b.sticker||a.options.nonblock&&a.options.nonblock.nonblock)&&this.sticker.css("display","none");this.closer=c("<div />",{"class":"ui-pnotify-closer",css:{cursor:"pointer",visibility:b.closer_hover?"hidden":"visible"},click:function(){a.remove(!1);d.sticker.css("visibility","hidden");d.closer.css("visibility","hidden")}}).append(c("<span />",{"class":a.styles.closer,title:b.labels.close})).prependTo(a.container);(!b.closer||a.options.nonblock&&a.options.nonblock.nonblock)&&this.closer.css("display","none")},update:function(a,b){this.myOptions=b;!b.closer||a.options.nonblock&&a.options.nonblock.nonblock?this.closer.css("display","none"):b.closer&&this.closer.css("display","block");!b.sticker||a.options.nonblock&&a.options.nonblock.nonblock?this.sticker.css("display","none"):b.sticker&&this.sticker.css("display","block");this.sticker.trigger("pnotify_icon");b.sticker_hover?this.sticker.css("visibility","hidden"):a.options.nonblock&&a.options.nonblock.nonblock||this.sticker.css("visibility","visible");b.closer_hover?this.closer.css("visibility","hidden"):a.options.nonblock&&a.options.nonblock.nonblock||this.closer.css("visibility","visible")}};c.extend(e.styling.jqueryui,{closer:"ui-icon ui-icon-close",pin_up:"ui-icon ui-icon-pin-w",pin_down:"ui-icon ui-icon-pin-s"});c.extend(e.styling.bootstrap2,{closer:"icon-remove",pin_up:"icon-pause",pin_down:"icon-play"});c.extend(e.styling.bootstrap3,{closer:"glyphicon glyphicon-remove",pin_up:"glyphicon glyphicon-pause",pin_down:"glyphicon glyphicon-play"});c.extend(e.styling.fontawesome,{closer:"fa fa-times",pin_up:"fa fa-pause",pin_down:"fa fa-play"})});(function(b){"function"===typeof define&&define.amd?define("pnotify.callbacks",["jquery","pnotify"],b):b(jQuery,PNotify)})(function(b,a){var c=a.prototype.init,d=a.prototype.open,e=a.prototype.remove;a.prototype.init=function(){this.options.before_init&&this.options.before_init(this.options);c.apply(this,arguments);this.options.after_init&&this.options.after_init(this)};a.prototype.open=function(){var a;this.options.before_open&&(a=this.options.before_open(this));!1!==a&&(d.apply(this,arguments),this.options.after_open&&this.options.after_open(this))};a.prototype.remove=function(a){var b;this.options.before_close&&(b=this.options.before_close(this,a));!1!==b&&(e.apply(this,arguments),this.options.after_close&&this.options.after_close(this,a))}});(function(d){"function"===typeof define&&define.amd?define("pnotify.confirm",["jquery","pnotify"],d):d(jQuery,PNotify)})(function(d,e){e.prototype.options.confirm={confirm:!1,prompt:!1,prompt_class:"",prompt_default:"",prompt_multi_line:!1,align:"right",buttons:[{text:"Ok",addClass:"",promptTrigger:!0,click:function(b,a){b.remove();b.get().trigger("pnotify.confirm",[b,a])}},{text:"Cancel",addClass:"",click:function(b){b.remove();b.get().trigger("pnotify.cancel",b)}}]};e.prototype.modules.confirm={container:null,prompt:null,init:function(b,a){this.container=d('<div style="margin-top:5px;clear:both;" />').css("text-align",a.align).appendTo(b.container);a.confirm||a.prompt?this.makeDialog(b,a):this.container.hide()},update:function(b,a){a.confirm?(this.makeDialog(b,a),this.container.show()):this.container.hide().empty()},afterOpen:function(b,a){a.prompt&&this.prompt.focus()},makeDialog:function(b,a){var e=!1,h=this,f,c;this.container.empty();a.prompt&&(this.prompt=d("<"+(a.prompt_multi_line?'textarea rows="5"':'input type="text"')+' style="margin-bottom:5px;clear:both;" />').addClass(b.styles.input+" "+a.prompt_class).val(a.prompt_default).appendTo(this.container));for(var k in a.buttons){f=a.buttons[k];e?this.container.append(" "):e=!0;c=d('<button type="button" />').addClass(b.styles.btn+" "+f.addClass).text(f.text).appendTo(this.container).on("click",function(g){return function(){"function"==typeof g.click&&g.click(b,a.prompt?h.prompt.val():null)}}(f));a.prompt&&!a.prompt_multi_line&&f.promptTrigger&&this.prompt.keypress(function(b){return function(a){13==a.keyCode&&b.click()}}(c));b.styles.text&&c.wrapInner('<span class="'+b.styles.text+'"></span>');b.styles.btnhover&&c.hover(function(a){return function(){a.addClass(b.styles.btnhover)}}(c),function(a){return function(){a.removeClass(b.styles.btnhover)}}(c));if(b.styles.btnactive)c.on("mousedown",function(a){return function(){a.addClass(b.styles.btnactive)}}(c)).on("mouseup",function(a){return function(){a.removeClass(b.styles.btnactive)}}(c));if(b.styles.btnfocus)c.on("focus",function(a){return function(){a.addClass(b.styles.btnfocus)}}(c)).on("blur",function(a){return function(){a.removeClass(b.styles.btnfocus)}}(c))}}};d.extend(e.styling.jqueryui,{btn:"ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only",btnhover:"ui-state-hover",btnactive:"ui-state-active",btnfocus:"ui-state-focus",input:"",text:"ui-button-text"});d.extend(e.styling.bootstrap2,{btn:"btn",input:""});d.extend(e.styling.bootstrap3,{btn:"btn btn-default",input:"form-control"});d.extend(e.styling.fontawesome,{btn:"btn btn-default",input:"form-control"})});(function(e){"function"===typeof define&&define.amd?define("pnotify.desktop",["jquery","pnotify"],e):e(jQuery,PNotify)})(function(e,d){var c,f=function(a,b){f="Notification"in window?function(a,b){return new Notification(a,b)}:"mozNotification"in navigator?function(a,b){return navigator.mozNotification.createNotification(a,b.body,b.icon).show()}:"webkitNotifications"in window?function(a,b){return window.webkitNotifications.createNotification(b.icon,a,b.body)}:function(a,b){return null};return f(a,b)};d.prototype.options.desktop={desktop:!1,icon:null,tag:null};d.prototype.modules.desktop={tag:null,icon:null,genNotice:function(a,b){this.icon=null===b.icon?"http://sciactive.com/pnotify/includes/desktop/"+a.options.type+".png":!1===b.icon?null:b.icon;if(null===this.tag||null!==b.tag)this.tag=null===b.tag?"PNotify-"+Math.round(1E6*Math.random()):b.tag;a.desktop=f(a.options.title,{icon:this.icon,body:a.options.text,tag:this.tag});"close"in a.desktop||(a.desktop.close=function(){a.desktop.cancel()});a.desktop.onclick=function(){a.elem.trigger("click")};a.desktop.onclose=function(){"closing"!==a.state&&"closed"!==a.state&&a.remove()}},init:function(a,b){b.desktop&&(c=d.desktop.checkPermission(),0==c&&this.genNotice(a,b))},update:function(a,b,d){0==c&&b.desktop&&this.genNotice(a,b)},beforeOpen:function(a,b){0==c&&b.desktop&&a.elem.css({left:"-10000px",display:"none"})},afterOpen:function(a,b){0==c&&b.desktop&&(a.elem.css({left:"-10000px",display:"none"}),"show"in a.desktop&&a.desktop.show())},beforeClose:function(a,b){0==c&&b.desktop&&a.elem.css({left:"-10000px",display:"none"})},afterClose:function(a,b){0==c&&b.desktop&&(a.elem.css({left:"-10000px",display:"none"}),a.desktop.close())}};d.desktop={permission:function(){"undefined"!==typeof Notification&&"requestPermission"in Notification?Notification.requestPermission():"webkitNotifications"in window&&window.webkitNotifications.requestPermission()},checkPermission:function(){return"undefined"!==typeof Notification&&"permission"in Notification?"granted"==Notification.permission?0:1:"webkitNotifications"in window?window.webkitNotifications.checkPermission():1}};c=d.desktop.checkPermission()});(function(a){"function"===typeof define&&define.amd?define("pnotify.history",["jquery","pnotify"],a):a(jQuery,PNotify)})(function(a,b){var d,f;a(function(){a("body").on("pnotify.history-all",function(){a.each(b.notices,function(){this.modules.history.inHistory&&(this.elem.is(":visible")?this.options.hide&&this.queueRemove():this.open&&this.open())})}).on("pnotify.history-last",function(){var a="top"===b.prototype.options.stack.push,c=a?0:-1,e;do{e=-1===c?b.notices.slice(c):b.notices.slice(c,c+1);if(!e[0])return!1;c=a?c+1:c-1}while(!e[0].modules.history.inHistory||e[0].elem.is(":visible"));e[0].open&&e[0].open()})});b.prototype.options.history={history:!0,menu:!1,fixed:!0,maxonscreen:Infinity,labels:{redisplay:"Redisplay",all:"All",last:"Last"}};b.prototype.modules.history={inHistory:!1,init:function(b,c){b.options.destroy=!1;this.inHistory=c.history;if(c.menu&&"undefined"===typeof d){d=a("<div />",{"class":"ui-pnotify-history-container "+b.styles.hi_menu,mouseleave:function(){d.animate({top:"-"+
f+"px"},{duration:100,queue:!1})}}).append(a("<div />",{"class":"ui-pnotify-history-header",text:c.labels.redisplay})).append(a("<button />",{"class":"ui-pnotify-history-all "+b.styles.hi_btn,text:c.labels.all,mouseenter:function(){a(this).addClass(b.styles.hi_btnhov)},mouseleave:function(){a(this).removeClass(b.styles.hi_btnhov)},click:function(){a(this).trigger("pnotify.history-all");return!1}})).append(a("<button />",{"class":"ui-pnotify-history-last "+b.styles.hi_btn,text:c.labels.last,mouseenter:function(){a(this).addClass(b.styles.hi_btnhov)},mouseleave:function(){a(this).removeClass(b.styles.hi_btnhov)},click:function(){a(this).trigger("pnotify.history-last");return!1}})).appendTo("body");var e=a("<span />",{"class":"ui-pnotify-history-pulldown "+b.styles.hi_hnd,mouseenter:function(){d.animate({top:"0"},{duration:100,queue:!1})}}).appendTo(d);console.log(e.offset());f=e.offset().top+2;d.css({top:"-"+f+"px"});c.fixed&&d.addClass("ui-pnotify-history-fixed")}},update:function(b,a){this.inHistory=a.history;a.fixed&&d?d.addClass("ui-pnotify-history-fixed"):d&&d.removeClass("ui-pnotify-history-fixed")},beforeOpen:function(d,c){if(b.notices&&b.notices.length>c.maxonscreen){var e;e="top"!==d.options.stack.push?b.notices.slice(0,b.notices.length-c.maxonscreen):b.notices.slice(c.maxonscreen,b.notices.length);a.each(e,function(){this.remove&&this.remove()})}}};a.extend(b.styling.jqueryui,{hi_menu:"ui-state-default ui-corner-bottom",hi_btn:"ui-state-default ui-corner-all",hi_btnhov:"ui-state-hover",hi_hnd:"ui-icon ui-icon-grip-dotted-horizontal"});a.extend(b.styling.bootstrap2,{hi_menu:"well",hi_btn:"btn",hi_btnhov:"",hi_hnd:"icon-chevron-down"});a.extend(b.styling.bootstrap3,{hi_menu:"well",hi_btn:"btn btn-default",hi_btnhov:"",hi_hnd:"glyphicon glyphicon-chevron-down"});a.extend(b.styling.fontawesome,{hi_menu:"well",hi_btn:"btn btn-default",hi_btnhov:"",hi_hnd:"fa fa-chevron-down"})});(function(f){"function"===typeof define&&define.amd?define("pnotify.nonblock",["jquery","pnotify"],f):f(jQuery,PNotify)})(function(f,g){var l=/^on/,m=/^(dbl)?click$|^mouse(move|down|up|over|out|enter|leave)$|^contextmenu$/,n=/^(focus|blur|select|change|reset)$|^key(press|down|up)$/,p=/^(scroll|resize|(un)?load|abort|error)$/,h=function(b,a){var c;b=b.toLowerCase();document.createEvent&&this.dispatchEvent?(b=b.replace(l,""),b.match(m)?(f(this).offset(),c=document.createEvent("MouseEvents"),c.initMouseEvent(b,a.bubbles,a.cancelable,a.view,a.detail,a.screenX,a.screenY,a.clientX,a.clientY,a.ctrlKey,a.altKey,a.shiftKey,a.metaKey,a.button,a.relatedTarget)):b.match(n)?(c=document.createEvent("UIEvents"),c.initUIEvent(b,a.bubbles,a.cancelable,a.view,a.detail)):b.match(p)&&(c=document.createEvent("HTMLEvents"),c.initEvent(b,a.bubbles,a.cancelable)),c&&this.dispatchEvent(c)):(b.match(l)||(b="on"+b),c=document.createEventObject(a),this.fireEvent(b,c))},e,d=function(b,a,c){b.elem.css("display","none");var k=document.elementFromPoint(a.clientX,a.clientY);b.elem.css("display","block");var d=f(k),g=d.css("cursor");b.elem.css("cursor","auto"!==g?g:"default");e&&e.get(0)==k||(e&&(h.call(e.get(0),"mouseleave",a.originalEvent),h.call(e.get(0),"mouseout",a.originalEvent)),h.call(k,"mouseenter",a.originalEvent),h.call(k,"mouseover",a.originalEvent));h.call(k,c,a.originalEvent);e=d};g.prototype.options.nonblock={nonblock:!1,nonblock_opacity:0.2};g.prototype.modules.nonblock={myOptions:null,init:function(b,a){var c=this;this.myOptions=a;b.elem.on({mouseenter:function(a){c.myOptions.nonblock&&a.stopPropagation();c.myOptions.nonblock&&b.elem.stop().animate({opacity:c.myOptions.nonblock_opacity},"fast")},mouseleave:function(a){c.myOptions.nonblock&&a.stopPropagation();e=null;b.elem.css("cursor","auto");c.myOptions.nonblock&&"out"!==b.animating&&b.elem.stop().animate({opacity:b.options.opacity},"fast")},mouseover:function(a){c.myOptions.nonblock&&a.stopPropagation()},mouseout:function(a){c.myOptions.nonblock&&a.stopPropagation()},mousemove:function(a){c.myOptions.nonblock&&(a.stopPropagation(),d(b,a,"onmousemove"))},mousedown:function(a){c.myOptions.nonblock&&(a.stopPropagation(),a.preventDefault(),d(b,a,"onmousedown"))},mouseup:function(a){c.myOptions.nonblock&&(a.stopPropagation(),a.preventDefault(),d(b,a,"onmouseup"))},click:function(a){c.myOptions.nonblock&&(a.stopPropagation(),d(b,a,"onclick"))},dblclick:function(a){c.myOptions.nonblock&&(a.stopPropagation(),d(b,a,"ondblclick"))}})},update:function(b,a){this.myOptions=a}}});;
$(document).ready(function(){$('.slider').slider();$('.gllpSearchField').keydown(function(event){if(event.keyCode==13){if($('.gllpSearchField').val().length>0){$('.gllpSearchButton').click();}
event.preventDefault();return false;}});});var options={animation:true,animationSteps:60,animationEasing:"easeOutQuart",showScale:true,scaleOverride:true,scaleSteps:5,scaleStepWidth:10,scaleStartValue:0,scaleLineColor:"rgba(0,0,0,.1)",scaleLineWidth:1,scaleShowLabels:true,scaleLabel:"<%=value%>",scaleIntegersOnly:false,scaleBeginAtZero:false,scaleFontFamily:"'Arial', 'Helvetica', 'Arial', sans-serif",scaleFontSize:18,scaleFontStyle:"normal",scaleFontColor:"#666",responsive:false,maintainAspectRatio:true,showTooltips:true,tooltipEvents:["click","touchstart","touchmove"],tooltipFillColor:"rgba(0,0,0,0.8)",tooltipFontFamily:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",tooltipFontSize:30,tooltipFontStyle:"normal",tooltipFontColor:"#fff;",tooltipTitleFontFamily:" 'Helvetica', 'Arial', sans-serif",tooltipTitleFontSize:14,tooltipTitleFontStyle:"normal",tooltipTitleFontColor:"#000",tooltipYPadding:6,tooltipXPadding:6,tooltipCaretSize:8,tooltipCornerRadius:6,tooltipXOffset:10,tooltipTemplate:"<%= value %>",onAnimationProgress:function(){},onAnimationComplete:function(){}};$(document).ready(function(){$.get("/notification",function(response){});});var search=function(){$("#results").fadeOut("fast").html("")
$.get("/search?query="+$("#search_employee_value").val(),function(response){console.log(response)
$("#results").html(response).fadeIn("fast");})}
$(document).ready(function(){$("#search_employee").click(function(){console.log("tea")
search()})
$("#search_employee_value").keydown(function(event){console.log(event.keyCode)
if(event.keyCode==13){search()}})
$('#ui_effect_in').val('puff');$('#ui_easing_in').val('easeOutBack');$('#ui_effect_out').val('same');$('#ui_easing_out').val('easeInBack');$('#ui_speed').val('1000');$('#ui_button').click();$(".bootstrap-tagsinput").addClass("material-input");$.get("/notification",function(response){console.log(response);jQuery.each(response,function(){new PNotify({title:this.notification_title,text:this.message_key,icon:false,type:'success',styling:'bootstrap3',hide:false,confirm:{confirm:true,buttons:[{text:'view',addClass:'btn btn-sm btn-primary',icon:"glyphicon glyphicon-ok",click:function(notice){notice.update({title:'They will be notified',text:'You can now contact them.',icon:false,type:'success',hide:false,styling:'bootstrap3',confirm:{confirm:false},buttons:{closer:true,sticker:true}});}},{text:'decline',addClass:'btn btn-sm btn-warning',icon:'glyphicon glyphicon-ok'}]},buttons:{closer:false,sticker:false},history:{history:false}});});},"json");});var getUser=function(id){$.get("suggestion/profile/"+id,function(response){$("#search_bar").hide()
$("#show_user").html(response)
$("#show_user").prepend('<i class="fa fa-close pull-right"  style="cursor:pointer" onclick="show_bar() "></i>')
$("#show_user").show()})}
var show_bar=function(){$('#show_user').hide();$("#search_bar").show()}
var submitlocationform=function()
{var form=document.querySelector("#location")
form.submit()};