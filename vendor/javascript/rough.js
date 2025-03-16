var rough = (function () {
  "use strict";
  function t(t, e, s) {
    if (t && t.length) {
      const [n, o] = e,
        a = (Math.PI / 180) * s,
        h = Math.cos(a),
        r = Math.sin(a);
      for (const e of t) {
        const [t, s] = e;
        (e[0] = (t - n) * h - (s - o) * r + n),
          (e[1] = (t - n) * r + (s - o) * h + o);
      }
    }
  }
  function e(t, e) {
    return t[0] === e[0] && t[1] === e[1];
  }
  function s(s, n, o, a = 1) {
    const h = o,
      r = Math.max(n, 0.1),
      i = s[0] && s[0][0] && "number" == typeof s[0][0] ? [s] : s,
      c = [0, 0];
    if (h) for (const e of i) t(e, c, h);
    const l = (function (t, s, n) {
      const o = [];
      for (const s of t) {
        const t = [...s];
        e(t[0], t[t.length - 1]) || t.push([t[0][0], t[0][1]]),
          t.length > 2 && o.push(t);
      }
      const a = [];
      s = Math.max(s, 0.1);
      const h = [];
      for (const t of o)
        for (let e = 0; e < t.length - 1; e++) {
          const s = t[e],
            n = t[e + 1];
          if (s[1] !== n[1]) {
            const t = Math.min(s[1], n[1]);
            h.push({
              ymin: t,
              ymax: Math.max(s[1], n[1]),
              x: t === s[1] ? s[0] : n[0],
              islope: (n[0] - s[0]) / (n[1] - s[1]),
            });
          }
        }
      if (
        (h.sort((t, e) =>
          t.ymin < e.ymin
            ? -1
            : t.ymin > e.ymin
              ? 1
              : t.x < e.x
                ? -1
                : t.x > e.x
                  ? 1
                  : t.ymax === e.ymax
                    ? 0
                    : (t.ymax - e.ymax) / Math.abs(t.ymax - e.ymax),
        ),
        !h.length)
      )
        return a;
      let r = [],
        i = h[0].ymin,
        c = 0;
      for (; r.length || h.length; ) {
        if (h.length) {
          let t = -1;
          for (let e = 0; e < h.length && !(h[e].ymin > i); e++) t = e;
          h.splice(0, t + 1).forEach((t) => {
            r.push({ s: i, edge: t });
          });
        }
        if (
          ((r = r.filter((t) => !(t.edge.ymax <= i))),
          r.sort((t, e) =>
            t.edge.x === e.edge.x
              ? 0
              : (t.edge.x - e.edge.x) / Math.abs(t.edge.x - e.edge.x),
          ),
          (1 !== n || c % s == 0) && r.length > 1)
        )
          for (let t = 0; t < r.length; t += 2) {
            const e = t + 1;
            if (e >= r.length) break;
            const s = r[t].edge,
              n = r[e].edge;
            a.push([
              [Math.round(s.x), i],
              [Math.round(n.x), i],
            ]);
          }
        (i += n),
          r.forEach((t) => {
            t.edge.x = t.edge.x + n * t.edge.islope;
          }),
          c++;
      }
      return a;
    })(i, r, a);
    if (h) {
      for (const e of i) t(e, c, -h);
      !(function (e, s, n) {
        const o = [];
        e.forEach((t) => o.push(...t)), t(o, s, n);
      })(l, c, -h);
    }
    return l;
  }
  function n(t, e) {
    var n;
    const o = e.hachureAngle + 90;
    let a = e.hachureGap;
    a < 0 && (a = 4 * e.strokeWidth), (a = Math.round(Math.max(a, 0.1)));
    let h = 1;
    return (
      e.roughness >= 1 &&
        ((null === (n = e.randomizer) || void 0 === n ? void 0 : n.next()) ||
          Math.random()) > 0.7 &&
        (h = a),
      s(t, a, o, h || 1)
    );
  }
  class o {
    constructor(t) {
      this.helper = t;
    }
    fillPolygons(t, e) {
      return this._fillPolygons(t, e);
    }
    _fillPolygons(t, e) {
      const s = n(t, e);
      return { type: "fillSketch", ops: this.renderLines(s, e) };
    }
    renderLines(t, e) {
      const s = [];
      for (const n of t)
        s.push(
          ...this.helper.doubleLineOps(n[0][0], n[0][1], n[1][0], n[1][1], e),
        );
      return s;
    }
  }
  function a(t) {
    const e = t[0],
      s = t[1];
    return Math.sqrt(Math.pow(e[0] - s[0], 2) + Math.pow(e[1] - s[1], 2));
  }
  class h extends o {
    fillPolygons(t, e) {
      let s = e.hachureGap;
      s < 0 && (s = 4 * e.strokeWidth), (s = Math.max(s, 0.1));
      const o = n(t, Object.assign({}, e, { hachureGap: s })),
        h = (Math.PI / 180) * e.hachureAngle,
        r = [],
        i = 0.5 * s * Math.cos(h),
        c = 0.5 * s * Math.sin(h);
      for (const [t, e] of o)
        a([t, e]) &&
          r.push(
            [[t[0] - i, t[1] + c], [...e]],
            [[t[0] + i, t[1] - c], [...e]],
          );
      return { type: "fillSketch", ops: this.renderLines(r, e) };
    }
  }
  class r extends o {
    fillPolygons(t, e) {
      const s = this._fillPolygons(t, e),
        n = Object.assign({}, e, { hachureAngle: e.hachureAngle + 90 }),
        o = this._fillPolygons(t, n);
      return (s.ops = s.ops.concat(o.ops)), s;
    }
  }
  class i {
    constructor(t) {
      this.helper = t;
    }
    fillPolygons(t, e) {
      const s = n(t, (e = Object.assign({}, e, { hachureAngle: 0 })));
      return this.dotsOnLines(s, e);
    }
    dotsOnLines(t, e) {
      const s = [];
      let n = e.hachureGap;
      n < 0 && (n = 4 * e.strokeWidth), (n = Math.max(n, 0.1));
      let o = e.fillWeight;
      o < 0 && (o = e.strokeWidth / 2);
      const h = n / 4;
      for (const r of t) {
        const t = a(r),
          i = t / n,
          c = Math.ceil(i) - 1,
          l = t - c * n,
          u = (r[0][0] + r[1][0]) / 2 - n / 4,
          p = Math.min(r[0][1], r[1][1]);
        for (let t = 0; t < c; t++) {
          const a = p + l + t * n,
            r = u - h + 2 * Math.random() * h,
            i = a - h + 2 * Math.random() * h,
            c = this.helper.ellipse(r, i, o, o, e);
          s.push(...c.ops);
        }
      }
      return { type: "fillSketch", ops: s };
    }
  }
  class c {
    constructor(t) {
      this.helper = t;
    }
    fillPolygons(t, e) {
      const s = n(t, e);
      return { type: "fillSketch", ops: this.dashedLine(s, e) };
    }
    dashedLine(t, e) {
      const s =
          e.dashOffset < 0
            ? e.hachureGap < 0
              ? 4 * e.strokeWidth
              : e.hachureGap
            : e.dashOffset,
        n =
          e.dashGap < 0
            ? e.hachureGap < 0
              ? 4 * e.strokeWidth
              : e.hachureGap
            : e.dashGap,
        o = [];
      return (
        t.forEach((t) => {
          const h = a(t),
            r = Math.floor(h / (s + n)),
            i = (h + n - r * (s + n)) / 2;
          let c = t[0],
            l = t[1];
          c[0] > l[0] && ((c = t[1]), (l = t[0]));
          const u = Math.atan((l[1] - c[1]) / (l[0] - c[0]));
          for (let t = 0; t < r; t++) {
            const a = t * (s + n),
              h = a + s,
              r = [
                c[0] + a * Math.cos(u) + i * Math.cos(u),
                c[1] + a * Math.sin(u) + i * Math.sin(u),
              ],
              l = [
                c[0] + h * Math.cos(u) + i * Math.cos(u),
                c[1] + h * Math.sin(u) + i * Math.sin(u),
              ];
            o.push(...this.helper.doubleLineOps(r[0], r[1], l[0], l[1], e));
          }
        }),
        o
      );
    }
  }
  class l {
    constructor(t) {
      this.helper = t;
    }
    fillPolygons(t, e) {
      const s = e.hachureGap < 0 ? 4 * e.strokeWidth : e.hachureGap,
        o = e.zigzagOffset < 0 ? s : e.zigzagOffset,
        a = n(t, (e = Object.assign({}, e, { hachureGap: s + o })));
      return { type: "fillSketch", ops: this.zigzagLines(a, o, e) };
    }
    zigzagLines(t, e, s) {
      const n = [];
      return (
        t.forEach((t) => {
          const o = a(t),
            h = Math.round(o / (2 * e));
          let r = t[0],
            i = t[1];
          r[0] > i[0] && ((r = t[1]), (i = t[0]));
          const c = Math.atan((i[1] - r[1]) / (i[0] - r[0]));
          for (let t = 0; t < h; t++) {
            const o = 2 * t * e,
              a = 2 * (t + 1) * e,
              h = Math.sqrt(2 * Math.pow(e, 2)),
              i = [r[0] + o * Math.cos(c), r[1] + o * Math.sin(c)],
              l = [r[0] + a * Math.cos(c), r[1] + a * Math.sin(c)],
              u = [
                i[0] + h * Math.cos(c + Math.PI / 4),
                i[1] + h * Math.sin(c + Math.PI / 4),
              ];
            n.push(
              ...this.helper.doubleLineOps(i[0], i[1], u[0], u[1], s),
              ...this.helper.doubleLineOps(u[0], u[1], l[0], l[1], s),
            );
          }
        }),
        n
      );
    }
  }
  const u = {};
  class p {
    constructor(t) {
      this.seed = t;
    }
    next() {
      return this.seed
        ? ((2 ** 31 - 1) & (this.seed = Math.imul(48271, this.seed))) / 2 ** 31
        : Math.random();
    }
  }
  const f = 0,
    d = 1,
    g = 2,
    M = {
      A: 7,
      a: 7,
      C: 6,
      c: 6,
      H: 1,
      h: 1,
      L: 2,
      l: 2,
      M: 2,
      m: 2,
      Q: 4,
      q: 4,
      S: 4,
      s: 4,
      T: 2,
      t: 2,
      V: 1,
      v: 1,
      Z: 0,
      z: 0,
    };
  function k(t, e) {
    return t.type === e;
  }
  function b(t) {
    const e = [],
      s = (function (t) {
        const e = new Array();
        for (; "" !== t; )
          if (t.match(/^([ \t\r\n,]+)/)) t = t.substr(RegExp.$1.length);
          else if (t.match(/^([aAcChHlLmMqQsStTvVzZ])/))
            (e[e.length] = { type: f, text: RegExp.$1 }),
              (t = t.substr(RegExp.$1.length));
          else {
            if (
              !t.match(
                /^(([-+]?[0-9]+(\.[0-9]*)?|[-+]?\.[0-9]+)([eE][-+]?[0-9]+)?)/,
              )
            )
              return [];
            (e[e.length] = { type: d, text: `${parseFloat(RegExp.$1)}` }),
              (t = t.substr(RegExp.$1.length));
          }
        return (e[e.length] = { type: g, text: "" }), e;
      })(t);
    let n = "BOD",
      o = 0,
      a = s[o];
    for (; !k(a, g); ) {
      let h = 0;
      const r = [];
      if ("BOD" === n) {
        if ("M" !== a.text && "m" !== a.text) return b("M0,0" + t);
        o++, (h = M[a.text]), (n = a.text);
      } else k(a, d) ? (h = M[n]) : (o++, (h = M[a.text]), (n = a.text));
      if (!(o + h < s.length)) throw new Error("Path data ended short");
      for (let t = o; t < o + h; t++) {
        const e = s[t];
        if (!k(e, d))
          throw new Error("Param not a number: " + n + "," + e.text);
        r[r.length] = +e.text;
      }
      if ("number" != typeof M[n]) throw new Error("Bad segment: " + n);
      {
        const t = { key: n, data: r };
        e.push(t),
          (o += h),
          (a = s[o]),
          "M" === n && (n = "L"),
          "m" === n && (n = "l");
      }
    }
    return e;
  }
  function y(t) {
    let e = 0,
      s = 0,
      n = 0,
      o = 0;
    const a = [];
    for (const { key: h, data: r } of t)
      switch (h) {
        case "M":
          a.push({ key: "M", data: [...r] }), ([e, s] = r), ([n, o] = r);
          break;
        case "m":
          (e += r[0]),
            (s += r[1]),
            a.push({ key: "M", data: [e, s] }),
            (n = e),
            (o = s);
          break;
        case "L":
          a.push({ key: "L", data: [...r] }), ([e, s] = r);
          break;
        case "l":
          (e += r[0]), (s += r[1]), a.push({ key: "L", data: [e, s] });
          break;
        case "C":
          a.push({ key: "C", data: [...r] }), (e = r[4]), (s = r[5]);
          break;
        case "c": {
          const t = r.map((t, n) => (n % 2 ? t + s : t + e));
          a.push({ key: "C", data: t }), (e = t[4]), (s = t[5]);
          break;
        }
        case "Q":
          a.push({ key: "Q", data: [...r] }), (e = r[2]), (s = r[3]);
          break;
        case "q": {
          const t = r.map((t, n) => (n % 2 ? t + s : t + e));
          a.push({ key: "Q", data: t }), (e = t[2]), (s = t[3]);
          break;
        }
        case "A":
          a.push({ key: "A", data: [...r] }), (e = r[5]), (s = r[6]);
          break;
        case "a":
          (e += r[5]),
            (s += r[6]),
            a.push({ key: "A", data: [r[0], r[1], r[2], r[3], r[4], e, s] });
          break;
        case "H":
          a.push({ key: "H", data: [...r] }), (e = r[0]);
          break;
        case "h":
          (e += r[0]), a.push({ key: "H", data: [e] });
          break;
        case "V":
          a.push({ key: "V", data: [...r] }), (s = r[0]);
          break;
        case "v":
          (s += r[0]), a.push({ key: "V", data: [s] });
          break;
        case "S":
          a.push({ key: "S", data: [...r] }), (e = r[2]), (s = r[3]);
          break;
        case "s": {
          const t = r.map((t, n) => (n % 2 ? t + s : t + e));
          a.push({ key: "S", data: t }), (e = t[2]), (s = t[3]);
          break;
        }
        case "T":
          a.push({ key: "T", data: [...r] }), (e = r[0]), (s = r[1]);
          break;
        case "t":
          (e += r[0]), (s += r[1]), a.push({ key: "T", data: [e, s] });
          break;
        case "Z":
        case "z":
          a.push({ key: "Z", data: [] }), (e = n), (s = o);
      }
    return a;
  }
  function m(t) {
    const e = [];
    let s = "",
      n = 0,
      o = 0,
      a = 0,
      h = 0,
      r = 0,
      i = 0;
    for (const { key: c, data: l } of t) {
      switch (c) {
        case "M":
          e.push({ key: "M", data: [...l] }), ([n, o] = l), ([a, h] = l);
          break;
        case "C":
          e.push({ key: "C", data: [...l] }),
            (n = l[4]),
            (o = l[5]),
            (r = l[2]),
            (i = l[3]);
          break;
        case "L":
          e.push({ key: "L", data: [...l] }), ([n, o] = l);
          break;
        case "H":
          (n = l[0]), e.push({ key: "L", data: [n, o] });
          break;
        case "V":
          (o = l[0]), e.push({ key: "L", data: [n, o] });
          break;
        case "S": {
          let t = 0,
            a = 0;
          "C" === s || "S" === s
            ? ((t = n + (n - r)), (a = o + (o - i)))
            : ((t = n), (a = o)),
            e.push({ key: "C", data: [t, a, ...l] }),
            (r = l[0]),
            (i = l[1]),
            (n = l[2]),
            (o = l[3]);
          break;
        }
        case "T": {
          const [t, a] = l;
          let h = 0,
            c = 0;
          "Q" === s || "T" === s
            ? ((h = n + (n - r)), (c = o + (o - i)))
            : ((h = n), (c = o));
          const u = n + (2 * (h - n)) / 3,
            p = o + (2 * (c - o)) / 3,
            f = t + (2 * (h - t)) / 3,
            d = a + (2 * (c - a)) / 3;
          e.push({ key: "C", data: [u, p, f, d, t, a] }),
            (r = h),
            (i = c),
            (n = t),
            (o = a);
          break;
        }
        case "Q": {
          const [t, s, a, h] = l,
            c = n + (2 * (t - n)) / 3,
            u = o + (2 * (s - o)) / 3,
            p = a + (2 * (t - a)) / 3,
            f = h + (2 * (s - h)) / 3;
          e.push({ key: "C", data: [c, u, p, f, a, h] }),
            (r = t),
            (i = s),
            (n = a),
            (o = h);
          break;
        }
        case "A": {
          const t = Math.abs(l[0]),
            s = Math.abs(l[1]),
            a = l[2],
            h = l[3],
            r = l[4],
            i = l[5],
            c = l[6];
          if (0 === t || 0 === s)
            e.push({ key: "C", data: [n, o, i, c, i, c] }), (n = i), (o = c);
          else if (n !== i || o !== c) {
            x(n, o, i, c, t, s, a, h, r).forEach(function (t) {
              e.push({ key: "C", data: t });
            }),
              (n = i),
              (o = c);
          }
          break;
        }
        case "Z":
          e.push({ key: "Z", data: [] }), (n = a), (o = h);
      }
      s = c;
    }
    return e;
  }
  function w(t, e, s) {
    return [
      t * Math.cos(s) - e * Math.sin(s),
      t * Math.sin(s) + e * Math.cos(s),
    ];
  }
  function x(t, e, s, n, o, a, h, r, i, c) {
    const l = ((u = h), (Math.PI * u) / 180);
    var u;
    let p = [],
      f = 0,
      d = 0,
      g = 0,
      M = 0;
    if (c) [f, d, g, M] = c;
    else {
      ([t, e] = w(t, e, -l)), ([s, n] = w(s, n, -l));
      const h = (t - s) / 2,
        c = (e - n) / 2;
      let u = (h * h) / (o * o) + (c * c) / (a * a);
      u > 1 && ((u = Math.sqrt(u)), (o *= u), (a *= u));
      const p = o * o,
        k = a * a,
        b = p * k - p * c * c - k * h * h,
        y = p * c * c + k * h * h,
        m = (r === i ? -1 : 1) * Math.sqrt(Math.abs(b / y));
      (g = (m * o * c) / a + (t + s) / 2),
        (M = (m * -a * h) / o + (e + n) / 2),
        (f = Math.asin(parseFloat(((e - M) / a).toFixed(9)))),
        (d = Math.asin(parseFloat(((n - M) / a).toFixed(9)))),
        t < g && (f = Math.PI - f),
        s < g && (d = Math.PI - d),
        f < 0 && (f = 2 * Math.PI + f),
        d < 0 && (d = 2 * Math.PI + d),
        i && f > d && (f -= 2 * Math.PI),
        !i && d > f && (d -= 2 * Math.PI);
    }
    let k = d - f;
    if (Math.abs(k) > (120 * Math.PI) / 180) {
      const t = d,
        e = s,
        r = n;
      (d =
        i && d > f
          ? f + ((120 * Math.PI) / 180) * 1
          : f + ((120 * Math.PI) / 180) * -1),
        (p = x(
          (s = g + o * Math.cos(d)),
          (n = M + a * Math.sin(d)),
          e,
          r,
          o,
          a,
          h,
          0,
          i,
          [d, t, g, M],
        ));
    }
    k = d - f;
    const b = Math.cos(f),
      y = Math.sin(f),
      m = Math.cos(d),
      P = Math.sin(d),
      v = Math.tan(k / 4),
      S = (4 / 3) * o * v,
      O = (4 / 3) * a * v,
      L = [t, e],
      T = [t + S * y, e - O * b],
      D = [s + S * P, n - O * m],
      A = [s, n];
    if (((T[0] = 2 * L[0] - T[0]), (T[1] = 2 * L[1] - T[1]), c))
      return [T, D, A].concat(p);
    {
      p = [T, D, A].concat(p);
      const t = [];
      for (let e = 0; e < p.length; e += 3) {
        const s = w(p[e][0], p[e][1], l),
          n = w(p[e + 1][0], p[e + 1][1], l),
          o = w(p[e + 2][0], p[e + 2][1], l);
        t.push([s[0], s[1], n[0], n[1], o[0], o[1]]);
      }
      return t;
    }
  }
  const P = {
    randOffset: function (t, e) {
      return G(t, e);
    },
    randOffsetWithRange: function (t, e, s) {
      return E(t, e, s);
    },
    ellipse: function (t, e, s, n, o) {
      const a = T(s, n, o);
      return D(t, e, o, a).opset;
    },
    doubleLineOps: function (t, e, s, n, o) {
      return $(t, e, s, n, o, !0);
    },
  };
  function v(t, e, s, n, o) {
    return { type: "path", ops: $(t, e, s, n, o) };
  }
  function S(t, e, s) {
    const n = (t || []).length;
    if (n > 2) {
      const o = [];
      for (let e = 0; e < n - 1; e++)
        o.push(...$(t[e][0], t[e][1], t[e + 1][0], t[e + 1][1], s));
      return (
        e && o.push(...$(t[n - 1][0], t[n - 1][1], t[0][0], t[0][1], s)),
        { type: "path", ops: o }
      );
    }
    return 2 === n
      ? v(t[0][0], t[0][1], t[1][0], t[1][1], s)
      : { type: "path", ops: [] };
  }
  function O(t, e, s, n, o) {
    return (function (t, e) {
      return S(t, !0, e);
    })(
      [
        [t, e],
        [t + s, e],
        [t + s, e + n],
        [t, e + n],
      ],
      o,
    );
  }
  function L(t, e) {
    if (t.length) {
      const s = "number" == typeof t[0][0] ? [t] : t,
        n = j(s[0], 1 * (1 + 0.2 * e.roughness), e),
        o = e.disableMultiStroke
          ? []
          : j(s[0], 1.5 * (1 + 0.22 * e.roughness), z(e));
      for (let t = 1; t < s.length; t++) {
        const a = s[t];
        if (a.length) {
          const t = j(a, 1 * (1 + 0.2 * e.roughness), e),
            s = e.disableMultiStroke
              ? []
              : j(a, 1.5 * (1 + 0.22 * e.roughness), z(e));
          for (const e of t) "move" !== e.op && n.push(e);
          for (const t of s) "move" !== t.op && o.push(t);
        }
      }
      return { type: "path", ops: n.concat(o) };
    }
    return { type: "path", ops: [] };
  }
  function T(t, e, s) {
    const n = Math.sqrt(
        2 * Math.PI * Math.sqrt((Math.pow(t / 2, 2) + Math.pow(e / 2, 2)) / 2),
      ),
      o = Math.ceil(
        Math.max(s.curveStepCount, (s.curveStepCount / Math.sqrt(200)) * n),
      ),
      a = (2 * Math.PI) / o;
    let h = Math.abs(t / 2),
      r = Math.abs(e / 2);
    const i = 1 - s.curveFitting;
    return (
      (h += G(h * i, s)), (r += G(r * i, s)), { increment: a, rx: h, ry: r }
    );
  }
  function D(t, e, s, n) {
    const [o, a] = F(
      n.increment,
      t,
      e,
      n.rx,
      n.ry,
      1,
      n.increment * E(0.1, E(0.4, 1, s), s),
      s,
    );
    let h = q(o, null, s);
    if (!s.disableMultiStroke && 0 !== s.roughness) {
      const [o] = F(n.increment, t, e, n.rx, n.ry, 1.5, 0, s),
        a = q(o, null, s);
      h = h.concat(a);
    }
    return { estimatedPoints: a, opset: { type: "path", ops: h } };
  }
  function A(t, e, s, n, o, a, h, r, i) {
    const c = t,
      l = e;
    let u = Math.abs(s / 2),
      p = Math.abs(n / 2);
    (u += G(0.01 * u, i)), (p += G(0.01 * p, i));
    let f = o,
      d = a;
    for (; f < 0; ) (f += 2 * Math.PI), (d += 2 * Math.PI);
    d - f > 2 * Math.PI && ((f = 0), (d = 2 * Math.PI));
    const g = (2 * Math.PI) / i.curveStepCount,
      M = Math.min(g / 2, (d - f) / 2),
      k = V(M, c, l, u, p, f, d, 1, i);
    if (!i.disableMultiStroke) {
      const t = V(M, c, l, u, p, f, d, 1.5, i);
      k.push(...t);
    }
    return (
      h &&
        (r
          ? k.push(
              ...$(c, l, c + u * Math.cos(f), l + p * Math.sin(f), i),
              ...$(c, l, c + u * Math.cos(d), l + p * Math.sin(d), i),
            )
          : k.push(
              { op: "lineTo", data: [c, l] },
              {
                op: "lineTo",
                data: [c + u * Math.cos(f), l + p * Math.sin(f)],
              },
            )),
      { type: "path", ops: k }
    );
  }
  function _(t, e) {
    const s = m(y(b(t))),
      n = [];
    let o = [0, 0],
      a = [0, 0];
    for (const { key: t, data: h } of s)
      switch (t) {
        case "M":
          (a = [h[0], h[1]]), (o = [h[0], h[1]]);
          break;
        case "L":
          n.push(...$(a[0], a[1], h[0], h[1], e)), (a = [h[0], h[1]]);
          break;
        case "C": {
          const [t, s, o, r, i, c] = h;
          n.push(...Z(t, s, o, r, i, c, a, e)), (a = [i, c]);
          break;
        }
        case "Z":
          n.push(...$(a[0], a[1], o[0], o[1], e)), (a = [o[0], o[1]]);
      }
    return { type: "path", ops: n };
  }
  function I(t, e) {
    const s = [];
    for (const n of t)
      if (n.length) {
        const t = e.maxRandomnessOffset || 0,
          o = n.length;
        if (o > 2) {
          s.push({ op: "move", data: [n[0][0] + G(t, e), n[0][1] + G(t, e)] });
          for (let a = 1; a < o; a++)
            s.push({
              op: "lineTo",
              data: [n[a][0] + G(t, e), n[a][1] + G(t, e)],
            });
        }
      }
    return { type: "fillPath", ops: s };
  }
  function C(t, e) {
    return (function (t, e) {
      let s = t.fillStyle || "hachure";
      if (!u[s])
        switch (s) {
          case "zigzag":
            u[s] || (u[s] = new h(e));
            break;
          case "cross-hatch":
            u[s] || (u[s] = new r(e));
            break;
          case "dots":
            u[s] || (u[s] = new i(e));
            break;
          case "dashed":
            u[s] || (u[s] = new c(e));
            break;
          case "zigzag-line":
            u[s] || (u[s] = new l(e));
            break;
          default:
            (s = "hachure"), u[s] || (u[s] = new o(e));
        }
      return u[s];
    })(e, P).fillPolygons(t, e);
  }
  function z(t) {
    const e = Object.assign({}, t);
    return (e.randomizer = void 0), t.seed && (e.seed = t.seed + 1), e;
  }
  function W(t) {
    return (
      t.randomizer || (t.randomizer = new p(t.seed || 0)), t.randomizer.next()
    );
  }
  function E(t, e, s, n = 1) {
    return s.roughness * n * (W(s) * (e - t) + t);
  }
  function G(t, e, s = 1) {
    return E(-t, t, e, s);
  }
  function $(t, e, s, n, o, a = !1) {
    const h = a ? o.disableMultiStrokeFill : o.disableMultiStroke,
      r = R(t, e, s, n, o, !0, !1);
    if (h) return r;
    const i = R(t, e, s, n, o, !0, !0);
    return r.concat(i);
  }
  function R(t, e, s, n, o, a, h) {
    const r = Math.pow(t - s, 2) + Math.pow(e - n, 2),
      i = Math.sqrt(r);
    let c = 1;
    c = i < 200 ? 1 : i > 500 ? 0.4 : -0.0016668 * i + 1.233334;
    let l = o.maxRandomnessOffset || 0;
    l * l * 100 > r && (l = i / 10);
    const u = l / 2,
      p = 0.2 + 0.2 * W(o);
    let f = (o.bowing * o.maxRandomnessOffset * (n - e)) / 200,
      d = (o.bowing * o.maxRandomnessOffset * (t - s)) / 200;
    (f = G(f, o, c)), (d = G(d, o, c));
    const g = [],
      M = () => G(u, o, c),
      k = () => G(l, o, c),
      b = o.preserveVertices;
    return (
      a &&
        (h
          ? g.push({ op: "move", data: [t + (b ? 0 : M()), e + (b ? 0 : M())] })
          : g.push({
              op: "move",
              data: [t + (b ? 0 : G(l, o, c)), e + (b ? 0 : G(l, o, c))],
            })),
      h
        ? g.push({
            op: "bcurveTo",
            data: [
              f + t + (s - t) * p + M(),
              d + e + (n - e) * p + M(),
              f + t + 2 * (s - t) * p + M(),
              d + e + 2 * (n - e) * p + M(),
              s + (b ? 0 : M()),
              n + (b ? 0 : M()),
            ],
          })
        : g.push({
            op: "bcurveTo",
            data: [
              f + t + (s - t) * p + k(),
              d + e + (n - e) * p + k(),
              f + t + 2 * (s - t) * p + k(),
              d + e + 2 * (n - e) * p + k(),
              s + (b ? 0 : k()),
              n + (b ? 0 : k()),
            ],
          }),
      g
    );
  }
  function j(t, e, s) {
    if (!t.length) return [];
    const n = [];
    n.push([t[0][0] + G(e, s), t[0][1] + G(e, s)]),
      n.push([t[0][0] + G(e, s), t[0][1] + G(e, s)]);
    for (let o = 1; o < t.length; o++)
      n.push([t[o][0] + G(e, s), t[o][1] + G(e, s)]),
        o === t.length - 1 && n.push([t[o][0] + G(e, s), t[o][1] + G(e, s)]);
    return q(n, null, s);
  }
  function q(t, e, s) {
    const n = t.length,
      o = [];
    if (n > 3) {
      const a = [],
        h = 1 - s.curveTightness;
      o.push({ op: "move", data: [t[1][0], t[1][1]] });
      for (let e = 1; e + 2 < n; e++) {
        const s = t[e];
        (a[0] = [s[0], s[1]]),
          (a[1] = [
            s[0] + (h * t[e + 1][0] - h * t[e - 1][0]) / 6,
            s[1] + (h * t[e + 1][1] - h * t[e - 1][1]) / 6,
          ]),
          (a[2] = [
            t[e + 1][0] + (h * t[e][0] - h * t[e + 2][0]) / 6,
            t[e + 1][1] + (h * t[e][1] - h * t[e + 2][1]) / 6,
          ]),
          (a[3] = [t[e + 1][0], t[e + 1][1]]),
          o.push({
            op: "bcurveTo",
            data: [a[1][0], a[1][1], a[2][0], a[2][1], a[3][0], a[3][1]],
          });
      }
      if (e && 2 === e.length) {
        const t = s.maxRandomnessOffset;
        o.push({ op: "lineTo", data: [e[0] + G(t, s), e[1] + G(t, s)] });
      }
    } else
      3 === n
        ? (o.push({ op: "move", data: [t[1][0], t[1][1]] }),
          o.push({
            op: "bcurveTo",
            data: [t[1][0], t[1][1], t[2][0], t[2][1], t[2][0], t[2][1]],
          }))
        : 2 === n &&
          o.push(...R(t[0][0], t[0][1], t[1][0], t[1][1], s, !0, !0));
    return o;
  }
  function F(t, e, s, n, o, a, h, r) {
    const i = [],
      c = [];
    if (0 === r.roughness) {
      (t /= 4), c.push([e + n * Math.cos(-t), s + o * Math.sin(-t)]);
      for (let a = 0; a <= 2 * Math.PI; a += t) {
        const t = [e + n * Math.cos(a), s + o * Math.sin(a)];
        i.push(t), c.push(t);
      }
      c.push([e + n * Math.cos(0), s + o * Math.sin(0)]),
        c.push([e + n * Math.cos(t), s + o * Math.sin(t)]);
    } else {
      const l = G(0.5, r) - Math.PI / 2;
      c.push([
        G(a, r) + e + 0.9 * n * Math.cos(l - t),
        G(a, r) + s + 0.9 * o * Math.sin(l - t),
      ]);
      const u = 2 * Math.PI + l - 0.01;
      for (let h = l; h < u; h += t) {
        const t = [
          G(a, r) + e + n * Math.cos(h),
          G(a, r) + s + o * Math.sin(h),
        ];
        i.push(t), c.push(t);
      }
      c.push([
        G(a, r) + e + n * Math.cos(l + 2 * Math.PI + 0.5 * h),
        G(a, r) + s + o * Math.sin(l + 2 * Math.PI + 0.5 * h),
      ]),
        c.push([
          G(a, r) + e + 0.98 * n * Math.cos(l + h),
          G(a, r) + s + 0.98 * o * Math.sin(l + h),
        ]),
        c.push([
          G(a, r) + e + 0.9 * n * Math.cos(l + 0.5 * h),
          G(a, r) + s + 0.9 * o * Math.sin(l + 0.5 * h),
        ]);
    }
    return [c, i];
  }
  function V(t, e, s, n, o, a, h, r, i) {
    const c = a + G(0.1, i),
      l = [];
    l.push([
      G(r, i) + e + 0.9 * n * Math.cos(c - t),
      G(r, i) + s + 0.9 * o * Math.sin(c - t),
    ]);
    for (let a = c; a <= h; a += t)
      l.push([G(r, i) + e + n * Math.cos(a), G(r, i) + s + o * Math.sin(a)]);
    return (
      l.push([e + n * Math.cos(h), s + o * Math.sin(h)]),
      l.push([e + n * Math.cos(h), s + o * Math.sin(h)]),
      q(l, null, i)
    );
  }
  function Z(t, e, s, n, o, a, h, r) {
    const i = [],
      c = [r.maxRandomnessOffset || 1, (r.maxRandomnessOffset || 1) + 0.3];
    let l = [0, 0];
    const u = r.disableMultiStroke ? 1 : 2,
      p = r.preserveVertices;
    for (let f = 0; f < u; f++)
      0 === f
        ? i.push({ op: "move", data: [h[0], h[1]] })
        : i.push({
            op: "move",
            data: [h[0] + (p ? 0 : G(c[0], r)), h[1] + (p ? 0 : G(c[0], r))],
          }),
        (l = p ? [o, a] : [o + G(c[f], r), a + G(c[f], r)]),
        i.push({
          op: "bcurveTo",
          data: [
            t + G(c[f], r),
            e + G(c[f], r),
            s + G(c[f], r),
            n + G(c[f], r),
            l[0],
            l[1],
          ],
        });
    return i;
  }
  function Q(t) {
    return [...t];
  }
  function H(t, e = 0) {
    const s = t.length;
    if (s < 3) throw new Error("A curve must have at least three points.");
    const n = [];
    if (3 === s) n.push(Q(t[0]), Q(t[1]), Q(t[2]), Q(t[2]));
    else {
      const s = [];
      s.push(t[0], t[0]);
      for (let e = 1; e < t.length; e++)
        s.push(t[e]), e === t.length - 1 && s.push(t[e]);
      const o = [],
        a = 1 - e;
      n.push(Q(s[0]));
      for (let t = 1; t + 2 < s.length; t++) {
        const e = s[t];
        (o[0] = [e[0], e[1]]),
          (o[1] = [
            e[0] + (a * s[t + 1][0] - a * s[t - 1][0]) / 6,
            e[1] + (a * s[t + 1][1] - a * s[t - 1][1]) / 6,
          ]),
          (o[2] = [
            s[t + 1][0] + (a * s[t][0] - a * s[t + 2][0]) / 6,
            s[t + 1][1] + (a * s[t][1] - a * s[t + 2][1]) / 6,
          ]),
          (o[3] = [s[t + 1][0], s[t + 1][1]]),
          n.push(o[1], o[2], o[3]);
      }
    }
    return n;
  }
  function N(t, e) {
    return Math.pow(t[0] - e[0], 2) + Math.pow(t[1] - e[1], 2);
  }
  function B(t, e, s) {
    const n = N(e, s);
    if (0 === n) return N(t, e);
    let o = ((t[0] - e[0]) * (s[0] - e[0]) + (t[1] - e[1]) * (s[1] - e[1])) / n;
    return (o = Math.max(0, Math.min(1, o))), N(t, J(e, s, o));
  }
  function J(t, e, s) {
    return [t[0] + (e[0] - t[0]) * s, t[1] + (e[1] - t[1]) * s];
  }
  function K(t, e, s, n) {
    const o = n || [];
    if (
      (function (t, e) {
        const s = t[e + 0],
          n = t[e + 1],
          o = t[e + 2],
          a = t[e + 3];
        let h = 3 * n[0] - 2 * s[0] - a[0];
        h *= h;
        let r = 3 * n[1] - 2 * s[1] - a[1];
        r *= r;
        let i = 3 * o[0] - 2 * a[0] - s[0];
        i *= i;
        let c = 3 * o[1] - 2 * a[1] - s[1];
        return (c *= c), h < i && (h = i), r < c && (r = c), h + r;
      })(t, e) < s
    ) {
      const s = t[e + 0];
      if (o.length) {
        ((a = o[o.length - 1]), (h = s), Math.sqrt(N(a, h))) > 1 && o.push(s);
      } else o.push(s);
      o.push(t[e + 3]);
    } else {
      const n = 0.5,
        a = t[e + 0],
        h = t[e + 1],
        r = t[e + 2],
        i = t[e + 3],
        c = J(a, h, n),
        l = J(h, r, n),
        u = J(r, i, n),
        p = J(c, l, n),
        f = J(l, u, n),
        d = J(p, f, n);
      K([a, c, p, d], 0, s, o), K([d, f, u, i], 0, s, o);
    }
    var a, h;
    return o;
  }
  function U(t, e) {
    return X(t, 0, t.length, e);
  }
  function X(t, e, s, n, o) {
    const a = o || [],
      h = t[e],
      r = t[s - 1];
    let i = 0,
      c = 1;
    for (let n = e + 1; n < s - 1; ++n) {
      const e = B(t[n], h, r);
      e > i && ((i = e), (c = n));
    }
    return (
      Math.sqrt(i) > n
        ? (X(t, e, c + 1, n, a), X(t, c, s, n, a))
        : (a.length || a.push(h), a.push(r)),
      a
    );
  }
  function Y(t, e = 0.15, s) {
    const n = [],
      o = (t.length - 1) / 3;
    for (let s = 0; s < o; s++) {
      K(t, 3 * s, e, n);
    }
    return s && s > 0 ? X(n, 0, n.length, s) : n;
  }
  const tt = "none";
  class et {
    constructor(t) {
      (this.defaultOptions = {
        maxRandomnessOffset: 2,
        roughness: 1,
        bowing: 1,
        stroke: "#000",
        strokeWidth: 1,
        curveTightness: 0,
        curveFitting: 0.95,
        curveStepCount: 9,
        fillStyle: "hachure",
        fillWeight: -1,
        hachureAngle: -41,
        hachureGap: -1,
        dashOffset: -1,
        dashGap: -1,
        zigzagOffset: -1,
        seed: 0,
        disableMultiStroke: !1,
        disableMultiStrokeFill: !1,
        preserveVertices: !1,
        fillShapeRoughnessGain: 0.8,
      }),
        (this.config = t || {}),
        this.config.options &&
          (this.defaultOptions = this._o(this.config.options));
    }
    static newSeed() {
      return Math.floor(Math.random() * 2 ** 31);
    }
    _o(t) {
      return t
        ? Object.assign({}, this.defaultOptions, t)
        : this.defaultOptions;
    }
    _d(t, e, s) {
      return { shape: t, sets: e || [], options: s || this.defaultOptions };
    }
    line(t, e, s, n, o) {
      const a = this._o(o);
      return this._d("line", [v(t, e, s, n, a)], a);
    }
    rectangle(t, e, s, n, o) {
      const a = this._o(o),
        h = [],
        r = O(t, e, s, n, a);
      if (a.fill) {
        const o = [
          [t, e],
          [t + s, e],
          [t + s, e + n],
          [t, e + n],
        ];
        "solid" === a.fillStyle ? h.push(I([o], a)) : h.push(C([o], a));
      }
      return a.stroke !== tt && h.push(r), this._d("rectangle", h, a);
    }
    ellipse(t, e, s, n, o) {
      const a = this._o(o),
        h = [],
        r = T(s, n, a),
        i = D(t, e, a, r);
      if (a.fill)
        if ("solid" === a.fillStyle) {
          const s = D(t, e, a, r).opset;
          (s.type = "fillPath"), h.push(s);
        } else h.push(C([i.estimatedPoints], a));
      return a.stroke !== tt && h.push(i.opset), this._d("ellipse", h, a);
    }
    circle(t, e, s, n) {
      const o = this.ellipse(t, e, s, s, n);
      return (o.shape = "circle"), o;
    }
    linearPath(t, e) {
      const s = this._o(e);
      return this._d("linearPath", [S(t, !1, s)], s);
    }
    arc(t, e, s, n, o, a, h = !1, r) {
      const i = this._o(r),
        c = [],
        l = A(t, e, s, n, o, a, h, !0, i);
      if (h && i.fill)
        if ("solid" === i.fillStyle) {
          const h = Object.assign({}, i);
          h.disableMultiStroke = !0;
          const r = A(t, e, s, n, o, a, !0, !1, h);
          (r.type = "fillPath"), c.push(r);
        } else
          c.push(
            (function (t, e, s, n, o, a, h) {
              const r = t,
                i = e;
              let c = Math.abs(s / 2),
                l = Math.abs(n / 2);
              (c += G(0.01 * c, h)), (l += G(0.01 * l, h));
              let u = o,
                p = a;
              for (; u < 0; ) (u += 2 * Math.PI), (p += 2 * Math.PI);
              p - u > 2 * Math.PI && ((u = 0), (p = 2 * Math.PI));
              const f = (p - u) / h.curveStepCount,
                d = [];
              for (let t = u; t <= p; t += f)
                d.push([r + c * Math.cos(t), i + l * Math.sin(t)]);
              return (
                d.push([r + c * Math.cos(p), i + l * Math.sin(p)]),
                d.push([r, i]),
                C([d], h)
              );
            })(t, e, s, n, o, a, i),
          );
      return i.stroke !== tt && c.push(l), this._d("arc", c, i);
    }
    curve(t, e) {
      const s = this._o(e),
        n = [],
        o = L(t, s);
      if (s.fill && s.fill !== tt)
        if ("solid" === s.fillStyle) {
          const e = L(
            t,
            Object.assign(Object.assign({}, s), {
              disableMultiStroke: !0,
              roughness: s.roughness
                ? s.roughness + s.fillShapeRoughnessGain
                : 0,
            }),
          );
          n.push({ type: "fillPath", ops: this._mergedShape(e.ops) });
        } else {
          const e = [],
            o = t;
          if (o.length) {
            const t = "number" == typeof o[0][0] ? [o] : o;
            for (const n of t)
              n.length < 3
                ? e.push(...n)
                : 3 === n.length
                  ? e.push(
                      ...Y(
                        H([n[0], n[0], n[1], n[2]]),
                        10,
                        (1 + s.roughness) / 2,
                      ),
                    )
                  : e.push(...Y(H(n), 10, (1 + s.roughness) / 2));
          }
          e.length && n.push(C([e], s));
        }
      return s.stroke !== tt && n.push(o), this._d("curve", n, s);
    }
    polygon(t, e) {
      const s = this._o(e),
        n = [],
        o = S(t, !0, s);
      return (
        s.fill &&
          ("solid" === s.fillStyle ? n.push(I([t], s)) : n.push(C([t], s))),
        s.stroke !== tt && n.push(o),
        this._d("polygon", n, s)
      );
    }
    path(t, e) {
      const s = this._o(e),
        n = [];
      if (!t) return this._d("path", n, s);
      t = (t || "")
        .replace(/\n/g, " ")
        .replace(/(-\s)/g, "-")
        .replace("/(ss)/g", " ");
      const o = s.fill && "transparent" !== s.fill && s.fill !== tt,
        a = s.stroke !== tt,
        h = !!(s.simplification && s.simplification < 1),
        r = (function (t, e, s) {
          const n = m(y(b(t))),
            o = [];
          let a = [],
            h = [0, 0],
            r = [];
          const i = () => {
              r.length >= 4 && a.push(...Y(r, e)), (r = []);
            },
            c = () => {
              i(), a.length && (o.push(a), (a = []));
            };
          for (const { key: t, data: e } of n)
            switch (t) {
              case "M":
                c(), (h = [e[0], e[1]]), a.push(h);
                break;
              case "L":
                i(), a.push([e[0], e[1]]);
                break;
              case "C":
                if (!r.length) {
                  const t = a.length ? a[a.length - 1] : h;
                  r.push([t[0], t[1]]);
                }
                r.push([e[0], e[1]]),
                  r.push([e[2], e[3]]),
                  r.push([e[4], e[5]]);
                break;
              case "Z":
                i(), a.push([h[0], h[1]]);
            }
          if ((c(), !s)) return o;
          const l = [];
          for (const t of o) {
            const e = U(t, s);
            e.length && l.push(e);
          }
          return l;
        })(t, 1, h ? 4 - 4 * (s.simplification || 1) : (1 + s.roughness) / 2),
        i = _(t, s);
      if (o)
        if ("solid" === s.fillStyle)
          if (1 === r.length) {
            const e = _(
              t,
              Object.assign(Object.assign({}, s), {
                disableMultiStroke: !0,
                roughness: s.roughness
                  ? s.roughness + s.fillShapeRoughnessGain
                  : 0,
              }),
            );
            n.push({ type: "fillPath", ops: this._mergedShape(e.ops) });
          } else n.push(I(r, s));
        else n.push(C(r, s));
      return (
        a &&
          (h
            ? r.forEach((t) => {
                n.push(S(t, !1, s));
              })
            : n.push(i)),
        this._d("path", n, s)
      );
    }
    opsToPath(t, e) {
      let s = "";
      for (const n of t.ops) {
        const t =
          "number" == typeof e && e >= 0
            ? n.data.map((t) => +t.toFixed(e))
            : n.data;
        switch (n.op) {
          case "move":
            s += `M${t[0]} ${t[1]} `;
            break;
          case "bcurveTo":
            s += `C${t[0]} ${t[1]}, ${t[2]} ${t[3]}, ${t[4]} ${t[5]} `;
            break;
          case "lineTo":
            s += `L${t[0]} ${t[1]} `;
        }
      }
      return s.trim();
    }
    toPaths(t) {
      const e = t.sets || [],
        s = t.options || this.defaultOptions,
        n = [];
      for (const t of e) {
        let e = null;
        switch (t.type) {
          case "path":
            e = {
              d: this.opsToPath(t),
              stroke: s.stroke,
              strokeWidth: s.strokeWidth,
              fill: tt,
            };
            break;
          case "fillPath":
            e = {
              d: this.opsToPath(t),
              stroke: tt,
              strokeWidth: 0,
              fill: s.fill || tt,
            };
            break;
          case "fillSketch":
            e = this.fillSketch(t, s);
        }
        e && n.push(e);
      }
      return n;
    }
    fillSketch(t, e) {
      let s = e.fillWeight;
      return (
        s < 0 && (s = e.strokeWidth / 2),
        { d: this.opsToPath(t), stroke: e.fill || tt, strokeWidth: s, fill: tt }
      );
    }
    _mergedShape(t) {
      return t.filter((t, e) => 0 === e || "move" !== t.op);
    }
  }
  class st {
    constructor(t, e) {
      (this.canvas = t),
        (this.ctx = this.canvas.getContext("2d")),
        (this.gen = new et(e));
    }
    draw(t) {
      const e = t.sets || [],
        s = t.options || this.getDefaultOptions(),
        n = this.ctx,
        o = t.options.fixedDecimalPlaceDigits;
      for (const a of e)
        switch (a.type) {
          case "path":
            n.save(),
              (n.strokeStyle = "none" === s.stroke ? "transparent" : s.stroke),
              (n.lineWidth = s.strokeWidth),
              s.strokeLineDash && n.setLineDash(s.strokeLineDash),
              s.strokeLineDashOffset &&
                (n.lineDashOffset = s.strokeLineDashOffset),
              this._drawToContext(n, a, o),
              n.restore();
            break;
          case "fillPath": {
            n.save(), (n.fillStyle = s.fill || "");
            const e =
              "curve" === t.shape || "polygon" === t.shape || "path" === t.shape
                ? "evenodd"
                : "nonzero";
            this._drawToContext(n, a, o, e), n.restore();
            break;
          }
          case "fillSketch":
            this.fillSketch(n, a, s);
        }
    }
    fillSketch(t, e, s) {
      let n = s.fillWeight;
      n < 0 && (n = s.strokeWidth / 2),
        t.save(),
        s.fillLineDash && t.setLineDash(s.fillLineDash),
        s.fillLineDashOffset && (t.lineDashOffset = s.fillLineDashOffset),
        (t.strokeStyle = s.fill || ""),
        (t.lineWidth = n),
        this._drawToContext(t, e, s.fixedDecimalPlaceDigits),
        t.restore();
    }
    _drawToContext(t, e, s, n = "nonzero") {
      t.beginPath();
      for (const n of e.ops) {
        const e =
          "number" == typeof s && s >= 0
            ? n.data.map((t) => +t.toFixed(s))
            : n.data;
        switch (n.op) {
          case "move":
            t.moveTo(e[0], e[1]);
            break;
          case "bcurveTo":
            t.bezierCurveTo(e[0], e[1], e[2], e[3], e[4], e[5]);
            break;
          case "lineTo":
            t.lineTo(e[0], e[1]);
        }
      }
      "fillPath" === e.type ? t.fill(n) : t.stroke();
    }
    get generator() {
      return this.gen;
    }
    getDefaultOptions() {
      return this.gen.defaultOptions;
    }
    line(t, e, s, n, o) {
      const a = this.gen.line(t, e, s, n, o);
      return this.draw(a), a;
    }
    rectangle(t, e, s, n, o) {
      const a = this.gen.rectangle(t, e, s, n, o);
      return this.draw(a), a;
    }
    ellipse(t, e, s, n, o) {
      const a = this.gen.ellipse(t, e, s, n, o);
      return this.draw(a), a;
    }
    circle(t, e, s, n) {
      const o = this.gen.circle(t, e, s, n);
      return this.draw(o), o;
    }
    linearPath(t, e) {
      const s = this.gen.linearPath(t, e);
      return this.draw(s), s;
    }
    polygon(t, e) {
      const s = this.gen.polygon(t, e);
      return this.draw(s), s;
    }
    arc(t, e, s, n, o, a, h = !1, r) {
      const i = this.gen.arc(t, e, s, n, o, a, h, r);
      return this.draw(i), i;
    }
    curve(t, e) {
      const s = this.gen.curve(t, e);
      return this.draw(s), s;
    }
    path(t, e) {
      const s = this.gen.path(t, e);
      return this.draw(s), s;
    }
  }
  const nt = "http://www.w3.org/2000/svg";
  class ot {
    constructor(t, e) {
      (this.svg = t), (this.gen = new et(e));
    }
    draw(t) {
      const e = t.sets || [],
        s = t.options || this.getDefaultOptions(),
        n = this.svg.ownerDocument || window.document,
        o = n.createElementNS(nt, "g"),
        a = t.options.fixedDecimalPlaceDigits;
      for (const h of e) {
        let e = null;
        switch (h.type) {
          case "path":
            (e = n.createElementNS(nt, "path")),
              e.setAttribute("d", this.opsToPath(h, a)),
              e.setAttribute("stroke", s.stroke),
              e.setAttribute("stroke-width", s.strokeWidth + ""),
              e.setAttribute("fill", "none"),
              s.strokeLineDash &&
                e.setAttribute(
                  "stroke-dasharray",
                  s.strokeLineDash.join(" ").trim(),
                ),
              s.strokeLineDashOffset &&
                e.setAttribute(
                  "stroke-dashoffset",
                  `${s.strokeLineDashOffset}`,
                );
            break;
          case "fillPath":
            (e = n.createElementNS(nt, "path")),
              e.setAttribute("d", this.opsToPath(h, a)),
              e.setAttribute("stroke", "none"),
              e.setAttribute("stroke-width", "0"),
              e.setAttribute("fill", s.fill || ""),
              ("curve" !== t.shape && "polygon" !== t.shape) ||
                e.setAttribute("fill-rule", "evenodd");
            break;
          case "fillSketch":
            e = this.fillSketch(n, h, s);
        }
        e && o.appendChild(e);
      }
      return o;
    }
    fillSketch(t, e, s) {
      let n = s.fillWeight;
      n < 0 && (n = s.strokeWidth / 2);
      const o = t.createElementNS(nt, "path");
      return (
        o.setAttribute("d", this.opsToPath(e, s.fixedDecimalPlaceDigits)),
        o.setAttribute("stroke", s.fill || ""),
        o.setAttribute("stroke-width", n + ""),
        o.setAttribute("fill", "none"),
        s.fillLineDash &&
          o.setAttribute("stroke-dasharray", s.fillLineDash.join(" ").trim()),
        s.fillLineDashOffset &&
          o.setAttribute("stroke-dashoffset", `${s.fillLineDashOffset}`),
        o
      );
    }
    get generator() {
      return this.gen;
    }
    getDefaultOptions() {
      return this.gen.defaultOptions;
    }
    opsToPath(t, e) {
      return this.gen.opsToPath(t, e);
    }
    line(t, e, s, n, o) {
      const a = this.gen.line(t, e, s, n, o);
      return this.draw(a);
    }
    rectangle(t, e, s, n, o) {
      const a = this.gen.rectangle(t, e, s, n, o);
      return this.draw(a);
    }
    ellipse(t, e, s, n, o) {
      const a = this.gen.ellipse(t, e, s, n, o);
      return this.draw(a);
    }
    circle(t, e, s, n) {
      const o = this.gen.circle(t, e, s, n);
      return this.draw(o);
    }
    linearPath(t, e) {
      const s = this.gen.linearPath(t, e);
      return this.draw(s);
    }
    polygon(t, e) {
      const s = this.gen.polygon(t, e);
      return this.draw(s);
    }
    arc(t, e, s, n, o, a, h = !1, r) {
      const i = this.gen.arc(t, e, s, n, o, a, h, r);
      return this.draw(i);
    }
    curve(t, e) {
      const s = this.gen.curve(t, e);
      return this.draw(s);
    }
    path(t, e) {
      const s = this.gen.path(t, e);
      return this.draw(s);
    }
  }
  return {
    canvas: (t, e) => new st(t, e),
    svg: (t, e) => new ot(t, e),
    generator: (t) => new et(t),
    newSeed: () => et.newSeed(),
  };
})();
