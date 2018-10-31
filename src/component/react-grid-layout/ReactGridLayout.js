!(function (t, e) {
    "object" == typeof exports && "object" == typeof module
        ? (module.exports = e(require("react"), require("react-dom")))
        : "function" == typeof window.define && window.define.amd
            ? window.define(["react", "react-dom"], e)
            : "object" == typeof exports
                ? (exports.ReactGridLayout = e(require("react"), require("react-dom")))
                : (t.ReactGridLayout = e(t.React, t.ReactDOM));
})("undefined" != typeof window.self ? window.self : this, function (t, e) {
    return (function (t) {
        function e(r) {
            if (n[r]) return n[r].exports;
            var o = (n[r] = { i: r, l: !1, exports: {} });
            return t[r].call(o.exports, o, o.exports, e), (o.l = !0), o.exports;
        }
        var n = {};
        return (
            (e.m = t),
            (e.c = n),
            (e.d = function (t, n, r) {
                e.o(t, n) ||
                    Object.defineProperty(t, n, {
                        configurable: !1,
                        enumerable: !0,
                        get: r
                    });
            }),
            (e.n = function (t) {
                var n =
                    t && t.__esModule
                        ? function () {
                            return t.default;
                        }
                        : function () {
                            return t;
                        };
                return e.d(n, "a", n), n;
            }),
            (e.o = function (t, e) {
                return Object.prototype.hasOwnProperty.call(t, e);
            }),
            (e.p = ""),
            e((e.s = 10))
        );
    })([
        function (e, n) {
            e.exports = t;
        },
        function (t, e, n) {
            t.exports = n(11)();
        },
        function (t, e, n) {
            "use strict";
            function r(t) {
                return t && t.__esModule ? t : { default: t };
            }
            function o(t) {
                for (var e = 0, n = void 0, r = 0, o = t.length; r < o; r++)
                    (n = t[r].y + t[r].h) > e && (e = n);
                return e;
            }
            function a(t) {
                for (var e = Array(t.length), n = 0, r = t.length; n < r; n++)
                    e[n] = i(t[n]);
                return e;
            }
            function i(t) {
                return {
                    w: t.w,
                    h: t.h,
                    x: t.x,
                    y: t.y,
                    i: t.i,
                    minW: t.minW,
                    maxW: t.maxW,
                    minH: t.minH,
                    maxH: t.maxH,
                    moved: Boolean(t.moved),
                    static: Boolean(t.static),
                    isDraggable: t.isDraggable,
                    isResizable: t.isResizable
                };
            }
            function s(t, e) {
                return (0, z.default)(
                    k.default.Children.map(t, function (t) {
                        return t.key;
                    }),
                    k.default.Children.map(e, function (t) {
                        return t.key;
                    })
                );
            }
            function u(t, e) {
                return (
                    t !== e &&
                    (!(t.x + t.w <= e.x) &&
                        (!(t.x >= e.x + e.w) &&
                            (!(t.y + t.h <= e.y) && !(t.y >= e.y + e.h))))
                );
            }
            function l(t, e, n) {
                for (
                    var r = g(t), o = S(t, e), a = Array(t.length), s = 0, u = o.length;
                    s < u;
                    s++
                ) {
                    var l = i(o[s]);
                    l.static || ((l = f(r, l, e, n, o)), r.push(l)),
                        (a[t.indexOf(o[s])] = l),
                        (l.moved = !1);
                }
                return a;
            }
            function c(t, e, n, r) {
                var o = N[r];
                e[r] += 1;
                for (var a = t.indexOf(e), i = a + 1; i < t.length; i++) {
                    var s = t[i];
                    if (!s.static) {
                        if (s.y > e.y + e.h) break;
                        u(e, s) && c(t, s, n + e[o], r);
                    }
                }
                e[r] = n;
            }
            function f(t, e, n, r, a) {
                var i = "vertical" === n,
                    s = "horizontal" === n;
                if (i) for (e.y = Math.min(o(t), e.y); e.y > 0 && !h(t, e);) e.y--;
                else if (s)
                    for (e.y = Math.min(o(t), e.y); e.x > 0 && !h(t, e);) e.x--;
                for (var u = void 0; (u = h(t, e));)
                    s ? c(a, e, u.x + u.w, "x") : c(a, e, u.y + u.h, "y"),
                        s && e.x + e.w > r && ((e.x = r - e.w), e.y++);
                return e;
            }
            function p(t, e) {
                for (var n = g(t), r = 0, o = t.length; r < o; r++) {
                    var a = t[r];
                    if (
                        (a.x + a.w > e.cols && (a.x = e.cols - a.w),
                            a.x < 0 && ((a.x = 0), (a.w = e.cols)),
                            a.static)
                    )
                        for (; h(n, a);) a.y++;
                    else n.push(a);
                }
                return t;
            }
            function d(t, e) {
                for (var n = 0, r = t.length; n < r; n++) if (t[n].i === e) return t[n];
            }
            function h(t, e) {
                for (var n = 0, r = t.length; n < r; n++) if (u(t[n], e)) return t[n];
            }
            function y(t, e) {
                return t.filter(function (t) {
                    return u(t, e);
                });
            }
            function g(t) {
                return t.filter(function (t) {
                    return t.static;
                });
            }
            function m(t, e, n, r, o, a, i, s) {
                if (e.static) return t;
                if (e.y === r && e.x === n) return t;
                E(
                    "Moving element " +
                    e.i +
                    " to [" +
                    String(n) +
                    "," +
                    String(r) +
                    "] from [" +
                    e.x +
                    "," +
                    e.y +
                    "]"
                );
                var u = e.x,
                    l = e.y;
                "number" == typeof n && (e.x = n),
                    "number" == typeof r && (e.y = r),
                    (e.moved = !0);
                var c = S(t, i);
                ("vertical" === i && "number" == typeof r
                    ? l >= r
                    : "horizontal" === i && "number" == typeof n && u >= n) &&
                    (c = c.reverse());
                var f = y(c, e);
                if (a && f.length)
                    return (
                        E("Collision prevented on " + e.i + ", reverting."),
                        (e.x = u),
                        (e.y = l),
                        (e.moved = !1),
                        t
                    );
                for (var p = 0, d = f.length; p < d; p++) {
                    var h = f[p];
                    E(
                        "Resolving collision between " +
                        e.i +
                        " at [" +
                        e.x +
                        "," +
                        e.y +
                        "] and " +
                        h.i +
                        " at [" +
                        h.x +
                        "," +
                        h.y +
                        "]"
                    ),
                        h.moved ||
                        (t = h.static ? v(t, h, e, o, i, s) : v(t, e, h, o, i, s));
                }
                return t;
            }
            function v(t, e, n, r, o, a) {
                var i = "horizontal" === o,
                    s = "vertical" === o;
                if (r) {
                    r = !1;
                    var u = {
                        x: i ? Math.max(e.x - n.w, 0) : n.x,
                        y: s ? Math.max(e.y - n.h, 0) : n.y,
                        w: n.w,
                        h: n.h,
                        i: "-1"
                    };
                    if (!h(t, u))
                        return (
                            E(
                                "Doing reverse collision on " +
                                n.i +
                                " up to [" +
                                u.x +
                                "," +
                                u.y +
                                "]."
                            ),
                            m(t, n, i ? u.x : void 0, s ? u.y : void 0, r, !1, o, a)
                        );
                }
                return m(t, n, i ? n.x + 1 : void 0, s ? n.y + 1 : void 0, r, !1, o, a);
            }
            function b(t) {
                return 100 * t + "%";
            }
            function w(t) {
                var e = t.top,
                    n = t.left,
                    r = t.width,
                    o = t.height,
                    a = "translate(" + n + "px," + e + "px)";
                return {
                    transform: a,
                    WebkitTransform: a,
                    MozTransform: a,
                    msTransform: a,
                    OTransform: a,
                    width: r + "px",
                    height: o + "px",
                    position: "absolute"
                };
            }
            function x(t) {
                return {
                    top: t.top + "px",
                    left: t.left + "px",
                    width: t.width + "px",
                    height: t.height + "px",
                    position: "absolute"
                };
            }
            function S(t, e) {
                return "horizontal" === e ? O(t) : _(t);
            }
            function _(t) {
                return [].concat(t).sort(function (t, e) {
                    return t.y > e.y || (t.y === e.y && t.x > e.x)
                        ? 1
                        : t.y === e.y && t.x === e.x ? 0 : -1;
                });
            }
            function O(t) {
                return [].concat(t).sort(function (t, e) {
                    return t.x > e.x || (t.x === e.x && t.y > e.y) ? 1 : -1;
                });
            }
            function R(t, e, n, r) {
                t = t || [];
                var a = [];
                return (
                    k.default.Children.forEach(e, function (e, n) {
                        var r = d(t, String(e.key));
                        if (r) a[n] = i(r);
                        else {
                            !M &&
                                e.props._grid &&
                                console.warn(
                                    "`_grid` properties on children have been deprecated as of React 15.2. Please use `data-grid` or add your properties directly to the `layout`."
                                );
                            var s = e.props["data-grid"] || e.props._grid;
                            s
                                ? (M || D([s], "ReactGridLayout.children"),
                                    (a[n] = i(T({}, s, { i: e.key }))))
                                : (a[n] = i({ w: 1, h: 1, x: 0, y: o(a), i: String(e.key) }));
                        }
                    }),
                    (a = p(a, { cols: n })),
                    (a = l(a, r, n))
                );
            }
            function D(t) {
                var e =
                    arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : "Layout",
                    n = ["x", "y", "w", "h"];
                if (!Array.isArray(t)) throw new Error(e + " must be an array!");
                for (var r = 0, o = t.length; r < o; r++) {
                    for (var a = t[r], i = 0; i < n.length; i++)
                        if ("number" != typeof a[n[i]])
                            throw new Error(
                                "ReactGridLayout: " +
                                e +
                                "[" +
                                r +
                                "]." +
                                n[i] +
                                " must be a number!"
                            );
                    if (a.i && "string" != typeof a.i)
                        throw new Error(
                            "ReactGridLayout: " + e + "[" + r + "].i must be a string!"
                        );
                    if (void 0 !== a.static && "boolean" != typeof a.static)
                        throw new Error(
                            "ReactGridLayout: " + e + "[" + r + "].static must be a boolean!"
                        );
                }
            }
            function j(t, e) {
                e.forEach(function (e) {
                    return (t[e] = t[e].bind(t));
                });
            }
            function E() {
                var t;
                L && (t = console).log.apply(t, arguments);
            }
            (e.__esModule = !0), (e.noop = void 0);
            var T =
                Object.assign ||
                function (t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = arguments[e];
                        for (var r in n)
                            Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
                    }
                    return t;
                };
            (e.bottom = o),
                (e.cloneLayout = a),
                (e.cloneLayoutItem = i),
                (e.childrenEqual = s),
                (e.collides = u),
                (e.compact = l),
                (e.compactItem = f),
                (e.correctBounds = p),
                (e.getLayoutItem = d),
                (e.getFirstCollision = h),
                (e.getAllCollisions = y),
                (e.getStatics = g),
                (e.moveElement = m),
                (e.moveElementAwayFromCollision = v),
                (e.perc = b),
                (e.setTransform = w),
                (e.setTopLeft = x),
                (e.sortLayoutItems = S),
                (e.sortLayoutItemsByRowCol = _),
                (e.sortLayoutItemsByColRow = O),
                (e.synchronizeLayoutWithChildren = R),
                (e.validateLayout = D),
                (e.autoBindHandlers = j);
            var C = n(3),
                z = r(C),
                P = n(0),
                k = r(P),
                M = !0,
                L = !1,
                N = { x: "w", y: "h" };
            e.noop = function () { };
        },
        function (t, e, n) {
            (function (t, n) {
                function r(t, e) {
                    for (
                        var n = -1, r = null == t ? 0 : t.length, o = 0, a = [];
                        ++n < r;

                    ) {
                        var i = t[n];
                        e(i, n, t) && (a[o++] = i);
                    }
                    return a;
                }
                function o(t, e) {
                    for (var n = -1, r = e.length, o = t.length; ++n < r;)
                        t[o + n] = e[n];
                    return t;
                }
                function a(t, e) {
                    for (var n = -1, r = null == t ? 0 : t.length; ++n < r;)
                        if (e(t[n], n, t)) return !0;
                    return !1;
                }
                function i(t, e) {
                    for (var n = -1, r = Array(t); ++n < t;) r[n] = e(n);
                    return r;
                }
                function s(t, e) {
                    return t.has(e);
                }
                function u(t, e) {
                    return null == t ? void 0 : t[e];
                }
                function l(t) {
                    var e = -1,
                        n = Array(t.size);
                    return (
                        t.forEach(function (t, r) {
                            n[++e] = [r, t];
                        }),
                        n
                    );
                }
                function c(t) {
                    var e = -1,
                        n = Array(t.size);
                    return (
                        t.forEach(function (t) {
                            n[++e] = t;
                        }),
                        n
                    );
                }
                function f(t) {
                    var e = -1,
                        n = null == t ? 0 : t.length;
                    for (this.clear(); ++e < n;) {
                        var r = t[e];
                        this.set(r[0], r[1]);
                    }
                }
                function p() {
                    (this.__data__ = Oe ? Oe(null) : {}), (this.size = 0);
                }
                function d(t) {
                    var e = this.has(t) && delete this.__data__[t];
                    return (this.size -= e ? 1 : 0), e;
                }
                function h(t) {
                    var e = this.__data__;
                    if (Oe) {
                        var n = e[t];
                        return n === vt ? void 0 : n;
                    }
                    return ie.call(e, t) ? e[t] : void 0;
                }
                function y(t) {
                    var e = this.__data__;
                    return Oe ? void 0 !== e[t] : ie.call(e, t);
                }
                function g(t, e) {
                    var n = this.__data__;
                    return (
                        (this.size += this.has(t) ? 0 : 1),
                        (n[t] = Oe && void 0 === e ? vt : e),
                        this
                    );
                }
                function m(t) {
                    var e = -1,
                        n = null == t ? 0 : t.length;
                    for (this.clear(); ++e < n;) {
                        var r = t[e];
                        this.set(r[0], r[1]);
                    }
                }
                function v() {
                    (this.__data__ = []), (this.size = 0);
                }
                function b(t) {
                    var e = this.__data__,
                        n = H(e, t);
                    return (
                        !(n < 0) &&
                        (n == e.length - 1 ? e.pop() : he.call(e, n, 1), --this.size, !0)
                    );
                }
                function w(t) {
                    var e = this.__data__,
                        n = H(e, t);
                    return n < 0 ? void 0 : e[n][1];
                }
                function x(t) {
                    return H(this.__data__, t) > -1;
                }
                function S(t, e) {
                    var n = this.__data__,
                        r = H(n, t);
                    return r < 0 ? (++this.size, n.push([t, e])) : (n[r][1] = e), this;
                }
                function _(t) {
                    var e = -1,
                        n = null == t ? 0 : t.length;
                    for (this.clear(); ++e < n;) {
                        var r = t[e];
                        this.set(r[0], r[1]);
                    }
                }
                function O() {
                    (this.size = 0),
                        (this.__data__ = {
                            hash: new f(),
                            map: new (we || m)(),
                            string: new f()
                        });
                }
                function R(t) {
                    var e = Q(this, t).delete(t);
                    return (this.size -= e ? 1 : 0), e;
                }
                function D(t) {
                    return Q(this, t).get(t);
                }
                function j(t) {
                    return Q(this, t).has(t);
                }
                function E(t, e) {
                    var n = Q(this, t),
                        r = n.size;
                    return n.set(t, e), (this.size += n.size == r ? 0 : 1), this;
                }
                function T(t) {
                    var e = -1,
                        n = null == t ? 0 : t.length;
                    for (this.__data__ = new _(); ++e < n;) this.add(t[e]);
                }
                function C(t) {
                    return this.__data__.set(t, vt), this;
                }
                function z(t) {
                    return this.__data__.has(t);
                }
                function P(t) {
                    var e = (this.__data__ = new m(t));
                    this.size = e.size;
                }
                function k() {
                    (this.__data__ = new m()), (this.size = 0);
                }
                function M(t) {
                    var e = this.__data__,
                        n = e.delete(t);
                    return (this.size = e.size), n;
                }
                function L(t) {
                    return this.__data__.get(t);
                }
                function N(t) {
                    return this.__data__.has(t);
                }
                function A(t, e) {
                    var n = this.__data__;
                    if (n instanceof m) {
                        var r = n.__data__;
                        if (!we || r.length < mt - 1)
                            return r.push([t, e]), (this.size = ++n.size), this;
                        n = this.__data__ = new _(r);
                    }
                    return n.set(t, e), (this.size = n.size), this;
                }
                function W(t, e) {
                    var n = Le(t),
                        r = !n && Me(t),
                        o = !n && !r && Ne(t),
                        a = !n && !r && !o && Ae(t),
                        s = n || r || o || a,
                        u = s ? i(t.length, String) : [],
                        l = u.length;
                    for (var c in t)
                        (!e && !ie.call(t, c)) ||
                            (s &&
                                ("length" == c ||
                                    (o && ("offset" == c || "parent" == c)) ||
                                    (a &&
                                        ("buffer" == c ||
                                            "byteLength" == c ||
                                            "byteOffset" == c)) ||
                                    et(c, l))) ||
                            u.push(c);
                    return u;
                }
                function H(t, e) {
                    for (var n = t.length; n--;) if (st(t[n][0], e)) return n;
                    return -1;
                }
                function I(t, e, n) {
                    var r = e(t);
                    return Le(t) ? r : o(r, n(t));
                }
                function B(t) {
                    return null == t
                        ? void 0 === t ? Ht : Pt
                        : ye && ye in Object(t) ? tt(t) : at(t);
                }
                function G(t) {
                    return dt(t) && B(t) == St;
                }
                function U(t, e, n, r, o) {
                    return (
                        t === e ||
                        (null == t || null == e || (!dt(t) && !dt(e))
                            ? t !== t && e !== e
                            : q(t, e, n, r, U, o))
                    );
                }
                function q(t, e, n, r, o, a) {
                    var i = Le(t),
                        s = Le(e),
                        u = i ? _t : ke(t),
                        l = s ? _t : ke(e);
                    (u = u == St ? kt : u), (l = l == St ? kt : l);
                    var c = u == kt,
                        f = l == kt,
                        p = u == l;
                    if (p && Ne(t)) {
                        if (!Ne(e)) return !1;
                        (i = !0), (c = !1);
                    }
                    if (p && !c)
                        return (
                            a || (a = new P()),
                            i || Ae(t) ? V(t, e, n, r, o, a) : $(t, e, u, n, r, o, a)
                        );
                    if (!(n & bt)) {
                        var d = c && ie.call(t, "__wrapped__"),
                            h = f && ie.call(e, "__wrapped__");
                        if (d || h) {
                            var y = d ? t.value() : t,
                                g = h ? e.value() : e;
                            return a || (a = new P()), o(y, g, n, r, a);
                        }
                    }
                    return !!p && (a || (a = new P()), J(t, e, n, r, o, a));
                }
                function Y(t) {
                    return !(!pt(t) || rt(t)) && (ct(t) ? le : Ut).test(it(t));
                }
                function X(t) {
                    return dt(t) && ft(t.length) && !!Yt[B(t)];
                }
                function F(t) {
                    if (!ot(t)) return ve(t);
                    var e = [];
                    for (var n in Object(t))
                        ie.call(t, n) && "constructor" != n && e.push(n);
                    return e;
                }
                function V(t, e, n, r, o, i) {
                    var u = n & bt,
                        l = t.length,
                        c = e.length;
                    if (l != c && !(u && c > l)) return !1;
                    var f = i.get(t);
                    if (f && i.get(e)) return f == e;
                    var p = -1,
                        d = !0,
                        h = n & wt ? new T() : void 0;
                    for (i.set(t, e), i.set(e, t); ++p < l;) {
                        var y = t[p],
                            g = e[p];
                        if (r) var m = u ? r(g, y, p, e, t, i) : r(y, g, p, t, e, i);
                        if (void 0 !== m) {
                            if (m) continue;
                            d = !1;
                            break;
                        }
                        if (h) {
                            if (
                                !a(e, function (t, e) {
                                    if (!s(h, e) && (y === t || o(y, t, n, r, i)))
                                        return h.push(e);
                                })
                            ) {
                                d = !1;
                                break;
                            }
                        } else if (y !== g && !o(y, g, n, r, i)) {
                            d = !1;
                            break;
                        }
                    }
                    return i.delete(t), i.delete(e), d;
                }
                function $(t, e, n, r, o, a, i) {
                    switch (n) {
                        case Bt:
                            if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset)
                                return !1;
                            (t = t.buffer), (e = e.buffer);
                        case It:
                            return !(
                                t.byteLength != e.byteLength || !a(new pe(t), new pe(e))
                            );
                        case Rt:
                        case Dt:
                        case zt:
                            return st(+t, +e);
                        case jt:
                            return t.name == e.name && t.message == e.message;
                        case Lt:
                        case At:
                            return t == e + "";
                        case Ct:
                            var s = l;
                        case Nt:
                            var u = r & bt;
                            if ((s || (s = c), t.size != e.size && !u)) return !1;
                            var f = i.get(t);
                            if (f) return f == e;
                            (r |= wt), i.set(t, e);
                            var p = V(s(t), s(e), r, o, a, i);
                            return i.delete(t), p;
                        case Wt:
                            if (ze) return ze.call(t) == ze.call(e);
                    }
                    return !1;
                }
                function J(t, e, n, r, o, a) {
                    var i = n & bt,
                        s = K(t),
                        u = s.length;
                    if (u != K(e).length && !i) return !1;
                    for (var l = u; l--;) {
                        var c = s[l];
                        if (!(i ? c in e : ie.call(e, c))) return !1;
                    }
                    var f = a.get(t);
                    if (f && a.get(e)) return f == e;
                    var p = !0;
                    a.set(t, e), a.set(e, t);
                    for (var d = i; ++l < u;) {
                        c = s[l];
                        var h = t[c],
                            y = e[c];
                        if (r) var g = i ? r(y, h, c, e, t, a) : r(h, y, c, t, e, a);
                        if (!(void 0 === g ? h === y || o(h, y, n, r, a) : g)) {
                            p = !1;
                            break;
                        }
                        d || (d = "constructor" == c);
                    }
                    if (p && !d) {
                        var m = t.constructor,
                            v = e.constructor;
                        m != v &&
                            "constructor" in t &&
                            "constructor" in e &&
                            !(
                                "function" == typeof m &&
                                m instanceof m &&
                                "function" == typeof v &&
                                v instanceof v
                            ) &&
                            (p = !1);
                    }
                    return a.delete(t), a.delete(e), p;
                }
                function K(t) {
                    return I(t, ht, Pe);
                }
                function Q(t, e) {
                    var n = t.__data__;
                    return nt(e) ? n["string" == typeof e ? "string" : "hash"] : n.map;
                }
                function Z(t, e) {
                    var n = u(t, e);
                    return Y(n) ? n : void 0;
                }
                function tt(t) {
                    var e = ie.call(t, ye),
                        n = t[ye];
                    try {
                        t[ye] = void 0;
                        var r = !0;
                    } catch (t) { }
                    var o = ue.call(t);
                    return r && (e ? (t[ye] = n) : delete t[ye]), o;
                }
                function et(t, e) {
                    return (
                        !!(e = null == e ? xt : e) &&
                        ("number" == typeof t || qt.test(t)) &&
                        t > -1 &&
                        t % 1 == 0 &&
                        t < e
                    );
                }
                function nt(t) {
                    var e = typeof t;
                    return "string" == e ||
                        "number" == e ||
                        "symbol" == e ||
                        "boolean" == e
                        ? "__proto__" !== t
                        : null === t;
                }
                function rt(t) {
                    return !!se && se in t;
                }
                function ot(t) {
                    var e = t && t.constructor;
                    return t === (("function" == typeof e && e.prototype) || re);
                }
                function at(t) {
                    return ue.call(t);
                }
                function it(t) {
                    if (null != t) {
                        try {
                            return ae.call(t);
                        } catch (t) { }
                        try {
                            return t + "";
                        } catch (t) { }
                    }
                    return "";
                }
                function st(t, e) {
                    return t === e || (t !== t && e !== e);
                }
                function ut(t) {
                    return null != t && ft(t.length) && !ct(t);
                }
                function lt(t, e) {
                    return U(t, e);
                }
                function ct(t) {
                    if (!pt(t)) return !1;
                    var e = B(t);
                    return e == Et || e == Tt || e == Ot || e == Mt;
                }
                function ft(t) {
                    return "number" == typeof t && t > -1 && t % 1 == 0 && t <= xt;
                }
                function pt(t) {
                    var e = typeof t;
                    return null != t && ("object" == e || "function" == e);
                }
                function dt(t) {
                    return null != t && "object" == typeof t;
                }
                function ht(t) {
                    return ut(t) ? W(t) : F(t);
                }
                function yt() {
                    return [];
                }
                function gt() {
                    return !1;
                }
                var mt = 200,
                    vt = "__lodash_hash_undefined__",
                    bt = 1,
                    wt = 2,
                    xt = 9007199254740991,
                    St = "[object Arguments]",
                    _t = "[object Array]",
                    Ot = "[object AsyncFunction]",
                    Rt = "[object Boolean]",
                    Dt = "[object Date]",
                    jt = "[object Error]",
                    Et = "[object Function]",
                    Tt = "[object GeneratorFunction]",
                    Ct = "[object Map]",
                    zt = "[object Number]",
                    Pt = "[object Null]",
                    kt = "[object Object]",
                    Mt = "[object Proxy]",
                    Lt = "[object RegExp]",
                    Nt = "[object Set]",
                    At = "[object String]",
                    Wt = "[object Symbol]",
                    Ht = "[object Undefined]",
                    It = "[object ArrayBuffer]",
                    Bt = "[object DataView]",
                    Gt = /[\\^$.*+?()[\]{}|]/g,
                    Ut = /^\[object .+?Constructor\]$/,
                    qt = /^(?:0|[1-9]\d*)$/,
                    Yt = {};
                (Yt["[object Float32Array]"] = Yt["[object Float64Array]"] = Yt[
                    "[object Int8Array]"
                ] = Yt["[object Int16Array]"] = Yt["[object Int32Array]"] = Yt[
                "[object Uint8Array]"
                ] = Yt["[object Uint8ClampedArray]"] = Yt["[object Uint16Array]"] = Yt[
                "[object Uint32Array]"
                ] = !0),
                    (Yt[St] = Yt[_t] = Yt[It] = Yt[Rt] = Yt[Bt] = Yt[Dt] = Yt[jt] = Yt[
                        Et
                    ] = Yt[Ct] = Yt[zt] = Yt[kt] = Yt[Lt] = Yt[Nt] = Yt[At] = Yt[
                    "[object WeakMap]"
                    ] = !1);
                var Xt = "object" == typeof t && t && t.Object === Object && t,
                    Ft =
                        "object" == typeof window.self && window.self && window.self.Object === Object && window.self,
                    Vt = Xt || Ft || Function("return this")(),
                    $t = "object" == typeof e && e && !e.nodeType && e,
                    Jt = $t && "object" == typeof n && n && !n.nodeType && n,
                    Kt = Jt && Jt.exports === $t,
                    Qt = Kt && Xt.process,
                    Zt = (function () {
                        try {
                            return Qt && Qt.binding && Qt.binding("util");
                        } catch (t) { }
                    })(),
                    te = Zt && Zt.isTypedArray,
                    ee = Array.prototype,
                    ne = Function.prototype,
                    re = Object.prototype,
                    oe = Vt["__core-js_shared__"],
                    ae = ne.toString,
                    ie = re.hasOwnProperty,
                    se = (function () {
                        var t = /[^.]+$/.exec((oe && oe.keys && oe.keys.IE_PROTO) || "");
                        return t ? "Symbol(src)_1." + t : "";
                    })(),
                    ue = re.toString,
                    le = RegExp(
                        "^" +
                        ae
                            .call(ie)
                            .replace(Gt, "\\$&")
                            .replace(
                                /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                                "$1.*?"
                            ) +
                        "$"
                    ),
                    ce = Kt ? Vt.Buffer : void 0,
                    fe = Vt.Symbol,
                    pe = Vt.Uint8Array,
                    de = re.propertyIsEnumerable,
                    he = ee.splice,
                    ye = fe ? fe.toStringTag : void 0,
                    ge = Object.getOwnPropertySymbols,
                    me = ce ? ce.isBuffer : void 0,
                    ve = (function (t, e) {
                        return function (n) {
                            return t(e(n));
                        };
                    })(Object.keys, Object),
                    be = Z(Vt, "DataView"),
                    we = Z(Vt, "Map"),
                    xe = Z(Vt, "Promise"),
                    Se = Z(Vt, "Set"),
                    _e = Z(Vt, "WeakMap"),
                    Oe = Z(Object, "create"),
                    Re = it(be),
                    De = it(we),
                    je = it(xe),
                    Ee = it(Se),
                    Te = it(_e),
                    Ce = fe ? fe.prototype : void 0,
                    ze = Ce ? Ce.valueOf : void 0;
                (f.prototype.clear = p),
                    (f.prototype.delete = d),
                    (f.prototype.get = h),
                    (f.prototype.has = y),
                    (f.prototype.set = g),
                    (m.prototype.clear = v),
                    (m.prototype.delete = b),
                    (m.prototype.get = w),
                    (m.prototype.has = x),
                    (m.prototype.set = S),
                    (_.prototype.clear = O),
                    (_.prototype.delete = R),
                    (_.prototype.get = D),
                    (_.prototype.has = j),
                    (_.prototype.set = E),
                    (T.prototype.add = T.prototype.push = C),
                    (T.prototype.has = z),
                    (P.prototype.clear = k),
                    (P.prototype.delete = M),
                    (P.prototype.get = L),
                    (P.prototype.has = N),
                    (P.prototype.set = A);
                var Pe = ge
                    ? function (t) {
                        return null == t
                            ? []
                            : ((t = Object(t)),
                                r(ge(t), function (e) {
                                    return de.call(t, e);
                                }));
                    }
                    : yt,
                    ke = B;
                ((be && ke(new be(new ArrayBuffer(1))) != Bt) ||
                    (we && ke(new we()) != Ct) ||
                    (xe && "[object Promise]" != ke(xe.resolve())) ||
                    (Se && ke(new Se()) != Nt) ||
                    (_e && "[object WeakMap]" != ke(new _e()))) &&
                    (ke = function (t) {
                        var e = B(t),
                            n = e == kt ? t.constructor : void 0,
                            r = n ? it(n) : "";
                        if (r)
                            switch (r) {
                                case Re:
                                    return Bt;
                                case De:
                                    return Ct;
                                case je:
                                    return "[object Promise]";
                                case Ee:
                                    return Nt;
                                case Te:
                                    return "[object WeakMap]";
                            }
                        return e;
                    });
                var Me = G(
                    (function () {
                        return arguments;
                    })()
                )
                    ? G
                    : function (t) {
                        return dt(t) && ie.call(t, "callee") && !de.call(t, "callee");
                    },
                    Le = Array.isArray,
                    Ne = me || gt,
                    Ae = te
                        ? (function (t) {
                            return function (e) {
                                return t(e);
                            };
                        })(te)
                        : X;
                n.exports = lt;
            }.call(e, n(15), n(16)(t)));
        },
        function (t, e, n) {
            "use strict";
            function r(t) {
                return t && t.__esModule ? t : { default: t };
            }
            function o(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function");
            }
            function a(t, e) {
                if (!t)
                    throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called"
                    );
                return !e || ("object" != typeof e && "function" != typeof e) ? t : e;
            }
            function i(t, e) {
                if ("function" != typeof e && null !== e)
                    throw new TypeError(
                        "Super expression must either be null or a function, not " +
                        typeof e
                    );
                (t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                })),
                    e &&
                    (Object.setPrototypeOf
                        ? Object.setPrototypeOf(t, e)
                        : (t.__proto__ = e));
            }
            e.__esModule = !0;
            var s =
                Object.assign ||
                function (t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = arguments[e];
                        for (var r in n)
                            Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
                    }
                    return t;
                },
                u = n(0),
                l = r(u),
                c = n(1),
                f = r(c),
                p = n(3),
                d = r(p),
                h = n(5),
                y = r(h),
                g = n(2),
                m = n(17),
                v = r(m),
                b = (function (t) {
                    function e(n, r) {
                        o(this, e);
                        var i = a(this, t.call(this, n, r));
                        return (
                            w.call(i),
                            (0, g.autoBindHandlers)(i, [
                                "onDragStart",
                                "onDrag",
                                "onDragStop",
                                "onResizeStart",
                                "onResize",
                                "onResizeStop"
                            ]),
                            i
                        );
                    }
                    return (
                        i(e, t),
                        (e.prototype.componentDidMount = function () {
                            this.setState({ mounted: !0 }),
                                this.onLayoutMaybeChanged(this.state.layout, this.props.layout);
                        }),
                        (e.prototype.componentWillReceiveProps = function (t) {
                            var e = void 0;
                            if (
                                ((0, d.default)(t.layout, this.props.layout) &&
                                    t.compactType === this.props.compactType
                                    ? (0, g.childrenEqual)(this.props.children, t.children) ||
                                    (e = this.state.layout)
                                    : (e = t.layout),
                                    e)
                            ) {
                                var n = (0, g.synchronizeLayoutWithChildren)(
                                    e,
                                    t.children,
                                    t.cols,
                                    this.compactType(t)
                                ),
                                    r = this.state.layout;
                                this.setState({ layout: n }), this.onLayoutMaybeChanged(n, r);
                            }
                        }),
                        (e.prototype.containerHeight = function () {
                            if (this.props.autoSize) {
                                var t = (0, g.bottom)(this.state.layout),
                                    e = this.props.containerPadding
                                        ? this.props.containerPadding[1]
                                        : this.props.margin[1];
                                return (
                                    t * this.props.rowHeight +
                                    (t - 1) * this.props.margin[1] +
                                    2 * e +
                                    "px"
                                );
                            }
                        }),
                        (e.prototype.compactType = function (t) {
                            return (
                                t || (t = this.props),
                                !1 === t.verticalCompact ? null : t.compactType
                            );
                        }),
                        (e.prototype.onDragStart = function (t, e, n, r) {
                            var o = r.e,
                                a = r.node,
                                i = this.state.layout,
                                s = (0, g.getLayoutItem)(i, t);
                            if (s)
                                return (
                                    this.setState({
                                        oldDragItem: (0, g.cloneLayoutItem)(s),
                                        oldLayout: this.state.layout
                                    }),
                                    this.props.onDragStart(i, s, s, null, o, a)
                                );
                        }),
                        (e.prototype.onDrag = function (t, e, n, r) {
                            var o = r.e,
                                a = r.node,
                                i = this.state.oldDragItem,
                                s = this.state.layout,
                                u = this.props.cols,
                                l = (0, g.getLayoutItem)(s, t);
                            if (l) {
                                var c = {
                                    w: l.w,
                                    h: l.h,
                                    x: l.x,
                                    y: l.y,
                                    placeholder: !0,
                                    i: t
                                };
                                (s = (0, g.moveElement)(
                                    s,
                                    l,
                                    e,
                                    n,
                                    !0,
                                    this.props.preventCollision,
                                    this.compactType(),
                                    u
                                )),
                                    this.props.onDrag(s, i, l, c, o, a),
                                    this.setState({
                                        layout: (0, g.compact)(s, this.compactType(), u),
                                        activeDrag: c
                                    });
                            }
                        }),
                        (e.prototype.onDragStop = function (t, e, n, r) {
                            var o = r.e,
                                a = r.node,
                                i = this.state.oldDragItem,
                                s = this.state.layout,
                                u = this.props,
                                l = u.cols,
                                c = u.preventCollision,
                                f = (0, g.getLayoutItem)(s, t);
                            if (f) {
                                (s = (0, g.moveElement)(
                                    s,
                                    f,
                                    e,
                                    n,
                                    !0,
                                    c,
                                    this.compactType(),
                                    l
                                )),
                                    this.props.onDragStop(s, i, f, null, o, a);
                                var p = (0, g.compact)(s, this.compactType(), l),
                                    d = this.state.oldLayout;
                                this.setState({
                                    activeDrag: null,
                                    layout: p,
                                    oldDragItem: null,
                                    oldLayout: null
                                }),
                                    this.onLayoutMaybeChanged(p, d);
                            }
                        }),
                        (e.prototype.onLayoutMaybeChanged = function (t, e) {
                            e || (e = this.state.layout),
                                (0, d.default)(e, t) || this.props.onLayoutChange(t);
                        }),
                        (e.prototype.onResizeStart = function (t, e, n, r) {
                            var o = r.e,
                                a = r.node,
                                i = this.state.layout,
                                s = (0, g.getLayoutItem)(i, t);
                            s &&
                                (this.setState({
                                    oldResizeItem: (0, g.cloneLayoutItem)(s),
                                    oldLayout: this.state.layout
                                }),
                                    this.props.onResizeStart(i, s, s, null, o, a));
                        }),
                        (e.prototype.onResize = function (t, e, n, r) {
                            var o = r.e,
                                a = r.node,
                                i = this.state,
                                u = i.layout,
                                l = i.oldResizeItem,
                                c = this.props,
                                f = c.cols,
                                p = c.preventCollision,
                                d = (0, g.getLayoutItem)(u, t);
                            if (d) {
                                var h = void 0;
                                if (p) {
                                    var y = (0, g.getAllCollisions)(
                                        u,
                                        s({}, d, { w: e, h: n })
                                    ).filter(function (t) {
                                        return t.i !== d.i;
                                    });
                                    if ((h = y.length > 0)) {
                                        var m = 1 / 0,
                                            v = 1 / 0;
                                        y.forEach(function (t) {
                                            t.x > d.x && (m = Math.min(m, t.x)),
                                                t.y > d.y && (v = Math.min(v, t.y));
                                        }),
                                            Number.isFinite(m) && (d.w = m - d.x),
                                            Number.isFinite(v) && (d.h = v - d.y);
                                    }
                                }
                                h || ((d.w = e), (d.h = n));
                                var b = { w: d.w, h: d.h, x: d.x, y: d.y, static: !0, i: t };
                                this.props.onResize(u, l, d, b, o, a),
                                    this.setState({
                                        layout: (0, g.compact)(u, this.compactType(), f),
                                        activeDrag: b
                                    });
                            }
                        }),
                        (e.prototype.onResizeStop = function (t, e, n, r) {
                            var o = r.e,
                                a = r.node,
                                i = this.state,
                                s = i.layout,
                                u = i.oldResizeItem,
                                l = this.props.cols,
                                c = (0, g.getLayoutItem)(s, t);
                            this.props.onResizeStop(s, u, c, null, o, a);
                            var f = (0, g.compact)(s, this.compactType(), l),
                                p = this.state.oldLayout;
                            this.setState({
                                activeDrag: null,
                                layout: f,
                                oldResizeItem: null,
                                oldLayout: null
                            }),
                                this.onLayoutMaybeChanged(f, p);
                        }),
                        (e.prototype.placeholder = function () {
                            var t = this.state.activeDrag;
                            if (!t) return null;
                            var e = this.props,
                                n = e.width,
                                r = e.cols,
                                o = e.margin,
                                a = e.containerPadding,
                                i = e.rowHeight,
                                s = e.maxRows,
                                u = e.useCSSTransforms;
                            return l.default.createElement(
                                v.default,
                                {
                                    w: t.w,
                                    h: t.h,
                                    x: t.x,
                                    y: t.y,
                                    i: t.i,
                                    className: "react-grid-placeholder",
                                    containerWidth: n,
                                    cols: r,
                                    margin: o,
                                    containerPadding: a || o,
                                    maxRows: s,
                                    rowHeight: i,
                                    isDraggable: !1,
                                    isResizable: !1,
                                    useCSSTransforms: u
                                },
                                l.default.createElement("div", null)
                            );
                        }),
                        (e.prototype.processGridItem = function (t) {
                            if (t && t.key) {
                                var e = (0, g.getLayoutItem)(this.state.layout, String(t.key));
                                if (!e) return null;
                                var n = this.props,
                                    r = n.width,
                                    o = n.cols,
                                    a = n.margin,
                                    i = n.containerPadding,
                                    s = n.rowHeight,
                                    u = n.maxRows,
                                    c = n.isDraggable,
                                    f = n.isResizable,
                                    p = n.useCSSTransforms,
                                    d = n.draggableCancel,
                                    h = n.draggableHandle,
                                    y = this.state.mounted,
                                    m = Boolean(
                                        !e.static && c && (e.isDraggable || null == e.isDraggable)
                                    ),
                                    b = Boolean(
                                        !e.static && f && (e.isResizable || null == e.isResizable)
                                    );
                                return l.default.createElement(
                                    v.default,
                                    {
                                        containerWidth: r,
                                        cols: o,
                                        margin: a,
                                        containerPadding: i || a,
                                        maxRows: u,
                                        rowHeight: s,
                                        cancel: d,
                                        handle: h,
                                        onDragStop: this.onDragStop,
                                        onDragStart: this.onDragStart,
                                        onDrag: this.onDrag,
                                        onResizeStart: this.onResizeStart,
                                        onResize: this.onResize,
                                        onResizeStop: this.onResizeStop,
                                        isDraggable: m,
                                        isResizable: b,
                                        useCSSTransforms: p && y,
                                        usePercentages: !y,
                                        w: e.w,
                                        h: e.h,
                                        x: e.x,
                                        y: e.y,
                                        i: e.i,
                                        minH: e.minH,
                                        minW: e.minW,
                                        maxH: e.maxH,
                                        maxW: e.maxW,
                                        static: e.static
                                    },
                                    t
                                );
                            }
                        }),
                        (e.prototype.render = function () {
                            var t = this,
                                e = this.props,
                                n = e.className,
                                r = e.style,
                                o = (0, y.default)("react-grid-layout", n),
                                a = s({ height: this.containerHeight() }, r);
                            return l.default.createElement(
                                "div",
                                { className: o, style: a },
                                l.default.Children.map(this.props.children, function (e) {
                                    return t.processGridItem(e);
                                }),
                                this.placeholder()
                            );
                        }),
                        e
                    );
                })(l.default.Component);
            (b.displayName = "ReactGridLayout"),
                (b.propTypes = {
                    className: f.default.string,
                    style: f.default.object,
                    width: f.default.number,
                    autoSize: f.default.bool,
                    cols: f.default.number,
                    draggableCancel: f.default.string,
                    draggableHandle: f.default.string,
                    verticalCompact: function (t) {
                        t.verticalCompact, 1;
                    },
                    compactType: f.default.oneOf(["vertical", "horizontal"]),
                    layout: function (t) {
                        var e = t.layout;
                        void 0 !== e && (0, g.validateLayout)(e, "layout");
                    },
                    margin: f.default.arrayOf(f.default.number),
                    containerPadding: f.default.arrayOf(f.default.number),
                    rowHeight: f.default.number,
                    maxRows: f.default.number,
                    isDraggable: f.default.bool,
                    isResizable: f.default.bool,
                    preventCollision: f.default.bool,
                    useCSSTransforms: f.default.bool,
                    onLayoutChange: f.default.func,
                    onDragStart: f.default.func,
                    onDrag: f.default.func,
                    onDragStop: f.default.func,
                    onResizeStart: f.default.func,
                    onResize: f.default.func,
                    onResizeStop: f.default.func,
                    children: function (t, e) {
                        var n = t[e],
                            r = {};
                        l.default.Children.forEach(n, function (t) {
                            if (r[t.key])
                                throw new Error(
                                    'Duplicate child key "' +
                                    t.key +
                                    '" found! This will cause problems in ReactGridLayout.'
                                );
                            r[t.key] = !0;
                        });
                    }
                }),
                (b.defaultProps = {
                    autoSize: !0,
                    cols: 12,
                    className: "",
                    style: {},
                    draggableHandle: "",
                    draggableCancel: "",
                    containerPadding: null,
                    rowHeight: 150,
                    maxRows: 1 / 0,
                    layout: [],
                    margin: [10, 10],
                    isDraggable: !0,
                    isResizable: !0,
                    useCSSTransforms: !0,
                    verticalCompact: !0,
                    compactType: "vertical",
                    preventCollision: !1,
                    onLayoutChange: g.noop,
                    onDragStart: g.noop,
                    onDrag: g.noop,
                    onDragStop: g.noop,
                    onResizeStart: g.noop,
                    onResize: g.noop,
                    onResizeStop: g.noop
                });
            var w = function () {
                this.state = {
                    activeDrag: null,
                    layout: (0, g.synchronizeLayoutWithChildren)(
                        this.props.layout,
                        this.props.children,
                        this.props.cols,
                        this.compactType()
                    ),
                    mounted: !1,
                    oldDragItem: null,
                    oldLayout: null,
                    oldResizeItem: null
                };
            };
            e.default = b;
        },
        function (t, e, n) {
            var r,
                o; /*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
            !(function () {
                "use strict";
                function n() {
                    for (var t = [], e = 0; e < arguments.length; e++) {
                        var r = arguments[e];
                        if (r) {
                            var o = typeof r;
                            if ("string" === o || "number" === o) t.push(r);
                            else if (Array.isArray(r)) t.push(n.apply(null, r));
                            else if ("object" === o)
                                for (var i in r) a.call(r, i) && r[i] && t.push(i);
                        }
                    }
                    return t.join(" ");
                }
                var a = {}.hasOwnProperty;
                void 0 !== t && t.exports
                    ? (t.exports = n)
                    : ((r = []),
                        void 0 !==
                        (o = function () {
                            return n;
                        }.apply(e, r)) && (t.exports = o));
            })();
        },
        function (t, e, n) {
            !(function (e, r) {
                t.exports = r(n(7), n(0));
            })(0, function (t, e) {
                return (function (t) {
                    function e(r) {
                        if (n[r]) return n[r].exports;
                        var o = (n[r] = { i: r, l: !1, exports: {} });
                        return t[r].call(o.exports, o, o.exports, e), (o.l = !0), o.exports;
                    }
                    var n = {};
                    return (
                        (e.m = t),
                        (e.c = n),
                        (e.d = function (t, n, r) {
                            e.o(t, n) ||
                                Object.defineProperty(t, n, {
                                    configurable: !1,
                                    enumerable: !0,
                                    get: r
                                });
                        }),
                        (e.n = function (t) {
                            var n =
                                t && t.__esModule
                                    ? function () {
                                        return t.default;
                                    }
                                    : function () {
                                        return t;
                                    };
                            return e.d(n, "a", n), n;
                        }),
                        (e.o = function (t, e) {
                            return Object.prototype.hasOwnProperty.call(t, e);
                        }),
                        (e.p = ""),
                        e((e.s = 12))
                    );
                })([
                    function (t, e, n) {
                        "use strict";
                        function r(t, e) {
                            for (var n = 0, r = t.length; n < r; n++)
                                if (e.apply(e, [t[n], n, t])) return t[n];
                        }
                        function o(t) {
                            return (
                                "function" == typeof t ||
                                "[object Function]" === Object.prototype.toString.call(t)
                            );
                        }
                        function a(t) {
                            return "number" == typeof t && !isNaN(t);
                        }
                        function i(t) {
                            return parseInt(t, 10);
                        }
                        function s(t, e, n) {
                            if (t[e])
                                return new Error(
                                    "Invalid prop " +
                                    e +
                                    " passed to " +
                                    n +
                                    " - do not set this, set it on the child."
                                );
                        }
                        Object.defineProperty(e, "__esModule", { value: !0 }),
                            (e.findInArray = r),
                            (e.isFunction = o),
                            (e.isNum = a),
                            (e.int = i),
                            (e.dontSetMe = s);
                    },
                    function (t, e, n) {
                        "use strict";
                        function r(t) {
                            return function () {
                                return t;
                            };
                        }
                        var o = function () { };
                        (o.thatReturns = r),
                            (o.thatReturnsFalse = r(!1)),
                            (o.thatReturnsTrue = r(!0)),
                            (o.thatReturnsNull = r(null)),
                            (o.thatReturnsThis = function () {
                                return this;
                            }),
                            (o.thatReturnsArgument = function (t) {
                                return t;
                            }),
                            (t.exports = o);
                    },
                    function (t, e, n) {
                        "use strict";
                        function r(t, e, n, r, a, i, s, u) {
                            if ((o(e), !t)) {
                                var l;
                                if (void 0 === e)
                                    l = new Error(
                                        "Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings."
                                    );
                                else {
                                    var c = [n, r, a, i, s, u],
                                        f = 0;
                                    (l = new Error(
                                        e.replace(/%s/g, function () {
                                            return c[f++];
                                        })
                                    )),
                                        (l.name = "Invariant Violation");
                                }
                                throw ((l.framesToPop = 1), l);
                            }
                        }
                        var o = function (t) { };
                        "production" !== Object({ DRAGGABLE_DEBUG: void 0 }).NODE_ENV &&
                            (o = function (t) {
                                if (void 0 === t)
                                    throw new Error(
                                        "invariant requires an error message argument"
                                    );
                            }),
                            (t.exports = r);
                    },
                    function (t, e, n) {
                        "use strict";
                        t.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
                    },
                    function (e, n) {
                        e.exports = t;
                    },
                    function (t, e, n) {
                        "use strict";
                        function r(t, e, n) {
                            return (
                                e in t
                                    ? Object.defineProperty(t, e, {
                                        value: n,
                                        enumerable: !0,
                                        configurable: !0,
                                        writable: !0
                                    })
                                    : (t[e] = n),
                                t
                            );
                        }
                        function o(t, e) {
                            return (
                                D ||
                                (D = (0, _.findInArray)(
                                    [
                                        "matches",
                                        "webkitMatchesSelector",
                                        "mozMatchesSelector",
                                        "msMatchesSelector",
                                        "oMatchesSelector"
                                    ],
                                    function (e) {
                                        return (0, _.isFunction)(t[e]);
                                    }
                                )),
                                !!(0, _.isFunction)(t[D]) && t[D](e)
                            );
                        }
                        function a(t, e, n) {
                            var r = t;
                            do {
                                if (o(r, e)) return !0;
                                if (r === n) return !1;
                                r = r.parentNode;
                            } while (r);
                            return !1;
                        }
                        function i(t, e, n) {
                            t &&
                                (t.attachEvent
                                    ? t.attachEvent("on" + e, n)
                                    : t.addEventListener
                                        ? t.addEventListener(e, n, !0)
                                        : (t["on" + e] = n));
                        }
                        function s(t, e, n) {
                            t &&
                                (t.detachEvent
                                    ? t.detachEvent("on" + e, n)
                                    : t.removeEventListener
                                        ? t.removeEventListener(e, n, !0)
                                        : (t["on" + e] = null));
                        }
                        function u(t) {
                            var e = t.clientHeight,
                                n = t.ownerDocument.defaultView.getComputedStyle(t);
                            return (
                                (e += (0, _.int)(n.borderTopWidth)),
                                (e += (0, _.int)(n.borderBottomWidth))
                            );
                        }
                        function l(t) {
                            var e = t.clientWidth,
                                n = t.ownerDocument.defaultView.getComputedStyle(t);
                            return (
                                (e += (0, _.int)(n.borderLeftWidth)),
                                (e += (0, _.int)(n.borderRightWidth))
                            );
                        }
                        function c(t) {
                            var e = t.clientHeight,
                                n = t.ownerDocument.defaultView.getComputedStyle(t);
                            return (
                                (e -= (0, _.int)(n.paddingTop)),
                                (e -= (0, _.int)(n.paddingBottom))
                            );
                        }
                        function f(t) {
                            var e = t.clientWidth,
                                n = t.ownerDocument.defaultView.getComputedStyle(t);
                            return (
                                (e -= (0, _.int)(n.paddingLeft)),
                                (e -= (0, _.int)(n.paddingRight))
                            );
                        }
                        function p(t, e) {
                            var n = e === e.ownerDocument.body,
                                r = n ? { left: 0, top: 0 } : e.getBoundingClientRect();
                            return {
                                x: t.clientX + e.scrollLeft - r.left,
                                y: t.clientY + e.scrollTop - r.top
                            };
                        }
                        function d(t) {
                            var e = t.x,
                                n = t.y;
                            return r(
                                {},
                                (0, O.browserPrefixToKey)("transform", R.default),
                                "translate(" + e + "px," + n + "px)"
                            );
                        }
                        function h(t) {
                            return "translate(" + t.x + "," + t.y + ")";
                        }
                        function y(t, e) {
                            return (
                                (t.targetTouches &&
                                    (0, _.findInArray)(t.targetTouches, function (t) {
                                        return e === t.identifier;
                                    })) ||
                                (t.changedTouches &&
                                    (0, _.findInArray)(t.changedTouches, function (t) {
                                        return e === t.identifier;
                                    }))
                            );
                        }
                        function g(t) {
                            return t.targetTouches && t.targetTouches[0]
                                ? t.targetTouches[0].identifier
                                : t.changedTouches && t.changedTouches[0]
                                    ? t.changedTouches[0].identifier
                                    : void 0;
                        }
                        function m(t) {
                            if (t) {
                                var e = t.getElementById("react-draggable-style-el");
                                e ||
                                    ((e = t.createElement("style")),
                                        (e.type = "text/css"),
                                        (e.id = "react-draggable-style-el"),
                                        (e.innerHTML =
                                            ".react-draggable-transparent-selection *::-moz-selection {background: transparent;}\n"),
                                        (e.innerHTML +=
                                            ".react-draggable-transparent-selection *::selection {background: transparent;}\n"),
                                        t.getElementsByTagName("head")[0].appendChild(e)),
                                    t.body && w(t.body, "react-draggable-transparent-selection");
                            }
                        }
                        function v(t) {
                            try {
                                t &&
                                    t.body &&
                                    x(t.body, "react-draggable-transparent-selection"),
                                    window.getSelection().removeAllRanges();
                            } catch (t) { }
                        }
                        function b() {
                            var t =
                                arguments.length > 0 && void 0 !== arguments[0]
                                    ? arguments[0]
                                    : {};
                            return S({ touchAction: "none" }, t);
                        }
                        function w(t, e) {
                            t.classList
                                ? t.classList.add(e)
                                : t.className.match(new RegExp("(?:^|\\s)" + e + "(?!\\S)")) ||
                                (t.className += " " + e);
                        }
                        function x(t, e) {
                            t.classList
                                ? t.classList.remove(e)
                                : (t.className = t.className.replace(
                                    new RegExp("(?:^|\\s)" + e + "(?!\\S)", "g"),
                                    ""
                                ));
                        }
                        Object.defineProperty(e, "__esModule", { value: !0 });
                        var S =
                            Object.assign ||
                            function (t) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var n = arguments[e];
                                    for (var r in n)
                                        Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
                                }
                                return t;
                            };
                        (e.matchesSelector = o),
                            (e.matchesSelectorAndParentsTo = a),
                            (e.addEvent = i),
                            (e.removeEvent = s),
                            (e.outerHeight = u),
                            (e.outerWidth = l),
                            (e.innerHeight = c),
                            (e.innerWidth = f),
                            (e.offsetXYFromParent = p),
                            (e.createCSSTransform = d),
                            (e.createSVGTransform = h),
                            (e.getTouch = y),
                            (e.getTouchIdentifier = g),
                            (e.addUserSelectStyles = m),
                            (e.removeUserSelectStyles = v),
                            (e.styleHacks = b),
                            (e.addClassName = w),
                            (e.removeClassName = x);
                        var _ = n(0),
                            O = n(19),
                            R = (function (t) {
                                return t && t.__esModule ? t : { default: t };
                            })(O),
                            D = "";
                    },
                    function (t, n) {
                        t.exports = e;
                    },
                    function (t, e, n) {
                        if ("production" !== Object({ DRAGGABLE_DEBUG: void 0 }).NODE_ENV) {
                            var r =
                                ("function" == typeof Symbol &&
                                    Symbol.for &&
                                    Symbol.for("react.element")) ||
                                60103,
                                o = function (t) {
                                    return "object" == typeof t && null !== t && t.$$typeof === r;
                                };
                            t.exports = n(14)(o, !0);
                        } else t.exports = n(17)();
                    },
                    function (t, e, n) {
                        "use strict";
                        var r = n(1),
                            o = r;
                        if ("production" !== Object({ DRAGGABLE_DEBUG: void 0 }).NODE_ENV) {
                            var a = function (t) {
                                for (
                                    var e = arguments.length, n = Array(e > 1 ? e - 1 : 0), r = 1;
                                    r < e;
                                    r++
                                )
                                    n[r - 1] = arguments[r];
                                var o = 0,
                                    a =
                                        "Warning: " +
                                        t.replace(/%s/g, function () {
                                            return n[o++];
                                        });
                                "undefined" != typeof console && console.error(a);
                                try {
                                    throw new Error(a);
                                } catch (t) { }
                            };
                            o = function (t, e) {
                                if (void 0 === e)
                                    throw new Error(
                                        "`warning(condition, format, ...args)` requires a warning message argument"
                                    );
                                if (0 !== e.indexOf("Failed Composite propType: ") && !t) {
                                    for (
                                        var n = arguments.length,
                                        r = Array(n > 2 ? n - 2 : 0),
                                        o = 2;
                                        o < n;
                                        o++
                                    )
                                        r[o - 2] = arguments[o];
                                    a.apply(void 0, [e].concat(r));
                                }
                            };
                        }
                        t.exports = o;
                    },
                    function (t, e, n) {
                        "use strict";
                        function r(t, e, n) {
                            if (!t.props.bounds) return [e, n];
                            var r = t.props.bounds;
                            r = "string" == typeof r ? r : c(r);
                            var o = f(t);
                            if ("string" == typeof r) {
                                var a = o.ownerDocument,
                                    i = a.defaultView,
                                    s = void 0;
                                if (
                                    !(
                                        (s =
                                            "parent" === r
                                                ? o.parentNode
                                                : a.querySelector(r)) instanceof HTMLElement
                                    )
                                )
                                    throw new Error(
                                        'Bounds selector "' + r + '" could not find an element.'
                                    );
                                var u = i.getComputedStyle(o),
                                    l = i.getComputedStyle(s);
                                r = {
                                    left:
                                        -o.offsetLeft +
                                        (0, p.int)(l.paddingLeft) +
                                        (0, p.int)(u.marginLeft),
                                    top:
                                        -o.offsetTop +
                                        (0, p.int)(l.paddingTop) +
                                        (0, p.int)(u.marginTop),
                                    right:
                                        (0, y.innerWidth)(s) -
                                        (0, y.outerWidth)(o) -
                                        o.offsetLeft +
                                        (0, p.int)(l.paddingRight) -
                                        (0, p.int)(u.marginRight),
                                    bottom:
                                        (0, y.innerHeight)(s) -
                                        (0, y.outerHeight)(o) -
                                        o.offsetTop +
                                        (0, p.int)(l.paddingBottom) -
                                        (0, p.int)(u.marginBottom)
                                };
                            }
                            return (
                                (0, p.isNum)(r.right) && (e = Math.min(e, r.right)),
                                (0, p.isNum)(r.bottom) && (n = Math.min(n, r.bottom)),
                                (0, p.isNum)(r.left) && (e = Math.max(e, r.left)),
                                (0, p.isNum)(r.top) && (n = Math.max(n, r.top)),
                                [e, n]
                            );
                        }
                        function o(t, e, n) {
                            return [Math.round(e / t[0]) * t[0], Math.round(n / t[1]) * t[1]];
                        }
                        function a(t) {
                            return "both" === t.props.axis || "x" === t.props.axis;
                        }
                        function i(t) {
                            return "both" === t.props.axis || "y" === t.props.axis;
                        }
                        function s(t, e, n) {
                            var r = "number" == typeof e ? (0, y.getTouch)(t, e) : null;
                            if ("number" == typeof e && !r) return null;
                            var o = f(n),
                                a =
                                    n.props.offsetParent ||
                                    o.offsetParent ||
                                    o.ownerDocument.body;
                            return (0, y.offsetXYFromParent)(r || t, a);
                        }
                        function u(t, e, n) {
                            var r = t.state,
                                o = !(0, p.isNum)(r.lastX),
                                a = f(t);
                            return o
                                ? {
                                    node: a,
                                    deltaX: 0,
                                    deltaY: 0,
                                    lastX: e,
                                    lastY: n,
                                    x: e,
                                    y: n
                                }
                                : {
                                    node: a,
                                    deltaX: e - r.lastX,
                                    deltaY: n - r.lastY,
                                    lastX: r.lastX,
                                    lastY: r.lastY,
                                    x: e,
                                    y: n
                                };
                        }
                        function l(t, e) {
                            return {
                                node: e.node,
                                x: t.state.x + e.deltaX,
                                y: t.state.y + e.deltaY,
                                deltaX: e.deltaX,
                                deltaY: e.deltaY,
                                lastX: t.state.x,
                                lastY: t.state.y
                            };
                        }
                        function c(t) {
                            return {
                                left: t.left,
                                top: t.top,
                                right: t.right,
                                bottom: t.bottom
                            };
                        }
                        function f(t) {
                            var e = h.default.findDOMNode(t);
                            if (!e)
                                throw new Error("<DraggableCore>: Unmounted during event!");
                            return e;
                        }
                        Object.defineProperty(e, "__esModule", { value: !0 }),
                            (e.getBoundPosition = r),
                            (e.snapToGrid = o),
                            (e.canDragX = a),
                            (e.canDragY = i),
                            (e.getControlPosition = s),
                            (e.createCoreData = u),
                            (e.createDraggableData = l);
                        var p = n(0),
                            d = n(4),
                            h = (function (t) {
                                return t && t.__esModule ? t : { default: t };
                            })(d),
                            y = n(5);
                    },
                    function (t, e, n) {
                        "use strict";
                        (function (t) {
                            function r(t) {
                                return t && t.__esModule ? t : { default: t };
                            }
                            function o(t, e) {
                                if (!(t instanceof e))
                                    throw new TypeError("Cannot call a class as a function");
                            }
                            function a(t, e) {
                                if (!t)
                                    throw new ReferenceError(
                                        "this hasn't been initialised - super() hasn't been called"
                                    );
                                return !e || ("object" != typeof e && "function" != typeof e)
                                    ? t
                                    : e;
                            }
                            function i(t, e) {
                                if ("function" != typeof e && null !== e)
                                    throw new TypeError(
                                        "Super expression must either be null or a function, not " +
                                        typeof e
                                    );
                                (t.prototype = Object.create(e && e.prototype, {
                                    constructor: {
                                        value: t,
                                        enumerable: !1,
                                        writable: !0,
                                        configurable: !0
                                    }
                                })),
                                    e &&
                                    (Object.setPrototypeOf
                                        ? Object.setPrototypeOf(t, e)
                                        : (t.__proto__ = e));
                            }
                            Object.defineProperty(e, "__esModule", { value: !0 });
                            var s = (function () {
                                function t(t, e) {
                                    var n = [],
                                        r = !0,
                                        o = !1,
                                        a = void 0;
                                    try {
                                        for (
                                            var i, s = t[Symbol.iterator]();
                                            !(r = (i = s.next()).done) &&
                                            (n.push(i.value), !e || n.length !== e);
                                            r = !0
                                        );
                                    } catch (t) {
                                        (o = !0), (a = t);
                                    } finally {
                                        try {
                                            !r && s.return && s.return();
                                        } finally {
                                            if (o) throw a;
                                        }
                                    }
                                    return n;
                                }
                                return function (e, n) {
                                    if (Array.isArray(e)) return e;
                                    if (Symbol.iterator in Object(e)) return t(e, n);
                                    throw new TypeError(
                                        "Invalid attempt to destructure non-iterable instance"
                                    );
                                };
                            })(),
                                u = (function () {
                                    function t(t, e) {
                                        for (var n = 0; n < e.length; n++) {
                                            var r = e[n];
                                            (r.enumerable = r.enumerable || !1),
                                                (r.configurable = !0),
                                                "value" in r && (r.writable = !0),
                                                Object.defineProperty(t, r.key, r);
                                        }
                                    }
                                    return function (e, n, r) {
                                        return n && t(e.prototype, n), r && t(e, r), e;
                                    };
                                })(),
                                l = n(6),
                                c = r(l),
                                f = n(7),
                                p = r(f),
                                d = n(4),
                                h = r(d),
                                y = n(5),
                                g = n(9),
                                m = n(0),
                                v = n(11),
                                b = r(v),
                                w = {
                                    touch: {
                                        start: "touchstart",
                                        move: "touchmove",
                                        stop: "touchend"
                                    },
                                    mouse: {
                                        start: "mousedown",
                                        move: "mousemove",
                                        stop: "mouseup"
                                    }
                                },
                                x = w.mouse,
                                S = (function (t) {
                                    function e() {
                                        var t, n, r, i;
                                        o(this, e);
                                        for (
                                            var u = arguments.length, l = Array(u), c = 0;
                                            c < u;
                                            c++
                                        )
                                            l[c] = arguments[c];
                                        return (
                                            (n = r = a(
                                                this,
                                                (t =
                                                    e.__proto__ || Object.getPrototypeOf(e)).call.apply(
                                                        t,
                                                        [this].concat(l)
                                                    )
                                            )),
                                            (r.state = {
                                                dragging: !1,
                                                lastX: NaN,
                                                lastY: NaN,
                                                touchIdentifier: null
                                            }),
                                            (r.handleDragStart = function (t) {
                                                if (
                                                    (r.props.onMouseDown(t),
                                                        !r.props.allowAnyClick &&
                                                        "number" == typeof t.button &&
                                                        0 !== t.button)
                                                )
                                                    return !1;
                                                var e = h.default.findDOMNode(r);
                                                if (!e || !e.ownerDocument || !e.ownerDocument.body)
                                                    throw new Error(
                                                        "<DraggableCore> not mounted on DragStart!"
                                                    );
                                                var n = e.ownerDocument;
                                                if (
                                                    !(
                                                        r.props.disabled ||
                                                        !(t.target instanceof n.defaultView.Node) ||
                                                        (r.props.handle &&
                                                            !(0, y.matchesSelectorAndParentsTo)(
                                                                t.target,
                                                                r.props.handle,
                                                                e
                                                            )) ||
                                                        (r.props.cancel &&
                                                            (0, y.matchesSelectorAndParentsTo)(
                                                                t.target,
                                                                r.props.cancel,
                                                                e
                                                            ))
                                                    )
                                                ) {
                                                    var o = (0, y.getTouchIdentifier)(t);
                                                    r.setState({ touchIdentifier: o });
                                                    var a = (0, g.getControlPosition)(t, o, r);
                                                    if (null != a) {
                                                        var i = a.x,
                                                            s = a.y,
                                                            u = (0, g.createCoreData)(r, i, s);
                                                        (0, b.default)(
                                                            "DraggableCore: handleDragStart: %j",
                                                            u
                                                        ),
                                                            (0, b.default)("calling", r.props.onStart);
                                                        !1 !== r.props.onStart(t, u) &&
                                                            (r.props.enableUserSelectHack &&
                                                                (0, y.addUserSelectStyles)(n),
                                                                r.setState({ dragging: !0, lastX: i, lastY: s }),
                                                                (0, y.addEvent)(n, x.move, r.handleDrag),
                                                                (0, y.addEvent)(n, x.stop, r.handleDragStop));
                                                    }
                                                }
                                            }),
                                            (r.handleDrag = function (t) {
                                                "touchmove" === t.type && t.preventDefault();
                                                var e = (0, g.getControlPosition)(
                                                    t,
                                                    r.state.touchIdentifier,
                                                    r
                                                );
                                                if (null != e) {
                                                    var n = e.x,
                                                        o = e.y;
                                                    if (Array.isArray(r.props.grid)) {
                                                        var a = n - r.state.lastX,
                                                            i = o - r.state.lastY,
                                                            u = (0, g.snapToGrid)(r.props.grid, a, i),
                                                            l = s(u, 2);
                                                        if (((a = l[0]), (i = l[1]), !a && !i)) return;
                                                        (n = r.state.lastX + a), (o = r.state.lastY + i);
                                                    }
                                                    var c = (0, g.createCoreData)(r, n, o);
                                                    (0, b.default)("DraggableCore: handleDrag: %j", c);
                                                    if (!1 !== r.props.onDrag(t, c))
                                                        r.setState({ lastX: n, lastY: o });
                                                    else
                                                        try {
                                                            r.handleDragStop(new MouseEvent("mouseup"));
                                                        } catch (t) {
                                                            var f = document.createEvent("MouseEvents");
                                                            f.initMouseEvent(
                                                                "mouseup",
                                                                !0,
                                                                !0,
                                                                window,
                                                                0,
                                                                0,
                                                                0,
                                                                0,
                                                                0,
                                                                !1,
                                                                !1,
                                                                !1,
                                                                !1,
                                                                0,
                                                                null
                                                            ),
                                                                r.handleDragStop(f);
                                                        }
                                                }
                                            }),
                                            (r.handleDragStop = function (t) {
                                                if (r.state.dragging) {
                                                    var e = (0, g.getControlPosition)(
                                                        t,
                                                        r.state.touchIdentifier,
                                                        r
                                                    );
                                                    if (null != e) {
                                                        var n = e.x,
                                                            o = e.y,
                                                            a = (0, g.createCoreData)(r, n, o),
                                                            i = h.default.findDOMNode(r);
                                                        i &&
                                                            r.props.enableUserSelectHack &&
                                                            (0, y.removeUserSelectStyles)(i.ownerDocument),
                                                            (0, b.default)(
                                                                "DraggableCore: handleDragStop: %j",
                                                                a
                                                            ),
                                                            r.setState({
                                                                dragging: !1,
                                                                lastX: NaN,
                                                                lastY: NaN
                                                            }),
                                                            r.props.onStop(t, a),
                                                            i &&
                                                            ((0, b.default)(
                                                                "DraggableCore: Removing handlers"
                                                            ),
                                                                (0, y.removeEvent)(
                                                                    i.ownerDocument,
                                                                    x.move,
                                                                    r.handleDrag
                                                                ),
                                                                (0, y.removeEvent)(
                                                                    i.ownerDocument,
                                                                    x.stop,
                                                                    r.handleDragStop
                                                                ));
                                                    }
                                                }
                                            }),
                                            (r.onMouseDown = function (t) {
                                                return (x = w.mouse), r.handleDragStart(t);
                                            }),
                                            (r.onMouseUp = function (t) {
                                                return (x = w.mouse), r.handleDragStop(t);
                                            }),
                                            (r.onTouchStart = function (t) {
                                                return (x = w.touch), r.handleDragStart(t);
                                            }),
                                            (r.onTouchEnd = function (t) {
                                                return (x = w.touch), r.handleDragStop(t);
                                            }),
                                            (i = n),
                                            a(r, i)
                                        );
                                    }
                                    return (
                                        i(e, t),
                                        u(e, [
                                            {
                                                key: "componentWillUnmount",
                                                value: function () {
                                                    var t = h.default.findDOMNode(this);
                                                    if (t) {
                                                        var e = t.ownerDocument;
                                                        (0, y.removeEvent)(
                                                            e,
                                                            w.mouse.move,
                                                            this.handleDrag
                                                        ),
                                                            (0, y.removeEvent)(
                                                                e,
                                                                w.touch.move,
                                                                this.handleDrag
                                                            ),
                                                            (0, y.removeEvent)(
                                                                e,
                                                                w.mouse.stop,
                                                                this.handleDragStop
                                                            ),
                                                            (0, y.removeEvent)(
                                                                e,
                                                                w.touch.stop,
                                                                this.handleDragStop
                                                            ),
                                                            this.props.enableUserSelectHack &&
                                                            (0, y.removeUserSelectStyles)(e);
                                                    }
                                                }
                                            },
                                            {
                                                key: "render",
                                                value: function () {
                                                    return c.default.cloneElement(
                                                        c.default.Children.only(this.props.children),
                                                        {
                                                            style: (0, y.styleHacks)(
                                                                this.props.children.props.style
                                                            ),
                                                            onMouseDown: this.onMouseDown,
                                                            onTouchStart: this.onTouchStart,
                                                            onMouseUp: this.onMouseUp,
                                                            onTouchEnd: this.onTouchEnd
                                                        }
                                                    );
                                                }
                                            }
                                        ]),
                                        e
                                    );
                                })(c.default.Component);
                            (S.displayName = "DraggableCore"),
                                (S.propTypes = {
                                    allowAnyClick: p.default.bool,
                                    disabled: p.default.bool,
                                    enableUserSelectHack: p.default.bool,
                                    offsetParent: function (e, n) {
                                        if (!0 === t.browser && e[n] && 1 !== e[n].nodeType)
                                            throw new Error(
                                                "Draggable's offsetParent must be a DOM Node."
                                            );
                                    },
                                    grid: p.default.arrayOf(p.default.number),
                                    handle: p.default.string,
                                    cancel: p.default.string,
                                    onStart: p.default.func,
                                    onDrag: p.default.func,
                                    onStop: p.default.func,
                                    onMouseDown: p.default.func,
                                    className: m.dontSetMe,
                                    style: m.dontSetMe,
                                    transform: m.dontSetMe
                                }),
                                (S.defaultProps = {
                                    allowAnyClick: !1,
                                    cancel: null,
                                    disabled: !1,
                                    enableUserSelectHack: !0,
                                    offsetParent: null,
                                    handle: null,
                                    grid: null,
                                    transform: null,
                                    onStart: function () { },
                                    onDrag: function () { },
                                    onStop: function () { },
                                    onMouseDown: function () { }
                                }),
                                (e.default = S);
                        }.call(e, n(20)));
                    },
                    function (t, e, n) {
                        "use strict";
                        function r() { }
                        Object.defineProperty(e, "__esModule", { value: !0 }),
                            (e.default = r);
                    },
                    function (t, e, n) {
                        "use strict";
                        var r = n(13).default;
                        (t.exports = r),
                            (t.exports.default = r),
                            (t.exports.DraggableCore = n(10).default);
                    },
                    function (t, e, n) {
                        "use strict";
                        function r(t) {
                            return t && t.__esModule ? t : { default: t };
                        }
                        function o(t, e, n) {
                            return (
                                e in t
                                    ? Object.defineProperty(t, e, {
                                        value: n,
                                        enumerable: !0,
                                        configurable: !0,
                                        writable: !0
                                    })
                                    : (t[e] = n),
                                t
                            );
                        }
                        function a(t, e) {
                            if (!(t instanceof e))
                                throw new TypeError("Cannot call a class as a function");
                        }
                        function i(t, e) {
                            if (!t)
                                throw new ReferenceError(
                                    "this hasn't been initialised - super() hasn't been called"
                                );
                            return !e || ("object" != typeof e && "function" != typeof e)
                                ? t
                                : e;
                        }
                        function s(t, e) {
                            if ("function" != typeof e && null !== e)
                                throw new TypeError(
                                    "Super expression must either be null or a function, not " +
                                    typeof e
                                );
                            (t.prototype = Object.create(e && e.prototype, {
                                constructor: {
                                    value: t,
                                    enumerable: !1,
                                    writable: !0,
                                    configurable: !0
                                }
                            })),
                                e &&
                                (Object.setPrototypeOf
                                    ? Object.setPrototypeOf(t, e)
                                    : (t.__proto__ = e));
                        }
                        Object.defineProperty(e, "__esModule", { value: !0 });
                        var u =
                            Object.assign ||
                            function (t) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var n = arguments[e];
                                    for (var r in n)
                                        Object.prototype.hasOwnProperty.call(n, r) &&
                                            (t[r] = n[r]);
                                }
                                return t;
                            },
                            l = (function () {
                                function t(t, e) {
                                    var n = [],
                                        r = !0,
                                        o = !1,
                                        a = void 0;
                                    try {
                                        for (
                                            var i, s = t[Symbol.iterator]();
                                            !(r = (i = s.next()).done) &&
                                            (n.push(i.value), !e || n.length !== e);
                                            r = !0
                                        );
                                    } catch (t) {
                                        (o = !0), (a = t);
                                    } finally {
                                        try {
                                            !r && s.return && s.return();
                                        } finally {
                                            if (o) throw a;
                                        }
                                    }
                                    return n;
                                }
                                return function (e, n) {
                                    if (Array.isArray(e)) return e;
                                    if (Symbol.iterator in Object(e)) return t(e, n);
                                    throw new TypeError(
                                        "Invalid attempt to destructure non-iterable instance"
                                    );
                                };
                            })(),
                            c = (function () {
                                function t(t, e) {
                                    for (var n = 0; n < e.length; n++) {
                                        var r = e[n];
                                        (r.enumerable = r.enumerable || !1),
                                            (r.configurable = !0),
                                            "value" in r && (r.writable = !0),
                                            Object.defineProperty(t, r.key, r);
                                    }
                                }
                                return function (e, n, r) {
                                    return n && t(e.prototype, n), r && t(e, r), e;
                                };
                            })(),
                            f = n(6),
                            p = r(f),
                            d = n(7),
                            h = r(d),
                            y = n(4),
                            g = r(y),
                            m = n(18),
                            v = r(m),
                            b = n(5),
                            w = n(9),
                            x = n(0),
                            S = n(10),
                            _ = r(S),
                            O = n(11),
                            R = r(O),
                            D = (function (t) {
                                function e(t) {
                                    a(this, e);
                                    var n = i(
                                        this,
                                        (e.__proto__ || Object.getPrototypeOf(e)).call(this, t)
                                    );
                                    return (
                                        (n.onDragStart = function (t, e) {
                                            if (
                                                ((0, R.default)("Draggable: onDragStart: %j", e),
                                                    !1 ===
                                                    n.props.onStart(t, (0, w.createDraggableData)(n, e)))
                                            )
                                                return !1;
                                            n.setState({ dragging: !0, dragged: !0 });
                                        }),
                                        (n.onDrag = function (t, e) {
                                            if (!n.state.dragging) return !1;
                                            (0, R.default)("Draggable: onDrag: %j", e);
                                            var r = (0, w.createDraggableData)(n, e),
                                                o = { x: r.x, y: r.y };
                                            if (n.props.bounds) {
                                                var a = o.x,
                                                    i = o.y;
                                                (o.x += n.state.slackX), (o.y += n.state.slackY);
                                                var s = (0, w.getBoundPosition)(n, o.x, o.y),
                                                    u = l(s, 2),
                                                    c = u[0],
                                                    f = u[1];
                                                (o.x = c),
                                                    (o.y = f),
                                                    (o.slackX = n.state.slackX + (a - o.x)),
                                                    (o.slackY = n.state.slackY + (i - o.y)),
                                                    (r.x = o.x),
                                                    (r.y = o.y),
                                                    (r.deltaX = o.x - n.state.x),
                                                    (r.deltaY = o.y - n.state.y);
                                            }
                                            if (!1 === n.props.onDrag(t, r)) return !1;
                                            n.setState(o);
                                        }),
                                        (n.onDragStop = function (t, e) {
                                            if (!n.state.dragging) return !1;
                                            if (
                                                !1 ===
                                                n.props.onStop(t, (0, w.createDraggableData)(n, e))
                                            )
                                                return !1;
                                            (0, R.default)("Draggable: onDragStop: %j", e);
                                            var r = { dragging: !1, slackX: 0, slackY: 0 };
                                            if (Boolean(n.props.position)) {
                                                var o = n.props.position,
                                                    a = o.x,
                                                    i = o.y;
                                                (r.x = a), (r.y = i);
                                            }
                                            n.setState(r);
                                        }),
                                        (n.state = {
                                            dragging: !1,
                                            dragged: !1,
                                            x: t.position ? t.position.x : t.defaultPosition.x,
                                            y: t.position ? t.position.y : t.defaultPosition.y,
                                            slackX: 0,
                                            slackY: 0,
                                            isElementSVG: !1
                                        }),
                                        n
                                    );
                                }
                                return (
                                    s(e, t),
                                    c(e, [
                                        {
                                            key: "componentWillMount",
                                            value: function () {
                                                !this.props.position ||
                                                    this.props.onDrag ||
                                                    this.props.onStop ||
                                                    console.warn(
                                                        "A `position` was applied to this <Draggable>, without drag handlers. This will make this component effectively undraggable. Please attach `onDrag` or `onStop` handlers so you can adjust the `position` of this element."
                                                    );
                                            }
                                        },
                                        {
                                            key: "componentDidMount",
                                            value: function () {
                                                void 0 !== window.SVGElement &&
                                                    g.default.findDOMNode(this) instanceof
                                                    window.SVGElement &&
                                                    this.setState({ isElementSVG: !0 });
                                            }
                                        },
                                        {
                                            key: "componentWillReceiveProps",
                                            value: function (t) {
                                                !t.position ||
                                                    (this.props.position &&
                                                        t.position.x === this.props.position.x &&
                                                        t.position.y === this.props.position.y) ||
                                                    this.setState({ x: t.position.x, y: t.position.y });
                                            }
                                        },
                                        {
                                            key: "componentWillUnmount",
                                            value: function () {
                                                this.setState({ dragging: !1 });
                                            }
                                        },
                                        {
                                            key: "render",
                                            value: function () {
                                                var t,
                                                    e = {},
                                                    n = null,
                                                    r = Boolean(this.props.position),
                                                    a = !r || this.state.dragging,
                                                    i = this.props.position || this.props.defaultPosition,
                                                    s = {
                                                        x: (0, w.canDragX)(this) && a ? this.state.x : i.x,
                                                        y: (0, w.canDragY)(this) && a ? this.state.y : i.y
                                                    };
                                                this.state.isElementSVG
                                                    ? (n = (0, b.createSVGTransform)(s))
                                                    : (e = (0, b.createCSSTransform)(s));
                                                var l = this.props,
                                                    c = l.defaultClassName,
                                                    f = l.defaultClassNameDragging,
                                                    d = l.defaultClassNameDragged,
                                                    h = p.default.Children.only(this.props.children),
                                                    y = (0, v.default)(
                                                        h.props.className || "",
                                                        c,
                                                        ((t = {}),
                                                            o(t, f, this.state.dragging),
                                                            o(t, d, this.state.dragged),
                                                            t)
                                                    );
                                                return p.default.createElement(
                                                    _.default,
                                                    u({}, this.props, {
                                                        onStart: this.onDragStart,
                                                        onDrag: this.onDrag,
                                                        onStop: this.onDragStop
                                                    }),
                                                    p.default.cloneElement(h, {
                                                        className: y,
                                                        style: u({}, h.props.style, e),
                                                        transform: n
                                                    })
                                                );
                                            }
                                        }
                                    ]),
                                    e
                                );
                            })(p.default.Component);
                        (D.displayName = "Draggable"),
                            (D.propTypes = u({}, _.default.propTypes, {
                                axis: h.default.oneOf(["both", "x", "y", "none"]),
                                bounds: h.default.oneOfType([
                                    h.default.shape({
                                        left: h.default.number,
                                        right: h.default.number,
                                        top: h.default.number,
                                        bottom: h.default.number
                                    }),
                                    h.default.string,
                                    h.default.oneOf([!1])
                                ]),
                                defaultClassName: h.default.string,
                                defaultClassNameDragging: h.default.string,
                                defaultClassNameDragged: h.default.string,
                                defaultPosition: h.default.shape({
                                    x: h.default.number,
                                    y: h.default.number
                                }),
                                position: h.default.shape({
                                    x: h.default.number,
                                    y: h.default.number
                                }),
                                className: x.dontSetMe,
                                style: x.dontSetMe,
                                transform: x.dontSetMe
                            })),
                            (D.defaultProps = u({}, _.default.defaultProps, {
                                axis: "both",
                                bounds: !1,
                                defaultClassName: "react-draggable",
                                defaultClassNameDragging: "react-draggable-dragging",
                                defaultClassNameDragged: "react-draggable-dragged",
                                defaultPosition: { x: 0, y: 0 },
                                position: null
                            })),
                            (e.default = D);
                    },
                    function (t, e, n) {
                        "use strict";
                        var r = n(1),
                            o = n(2),
                            a = n(8),
                            i = n(15),
                            s = n(3),
                            u = n(16);
                        t.exports = function (t, e) {
                            function n(t) {
                                var e = t && ((D && t[D]) || t[j]);
                                if ("function" == typeof e) return e;
                            }
                            function l(t, e) {
                                return t === e ? 0 !== t || 1 / t == 1 / e : t !== t && e !== e;
                            }
                            function c(t) {
                                (this.message = t), (this.stack = "");
                            }
                            function f(t) {
                                function n(n, u, l, f, p, d, h) {
                                    if (((f = f || E), (d = d || l), h !== s))
                                        if (e)
                                            o(
                                                !1,
                                                "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
                                            );
                                        else if (
                                            "production" !==
                                            Object({ DRAGGABLE_DEBUG: void 0 }).NODE_ENV &&
                                            "undefined" != typeof console
                                        ) {
                                            var y = f + ":" + l;
                                            !r[y] &&
                                                i < 3 &&
                                                (a(
                                                    !1,
                                                    "You are manually calling a React.PropTypes validation function for the `%s` prop on `%s`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details.",
                                                    d,
                                                    f
                                                ),
                                                    (r[y] = !0),
                                                    i++);
                                        }
                                    return null == u[l]
                                        ? n
                                            ? new c(
                                                null === u[l]
                                                    ? "The " +
                                                    p +
                                                    " `" +
                                                    d +
                                                    "` is marked as required in `" +
                                                    f +
                                                    "`, but its value is `null`."
                                                    : "The " +
                                                    p +
                                                    " `" +
                                                    d +
                                                    "` is marked as required in `" +
                                                    f +
                                                    "`, but its value is `undefined`."
                                            )
                                            : null
                                        : t(u, l, f, p, d);
                                }
                                if (
                                    "production" !== Object({ DRAGGABLE_DEBUG: void 0 }).NODE_ENV
                                )
                                    var r = {},
                                        i = 0;
                                var u = n.bind(null, !1);
                                return (u.isRequired = n.bind(null, !0)), u;
                            }
                            function p(t) {
                                function e(e, n, r, o, a, i) {
                                    var s = e[n];
                                    if (S(s) !== t)
                                        return new c(
                                            "Invalid " +
                                            o +
                                            " `" +
                                            a +
                                            "` of type `" +
                                            _(s) +
                                            "` supplied to `" +
                                            r +
                                            "`, expected `" +
                                            t +
                                            "`."
                                        );
                                    return null;
                                }
                                return f(e);
                            }
                            function d(t) {
                                function e(e, n, r, o, a) {
                                    if ("function" != typeof t)
                                        return new c(
                                            "Property `" +
                                            a +
                                            "` of component `" +
                                            r +
                                            "` has invalid PropType notation inside arrayOf."
                                        );
                                    var i = e[n];
                                    if (!Array.isArray(i)) {
                                        return new c(
                                            "Invalid " +
                                            o +
                                            " `" +
                                            a +
                                            "` of type `" +
                                            S(i) +
                                            "` supplied to `" +
                                            r +
                                            "`, expected an array."
                                        );
                                    }
                                    for (var u = 0; u < i.length; u++) {
                                        var l = t(i, u, r, o, a + "[" + u + "]", s);
                                        if (l instanceof Error) return l;
                                    }
                                    return null;
                                }
                                return f(e);
                            }
                            function h(t) {
                                function e(e, n, r, o, a) {
                                    if (!(e[n] instanceof t)) {
                                        var i = t.name || E;
                                        return new c(
                                            "Invalid " +
                                            o +
                                            " `" +
                                            a +
                                            "` of type `" +
                                            R(e[n]) +
                                            "` supplied to `" +
                                            r +
                                            "`, expected instance of `" +
                                            i +
                                            "`."
                                        );
                                    }
                                    return null;
                                }
                                return f(e);
                            }
                            function y(t) {
                                function e(e, n, r, o, a) {
                                    for (var i = e[n], s = 0; s < t.length; s++)
                                        if (l(i, t[s])) return null;
                                    return new c(
                                        "Invalid " +
                                        o +
                                        " `" +
                                        a +
                                        "` of value `" +
                                        i +
                                        "` supplied to `" +
                                        r +
                                        "`, expected one of " +
                                        JSON.stringify(t) +
                                        "."
                                    );
                                }
                                return Array.isArray(t)
                                    ? f(e)
                                    : ("production" !==
                                        Object({ DRAGGABLE_DEBUG: void 0 }).NODE_ENV &&
                                        a(
                                            !1,
                                            "Invalid argument supplied to oneOf, expected an instance of array."
                                        ),
                                        r.thatReturnsNull);
                            }
                            function g(t) {
                                function e(e, n, r, o, a) {
                                    if ("function" != typeof t)
                                        return new c(
                                            "Property `" +
                                            a +
                                            "` of component `" +
                                            r +
                                            "` has invalid PropType notation inside objectOf."
                                        );
                                    var i = e[n],
                                        u = S(i);
                                    if ("object" !== u)
                                        return new c(
                                            "Invalid " +
                                            o +
                                            " `" +
                                            a +
                                            "` of type `" +
                                            u +
                                            "` supplied to `" +
                                            r +
                                            "`, expected an object."
                                        );
                                    for (var l in i)
                                        if (i.hasOwnProperty(l)) {
                                            var f = t(i, l, r, o, a + "." + l, s);
                                            if (f instanceof Error) return f;
                                        }
                                    return null;
                                }
                                return f(e);
                            }
                            function m(t) {
                                function e(e, n, r, o, a) {
                                    for (var i = 0; i < t.length; i++) {
                                        if (null == (0, t[i])(e, n, r, o, a, s)) return null;
                                    }
                                    return new c(
                                        "Invalid " + o + " `" + a + "` supplied to `" + r + "`."
                                    );
                                }
                                if (!Array.isArray(t))
                                    return (
                                        "production" !==
                                        Object({ DRAGGABLE_DEBUG: void 0 }).NODE_ENV &&
                                        a(
                                            !1,
                                            "Invalid argument supplied to oneOfType, expected an instance of array."
                                        ),
                                        r.thatReturnsNull
                                    );
                                for (var n = 0; n < t.length; n++) {
                                    var o = t[n];
                                    if ("function" != typeof o)
                                        return (
                                            a(
                                                !1,
                                                "Invalid argument supplied to oneOfType. Expected an array of check functions, but received %s at index %s.",
                                                O(o),
                                                n
                                            ),
                                            r.thatReturnsNull
                                        );
                                }
                                return f(e);
                            }
                            function v(t) {
                                function e(e, n, r, o, a) {
                                    var i = e[n],
                                        u = S(i);
                                    if ("object" !== u)
                                        return new c(
                                            "Invalid " +
                                            o +
                                            " `" +
                                            a +
                                            "` of type `" +
                                            u +
                                            "` supplied to `" +
                                            r +
                                            "`, expected `object`."
                                        );
                                    for (var l in t) {
                                        var f = t[l];
                                        if (f) {
                                            var p = f(i, l, r, o, a + "." + l, s);
                                            if (p) return p;
                                        }
                                    }
                                    return null;
                                }
                                return f(e);
                            }
                            function b(t) {
                                function e(e, n, r, o, a) {
                                    var u = e[n],
                                        l = S(u);
                                    if ("object" !== l)
                                        return new c(
                                            "Invalid " +
                                            o +
                                            " `" +
                                            a +
                                            "` of type `" +
                                            l +
                                            "` supplied to `" +
                                            r +
                                            "`, expected `object`."
                                        );
                                    var f = i({}, e[n], t);
                                    for (var p in f) {
                                        var d = t[p];
                                        if (!d)
                                            return new c(
                                                "Invalid " +
                                                o +
                                                " `" +
                                                a +
                                                "` key `" +
                                                p +
                                                "` supplied to `" +
                                                r +
                                                "`.\nBad object: " +
                                                JSON.stringify(e[n], null, "  ") +
                                                "\nValid keys: " +
                                                JSON.stringify(Object.keys(t), null, "  ")
                                            );
                                        var h = d(u, p, r, o, a + "." + p, s);
                                        if (h) return h;
                                    }
                                    return null;
                                }
                                return f(e);
                            }
                            function w(e) {
                                switch (typeof e) {
                                    case "number":
                                    case "string":
                                    case "undefined":
                                        return !0;
                                    case "boolean":
                                        return !e;
                                    case "object":
                                        if (Array.isArray(e)) return e.every(w);
                                        if (null === e || t(e)) return !0;
                                        var r = n(e);
                                        if (!r) return !1;
                                        var o,
                                            a = r.call(e);
                                        if (r !== e.entries) {
                                            for (; !(o = a.next()).done;) if (!w(o.value)) return !1;
                                        } else
                                            for (; !(o = a.next()).done;) {
                                                var i = o.value;
                                                if (i && !w(i[1])) return !1;
                                            }
                                        return !0;
                                    default:
                                        return !1;
                                }
                            }
                            function x(t, e) {
                                return (
                                    "symbol" === t ||
                                    ("Symbol" === e["@@toStringTag"] ||
                                        ("function" == typeof Symbol && e instanceof Symbol))
                                );
                            }
                            function S(t) {
                                var e = typeof t;
                                return Array.isArray(t)
                                    ? "array"
                                    : t instanceof RegExp ? "object" : x(e, t) ? "symbol" : e;
                            }
                            function _(t) {
                                if (void 0 === t || null === t) return "" + t;
                                var e = S(t);
                                if ("object" === e) {
                                    if (t instanceof Date) return "date";
                                    if (t instanceof RegExp) return "regexp";
                                }
                                return e;
                            }
                            function O(t) {
                                var e = _(t);
                                switch (e) {
                                    case "array":
                                    case "object":
                                        return "an " + e;
                                    case "boolean":
                                    case "date":
                                    case "regexp":
                                        return "a " + e;
                                    default:
                                        return e;
                                }
                            }
                            function R(t) {
                                return t.constructor && t.constructor.name
                                    ? t.constructor.name
                                    : E;
                            }
                            var D = "function" == typeof Symbol && Symbol.iterator,
                                j = "@@iterator",
                                E = "<<anonymous>>",
                                T = {
                                    array: p("array"),
                                    bool: p("boolean"),
                                    func: p("function"),
                                    number: p("number"),
                                    object: p("object"),
                                    string: p("string"),
                                    symbol: p("symbol"),
                                    any: (function () {
                                        return f(r.thatReturnsNull);
                                    })(),
                                    arrayOf: d,
                                    element: (function () {
                                        function e(e, n, r, o, a) {
                                            var i = e[n];
                                            if (!t(i)) {
                                                return new c(
                                                    "Invalid " +
                                                    o +
                                                    " `" +
                                                    a +
                                                    "` of type `" +
                                                    S(i) +
                                                    "` supplied to `" +
                                                    r +
                                                    "`, expected a single ReactElement."
                                                );
                                            }
                                            return null;
                                        }
                                        return f(e);
                                    })(),
                                    instanceOf: h,
                                    node: (function () {
                                        function t(t, e, n, r, o) {
                                            return w(t[e])
                                                ? null
                                                : new c(
                                                    "Invalid " +
                                                    r +
                                                    " `" +
                                                    o +
                                                    "` supplied to `" +
                                                    n +
                                                    "`, expected a ReactNode."
                                                );
                                        }
                                        return f(t);
                                    })(),
                                    objectOf: g,
                                    oneOf: y,
                                    oneOfType: m,
                                    shape: v,
                                    exact: b
                                };
                            return (
                                (c.prototype = Error.prototype),
                                (T.checkPropTypes = u),
                                (T.PropTypes = T),
                                T
                            );
                        };
                    },
                    function (t, e, n) {
                        "use strict";
                        function r(t) {
                            if (null === t || void 0 === t)
                                throw new TypeError(
                                    "Object.assign cannot be called with null or undefined"
                                );
                            return Object(t);
                        } /*
object-assign
(c) Sindre Sorhus
@license MIT
*/
                        var o = Object.getOwnPropertySymbols,
                            a = Object.prototype.hasOwnProperty,
                            i = Object.prototype.propertyIsEnumerable;
                        t.exports = (function () {
                            try {
                                if (!Object.assign) return !1;
                                var t = new String("abc");
                                if (((t[5] = "de"), "5" === Object.getOwnPropertyNames(t)[0]))
                                    return !1;
                                for (var e = {}, n = 0; n < 10; n++)
                                    e["_" + String.fromCharCode(n)] = n;
                                if (
                                    "0123456789" !==
                                    Object.getOwnPropertyNames(e)
                                        .map(function (t) {
                                            return e[t];
                                        })
                                        .join("")
                                )
                                    return !1;
                                var r = {};
                                return (
                                    "abcdefghijklmnopqrst".split("").forEach(function (t) {
                                        r[t] = t;
                                    }),
                                    "abcdefghijklmnopqrst" ===
                                    Object.keys(Object.assign({}, r)).join("")
                                );
                            } catch (t) {
                                return !1;
                            }
                        })()
                            ? Object.assign
                            : function (t, e) {
                                for (var n, s, u = r(t), l = 1; l < arguments.length; l++) {
                                    n = Object(arguments[l]);
                                    for (var c in n) a.call(n, c) && (u[c] = n[c]);
                                    if (o) {
                                        s = o(n);
                                        for (var f = 0; f < s.length; f++)
                                            i.call(n, s[f]) && (u[s[f]] = n[s[f]]);
                                    }
                                }
                                return u;
                            };
                    },
                    function (t, e, n) {
                        "use strict";
                        function r(t, e, n, r, u) {
                            if ("production" !== Object({ DRAGGABLE_DEBUG: void 0 }).NODE_ENV)
                                for (var l in t)
                                    if (t.hasOwnProperty(l)) {
                                        var c;
                                        try {
                                            o(
                                                "function" == typeof t[l],
                                                "%s: %s type `%s` is invalid; it must be a function, usually from the `prop-types` package, but received `%s`.",
                                                r || "React class",
                                                n,
                                                l,
                                                typeof t[l]
                                            ),
                                                (c = t[l](e, l, r, n, null, i));
                                        } catch (t) {
                                            c = t;
                                        }
                                        if (
                                            (a(
                                                !c || c instanceof Error,
                                                "%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",
                                                r || "React class",
                                                n,
                                                l,
                                                typeof c
                                            ),
                                                c instanceof Error && !(c.message in s))
                                        ) {
                                            s[c.message] = !0;
                                            var f = u ? u() : "";
                                            a(
                                                !1,
                                                "Failed %s type: %s%s",
                                                n,
                                                c.message,
                                                null != f ? f : ""
                                            );
                                        }
                                    }
                        }
                        if ("production" !== Object({ DRAGGABLE_DEBUG: void 0 }).NODE_ENV)
                            var o = n(2),
                                a = n(8),
                                i = n(3),
                                s = {};
                        t.exports = r;
                    },
                    function (t, e, n) {
                        "use strict";
                        var r = n(1),
                            o = n(2),
                            a = n(3);
                        t.exports = function () {
                            function t(t, e, n, r, i, s) {
                                s !== a &&
                                    o(
                                        !1,
                                        "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
                                    );
                            }
                            function e() {
                                return t;
                            }
                            t.isRequired = t;
                            var n = {
                                array: t,
                                bool: t,
                                func: t,
                                number: t,
                                object: t,
                                string: t,
                                symbol: t,
                                any: t,
                                arrayOf: e,
                                element: t,
                                instanceOf: e,
                                node: t,
                                objectOf: e,
                                oneOf: e,
                                oneOfType: e,
                                shape: e,
                                exact: e
                            };
                            return (n.checkPropTypes = r), (n.PropTypes = n), n;
                        };
                    },
                    function (t, e, n) {
                        var r,
                            o; /*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
                        !(function () {
                            "use strict";
                            function n() {
                                for (var t = [], e = 0; e < arguments.length; e++) {
                                    var r = arguments[e];
                                    if (r) {
                                        var o = typeof r;
                                        if ("string" === o || "number" === o) t.push(r);
                                        else if (Array.isArray(r)) t.push(n.apply(null, r));
                                        else if ("object" === o)
                                            for (var i in r) a.call(r, i) && r[i] && t.push(i);
                                    }
                                }
                                return t.join(" ");
                            }
                            var a = {}.hasOwnProperty;
                            void 0 !== t && t.exports
                                ? (t.exports = n)
                                : ((r = []),
                                    void 0 !==
                                    (o = function () {
                                        return n;
                                    }.apply(e, r)) && (t.exports = o));
                        })();
                    },
                    function (t, e, n) {
                        "use strict";
                        function r() {
                            var t =
                                arguments.length > 0 && void 0 !== arguments[0]
                                    ? arguments[0]
                                    : "transform";
                            if ("undefined" == typeof window || void 0 === window.document)
                                return "";
                            var e = window.document.documentElement.style;
                            if (t in e) return "";
                            for (var n = 0; n < s.length; n++)
                                if (o(t, s[n]) in e) return s[n];
                            return "";
                        }
                        function o(t, e) {
                            return e ? "" + e + i(t) : t;
                        }
                        function a(t, e) {
                            return e ? "-" + e.toLowerCase() + "-" + t : t;
                        }
                        function i(t) {
                            for (var e = "", n = !0, r = 0; r < t.length; r++)
                                n
                                    ? ((e += t[r].toUpperCase()), (n = !1))
                                    : "-" === t[r] ? (n = !0) : (e += t[r]);
                            return e;
                        }
                        Object.defineProperty(e, "__esModule", { value: !0 }),
                            (e.getPrefix = r),
                            (e.browserPrefixToKey = o),
                            (e.browserPrefixToStyle = a);
                        var s = ["Moz", "Webkit", "O", "ms"];
                        e.default = r();
                    },
                    function (t, e) {
                        function n() {
                            throw new Error("setTimeout has not been defined");
                        }
                        function r() {
                            throw new Error("clearTimeout has not been defined");
                        }
                        function o(t) {
                            if (c === setTimeout) return setTimeout(t, 0);
                            if ((c === n || !c) && setTimeout)
                                return (c = setTimeout), setTimeout(t, 0);
                            try {
                                return c(t, 0);
                            } catch (e) {
                                try {
                                    return c.call(null, t, 0);
                                } catch (e) {
                                    return c.call(this, t, 0);
                                }
                            }
                        }
                        function a(t) {
                            if (f === clearTimeout) return clearTimeout(t);
                            if ((f === r || !f) && clearTimeout)
                                return (f = clearTimeout), clearTimeout(t);
                            try {
                                return f(t);
                            } catch (e) {
                                try {
                                    return f.call(null, t);
                                } catch (e) {
                                    return f.call(this, t);
                                }
                            }
                        }
                        function i() {
                            y &&
                                d &&
                                ((y = !1),
                                    d.length ? (h = d.concat(h)) : (g = -1),
                                    h.length && s());
                        }
                        function s() {
                            if (!y) {
                                var t = o(i);
                                y = !0;
                                for (var e = h.length; e;) {
                                    for (d = h, h = []; ++g < e;) d && d[g].run();
                                    (g = -1), (e = h.length);
                                }
                                (d = null), (y = !1), a(t);
                            }
                        }
                        function u(t, e) {
                            (this.fun = t), (this.array = e);
                        }
                        function l() { }
                        var c,
                            f,
                            p = (t.exports = {});
                        !(function () {
                            try {
                                c = "function" == typeof setTimeout ? setTimeout : n;
                            } catch (t) {
                                c = n;
                            }
                            try {
                                f = "function" == typeof clearTimeout ? clearTimeout : r;
                            } catch (t) {
                                f = r;
                            }
                        })();
                        var d,
                            h = [],
                            y = !1,
                            g = -1;
                        (p.nextTick = function (t) {
                            var e = new Array(arguments.length - 1);
                            if (arguments.length > 1)
                                for (var n = 1; n < arguments.length; n++)
                                    e[n - 1] = arguments[n];
                            h.push(new u(t, e)), 1 !== h.length || y || o(s);
                        }),
                            (u.prototype.run = function () {
                                this.fun.apply(null, this.array);
                            }),
                            (p.title = "browser"),
                            (p.browser = !0),
                            (p.env = {}),
                            (p.argv = []),
                            (p.version = ""),
                            (p.versions = {}),
                            (p.on = l),
                            (p.addListener = l),
                            (p.once = l),
                            (p.off = l),
                            (p.removeListener = l),
                            (p.removeAllListeners = l),
                            (p.emit = l),
                            (p.prependListener = l),
                            (p.prependOnceListener = l),
                            (p.listeners = function (t) {
                                return [];
                            }),
                            (p.binding = function (t) {
                                throw new Error("process.binding is not supported");
                            }),
                            (p.cwd = function () {
                                return "/";
                            }),
                            (p.chdir = function (t) {
                                throw new Error("process.chdir is not supported");
                            }),
                            (p.umask = function () {
                                return 0;
                            });
                    }
                ]);
            });
        },
        function (t, n) {
            t.exports = e;
        },
        function (t, e, n) {
            "use strict";
            function r(t) {
                return t && t.__esModule ? t : { default: t };
            }
            function o(t, e) {
                var n = {};
                for (var r in t)
                    e.indexOf(r) >= 0 ||
                        (Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]));
                return n;
            }
            function a(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function");
            }
            function i(t, e) {
                if (!t)
                    throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called"
                    );
                return !e || ("object" != typeof e && "function" != typeof e) ? t : e;
            }
            function s(t, e) {
                if ("function" != typeof e && null !== e)
                    throw new TypeError(
                        "Super expression must either be null or a function, not " +
                        typeof e
                    );
                (t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                })),
                    e &&
                    (Object.setPrototypeOf
                        ? Object.setPrototypeOf(t, e)
                        : (t.__proto__ = e));
            }
            e.__esModule = !0;
            var u =
                Object.assign ||
                function (t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = arguments[e];
                        for (var r in n)
                            Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
                    }
                    return t;
                },
                l = n(0),
                c = r(l),
                f = n(1),
                p = r(f),
                d = n(6),
                h = n(19),
                y = r(h),
                g = (function (t) {
                    function e() {
                        var n, r, o;
                        a(this, e);
                        for (var s = arguments.length, u = Array(s), l = 0; l < s; l++)
                            u[l] = arguments[l];
                        return (
                            (n = r = i(this, t.call.apply(t, [this].concat(u)))),
                            (r.state = {
                                resizing: !1,
                                width: r.props.width,
                                height: r.props.height,
                                slackW: 0,
                                slackH: 0
                            }),
                            (o = n),
                            i(r, o)
                        );
                    }
                    return (
                        s(e, t),
                        (e.prototype.componentWillReceiveProps = function (t) {
                            this.state.resizing ||
                                (t.width === this.props.width &&
                                    t.height === this.props.height) ||
                                this.setState({ width: t.width, height: t.height });
                        }),
                        (e.prototype.lockAspectRatio = function (t, e, n) {
                            return (e = t / n), (t = e * n), [t, e];
                        }),
                        (e.prototype.runConstraints = function (t, e) {
                            var n = [this.props.minConstraints, this.props.maxConstraints],
                                r = n[0],
                                o = n[1];
                            if (this.props.lockAspectRatio) {
                                var a = this.state.width / this.state.height;
                                (e = t / a), (t = e * a);
                            }
                            if (!r && !o) return [t, e];
                            var i = t,
                                s = e,
                                u = this.state,
                                l = u.slackW,
                                c = u.slackH;
                            return (
                                (t += l),
                                (e += c),
                                r && ((t = Math.max(r[0], t)), (e = Math.max(r[1], e))),
                                o && ((t = Math.min(o[0], t)), (e = Math.min(o[1], e))),
                                (l += i - t),
                                (c += s - e),
                                (l === this.state.slackW && c === this.state.slackH) ||
                                this.setState({ slackW: l, slackH: c }),
                                [t, e]
                            );
                        }),
                        (e.prototype.resizeHandler = function (t) {
                            var e = this;
                            return function (n, r) {
                                var o = r.node,
                                    a = r.deltaX,
                                    i = r.deltaY,
                                    s = "both" === e.props.axis || "x" === e.props.axis,
                                    u = "both" === e.props.axis || "y" === e.props.axis,
                                    l = e.state.width + (s ? a : 0),
                                    c = e.state.height + (u ? i : 0),
                                    f = l !== e.state.width,
                                    p = c !== e.state.height;
                                if ("onResize" !== t || f || p) {
                                    var d = e.runConstraints(l, c);
                                    (l = d[0]), (c = d[1]);
                                    var h = {};
                                    if ("onResizeStart" === t) h.resizing = !0;
                                    else if ("onResizeStop" === t)
                                        (h.resizing = !1), (h.slackW = h.slackH = 0);
                                    else {
                                        if (l === e.state.width && c === e.state.height) return;
                                        (h.width = l), (h.height = c);
                                    }
                                    "function" == typeof e.props[t]
                                        ? ("function" == typeof n.persist && n.persist(),
                                            e.setState(h, function () {
                                                return e.props[t](n, {
                                                    node: o,
                                                    size: { width: l, height: c }
                                                });
                                            }))
                                        : e.setState(h);
                                }
                            };
                        }),
                        (e.prototype.render = function () {
                            var t = this.props,
                                e = t.children,
                                n = t.draggableOpts,
                                r = (t.width,
                                    t.height,
                                    t.handleSize,
                                    t.lockAspectRatio,
                                    t.axis,
                                    t.minConstraints,
                                    t.maxConstraints,
                                    t.onResize,
                                    t.onResizeStop,
                                    t.onResizeStart,
                                    o(t, [
                                        "children",
                                        "draggableOpts",
                                        "width",
                                        "height",
                                        "handleSize",
                                        "lockAspectRatio",
                                        "axis",
                                        "minConstraints",
                                        "maxConstraints",
                                        "onResize",
                                        "onResizeStop",
                                        "onResizeStart"
                                    ])),
                                a = r.className
                                    ? r.className + " react-resizable"
                                    : "react-resizable";
                            return (0, y.default)(
                                e,
                                u({}, r, {
                                    className: a,
                                    children: [
                                        e.props.children,
                                        c.default.createElement(
                                            d.DraggableCore,
                                            u({}, n, {
                                                key: "resizableHandle",
                                                onStop: this.resizeHandler("onResizeStop"),
                                                onStart: this.resizeHandler("onResizeStart"),
                                                onDrag: this.resizeHandler("onResize")
                                            }),
                                            c.default.createElement("span", {
                                                className: "react-resizable-handle"
                                            })
                                        )
                                    ]
                                })
                            );
                        }),
                        e
                    );
                })(c.default.Component);
            (g.propTypes = {
                children: p.default.element.isRequired,
                width: p.default.number.isRequired,
                height: p.default.number.isRequired,
                handleSize: p.default.array,
                lockAspectRatio: p.default.bool,
                axis: p.default.oneOf(["both", "x", "y", "none"]),
                minConstraints: p.default.arrayOf(p.default.number),
                maxConstraints: p.default.arrayOf(p.default.number),
                onResizeStop: p.default.func,
                onResizeStart: p.default.func,
                onResize: p.default.func,
                draggableOpts: p.default.object
            }),
                (g.defaultProps = {
                    handleSize: [20, 20],
                    lockAspectRatio: !1,
                    axis: "both",
                    minConstraints: [20, 20],
                    maxConstraints: [1 / 0, 1 / 0]
                }),
                (e.default = g);
        },
        function (t, e, n) {
            "use strict";
            function r(t, e) {
                for (var n = i(t), r = n[0], o = 1, a = n.length; o < a; o++) {
                    var s = n[o];
                    e > t[s] && (r = s);
                }
                return r;
            }
            function o(t, e) {
                if (!e[t])
                    throw new Error(
                        "ResponsiveReactGridLayout: `cols` entry for breakpoint " +
                        t +
                        " is missing!"
                    );
                return e[t];
            }
            function a(t, e, n, r, o, a) {
                if (t[n]) return (0, s.cloneLayout)(t[n]);
                for (
                    var u = t[r],
                    l = i(e),
                    c = l.slice(l.indexOf(n)),
                    f = 0,
                    p = c.length;
                    f < p;
                    f++
                ) {
                    var d = c[f];
                    if (t[d]) {
                        u = t[d];
                        break;
                    }
                }
                return (
                    (u = (0, s.cloneLayout)(u || [])),
                    (0, s.compact)((0, s.correctBounds)(u, { cols: o }), a, o)
                );
            }
            function i(t) {
                return Object.keys(t).sort(function (e, n) {
                    return t[e] - t[n];
                });
            }
            (e.__esModule = !0),
                (e.getBreakpointFromWidth = r),
                (e.getColsFromBreakpoint = o),
                (e.findOrGenerateResponsiveLayout = a),
                (e.sortBreakpoints = i);
            var s = n(2);
        },
        function (t, e, n) {
            "use strict";
            (t.exports = n(4).default),
                (t.exports.utils = n(2)),
                (t.exports.Responsive = n(21).default),
                (t.exports.Responsive.utils = n(9)),
                (t.exports.WidthProvider = n(22).default);
        },
        function (t, e, n) {
            "use strict";
            var r = n(12),
                o = n(13),
                a = n(14);
            t.exports = function () {
                function t(t, e, n, r, i, s) {
                    s !== a &&
                        o(
                            !1,
                            "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
                        );
                }
                function e() {
                    return t;
                }
                t.isRequired = t;
                var n = {
                    array: t,
                    bool: t,
                    func: t,
                    number: t,
                    object: t,
                    string: t,
                    symbol: t,
                    any: t,
                    arrayOf: e,
                    element: t,
                    instanceOf: e,
                    node: t,
                    objectOf: e,
                    oneOf: e,
                    oneOfType: e,
                    shape: e,
                    exact: e
                };
                return (n.checkPropTypes = r), (n.PropTypes = n), n;
            };
        },
        function (t, e, n) {
            "use strict";
            function r(t) {
                return function () {
                    return t;
                };
            }
            var o = function () { };
            (o.thatReturns = r),
                (o.thatReturnsFalse = r(!1)),
                (o.thatReturnsTrue = r(!0)),
                (o.thatReturnsNull = r(null)),
                (o.thatReturnsThis = function () {
                    return this;
                }),
                (o.thatReturnsArgument = function (t) {
                    return t;
                }),
                (t.exports = o);
        },
        function (t, e, n) {
            "use strict";
            function r(t, e, n, r, a, i, s, u) {
                if ((o(e), !t)) {
                    var l;
                    if (void 0 === e)
                        l = new Error(
                            "Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings."
                        );
                    else {
                        var c = [n, r, a, i, s, u],
                            f = 0;
                        (l = new Error(
                            e.replace(/%s/g, function () {
                                return c[f++];
                            })
                        )),
                            (l.name = "Invariant Violation");
                    }
                    throw ((l.framesToPop = 1), l);
                }
            }
            var o = function (t) { };
            t.exports = r;
        },
        function (t, e, n) {
            "use strict";
            t.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
        },
        function (t, e) {
            var n;
            n = (function () {
                return this;
            })();
            try {
                n = n || Function("return this")() || (0, eval)("this");
            } catch (t) {
                "object" == typeof window && (n = window);
            }
            t.exports = n;
        },
        function (t, e) {
            t.exports = function (t) {
                return (
                    t.webpackPolyfill ||
                    ((t.deprecate = function () { }),
                        (t.paths = []),
                        t.children || (t.children = []),
                        Object.defineProperty(t, "loaded", {
                            enumerable: !0,
                            get: function () {
                                return t.l;
                            }
                        }),
                        Object.defineProperty(t, "id", {
                            enumerable: !0,
                            get: function () {
                                return t.i;
                            }
                        }),
                        (t.webpackPolyfill = 1)),
                    t
                );
            };
        },
        function (t, e, n) {
            "use strict";
            function r(t) {
                return t && t.__esModule ? t : { default: t };
            }
            function o(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function");
            }
            function a(t, e) {
                if (!t)
                    throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called"
                    );
                return !e || ("object" != typeof e && "function" != typeof e) ? t : e;
            }
            function i(t, e) {
                if ("function" != typeof e && null !== e)
                    throw new TypeError(
                        "Super expression must either be null or a function, not " +
                        typeof e
                    );
                (t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                })),
                    e &&
                    (Object.setPrototypeOf
                        ? Object.setPrototypeOf(t, e)
                        : (t.__proto__ = e));
            }
            e.__esModule = !0;
            var s =
                Object.assign ||
                function (t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = arguments[e];
                        for (var r in n)
                            Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
                    }
                    return t;
                },
                u = n(0),
                l = r(u),
                c = n(1),
                f = r(c),
                p = n(6),
                d = n(18),
                h = n(2),
                y = n(5),
                g = r(y),
                m = (function (t) {
                    function e() {
                        var n, r, i;
                        o(this, e);
                        for (var s = arguments.length, u = Array(s), l = 0; l < s; l++)
                            u[l] = arguments[l];
                        return (
                            (n = r = a(this, t.call.apply(t, [this].concat(u)))),
                            (r.state = { resizing: null, dragging: null, className: "" }),
                            (i = n),
                            a(r, i)
                        );
                    }
                    return (
                        i(e, t),
                        (e.prototype.calcColWidth = function () {
                            var t = this.props,
                                e = t.margin,
                                n = t.containerPadding,
                                r = t.containerWidth,
                                o = t.cols;
                            return (r - e[0] * (o - 1) - 2 * n[0]) / o;
                        }),
                        (e.prototype.calcPosition = function (t, e, n, r, o) {
                            var a = this.props,
                                i = a.margin,
                                s = a.containerPadding,
                                u = a.rowHeight,
                                l = this.calcColWidth(),
                                c = {
                                    left: Math.round((l + i[0]) * t + s[0]),
                                    top: Math.round((u + i[1]) * e + s[1]),
                                    width:
                                        n === 1 / 0
                                            ? n
                                            : Math.round(l * n + Math.max(0, n - 1) * i[0]),
                                    height:
                                        r === 1 / 0
                                            ? r
                                            : Math.round(u * r + Math.max(0, r - 1) * i[1])
                                };
                            return (
                                o &&
                                o.resizing &&
                                ((c.width = Math.round(o.resizing.width)),
                                    (c.height = Math.round(o.resizing.height))),
                                o &&
                                o.dragging &&
                                ((c.top = Math.round(o.dragging.top)),
                                    (c.left = Math.round(o.dragging.left))),
                                c
                            );
                        }),
                        (e.prototype.calcXY = function (t, e) {
                            var n = this.props,
                                r = n.margin,
                                o = n.cols,
                                a = n.rowHeight,
                                i = n.w,
                                s = n.h,
                                u = n.maxRows,
                                l = this.calcColWidth(),
                                c = Math.round((e - r[0]) / (l + r[0])),
                                f = Math.round((t - r[1]) / (a + r[1]));
                            return (
                                (c = Math.max(Math.min(c, o - i), 0)),
                                (f = Math.max(Math.min(f, u - s), 0)),
                                { x: c, y: f }
                            );
                        }),
                        (e.prototype.calcWH = function (t) {
                            var e = t.height,
                                n = t.width,
                                r = this.props,
                                o = r.margin,
                                a = r.maxRows,
                                i = r.cols,
                                s = r.rowHeight,
                                u = r.x,
                                l = r.y,
                                c = this.calcColWidth(),
                                f = Math.round((n + o[0]) / (c + o[0])),
                                p = Math.round((e + o[1]) / (s + o[1]));
                            return (
                                (f = Math.max(Math.min(f, i - u), 0)),
                                (p = Math.max(Math.min(p, a - l), 0)),
                                { w: f, h: p }
                            );
                        }),
                        (e.prototype.createStyle = function (t) {
                            var e = this.props,
                                n = e.usePercentages,
                                r = e.containerWidth,
                                o = e.useCSSTransforms,
                                a = void 0;
                            return (
                                o
                                    ? (a = (0, h.setTransform)(t))
                                    : ((a = (0, h.setTopLeft)(t)),
                                        n &&
                                        ((a.left = (0, h.perc)(t.left / r)),
                                            (a.width = (0, h.perc)(t.width / r)))),
                                a
                            );
                        }),
                        (e.prototype.mixinDraggable = function (t) {
                            return l.default.createElement(
                                p.DraggableCore,
                                {
                                    onStart: this.onDragHandler("onDragStart"),
                                    onDrag: this.onDragHandler("onDrag"),
                                    onStop: this.onDragHandler("onDragStop"),
                                    handle: this.props.handle,
                                    cancel:
                                        ".react-resizable-handle" +
                                        (this.props.cancel ? "," + this.props.cancel : "")
                                },
                                t
                            );
                        }),
                        (e.prototype.mixinResizable = function (t, e) {
                            var n = this.props,
                                r = n.cols,
                                o = n.x,
                                a = n.minW,
                                i = n.minH,
                                s = n.maxW,
                                u = n.maxH,
                                c = this.calcPosition(0, 0, r - o, 0).width,
                                f = this.calcPosition(0, 0, a, i),
                                p = this.calcPosition(0, 0, s, u),
                                h = [f.width, f.height],
                                y = [Math.min(p.width, c), Math.min(p.height, 1 / 0)];
                            return l.default.createElement(
                                d.Resizable,
                                {
                                    width: e.width,
                                    height: e.height,
                                    minConstraints: h,
                                    maxConstraints: y,
                                    onResizeStop: this.onResizeHandler("onResizeStop"),
                                    onResizeStart: this.onResizeHandler("onResizeStart"),
                                    onResize: this.onResizeHandler("onResize")
                                },
                                t
                            );
                        }),
                        (e.prototype.onDragHandler = function (t) {
                            var e = this;
                            return function (n, r) {
                                var o = r.node,
                                    a = r.deltaX,
                                    i = r.deltaY,
                                    s = e.props[t];
                                if (s) {
                                    var u = { top: 0, left: 0 };
                                    switch (t) {
                                        case "onDragStart":
                                            var l = o.offsetParent;
                                            if (!l) return;
                                            var c = l.getBoundingClientRect(),
                                                f = o.getBoundingClientRect();
                                            (u.left = f.left - c.left + l.scrollLeft),
                                                (u.top = f.top - c.top + l.scrollTop),
                                                e.setState({ dragging: u });
                                            break;
                                        case "onDrag":
                                            if (!e.state.dragging)
                                                throw new Error("onDrag called before onDragStart.");
                                            (u.left = e.state.dragging.left + a),
                                                (u.top = e.state.dragging.top + i),
                                                e.setState({ dragging: u });
                                            break;
                                        case "onDragStop":
                                            if (!e.state.dragging)
                                                throw new Error("onDragEnd called before onDragStart.");
                                            (u.left = e.state.dragging.left),
                                                (u.top = e.state.dragging.top),
                                                e.setState({ dragging: null });
                                            break;
                                        default:
                                            throw new Error(
                                                "onDragHandler called with unrecognized handlerName: " +
                                                t
                                            );
                                    }
                                    var p = e.calcXY(u.top, u.left),
                                        d = p.x,
                                        h = p.y;
                                    return s.call(e, e.props.i, d, h, {
                                        e: n,
                                        node: o,
                                        newPosition: u
                                    });
                                }
                            };
                        }),
                        (e.prototype.onResizeHandler = function (t) {
                            var e = this;
                            return function (n, r) {
                                var o = r.node,
                                    a = r.size,
                                    i = e.props[t];
                                if (i) {
                                    var s = e.props,
                                        u = s.cols,
                                        l = s.x,
                                        c = s.i,
                                        f = s.maxW,
                                        p = s.minW,
                                        d = s.maxH,
                                        h = s.minH,
                                        y = e.calcWH(a),
                                        g = y.w,
                                        m = y.h;
                                    (g = Math.min(g, u - l)),
                                        (g = Math.max(g, 1)),
                                        (g = Math.max(Math.min(g, f), p)),
                                        (m = Math.max(Math.min(m, d), h)),
                                        e.setState({ resizing: "onResizeStop" === t ? null : a }),
                                        i.call(e, c, g, m, { e: n, node: o, size: a });
                                }
                            };
                        }),
                        (e.prototype.render = function () {
                            var t = this.props,
                                e = t.x,
                                n = t.y,
                                r = t.w,
                                o = t.h,
                                a = t.isDraggable,
                                i = t.isResizable,
                                u = t.useCSSTransforms,
                                c = this.calcPosition(e, n, r, o, this.state),
                                f = l.default.Children.only(this.props.children),
                                p = l.default.cloneElement(f, {
                                    className: (0, g.default)(
                                        "react-grid-item",
                                        f.props.className,
                                        this.props.className,
                                        {
                                            static: this.props.static,
                                            resizing: Boolean(this.state.resizing),
                                            "react-draggable": a,
                                            "react-draggable-dragging": Boolean(this.state.dragging),
                                            cssTransforms: u
                                        }
                                    ),
                                    style: s(
                                        {},
                                        this.props.style,
                                        f.props.style,
                                        this.createStyle(c)
                                    )
                                });
                            return (
                                i && (p = this.mixinResizable(p, c)),
                                a && (p = this.mixinDraggable(p)),
                                p
                            );
                        }),
                        e
                    );
                })(l.default.Component);
            (m.propTypes = {
                children: f.default.element,
                cols: f.default.number.isRequired,
                containerWidth: f.default.number.isRequired,
                rowHeight: f.default.number.isRequired,
                margin: f.default.array.isRequired,
                maxRows: f.default.number.isRequired,
                containerPadding: f.default.array.isRequired,
                x: f.default.number.isRequired,
                y: f.default.number.isRequired,
                w: f.default.number.isRequired,
                h: f.default.number.isRequired,
                minW: function (t, e) {
                    var n = t[e];
                    return "number" != typeof n
                        ? new Error("minWidth not Number")
                        : n > t.w || n > t.maxW
                            ? new Error("minWidth larger than item width/maxWidth")
                            : void 0;
                },
                maxW: function (t, e) {
                    var n = t[e];
                    return "number" != typeof n
                        ? new Error("maxWidth not Number")
                        : n < t.w || n < t.minW
                            ? new Error("maxWidth smaller than item width/minWidth")
                            : void 0;
                },
                minH: function (t, e) {
                    var n = t[e];
                    return "number" != typeof n
                        ? new Error("minHeight not Number")
                        : n > t.h || n > t.maxH
                            ? new Error("minHeight larger than item height/maxHeight")
                            : void 0;
                },
                maxH: function (t, e) {
                    var n = t[e];
                    return "number" != typeof n
                        ? new Error("maxHeight not Number")
                        : n < t.h || n < t.minH
                            ? new Error("maxHeight smaller than item height/minHeight")
                            : void 0;
                },
                i: f.default.string.isRequired,
                onDragStop: f.default.func,
                onDragStart: f.default.func,
                onDrag: f.default.func,
                onResizeStop: f.default.func,
                onResizeStart: f.default.func,
                onResize: f.default.func,
                isDraggable: f.default.bool.isRequired,
                isResizable: f.default.bool.isRequired,
                static: f.default.bool,
                useCSSTransforms: f.default.bool.isRequired,
                className: f.default.string,
                handle: f.default.string,
                cancel: f.default.string
            }),
                (m.defaultProps = {
                    className: "",
                    cancel: "",
                    handle: "",
                    minH: 1,
                    minW: 1,
                    maxH: 1 / 0,
                    maxW: 1 / 0
                }),
                (e.default = m);
        },
        function (t, e, n) {
            "use strict";
            (t.exports = function () {
                throw new Error(
                    "Don't instantiate Resizable directly! Use require('react-resizable').Resizable"
                );
            }),
                (t.exports.Resizable = n(8).default),
                (t.exports.ResizableBox = n(20).default);
        },
        function (t, e, n) {
            "use strict";
            var r =
                Object.assign ||
                function (t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = arguments[e];
                        for (var r in n)
                            Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
                    }
                    return t;
                },
                o = n(0),
                a = (function (t) {
                    return t && t.__esModule ? t : { default: t };
                })(o);
            t.exports = function (t, e) {
                return (
                    e.style && t.props.style && (e.style = r({}, t.props.style, e.style)),
                    e.className &&
                    t.props.className &&
                    (e.className = t.props.className + " " + e.className),
                    a.default.cloneElement(t, e)
                );
            };
        },
        function (t, e, n) {
            "use strict";
            function r(t) {
                return t && t.__esModule ? t : { default: t };
            }
            function o(t, e) {
                var n = {};
                for (var r in t)
                    e.indexOf(r) >= 0 ||
                        (Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]));
                return n;
            }
            function a(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function");
            }
            function i(t, e) {
                if (!t)
                    throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called"
                    );
                return !e || ("object" != typeof e && "function" != typeof e) ? t : e;
            }
            function s(t, e) {
                if ("function" != typeof e && null !== e)
                    throw new TypeError(
                        "Super expression must either be null or a function, not " +
                        typeof e
                    );
                (t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                })),
                    e &&
                    (Object.setPrototypeOf
                        ? Object.setPrototypeOf(t, e)
                        : (t.__proto__ = e));
            }
            e.__esModule = !0;
            var u =
                Object.assign ||
                function (t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = arguments[e];
                        for (var r in n)
                            Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
                    }
                    return t;
                },
                l = n(0),
                c = r(l),
                f = n(1),
                p = r(f),
                d = n(8),
                h = r(d),
                y = (function (t) {
                    function e() {
                        var n, r, o;
                        a(this, e);
                        for (var s = arguments.length, u = Array(s), l = 0; l < s; l++)
                            u[l] = arguments[l];
                        return (
                            (n = r = i(this, t.call.apply(t, [this].concat(u)))),
                            (r.state = { width: r.props.width, height: r.props.height }),
                            (r.onResize = function (t, e) {
                                var n = e.size;
                                n.width, n.height;
                                r.props.onResize
                                    ? (t.persist && t.persist(),
                                        r.setState(n, function () {
                                            return r.props.onResize && r.props.onResize(t, e);
                                        }))
                                    : r.setState(n);
                            }),
                            (o = n),
                            i(r, o)
                        );
                    }
                    return (
                        s(e, t),
                        (e.prototype.componentWillReceiveProps = function (t) {
                            (t.width === this.props.width &&
                                t.height === this.props.height) ||
                                this.setState({ width: t.width, height: t.height });
                        }),
                        (e.prototype.render = function () {
                            var t = this.props,
                                e = t.handleSize,
                                n = (t.onResize, t.onResizeStart),
                                r = t.onResizeStop,
                                a = t.draggableOpts,
                                i = t.minConstraints,
                                s = t.maxConstraints,
                                l = t.lockAspectRatio,
                                f = t.axis,
                                p = (t.width,
                                    t.height,
                                    o(t, [
                                        "handleSize",
                                        "onResize",
                                        "onResizeStart",
                                        "onResizeStop",
                                        "draggableOpts",
                                        "minConstraints",
                                        "maxConstraints",
                                        "lockAspectRatio",
                                        "axis",
                                        "width",
                                        "height"
                                    ]));
                            return c.default.createElement(
                                h.default,
                                {
                                    handleSize: e,
                                    width: this.state.width,
                                    height: this.state.height,
                                    onResizeStart: n,
                                    onResize: this.onResize,
                                    onResizeStop: r,
                                    draggableOpts: a,
                                    minConstraints: i,
                                    maxConstraints: s,
                                    lockAspectRatio: l,
                                    axis: f
                                },
                                c.default.createElement(
                                    "div",
                                    u(
                                        {
                                            style: {
                                                width: this.state.width + "px",
                                                height: this.state.height + "px"
                                            }
                                        },
                                        p
                                    )
                                )
                            );
                        }),
                        e
                    );
                })(c.default.Component);
            (y.propTypes = { height: p.default.number, width: p.default.number }),
                (y.defaultProps = { handleSize: [20, 20] }),
                (e.default = y);
        },
        function (t, e, n) {
            "use strict";
            function r(t) {
                return t && t.__esModule ? t : { default: t };
            }
            function o(t, e) {
                var n = {};
                for (var r in t)
                    e.indexOf(r) >= 0 ||
                        (Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]));
                return n;
            }
            function a(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function");
            }
            function i(t, e) {
                if (!t)
                    throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called"
                    );
                return !e || ("object" != typeof e && "function" != typeof e) ? t : e;
            }
            function s(t, e) {
                if ("function" != typeof e && null !== e)
                    throw new TypeError(
                        "Super expression must either be null or a function, not " +
                        typeof e
                    );
                (t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                })),
                    e &&
                    (Object.setPrototypeOf
                        ? Object.setPrototypeOf(t, e)
                        : (t.__proto__ = e));
            }
            e.__esModule = !0;
            var u =
                Object.assign ||
                function (t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = arguments[e];
                        for (var r in n)
                            Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
                    }
                    return t;
                },
                l = n(0),
                c = r(l),
                f = n(1),
                p = r(f),
                d = n(3),
                h = r(d),
                y = n(2),
                g = n(9),
                m = n(4),
                v = r(m),
                b = function (t) {
                    return Object.prototype.toString.call(t);
                },
                w = (function (t) {
                    function e() {
                        var n, r, o;
                        a(this, e);
                        for (var s = arguments.length, l = Array(s), c = 0; c < s; c++)
                            l[c] = arguments[c];
                        return (
                            (n = r = i(this, t.call.apply(t, [this].concat(l)))),
                            (r.state = r.generateInitialState()),
                            (r.onLayoutChange = function (t) {
                                var e;
                                r.props.onLayoutChange(
                                    t,
                                    u(
                                        {},
                                        r.props.layouts,
                                        ((e = {}), (e[r.state.breakpoint] = t), e)
                                    )
                                );
                            }),
                            (o = n),
                            i(r, o)
                        );
                    }
                    return (
                        s(e, t),
                        (e.prototype.generateInitialState = function () {
                            var t = this.props,
                                e = t.width,
                                n = t.breakpoints,
                                r = t.layouts,
                                o = t.cols,
                                a = (0, g.getBreakpointFromWidth)(n, e),
                                i = (0, g.getColsFromBreakpoint)(a, o),
                                s =
                                    !1 === this.props.verticalCompact
                                        ? null
                                        : this.props.compactType;
                            return {
                                layout: (0, g.findOrGenerateResponsiveLayout)(r, n, a, a, i, s),
                                breakpoint: a,
                                cols: i
                            };
                        }),
                        (e.prototype.componentWillReceiveProps = function (t) {
                            if (
                                t.width == this.props.width &&
                                t.breakpoint === this.props.breakpoint &&
                                (0, h.default)(t.breakpoints, this.props.breakpoints) &&
                                (0, h.default)(t.cols, this.props.cols)
                            ) {
                                if (!(0, h.default)(t.layouts, this.props.layouts)) {
                                    var e = this.state,
                                        n = e.breakpoint,
                                        r = e.cols,
                                        o = (0, g.findOrGenerateResponsiveLayout)(
                                            t.layouts,
                                            t.breakpoints,
                                            n,
                                            n,
                                            r,
                                            t.compactType
                                        );
                                    this.setState({ layout: o });
                                }
                            } else this.onWidthChange(t);
                        }),
                        (e.prototype.onWidthChange = function (t) {
                            var e = t.breakpoints,
                                n = t.cols,
                                r = t.layouts,
                                o = t.compactType,
                                a =
                                    t.breakpoint ||
                                    (0, g.getBreakpointFromWidth)(t.breakpoints, t.width),
                                i = this.state.breakpoint;
                            if (
                                i !== a ||
                                this.props.breakpoints !== e ||
                                this.props.cols !== n
                            ) {
                                i in r || (r[i] = (0, y.cloneLayout)(this.state.layout));
                                var s = (0, g.getColsFromBreakpoint)(a, n),
                                    u = (0, g.findOrGenerateResponsiveLayout)(r, e, a, i, s, o);
                                (u = (0, y.synchronizeLayoutWithChildren)(u, t.children, s, o)),
                                    (r[a] = u),
                                    this.props.onLayoutChange(u, r),
                                    this.props.onBreakpointChange(a, s),
                                    this.props.onWidthChange(
                                        t.width,
                                        t.margin,
                                        s,
                                        t.containerPadding
                                    ),
                                    this.setState({ breakpoint: a, layout: u, cols: s });
                            }
                        }),
                        (e.prototype.render = function () {
                            var t = this.props,
                                e = (t.breakpoint,
                                    t.breakpoints,
                                    t.cols,
                                    t.layouts,
                                    t.onBreakpointChange,
                                    t.onLayoutChange,
                                    t.onWidthChange,
                                    o(t, [
                                        "breakpoint",
                                        "breakpoints",
                                        "cols",
                                        "layouts",
                                        "onBreakpointChange",
                                        "onLayoutChange",
                                        "onWidthChange"
                                    ]));
                            return c.default.createElement(
                                v.default,
                                u({}, e, {
                                    onLayoutChange: this.onLayoutChange,
                                    layout: this.state.layout,
                                    cols: this.state.cols
                                })
                            );
                        }),
                        e
                    );
                })(c.default.Component);
            (w.propTypes = {
                breakpoint: p.default.string,
                breakpoints: p.default.object,
                cols: p.default.object,
                layouts: function (t, e) {
                    if ("[object Object]" !== b(t[e]))
                        throw new Error(
                            "Layout property must be an object. Received: " + b(t[e])
                        );
                    Object.keys(t[e]).forEach(function (e) {
                        if (!(e in t.breakpoints))
                            throw new Error(
                                "Each key in layouts must align with a key in breakpoints."
                            );
                        (0, y.validateLayout)(t.layouts[e], "layouts." + e);
                    });
                },
                width: p.default.number.isRequired,
                onBreakpointChange: p.default.func,
                onLayoutChange: p.default.func,
                onWidthChange: p.default.func
            }),
                (w.defaultProps = {
                    breakpoints: { lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 },
                    cols: { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 },
                    layouts: {},
                    onBreakpointChange: y.noop,
                    onLayoutChange: y.noop,
                    onWidthChange: y.noop
                }),
                (e.default = w);
        },
        function (t, e, n) {
            "use strict";
            function r(t) {
                return t && t.__esModule ? t : { default: t };
            }
            function o(t, e) {
                var n = {};
                for (var r in t)
                    e.indexOf(r) >= 0 ||
                        (Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]));
                return n;
            }
            function a(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function");
            }
            function i(t, e) {
                if (!t)
                    throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called"
                    );
                return !e || ("object" != typeof e && "function" != typeof e) ? t : e;
            }
            function s(t, e) {
                if ("function" != typeof e && null !== e)
                    throw new TypeError(
                        "Super expression must either be null or a function, not " +
                        typeof e
                    );
                (t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                })),
                    e &&
                    (Object.setPrototypeOf
                        ? Object.setPrototypeOf(t, e)
                        : (t.__proto__ = e));
            }
            function u(t) {
                var e, n;
                return (
                    (n = e = (function (e) {
                        function n() {
                            var t, r, o;
                            a(this, n);
                            for (var s = arguments.length, u = Array(s), l = 0; l < s; l++)
                                u[l] = arguments[l];
                            return (
                                (t = r = i(this, e.call.apply(e, [this].concat(u)))),
                                (r.state = { width: 1280 }),
                                (r.mounted = !1),
                                (r.onWindowResize = function () {
                                    if (r.mounted) {
                                        var t = y.default.findDOMNode(r);
                                        t instanceof HTMLElement &&
                                            r.setState({ width: t.offsetWidth });
                                    }
                                }),
                                (o = t),
                                i(r, o)
                            );
                        }
                        return (
                            s(n, e),
                            (n.prototype.componentDidMount = function () {
                                (this.mounted = !0),
                                    window.addEventListener("resize", this.onWindowResize),
                                    this.onWindowResize();
                            }),
                            (n.prototype.componentWillUnmount = function () {
                                (this.mounted = !1),
                                    window.removeEventListener("resize", this.onWindowResize);
                            }),
                            (n.prototype.render = function () {
                                var e = this.props,
                                    n = e.measureBeforeMount,
                                    r = o(e, ["measureBeforeMount"]);
                                return n && !this.mounted
                                    ? f.default.createElement("div", {
                                        className: this.props.className,
                                        style: this.props.style
                                    })
                                    : f.default.createElement(t, l({}, r, this.state));
                            }),
                            n
                        );
                    })(f.default.Component)),
                    (e.defaultProps = { measureBeforeMount: !1 }),
                    (e.propTypes = { measureBeforeMount: d.default.bool }),
                    n
                );
            }
            e.__esModule = !0;
            var l =
                Object.assign ||
                function (t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = arguments[e];
                        for (var r in n)
                            Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
                    }
                    return t;
                };
            e.default = u;
            var c = n(0),
                f = r(c),
                p = n(1),
                d = r(p),
                h = n(7),
                y = r(h);
        }
    ]);
});
//# sourceMappingURL=react-grid-layout.min.js.map
