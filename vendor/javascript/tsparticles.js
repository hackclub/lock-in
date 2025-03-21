/*! For license information please see tsparticles.confetti.bundle.min.js.LICENSE.txt */
!(function (t, e) {
  if ("object" == typeof exports && "object" == typeof module)
    module.exports = e();
  else if ("function" == typeof define && define.amd) define([], e);
  else {
    var i = e();
    for (var s in i) ("object" == typeof exports ? exports : t)[s] = i[s];
  }
})(this, () =>
  (() => {
    var t = {
        d: (e, i) => {
          for (var s in i)
            t.o(i, s) &&
              !t.o(e, s) &&
              Object.defineProperty(e, s, { enumerable: !0, get: i[s] });
        },
        o: (t, e) => Object.prototype.hasOwnProperty.call(t, e),
        r: (t) => {
          "undefined" != typeof Symbol &&
            Symbol.toStringTag &&
            Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
            Object.defineProperty(t, "__esModule", { value: !0 });
        },
      },
      e = {};
    t.r(e),
      t.d(e, {
        AlterType: () => di,
        AnimatableColor: () => ks,
        AnimationMode: () => Me,
        AnimationOptions: () => zs,
        AnimationStatus: () => Pe,
        AnimationValueWithRandom: () => Ts,
        Background: () => rs,
        BackgroundMask: () => ls,
        BackgroundMaskCover: () => cs,
        BaseRange: () => po,
        Circle: () => fo,
        ClickEvent: () => ds,
        CollisionMode: () => vi,
        Collisions: () => Fs,
        CollisionsAbsorb: () => Ss,
        CollisionsOverlap: () => Os,
        ColorAnimation: () => Ms,
        DestroyType: () => ke,
        DivEvent: () => us,
        DivType: () => fi,
        EasingType: () => Do,
        EventType: () => pi,
        Events: () => gs,
        ExternalInteractorBase: () => Po,
        FullScreen: () => hs,
        GradientType: () => Oo,
        HoverEvent: () => fs,
        HslAnimation: () => Ps,
        Interactivity: () => ys,
        InteractivityDetect: () => ui,
        InteractorType: () => bi,
        LimitMode: () => wi,
        ManualParticle: () => ws,
        Modes: () => vs,
        Move: () => Ws,
        MoveAngle: () => As,
        MoveAttract: () => Bs,
        MoveCenter: () => Vs,
        MoveDirection: () => Ht,
        MoveGravity: () => Us,
        MovePath: () => qs,
        MoveTrail: () => Hs,
        Opacity: () => Qs,
        OpacityAnimation: () => Ns,
        Options: () => ro,
        OptionsColor: () => as,
        OutMode: () => yi,
        OutModeDirection: () => Se,
        OutModes: () => Gs,
        Parallax: () => ps,
        ParticleOutType: () => xi,
        ParticlesBounce: () => Rs,
        ParticlesBounceFactor: () => Es,
        ParticlesDensity: () => Xs,
        ParticlesInteractorBase: () => ko,
        ParticlesNumber: () => Zs,
        ParticlesNumberLimit: () => Ys,
        ParticlesOptions: () => oo,
        PixelMode: () => Oe,
        Point: () => uo,
        RangedAnimationOptions: () => Cs,
        RangedAnimationValueWithRandom: () => Is,
        Rectangle: () => mo,
        ResizeEvent: () => ms,
        Responsive: () => bs,
        ResponsiveMode: () => mi,
        RotateDirection: () => So,
        Shadow: () => Ks,
        Shape: () => Js,
        Size: () => eo,
        SizeAnimation: () => to,
        Spin: () => js,
        StartValueType: () => De,
        Stroke: () => io,
        Theme: () => _s,
        ThemeDefault: () => xs,
        ThemeMode: () => gi,
        ValueWithRandom: () => Ds,
        Vector: () => Kt,
        Vector3d: () => Zt,
        ZIndex: () => so,
        alterHsl: () => ts,
        animate: () => oe,
        areBoundsInside: () => je,
        arrayRandomIndex: () => $e,
        calcExactPositionOrRandomFromSize: () => _e,
        calcExactPositionOrRandomFromSizeRanged: () => ze,
        calcPositionFromSize: () => we,
        calcPositionOrRandomFromSize: () => be,
        calcPositionOrRandomFromSizeRanged: () => xe,
        calculateBounds: () => We,
        cancelAnimation: () => ne,
        canvasFirstIndex: () => at,
        canvasTag: () => S,
        circleBounce: () => Je,
        circleBounceDataFromParticle: () => Ke,
        clamp: () => ae,
        clear: () => Ni,
        clickRadius: () => J,
        cloneStyle: () => li,
        collisionVelocity: () => ye,
        colorMix: () => Li,
        colorToHsl: () => Pi,
        colorToRgb: () => Mi,
        confetti: () => Ga,
        countOffset: () => bt,
        decayOffset: () => dt,
        deepExtend: () => Ne,
        defaultAlpha: () => M,
        defaultAngle: () => Ot,
        defaultDensityFactor: () => Mt,
        defaultFps: () => C,
        defaultFpsLimit: () => ot,
        defaultLoops: () => qt,
        defaultOpacity: () => K,
        defaultRadius: () => gt,
        defaultRatio: () => E,
        defaultReduceFactor: () => R,
        defaultRemoveQuantity: () => I,
        defaultRetryCount: () => O,
        defaultRgbMin: () => Vt,
        defaultTime: () => $t,
        defaultTransform: () => w,
        defaultTransformValue: () => Q,
        defaultVelocity: () => Ut,
        degToRad: () => me,
        deleteCount: () => Pt,
        divMode: () => Ze,
        divModeExecute: () => Xe,
        double: () => _,
        doublePI: () => z,
        drawEffect: () => Xi,
        drawLine: () => Gi,
        drawParticle: () => Qi,
        drawParticlePlugin: () => Ji,
        drawPlugin: () => Ki,
        drawShape: () => Yi,
        drawShapeAfterDraw: () => Zi,
        empty: () => G,
        errorPrefix: () => f,
        executeOnSingleOrMultiple: () => ei,
        findItemFromSingleOrMultiple: () => si,
        generatedAttribute: () => i,
        generatedFalse: () => k,
        generatedTrue: () => P,
        getDistance: () => fe,
        getDistances: () => pe,
        getFullScreenStyle: () => hi,
        getHslAnimationFromHsl: () => Ui,
        getHslFromAnimation: () => Vi,
        getLinkColor: () => Ai,
        getLinkRandomColor: () => Bi,
        getLogger: () => Ee,
        getParticleBaseVelocity: () => ve,
        getParticleDirectionAngle: () => ge,
        getPosition: () => ai,
        getRandom: () => ie,
        getRandomRgbColor: () => Ei,
        getRangeMax: () => de,
        getRangeMin: () => he,
        getRangeValue: () => le,
        getSize: () => ri,
        getStyleFromHsl: () => Fi,
        getStyleFromRgb: () => Ri,
        hMax: () => B,
        hMin: () => q,
        hPhase: () => H,
        half: () => g,
        hasMatchMedia: () => Le,
        hslToRgb: () => Ti,
        hslaToRgba: () => Ii,
        identity: () => Dt,
        initParticleNumericAnimationValue: () => oi,
        inverseFactorNumerator: () => L,
        isArray: () => Xt,
        isBoolean: () => Gt,
        isDivModeEnabled: () => Qe,
        isFunction: () => Nt,
        isInArray: () => Ue,
        isNull: () => Yt,
        isNumber: () => Wt,
        isObject: () => Qt,
        isPointInside: () => Ge,
        isSsr: () => Fe,
        isString: () => jt,
        itemFromArray: () => He,
        itemFromSingleOrMultiple: () => ii,
        lFactor: () => It,
        lMax: () => U,
        lMin: () => Et,
        lengthOffset: () => Ct,
        loadFont: () => qe,
        loadMinIndex: () => ct,
        loadOptions: () => no,
        loadParticlesOptions: () => ao,
        loadRandomFactor: () => rt,
        manualCount: () => zt,
        manualDefaultPosition: () => St,
        midColorValue: () => x,
        millisecondsToSeconds: () => v,
        minCoordinate: () => et,
        minCount: () => xt,
        minFpsLimit: () => nt,
        minIndex: () => _t,
        minLimit: () => wt,
        minRetries: () => pt,
        minStrokeWidth: () => Tt,
        minVelocity: () => N,
        minZ: () => mt,
        minimumLength: () => Y,
        minimumSize: () => X,
        mix: () => re,
        mouseDownEvent: () => s,
        mouseLeaveEvent: () => n,
        mouseMoveEvent: () => r,
        mouseOutEvent: () => a,
        mouseUpEvent: () => o,
        none: () => ht,
        one: () => lt,
        originPoint: () => y,
        paintBase: () => ji,
        paintImage: () => Wi,
        parseAlpha: () => Ce,
        percentDenominator: () => m,
        phaseNumerator: () => Bt,
        posOffset: () => vt,
        qTreeCapacity: () => T,
        quarter: () => j,
        randomColorValue: () => b,
        randomInRange: () => ce,
        rangeColorToHsl: () => ki,
        rangeColorToRgb: () => Ci,
        rectBounce: () => ti,
        removeDeleteCount: () => it,
        removeMinIndex: () => st,
        resizeEvent: () => u,
        rgbFactor: () => Rt,
        rgbMax: () => A,
        rgbToHsl: () => Si,
        rollFactor: () => ft,
        sMax: () => V,
        sMin: () => $,
        sNormalizedOffset: () => At,
        safeIntersectionObserver: () => Be,
        safeMatchMedia: () => Ae,
        safeMutationObserver: () => Ve,
        setAnimationFunctions: () => se,
        setLogger: () => Ie,
        setRandom: () => ee,
        setRangeValue: () => ue,
        sextuple: () => Lt,
        singleDivModeExecute: () => Ye,
        sizeFactor: () => yt,
        squareExp: () => D,
        stringToAlpha: () => Oi,
        stringToRgb: () => Di,
        subdivideCount: () => F,
        threeQuarter: () => W,
        touchCancelEvent: () => d,
        touchDelay: () => kt,
        touchEndEvent: () => l,
        touchEndLengthOffset: () => tt,
        touchMoveEvent: () => h,
        touchStartEvent: () => c,
        triple: () => Ft,
        tryCountIncrement: () => ut,
        tsParticles: () => To,
        updateAnimation: () => ci,
        updateColor: () => Hi,
        updateColorValue: () => $i,
        visibilityChangeEvent: () => p,
        zIndexFactorOffset: () => Z,
      });
    const i = "generated",
      s = "pointerdown",
      o = "pointerup",
      n = "pointerleave",
      a = "pointerout",
      r = "pointermove",
      c = "touchstart",
      l = "touchend",
      h = "touchmove",
      d = "touchcancel",
      u = "resize",
      p = "visibilitychange",
      f = "tsParticles - Error",
      m = 100,
      g = 0.5,
      v = 1e3,
      y = { x: 0, y: 0, z: 0 },
      w = { a: 1, b: 0, c: 0, d: 1 },
      b = "random",
      x = "mid",
      _ = 2,
      z = Math.PI * _,
      C = 60,
      M = 1,
      P = "true",
      k = "false",
      S = "canvas",
      O = 0,
      D = 2,
      T = 4,
      I = 1,
      E = 1,
      R = 1,
      F = 4,
      L = 1,
      A = 255,
      B = 360,
      V = 100,
      U = 100,
      q = 0,
      $ = 0,
      H = 60,
      G = 0,
      j = 0.25,
      W = g + j,
      N = 0,
      Q = 1,
      X = 0,
      Y = 0,
      Z = 1,
      K = 1,
      J = 1,
      tt = 1,
      et = 0,
      it = 1,
      st = 0,
      ot = 120,
      nt = 0,
      at = 0,
      rt = 1e4,
      ct = 0,
      lt = 1,
      ht = 0,
      dt = 1,
      ut = 1,
      pt = 0,
      ft = 1,
      mt = 0,
      gt = 0,
      vt = -j,
      yt = 1.5,
      wt = 0,
      bt = 1,
      xt = 0,
      _t = 0,
      zt = 0,
      Ct = 1,
      Mt = 1,
      Pt = 1,
      kt = 500,
      St = 50,
      Ot = 0,
      Dt = 1,
      Tt = 0,
      It = 1,
      Et = 0,
      Rt = 255,
      Ft = 3,
      Lt = 6,
      At = 1,
      Bt = 1,
      Vt = 0,
      Ut = 0,
      qt = 0,
      $t = 0;
    var Ht;
    function Gt(t) {
      return "boolean" == typeof t;
    }
    function jt(t) {
      return "string" == typeof t;
    }
    function Wt(t) {
      return "number" == typeof t;
    }
    function Nt(t) {
      return "function" == typeof t;
    }
    function Qt(t) {
      return "object" == typeof t && null !== t;
    }
    function Xt(t) {
      return Array.isArray(t);
    }
    function Yt(t) {
      return null == t;
    }
    !(function (t) {
      (t.bottom = "bottom"),
        (t.bottomLeft = "bottom-left"),
        (t.bottomRight = "bottom-right"),
        (t.left = "left"),
        (t.none = "none"),
        (t.right = "right"),
        (t.top = "top"),
        (t.topLeft = "top-left"),
        (t.topRight = "top-right"),
        (t.outside = "outside"),
        (t.inside = "inside");
    })(Ht || (Ht = {}));
    class Zt {
      constructor(t, e, i) {
        if (
          ((this._updateFromAngle = (t, e) => {
            (this.x = Math.cos(t) * e), (this.y = Math.sin(t) * e);
          }),
          !Wt(t) && t)
        ) {
          (this.x = t.x), (this.y = t.y);
          const e = t;
          this.z = e.z ? e.z : y.z;
        } else {
          if (void 0 === t || void 0 === e)
            throw new Error(`${f} Vector3d not initialized correctly`);
          (this.x = t), (this.y = e), (this.z = i ?? y.z);
        }
      }
      static get origin() {
        return Zt.create(y.x, y.y, y.z);
      }
      get angle() {
        return Math.atan2(this.y, this.x);
      }
      set angle(t) {
        this._updateFromAngle(t, this.length);
      }
      get length() {
        return Math.sqrt(this.getLengthSq());
      }
      set length(t) {
        this._updateFromAngle(this.angle, t);
      }
      static clone(t) {
        return Zt.create(t.x, t.y, t.z);
      }
      static create(t, e, i) {
        return new Zt(t, e, i);
      }
      add(t) {
        return Zt.create(this.x + t.x, this.y + t.y, this.z + t.z);
      }
      addTo(t) {
        (this.x += t.x), (this.y += t.y), (this.z += t.z);
      }
      copy() {
        return Zt.clone(this);
      }
      distanceTo(t) {
        return this.sub(t).length;
      }
      distanceToSq(t) {
        return this.sub(t).getLengthSq();
      }
      div(t) {
        return Zt.create(this.x / t, this.y / t, this.z / t);
      }
      divTo(t) {
        (this.x /= t), (this.y /= t), (this.z /= t);
      }
      getLengthSq() {
        return this.x ** D + this.y ** D;
      }
      mult(t) {
        return Zt.create(this.x * t, this.y * t, this.z * t);
      }
      multTo(t) {
        (this.x *= t), (this.y *= t), (this.z *= t);
      }
      normalize() {
        const t = this.length;
        t != ht && this.multTo(L / t);
      }
      rotate(t) {
        return Zt.create(
          this.x * Math.cos(t) - this.y * Math.sin(t),
          this.x * Math.sin(t) + this.y * Math.cos(t),
          y.z,
        );
      }
      setTo(t) {
        (this.x = t.x), (this.y = t.y);
        const e = t;
        this.z = e.z ? e.z : y.z;
      }
      sub(t) {
        return Zt.create(this.x - t.x, this.y - t.y, this.z - t.z);
      }
      subFrom(t) {
        (this.x -= t.x), (this.y -= t.y), (this.z -= t.z);
      }
    }
    class Kt extends Zt {
      constructor(t, e) {
        super(t, e, y.z);
      }
      static get origin() {
        return Kt.create(y.x, y.y);
      }
      static clone(t) {
        return Kt.create(t.x, t.y);
      }
      static create(t, e) {
        return new Kt(t, e);
      }
    }
    let Jt = Math.random;
    const te = {
      nextFrame: (t) => requestAnimationFrame(t),
      cancel: (t) => cancelAnimationFrame(t),
    };
    function ee(t = Math.random) {
      Jt = t;
    }
    function ie() {
      return ae(Jt(), 0, 1 - Number.EPSILON);
    }
    function se(t, e) {
      (te.nextFrame = (e) => t(e)), (te.cancel = (t) => e(t));
    }
    function oe(t) {
      return te.nextFrame(t);
    }
    function ne(t) {
      te.cancel(t);
    }
    function ae(t, e, i) {
      return Math.min(Math.max(t, e), i);
    }
    function re(t, e, i, s) {
      return Math.floor((t * i + e * s) / (i + s));
    }
    function ce(t) {
      const e = de(t);
      let i = he(t);
      return e === i && (i = 0), ie() * (e - i) + i;
    }
    function le(t) {
      return Wt(t) ? t : ce(t);
    }
    function he(t) {
      return Wt(t) ? t : t.min;
    }
    function de(t) {
      return Wt(t) ? t : t.max;
    }
    function ue(t, e) {
      if (t === e || (void 0 === e && Wt(t))) return t;
      const i = he(t),
        s = de(t);
      return void 0 !== e
        ? { min: Math.min(i, e), max: Math.max(s, e) }
        : ue(i, s);
    }
    function pe(t, e) {
      const i = t.x - e.x,
        s = t.y - e.y;
      return { dx: i, dy: s, distance: Math.sqrt(i ** 2 + s ** 2) };
    }
    function fe(t, e) {
      return pe(t, e).distance;
    }
    function me(t) {
      return (t * Math.PI) / 180;
    }
    function ge(t, e, i) {
      if (Wt(t)) return me(t);
      switch (t) {
        case Ht.top:
          return -Math.PI * g;
        case Ht.topRight:
          return -Math.PI * j;
        case Ht.right:
          return G;
        case Ht.bottomRight:
          return Math.PI * j;
        case Ht.bottom:
          return Math.PI * g;
        case Ht.bottomLeft:
          return Math.PI * W;
        case Ht.left:
          return Math.PI;
        case Ht.topLeft:
          return -Math.PI * W;
        case Ht.inside:
          return Math.atan2(i.y - e.y, i.x - e.x);
        case Ht.outside:
          return Math.atan2(e.y - i.y, e.x - i.x);
        default:
          return ie() * z;
      }
    }
    function ve(t) {
      const e = Kt.origin;
      return (e.length = 1), (e.angle = t), e;
    }
    function ye(t, e, i, s) {
      return Kt.create(
        (t.x * (i - s)) / (i + s) + (e.x * _ * s) / (i + s),
        t.y,
      );
    }
    function we(t) {
      return void 0 !== t.position?.x && void 0 !== t.position.y
        ? {
            x: (t.position.x * t.size.width) / m,
            y: (t.position.y * t.size.height) / m,
          }
        : void 0;
    }
    function be(t) {
      return {
        x: ((t.position?.x ?? ie() * m) * t.size.width) / m,
        y: ((t.position?.y ?? ie() * m) * t.size.height) / m,
      };
    }
    function xe(t) {
      const e = {
        x: void 0 !== t.position?.x ? le(t.position.x) : void 0,
        y: void 0 !== t.position?.y ? le(t.position.y) : void 0,
      };
      return be({ size: t.size, position: e });
    }
    function _e(t) {
      return {
        x: t.position?.x ?? ie() * t.size.width,
        y: t.position?.y ?? ie() * t.size.height,
      };
    }
    function ze(t) {
      const e = {
        x: void 0 !== t.position?.x ? le(t.position.x) : void 0,
        y: void 0 !== t.position?.y ? le(t.position.y) : void 0,
      };
      return _e({ size: t.size, position: e });
    }
    function Ce(t) {
      return t ? (t.endsWith("%") ? parseFloat(t) / m : parseFloat(t)) : 1;
    }
    var Me, Pe, ke, Se, Oe, De;
    !(function (t) {
      (t.auto = "auto"),
        (t.increase = "increase"),
        (t.decrease = "decrease"),
        (t.random = "random");
    })(Me || (Me = {})),
      (function (t) {
        (t.increasing = "increasing"), (t.decreasing = "decreasing");
      })(Pe || (Pe = {})),
      (function (t) {
        (t.none = "none"), (t.max = "max"), (t.min = "min");
      })(ke || (ke = {})),
      (function (t) {
        (t.bottom = "bottom"),
          (t.left = "left"),
          (t.right = "right"),
          (t.top = "top");
      })(Se || (Se = {})),
      (function (t) {
        (t.precise = "precise"), (t.percent = "percent");
      })(Oe || (Oe = {})),
      (function (t) {
        (t.max = "max"), (t.min = "min"), (t.random = "random");
      })(De || (De = {}));
    const Te = {
      debug: console.debug,
      error: console.error,
      info: console.info,
      log: console.log,
      verbose: console.log,
      warning: console.warn,
    };
    function Ie(t) {
      (Te.debug = t.debug || Te.debug),
        (Te.error = t.error || Te.error),
        (Te.info = t.info || Te.info),
        (Te.log = t.log || Te.log),
        (Te.verbose = t.verbose || Te.verbose),
        (Te.warning = t.warning || Te.warning);
    }
    function Ee() {
      return Te;
    }
    function Re(t) {
      const e = { bounced: !1 },
        {
          pSide: i,
          pOtherSide: s,
          rectSide: o,
          rectOtherSide: n,
          velocity: a,
          factor: r,
        } = t;
      return (
        s.min < n.min ||
          s.min > n.max ||
          s.max < n.min ||
          s.max > n.max ||
          (((i.max >= o.min && i.max <= (o.max + o.min) * g && a > N) ||
            (i.min <= o.max && i.min > (o.max + o.min) * g && a < N)) &&
            ((e.velocity = a * -r), (e.bounced = !0))),
        e
      );
    }
    function Fe() {
      return (
        "undefined" == typeof window ||
        !window ||
        void 0 === window.document ||
        !window.document
      );
    }
    function Le() {
      return !Fe() && "undefined" != typeof matchMedia;
    }
    function Ae(t) {
      if (Le()) return matchMedia(t);
    }
    function Be(t) {
      if (!Fe() && "undefined" != typeof IntersectionObserver)
        return new IntersectionObserver(t);
    }
    function Ve(t) {
      if (!Fe() && "undefined" != typeof MutationObserver)
        return new MutationObserver(t);
    }
    function Ue(t, e) {
      return t === e || (Xt(e) && e.indexOf(t) > -1);
    }
    async function qe(t, e) {
      try {
        await document.fonts.load(`${e ?? "400"} 36px '${t ?? "Verdana"}'`);
      } catch {}
    }
    function $e(t) {
      return Math.floor(ie() * t.length);
    }
    function He(t, e, i = !0) {
      return t[void 0 !== e && i ? e % t.length : $e(t)];
    }
    function Ge(t, e, i, s, o) {
      return je(We(t, s ?? 0), e, i, o);
    }
    function je(t, e, i, s) {
      let o = !0;
      return (
        (s && s !== Se.bottom) || (o = t.top < e.height + i.x),
        !o || (s && s !== Se.left) || (o = t.right > i.x),
        !o || (s && s !== Se.right) || (o = t.left < e.width + i.y),
        !o || (s && s !== Se.top) || (o = t.bottom > i.y),
        o
      );
    }
    function We(t, e) {
      return { bottom: t.y + e, left: t.x - e, right: t.x + e, top: t.y - e };
    }
    function Ne(t, ...e) {
      for (const i of e) {
        if (null == i) continue;
        if (!Qt(i)) {
          t = i;
          continue;
        }
        const e = Array.isArray(i);
        !e || (!Qt(t) && t && Array.isArray(t))
          ? e || (!Qt(t) && t && !Array.isArray(t)) || (t = {})
          : (t = []);
        for (const e in i) {
          if ("__proto__" === e) continue;
          const s = i[e],
            o = t;
          o[e] =
            Qt(s) && Array.isArray(s) ? s.map((t) => Ne(o[e], t)) : Ne(o[e], s);
        }
      }
      return t;
    }
    function Qe(t, e) {
      return !!si(e, (e) => e.enable && Ue(t, e.mode));
    }
    function Xe(t, e, i) {
      ei(e, (e) => {
        const s = e.mode;
        e.enable && Ue(t, s) && Ye(e, i);
      });
    }
    function Ye(t, e) {
      ei(t.selectors, (i) => {
        e(i, t);
      });
    }
    function Ze(t, e) {
      if (e && t)
        return si(t, (t) =>
          (function (t, e) {
            const i = ei(e, (e) => t.matches(e));
            return Xt(i) ? i.some((t) => t) : i;
          })(e, t.selectors),
        );
    }
    function Ke(t) {
      return {
        position: t.getPosition(),
        radius: t.getRadius(),
        mass: t.getMass(),
        velocity: t.velocity,
        factor: Kt.create(
          le(t.options.bounce.horizontal.value),
          le(t.options.bounce.vertical.value),
        ),
      };
    }
    function Je(t, e) {
      const { x: i, y: s } = t.velocity.sub(e.velocity),
        [o, n] = [t.position, e.position],
        { dx: a, dy: r } = pe(n, o);
      if (i * a + s * r < 0) return;
      const c = -Math.atan2(r, a),
        l = t.mass,
        h = e.mass,
        d = t.velocity.rotate(c),
        u = e.velocity.rotate(c),
        p = ye(d, u, l, h),
        f = ye(u, d, l, h),
        m = p.rotate(-c),
        g = f.rotate(-c);
      (t.velocity.x = m.x * t.factor.x),
        (t.velocity.y = m.y * t.factor.y),
        (e.velocity.x = g.x * e.factor.x),
        (e.velocity.y = g.y * e.factor.y);
    }
    function ti(t, e) {
      const i = We(t.getPosition(), t.getRadius()),
        s = t.options.bounce,
        o = Re({
          pSide: { min: i.left, max: i.right },
          pOtherSide: { min: i.top, max: i.bottom },
          rectSide: { min: e.left, max: e.right },
          rectOtherSide: { min: e.top, max: e.bottom },
          velocity: t.velocity.x,
          factor: le(s.horizontal.value),
        });
      o.bounced &&
        (void 0 !== o.velocity && (t.velocity.x = o.velocity),
        void 0 !== o.position && (t.position.x = o.position));
      const n = Re({
        pSide: { min: i.top, max: i.bottom },
        pOtherSide: { min: i.left, max: i.right },
        rectSide: { min: e.top, max: e.bottom },
        rectOtherSide: { min: e.left, max: e.right },
        velocity: t.velocity.y,
        factor: le(s.vertical.value),
      });
      n.bounced &&
        (void 0 !== n.velocity && (t.velocity.y = n.velocity),
        void 0 !== n.position && (t.position.y = n.position));
    }
    function ei(t, e) {
      return Xt(t) ? t.map((t, i) => e(t, i)) : e(t, 0);
    }
    function ii(t, e, i) {
      return Xt(t) ? He(t, e, i) : t;
    }
    function si(t, e) {
      if (Xt(t)) return t.find((t, i) => e(t, i));
      return e(t, 0) ? t : void 0;
    }
    function oi(t, e) {
      const i = t.value,
        s = t.animation,
        o = {
          delayTime: le(s.delay) * v,
          enable: s.enable,
          value: le(t.value) * e,
          max: de(i) * e,
          min: he(i) * e,
          loops: 0,
          maxLoops: le(s.count),
          time: 0,
        };
      if (s.enable) {
        switch (((o.decay = 1 - le(s.decay)), s.mode)) {
          case Me.increase:
            o.status = Pe.increasing;
            break;
          case Me.decrease:
            o.status = Pe.decreasing;
            break;
          case Me.random:
            o.status = ie() >= g ? Pe.increasing : Pe.decreasing;
        }
        const t = s.mode === Me.auto;
        switch (s.startValue) {
          case De.min:
            (o.value = o.min), t && (o.status = Pe.increasing);
            break;
          case De.max:
            (o.value = o.max), t && (o.status = Pe.decreasing);
            break;
          case De.random:
          default:
            (o.value = ce(o)),
              t && (o.status = ie() >= g ? Pe.increasing : Pe.decreasing);
        }
      }
      return (o.initialValue = o.value), o;
    }
    function ni(t, e) {
      if (!(t.mode === Oe.percent)) {
        const { mode: e, ...i } = t;
        return i;
      }
      return "x" in t
        ? { x: (t.x / m) * e.width, y: (t.y / m) * e.height }
        : { width: (t.width / m) * e.width, height: (t.height / m) * e.height };
    }
    function ai(t, e) {
      return ni(t, e);
    }
    function ri(t, e) {
      return ni(t, e);
    }
    function ci(t, e, i, s, o) {
      if (
        t.destroyed ||
        !e ||
        !e.enable ||
        ((e.maxLoops ?? 0) > 0 && (e.loops ?? 0) > (e.maxLoops ?? 0))
      )
        return;
      const n = (e.velocity ?? 0) * o.factor,
        a = e.min,
        r = e.max,
        c = e.decay ?? 1;
      if (
        (e.time || (e.time = 0),
        (e.delayTime ?? 0) > 0 &&
          e.time < (e.delayTime ?? 0) &&
          (e.time += o.value),
        !((e.delayTime ?? 0) > 0 && e.time < (e.delayTime ?? 0)))
      ) {
        switch (e.status) {
          case Pe.increasing:
            e.value >= r
              ? (i ? (e.status = Pe.decreasing) : (e.value -= r),
                e.loops || (e.loops = 0),
                e.loops++)
              : (e.value += n);
            break;
          case Pe.decreasing:
            e.value <= a
              ? (i ? (e.status = Pe.increasing) : (e.value += r),
                e.loops || (e.loops = 0),
                e.loops++)
              : (e.value -= n);
        }
        e.velocity && 1 !== c && (e.velocity *= c),
          (function (t, e, i, s, o) {
            switch (e) {
              case ke.max:
                i >= o && t.destroy();
                break;
              case ke.min:
                i <= s && t.destroy();
            }
          })(t, s, e.value, a, r),
          t.destroyed || (e.value = ae(e.value, a, r));
      }
    }
    function li(t) {
      const e = document.createElement("div").style;
      if (!t) return e;
      for (const i in t) {
        const s = t[i];
        if (!Object.prototype.hasOwnProperty.call(t, i) || Yt(s)) continue;
        const o = t.getPropertyValue?.(s);
        if (!o) continue;
        const n = t.getPropertyPriority?.(s);
        n ? e.setProperty?.(s, o, n) : e.setProperty?.(s, o);
      }
      return e;
    }
    const hi = (function (t) {
      const e = new Map();
      return (...i) => {
        const s = JSON.stringify(i);
        if (e.has(s)) return e.get(s);
        const o = t(...i);
        return e.set(s, o), o;
      };
    })(function (t) {
      const e = document.createElement("div").style,
        i = {
          width: "100%",
          height: "100%",
          margin: "0",
          padding: "0",
          borderWidth: "0",
          position: "fixed",
          zIndex: t.toString(10),
          "z-index": t.toString(10),
          top: "0",
          left: "0",
        };
      for (const t in i) {
        const s = i[t];
        e.setProperty(t, s);
      }
      return e;
    });
    var di, ui, pi, fi, mi, gi, vi, yi, wi, bi, xi, _i;
    function zi(t, e) {
      if (e)
        for (const i of t.colorManagers.values())
          if (e.startsWith(i.stringPrefix)) return i.parseString(e);
    }
    function Ci(t, e, i, s = !0) {
      if (!e) return;
      const o = jt(e) ? { value: e } : e;
      if (jt(o.value)) return Mi(t, o.value, i, s);
      if (Xt(o.value)) return Ci(t, { value: He(o.value, i, s) });
      for (const e of t.colorManagers.values()) {
        const t = e.handleRangeColor(o);
        if (t) return t;
      }
    }
    function Mi(t, e, i, s = !0) {
      if (!e) return;
      const o = jt(e) ? { value: e } : e;
      if (jt(o.value)) return o.value === b ? Ei() : Di(t, o.value);
      if (Xt(o.value)) return Mi(t, { value: He(o.value, i, s) });
      for (const e of t.colorManagers.values()) {
        const t = e.handleColor(o);
        if (t) return t;
      }
    }
    function Pi(t, e, i, s = !0) {
      const o = Mi(t, e, i, s);
      return o ? Si(o) : void 0;
    }
    function ki(t, e, i, s = !0) {
      const o = Ci(t, e, i, s);
      return o ? Si(o) : void 0;
    }
    function Si(t) {
      const e = t.r / A,
        i = t.g / A,
        s = t.b / A,
        o = Math.max(e, i, s),
        n = Math.min(e, i, s),
        a = { h: q, l: (o + n) * g, s: $ };
      return (
        o !== n &&
          ((a.s = a.l < g ? (o - n) / (o + n) : (o - n) / (_ - o - n)),
          (a.h =
            e === o
              ? (i - s) / (o - n)
              : (a.h =
                  i === o
                    ? _ + (s - e) / (o - n)
                    : _ * _ + (e - i) / (o - n)))),
        (a.l *= U),
        (a.s *= V),
        (a.h *= H),
        a.h < q && (a.h += B),
        a.h >= B && (a.h -= B),
        a
      );
    }
    function Oi(t, e) {
      return zi(t, e)?.a;
    }
    function Di(t, e) {
      return zi(t, e);
    }
    function Ti(t) {
      const e = ((t.h % B) + B) % B,
        i = Math.max($, Math.min(V, t.s)),
        s = Math.max(Et, Math.min(U, t.l)),
        o = e / B,
        n = i / V,
        a = s / U;
      if (i === $) {
        const t = Math.round(a * Rt);
        return { r: t, g: t, b: t };
      }
      const r = (t, e, i) => {
          if ((i < 0 && i++, i > 1 && i--, i * Lt < 1))
            return t + (e - t) * Lt * i;
          if (i * _ < 1) return e;
          if (i * Ft < 1 * _) {
            return t + (e - t) * (_ / Ft - i) * Lt;
          }
          return t;
        },
        c = a < g ? a * (At + n) : a + n - a * n,
        l = _ * a - c,
        h = Bt / Ft,
        d = Math.min(Rt, Rt * r(l, c, o + h)),
        u = Math.min(Rt, Rt * r(l, c, o)),
        p = Math.min(Rt, Rt * r(l, c, o - h));
      return { r: Math.round(d), g: Math.round(u), b: Math.round(p) };
    }
    function Ii(t) {
      const e = Ti(t);
      return { a: t.a, b: e.b, g: e.g, r: e.r };
    }
    function Ei(t) {
      const e = t ?? Vt,
        i = A + Dt;
      return {
        b: Math.floor(ce(ue(e, i))),
        g: Math.floor(ce(ue(e, i))),
        r: Math.floor(ce(ue(e, i))),
      };
    }
    function Ri(t, e) {
      return `rgba(${t.r}, ${t.g}, ${t.b}, ${e ?? K})`;
    }
    function Fi(t, e) {
      return `hsla(${t.h}, ${t.s}%, ${t.l}%, ${e ?? K})`;
    }
    function Li(t, e, i, s) {
      let o = t,
        n = e;
      return (
        void 0 === o.r && (o = Ti(t)),
        void 0 === n.r && (n = Ti(e)),
        { b: re(o.b, n.b, i, s), g: re(o.g, n.g, i, s), r: re(o.r, n.r, i, s) }
      );
    }
    function Ai(t, e, i) {
      if (i === b) return Ei();
      if (i !== x) return i;
      {
        const i = t.getFillColor() ?? t.getStrokeColor(),
          s = e?.getFillColor() ?? e?.getStrokeColor();
        if (i && s && e) return Li(i, s, t.getRadius(), e.getRadius());
        {
          const t = i ?? s;
          if (t) return Ti(t);
        }
      }
    }
    function Bi(t, e, i, s) {
      const o = jt(e) ? e : e.value;
      return o === b
        ? s
          ? Ci(t, { value: o })
          : i
            ? b
            : x
        : o === x
          ? x
          : Ci(t, { value: o });
    }
    function Vi(t) {
      return void 0 !== t
        ? { h: t.h.value, s: t.s.value, l: t.l.value }
        : void 0;
    }
    function Ui(t, e, i) {
      const s = {
        h: { enable: !1, value: t.h },
        s: { enable: !1, value: t.s },
        l: { enable: !1, value: t.l },
      };
      return e && (qi(s.h, e.h, i), qi(s.s, e.s, i), qi(s.l, e.l, i)), s;
    }
    function qi(t, e, i) {
      (t.enable = e.enable),
        t.enable
          ? ((t.velocity = (le(e.speed) / m) * i),
            (t.decay = dt - le(e.decay)),
            (t.status = Pe.increasing),
            (t.loops = qt),
            (t.maxLoops = le(e.count)),
            (t.time = $t),
            (t.delayTime = le(e.delay) * v),
            e.sync || ((t.velocity *= ie()), (t.value *= ie())),
            (t.initialValue = t.value),
            (t.offset = ue(e.offset)))
          : (t.velocity = Ut);
    }
    function $i(t, e, i, s) {
      if (
        !t ||
        !t.enable ||
        ((t.maxLoops ?? 0) > 0 && (t.loops ?? 0) > (t.maxLoops ?? 0))
      )
        return;
      if (
        (t.time || (t.time = 0),
        (t.delayTime ?? 0) > 0 &&
          t.time < (t.delayTime ?? 0) &&
          (t.time += s.value),
        (t.delayTime ?? 0) > 0 && t.time < (t.delayTime ?? 0))
      )
        return;
      const o = t.offset ? ce(t.offset) : 0,
        n = (t.velocity ?? 0) * s.factor + 3.6 * o,
        a = t.decay ?? 1,
        r = de(e),
        c = he(e);
      if (i && t.status !== Pe.increasing) {
        t.value -= n;
        const e = 0;
        t.value < e &&
          (t.loops || (t.loops = 0), t.loops++, (t.status = Pe.increasing));
      } else
        (t.value += n),
          t.value > r &&
            (t.loops || (t.loops = 0),
            t.loops++,
            i ? (t.status = Pe.decreasing) : (t.value -= r));
      t.velocity && 1 !== a && (t.velocity *= a), (t.value = ae(t.value, c, r));
    }
    function Hi(t, e) {
      if (!t) return;
      const { h: i, s, l: o } = t,
        n = { min: 0, max: 100 },
        a = { min: 0, max: 100 };
      i && $i(i, { min: 0, max: 360 }, !1, e),
        s && $i(s, n, !0, e),
        o && $i(o, a, !0, e);
    }
    function Gi(t, e, i) {
      t.beginPath(), t.moveTo(e.x, e.y), t.lineTo(i.x, i.y), t.closePath();
    }
    function ji(t, e, i) {
      (t.fillStyle = i ?? "rgba(0,0,0,0)"),
        t.fillRect(y.x, y.y, e.width, e.height);
    }
    function Wi(t, e, i, s) {
      i &&
        ((t.globalAlpha = s),
        t.drawImage(i, y.x, y.y, e.width, e.height),
        (t.globalAlpha = 1));
    }
    function Ni(t, e) {
      t.clearRect(y.x, y.y, e.width, e.height);
    }
    function Qi(t) {
      const {
          container: e,
          context: i,
          particle: s,
          delta: o,
          colorStyles: n,
          backgroundMask: a,
          composite: r,
          radius: c,
          opacity: l,
          shadow: h,
          transform: d,
        } = t,
        u = s.getPosition(),
        p = s.rotation + (s.pathRotation ? s.velocity.angle : Ot),
        f = Math.sin(p),
        m = Math.cos(p),
        g = !!p,
        v = {
          a: m * (d.a ?? w.a),
          b: g ? f * (d.b ?? Dt) : (d.b ?? w.b),
          c: g ? -f * (d.c ?? Dt) : (d.c ?? w.c),
          d: m * (d.d ?? w.d),
        };
      i.setTransform(v.a, v.b, v.c, v.d, u.x, u.y),
        a && (i.globalCompositeOperation = r);
      const y = s.shadowColor;
      h.enable &&
        y &&
        ((i.shadowBlur = h.blur),
        (i.shadowColor = Ri(y)),
        (i.shadowOffsetX = h.offset.x),
        (i.shadowOffsetY = h.offset.y)),
        n.fill && (i.fillStyle = n.fill);
      const b = s.strokeWidth ?? Tt;
      (i.lineWidth = b), n.stroke && (i.strokeStyle = n.stroke);
      const x = {
        container: e,
        context: i,
        particle: s,
        radius: c,
        opacity: l,
        delta: o,
        transformData: v,
        strokeWidth: b,
      };
      Yi(x),
        Zi(x),
        Xi(x),
        (i.globalCompositeOperation = "source-over"),
        i.resetTransform();
    }
    function Xi(t) {
      const {
        container: e,
        context: i,
        particle: s,
        radius: o,
        opacity: n,
        delta: a,
        transformData: r,
      } = t;
      if (!s.effect) return;
      const c = e.effectDrawers.get(s.effect);
      c &&
        c.draw({
          context: i,
          particle: s,
          radius: o,
          opacity: n,
          delta: a,
          pixelRatio: e.retina.pixelRatio,
          transformData: { ...r },
        });
    }
    function Yi(t) {
      const {
        container: e,
        context: i,
        particle: s,
        radius: o,
        opacity: n,
        delta: a,
        strokeWidth: r,
        transformData: c,
      } = t;
      if (!s.shape) return;
      const l = e.shapeDrawers.get(s.shape);
      l &&
        (i.beginPath(),
        l.draw({
          context: i,
          particle: s,
          radius: o,
          opacity: n,
          delta: a,
          pixelRatio: e.retina.pixelRatio,
          transformData: { ...c },
        }),
        s.shapeClose && i.closePath(),
        r > Tt && i.stroke(),
        s.shapeFill && i.fill());
    }
    function Zi(t) {
      const {
        container: e,
        context: i,
        particle: s,
        radius: o,
        opacity: n,
        delta: a,
        transformData: r,
      } = t;
      if (!s.shape) return;
      const c = e.shapeDrawers.get(s.shape);
      c?.afterDraw &&
        c.afterDraw({
          context: i,
          particle: s,
          radius: o,
          opacity: n,
          delta: a,
          pixelRatio: e.retina.pixelRatio,
          transformData: { ...r },
        });
    }
    function Ki(t, e, i) {
      e.draw && e.draw(t, i);
    }
    function Ji(t, e, i, s) {
      e.drawParticle && e.drawParticle(t, i, s);
    }
    function ts(t, e, i) {
      return { h: t.h, s: t.s, l: t.l + (e === di.darken ? -It : It) * i };
    }
    function es(t, e, i) {
      const s = e[i];
      void 0 !== s && (t[i] = (t[i] ?? Q) * s);
    }
    function is(t, e, i = !1) {
      if (!e) return;
      if (!t) return;
      const s = t.style;
      if (!s) return;
      const o = new Set();
      for (const t in s)
        Object.prototype.hasOwnProperty.call(s, t) && o.add(s[t]);
      for (const t in e)
        Object.prototype.hasOwnProperty.call(e, t) && o.add(e[t]);
      for (const t of o) {
        const o = e.getPropertyValue(t);
        o ? s.setProperty(t, o, i ? "important" : "") : s.removeProperty(t);
      }
    }
    !(function (t) {
      (t.darken = "darken"), (t.enlighten = "enlighten");
    })(di || (di = {}));
    class ss {
      constructor(t, e) {
        (this.container = t),
          (this._applyPostDrawUpdaters = (t) => {
            for (const e of this._postDrawUpdaters) e.afterDraw?.(t);
          }),
          (this._applyPreDrawUpdaters = (t, e, i, s, o, n) => {
            for (const a of this._preDrawUpdaters) {
              if (a.getColorStyles) {
                const { fill: n, stroke: r } = a.getColorStyles(e, t, i, s);
                n && (o.fill = n), r && (o.stroke = r);
              }
              if (a.getTransformValues) {
                const t = a.getTransformValues(e);
                for (const e in t) es(n, t, e);
              }
              a.beforeDraw?.(e);
            }
          }),
          (this._applyResizePlugins = () => {
            for (const t of this._resizePlugins) t.resize?.();
          }),
          (this._getPluginParticleColors = (t) => {
            let e, i;
            for (const s of this._colorPlugins)
              if (
                (!e &&
                  s.particleFillColor &&
                  (e = ki(this._engine, s.particleFillColor(t))),
                !i &&
                  s.particleStrokeColor &&
                  (i = ki(this._engine, s.particleStrokeColor(t))),
                e && i)
              )
                break;
            return [e, i];
          }),
          (this._initCover = async () => {
            const t = this.container.actualOptions.backgroundMask.cover,
              e = t.color;
            if (e) {
              const i = Ci(this._engine, e);
              if (i) {
                const e = { ...i, a: t.opacity };
                this._coverColorStyle = Ri(e, e.a);
              }
            } else
              await new Promise((e, i) => {
                if (!t.image) return;
                const s = document.createElement("img");
                s.addEventListener("load", () => {
                  (this._coverImage = { image: s, opacity: t.opacity }), e();
                }),
                  s.addEventListener("error", (t) => {
                    i(t.error);
                  }),
                  (s.src = t.image);
              });
          }),
          (this._initStyle = () => {
            const t = this.element,
              e = this.container.actualOptions;
            if (t) {
              this._fullScreen
                ? this._setFullScreenStyle()
                : this._resetOriginalStyle();
              for (const i in e.style) {
                if (
                  !i ||
                  !e.style ||
                  !Object.prototype.hasOwnProperty.call(e.style, i)
                )
                  continue;
                const s = e.style[i];
                s && t.style.setProperty(i, s, "important");
              }
            }
          }),
          (this._initTrail = async () => {
            const t = this.container.actualOptions.particles.move.trail,
              e = t.fill;
            if (!t.enable) return;
            const i = L / t.length;
            if (e.color) {
              const t = Ci(this._engine, e.color);
              if (!t) return;
              this._trailFill = { color: { ...t }, opacity: i };
            } else
              await new Promise((t, s) => {
                if (!e.image) return;
                const o = document.createElement("img");
                o.addEventListener("load", () => {
                  (this._trailFill = { image: o, opacity: i }), t();
                }),
                  o.addEventListener("error", (t) => {
                    s(t.error);
                  }),
                  (o.src = e.image);
              });
          }),
          (this._paintBase = (t) => {
            this.draw((e) => ji(e, this.size, t));
          }),
          (this._paintImage = (t, e) => {
            this.draw((i) => Wi(i, this.size, t, e));
          }),
          (this._repairStyle = () => {
            const t = this.element;
            t &&
              (this._safeMutationObserver((t) => t.disconnect()),
              this._initStyle(),
              this.initBackground(),
              this._safeMutationObserver((e) => {
                t && t instanceof Node && e.observe(t, { attributes: !0 });
              }));
          }),
          (this._resetOriginalStyle = () => {
            const t = this.element,
              e = this._originalStyle;
            t && e && is(t, e, !0);
          }),
          (this._safeMutationObserver = (t) => {
            this._mutationObserver && t(this._mutationObserver);
          }),
          (this._setFullScreenStyle = () => {
            const t = this.element;
            t && is(t, hi(this.container.actualOptions.fullScreen.zIndex), !0);
          }),
          (this._engine = e),
          (this._standardSize = { height: 0, width: 0 });
        const i = t.retina.pixelRatio,
          s = this._standardSize;
        (this.size = { height: s.height * i, width: s.width * i }),
          (this._context = null),
          (this._generated = !1),
          (this._preDrawUpdaters = []),
          (this._postDrawUpdaters = []),
          (this._resizePlugins = []),
          (this._colorPlugins = []);
      }
      get _fullScreen() {
        return this.container.actualOptions.fullScreen.enable;
      }
      clear() {
        const t = this.container.actualOptions,
          e = t.particles.move.trail,
          i = this._trailFill;
        t.backgroundMask.enable
          ? this.paint()
          : e.enable && e.length > Y && i
            ? i.color
              ? this._paintBase(Ri(i.color, i.opacity))
              : i.image && this._paintImage(i.image, i.opacity)
            : t.clear &&
              this.draw((t) => {
                Ni(t, this.size);
              });
      }
      destroy() {
        if ((this.stop(), this._generated)) {
          const t = this.element;
          t?.remove(), (this.element = void 0);
        } else this._resetOriginalStyle();
        (this._preDrawUpdaters = []),
          (this._postDrawUpdaters = []),
          (this._resizePlugins = []),
          (this._colorPlugins = []);
      }
      draw(t) {
        const e = this._context;
        if (e) return t(e);
      }
      drawAsync(t) {
        const e = this._context;
        if (e) return t(e);
      }
      drawParticle(t, e) {
        if (t.spawning || t.destroyed) return;
        const i = t.getRadius();
        if (i <= X) return;
        const s = t.getFillColor(),
          o = t.getStrokeColor() ?? s;
        let [n, a] = this._getPluginParticleColors(t);
        n || (n = s),
          a || (a = o),
          (n || a) &&
            this.draw((s) => {
              const o = this.container,
                r = o.actualOptions,
                c = t.options.zIndex,
                l = Z - t.zIndexFactor,
                h = l ** c.opacityRate,
                d = t.bubble.opacity ?? t.opacity?.value ?? K,
                u = d * h,
                p = (t.strokeOpacity ?? d) * h,
                f = {},
                m = { fill: n ? Fi(n, u) : void 0 };
              (m.stroke = a ? Fi(a, p) : m.fill),
                this._applyPreDrawUpdaters(s, t, i, u, m, f),
                Qi({
                  container: o,
                  context: s,
                  particle: t,
                  delta: e,
                  colorStyles: m,
                  backgroundMask: r.backgroundMask.enable,
                  composite: r.backgroundMask.composite,
                  radius: i * l ** c.sizeRate,
                  opacity: u,
                  shadow: t.options.shadow,
                  transform: f,
                }),
                this._applyPostDrawUpdaters(t);
            });
      }
      drawParticlePlugin(t, e, i) {
        this.draw((s) => Ji(s, t, e, i));
      }
      drawPlugin(t, e) {
        this.draw((i) => Ki(i, t, e));
      }
      async init() {
        this._safeMutationObserver((t) => t.disconnect()),
          (this._mutationObserver = Ve((t) => {
            for (const e of t)
              "attributes" === e.type &&
                "style" === e.attributeName &&
                this._repairStyle();
          })),
          this.resize(),
          this._initStyle(),
          await this._initCover();
        try {
          await this._initTrail();
        } catch (t) {
          Ee().error(t);
        }
        this.initBackground(),
          this._safeMutationObserver((t) => {
            this.element &&
              this.element instanceof Node &&
              t.observe(this.element, { attributes: !0 });
          }),
          this.initUpdaters(),
          this.initPlugins(),
          this.paint();
      }
      initBackground() {
        const t = this.container.actualOptions.background,
          e = this.element;
        if (!e) return;
        const i = e.style;
        if (i) {
          if (t.color) {
            const e = Ci(this._engine, t.color);
            i.backgroundColor = e ? Ri(e, t.opacity) : "";
          } else i.backgroundColor = "";
          (i.backgroundImage = t.image || ""),
            (i.backgroundPosition = t.position || ""),
            (i.backgroundRepeat = t.repeat || ""),
            (i.backgroundSize = t.size || "");
        }
      }
      initPlugins() {
        this._resizePlugins = [];
        for (const t of this.container.plugins.values())
          t.resize && this._resizePlugins.push(t),
            (t.particleFillColor ?? t.particleStrokeColor) &&
              this._colorPlugins.push(t);
      }
      initUpdaters() {
        (this._preDrawUpdaters = []), (this._postDrawUpdaters = []);
        for (const t of this.container.particles.updaters)
          t.afterDraw && this._postDrawUpdaters.push(t),
            (t.getColorStyles ?? t.getTransformValues ?? t.beforeDraw) &&
              this._preDrawUpdaters.push(t);
      }
      loadCanvas(t) {
        this._generated && this.element && this.element.remove(),
          (this._generated =
            t.dataset && i in t.dataset
              ? "true" === t.dataset[i]
              : this._generated),
          (this.element = t),
          (this.element.ariaHidden = "true"),
          (this._originalStyle = li(this.element.style));
        const e = this._standardSize;
        (e.height = t.offsetHeight), (e.width = t.offsetWidth);
        const s = this.container.retina.pixelRatio,
          o = this.size;
        (t.height = o.height = e.height * s),
          (t.width = o.width = e.width * s),
          (this._context = this.element.getContext("2d")),
          this._safeMutationObserver((t) => t.disconnect()),
          this.container.retina.init(),
          this.initBackground(),
          this._safeMutationObserver((t) => {
            this.element &&
              this.element instanceof Node &&
              t.observe(this.element, { attributes: !0 });
          });
      }
      paint() {
        const t = this.container.actualOptions;
        this.draw((e) => {
          t.backgroundMask.enable && t.backgroundMask.cover
            ? (Ni(e, this.size),
              this._coverImage
                ? this._paintImage(
                    this._coverImage.image,
                    this._coverImage.opacity,
                  )
                : this._coverColorStyle
                  ? this._paintBase(this._coverColorStyle)
                  : this._paintBase())
            : this._paintBase();
        });
      }
      resize() {
        if (!this.element) return !1;
        const t = this.container,
          e = t.canvas._standardSize,
          i = {
            width: this.element.offsetWidth,
            height: this.element.offsetHeight,
          },
          s = t.retina.pixelRatio,
          o = { width: i.width * s, height: i.height * s };
        if (
          i.height === e.height &&
          i.width === e.width &&
          o.height === this.element.height &&
          o.width === this.element.width
        )
          return !1;
        const n = { ...e };
        (e.height = i.height), (e.width = i.width);
        const a = this.size;
        return (
          (this.element.width = a.width = o.width),
          (this.element.height = a.height = o.height),
          this.container.started &&
            t.particles.setResizeFactor({
              width: e.width / n.width,
              height: e.height / n.height,
            }),
          !0
        );
      }
      stop() {
        this._safeMutationObserver((t) => t.disconnect()),
          (this._mutationObserver = void 0),
          this.draw((t) => Ni(t, this.size));
      }
      async windowResize() {
        if (!this.element || !this.resize()) return;
        const t = this.container,
          e = t.updateActualOptions();
        t.particles.setDensity(),
          this._applyResizePlugins(),
          e && (await t.refresh());
      }
    }
    function os(t, e, i, s, o) {
      if (s) {
        let s = { passive: !0 };
        Gt(o) ? (s.capture = o) : void 0 !== o && (s = o),
          t.addEventListener(e, i, s);
      } else {
        const s = o;
        t.removeEventListener(e, i, s);
      }
    }
    !(function (t) {
      (t.canvas = "canvas"), (t.parent = "parent"), (t.window = "window");
    })(ui || (ui = {}));
    class ns {
      constructor(t) {
        (this.container = t),
          (this._doMouseTouchClick = (t) => {
            const e = this.container,
              i = e.actualOptions;
            if (this._canPush) {
              const t = e.interactivity.mouse,
                s = t.position;
              if (!s) return;
              (t.clickPosition = { ...s }),
                (t.clickTime = new Date().getTime());
              ei(i.interactivity.events.onClick.mode, (t) =>
                this.container.handleClickMode(t),
              );
            }
            "touchend" === t.type &&
              setTimeout(() => this._mouseTouchFinish(), kt);
          }),
          (this._handleThemeChange = (t) => {
            const e = t,
              i = this.container,
              s = i.options,
              o = s.defaultThemes,
              n = e.matches ? o.dark : o.light,
              a = s.themes.find((t) => t.name === n);
            a?.default.auto && i.loadTheme(n);
          }),
          (this._handleVisibilityChange = () => {
            const t = this.container,
              e = t.actualOptions;
            this._mouseTouchFinish(),
              e.pauseOnBlur &&
                (document?.hidden
                  ? ((t.pageHidden = !0), t.pause())
                  : ((t.pageHidden = !1),
                    t.animationStatus ? t.play(!0) : t.draw(!0)));
          }),
          (this._handleWindowResize = () => {
            this._resizeTimeout &&
              (clearTimeout(this._resizeTimeout), delete this._resizeTimeout);
            const t = async () => {
              const t = this.container.canvas;
              await t?.windowResize();
            };
            this._resizeTimeout = setTimeout(() => {
              t();
            }, this.container.actualOptions.interactivity.events.resize.delay * v);
          }),
          (this._manageInteractivityListeners = (t, e) => {
            const i = this._handlers,
              n = this.container,
              a = n.actualOptions,
              u = n.interactivity.element;
            if (!u) return;
            const p = u,
              f = n.canvas.element;
            f && (f.style.pointerEvents = p === f ? "initial" : "none"),
              (a.interactivity.events.onHover.enable ||
                a.interactivity.events.onClick.enable) &&
                (os(u, r, i.mouseMove, e),
                os(u, c, i.touchStart, e),
                os(u, h, i.touchMove, e),
                a.interactivity.events.onClick.enable
                  ? (os(u, l, i.touchEndClick, e),
                    os(u, o, i.mouseUp, e),
                    os(u, s, i.mouseDown, e))
                  : os(u, l, i.touchEnd, e),
                os(u, t, i.mouseLeave, e),
                os(u, d, i.touchCancel, e));
          }),
          (this._manageListeners = (t) => {
            const e = this._handlers,
              i = this.container,
              s = i.actualOptions.interactivity.detectsOn,
              o = i.canvas.element;
            let r = n;
            s === ui.window
              ? ((i.interactivity.element = window), (r = a))
              : s === ui.parent && o
                ? (i.interactivity.element = o.parentElement ?? o.parentNode)
                : (i.interactivity.element = o),
              this._manageMediaMatch(t),
              this._manageResize(t),
              this._manageInteractivityListeners(r, t),
              document && os(document, p, e.visibilityChange, t, !1);
          }),
          (this._manageMediaMatch = (t) => {
            const e = this._handlers,
              i = Ae("(prefers-color-scheme: dark)");
            i &&
              (void 0 === i.addEventListener
                ? void 0 !== i.addListener &&
                  (t
                    ? i.addListener(e.oldThemeChange)
                    : i.removeListener(e.oldThemeChange))
                : os(i, "change", e.themeChange, t));
          }),
          (this._manageResize = (t) => {
            const e = this._handlers,
              i = this.container;
            if (!i.actualOptions.interactivity.events.resize) return;
            if ("undefined" == typeof ResizeObserver)
              return void os(window, u, e.resize, t);
            const s = i.canvas.element;
            this._resizeObserver && !t
              ? (s && this._resizeObserver.unobserve(s),
                this._resizeObserver.disconnect(),
                delete this._resizeObserver)
              : !this._resizeObserver &&
                t &&
                s &&
                ((this._resizeObserver = new ResizeObserver((t) => {
                  t.find((t) => t.target === s) && this._handleWindowResize();
                })),
                this._resizeObserver.observe(s));
          }),
          (this._mouseDown = () => {
            const { interactivity: t } = this.container;
            if (!t) return;
            const { mouse: e } = t;
            (e.clicking = !0), (e.downPosition = e.position);
          }),
          (this._mouseTouchClick = (t) => {
            const e = this.container,
              i = e.actualOptions,
              { mouse: s } = e.interactivity;
            s.inside = !0;
            let o = !1;
            const n = s.position;
            if (n && i.interactivity.events.onClick.enable) {
              for (const t of e.plugins.values())
                if (t.clickPositionValid && ((o = t.clickPositionValid(n)), o))
                  break;
              o || this._doMouseTouchClick(t), (s.clicking = !1);
            }
          }),
          (this._mouseTouchFinish = () => {
            const t = this.container.interactivity;
            if (!t) return;
            const e = t.mouse;
            delete e.position,
              delete e.clickPosition,
              delete e.downPosition,
              (t.status = n),
              (e.inside = !1),
              (e.clicking = !1);
          }),
          (this._mouseTouchMove = (t) => {
            const e = this.container,
              i = e.actualOptions,
              s = e.interactivity,
              o = e.canvas.element;
            if (!s?.element) return;
            let n;
            if (((s.mouse.inside = !0), t.type.startsWith("pointer"))) {
              this._canPush = !0;
              const e = t;
              if (s.element === window) {
                if (o) {
                  const t = o.getBoundingClientRect();
                  n = { x: e.clientX - t.left, y: e.clientY - t.top };
                }
              } else if (i.interactivity.detectsOn === ui.parent) {
                const t = e.target,
                  i = e.currentTarget;
                if (t && i && o) {
                  const s = t.getBoundingClientRect(),
                    a = i.getBoundingClientRect(),
                    r = o.getBoundingClientRect();
                  n = {
                    x: e.offsetX + _ * s.left - (a.left + r.left),
                    y: e.offsetY + _ * s.top - (a.top + r.top),
                  };
                } else
                  n = { x: e.offsetX ?? e.clientX, y: e.offsetY ?? e.clientY };
              } else
                e.target === o &&
                  (n = {
                    x: e.offsetX ?? e.clientX,
                    y: e.offsetY ?? e.clientY,
                  });
            } else if (((this._canPush = "touchmove" !== t.type), o)) {
              const e = t,
                i = e.touches[e.touches.length - Ct],
                s = o.getBoundingClientRect();
              n = {
                x: i.clientX - (s.left ?? et),
                y: i.clientY - (s.top ?? et),
              };
            }
            const a = e.retina.pixelRatio;
            n && ((n.x *= a), (n.y *= a)),
              (s.mouse.position = n),
              (s.status = r);
          }),
          (this._touchEnd = (t) => {
            const e = t,
              i = Array.from(e.changedTouches);
            for (const t of i) this._touches.delete(t.identifier);
            this._mouseTouchFinish();
          }),
          (this._touchEndClick = (t) => {
            const e = t,
              i = Array.from(e.changedTouches);
            for (const t of i) this._touches.delete(t.identifier);
            this._mouseTouchClick(t);
          }),
          (this._touchStart = (t) => {
            const e = t,
              i = Array.from(e.changedTouches);
            for (const t of i)
              this._touches.set(t.identifier, performance.now());
            this._mouseTouchMove(t);
          }),
          (this._canPush = !0),
          (this._touches = new Map()),
          (this._handlers = {
            mouseDown: () => this._mouseDown(),
            mouseLeave: () => this._mouseTouchFinish(),
            mouseMove: (t) => this._mouseTouchMove(t),
            mouseUp: (t) => this._mouseTouchClick(t),
            touchStart: (t) => this._touchStart(t),
            touchMove: (t) => this._mouseTouchMove(t),
            touchEnd: (t) => this._touchEnd(t),
            touchCancel: (t) => this._touchEnd(t),
            touchEndClick: (t) => this._touchEndClick(t),
            visibilityChange: () => this._handleVisibilityChange(),
            themeChange: (t) => this._handleThemeChange(t),
            oldThemeChange: (t) => this._handleThemeChange(t),
            resize: () => {
              this._handleWindowResize();
            },
          });
      }
      addListeners() {
        this._manageListeners(!0);
      }
      removeListeners() {
        this._manageListeners(!1);
      }
    }
    !(function (t) {
      (t.configAdded = "configAdded"),
        (t.containerInit = "containerInit"),
        (t.particlesSetup = "particlesSetup"),
        (t.containerStarted = "containerStarted"),
        (t.containerStopped = "containerStopped"),
        (t.containerDestroyed = "containerDestroyed"),
        (t.containerPaused = "containerPaused"),
        (t.containerPlay = "containerPlay"),
        (t.containerBuilt = "containerBuilt"),
        (t.particleAdded = "particleAdded"),
        (t.particleDestroyed = "particleDestroyed"),
        (t.particleRemoved = "particleRemoved");
    })(pi || (pi = {}));
    class as {
      constructor() {
        this.value = "";
      }
      static create(t, e) {
        const i = new as();
        return (
          i.load(t),
          void 0 !== e && (jt(e) || Xt(e) ? i.load({ value: e }) : i.load(e)),
          i
        );
      }
      load(t) {
        Yt(t) || Yt(t.value) || (this.value = t.value);
      }
    }
    class rs {
      constructor() {
        (this.color = new as()),
          (this.color.value = ""),
          (this.image = ""),
          (this.position = ""),
          (this.repeat = ""),
          (this.size = ""),
          (this.opacity = 1);
      }
      load(t) {
        Yt(t) ||
          (void 0 !== t.color && (this.color = as.create(this.color, t.color)),
          void 0 !== t.image && (this.image = t.image),
          void 0 !== t.position && (this.position = t.position),
          void 0 !== t.repeat && (this.repeat = t.repeat),
          void 0 !== t.size && (this.size = t.size),
          void 0 !== t.opacity && (this.opacity = t.opacity));
      }
    }
    class cs {
      constructor() {
        this.opacity = 1;
      }
      load(t) {
        Yt(t) ||
          (void 0 !== t.color && (this.color = as.create(this.color, t.color)),
          void 0 !== t.image && (this.image = t.image),
          void 0 !== t.opacity && (this.opacity = t.opacity));
      }
    }
    class ls {
      constructor() {
        (this.composite = "destination-out"),
          (this.cover = new cs()),
          (this.enable = !1);
      }
      load(t) {
        if (!Yt(t)) {
          if (
            (void 0 !== t.composite && (this.composite = t.composite),
            void 0 !== t.cover)
          ) {
            const e = t.cover,
              i = jt(t.cover) ? { color: t.cover } : t.cover;
            this.cover.load(
              void 0 !== e.color || void 0 !== e.image ? e : { color: i },
            );
          }
          void 0 !== t.enable && (this.enable = t.enable);
        }
      }
    }
    class hs {
      constructor() {
        (this.enable = !0), (this.zIndex = 0);
      }
      load(t) {
        Yt(t) ||
          (void 0 !== t.enable && (this.enable = t.enable),
          void 0 !== t.zIndex && (this.zIndex = t.zIndex));
      }
    }
    class ds {
      constructor() {
        (this.enable = !1), (this.mode = []);
      }
      load(t) {
        Yt(t) ||
          (void 0 !== t.enable && (this.enable = t.enable),
          void 0 !== t.mode && (this.mode = t.mode));
      }
    }
    !(function (t) {
      (t.circle = "circle"), (t.rectangle = "rectangle");
    })(fi || (fi = {}));
    class us {
      constructor() {
        (this.selectors = []),
          (this.enable = !1),
          (this.mode = []),
          (this.type = fi.circle);
      }
      load(t) {
        Yt(t) ||
          (void 0 !== t.selectors && (this.selectors = t.selectors),
          void 0 !== t.enable && (this.enable = t.enable),
          void 0 !== t.mode && (this.mode = t.mode),
          void 0 !== t.type && (this.type = t.type));
      }
    }
    class ps {
      constructor() {
        (this.enable = !1), (this.force = 2), (this.smooth = 10);
      }
      load(t) {
        Yt(t) ||
          (void 0 !== t.enable && (this.enable = t.enable),
          void 0 !== t.force && (this.force = t.force),
          void 0 !== t.smooth && (this.smooth = t.smooth));
      }
    }
    class fs {
      constructor() {
        (this.enable = !1), (this.mode = []), (this.parallax = new ps());
      }
      load(t) {
        Yt(t) ||
          (void 0 !== t.enable && (this.enable = t.enable),
          void 0 !== t.mode && (this.mode = t.mode),
          this.parallax.load(t.parallax));
      }
    }
    class ms {
      constructor() {
        (this.delay = 0.5), (this.enable = !0);
      }
      load(t) {
        Yt(t) ||
          (void 0 !== t.delay && (this.delay = t.delay),
          void 0 !== t.enable && (this.enable = t.enable));
      }
    }
    class gs {
      constructor() {
        (this.onClick = new ds()),
          (this.onDiv = new us()),
          (this.onHover = new fs()),
          (this.resize = new ms());
      }
      load(t) {
        if (Yt(t)) return;
        this.onClick.load(t.onClick);
        const e = t.onDiv;
        void 0 !== e &&
          (this.onDiv = ei(e, (t) => {
            const e = new us();
            return e.load(t), e;
          })),
          this.onHover.load(t.onHover),
          this.resize.load(t.resize);
      }
    }
    class vs {
      constructor(t, e) {
        (this._engine = t), (this._container = e);
      }
      load(t) {
        if (Yt(t)) return;
        if (!this._container) return;
        const e = this._engine.interactors.get(this._container);
        if (e)
          for (const i of e) i.loadModeOptions && i.loadModeOptions(this, t);
      }
    }
    class ys {
      constructor(t, e) {
        (this.detectsOn = ui.window),
          (this.events = new gs()),
          (this.modes = new vs(t, e));
      }
      load(t) {
        if (Yt(t)) return;
        const e = t.detectsOn;
        void 0 !== e && (this.detectsOn = e),
          this.events.load(t.events),
          this.modes.load(t.modes);
      }
    }
    class ws {
      load(t) {
        Yt(t) ||
          (t.position &&
            (this.position = {
              x: t.position.x ?? St,
              y: t.position.y ?? St,
              mode: t.position.mode ?? Oe.percent,
            }),
          t.options && (this.options = Ne({}, t.options)));
      }
    }
    !(function (t) {
      (t.screen = "screen"), (t.canvas = "canvas");
    })(mi || (mi = {}));
    class bs {
      constructor() {
        (this.maxWidth = 1 / 0), (this.options = {}), (this.mode = mi.canvas);
      }
      load(t) {
        Yt(t) ||
          (Yt(t.maxWidth) || (this.maxWidth = t.maxWidth),
          Yt(t.mode) ||
            (t.mode === mi.screen
              ? (this.mode = mi.screen)
              : (this.mode = mi.canvas)),
          Yt(t.options) || (this.options = Ne({}, t.options)));
      }
    }
    !(function (t) {
      (t.any = "any"), (t.dark = "dark"), (t.light = "light");
    })(gi || (gi = {}));
    class xs {
      constructor() {
        (this.auto = !1), (this.mode = gi.any), (this.value = !1);
      }
      load(t) {
        Yt(t) ||
          (void 0 !== t.auto && (this.auto = t.auto),
          void 0 !== t.mode && (this.mode = t.mode),
          void 0 !== t.value && (this.value = t.value));
      }
    }
    class _s {
      constructor() {
        (this.name = ""), (this.default = new xs());
      }
      load(t) {
        Yt(t) ||
          (void 0 !== t.name && (this.name = t.name),
          this.default.load(t.default),
          void 0 !== t.options && (this.options = Ne({}, t.options)));
      }
    }
    class zs {
      constructor() {
        (this.count = 0),
          (this.enable = !1),
          (this.speed = 1),
          (this.decay = 0),
          (this.delay = 0),
          (this.sync = !1);
      }
      load(t) {
        Yt(t) ||
          (void 0 !== t.count && (this.count = ue(t.count)),
          void 0 !== t.enable && (this.enable = t.enable),
          void 0 !== t.speed && (this.speed = ue(t.speed)),
          void 0 !== t.decay && (this.decay = ue(t.decay)),
          void 0 !== t.delay && (this.delay = ue(t.delay)),
          void 0 !== t.sync && (this.sync = t.sync));
      }
    }
    class Cs extends zs {
      constructor() {
        super(), (this.mode = Me.auto), (this.startValue = De.random);
      }
      load(t) {
        super.load(t),
          Yt(t) ||
            (void 0 !== t.mode && (this.mode = t.mode),
            void 0 !== t.startValue && (this.startValue = t.startValue));
      }
    }
    class Ms extends zs {
      constructor() {
        super(), (this.offset = 0), (this.sync = !0);
      }
      load(t) {
        super.load(t),
          Yt(t) || (void 0 !== t.offset && (this.offset = ue(t.offset)));
      }
    }
    class Ps {
      constructor() {
        (this.h = new Ms()), (this.s = new Ms()), (this.l = new Ms());
      }
      load(t) {
        Yt(t) || (this.h.load(t.h), this.s.load(t.s), this.l.load(t.l));
      }
    }
    class ks extends as {
      constructor() {
        super(), (this.animation = new Ps());
      }
      static create(t, e) {
        const i = new ks();
        return (
          i.load(t),
          void 0 !== e && (jt(e) || Xt(e) ? i.load({ value: e }) : i.load(e)),
          i
        );
      }
      load(t) {
        if ((super.load(t), Yt(t))) return;
        const e = t.animation;
        void 0 !== e &&
          (void 0 !== e.enable
            ? this.animation.h.load(e)
            : this.animation.load(t.animation));
      }
    }
    !(function (t) {
      (t.absorb = "absorb"), (t.bounce = "bounce"), (t.destroy = "destroy");
    })(vi || (vi = {}));
    class Ss {
      constructor() {
        this.speed = 2;
      }
      load(t) {
        Yt(t) || (void 0 !== t.speed && (this.speed = t.speed));
      }
    }
    class Os {
      constructor() {
        (this.enable = !0), (this.retries = 0);
      }
      load(t) {
        Yt(t) ||
          (void 0 !== t.enable && (this.enable = t.enable),
          void 0 !== t.retries && (this.retries = t.retries));
      }
    }
    class Ds {
      constructor() {
        this.value = 0;
      }
      load(t) {
        Yt(t) || Yt(t.value) || (this.value = ue(t.value));
      }
    }
    class Ts extends Ds {
      constructor() {
        super(), (this.animation = new zs());
      }
      load(t) {
        if ((super.load(t), Yt(t))) return;
        const e = t.animation;
        void 0 !== e && this.animation.load(e);
      }
    }
    class Is extends Ts {
      constructor() {
        super(), (this.animation = new Cs());
      }
      load(t) {
        super.load(t);
      }
    }
    class Es extends Ds {
      constructor() {
        super(), (this.value = 1);
      }
    }
    class Rs {
      constructor() {
        (this.horizontal = new Es()), (this.vertical = new Es());
      }
      load(t) {
        Yt(t) ||
          (this.horizontal.load(t.horizontal), this.vertical.load(t.vertical));
      }
    }
    class Fs {
      constructor() {
        (this.absorb = new Ss()),
          (this.bounce = new Rs()),
          (this.enable = !1),
          (this.maxSpeed = 50),
          (this.mode = vi.bounce),
          (this.overlap = new Os());
      }
      load(t) {
        Yt(t) ||
          (this.absorb.load(t.absorb),
          this.bounce.load(t.bounce),
          void 0 !== t.enable && (this.enable = t.enable),
          void 0 !== t.maxSpeed && (this.maxSpeed = ue(t.maxSpeed)),
          void 0 !== t.mode && (this.mode = t.mode),
          this.overlap.load(t.overlap));
      }
    }
    class Ls {
      constructor() {
        (this.close = !0),
          (this.fill = !0),
          (this.options = {}),
          (this.type = []);
      }
      load(t) {
        if (Yt(t)) return;
        const e = t.options;
        if (void 0 !== e)
          for (const t in e) {
            const i = e[t];
            i && (this.options[t] = Ne(this.options[t] ?? {}, i));
          }
        void 0 !== t.close && (this.close = t.close),
          void 0 !== t.fill && (this.fill = t.fill),
          void 0 !== t.type && (this.type = t.type);
      }
    }
    class As {
      constructor() {
        (this.offset = 0), (this.value = 90);
      }
      load(t) {
        Yt(t) ||
          (void 0 !== t.offset && (this.offset = ue(t.offset)),
          void 0 !== t.value && (this.value = ue(t.value)));
      }
    }
    class Bs {
      constructor() {
        (this.distance = 200),
          (this.enable = !1),
          (this.rotate = { x: 3e3, y: 3e3 });
      }
      load(t) {
        if (
          !Yt(t) &&
          (void 0 !== t.distance && (this.distance = ue(t.distance)),
          void 0 !== t.enable && (this.enable = t.enable),
          t.rotate)
        ) {
          const e = t.rotate.x;
          void 0 !== e && (this.rotate.x = e);
          const i = t.rotate.y;
          void 0 !== i && (this.rotate.y = i);
        }
      }
    }
    class Vs {
      constructor() {
        (this.x = 50),
          (this.y = 50),
          (this.mode = Oe.percent),
          (this.radius = 0);
      }
      load(t) {
        Yt(t) ||
          (void 0 !== t.x && (this.x = t.x),
          void 0 !== t.y && (this.y = t.y),
          void 0 !== t.mode && (this.mode = t.mode),
          void 0 !== t.radius && (this.radius = t.radius));
      }
    }
    class Us {
      constructor() {
        (this.acceleration = 9.81),
          (this.enable = !1),
          (this.inverse = !1),
          (this.maxSpeed = 50);
      }
      load(t) {
        Yt(t) ||
          (void 0 !== t.acceleration &&
            (this.acceleration = ue(t.acceleration)),
          void 0 !== t.enable && (this.enable = t.enable),
          void 0 !== t.inverse && (this.inverse = t.inverse),
          void 0 !== t.maxSpeed && (this.maxSpeed = ue(t.maxSpeed)));
      }
    }
    class qs {
      constructor() {
        (this.clamp = !0),
          (this.delay = new Ds()),
          (this.enable = !1),
          (this.options = {});
      }
      load(t) {
        Yt(t) ||
          (void 0 !== t.clamp && (this.clamp = t.clamp),
          this.delay.load(t.delay),
          void 0 !== t.enable && (this.enable = t.enable),
          (this.generator = t.generator),
          t.options && (this.options = Ne(this.options, t.options)));
      }
    }
    class $s {
      load(t) {
        Yt(t) ||
          (void 0 !== t.color && (this.color = as.create(this.color, t.color)),
          void 0 !== t.image && (this.image = t.image));
      }
    }
    class Hs {
      constructor() {
        (this.enable = !1), (this.length = 10), (this.fill = new $s());
      }
      load(t) {
        Yt(t) ||
          (void 0 !== t.enable && (this.enable = t.enable),
          void 0 !== t.fill && this.fill.load(t.fill),
          void 0 !== t.length && (this.length = t.length));
      }
    }
    !(function (t) {
      (t.bounce = "bounce"),
        (t.none = "none"),
        (t.out = "out"),
        (t.destroy = "destroy"),
        (t.split = "split");
    })(yi || (yi = {}));
    class Gs {
      constructor() {
        this.default = yi.out;
      }
      load(t) {
        Yt(t) ||
          (void 0 !== t.default && (this.default = t.default),
          (this.bottom = t.bottom ?? t.default),
          (this.left = t.left ?? t.default),
          (this.right = t.right ?? t.default),
          (this.top = t.top ?? t.default));
      }
    }
    class js {
      constructor() {
        (this.acceleration = 0), (this.enable = !1);
      }
      load(t) {
        Yt(t) ||
          (void 0 !== t.acceleration &&
            (this.acceleration = ue(t.acceleration)),
          void 0 !== t.enable && (this.enable = t.enable),
          t.position && (this.position = Ne({}, t.position)));
      }
    }
    class Ws {
      constructor() {
        (this.angle = new As()),
          (this.attract = new Bs()),
          (this.center = new Vs()),
          (this.decay = 0),
          (this.distance = {}),
          (this.direction = Ht.none),
          (this.drift = 0),
          (this.enable = !1),
          (this.gravity = new Us()),
          (this.path = new qs()),
          (this.outModes = new Gs()),
          (this.random = !1),
          (this.size = !1),
          (this.speed = 2),
          (this.spin = new js()),
          (this.straight = !1),
          (this.trail = new Hs()),
          (this.vibrate = !1),
          (this.warp = !1);
      }
      load(t) {
        if (Yt(t)) return;
        this.angle.load(Wt(t.angle) ? { value: t.angle } : t.angle),
          this.attract.load(t.attract),
          this.center.load(t.center),
          void 0 !== t.decay && (this.decay = ue(t.decay)),
          void 0 !== t.direction && (this.direction = t.direction),
          void 0 !== t.distance &&
            (this.distance = Wt(t.distance)
              ? { horizontal: t.distance, vertical: t.distance }
              : { ...t.distance }),
          void 0 !== t.drift && (this.drift = ue(t.drift)),
          void 0 !== t.enable && (this.enable = t.enable),
          this.gravity.load(t.gravity);
        const e = t.outModes;
        void 0 !== e &&
          (Qt(e) ? this.outModes.load(e) : this.outModes.load({ default: e })),
          this.path.load(t.path),
          void 0 !== t.random && (this.random = t.random),
          void 0 !== t.size && (this.size = t.size),
          void 0 !== t.speed && (this.speed = ue(t.speed)),
          this.spin.load(t.spin),
          void 0 !== t.straight && (this.straight = t.straight),
          this.trail.load(t.trail),
          void 0 !== t.vibrate && (this.vibrate = t.vibrate),
          void 0 !== t.warp && (this.warp = t.warp);
      }
    }
    class Ns extends Cs {
      constructor() {
        super(), (this.destroy = ke.none), (this.speed = 2);
      }
      load(t) {
        super.load(t),
          Yt(t) || (void 0 !== t.destroy && (this.destroy = t.destroy));
      }
    }
    class Qs extends Is {
      constructor() {
        super(), (this.animation = new Ns()), (this.value = 1);
      }
      load(t) {
        if (Yt(t)) return;
        super.load(t);
        const e = t.animation;
        void 0 !== e && this.animation.load(e);
      }
    }
    class Xs {
      constructor() {
        (this.enable = !1), (this.width = 1920), (this.height = 1080);
      }
      load(t) {
        if (Yt(t)) return;
        void 0 !== t.enable && (this.enable = t.enable);
        const e = t.width;
        void 0 !== e && (this.width = e);
        const i = t.height;
        void 0 !== i && (this.height = i);
      }
    }
    !(function (t) {
      (t.delete = "delete"), (t.wait = "wait");
    })(wi || (wi = {}));
    class Ys {
      constructor() {
        (this.mode = wi.delete), (this.value = 0);
      }
      load(t) {
        Yt(t) ||
          (void 0 !== t.mode && (this.mode = t.mode),
          void 0 !== t.value && (this.value = t.value));
      }
    }
    class Zs {
      constructor() {
        (this.density = new Xs()), (this.limit = new Ys()), (this.value = 0);
      }
      load(t) {
        Yt(t) ||
          (this.density.load(t.density),
          this.limit.load(t.limit),
          void 0 !== t.value && (this.value = t.value));
      }
    }
    class Ks {
      constructor() {
        (this.blur = 0),
          (this.color = new as()),
          (this.enable = !1),
          (this.offset = { x: 0, y: 0 }),
          (this.color.value = "#000");
      }
      load(t) {
        Yt(t) ||
          (void 0 !== t.blur && (this.blur = t.blur),
          (this.color = as.create(this.color, t.color)),
          void 0 !== t.enable && (this.enable = t.enable),
          void 0 !== t.offset &&
            (void 0 !== t.offset.x && (this.offset.x = t.offset.x),
            void 0 !== t.offset.y && (this.offset.y = t.offset.y)));
      }
    }
    class Js {
      constructor() {
        (this.close = !0),
          (this.fill = !0),
          (this.options = {}),
          (this.type = "circle");
      }
      load(t) {
        if (Yt(t)) return;
        const e = t.options;
        if (void 0 !== e)
          for (const t in e) {
            const i = e[t];
            i && (this.options[t] = Ne(this.options[t] ?? {}, i));
          }
        void 0 !== t.close && (this.close = t.close),
          void 0 !== t.fill && (this.fill = t.fill),
          void 0 !== t.type && (this.type = t.type);
      }
    }
    class to extends Cs {
      constructor() {
        super(), (this.destroy = ke.none), (this.speed = 5);
      }
      load(t) {
        super.load(t),
          Yt(t) || (void 0 !== t.destroy && (this.destroy = t.destroy));
      }
    }
    class eo extends Is {
      constructor() {
        super(), (this.animation = new to()), (this.value = 3);
      }
      load(t) {
        if ((super.load(t), Yt(t))) return;
        const e = t.animation;
        void 0 !== e && this.animation.load(e);
      }
    }
    class io {
      constructor() {
        this.width = 0;
      }
      load(t) {
        Yt(t) ||
          (void 0 !== t.color && (this.color = ks.create(this.color, t.color)),
          void 0 !== t.width && (this.width = ue(t.width)),
          void 0 !== t.opacity && (this.opacity = ue(t.opacity)));
      }
    }
    class so extends Ds {
      constructor() {
        super(),
          (this.opacityRate = 1),
          (this.sizeRate = 1),
          (this.velocityRate = 1);
      }
      load(t) {
        super.load(t),
          Yt(t) ||
            (void 0 !== t.opacityRate && (this.opacityRate = t.opacityRate),
            void 0 !== t.sizeRate && (this.sizeRate = t.sizeRate),
            void 0 !== t.velocityRate && (this.velocityRate = t.velocityRate));
      }
    }
    class oo {
      constructor(t, e) {
        (this._engine = t),
          (this._container = e),
          (this.bounce = new Rs()),
          (this.collisions = new Fs()),
          (this.color = new ks()),
          (this.color.value = "#fff"),
          (this.effect = new Ls()),
          (this.groups = {}),
          (this.move = new Ws()),
          (this.number = new Zs()),
          (this.opacity = new Qs()),
          (this.reduceDuplicates = !1),
          (this.shadow = new Ks()),
          (this.shape = new Js()),
          (this.size = new eo()),
          (this.stroke = new io()),
          (this.zIndex = new so());
      }
      load(t) {
        if (Yt(t)) return;
        if (void 0 !== t.groups)
          for (const e of Object.keys(t.groups)) {
            if (!Object.hasOwn(t.groups, e)) continue;
            const i = t.groups[e];
            void 0 !== i && (this.groups[e] = Ne(this.groups[e] ?? {}, i));
          }
        void 0 !== t.reduceDuplicates &&
          (this.reduceDuplicates = t.reduceDuplicates),
          this.bounce.load(t.bounce),
          this.color.load(ks.create(this.color, t.color)),
          this.effect.load(t.effect),
          this.move.load(t.move),
          this.number.load(t.number),
          this.opacity.load(t.opacity),
          this.shape.load(t.shape),
          this.size.load(t.size),
          this.shadow.load(t.shadow),
          this.zIndex.load(t.zIndex),
          this.collisions.load(t.collisions),
          void 0 !== t.interactivity &&
            (this.interactivity = Ne({}, t.interactivity));
        const e = t.stroke;
        if (
          (e &&
            (this.stroke = ei(e, (t) => {
              const e = new io();
              return e.load(t), e;
            })),
          this._container)
        ) {
          const e = this._engine.updaters.get(this._container);
          if (e) for (const i of e) i.loadOptions && i.loadOptions(this, t);
          const i = this._engine.interactors.get(this._container);
          if (i)
            for (const e of i)
              e.loadParticlesOptions && e.loadParticlesOptions(this, t);
        }
      }
    }
    function no(t, ...e) {
      for (const i of e) t.load(i);
    }
    function ao(t, e, ...i) {
      const s = new oo(t, e);
      return no(s, ...i), s;
    }
    class ro {
      constructor(t, e) {
        (this._findDefaultTheme = (t) =>
          this.themes.find((e) => e.default.value && e.default.mode === t) ??
          this.themes.find(
            (t) => t.default.value && t.default.mode === gi.any,
          )),
          (this._importPreset = (t) => {
            this.load(this._engine.getPreset(t));
          }),
          (this._engine = t),
          (this._container = e),
          (this.autoPlay = !0),
          (this.background = new rs()),
          (this.backgroundMask = new ls()),
          (this.clear = !0),
          (this.defaultThemes = {}),
          (this.delay = 0),
          (this.fullScreen = new hs()),
          (this.detectRetina = !0),
          (this.duration = 0),
          (this.fpsLimit = 120),
          (this.interactivity = new ys(t, e)),
          (this.manualParticles = []),
          (this.particles = ao(this._engine, this._container)),
          (this.pauseOnBlur = !0),
          (this.pauseOnOutsideViewport = !0),
          (this.responsive = []),
          (this.smooth = !1),
          (this.style = {}),
          (this.themes = []),
          (this.zLayers = 100);
      }
      load(t) {
        if (Yt(t)) return;
        void 0 !== t.preset && ei(t.preset, (t) => this._importPreset(t)),
          void 0 !== t.autoPlay && (this.autoPlay = t.autoPlay),
          void 0 !== t.clear && (this.clear = t.clear),
          void 0 !== t.key && (this.key = t.key),
          void 0 !== t.name && (this.name = t.name),
          void 0 !== t.delay && (this.delay = ue(t.delay));
        const e = t.detectRetina;
        void 0 !== e && (this.detectRetina = e),
          void 0 !== t.duration && (this.duration = ue(t.duration));
        const i = t.fpsLimit;
        void 0 !== i && (this.fpsLimit = i),
          void 0 !== t.pauseOnBlur && (this.pauseOnBlur = t.pauseOnBlur),
          void 0 !== t.pauseOnOutsideViewport &&
            (this.pauseOnOutsideViewport = t.pauseOnOutsideViewport),
          void 0 !== t.zLayers && (this.zLayers = t.zLayers),
          this.background.load(t.background);
        const s = t.fullScreen;
        Gt(s) ? (this.fullScreen.enable = s) : this.fullScreen.load(s),
          this.backgroundMask.load(t.backgroundMask),
          this.interactivity.load(t.interactivity),
          t.manualParticles &&
            (this.manualParticles = t.manualParticles.map((t) => {
              const e = new ws();
              return e.load(t), e;
            })),
          this.particles.load(t.particles),
          (this.style = Ne(this.style, t.style)),
          this._engine.loadOptions(this, t),
          void 0 !== t.smooth && (this.smooth = t.smooth);
        const o = this._engine.interactors.get(this._container);
        if (o) for (const e of o) e.loadOptions && e.loadOptions(this, t);
        if (void 0 !== t.responsive)
          for (const e of t.responsive) {
            const t = new bs();
            t.load(e), this.responsive.push(t);
          }
        if (
          (this.responsive.sort((t, e) => t.maxWidth - e.maxWidth),
          void 0 !== t.themes)
        )
          for (const e of t.themes) {
            const t = this.themes.find((t) => t.name === e.name);
            if (t) t.load(e);
            else {
              const t = new _s();
              t.load(e), this.themes.push(t);
            }
          }
        (this.defaultThemes.dark = this._findDefaultTheme(gi.dark)?.name),
          (this.defaultThemes.light = this._findDefaultTheme(gi.light)?.name);
      }
      setResponsive(t, e, i) {
        this.load(i);
        const s = this.responsive.find((i) =>
          i.mode === mi.screen && screen
            ? i.maxWidth > screen.availWidth
            : i.maxWidth * e > t,
        );
        return this.load(s?.options), s?.maxWidth;
      }
      setTheme(t) {
        if (t) {
          const e = this.themes.find((e) => e.name === t);
          e && this.load(e.options);
        } else {
          const t = Ae("(prefers-color-scheme: dark)"),
            e = t?.matches,
            i = this._findDefaultTheme(e ? gi.dark : gi.light);
          i && this.load(i.options);
        }
      }
    }
    !(function (t) {
      (t.external = "external"), (t.particles = "particles");
    })(bi || (bi = {}));
    class co {
      constructor(t, e) {
        (this.container = e),
          (this._engine = t),
          (this._interactors = []),
          (this._externalInteractors = []),
          (this._particleInteractors = []);
      }
      externalInteract(t) {
        for (const e of this._externalInteractors)
          e.isEnabled() && e.interact(t);
      }
      handleClickMode(t) {
        for (const e of this._externalInteractors) e.handleClickMode?.(t);
      }
      async init() {
        (this._interactors = await this._engine.getInteractors(
          this.container,
          !0,
        )),
          (this._externalInteractors = []),
          (this._particleInteractors = []);
        for (const t of this._interactors) {
          switch (t.type) {
            case bi.external:
              this._externalInteractors.push(t);
              break;
            case bi.particles:
              this._particleInteractors.push(t);
          }
          t.init();
        }
      }
      particlesInteract(t, e) {
        for (const i of this._externalInteractors) i.clear(t, e);
        for (const i of this._particleInteractors)
          i.isEnabled(t) && i.interact(t, e);
      }
      reset(t) {
        for (const e of this._externalInteractors) e.isEnabled() && e.reset(t);
        for (const e of this._particleInteractors) e.isEnabled(t) && e.reset(t);
      }
    }
    function lo(t) {
      if (!Ue(t.outMode, t.checkModes)) return;
      const e = t.radius * _;
      t.coord > t.maxCoord - e
        ? t.setCb(-t.radius)
        : t.coord < e && t.setCb(t.radius);
    }
    !(function (t) {
      (t.normal = "normal"), (t.inside = "inside"), (t.outside = "outside");
    })(xi || (xi = {}));
    class ho {
      constructor(t, e) {
        (this.container = e),
          (this._calcPosition = (t, e, i, s = O) => {
            for (const s of t.plugins.values()) {
              const t =
                void 0 !== s.particlePosition
                  ? s.particlePosition(e, this)
                  : void 0;
              if (t) return Zt.create(t.x, t.y, i);
            }
            const o = _e({ size: t.canvas.size, position: e }),
              n = Zt.create(o.x, o.y, i),
              a = this.getRadius(),
              r = this.options.move.outModes,
              c = (e) => {
                lo({
                  outMode: e,
                  checkModes: [yi.bounce],
                  coord: n.x,
                  maxCoord: t.canvas.size.width,
                  setCb: (t) => (n.x += t),
                  radius: a,
                });
              },
              l = (e) => {
                lo({
                  outMode: e,
                  checkModes: [yi.bounce],
                  coord: n.y,
                  maxCoord: t.canvas.size.height,
                  setCb: (t) => (n.y += t),
                  radius: a,
                });
              };
            return (
              c(r.left ?? r.default),
              c(r.right ?? r.default),
              l(r.top ?? r.default),
              l(r.bottom ?? r.default),
              this._checkOverlap(n, s)
                ? this._calcPosition(t, void 0, i, s + ut)
                : n
            );
          }),
          (this._calculateVelocity = () => {
            const t = ve(this.direction).copy(),
              e = this.options.move;
            if (e.direction === Ht.inside || e.direction === Ht.outside)
              return t;
            const i = me(le(e.angle.value)),
              s = me(le(e.angle.offset)),
              o = { left: s - i * g, right: s + i * g };
            return (
              e.straight || (t.angle += ce(ue(o.left, o.right))),
              e.random && "number" == typeof e.speed && (t.length *= ie()),
              t
            );
          }),
          (this._checkOverlap = (t, e = O) => {
            const i = this.options.collisions,
              s = this.getRadius();
            if (!i.enable) return !1;
            const o = i.overlap;
            if (o.enable) return !1;
            const n = o.retries;
            if (n >= pt && e > n)
              throw new Error(
                `${f} particle is overlapping and can't be placed`,
              );
            return !!this.container.particles.find(
              (e) => fe(t, e.position) < s + e.getRadius(),
            );
          }),
          (this._getRollColor = (t) => {
            if (!t || !this.roll || (!this.backColor && !this.roll.alter))
              return t;
            const e = this.roll.horizontal && this.roll.vertical ? _ * ft : ft,
              i = this.roll.horizontal ? Math.PI * g : ht;
            return Math.floor(((this.roll.angle ?? ht) + i) / (Math.PI / e)) % _
              ? this.backColor
                ? this.backColor
                : this.roll.alter
                  ? ts(t, this.roll.alter.type, this.roll.alter.value)
                  : t
              : t;
          }),
          (this._initPosition = (t) => {
            const e = this.container,
              i = le(this.options.zIndex.value);
            (this.position = this._calcPosition(e, t, ae(i, mt, e.zLayers))),
              (this.initialPosition = this.position.copy());
            const s = e.canvas.size;
            switch (
              ((this.moveCenter = {
                ...ai(this.options.move.center, s),
                radius: this.options.move.center.radius ?? gt,
                mode: this.options.move.center.mode ?? Oe.percent,
              }),
              (this.direction = ge(
                this.options.move.direction,
                this.position,
                this.moveCenter,
              )),
              this.options.move.direction)
            ) {
              case Ht.inside:
                this.outType = xi.inside;
                break;
              case Ht.outside:
                this.outType = xi.outside;
            }
            this.offset = Kt.origin;
          }),
          (this._engine = t);
      }
      destroy(t) {
        if (this.unbreakable || this.destroyed) return;
        (this.destroyed = !0),
          (this.bubble.inRange = !1),
          (this.slow.inRange = !1);
        const e = this.container,
          i = this.pathGenerator,
          s = e.shapeDrawers.get(this.shape);
        s?.particleDestroy?.(this);
        for (const i of e.plugins.values()) i.particleDestroyed?.(this, t);
        for (const i of e.particles.updaters) i.particleDestroyed?.(this, t);
        i?.reset(this),
          this._engine.dispatchEvent(pi.particleDestroyed, {
            container: this.container,
            data: { particle: this },
          });
      }
      draw(t) {
        const e = this.container,
          i = e.canvas;
        for (const s of e.plugins.values()) i.drawParticlePlugin(s, this, t);
        i.drawParticle(this, t);
      }
      getFillColor() {
        return this._getRollColor(this.bubble.color ?? Vi(this.color));
      }
      getMass() {
        return this.getRadius() ** D * Math.PI * g;
      }
      getPosition() {
        return {
          x: this.position.x + this.offset.x,
          y: this.position.y + this.offset.y,
          z: this.position.z,
        };
      }
      getRadius() {
        return this.bubble.radius ?? this.size.value;
      }
      getStrokeColor() {
        return this._getRollColor(this.bubble.color ?? Vi(this.strokeColor));
      }
      init(t, e, i, s) {
        const o = this.container,
          n = this._engine;
        (this.id = t),
          (this.group = s),
          (this.effectClose = !0),
          (this.effectFill = !0),
          (this.shapeClose = !0),
          (this.shapeFill = !0),
          (this.pathRotation = !1),
          (this.lastPathTime = 0),
          (this.destroyed = !1),
          (this.unbreakable = !1),
          (this.isRotating = !1),
          (this.rotation = 0),
          (this.misplaced = !1),
          (this.retina = { maxDistance: {} }),
          (this.outType = xi.normal),
          (this.ignoresResizeRatio = !0);
        const a = o.retina.pixelRatio,
          r = o.actualOptions,
          c = ao(this._engine, o, r.particles),
          { reduceDuplicates: l } = c,
          h = c.effect.type,
          d = c.shape.type;
        (this.effect = ii(h, this.id, l)), (this.shape = ii(d, this.id, l));
        const u = c.effect,
          p = c.shape;
        if (i) {
          if (i.effect?.type) {
            const t = ii(i.effect.type, this.id, l);
            t && ((this.effect = t), u.load(i.effect));
          }
          if (i.shape?.type) {
            const t = ii(i.shape.type, this.id, l);
            t && ((this.shape = t), p.load(i.shape));
          }
        }
        if (this.effect === b) {
          const t = [...this.container.effectDrawers.keys()];
          this.effect = t[Math.floor(Math.random() * t.length)];
        }
        if (this.shape === b) {
          const t = [...this.container.shapeDrawers.keys()];
          this.shape = t[Math.floor(Math.random() * t.length)];
        }
        (this.effectData = (function (t, e, i, s) {
          const o = e.options[t];
          if (o) return Ne({ close: e.close, fill: e.fill }, ii(o, i, s));
        })(this.effect, u, this.id, l)),
          (this.shapeData = (function (t, e, i, s) {
            const o = e.options[t];
            if (o) return Ne({ close: e.close, fill: e.fill }, ii(o, i, s));
          })(this.shape, p, this.id, l)),
          c.load(i);
        const f = this.effectData;
        f && c.load(f.particles);
        const m = this.shapeData;
        m && c.load(m.particles);
        const g = new ys(n, o);
        g.load(o.actualOptions.interactivity),
          g.load(c.interactivity),
          (this.interactivity = g),
          (this.effectFill = f?.fill ?? c.effect.fill),
          (this.effectClose = f?.close ?? c.effect.close),
          (this.shapeFill = m?.fill ?? c.shape.fill),
          (this.shapeClose = m?.close ?? c.shape.close),
          (this.options = c);
        const y = this.options.move.path;
        (this.pathDelay = le(y.delay.value) * v),
          y.generator &&
            ((this.pathGenerator = this._engine.getPathGenerator(y.generator)),
            this.pathGenerator &&
              o.addPath(y.generator, this.pathGenerator) &&
              this.pathGenerator.init(o)),
          o.retina.initParticle(this),
          (this.size = oi(this.options.size, a)),
          (this.bubble = { inRange: !1 }),
          (this.slow = { inRange: !1, factor: 1 }),
          this._initPosition(e),
          (this.initialVelocity = this._calculateVelocity()),
          (this.velocity = this.initialVelocity.copy()),
          (this.moveDecay = dt - le(this.options.move.decay));
        const w = o.particles;
        w.setLastZIndex(this.position.z),
          (this.zIndexFactor = this.position.z / o.zLayers),
          (this.sides = 24);
        let x = o.effectDrawers.get(this.effect);
        x ||
          ((x = this._engine.getEffectDrawer(this.effect)),
          x && o.effectDrawers.set(this.effect, x)),
          x?.loadEffect && x.loadEffect(this);
        let _ = o.shapeDrawers.get(this.shape);
        _ ||
          ((_ = this._engine.getShapeDrawer(this.shape)),
          _ && o.shapeDrawers.set(this.shape, _)),
          _?.loadShape && _.loadShape(this);
        const z = _?.getSidesCount;
        z && (this.sides = z(this)),
          (this.spawning = !1),
          (this.shadowColor = Ci(this._engine, this.options.shadow.color));
        for (const t of w.updaters) t.init(this);
        for (const t of w.movers) t.init?.(this);
        x?.particleInit?.(o, this), _?.particleInit?.(o, this);
        for (const t of o.plugins.values()) t.particleCreated?.(this);
      }
      isInsideCanvas() {
        const t = this.getRadius(),
          e = this.container.canvas.size,
          i = this.position;
        return (
          i.x >= -t && i.y >= -t && i.y <= e.height + t && i.x <= e.width + t
        );
      }
      isVisible() {
        return !this.destroyed && !this.spawning && this.isInsideCanvas();
      }
      reset() {
        for (const t of this.container.particles.updaters) t.reset?.(this);
      }
    }
    class uo {
      constructor(t, e) {
        (this.position = t), (this.particle = e);
      }
    }
    !(function (t) {
      (t.circle = "circle"), (t.rectangle = "rectangle");
    })(_i || (_i = {}));
    class po {
      constructor(t, e, i) {
        (this.position = { x: t, y: e }), (this.type = i);
      }
    }
    class fo extends po {
      constructor(t, e, i) {
        super(t, e, _i.circle), (this.radius = i);
      }
      contains(t) {
        return fe(t, this.position) <= this.radius;
      }
      intersects(t) {
        const e = this.position,
          i = t.position,
          s = Math.abs(i.x - e.x),
          o = Math.abs(i.y - e.y),
          n = this.radius;
        if (t instanceof fo || t.type === _i.circle) {
          return n + t.radius > Math.sqrt(s ** D + o ** D);
        }
        if (t instanceof mo || t.type === _i.rectangle) {
          const e = t,
            { width: i, height: a } = e.size;
          return (
            Math.pow(s - i, D) + Math.pow(o - a, D) <= n ** D ||
            (s <= n + i && o <= n + a) ||
            s <= i ||
            o <= a
          );
        }
        return !1;
      }
    }
    class mo extends po {
      constructor(t, e, i, s) {
        super(t, e, _i.rectangle), (this.size = { height: s, width: i });
      }
      contains(t) {
        const e = this.size.width,
          i = this.size.height,
          s = this.position;
        return t.x >= s.x && t.x <= s.x + e && t.y >= s.y && t.y <= s.y + i;
      }
      intersects(t) {
        if (t instanceof fo) return t.intersects(this);
        const e = this.size.width,
          i = this.size.height,
          s = this.position,
          o = t.position,
          n = t instanceof mo ? t.size : { width: 0, height: 0 },
          a = n.width,
          r = n.height;
        return o.x < s.x + e && o.x + a > s.x && o.y < s.y + i && o.y + r > s.y;
      }
    }
    class go {
      constructor(t, e) {
        (this.rectangle = t),
          (this.capacity = e),
          (this._subdivide = () => {
            const { x: t, y: e } = this.rectangle.position,
              { width: i, height: s } = this.rectangle.size,
              { capacity: o } = this;
            for (let n = 0; n < F; n++) {
              const a = n % _;
              this._subs.push(
                new go(
                  new mo(
                    t + i * g * a,
                    e + s * g * (Math.round(n * g) - a),
                    i * g,
                    s * g,
                  ),
                  o,
                ),
              );
            }
            this._divided = !0;
          }),
          (this._points = []),
          (this._divided = !1),
          (this._subs = []);
      }
      insert(t) {
        return (
          !!this.rectangle.contains(t.position) &&
          (this._points.length < this.capacity
            ? (this._points.push(t), !0)
            : (this._divided || this._subdivide(),
              this._subs.some((e) => e.insert(t))))
        );
      }
      query(t, e) {
        const i = [];
        if (!t.intersects(this.rectangle)) return [];
        for (const s of this._points)
          (!t.contains(s.position) &&
            fe(t.position, s.position) > s.particle.getRadius() &&
            (!e || e(s.particle))) ||
            i.push(s.particle);
        if (this._divided) for (const s of this._subs) i.push(...s.query(t, e));
        return i;
      }
      queryCircle(t, e, i) {
        return this.query(new fo(t.x, t.y, e), i);
      }
      queryRectangle(t, e, i) {
        return this.query(new mo(t.x, t.y, e.width, e.height), i);
      }
    }
    const vo = (t) => {
      const { height: e, width: i } = t;
      return new mo(vt * i, vt * e, yt * i, yt * e);
    };
    class yo {
      constructor(t, e) {
        (this._addToPool = (...t) => {
          this._pool.push(...t);
        }),
          (this._applyDensity = (t, e, i) => {
            const s = t.number;
            if (!t.number.density?.enable)
              return void (void 0 === i
                ? (this._limit = s.limit.value)
                : s.limit && this._groupLimits.set(i, s.limit.value));
            const o = this._initDensityFactor(s.density),
              n = s.value,
              a = s.limit.value > wt ? s.limit.value : n,
              r = Math.min(n, a) * o + e,
              c = Math.min(
                this.count,
                this.filter((t) => t.group === i).length,
              );
            void 0 === i
              ? (this._limit = s.limit.value * o)
              : this._groupLimits.set(i, s.limit.value * o),
              c < r
                ? this.push(Math.abs(r - c), void 0, t, i)
                : c > r && this.removeQuantity(c - r, i);
          }),
          (this._initDensityFactor = (t) => {
            const e = this._container;
            if (!e.canvas.element || !t.enable) return Mt;
            const i = e.canvas.element,
              s = e.retina.pixelRatio;
            return (i.width * i.height) / (t.height * t.width * s ** D);
          }),
          (this._pushParticle = (t, e, i, s) => {
            try {
              let o = this._pool.pop();
              o || (o = new ho(this._engine, this._container)),
                o.init(this._nextId, t, e, i);
              let n = !0;
              if ((s && (n = s(o)), !n)) return;
              return (
                this._array.push(o),
                this._zArray.push(o),
                this._nextId++,
                this._engine.dispatchEvent(pi.particleAdded, {
                  container: this._container,
                  data: { particle: o },
                }),
                o
              );
            } catch (t) {
              Ee().warning(`${f} adding particle: ${t}`);
            }
          }),
          (this._removeParticle = (t, e, i) => {
            const s = this._array[t];
            if (!s || s.group !== e) return !1;
            const o = this._zArray.indexOf(s);
            return (
              this._array.splice(t, Pt),
              this._zArray.splice(o, Pt),
              s.destroy(i),
              this._engine.dispatchEvent(pi.particleRemoved, {
                container: this._container,
                data: { particle: s },
              }),
              this._addToPool(s),
              !0
            );
          }),
          (this._engine = t),
          (this._container = e),
          (this._nextId = 0),
          (this._array = []),
          (this._zArray = []),
          (this._pool = []),
          (this._limit = 0),
          (this._groupLimits = new Map()),
          (this._needsSort = !1),
          (this._lastZIndex = 0),
          (this._interactionManager = new co(t, e)),
          (this._pluginsInitialized = !1);
        const i = e.canvas.size;
        (this.quadTree = new go(vo(i), T)),
          (this.movers = []),
          (this.updaters = []);
      }
      get count() {
        return this._array.length;
      }
      addManualParticles() {
        const t = this._container;
        t.actualOptions.manualParticles.forEach((e) =>
          this.addParticle(
            e.position ? ai(e.position, t.canvas.size) : void 0,
            e.options,
          ),
        );
      }
      addParticle(t, e, i, s) {
        const o = this._container.actualOptions.particles.number.limit.mode,
          n =
            void 0 === i
              ? this._limit
              : (this._groupLimits.get(i) ?? this._limit),
          a = this.count;
        if (n > wt)
          switch (o) {
            case wi.delete: {
              const t = a + bt - n;
              t > xt && this.removeQuantity(t);
              break;
            }
            case wi.wait:
              if (a >= n) return;
          }
        return this._pushParticle(t, e, i, s);
      }
      clear() {
        (this._array = []),
          (this._zArray = []),
          (this._pluginsInitialized = !1);
      }
      destroy() {
        (this._array = []),
          (this._zArray = []),
          (this.movers = []),
          (this.updaters = []);
      }
      draw(t) {
        const e = this._container,
          i = e.canvas;
        i.clear(), this.update(t);
        for (const s of e.plugins.values()) i.drawPlugin(s, t);
        for (const e of this._zArray) e.draw(t);
      }
      filter(t) {
        return this._array.filter(t);
      }
      find(t) {
        return this._array.find(t);
      }
      get(t) {
        return this._array[t];
      }
      handleClickMode(t) {
        this._interactionManager.handleClickMode(t);
      }
      async init() {
        const t = this._container,
          e = t.actualOptions;
        (this._lastZIndex = 0),
          (this._needsSort = !1),
          await this.initPlugins();
        let i = !1;
        for (const e of t.plugins.values())
          if (((i = e.particlesInitialization?.() ?? i), i)) break;
        if ((this.addManualParticles(), !i)) {
          const t = e.particles,
            i = t.groups;
          for (const e in i) {
            const s = i[e];
            for (
              let i = this.count, o = 0;
              o < s.number?.value && i < t.number.value;
              i++, o++
            )
              this.addParticle(void 0, s, e);
          }
          for (let e = this.count; e < t.number.value; e++) this.addParticle();
        }
      }
      async initPlugins() {
        if (this._pluginsInitialized) return;
        const t = this._container;
        (this.movers = await this._engine.getMovers(t, !0)),
          (this.updaters = await this._engine.getUpdaters(t, !0)),
          await this._interactionManager.init();
        for (const e of t.pathGenerators.values()) e.init(t);
      }
      push(t, e, i, s) {
        for (let o = 0; o < t; o++) this.addParticle(e?.position, i, s);
      }
      async redraw() {
        this.clear(), await this.init(), this.draw({ value: 0, factor: 0 });
      }
      remove(t, e, i) {
        this.removeAt(this._array.indexOf(t), void 0, e, i);
      }
      removeAt(t, e = I, i, s) {
        if (t < _t || t > this.count) return;
        let o = 0;
        for (let n = t; o < e && n < this.count; n++)
          this._removeParticle(n, i, s) && (n--, o++);
      }
      removeQuantity(t, e) {
        this.removeAt(_t, t, e);
      }
      setDensity() {
        const t = this._container.actualOptions,
          e = t.particles.groups;
        for (const t in e) this._applyDensity(e[t], zt, t);
        this._applyDensity(t.particles, t.manualParticles.length);
      }
      setLastZIndex(t) {
        (this._lastZIndex = t),
          (this._needsSort = this._needsSort || this._lastZIndex < t);
      }
      setResizeFactor(t) {
        this._resizeFactor = t;
      }
      update(t) {
        const e = this._container,
          i = new Set();
        this.quadTree = new go(vo(e.canvas.size), T);
        for (const t of e.pathGenerators.values()) t.update();
        for (const i of e.plugins.values()) i.update?.(t);
        const s = this._resizeFactor;
        for (const e of this._array) {
          s &&
            !e.ignoresResizeRatio &&
            ((e.position.x *= s.width),
            (e.position.y *= s.height),
            (e.initialPosition.x *= s.width),
            (e.initialPosition.y *= s.height)),
            (e.ignoresResizeRatio = !1),
            this._interactionManager.reset(e);
          for (const i of this._container.plugins.values()) {
            if (e.destroyed) break;
            i.particleUpdate?.(e, t);
          }
          for (const i of this.movers) i.isEnabled(e) && i.move(e, t);
          e.destroyed
            ? i.add(e)
            : this.quadTree.insert(new uo(e.getPosition(), e));
        }
        if (i.size) {
          const t = (t) => !i.has(t);
          (this._array = this.filter(t)),
            (this._zArray = this._zArray.filter(t));
          for (const t of i)
            this._engine.dispatchEvent(pi.particleRemoved, {
              container: this._container,
              data: { particle: t },
            });
          this._addToPool(...i);
        }
        this._interactionManager.externalInteract(t);
        for (const e of this._array) {
          for (const i of this.updaters) i.update(e, t);
          e.destroyed ||
            e.spawning ||
            this._interactionManager.particlesInteract(e, t);
        }
        if ((delete this._resizeFactor, this._needsSort)) {
          const t = this._zArray;
          t.sort((t, e) => e.position.z - t.position.z || t.id - e.id),
            (this._lastZIndex = t[t.length - Ct].position.z),
            (this._needsSort = !1);
        }
      }
    }
    class wo {
      constructor(t) {
        (this.container = t), (this.pixelRatio = E), (this.reduceFactor = R);
      }
      init() {
        const t = this.container,
          e = t.actualOptions;
        (this.pixelRatio =
          !e.detectRetina || Fe() ? E : window.devicePixelRatio),
          (this.reduceFactor = R);
        const i = this.pixelRatio,
          s = t.canvas;
        if (s.element) {
          const t = s.element;
          (s.size.width = t.offsetWidth * i),
            (s.size.height = t.offsetHeight * i);
        }
        const o = e.particles,
          n = o.move;
        (this.maxSpeed = le(n.gravity.maxSpeed) * i),
          (this.sizeAnimationSpeed = le(o.size.animation.speed) * i);
      }
      initParticle(t) {
        const e = t.options,
          i = this.pixelRatio,
          s = e.move,
          o = s.distance,
          n = t.retina;
        (n.moveDrift = le(s.drift) * i),
          (n.moveSpeed = le(s.speed) * i),
          (n.sizeAnimationSpeed = le(e.size.animation.speed) * i);
        const a = n.maxDistance;
        (a.horizontal = void 0 !== o.horizontal ? o.horizontal * i : void 0),
          (a.vertical = void 0 !== o.vertical ? o.vertical * i : void 0),
          (n.maxSpeed = le(s.gravity.maxSpeed) * i);
      }
    }
    function bo(t) {
      return t && !t.destroyed;
    }
    function xo(t, e, ...i) {
      const s = new ro(t, e);
      return no(s, ...i), s;
    }
    class _o {
      constructor(t, e, i) {
        (this._intersectionManager = (t) => {
          if (bo(this) && this.actualOptions.pauseOnOutsideViewport)
            for (const e of t)
              e.target === this.interactivity.element &&
                (e.isIntersecting ? this.play() : this.pause());
        }),
          (this._nextFrame = (t) => {
            try {
              if (
                !this._smooth &&
                void 0 !== this._lastFrameTime &&
                t < this._lastFrameTime + v / this.fpsLimit
              )
                return void this.draw(!1);
              this._lastFrameTime ??= t;
              const e = (function (t, e = C, i = !1) {
                return { value: t, factor: i ? C / e : (C * t) / v };
              })(t - this._lastFrameTime, this.fpsLimit, this._smooth);
              if (
                (this.addLifeTime(e.value),
                (this._lastFrameTime = t),
                e.value > v)
              )
                return void this.draw(!1);
              if ((this.particles.draw(e), !this.alive()))
                return void this.destroy();
              this.animationStatus && this.draw(!1);
            } catch (t) {
              Ee().error(`${f} in animation loop`, t);
            }
          }),
          (this._engine = t),
          (this.id = Symbol(e)),
          (this.fpsLimit = 120),
          (this._smooth = !1),
          (this._delay = 0),
          (this._duration = 0),
          (this._lifeTime = 0),
          (this._firstStart = !0),
          (this.started = !1),
          (this.destroyed = !1),
          (this._paused = !0),
          (this._lastFrameTime = 0),
          (this.zLayers = 100),
          (this.pageHidden = !1),
          (this._clickHandlers = new Map()),
          (this._sourceOptions = i),
          (this._initialSourceOptions = i),
          (this.retina = new wo(this)),
          (this.canvas = new ss(this, this._engine)),
          (this.particles = new yo(this._engine, this)),
          (this.pathGenerators = new Map()),
          (this.interactivity = { mouse: { clicking: !1, inside: !1 } }),
          (this.plugins = new Map()),
          (this.effectDrawers = new Map()),
          (this.shapeDrawers = new Map()),
          (this._options = xo(this._engine, this)),
          (this.actualOptions = xo(this._engine, this)),
          (this._eventListeners = new ns(this)),
          (this._intersectionObserver = Be((t) =>
            this._intersectionManager(t),
          )),
          this._engine.dispatchEvent(pi.containerBuilt, { container: this });
      }
      get animationStatus() {
        return !this._paused && !this.pageHidden && bo(this);
      }
      get options() {
        return this._options;
      }
      get sourceOptions() {
        return this._sourceOptions;
      }
      addClickHandler(t) {
        if (!bo(this)) return;
        const e = this.interactivity.element;
        if (!e) return;
        const i = (e, i, s) => {
          if (!bo(this)) return;
          const o = this.retina.pixelRatio,
            n = { x: i.x * o, y: i.y * o },
            a = this.particles.quadTree.queryCircle(n, s * o);
          t(e, a);
        };
        let s = !1,
          o = !1;
        this._clickHandlers.set("click", (t) => {
          if (!bo(this)) return;
          const e = t,
            s = { x: e.offsetX || e.clientX, y: e.offsetY || e.clientY };
          i(t, s, J);
        }),
          this._clickHandlers.set("touchstart", () => {
            bo(this) && ((s = !0), (o = !1));
          }),
          this._clickHandlers.set("touchmove", () => {
            bo(this) && (o = !0);
          }),
          this._clickHandlers.set("touchend", (t) => {
            if (bo(this)) {
              if (s && !o) {
                const e = t;
                let s = e.touches[e.touches.length - tt];
                if (
                  !s &&
                  ((s = e.changedTouches[e.changedTouches.length - tt]), !s)
                )
                  return;
                const o = this.canvas.element,
                  n = o ? o.getBoundingClientRect() : void 0,
                  a = {
                    x: s.clientX - (n ? n.left : et),
                    y: s.clientY - (n ? n.top : et),
                  };
                i(t, a, Math.max(s.radiusX, s.radiusY));
              }
              (s = !1), (o = !1);
            }
          }),
          this._clickHandlers.set("touchcancel", () => {
            bo(this) && ((s = !1), (o = !1));
          });
        for (const [t, i] of this._clickHandlers) e.addEventListener(t, i);
      }
      addLifeTime(t) {
        this._lifeTime += t;
      }
      addPath(t, e, i = !1) {
        return (
          !(!bo(this) || (!i && this.pathGenerators.has(t))) &&
          (this.pathGenerators.set(t, e), !0)
        );
      }
      alive() {
        return !this._duration || this._lifeTime <= this._duration;
      }
      clearClickHandlers() {
        if (bo(this)) {
          for (const [t, e] of this._clickHandlers)
            this.interactivity.element?.removeEventListener(t, e);
          this._clickHandlers.clear();
        }
      }
      destroy(t = !0) {
        if (bo(this)) {
          this.stop(),
            this.clearClickHandlers(),
            this.particles.destroy(),
            this.canvas.destroy();
          for (const t of this.effectDrawers.values()) t.destroy?.(this);
          for (const t of this.shapeDrawers.values()) t.destroy?.(this);
          for (const t of this.effectDrawers.keys())
            this.effectDrawers.delete(t);
          for (const t of this.shapeDrawers.keys()) this.shapeDrawers.delete(t);
          if ((this._engine.clearPlugins(this), (this.destroyed = !0), t)) {
            const t = this._engine.items,
              e = t.findIndex((t) => t === this);
            e >= st && t.splice(e, it);
          }
          this._engine.dispatchEvent(pi.containerDestroyed, {
            container: this,
          });
        }
      }
      draw(t) {
        if (!bo(this)) return;
        let e = t;
        const i = (t) => {
          e && ((this._lastFrameTime = void 0), (e = !1)), this._nextFrame(t);
        };
        this._drawAnimationFrame = oe((t) => i(t));
      }
      async export(t, e = {}) {
        for (const i of this.plugins.values()) {
          if (!i.export) continue;
          const s = await i.export(t, e);
          if (s.supported) return s.blob;
        }
        Ee().error(`${f} - Export plugin with type ${t} not found`);
      }
      handleClickMode(t) {
        if (bo(this)) {
          this.particles.handleClickMode(t);
          for (const e of this.plugins.values()) e.handleClickMode?.(t);
        }
      }
      async init() {
        if (!bo(this)) return;
        const t = this._engine.getSupportedEffects();
        for (const e of t) {
          const t = this._engine.getEffectDrawer(e);
          t && this.effectDrawers.set(e, t);
        }
        const e = this._engine.getSupportedShapes();
        for (const t of e) {
          const e = this._engine.getShapeDrawer(t);
          e && this.shapeDrawers.set(t, e);
        }
        await this.particles.initPlugins(),
          (this._options = xo(
            this._engine,
            this,
            this._initialSourceOptions,
            this.sourceOptions,
          )),
          (this.actualOptions = xo(this._engine, this, this._options));
        const i = await this._engine.getAvailablePlugins(this);
        for (const [t, e] of i) this.plugins.set(t, e);
        this.retina.init(),
          await this.canvas.init(),
          this.updateActualOptions(),
          this.canvas.initBackground(),
          this.canvas.resize();
        const {
          zLayers: s,
          duration: o,
          delay: n,
          fpsLimit: a,
          smooth: r,
        } = this.actualOptions;
        (this.zLayers = s),
          (this._duration = le(o) * v),
          (this._delay = le(n) * v),
          (this._lifeTime = 0),
          (this.fpsLimit = a > nt ? a : ot),
          (this._smooth = r);
        for (const t of this.effectDrawers.values()) await t.init?.(this);
        for (const t of this.shapeDrawers.values()) await t.init?.(this);
        for (const t of this.plugins.values()) await t.init?.();
        this._engine.dispatchEvent(pi.containerInit, { container: this }),
          await this.particles.init(),
          this.particles.setDensity();
        for (const t of this.plugins.values()) t.particlesSetup?.();
        this._engine.dispatchEvent(pi.particlesSetup, { container: this });
      }
      async loadTheme(t) {
        bo(this) && ((this._currentTheme = t), await this.refresh());
      }
      pause() {
        if (
          bo(this) &&
          (void 0 !== this._drawAnimationFrame &&
            (ne(this._drawAnimationFrame), delete this._drawAnimationFrame),
          !this._paused)
        ) {
          for (const t of this.plugins.values()) t.pause?.();
          this.pageHidden || (this._paused = !0),
            this._engine.dispatchEvent(pi.containerPaused, { container: this });
        }
      }
      play(t) {
        if (!bo(this)) return;
        const e = this._paused || t;
        if (!this._firstStart || this.actualOptions.autoPlay) {
          if ((this._paused && (this._paused = !1), e))
            for (const t of this.plugins.values()) t.play && t.play();
          this._engine.dispatchEvent(pi.containerPlay, { container: this }),
            this.draw(e ?? !1);
        } else this._firstStart = !1;
      }
      async refresh() {
        if (bo(this)) return this.stop(), this.start();
      }
      async reset(t) {
        if (bo(this))
          return (
            (this._initialSourceOptions = t),
            (this._sourceOptions = t),
            (this._options = xo(
              this._engine,
              this,
              this._initialSourceOptions,
              this.sourceOptions,
            )),
            (this.actualOptions = xo(this._engine, this, this._options)),
            this.refresh()
          );
      }
      async start() {
        bo(this) &&
          !this.started &&
          (await this.init(),
          (this.started = !0),
          await new Promise((t) => {
            const e = async () => {
              this._eventListeners.addListeners(),
                this.interactivity.element instanceof HTMLElement &&
                  this._intersectionObserver &&
                  this._intersectionObserver.observe(
                    this.interactivity.element,
                  );
              for (const t of this.plugins.values()) await t.start?.();
              this._engine.dispatchEvent(pi.containerStarted, {
                container: this,
              }),
                this.play(),
                t();
            };
            this._delayTimeout = setTimeout(() => {
              e();
            }, this._delay);
          }));
      }
      stop() {
        if (bo(this) && this.started) {
          this._delayTimeout &&
            (clearTimeout(this._delayTimeout), delete this._delayTimeout),
            (this._firstStart = !0),
            (this.started = !1),
            this._eventListeners.removeListeners(),
            this.pause(),
            this.particles.clear(),
            this.canvas.stop(),
            this.interactivity.element instanceof HTMLElement &&
              this._intersectionObserver &&
              this._intersectionObserver.unobserve(this.interactivity.element);
          for (const t of this.plugins.values()) t.stop?.();
          for (const t of this.plugins.keys()) this.plugins.delete(t);
          (this._sourceOptions = this._options),
            this._engine.dispatchEvent(pi.containerStopped, {
              container: this,
            });
        }
      }
      updateActualOptions() {
        this.actualOptions.responsive = [];
        const t = this.actualOptions.setResponsive(
          this.canvas.size.width,
          this.retina.pixelRatio,
          this._options,
        );
        return (
          this.actualOptions.setTheme(this._currentTheme),
          this._responsiveMaxWidth !== t && ((this._responsiveMaxWidth = t), !0)
        );
      }
    }
    class zo {
      constructor() {
        this._listeners = new Map();
      }
      addEventListener(t, e) {
        this.removeEventListener(t, e);
        let i = this._listeners.get(t);
        i || ((i = []), this._listeners.set(t, i)), i.push(e);
      }
      dispatchEvent(t, e) {
        const i = this._listeners.get(t);
        i?.forEach((t) => t(e));
      }
      hasEventListener(t) {
        return !!this._listeners.get(t);
      }
      removeAllEventListeners(t) {
        t ? this._listeners.delete(t) : (this._listeners = new Map());
      }
      removeEventListener(t, e) {
        const i = this._listeners.get(t);
        if (!i) return;
        const s = i.length,
          o = i.indexOf(e);
        o < _t || (s === Pt ? this._listeners.delete(t) : i.splice(o, Pt));
      }
    }
    async function Co(t, e, i, s = !1) {
      let o = e.get(t);
      return (
        (o && !s) ||
          ((o = await Promise.all([...i.values()].map((e) => e(t)))),
          e.set(t, o)),
        o
      );
    }
    class Mo {
      constructor() {
        (this._configs = new Map()),
          (this._domArray = []),
          (this._eventDispatcher = new zo()),
          (this._initialized = !1),
          (this.plugins = []),
          (this.colorManagers = new Map()),
          (this.easingFunctions = new Map()),
          (this._initializers = {
            interactors: new Map(),
            movers: new Map(),
            updaters: new Map(),
          }),
          (this.interactors = new Map()),
          (this.movers = new Map()),
          (this.updaters = new Map()),
          (this.presets = new Map()),
          (this.effectDrawers = new Map()),
          (this.shapeDrawers = new Map()),
          (this.pathGenerators = new Map());
      }
      get configs() {
        const t = {};
        for (const [e, i] of this._configs) t[e] = i;
        return t;
      }
      get items() {
        return this._domArray;
      }
      get version() {
        return "3.8.1";
      }
      async addColorManager(t, e = !0) {
        this.colorManagers.set(t.key, t), await this.refresh(e);
      }
      addConfig(t) {
        const e = t.key ?? t.name ?? "default";
        this._configs.set(e, t),
          this._eventDispatcher.dispatchEvent(pi.configAdded, {
            data: { name: e, config: t },
          });
      }
      async addEasing(t, e, i = !0) {
        this.getEasing(t) ||
          (this.easingFunctions.set(t, e), await this.refresh(i));
      }
      async addEffect(t, e, i = !0) {
        ei(t, (t) => {
          this.getEffectDrawer(t) || this.effectDrawers.set(t, e);
        }),
          await this.refresh(i);
      }
      addEventListener(t, e) {
        this._eventDispatcher.addEventListener(t, e);
      }
      async addInteractor(t, e, i = !0) {
        this._initializers.interactors.set(t, e), await this.refresh(i);
      }
      async addMover(t, e, i = !0) {
        this._initializers.movers.set(t, e), await this.refresh(i);
      }
      async addParticleUpdater(t, e, i = !0) {
        this._initializers.updaters.set(t, e), await this.refresh(i);
      }
      async addPathGenerator(t, e, i = !0) {
        this.getPathGenerator(t) || this.pathGenerators.set(t, e),
          await this.refresh(i);
      }
      async addPlugin(t, e = !0) {
        this.getPlugin(t.id) || this.plugins.push(t), await this.refresh(e);
      }
      async addPreset(t, e, i = !1, s = !0) {
        (!i && this.getPreset(t)) || this.presets.set(t, e),
          await this.refresh(s);
      }
      async addShape(t, e = !0) {
        for (const e of t.validTypes)
          this.getShapeDrawer(e) || this.shapeDrawers.set(e, t);
        await this.refresh(e);
      }
      checkVersion(t) {
        if (this.version !== t)
          throw new Error(
            `The tsParticles version is different from the loaded plugins version. Engine version: ${this.version}. Plugin version: ${t}`,
          );
      }
      clearPlugins(t) {
        this.updaters.delete(t),
          this.movers.delete(t),
          this.interactors.delete(t);
      }
      dispatchEvent(t, e) {
        this._eventDispatcher.dispatchEvent(t, e);
      }
      dom() {
        return this.items;
      }
      domItem(t) {
        return this.item(t);
      }
      async getAvailablePlugins(t) {
        const e = new Map();
        for (const i of this.plugins)
          i.needsPlugin(t.actualOptions) && e.set(i.id, await i.getPlugin(t));
        return e;
      }
      getEasing(t) {
        return this.easingFunctions.get(t) ?? ((t) => t);
      }
      getEffectDrawer(t) {
        return this.effectDrawers.get(t);
      }
      async getInteractors(t, e = !1) {
        return Co(t, this.interactors, this._initializers.interactors, e);
      }
      async getMovers(t, e = !1) {
        return Co(t, this.movers, this._initializers.movers, e);
      }
      getPathGenerator(t) {
        return this.pathGenerators.get(t);
      }
      getPlugin(t) {
        return this.plugins.find((e) => e.id === t);
      }
      getPreset(t) {
        return this.presets.get(t);
      }
      getShapeDrawer(t) {
        return this.shapeDrawers.get(t);
      }
      getSupportedEffects() {
        return this.effectDrawers.keys();
      }
      getSupportedShapes() {
        return this.shapeDrawers.keys();
      }
      async getUpdaters(t, e = !1) {
        return Co(t, this.updaters, this._initializers.updaters, e);
      }
      init() {
        this._initialized || (this._initialized = !0);
      }
      item(t) {
        const { items: e } = this,
          i = e[t];
        if (i && !i.destroyed) return i;
        e.splice(t, it);
      }
      async load(t) {
        const e =
            t.id ?? t.element?.id ?? `tsparticles${Math.floor(ie() * rt)}`,
          { index: s, url: o } = t,
          n = o
            ? await (async function (t) {
                const e = ii(t.url, t.index);
                if (!e) return t.fallback;
                const i = await fetch(e);
                return i.ok
                  ? await i.json()
                  : (Ee().error(
                      `${f} ${i.status} while retrieving config file`,
                    ),
                    t.fallback);
              })({ fallback: t.options, url: o, index: s })
            : t.options,
          a = ii(n, s),
          { items: r } = this,
          c = r.findIndex((t) => t.id.description === e),
          l = new _o(this, e, a);
        if (c >= ct) {
          const t = this.item(c),
            e = t ? lt : ht;
          t && !t.destroyed && t.destroy(!1), r.splice(c, e, l);
        } else r.push(l);
        const h = ((t, e) => {
            let s = e ?? document.getElementById(t);
            return (
              s ||
              ((s = document.createElement("div")),
              (s.id = t),
              (s.dataset[i] = P),
              document.body.append(s),
              s)
            );
          })(e, t.element),
          d = ((t) => {
            let e;
            if (t instanceof HTMLCanvasElement || t.tagName.toLowerCase() === S)
              (e = t), e.dataset[i] || (e.dataset[i] = k);
            else {
              const s = t.getElementsByTagName(S);
              s.length
                ? ((e = s[at]), (e.dataset[i] = k))
                : ((e = document.createElement(S)),
                  (e.dataset[i] = P),
                  t.appendChild(e));
            }
            const s = "100%";
            return (
              e.style.width || (e.style.width = s),
              e.style.height || (e.style.height = s),
              e
            );
          })(h);
        return l.canvas.loadCanvas(d), await l.start(), l;
      }
      loadOptions(t, e) {
        this.plugins.forEach((i) => i.loadOptions?.(t, e));
      }
      loadParticlesOptions(t, e, ...i) {
        const s = this.updaters.get(t);
        s && s.forEach((t) => t.loadOptions?.(e, ...i));
      }
      async refresh(t = !0) {
        t && (await Promise.all(this.items.map((t) => t.refresh())));
      }
      removeEventListener(t, e) {
        this._eventDispatcher.removeEventListener(t, e);
      }
      setOnClickHandler(t) {
        const { items: e } = this;
        if (!e.length)
          throw new Error(
            `${f} can only set click handlers after calling tsParticles.load()`,
          );
        e.forEach((e) => e.addClickHandler(t));
      }
    }
    class Po {
      constructor(t) {
        (this.type = bi.external), (this.container = t);
      }
    }
    class ko {
      constructor(t) {
        (this.type = bi.particles), (this.container = t);
      }
    }
    var So, Oo, Do;
    !(function (t) {
      (t.clockwise = "clockwise"),
        (t.counterClockwise = "counter-clockwise"),
        (t.random = "random");
    })(So || (So = {})),
      (function (t) {
        (t.linear = "linear"), (t.radial = "radial"), (t.random = "random");
      })(Oo || (Oo = {})),
      (function (t) {
        (t.easeInBack = "ease-in-back"),
          (t.easeInCirc = "ease-in-circ"),
          (t.easeInCubic = "ease-in-cubic"),
          (t.easeInLinear = "ease-in-linear"),
          (t.easeInQuad = "ease-in-quad"),
          (t.easeInQuart = "ease-in-quart"),
          (t.easeInQuint = "ease-in-quint"),
          (t.easeInExpo = "ease-in-expo"),
          (t.easeInSine = "ease-in-sine"),
          (t.easeOutBack = "ease-out-back"),
          (t.easeOutCirc = "ease-out-circ"),
          (t.easeOutCubic = "ease-out-cubic"),
          (t.easeOutLinear = "ease-out-linear"),
          (t.easeOutQuad = "ease-out-quad"),
          (t.easeOutQuart = "ease-out-quart"),
          (t.easeOutQuint = "ease-out-quint"),
          (t.easeOutExpo = "ease-out-expo"),
          (t.easeOutSine = "ease-out-sine"),
          (t.easeInOutBack = "ease-in-out-back"),
          (t.easeInOutCirc = "ease-in-out-circ"),
          (t.easeInOutCubic = "ease-in-out-cubic"),
          (t.easeInOutLinear = "ease-in-out-linear"),
          (t.easeInOutQuad = "ease-in-out-quad"),
          (t.easeInOutQuart = "ease-in-out-quart"),
          (t.easeInOutQuint = "ease-in-out-quint"),
          (t.easeInOutExpo = "ease-in-out-expo"),
          (t.easeInOutSine = "ease-in-out-sine");
      })(Do || (Do = {}));
    const To = (function () {
      const t = new Mo();
      return t.init(), t;
    })();
    Fe() || (window.tsParticles = To);
    class Io {
      constructor() {
        this.wait = !1;
      }
      load(t) {
        Yt(t) ||
          (void 0 !== t.count && (this.count = t.count),
          void 0 !== t.delay && (this.delay = ue(t.delay)),
          void 0 !== t.duration && (this.duration = ue(t.duration)),
          void 0 !== t.wait && (this.wait = t.wait));
      }
    }
    class Eo {
      constructor() {
        (this.quantity = 1), (this.delay = 0.1);
      }
      load(t) {
        Yt(t) ||
          (void 0 !== t.quantity && (this.quantity = ue(t.quantity)),
          void 0 !== t.delay && (this.delay = ue(t.delay)));
      }
    }
    class Ro {
      constructor() {
        (this.color = !1), (this.opacity = !1);
      }
      load(t) {
        Yt(t) ||
          (void 0 !== t.color && (this.color = t.color),
          void 0 !== t.opacity && (this.opacity = t.opacity));
      }
    }
    class Fo {
      constructor() {
        (this.options = {}), (this.replace = new Ro()), (this.type = "square");
      }
      load(t) {
        Yt(t) ||
          (void 0 !== t.options && (this.options = Ne({}, t.options ?? {})),
          this.replace.load(t.replace),
          void 0 !== t.type && (this.type = t.type));
      }
    }
    class Lo {
      constructor() {
        (this.mode = Oe.percent), (this.height = 0), (this.width = 0);
      }
      load(t) {
        Yt(t) ||
          (void 0 !== t.mode && (this.mode = t.mode),
          void 0 !== t.height && (this.height = t.height),
          void 0 !== t.width && (this.width = t.width));
      }
    }
    class Ao {
      constructor() {
        (this.autoPlay = !0),
          (this.fill = !0),
          (this.life = new Io()),
          (this.rate = new Eo()),
          (this.shape = new Fo()),
          (this.startCount = 0);
      }
      load(t) {
        Yt(t) ||
          (void 0 !== t.autoPlay && (this.autoPlay = t.autoPlay),
          void 0 !== t.size &&
            (this.size || (this.size = new Lo()), this.size.load(t.size)),
          void 0 !== t.direction && (this.direction = t.direction),
          (this.domId = t.domId),
          void 0 !== t.fill && (this.fill = t.fill),
          this.life.load(t.life),
          (this.name = t.name),
          (this.particles = ei(t.particles, (t) => Ne({}, t))),
          this.rate.load(t.rate),
          this.shape.load(t.shape),
          void 0 !== t.position &&
            ((this.position = {}),
            void 0 !== t.position.x && (this.position.x = ue(t.position.x)),
            void 0 !== t.position.y && (this.position.y = ue(t.position.y))),
          void 0 !== t.spawnColor &&
            (void 0 === this.spawnColor && (this.spawnColor = new ks()),
            this.spawnColor.load(t.spawnColor)),
          void 0 !== t.startCount && (this.startCount = t.startCount));
      }
    }
    var Bo;
    !(function (t) {
      t.emitter = "emitter";
    })(Bo || (Bo = {}));
    function Vo(t, e) {
      t.color ? (t.color.value = e) : (t.color = { value: e });
    }
    class Uo {
      constructor(t, e, i, s, o) {
        (this.emitters = e),
          (this.container = i),
          (this._destroy = () => {
            this._mutationObserver?.disconnect(),
              (this._mutationObserver = void 0),
              this._resizeObserver?.disconnect(),
              (this._resizeObserver = void 0),
              this.emitters.removeEmitter(this),
              this._engine.dispatchEvent("emitterDestroyed", {
                container: this.container,
                data: { emitter: this },
              });
          }),
          (this._prepareToDie = () => {
            if (this._paused) return;
            const t =
              void 0 !== this.options.life?.duration
                ? le(this.options.life.duration)
                : void 0;
            this.container.retina.reduceFactor &&
              (this._lifeCount > 0 || this._immortal) &&
              void 0 !== t &&
              t > 0 &&
              (this._duration = t * v);
          }),
          (this._setColorAnimation = (t, e, i, s = 1) => {
            const o = this.container;
            if (!t.enable) return e;
            const n = ce(t.offset),
              a = (le(this.options.rate.delay) * v) / o.retina.reduceFactor;
            return (e + (le(t.speed ?? 0) * o.fpsLimit) / a + n * s) % i;
          }),
          (this._engine = t),
          (this._currentDuration = 0),
          (this._currentEmitDelay = 0),
          (this._currentSpawnDelay = 0),
          (this._initialPosition = o),
          s instanceof Ao
            ? (this.options = s)
            : ((this.options = new Ao()), this.options.load(s)),
          (this._spawnDelay =
            (le(this.options.life.delay ?? 0) * v) /
            this.container.retina.reduceFactor),
          (this.position = this._initialPosition ?? this._calcPosition()),
          (this.name = this.options.name),
          (this.fill = this.options.fill),
          (this._firstSpawn = !this.options.life.wait),
          (this._startParticlesAdded = !1);
        let n = Ne({}, this.options.particles);
        if (
          ((n ??= {}),
          (n.move ??= {}),
          (n.move.direction ??= this.options.direction),
          this.options.spawnColor &&
            (this.spawnColor = ki(this._engine, this.options.spawnColor)),
          (this._paused = !this.options.autoPlay),
          (this._particlesOptions = n),
          (this._size = this._calcSize()),
          (this.size = ri(this._size, this.container.canvas.size)),
          (this._lifeCount = this.options.life.count ?? -1),
          (this._immortal = this._lifeCount <= 0),
          this.options.domId)
        ) {
          const t = document.getElementById(this.options.domId);
          t &&
            ((this._mutationObserver = new MutationObserver(() => {
              this.resize();
            })),
            (this._resizeObserver = new ResizeObserver(() => {
              this.resize();
            })),
            this._mutationObserver.observe(t, {
              attributes: !0,
              attributeFilter: ["style", "width", "height"],
            }),
            this._resizeObserver.observe(t));
        }
        const a = this.options.shape,
          r = this._engine.emitterShapeManager?.getShapeGenerator(a.type);
        r &&
          (this._shape = r.generate(
            this.position,
            this.size,
            this.fill,
            a.options,
          )),
          this._engine.dispatchEvent("emitterCreated", {
            container: i,
            data: { emitter: this },
          }),
          this.play();
      }
      externalPause() {
        (this._paused = !0), this.pause();
      }
      externalPlay() {
        (this._paused = !1), this.play();
      }
      async init() {
        await this._shape?.init();
      }
      pause() {
        this._paused || delete this._emitDelay;
      }
      play() {
        if (
          !this._paused &&
          this.container.retina.reduceFactor &&
          (this._lifeCount > 0 || this._immortal || !this.options.life.count) &&
          (this._firstSpawn ||
            this._currentSpawnDelay >= (this._spawnDelay ?? 0))
        ) {
          if (void 0 === this._emitDelay) {
            const t = le(this.options.rate.delay);
            this._emitDelay = (t * v) / this.container.retina.reduceFactor;
          }
          (this._lifeCount > 0 || this._immortal) && this._prepareToDie();
        }
      }
      resize() {
        const t = this._initialPosition;
        (this.position =
          t && Ge(t, this.container.canvas.size, Kt.origin)
            ? t
            : this._calcPosition()),
          (this._size = this._calcSize()),
          (this.size = ri(this._size, this.container.canvas.size)),
          this._shape?.resize(this.position, this.size);
      }
      update(t) {
        this._paused ||
          (this._firstSpawn &&
            ((this._firstSpawn = !1),
            (this._currentSpawnDelay = this._spawnDelay ?? 0),
            (this._currentEmitDelay = this._emitDelay ?? 0)),
          this._startParticlesAdded ||
            ((this._startParticlesAdded = !0),
            this._emitParticles(this.options.startCount)),
          void 0 !== this._duration &&
            ((this._currentDuration += t.value),
            this._currentDuration >= this._duration &&
              (this.pause(),
              void 0 !== this._spawnDelay && delete this._spawnDelay,
              this._immortal || this._lifeCount--,
              this._lifeCount > 0 || this._immortal
                ? ((this.position = this._calcPosition()),
                  this._shape?.resize(this.position, this.size),
                  (this._spawnDelay =
                    (le(this.options.life.delay ?? 0) * v) /
                    this.container.retina.reduceFactor))
                : this._destroy(),
              (this._currentDuration -= this._duration),
              delete this._duration)),
          void 0 !== this._spawnDelay &&
            ((this._currentSpawnDelay += t.value),
            this._currentSpawnDelay >= this._spawnDelay &&
              (this._engine.dispatchEvent("emitterPlay", {
                container: this.container,
              }),
              this.play(),
              (this._currentSpawnDelay -= this._currentSpawnDelay),
              delete this._spawnDelay)),
          void 0 !== this._emitDelay &&
            ((this._currentEmitDelay += t.value),
            this._currentEmitDelay >= this._emitDelay &&
              (this._emit(), (this._currentEmitDelay -= this._emitDelay))));
      }
      _calcPosition() {
        if (this.options.domId) {
          const t = document.getElementById(this.options.domId);
          if (t) {
            const e = t.getBoundingClientRect(),
              i = this.container.retina.pixelRatio;
            return {
              x: (e.x + 0.5 * e.width) * i,
              y: (e.y + 0.5 * e.height) * i,
            };
          }
        }
        return xe({
          size: this.container.canvas.size,
          position: this.options.position,
        });
      }
      _calcSize() {
        const t = this.container;
        if (this.options.domId) {
          const e = document.getElementById(this.options.domId);
          if (e) {
            const i = e.getBoundingClientRect();
            return {
              width: i.width * t.retina.pixelRatio,
              height: i.height * t.retina.pixelRatio,
              mode: Oe.precise,
            };
          }
        }
        return (
          this.options.size ??
          (() => {
            const t = new Lo();
            return t.load({ height: 0, mode: Oe.percent, width: 0 }), t;
          })()
        );
      }
      _emit() {
        if (this._paused) return;
        const t = le(this.options.rate.quantity);
        this._emitParticles(t);
      }
      _emitParticles(t) {
        const e = ii(this._particlesOptions);
        for (let i = 0; i < t; i++) {
          const t = Ne({}, e);
          if (this.spawnColor) {
            const e = this.options.spawnColor?.animation;
            if (e) {
              const t = { h: 360, s: 100, l: 100 },
                i = 3.6;
              (this.spawnColor.h = this._setColorAnimation(
                e.h,
                this.spawnColor.h,
                t.h,
                i,
              )),
                (this.spawnColor.s = this._setColorAnimation(
                  e.s,
                  this.spawnColor.s,
                  t.s,
                )),
                (this.spawnColor.l = this._setColorAnimation(
                  e.l,
                  this.spawnColor.l,
                  t.l,
                ));
            }
            Vo(t, this.spawnColor);
          }
          const i = this.options.shape;
          let s = this.position;
          if (this._shape) {
            const e = this._shape.randomPosition();
            if (e) {
              s = e.position;
              const o = i.replace;
              o.color && e.color && Vo(t, e.color),
                o.opacity &&
                  (t.opacity
                    ? (t.opacity.value = e.opacity)
                    : (t.opacity = { value: e.opacity }));
            } else s = null;
          }
          s && this.container.particles.addParticle(s, t);
        }
      }
    }
    class qo {
      constructor(t, e) {
        (this.container = e),
          (this._engine = t),
          (this.array = []),
          (this.emitters = []),
          (this.interactivityEmitters = {
            random: { count: 1, enable: !1 },
            value: [],
          });
        (e.getEmitter = (t) =>
          void 0 === t || Wt(t)
            ? this.array[t ?? 0]
            : this.array.find((e) => e.name === t)),
          (e.addEmitter = async (t, e) => this.addEmitter(t, e)),
          (e.removeEmitter = (t) => {
            const i = e.getEmitter(t);
            i && this.removeEmitter(i);
          }),
          (e.playEmitter = (t) => {
            const i = e.getEmitter(t);
            i && i.externalPlay();
          }),
          (e.pauseEmitter = (t) => {
            const i = e.getEmitter(t);
            i && i.externalPause();
          });
      }
      async addEmitter(t, e) {
        const i = new Ao();
        i.load(t);
        const s = new Uo(this._engine, this, this.container, i, e);
        return await s.init(), this.array.push(s), s;
      }
      handleClickMode(t) {
        const e = this.emitters,
          i = this.interactivityEmitters;
        if (t !== Bo.emitter) return;
        let s;
        if (i && Xt(i.value)) {
          const t = 0;
          if (i.value.length > t && i.random.enable) {
            s = [];
            const t = [];
            for (let e = 0; e < i.random.count; e++) {
              const o = $e(i.value);
              t.includes(o) && t.length < i.value.length
                ? e--
                : (t.push(o), s.push(He(i.value, o)));
            }
          } else s = i.value;
        } else s = i?.value;
        const o = s ?? e,
          n = this.container.interactivity.mouse.clickPosition;
        ei(o, async (t) => {
          await this.addEmitter(t, n);
        });
      }
      async init() {
        if (
          ((this.emitters = this.container.actualOptions.emitters),
          (this.interactivityEmitters =
            this.container.actualOptions.interactivity.modes.emitters),
          this.emitters)
        )
          if (Xt(this.emitters))
            for (const t of this.emitters) await this.addEmitter(t);
          else await this.addEmitter(this.emitters);
      }
      pause() {
        for (const t of this.array) t.pause();
      }
      play() {
        for (const t of this.array) t.play();
      }
      removeEmitter(t) {
        const e = this.array.indexOf(t);
        e >= 0 && this.array.splice(e, 1);
      }
      resize() {
        for (const t of this.array) t.resize();
      }
      stop() {
        this.array = [];
      }
      update(t) {
        for (const e of this.array) e.update(t);
      }
    }
    class $o {
      constructor(t) {
        (this._engine = t), (this.id = "emitters");
      }
      getPlugin(t) {
        return Promise.resolve(new qo(this._engine, t));
      }
      loadOptions(t, e) {
        if (!this.needsPlugin(t) && !this.needsPlugin(e)) return;
        e?.emitters &&
          (t.emitters = ei(e.emitters, (t) => {
            const e = new Ao();
            return e.load(t), e;
          }));
        const i = e?.interactivity?.modes?.emitters;
        if (i)
          if (Xt(i))
            t.interactivity.modes.emitters = {
              random: { count: 1, enable: !0 },
              value: i.map((t) => {
                const e = new Ao();
                return e.load(t), e;
              }),
            };
          else {
            const e = i;
            if (void 0 !== e.value) {
              const i = 1;
              if (Xt(e.value))
                t.interactivity.modes.emitters = {
                  random: {
                    count: e.random.count ?? i,
                    enable: e.random.enable ?? !1,
                  },
                  value: e.value.map((t) => {
                    const e = new Ao();
                    return e.load(t), e;
                  }),
                };
              else {
                const s = new Ao();
                s.load(e.value),
                  (t.interactivity.modes.emitters = {
                    random: {
                      count: e.random.count ?? i,
                      enable: e.random.enable ?? !1,
                    },
                    value: s,
                  });
              }
            } else {
              (t.interactivity.modes.emitters = {
                random: { count: 1, enable: !1 },
                value: new Ao(),
              }).value.load(i);
            }
          }
      }
      needsPlugin(t) {
        if (!t) return !1;
        const e = t.emitters;
        return (
          (Xt(e) && !!e.length) ||
          void 0 !== e ||
          (!!t.interactivity?.events?.onClick?.mode &&
            Ue(Bo.emitter, t.interactivity.events.onClick.mode))
        );
      }
    }
    const Ho = new Map();
    class Go {
      constructor(t) {
        this._engine = t;
      }
      addShapeGenerator(t, e) {
        this.getShapeGenerator(t) || Ho.set(t, e);
      }
      getShapeGenerator(t) {
        return Ho.get(t);
      }
      getSupportedShapeGenerators() {
        return Ho.keys();
      }
    }
    class jo {
      constructor() {
        (this.angle = 90),
          (this.count = 50),
          (this.spread = 45),
          (this.startVelocity = 45),
          (this.decay = 0.9),
          (this.gravity = 1),
          (this.drift = 0),
          (this.ticks = 200),
          (this.position = { x: 50, y: 50 }),
          (this.colors = [
            "#26ccff",
            "#a25afd",
            "#ff5e7e",
            "#88ff5a",
            "#fcff42",
            "#ffa62d",
            "#ff36ff",
          ]),
          (this.shapes = ["square", "circle"]),
          (this.scalar = 1),
          (this.zIndex = 100),
          (this.disableForReducedMotion = !0),
          (this.flat = !1),
          (this.shapeOptions = {});
      }
      get origin() {
        return { x: this.position.x / m, y: this.position.y / m };
      }
      set origin(t) {
        (this.position.x = t.x * m), (this.position.y = t.y * m);
      }
      get particleCount() {
        return this.count;
      }
      set particleCount(t) {
        this.count = t;
      }
      load(t) {
        if (Yt(t)) return;
        void 0 !== t.angle && (this.angle = t.angle);
        const e = t.count ?? t.particleCount;
        void 0 !== e && (this.count = e),
          void 0 !== t.spread && (this.spread = t.spread),
          void 0 !== t.startVelocity && (this.startVelocity = t.startVelocity),
          void 0 !== t.decay && (this.decay = t.decay),
          void 0 !== t.flat && (this.flat = t.flat),
          void 0 !== t.gravity && (this.gravity = t.gravity),
          void 0 !== t.drift && (this.drift = t.drift),
          void 0 !== t.ticks && (this.ticks = t.ticks);
        const i = t.origin;
        i &&
          !t.position &&
          (t.position = {
            x: void 0 !== i.x ? i.x * m : void 0,
            y: void 0 !== i.y ? i.y * m : void 0,
          });
        const s = t.position;
        s &&
          (void 0 !== s.x && (this.position.x = s.x),
          void 0 !== s.y && (this.position.y = s.y)),
          void 0 !== t.colors &&
            (Xt(t.colors)
              ? (this.colors = [...t.colors])
              : (this.colors = t.colors));
        const o = t.shapeOptions;
        if (void 0 !== o)
          for (const t in o) {
            const e = o[t];
            e && (this.shapeOptions[t] = Ne(this.shapeOptions[t] ?? {}, e));
          }
        void 0 !== t.shapes &&
          (Xt(t.shapes)
            ? (this.shapes = [...t.shapes])
            : (this.shapes = t.shapes)),
          void 0 !== t.scalar && (this.scalar = t.scalar),
          void 0 !== t.zIndex && (this.zIndex = t.zIndex),
          void 0 !== t.disableForReducedMotion &&
            (this.disableForReducedMotion = t.disableForReducedMotion);
      }
    }
    const Wo = 1,
      No = 2 * Math.PI;
    function Qo(t, e, i, s, o, n) {
      !(function (t, e) {
        const i = t.options,
          s = i.move.path;
        if (!s.enable) return;
        if (t.lastPathTime <= t.pathDelay)
          return void (t.lastPathTime += e.value);
        const o = t.pathGenerator?.generate(t, e);
        o && t.velocity.addTo(o);
        s.clamp &&
          ((t.velocity.x = ae(t.velocity.x, -Wo, Wo)),
          (t.velocity.y = ae(t.velocity.y, -Wo, Wo)));
        t.lastPathTime -= t.pathDelay;
      })(t, n);
      const a = t.gravity,
        r = a?.enable && a.inverse ? -Wo : Wo;
      o && i && (t.velocity.x += (o * n.factor) / (60 * i)),
        a?.enable &&
          i &&
          (t.velocity.y += (r * (a.acceleration * n.factor)) / (60 * i));
      const c = t.moveDecay;
      t.velocity.multTo(c);
      const l = t.velocity.mult(i);
      a?.enable &&
        s > 0 &&
        ((!a.inverse && l.y >= 0 && l.y >= s) ||
          (a.inverse && l.y <= 0 && l.y <= -s)) &&
        ((l.y = r * s), i && (t.velocity.y = l.y / i));
      const h = t.options.zIndex,
        d = (Wo - t.zIndexFactor) ** h.velocityRate;
      l.multTo(d);
      const { position: u } = t;
      u.addTo(l),
        e.vibrate &&
          ((u.x += Math.sin(u.x * Math.cos(u.y))),
          (u.y += Math.cos(u.y * Math.sin(u.x))));
    }
    class Xo {
      init(t) {
        const e = t.options.move.gravity;
        (t.gravity = {
          enable: e.enable,
          acceleration: le(e.acceleration),
          inverse: e.inverse,
        }),
          (function (t) {
            const e = t.container,
              i = t.options.move.spin;
            if (!i.enable) return;
            const s = i.position ?? { x: 50, y: 50 },
              o = {
                x: 0.01 * s.x * e.canvas.size.width,
                y: 0.01 * s.y * e.canvas.size.height,
              },
              n = fe(t.getPosition(), o),
              a = le(i.acceleration);
            (t.retina.spinAcceleration = a * e.retina.pixelRatio),
              (t.spin = {
                center: o,
                direction:
                  t.velocity.x >= 0 ? So.clockwise : So.counterClockwise,
                angle: ie() * No,
                radius: n,
                acceleration: t.retina.spinAcceleration,
              });
          })(t);
      }
      isEnabled(t) {
        return !t.destroyed && t.options.move.enable;
      }
      move(t, e) {
        const i = t.options,
          s = i.move;
        if (!s.enable) return;
        const o = t.container,
          n = o.retina.pixelRatio;
        (t.retina.moveSpeed ??= le(s.speed) * n),
          (t.retina.moveDrift ??= le(t.options.move.drift) * n);
        const a = (function (t) {
            return t.slow.inRange ? t.slow.factor : Wo;
          })(t),
          r = t.retina.moveSpeed * o.retina.reduceFactor,
          c = t.retina.moveDrift,
          l = de(i.size.value) * n,
          h = (r * (s.size ? t.getRadius() / l : 1) * a * (e.factor || 1)) / 2,
          d = t.retina.maxSpeed ?? o.retina.maxSpeed;
        s.spin.enable
          ? (function (t, e) {
              const i = t.container;
              if (!t.spin) return;
              const s = t.spin.direction === So.clockwise,
                o = { x: s ? Math.cos : Math.sin, y: s ? Math.sin : Math.cos };
              (t.position.x =
                t.spin.center.x + t.spin.radius * o.x(t.spin.angle)),
                (t.position.y =
                  t.spin.center.y + t.spin.radius * o.y(t.spin.angle)),
                (t.spin.radius += t.spin.acceleration);
              const n = Math.max(i.canvas.size.width, i.canvas.size.height),
                a = 0.5 * n;
              t.spin.radius > a
                ? ((t.spin.radius = a), (t.spin.acceleration *= -Wo))
                : t.spin.radius < 0 &&
                  ((t.spin.radius = 0), (t.spin.acceleration *= -Wo)),
                (t.spin.angle += 0.01 * e * (Wo - t.spin.radius / n));
            })(t, h)
          : Qo(t, s, h, d, c, e),
          (function (t) {
            const e = t.initialPosition,
              { dx: i, dy: s } = pe(e, t.position),
              o = Math.abs(i),
              n = Math.abs(s),
              { maxDistance: a } = t.retina,
              r = a.horizontal,
              c = a.vertical;
            if (!r && !c) return;
            if (((r && o >= r) || (c && n >= c)) && !t.misplaced)
              (t.misplaced = (!!r && o > r) || (!!c && n > c)),
                r && (t.velocity.x = 0.5 * t.velocity.y - t.velocity.x),
                c && (t.velocity.y = 0.5 * t.velocity.x - t.velocity.y);
            else if ((!r || o < r) && (!c || n < c) && t.misplaced)
              t.misplaced = !1;
            else if (t.misplaced) {
              const i = t.position,
                s = t.velocity;
              r &&
                ((i.x < e.x && s.x < 0) || (i.x > e.x && s.x > 0)) &&
                (s.x *= -ie()),
                c &&
                  ((i.y < e.y && s.y < 0) || (i.y > e.y && s.y > 0)) &&
                  (s.y *= -ie());
            }
          })(t);
      }
    }
    const Yo = 2 * Math.PI,
      Zo = 0,
      Ko = 0;
    class Jo {
      constructor() {
        this.validTypes = ["circle"];
      }
      draw(t) {
        !(function (t) {
          const { context: e, particle: i, radius: s } = t;
          i.circleRange || (i.circleRange = { min: 0, max: Yo });
          const o = i.circleRange;
          e.arc(Zo, Ko, s, o.min, o.max, !1);
        })(t);
      }
      getSidesCount() {
        return 12;
      }
      particleInit(t, e) {
        const i = e.shapeData,
          s = i?.angle ?? { max: 360, min: 0 };
        e.circleRange = Qt(s)
          ? { min: me(s.min), max: me(s.max) }
          : { min: 0, max: me(s) };
      }
    }
    class tn {
      constructor(t, e) {
        (this._container = t), (this._engine = e);
      }
      init(t) {
        const e = ki(
          this._engine,
          t.options.color,
          t.id,
          t.options.reduceDuplicates,
        );
        e &&
          (t.color = Ui(
            e,
            t.options.color.animation,
            this._container.retina.reduceFactor,
          ));
      }
      isEnabled(t) {
        const { h: e, s: i, l: s } = t.options.color.animation,
          { color: o } = t;
        return (
          !t.destroyed &&
          !t.spawning &&
          ((void 0 !== o?.h.value && e.enable) ||
            (void 0 !== o?.s.value && i.enable) ||
            (void 0 !== o?.l.value && s.enable))
        );
      }
      update(t, e) {
        Hi(t.color, e);
      }
    }
    var en;
    !(function (t) {
      (t[(t.r = 1)] = "r"),
        (t[(t.g = 2)] = "g"),
        (t[(t.b = 3)] = "b"),
        (t[(t.a = 4)] = "a");
    })(en || (en = {}));
    const sn = /^#?([a-f\d])([a-f\d])([a-f\d])([a-f\d])?$/i,
      on = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i;
    class nn {
      constructor() {
        (this.key = "hex"), (this.stringPrefix = "#");
      }
      handleColor(t) {
        return this._parseString(t.value);
      }
      handleRangeColor(t) {
        return this._parseString(t.value);
      }
      parseString(t) {
        return this._parseString(t);
      }
      _parseString(t) {
        if ("string" != typeof t) return;
        if (!t?.startsWith(this.stringPrefix)) return;
        const e = t.replace(
            sn,
            (t, e, i, s, o) =>
              e + e + i + i + s + s + (void 0 !== o ? o + o : ""),
          ),
          i = on.exec(e);
        return i
          ? {
              a: void 0 !== i[en.a] ? parseInt(i[en.a], 16) / 255 : 1,
              b: parseInt(i[en.b], 16),
              g: parseInt(i[en.g], 16),
              r: parseInt(i[en.r], 16),
            }
          : void 0;
      }
    }
    var an;
    !(function (t) {
      (t[(t.h = 1)] = "h"),
        (t[(t.s = 2)] = "s"),
        (t[(t.l = 3)] = "l"),
        (t[(t.a = 5)] = "a");
    })(an || (an = {}));
    class rn {
      constructor() {
        (this.key = "hsl"), (this.stringPrefix = "hsl");
      }
      handleColor(t) {
        const e = t.value.hsl ?? t.value;
        if (void 0 !== e.h && void 0 !== e.s && void 0 !== e.l) return Ti(e);
      }
      handleRangeColor(t) {
        const e = t.value.hsl ?? t.value;
        if (void 0 !== e.h && void 0 !== e.l)
          return Ti({ h: le(e.h), l: le(e.l), s: le(e.s) });
      }
      parseString(t) {
        if (!t.startsWith("hsl")) return;
        const e =
          /hsla?\(\s*(\d+)\s*[\s,]\s*(\d+)%\s*[\s,]\s*(\d+)%\s*([\s,]\s*(0|1|0?\.\d+|(\d{1,3})%)\s*)?\)/i.exec(
            t,
          );
        return e
          ? Ii({
              a: e.length > 4 ? Ce(e[an.a]) : 1,
              h: parseInt(e[an.h], 10),
              l: parseInt(e[an.l], 10),
              s: parseInt(e[an.s], 10),
            })
          : void 0;
      }
    }
    class cn {
      constructor(t) {
        this.container = t;
      }
      init(t) {
        const e = t.options.opacity;
        t.opacity = oi(e, 1);
        const i = e.animation;
        i.enable &&
          ((t.opacity.velocity =
            (le(i.speed) / m) * this.container.retina.reduceFactor),
          i.sync || (t.opacity.velocity *= ie()));
      }
      isEnabled(t) {
        return (
          !t.destroyed &&
          !t.spawning &&
          !!t.opacity &&
          t.opacity.enable &&
          ((t.opacity.maxLoops ?? 0) <= 0 ||
            ((t.opacity.maxLoops ?? 0) > 0 &&
              (t.opacity.loops ?? 0) < (t.opacity.maxLoops ?? 0)))
        );
      }
      reset(t) {
        t.opacity && ((t.opacity.time = 0), (t.opacity.loops = 0));
      }
      update(t, e) {
        this.isEnabled(t) &&
          t.opacity &&
          ci(t, t.opacity, !0, t.options.opacity.animation.destroy, e);
      }
    }
    class ln {
      constructor(t) {
        (this.container = t), (this.modes = [yi.bounce, yi.split]);
      }
      update(t, e, i, s) {
        if (!this.modes.includes(s)) return;
        const o = this.container;
        let n = !1;
        for (const s of o.plugins.values())
          if (
            (void 0 !== s.particleBounce && (n = s.particleBounce(t, i, e)), n)
          )
            break;
        if (n) return;
        const a = t.getPosition(),
          r = t.offset,
          c = t.getRadius(),
          l = We(a, c),
          h = o.canvas.size;
        !(function (t) {
          if (
            (t.outMode !== yi.bounce && t.outMode !== yi.split) ||
            (t.direction !== Se.left && t.direction !== Se.right)
          )
            return;
          t.bounds.right < 0 && t.direction === Se.left
            ? (t.particle.position.x = t.size + t.offset.x)
            : t.bounds.left > t.canvasSize.width &&
              t.direction === Se.right &&
              (t.particle.position.x =
                t.canvasSize.width - t.size - t.offset.x);
          const e = t.particle.velocity.x;
          let i = !1;
          if (
            (t.direction === Se.right &&
              t.bounds.right >= t.canvasSize.width &&
              e > 0) ||
            (t.direction === Se.left && t.bounds.left <= 0 && e < 0)
          ) {
            const e = le(t.particle.options.bounce.horizontal.value);
            (t.particle.velocity.x *= -e), (i = !0);
          }
          if (!i) return;
          const s = t.offset.x + t.size;
          t.bounds.right >= t.canvasSize.width && t.direction === Se.right
            ? (t.particle.position.x = t.canvasSize.width - s)
            : t.bounds.left <= 0 &&
              t.direction === Se.left &&
              (t.particle.position.x = s),
            t.outMode === yi.split && t.particle.destroy();
        })({
          particle: t,
          outMode: s,
          direction: e,
          bounds: l,
          canvasSize: h,
          offset: r,
          size: c,
        }),
          (function (t) {
            if (
              (t.outMode !== yi.bounce && t.outMode !== yi.split) ||
              (t.direction !== Se.bottom && t.direction !== Se.top)
            )
              return;
            t.bounds.bottom < 0 && t.direction === Se.top
              ? (t.particle.position.y = t.size + t.offset.y)
              : t.bounds.top > t.canvasSize.height &&
                t.direction === Se.bottom &&
                (t.particle.position.y =
                  t.canvasSize.height - t.size - t.offset.y);
            const e = t.particle.velocity.y;
            let i = !1;
            if (
              (t.direction === Se.bottom &&
                t.bounds.bottom >= t.canvasSize.height &&
                e > 0) ||
              (t.direction === Se.top && t.bounds.top <= 0 && e < 0)
            ) {
              const e = le(t.particle.options.bounce.vertical.value);
              (t.particle.velocity.y *= -e), (i = !0);
            }
            if (!i) return;
            const s = t.offset.y + t.size;
            t.bounds.bottom >= t.canvasSize.height && t.direction === Se.bottom
              ? (t.particle.position.y = t.canvasSize.height - s)
              : t.bounds.top <= 0 &&
                t.direction === Se.top &&
                (t.particle.position.y = s),
              t.outMode === yi.split && t.particle.destroy();
          })({
            particle: t,
            outMode: s,
            direction: e,
            bounds: l,
            canvasSize: h,
            offset: r,
            size: c,
          });
      }
    }
    class hn {
      constructor(t) {
        (this.container = t), (this.modes = [yi.destroy]);
      }
      update(t, e, i, s) {
        if (!this.modes.includes(s)) return;
        const o = this.container;
        switch (t.outType) {
          case xi.normal:
          case xi.outside:
            if (Ge(t.position, o.canvas.size, Kt.origin, t.getRadius(), e))
              return;
            break;
          case xi.inside: {
            const { dx: e, dy: i } = pe(t.position, t.moveCenter),
              { x: s, y: o } = t.velocity;
            if (
              (s < 0 && e > t.moveCenter.radius) ||
              (o < 0 && i > t.moveCenter.radius) ||
              (s >= 0 && e < -t.moveCenter.radius) ||
              (o >= 0 && i < -t.moveCenter.radius)
            )
              return;
            break;
          }
        }
        o.particles.remove(t, t.group, !0);
      }
    }
    class dn {
      constructor(t) {
        (this.container = t), (this.modes = [yi.none]);
      }
      update(t, e, i, s) {
        if (!this.modes.includes(s)) return;
        if (
          (t.options.move.distance.horizontal &&
            (e === Se.left || e === Se.right)) ??
          (t.options.move.distance.vertical &&
            (e === Se.top || e === Se.bottom))
        )
          return;
        const o = t.options.move.gravity,
          n = this.container,
          a = n.canvas.size,
          r = t.getRadius();
        if (o.enable) {
          const i = t.position;
          ((!o.inverse && i.y > a.height + r && e === Se.bottom) ||
            (o.inverse && i.y < -r && e === Se.top)) &&
            n.particles.remove(t);
        } else {
          if (
            (t.velocity.y > 0 && t.position.y <= a.height + r) ||
            (t.velocity.y < 0 && t.position.y >= -r) ||
            (t.velocity.x > 0 && t.position.x <= a.width + r) ||
            (t.velocity.x < 0 && t.position.x >= -r)
          )
            return;
          Ge(t.position, n.canvas.size, Kt.origin, r, e) ||
            n.particles.remove(t);
        }
      }
    }
    class un {
      constructor(t) {
        (this.container = t), (this.modes = [yi.out]);
      }
      update(t, e, i, s) {
        if (!this.modes.includes(s)) return;
        const o = this.container;
        switch (t.outType) {
          case xi.inside: {
            const { x: e, y: i } = t.velocity,
              s = Kt.origin;
            (s.length = t.moveCenter.radius),
              (s.angle = t.velocity.angle + Math.PI),
              s.addTo(Kt.create(t.moveCenter));
            const { dx: n, dy: a } = pe(t.position, s);
            if (
              (e <= 0 && n >= 0) ||
              (i <= 0 && a >= 0) ||
              (e >= 0 && n <= 0) ||
              (i >= 0 && a <= 0)
            )
              return;
            (t.position.x = Math.floor(
              ce({ min: 0, max: o.canvas.size.width }),
            )),
              (t.position.y = Math.floor(
                ce({ min: 0, max: o.canvas.size.height }),
              ));
            const { dx: r, dy: c } = pe(t.position, t.moveCenter);
            (t.direction = Math.atan2(-c, -r)),
              (t.velocity.angle = t.direction);
            break;
          }
          default:
            if (Ge(t.position, o.canvas.size, Kt.origin, t.getRadius(), e))
              return;
            switch (t.outType) {
              case xi.outside: {
                (t.position.x =
                  Math.floor(
                    ce({ min: -t.moveCenter.radius, max: t.moveCenter.radius }),
                  ) + t.moveCenter.x),
                  (t.position.y =
                    Math.floor(
                      ce({
                        min: -t.moveCenter.radius,
                        max: t.moveCenter.radius,
                      }),
                    ) + t.moveCenter.y);
                const { dx: e, dy: i } = pe(t.position, t.moveCenter);
                t.moveCenter.radius &&
                  ((t.direction = Math.atan2(i, e)),
                  (t.velocity.angle = t.direction));
                break;
              }
              case xi.normal: {
                const i = t.options.move.warp,
                  s = o.canvas.size,
                  n = {
                    bottom: s.height + t.getRadius() + t.offset.y,
                    left: -t.getRadius() - t.offset.x,
                    right: s.width + t.getRadius() + t.offset.x,
                    top: -t.getRadius() - t.offset.y,
                  },
                  a = t.getRadius(),
                  r = We(t.position, a);
                e === Se.right && r.left > s.width + t.offset.x
                  ? ((t.position.x = n.left),
                    (t.initialPosition.x = t.position.x),
                    i ||
                      ((t.position.y = ie() * s.height),
                      (t.initialPosition.y = t.position.y)))
                  : e === Se.left &&
                    r.right < -t.offset.x &&
                    ((t.position.x = n.right),
                    (t.initialPosition.x = t.position.x),
                    i ||
                      ((t.position.y = ie() * s.height),
                      (t.initialPosition.y = t.position.y))),
                  e === Se.bottom && r.top > s.height + t.offset.y
                    ? (i ||
                        ((t.position.x = ie() * s.width),
                        (t.initialPosition.x = t.position.x)),
                      (t.position.y = n.top),
                      (t.initialPosition.y = t.position.y))
                    : e === Se.top &&
                      r.bottom < -t.offset.y &&
                      (i ||
                        ((t.position.x = ie() * s.width),
                        (t.initialPosition.x = t.position.x)),
                      (t.position.y = n.bottom),
                      (t.initialPosition.y = t.position.y));
                break;
              }
            }
        }
      }
    }
    class pn {
      constructor(t) {
        (this._addUpdaterIfMissing = (t, e, i) => {
          const s = t.options.move.outModes;
          !this.updaters.has(e) &&
            ((t, e) =>
              t.default === e ||
              t.bottom === e ||
              t.left === e ||
              t.right === e ||
              t.top === e)(s, e) &&
            this.updaters.set(e, i(this.container));
        }),
          (this._updateOutMode = (t, e, i, s) => {
            for (const o of this.updaters.values()) o.update(t, s, e, i);
          }),
          (this.container = t),
          (this.updaters = new Map());
      }
      init(t) {
        this._addUpdaterIfMissing(t, yi.bounce, (t) => new ln(t)),
          this._addUpdaterIfMissing(t, yi.out, (t) => new un(t)),
          this._addUpdaterIfMissing(t, yi.destroy, (t) => new hn(t)),
          this._addUpdaterIfMissing(t, yi.none, (t) => new dn(t));
      }
      isEnabled(t) {
        return !t.destroyed && !t.spawning;
      }
      update(t, e) {
        const i = t.options.move.outModes;
        this._updateOutMode(t, e, i.bottom ?? i.default, Se.bottom),
          this._updateOutMode(t, e, i.left ?? i.default, Se.left),
          this._updateOutMode(t, e, i.right ?? i.default, Se.right),
          this._updateOutMode(t, e, i.top ?? i.default, Se.top);
      }
    }
    var fn;
    !(function (t) {
      (t[(t.r = 1)] = "r"),
        (t[(t.g = 2)] = "g"),
        (t[(t.b = 3)] = "b"),
        (t[(t.a = 5)] = "a");
    })(fn || (fn = {}));
    class mn {
      constructor() {
        (this.key = "rgb"), (this.stringPrefix = "rgb");
      }
      handleColor(t) {
        const e = t.value.rgb ?? t.value;
        if (void 0 !== e.r) return e;
      }
      handleRangeColor(t) {
        const e = t.value.rgb ?? t.value;
        if (void 0 !== e.r) return { r: le(e.r), g: le(e.g), b: le(e.b) };
      }
      parseString(t) {
        if (!t.startsWith(this.stringPrefix)) return;
        const e =
          /rgba?\(\s*(\d{1,3})\s*[\s,]\s*(\d{1,3})\s*[\s,]\s*(\d{1,3})\s*([\s,]\s*(0|1|0?\.\d+|(\d{1,3})%)\s*)?\)/i.exec(
            t,
          );
        return e
          ? {
              a: e.length > 4 ? Ce(e[fn.a]) : 1,
              b: parseInt(e[fn.b], 10),
              g: parseInt(e[fn.g], 10),
              r: parseInt(e[fn.r], 10),
            }
          : void 0;
      }
    }
    class gn {
      init(t) {
        const e = t.container,
          i = t.options.size.animation;
        i.enable &&
          ((t.size.velocity =
            ((t.retina.sizeAnimationSpeed ?? e.retina.sizeAnimationSpeed) / m) *
            e.retina.reduceFactor),
          i.sync || (t.size.velocity *= ie()));
      }
      isEnabled(t) {
        return (
          !t.destroyed &&
          !t.spawning &&
          t.size.enable &&
          ((t.size.maxLoops ?? 0) <= 0 ||
            ((t.size.maxLoops ?? 0) > 0 &&
              (t.size.loops ?? 0) < (t.size.maxLoops ?? 0)))
        );
      }
      reset(t) {
        t.size.loops = 0;
      }
      update(t, e) {
        this.isEnabled(t) &&
          ci(t, t.size, !0, t.options.size.animation.destroy, e);
      }
    }
    async function vn(t, e = !0) {
      t.checkVersion("3.8.1"),
        await (async function (t, e = !0) {
          t.checkVersion("3.8.1"), await t.addColorManager(new nn(), e);
        })(t, !1),
        await (async function (t, e = !0) {
          t.checkVersion("3.8.1"), await t.addColorManager(new rn(), e);
        })(t, !1),
        await (async function (t, e = !0) {
          t.checkVersion("3.8.1"), await t.addColorManager(new mn(), e);
        })(t, !1),
        await (async function (t, e = !0) {
          t.checkVersion("3.8.1"),
            await t.addMover("base", () => Promise.resolve(new Xo()), e);
        })(t, !1),
        await (async function (t, e = !0) {
          t.checkVersion("3.8.1"), await t.addShape(new Jo(), e);
        })(t, !1),
        await (async function (t, e = !0) {
          t.checkVersion("3.8.1"),
            await t.addParticleUpdater(
              "color",
              (e) => Promise.resolve(new tn(e, t)),
              e,
            );
        })(t, !1),
        await (async function (t, e = !0) {
          t.checkVersion("3.8.1"),
            await t.addParticleUpdater(
              "opacity",
              (t) => Promise.resolve(new cn(t)),
              e,
            );
        })(t, !1),
        await (async function (t, e = !0) {
          t.checkVersion("3.8.1"),
            await t.addParticleUpdater(
              "outModes",
              (t) => Promise.resolve(new pn(t)),
              e,
            );
        })(t, !1),
        await (async function (t, e = !0) {
          t.checkVersion("3.8.1"),
            await t.addParticleUpdater(
              "size",
              () => Promise.resolve(new gn()),
              e,
            );
        })(t, !1),
        await t.refresh(e);
    }
    function yn(t, e) {
      if (!e.segments.length || !e.segments[0].values.length) return;
      const { context: i, radius: s } = t;
      i.moveTo(e.segments[0].values[0].x * s, e.segments[0].values[0].y * s);
      for (const t of e.segments)
        i.bezierCurveTo(
          t.values[1].x * s,
          t.values[1].y * s,
          t.values[2].x * s,
          t.values[2].y * s,
          t.values[3].x * s,
          t.values[3].y * s,
        );
      for (let t = e.segments.length - 1; t >= 0; t--) {
        const o = e.segments[t];
        i.bezierCurveTo(
          -o.values[2].x * s,
          o.values[2].y * s,
          -o.values[1].x * s,
          o.values[1].y * s,
          -o.values[0].x * s,
          o.values[0].y * s,
        );
      }
    }
    const wn = 0.5,
      bn = {
        heart: {
          segments: [
            {
              values: [
                { x: 0, y: wn },
                { x: 0, y: wn },
                { x: wn, y: 0 },
                { x: wn, y: -wn / 2 },
              ],
            },
            {
              values: [
                { x: wn, y: -wn / 2 },
                { x: wn, y: -wn / 2 },
                { x: wn, y: -wn },
                { x: wn / 2, y: -wn },
              ],
            },
            {
              values: [
                { x: wn / 2, y: -wn },
                { x: wn / 2, y: -wn },
                { x: 0, y: -wn },
                { x: 0, y: -wn / 2 },
              ],
            },
          ],
        },
        diamond: {
          segments: [
            {
              values: [
                { x: 0, y: wn },
                { x: 0, y: wn },
                { x: 0.375, y: 0 },
                { x: 0.375, y: 0 },
              ],
            },
            {
              values: [
                { x: 0.375, y: 0 },
                { x: 0.375, y: 0 },
                { x: 0, y: -wn },
                { x: 0, y: -wn },
              ],
            },
          ],
        },
        club: {
          segments: [
            {
              values: [
                { x: 0, y: -wn },
                { x: 0, y: -wn },
                { x: wn / 2, y: -wn },
                { x: wn / 2, y: -wn / 2 },
              ],
            },
            {
              values: [
                { x: wn / 2, y: -wn / 2 },
                { x: wn / 2, y: -wn / 2 },
                { x: wn, y: -wn / 2 },
                { x: wn, y: 0 },
              ],
            },
            {
              values: [
                { x: wn, y: 0 },
                { x: wn, y: 0 },
                { x: wn, y: wn / 2 },
                { x: wn / 2, y: wn / 2 },
              ],
            },
            {
              values: [
                { x: wn / 2, y: wn / 2 },
                { x: wn / 2, y: wn / 2 },
                { x: wn / 8, y: wn / 2 },
                { x: wn / 8, y: wn / 8 },
              ],
            },
            {
              values: [
                { x: wn / 8, y: wn / 8 },
                { x: wn / 8, y: wn / 2 },
                { x: wn / 2, y: wn },
                { x: wn / 2, y: wn },
              ],
            },
            {
              values: [
                { x: wn / 2, y: wn },
                { x: wn / 2, y: wn },
                { x: 0, y: wn },
                { x: 0, y: wn },
              ],
            },
          ],
        },
        spade: {
          segments: [
            {
              values: [
                { x: 0, y: -wn },
                { x: 0, y: -wn },
                { x: wn, y: -wn / 2 },
                { x: wn, y: 0 },
              ],
            },
            {
              values: [
                { x: wn, y: 0 },
                { x: wn, y: 0 },
                { x: wn, y: wn / 2 },
                { x: wn / 2, y: wn / 2 },
              ],
            },
            {
              values: [
                { x: wn / 2, y: wn / 2 },
                { x: wn / 2, y: wn / 2 },
                { x: wn / 8, y: wn / 2 },
                { x: wn / 8, y: wn / 8 },
              ],
            },
            {
              values: [
                { x: wn / 8, y: wn / 8 },
                { x: wn / 8, y: wn / 2 },
                { x: wn / 2, y: wn },
                { x: wn / 2, y: wn },
              ],
            },
            {
              values: [
                { x: wn / 2, y: wn },
                { x: wn / 2, y: wn },
                { x: 0, y: wn },
                { x: 0, y: wn },
              ],
            },
          ],
        },
      };
    class xn {
      constructor() {
        this.validTypes = ["club", "clubs"];
      }
      draw(t) {
        yn(t, bn.club);
      }
    }
    class _n {
      constructor() {
        this.validTypes = ["diamond", "diamonds"];
      }
      draw(t) {
        yn(t, bn.diamond);
      }
    }
    class zn {
      constructor() {
        this.validTypes = ["heart", "hearts"];
      }
      draw(t) {
        yn(t, bn.heart);
      }
    }
    class Cn {
      constructor() {
        this.validTypes = ["spade", "spades"];
      }
      draw(t) {
        yn(t, bn.spade);
      }
    }
    const Mn =
      '"Twemoji Mozilla", Apple Color Emoji, "Segoe UI Emoji", "Noto Color Emoji", "EmojiOne Color"';
    class Pn {
      constructor() {
        (this.validTypes = ["emoji"]), (this._emojiShapeDict = new Map());
      }
      destroy() {
        for (const [t, e] of this._emojiShapeDict)
          e instanceof ImageBitmap && e?.close(),
            this._emojiShapeDict.delete(t);
      }
      draw(t) {
        const e = t.particle.emojiDataKey;
        if (!e) return;
        const i = this._emojiShapeDict.get(e);
        i &&
          (function (t, e) {
            const { context: i, opacity: s } = t,
              o = i.globalAlpha;
            if (!e) return;
            const n = e.width,
              a = 0.5 * n;
            (i.globalAlpha = s),
              i.drawImage(e, -a, -a, n, n),
              (i.globalAlpha = o);
          })(t, i);
      }
      async init(t) {
        const e = t.actualOptions,
          { validTypes: i } = this;
        if (!i.find((t) => Ue(t, e.particles.shape.type))) return;
        const s = [qe(Mn)],
          o = i.map((t) => e.particles.shape.options[t]).find((t) => !!t);
        o &&
          ei(o, (t) => {
            t.font && s.push(qe(t.font));
          }),
          await Promise.all(s);
      }
      particleDestroy(t) {
        t.emojiDataKey = void 0;
      }
      particleInit(t, e) {
        const i = e.shapeData;
        if (!i?.value) return;
        const s = ii(i.value, e.randomIndexData);
        if (!s) return;
        const o =
            "string" == typeof s
              ? { font: i.font ?? Mn, padding: i.padding ?? 0, value: s }
              : { font: Mn, padding: 0, ...i, ...s },
          n = o.font,
          a = o.value,
          r = `${a}_${n}`;
        if (this._emojiShapeDict.has(r)) return void (e.emojiDataKey = r);
        const c = 2 * o.padding,
          l = de(e.size.value),
          h = l + c,
          d = 2 * h;
        let u;
        if ("undefined" != typeof OffscreenCanvas) {
          const t = new OffscreenCanvas(d, d),
            e = t.getContext("2d");
          if (!e) return;
          (e.font = `400 ${2 * l}px ${n}`),
            (e.textBaseline = "middle"),
            (e.textAlign = "center"),
            e.fillText(a, h, h),
            (u = t.transferToImageBitmap());
        } else {
          const t = document.createElement("canvas");
          (t.width = d), (t.height = d);
          const e = t.getContext("2d");
          if (!e) return;
          (e.font = `400 ${2 * l}px ${n}`),
            (e.textBaseline = "middle"),
            (e.textAlign = "center"),
            e.fillText(a, h, h),
            (u = t);
        }
        this._emojiShapeDict.set(r, u), (e.emojiDataKey = r);
      }
    }
    class kn {
      constructor() {
        this.validTypes = ["heart"];
      }
      draw(t) {
        !(function (t) {
          const { context: e, radius: i } = t,
            s = 2 * i,
            o = 0.5 * i,
            n = i + o,
            a = -i,
            r = -i;
          e.moveTo(a, r + o),
            e.quadraticCurveTo(a, r, a + o, r),
            e.quadraticCurveTo(a + i, r, a + i, r + o),
            e.quadraticCurveTo(a + i, r, a + n, r),
            e.quadraticCurveTo(a + s, r, a + s, r + o),
            e.quadraticCurveTo(a + s, r + i, a + n, r + n),
            e.lineTo(a + i, r + s),
            e.lineTo(a + o, r + n),
            e.quadraticCurveTo(a, r + i, a, r + o);
        })(t);
      }
    }
    const Sn = 0,
      On =
        /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d.]+%?\))|currentcolor/gi;
    async function Dn(t) {
      return new Promise((e) => {
        t.loading = !0;
        const i = new Image();
        (t.element = i),
          i.addEventListener("load", () => {
            (t.loading = !1), e();
          }),
          i.addEventListener("error", () => {
            (t.element = void 0),
              (t.error = !0),
              (t.loading = !1),
              Ee().error(`${f} loading image: ${t.source}`),
              e();
          }),
          (i.src = t.source);
      });
    }
    async function Tn(t) {
      if ("svg" !== t.type) return void (await Dn(t));
      t.loading = !0;
      const e = await fetch(t.source);
      e.ok
        ? (t.svgData = await e.text())
        : (Ee().error(`${f} Image not found`), (t.error = !0)),
        (t.loading = !1);
    }
    function In(t, e, i, s) {
      const o = (function (t, e, i) {
          const { svgData: s } = t;
          if (!s) return "";
          const o = Fi(e, i);
          if (s.includes("fill")) return s.replace(On, () => o);
          const n = s.indexOf(">");
          return `${s.substring(Sn, n)} fill="${o}"${s.substring(n)}`;
        })(t, i, s.opacity?.value ?? 1),
        n = {
          color: i,
          gif: e.gif,
          data: { ...t, svgData: o },
          loaded: !1,
          ratio: e.width / e.height,
          replaceColor: e.replaceColor,
          source: e.src,
        };
      return new Promise((e) => {
        const i = new Blob([o], { type: "image/svg+xml" }),
          s = URL || window.URL || window.webkitURL || window,
          a = s.createObjectURL(i),
          r = new Image();
        r.addEventListener("load", () => {
          (n.loaded = !0), (n.element = r), e(n), s.revokeObjectURL(a);
        });
        r.addEventListener("error", () => {
          (async () => {
            s.revokeObjectURL(a);
            const i = { ...t, error: !1, loading: !0 };
            await Dn(i), (n.loaded = !0), (n.element = i.element), e(n);
          })();
        }),
          (r.src = a);
      });
    }
    const En = [0, 4, 2, 1],
      Rn = [8, 8, 4, 2];
    class Fn {
      constructor(t) {
        (this.pos = 0), (this.data = new Uint8ClampedArray(t));
      }
      getString(t) {
        const e = this.data.slice(this.pos, this.pos + t);
        return (
          (this.pos += e.length),
          e.reduce((t, e) => t + String.fromCharCode(e), "")
        );
      }
      nextByte() {
        return this.data[this.pos++];
      }
      nextTwoBytes() {
        return (
          (this.pos += 2),
          this.data[this.pos - 2] + (this.data[this.pos - 1] << 8)
        );
      }
      readSubBlocks() {
        let t = "",
          e = 0;
        do {
          e = this.data[this.pos++];
          for (
            let i = e;
            --i >= 0;
            t += String.fromCharCode(this.data[this.pos++])
          );
        } while (0 !== e);
        return t;
      }
      readSubBlocksBin() {
        let t = this.data[this.pos],
          e = 0;
        for (let i = 0; 0 !== t; i += t + 1, t = this.data[this.pos + i])
          e += t;
        const i = new Uint8Array(e);
        t = this.data[this.pos++];
        for (let e = 0; 0 !== t; t = this.data[this.pos++])
          for (let s = t; --s >= 0; i[e++] = this.data[this.pos++]);
        return i;
      }
      skipSubBlocks() {
        for (
          const t = 1, e = 0;
          this.data[this.pos] !== e;
          this.pos += this.data[this.pos] + t
        );
        this.pos++;
      }
    }
    var Ln, An;
    !(function (t) {
      (t[(t.Replace = 0)] = "Replace"),
        (t[(t.Combine = 1)] = "Combine"),
        (t[(t.RestoreBackground = 2)] = "RestoreBackground"),
        (t[(t.RestorePrevious = 3)] = "RestorePrevious"),
        (t[(t.UndefinedA = 4)] = "UndefinedA"),
        (t[(t.UndefinedB = 5)] = "UndefinedB"),
        (t[(t.UndefinedC = 6)] = "UndefinedC"),
        (t[(t.UndefinedD = 7)] = "UndefinedD");
    })(Ln || (Ln = {})),
      (function (t) {
        (t[(t.Extension = 33)] = "Extension"),
          (t[(t.ApplicationExtension = 255)] = "ApplicationExtension"),
          (t[(t.GraphicsControlExtension = 249)] = "GraphicsControlExtension"),
          (t[(t.PlainTextExtension = 1)] = "PlainTextExtension"),
          (t[(t.CommentExtension = 254)] = "CommentExtension"),
          (t[(t.Image = 44)] = "Image"),
          (t[(t.EndOfFile = 59)] = "EndOfFile");
      })(An || (An = {}));
    const Bn = 0,
      Vn = 0,
      Un = 0;
    function qn(t, e) {
      const i = [];
      for (let s = 0; s < e; s++)
        i.push({
          r: t.data[t.pos],
          g: t.data[t.pos + 1],
          b: t.data[t.pos + 2],
        }),
          (t.pos += 3);
      return i;
    }
    async function $n(t, e, i, s, o, n) {
      switch (t.nextByte()) {
        case An.EndOfFile:
          return !0;
        case An.Image:
          await (async function (t, e, i, s, o, n) {
            const a = e.frames[s(!0)];
            (a.left = t.nextTwoBytes()),
              (a.top = t.nextTwoBytes()),
              (a.width = t.nextTwoBytes()),
              (a.height = t.nextTwoBytes());
            const r = t.nextByte(),
              c = 128 == (128 & r),
              l = 64 == (64 & r);
            (a.sortFlag = 32 == (32 & r)), (a.reserved = (24 & r) >>> 3);
            const h = 1 << (1 + (7 & r));
            c && (a.localColorTable = qn(t, h));
            const d = (t) => {
                const {
                  r: s,
                  g: n,
                  b: r,
                } = (c ? a.localColorTable : e.globalColorTable)[t];
                return t !== o(null)
                  ? { r: s, g: n, b: r, a: 255 }
                  : { r: s, g: n, b: r, a: i ? ~~((s + n + r) / 3) : 0 };
              },
              u = (() => {
                try {
                  return new ImageData(a.width, a.height, {
                    colorSpace: "srgb",
                  });
                } catch (t) {
                  if (t instanceof DOMException && "IndexSizeError" === t.name)
                    return null;
                  throw t;
                }
              })();
            if (null == u) throw new EvalError("GIF frame size is to large");
            const p = t.nextByte(),
              f = t.readSubBlocksBin(),
              m = 1 << p,
              g = (t, e) => {
                const i = t >>> 3,
                  s = 7 & t;
                return (
                  ((f[i] + (f[i + 1] << 8) + (f[i + 2] << 16)) &
                    (((1 << e) - 1) << s)) >>>
                  s
                );
              };
            if (l) {
              for (let i = 0, o = p + 1, r = 0, c = [[0]], l = 0; l < 4; l++) {
                if (En[l] < a.height) {
                  let t = 0,
                    e = 0,
                    s = !1;
                  for (; !s; ) {
                    const n = i;
                    if (((i = g(r, o)), (r += o + 1), i === m)) {
                      (o = p + 1), (c.length = m + 2);
                      for (let t = 0; t < c.length; t++)
                        c[t] = t < m ? [t] : [];
                    } else {
                      i >= c.length
                        ? c.push(c[n].concat(c[n][0]))
                        : n !== m && c.push(c[n].concat(c[i][0]));
                      for (const s of c[i]) {
                        const { r: i, g: o, b: n, a: r } = d(s);
                        u.data.set(
                          [i, o, n, r],
                          En[l] * a.width + Rn[l] * e + (t % (4 * a.width)),
                        ),
                          (t += 4);
                      }
                      c.length === 1 << o && o < 12 && o++;
                    }
                    t === 4 * a.width * (e + 1) &&
                      (e++, En[l] + Rn[l] * e >= a.height && (s = !0));
                  }
                }
                n?.(
                  t.pos / (t.data.length - 1),
                  s(!1) + 1,
                  u,
                  { x: a.left, y: a.top },
                  { width: e.width, height: e.height },
                );
              }
              (a.image = u), (a.bitmap = await createImageBitmap(u));
            } else {
              let i = 0,
                o = p + 1,
                r = 0,
                c = -4,
                l = !1;
              const h = [[0]];
              for (; !l; ) {
                const t = i;
                if (((i = g(r, o)), (r += o), i === m)) {
                  (o = p + 1), (h.length = m + 2);
                  for (let t = 0; t < h.length; t++) h[t] = t < m ? [t] : [];
                } else {
                  if (i === m + 1) {
                    l = !0;
                    break;
                  }
                  i >= h.length
                    ? h.push(h[t].concat(h[t][0]))
                    : t !== m && h.push(h[t].concat(h[i][0]));
                  for (const t of h[i]) {
                    const { r: e, g: i, b: s, a: o } = d(t);
                    u.data.set([e, i, s, o], (c += 4));
                  }
                  h.length >= 1 << o && o < 12 && o++;
                }
              }
              (a.image = u),
                (a.bitmap = await createImageBitmap(u)),
                n?.(
                  (t.pos + 1) / t.data.length,
                  s(!1) + 1,
                  a.image,
                  { x: a.left, y: a.top },
                  { width: e.width, height: e.height },
                );
            }
          })(t, e, i, s, o, n);
          break;
        case An.Extension:
          !(function (t, e, i, s) {
            switch (t.nextByte()) {
              case An.GraphicsControlExtension: {
                const o = e.frames[i(!1)];
                t.pos++;
                const n = t.nextByte();
                (o.GCreserved = (224 & n) >>> 5),
                  (o.disposalMethod = (28 & n) >>> 2),
                  (o.userInputDelayFlag = 2 == (2 & n));
                const a = 1 == (1 & n);
                o.delayTime = 10 * t.nextTwoBytes();
                const r = t.nextByte();
                a && s(r), t.pos++;
                break;
              }
              case An.ApplicationExtension: {
                t.pos++;
                const i = {
                  identifier: t.getString(8),
                  authenticationCode: t.getString(3),
                  data: t.readSubBlocksBin(),
                };
                e.applicationExtensions.push(i);
                break;
              }
              case An.CommentExtension:
                e.comments.push([i(!1), t.readSubBlocks()]);
                break;
              case An.PlainTextExtension:
                if (0 === e.globalColorTable.length)
                  throw new EvalError(
                    "plain text extension without global color table",
                  );
                t.pos++,
                  (e.frames[i(!1)].plainTextData = {
                    left: t.nextTwoBytes(),
                    top: t.nextTwoBytes(),
                    width: t.nextTwoBytes(),
                    height: t.nextTwoBytes(),
                    charSize: {
                      width: t.nextTwoBytes(),
                      height: t.nextTwoBytes(),
                    },
                    foregroundColor: t.nextByte(),
                    backgroundColor: t.nextByte(),
                    text: t.readSubBlocks(),
                  });
                break;
              default:
                t.skipSubBlocks();
            }
          })(t, e, s, o);
          break;
        default:
          throw new EvalError("undefined block found");
      }
      return !1;
    }
    async function Hn(t) {
      if ("gif" === t.type) {
        t.loading = !0;
        try {
          (t.gifData = await (async function (t, e, i) {
            i || (i = !1);
            const s = await fetch(t);
            if (!s.ok && 404 === s.status)
              throw new EvalError("file not found");
            const o = await s.arrayBuffer(),
              n = {
                width: 0,
                height: 0,
                totalTime: 0,
                colorRes: 0,
                pixelAspectRatio: 0,
                frames: [],
                sortFlag: !1,
                globalColorTable: [],
                backgroundImage: new ImageData(1, 1, { colorSpace: "srgb" }),
                comments: [],
                applicationExtensions: [],
              },
              a = new Fn(new Uint8ClampedArray(o));
            if ("GIF89a" !== a.getString(6))
              throw new Error("not a supported GIF file");
            (n.width = a.nextTwoBytes()), (n.height = a.nextTwoBytes());
            const r = a.nextByte(),
              c = 128 == (128 & r);
            (n.colorRes = (112 & r) >>> 4), (n.sortFlag = 8 == (8 & r));
            const l = 1 << (1 + (7 & r)),
              h = a.nextByte();
            (n.pixelAspectRatio = a.nextByte()),
              0 !== n.pixelAspectRatio &&
                (n.pixelAspectRatio = (n.pixelAspectRatio + 15) / 64),
              c && (n.globalColorTable = qn(a, l));
            const d = (() => {
              try {
                return new ImageData(n.width, n.height, { colorSpace: "srgb" });
              } catch (t) {
                if (t instanceof DOMException && "IndexSizeError" === t.name)
                  return null;
                throw t;
              }
            })();
            if (null == d) throw new Error("GIF frame size is to large");
            const { r: u, g: p, b: f } = n.globalColorTable[h];
            d.data.set(c ? [u, p, f, 255] : [0, 0, 0, 0]);
            for (let t = 4; t < d.data.length; t *= 2)
              d.data.copyWithin(t, 0, t);
            n.backgroundImage = d;
            let m = -1,
              g = !0,
              v = -1;
            const y = (t) => (t && (g = !0), m),
              w = (t) => (null != t && (v = t), v);
            try {
              do {
                g &&
                  (n.frames.push({
                    left: 0,
                    top: 0,
                    width: 0,
                    height: 0,
                    disposalMethod: Ln.Replace,
                    image: new ImageData(1, 1, { colorSpace: "srgb" }),
                    plainTextData: null,
                    userInputDelayFlag: !1,
                    delayTime: 0,
                    sortFlag: !1,
                    localColorTable: [],
                    reserved: 0,
                    GCreserved: 0,
                  }),
                  m++,
                  (v = -1),
                  (g = !1));
              } while (!(await $n(a, n, i, y, w, e)));
              n.frames.length--;
              for (const t of n.frames) {
                if (t.userInputDelayFlag && 0 === t.delayTime) {
                  n.totalTime = 1 / 0;
                  break;
                }
                n.totalTime += t.delayTime;
              }
              return n;
            } catch (t) {
              if (t instanceof EvalError)
                throw new Error(
                  `error while parsing frame ${m} "${t.message}"`,
                );
              throw t;
            }
          })(t.source)),
            (t.gifLoopCount =
              (function (t) {
                for (const e of t.applicationExtensions)
                  if (e.identifier + e.authenticationCode === "NETSCAPE2.0")
                    return e.data[1] + (e.data[2] << 8);
                return NaN;
              })(t.gifData) ?? Un),
            t.gifLoopCount || (t.gifLoopCount = 1 / 0);
        } catch {
          t.error = !0;
        }
        t.loading = !1;
      } else await Dn(t);
    }
    class Gn {
      constructor(t) {
        (this.validTypes = ["image", "images"]),
          (this.loadImageShape = async (t) => {
            if (!this._engine.loadImage)
              throw new Error(`${f} image shape not initialized`);
            await this._engine.loadImage({
              gif: t.gif,
              name: t.name,
              replaceColor: t.replaceColor ?? !1,
              src: t.src,
            });
          }),
          (this._engine = t);
      }
      addImage(t) {
        this._engine.images || (this._engine.images = []),
          this._engine.images.push(t);
      }
      draw(t) {
        const { context: e, radius: i, particle: s, opacity: o } = t,
          n = s.image,
          a = n?.element;
        if (n) {
          if (((e.globalAlpha = o), n.gif && n.gifData))
            !(function (t) {
              const { context: e, radius: i, particle: s, delta: o } = t,
                n = s.image;
              if (!n?.gifData || !n.gif) return;
              const a = new OffscreenCanvas(n.gifData.width, n.gifData.height),
                r = a.getContext("2d");
              if (!r)
                throw new Error("could not create offscreen canvas context");
              (r.imageSmoothingQuality = "low"),
                (r.imageSmoothingEnabled = !1),
                r.clearRect(Bn, Vn, a.width, a.height),
                void 0 === s.gifLoopCount &&
                  (s.gifLoopCount = n.gifLoopCount ?? Un);
              let c = s.gifFrame ?? 0;
              const l = {
                  x: 0.5 * -n.gifData.width,
                  y: 0.5 * -n.gifData.height,
                },
                h = n.gifData.frames[c];
              if ((void 0 === s.gifTime && (s.gifTime = 0), h.bitmap)) {
                switch (
                  (e.scale(i / n.gifData.width, i / n.gifData.height),
                  h.disposalMethod)
                ) {
                  case Ln.UndefinedA:
                  case Ln.UndefinedB:
                  case Ln.UndefinedC:
                  case Ln.UndefinedD:
                  case Ln.Replace:
                    r.drawImage(h.bitmap, h.left, h.top),
                      e.drawImage(a, l.x, l.y),
                      r.clearRect(Bn, Vn, a.width, a.height);
                    break;
                  case Ln.Combine:
                    r.drawImage(h.bitmap, h.left, h.top),
                      e.drawImage(a, l.x, l.y);
                    break;
                  case Ln.RestoreBackground:
                    r.drawImage(h.bitmap, h.left, h.top),
                      e.drawImage(a, l.x, l.y),
                      r.clearRect(Bn, Vn, a.width, a.height),
                      n.gifData.globalColorTable.length
                        ? r.putImageData(n.gifData.backgroundImage, l.x, l.y)
                        : r.putImageData(
                            n.gifData.frames[0].image,
                            l.x + h.left,
                            l.y + h.top,
                          );
                    break;
                  case Ln.RestorePrevious: {
                    const t = r.getImageData(Bn, Vn, a.width, a.height);
                    r.drawImage(h.bitmap, h.left, h.top),
                      e.drawImage(a, l.x, l.y),
                      r.clearRect(Bn, Vn, a.width, a.height),
                      r.putImageData(t, Bn, Vn);
                  }
                }
                if (((s.gifTime += o.value), s.gifTime > h.delayTime)) {
                  if (
                    ((s.gifTime -= h.delayTime), ++c >= n.gifData.frames.length)
                  ) {
                    if (--s.gifLoopCount <= Un) return;
                    (c = 0), r.clearRect(Bn, Vn, a.width, a.height);
                  }
                  s.gifFrame = c;
                }
                e.scale(n.gifData.width / i, n.gifData.height / i);
              }
            })(t);
          else if (a) {
            const t = n.ratio,
              s = { x: -i, y: -i },
              o = 2 * i;
            e.drawImage(a, s.x, s.y, o, o / t);
          }
          e.globalAlpha = 1;
        }
      }
      getSidesCount() {
        return 12;
      }
      async init(t) {
        const e = t.actualOptions;
        if (e.preload && this._engine.loadImage)
          for (const t of e.preload) await this._engine.loadImage(t);
      }
      loadShape(t) {
        if ("image" !== t.shape && "images" !== t.shape) return;
        this._engine.images || (this._engine.images = []);
        const e = t.shapeData;
        if (!e) return;
        this._engine.images.find(
          (t) => t.name === e.name || t.source === e.src,
        ) ||
          this.loadImageShape(e).then(() => {
            this.loadShape(t);
          });
      }
      particleInit(t, e) {
        if ("image" !== e.shape && "images" !== e.shape) return;
        this._engine.images || (this._engine.images = []);
        const i = this._engine.images,
          s = e.shapeData;
        if (!s) return;
        const o = e.getFillColor(),
          n = i.find((t) => t.name === s.name || t.source === s.src);
        if (!n) return;
        const a = s.replaceColor ?? n.replaceColor;
        n.loading
          ? setTimeout(() => {
              this.particleInit(t, e);
            })
          : (async () => {
              let t;
              (t =
                n.svgData && o
                  ? await In(n, s, o, e)
                  : {
                      color: o,
                      data: n,
                      element: n.element,
                      gif: n.gif,
                      gifData: n.gifData,
                      gifLoopCount: n.gifLoopCount,
                      loaded: !0,
                      ratio:
                        s.width && s.height
                          ? s.width / s.height
                          : (n.ratio ?? 1),
                      replaceColor: a,
                      source: s.src,
                    }),
                t.ratio || (t.ratio = 1);
              const i = {
                image: t,
                fill: s.fill ?? e.shapeFill,
                close: s.close ?? e.shapeClose,
              };
              (e.image = i.image),
                (e.shapeFill = i.fill),
                (e.shapeClose = i.close);
            })();
      }
    }
    class jn {
      constructor() {
        (this.src = ""), (this.gif = !1);
      }
      load(t) {
        Yt(t) ||
          (void 0 !== t.gif && (this.gif = t.gif),
          void 0 !== t.height && (this.height = t.height),
          void 0 !== t.name && (this.name = t.name),
          void 0 !== t.replaceColor && (this.replaceColor = t.replaceColor),
          void 0 !== t.src && (this.src = t.src),
          void 0 !== t.width && (this.width = t.width));
      }
    }
    class Wn {
      constructor(t) {
        (this.id = "imagePreloader"), (this._engine = t);
      }
      async getPlugin() {
        return await Promise.resolve(), {};
      }
      loadOptions(t, e) {
        if (!e?.preload) return;
        t.preload || (t.preload = []);
        const i = t.preload;
        for (const t of e.preload) {
          const e = i.find((e) => e.name === t.name || e.src === t.src);
          if (e) e.load(t);
          else {
            const e = new jn();
            e.load(t), i.push(e);
          }
        }
      }
      needsPlugin() {
        return !0;
      }
    }
    const Nn = 3;
    async function Qn(t, e = !0) {
      t.checkVersion("3.8.1"),
        (function (t) {
          t.loadImage ||
            (t.loadImage = async (e) => {
              if (!e.name && !e.src)
                throw new Error(`${f} no image source provided`);
              if (
                (t.images || (t.images = []),
                !t.images.find((t) => t.name === e.name || t.source === e.src))
              )
                try {
                  const i = {
                    gif: e.gif ?? !1,
                    name: e.name ?? e.src,
                    source: e.src,
                    type: e.src.substring(e.src.length - Nn),
                    error: !1,
                    loading: !0,
                    replaceColor: e.replaceColor,
                    ratio: e.width && e.height ? e.width / e.height : void 0,
                  };
                  let s;
                  t.images.push(i),
                    (s = e.gif ? Hn : e.replaceColor ? Tn : Dn),
                    await s(i);
                } catch {
                  throw new Error(`${f} ${e.name ?? e.src} not found`);
                }
            });
        })(t);
      const i = new Wn(t);
      await t.addPlugin(i, e), await t.addShape(new Gn(t), e);
    }
    class Xn extends Ds {
      constructor() {
        super(), (this.sync = !1);
      }
      load(t) {
        Yt(t) || (super.load(t), void 0 !== t.sync && (this.sync = t.sync));
      }
    }
    class Yn extends Ds {
      constructor() {
        super(), (this.sync = !1);
      }
      load(t) {
        Yt(t) || (super.load(t), void 0 !== t.sync && (this.sync = t.sync));
      }
    }
    class Zn {
      constructor() {
        (this.count = 0), (this.delay = new Xn()), (this.duration = new Yn());
      }
      load(t) {
        Yt(t) ||
          (void 0 !== t.count && (this.count = t.count),
          this.delay.load(t.delay),
          this.duration.load(t.duration));
      }
    }
    class Kn {
      constructor(t) {
        this.container = t;
      }
      init(t) {
        const e = this.container,
          i = t.options.life;
        i &&
          ((t.life = {
            delay: e.retina.reduceFactor
              ? ((le(i.delay.value) * (i.delay.sync ? 1 : ie())) /
                  e.retina.reduceFactor) *
                v
              : 0,
            delayTime: 0,
            duration: e.retina.reduceFactor
              ? ((le(i.duration.value) * (i.duration.sync ? 1 : ie())) /
                  e.retina.reduceFactor) *
                v
              : 0,
            time: 0,
            count: i.count,
          }),
          t.life.duration <= 0 && (t.life.duration = -1),
          t.life.count <= 0 && (t.life.count = -1),
          t.life && (t.spawning = t.life.delay > 0));
      }
      isEnabled(t) {
        return !t.destroyed;
      }
      loadOptions(t, ...e) {
        t.life || (t.life = new Zn());
        for (const i of e) t.life.load(i?.life);
      }
      update(t, e) {
        this.isEnabled(t) &&
          t.life &&
          (function (t, e, i) {
            if (!t.life) return;
            const s = t.life;
            let o = !1;
            if (t.spawning) {
              if (((s.delayTime += e.value), !(s.delayTime >= t.life.delay)))
                return;
              (o = !0), (t.spawning = !1), (s.delayTime = 0), (s.time = 0);
            }
            if (-1 === s.duration) return;
            if (t.spawning) return;
            if ((o ? (s.time = 0) : (s.time += e.value), s.time < s.duration))
              return;
            if (
              ((s.time = 0),
              t.life.count > 0 && t.life.count--,
              0 === t.life.count)
            )
              return void t.destroy();
            const n = ue(0, i.width),
              a = ue(0, i.width);
            (t.position.x = ce(n)),
              (t.position.y = ce(a)),
              (t.spawning = !0),
              (s.delayTime = 0),
              (s.time = 0),
              t.reset();
            const r = t.options.life;
            r &&
              ((s.delay = le(r.delay.value) * v),
              (s.duration = le(r.duration.value) * v));
          })(t, e, this.container.canvas.size);
      }
    }
    class Jn {
      constructor() {
        (this.factor = 4), (this.value = !0);
      }
      load(t) {
        Yt(t) ||
          (void 0 !== t.factor && (this.factor = t.factor),
          void 0 !== t.value && (this.value = t.value));
      }
    }
    class ta {
      constructor() {
        (this.disable = !1), (this.reduce = new Jn());
      }
      load(t) {
        Yt(t) ||
          (void 0 !== t.disable && (this.disable = t.disable),
          this.reduce.load(t.reduce));
      }
    }
    class ea {
      constructor(t, e) {
        (this._handleMotionChange = (t) => {
          const e = this._container,
            i = e.actualOptions.motion;
          i &&
            (t.matches
              ? i.disable
                ? (e.retina.reduceFactor = 0)
                : (e.retina.reduceFactor = i.reduce.value
                    ? 1 / i.reduce.factor
                    : 1)
              : (e.retina.reduceFactor = 1));
        }),
          (this._container = t),
          (this._engine = e);
      }
      async init() {
        const t = this._container,
          e = t.actualOptions.motion;
        if (!e || (!e.disable && !e.reduce.value))
          return void (t.retina.reduceFactor = 1);
        const i = Ae("(prefers-reduced-motion: reduce)");
        if (!i) return void (t.retina.reduceFactor = 1);
        this._handleMotionChange(i);
        const s = () => {
          (async () => {
            this._handleMotionChange(i);
            try {
              await t.refresh();
            } catch {}
          })();
        };
        void 0 !== i.addEventListener
          ? i.addEventListener("change", s)
          : void 0 !== i.addListener && i.addListener(s),
          await Promise.resolve();
      }
    }
    class ia {
      constructor(t) {
        (this.id = "motion"), (this._engine = t);
      }
      getPlugin(t) {
        return Promise.resolve(new ea(t, this._engine));
      }
      loadOptions(t, e) {
        if (!this.needsPlugin()) return;
        let i = t.motion;
        i?.load || (t.motion = i = new ta()), i.load(e?.motion);
      }
      needsPlugin() {
        return !0;
      }
    }
    const sa = 0,
      oa = 0;
    class na {
      draw(t) {
        const { particle: e, radius: i } = t;
        !(function (t, e, i) {
          const { context: s } = t,
            o = i.count.numerator * i.count.denominator,
            n = i.count.numerator / i.count.denominator,
            a = (180 * (n - 2)) / n,
            r = Math.PI - me(a);
          if (s) {
            s.beginPath(), s.translate(e.x, e.y), s.moveTo(sa, oa);
            for (let t = 0; t < o; t++)
              s.lineTo(i.length, oa), s.translate(i.length, oa), s.rotate(r);
          }
        })(t, this.getCenter(e, i), this.getSidesData(e, i));
      }
      getSidesCount(t) {
        const e = t.shapeData;
        return Math.round(le(e?.sides ?? 5));
      }
    }
    class aa extends na {
      constructor() {
        super(...arguments), (this.validTypes = ["polygon"]);
      }
      getCenter(t, e) {
        return { x: -e / (t.sides / 3.5), y: -e / 0.76 };
      }
      getSidesData(t, e) {
        const i = t.sides;
        return {
          count: { denominator: 1, numerator: i },
          length: (2.66 * e) / (i / 3),
        };
      }
    }
    class ra extends na {
      constructor() {
        super(...arguments), (this.validTypes = ["triangle"]);
      }
      getCenter(t, e) {
        return { x: -e, y: e / 1.66 };
      }
      getSidesCount() {
        return 3;
      }
      getSidesData(t, e) {
        return { count: { denominator: 2, numerator: 3 }, length: 2 * e };
      }
    }
    async function ca(t, e = !0) {
      t.checkVersion("3.8.1"),
        await (async function (t, e = !0) {
          t.checkVersion("3.8.1"), await t.addShape(new aa(), e);
        })(t, e),
        await (async function (t, e = !0) {
          t.checkVersion("3.8.1"), await t.addShape(new ra(), e);
        })(t, e);
    }
    var la;
    !(function (t) {
      (t.both = "both"),
        (t.horizontal = "horizontal"),
        (t.vertical = "vertical");
    })(la || (la = {}));
    const ha = 2 * Math.PI;
    class da {
      constructor() {
        (this.enable = !1), (this.value = 0);
      }
      load(t) {
        Yt(t) ||
          (void 0 !== t.enable && (this.enable = t.enable),
          void 0 !== t.value && (this.value = ue(t.value)));
      }
    }
    class ua {
      constructor() {
        (this.darken = new da()),
          (this.enable = !1),
          (this.enlighten = new da()),
          (this.mode = la.vertical),
          (this.speed = 25);
      }
      load(t) {
        Yt(t) ||
          (void 0 !== t.backColor &&
            (this.backColor = as.create(this.backColor, t.backColor)),
          this.darken.load(t.darken),
          void 0 !== t.enable && (this.enable = t.enable),
          this.enlighten.load(t.enlighten),
          void 0 !== t.mode && (this.mode = t.mode),
          void 0 !== t.speed && (this.speed = ue(t.speed)));
      }
    }
    class pa {
      constructor(t) {
        this._engine = t;
      }
      getTransformValues(t) {
        const e = t.roll?.enable && t.roll,
          i = e && e.horizontal,
          s = e && e.vertical;
        return {
          a: i ? Math.cos(e.angle) : void 0,
          d: s ? Math.sin(e.angle) : void 0,
        };
      }
      init(t) {
        !(function (t, e) {
          const i = e.options.roll;
          if (i?.enable)
            if (
              ((e.roll = {
                enable: i.enable,
                horizontal: i.mode === la.horizontal || i.mode === la.both,
                vertical: i.mode === la.vertical || i.mode === la.both,
                angle: ie() * ha,
                speed: le(i.speed) / 360,
              }),
              i.backColor)
            )
              e.backColor = ki(t, i.backColor);
            else if (i.darken.enable && i.enlighten.enable) {
              const t = ie() >= g ? di.darken : di.enlighten;
              e.roll.alter = {
                type: t,
                value: le(t === di.darken ? i.darken.value : i.enlighten.value),
              };
            } else
              i.darken.enable
                ? (e.roll.alter = {
                    type: di.darken,
                    value: le(i.darken.value),
                  })
                : i.enlighten.enable &&
                  (e.roll.alter = {
                    type: di.enlighten,
                    value: le(i.enlighten.value),
                  });
          else
            e.roll = {
              enable: !1,
              horizontal: !1,
              vertical: !1,
              angle: 0,
              speed: 0,
            };
        })(this._engine, t);
      }
      isEnabled(t) {
        const e = t.options.roll;
        return !t.destroyed && !t.spawning && !!e?.enable;
      }
      loadOptions(t, ...e) {
        t.roll || (t.roll = new ua());
        for (const i of e) t.roll.load(i?.roll);
      }
      update(t, e) {
        this.isEnabled(t) &&
          (function (t, e) {
            const i = t.options.roll,
              s = t.roll;
            if (!s || !i?.enable) return;
            const o = s.speed * e.factor,
              n = ha;
            (s.angle += o), s.angle > n && (s.angle -= n);
          })(t, e);
      }
    }
    class fa {
      constructor() {
        (this.enable = !1),
          (this.speed = 0),
          (this.decay = 0),
          (this.sync = !1);
      }
      load(t) {
        Yt(t) ||
          (void 0 !== t.enable && (this.enable = t.enable),
          void 0 !== t.speed && (this.speed = ue(t.speed)),
          void 0 !== t.decay && (this.decay = ue(t.decay)),
          void 0 !== t.sync && (this.sync = t.sync));
      }
    }
    class ma extends Ds {
      constructor() {
        super(),
          (this.animation = new fa()),
          (this.direction = So.clockwise),
          (this.path = !1),
          (this.value = 0);
      }
      load(t) {
        Yt(t) ||
          (super.load(t),
          void 0 !== t.direction && (this.direction = t.direction),
          this.animation.load(t.animation),
          void 0 !== t.path && (this.path = t.path));
      }
    }
    const ga = 2 * Math.PI;
    class va {
      constructor(t) {
        this.container = t;
      }
      init(t) {
        const e = t.options.rotate;
        if (!e) return;
        (t.rotate = {
          enable: e.animation.enable,
          value: me(le(e.value)),
          min: 0,
          max: ga,
        }),
          (t.pathRotation = e.path);
        let i = e.direction;
        if (i === So.random) {
          i = Math.floor(2 * ie()) > 0 ? So.counterClockwise : So.clockwise;
        }
        switch (i) {
          case So.counterClockwise:
          case "counterClockwise":
            t.rotate.status = Pe.decreasing;
            break;
          case So.clockwise:
            t.rotate.status = Pe.increasing;
        }
        const s = e.animation;
        s.enable &&
          ((t.rotate.decay = 1 - le(s.decay)),
          (t.rotate.velocity =
            (le(s.speed) / 360) * this.container.retina.reduceFactor),
          s.sync || (t.rotate.velocity *= ie())),
          (t.rotation = t.rotate.value);
      }
      isEnabled(t) {
        const e = t.options.rotate;
        return (
          !!e &&
          !t.destroyed &&
          !t.spawning &&
          (!!e.value || e.animation.enable || e.path)
        );
      }
      loadOptions(t, ...e) {
        t.rotate || (t.rotate = new ma());
        for (const i of e) t.rotate.load(i?.rotate);
      }
      update(t, e) {
        this.isEnabled(t) &&
          ((t.isRotating = !!t.rotate),
          t.rotate &&
            (ci(t, t.rotate, !1, ke.none, e), (t.rotation = t.rotate.value)));
      }
    }
    const ya = Math.sqrt(2);
    class wa {
      constructor() {
        this.validTypes = ["edge", "square"];
      }
      draw(t) {
        !(function (t) {
          const { context: e, radius: i } = t,
            s = i / ya,
            o = 2 * s;
          e.rect(-s, -s, o, o);
        })(t);
      }
      getSidesCount() {
        return 4;
      }
    }
    const ba = 0,
      xa = 0;
    class _a {
      constructor() {
        this.validTypes = ["star"];
      }
      draw(t) {
        !(function (t) {
          const { context: e, particle: i, radius: s } = t,
            o = i.sides,
            n = i.starInset ?? 2;
          e.moveTo(ba, xa - s);
          for (let t = 0; t < o; t++)
            e.rotate(Math.PI / o),
              e.lineTo(ba, xa - s * n),
              e.rotate(Math.PI / o),
              e.lineTo(ba, xa - s);
        })(t);
      }
      getSidesCount(t) {
        const e = t.shapeData;
        return Math.round(le(e?.sides ?? 5));
      }
      particleInit(t, e) {
        const i = e.shapeData;
        e.starInset = le(i?.inset ?? 2);
      }
    }
    var za;
    !(function (t) {
      (t.clockwise = "clockwise"),
        (t.counterClockwise = "counter-clockwise"),
        (t.random = "random");
    })(za || (za = {}));
    class Ca {
      constructor() {
        (this.enable = !1),
          (this.speed = 0),
          (this.decay = 0),
          (this.sync = !1);
      }
      load(t) {
        Yt(t) ||
          (void 0 !== t.enable && (this.enable = t.enable),
          void 0 !== t.speed && (this.speed = ue(t.speed)),
          void 0 !== t.decay && (this.decay = ue(t.decay)),
          void 0 !== t.sync && (this.sync = t.sync));
      }
    }
    class Ma extends Ds {
      constructor() {
        super(),
          (this.animation = new Ca()),
          (this.direction = za.clockwise),
          (this.enable = !1),
          (this.value = 0);
      }
      load(t) {
        super.load(t),
          Yt(t) ||
            (this.animation.load(t.animation),
            void 0 !== t.direction && (this.direction = t.direction),
            void 0 !== t.enable && (this.enable = t.enable));
      }
    }
    const Pa = 2 * Math.PI;
    class ka {
      constructor(t) {
        this.container = t;
      }
      getTransformValues(t) {
        const e = t.tilt?.enable && t.tilt;
        return {
          b: e ? Math.cos(e.value) * e.cosDirection : void 0,
          c: e ? Math.sin(e.value) * e.sinDirection : void 0,
        };
      }
      init(t) {
        const e = t.options.tilt;
        if (!e) return;
        t.tilt = {
          enable: e.enable,
          value: me(le(e.value)),
          sinDirection: ie() >= g ? 1 : -1,
          cosDirection: ie() >= g ? 1 : -1,
          min: 0,
          max: Pa,
        };
        let i = e.direction;
        if (i === za.random) {
          i = Math.floor(2 * ie()) > 0 ? za.counterClockwise : za.clockwise;
        }
        switch (i) {
          case za.counterClockwise:
          case "counterClockwise":
            t.tilt.status = Pe.decreasing;
            break;
          case za.clockwise:
            t.tilt.status = Pe.increasing;
        }
        const s = t.options.tilt?.animation;
        s?.enable &&
          ((t.tilt.decay = 1 - le(s.decay)),
          (t.tilt.velocity =
            (le(s.speed) / 360) * this.container.retina.reduceFactor),
          s.sync || (t.tilt.velocity *= ie()));
      }
      isEnabled(t) {
        const e = t.options.tilt?.animation;
        return !t.destroyed && !t.spawning && !!e?.enable;
      }
      loadOptions(t, ...e) {
        t.tilt || (t.tilt = new Ma());
        for (const i of e) t.tilt.load(i?.tilt);
      }
      async update(t, e) {
        this.isEnabled(t) &&
          t.tilt &&
          (ci(t, t.tilt, !1, ke.none, e), await Promise.resolve());
      }
    }
    class Sa {
      constructor() {
        (this.angle = 50), (this.move = 10);
      }
      load(t) {
        Yt(t) ||
          (void 0 !== t.angle && (this.angle = ue(t.angle)),
          void 0 !== t.move && (this.move = ue(t.move)));
      }
    }
    class Oa {
      constructor() {
        (this.distance = 5), (this.enable = !1), (this.speed = new Sa());
      }
      load(t) {
        if (
          !Yt(t) &&
          (void 0 !== t.distance && (this.distance = ue(t.distance)),
          void 0 !== t.enable && (this.enable = t.enable),
          void 0 !== t.speed)
        )
          if (Wt(t.speed)) this.speed.load({ angle: t.speed });
          else {
            const e = t.speed;
            void 0 !== e.min
              ? this.speed.load({ angle: e })
              : this.speed.load(t.speed);
          }
      }
    }
    const Da = 2 * Math.PI;
    const Ta = 2 * Math.PI;
    class Ia {
      constructor(t) {
        this.container = t;
      }
      init(t) {
        const e = t.options.wobble;
        (t.wobble = e?.enable
          ? {
              angle: ie() * Ta,
              angleSpeed: le(e.speed.angle) / 360,
              moveSpeed: le(e.speed.move) / 10,
            }
          : { angle: 0, angleSpeed: 0, moveSpeed: 0 }),
          (t.retina.wobbleDistance =
            le(e?.distance ?? 0) * this.container.retina.pixelRatio);
      }
      isEnabled(t) {
        return !t.destroyed && !t.spawning && !!t.options.wobble?.enable;
      }
      loadOptions(t, ...e) {
        t.wobble || (t.wobble = new Oa());
        for (const i of e) t.wobble.load(i?.wobble);
      }
      update(t, e) {
        this.isEnabled(t) &&
          (function (t, e) {
            const { wobble: i } = t.options,
              { wobble: s } = t;
            if (!i?.enable || !s) return;
            const o = s.angleSpeed * e.factor,
              n =
                (s.moveSpeed *
                  e.factor *
                  ((t.retina.wobbleDistance ?? 0) * e.factor)) /
                (v / 60),
              a = Da,
              { position: r } = t;
            (s.angle += o),
              s.angle > a && (s.angle -= a),
              (r.x += n * Math.cos(s.angle)),
              (r.y += n * Math.abs(Math.sin(s.angle)));
          })(t, e);
      }
    }
    const Ea = 9.81,
      Ra = 5,
      Fa = 3,
      La = 1,
      Aa = 0,
      Ba = 0;
    let Va = !1,
      Ua = !1;
    const qa = new Map();
    async function $a(t) {
      if (!Va) {
        if (Ua)
          return new Promise((t) => {
            const e = setInterval(() => {
              Va && (clearInterval(e), t());
            }, 100);
          });
        (Ua = !0),
          t.checkVersion("3.8.1"),
          await (async function (t, e = !0) {
            t.checkVersion("3.8.1"),
              t.emitterShapeManager || (t.emitterShapeManager = new Go(t)),
              t.addEmitterShapeGenerator ||
                (t.addEmitterShapeGenerator = (e, i) => {
                  t.emitterShapeManager?.addShapeGenerator(e, i);
                });
            const i = new $o(t);
            await t.addPlugin(i, e);
          })(t, !1),
          await (async function (t, e = !0) {
            t.checkVersion("3.8.1"), await t.addPlugin(new ia(t), e);
          })(t, !1),
          await (async function (t, e = !0) {
            t.checkVersion("3.8.1"),
              await t.addShape(new Cn(), e),
              await t.addShape(new zn(), e),
              await t.addShape(new _n(), e),
              await t.addShape(new xn(), e);
          })(t, !1),
          await (async function (t, e = !0) {
            t.checkVersion("3.8.1"), await t.addShape(new kn(), e);
          })(t, !1),
          await Qn(t, !1),
          await ca(t, !1),
          await (async function (t, e = !0) {
            t.checkVersion("3.8.1"), await t.addShape(new wa(), e);
          })(t, !1),
          await (async function (t, e = !0) {
            t.checkVersion("3.8.1"), await t.addShape(new _a(), e);
          })(t, !1),
          await (async function (t, e = !0) {
            t.checkVersion("3.8.1"), await t.addShape(new Pn(), e);
          })(t, !1),
          await (async function (t, e = !0) {
            t.checkVersion("3.8.1"),
              await t.addParticleUpdater(
                "rotate",
                (t) => Promise.resolve(new va(t)),
                e,
              );
          })(t, !1),
          await (async function (t, e = !0) {
            t.checkVersion("3.8.1"),
              await t.addParticleUpdater(
                "life",
                async (t) => Promise.resolve(new Kn(t)),
                e,
              );
          })(t, !1),
          await (async function (t, e = !0) {
            t.checkVersion("3.8.1"),
              await t.addParticleUpdater(
                "roll",
                () => Promise.resolve(new pa(t)),
                e,
              );
          })(t, !1),
          await (async function (t, e = !0) {
            t.checkVersion("3.8.1"),
              await t.addParticleUpdater(
                "tilt",
                (t) => Promise.resolve(new ka(t)),
                e,
              );
          })(t, !1),
          await (async function (t, e = !0) {
            t.checkVersion("3.8.1"),
              await t.addParticleUpdater(
                "wobble",
                (t) => Promise.resolve(new Ia(t)),
                e,
              );
          })(t, !1),
          await vn(t),
          (Ua = !1),
          (Va = !0);
      }
    }
    async function Ha(t) {
      const e = new jo();
      let i;
      e.load(t.options);
      const s = (e.ticks * v) / (3.6 * v * 120);
      if (qa.has(t.id) && ((i = qa.get(t.id)), i && !i.destroyed)) {
        const t = i;
        if (t.addEmitter)
          return void (await t.addEmitter({
            startCount: e.count,
            position: e.position,
            size: { width: 0, height: 0 },
            rate: { delay: 0, quantity: 0 },
            life: { duration: 0.1, count: 1 },
            particles: {
              color: { value: e.colors },
              shape: { type: e.shapes, options: e.shapeOptions },
              life: { count: 1 },
              opacity: {
                value: { min: 0, max: 1 },
                animation: {
                  enable: !0,
                  sync: !0,
                  speed: s,
                  startValue: "max",
                  destroy: "min",
                },
              },
              size: { value: Ra * e.scalar },
              move: {
                angle: { value: e.spread, offset: 0 },
                drift: { min: -e.drift, max: e.drift },
                gravity: { acceleration: e.gravity * Ea },
                speed: e.startVelocity * Fa,
                decay: La - e.decay,
                direction: -e.angle,
              },
              rotate: {
                value: e.flat ? Aa : { min: 0, max: 360 },
                direction: "random",
                animation: { enable: !e.flat, speed: 60 },
              },
              tilt: {
                direction: "random",
                enable: !e.flat,
                value: e.flat ? Ba : { min: 0, max: 360 },
                animation: { enable: !0, speed: 60 },
              },
              roll: {
                darken: { enable: !0, value: 25 },
                enable: !e.flat,
                speed: { min: 15, max: 25 },
              },
              wobble: {
                distance: 30,
                enable: !e.flat,
                speed: { min: -15, max: 15 },
              },
            },
          }));
      }
      const o = {
        fullScreen: { enable: !t.canvas, zIndex: e.zIndex },
        fpsLimit: 120,
        particles: {
          number: { value: 0 },
          color: { value: e.colors },
          shape: { type: e.shapes, options: e.shapeOptions },
          opacity: {
            value: { min: 0, max: 1 },
            animation: {
              enable: !0,
              sync: !0,
              speed: s,
              startValue: "max",
              destroy: "min",
            },
          },
          size: { value: Ra * e.scalar },
          links: { enable: !1 },
          life: { count: 1 },
          move: {
            angle: { value: e.spread, offset: 0 },
            drift: { min: -e.drift, max: e.drift },
            enable: !0,
            gravity: { enable: !0, acceleration: e.gravity * Ea },
            speed: e.startVelocity * Fa,
            decay: La - e.decay,
            direction: -e.angle,
            random: !0,
            straight: !1,
            outModes: { default: "none", bottom: "destroy" },
          },
          rotate: {
            value: e.flat ? Aa : { min: 0, max: 360 },
            direction: "random",
            animation: { enable: !e.flat, speed: 60 },
          },
          tilt: {
            direction: "random",
            enable: !e.flat,
            value: e.flat ? Ba : { min: 0, max: 360 },
            animation: { enable: !0, speed: 60 },
          },
          roll: {
            darken: { enable: !0, value: 25 },
            enable: !e.flat,
            speed: { min: 15, max: 25 },
          },
          wobble: {
            distance: 30,
            enable: !e.flat,
            speed: { min: -15, max: 15 },
          },
        },
        detectRetina: !0,
        motion: { disable: e.disableForReducedMotion },
        emitters: {
          name: "confetti",
          startCount: e.count,
          position: e.position,
          size: { width: 0, height: 0 },
          rate: { delay: 0, quantity: 0 },
          life: { duration: 0.1, count: 1 },
        },
      };
      return (
        (i = await To.load({ id: t.id, element: t.canvas, options: o })),
        qa.set(t.id, i),
        i
      );
    }
    async function Ga(t, e) {
      let i, s;
      return (
        await $a(To),
        jt(t) ? ((s = t), (i = e ?? {})) : ((s = "confetti"), (i = t)),
        Ha({ id: s, options: i })
      );
    }
    return (
      (Ga.create = async (t, e) => {
        if (!t) return Ga;
        await $a(To);
        const i = t.getAttribute("id") ?? "confetti";
        return (
          t.setAttribute("id", i),
          async (s, o) => {
            let n, a;
            return (
              jt(s) ? ((a = s), (n = o ?? e)) : ((a = i), (n = s)),
              Ha({ id: a, canvas: t, options: n })
            );
          }
        );
      }),
      (Ga.init = async () => {
        await $a(To);
      }),
      (Ga.version = "3.8.1"),
      Fe() || (window.confetti = Ga),
      e
    );
  })(),
);
