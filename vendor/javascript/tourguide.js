!(function (t, e) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = e())
    : "function" == typeof define && define.amd
      ? define([], e)
      : "object" == typeof exports
        ? (exports.tourguide = e())
        : (t.tourguide = e());
})(self, () =>
  (() => {
    "use strict";
    var t = {
        362: (t, e, i) => {
          function o(t) {
            return t.split("-")[0];
          }
          function n(t) {
            return t.split("-")[1];
          }
          function r(t) {
            return ["top", "bottom"].includes(o(t)) ? "x" : "y";
          }
          function s(t) {
            return "y" === t ? "height" : "width";
          }
          function a(t, e, i) {
            let { reference: a, floating: l } = t;
            const c = a.x + a.width / 2 - l.width / 2,
              d = a.y + a.height / 2 - l.height / 2,
              u = r(e),
              f = s(u),
              p = a[f] / 2 - l[f] / 2,
              h = "x" === u;
            let g;
            switch (o(e)) {
              case "top":
                g = { x: c, y: a.y - l.height };
                break;
              case "bottom":
                g = { x: c, y: a.y + a.height };
                break;
              case "right":
                g = { x: a.x + a.width, y: d };
                break;
              case "left":
                g = { x: a.x - l.width, y: d };
                break;
              default:
                g = { x: a.x, y: a.y };
            }
            switch (n(e)) {
              case "start":
                g[u] -= p * (i && h ? -1 : 1);
                break;
              case "end":
                g[u] += p * (i && h ? -1 : 1);
            }
            return g;
          }
          function l(t) {
            return "number" != typeof t
              ? (function (t) {
                  return { top: 0, right: 0, bottom: 0, left: 0, ...t };
                })(t)
              : { top: t, right: t, bottom: t, left: t };
          }
          function c(t) {
            return {
              ...t,
              top: t.y,
              left: t.x,
              right: t.x + t.width,
              bottom: t.y + t.height,
            };
          }
          async function d(t, e) {
            var i;
            void 0 === e && (e = {});
            const {
                x: o,
                y: n,
                platform: r,
                rects: s,
                elements: a,
                strategy: d,
              } = t,
              {
                boundary: u = "clippingAncestors",
                rootBoundary: f = "viewport",
                elementContext: p = "floating",
                altBoundary: h = !1,
                padding: g = 0,
              } = e,
              m = l(g),
              v = a[h ? ("floating" === p ? "reference" : "floating") : p],
              y = c(
                await r.getClippingRect({
                  element:
                    null ==
                      (i = await (null == r.isElement
                        ? void 0
                        : r.isElement(v))) || i
                      ? v
                      : v.contextElement ||
                        (await (null == r.getDocumentElement
                          ? void 0
                          : r.getDocumentElement(a.floating))),
                  boundary: u,
                  rootBoundary: f,
                  strategy: d,
                }),
              ),
              b = c(
                r.convertOffsetParentRelativeRectToViewportRelativeRect
                  ? await r.convertOffsetParentRelativeRectToViewportRelativeRect(
                      {
                        rect:
                          "floating" === p
                            ? { ...s.floating, x: o, y: n }
                            : s.reference,
                        offsetParent: await (null == r.getOffsetParent
                          ? void 0
                          : r.getOffsetParent(a.floating)),
                        strategy: d,
                      },
                    )
                  : s[p],
              );
            return {
              top: y.top - b.top + m.top,
              bottom: b.bottom - y.bottom + m.bottom,
              left: y.left - b.left + m.left,
              right: b.right - y.right + m.right,
            };
          }
          i.r(e),
            i.d(e, {
              arrow: () => h,
              autoPlacement: () => k,
              autoUpdate: () => ct,
              computePosition: () => dt,
              detectOverflow: () => d,
              flip: () => _,
              getOverflowAncestors: () => rt,
              hide: () => P,
              inline: () => T,
              limitShift: () => B,
              offset: () => L,
              platform: () => lt,
              shift: () => O,
              size: () => A,
            });
          const u = Math.min,
            f = Math.max;
          function p(t, e, i) {
            return f(t, u(e, i));
          }
          const h = (t) => ({
              name: "arrow",
              options: t,
              async fn(e) {
                const { element: i, padding: o = 0 } = null != t ? t : {},
                  { x: a, y: c, placement: d, rects: u, platform: f } = e;
                if (null == i) return {};
                const h = l(o),
                  g = { x: a, y: c },
                  m = r(d),
                  v = n(d),
                  y = s(m),
                  b = await f.getDimensions(i),
                  w = "y" === m ? "top" : "left",
                  x = "y" === m ? "bottom" : "right",
                  k = u.reference[y] + u.reference[m] - g[m] - u.floating[y],
                  _ = g[m] - u.reference[m],
                  E = await (null == f.getOffsetParent
                    ? void 0
                    : f.getOffsetParent(i));
                let S = E
                  ? "y" === m
                    ? E.clientHeight || 0
                    : E.clientWidth || 0
                  : 0;
                0 === S && (S = u.floating[y]);
                const P = k / 2 - _ / 2,
                  L = h[w],
                  C = S - b[y] - h[x],
                  O = S / 2 - b[y] / 2 + P,
                  B = p(L, O, C),
                  A =
                    ("start" === v ? h[w] : h[x]) > 0 &&
                    O !== B &&
                    u.reference[y] <= u.floating[y];
                return {
                  [m]: g[m] - (A ? (O < L ? L - O : C - O) : 0),
                  data: { [m]: B, centerOffset: O - B },
                };
              },
            }),
            g = { left: "right", right: "left", bottom: "top", top: "bottom" };
          function m(t) {
            return t.replace(/left|right|bottom|top/g, (t) => g[t]);
          }
          function v(t, e, i) {
            void 0 === i && (i = !1);
            const o = n(t),
              a = r(t),
              l = s(a);
            let c =
              "x" === a
                ? o === (i ? "end" : "start")
                  ? "right"
                  : "left"
                : "start" === o
                  ? "bottom"
                  : "top";
            return (
              e.reference[l] > e.floating[l] && (c = m(c)),
              { main: c, cross: m(c) }
            );
          }
          const y = { start: "end", end: "start" };
          function b(t) {
            return t.replace(/start|end/g, (t) => y[t]);
          }
          const w = ["top", "right", "bottom", "left"],
            x = w.reduce((t, e) => t.concat(e, e + "-start", e + "-end"), []),
            k = function (t) {
              return (
                void 0 === t && (t = {}),
                {
                  name: "autoPlacement",
                  options: t,
                  async fn(e) {
                    var i, r, s, a, l;
                    const {
                        x: c,
                        y: u,
                        rects: f,
                        middlewareData: p,
                        placement: h,
                        platform: g,
                        elements: m,
                      } = e,
                      {
                        alignment: y = null,
                        allowedPlacements: w = x,
                        autoAlignment: k = !0,
                        ..._
                      } = t,
                      E = (function (t, e, i) {
                        return (
                          t
                            ? [
                                ...i.filter((e) => n(e) === t),
                                ...i.filter((e) => n(e) !== t),
                              ]
                            : i.filter((t) => o(t) === t)
                        ).filter(
                          (i) => !t || n(i) === t || (!!e && b(i) !== i),
                        );
                      })(y, k, w),
                      S = await d(e, _),
                      P =
                        null !=
                        (i = null == (r = p.autoPlacement) ? void 0 : r.index)
                          ? i
                          : 0,
                      L = E[P];
                    if (null == L) return {};
                    const { main: C, cross: O } = v(
                      L,
                      f,
                      await (null == g.isRTL ? void 0 : g.isRTL(m.floating)),
                    );
                    if (h !== L)
                      return { x: c, y: u, reset: { placement: E[0] } };
                    const B = [S[o(L)], S[C], S[O]],
                      A = [
                        ...(null !=
                        (s =
                          null == (a = p.autoPlacement) ? void 0 : a.overflows)
                          ? s
                          : []),
                        { placement: L, overflows: B },
                      ],
                      T = E[P + 1];
                    if (T)
                      return {
                        data: { index: P + 1, overflows: A },
                        reset: { placement: T },
                      };
                    const D = A.slice().sort(
                        (t, e) => t.overflows[0] - e.overflows[0],
                      ),
                      R =
                        null ==
                        (l = D.find((t) => {
                          let { overflows: e } = t;
                          return e.every((t) => t <= 0);
                        }))
                          ? void 0
                          : l.placement,
                      M = null != R ? R : D[0].placement;
                    return M !== h
                      ? {
                          data: { index: P + 1, overflows: A },
                          reset: { placement: M },
                        }
                      : {};
                  },
                }
              );
            },
            _ = function (t) {
              return (
                void 0 === t && (t = {}),
                {
                  name: "flip",
                  options: t,
                  async fn(e) {
                    var i;
                    const {
                        placement: n,
                        middlewareData: r,
                        rects: s,
                        initialPlacement: a,
                        platform: l,
                        elements: c,
                      } = e,
                      {
                        mainAxis: u = !0,
                        crossAxis: f = !0,
                        fallbackPlacements: p,
                        fallbackStrategy: h = "bestFit",
                        flipAlignment: g = !0,
                        ...y
                      } = t,
                      w = o(n),
                      x =
                        p ||
                        (w !== a && g
                          ? (function (t) {
                              const e = m(t);
                              return [b(t), e, b(e)];
                            })(a)
                          : [m(a)]),
                      k = [a, ...x],
                      _ = await d(e, y),
                      E = [];
                    let S = (null == (i = r.flip) ? void 0 : i.overflows) || [];
                    if ((u && E.push(_[w]), f)) {
                      const { main: t, cross: e } = v(
                        n,
                        s,
                        await (null == l.isRTL ? void 0 : l.isRTL(c.floating)),
                      );
                      E.push(_[t], _[e]);
                    }
                    if (
                      ((S = [...S, { placement: n, overflows: E }]),
                      !E.every((t) => t <= 0))
                    ) {
                      var P, L;
                      const t =
                          (null != (P = null == (L = r.flip) ? void 0 : L.index)
                            ? P
                            : 0) + 1,
                        e = k[t];
                      if (e)
                        return {
                          data: { index: t, overflows: S },
                          reset: { placement: e },
                        };
                      let i = "bottom";
                      switch (h) {
                        case "bestFit": {
                          var C;
                          const t =
                            null ==
                            (C = S.map((t) => [
                              t,
                              t.overflows
                                .filter((t) => t > 0)
                                .reduce((t, e) => t + e, 0),
                            ]).sort((t, e) => t[1] - e[1])[0])
                              ? void 0
                              : C[0].placement;
                          t && (i = t);
                          break;
                        }
                        case "initialPlacement":
                          i = a;
                      }
                      if (n !== i) return { reset: { placement: i } };
                    }
                    return {};
                  },
                }
              );
            };
          function E(t, e) {
            return {
              top: t.top - e.height,
              right: t.right - e.width,
              bottom: t.bottom - e.height,
              left: t.left - e.width,
            };
          }
          function S(t) {
            return w.some((e) => t[e] >= 0);
          }
          const P = function (t) {
              let { strategy: e = "referenceHidden", ...i } =
                void 0 === t ? {} : t;
              return {
                name: "hide",
                async fn(t) {
                  const { rects: o } = t;
                  switch (e) {
                    case "referenceHidden": {
                      const e = E(
                        await d(t, { ...i, elementContext: "reference" }),
                        o.reference,
                      );
                      return {
                        data: {
                          referenceHiddenOffsets: e,
                          referenceHidden: S(e),
                        },
                      };
                    }
                    case "escaped": {
                      const e = E(
                        await d(t, { ...i, altBoundary: !0 }),
                        o.floating,
                      );
                      return { data: { escapedOffsets: e, escaped: S(e) } };
                    }
                    default:
                      return {};
                  }
                },
              };
            },
            L = function (t) {
              return (
                void 0 === t && (t = 0),
                {
                  name: "offset",
                  options: t,
                  async fn(e) {
                    const { x: i, y: s } = e,
                      a = await (async function (t, e) {
                        const { placement: i, platform: s, elements: a } = t,
                          l = await (null == s.isRTL
                            ? void 0
                            : s.isRTL(a.floating)),
                          c = o(i),
                          d = n(i),
                          u = "x" === r(i),
                          f = ["left", "top"].includes(c) ? -1 : 1,
                          p = l && u ? -1 : 1,
                          h = "function" == typeof e ? e(t) : e;
                        let {
                          mainAxis: g,
                          crossAxis: m,
                          alignmentAxis: v,
                        } = "number" == typeof h
                          ? { mainAxis: h, crossAxis: 0, alignmentAxis: null }
                          : {
                              mainAxis: 0,
                              crossAxis: 0,
                              alignmentAxis: null,
                              ...h,
                            };
                        return (
                          d &&
                            "number" == typeof v &&
                            (m = "end" === d ? -1 * v : v),
                          u ? { x: m * p, y: g * f } : { x: g * f, y: m * p }
                        );
                      })(e, t);
                    return { x: i + a.x, y: s + a.y, data: a };
                  },
                }
              );
            };
          function C(t) {
            return "x" === t ? "y" : "x";
          }
          const O = function (t) {
              return (
                void 0 === t && (t = {}),
                {
                  name: "shift",
                  options: t,
                  async fn(e) {
                    const { x: i, y: n, placement: s } = e,
                      {
                        mainAxis: a = !0,
                        crossAxis: l = !1,
                        limiter: c = {
                          fn: (t) => {
                            let { x: e, y: i } = t;
                            return { x: e, y: i };
                          },
                        },
                        ...u
                      } = t,
                      f = { x: i, y: n },
                      h = await d(e, u),
                      g = r(o(s)),
                      m = C(g);
                    let v = f[g],
                      y = f[m];
                    if (a) {
                      const t = "y" === g ? "bottom" : "right";
                      v = p(v + h["y" === g ? "top" : "left"], v, v - h[t]);
                    }
                    if (l) {
                      const t = "y" === m ? "bottom" : "right";
                      y = p(y + h["y" === m ? "top" : "left"], y, y - h[t]);
                    }
                    const b = c.fn({ ...e, [g]: v, [m]: y });
                    return { ...b, data: { x: b.x - i, y: b.y - n } };
                  },
                }
              );
            },
            B = function (t) {
              return (
                void 0 === t && (t = {}),
                {
                  options: t,
                  fn(e) {
                    const {
                        x: i,
                        y: n,
                        placement: s,
                        rects: a,
                        middlewareData: l,
                      } = e,
                      {
                        offset: c = 0,
                        mainAxis: d = !0,
                        crossAxis: u = !0,
                      } = t,
                      f = { x: i, y: n },
                      p = r(s),
                      h = C(p);
                    let g = f[p],
                      m = f[h];
                    const v = "function" == typeof c ? c(e) : c,
                      y =
                        "number" == typeof v
                          ? { mainAxis: v, crossAxis: 0 }
                          : { mainAxis: 0, crossAxis: 0, ...v };
                    if (d) {
                      const t = "y" === p ? "height" : "width",
                        e = a.reference[p] - a.floating[t] + y.mainAxis,
                        i = a.reference[p] + a.reference[t] - y.mainAxis;
                      g < e ? (g = e) : g > i && (g = i);
                    }
                    if (u) {
                      var b, w, x, k;
                      const t = "y" === p ? "width" : "height",
                        e = ["top", "left"].includes(o(s)),
                        i =
                          a.reference[h] -
                          a.floating[t] +
                          (e &&
                          null != (b = null == (w = l.offset) ? void 0 : w[h])
                            ? b
                            : 0) +
                          (e ? 0 : y.crossAxis),
                        n =
                          a.reference[h] +
                          a.reference[t] +
                          (e
                            ? 0
                            : null !=
                                (x = null == (k = l.offset) ? void 0 : k[h])
                              ? x
                              : 0) -
                          (e ? y.crossAxis : 0);
                      m < i ? (m = i) : m > n && (m = n);
                    }
                    return { [p]: g, [h]: m };
                  },
                }
              );
            },
            A = function (t) {
              return (
                void 0 === t && (t = {}),
                {
                  name: "size",
                  options: t,
                  async fn(e) {
                    const {
                        placement: i,
                        rects: r,
                        platform: s,
                        elements: a,
                      } = e,
                      { apply: l = () => {}, ...c } = t,
                      u = await d(e, c),
                      p = o(i),
                      h = n(i);
                    let g, m;
                    "top" === p || "bottom" === p
                      ? ((g = p),
                        (m =
                          h ===
                          ((await (null == s.isRTL
                            ? void 0
                            : s.isRTL(a.floating)))
                            ? "start"
                            : "end")
                            ? "left"
                            : "right"))
                      : ((m = p), (g = "end" === h ? "top" : "bottom"));
                    const v = f(u.left, 0),
                      y = f(u.right, 0),
                      b = f(u.top, 0),
                      w = f(u.bottom, 0),
                      x = {
                        availableHeight:
                          r.floating.height -
                          (["left", "right"].includes(i)
                            ? 2 *
                              (0 !== b || 0 !== w ? b + w : f(u.top, u.bottom))
                            : u[g]),
                        availableWidth:
                          r.floating.width -
                          (["top", "bottom"].includes(i)
                            ? 2 *
                              (0 !== v || 0 !== y ? v + y : f(u.left, u.right))
                            : u[m]),
                      };
                    await l({ ...e, ...x });
                    const k = await s.getDimensions(a.floating);
                    return r.floating.width !== k.width ||
                      r.floating.height !== k.height
                      ? { reset: { rects: !0 } }
                      : {};
                  },
                }
              );
            },
            T = function (t) {
              return (
                void 0 === t && (t = {}),
                {
                  name: "inline",
                  options: t,
                  async fn(e) {
                    var i;
                    const {
                        placement: n,
                        elements: s,
                        rects: a,
                        platform: d,
                        strategy: p,
                      } = e,
                      { padding: h = 2, x: g, y: m } = t,
                      v = c(
                        d.convertOffsetParentRelativeRectToViewportRelativeRect
                          ? await d.convertOffsetParentRelativeRectToViewportRelativeRect(
                              {
                                rect: a.reference,
                                offsetParent: await (null == d.getOffsetParent
                                  ? void 0
                                  : d.getOffsetParent(s.floating)),
                                strategy: p,
                              },
                            )
                          : a.reference,
                      ),
                      y =
                        null !=
                        (i = await (null == d.getClientRects
                          ? void 0
                          : d.getClientRects(s.reference)))
                          ? i
                          : [],
                      b = l(h),
                      w = await d.getElementRects({
                        reference: {
                          getBoundingClientRect: function () {
                            var t;
                            if (
                              2 === y.length &&
                              y[0].left > y[1].right &&
                              null != g &&
                              null != m
                            )
                              return null !=
                                (t = y.find(
                                  (t) =>
                                    g > t.left - b.left &&
                                    g < t.right + b.right &&
                                    m > t.top - b.top &&
                                    m < t.bottom + b.bottom,
                                ))
                                ? t
                                : v;
                            if (y.length >= 2) {
                              if ("x" === r(n)) {
                                const t = y[0],
                                  e = y[y.length - 1],
                                  i = "top" === o(n),
                                  r = t.top,
                                  s = e.bottom,
                                  a = i ? t.left : e.left,
                                  l = i ? t.right : e.right;
                                return {
                                  top: r,
                                  bottom: s,
                                  left: a,
                                  right: l,
                                  width: l - a,
                                  height: s - r,
                                  x: a,
                                  y: r,
                                };
                              }
                              const t = "left" === o(n),
                                e = f(...y.map((t) => t.right)),
                                i = u(...y.map((t) => t.left)),
                                s = y.filter((o) =>
                                  t ? o.left === i : o.right === e,
                                ),
                                a = s[0].top,
                                l = s[s.length - 1].bottom;
                              return {
                                top: a,
                                bottom: l,
                                left: i,
                                right: e,
                                width: e - i,
                                height: l - a,
                                x: i,
                                y: a,
                              };
                            }
                            return v;
                          },
                        },
                        floating: s.floating,
                        strategy: p,
                      });
                    return a.reference.x !== w.reference.x ||
                      a.reference.y !== w.reference.y ||
                      a.reference.width !== w.reference.width ||
                      a.reference.height !== w.reference.height
                      ? { reset: { rects: w } }
                      : {};
                  },
                }
              );
            };
          function D(t) {
            return t && t.document && t.location && t.alert && t.setInterval;
          }
          function R(t) {
            if (null == t) return window;
            if (!D(t)) {
              const e = t.ownerDocument;
              return (e && e.defaultView) || window;
            }
            return t;
          }
          function M(t) {
            return R(t).getComputedStyle(t);
          }
          function H(t) {
            return D(t) ? "" : t ? (t.nodeName || "").toLowerCase() : "";
          }
          function j() {
            const t = navigator.userAgentData;
            return null != t && t.brands
              ? t.brands.map((t) => t.brand + "/" + t.version).join(" ")
              : navigator.userAgent;
          }
          function W(t) {
            return t instanceof R(t).HTMLElement;
          }
          function z(t) {
            return t instanceof R(t).Element;
          }
          function V(t) {
            return (
              "undefined" != typeof ShadowRoot &&
              (t instanceof R(t).ShadowRoot || t instanceof ShadowRoot)
            );
          }
          function F(t) {
            const {
              overflow: e,
              overflowX: i,
              overflowY: o,
              display: n,
            } = M(t);
            return (
              /auto|scroll|overlay|hidden/.test(e + o + i) &&
              !["inline", "contents"].includes(n)
            );
          }
          function I(t) {
            return ["table", "td", "th"].includes(H(t));
          }
          function N(t) {
            const e = /firefox/i.test(j()),
              i = M(t);
            return (
              "none" !== i.transform ||
              "none" !== i.perspective ||
              (e && "filter" === i.willChange) ||
              (e && !!i.filter && "none" !== i.filter) ||
              ["transform", "perspective"].some((t) =>
                i.willChange.includes(t),
              ) ||
              ["paint", "layout", "strict", "content"].some((t) => {
                const e = i.contain;
                return null != e && e.includes(t);
              })
            );
          }
          function G() {
            return !/^((?!chrome|android).)*safari/i.test(j());
          }
          function q(t) {
            return ["html", "body", "#document"].includes(H(t));
          }
          const $ = Math.min,
            Y = Math.max,
            X = Math.round;
          function Z(t, e, i) {
            var o, n, r, s;
            void 0 === e && (e = !1), void 0 === i && (i = !1);
            const a = t.getBoundingClientRect();
            let l = 1,
              c = 1;
            e &&
              W(t) &&
              ((l = (t.offsetWidth > 0 && X(a.width) / t.offsetWidth) || 1),
              (c = (t.offsetHeight > 0 && X(a.height) / t.offsetHeight) || 1));
            const d = z(t) ? R(t) : window,
              u = !G() && i,
              f =
                (a.left +
                  (u &&
                  null !=
                    (o = null == (n = d.visualViewport) ? void 0 : n.offsetLeft)
                    ? o
                    : 0)) /
                l,
              p =
                (a.top +
                  (u &&
                  null !=
                    (r = null == (s = d.visualViewport) ? void 0 : s.offsetTop)
                    ? r
                    : 0)) /
                c,
              h = a.width / l,
              g = a.height / c;
            return {
              width: h,
              height: g,
              top: p,
              right: f + h,
              bottom: p + g,
              left: f,
              x: f,
              y: p,
            };
          }
          function J(t) {
            return ((e = t),
            (e instanceof R(e).Node ? t.ownerDocument : t.document) ||
              window.document).documentElement;
            var e;
          }
          function U(t) {
            return z(t)
              ? { scrollLeft: t.scrollLeft, scrollTop: t.scrollTop }
              : { scrollLeft: t.pageXOffset, scrollTop: t.pageYOffset };
          }
          function K(t) {
            return Z(J(t)).left + U(t).scrollLeft;
          }
          function Q(t, e, i) {
            const o = W(e),
              n = J(e),
              r = Z(
                t,
                o &&
                  (function (t) {
                    const e = Z(t);
                    return (
                      X(e.width) !== t.offsetWidth ||
                      X(e.height) !== t.offsetHeight
                    );
                  })(e),
                "fixed" === i,
              );
            let s = { scrollLeft: 0, scrollTop: 0 };
            const a = { x: 0, y: 0 };
            if (o || (!o && "fixed" !== i))
              if ((("body" !== H(e) || F(n)) && (s = U(e)), W(e))) {
                const t = Z(e, !0);
                (a.x = t.x + e.clientLeft), (a.y = t.y + e.clientTop);
              } else n && (a.x = K(n));
            return {
              x: r.left + s.scrollLeft - a.x,
              y: r.top + s.scrollTop - a.y,
              width: r.width,
              height: r.height,
            };
          }
          function tt(t) {
            return "html" === H(t)
              ? t
              : t.assignedSlot ||
                  t.parentNode ||
                  (V(t) ? t.host : null) ||
                  J(t);
          }
          function et(t) {
            return W(t) && "fixed" !== M(t).position ? t.offsetParent : null;
          }
          function it(t) {
            const e = R(t);
            let i = et(t);
            for (; i && I(i) && "static" === M(i).position; ) i = et(i);
            return i &&
              ("html" === H(i) ||
                ("body" === H(i) && "static" === M(i).position && !N(i)))
              ? e
              : i ||
                  (function (t) {
                    let e = tt(t);
                    for (V(e) && (e = e.host); W(e) && !q(e); ) {
                      if (N(e)) return e;
                      {
                        const t = e.parentNode;
                        e = V(t) ? t.host : t;
                      }
                    }
                    return null;
                  })(t) ||
                  e;
          }
          function ot(t) {
            if (W(t)) return { width: t.offsetWidth, height: t.offsetHeight };
            const e = Z(t);
            return { width: e.width, height: e.height };
          }
          function nt(t) {
            const e = tt(t);
            return q(e) ? t.ownerDocument.body : W(e) && F(e) ? e : nt(e);
          }
          function rt(t, e) {
            var i;
            void 0 === e && (e = []);
            const o = nt(t),
              n = o === (null == (i = t.ownerDocument) ? void 0 : i.body),
              r = R(o),
              s = n ? [r].concat(r.visualViewport || [], F(o) ? o : []) : o,
              a = e.concat(s);
            return n ? a : a.concat(rt(s));
          }
          function st(t, e, i) {
            return "viewport" === e
              ? c(
                  (function (t, e) {
                    const i = R(t),
                      o = J(t),
                      n = i.visualViewport;
                    let r = o.clientWidth,
                      s = o.clientHeight,
                      a = 0,
                      l = 0;
                    if (n) {
                      (r = n.width), (s = n.height);
                      const t = G();
                      (t || (!t && "fixed" === e)) &&
                        ((a = n.offsetLeft), (l = n.offsetTop));
                    }
                    return { width: r, height: s, x: a, y: l };
                  })(t, i),
                )
              : z(e)
                ? (function (t, e) {
                    const i = Z(t, !1, "fixed" === e),
                      o = i.top + t.clientTop,
                      n = i.left + t.clientLeft;
                    return {
                      top: o,
                      left: n,
                      x: n,
                      y: o,
                      right: n + t.clientWidth,
                      bottom: o + t.clientHeight,
                      width: t.clientWidth,
                      height: t.clientHeight,
                    };
                  })(e, i)
                : c(
                    (function (t) {
                      var e;
                      const i = J(t),
                        o = U(t),
                        n = null == (e = t.ownerDocument) ? void 0 : e.body,
                        r = Y(
                          i.scrollWidth,
                          i.clientWidth,
                          n ? n.scrollWidth : 0,
                          n ? n.clientWidth : 0,
                        ),
                        s = Y(
                          i.scrollHeight,
                          i.clientHeight,
                          n ? n.scrollHeight : 0,
                          n ? n.clientHeight : 0,
                        );
                      let a = -o.scrollLeft + K(t);
                      const l = -o.scrollTop;
                      return (
                        "rtl" === M(n || i).direction &&
                          (a += Y(i.clientWidth, n ? n.clientWidth : 0) - r),
                        { width: r, height: s, x: a, y: l }
                      );
                    })(J(t)),
                  );
          }
          function at(t) {
            const e = rt(t),
              i = (function (t, e) {
                let i = t;
                for (
                  ;
                  i &&
                  !q(i) &&
                  !e.includes(i) &&
                  (!z(i) || !["absolute", "fixed"].includes(M(i).position));

                ) {
                  const t = tt(i);
                  i = V(t) ? t.host : t;
                }
                return i;
              })(t, e);
            let o = null;
            if (i && W(i)) {
              const t = it(i);
              F(i) ? (o = i) : W(t) && (o = t);
            }
            return z(o)
              ? e.filter(
                  (t) =>
                    o &&
                    z(t) &&
                    (function (t, e) {
                      const i =
                        null == e.getRootNode ? void 0 : e.getRootNode();
                      if (t.contains(e)) return !0;
                      if (i && V(i)) {
                        let i = e;
                        do {
                          if (i && t === i) return !0;
                          i = i.parentNode || i.host;
                        } while (i);
                      }
                      return !1;
                    })(t, o) &&
                    "body" !== H(t),
                )
              : [];
          }
          const lt = {
            getClippingRect: function (t) {
              let { element: e, boundary: i, rootBoundary: o, strategy: n } = t;
              const r = [
                  ...("clippingAncestors" === i ? at(e) : [].concat(i)),
                  o,
                ],
                s = r[0],
                a = r.reduce(
                  (t, i) => {
                    const o = st(e, i, n);
                    return (
                      (t.top = Y(o.top, t.top)),
                      (t.right = $(o.right, t.right)),
                      (t.bottom = $(o.bottom, t.bottom)),
                      (t.left = Y(o.left, t.left)),
                      t
                    );
                  },
                  st(e, s, n),
                );
              return {
                width: a.right - a.left,
                height: a.bottom - a.top,
                x: a.left,
                y: a.top,
              };
            },
            convertOffsetParentRelativeRectToViewportRelativeRect: function (
              t,
            ) {
              let { rect: e, offsetParent: i, strategy: o } = t;
              const n = W(i),
                r = J(i);
              if (i === r) return e;
              let s = { scrollLeft: 0, scrollTop: 0 };
              const a = { x: 0, y: 0 };
              if (
                (n || (!n && "fixed" !== o)) &&
                (("body" !== H(i) || F(r)) && (s = U(i)), W(i))
              ) {
                const t = Z(i, !0);
                (a.x = t.x + i.clientLeft), (a.y = t.y + i.clientTop);
              }
              return {
                ...e,
                x: e.x - s.scrollLeft + a.x,
                y: e.y - s.scrollTop + a.y,
              };
            },
            isElement: z,
            getDimensions: ot,
            getOffsetParent: it,
            getDocumentElement: J,
            getElementRects: (t) => {
              let { reference: e, floating: i, strategy: o } = t;
              return {
                reference: Q(e, it(i), o),
                floating: { ...ot(i), x: 0, y: 0 },
              };
            },
            getClientRects: (t) => Array.from(t.getClientRects()),
            isRTL: (t) => "rtl" === M(t).direction,
          };
          function ct(t, e, i, o) {
            void 0 === o && (o = {});
            const {
                ancestorScroll: n = !0,
                ancestorResize: r = !0,
                elementResize: s = !0,
                animationFrame: a = !1,
              } = o,
              l = n && !a,
              c = l || r ? [...(z(t) ? rt(t) : []), ...rt(e)] : [];
            c.forEach((t) => {
              l && t.addEventListener("scroll", i, { passive: !0 }),
                r && t.addEventListener("resize", i);
            });
            let d,
              u = null;
            if (s) {
              let o = !0;
              (u = new ResizeObserver(() => {
                o || i(), (o = !1);
              })),
                z(t) && !a && u.observe(t),
                u.observe(e);
            }
            let f = a ? Z(t) : null;
            return (
              a &&
                (function e() {
                  const o = Z(t);
                  !f ||
                    (o.x === f.x &&
                      o.y === f.y &&
                      o.width === f.width &&
                      o.height === f.height) ||
                    i(),
                    (f = o),
                    (d = requestAnimationFrame(e));
                })(),
              i(),
              () => {
                var t;
                c.forEach((t) => {
                  l && t.removeEventListener("scroll", i),
                    r && t.removeEventListener("resize", i);
                }),
                  null == (t = u) || t.disconnect(),
                  (u = null),
                  a && cancelAnimationFrame(d);
              }
            );
          }
          const dt = (t, e, i) =>
            (async (t, e, i) => {
              const {
                  placement: o = "bottom",
                  strategy: n = "absolute",
                  middleware: r = [],
                  platform: s,
                } = i,
                l = await (null == s.isRTL ? void 0 : s.isRTL(e));
              let c = await s.getElementRects({
                  reference: t,
                  floating: e,
                  strategy: n,
                }),
                { x: d, y: u } = a(c, o, l),
                f = o,
                p = {},
                h = 0;
              for (let i = 0; i < r.length; i++) {
                const { name: g, fn: m } = r[i],
                  {
                    x: v,
                    y,
                    data: b,
                    reset: w,
                  } = await m({
                    x: d,
                    y: u,
                    initialPlacement: o,
                    placement: f,
                    strategy: n,
                    middlewareData: p,
                    rects: c,
                    platform: s,
                    elements: { reference: t, floating: e },
                  });
                (d = null != v ? v : d),
                  (u = null != y ? y : u),
                  (p = { ...p, [g]: { ...p[g], ...b } }),
                  w &&
                    h <= 50 &&
                    (h++,
                    "object" == typeof w &&
                      (w.placement && (f = w.placement),
                      w.rects &&
                        (c =
                          !0 === w.rects
                            ? await s.getElementRects({
                                reference: t,
                                floating: e,
                                strategy: n,
                              })
                            : w.rects),
                      ({ x: d, y: u } = a(c, f, l))),
                    (i = -1));
              }
              return {
                x: d,
                y: u,
                placement: f,
                strategy: n,
                middlewareData: p,
              };
            })(t, e, { platform: lt, ...i });
        },
        131: (t, e, i) => {
          i.p;
        },
        797: function (t, e, i) {
          var o =
              (this && this.__createBinding) ||
              (Object.create
                ? function (t, e, i, o) {
                    void 0 === o && (o = i);
                    var n = Object.getOwnPropertyDescriptor(e, i);
                    (n &&
                      !("get" in n
                        ? !e.__esModule
                        : n.writable || n.configurable)) ||
                      (n = {
                        enumerable: !0,
                        get: function () {
                          return e[i];
                        },
                      }),
                      Object.defineProperty(t, o, n);
                  }
                : function (t, e, i, o) {
                    void 0 === o && (o = i), (t[o] = e[i]);
                  }),
            n =
              (this && this.__setModuleDefault) ||
              (Object.create
                ? function (t, e) {
                    Object.defineProperty(t, "default", {
                      enumerable: !0,
                      value: e,
                    });
                  }
                : function (t, e) {
                    t.default = e;
                  }),
            r =
              (this && this.__importStar) ||
              function (t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t)
                  for (var i in t)
                    "default" !== i &&
                      Object.prototype.hasOwnProperty.call(t, i) &&
                      o(e, t, i);
                return n(e, t), e;
              },
            s =
              (this && this.__importDefault) ||
              function (t) {
                return t && t.__esModule ? t : { default: t };
              };
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.TourGuideClient = void 0);
          const a = i(693),
            l = s(i(121)),
            c = i(319),
            d = i(166),
            u = i(737),
            f = r(i(483)),
            p = s(i(971)),
            h = s(i(330)),
            g = s(i(340)),
            m = s(i(544)),
            v = r(i(612)),
            y = r(i(283)),
            b = s(i(717));
          e.TourGuideClient = class {
            constructor(t) {
              (this.group = ""),
                (this.isVisible = !1),
                (this.activeStep = 0),
                (this.tourSteps = []),
                (this.options = b.default),
                (this.isFinished = y.getIsFinished),
                (this._promiseWaiting = !1),
                (this.createTourGuideBackdrop = c.createTourGuideBackdrop),
                (this.computeBackdropAttributes = c.computeBackdropAttributes),
                (this.createTourGuideDialog = a.createTourGuideDialog),
                (this.start = h.default),
                (this.visitStep = f.default),
                (this.addSteps = p.default),
                (this.nextStep = f.handleVisitNextStep),
                (this.prevStep = f.handleVisitPrevStep),
                (this.exit = m.default),
                (this.refresh = v.default),
                (this.refreshDialog = v.handleRefreshDialog),
                (this.finishTour = y.default),
                (this.updatePositions = l.default),
                (this.deleteFinishedTour = y.delFinishedTour),
                (this.setOptions = g.default),
                (this.initListeners = u.handleInitListeners),
                (this.destroyListeners = u.handleDestroyListeners),
                (this._trackedEvents = {
                  nextBtnClickEvent: {
                    initialized: !1,
                    fn: this.nextStep.bind(this),
                  },
                  prevBtnClickEvent: {
                    initialized: !1,
                    fn: this.prevStep.bind(this),
                  },
                  closeBtnClickEvent: {
                    initialized: !1,
                    fn: this.exit.bind(this),
                  },
                  keyPressEvent: {
                    initialized: !1,
                    fn: u.keyPressHandler.bind(this),
                  },
                  outsideClickEvent: {
                    initialized: !1,
                    fn: u.clickOutsideHandler.bind(this),
                  },
                }),
                (this.onFinish = d.handleOnFinish),
                (this.onBeforeExit = d.handleOnBeforeExit),
                (this.onAfterExit = d.handleOnAfterExit),
                (this.onBeforeStepChange = d.handleOnBeforeStepChange),
                (this.onAfterStepChange = d.handleOnAfterStepChange),
                (this.dialog = document.createElement("div")),
                (this.backdrop = document.createElement("div")),
                (this.options = b.default),
                t && Object.assign(this.options, t),
                this.createTourGuideDialog().catch((t) => {
                  this.options.debug && console.warn(t);
                }),
                this.createTourGuideBackdrop();
            }
          };
        },
        319: (t, e) => {
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.computeBackdropPosition =
              e.computeBackdropAttributes =
              e.createTourGuideBackdrop =
                void 0),
            (e.createTourGuideBackdrop = function () {
              (this.backdrop = document.createElement("div")),
                this.computeBackdropAttributes(),
                document.body.append(this.backdrop);
            }),
            (e.computeBackdropAttributes = function () {
              this.options &&
                ((this.backdrop.className = "tg-backdrop"),
                (this.backdrop.style.boxShadow =
                  this.options.backdropColor +
                  " 0 0 1px 2px, " +
                  this.options.backdropColor +
                  " 0 0 0 1000vh"),
                this.options.backdropClass &&
                  this.backdrop.classList.add(this.options.backdropClass),
                this.options.dialogAnimate &&
                  this.backdrop.classList.add("tg-backdrop-animate"));
            }),
            (e.computeBackdropPosition = function (t) {
              return new Promise(async (e, i) => {
                if (void 0 === t.options.targetPadding)
                  return i("Options failed to initialize");
                if (!t.backdrop) return i("No backdrop element initialized");
                const o = t.tourSteps[t.activeStep],
                  n = o.target,
                  r = n.getBoundingClientRect(),
                  s =
                    r.width + t.options.targetPadding >
                    document.documentElement.clientWidth;
                if (n === document.body) {
                  const e = 0;
                  (r.width = e),
                    (r.height = e),
                    (t.backdrop.style.position = "fixed"),
                    (t.backdrop.style.top = window.innerHeight / 2.5 + "px"),
                    (t.backdrop.style.left = window.innerWidth / 2 + "px");
                } else
                  o.fixed
                    ? ((t.backdrop.style.position = "fixed"),
                      (t.backdrop.style.top =
                        r.top - t.options.targetPadding / 2 + "px"),
                      (t.backdrop.style.left =
                        (s ? r.x : r.x - t.options.targetPadding / 2) + "px"))
                    : ((t.backdrop.style.position = "absolute"),
                      (t.backdrop.style.top =
                        window.scrollY +
                        r.top -
                        t.options.targetPadding / 2 +
                        "px"),
                      (t.backdrop.style.left =
                        (s ? r.x : r.x - t.options.targetPadding / 2) + "px"));
                (t.backdrop.style.pointerEvents = o.propagateEvents
                  ? "none"
                  : ""),
                  (t.backdrop.style.width =
                    (s ? r.width : r.width + t.options.targetPadding) + "px"),
                  (t.backdrop.style.height =
                    (r.height ? r.height + t.options.targetPadding : r.height) +
                    "px"),
                  e(!0);
              });
            });
        },
        166: (t, e) => {
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.handleOnAfterStepChange =
              e.handleOnBeforeStepChange =
              e.handleOnAfterExit =
              e.handleOnBeforeExit =
              e.handleOnFinish =
                void 0),
            (e.handleOnFinish = function (t) {
              if ("function" != typeof t)
                throw new Error(
                  "Provided callback for onFinish was not a function",
                );
              this._globalFinishCallback = t;
            }),
            (e.handleOnBeforeExit = function (t) {
              if ("function" != typeof t)
                throw new Error(
                  "Provided callback for onBeforeExit was not a function",
                );
              this._globalBeforeExitCallback = t;
            }),
            (e.handleOnAfterExit = function (t) {
              if ("function" != typeof t)
                throw new Error(
                  "Provided callback for onAfterExit was not a function",
                );
              this._globalAfterExitCallback = t;
            }),
            (e.handleOnBeforeStepChange = function (t) {
              if ("function" != typeof t)
                throw new Error(
                  "Provided callback for onBeforeStepChange was not a function",
                );
              this._globalBeforeChangeCallback = t;
            }),
            (e.handleOnAfterStepChange = function (t) {
              if ("function" != typeof t)
                throw new Error(
                  "Provided callback for onAfterStepChange was not a function",
                );
              this._globalAfterChangeCallback = t;
            });
        },
        693: (t, e, i) => {
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.computeDialogPosition =
              e.updateDialogHtml =
              e.renderDialogHtml =
              e.createTourGuideDialog =
                void 0);
          const o = i(500),
            n = i(362);
          async function r(t) {
            t.options.dialogClass &&
              t.dialog.classList.add(t.options.dialogClass),
              t.options.dialogZ &&
                (t.dialog.style.zIndex = String(t.options.dialogZ)),
              (t.dialog.style.width = t.options.dialogWidth
                ? t.options.dialogWidth + "px"
                : "auto"),
              t.options.dialogMaxWidth &&
                (t.dialog.style.maxWidth = t.options.dialogMaxWidth + "px");
            let e = "";
            if (
              ((e += "<div class='tg-dialog-header'>"),
              (e +=
                '<div class="tg-dialog-title" id="tg-dialog-title">\x3c!-- JS rendered --\x3e</div>'),
              t.options.closeButton &&
                ((e +=
                  '<div class="tg-dialog-close-btn" id="tg-dialog-close-btn">'),
                (e +=
                  ' <svg width="12px" height="12px" id="Layer_1" version="1.1" viewBox="0 0 512 512" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><path d="M443.6,387.1L312.4,255.4l131.5-130c5.4-5.4,5.4-14.2,0-19.6l-37.4-37.6c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4  L256,197.8L124.9,68.3c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4L68,105.9c-5.4,5.4-5.4,14.2,0,19.6l131.5,130L68.4,387.1  c-2.6,2.6-4.1,6.1-4.1,9.8c0,3.7,1.4,7.2,4.1,9.8l37.4,37.6c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1L256,313.1l130.7,131.1  c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1l37.4-37.6c2.6-2.6,4.1-6.1,4.1-9.8C447.7,393.2,446.2,389.7,443.6,387.1z"/></svg>'),
                (e += "</div>")),
              (e += '<div class="tg-dialog-spinner" id="tg-dialog-spinner">'),
              (e +=
                '<svg fill="#000000" width="12" height="12" viewBox="0 0 20 20" stroke="#000000" stroke-width="0.8"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M10,1V3a7,7,0,1,1-7,7H1a9,9,0,1,0,9-9Z"></path> </g> </g></svg>'),
              (e += "</div>"),
              (e += "</div>"),
              t.options.progressBar &&
                (e +=
                  '<div class="tg-dialog-progress-bar"><span class="tg-bar" id="tg-dialog-progbar"></span></div>'),
              (e +=
                '<div class="tg-dialog-body" id="tg-dialog-body">\x3c!-- JS rendered --\x3e</div>'),
              t.options.showStepDots && "body" === t.options.stepDotsPlacement)
            ) {
              const t = (0, o.dotsWrapperHtmlString)();
              t && (e += t);
            }
            e += '<div class="tg-dialog-footer">';
            let i = "tg-dialog-btn",
              n = "false";
            if (
              (0 === t.activeStep && ((n = "true"), (i += " disabled")),
              t.options.showButtons &&
                !t.options.hidePrev &&
                (e +=
                  '<button type="button" class="' +
                  i +
                  '" id="tg-dialog-prev-btn" disabled="' +
                  n +
                  `">${t.options.prevLabel}</button>`),
              (e += '<div class="tg-dialog-footer-sup">'),
              t.options.showStepDots &&
                "footer" === t.options.stepDotsPlacement)
            ) {
              const t = (0, o.dotsWrapperHtmlString)();
              t && (e += t);
            }
            return (
              t.options.showStepProgress &&
                (e +=
                  '<span class="tg-step-progress" id="tg-step-progress">\x3c!-- JS rendered --\x3e</span>'),
              (e += "</div>"),
              t.options.showButtons &&
                !t.options.hideNext &&
                (e += `<button type="button" class="tg-dialog-btn" id="tg-dialog-next-btn">${t.options.nextLabel}</button>`),
              (e += "</div>"),
              (e +=
                '<div id="tg-arrow" class="tg-arrow"></div>\x3c!-- end tour arrow --\x3e'),
              e
            );
          }
          (e.createTourGuideDialog = async function () {
            return (
              (this.dialog = document.createElement("div")),
              this.dialog.classList.add("tg-dialog"),
              await r(this).then((t) => {
                this.dialog.innerHTML = t;
              }),
              document.body.append(this.dialog),
              !0
            );
          }),
            (e.renderDialogHtml = r),
            (e.updateDialogHtml = function (t) {
              return new Promise((e, i) => {
                const n = t.tourSteps[t.activeStep];
                n || i("No active step data");
                const r = document.getElementById("tg-dialog-title");
                r && (r.innerHTML = n.title ? n.title : "");
                const s = document.getElementById("tg-dialog-body");
                s &&
                  n &&
                  ("string" == typeof n.content
                    ? (s.innerHTML = n.content ? n.content : "")
                    : ((s.innerHTML = ""), s.append(n.content)));
                const a = document.getElementById("tg-dialog-dots");
                a &&
                  t.options.showStepDots &&
                  (0, o.computeDots)(t) &&
                  (a.innerHTML = (0, o.computeDots)(t));
                const l = document.getElementById("tg-dialog-prev-btn");
                l &&
                  (0 === t.activeStep
                    ? (l.classList.add("disabled"),
                      l.setAttribute("disabled", "true"))
                    : (l.classList.remove("disabled"),
                      l.removeAttribute("disabled")));
                const c = document.getElementById("tg-dialog-next-btn");
                c &&
                  (c.innerHTML =
                    t.activeStep + 1 >= t.tourSteps.length
                      ? t.options.finishLabel
                      : t.options.nextLabel);
                const d = document.getElementById("tg-step-progress");
                d &&
                  (d.innerHTML = t.activeStep + 1 + "/" + t.tourSteps.length);
                const u = document.getElementById("tg-dialog-progbar");
                u &&
                  (t.options.progressBar &&
                    (u.style.backgroundColor = t.options.progressBar),
                  (u.style.width =
                    ((t.activeStep + 1) / t.tourSteps.length) * 100 + "%")),
                  e(!0);
              });
            }),
            (e.computeDialogPosition = function (t) {
              return new Promise(async (e) => {
                const i = document.querySelector("#tg-arrow");
                let o =
                  t.tourSteps[t.activeStep].dialogTarget ||
                  t.tourSteps[t.activeStep].target;
                if (o === document.body)
                  return (
                    Object.assign(t.dialog.style, {
                      top:
                        window.innerHeight / 2.25 -
                        t.dialog.clientHeight / 2 +
                        "px",
                      left:
                        window.innerWidth / 2 - t.dialog.clientWidth / 2 + "px",
                      position: "fixed",
                    }),
                    t.dialog.classList.add("tg-dialog-fixed"),
                    i && (i.style.display = "none"),
                    e(!0)
                  );
                (t.dialog.style.position = "absolute"),
                  t.dialog.classList.remove("tg-dialog-fixed"),
                  i && (i.style.display = "inline-block"),
                  (0, n.computePosition)(o, t.dialog, {
                    placement: t.options.dialogPlacement,
                    middleware: [
                      (0, n.autoPlacement)({ autoAlignment: !0, padding: 5 }),
                      (0, n.shift)({
                        crossAxis: t.options.allowDialogOverlap,
                        padding: 15,
                      }),
                      (0, n.arrow)({ element: i }),
                      (0, n.offset)(20),
                    ],
                  }).then(
                    ({ x: o, y: n, placement: r, middlewareData: s }) => (
                      Object.assign(t.dialog.style, {
                        left: `${o}px`,
                        top: `${n}px`,
                      }),
                      s.arrow &&
                        i &&
                        Object.assign(
                          i.style,
                          (function (t, e, i) {
                            const o = t?.x || 0,
                              n = t?.y || 0,
                              r = 10,
                              s = {
                                top: "bottom",
                                right: "left",
                                bottom: "top",
                                left: "right",
                              }[e.split("-")[0]],
                              a = i.clientWidth - r,
                              l = i.clientHeight - r,
                              c = Math.abs(n - l) <= r,
                              d = Math.abs(o - a) <= r,
                              u = Math.abs(n) <= r,
                              f = Math.abs(o) <= r,
                              p =
                                0 !== t?.centerOffset || ((f || d) && (u || c));
                            return {
                              left: f
                                ? "right" === s
                                  ? ""
                                  : "0"
                                : d
                                  ? `${a}px`
                                  : `${o}px`,
                              top: u
                                ? "bottom" === s
                                  ? ""
                                  : "0"
                                : c
                                  ? `${l}px`
                                  : `${n}px`,
                              [s]: p ? "0" : "-5px",
                              transform: p ? "none" : "rotate(45deg)",
                            };
                          })(s.arrow, r, t.dialog),
                        ),
                      e(!0)
                    ),
                  );
              });
            });
        },
        500: (t, e) => {
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.computeDots = e.dotsWrapperHtmlString = void 0),
            (e.dotsWrapperHtmlString = function () {
              const t = document.createElement("div");
              return (
                t.classList.add("tg-dialog-dots"),
                (t.id = "tg-dialog-dots"),
                t.outerHTML
              );
            }),
            (e.computeDots = (t) => {
              let e = "";
              return (
                t.tourSteps.length &&
                  t.tourSteps.forEach((i, o) => {
                    const n = document.createElement("span");
                    n.classList.add("tg-dot"),
                      o === t.activeStep && n.classList.add("tg-dot-active"),
                      (e += n.outerHTML);
                  }),
                e
              );
            });
        },
        737: (t, e) => {
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.keyPressHandler =
              e.clickOutsideHandler =
              e.handleDestroyListeners =
              e.handleInitListeners =
                void 0),
            (e.clickOutsideHandler = async function (t) {
              if (!(t.target instanceof Element)) return;
              const e = this.backdrop.getBoundingClientRect();
              if (
                t.clientX >= e.x &&
                t.clientX <= e.x + e.width &&
                t.clientY >= e.y &&
                t.clientY <= e.y + e.height
              )
                return;
              const i = this.dialog.getBoundingClientRect();
              (t.clientX >= i.x &&
                t.clientX <= i.x + i.width &&
                t.clientY >= i.y &&
                t.clientY <= i.y + i.height) ||
                this.dialog.contains(t.target) ||
                (t.preventDefault(),
                t.stopPropagation(),
                t.stopImmediatePropagation(),
                await this.exit());
            }),
            (e.keyPressHandler = async function (t) {
              return "Escape" === t.key && this.options.exitOnEscape
                ? (t.preventDefault(), void (await this.exit()))
                : "ArrowRight" === t.key && this.options.keyboardControls
                  ? (t.preventDefault(),
                    void this.visitStep("next").catch((t) => {
                      this.options.debug && console.warn(t);
                    }))
                  : "ArrowLeft" === t.key && this.options.keyboardControls
                    ? (t.preventDefault(),
                      void this.visitStep("prev").catch((t) => {
                        this.options.debug && console.warn(t);
                      }))
                    : void 0;
            }),
            (e.handleInitListeners = function () {
              const t = () => {
                  let t = document.getElementById("tg-dialog-next-btn");
                  t &&
                    !this._trackedEvents.nextBtnClickEvent.initialized &&
                    (t.addEventListener(
                      "click",
                      this._trackedEvents.nextBtnClickEvent.fn,
                    ),
                    (this._trackedEvents.nextBtnClickEvent.initialized = !0));
                },
                e = () => {
                  let t = document.getElementById("tg-dialog-prev-btn");
                  t &&
                    !this._trackedEvents.prevBtnClickEvent.initialized &&
                    (t.addEventListener(
                      "click",
                      this._trackedEvents.prevBtnClickEvent.fn,
                    ),
                    (this._trackedEvents.prevBtnClickEvent.initialized = !0));
                },
                i = () => {
                  let t = document.getElementById("tg-dialog-close-btn");
                  t &&
                    !this._trackedEvents.closeBtnClickEvent.initialized &&
                    (t.addEventListener(
                      "click",
                      this._trackedEvents.closeBtnClickEvent.fn,
                      !1,
                    ),
                    (this._trackedEvents.closeBtnClickEvent.initialized = !0));
                },
                o = () => {
                  this._trackedEvents.outsideClickEvent.initialized ||
                    (document.body.addEventListener(
                      "click",
                      this._trackedEvents.outsideClickEvent.fn,
                      !1,
                    ),
                    (this._trackedEvents.outsideClickEvent.initialized = !0));
                },
                n = () => {
                  this._trackedEvents.keyPressEvent.initialized ||
                    (window.addEventListener(
                      "keydown",
                      this._trackedEvents.keyPressEvent.fn,
                      !1,
                    ),
                    (this._trackedEvents.keyPressEvent.initialized = !0));
                };
              return new Promise(
                (r) => (
                  this.options.showButtons && t(),
                  this.options.showButtons && e(),
                  this.options.closeButton && i(),
                  this.options.exitOnClickOutside && o(),
                  (this.options.keyboardControls ||
                    this.options.exitOnEscape) &&
                    n(),
                  r(!0)
                ),
              );
            }),
            (e.handleDestroyListeners = function () {
              const t = () => {
                  let t = document.getElementById("tg-dialog-next-btn");
                  t &&
                    (t.removeEventListener(
                      "click",
                      this._trackedEvents.nextBtnClickEvent.fn,
                    ),
                    (this._trackedEvents.nextBtnClickEvent.initialized = !1));
                },
                e = () => {
                  let t = document.getElementById("tg-dialog-prev-btn");
                  t &&
                    (t.removeEventListener(
                      "click",
                      this._trackedEvents.prevBtnClickEvent.fn,
                    ),
                    (this._trackedEvents.prevBtnClickEvent.initialized = !1));
                },
                i = () => {
                  let t = document.getElementById("tg-dialog-close-btn");
                  t &&
                    (t.removeEventListener(
                      "click",
                      this._trackedEvents.closeBtnClickEvent.fn,
                      !1,
                    ),
                    (this._trackedEvents.closeBtnClickEvent.initialized = !1));
                },
                o = () => {
                  document.body.removeEventListener(
                    "click",
                    this._trackedEvents.outsideClickEvent.fn,
                    !1,
                  ),
                    (this._trackedEvents.outsideClickEvent.initialized = !1);
                },
                n = () => {
                  window.removeEventListener(
                    "keydown",
                    this._trackedEvents.keyPressEvent.fn,
                    !1,
                  ),
                    (this._trackedEvents.keyPressEvent.initialized = !1);
                };
              return new Promise(
                (r) => (
                  this.options.showButtons && t(),
                  this.options.showButtons && e(),
                  this.options.closeButton && i(),
                  this.options.exitOnClickOutside && o(),
                  (this.options.keyboardControls ||
                    this.options.exitOnEscape) &&
                    n(),
                  r(!0)
                ),
              );
            });
        },
        121: (t, e, i) => {
          Object.defineProperty(e, "__esModule", { value: !0 });
          const o = i(319),
            n = i(693);
          e.default = function () {
            return new Promise(async (t) => {
              (this.backdrop.style.display = "block"),
                await (0, o.computeBackdropPosition)(this),
                (this.dialog.style.display = "block"),
                this.options.dialogAnimate &&
                  this.isVisible &&
                  this.dialog.classList.add("animate-position"),
                await (0, n.computeDialogPosition)(this),
                this.options.dialogAnimate &&
                  setTimeout(() => {
                    this.dialog.classList.remove("animate-position");
                  }, 300),
                (this.isVisible = !0),
                window.onresize ||
                  (window.onresize = () => {
                    (0, o.computeBackdropPosition)(this),
                      (0, n.computeDialogPosition)(this);
                  }),
                window.onscroll ||
                  (window.onscroll = () => {
                    (0, n.computeDialogPosition)(this);
                  }),
                await setTimeout(() => t(!0), 300);
            });
          };
        },
        830: (t, e) => {
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.default = (t, e) => {
              e.scrollIntoView({
                behavior: t.options.autoScrollSmooth ? "smooth" : "auto",
                block: "end",
                inline: "nearest",
              });
            });
        },
        755: (t, e) => {
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.default = async function (t) {
              return new Promise(async (e, i) => {
                let o = [];
                t.options.steps &&
                  t.options.steps.length &&
                  (o = t.options.steps.map((e) => {
                    if ("string" == typeof e.target) {
                      const i = document.querySelector(e.target);
                      i &&
                        ((e.target = i),
                        t.options.targetPadding && t.options.autoScrollOffset
                          ? (i.style.scrollMargin =
                              t.options.autoScrollOffset +
                              t.options.targetPadding +
                              "px 0")
                          : (i.style.scrollMargin = "30px 0"));
                    }
                    if (
                      (e.target || (e.target = document.body),
                      "string" == typeof e.dialogTarget)
                    ) {
                      const t = document.querySelector(e.dialogTarget);
                      e.dialogTarget = t || void 0;
                    }
                    return e;
                  }));
                const n = document.querySelectorAll("[data-tg-tour]");
                return (
                  n &&
                    n.forEach((e) => {
                      const i = e.getAttribute("data-tg-title"),
                        n = e.getAttribute("data-tg-tour"),
                        r = e.getAttribute("data-tg-group"),
                        s = e.getAttribute("data-tg-order"),
                        a = e.getAttribute("data-tg-fixed"),
                        l = e.getAttribute("data-tg-margin"),
                        c = e.getAttribute("data-tg-dialog-target"),
                        d = e.getAttribute("data-tg-propagate-events");
                      t.options.targetPadding && t.options.autoScrollOffset
                        ? (e.style.scrollMargin =
                            (l
                              ? l + t.options.targetPadding
                              : t.options.autoScrollOffset +
                                t.options.targetPadding) + "px 0")
                        : (e.style.scrollMargin = (l || "30") + "px 0"),
                        o.push({
                          title: i || void 0,
                          order: s ? Number(s) : 999,
                          target: e,
                          dialogTarget: c ? document.querySelector(c) : void 0,
                          content: n || void 0,
                          fixed: null !== a && "false" !== a,
                          group: r || void 0,
                          propagateEvents: null !== d && "false" !== d,
                        });
                    }),
                  t.group && (o = o.filter((e) => e.group === t.group)),
                  o.forEach((t, e) => (t._index = e)),
                  o.sort(function (t, e) {
                    return t.order == e.order
                      ? t._index - e._index
                      : t.order - e.order;
                  }),
                  (t.tourSteps = o),
                  t.tourSteps.length
                    ? e(!0)
                    : i(
                        "No tour steps detected" +
                          (t.group ? " in group: " + t.group : ""),
                      )
                );
              });
            });
        },
        971: function (t, e, i) {
          var o =
            (this && this.__importDefault) ||
            function (t) {
              return t && t.__esModule ? t : { default: t };
            };
          Object.defineProperty(e, "__esModule", { value: !0 });
          const n = o(i(755)),
            r = i(693),
            s = o(i(570));
          e.default = async function (t) {
            this.options.steps &&
              (this.options.steps.push(...t),
              await (0, n.default)(this),
              this.isVisible &&
                (await (0, r.updateDialogHtml)(this).catch((t) => {
                  this.options.debug && console.warn(t);
                })),
              this.isVisible &&
                this.updatePositions().catch((t) => {
                  this.options.debug && console.warn(t);
                }),
              this.isVisible &&
                (await (0, s.default)(".tg-dialog").then(
                  async () => (
                    await this.destroyListeners(),
                    await this.initListeners(),
                    !0
                  ),
                )));
          };
        },
        544: (t, e) => {
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.default = async function () {
              return new Promise(async (t, e) => {
                if (this._promiseWaiting) return e("Promise waiting");
                if (
                  ((this._promiseWaiting = !0), this._globalBeforeExitCallback)
                )
                  try {
                    await this._globalBeforeExitCallback();
                  } catch (t) {
                    return e(t);
                  }
                return (
                  (this.dialog.style.display = "none"),
                  (this.backdrop.style.display = "none"),
                  (this.isVisible = !1),
                  this.options.rememberStep || (this.activeStep = 0),
                  this.options.debug && console.info("Tour exited"),
                  await this.destroyListeners(),
                  setTimeout(() => {
                    this._globalAfterExitCallback &&
                      this._globalAfterExitCallback();
                  }, 0),
                  (this._promiseWaiting = !1),
                  t(!0)
                );
              });
            });
        },
        283: (t, e) => {
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.delFinishedTour = e.getIsFinished = void 0),
            (e.getIsFinished = function (t = "tour") {
              return (
                !!localStorage.tg_tours_complete &&
                localStorage.tg_tours_complete.split(",").includes(t)
              );
            }),
            (e.delFinishedTour = function (t = "tour") {
              if ("all" === t)
                return void (localStorage.tg_tours_complete = null);
              const e = localStorage.tg_tours_complete.split(",");
              localStorage.tg_tours_complete = e.filter((e) => e !== t);
            }),
            (e.default = async function (t = !0, e = "tour") {
              if (this._globalFinishCallback)
                try {
                  await this._globalFinishCallback();
                } catch (t) {
                  return !1;
                }
              if (this.options.completeOnFinish) {
                if (!localStorage.tg_tours_complete)
                  return (
                    (localStorage.tg_tours_complete = [e]),
                    t && (await this.exit()),
                    void (this.activeStep = 0)
                  );
                const i = localStorage.tg_tours_complete.split(",");
                i.includes(e) ||
                  (i.push(e), (localStorage.tg_tours_complete = i));
              }
              return (
                t && (await this.exit()),
                (this.activeStep = 0),
                (this._promiseWaiting = !1),
                !0
              );
            });
        },
        612: function (t, e, i) {
          var o =
            (this && this.__importDefault) ||
            function (t) {
              return t && t.__esModule ? t : { default: t };
            };
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.handleRefreshDialog = void 0);
          const n = o(i(755)),
            r = i(693),
            s = o(i(570));
          (e.handleRefreshDialog = async function () {
            return new Promise(
              async (t, e) => (
                await (0, r.renderDialogHtml)(this)
                  .then((t) => {
                    t && (this.dialog.innerHTML = t);
                  })
                  .catch((t) => {
                    this.options.debug && console.warn(t);
                  }),
                await (0, r.updateDialogHtml)(this).catch((t) => {
                  this.options.debug && console.warn(t), e(t);
                }),
                await this.updatePositions(),
                this.isVisible &&
                  (await (0, s.default)(".tg-dialog").then(
                    async () => (
                      await this.destroyListeners(),
                      await this.initListeners(),
                      !0
                    ),
                  )),
                t(!0)
              ),
            );
          }),
            (e.default = async function () {
              return new Promise(
                async (t, e) => (
                  await (0, n.default)(this).catch((t) => e(t)),
                  this.computeBackdropAttributes(),
                  await this.refreshDialog().catch((t) => e(t)),
                  t(!0)
                ),
              );
            });
        },
        340: function (t, e, i) {
          var o =
            (this && this.__importDefault) ||
            function (t) {
              return t && t.__esModule ? t : { default: t };
            };
          Object.defineProperty(e, "__esModule", { value: !0 });
          const n = i(693),
            r = o(i(570));
          e.default = async function (t) {
            if (t)
              return (
                Object.assign(this.options, t),
                this.computeBackdropAttributes(),
                await (0, n.renderDialogHtml)(this)
                  .then((t) => {
                    t && (this.dialog.innerHTML = t);
                  })
                  .catch((t) => {
                    this.options.debug && console.warn(t);
                  }),
                await (0, n.updateDialogHtml)(this).catch((t) => {
                  this.options.debug && console.warn(t);
                }),
                this.isVisible &&
                  (await (0, r.default)(".tg-dialog").then(
                    async () => (
                      await this.destroyListeners(),
                      await this.initListeners(),
                      !0
                    ),
                  )),
                this
              );
          };
        },
        330: function (t, e, i) {
          var o =
            (this && this.__importDefault) ||
            function (t) {
              return t && t.__esModule ? t : { default: t };
            };
          Object.defineProperty(e, "__esModule", { value: !0 });
          const n = o(i(570)),
            r = o(i(755));
          e.default = async function (t) {
            return new Promise(async (e, i) => {
              if (this.isVisible)
                return (
                  this.options.debug && console.warn("Tour already active"),
                  i("Tour already active")
                );
              t && (this.group = t),
                this.options.debug && console.info("Start tour");
              const o = this;
              try {
                await (0, r.default)(o);
              } catch (t) {
                return this.options.debug && console.warn(t), i(t);
              }
              return (
                await o
                  .visitStep(this.activeStep)
                  .catch((t) => (this.options.debug && console.warn(t), i(t))),
                await (0, n.default)(".tg-dialog").then(async () => {
                  await this.initListeners(),
                    this.options.dialogAnimate &&
                      this.dialog.classList.add("animate-position");
                }),
                e(!0)
              );
            });
          };
        },
        483: function (t, e, i) {
          var o =
            (this && this.__importDefault) ||
            function (t) {
              return t && t.__esModule ? t : { default: t };
            };
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.handleVisitPrevStep =
              e.handleVisitNextStep =
              e.goToStep =
                void 0);
          const n = i(693),
            r = o(i(830));
          function s(t, e) {
            return new Promise(async (i, o) => {
              if (e >= t.tourSteps.length) return o("End of tour steps");
              if (e < 0) return o("Start of tour steps");
              const s = t.activeStep,
                a = t.tourSteps[s],
                l = t.tourSteps[e];
              if (!l || !a) return o("Step not found by index");
              if (
                (((t._globalBeforeChangeCallback && e !== s) ||
                  a.beforeLeave ||
                  l.beforeEnter) &&
                  ((t._promiseWaiting = !0),
                  t.dialog.classList.add("tg-dialog-loading")),
                t._globalBeforeChangeCallback && e !== s)
              )
                try {
                  await t._globalBeforeChangeCallback();
                } catch (t) {
                  return o(t);
                }
              if (e !== s && a.beforeLeave)
                try {
                  await a.beforeLeave(a, l);
                } catch (t) {
                  return o(t);
                }
              if (l.beforeEnter)
                try {
                  await l.beforeEnter(a, l);
                } catch (t) {
                  return o(t);
                }
              return (
                "string" == typeof l.target &&
                  (t.tourSteps[e].target = document.querySelector(l.target)),
                (l.target && t.tourSteps[e].target) ||
                  (t.tourSteps[e].target = document.body),
                (t.activeStep = Number(e)),
                await (0, n.updateDialogHtml)(t).catch((e) => {
                  t.options.debug && console.warn(e), o(e);
                }),
                t.options.autoScroll &&
                  l.target !== document.body &&
                  (await (0, r.default)(t, l.target)),
                await t.updatePositions(),
                e !== s && a.afterLeave && (await a.afterLeave(a, l)),
                l.afterEnter && (await l.afterEnter(a, l)),
                t._globalAfterChangeCallback &&
                  e !== s &&
                  (await t._globalAfterChangeCallback()),
                (t._promiseWaiting = !1),
                t.dialog.classList.remove("tg-dialog-loading"),
                i(!0)
              );
            });
          }
          (e.handleVisitNextStep = async function () {
            return new Promise(async (t, e) => {
              const i = this.activeStep + 1;
              try {
                await this.visitStep(i);
              } catch (t) {
                return e(t);
              }
              return t(!0);
            });
          }),
            (e.handleVisitPrevStep = async function () {
              return new Promise(async (t, e) => {
                const i = this.activeStep - 1;
                try {
                  await this.visitStep(i);
                } catch (t) {
                  return e(t);
                }
                return t(!0);
              });
            }),
            (e.goToStep = s),
            (e.default = async function (t) {
              return new Promise(async (e, i) =>
                this._promiseWaiting
                  ? i("Promise waiting")
                  : ("string" == typeof t &&
                      (t =
                        "next" === t
                          ? this.activeStep + 1
                          : this.activeStep - 1),
                    t >= this.tourSteps.length
                      ? void (await this.finishTour(!0, this.group))
                      : (await s(this, t).catch((t) => i(t)), e(!0))),
              );
            });
        },
        717: (t, e) => {
          Object.defineProperty(e, "__esModule", { value: !0 });
          e.default = {
            nextLabel: "Next",
            prevLabel: "Back",
            finishLabel: "Finish",
            hidePrev: !1,
            hideNext: !1,
            dialogClass: "",
            allowDialogOverlap: !1,
            dialogZ: 999,
            dialogWidth: 0,
            dialogMaxWidth: 340,
            dialogAnimate: !0,
            dialogPlacement: void 0,
            backdropClass: "",
            backdropColor: "rgba(20,20,21,0.84)",
            backdropAnimate: !0,
            targetPadding: 30,
            completeOnFinish: !0,
            showStepDots: !0,
            stepDotsPlacement: "footer",
            showButtons: !0,
            showStepProgress: !0,
            progressBar: "",
            keyboardControls: !0,
            exitOnEscape: !0,
            exitOnClickOutside: !0,
            autoScroll: !0,
            autoScrollSmooth: !0,
            autoScrollOffset: 20,
            closeButton: !0,
            rememberStep: !1,
            debug: !0,
            steps: [],
          };
        },
        570: (t, e) => {
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.default = function (t) {
              return new Promise((e) => {
                if (document.querySelector(t))
                  return e(document.querySelector(t));
                const i = new MutationObserver(() => {
                  document.querySelector(t) &&
                    (e(document.querySelector(t)), i.disconnect());
                });
                i.observe(document.body, { childList: !0, subtree: !0 });
              });
            });
        },
      },
      e = {};
    function i(o) {
      var n = e[o];
      if (void 0 !== n) return n.exports;
      var r = (e[o] = { exports: {} });
      return t[o].call(r.exports, r, r.exports, i), r.exports;
    }
    return (
      (i.d = (t, e) => {
        for (var o in e)
          i.o(e, o) &&
            !i.o(t, o) &&
            Object.defineProperty(t, o, { enumerable: !0, get: e[o] });
      }),
      (i.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e)),
      (i.r = (t) => {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(t, "__esModule", { value: !0 });
      }),
      (i.p = ""),
      i(131),
      i(797)
    );
  })(),
);
