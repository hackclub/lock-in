!(function () {
  function e(e) {
    return e && e.__esModule ? e.default : e;
  }
  function t(e, t, r, n) {
    Object.defineProperty(e, t, {
      get: r,
      set: n,
      enumerable: !0,
      configurable: !0,
    });
  }
  var r, n, i;
  function o(e, t, r) {
    return (
      t in e
        ? Object.defineProperty(e, t, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (e[t] = r),
      e
    );
  }
  function a(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
    return n;
  }
  function s(e, t) {
    return (
      (function (e) {
        if (Array.isArray(e)) return e;
      })(e) ||
      (function (e) {
        if (
          ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
          null != e["@@iterator"]
        )
          return Array.from(e);
      })(e) ||
      (function (e, t) {
        if (e) {
          if ("string" == typeof e) return a(e, t);
          var r = Object.prototype.toString.call(e).slice(8, -1);
          return (
            "Object" === r && e.constructor && (r = e.constructor.name),
            "Map" === r || "Set" === r
              ? Array.from(r)
              : "Arguments" === r ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                ? a(e, t)
                : void 0
          );
        }
      })(e, t) ||
      (function () {
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
        );
      })()
    );
  }
  function c(e) {
    return e && e.constructor === Symbol ? "symbol" : typeof e;
  }
  var p = {};
  (p.useBlobBuilder = (function () {
    try {
      return new Blob([]), !1;
    } catch (e) {
      return !0;
    }
  })()),
    (p.useArrayBufferView =
      !p.useBlobBuilder &&
      (function () {
        try {
          return 0 === new Blob([new Uint8Array([])]).size;
        } catch (e) {
          return !0;
        }
      })()),
    (n = p);
  var d = i;
  function u() {
    (this._pieces = []), (this._parts = []);
  }
  "undefined" != typeof window &&
    (d = i =
      window.WebKitBlobBuilder ||
      window.MozBlobBuilder ||
      window.MSBlobBuilder ||
      window.BlobBuilder),
    (u.prototype.append = function (e) {
      "number" == typeof e
        ? this._pieces.push(e)
        : (this.flush(), this._parts.push(e));
    }),
    (u.prototype.flush = function () {
      if (this._pieces.length > 0) {
        var e = new Uint8Array(this._pieces);
        p.useArrayBufferView || (e = e.buffer),
          this._parts.push(e),
          (this._pieces = []);
      }
    }),
    (u.prototype.getBuffer = function () {
      if ((this.flush(), p.useBlobBuilder)) {
        for (var e = new d(), t = 0, r = this._parts.length; t < r; t++)
          e.append(this._parts[t]);
        return e.getBlob();
      }
      return new Blob(this._parts);
    });
  var l = u,
    f = n;
  function h(e) {
    (this.index = 0),
      (this.dataBuffer = e),
      (this.dataView = new Uint8Array(this.dataBuffer)),
      (this.length = this.dataBuffer.byteLength);
  }
  function m() {
    this.bufferBuilder = new l();
  }
  function v(e) {
    var t = e.charCodeAt(0);
    return t <= 2047
      ? "00"
      : t <= 65535
        ? "000"
        : t <= 2097151
          ? "0000"
          : t <= 67108863
            ? "00000"
            : "000000";
  }
  (r = {
    unpack: function (e) {
      return new h(e).unpack();
    },
    pack: function (e) {
      var t = new m();
      return t.pack(e), t.getBuffer();
    },
  }),
    (h.prototype.unpack = function () {
      var e,
        t = this.unpack_uint8();
      if (t < 128) return t;
      if ((224 ^ t) < 32) return (224 ^ t) - 32;
      if ((e = 160 ^ t) <= 15) return this.unpack_raw(e);
      if ((e = 176 ^ t) <= 15) return this.unpack_string(e);
      if ((e = 144 ^ t) <= 15) return this.unpack_array(e);
      if ((e = 128 ^ t) <= 15) return this.unpack_map(e);
      switch (t) {
        case 192:
          return null;
        case 193:
        case 212:
        case 213:
        case 214:
        case 215:
          return;
        case 194:
          return !1;
        case 195:
          return !0;
        case 202:
          return this.unpack_float();
        case 203:
          return this.unpack_double();
        case 204:
          return this.unpack_uint8();
        case 205:
          return this.unpack_uint16();
        case 206:
          return this.unpack_uint32();
        case 207:
          return this.unpack_uint64();
        case 208:
          return this.unpack_int8();
        case 209:
          return this.unpack_int16();
        case 210:
          return this.unpack_int32();
        case 211:
          return this.unpack_int64();
        case 216:
          return (e = this.unpack_uint16()), this.unpack_string(e);
        case 217:
          return (e = this.unpack_uint32()), this.unpack_string(e);
        case 218:
          return (e = this.unpack_uint16()), this.unpack_raw(e);
        case 219:
          return (e = this.unpack_uint32()), this.unpack_raw(e);
        case 220:
          return (e = this.unpack_uint16()), this.unpack_array(e);
        case 221:
          return (e = this.unpack_uint32()), this.unpack_array(e);
        case 222:
          return (e = this.unpack_uint16()), this.unpack_map(e);
        case 223:
          return (e = this.unpack_uint32()), this.unpack_map(e);
      }
    }),
    (h.prototype.unpack_uint8 = function () {
      var e = 255 & this.dataView[this.index];
      return this.index++, e;
    }),
    (h.prototype.unpack_uint16 = function () {
      var e = this.read(2),
        t = 256 * (255 & e[0]) + (255 & e[1]);
      return (this.index += 2), t;
    }),
    (h.prototype.unpack_uint32 = function () {
      var e = this.read(4),
        t = 256 * (256 * (256 * e[0] + e[1]) + e[2]) + e[3];
      return (this.index += 4), t;
    }),
    (h.prototype.unpack_uint64 = function () {
      var e = this.read(8),
        t =
          256 *
            (256 *
              (256 *
                (256 * (256 * (256 * (256 * e[0] + e[1]) + e[2]) + e[3]) +
                  e[4]) +
                e[5]) +
              e[6]) +
          e[7];
      return (this.index += 8), t;
    }),
    (h.prototype.unpack_int8 = function () {
      var e = this.unpack_uint8();
      return e < 128 ? e : e - 256;
    }),
    (h.prototype.unpack_int16 = function () {
      var e = this.unpack_uint16();
      return e < 32768 ? e : e - 65536;
    }),
    (h.prototype.unpack_int32 = function () {
      var e = this.unpack_uint32();
      return e < Math.pow(2, 31) ? e : e - Math.pow(2, 32);
    }),
    (h.prototype.unpack_int64 = function () {
      var e = this.unpack_uint64();
      return e < Math.pow(2, 63) ? e : e - Math.pow(2, 64);
    }),
    (h.prototype.unpack_raw = function (e) {
      if (this.length < this.index + e)
        throw new Error(
          "BinaryPackFailure: index is out of range " +
            this.index +
            " " +
            e +
            " " +
            this.length,
        );
      var t = this.dataBuffer.slice(this.index, this.index + e);
      return (this.index += e), t;
    }),
    (h.prototype.unpack_string = function (e) {
      for (var t, r, n = this.read(e), i = 0, o = ""; i < e; )
        (t = n[i]) < 128
          ? ((o += String.fromCharCode(t)), i++)
          : (192 ^ t) < 32
            ? ((r = ((192 ^ t) << 6) | (63 & n[i + 1])),
              (o += String.fromCharCode(r)),
              (i += 2))
            : ((r =
                ((15 & t) << 12) | ((63 & n[i + 1]) << 6) | (63 & n[i + 2])),
              (o += String.fromCharCode(r)),
              (i += 3));
      return (this.index += e), o;
    }),
    (h.prototype.unpack_array = function (e) {
      for (var t = new Array(e), r = 0; r < e; r++) t[r] = this.unpack();
      return t;
    }),
    (h.prototype.unpack_map = function (e) {
      for (var t = {}, r = 0; r < e; r++) {
        var n = this.unpack(),
          i = this.unpack();
        t[n] = i;
      }
      return t;
    }),
    (h.prototype.unpack_float = function () {
      var e = this.unpack_uint32(),
        t = ((e >> 23) & 255) - 127;
      return (
        (0 === e >> 31 ? 1 : -1) *
        ((8388607 & e) | 8388608) *
        Math.pow(2, t - 23)
      );
    }),
    (h.prototype.unpack_double = function () {
      var e = this.unpack_uint32(),
        t = this.unpack_uint32(),
        r = ((e >> 20) & 2047) - 1023;
      return (
        (0 === e >> 31 ? 1 : -1) *
        (((1048575 & e) | 1048576) * Math.pow(2, r - 20) +
          t * Math.pow(2, r - 52))
      );
    }),
    (h.prototype.read = function (e) {
      var t = this.index;
      if (t + e <= this.length) return this.dataView.subarray(t, t + e);
      throw new Error("BinaryPackFailure: read index out of range");
    }),
    (m.prototype.getBuffer = function () {
      return this.bufferBuilder.getBuffer();
    }),
    (m.prototype.pack = function (e) {
      var t = void 0 === e ? "undefined" : c(e);
      if ("string" === t) this.pack_string(e);
      else if ("number" === t)
        Math.floor(e) === e ? this.pack_integer(e) : this.pack_double(e);
      else if ("boolean" === t)
        !0 === e
          ? this.bufferBuilder.append(195)
          : !1 === e && this.bufferBuilder.append(194);
      else if ("undefined" === t) this.bufferBuilder.append(192);
      else {
        if ("object" !== t)
          throw new Error('Type "' + t + '" not yet supported');
        if (null === e) this.bufferBuilder.append(192);
        else {
          var r = e.constructor;
          if (r == Array) this.pack_array(e);
          else if (
            r == Blob ||
            r == File ||
            e instanceof Blob ||
            e instanceof File
          )
            this.pack_bin(e);
          else if (r == ArrayBuffer)
            f.useArrayBufferView
              ? this.pack_bin(new Uint8Array(e))
              : this.pack_bin(e);
          else if ("BYTES_PER_ELEMENT" in e)
            f.useArrayBufferView
              ? this.pack_bin(new Uint8Array(e.buffer))
              : this.pack_bin(e.buffer);
          else if (r == Object || r.toString().startsWith("class"))
            this.pack_object(e);
          else if (r == Date) this.pack_string(e.toString());
          else {
            if ("function" != typeof e.toBinaryPack)
              throw new Error('Type "' + r.toString() + '" not yet supported');
            this.bufferBuilder.append(e.toBinaryPack());
          }
        }
      }
      this.bufferBuilder.flush();
    }),
    (m.prototype.pack_bin = function (e) {
      var t = e.length || e.byteLength || e.size;
      if (t <= 15) this.pack_uint8(160 + t);
      else if (t <= 65535) this.bufferBuilder.append(218), this.pack_uint16(t);
      else {
        if (!(t <= 4294967295)) throw new Error("Invalid length");
        this.bufferBuilder.append(219), this.pack_uint32(t);
      }
      this.bufferBuilder.append(e);
    }),
    (m.prototype.pack_string = function (e) {
      var t = (function (e) {
        return e.length > 600
          ? new Blob([e]).size
          : e.replace(/[^\u0000-\u007F]/g, v).length;
      })(e);
      if (t <= 15) this.pack_uint8(176 + t);
      else if (t <= 65535) this.bufferBuilder.append(216), this.pack_uint16(t);
      else {
        if (!(t <= 4294967295)) throw new Error("Invalid length");
        this.bufferBuilder.append(217), this.pack_uint32(t);
      }
      this.bufferBuilder.append(e);
    }),
    (m.prototype.pack_array = function (e) {
      var t = e.length;
      if (t <= 15) this.pack_uint8(144 + t);
      else if (t <= 65535) this.bufferBuilder.append(220), this.pack_uint16(t);
      else {
        if (!(t <= 4294967295)) throw new Error("Invalid length");
        this.bufferBuilder.append(221), this.pack_uint32(t);
      }
      for (var r = 0; r < t; r++) this.pack(e[r]);
    }),
    (m.prototype.pack_integer = function (e) {
      if (e >= -32 && e <= 127) this.bufferBuilder.append(255 & e);
      else if (e >= 0 && e <= 255)
        this.bufferBuilder.append(204), this.pack_uint8(e);
      else if (e >= -128 && e <= 127)
        this.bufferBuilder.append(208), this.pack_int8(e);
      else if (e >= 0 && e <= 65535)
        this.bufferBuilder.append(205), this.pack_uint16(e);
      else if (e >= -32768 && e <= 32767)
        this.bufferBuilder.append(209), this.pack_int16(e);
      else if (e >= 0 && e <= 4294967295)
        this.bufferBuilder.append(206), this.pack_uint32(e);
      else if (e >= -2147483648 && e <= 2147483647)
        this.bufferBuilder.append(210), this.pack_int32(e);
      else if (e >= -0x8000000000000000 && e <= 0x8000000000000000)
        this.bufferBuilder.append(211), this.pack_int64(e);
      else {
        if (!(e >= 0 && e <= 0x10000000000000000))
          throw new Error("Invalid integer");
        this.bufferBuilder.append(207), this.pack_uint64(e);
      }
    }),
    (m.prototype.pack_double = function (e) {
      var t = 0;
      e < 0 && ((t = 1), (e = -e));
      var r = Math.floor(Math.log(e) / Math.LN2),
        n = e / Math.pow(2, r) - 1,
        i = Math.floor(n * Math.pow(2, 52)),
        o = Math.pow(2, 32),
        a = (t << 31) | ((r + 1023) << 20) | ((i / o) & 1048575),
        s = i % o;
      this.bufferBuilder.append(203), this.pack_int32(a), this.pack_int32(s);
    }),
    (m.prototype.pack_object = function (e) {
      var t = Object.keys(e).length;
      if (t <= 15) this.pack_uint8(128 + t);
      else if (t <= 65535) this.bufferBuilder.append(222), this.pack_uint16(t);
      else {
        if (!(t <= 4294967295)) throw new Error("Invalid length");
        this.bufferBuilder.append(223), this.pack_uint32(t);
      }
      for (var r in e) e.hasOwnProperty(r) && (this.pack(r), this.pack(e[r]));
    }),
    (m.prototype.pack_uint8 = function (e) {
      this.bufferBuilder.append(e);
    }),
    (m.prototype.pack_uint16 = function (e) {
      this.bufferBuilder.append(e >> 8), this.bufferBuilder.append(255 & e);
    }),
    (m.prototype.pack_uint32 = function (e) {
      var t = 4294967295 & e;
      this.bufferBuilder.append((4278190080 & t) >>> 24),
        this.bufferBuilder.append((16711680 & t) >>> 16),
        this.bufferBuilder.append((65280 & t) >>> 8),
        this.bufferBuilder.append(255 & t);
    }),
    (m.prototype.pack_uint64 = function (e) {
      var t = e / Math.pow(2, 32),
        r = e % Math.pow(2, 32);
      this.bufferBuilder.append((4278190080 & t) >>> 24),
        this.bufferBuilder.append((16711680 & t) >>> 16),
        this.bufferBuilder.append((65280 & t) >>> 8),
        this.bufferBuilder.append(255 & t),
        this.bufferBuilder.append((4278190080 & r) >>> 24),
        this.bufferBuilder.append((16711680 & r) >>> 16),
        this.bufferBuilder.append((65280 & r) >>> 8),
        this.bufferBuilder.append(255 & r);
    }),
    (m.prototype.pack_int8 = function (e) {
      this.bufferBuilder.append(255 & e);
    }),
    (m.prototype.pack_int16 = function (e) {
      this.bufferBuilder.append((65280 & e) >> 8),
        this.bufferBuilder.append(255 & e);
    }),
    (m.prototype.pack_int32 = function (e) {
      this.bufferBuilder.append((e >>> 24) & 255),
        this.bufferBuilder.append((16711680 & e) >>> 16),
        this.bufferBuilder.append((65280 & e) >>> 8),
        this.bufferBuilder.append(255 & e);
    }),
    (m.prototype.pack_int64 = function (e) {
      var t = Math.floor(e / Math.pow(2, 32)),
        r = e % Math.pow(2, 32);
      this.bufferBuilder.append((4278190080 & t) >>> 24),
        this.bufferBuilder.append((16711680 & t) >>> 16),
        this.bufferBuilder.append((65280 & t) >>> 8),
        this.bufferBuilder.append(255 & t),
        this.bufferBuilder.append((4278190080 & r) >>> 24),
        this.bufferBuilder.append((16711680 & r) >>> 16),
        this.bufferBuilder.append((65280 & r) >>> 8),
        this.bufferBuilder.append(255 & r);
    });
  var y = !0,
    g = !0;
  function b(e, t, r) {
    var n = e.match(t);
    return n && n.length >= r && parseInt(n[r], 10);
  }
  function C(e, t, r) {
    if (e.RTCPeerConnection) {
      var n = e.RTCPeerConnection.prototype,
        i = n.addEventListener;
      n.addEventListener = function (e, n) {
        if (e !== t) return i.apply(this, arguments);
        var o = function (e) {
          var t = r(e);
          t && (n.handleEvent ? n.handleEvent(t) : n(t));
        };
        return (
          (this._eventMap = this._eventMap || {}),
          this._eventMap[t] || (this._eventMap[t] = new Map()),
          this._eventMap[t].set(n, o),
          i.apply(this, [e, o])
        );
      };
      var o = n.removeEventListener;
      (n.removeEventListener = function (e, r) {
        if (e !== t || !this._eventMap || !this._eventMap[t])
          return o.apply(this, arguments);
        if (!this._eventMap[t].has(r)) return o.apply(this, arguments);
        var n = this._eventMap[t].get(r);
        return (
          this._eventMap[t].delete(r),
          0 === this._eventMap[t].size && delete this._eventMap[t],
          0 === Object.keys(this._eventMap).length && delete this._eventMap,
          o.apply(this, [e, n])
        );
      }),
        Object.defineProperty(n, "on" + t, {
          get: function () {
            return this["_on" + t];
          },
          set: function (e) {
            this["_on" + t] &&
              (this.removeEventListener(t, this["_on" + t]),
              delete this["_on" + t]),
              e && this.addEventListener(t, (this["_on" + t] = e));
          },
          enumerable: !0,
          configurable: !0,
        });
    }
  }
  function _(e) {
    return "boolean" != typeof e
      ? new Error(
          "Argument type: " +
            (void 0 === e ? "undefined" : c(e)) +
            ". Please use a boolean.",
        )
      : ((y = e),
        e ? "adapter.js logging disabled" : "adapter.js logging enabled");
  }
  function S(e) {
    return "boolean" != typeof e
      ? new Error(
          "Argument type: " +
            (void 0 === e ? "undefined" : c(e)) +
            ". Please use a boolean.",
        )
      : ((g = !e),
        "adapter.js deprecation warnings " + (e ? "disabled" : "enabled"));
  }
  function T() {
    if ("object" == typeof window) {
      if (y) return;
      "undefined" != typeof console &&
        "function" == typeof console.log &&
        console.log.apply(console, arguments);
    }
  }
  function k(e, t) {
    g && console.warn(e + " is deprecated, please use " + t + " instead.");
  }
  function w(e) {
    var t = { browser: null, version: null };
    if (void 0 === e || !e.navigator) return (t.browser = "Not a browser."), t;
    var r = e.navigator;
    if (r.mozGetUserMedia)
      (t.browser = "firefox"),
        (t.version = b(r.userAgent, /Firefox\/(\d+)\./, 1));
    else if (
      r.webkitGetUserMedia ||
      (!1 === e.isSecureContext &&
        e.webkitRTCPeerConnection &&
        !e.RTCIceGatherer)
    )
      (t.browser = "chrome"),
        (t.version = b(r.userAgent, /Chrom(e|ium)\/(\d+)\./, 2));
    else if (r.mediaDevices && r.userAgent.match(/Edge\/(\d+).(\d+)$/))
      (t.browser = "edge"),
        (t.version = b(r.userAgent, /Edge\/(\d+).(\d+)$/, 2));
    else {
      if (!e.RTCPeerConnection || !r.userAgent.match(/AppleWebKit\/(\d+)\./))
        return (t.browser = "Not a supported browser."), t;
      (t.browser = "safari"),
        (t.version = b(r.userAgent, /AppleWebKit\/(\d+)\./, 1)),
        (t.supportsUnifiedPlan =
          e.RTCRtpTransceiver &&
          "currentDirection" in e.RTCRtpTransceiver.prototype);
    }
    return t;
  }
  function P(e) {
    return "[object Object]" === Object.prototype.toString.call(e);
  }
  function R(e) {
    return P(e)
      ? Object.keys(e).reduce(function (t, r) {
          var n = P(e[r]),
            i = n ? R(e[r]) : e[r],
            a = n && !Object.keys(i).length;
          return void 0 === i || a ? t : Object.assign(t, o({}, r, i));
        }, {})
      : e;
  }
  function E(e, t, r) {
    t &&
      !r.has(t.id) &&
      (r.set(t.id, t),
      Object.keys(t).forEach(function (n) {
        n.endsWith("Id")
          ? E(e, e.get(t[n]), r)
          : n.endsWith("Ids") &&
            t[n].forEach(function (t) {
              E(e, e.get(t), r);
            });
      }));
  }
  function x(e, t, r) {
    var n = r ? "outbound-rtp" : "inbound-rtp",
      i = new Map();
    if (null === t) return i;
    var o = [];
    return (
      e.forEach(function (e) {
        "track" === e.type && e.trackIdentifier === t.id && o.push(e);
      }),
      o.forEach(function (t) {
        e.forEach(function (r) {
          r.type === n && r.trackId === t.id && E(e, r, i);
        });
      }),
      i
    );
  }
  var D = {};
  t(D, "shimMediaStream", function () {
    return j;
  }),
    t(D, "shimOnTrack", function () {
      return A;
    }),
    t(D, "shimGetSendersWithDtmf", function () {
      return L;
    }),
    t(D, "shimGetStats", function () {
      return B;
    }),
    t(D, "shimSenderReceiverGetStats", function () {
      return N;
    }),
    t(D, "shimAddTrackRemoveTrackWithNative", function () {
      return F;
    }),
    t(D, "shimAddTrackRemoveTrack", function () {
      return U;
    }),
    t(D, "shimPeerConnection", function () {
      return z;
    }),
    t(D, "fixNegotiationNeeded", function () {
      return G;
    }),
    t(D, "shimGetUserMedia", function () {
      return I;
    }),
    t(D, "shimGetDisplayMedia", function () {
      return M;
    });
  var O = T;
  function I(e, t) {
    var r = e && e.navigator;
    if (r.mediaDevices) {
      var n = function (e) {
          if ("object" != typeof e || e.mandatory || e.optional) return e;
          var t = {};
          return (
            Object.keys(e).forEach(function (r) {
              if ("require" !== r && "advanced" !== r && "mediaSource" !== r) {
                var n = "object" == typeof e[r] ? e[r] : { ideal: e[r] };
                void 0 !== n.exact &&
                  "number" == typeof n.exact &&
                  (n.min = n.max = n.exact);
                var i = function (e, t) {
                  return e
                    ? e + t.charAt(0).toUpperCase() + t.slice(1)
                    : "deviceId" === t
                      ? "sourceId"
                      : t;
                };
                if (void 0 !== n.ideal) {
                  t.optional = t.optional || [];
                  var o = {};
                  "number" == typeof n.ideal
                    ? ((o[i("min", r)] = n.ideal),
                      t.optional.push(o),
                      ((o = {})[i("max", r)] = n.ideal),
                      t.optional.push(o))
                    : ((o[i("", r)] = n.ideal), t.optional.push(o));
                }
                void 0 !== n.exact && "number" != typeof n.exact
                  ? ((t.mandatory = t.mandatory || {}),
                    (t.mandatory[i("", r)] = n.exact))
                  : ["min", "max"].forEach(function (e) {
                      void 0 !== n[e] &&
                        ((t.mandatory = t.mandatory || {}),
                        (t.mandatory[i(e, r)] = n[e]));
                    });
              }
            }),
            e.advanced && (t.optional = (t.optional || []).concat(e.advanced)),
            t
          );
        },
        i = function (e, i) {
          if (t.version >= 61) return i(e);
          if (
            (e = JSON.parse(JSON.stringify(e))) &&
            "object" == typeof e.audio
          ) {
            var o = function (e, t, r) {
              t in e && !(r in e) && ((e[r] = e[t]), delete e[t]);
            };
            o(
              (e = JSON.parse(JSON.stringify(e))).audio,
              "autoGainControl",
              "googAutoGainControl",
            ),
              o(e.audio, "noiseSuppression", "googNoiseSuppression"),
              (e.audio = n(e.audio));
          }
          if (e && "object" == typeof e.video) {
            var a = e.video.facingMode;
            a = a && ("object" == typeof a ? a : { ideal: a });
            var s,
              c = t.version < 66;
            if (
              a &&
              ("user" === a.exact ||
                "environment" === a.exact ||
                "user" === a.ideal ||
                "environment" === a.ideal) &&
              (!r.mediaDevices.getSupportedConstraints ||
                !r.mediaDevices.getSupportedConstraints().facingMode ||
                c)
            )
              if (
                (delete e.video.facingMode,
                "environment" === a.exact || "environment" === a.ideal
                  ? (s = ["back", "rear"])
                  : ("user" !== a.exact && "user" !== a.ideal) ||
                    (s = ["front"]),
                s)
              )
                return r.mediaDevices.enumerateDevices().then(function (t) {
                  var r = (t = t.filter(function (e) {
                    return "videoinput" === e.kind;
                  })).find(function (e) {
                    return s.some(function (t) {
                      return e.label.toLowerCase().includes(t);
                    });
                  });
                  return (
                    !r &&
                      t.length &&
                      s.includes("back") &&
                      (r = t[t.length - 1]),
                    r &&
                      (e.video.deviceId = a.exact
                        ? { exact: r.deviceId }
                        : { ideal: r.deviceId }),
                    (e.video = n(e.video)),
                    O("chrome: " + JSON.stringify(e)),
                    i(e)
                  );
                });
            e.video = n(e.video);
          }
          return O("chrome: " + JSON.stringify(e)), i(e);
        },
        o = function (e) {
          return t.version >= 64
            ? e
            : {
                name:
                  {
                    PermissionDeniedError: "NotAllowedError",
                    PermissionDismissedError: "NotAllowedError",
                    InvalidStateError: "NotAllowedError",
                    DevicesNotFoundError: "NotFoundError",
                    ConstraintNotSatisfiedError: "OverconstrainedError",
                    TrackStartError: "NotReadableError",
                    MediaDeviceFailedDueToShutdown: "NotAllowedError",
                    MediaDeviceKillSwitchOn: "NotAllowedError",
                    TabCaptureError: "AbortError",
                    ScreenCaptureError: "AbortError",
                    DeviceCaptureError: "AbortError",
                  }[e.name] || e.name,
                message: e.message,
                constraint: e.constraint || e.constraintName,
                toString: function () {
                  return this.name + (this.message && ": ") + this.message;
                },
              };
        };
      if (
        ((r.getUserMedia = function (e, t, n) {
          i(e, function (e) {
            r.webkitGetUserMedia(e, t, function (e) {
              n && n(o(e));
            });
          });
        }.bind(r)),
        r.mediaDevices.getUserMedia)
      ) {
        var a = r.mediaDevices.getUserMedia.bind(r.mediaDevices);
        r.mediaDevices.getUserMedia = function (e) {
          return i(e, function (e) {
            return a(e).then(
              function (t) {
                if (
                  (e.audio && !t.getAudioTracks().length) ||
                  (e.video && !t.getVideoTracks().length)
                )
                  throw (
                    (t.getTracks().forEach(function (e) {
                      e.stop();
                    }),
                    new DOMException("", "NotFoundError"))
                  );
                return t;
              },
              function (e) {
                return Promise.reject(o(e));
              },
            );
          });
        };
      }
    }
  }
  function M(e, t) {
    (e.navigator.mediaDevices &&
      "getDisplayMedia" in e.navigator.mediaDevices) ||
      (e.navigator.mediaDevices &&
        ("function" == typeof t
          ? (e.navigator.mediaDevices.getDisplayMedia = function (r) {
              return t(r).then(function (t) {
                var n = r.video && r.video.width,
                  i = r.video && r.video.height,
                  o = r.video && r.video.frameRate;
                return (
                  (r.video = {
                    mandatory: {
                      chromeMediaSource: "desktop",
                      chromeMediaSourceId: t,
                      maxFrameRate: o || 3,
                    },
                  }),
                  n && (r.video.mandatory.maxWidth = n),
                  i && (r.video.mandatory.maxHeight = i),
                  e.navigator.mediaDevices.getUserMedia(r)
                );
              });
            })
          : console.error(
              "shimGetDisplayMedia: getSourceId argument is not a function",
            )));
  }
  function j(e) {
    e.MediaStream = e.MediaStream || e.webkitMediaStream;
  }
  function A(e) {
    if (
      "object" == typeof e &&
      e.RTCPeerConnection &&
      !("ontrack" in e.RTCPeerConnection.prototype)
    ) {
      Object.defineProperty(e.RTCPeerConnection.prototype, "ontrack", {
        get: function () {
          return this._ontrack;
        },
        set: function (e) {
          this._ontrack && this.removeEventListener("track", this._ontrack),
            this.addEventListener("track", (this._ontrack = e));
        },
        enumerable: !0,
        configurable: !0,
      });
      var t = e.RTCPeerConnection.prototype.setRemoteDescription;
      e.RTCPeerConnection.prototype.setRemoteDescription = function () {
        if (!this._ontrackpoly) {
          var r = this;
          (this._ontrackpoly = function (t) {
            var n = r;
            t.stream.addEventListener("addtrack", function (r) {
              var i;
              i = e.RTCPeerConnection.prototype.getReceivers
                ? n.getReceivers().find(function (e) {
                    return e.track && e.track.id === r.track.id;
                  })
                : { track: r.track };
              var o = new Event("track");
              (o.track = r.track),
                (o.receiver = i),
                (o.transceiver = { receiver: i }),
                (o.streams = [t.stream]),
                n.dispatchEvent(o);
            }),
              t.stream.getTracks().forEach(function (r) {
                var i;
                i = e.RTCPeerConnection.prototype.getReceivers
                  ? n.getReceivers().find(function (e) {
                      return e.track && e.track.id === r.id;
                    })
                  : { track: r };
                var o = new Event("track");
                (o.track = r),
                  (o.receiver = i),
                  (o.transceiver = { receiver: i }),
                  (o.streams = [t.stream]),
                  n.dispatchEvent(o);
              });
          }),
            this.addEventListener("addstream", this._ontrackpoly);
        }
        return t.apply(this, arguments);
      };
    } else
      C(e, "track", function (e) {
        return (
          e.transceiver ||
            Object.defineProperty(e, "transceiver", {
              value: { receiver: e.receiver },
            }),
          e
        );
      });
  }
  function L(e) {
    if (
      "object" == typeof e &&
      e.RTCPeerConnection &&
      !("getSenders" in e.RTCPeerConnection.prototype) &&
      "createDTMFSender" in e.RTCPeerConnection.prototype
    ) {
      var t = function (e, t) {
        return {
          track: t,
          get dtmf() {
            return (
              void 0 === this._dtmf &&
                ("audio" === t.kind
                  ? (this._dtmf = e.createDTMFSender(t))
                  : (this._dtmf = null)),
              this._dtmf
            );
          },
          _pc: e,
        };
      };
      if (!e.RTCPeerConnection.prototype.getSenders) {
        e.RTCPeerConnection.prototype.getSenders = function () {
          return (this._senders = this._senders || []), this._senders.slice();
        };
        var r = e.RTCPeerConnection.prototype.addTrack;
        e.RTCPeerConnection.prototype.addTrack = function (e, n) {
          var i = r.apply(this, arguments);
          return i || ((i = t(this, e)), this._senders.push(i)), i;
        };
        var n = e.RTCPeerConnection.prototype.removeTrack;
        e.RTCPeerConnection.prototype.removeTrack = function (e) {
          n.apply(this, arguments);
          var t = this._senders.indexOf(e);
          -1 !== t && this._senders.splice(t, 1);
        };
      }
      var i = e.RTCPeerConnection.prototype.addStream;
      e.RTCPeerConnection.prototype.addStream = function (e) {
        var r = this;
        (this._senders = this._senders || []),
          i.apply(this, [e]),
          e.getTracks().forEach(function (e) {
            r._senders.push(t(r, e));
          });
      };
      var o = e.RTCPeerConnection.prototype.removeStream;
      e.RTCPeerConnection.prototype.removeStream = function (e) {
        var t = this;
        (this._senders = this._senders || []),
          o.apply(this, [e]),
          e.getTracks().forEach(function (e) {
            var r = t._senders.find(function (t) {
              return t.track === e;
            });
            r && t._senders.splice(t._senders.indexOf(r), 1);
          });
      };
    } else if (
      "object" == typeof e &&
      e.RTCPeerConnection &&
      "getSenders" in e.RTCPeerConnection.prototype &&
      "createDTMFSender" in e.RTCPeerConnection.prototype &&
      e.RTCRtpSender &&
      !("dtmf" in e.RTCRtpSender.prototype)
    ) {
      var a = e.RTCPeerConnection.prototype.getSenders;
      (e.RTCPeerConnection.prototype.getSenders = function () {
        var e = this,
          t = a.apply(this, []);
        return (
          t.forEach(function (t) {
            return (t._pc = e);
          }),
          t
        );
      }),
        Object.defineProperty(e.RTCRtpSender.prototype, "dtmf", {
          get: function () {
            return (
              void 0 === this._dtmf &&
                ("audio" === this.track.kind
                  ? (this._dtmf = this._pc.createDTMFSender(this.track))
                  : (this._dtmf = null)),
              this._dtmf
            );
          },
        });
    }
  }
  function B(e) {
    if (e.RTCPeerConnection) {
      var t = e.RTCPeerConnection.prototype.getStats;
      e.RTCPeerConnection.prototype.getStats = function () {
        var e = this,
          r = s(arguments, 3),
          n = r[0],
          i = r[1],
          o = r[2];
        if (arguments.length > 0 && "function" == typeof n)
          return t.apply(this, arguments);
        if (
          0 === t.length &&
          (0 === arguments.length || "function" != typeof n)
        )
          return t.apply(this, []);
        var a = function (e) {
            var t = {};
            return (
              e.result().forEach(function (e) {
                var r = {
                  id: e.id,
                  timestamp: e.timestamp,
                  type:
                    {
                      localcandidate: "local-candidate",
                      remotecandidate: "remote-candidate",
                    }[e.type] || e.type,
                };
                e.names().forEach(function (t) {
                  r[t] = e.stat(t);
                }),
                  (t[r.id] = r);
              }),
              t
            );
          },
          c = function (e) {
            return new Map(
              Object.keys(e).map(function (t) {
                return [t, e[t]];
              }),
            );
          };
        if (arguments.length >= 2) {
          var p = function (e) {
            i(c(a(e)));
          };
          return t.apply(this, [p, n]);
        }
        return new Promise(function (r, n) {
          t.apply(e, [
            function (e) {
              r(c(a(e)));
            },
            n,
          ]);
        }).then(i, o);
      };
    }
  }
  function N(e) {
    if (
      "object" == typeof e &&
      e.RTCPeerConnection &&
      e.RTCRtpSender &&
      e.RTCRtpReceiver
    ) {
      if (!("getStats" in e.RTCRtpSender.prototype)) {
        var t = e.RTCPeerConnection.prototype.getSenders;
        t &&
          (e.RTCPeerConnection.prototype.getSenders = function () {
            var e = this,
              r = t.apply(this, []);
            return (
              r.forEach(function (t) {
                return (t._pc = e);
              }),
              r
            );
          });
        var r = e.RTCPeerConnection.prototype.addTrack;
        r &&
          (e.RTCPeerConnection.prototype.addTrack = function () {
            var e = r.apply(this, arguments);
            return (e._pc = this), e;
          }),
          (e.RTCRtpSender.prototype.getStats = function () {
            var e = this;
            return this._pc.getStats().then(function (t) {
              return x(t, e.track, !0);
            });
          });
      }
      if (!("getStats" in e.RTCRtpReceiver.prototype)) {
        var n = e.RTCPeerConnection.prototype.getReceivers;
        n &&
          (e.RTCPeerConnection.prototype.getReceivers = function () {
            var e = this,
              t = n.apply(this, []);
            return (
              t.forEach(function (t) {
                return (t._pc = e);
              }),
              t
            );
          }),
          C(e, "track", function (e) {
            return (e.receiver._pc = e.srcElement), e;
          }),
          (e.RTCRtpReceiver.prototype.getStats = function () {
            var e = this;
            return this._pc.getStats().then(function (t) {
              return x(t, e.track, !1);
            });
          });
      }
      if (
        "getStats" in e.RTCRtpSender.prototype &&
        "getStats" in e.RTCRtpReceiver.prototype
      ) {
        var i = e.RTCPeerConnection.prototype.getStats;
        e.RTCPeerConnection.prototype.getStats = function () {
          if (
            arguments.length > 0 &&
            arguments[0] instanceof e.MediaStreamTrack
          ) {
            var t,
              r,
              n,
              o = arguments[0];
            return (
              this.getSenders().forEach(function (e) {
                e.track === o && (t ? (n = !0) : (t = e));
              }),
              this.getReceivers().forEach(function (e) {
                return e.track === o && (r ? (n = !0) : (r = e)), e.track === o;
              }),
              n || (t && r)
                ? Promise.reject(
                    new DOMException(
                      "There are more than one sender or receiver for the track.",
                      "InvalidAccessError",
                    ),
                  )
                : t
                  ? t.getStats()
                  : r
                    ? r.getStats()
                    : Promise.reject(
                        new DOMException(
                          "There is no sender or receiver for the track.",
                          "InvalidAccessError",
                        ),
                      )
            );
          }
          return i.apply(this, arguments);
        };
      }
    }
  }
  function F(e) {
    e.RTCPeerConnection.prototype.getLocalStreams = function () {
      var e = this;
      return (
        (this._shimmedLocalStreams = this._shimmedLocalStreams || {}),
        Object.keys(this._shimmedLocalStreams).map(function (t) {
          return e._shimmedLocalStreams[t][0];
        })
      );
    };
    var t = e.RTCPeerConnection.prototype.addTrack;
    e.RTCPeerConnection.prototype.addTrack = function (e, r) {
      if (!r) return t.apply(this, arguments);
      this._shimmedLocalStreams = this._shimmedLocalStreams || {};
      var n = t.apply(this, arguments);
      return (
        this._shimmedLocalStreams[r.id]
          ? -1 === this._shimmedLocalStreams[r.id].indexOf(n) &&
            this._shimmedLocalStreams[r.id].push(n)
          : (this._shimmedLocalStreams[r.id] = [r, n]),
        n
      );
    };
    var r = e.RTCPeerConnection.prototype.addStream;
    e.RTCPeerConnection.prototype.addStream = function (e) {
      var t = this;
      (this._shimmedLocalStreams = this._shimmedLocalStreams || {}),
        e.getTracks().forEach(function (e) {
          if (
            t.getSenders().find(function (t) {
              return t.track === e;
            })
          )
            throw new DOMException(
              "Track already exists.",
              "InvalidAccessError",
            );
        });
      var n = this.getSenders();
      r.apply(this, arguments);
      var i = this.getSenders().filter(function (e) {
        return -1 === n.indexOf(e);
      });
      this._shimmedLocalStreams[e.id] = [e].concat(i);
    };
    var n = e.RTCPeerConnection.prototype.removeStream;
    e.RTCPeerConnection.prototype.removeStream = function (e) {
      return (
        (this._shimmedLocalStreams = this._shimmedLocalStreams || {}),
        delete this._shimmedLocalStreams[e.id],
        n.apply(this, arguments)
      );
    };
    var i = e.RTCPeerConnection.prototype.removeTrack;
    e.RTCPeerConnection.prototype.removeTrack = function (e) {
      var t = this;
      return (
        (this._shimmedLocalStreams = this._shimmedLocalStreams || {}),
        e &&
          Object.keys(this._shimmedLocalStreams).forEach(function (r) {
            var n = t._shimmedLocalStreams[r].indexOf(e);
            -1 !== n && t._shimmedLocalStreams[r].splice(n, 1),
              1 === t._shimmedLocalStreams[r].length &&
                delete t._shimmedLocalStreams[r];
          }),
        i.apply(this, arguments)
      );
    };
  }
  function U(e, t) {
    var r = function (e, t) {
        var r = t.sdp;
        return (
          Object.keys(e._reverseStreams || []).forEach(function (t) {
            var n = e._reverseStreams[t],
              i = e._streams[n.id];
            r = r.replace(new RegExp(i.id, "g"), n.id);
          }),
          new RTCSessionDescription({ type: t.type, sdp: r })
        );
      },
      n = function (e, t) {
        var r = t.sdp;
        return (
          Object.keys(e._reverseStreams || []).forEach(function (t) {
            var n = e._reverseStreams[t],
              i = e._streams[n.id];
            r = r.replace(new RegExp(n.id, "g"), i.id);
          }),
          new RTCSessionDescription({ type: t.type, sdp: r })
        );
      };
    if (e.RTCPeerConnection) {
      if (e.RTCPeerConnection.prototype.addTrack && t.version >= 65)
        return F(e);
      var i = e.RTCPeerConnection.prototype.getLocalStreams;
      e.RTCPeerConnection.prototype.getLocalStreams = function () {
        var e = this,
          t = i.apply(this);
        return (
          (this._reverseStreams = this._reverseStreams || {}),
          t.map(function (t) {
            return e._reverseStreams[t.id];
          })
        );
      };
      var a = e.RTCPeerConnection.prototype.addStream;
      e.RTCPeerConnection.prototype.addStream = function (t) {
        var r = this;
        if (
          ((this._streams = this._streams || {}),
          (this._reverseStreams = this._reverseStreams || {}),
          t.getTracks().forEach(function (e) {
            if (
              r.getSenders().find(function (t) {
                return t.track === e;
              })
            )
              throw new DOMException(
                "Track already exists.",
                "InvalidAccessError",
              );
          }),
          !this._reverseStreams[t.id])
        ) {
          var n = new e.MediaStream(t.getTracks());
          (this._streams[t.id] = n), (this._reverseStreams[n.id] = t), (t = n);
        }
        a.apply(this, [t]);
      };
      var s = e.RTCPeerConnection.prototype.removeStream;
      (e.RTCPeerConnection.prototype.removeStream = function (e) {
        (this._streams = this._streams || {}),
          (this._reverseStreams = this._reverseStreams || {}),
          s.apply(this, [this._streams[e.id] || e]),
          delete this._reverseStreams[
            this._streams[e.id] ? this._streams[e.id].id : e.id
          ],
          delete this._streams[e.id];
      }),
        (e.RTCPeerConnection.prototype.addTrack = function (t, r) {
          if ("closed" === this.signalingState)
            throw new DOMException(
              "The RTCPeerConnection's signalingState is 'closed'.",
              "InvalidStateError",
            );
          var n = [].slice.call(arguments, 1);
          if (
            1 !== n.length ||
            !n[0].getTracks().find(function (e) {
              return e === t;
            })
          )
            throw new DOMException(
              "The adapter.js addTrack polyfill only supports a single  stream which is associated with the specified track.",
              "NotSupportedError",
            );
          var i = this.getSenders().find(function (e) {
            return e.track === t;
          });
          if (i)
            throw new DOMException(
              "Track already exists.",
              "InvalidAccessError",
            );
          (this._streams = this._streams || {}),
            (this._reverseStreams = this._reverseStreams || {});
          var o = this._streams[r.id];
          if (o) {
            var a = this;
            o.addTrack(t),
              Promise.resolve().then(function () {
                a.dispatchEvent(new Event("negotiationneeded"));
              });
          } else {
            var s = new e.MediaStream([t]);
            (this._streams[r.id] = s),
              (this._reverseStreams[s.id] = r),
              this.addStream(s);
          }
          return this.getSenders().find(function (e) {
            return e.track === t;
          });
        }),
        ["createOffer", "createAnswer"].forEach(function (t) {
          var n = e.RTCPeerConnection.prototype[t],
            i = o({}, t, function () {
              var e = this,
                t = arguments,
                i = arguments.length && "function" == typeof arguments[0];
              return i
                ? n.apply(this, [
                    function (n) {
                      var i = r(e, n);
                      t[0].apply(null, [i]);
                    },
                    function (e) {
                      t[1] && t[1].apply(null, e);
                    },
                    arguments[2],
                  ])
                : n.apply(this, arguments).then(function (t) {
                    return r(e, t);
                  });
            });
          e.RTCPeerConnection.prototype[t] = i[t];
        });
      var c = e.RTCPeerConnection.prototype.setLocalDescription;
      e.RTCPeerConnection.prototype.setLocalDescription = function () {
        return arguments.length && arguments[0].type
          ? ((arguments[0] = n(this, arguments[0])), c.apply(this, arguments))
          : c.apply(this, arguments);
      };
      var p = Object.getOwnPropertyDescriptor(
        e.RTCPeerConnection.prototype,
        "localDescription",
      );
      Object.defineProperty(e.RTCPeerConnection.prototype, "localDescription", {
        get: function () {
          var e = p.get.apply(this);
          return "" === e.type ? e : r(this, e);
        },
      }),
        (e.RTCPeerConnection.prototype.removeTrack = function (e) {
          var t,
            r = this;
          if ("closed" === this.signalingState)
            throw new DOMException(
              "The RTCPeerConnection's signalingState is 'closed'.",
              "InvalidStateError",
            );
          if (!e._pc)
            throw new DOMException(
              "Argument 1 of RTCPeerConnection.removeTrack does not implement interface RTCRtpSender.",
              "TypeError",
            );
          if (!(e._pc === this))
            throw new DOMException(
              "Sender was not created by this connection.",
              "InvalidAccessError",
            );
          (this._streams = this._streams || {}),
            Object.keys(this._streams).forEach(function (n) {
              r._streams[n].getTracks().find(function (t) {
                return e.track === t;
              }) && (t = r._streams[n]);
            }),
            t &&
              (1 === t.getTracks().length
                ? this.removeStream(this._reverseStreams[t.id])
                : t.removeTrack(e.track),
              this.dispatchEvent(new Event("negotiationneeded")));
        });
    }
  }
  function z(e, t) {
    !e.RTCPeerConnection &&
      e.webkitRTCPeerConnection &&
      (e.RTCPeerConnection = e.webkitRTCPeerConnection),
      e.RTCPeerConnection &&
        t.version < 53 &&
        [
          "setLocalDescription",
          "setRemoteDescription",
          "addIceCandidate",
        ].forEach(function (t) {
          var r = e.RTCPeerConnection.prototype[t],
            n = o({}, t, function () {
              return (
                (arguments[0] = new (
                  "addIceCandidate" === t
                    ? e.RTCIceCandidate
                    : e.RTCSessionDescription
                )(arguments[0])),
                r.apply(this, arguments)
              );
            });
          e.RTCPeerConnection.prototype[t] = n[t];
        });
  }
  function G(e, t) {
    C(e, "negotiationneeded", function (e) {
      var r = e.target;
      if (
        !(
          t.version < 72 ||
          (r.getConfiguration && "plan-b" === r.getConfiguration().sdpSemantics)
        ) ||
        "stable" === r.signalingState
      )
        return e;
    });
  }
  var V = {};
  t(V, "shimPeerConnection", function () {
    return ee;
  }),
    t(V, "shimReplaceTrack", function () {
      return te;
    }),
    t(V, "shimGetUserMedia", function () {
      return Z;
    }),
    t(V, "shimGetDisplayMedia", function () {
      return $;
    });
  var J,
    W = {},
    H = {};
  function K(e, t, r, n, i) {
    var o = W.writeRtpDescription(e.kind, t);
    if (
      ((o += W.writeIceParameters(e.iceGatherer.getLocalParameters())),
      (o += W.writeDtlsParameters(
        e.dtlsTransport.getLocalParameters(),
        "offer" === r ? "actpass" : i || "active",
      )),
      (o += "a=mid:" + e.mid + "\r\n"),
      e.rtpSender && e.rtpReceiver
        ? (o += "a=sendrecv\r\n")
        : e.rtpSender
          ? (o += "a=sendonly\r\n")
          : e.rtpReceiver
            ? (o += "a=recvonly\r\n")
            : (o += "a=inactive\r\n"),
      e.rtpSender)
    ) {
      var a = e.rtpSender._initialTrackId || e.rtpSender.track.id;
      e.rtpSender._initialTrackId = a;
      var s = "msid:" + (n ? n.id : "-") + " " + a + "\r\n";
      (o += "a=" + s),
        (o += "a=ssrc:" + e.sendEncodingParameters[0].ssrc + " " + s),
        e.sendEncodingParameters[0].rtx &&
          ((o += "a=ssrc:" + e.sendEncodingParameters[0].rtx.ssrc + " " + s),
          (o +=
            "a=ssrc-group:FID " +
            e.sendEncodingParameters[0].ssrc +
            " " +
            e.sendEncodingParameters[0].rtx.ssrc +
            "\r\n"));
    }
    return (
      (o +=
        "a=ssrc:" +
        e.sendEncodingParameters[0].ssrc +
        " cname:" +
        W.localCName +
        "\r\n"),
      e.rtpSender &&
        e.sendEncodingParameters[0].rtx &&
        (o +=
          "a=ssrc:" +
          e.sendEncodingParameters[0].rtx.ssrc +
          " cname:" +
          W.localCName +
          "\r\n"),
      o
    );
  }
  function Y(e, t) {
    var r = { codecs: [], headerExtensions: [], fecMechanisms: [] },
      n = function (e, t) {
        e = parseInt(e, 10);
        for (var r = 0; r < t.length; r++)
          if (t[r].payloadType === e || t[r].preferredPayloadType === e)
            return t[r];
      },
      i = function (e, t, r, i) {
        var o = n(e.parameters.apt, r),
          a = n(t.parameters.apt, i);
        return o && a && o.name.toLowerCase() === a.name.toLowerCase();
      };
    return (
      e.codecs.forEach(function (n) {
        for (var o = 0; o < t.codecs.length; o++) {
          var a = t.codecs[o];
          if (
            n.name.toLowerCase() === a.name.toLowerCase() &&
            n.clockRate === a.clockRate
          ) {
            if (
              "rtx" === n.name.toLowerCase() &&
              n.parameters &&
              a.parameters.apt &&
              !i(n, a, e.codecs, t.codecs)
            )
              continue;
            ((a = JSON.parse(JSON.stringify(a))).numChannels = Math.min(
              n.numChannels,
              a.numChannels,
            )),
              r.codecs.push(a),
              (a.rtcpFeedback = a.rtcpFeedback.filter(function (e) {
                for (var t = 0; t < n.rtcpFeedback.length; t++)
                  if (
                    n.rtcpFeedback[t].type === e.type &&
                    n.rtcpFeedback[t].parameter === e.parameter
                  )
                    return !0;
                return !1;
              }));
            break;
          }
        }
      }),
      e.headerExtensions.forEach(function (e) {
        for (var n = 0; n < t.headerExtensions.length; n++) {
          var i = t.headerExtensions[n];
          if (e.uri === i.uri) {
            r.headerExtensions.push(i);
            break;
          }
        }
      }),
      r
    );
  }
  function q(e, t, r) {
    return (
      -1 !==
      {
        offer: {
          setLocalDescription: ["stable", "have-local-offer"],
          setRemoteDescription: ["stable", "have-remote-offer"],
        },
        answer: {
          setLocalDescription: ["have-remote-offer", "have-local-pranswer"],
          setRemoteDescription: ["have-local-offer", "have-remote-pranswer"],
        },
      }[t][e].indexOf(r)
    );
  }
  function Q(e, t) {
    var r = e.getRemoteCandidates().find(function (e) {
      return (
        t.foundation === e.foundation &&
        t.ip === e.ip &&
        t.port === e.port &&
        t.priority === e.priority &&
        t.protocol === e.protocol &&
        t.type === e.type
      );
    });
    return r || e.addRemoteCandidate(t), !r;
  }
  function X(e, t) {
    var r = new Error(t);
    return (
      (r.name = e),
      (r.code = {
        NotSupportedError: 9,
        InvalidStateError: 11,
        InvalidAccessError: 15,
        TypeError: void 0,
        OperationError: void 0,
      }[e]),
      r
    );
  }
  function Z(e) {
    var t = e && e.navigator,
      r = t.mediaDevices.getUserMedia.bind(t.mediaDevices);
    t.mediaDevices.getUserMedia = function (e) {
      return r(e).catch(function (e) {
        return Promise.reject(
          (function (e) {
            return {
              name:
                { PermissionDeniedError: "NotAllowedError" }[e.name] || e.name,
              message: e.message,
              constraint: e.constraint,
              toString: function () {
                return this.name;
              },
            };
          })(e),
        );
      });
    };
  }
  function $(e) {
    "getDisplayMedia" in e.navigator &&
      e.navigator.mediaDevices &&
      ((e.navigator.mediaDevices &&
        "getDisplayMedia" in e.navigator.mediaDevices) ||
        (e.navigator.mediaDevices.getDisplayMedia =
          e.navigator.getDisplayMedia.bind(e.navigator)));
  }
  function ee(t, r) {
    if (
      t.RTCIceGatherer &&
      (t.RTCIceCandidate ||
        (t.RTCIceCandidate = function (e) {
          return e;
        }),
      t.RTCSessionDescription ||
        (t.RTCSessionDescription = function (e) {
          return e;
        }),
      r.version < 15025)
    ) {
      var n = Object.getOwnPropertyDescriptor(
        t.MediaStreamTrack.prototype,
        "enabled",
      );
      Object.defineProperty(t.MediaStreamTrack.prototype, "enabled", {
        set: function (e) {
          n.set.call(this, e);
          var t = new Event("enabled");
          (t.enabled = e), this.dispatchEvent(t);
        },
      });
    }
    t.RTCRtpSender &&
      !("dtmf" in t.RTCRtpSender.prototype) &&
      Object.defineProperty(t.RTCRtpSender.prototype, "dtmf", {
        get: function () {
          return (
            void 0 === this._dtmf &&
              ("audio" === this.track.kind
                ? (this._dtmf = new t.RTCDtmfSender(this))
                : "video" === this.track.kind && (this._dtmf = null)),
            this._dtmf
          );
        },
      }),
      t.RTCDtmfSender &&
        !t.RTCDTMFSender &&
        (t.RTCDTMFSender = t.RTCDtmfSender);
    var i = e(J)(t, r.version);
    (t.RTCPeerConnection = function (e) {
      var t, n;
      return (
        e &&
          e.iceServers &&
          ((e.iceServers =
            ((t = e.iceServers),
            r.version,
            (n = !1),
            (t = JSON.parse(JSON.stringify(t))).filter(function (e) {
              if (e && (e.urls || e.url)) {
                var t = e.urls || e.url;
                e.url && !e.urls && k("RTCIceServer.url", "RTCIceServer.urls");
                var r = "string" == typeof t;
                return (
                  r && (t = [t]),
                  (t = t.filter(function (e) {
                    if (0 === e.indexOf("stun:")) return !1;
                    var t =
                      e.startsWith("turn") &&
                      !e.startsWith("turn:[") &&
                      e.includes("transport=udp");
                    return t && !n ? ((n = !0), !0) : t && !n;
                  })),
                  delete e.url,
                  (e.urls = r ? t[0] : t),
                  !!t.length
                );
              }
            }))),
          T("ICE servers after filtering:", e.iceServers)),
        new i(e)
      );
    }),
      (t.RTCPeerConnection.prototype = i.prototype);
  }
  function te(e) {
    e.RTCRtpSender &&
      !("replaceTrack" in e.RTCRtpSender.prototype) &&
      (e.RTCRtpSender.prototype.replaceTrack =
        e.RTCRtpSender.prototype.setTrack);
  }
  (H.generateIdentifier = function () {
    return Math.random().toString(36).substr(2, 10);
  }),
    (H.localCName = H.generateIdentifier()),
    (H.splitLines = function (e) {
      return e
        .trim()
        .split("\n")
        .map(function (e) {
          return e.trim();
        });
    }),
    (H.splitSections = function (e) {
      return e.split("\nm=").map(function (e, t) {
        return (t > 0 ? "m=" + e : e).trim() + "\r\n";
      });
    }),
    (H.getDescription = function (e) {
      var t = H.splitSections(e);
      return t && t[0];
    }),
    (H.getMediaSections = function (e) {
      var t = H.splitSections(e);
      return t.shift(), t;
    }),
    (H.matchPrefix = function (e, t) {
      return H.splitLines(e).filter(function (e) {
        return 0 === e.indexOf(t);
      });
    }),
    (H.parseCandidate = function (e) {
      for (
        var t,
          r = {
            foundation: (t =
              0 === e.indexOf("a=candidate:")
                ? e.substring(12).split(" ")
                : e.substring(10).split(" "))[0],
            component: parseInt(t[1], 10),
            protocol: t[2].toLowerCase(),
            priority: parseInt(t[3], 10),
            ip: t[4],
            address: t[4],
            port: parseInt(t[5], 10),
            type: t[7],
          },
          n = 8;
        n < t.length;
        n += 2
      )
        switch (t[n]) {
          case "raddr":
            r.relatedAddress = t[n + 1];
            break;
          case "rport":
            r.relatedPort = parseInt(t[n + 1], 10);
            break;
          case "tcptype":
            r.tcpType = t[n + 1];
            break;
          case "ufrag":
            (r.ufrag = t[n + 1]), (r.usernameFragment = t[n + 1]);
            break;
          default:
            r[t[n]] = t[n + 1];
        }
      return r;
    }),
    (H.writeCandidate = function (e) {
      var t = [];
      t.push(e.foundation),
        t.push(e.component),
        t.push(e.protocol.toUpperCase()),
        t.push(e.priority),
        t.push(e.address || e.ip),
        t.push(e.port);
      var r = e.type;
      return (
        t.push("typ"),
        t.push(r),
        "host" !== r &&
          e.relatedAddress &&
          e.relatedPort &&
          (t.push("raddr"),
          t.push(e.relatedAddress),
          t.push("rport"),
          t.push(e.relatedPort)),
        e.tcpType &&
          "tcp" === e.protocol.toLowerCase() &&
          (t.push("tcptype"), t.push(e.tcpType)),
        (e.usernameFragment || e.ufrag) &&
          (t.push("ufrag"), t.push(e.usernameFragment || e.ufrag)),
        "candidate:" + t.join(" ")
      );
    }),
    (H.parseIceOptions = function (e) {
      return e.substr(14).split(" ");
    }),
    (H.parseRtpMap = function (e) {
      var t = e.substr(9).split(" "),
        r = { payloadType: parseInt(t.shift(), 10) };
      return (
        (t = t[0].split("/")),
        (r.name = t[0]),
        (r.clockRate = parseInt(t[1], 10)),
        (r.channels = 3 === t.length ? parseInt(t[2], 10) : 1),
        (r.numChannels = r.channels),
        r
      );
    }),
    (H.writeRtpMap = function (e) {
      var t = e.payloadType;
      void 0 !== e.preferredPayloadType && (t = e.preferredPayloadType);
      var r = e.channels || e.numChannels || 1;
      return (
        "a=rtpmap:" +
        t +
        " " +
        e.name +
        "/" +
        e.clockRate +
        (1 !== r ? "/" + r : "") +
        "\r\n"
      );
    }),
    (H.parseExtmap = function (e) {
      var t = e.substr(9).split(" ");
      return {
        id: parseInt(t[0], 10),
        direction: t[0].indexOf("/") > 0 ? t[0].split("/")[1] : "sendrecv",
        uri: t[1],
      };
    }),
    (H.writeExtmap = function (e) {
      return (
        "a=extmap:" +
        (e.id || e.preferredId) +
        (e.direction && "sendrecv" !== e.direction ? "/" + e.direction : "") +
        " " +
        e.uri +
        "\r\n"
      );
    }),
    (H.parseFmtp = function (e) {
      for (
        var t, r = {}, n = e.substr(e.indexOf(" ") + 1).split(";"), i = 0;
        i < n.length;
        i++
      )
        r[(t = n[i].trim().split("="))[0].trim()] = t[1];
      return r;
    }),
    (H.writeFmtp = function (e) {
      var t = "",
        r = e.payloadType;
      if (
        (void 0 !== e.preferredPayloadType && (r = e.preferredPayloadType),
        e.parameters && Object.keys(e.parameters).length)
      ) {
        var n = [];
        Object.keys(e.parameters).forEach(function (t) {
          e.parameters[t] ? n.push(t + "=" + e.parameters[t]) : n.push(t);
        }),
          (t += "a=fmtp:" + r + " " + n.join(";") + "\r\n");
      }
      return t;
    }),
    (H.parseRtcpFb = function (e) {
      var t = e.substr(e.indexOf(" ") + 1).split(" ");
      return { type: t.shift(), parameter: t.join(" ") };
    }),
    (H.writeRtcpFb = function (e) {
      var t = "",
        r = e.payloadType;
      return (
        void 0 !== e.preferredPayloadType && (r = e.preferredPayloadType),
        e.rtcpFeedback &&
          e.rtcpFeedback.length &&
          e.rtcpFeedback.forEach(function (e) {
            t +=
              "a=rtcp-fb:" +
              r +
              " " +
              e.type +
              (e.parameter && e.parameter.length ? " " + e.parameter : "") +
              "\r\n";
          }),
        t
      );
    }),
    (H.parseSsrcMedia = function (e) {
      var t = e.indexOf(" "),
        r = { ssrc: parseInt(e.substr(7, t - 7), 10) },
        n = e.indexOf(":", t);
      return (
        n > -1
          ? ((r.attribute = e.substr(t + 1, n - t - 1)),
            (r.value = e.substr(n + 1)))
          : (r.attribute = e.substr(t + 1)),
        r
      );
    }),
    (H.parseSsrcGroup = function (e) {
      var t = e.substr(13).split(" ");
      return {
        semantics: t.shift(),
        ssrcs: t.map(function (e) {
          return parseInt(e, 10);
        }),
      };
    }),
    (H.getMid = function (e) {
      var t = H.matchPrefix(e, "a=mid:")[0];
      if (t) return t.substr(6);
    }),
    (H.parseFingerprint = function (e) {
      var t = e.substr(14).split(" ");
      return { algorithm: t[0].toLowerCase(), value: t[1] };
    }),
    (H.getDtlsParameters = function (e, t) {
      return {
        role: "auto",
        fingerprints: H.matchPrefix(e + t, "a=fingerprint:").map(
          H.parseFingerprint,
        ),
      };
    }),
    (H.writeDtlsParameters = function (e, t) {
      var r = "a=setup:" + t + "\r\n";
      return (
        e.fingerprints.forEach(function (e) {
          r += "a=fingerprint:" + e.algorithm + " " + e.value + "\r\n";
        }),
        r
      );
    }),
    (H.parseCryptoLine = function (e) {
      var t = e.substr(9).split(" ");
      return {
        tag: parseInt(t[0], 10),
        cryptoSuite: t[1],
        keyParams: t[2],
        sessionParams: t.slice(3),
      };
    }),
    (H.writeCryptoLine = function (e) {
      return (
        "a=crypto:" +
        e.tag +
        " " +
        e.cryptoSuite +
        " " +
        ("object" == typeof e.keyParams
          ? H.writeCryptoKeyParams(e.keyParams)
          : e.keyParams) +
        (e.sessionParams ? " " + e.sessionParams.join(" ") : "") +
        "\r\n"
      );
    }),
    (H.parseCryptoKeyParams = function (e) {
      if (0 !== e.indexOf("inline:")) return null;
      var t = e.substr(7).split("|");
      return {
        keyMethod: "inline",
        keySalt: t[0],
        lifeTime: t[1],
        mkiValue: t[2] ? t[2].split(":")[0] : void 0,
        mkiLength: t[2] ? t[2].split(":")[1] : void 0,
      };
    }),
    (H.writeCryptoKeyParams = function (e) {
      return (
        e.keyMethod +
        ":" +
        e.keySalt +
        (e.lifeTime ? "|" + e.lifeTime : "") +
        (e.mkiValue && e.mkiLength ? "|" + e.mkiValue + ":" + e.mkiLength : "")
      );
    }),
    (H.getCryptoParameters = function (e, t) {
      return H.matchPrefix(e + t, "a=crypto:").map(H.parseCryptoLine);
    }),
    (H.getIceParameters = function (e, t) {
      var r = H.matchPrefix(e + t, "a=ice-ufrag:")[0],
        n = H.matchPrefix(e + t, "a=ice-pwd:")[0];
      return r && n
        ? { usernameFragment: r.substr(12), password: n.substr(10) }
        : null;
    }),
    (H.writeIceParameters = function (e) {
      return (
        "a=ice-ufrag:" +
        e.usernameFragment +
        "\r\na=ice-pwd:" +
        e.password +
        "\r\n"
      );
    }),
    (H.parseRtpParameters = function (e) {
      for (
        var t = {
            codecs: [],
            headerExtensions: [],
            fecMechanisms: [],
            rtcp: [],
          },
          r = H.splitLines(e)[0].split(" "),
          n = 3;
        n < r.length;
        n++
      ) {
        var i = r[n],
          o = H.matchPrefix(e, "a=rtpmap:" + i + " ")[0];
        if (o) {
          var a = H.parseRtpMap(o),
            s = H.matchPrefix(e, "a=fmtp:" + i + " ");
          switch (
            ((a.parameters = s.length ? H.parseFmtp(s[0]) : {}),
            (a.rtcpFeedback = H.matchPrefix(e, "a=rtcp-fb:" + i + " ").map(
              H.parseRtcpFb,
            )),
            t.codecs.push(a),
            a.name.toUpperCase())
          ) {
            case "RED":
            case "ULPFEC":
              t.fecMechanisms.push(a.name.toUpperCase());
          }
        }
      }
      return (
        H.matchPrefix(e, "a=extmap:").forEach(function (e) {
          t.headerExtensions.push(H.parseExtmap(e));
        }),
        t
      );
    }),
    (H.writeRtpDescription = function (e, t) {
      var r = "";
      (r += "m=" + e + " "),
        (r += t.codecs.length > 0 ? "9" : "0"),
        (r += " UDP/TLS/RTP/SAVPF "),
        (r +=
          t.codecs
            .map(function (e) {
              return void 0 !== e.preferredPayloadType
                ? e.preferredPayloadType
                : e.payloadType;
            })
            .join(" ") + "\r\n"),
        (r += "c=IN IP4 0.0.0.0\r\n"),
        (r += "a=rtcp:9 IN IP4 0.0.0.0\r\n"),
        t.codecs.forEach(function (e) {
          (r += H.writeRtpMap(e)),
            (r += H.writeFmtp(e)),
            (r += H.writeRtcpFb(e));
        });
      var n = 0;
      return (
        t.codecs.forEach(function (e) {
          e.maxptime > n && (n = e.maxptime);
        }),
        n > 0 && (r += "a=maxptime:" + n + "\r\n"),
        (r += "a=rtcp-mux\r\n"),
        t.headerExtensions &&
          t.headerExtensions.forEach(function (e) {
            r += H.writeExtmap(e);
          }),
        r
      );
    }),
    (H.parseRtpEncodingParameters = function (e) {
      var t,
        r = [],
        n = H.parseRtpParameters(e),
        i = -1 !== n.fecMechanisms.indexOf("RED"),
        o = -1 !== n.fecMechanisms.indexOf("ULPFEC"),
        a = H.matchPrefix(e, "a=ssrc:")
          .map(function (e) {
            return H.parseSsrcMedia(e);
          })
          .filter(function (e) {
            return "cname" === e.attribute;
          }),
        s = a.length > 0 && a[0].ssrc,
        c = H.matchPrefix(e, "a=ssrc-group:FID").map(function (e) {
          return e
            .substr(17)
            .split(" ")
            .map(function (e) {
              return parseInt(e, 10);
            });
        });
      c.length > 0 && c[0].length > 1 && c[0][0] === s && (t = c[0][1]),
        n.codecs.forEach(function (e) {
          if ("RTX" === e.name.toUpperCase() && e.parameters.apt) {
            var n = {
              ssrc: s,
              codecPayloadType: parseInt(e.parameters.apt, 10),
            };
            s && t && (n.rtx = { ssrc: t }),
              r.push(n),
              i &&
                (((n = JSON.parse(JSON.stringify(n))).fec = {
                  ssrc: s,
                  mechanism: o ? "red+ulpfec" : "red",
                }),
                r.push(n));
          }
        }),
        0 === r.length && s && r.push({ ssrc: s });
      var p = H.matchPrefix(e, "b=");
      return (
        p.length &&
          ((p =
            0 === p[0].indexOf("b=TIAS:")
              ? parseInt(p[0].substr(7), 10)
              : 0 === p[0].indexOf("b=AS:")
                ? 950 * parseInt(p[0].substr(5), 10) - 16e3
                : void 0),
          r.forEach(function (e) {
            e.maxBitrate = p;
          })),
        r
      );
    }),
    (H.parseRtcpParameters = function (e) {
      var t = {},
        r = H.matchPrefix(e, "a=ssrc:")
          .map(function (e) {
            return H.parseSsrcMedia(e);
          })
          .filter(function (e) {
            return "cname" === e.attribute;
          })[0];
      r && ((t.cname = r.value), (t.ssrc = r.ssrc));
      var n = H.matchPrefix(e, "a=rtcp-rsize");
      (t.reducedSize = n.length > 0), (t.compound = 0 === n.length);
      var i = H.matchPrefix(e, "a=rtcp-mux");
      return (t.mux = i.length > 0), t;
    }),
    (H.parseMsid = function (e) {
      var t,
        r = H.matchPrefix(e, "a=msid:");
      if (1 === r.length)
        return { stream: (t = r[0].substr(7).split(" "))[0], track: t[1] };
      var n = H.matchPrefix(e, "a=ssrc:")
        .map(function (e) {
          return H.parseSsrcMedia(e);
        })
        .filter(function (e) {
          return "msid" === e.attribute;
        });
      return n.length > 0
        ? { stream: (t = n[0].value.split(" "))[0], track: t[1] }
        : void 0;
    }),
    (H.parseSctpDescription = function (e) {
      var t,
        r = H.parseMLine(e),
        n = H.matchPrefix(e, "a=max-message-size:");
      n.length > 0 && (t = parseInt(n[0].substr(19), 10)),
        isNaN(t) && (t = 65536);
      var i = H.matchPrefix(e, "a=sctp-port:");
      if (i.length > 0)
        return {
          port: parseInt(i[0].substr(12), 10),
          protocol: r.fmt,
          maxMessageSize: t,
        };
      if (H.matchPrefix(e, "a=sctpmap:").length > 0) {
        var o = H.matchPrefix(e, "a=sctpmap:")[0].substr(10).split(" ");
        return { port: parseInt(o[0], 10), protocol: o[1], maxMessageSize: t };
      }
    }),
    (H.writeSctpDescription = function (e, t) {
      var r = [];
      return (
        (r =
          "DTLS/SCTP" !== e.protocol
            ? [
                "m=" + e.kind + " 9 " + e.protocol + " " + t.protocol + "\r\n",
                "c=IN IP4 0.0.0.0\r\n",
                "a=sctp-port:" + t.port + "\r\n",
              ]
            : [
                "m=" + e.kind + " 9 " + e.protocol + " " + t.port + "\r\n",
                "c=IN IP4 0.0.0.0\r\n",
                "a=sctpmap:" + t.port + " " + t.protocol + " 65535\r\n",
              ]),
        void 0 !== t.maxMessageSize &&
          r.push("a=max-message-size:" + t.maxMessageSize + "\r\n"),
        r.join("")
      );
    }),
    (H.generateSessionId = function () {
      return Math.random().toString().substr(2, 21);
    }),
    (H.writeSessionBoilerplate = function (e, t, r) {
      var n = void 0 !== t ? t : 2;
      return (
        "v=0\r\no=" +
        (r || "thisisadapterortc") +
        " " +
        (e || H.generateSessionId()) +
        " " +
        n +
        " IN IP4 127.0.0.1\r\ns=-\r\nt=0 0\r\n"
      );
    }),
    (H.writeMediaSection = function (e, t, r, n) {
      var i = H.writeRtpDescription(e.kind, t);
      if (
        ((i += H.writeIceParameters(e.iceGatherer.getLocalParameters())),
        (i += H.writeDtlsParameters(
          e.dtlsTransport.getLocalParameters(),
          "offer" === r ? "actpass" : "active",
        )),
        (i += "a=mid:" + e.mid + "\r\n"),
        e.direction
          ? (i += "a=" + e.direction + "\r\n")
          : e.rtpSender && e.rtpReceiver
            ? (i += "a=sendrecv\r\n")
            : e.rtpSender
              ? (i += "a=sendonly\r\n")
              : e.rtpReceiver
                ? (i += "a=recvonly\r\n")
                : (i += "a=inactive\r\n"),
        e.rtpSender)
      ) {
        var o = "msid:" + n.id + " " + e.rtpSender.track.id + "\r\n";
        (i += "a=" + o),
          (i += "a=ssrc:" + e.sendEncodingParameters[0].ssrc + " " + o),
          e.sendEncodingParameters[0].rtx &&
            ((i += "a=ssrc:" + e.sendEncodingParameters[0].rtx.ssrc + " " + o),
            (i +=
              "a=ssrc-group:FID " +
              e.sendEncodingParameters[0].ssrc +
              " " +
              e.sendEncodingParameters[0].rtx.ssrc +
              "\r\n"));
      }
      return (
        (i +=
          "a=ssrc:" +
          e.sendEncodingParameters[0].ssrc +
          " cname:" +
          H.localCName +
          "\r\n"),
        e.rtpSender &&
          e.sendEncodingParameters[0].rtx &&
          (i +=
            "a=ssrc:" +
            e.sendEncodingParameters[0].rtx.ssrc +
            " cname:" +
            H.localCName +
            "\r\n"),
        i
      );
    }),
    (H.getDirection = function (e, t) {
      for (var r = H.splitLines(e), n = 0; n < r.length; n++)
        switch (r[n]) {
          case "a=sendrecv":
          case "a=sendonly":
          case "a=recvonly":
          case "a=inactive":
            return r[n].substr(2);
        }
      return t ? H.getDirection(t) : "sendrecv";
    }),
    (H.getKind = function (e) {
      return H.splitLines(e)[0].split(" ")[0].substr(2);
    }),
    (H.isRejected = function (e) {
      return "0" === e.split(" ", 2)[1];
    }),
    (H.parseMLine = function (e) {
      var t = H.splitLines(e)[0].substr(2).split(" ");
      return {
        kind: t[0],
        port: parseInt(t[1], 10),
        protocol: t[2],
        fmt: t.slice(3).join(" "),
      };
    }),
    (H.parseOLine = function (e) {
      var t = H.matchPrefix(e, "o=")[0].substr(2).split(" ");
      return {
        username: t[0],
        sessionId: t[1],
        sessionVersion: parseInt(t[2], 10),
        netType: t[3],
        addressType: t[4],
        address: t[5],
      };
    }),
    (H.isValidSDP = function (e) {
      if ("string" != typeof e || 0 === e.length) return !1;
      for (var t = H.splitLines(e), r = 0; r < t.length; r++)
        if (t[r].length < 2 || "=" !== t[r].charAt(1)) return !1;
      return !0;
    }),
    (W = H),
    (J = function (e, t) {
      var r = function (t, r) {
          r.addTrack(t),
            r.dispatchEvent(
              new e.MediaStreamTrackEvent("addtrack", { track: t }),
            );
        },
        n = function (t, r, n, i) {
          var o = new Event("track");
          (o.track = r),
            (o.receiver = n),
            (o.transceiver = { receiver: n }),
            (o.streams = i),
            e.setTimeout(function () {
              t._dispatchEvent("track", o);
            });
        },
        i = function (r) {
          var n = this,
            i = document.createDocumentFragment();
          if (
            ([
              "addEventListener",
              "removeEventListener",
              "dispatchEvent",
            ].forEach(function (e) {
              n[e] = i[e].bind(i);
            }),
            (this.canTrickleIceCandidates = null),
            (this.needNegotiation = !1),
            (this.localStreams = []),
            (this.remoteStreams = []),
            (this._localDescription = null),
            (this._remoteDescription = null),
            (this.signalingState = "stable"),
            (this.iceConnectionState = "new"),
            (this.connectionState = "new"),
            (this.iceGatheringState = "new"),
            (r = JSON.parse(JSON.stringify(r || {}))),
            (this.usingBundle = "max-bundle" === r.bundlePolicy),
            "negotiate" === r.rtcpMuxPolicy)
          )
            throw X(
              "NotSupportedError",
              "rtcpMuxPolicy 'negotiate' is not supported",
            );
          switch (
            (r.rtcpMuxPolicy || (r.rtcpMuxPolicy = "require"),
            r.iceTransportPolicy)
          ) {
            case "all":
            case "relay":
              break;
            default:
              r.iceTransportPolicy = "all";
          }
          switch (r.bundlePolicy) {
            case "balanced":
            case "max-compat":
            case "max-bundle":
              break;
            default:
              r.bundlePolicy = "balanced";
          }
          if (
            ((r.iceServers = (function (e, t) {
              var r = !1;
              return (e = JSON.parse(JSON.stringify(e))).filter(function (e) {
                if (e && (e.urls || e.url)) {
                  var n = e.urls || e.url;
                  e.url &&
                    !e.urls &&
                    console.warn(
                      "RTCIceServer.url is deprecated! Use urls instead.",
                    );
                  var i = "string" == typeof n;
                  return (
                    i && (n = [n]),
                    (n = n.filter(function (e) {
                      return 0 !== e.indexOf("turn:") ||
                        -1 === e.indexOf("transport=udp") ||
                        -1 !== e.indexOf("turn:[") ||
                        r
                        ? 0 === e.indexOf("stun:") &&
                            t >= 14393 &&
                            -1 === e.indexOf("?transport=udp")
                        : ((r = !0), !0);
                    })),
                    delete e.url,
                    (e.urls = i ? n[0] : n),
                    !!n.length
                  );
                }
              });
            })(r.iceServers || [], t)),
            (this._iceGatherers = []),
            r.iceCandidatePoolSize)
          )
            for (var o = r.iceCandidatePoolSize; o > 0; o--)
              this._iceGatherers.push(
                new e.RTCIceGatherer({
                  iceServers: r.iceServers,
                  gatherPolicy: r.iceTransportPolicy,
                }),
              );
          else r.iceCandidatePoolSize = 0;
          (this._config = r),
            (this.transceivers = []),
            (this._sdpSessionId = W.generateSessionId()),
            (this._sdpSessionVersion = 0),
            (this._dtlsRole = void 0),
            (this._isClosed = !1);
        };
      Object.defineProperty(i.prototype, "localDescription", {
        configurable: !0,
        get: function () {
          return this._localDescription;
        },
      }),
        Object.defineProperty(i.prototype, "remoteDescription", {
          configurable: !0,
          get: function () {
            return this._remoteDescription;
          },
        }),
        (i.prototype.onicecandidate = null),
        (i.prototype.onaddstream = null),
        (i.prototype.ontrack = null),
        (i.prototype.onremovestream = null),
        (i.prototype.onsignalingstatechange = null),
        (i.prototype.oniceconnectionstatechange = null),
        (i.prototype.onconnectionstatechange = null),
        (i.prototype.onicegatheringstatechange = null),
        (i.prototype.onnegotiationneeded = null),
        (i.prototype.ondatachannel = null),
        (i.prototype._dispatchEvent = function (e, t) {
          this._isClosed ||
            (this.dispatchEvent(t),
            "function" == typeof this["on" + e] && this["on" + e](t));
        }),
        (i.prototype._emitGatheringStateChange = function () {
          var e = new Event("icegatheringstatechange");
          this._dispatchEvent("icegatheringstatechange", e);
        }),
        (i.prototype.getConfiguration = function () {
          return this._config;
        }),
        (i.prototype.getLocalStreams = function () {
          return this.localStreams;
        }),
        (i.prototype.getRemoteStreams = function () {
          return this.remoteStreams;
        }),
        (i.prototype._createTransceiver = function (e, t) {
          var r = this.transceivers.length > 0,
            n = {
              track: null,
              iceGatherer: null,
              iceTransport: null,
              dtlsTransport: null,
              localCapabilities: null,
              remoteCapabilities: null,
              rtpSender: null,
              rtpReceiver: null,
              kind: e,
              mid: null,
              sendEncodingParameters: null,
              recvEncodingParameters: null,
              stream: null,
              associatedRemoteMediaStreams: [],
              wantReceive: !0,
            };
          if (this.usingBundle && r)
            (n.iceTransport = this.transceivers[0].iceTransport),
              (n.dtlsTransport = this.transceivers[0].dtlsTransport);
          else {
            var i = this._createIceAndDtlsTransports();
            (n.iceTransport = i.iceTransport),
              (n.dtlsTransport = i.dtlsTransport);
          }
          return t || this.transceivers.push(n), n;
        }),
        (i.prototype.addTrack = function (t, r) {
          if (this._isClosed)
            throw X(
              "InvalidStateError",
              "Attempted to call addTrack on a closed peerconnection.",
            );
          var n;
          if (
            this.transceivers.find(function (e) {
              return e.track === t;
            })
          )
            throw X("InvalidAccessError", "Track already exists.");
          for (var i = 0; i < this.transceivers.length; i++)
            this.transceivers[i].track ||
              this.transceivers[i].kind !== t.kind ||
              (n = this.transceivers[i]);
          return (
            n || (n = this._createTransceiver(t.kind)),
            this._maybeFireNegotiationNeeded(),
            -1 === this.localStreams.indexOf(r) && this.localStreams.push(r),
            (n.track = t),
            (n.stream = r),
            (n.rtpSender = new e.RTCRtpSender(t, n.dtlsTransport)),
            n.rtpSender
          );
        }),
        (i.prototype.addStream = function (e) {
          var r = this;
          if (t >= 15025)
            e.getTracks().forEach(function (t) {
              r.addTrack(t, e);
            });
          else {
            var n = e.clone();
            e.getTracks().forEach(function (e, t) {
              var r = n.getTracks()[t];
              e.addEventListener("enabled", function (e) {
                r.enabled = e.enabled;
              });
            }),
              n.getTracks().forEach(function (e) {
                r.addTrack(e, n);
              });
          }
        }),
        (i.prototype.removeTrack = function (t) {
          if (this._isClosed)
            throw X(
              "InvalidStateError",
              "Attempted to call removeTrack on a closed peerconnection.",
            );
          if (!(t instanceof e.RTCRtpSender))
            throw new TypeError(
              "Argument 1 of RTCPeerConnection.removeTrack does not implement interface RTCRtpSender.",
            );
          var r = this.transceivers.find(function (e) {
            return e.rtpSender === t;
          });
          if (!r)
            throw X(
              "InvalidAccessError",
              "Sender was not created by this connection.",
            );
          var n = r.stream;
          r.rtpSender.stop(),
            (r.rtpSender = null),
            (r.track = null),
            (r.stream = null),
            -1 ===
              this.transceivers
                .map(function (e) {
                  return e.stream;
                })
                .indexOf(n) &&
              this.localStreams.indexOf(n) > -1 &&
              this.localStreams.splice(this.localStreams.indexOf(n), 1),
            this._maybeFireNegotiationNeeded();
        }),
        (i.prototype.removeStream = function (e) {
          var t = this;
          e.getTracks().forEach(function (e) {
            var r = t.getSenders().find(function (t) {
              return t.track === e;
            });
            r && t.removeTrack(r);
          });
        }),
        (i.prototype.getSenders = function () {
          return this.transceivers
            .filter(function (e) {
              return !!e.rtpSender;
            })
            .map(function (e) {
              return e.rtpSender;
            });
        }),
        (i.prototype.getReceivers = function () {
          return this.transceivers
            .filter(function (e) {
              return !!e.rtpReceiver;
            })
            .map(function (e) {
              return e.rtpReceiver;
            });
        }),
        (i.prototype._createIceGatherer = function (t, r) {
          var n = this;
          if (r && t > 0) return this.transceivers[0].iceGatherer;
          if (this._iceGatherers.length) return this._iceGatherers.shift();
          var i = new e.RTCIceGatherer({
            iceServers: this._config.iceServers,
            gatherPolicy: this._config.iceTransportPolicy,
          });
          return (
            Object.defineProperty(i, "state", { value: "new", writable: !0 }),
            (this.transceivers[t].bufferedCandidateEvents = []),
            (this.transceivers[t].bufferCandidates = function (e) {
              var r = !e.candidate || 0 === Object.keys(e.candidate).length;
              (i.state = r ? "completed" : "gathering"),
                null !== n.transceivers[t].bufferedCandidateEvents &&
                  n.transceivers[t].bufferedCandidateEvents.push(e);
            }),
            i.addEventListener(
              "localcandidate",
              this.transceivers[t].bufferCandidates,
            ),
            i
          );
        }),
        (i.prototype._gather = function (t, r) {
          var n = this,
            i = this.transceivers[r].iceGatherer;
          if (!i.onlocalcandidate) {
            var o = this.transceivers[r].bufferedCandidateEvents;
            (this.transceivers[r].bufferedCandidateEvents = null),
              i.removeEventListener(
                "localcandidate",
                this.transceivers[r].bufferCandidates,
              ),
              (i.onlocalcandidate = function (e) {
                if (!(n.usingBundle && r > 0)) {
                  var o = new Event("icecandidate");
                  o.candidate = { sdpMid: t, sdpMLineIndex: r };
                  var a = e.candidate,
                    s = !a || 0 === Object.keys(a).length;
                  if (s)
                    ("new" !== i.state && "gathering" !== i.state) ||
                      (i.state = "completed");
                  else {
                    "new" === i.state && (i.state = "gathering"),
                      (a.component = 1),
                      (a.ufrag = i.getLocalParameters().usernameFragment);
                    var c = W.writeCandidate(a);
                    (o.candidate = Object.assign(
                      o.candidate,
                      W.parseCandidate(c),
                    )),
                      (o.candidate.candidate = c),
                      (o.candidate.toJSON = function () {
                        return {
                          candidate: o.candidate.candidate,
                          sdpMid: o.candidate.sdpMid,
                          sdpMLineIndex: o.candidate.sdpMLineIndex,
                          usernameFragment: o.candidate.usernameFragment,
                        };
                      });
                  }
                  var p = W.getMediaSections(n._localDescription.sdp);
                  (p[o.candidate.sdpMLineIndex] += s
                    ? "a=end-of-candidates\r\n"
                    : "a=" + o.candidate.candidate + "\r\n"),
                    (n._localDescription.sdp =
                      W.getDescription(n._localDescription.sdp) + p.join(""));
                  var d = n.transceivers.every(function (e) {
                    return e.iceGatherer && "completed" === e.iceGatherer.state;
                  });
                  "gathering" !== n.iceGatheringState &&
                    ((n.iceGatheringState = "gathering"),
                    n._emitGatheringStateChange()),
                    s || n._dispatchEvent("icecandidate", o),
                    d &&
                      (n._dispatchEvent(
                        "icecandidate",
                        new Event("icecandidate"),
                      ),
                      (n.iceGatheringState = "complete"),
                      n._emitGatheringStateChange());
                }
              }),
              e.setTimeout(function () {
                o.forEach(function (e) {
                  i.onlocalcandidate(e);
                });
              }, 0);
          }
        }),
        (i.prototype._createIceAndDtlsTransports = function () {
          var t = this,
            r = new e.RTCIceTransport(null);
          r.onicestatechange = function () {
            t._updateIceConnectionState(), t._updateConnectionState();
          };
          var n = new e.RTCDtlsTransport(r);
          return (
            (n.ondtlsstatechange = function () {
              t._updateConnectionState();
            }),
            (n.onerror = function () {
              Object.defineProperty(n, "state", {
                value: "failed",
                writable: !0,
              }),
                t._updateConnectionState();
            }),
            { iceTransport: r, dtlsTransport: n }
          );
        }),
        (i.prototype._disposeIceAndDtlsTransports = function (e) {
          var t = this.transceivers[e].iceGatherer;
          t &&
            (delete t.onlocalcandidate,
            delete this.transceivers[e].iceGatherer);
          var r = this.transceivers[e].iceTransport;
          r &&
            (delete r.onicestatechange,
            delete this.transceivers[e].iceTransport);
          var n = this.transceivers[e].dtlsTransport;
          n &&
            (delete n.ondtlsstatechange,
            delete n.onerror,
            delete this.transceivers[e].dtlsTransport);
        }),
        (i.prototype._transceive = function (e, r, n) {
          var i = Y(e.localCapabilities, e.remoteCapabilities);
          r &&
            e.rtpSender &&
            ((i.encodings = e.sendEncodingParameters),
            (i.rtcp = {
              cname: W.localCName,
              compound: e.rtcpParameters.compound,
            }),
            e.recvEncodingParameters.length &&
              (i.rtcp.ssrc = e.recvEncodingParameters[0].ssrc),
            e.rtpSender.send(i)),
            n &&
              e.rtpReceiver &&
              i.codecs.length > 0 &&
              ("video" === e.kind &&
                e.recvEncodingParameters &&
                t < 15019 &&
                e.recvEncodingParameters.forEach(function (e) {
                  delete e.rtx;
                }),
              e.recvEncodingParameters.length
                ? (i.encodings = e.recvEncodingParameters)
                : (i.encodings = [{}]),
              (i.rtcp = { compound: e.rtcpParameters.compound }),
              e.rtcpParameters.cname && (i.rtcp.cname = e.rtcpParameters.cname),
              e.sendEncodingParameters.length &&
                (i.rtcp.ssrc = e.sendEncodingParameters[0].ssrc),
              e.rtpReceiver.receive(i));
        }),
        (i.prototype.setLocalDescription = function (e) {
          var t,
            r,
            n = this;
          if (-1 === ["offer", "answer"].indexOf(e.type))
            return Promise.reject(
              X("TypeError", 'Unsupported type "' + e.type + '"'),
            );
          if (
            !q("setLocalDescription", e.type, n.signalingState) ||
            n._isClosed
          )
            return Promise.reject(
              X(
                "InvalidStateError",
                "Can not set local " + e.type + " in state " + n.signalingState,
              ),
            );
          if ("offer" === e.type)
            (t = W.splitSections(e.sdp)),
              (r = t.shift()),
              t.forEach(function (e, t) {
                var r = W.parseRtpParameters(e);
                n.transceivers[t].localCapabilities = r;
              }),
              n.transceivers.forEach(function (e, t) {
                n._gather(e.mid, t);
              });
          else if ("answer" === e.type) {
            (t = W.splitSections(n._remoteDescription.sdp)), (r = t.shift());
            var i = W.matchPrefix(r, "a=ice-lite").length > 0;
            t.forEach(function (e, t) {
              var o = n.transceivers[t],
                a = o.iceGatherer,
                s = o.iceTransport,
                c = o.dtlsTransport,
                p = o.localCapabilities,
                d = o.remoteCapabilities;
              if (
                !(
                  W.isRejected(e) &&
                  0 === W.matchPrefix(e, "a=bundle-only").length
                ) &&
                !o.rejected
              ) {
                var u = W.getIceParameters(e, r),
                  l = W.getDtlsParameters(e, r);
                i && (l.role = "server"),
                  (n.usingBundle && 0 !== t) ||
                    (n._gather(o.mid, t),
                    "new" === s.state &&
                      s.start(a, u, i ? "controlling" : "controlled"),
                    "new" === c.state && c.start(l));
                var f = Y(p, d);
                n._transceive(o, f.codecs.length > 0, !1);
              }
            });
          }
          return (
            (n._localDescription = { type: e.type, sdp: e.sdp }),
            "offer" === e.type
              ? n._updateSignalingState("have-local-offer")
              : n._updateSignalingState("stable"),
            Promise.resolve()
          );
        }),
        (i.prototype.setRemoteDescription = function (i) {
          var o = this;
          if (-1 === ["offer", "answer"].indexOf(i.type))
            return Promise.reject(
              X("TypeError", 'Unsupported type "' + i.type + '"'),
            );
          if (
            !q("setRemoteDescription", i.type, o.signalingState) ||
            o._isClosed
          )
            return Promise.reject(
              X(
                "InvalidStateError",
                "Can not set remote " +
                  i.type +
                  " in state " +
                  o.signalingState,
              ),
            );
          var a = {};
          o.remoteStreams.forEach(function (e) {
            a[e.id] = e;
          });
          var s = [],
            c = W.splitSections(i.sdp),
            p = c.shift(),
            d = W.matchPrefix(p, "a=ice-lite").length > 0,
            u = W.matchPrefix(p, "a=group:BUNDLE ").length > 0;
          o.usingBundle = u;
          var l = W.matchPrefix(p, "a=ice-options:")[0];
          return (
            (o.canTrickleIceCandidates =
              !!l && l.substr(14).split(" ").indexOf("trickle") >= 0),
            c.forEach(function (n, c) {
              var l = W.splitLines(n),
                f = W.getKind(n),
                h =
                  W.isRejected(n) &&
                  0 === W.matchPrefix(n, "a=bundle-only").length,
                m = l[0].substr(2).split(" ")[2],
                v = W.getDirection(n, p),
                y = W.parseMsid(n),
                g = W.getMid(n) || W.generateIdentifier();
              if (
                h ||
                ("application" === f &&
                  ("DTLS/SCTP" === m || "UDP/DTLS/SCTP" === m))
              )
                o.transceivers[c] = {
                  mid: g,
                  kind: f,
                  protocol: m,
                  rejected: !0,
                };
              else {
                var b, C, _, S, T, k, w, P, R;
                !h &&
                  o.transceivers[c] &&
                  o.transceivers[c].rejected &&
                  (o.transceivers[c] = o._createTransceiver(f, !0));
                var E,
                  x,
                  D = W.parseRtpParameters(n);
                h ||
                  ((E = W.getIceParameters(n, p)),
                  ((x = W.getDtlsParameters(n, p)).role = "client")),
                  (w = W.parseRtpEncodingParameters(n));
                var O = W.parseRtcpParameters(n),
                  I = W.matchPrefix(n, "a=end-of-candidates", p).length > 0,
                  M = W.matchPrefix(n, "a=candidate:")
                    .map(function (e) {
                      return W.parseCandidate(e);
                    })
                    .filter(function (e) {
                      return 1 === e.component;
                    });
                if (
                  (("offer" === i.type || "answer" === i.type) &&
                    !h &&
                    u &&
                    c > 0 &&
                    o.transceivers[c] &&
                    (o._disposeIceAndDtlsTransports(c),
                    (o.transceivers[c].iceGatherer =
                      o.transceivers[0].iceGatherer),
                    (o.transceivers[c].iceTransport =
                      o.transceivers[0].iceTransport),
                    (o.transceivers[c].dtlsTransport =
                      o.transceivers[0].dtlsTransport),
                    o.transceivers[c].rtpSender &&
                      o.transceivers[c].rtpSender.setTransport(
                        o.transceivers[0].dtlsTransport,
                      ),
                    o.transceivers[c].rtpReceiver &&
                      o.transceivers[c].rtpReceiver.setTransport(
                        o.transceivers[0].dtlsTransport,
                      )),
                  "offer" !== i.type || h)
                ) {
                  if ("answer" === i.type && !h) {
                    (C = (b = o.transceivers[c]).iceGatherer),
                      (_ = b.iceTransport),
                      (S = b.dtlsTransport),
                      (T = b.rtpReceiver),
                      (k = b.sendEncodingParameters),
                      (P = b.localCapabilities),
                      (o.transceivers[c].recvEncodingParameters = w),
                      (o.transceivers[c].remoteCapabilities = D),
                      (o.transceivers[c].rtcpParameters = O),
                      M.length &&
                        "new" === _.state &&
                        ((!d && !I) || (u && 0 !== c)
                          ? M.forEach(function (e) {
                              Q(b.iceTransport, e);
                            })
                          : _.setRemoteCandidates(M)),
                      (u && 0 !== c) ||
                        ("new" === _.state && _.start(C, E, "controlling"),
                        "new" === S.state && S.start(x)),
                      !Y(
                        b.localCapabilities,
                        b.remoteCapabilities,
                      ).codecs.filter(function (e) {
                        return "rtx" === e.name.toLowerCase();
                      }).length &&
                        b.sendEncodingParameters[0].rtx &&
                        delete b.sendEncodingParameters[0].rtx,
                      o._transceive(
                        b,
                        "sendrecv" === v || "recvonly" === v,
                        "sendrecv" === v || "sendonly" === v,
                      ),
                      !T || ("sendrecv" !== v && "sendonly" !== v)
                        ? delete b.rtpReceiver
                        : ((R = T.track),
                          y
                            ? (a[y.stream] ||
                                (a[y.stream] = new e.MediaStream()),
                              r(R, a[y.stream]),
                              s.push([R, T, a[y.stream]]))
                            : (a.default || (a.default = new e.MediaStream()),
                              r(R, a.default),
                              s.push([R, T, a.default])));
                  }
                } else {
                  ((b = o.transceivers[c] || o._createTransceiver(f)).mid = g),
                    b.iceGatherer ||
                      (b.iceGatherer = o._createIceGatherer(c, u)),
                    M.length &&
                      "new" === b.iceTransport.state &&
                      (!I || (u && 0 !== c)
                        ? M.forEach(function (e) {
                            Q(b.iceTransport, e);
                          })
                        : b.iceTransport.setRemoteCandidates(M)),
                    (P = e.RTCRtpReceiver.getCapabilities(f)),
                    t < 15019 &&
                      (P.codecs = P.codecs.filter(function (e) {
                        return "rtx" !== e.name;
                      })),
                    (k = b.sendEncodingParameters || [
                      { ssrc: 1001 * (2 * c + 2) },
                    ]);
                  var j,
                    A = !1;
                  if ("sendrecv" === v || "sendonly" === v) {
                    if (
                      ((A = !b.rtpReceiver),
                      (T =
                        b.rtpReceiver ||
                        new e.RTCRtpReceiver(b.dtlsTransport, f)),
                      A)
                    )
                      (R = T.track),
                        (y && "-" === y.stream) ||
                          (y
                            ? (a[y.stream] ||
                                ((a[y.stream] = new e.MediaStream()),
                                Object.defineProperty(a[y.stream], "id", {
                                  get: function () {
                                    return y.stream;
                                  },
                                })),
                              Object.defineProperty(R, "id", {
                                get: function () {
                                  return y.track;
                                },
                              }),
                              (j = a[y.stream]))
                            : (a.default || (a.default = new e.MediaStream()),
                              (j = a.default))),
                        j && (r(R, j), b.associatedRemoteMediaStreams.push(j)),
                        s.push([R, T, j]);
                  } else
                    b.rtpReceiver &&
                      b.rtpReceiver.track &&
                      (b.associatedRemoteMediaStreams.forEach(function (t) {
                        var r = t.getTracks().find(function (e) {
                          return e.id === b.rtpReceiver.track.id;
                        });
                        r &&
                          (function (t, r) {
                            r.removeTrack(t),
                              r.dispatchEvent(
                                new e.MediaStreamTrackEvent("removetrack", {
                                  track: t,
                                }),
                              );
                          })(r, t);
                      }),
                      (b.associatedRemoteMediaStreams = []));
                  (b.localCapabilities = P),
                    (b.remoteCapabilities = D),
                    (b.rtpReceiver = T),
                    (b.rtcpParameters = O),
                    (b.sendEncodingParameters = k),
                    (b.recvEncodingParameters = w),
                    o._transceive(o.transceivers[c], !1, A);
                }
              }
            }),
            void 0 === o._dtlsRole &&
              (o._dtlsRole = "offer" === i.type ? "active" : "passive"),
            (o._remoteDescription = { type: i.type, sdp: i.sdp }),
            "offer" === i.type
              ? o._updateSignalingState("have-remote-offer")
              : o._updateSignalingState("stable"),
            Object.keys(a).forEach(function (t) {
              var r = a[t];
              if (r.getTracks().length) {
                if (-1 === o.remoteStreams.indexOf(r)) {
                  o.remoteStreams.push(r);
                  var i = new Event("addstream");
                  (i.stream = r),
                    e.setTimeout(function () {
                      o._dispatchEvent("addstream", i);
                    });
                }
                s.forEach(function (e) {
                  var t = e[0],
                    i = e[1];
                  r.id === e[2].id && n(o, t, i, [r]);
                });
              }
            }),
            s.forEach(function (e) {
              e[2] || n(o, e[0], e[1], []);
            }),
            e.setTimeout(function () {
              o &&
                o.transceivers &&
                o.transceivers.forEach(function (e) {
                  e.iceTransport &&
                    "new" === e.iceTransport.state &&
                    e.iceTransport.getRemoteCandidates().length > 0 &&
                    (console.warn(
                      "Timeout for addRemoteCandidate. Consider sending an end-of-candidates notification",
                    ),
                    e.iceTransport.addRemoteCandidate({}));
                });
            }, 4e3),
            Promise.resolve()
          );
        }),
        (i.prototype.close = function () {
          this.transceivers.forEach(function (e) {
            e.iceTransport && e.iceTransport.stop(),
              e.dtlsTransport && e.dtlsTransport.stop(),
              e.rtpSender && e.rtpSender.stop(),
              e.rtpReceiver && e.rtpReceiver.stop();
          }),
            (this._isClosed = !0),
            this._updateSignalingState("closed");
        }),
        (i.prototype._updateSignalingState = function (e) {
          this.signalingState = e;
          var t = new Event("signalingstatechange");
          this._dispatchEvent("signalingstatechange", t);
        }),
        (i.prototype._maybeFireNegotiationNeeded = function () {
          var t = this;
          "stable" === this.signalingState &&
            !0 !== this.needNegotiation &&
            ((this.needNegotiation = !0),
            e.setTimeout(function () {
              if (t.needNegotiation) {
                t.needNegotiation = !1;
                var e = new Event("negotiationneeded");
                t._dispatchEvent("negotiationneeded", e);
              }
            }, 0));
        }),
        (i.prototype._updateIceConnectionState = function () {
          var e,
            t = {
              new: 0,
              closed: 0,
              checking: 0,
              connected: 0,
              completed: 0,
              disconnected: 0,
              failed: 0,
            };
          if (
            (this.transceivers.forEach(function (e) {
              e.iceTransport && !e.rejected && t[e.iceTransport.state]++;
            }),
            (e = "new"),
            t.failed > 0
              ? (e = "failed")
              : t.checking > 0
                ? (e = "checking")
                : t.disconnected > 0
                  ? (e = "disconnected")
                  : t.new > 0
                    ? (e = "new")
                    : t.connected > 0
                      ? (e = "connected")
                      : t.completed > 0 && (e = "completed"),
            e !== this.iceConnectionState)
          ) {
            this.iceConnectionState = e;
            var r = new Event("iceconnectionstatechange");
            this._dispatchEvent("iceconnectionstatechange", r);
          }
        }),
        (i.prototype._updateConnectionState = function () {
          var e,
            t = {
              new: 0,
              closed: 0,
              connecting: 0,
              connected: 0,
              completed: 0,
              disconnected: 0,
              failed: 0,
            };
          if (
            (this.transceivers.forEach(function (e) {
              e.iceTransport &&
                e.dtlsTransport &&
                !e.rejected &&
                (t[e.iceTransport.state]++, t[e.dtlsTransport.state]++);
            }),
            (t.connected += t.completed),
            (e = "new"),
            t.failed > 0
              ? (e = "failed")
              : t.connecting > 0
                ? (e = "connecting")
                : t.disconnected > 0
                  ? (e = "disconnected")
                  : t.new > 0
                    ? (e = "new")
                    : t.connected > 0 && (e = "connected"),
            e !== this.connectionState)
          ) {
            this.connectionState = e;
            var r = new Event("connectionstatechange");
            this._dispatchEvent("connectionstatechange", r);
          }
        }),
        (i.prototype.createOffer = function () {
          var r = this;
          if (r._isClosed)
            return Promise.reject(
              X("InvalidStateError", "Can not call createOffer after close"),
            );
          var n = r.transceivers.filter(function (e) {
              return "audio" === e.kind;
            }).length,
            i = r.transceivers.filter(function (e) {
              return "video" === e.kind;
            }).length,
            o = arguments[0];
          if (o) {
            if (o.mandatory || o.optional)
              throw new TypeError(
                "Legacy mandatory/optional constraints not supported.",
              );
            void 0 !== o.offerToReceiveAudio &&
              (n =
                !0 === o.offerToReceiveAudio
                  ? 1
                  : !1 === o.offerToReceiveAudio
                    ? 0
                    : o.offerToReceiveAudio),
              void 0 !== o.offerToReceiveVideo &&
                (i =
                  !0 === o.offerToReceiveVideo
                    ? 1
                    : !1 === o.offerToReceiveVideo
                      ? 0
                      : o.offerToReceiveVideo);
          }
          for (
            r.transceivers.forEach(function (e) {
              "audio" === e.kind
                ? --n < 0 && (e.wantReceive = !1)
                : "video" === e.kind && --i < 0 && (e.wantReceive = !1);
            });
            n > 0 || i > 0;

          )
            n > 0 && (r._createTransceiver("audio"), n--),
              i > 0 && (r._createTransceiver("video"), i--);
          var a = W.writeSessionBoilerplate(
            r._sdpSessionId,
            r._sdpSessionVersion++,
          );
          r.transceivers.forEach(function (n, i) {
            var o = n.track,
              a = n.kind,
              s = n.mid || W.generateIdentifier();
            (n.mid = s),
              n.iceGatherer ||
                (n.iceGatherer = r._createIceGatherer(i, r.usingBundle));
            var c = e.RTCRtpSender.getCapabilities(a);
            t < 15019 &&
              (c.codecs = c.codecs.filter(function (e) {
                return "rtx" !== e.name;
              })),
              c.codecs.forEach(function (e) {
                "H264" === e.name &&
                  void 0 === e.parameters["level-asymmetry-allowed"] &&
                  (e.parameters["level-asymmetry-allowed"] = "1"),
                  n.remoteCapabilities &&
                    n.remoteCapabilities.codecs &&
                    n.remoteCapabilities.codecs.forEach(function (t) {
                      e.name.toLowerCase() === t.name.toLowerCase() &&
                        e.clockRate === t.clockRate &&
                        (e.preferredPayloadType = t.payloadType);
                    });
              }),
              c.headerExtensions.forEach(function (e) {
                (
                  (n.remoteCapabilities &&
                    n.remoteCapabilities.headerExtensions) ||
                  []
                ).forEach(function (t) {
                  e.uri === t.uri && (e.id = t.id);
                });
              });
            var p = n.sendEncodingParameters || [{ ssrc: 1001 * (2 * i + 1) }];
            o &&
              t >= 15019 &&
              "video" === a &&
              !p[0].rtx &&
              (p[0].rtx = { ssrc: p[0].ssrc + 1 }),
              n.wantReceive &&
                (n.rtpReceiver = new e.RTCRtpReceiver(n.dtlsTransport, a)),
              (n.localCapabilities = c),
              (n.sendEncodingParameters = p);
          }),
            "max-compat" !== r._config.bundlePolicy &&
              (a +=
                "a=group:BUNDLE " +
                r.transceivers
                  .map(function (e) {
                    return e.mid;
                  })
                  .join(" ") +
                "\r\n"),
            (a += "a=ice-options:trickle\r\n"),
            r.transceivers.forEach(function (e, t) {
              (a += K(e, e.localCapabilities, "offer", e.stream, r._dtlsRole)),
                (a += "a=rtcp-rsize\r\n"),
                !e.iceGatherer ||
                  "new" === r.iceGatheringState ||
                  (0 !== t && r.usingBundle) ||
                  (e.iceGatherer.getLocalCandidates().forEach(function (e) {
                    (e.component = 1),
                      (a += "a=" + W.writeCandidate(e) + "\r\n");
                  }),
                  "completed" === e.iceGatherer.state &&
                    (a += "a=end-of-candidates\r\n"));
            });
          var s = new e.RTCSessionDescription({ type: "offer", sdp: a });
          return Promise.resolve(s);
        }),
        (i.prototype.createAnswer = function () {
          var r = this;
          if (r._isClosed)
            return Promise.reject(
              X("InvalidStateError", "Can not call createAnswer after close"),
            );
          if (
            "have-remote-offer" !== r.signalingState &&
            "have-local-pranswer" !== r.signalingState
          )
            return Promise.reject(
              X(
                "InvalidStateError",
                "Can not call createAnswer in signalingState " +
                  r.signalingState,
              ),
            );
          var n = W.writeSessionBoilerplate(
            r._sdpSessionId,
            r._sdpSessionVersion++,
          );
          r.usingBundle &&
            (n +=
              "a=group:BUNDLE " +
              r.transceivers
                .map(function (e) {
                  return e.mid;
                })
                .join(" ") +
              "\r\n"),
            (n += "a=ice-options:trickle\r\n");
          var i = W.getMediaSections(r._remoteDescription.sdp).length;
          r.transceivers.forEach(function (e, o) {
            if (!(o + 1 > i)) {
              if (e.rejected)
                return (
                  "application" === e.kind
                    ? "DTLS/SCTP" === e.protocol
                      ? (n += "m=application 0 DTLS/SCTP 5000\r\n")
                      : (n +=
                          "m=application 0 " +
                          e.protocol +
                          " webrtc-datachannel\r\n")
                    : "audio" === e.kind
                      ? (n +=
                          "m=audio 0 UDP/TLS/RTP/SAVPF 0\r\na=rtpmap:0 PCMU/8000\r\n")
                      : "video" === e.kind &&
                        (n +=
                          "m=video 0 UDP/TLS/RTP/SAVPF 120\r\na=rtpmap:120 VP8/90000\r\n"),
                  void (n +=
                    "c=IN IP4 0.0.0.0\r\na=inactive\r\na=mid:" + e.mid + "\r\n")
                );
              var a;
              if (e.stream)
                "audio" === e.kind
                  ? (a = e.stream.getAudioTracks()[0])
                  : "video" === e.kind && (a = e.stream.getVideoTracks()[0]),
                  a &&
                    t >= 15019 &&
                    "video" === e.kind &&
                    !e.sendEncodingParameters[0].rtx &&
                    (e.sendEncodingParameters[0].rtx = {
                      ssrc: e.sendEncodingParameters[0].ssrc + 1,
                    });
              var s = Y(e.localCapabilities, e.remoteCapabilities);
              !s.codecs.filter(function (e) {
                return "rtx" === e.name.toLowerCase();
              }).length &&
                e.sendEncodingParameters[0].rtx &&
                delete e.sendEncodingParameters[0].rtx,
                (n += K(e, s, "answer", e.stream, r._dtlsRole)),
                e.rtcpParameters &&
                  e.rtcpParameters.reducedSize &&
                  (n += "a=rtcp-rsize\r\n");
            }
          });
          var o = new e.RTCSessionDescription({ type: "answer", sdp: n });
          return Promise.resolve(o);
        }),
        (i.prototype.addIceCandidate = function (e) {
          var t,
            r = this;
          return e && void 0 === e.sdpMLineIndex && !e.sdpMid
            ? Promise.reject(new TypeError("sdpMLineIndex or sdpMid required"))
            : new Promise(function (n, i) {
                if (!r._remoteDescription)
                  return i(
                    X(
                      "InvalidStateError",
                      "Can not add ICE candidate without a remote description",
                    ),
                  );
                if (e && "" !== e.candidate) {
                  var o = e.sdpMLineIndex;
                  if (e.sdpMid)
                    for (var a = 0; a < r.transceivers.length; a++)
                      if (r.transceivers[a].mid === e.sdpMid) {
                        o = a;
                        break;
                      }
                  var s = r.transceivers[o];
                  if (!s)
                    return i(X("OperationError", "Can not add ICE candidate"));
                  if (s.rejected) return n();
                  var c =
                    Object.keys(e.candidate).length > 0
                      ? W.parseCandidate(e.candidate)
                      : {};
                  if ("tcp" === c.protocol && (0 === c.port || 9 === c.port))
                    return n();
                  if (c.component && 1 !== c.component) return n();
                  if (
                    (0 === o ||
                      (o > 0 &&
                        s.iceTransport !== r.transceivers[0].iceTransport)) &&
                    !Q(s.iceTransport, c)
                  )
                    return i(X("OperationError", "Can not add ICE candidate"));
                  var p = e.candidate.trim();
                  0 === p.indexOf("a=") && (p = p.substr(2)),
                    ((t = W.getMediaSections(r._remoteDescription.sdp))[o] +=
                      "a=" + (c.type ? p : "end-of-candidates") + "\r\n"),
                    (r._remoteDescription.sdp =
                      W.getDescription(r._remoteDescription.sdp) + t.join(""));
                } else
                  for (
                    var d = 0;
                    d < r.transceivers.length &&
                    (r.transceivers[d].rejected ||
                      (r.transceivers[d].iceTransport.addRemoteCandidate({}),
                      ((t = W.getMediaSections(r._remoteDescription.sdp))[d] +=
                        "a=end-of-candidates\r\n"),
                      (r._remoteDescription.sdp =
                        W.getDescription(r._remoteDescription.sdp) +
                        t.join("")),
                      !r.usingBundle));
                    d++
                  );
                n();
              });
        }),
        (i.prototype.getStats = function (t) {
          if (t && t instanceof e.MediaStreamTrack) {
            var r = null;
            if (
              (this.transceivers.forEach(function (e) {
                e.rtpSender && e.rtpSender.track === t
                  ? (r = e.rtpSender)
                  : e.rtpReceiver &&
                    e.rtpReceiver.track === t &&
                    (r = e.rtpReceiver);
              }),
              !r)
            )
              throw X("InvalidAccessError", "Invalid selector.");
            return r.getStats();
          }
          var n = [];
          return (
            this.transceivers.forEach(function (e) {
              [
                "rtpSender",
                "rtpReceiver",
                "iceGatherer",
                "iceTransport",
                "dtlsTransport",
              ].forEach(function (t) {
                e[t] && n.push(e[t].getStats());
              });
            }),
            Promise.all(n).then(function (e) {
              var t = new Map();
              return (
                e.forEach(function (e) {
                  e.forEach(function (e) {
                    t.set(e.id, e);
                  });
                }),
                t
              );
            })
          );
        });
      [
        "RTCRtpSender",
        "RTCRtpReceiver",
        "RTCIceGatherer",
        "RTCIceTransport",
        "RTCDtlsTransport",
      ].forEach(function (t) {
        var r = e[t];
        if (r && r.prototype && r.prototype.getStats) {
          var n = r.prototype.getStats;
          r.prototype.getStats = function () {
            return n.apply(this).then(function (e) {
              var t = new Map();
              return (
                Object.keys(e).forEach(function (r) {
                  var n;
                  (e[r].type =
                    {
                      inboundrtp: "inbound-rtp",
                      outboundrtp: "outbound-rtp",
                      candidatepair: "candidate-pair",
                      localcandidate: "local-candidate",
                      remotecandidate: "remote-candidate",
                    }[(n = e[r]).type] || n.type),
                    t.set(r, e[r]);
                }),
                t
              );
            });
          };
        }
      });
      var o = ["createOffer", "createAnswer"];
      return (
        o.forEach(function (e) {
          var t = i.prototype[e];
          i.prototype[e] = function () {
            var e = arguments;
            return "function" == typeof e[0] || "function" == typeof e[1]
              ? t.apply(this, [arguments[2]]).then(
                  function (t) {
                    "function" == typeof e[0] && e[0].apply(null, [t]);
                  },
                  function (t) {
                    "function" == typeof e[1] && e[1].apply(null, [t]);
                  },
                )
              : t.apply(this, arguments);
          };
        }),
        (o = [
          "setLocalDescription",
          "setRemoteDescription",
          "addIceCandidate",
        ]).forEach(function (e) {
          var t = i.prototype[e];
          i.prototype[e] = function () {
            var e = arguments;
            return "function" == typeof e[1] || "function" == typeof e[2]
              ? t.apply(this, arguments).then(
                  function () {
                    "function" == typeof e[1] && e[1].apply(null);
                  },
                  function (t) {
                    "function" == typeof e[2] && e[2].apply(null, [t]);
                  },
                )
              : t.apply(this, arguments);
          };
        }),
        ["getStats"].forEach(function (e) {
          var t = i.prototype[e];
          i.prototype[e] = function () {
            var e = arguments;
            return "function" == typeof e[1]
              ? t.apply(this, arguments).then(function () {
                  "function" == typeof e[1] && e[1].apply(null);
                })
              : t.apply(this, arguments);
          };
        }),
        i
      );
    });
  var re = {};
  function ne(e, t) {
    var r = e && e.navigator,
      n = e && e.MediaStreamTrack;
    if (
      ((r.getUserMedia = function (e, t, n) {
        k("navigator.getUserMedia", "navigator.mediaDevices.getUserMedia"),
          r.mediaDevices.getUserMedia(e).then(t, n);
      }),
      !(
        t.version > 55 &&
        "autoGainControl" in r.mediaDevices.getSupportedConstraints()
      ))
    ) {
      var i = function (e, t, r) {
          t in e && !(r in e) && ((e[r] = e[t]), delete e[t]);
        },
        o = r.mediaDevices.getUserMedia.bind(r.mediaDevices);
      if (
        ((r.mediaDevices.getUserMedia = function (e) {
          return (
            "object" == typeof e &&
              "object" == typeof e.audio &&
              ((e = JSON.parse(JSON.stringify(e))),
              i(e.audio, "autoGainControl", "mozAutoGainControl"),
              i(e.audio, "noiseSuppression", "mozNoiseSuppression")),
            o(e)
          );
        }),
        n && n.prototype.getSettings)
      ) {
        var a = n.prototype.getSettings;
        n.prototype.getSettings = function () {
          var e = a.apply(this, arguments);
          return (
            i(e, "mozAutoGainControl", "autoGainControl"),
            i(e, "mozNoiseSuppression", "noiseSuppression"),
            e
          );
        };
      }
      if (n && n.prototype.applyConstraints) {
        var s = n.prototype.applyConstraints;
        n.prototype.applyConstraints = function (e) {
          return (
            "audio" === this.kind &&
              "object" == typeof e &&
              ((e = JSON.parse(JSON.stringify(e))),
              i(e, "autoGainControl", "mozAutoGainControl"),
              i(e, "noiseSuppression", "mozNoiseSuppression")),
            s.apply(this, [e])
          );
        };
      }
    }
  }
  function ie(e, t) {
    (e.navigator.mediaDevices &&
      "getDisplayMedia" in e.navigator.mediaDevices) ||
      (e.navigator.mediaDevices &&
        (e.navigator.mediaDevices.getDisplayMedia = function (r) {
          if (!r || !r.video) {
            var n = new DOMException(
              "getDisplayMedia without video constraints is undefined",
            );
            return (n.name = "NotFoundError"), (n.code = 8), Promise.reject(n);
          }
          return (
            !0 === r.video
              ? (r.video = { mediaSource: t })
              : (r.video.mediaSource = t),
            e.navigator.mediaDevices.getUserMedia(r)
          );
        }));
  }
  function oe(e) {
    "object" == typeof e &&
      e.RTCTrackEvent &&
      "receiver" in e.RTCTrackEvent.prototype &&
      !("transceiver" in e.RTCTrackEvent.prototype) &&
      Object.defineProperty(e.RTCTrackEvent.prototype, "transceiver", {
        get: function () {
          return { receiver: this.receiver };
        },
      });
  }
  function ae(e, t) {
    if (
      "object" == typeof e &&
      (e.RTCPeerConnection || e.mozRTCPeerConnection)
    ) {
      !e.RTCPeerConnection &&
        e.mozRTCPeerConnection &&
        (e.RTCPeerConnection = e.mozRTCPeerConnection),
        t.version < 53 &&
          [
            "setLocalDescription",
            "setRemoteDescription",
            "addIceCandidate",
          ].forEach(function (t) {
            var r = e.RTCPeerConnection.prototype[t],
              n = o({}, t, function () {
                return (
                  (arguments[0] = new (
                    "addIceCandidate" === t
                      ? e.RTCIceCandidate
                      : e.RTCSessionDescription
                  )(arguments[0])),
                  r.apply(this, arguments)
                );
              });
            e.RTCPeerConnection.prototype[t] = n[t];
          });
      var r = {
          inboundrtp: "inbound-rtp",
          outboundrtp: "outbound-rtp",
          candidatepair: "candidate-pair",
          localcandidate: "local-candidate",
          remotecandidate: "remote-candidate",
        },
        n = e.RTCPeerConnection.prototype.getStats;
      e.RTCPeerConnection.prototype.getStats = function () {
        var e = s(arguments, 3),
          i = e[0],
          o = e[1],
          a = e[2];
        return n
          .apply(this, [i || null])
          .then(function (e) {
            if (t.version < 53 && !o)
              try {
                e.forEach(function (e) {
                  e.type = r[e.type] || e.type;
                });
              } catch (t) {
                if ("TypeError" !== t.name) throw t;
                e.forEach(function (t, n) {
                  e.set(n, Object.assign({}, t, { type: r[t.type] || t.type }));
                });
              }
            return e;
          })
          .then(o, a);
      };
    }
  }
  function se(e) {
    if (
      "object" == typeof e &&
      e.RTCPeerConnection &&
      e.RTCRtpSender &&
      (!e.RTCRtpSender || !("getStats" in e.RTCRtpSender.prototype))
    ) {
      var t = e.RTCPeerConnection.prototype.getSenders;
      t &&
        (e.RTCPeerConnection.prototype.getSenders = function () {
          var e = this,
            r = t.apply(this, []);
          return (
            r.forEach(function (t) {
              return (t._pc = e);
            }),
            r
          );
        });
      var r = e.RTCPeerConnection.prototype.addTrack;
      r &&
        (e.RTCPeerConnection.prototype.addTrack = function () {
          var e = r.apply(this, arguments);
          return (e._pc = this), e;
        }),
        (e.RTCRtpSender.prototype.getStats = function () {
          return this.track
            ? this._pc.getStats(this.track)
            : Promise.resolve(new Map());
        });
    }
  }
  function ce(e) {
    if (
      "object" == typeof e &&
      e.RTCPeerConnection &&
      e.RTCRtpSender &&
      (!e.RTCRtpSender || !("getStats" in e.RTCRtpReceiver.prototype))
    ) {
      var t = e.RTCPeerConnection.prototype.getReceivers;
      t &&
        (e.RTCPeerConnection.prototype.getReceivers = function () {
          var e = this,
            r = t.apply(this, []);
          return (
            r.forEach(function (t) {
              return (t._pc = e);
            }),
            r
          );
        }),
        C(e, "track", function (e) {
          return (e.receiver._pc = e.srcElement), e;
        }),
        (e.RTCRtpReceiver.prototype.getStats = function () {
          return this._pc.getStats(this.track);
        });
    }
  }
  function pe(e) {
    e.RTCPeerConnection &&
      !("removeStream" in e.RTCPeerConnection.prototype) &&
      (e.RTCPeerConnection.prototype.removeStream = function (e) {
        var t = this;
        k("removeStream", "removeTrack"),
          this.getSenders().forEach(function (r) {
            r.track && e.getTracks().includes(r.track) && t.removeTrack(r);
          });
      });
  }
  function de(e) {
    e.DataChannel && !e.RTCDataChannel && (e.RTCDataChannel = e.DataChannel);
  }
  function ue(e) {
    if ("object" == typeof e && e.RTCPeerConnection) {
      var t = e.RTCPeerConnection.prototype.addTransceiver;
      t &&
        (e.RTCPeerConnection.prototype.addTransceiver = function () {
          this.setParametersPromises = [];
          var e = arguments[1],
            r = e && "sendEncodings" in e;
          r &&
            e.sendEncodings.forEach(function (e) {
              if ("rid" in e) {
                if (!/^[a-z0-9]{0,16}$/i.test(e.rid))
                  throw new TypeError("Invalid RID value provided.");
              }
              if (
                "scaleResolutionDownBy" in e &&
                !(parseFloat(e.scaleResolutionDownBy) >= 1)
              )
                throw new RangeError("scale_resolution_down_by must be >= 1.0");
              if ("maxFramerate" in e && !(parseFloat(e.maxFramerate) >= 0))
                throw new RangeError("max_framerate must be >= 0.0");
            });
          var n = t.apply(this, arguments);
          if (r) {
            var i = n.sender,
              o = i.getParameters();
            (!("encodings" in o) ||
              (1 === o.encodings.length &&
                0 === Object.keys(o.encodings[0]).length)) &&
              ((o.encodings = e.sendEncodings),
              (i.sendEncodings = e.sendEncodings),
              this.setParametersPromises.push(
                i
                  .setParameters(o)
                  .then(function () {
                    delete i.sendEncodings;
                  })
                  .catch(function () {
                    delete i.sendEncodings;
                  }),
              ));
          }
          return n;
        });
    }
  }
  function le(e) {
    if ("object" == typeof e && e.RTCRtpSender) {
      var t = e.RTCRtpSender.prototype.getParameters;
      t &&
        (e.RTCRtpSender.prototype.getParameters = function () {
          var e = t.apply(this, arguments);
          return (
            "encodings" in e ||
              (e.encodings = [].concat(this.sendEncodings || [{}])),
            e
          );
        });
    }
  }
  function fe(e) {
    if ("object" == typeof e && e.RTCPeerConnection) {
      var t = e.RTCPeerConnection.prototype.createOffer;
      e.RTCPeerConnection.prototype.createOffer = function () {
        var e = this,
          r = arguments;
        return this.setParametersPromises && this.setParametersPromises.length
          ? Promise.all(this.setParametersPromises)
              .then(function () {
                return t.apply(e, r);
              })
              .finally(function () {
                e.setParametersPromises = [];
              })
          : t.apply(this, arguments);
      };
    }
  }
  function he(e) {
    if ("object" == typeof e && e.RTCPeerConnection) {
      var t = e.RTCPeerConnection.prototype.createAnswer;
      e.RTCPeerConnection.prototype.createAnswer = function () {
        var e = this,
          r = arguments;
        return this.setParametersPromises && this.setParametersPromises.length
          ? Promise.all(this.setParametersPromises)
              .then(function () {
                return t.apply(e, r);
              })
              .finally(function () {
                e.setParametersPromises = [];
              })
          : t.apply(this, arguments);
      };
    }
  }
  t(re, "shimOnTrack", function () {
    return oe;
  }),
    t(re, "shimPeerConnection", function () {
      return ae;
    }),
    t(re, "shimSenderGetStats", function () {
      return se;
    }),
    t(re, "shimReceiverGetStats", function () {
      return ce;
    }),
    t(re, "shimRemoveStream", function () {
      return pe;
    }),
    t(re, "shimRTCDataChannel", function () {
      return de;
    }),
    t(re, "shimAddTransceiver", function () {
      return ue;
    }),
    t(re, "shimGetParameters", function () {
      return le;
    }),
    t(re, "shimCreateOffer", function () {
      return fe;
    }),
    t(re, "shimCreateAnswer", function () {
      return he;
    }),
    t(re, "shimGetUserMedia", function () {
      return ne;
    }),
    t(re, "shimGetDisplayMedia", function () {
      return ie;
    });
  var me = {};
  function ve(e) {
    if ("object" == typeof e && e.RTCPeerConnection) {
      if (
        ("getLocalStreams" in e.RTCPeerConnection.prototype ||
          (e.RTCPeerConnection.prototype.getLocalStreams = function () {
            return (
              this._localStreams || (this._localStreams = []),
              this._localStreams
            );
          }),
        !("addStream" in e.RTCPeerConnection.prototype))
      ) {
        var t = e.RTCPeerConnection.prototype.addTrack;
        (e.RTCPeerConnection.prototype.addStream = function (e) {
          var r = this;
          this._localStreams || (this._localStreams = []),
            this._localStreams.includes(e) || this._localStreams.push(e),
            e.getAudioTracks().forEach(function (n) {
              return t.call(r, n, e);
            }),
            e.getVideoTracks().forEach(function (n) {
              return t.call(r, n, e);
            });
        }),
          (e.RTCPeerConnection.prototype.addTrack = function (e) {
            for (
              var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1;
              i < r;
              i++
            )
              n[i - 1] = arguments[i];
            var o = this;
            return (
              n &&
                n.forEach(function (e) {
                  o._localStreams
                    ? o._localStreams.includes(e) || o._localStreams.push(e)
                    : (o._localStreams = [e]);
                }),
              t.apply(this, arguments)
            );
          });
      }
      "removeStream" in e.RTCPeerConnection.prototype ||
        (e.RTCPeerConnection.prototype.removeStream = function (e) {
          var t = this;
          this._localStreams || (this._localStreams = []);
          var r = this._localStreams.indexOf(e);
          if (-1 !== r) {
            this._localStreams.splice(r, 1);
            var n = e.getTracks();
            this.getSenders().forEach(function (e) {
              n.includes(e.track) && t.removeTrack(e);
            });
          }
        });
    }
  }
  function ye(e) {
    if (
      "object" == typeof e &&
      e.RTCPeerConnection &&
      ("getRemoteStreams" in e.RTCPeerConnection.prototype ||
        (e.RTCPeerConnection.prototype.getRemoteStreams = function () {
          return this._remoteStreams ? this._remoteStreams : [];
        }),
      !("onaddstream" in e.RTCPeerConnection.prototype))
    ) {
      Object.defineProperty(e.RTCPeerConnection.prototype, "onaddstream", {
        get: function () {
          return this._onaddstream;
        },
        set: function (e) {
          var t = this;
          this._onaddstream &&
            (this.removeEventListener("addstream", this._onaddstream),
            this.removeEventListener("track", this._onaddstreampoly)),
            this.addEventListener("addstream", (this._onaddstream = e)),
            this.addEventListener(
              "track",
              (this._onaddstreampoly = function (e) {
                var r = t;
                e.streams.forEach(function (e) {
                  if (
                    (r._remoteStreams || (r._remoteStreams = []),
                    !r._remoteStreams.includes(e))
                  ) {
                    r._remoteStreams.push(e);
                    var t = new Event("addstream");
                    (t.stream = e), r.dispatchEvent(t);
                  }
                });
              }),
            );
        },
      });
      var t = e.RTCPeerConnection.prototype.setRemoteDescription;
      e.RTCPeerConnection.prototype.setRemoteDescription = function () {
        var e = this;
        return (
          this._onaddstreampoly ||
            this.addEventListener(
              "track",
              (this._onaddstreampoly = function (t) {
                t.streams.forEach(function (t) {
                  if (
                    (e._remoteStreams || (e._remoteStreams = []),
                    !(e._remoteStreams.indexOf(t) >= 0))
                  ) {
                    e._remoteStreams.push(t);
                    var r = new Event("addstream");
                    (r.stream = t), e.dispatchEvent(r);
                  }
                });
              }),
            ),
          t.apply(e, arguments)
        );
      };
    }
  }
  function ge(e) {
    if ("object" == typeof e && e.RTCPeerConnection) {
      var t = e.RTCPeerConnection.prototype,
        r = t.createOffer,
        n = t.createAnswer,
        i = t.setLocalDescription,
        o = t.setRemoteDescription,
        a = t.addIceCandidate;
      (t.createOffer = function (e, t) {
        var n = arguments.length >= 2 ? arguments[2] : arguments[0],
          i = r.apply(this, [n]);
        return t ? (i.then(e, t), Promise.resolve()) : i;
      }),
        (t.createAnswer = function (e, t) {
          var r = arguments.length >= 2 ? arguments[2] : arguments[0],
            i = n.apply(this, [r]);
          return t ? (i.then(e, t), Promise.resolve()) : i;
        });
      var s = function (e, t, r) {
        var n = i.apply(this, [e]);
        return r ? (n.then(t, r), Promise.resolve()) : n;
      };
      (t.setLocalDescription = s),
        (s = function (e, t, r) {
          var n = o.apply(this, [e]);
          return r ? (n.then(t, r), Promise.resolve()) : n;
        }),
        (t.setRemoteDescription = s),
        (s = function (e, t, r) {
          var n = a.apply(this, [e]);
          return r ? (n.then(t, r), Promise.resolve()) : n;
        }),
        (t.addIceCandidate = s);
    }
  }
  function be(e) {
    var t = e && e.navigator;
    if (t.mediaDevices && t.mediaDevices.getUserMedia) {
      var r = t.mediaDevices,
        n = r.getUserMedia.bind(r);
      t.mediaDevices.getUserMedia = function (e) {
        return n(Ce(e));
      };
    }
    !t.getUserMedia &&
      t.mediaDevices &&
      t.mediaDevices.getUserMedia &&
      (t.getUserMedia = function (e, r, n) {
        t.mediaDevices.getUserMedia(e).then(r, n);
      }.bind(t));
  }
  function Ce(e) {
    return e && void 0 !== e.video
      ? Object.assign({}, e, { video: R(e.video) })
      : e;
  }
  function _e(e) {
    if (e.RTCPeerConnection) {
      var t = e.RTCPeerConnection;
      (e.RTCPeerConnection = function (e, r) {
        if (e && e.iceServers) {
          for (var n = [], i = 0; i < e.iceServers.length; i++) {
            var o = e.iceServers[i];
            !o.hasOwnProperty("urls") && o.hasOwnProperty("url")
              ? (k("RTCIceServer.url", "RTCIceServer.urls"),
                ((o = JSON.parse(JSON.stringify(o))).urls = o.url),
                delete o.url,
                n.push(o))
              : n.push(e.iceServers[i]);
          }
          e.iceServers = n;
        }
        return new t(e, r);
      }),
        (e.RTCPeerConnection.prototype = t.prototype),
        "generateCertificate" in t &&
          Object.defineProperty(e.RTCPeerConnection, "generateCertificate", {
            get: function () {
              return t.generateCertificate;
            },
          });
    }
  }
  function Se(e) {
    "object" == typeof e &&
      e.RTCTrackEvent &&
      "receiver" in e.RTCTrackEvent.prototype &&
      !("transceiver" in e.RTCTrackEvent.prototype) &&
      Object.defineProperty(e.RTCTrackEvent.prototype, "transceiver", {
        get: function () {
          return { receiver: this.receiver };
        },
      });
  }
  function Te(e) {
    var t = e.RTCPeerConnection.prototype.createOffer;
    e.RTCPeerConnection.prototype.createOffer = function (e) {
      if (e) {
        void 0 !== e.offerToReceiveAudio &&
          (e.offerToReceiveAudio = !!e.offerToReceiveAudio);
        var r = this.getTransceivers().find(function (e) {
          return "audio" === e.receiver.track.kind;
        });
        !1 === e.offerToReceiveAudio && r
          ? "sendrecv" === r.direction
            ? r.setDirection
              ? r.setDirection("sendonly")
              : (r.direction = "sendonly")
            : "recvonly" === r.direction &&
              (r.setDirection
                ? r.setDirection("inactive")
                : (r.direction = "inactive"))
          : !0 !== e.offerToReceiveAudio || r || this.addTransceiver("audio"),
          void 0 !== e.offerToReceiveVideo &&
            (e.offerToReceiveVideo = !!e.offerToReceiveVideo);
        var n = this.getTransceivers().find(function (e) {
          return "video" === e.receiver.track.kind;
        });
        !1 === e.offerToReceiveVideo && n
          ? "sendrecv" === n.direction
            ? n.setDirection
              ? n.setDirection("sendonly")
              : (n.direction = "sendonly")
            : "recvonly" === n.direction &&
              (n.setDirection
                ? n.setDirection("inactive")
                : (n.direction = "inactive"))
          : !0 !== e.offerToReceiveVideo || n || this.addTransceiver("video");
      }
      return t.apply(this, arguments);
    };
  }
  function ke(e) {
    "object" != typeof e ||
      e.AudioContext ||
      (e.AudioContext = e.webkitAudioContext);
  }
  t(me, "shimLocalStreamsAPI", function () {
    return ve;
  }),
    t(me, "shimRemoteStreamsAPI", function () {
      return ye;
    }),
    t(me, "shimCallbacksAPI", function () {
      return ge;
    }),
    t(me, "shimGetUserMedia", function () {
      return be;
    }),
    t(me, "shimConstraints", function () {
      return Ce;
    }),
    t(me, "shimRTCIceServerUrls", function () {
      return _e;
    }),
    t(me, "shimTrackEventTransceiver", function () {
      return Se;
    }),
    t(me, "shimCreateOfferLegacy", function () {
      return Te;
    }),
    t(me, "shimAudioContext", function () {
      return ke;
    });
  var we = {};
  function Pe(t) {
    if (
      !(
        !t.RTCIceCandidate ||
        (t.RTCIceCandidate && "foundation" in t.RTCIceCandidate.prototype)
      )
    ) {
      var r = t.RTCIceCandidate;
      (t.RTCIceCandidate = function (t) {
        if (
          ("object" == typeof t &&
            t.candidate &&
            0 === t.candidate.indexOf("a=") &&
            ((t = JSON.parse(JSON.stringify(t))).candidate =
              t.candidate.substr(2)),
          t.candidate && t.candidate.length)
        ) {
          var n = new r(t),
            i = e(W).parseCandidate(t.candidate),
            o = Object.assign(n, i);
          return (
            (o.toJSON = function () {
              return {
                candidate: o.candidate,
                sdpMid: o.sdpMid,
                sdpMLineIndex: o.sdpMLineIndex,
                usernameFragment: o.usernameFragment,
              };
            }),
            o
          );
        }
        return new r(t);
      }),
        (t.RTCIceCandidate.prototype = r.prototype),
        C(t, "icecandidate", function (e) {
          return (
            e.candidate &&
              Object.defineProperty(e, "candidate", {
                value: new t.RTCIceCandidate(e.candidate),
                writable: "false",
              }),
            e
          );
        });
    }
  }
  function Re(t, r) {
    if (t.RTCPeerConnection) {
      "sctp" in t.RTCPeerConnection.prototype ||
        Object.defineProperty(t.RTCPeerConnection.prototype, "sctp", {
          get: function () {
            return void 0 === this._sctp ? null : this._sctp;
          },
        });
      var n = function (t) {
          if (!t || !t.sdp) return !1;
          var r = e(W).splitSections(t.sdp);
          return (
            r.shift(),
            r.some(function (t) {
              var r = e(W).parseMLine(t);
              return (
                r &&
                "application" === r.kind &&
                -1 !== r.protocol.indexOf("SCTP")
              );
            })
          );
        },
        i = function (e) {
          var t = e.sdp.match(/mozilla...THIS_IS_SDPARTA-(\d+)/);
          if (null === t || t.length < 2) return -1;
          var r = parseInt(t[1], 10);
          return r != r ? -1 : r;
        },
        o = function (e) {
          var t = 65536;
          return (
            "firefox" === r.browser &&
              (t =
                r.version < 57
                  ? -1 === e
                    ? 16384
                    : 2147483637
                  : r.version < 60
                    ? 57 === r.version
                      ? 65535
                      : 65536
                    : 2147483637),
            t
          );
        },
        a = function (t, n) {
          var i = 65536;
          "firefox" === r.browser && 57 === r.version && (i = 65535);
          var o = e(W).matchPrefix(t.sdp, "a=max-message-size:");
          return (
            o.length > 0
              ? (i = parseInt(o[0].substr(19), 10))
              : "firefox" === r.browser && -1 !== n && (i = 2147483637),
            i
          );
        },
        s = t.RTCPeerConnection.prototype.setRemoteDescription;
      t.RTCPeerConnection.prototype.setRemoteDescription = function () {
        if (((this._sctp = null), "chrome" === r.browser && r.version >= 76)) {
          var e = this.getConfiguration().sdpSemantics;
          "plan-b" === e &&
            Object.defineProperty(this, "sctp", {
              get: function () {
                return void 0 === this._sctp ? null : this._sctp;
              },
              enumerable: !0,
              configurable: !0,
            });
        }
        if (n(arguments[0])) {
          var t,
            c = i(arguments[0]),
            p = o(c),
            d = a(arguments[0], c);
          t =
            0 === p && 0 === d
              ? Number.POSITIVE_INFINITY
              : 0 === p || 0 === d
                ? Math.max(p, d)
                : Math.min(p, d);
          var u = {};
          Object.defineProperty(u, "maxMessageSize", {
            get: function () {
              return t;
            },
          }),
            (this._sctp = u);
        }
        return s.apply(this, arguments);
      };
    }
  }
  function Ee(e) {
    var t = function (e, t) {
      var r = e.send;
      e.send = function () {
        var n = arguments[0],
          i = n.length || n.size || n.byteLength;
        if ("open" === e.readyState && t.sctp && i > t.sctp.maxMessageSize)
          throw new TypeError(
            "Message too large (can send a maximum of " +
              t.sctp.maxMessageSize +
              " bytes)",
          );
        return r.apply(e, arguments);
      };
    };
    if (
      e.RTCPeerConnection &&
      "createDataChannel" in e.RTCPeerConnection.prototype
    ) {
      var r = e.RTCPeerConnection.prototype.createDataChannel;
      (e.RTCPeerConnection.prototype.createDataChannel = function () {
        var e = r.apply(this, arguments);
        return t(e, this), e;
      }),
        C(e, "datachannel", function (e) {
          return t(e.channel, e.target), e;
        });
    }
  }
  function xe(e) {
    if (
      e.RTCPeerConnection &&
      !("connectionState" in e.RTCPeerConnection.prototype)
    ) {
      var t = e.RTCPeerConnection.prototype;
      Object.defineProperty(t, "connectionState", {
        get: function () {
          return (
            { completed: "connected", checking: "connecting" }[
              this.iceConnectionState
            ] || this.iceConnectionState
          );
        },
        enumerable: !0,
        configurable: !0,
      }),
        Object.defineProperty(t, "onconnectionstatechange", {
          get: function () {
            return this._onconnectionstatechange || null;
          },
          set: function (e) {
            this._onconnectionstatechange &&
              (this.removeEventListener(
                "connectionstatechange",
                this._onconnectionstatechange,
              ),
              delete this._onconnectionstatechange),
              e &&
                this.addEventListener(
                  "connectionstatechange",
                  (this._onconnectionstatechange = e),
                );
          },
          enumerable: !0,
          configurable: !0,
        }),
        ["setLocalDescription", "setRemoteDescription"].forEach(function (e) {
          var r = t[e];
          t[e] = function () {
            return (
              this._connectionstatechangepoly ||
                ((this._connectionstatechangepoly = function (e) {
                  var t = e.target;
                  if (t._lastConnectionState !== t.connectionState) {
                    t._lastConnectionState = t.connectionState;
                    var r = new Event("connectionstatechange", e);
                    t.dispatchEvent(r);
                  }
                  return e;
                }),
                this.addEventListener(
                  "iceconnectionstatechange",
                  this._connectionstatechangepoly,
                )),
              r.apply(this, arguments)
            );
          };
        });
    }
  }
  function De(e, t) {
    if (
      e.RTCPeerConnection &&
      !(
        ("chrome" === t.browser && t.version >= 71) ||
        ("safari" === t.browser && t.version >= 605)
      )
    ) {
      var r = e.RTCPeerConnection.prototype.setRemoteDescription;
      e.RTCPeerConnection.prototype.setRemoteDescription = function (t) {
        if (t && t.sdp && -1 !== t.sdp.indexOf("\na=extmap-allow-mixed")) {
          var n = t.sdp
            .split("\n")
            .filter(function (e) {
              return "a=extmap-allow-mixed" !== e.trim();
            })
            .join("\n");
          e.RTCSessionDescription && t instanceof e.RTCSessionDescription
            ? (arguments[0] = new e.RTCSessionDescription({
                type: t.type,
                sdp: n,
              }))
            : (t.sdp = n);
        }
        return r.apply(this, arguments);
      };
    }
  }
  function Oe(e, t) {
    if (e.RTCPeerConnection && e.RTCPeerConnection.prototype) {
      var r = e.RTCPeerConnection.prototype.addIceCandidate;
      r &&
        0 !== r.length &&
        (e.RTCPeerConnection.prototype.addIceCandidate = function () {
          return arguments[0]
            ? (("chrome" === t.browser && t.version < 78) ||
                ("firefox" === t.browser && t.version < 68) ||
                "safari" === t.browser) &&
              arguments[0] &&
              "" === arguments[0].candidate
              ? Promise.resolve()
              : r.apply(this, arguments)
            : (arguments[1] && arguments[1].apply(null), Promise.resolve());
        });
    }
  }
  t(we, "shimRTCIceCandidate", function () {
    return Pe;
  }),
    t(we, "shimMaxMessageSize", function () {
      return Re;
    }),
    t(we, "shimSendThrowTypeError", function () {
      return Ee;
    }),
    t(we, "shimConnectionState", function () {
      return xe;
    }),
    t(we, "removeExtmapAllowMixed", function () {
      return De;
    }),
    t(we, "shimAddIceCandidateNullOrEmpty", function () {
      return Oe;
    });
  var Ie,
    Me,
    je = (function () {
      var e = (
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        ).window,
        t =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : { shimChrome: !0, shimFirefox: !0, shimEdge: !0, shimSafari: !0 },
        r = T,
        n = w(e),
        i = {
          browserDetails: n,
          commonShim: we,
          extractVersion: b,
          disableLog: _,
          disableWarnings: S,
        };
      switch (n.browser) {
        case "chrome":
          if (!D || !D.shimPeerConnection || !t.shimChrome)
            return r("Chrome shim is not included in this adapter release."), i;
          if (null === n.version)
            return r("Chrome shim can not determine version, not shimming."), i;
          r("adapter.js shimming chrome."),
            (i.browserShim = D),
            we.shimAddIceCandidateNullOrEmpty(e, n),
            D.shimGetUserMedia(e, n),
            D.shimMediaStream(e, n),
            D.shimPeerConnection(e, n),
            D.shimOnTrack(e, n),
            D.shimAddTrackRemoveTrack(e, n),
            D.shimGetSendersWithDtmf(e, n),
            D.shimGetStats(e, n),
            D.shimSenderReceiverGetStats(e, n),
            D.fixNegotiationNeeded(e, n),
            we.shimRTCIceCandidate(e, n),
            we.shimConnectionState(e, n),
            we.shimMaxMessageSize(e, n),
            we.shimSendThrowTypeError(e, n),
            we.removeExtmapAllowMixed(e, n);
          break;
        case "firefox":
          if (!re || !re.shimPeerConnection || !t.shimFirefox)
            return (
              r("Firefox shim is not included in this adapter release."), i
            );
          r("adapter.js shimming firefox."),
            (i.browserShim = re),
            we.shimAddIceCandidateNullOrEmpty(e, n),
            re.shimGetUserMedia(e, n),
            re.shimPeerConnection(e, n),
            re.shimOnTrack(e, n),
            re.shimRemoveStream(e, n),
            re.shimSenderGetStats(e, n),
            re.shimReceiverGetStats(e, n),
            re.shimRTCDataChannel(e, n),
            re.shimAddTransceiver(e, n),
            re.shimGetParameters(e, n),
            re.shimCreateOffer(e, n),
            re.shimCreateAnswer(e, n),
            we.shimRTCIceCandidate(e, n),
            we.shimConnectionState(e, n),
            we.shimMaxMessageSize(e, n),
            we.shimSendThrowTypeError(e, n);
          break;
        case "edge":
          if (!V || !V.shimPeerConnection || !t.shimEdge)
            return (
              r("MS edge shim is not included in this adapter release."), i
            );
          r("adapter.js shimming edge."),
            (i.browserShim = V),
            V.shimGetUserMedia(e, n),
            V.shimGetDisplayMedia(e, n),
            V.shimPeerConnection(e, n),
            V.shimReplaceTrack(e, n),
            we.shimMaxMessageSize(e, n),
            we.shimSendThrowTypeError(e, n);
          break;
        case "safari":
          if (!me || !t.shimSafari)
            return r("Safari shim is not included in this adapter release."), i;
          r("adapter.js shimming safari."),
            (i.browserShim = me),
            we.shimAddIceCandidateNullOrEmpty(e, n),
            me.shimRTCIceServerUrls(e, n),
            me.shimCreateOfferLegacy(e, n),
            me.shimCallbacksAPI(e, n),
            me.shimLocalStreamsAPI(e, n),
            me.shimRemoteStreamsAPI(e, n),
            me.shimTrackEventTransceiver(e, n),
            me.shimGetUserMedia(e, n),
            me.shimAudioContext(e, n),
            we.shimRTCIceCandidate(e, n),
            we.shimMaxMessageSize(e, n),
            we.shimSendThrowTypeError(e, n),
            we.removeExtmapAllowMixed(e, n);
          break;
        default:
          r("Unsupported browser!");
      }
      return i;
    })({ window: "undefined" == typeof window ? void 0 : window }),
    Ae = je,
    Le = Ae.default || Ae,
    Be = new (((Ie = function () {
      (this.isIOS = ["iPad", "iPhone", "iPod"].includes(navigator.platform)),
        (this.supportedBrowsers = ["firefox", "chrome", "safari"]),
        (this.minFirefoxVersion = 59),
        (this.minChromeVersion = 72),
        (this.minSafariVersion = 605);
    }).prototype.isWebRTCSupported = function () {
      return "undefined" != typeof RTCPeerConnection;
    }),
    (Ie.prototype.isBrowserSupported = function () {
      var e = this.getBrowser(),
        t = this.getVersion();
      return (
        !!this.supportedBrowsers.includes(e) &&
        ("chrome" === e
          ? t >= this.minChromeVersion
          : "firefox" === e
            ? t >= this.minFirefoxVersion
            : "safari" === e && !this.isIOS && t >= this.minSafariVersion)
      );
    }),
    (Ie.prototype.getBrowser = function () {
      return Le.browserDetails.browser;
    }),
    (Ie.prototype.getVersion = function () {
      return Le.browserDetails.version || 0;
    }),
    (Ie.prototype.isUnifiedPlanSupported = function () {
      var e,
        t = this.getBrowser(),
        r = Le.browserDetails.version || 0;
      if ("chrome" === t && r < this.minChromeVersion) return !1;
      if ("firefox" === t && r >= this.minFirefoxVersion) return !0;
      if (
        !window.RTCRtpTransceiver ||
        !("currentDirection" in RTCRtpTransceiver.prototype)
      )
        return !1;
      var n = !1;
      try {
        (e = new RTCPeerConnection()).addTransceiver("audio"), (n = !0);
      } catch (e) {
      } finally {
        e && e.close();
      }
      return n;
    }),
    (Ie.prototype.toString = function () {
      return "Supports:\n    browser:"
        .concat(this.getBrowser(), "\n    version:")
        .concat(this.getVersion(), "\n    isIOS:")
        .concat(this.isIOS, "\n    isWebRTCSupported:")
        .concat(this.isWebRTCSupported(), "\n    isBrowserSupported:")
        .concat(this.isBrowserSupported(), "\n    isUnifiedPlanSupported:")
        .concat(this.isUnifiedPlanSupported());
    }),
    Ie)(),
    Ne = {
      iceServers: [
        { urls: "stun:stun.l.google.com:19302" },
        {
          urls: [
            "turn:eu-0.turn.peerjs.com:3478",
            "turn:us-0.turn.peerjs.com:3478",
          ],
          username: "peerjs",
          credential: "peerjsp",
        },
      ],
      sdpSemantics: "unified-plan",
    },
    Fe = new (((Me = function () {
      (this.CLOUD_HOST = "0.peerjs.com"),
        (this.CLOUD_PORT = 443),
        (this.chunkedBrowsers = { Chrome: 1, chrome: 1 }),
        (this.chunkedMTU = 16300),
        (this.defaultConfig = Ne),
        (this.browser = Be.getBrowser()),
        (this.browserVersion = Be.getVersion()),
        (this.supports = (function () {
          var e,
            t = {
              browser: Be.isBrowserSupported(),
              webRTC: Be.isWebRTCSupported(),
              audioVideo: !1,
              data: !1,
              binaryBlob: !1,
              reliable: !1,
            };
          if (!t.webRTC) return t;
          try {
            (e = new RTCPeerConnection(Ne)), (t.audioVideo = !0);
            var r = void 0;
            try {
              (r = e.createDataChannel("_PEERJSTEST", { ordered: !0 })),
                (t.data = !0),
                (t.reliable = !!r.ordered);
              try {
                (r.binaryType = "blob"), (t.binaryBlob = !Be.isIOS);
              } catch (e) {}
            } catch (e) {
            } finally {
              r && r.close();
            }
          } catch (e) {
          } finally {
            e && e.close();
          }
          return t;
        })()),
        (this.pack = e(r).pack),
        (this.unpack = e(r).unpack),
        (this._dataCount = 1);
    }).prototype.noop = function () {}),
    (Me.prototype.validateId = function (e) {
      return !e || /^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/.test(e);
    }),
    (Me.prototype.chunk = function (e) {
      for (
        var t = [], r = e.size, n = Math.ceil(r / Fe.chunkedMTU), i = 0, o = 0;
        o < r;

      ) {
        var a = Math.min(r, o + Fe.chunkedMTU),
          s = e.slice(o, a),
          c = { __peerData: this._dataCount, n: i, data: s, total: n };
        t.push(c), (o = a), i++;
      }
      return this._dataCount++, t;
    }),
    (Me.prototype.blobToArrayBuffer = function (e, t) {
      var r = new FileReader();
      return (
        (r.onload = function (e) {
          e.target && t(e.target.result);
        }),
        r.readAsArrayBuffer(e),
        r
      );
    }),
    (Me.prototype.binaryStringToArrayBuffer = function (e) {
      for (var t = new Uint8Array(e.length), r = 0; r < e.length; r++)
        t[r] = 255 & e.charCodeAt(r);
      return t.buffer;
    }),
    (Me.prototype.randomToken = function () {
      return Math.random().toString(36).slice(2);
    }),
    (Me.prototype.isSecure = function () {
      return "https:" === location.protocol;
    }),
    Me)(),
    Ue = {};
  t(
    Ue,
    "Peer",
    function () {
      return Jt;
    },
    function (e) {
      return (Jt = e);
    },
  );
  var ze,
    Ge = Object.prototype.hasOwnProperty,
    Ve = "~";
  function Je() {}
  function We(e, t, r) {
    (this.fn = e), (this.context = t), (this.once = r || !1);
  }
  function He(e, t, r, n, i) {
    if ("function" != typeof r)
      throw new TypeError("The listener must be a function");
    var o = new We(r, n || e, i),
      a = Ve ? Ve + t : t;
    return (
      e._events[a]
        ? e._events[a].fn
          ? (e._events[a] = [e._events[a], o])
          : e._events[a].push(o)
        : ((e._events[a] = o), e._eventsCount++),
      e
    );
  }
  function Ke(e, t) {
    0 == --e._eventsCount ? (e._events = new Je()) : delete e._events[t];
  }
  function Ye() {
    (this._events = new Je()), (this._eventsCount = 0);
  }
  Object.create &&
    ((Je.prototype = Object.create(null)), new Je().__proto__ || (Ve = !1)),
    (Ye.prototype.eventNames = function () {
      var e,
        t,
        r = [];
      if (0 === this._eventsCount) return r;
      for (t in (e = this._events))
        Ge.call(e, t) && r.push(Ve ? t.slice(1) : t);
      return Object.getOwnPropertySymbols
        ? r.concat(Object.getOwnPropertySymbols(e))
        : r;
    }),
    (Ye.prototype.listeners = function (e) {
      var t = Ve ? Ve + e : e,
        r = this._events[t];
      if (!r) return [];
      if (r.fn) return [r.fn];
      for (var n = 0, i = r.length, o = new Array(i); n < i; n++)
        o[n] = r[n].fn;
      return o;
    }),
    (Ye.prototype.listenerCount = function (e) {
      var t = Ve ? Ve + e : e,
        r = this._events[t];
      return r ? (r.fn ? 1 : r.length) : 0;
    }),
    (Ye.prototype.emit = function (e, t, r, n, i, o) {
      var a = Ve ? Ve + e : e;
      if (!this._events[a]) return !1;
      var s,
        c,
        p = this._events[a],
        d = arguments.length;
      if (p.fn) {
        switch ((p.once && this.removeListener(e, p.fn, void 0, !0), d)) {
          case 1:
            return p.fn.call(p.context), !0;
          case 2:
            return p.fn.call(p.context, t), !0;
          case 3:
            return p.fn.call(p.context, t, r), !0;
          case 4:
            return p.fn.call(p.context, t, r, n), !0;
          case 5:
            return p.fn.call(p.context, t, r, n, i), !0;
          case 6:
            return p.fn.call(p.context, t, r, n, i, o), !0;
        }
        for (c = 1, s = new Array(d - 1); c < d; c++) s[c - 1] = arguments[c];
        p.fn.apply(p.context, s);
      } else {
        var u,
          l = p.length;
        for (c = 0; c < l; c++)
          switch (
            (p[c].once && this.removeListener(e, p[c].fn, void 0, !0), d)
          ) {
            case 1:
              p[c].fn.call(p[c].context);
              break;
            case 2:
              p[c].fn.call(p[c].context, t);
              break;
            case 3:
              p[c].fn.call(p[c].context, t, r);
              break;
            case 4:
              p[c].fn.call(p[c].context, t, r, n);
              break;
            default:
              if (!s)
                for (u = 1, s = new Array(d - 1); u < d; u++)
                  s[u - 1] = arguments[u];
              p[c].fn.apply(p[c].context, s);
          }
      }
      return !0;
    }),
    (Ye.prototype.on = function (e, t, r) {
      return He(this, e, t, r, !1);
    }),
    (Ye.prototype.once = function (e, t, r) {
      return He(this, e, t, r, !0);
    }),
    (Ye.prototype.removeListener = function (e, t, r, n) {
      var i = Ve ? Ve + e : e;
      if (!this._events[i]) return this;
      if (!t) return Ke(this, i), this;
      var o = this._events[i];
      if (o.fn)
        o.fn !== t || (n && !o.once) || (r && o.context !== r) || Ke(this, i);
      else {
        for (var a = 0, s = [], c = o.length; a < c; a++)
          (o[a].fn !== t || (n && !o[a].once) || (r && o[a].context !== r)) &&
            s.push(o[a]);
        s.length ? (this._events[i] = 1 === s.length ? s[0] : s) : Ke(this, i);
      }
      return this;
    }),
    (Ye.prototype.removeAllListeners = function (e) {
      var t;
      return (
        e
          ? ((t = Ve ? Ve + e : e), this._events[t] && Ke(this, t))
          : ((this._events = new Je()), (this._eventsCount = 0)),
        this
      );
    }),
    (Ye.prototype.off = Ye.prototype.removeListener),
    (Ye.prototype.addListener = Ye.prototype.on),
    (Ye.prefixed = Ve),
    (Ye.EventEmitter = Ye),
    (ze = Ye);
  var qe = {};
  t(
    qe,
    "LogLevel",
    function () {
      return Qe;
    },
    function (e) {
      return (Qe = e);
    },
  ),
    t(
      qe,
      "default",
      function () {
        return st;
      },
      function (e) {
        return (st = e);
      },
    );
  var Qe,
    Xe = function (e, t) {
      var r = "function" == typeof Symbol && e[Symbol.iterator];
      if (!r) return e;
      var n,
        i,
        o = r.call(e),
        a = [];
      try {
        for (; (void 0 === t || t-- > 0) && !(n = o.next()).done; )
          a.push(n.value);
      } catch (e) {
        i = { error: e };
      } finally {
        try {
          n && !n.done && (r = o.return) && r.call(o);
        } finally {
          if (i) throw i.error;
        }
      }
      return a;
    },
    Ze = function (e, t, r) {
      if (r || 2 === arguments.length)
        for (var n, i = 0, o = t.length; i < o; i++)
          (!n && i in t) ||
            (n || (n = Array.prototype.slice.call(t, 0, i)), (n[i] = t[i]));
      return e.concat(n || Array.prototype.slice.call(t));
    },
    $e = "PeerJS: ";
  !(function (e) {
    (e[(e.Disabled = 0)] = "Disabled"),
      (e[(e.Errors = 1)] = "Errors"),
      (e[(e.Warnings = 2)] = "Warnings"),
      (e[(e.All = 3)] = "All");
  })(Qe || (Qe = {}));
  var et,
    tt,
    rt,
    nt,
    it,
    ot,
    at =
      ((et = function () {
        this._logLevel = Qe.Disabled;
      }),
      Object.defineProperty(et.prototype, "logLevel", {
        get: function () {
          return this._logLevel;
        },
        set: function (e) {
          this._logLevel = e;
        },
        enumerable: !1,
        configurable: !0,
      }),
      (et.prototype.log = function () {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        this._logLevel >= Qe.All &&
          this._print.apply(this, Ze([Qe.All], Xe(e), !1));
      }),
      (et.prototype.warn = function () {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        this._logLevel >= Qe.Warnings &&
          this._print.apply(this, Ze([Qe.Warnings], Xe(e), !1));
      }),
      (et.prototype.error = function () {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        this._logLevel >= Qe.Errors &&
          this._print.apply(this, Ze([Qe.Errors], Xe(e), !1));
      }),
      (et.prototype.setLogFunction = function (e) {
        this._print = e;
      }),
      (et.prototype._print = function (e) {
        for (var t = [], r = 1; r < arguments.length; r++)
          t[r - 1] = arguments[r];
        var n = Ze([$e], Xe(t), !1);
        for (var i in n)
          n[i] instanceof Error &&
            (n[i] = "(" + n[i].name + ") " + n[i].message);
        e >= Qe.All
          ? console.log.apply(console, Ze([], Xe(n), !1))
          : e >= Qe.Warnings
            ? console.warn.apply(console, Ze(["WARNING"], Xe(n), !1))
            : e >= Qe.Errors &&
              console.error.apply(console, Ze(["ERROR"], Xe(n), !1));
      }),
      et),
    st = new at(),
    ct = {};
  t(
    ct,
    "Socket",
    function () {
      return mt;
    },
    function (e) {
      return (mt = e);
    },
  ),
    (function (e) {
      (e.Data = "data"), (e.Media = "media");
    })(tt || (tt = {})),
    (function (e) {
      (e.BrowserIncompatible = "browser-incompatible"),
        (e.Disconnected = "disconnected"),
        (e.InvalidID = "invalid-id"),
        (e.InvalidKey = "invalid-key"),
        (e.Network = "network"),
        (e.PeerUnavailable = "peer-unavailable"),
        (e.SslUnavailable = "ssl-unavailable"),
        (e.ServerError = "server-error"),
        (e.SocketError = "socket-error"),
        (e.SocketClosed = "socket-closed"),
        (e.UnavailableID = "unavailable-id"),
        (e.WebRTC = "webrtc");
    })(rt || (rt = {})),
    (function (e) {
      (e.Binary = "binary"), (e.BinaryUTF8 = "binary-utf8"), (e.JSON = "json");
    })(nt || (nt = {})),
    (function (e) {
      (e.Message = "message"),
        (e.Disconnected = "disconnected"),
        (e.Error = "error"),
        (e.Close = "close");
    })(it || (it = {})),
    (function (e) {
      (e.Heartbeat = "HEARTBEAT"),
        (e.Candidate = "CANDIDATE"),
        (e.Offer = "OFFER"),
        (e.Answer = "ANSWER"),
        (e.Open = "OPEN"),
        (e.Error = "ERROR"),
        (e.IdTaken = "ID-TAKEN"),
        (e.InvalidKey = "INVALID-KEY"),
        (e.Leave = "LEAVE"),
        (e.Expire = "EXPIRE");
    })(ot || (ot = {}));
  var pt;
  pt = JSON.parse(
    '{"name":"peerjs","version":"1.4.7","keywords":["peerjs","webrtc","p2p","rtc"],"description":"PeerJS client","homepage":"https://peerjs.com","bugs":{"url":"https://github.com/peers/peerjs/issues"},"repository":{"type":"git","url":"https://github.com/peers/peerjs"},"license":"MIT","contributors":["Michelle Bu <michelle@michellebu.com>","afrokick <devbyru@gmail.com>","ericz <really.ez@gmail.com>","Jairo <kidandcat@gmail.com>","Jonas Gloning <34194370+jonasgloning@users.noreply.github.com>","Jairo Caro-Accino Viciana <jairo@galax.be>","Carlos Caballero <carlos.caballero.gonzalez@gmail.com>","hc <hheennrryy@gmail.com>","Muhammad Asif <capripio@gmail.com>","PrashoonB <prashoonbhattacharjee@gmail.com>","Harsh Bardhan Mishra <47351025+HarshCasper@users.noreply.github.com>","akotynski <aleksanderkotbury@gmail.com>","lmb <i@lmb.io>","Jairooo <jairocaro@msn.com>","Moritz Stückler <moritz.stueckler@gmail.com>","Simon <crydotsnakegithub@gmail.com>","Denis Lukov <denismassters@gmail.com>","Philipp Hancke <fippo@andyet.net>","Hans Oksendahl <hansoksendahl@gmail.com>","Jess <jessachandler@gmail.com>","khankuan <khankuan@gmail.com>","DUODVK <kurmanov.work@gmail.com>","XiZhao <kwang1imsa@gmail.com>","Matthias Lohr <matthias@lohr.me>","=frank tree <=frnktrb@googlemail.com>","Andre Eckardt <aeckardt@outlook.com>","Chris Cowan <agentme49@gmail.com>","Alex Chuev <alex@chuev.com>","alxnull <alxnull@e.mail.de>","Yemel Jardi <angel.jardi@gmail.com>","Ben Parnell <benjaminparnell.94@gmail.com>","Benny Lichtner <bennlich@gmail.com>","fresheneesz <bitetrudpublic@gmail.com>","bob.barstead@exaptive.com <bob.barstead@exaptive.com>","chandika <chandika@gmail.com>","emersion <contact@emersion.fr>","Christopher Van <cvan@users.noreply.github.com>","eddieherm <edhermoso@gmail.com>","Eduardo Pinho <enet4mikeenet@gmail.com>","Evandro Zanatta <ezanatta@tray.net.br>","Gardner Bickford <gardner@users.noreply.github.com>","Gian Luca <gianluca.cecchi@cynny.com>","PatrickJS <github@gdi2290.com>","jonnyf <github@jonathanfoss.co.uk>","Hizkia Felix <hizkifw@gmail.com>","Hristo Oskov <hristo.oskov@gmail.com>","Isaac Madwed <i.madwed@gmail.com>","Ilya Konanykhin <ilya.konanykhin@gmail.com>","jasonbarry <jasbarry@me.com>","Jonathan Burke <jonathan.burke.1311@googlemail.com>","Josh Hamit <josh.hamit@gmail.com>","Jordan Austin <jrax86@gmail.com>","Joel Wetzell <jwetzell@yahoo.com>","xizhao <kevin.wang@cloudera.com>","Alberto Torres <kungfoobar@gmail.com>","Jonathan Mayol <mayoljonathan@gmail.com>","Jefferson Felix <me@jsfelix.dev>","Rolf Erik Lekang <me@rolflekang.com>","Kevin Mai-Husan Chia <mhchia@users.noreply.github.com>","Pepijn de Vos <pepijndevos@gmail.com>","JooYoung <qkdlql@naver.com>","Tobias Speicher <rootcommander@gmail.com>","Steve Blaurock <sblaurock@gmail.com>","Kyrylo Shegeda <shegeda@ualberta.ca>","Diwank Singh Tomer <singh@diwank.name>","Sören Balko <Soeren.Balko@gmail.com>","Arpit Solanki <solankiarpit1997@gmail.com>","Yuki Ito <yuki@gnnk.net>","Artur Zayats <zag2art@gmail.com>"],"funding":{"type":"opencollective","url":"https://opencollective.com/peer"},"collective":{"type":"opencollective","url":"https://opencollective.com/peer"},"files":["dist/*"],"sideEffects":["lib/global.ts","lib/supports.ts"],"main":"dist/bundler.cjs","module":"dist/bundler.mjs","browser-minified":"dist/peerjs.min.js","browser-unminified":"dist/peerjs.js","types":"dist/types.d.ts","engines":{"node":">= 10"},"targets":{"types":{"source":"lib/exports.ts"},"main":{"source":"lib/exports.ts","sourceMap":{"inlineSources":true}},"module":{"source":"lib/exports.ts","includeNodeModules":["eventemitter3"],"sourceMap":{"inlineSources":true}},"browser-minified":{"context":"browser","outputFormat":"global","optimize":true,"engines":{"browsers":"cover 99%, not dead"},"source":"lib/global.ts"},"browser-unminified":{"context":"browser","outputFormat":"global","optimize":false,"engines":{"browsers":"cover 99%, not dead"},"source":"lib/global.ts"}},"scripts":{"contributors":"git-authors-cli --print=false && prettier --write package.json && git add package.json package-lock.json && git commit -m \\"chore(contributors): update and sort contributors list\\"","check":"tsc --noEmit","watch":"parcel watch","build":"rm -rf dist && parcel build","prepublishOnly":"npm run build","test":"mocha -r ts-node/register -r jsdom-global/register test/**/*.ts","format":"prettier --write .","semantic-release":"semantic-release"},"devDependencies":{"@parcel/config-default":"^2.5.0","@parcel/packager-ts":"^2.5.0","@parcel/transformer-typescript-tsc":"^2.5.0","@parcel/transformer-typescript-types":"^2.5.0","@semantic-release/changelog":"^6.0.1","@semantic-release/git":"^10.0.1","@types/chai":"^4.3.0","@types/mocha":"^9.1.0","@types/node":"^17.0.18","chai":"^4.3.6","git-authors-cli":"^1.0.40","jsdom":"^19.0.0","jsdom-global":"^3.0.2","mocha":"^9.2.0","mock-socket":"8.0.5","parcel":"^2.5.0","parcel-transformer-tsc-sourcemaps":"^1.0.2","prettier":"^2.6.2","semantic-release":"^19.0.2","standard":"^16.0.4","ts-node":"^10.5.0","typescript":"^4.5.5"},"dependencies":{"@swc/helpers":"^0.3.13","eventemitter3":"^4.0.7","peerjs-js-binarypack":"1.0.1","webrtc-adapter":"^7.7.1"}}',
  );
  var dt,
    ut =
      ((dt = function (e, t) {
        return (dt =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (e, t) {
              e.__proto__ = t;
            }) ||
          function (e, t) {
            for (var r in t)
              Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
          })(e, t);
      }),
      function (e, t) {
        var r = function () {
          this.constructor = e;
        };
        if ("function" != typeof t && null !== t)
          throw new TypeError(
            "Class extends value " +
              String(t) +
              " is not a constructor or null",
          );
        dt(e, t),
          (e.prototype =
            null === t
              ? Object.create(t)
              : ((r.prototype = t.prototype), new r()));
      }),
    lt = function (e, t) {
      var r = "function" == typeof Symbol && e[Symbol.iterator];
      if (!r) return e;
      var n,
        i,
        o = r.call(e),
        a = [];
      try {
        for (; (void 0 === t || t-- > 0) && !(n = o.next()).done; )
          a.push(n.value);
      } catch (e) {
        i = { error: e };
      } finally {
        try {
          n && !n.done && (r = o.return) && r.call(o);
        } finally {
          if (i) throw i.error;
        }
      }
      return a;
    },
    ft = function (e, t, r) {
      if (r || 2 === arguments.length)
        for (var n, i = 0, o = t.length; i < o; i++)
          (!n && i in t) ||
            (n || (n = Array.prototype.slice.call(t, 0, i)), (n[i] = t[i]));
      return e.concat(n || Array.prototype.slice.call(t));
    },
    ht = function (e) {
      var t = "function" == typeof Symbol && Symbol.iterator,
        r = t && e[t],
        n = 0;
      if (r) return r.call(e);
      if (e && "number" == typeof e.length)
        return {
          next: function () {
            return (
              e && n >= e.length && (e = void 0),
              { value: e && e[n++], done: !e }
            );
          },
        };
      throw new TypeError(
        t ? "Object is not iterable." : "Symbol.iterator is not defined.",
      );
    },
    mt = (function (e) {
      var t = function (t, r, n, i, o, a) {
        void 0 === a && (a = 5e3);
        var s = e.call(this) || this;
        (s.pingInterval = a), (s._disconnected = !0), (s._messagesQueue = []);
        var c = t ? "wss://" : "ws://";
        return (s._baseUrl = c + r + ":" + n + i + "peerjs?key=" + o), s;
      };
      return (
        ut(t, e),
        (t.prototype.start = function (e, t) {
          var r = this;
          this._id = e;
          var n = ""
            .concat(this._baseUrl, "&id=")
            .concat(e, "&token=")
            .concat(t);
          !this._socket &&
            this._disconnected &&
            ((this._socket = new WebSocket(n + "&version=" + pt.version)),
            (this._disconnected = !1),
            (this._socket.onmessage = function (e) {
              var t;
              try {
                (t = JSON.parse(e.data)),
                  qe.default.log("Server message received:", t);
              } catch (t) {
                return void qe.default.log("Invalid server message", e.data);
              }
              r.emit(it.Message, t);
            }),
            (this._socket.onclose = function (e) {
              r._disconnected ||
                (qe.default.log("Socket closed.", e),
                r._cleanup(),
                (r._disconnected = !0),
                r.emit(it.Disconnected));
            }),
            (this._socket.onopen = function () {
              r._disconnected ||
                (r._sendQueuedMessages(),
                qe.default.log("Socket open"),
                r._scheduleHeartbeat());
            }));
        }),
        (t.prototype._scheduleHeartbeat = function () {
          var e = this;
          this._wsPingTimer = setTimeout(function () {
            e._sendHeartbeat();
          }, this.pingInterval);
        }),
        (t.prototype._sendHeartbeat = function () {
          if (this._wsOpen()) {
            var e = JSON.stringify({ type: ot.Heartbeat });
            this._socket.send(e), this._scheduleHeartbeat();
          } else qe.default.log("Cannot send heartbeat, because socket closed");
        }),
        (t.prototype._wsOpen = function () {
          return !!this._socket && 1 === this._socket.readyState;
        }),
        (t.prototype._sendQueuedMessages = function () {
          var e,
            t,
            r = ft([], lt(this._messagesQueue), !1);
          this._messagesQueue = [];
          try {
            for (var n = ht(r), i = n.next(); !i.done; i = n.next()) {
              var o = i.value;
              this.send(o);
            }
          } catch (t) {
            e = { error: t };
          } finally {
            try {
              i && !i.done && (t = n.return) && t.call(n);
            } finally {
              if (e) throw e.error;
            }
          }
        }),
        (t.prototype.send = function (e) {
          if (!this._disconnected)
            if (this._id)
              if (e.type) {
                if (this._wsOpen()) {
                  var t = JSON.stringify(e);
                  this._socket.send(t);
                }
              } else this.emit(it.Error, "Invalid message");
            else this._messagesQueue.push(e);
        }),
        (t.prototype.close = function () {
          this._disconnected || (this._cleanup(), (this._disconnected = !0));
        }),
        (t.prototype._cleanup = function () {
          this._socket &&
            ((this._socket.onopen =
              this._socket.onmessage =
              this._socket.onclose =
                null),
            this._socket.close(),
            (this._socket = void 0)),
            clearTimeout(this._wsPingTimer);
        }),
        t
      );
    })(ze.EventEmitter),
    vt = {};
  t(
    vt,
    "MediaConnection",
    function () {
      return Et;
    },
    function (e) {
      return (Et = e);
    },
  );
  var yt = {};
  t(
    yt,
    "Negotiator",
    function () {
      return _t;
    },
    function (e) {
      return (_t = e);
    },
  );
  var gt = function () {
      return (
        (gt =
          Object.assign ||
          function (e) {
            for (var t, r = 1, n = arguments.length; r < n; r++)
              for (var i in (t = arguments[r]))
                Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e;
          }),
        gt.apply(this, arguments)
      );
    },
    bt = function (e, t, r, n) {
      return new (r || (r = Promise))(function (i, o) {
        var a = function (e) {
            try {
              c(n.next(e));
            } catch (e) {
              o(e);
            }
          },
          s = function (e) {
            try {
              c(n.throw(e));
            } catch (e) {
              o(e);
            }
          },
          c = function (e) {
            var t;
            e.done
              ? i(e.value)
              : ((t = e.value),
                t instanceof r
                  ? t
                  : new r(function (e) {
                      e(t);
                    })).then(a, s);
          };
        c((n = n.apply(e, t || [])).next());
      });
    },
    Ct = function (e, t) {
      var r,
        n,
        i,
        o,
        a = function (e) {
          return function (t) {
            return s([e, t]);
          };
        },
        s = function (o) {
          if (r) throw new TypeError("Generator is already executing.");
          for (; c; )
            try {
              if (
                ((r = 1),
                n &&
                  (i =
                    2 & o[0]
                      ? n.return
                      : o[0]
                        ? n.throw || ((i = n.return) && i.call(n), 0)
                        : n.next) &&
                  !(i = i.call(n, o[1])).done)
              )
                return i;
              switch (((n = 0), i && (o = [2 & o[0], i.value]), o[0])) {
                case 0:
                case 1:
                  i = o;
                  break;
                case 4:
                  return c.label++, { value: o[1], done: !1 };
                case 5:
                  c.label++, (n = o[1]), (o = [0]);
                  continue;
                case 7:
                  (o = c.ops.pop()), c.trys.pop();
                  continue;
                default:
                  if (
                    !((i = c.trys),
                    (i = i.length > 0 && i[i.length - 1]) ||
                      (6 !== o[0] && 2 !== o[0]))
                  ) {
                    c = 0;
                    continue;
                  }
                  if (3 === o[0] && (!i || (o[1] > i[0] && o[1] < i[3]))) {
                    c.label = o[1];
                    break;
                  }
                  if (6 === o[0] && c.label < i[1]) {
                    (c.label = i[1]), (i = o);
                    break;
                  }
                  if (i && c.label < i[2]) {
                    (c.label = i[2]), c.ops.push(o);
                    break;
                  }
                  i[2] && c.ops.pop(), c.trys.pop();
                  continue;
              }
              o = t.call(e, c);
            } catch (e) {
              (o = [6, e]), (n = 0);
            } finally {
              r = i = 0;
            }
          if (5 & o[0]) throw o[1];
          return { value: o[0] ? o[1] : void 0, done: !0 };
        },
        c = {
          label: 0,
          sent: function () {
            if (1 & i[0]) throw i[1];
            return i[1];
          },
          trys: [],
          ops: [],
        };
      return (
        (o = { next: a(0), throw: a(1), return: a(2) }),
        "function" == typeof Symbol &&
          (o[Symbol.iterator] = function () {
            return this;
          }),
        o
      );
    },
    _t = (function () {
      var e = function (e) {
        this.connection = e;
      };
      return (
        (e.prototype.startConnection = function (e) {
          var t = this._startPeerConnection();
          if (
            ((this.connection.peerConnection = t),
            this.connection.type === tt.Media &&
              e._stream &&
              this._addTracksToConnection(e._stream, t),
            e.originator)
          ) {
            if (this.connection.type === tt.Data) {
              var r = this.connection,
                n = { ordered: !!e.reliable },
                i = t.createDataChannel(r.label, n);
              r.initialize(i);
            }
            this._makeOffer();
          } else this.handleSDP("OFFER", e.sdp);
        }),
        (e.prototype._startPeerConnection = function () {
          qe.default.log("Creating RTCPeerConnection.");
          var e = new RTCPeerConnection(
            this.connection.provider.options.config,
          );
          return this._setupListeners(e), e;
        }),
        (e.prototype._setupListeners = function (e) {
          var t = this,
            r = this.connection.peer,
            n = this.connection.connectionId,
            i = this.connection.type,
            o = this.connection.provider;
          qe.default.log("Listening for ICE candidates."),
            (e.onicecandidate = function (e) {
              e.candidate &&
                e.candidate.candidate &&
                (qe.default.log(
                  "Received ICE candidates for ".concat(r, ":"),
                  e.candidate,
                ),
                o.socket.send({
                  type: ot.Candidate,
                  payload: { candidate: e.candidate, type: i, connectionId: n },
                  dst: r,
                }));
            }),
            (e.oniceconnectionstatechange = function () {
              switch (e.iceConnectionState) {
                case "failed":
                  qe.default.log(
                    "iceConnectionState is failed, closing connections to " + r,
                  ),
                    t.connection.emit(
                      "error",
                      new Error(
                        "Negotiation of connection to " + r + " failed.",
                      ),
                    ),
                    t.connection.close();
                  break;
                case "closed":
                  qe.default.log(
                    "iceConnectionState is closed, closing connections to " + r,
                  ),
                    t.connection.emit(
                      "error",
                      new Error("Connection to " + r + " closed."),
                    ),
                    t.connection.close();
                  break;
                case "disconnected":
                  qe.default.log(
                    "iceConnectionState changed to disconnected on the connection with " +
                      r,
                  );
                  break;
                case "completed":
                  e.onicecandidate = Fe.noop;
              }
              t.connection.emit("iceStateChanged", e.iceConnectionState);
            }),
            qe.default.log("Listening for data channel"),
            (e.ondatachannel = function (e) {
              qe.default.log("Received data channel");
              var t = e.channel;
              o.getConnection(r, n).initialize(t);
            }),
            qe.default.log("Listening for remote stream"),
            (e.ontrack = function (e) {
              qe.default.log("Received remote stream");
              var i = e.streams[0],
                a = o.getConnection(r, n);
              if (a.type === tt.Media) {
                var s = a;
                t._addStreamToMediaConnection(i, s);
              }
            });
        }),
        (e.prototype.cleanup = function () {
          qe.default.log(
            "Cleaning up PeerConnection to " + this.connection.peer,
          );
          var e = this.connection.peerConnection;
          if (e) {
            (this.connection.peerConnection = null),
              (e.onicecandidate =
                e.oniceconnectionstatechange =
                e.ondatachannel =
                e.ontrack =
                  function () {});
            var t = "closed" !== e.signalingState,
              r = !1;
            if (this.connection.type === tt.Data) {
              var n = this.connection.dataChannel;
              n && (r = !!n.readyState && "closed" !== n.readyState);
            }
            (t || r) && e.close();
          }
        }),
        (e.prototype._makeOffer = function () {
          return bt(this, void 0, Promise, function () {
            var e, t, r, n, i, o, a;
            return Ct(this, function (s) {
              switch (s.label) {
                case 0:
                  (e = this.connection.peerConnection),
                    (t = this.connection.provider),
                    (s.label = 1);
                case 1:
                  return (
                    s.trys.push([1, 7, , 8]),
                    [4, e.createOffer(this.connection.options.constraints)]
                  );
                case 2:
                  (r = s.sent()),
                    qe.default.log("Created offer."),
                    this.connection.options.sdpTransform &&
                      "function" ==
                        typeof this.connection.options.sdpTransform &&
                      (r.sdp =
                        this.connection.options.sdpTransform(r.sdp) || r.sdp),
                    (s.label = 3);
                case 3:
                  return (
                    s.trys.push([3, 5, , 6]), [4, e.setLocalDescription(r)]
                  );
                case 4:
                  return (
                    s.sent(),
                    qe.default.log(
                      "Set localDescription:",
                      r,
                      "for:".concat(this.connection.peer),
                    ),
                    (n = {
                      sdp: r,
                      type: this.connection.type,
                      connectionId: this.connection.connectionId,
                      metadata: this.connection.metadata,
                      browser: Fe.browser,
                    }),
                    this.connection.type === tt.Data &&
                      ((i = this.connection),
                      (n = gt(gt({}, n), {
                        label: i.label,
                        reliable: i.reliable,
                        serialization: i.serialization,
                      }))),
                    t.socket.send({
                      type: ot.Offer,
                      payload: n,
                      dst: this.connection.peer,
                    }),
                    [3, 6]
                  );
                case 5:
                  return (
                    "OperationError: Failed to set local offer sdp: Called in wrong state: kHaveRemoteOffer" !=
                      (o = s.sent()) &&
                      (t.emitError(rt.WebRTC, o),
                      qe.default.log("Failed to setLocalDescription, ", o)),
                    [3, 6]
                  );
                case 6:
                  return [3, 8];
                case 7:
                  return (
                    (a = s.sent()),
                    t.emitError(rt.WebRTC, a),
                    qe.default.log("Failed to createOffer, ", a),
                    [3, 8]
                  );
                case 8:
                  return [2];
              }
            });
          });
        }),
        (e.prototype._makeAnswer = function () {
          return bt(this, void 0, Promise, function () {
            var e, t, r, n, i;
            return Ct(this, function (o) {
              switch (o.label) {
                case 0:
                  (e = this.connection.peerConnection),
                    (t = this.connection.provider),
                    (o.label = 1);
                case 1:
                  return o.trys.push([1, 7, , 8]), [4, e.createAnswer()];
                case 2:
                  (r = o.sent()),
                    qe.default.log("Created answer."),
                    this.connection.options.sdpTransform &&
                      "function" ==
                        typeof this.connection.options.sdpTransform &&
                      (r.sdp =
                        this.connection.options.sdpTransform(r.sdp) || r.sdp),
                    (o.label = 3);
                case 3:
                  return (
                    o.trys.push([3, 5, , 6]), [4, e.setLocalDescription(r)]
                  );
                case 4:
                  return (
                    o.sent(),
                    qe.default.log(
                      "Set localDescription:",
                      r,
                      "for:".concat(this.connection.peer),
                    ),
                    t.socket.send({
                      type: ot.Answer,
                      payload: {
                        sdp: r,
                        type: this.connection.type,
                        connectionId: this.connection.connectionId,
                        browser: Fe.browser,
                      },
                      dst: this.connection.peer,
                    }),
                    [3, 6]
                  );
                case 5:
                  return (
                    (n = o.sent()),
                    t.emitError(rt.WebRTC, n),
                    qe.default.log("Failed to setLocalDescription, ", n),
                    [3, 6]
                  );
                case 6:
                  return [3, 8];
                case 7:
                  return (
                    (i = o.sent()),
                    t.emitError(rt.WebRTC, i),
                    qe.default.log("Failed to create answer, ", i),
                    [3, 8]
                  );
                case 8:
                  return [2];
              }
            });
          });
        }),
        (e.prototype.handleSDP = function (e, t) {
          return bt(this, void 0, Promise, function () {
            var r, n, i, o;
            return Ct(this, function (a) {
              switch (a.label) {
                case 0:
                  (t = new RTCSessionDescription(t)),
                    (r = this.connection.peerConnection),
                    (n = this.connection.provider),
                    qe.default.log("Setting remote description", t),
                    (i = this),
                    (a.label = 1);
                case 1:
                  return (
                    a.trys.push([1, 5, , 6]), [4, r.setRemoteDescription(t)]
                  );
                case 2:
                  return (
                    a.sent(),
                    qe.default.log(
                      "Set remoteDescription:"
                        .concat(e, " for:")
                        .concat(this.connection.peer),
                    ),
                    "OFFER" !== e ? [3, 4] : [4, i._makeAnswer()]
                  );
                case 3:
                  a.sent(), (a.label = 4);
                case 4:
                  return [3, 6];
                case 5:
                  return (
                    (o = a.sent()),
                    n.emitError(rt.WebRTC, o),
                    qe.default.log("Failed to setRemoteDescription, ", o),
                    [3, 6]
                  );
                case 6:
                  return [2];
              }
            });
          });
        }),
        (e.prototype.handleCandidate = function (e) {
          return bt(this, void 0, Promise, function () {
            var t, r, n, i, o, a;
            return Ct(this, function (s) {
              switch (s.label) {
                case 0:
                  qe.default.log("handleCandidate:", e),
                    (t = e.candidate),
                    (r = e.sdpMLineIndex),
                    (n = e.sdpMid),
                    (i = this.connection.peerConnection),
                    (o = this.connection.provider),
                    (s.label = 1);
                case 1:
                  return (
                    s.trys.push([1, 3, , 4]),
                    [
                      4,
                      i.addIceCandidate(
                        new RTCIceCandidate({
                          sdpMid: n,
                          sdpMLineIndex: r,
                          candidate: t,
                        }),
                      ),
                    ]
                  );
                case 2:
                  return (
                    s.sent(),
                    qe.default.log(
                      "Added ICE candidate for:".concat(this.connection.peer),
                    ),
                    [3, 4]
                  );
                case 3:
                  return (
                    (a = s.sent()),
                    o.emitError(rt.WebRTC, a),
                    qe.default.log("Failed to handleCandidate, ", a),
                    [3, 4]
                  );
                case 4:
                  return [2];
              }
            });
          });
        }),
        (e.prototype._addTracksToConnection = function (e, t) {
          if (
            (qe.default.log(
              "add tracks from stream ".concat(e.id, " to peer connection"),
            ),
            !t.addTrack)
          )
            return qe.default.error(
              "Your browser does't support RTCPeerConnection#addTrack. Ignored.",
            );
          e.getTracks().forEach(function (r) {
            t.addTrack(r, e);
          });
        }),
        (e.prototype._addStreamToMediaConnection = function (e, t) {
          qe.default.log(
            "add stream "
              .concat(e.id, " to media connection ")
              .concat(t.connectionId),
          ),
            t.addStream(e);
        }),
        e
      );
    })(),
    St = {};
  t(
    St,
    "BaseConnection",
    function () {
      return kt;
    },
    function (e) {
      return (kt = e);
    },
  );
  var Tt = (function () {
      var e = function (t, r) {
        return (e =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (e, t) {
              e.__proto__ = t;
            }) ||
          function (e, t) {
            for (var r in t)
              Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
          })(t, r);
      };
      return function (t, r) {
        var n = function () {
          this.constructor = t;
        };
        if ("function" != typeof r && null !== r)
          throw new TypeError(
            "Class extends value " +
              String(r) +
              " is not a constructor or null",
          );
        e(t, r),
          (t.prototype =
            null === r
              ? Object.create(r)
              : ((n.prototype = r.prototype), new n()));
      };
    })(),
    kt = (function (e) {
      var t = function (t, r, n) {
        var i = e.call(this) || this;
        return (
          (i.peer = t),
          (i.provider = r),
          (i.options = n),
          (i._open = !1),
          (i.metadata = n.metadata),
          i
        );
      };
      return (
        Tt(t, e),
        Object.defineProperty(t.prototype, "open", {
          get: function () {
            return this._open;
          },
          enumerable: !1,
          configurable: !0,
        }),
        t
      );
    })(ze.EventEmitter),
    wt = (function () {
      var e = function (t, r) {
        return (e =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (e, t) {
              e.__proto__ = t;
            }) ||
          function (e, t) {
            for (var r in t)
              Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
          })(t, r);
      };
      return function (t, r) {
        var n = function () {
          this.constructor = t;
        };
        if ("function" != typeof r && null !== r)
          throw new TypeError(
            "Class extends value " +
              String(r) +
              " is not a constructor or null",
          );
        e(t, r),
          (t.prototype =
            null === r
              ? Object.create(r)
              : ((n.prototype = r.prototype), new n()));
      };
    })(),
    Pt = function () {
      return (
        (Pt =
          Object.assign ||
          function (e) {
            for (var t, r = 1, n = arguments.length; r < n; r++)
              for (var i in (t = arguments[r]))
                Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e;
          }),
        Pt.apply(this, arguments)
      );
    },
    Rt = function (e) {
      var t = "function" == typeof Symbol && Symbol.iterator,
        r = t && e[t],
        n = 0;
      if (r) return r.call(e);
      if (e && "number" == typeof e.length)
        return {
          next: function () {
            return (
              e && n >= e.length && (e = void 0),
              { value: e && e[n++], done: !e }
            );
          },
        };
      throw new TypeError(
        t ? "Object is not iterable." : "Symbol.iterator is not defined.",
      );
    },
    Et = (function (e) {
      function t(r, n, i) {
        var o = e.call(this, r, n, i) || this;
        return (
          (o._localStream = o.options._stream),
          (o.connectionId =
            o.options.connectionId || t.ID_PREFIX + Fe.randomToken()),
          (o._negotiator = new yt.Negotiator(o)),
          o._localStream &&
            o._negotiator.startConnection({
              _stream: o._localStream,
              originator: !0,
            }),
          o
        );
      }
      return (
        wt(t, e),
        Object.defineProperty(t.prototype, "type", {
          get: function () {
            return tt.Media;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "localStream", {
          get: function () {
            return this._localStream;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "remoteStream", {
          get: function () {
            return this._remoteStream;
          },
          enumerable: !1,
          configurable: !0,
        }),
        (t.prototype.addStream = function (t) {
          qe.default.log("Receiving stream", t),
            (this._remoteStream = t),
            e.prototype.emit.call(this, "stream", t);
        }),
        (t.prototype.handleMessage = function (e) {
          var t = e.type,
            r = e.payload;
          switch (e.type) {
            case ot.Answer:
              this._negotiator.handleSDP(t, r.sdp), (this._open = !0);
              break;
            case ot.Candidate:
              this._negotiator.handleCandidate(r.candidate);
              break;
            default:
              qe.default.warn(
                "Unrecognized message type:"
                  .concat(t, " from peer:")
                  .concat(this.peer),
              );
          }
        }),
        (t.prototype.answer = function (e, t) {
          var r, n;
          if ((void 0 === t && (t = {}), this._localStream))
            qe.default.warn(
              "Local stream already exists on this MediaConnection. Are you answering a call twice?",
            );
          else {
            (this._localStream = e),
              t &&
                t.sdpTransform &&
                (this.options.sdpTransform = t.sdpTransform),
              this._negotiator.startConnection(
                Pt(Pt({}, this.options._payload), { _stream: e }),
              );
            var i = this.provider._getMessages(this.connectionId);
            try {
              for (var o = Rt(i), a = o.next(); !a.done; a = o.next()) {
                var s = a.value;
                this.handleMessage(s);
              }
            } catch (e) {
              r = { error: e };
            } finally {
              try {
                a && !a.done && (n = o.return) && n.call(o);
              } finally {
                if (r) throw r.error;
              }
            }
            this._open = !0;
          }
        }),
        (t.prototype.close = function () {
          this._negotiator &&
            (this._negotiator.cleanup(), (this._negotiator = null)),
            (this._localStream = null),
            (this._remoteStream = null),
            this.provider &&
              (this.provider._removeConnection(this), (this.provider = null)),
            this.options &&
              this.options._stream &&
              (this.options._stream = null),
            this.open &&
              ((this._open = !1), e.prototype.emit.call(this, "close"));
        }),
        (t.ID_PREFIX = "mc_"),
        t
      );
    })(St.BaseConnection),
    xt = {};
  t(
    xt,
    "DataConnection",
    function () {
      return At;
    },
    function (e) {
      return (At = e);
    },
  );
  var Dt = {};
  t(
    Dt,
    "EncodingQueue",
    function () {
      return It;
    },
    function (e) {
      return (It = e);
    },
  );
  var Ot = (function () {
      var e = function (t, r) {
        return (e =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (e, t) {
              e.__proto__ = t;
            }) ||
          function (e, t) {
            for (var r in t)
              Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
          })(t, r);
      };
      return function (t, r) {
        var n = function () {
          this.constructor = t;
        };
        if ("function" != typeof r && null !== r)
          throw new TypeError(
            "Class extends value " +
              String(r) +
              " is not a constructor or null",
          );
        e(t, r),
          (t.prototype =
            null === r
              ? Object.create(r)
              : ((n.prototype = r.prototype), new n()));
      };
    })(),
    It = (function (e) {
      var t = function () {
        var t = e.call(this) || this;
        return (
          (t.fileReader = new FileReader()),
          (t._queue = []),
          (t._processing = !1),
          (t.fileReader.onload = function (e) {
            (t._processing = !1),
              e.target && t.emit("done", e.target.result),
              t.doNextTask();
          }),
          (t.fileReader.onerror = function (e) {
            qe.default.error("EncodingQueue error:", e),
              (t._processing = !1),
              t.destroy(),
              t.emit("error", e);
          }),
          t
        );
      };
      return (
        Ot(t, e),
        Object.defineProperty(t.prototype, "queue", {
          get: function () {
            return this._queue;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "size", {
          get: function () {
            return this.queue.length;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "processing", {
          get: function () {
            return this._processing;
          },
          enumerable: !1,
          configurable: !0,
        }),
        (t.prototype.enque = function (e) {
          this.queue.push(e), this.processing || this.doNextTask();
        }),
        (t.prototype.destroy = function () {
          this.fileReader.abort(), (this._queue = []);
        }),
        (t.prototype.doNextTask = function () {
          0 !== this.size &&
            (this.processing ||
              ((this._processing = !0),
              this.fileReader.readAsArrayBuffer(this.queue.shift())));
        }),
        t
      );
    })(ze.EventEmitter),
    Mt = (function () {
      var e = function (t, r) {
        return (e =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (e, t) {
              e.__proto__ = t;
            }) ||
          function (e, t) {
            for (var r in t)
              Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
          })(t, r);
      };
      return function (t, r) {
        var n = function () {
          this.constructor = t;
        };
        if ("function" != typeof r && null !== r)
          throw new TypeError(
            "Class extends value " +
              String(r) +
              " is not a constructor or null",
          );
        e(t, r),
          (t.prototype =
            null === r
              ? Object.create(r)
              : ((n.prototype = r.prototype), new n()));
      };
    })(),
    jt = function (e) {
      var t = "function" == typeof Symbol && Symbol.iterator,
        r = t && e[t],
        n = 0;
      if (r) return r.call(e);
      if (e && "number" == typeof e.length)
        return {
          next: function () {
            return (
              e && n >= e.length && (e = void 0),
              { value: e && e[n++], done: !e }
            );
          },
        };
      throw new TypeError(
        t ? "Object is not iterable." : "Symbol.iterator is not defined.",
      );
    },
    At = (function (e) {
      function t(r, n, i) {
        var o = e.call(this, r, n, i) || this;
        return (
          (o.stringify = JSON.stringify),
          (o.parse = JSON.parse),
          (o._buffer = []),
          (o._bufferSize = 0),
          (o._buffering = !1),
          (o._chunkedData = {}),
          (o._encodingQueue = new Dt.EncodingQueue()),
          (o.connectionId =
            o.options.connectionId || t.ID_PREFIX + Fe.randomToken()),
          (o.label = o.options.label || o.connectionId),
          (o.serialization = o.options.serialization || nt.Binary),
          (o.reliable = !!o.options.reliable),
          o._encodingQueue.on("done", function (e) {
            o._bufferedSend(e);
          }),
          o._encodingQueue.on("error", function () {
            qe.default.error(
              "DC#".concat(
                o.connectionId,
                ": Error occured in encoding from blob to arraybuffer, close DC",
              ),
            ),
              o.close();
          }),
          (o._negotiator = new yt.Negotiator(o)),
          o._negotiator.startConnection(
            o.options._payload || { originator: !0 },
          ),
          o
        );
      }
      return (
        Mt(t, e),
        Object.defineProperty(t.prototype, "type", {
          get: function () {
            return tt.Data;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "dataChannel", {
          get: function () {
            return this._dc;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "bufferSize", {
          get: function () {
            return this._bufferSize;
          },
          enumerable: !1,
          configurable: !0,
        }),
        (t.prototype.initialize = function (e) {
          (this._dc = e), this._configureDataChannel();
        }),
        (t.prototype._configureDataChannel = function () {
          var e = this;
          (Fe.supports.binaryBlob && !Fe.supports.reliable) ||
            (this.dataChannel.binaryType = "arraybuffer"),
            (this.dataChannel.onopen = function () {
              qe.default.log(
                "DC#".concat(e.connectionId, " dc connection success"),
              ),
                (e._open = !0),
                e.emit("open");
            }),
            (this.dataChannel.onmessage = function (t) {
              qe.default.log(
                "DC#".concat(e.connectionId, " dc onmessage:"),
                t.data,
              ),
                e._handleDataMessage(t);
            }),
            (this.dataChannel.onclose = function () {
              qe.default.log(
                "DC#".concat(e.connectionId, " dc closed for:"),
                e.peer,
              ),
                e.close();
            });
        }),
        (t.prototype._handleDataMessage = function (t) {
          var r = this,
            n = t.data,
            i = n.constructor,
            o = n;
          if (
            this.serialization === nt.Binary ||
            this.serialization === nt.BinaryUTF8
          ) {
            if (i === Blob)
              return void Fe.blobToArrayBuffer(n, function (e) {
                var t = Fe.unpack(e);
                r.emit("data", t);
              });
            if (i === ArrayBuffer) o = Fe.unpack(n);
            else if (i === String) {
              var a = Fe.binaryStringToArrayBuffer(n);
              o = Fe.unpack(a);
            }
          } else this.serialization === nt.JSON && (o = this.parse(n));
          o.__peerData
            ? this._handleChunk(o)
            : e.prototype.emit.call(this, "data", o);
        }),
        (t.prototype._handleChunk = function (e) {
          var t = e.__peerData,
            r = this._chunkedData[t] || { data: [], count: 0, total: e.total };
          if (
            ((r.data[e.n] = e.data),
            r.count++,
            (this._chunkedData[t] = r),
            r.total === r.count)
          ) {
            delete this._chunkedData[t];
            var n = new Blob(r.data);
            this._handleDataMessage({ data: n });
          }
        }),
        (t.prototype.close = function () {
          (this._buffer = []),
            (this._bufferSize = 0),
            (this._chunkedData = {}),
            this._negotiator &&
              (this._negotiator.cleanup(), (this._negotiator = null)),
            this.provider &&
              (this.provider._removeConnection(this), (this.provider = null)),
            this.dataChannel &&
              ((this.dataChannel.onopen = null),
              (this.dataChannel.onmessage = null),
              (this.dataChannel.onclose = null),
              (this._dc = null)),
            this._encodingQueue &&
              (this._encodingQueue.destroy(),
              this._encodingQueue.removeAllListeners(),
              (this._encodingQueue = null)),
            this.open &&
              ((this._open = !1), e.prototype.emit.call(this, "close"));
        }),
        (t.prototype.send = function (t, r) {
          if (this.open)
            if (this.serialization === nt.JSON)
              this._bufferedSend(this.stringify(t));
            else if (
              this.serialization === nt.Binary ||
              this.serialization === nt.BinaryUTF8
            ) {
              var n = Fe.pack(t);
              if (!r && n.size > Fe.chunkedMTU) return void this._sendChunks(n);
              Fe.supports.binaryBlob
                ? this._bufferedSend(n)
                : this._encodingQueue.enque(n);
            } else this._bufferedSend(t);
          else
            e.prototype.emit.call(
              this,
              "error",
              new Error(
                "Connection is not open. You should listen for the `open` event before sending messages.",
              ),
            );
        }),
        (t.prototype._bufferedSend = function (e) {
          (!this._buffering && this._trySend(e)) ||
            (this._buffer.push(e), (this._bufferSize = this._buffer.length));
        }),
        (t.prototype._trySend = function (e) {
          var r = this;
          if (!this.open) return !1;
          if (this.dataChannel.bufferedAmount > t.MAX_BUFFERED_AMOUNT)
            return (
              (this._buffering = !0),
              setTimeout(function () {
                (r._buffering = !1), r._tryBuffer();
              }, 50),
              !1
            );
          try {
            this.dataChannel.send(e);
          } catch (e) {
            return (
              qe.default.error(
                "DC#:".concat(this.connectionId, " Error when sending:"),
                e,
              ),
              (this._buffering = !0),
              this.close(),
              !1
            );
          }
          return !0;
        }),
        (t.prototype._tryBuffer = function () {
          if (this.open && 0 !== this._buffer.length) {
            var e = this._buffer[0];
            this._trySend(e) &&
              (this._buffer.shift(),
              (this._bufferSize = this._buffer.length),
              this._tryBuffer());
          }
        }),
        (t.prototype._sendChunks = function (e) {
          var t,
            r,
            n = Fe.chunk(e);
          qe.default.log(
            "DC#"
              .concat(this.connectionId, " Try to send ")
              .concat(n.length, " chunks..."),
          );
          try {
            for (var i = jt(n), o = i.next(); !o.done; o = i.next()) {
              var a = o.value;
              this.send(a, !0);
            }
          } catch (e) {
            t = { error: e };
          } finally {
            try {
              o && !o.done && (r = i.return) && r.call(i);
            } finally {
              if (t) throw t.error;
            }
          }
        }),
        (t.prototype.handleMessage = function (e) {
          var t = e.payload;
          switch (e.type) {
            case ot.Answer:
              this._negotiator.handleSDP(e.type, t.sdp);
              break;
            case ot.Candidate:
              this._negotiator.handleCandidate(t.candidate);
              break;
            default:
              qe.default.warn(
                "Unrecognized message type:",
                e.type,
                "from peer:",
                this.peer,
              );
          }
        }),
        (t.ID_PREFIX = "dc_"),
        (t.MAX_BUFFERED_AMOUNT = 8388608),
        t
      );
    })(St.BaseConnection),
    Lt = {};
  t(
    Lt,
    "API",
    function () {
      return Ft;
    },
    function (e) {
      return (Ft = e);
    },
  );
  var Bt = function (e, t, r, n) {
      return new (r || (r = Promise))(function (i, o) {
        var a = function (e) {
            try {
              c(n.next(e));
            } catch (e) {
              o(e);
            }
          },
          s = function (e) {
            try {
              c(n.throw(e));
            } catch (e) {
              o(e);
            }
          },
          c = function (e) {
            var t;
            e.done
              ? i(e.value)
              : ((t = e.value),
                t instanceof r
                  ? t
                  : new r(function (e) {
                      e(t);
                    })).then(a, s);
          };
        c((n = n.apply(e, t || [])).next());
      });
    },
    Nt = function (e, t) {
      var r,
        n,
        i,
        o,
        a = function (e) {
          return function (t) {
            return s([e, t]);
          };
        },
        s = function (o) {
          if (r) throw new TypeError("Generator is already executing.");
          for (; c; )
            try {
              if (
                ((r = 1),
                n &&
                  (i =
                    2 & o[0]
                      ? n.return
                      : o[0]
                        ? n.throw || ((i = n.return) && i.call(n), 0)
                        : n.next) &&
                  !(i = i.call(n, o[1])).done)
              )
                return i;
              switch (((n = 0), i && (o = [2 & o[0], i.value]), o[0])) {
                case 0:
                case 1:
                  i = o;
                  break;
                case 4:
                  return c.label++, { value: o[1], done: !1 };
                case 5:
                  c.label++, (n = o[1]), (o = [0]);
                  continue;
                case 7:
                  (o = c.ops.pop()), c.trys.pop();
                  continue;
                default:
                  if (
                    !((i = c.trys),
                    (i = i.length > 0 && i[i.length - 1]) ||
                      (6 !== o[0] && 2 !== o[0]))
                  ) {
                    c = 0;
                    continue;
                  }
                  if (3 === o[0] && (!i || (o[1] > i[0] && o[1] < i[3]))) {
                    c.label = o[1];
                    break;
                  }
                  if (6 === o[0] && c.label < i[1]) {
                    (c.label = i[1]), (i = o);
                    break;
                  }
                  if (i && c.label < i[2]) {
                    (c.label = i[2]), c.ops.push(o);
                    break;
                  }
                  i[2] && c.ops.pop(), c.trys.pop();
                  continue;
              }
              o = t.call(e, c);
            } catch (e) {
              (o = [6, e]), (n = 0);
            } finally {
              r = i = 0;
            }
          if (5 & o[0]) throw o[1];
          return { value: o[0] ? o[1] : void 0, done: !0 };
        },
        c = {
          label: 0,
          sent: function () {
            if (1 & i[0]) throw i[1];
            return i[1];
          },
          trys: [],
          ops: [],
        };
      return (
        (o = { next: a(0), throw: a(1), return: a(2) }),
        "function" == typeof Symbol &&
          (o[Symbol.iterator] = function () {
            return this;
          }),
        o
      );
    },
    Ft = (function () {
      var e = function (e) {
        this._options = e;
      };
      return (
        (e.prototype._buildRequest = function (e) {
          var t = this._options.secure ? "https" : "http",
            r = this._options,
            n = r.host,
            i = r.port,
            o = r.path,
            a = r.key,
            s = new URL(
              ""
                .concat(t, "://")
                .concat(n, ":")
                .concat(i)
                .concat(o)
                .concat(a, "/")
                .concat(e),
            );
          return (
            s.searchParams.set(
              "ts",
              "".concat(Date.now()).concat(Math.random()),
            ),
            s.searchParams.set("version", pt.version),
            fetch(s.href, { referrerPolicy: this._options.referrerPolicy })
          );
        }),
        (e.prototype.retrieveId = function () {
          return Bt(this, void 0, Promise, function () {
            var e, t, r;
            return Nt(this, function (n) {
              switch (n.label) {
                case 0:
                  return (
                    n.trys.push([0, 2, , 3]), [4, this._buildRequest("id")]
                  );
                case 1:
                  if (200 !== (e = n.sent()).status)
                    throw new Error("Error. Status:".concat(e.status));
                  return [2, e.text()];
                case 2:
                  throw (
                    ((t = n.sent()),
                    qe.default.error("Error retrieving ID", t),
                    (r = ""),
                    "/" === this._options.path &&
                      this._options.host !== Fe.CLOUD_HOST &&
                      (r =
                        " If you passed in a `path` to your self-hosted PeerServer, you'll also need to pass in that same path when creating a new Peer."),
                    new Error("Could not get an ID from the server." + r))
                  );
                case 3:
                  return [2];
              }
            });
          });
        }),
        (e.prototype.listAllPeers = function () {
          return Bt(this, void 0, Promise, function () {
            var e, t, r;
            return Nt(this, function (n) {
              switch (n.label) {
                case 0:
                  return (
                    n.trys.push([0, 2, , 3]), [4, this._buildRequest("peers")]
                  );
                case 1:
                  if (200 !== (e = n.sent()).status) {
                    if (401 === e.status)
                      throw (
                        ((t = ""),
                        (t =
                          this._options.host === Fe.CLOUD_HOST
                            ? "It looks like you're using the cloud server. You can email team@peerjs.com to enable peer listing for your API key."
                            : "You need to enable `allow_discovery` on your self-hosted PeerServer to use this feature."),
                        new Error(
                          "It doesn't look like you have permission to list peers IDs. " +
                            t,
                        ))
                      );
                    throw new Error("Error. Status:".concat(e.status));
                  }
                  return [2, e.json()];
                case 2:
                  throw (
                    ((r = n.sent()),
                    qe.default.error("Error retrieving list peers", r),
                    new Error("Could not get list peers from the server." + r))
                  );
                case 3:
                  return [2];
              }
            });
          });
        }),
        e
      );
    })(),
    Ut = (function () {
      var e = function (t, r) {
        return (e =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (e, t) {
              e.__proto__ = t;
            }) ||
          function (e, t) {
            for (var r in t)
              Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
          })(t, r);
      };
      return function (t, r) {
        var n = function () {
          this.constructor = t;
        };
        if ("function" != typeof r && null !== r)
          throw new TypeError(
            "Class extends value " +
              String(r) +
              " is not a constructor or null",
          );
        e(t, r),
          (t.prototype =
            null === r
              ? Object.create(r)
              : ((n.prototype = r.prototype), new n()));
      };
    })(),
    zt = function () {
      return (
        (zt =
          Object.assign ||
          function (e) {
            for (var t, r = 1, n = arguments.length; r < n; r++)
              for (var i in (t = arguments[r]))
                Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e;
          }),
        zt.apply(this, arguments)
      );
    },
    Gt = function (e) {
      var t = "function" == typeof Symbol && Symbol.iterator,
        r = t && e[t],
        n = 0;
      if (r) return r.call(e);
      if (e && "number" == typeof e.length)
        return {
          next: function () {
            return (
              e && n >= e.length && (e = void 0),
              { value: e && e[n++], done: !e }
            );
          },
        };
      throw new TypeError(
        t ? "Object is not iterable." : "Symbol.iterator is not defined.",
      );
    },
    Vt = function (e, t) {
      var r = "function" == typeof Symbol && e[Symbol.iterator];
      if (!r) return e;
      var n,
        i,
        o = r.call(e),
        a = [];
      try {
        for (; (void 0 === t || t-- > 0) && !(n = o.next()).done; )
          a.push(n.value);
      } catch (e) {
        i = { error: e };
      } finally {
        try {
          n && !n.done && (r = o.return) && r.call(o);
        } finally {
          if (i) throw i.error;
        }
      }
      return a;
    },
    Jt = (function (e) {
      function t(r, n) {
        var i,
          o = e.call(this) || this;
        return (
          (o._id = null),
          (o._lastServerId = null),
          (o._destroyed = !1),
          (o._disconnected = !1),
          (o._open = !1),
          (o._connections = new Map()),
          (o._lostMessages = new Map()),
          r && r.constructor == Object ? (n = r) : r && (i = r.toString()),
          (n = zt(
            {
              debug: 0,
              host: Fe.CLOUD_HOST,
              port: Fe.CLOUD_PORT,
              path: "/",
              key: t.DEFAULT_KEY,
              token: Fe.randomToken(),
              config: Fe.defaultConfig,
              referrerPolicy: "strict-origin-when-cross-origin",
            },
            n,
          )),
          (o._options = n),
          "/" === o._options.host &&
            (o._options.host = window.location.hostname),
          o._options.path &&
            ("/" !== o._options.path[0] &&
              (o._options.path = "/" + o._options.path),
            "/" !== o._options.path[o._options.path.length - 1] &&
              (o._options.path += "/")),
          void 0 === o._options.secure && o._options.host !== Fe.CLOUD_HOST
            ? (o._options.secure = Fe.isSecure())
            : o._options.host == Fe.CLOUD_HOST && (o._options.secure = !0),
          o._options.logFunction &&
            qe.default.setLogFunction(o._options.logFunction),
          (qe.default.logLevel = o._options.debug || 0),
          (o._api = new Lt.API(n)),
          (o._socket = o._createServerConnection()),
          Fe.supports.audioVideo || Fe.supports.data
            ? i && !Fe.validateId(i)
              ? (o._delayedAbort(
                  rt.InvalidID,
                  'ID "'.concat(i, '" is invalid'),
                ),
                o)
              : (i
                  ? o._initialize(i)
                  : o._api
                      .retrieveId()
                      .then(function (e) {
                        return o._initialize(e);
                      })
                      .catch(function (e) {
                        return o._abort(rt.ServerError, e);
                      }),
                o)
            : (o._delayedAbort(
                rt.BrowserIncompatible,
                "The current browser does not support WebRTC",
              ),
              o)
        );
      }
      return (
        Ut(t, e),
        Object.defineProperty(t.prototype, "id", {
          get: function () {
            return this._id;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "options", {
          get: function () {
            return this._options;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "open", {
          get: function () {
            return this._open;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "socket", {
          get: function () {
            return this._socket;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "connections", {
          get: function () {
            var e,
              t,
              r = Object.create(null);
            try {
              for (
                var n = Gt(this._connections), i = n.next();
                !i.done;
                i = n.next()
              ) {
                var o = Vt(i.value, 2),
                  a = o[0],
                  s = o[1];
                r[a] = s;
              }
            } catch (t) {
              e = { error: t };
            } finally {
              try {
                i && !i.done && (t = n.return) && t.call(n);
              } finally {
                if (e) throw e.error;
              }
            }
            return r;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "destroyed", {
          get: function () {
            return this._destroyed;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "disconnected", {
          get: function () {
            return this._disconnected;
          },
          enumerable: !1,
          configurable: !0,
        }),
        (t.prototype._createServerConnection = function () {
          var e = this,
            t = new ct.Socket(
              this._options.secure,
              this._options.host,
              this._options.port,
              this._options.path,
              this._options.key,
              this._options.pingInterval,
            );
          return (
            t.on(it.Message, function (t) {
              e._handleMessage(t);
            }),
            t.on(it.Error, function (t) {
              e._abort(rt.SocketError, t);
            }),
            t.on(it.Disconnected, function () {
              e.disconnected ||
                (e.emitError(rt.Network, "Lost connection to server."),
                e.disconnect());
            }),
            t.on(it.Close, function () {
              e.disconnected ||
                e._abort(
                  rt.SocketClosed,
                  "Underlying socket is already closed.",
                );
            }),
            t
          );
        }),
        (t.prototype._initialize = function (e) {
          (this._id = e), this.socket.start(e, this._options.token);
        }),
        (t.prototype._handleMessage = function (e) {
          var t,
            r,
            n = e.type,
            i = e.payload,
            o = e.src;
          switch (n) {
            case ot.Open:
              (this._lastServerId = this.id),
                (this._open = !0),
                this.emit("open", this.id);
              break;
            case ot.Error:
              this._abort(rt.ServerError, i.msg);
              break;
            case ot.IdTaken:
              this._abort(
                rt.UnavailableID,
                'ID "'.concat(this.id, '" is taken'),
              );
              break;
            case ot.InvalidKey:
              this._abort(
                rt.InvalidKey,
                'API KEY "'.concat(this._options.key, '" is invalid'),
              );
              break;
            case ot.Leave:
              qe.default.log("Received leave message from ".concat(o)),
                this._cleanupPeer(o),
                this._connections.delete(o);
              break;
            case ot.Expire:
              this.emitError(
                rt.PeerUnavailable,
                "Could not connect to peer ".concat(o),
              );
              break;
            case ot.Offer:
              var a = i.connectionId;
              if (
                ((f = this.getConnection(o, a)) &&
                  (f.close(),
                  qe.default.warn(
                    "Offer received for existing Connection ID:".concat(a),
                  )),
                i.type === tt.Media)
              ) {
                var s = new vt.MediaConnection(o, this, {
                  connectionId: a,
                  _payload: i,
                  metadata: i.metadata,
                });
                (f = s), this._addConnection(o, f), this.emit("call", s);
              } else {
                if (i.type !== tt.Data)
                  return void qe.default.warn(
                    "Received malformed connection type:".concat(i.type),
                  );
                var c = new xt.DataConnection(o, this, {
                  connectionId: a,
                  _payload: i,
                  metadata: i.metadata,
                  label: i.label,
                  serialization: i.serialization,
                  reliable: i.reliable,
                });
                (f = c), this._addConnection(o, f), this.emit("connection", c);
              }
              var p = this._getMessages(a);
              try {
                for (var d = Gt(p), u = d.next(); !u.done; u = d.next()) {
                  var l = u.value;
                  f.handleMessage(l);
                }
              } catch (e) {
                t = { error: e };
              } finally {
                try {
                  u && !u.done && (r = d.return) && r.call(d);
                } finally {
                  if (t) throw t.error;
                }
              }
              break;
            default:
              if (!i)
                return void qe.default.warn(
                  "You received a malformed message from "
                    .concat(o, " of type ")
                    .concat(n),
                );
              var f;
              a = i.connectionId;
              (f = this.getConnection(o, a)) && f.peerConnection
                ? f.handleMessage(e)
                : a
                  ? this._storeMessage(a, e)
                  : qe.default.warn("You received an unrecognized message:", e);
          }
        }),
        (t.prototype._storeMessage = function (e, t) {
          this._lostMessages.has(e) || this._lostMessages.set(e, []),
            this._lostMessages.get(e).push(t);
        }),
        (t.prototype._getMessages = function (e) {
          var t = this._lostMessages.get(e);
          return t ? (this._lostMessages.delete(e), t) : [];
        }),
        (t.prototype.connect = function (e, t) {
          if ((void 0 === t && (t = {}), this.disconnected))
            return (
              qe.default.warn(
                "You cannot connect to a new Peer because you called .disconnect() on this Peer and ended your connection with the server. You can create a new Peer to reconnect, or call reconnect on this peer if you believe its ID to still be available.",
              ),
              void this.emitError(
                rt.Disconnected,
                "Cannot connect to new Peer after disconnecting from server.",
              )
            );
          var r = new xt.DataConnection(e, this, t);
          return this._addConnection(e, r), r;
        }),
        (t.prototype.call = function (e, t, r) {
          if ((void 0 === r && (r = {}), this.disconnected))
            return (
              qe.default.warn(
                "You cannot connect to a new Peer because you called .disconnect() on this Peer and ended your connection with the server. You can create a new Peer to reconnect.",
              ),
              void this.emitError(
                rt.Disconnected,
                "Cannot connect to new Peer after disconnecting from server.",
              )
            );
          if (t) {
            var n = new vt.MediaConnection(
              e,
              this,
              zt(zt({}, r), { _stream: t }),
            );
            return this._addConnection(e, n), n;
          }
          qe.default.error(
            "To call a peer, you must provide a stream from your browser's `getUserMedia`.",
          );
        }),
        (t.prototype._addConnection = function (e, t) {
          qe.default.log(
            "add connection "
              .concat(t.type, ":")
              .concat(t.connectionId, " to peerId:")
              .concat(e),
          ),
            this._connections.has(e) || this._connections.set(e, []),
            this._connections.get(e).push(t);
        }),
        (t.prototype._removeConnection = function (e) {
          var t = this._connections.get(e.peer);
          if (t) {
            var r = t.indexOf(e);
            -1 !== r && t.splice(r, 1);
          }
          this._lostMessages.delete(e.connectionId);
        }),
        (t.prototype.getConnection = function (e, t) {
          var r,
            n,
            i = this._connections.get(e);
          if (!i) return null;
          try {
            for (var o = Gt(i), a = o.next(); !a.done; a = o.next()) {
              var s = a.value;
              if (s.connectionId === t) return s;
            }
          } catch (e) {
            r = { error: e };
          } finally {
            try {
              a && !a.done && (n = o.return) && n.call(o);
            } finally {
              if (r) throw r.error;
            }
          }
          return null;
        }),
        (t.prototype._delayedAbort = function (e, t) {
          var r = this;
          setTimeout(function () {
            r._abort(e, t);
          }, 0);
        }),
        (t.prototype._abort = function (e, t) {
          qe.default.error("Aborting!"),
            this.emitError(e, t),
            this._lastServerId ? this.disconnect() : this.destroy();
        }),
        (t.prototype.emitError = function (e, t) {
          var r;
          qe.default.error("Error:", t),
            ((r = "string" == typeof t ? new Error(t) : t).type = e),
            this.emit("error", r);
        }),
        (t.prototype.destroy = function () {
          this.destroyed ||
            (qe.default.log("Destroy peer with ID:".concat(this.id)),
            this.disconnect(),
            this._cleanup(),
            (this._destroyed = !0),
            this.emit("close"));
        }),
        (t.prototype._cleanup = function () {
          var e, t;
          try {
            for (
              var r = Gt(this._connections.keys()), n = r.next();
              !n.done;
              n = r.next()
            ) {
              var i = n.value;
              this._cleanupPeer(i), this._connections.delete(i);
            }
          } catch (t) {
            e = { error: t };
          } finally {
            try {
              n && !n.done && (t = r.return) && t.call(r);
            } finally {
              if (e) throw e.error;
            }
          }
          this.socket.removeAllListeners();
        }),
        (t.prototype._cleanupPeer = function (e) {
          var t,
            r,
            n = this._connections.get(e);
          if (n)
            try {
              for (var i = Gt(n), o = i.next(); !o.done; o = i.next()) {
                o.value.close();
              }
            } catch (e) {
              t = { error: e };
            } finally {
              try {
                o && !o.done && (r = i.return) && r.call(i);
              } finally {
                if (t) throw t.error;
              }
            }
        }),
        (t.prototype.disconnect = function () {
          if (!this.disconnected) {
            var e = this.id;
            qe.default.log("Disconnect peer with ID:".concat(e)),
              (this._disconnected = !0),
              (this._open = !1),
              this.socket.close(),
              (this._lastServerId = e),
              (this._id = null),
              this.emit("disconnected", e);
          }
        }),
        (t.prototype.reconnect = function () {
          if (this.disconnected && !this.destroyed)
            qe.default.log(
              "Attempting reconnection to server with ID ".concat(
                this._lastServerId,
              ),
            ),
              (this._disconnected = !1),
              this._initialize(this._lastServerId);
          else {
            if (this.destroyed)
              throw new Error(
                "This peer cannot reconnect to the server. It has already been destroyed.",
              );
            if (this.disconnected || this.open)
              throw new Error(
                "Peer ".concat(
                  this.id,
                  " cannot reconnect because it is not disconnected from the server!",
                ),
              );
            qe.default.error(
              "In a hurry? We're still trying to make the initial connection!",
            );
          }
        }),
        (t.prototype.listAllPeers = function (e) {
          var t = this;
          void 0 === e && (e = function (e) {}),
            this._api
              .listAllPeers()
              .then(function (t) {
                return e(t);
              })
              .catch(function (e) {
                return t._abort(rt.ServerError, e);
              });
        }),
        (t.DEFAULT_KEY = "peerjs"),
        t
      );
    })(ze.EventEmitter);
  (window.peerjs = { Peer: Ue.Peer, util: Fe }), (window.Peer = Ue.Peer);
})();
//# sourceMappingURL=peerjs.min.js.map
