var __create = Object.create;
var __getProtoOf = Object.getPrototypeOf;
var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __toESM = (mod, isNodeMode, target) => {
  target = mod != null ? __create(__getProtoOf(mod)) : {};
  const to = isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target;
  for (let key of __getOwnPropNames(mod))
    if (!__hasOwnProp.call(to, key))
      __defProp(to, key, {
        get: () => mod[key],
        enumerable: true
      });
  return to;
};
var __moduleCache = /* @__PURE__ */ new WeakMap;
var __toCommonJS = (from) => {
  var entry = __moduleCache.get(from), desc;
  if (entry)
    return entry;
  entry = __defProp({}, "__esModule", { value: true });
  if (from && typeof from === "object" || typeof from === "function")
    __getOwnPropNames(from).map((key) => !__hasOwnProp.call(entry, key) && __defProp(entry, key, {
      get: () => from[key],
      enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
    }));
  __moduleCache.set(from, entry);
  return entry;
};
var __commonJS = (cb, mod) => () => (mod || cb((mod = { exports: {} }).exports, mod), mod.exports);
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, {
      get: all[name],
      enumerable: true,
      configurable: true,
      set: (newValue) => all[name] = () => newValue
    });
};
var __esm = (fn, res) => () => (fn && (res = fn(fn = 0)), res);

// node:stream
var exports_stream = {};
__export(exports_stream, {
  default: () => Uc
});
var al, tt, cl, dl, hl, pl, yl = (e, t) => () => (e && (t = e(e = 0)), t), E = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports), Qr = (e, t) => {
  for (var r in t)
    tt(e, r, { get: t[r], enumerable: true });
}, et = (e, t, r, n) => {
  if (t && typeof t == "object" || typeof t == "function")
    for (let i of dl(t))
      !pl.call(e, i) && i !== r && tt(e, i, { get: () => t[i], enumerable: !(n = cl(t, i)) || n.enumerable });
  return e;
}, ue = (e, t, r) => (et(e, t, "default"), r && et(r, t, "default")), rt = (e, t, r) => (r = e != null ? al(hl(e)) : {}, et(t || !e || !e.__esModule ? tt(r, "default", { value: e, enumerable: true }) : r, e)), pe = (e) => et(tt({}, "__esModule", { value: true }), e), tn, rn, te, I, V, ut, C, He, ir, k, Gu, se, ae, ce, di, Se, Et, xt, At, Pi, Tt, Wi, Gi, Er, Ke, Cr, Mo, J, qr, $r, Ut, Jo, Kr, fl, Jr, Ze, Uc;
var init_stream = __esm(() => {
  al = Object.create;
  tt = Object.defineProperty;
  cl = Object.getOwnPropertyDescriptor;
  dl = Object.getOwnPropertyNames;
  hl = Object.getPrototypeOf;
  pl = Object.prototype.hasOwnProperty;
  tn = E((nt) => {
    nt.byteLength = bl;
    nt.toByteArray = _l;
    nt.fromByteArray = ml;
    var G = [], P = [], wl = typeof Uint8Array < "u" ? Uint8Array : Array, Wt = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    for (ye = 0, Zr = Wt.length;ye < Zr; ++ye)
      G[ye] = Wt[ye], P[Wt.charCodeAt(ye)] = ye;
    var ye, Zr;
    P["-".charCodeAt(0)] = 62;
    P["_".charCodeAt(0)] = 63;
    function en(e) {
      var t = e.length;
      if (t % 4 > 0)
        throw new Error("Invalid string. Length must be a multiple of 4");
      var r = e.indexOf("=");
      r === -1 && (r = t);
      var n = r === t ? 0 : 4 - r % 4;
      return [r, n];
    }
    function bl(e) {
      var t = en(e), r = t[0], n = t[1];
      return (r + n) * 3 / 4 - n;
    }
    function gl(e, t, r) {
      return (t + r) * 3 / 4 - r;
    }
    function _l(e) {
      var t, r = en(e), n = r[0], i = r[1], o = new wl(gl(e, n, i)), l = 0, u = i > 0 ? n - 4 : n, f;
      for (f = 0;f < u; f += 4)
        t = P[e.charCodeAt(f)] << 18 | P[e.charCodeAt(f + 1)] << 12 | P[e.charCodeAt(f + 2)] << 6 | P[e.charCodeAt(f + 3)], o[l++] = t >> 16 & 255, o[l++] = t >> 8 & 255, o[l++] = t & 255;
      return i === 2 && (t = P[e.charCodeAt(f)] << 2 | P[e.charCodeAt(f + 1)] >> 4, o[l++] = t & 255), i === 1 && (t = P[e.charCodeAt(f)] << 10 | P[e.charCodeAt(f + 1)] << 4 | P[e.charCodeAt(f + 2)] >> 2, o[l++] = t >> 8 & 255, o[l++] = t & 255), o;
    }
    function El(e) {
      return G[e >> 18 & 63] + G[e >> 12 & 63] + G[e >> 6 & 63] + G[e & 63];
    }
    function Sl(e, t, r) {
      for (var n, i = [], o = t;o < r; o += 3)
        n = (e[o] << 16 & 16711680) + (e[o + 1] << 8 & 65280) + (e[o + 2] & 255), i.push(El(n));
      return i.join("");
    }
    function ml(e) {
      for (var t, r = e.length, n = r % 3, i = [], o = 16383, l = 0, u = r - n;l < u; l += o)
        i.push(Sl(e, l, l + o > u ? u : l + o));
      return n === 1 ? (t = e[r - 1], i.push(G[t >> 2] + G[t << 4 & 63] + "==")) : n === 2 && (t = (e[r - 2] << 8) + e[r - 1], i.push(G[t >> 10] + G[t >> 4 & 63] + G[t << 2 & 63] + "=")), i.join("");
    }
  });
  rn = E(($t) => {
    $t.read = function(e, t, r, n, i) {
      var o, l, u = i * 8 - n - 1, f = (1 << u) - 1, s = f >> 1, d = -7, c = r ? i - 1 : 0, y = r ? -1 : 1, h = e[t + c];
      for (c += y, o = h & (1 << -d) - 1, h >>= -d, d += u;d > 0; o = o * 256 + e[t + c], c += y, d -= 8)
        ;
      for (l = o & (1 << -d) - 1, o >>= -d, d += n;d > 0; l = l * 256 + e[t + c], c += y, d -= 8)
        ;
      if (o === 0)
        o = 1 - s;
      else {
        if (o === f)
          return l ? NaN : (h ? -1 : 1) * (1 / 0);
        l = l + Math.pow(2, n), o = o - s;
      }
      return (h ? -1 : 1) * l * Math.pow(2, o - n);
    };
    $t.write = function(e, t, r, n, i, o) {
      var l, u, f, s = o * 8 - i - 1, d = (1 << s) - 1, c = d >> 1, y = i === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, h = n ? 0 : o - 1, p = n ? 1 : -1, B = t < 0 || t === 0 && 1 / t < 0 ? 1 : 0;
      for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (u = isNaN(t) ? 1 : 0, l = d) : (l = Math.floor(Math.log(t) / Math.LN2), t * (f = Math.pow(2, -l)) < 1 && (l--, f *= 2), l + c >= 1 ? t += y / f : t += y * Math.pow(2, 1 - c), t * f >= 2 && (l++, f /= 2), l + c >= d ? (u = 0, l = d) : l + c >= 1 ? (u = (t * f - 1) * Math.pow(2, i), l = l + c) : (u = t * Math.pow(2, c - 1) * Math.pow(2, i), l = 0));i >= 8; e[r + h] = u & 255, h += p, u /= 256, i -= 8)
        ;
      for (l = l << i | u, s += i;s > 0; e[r + h] = l & 255, h += p, l /= 256, s -= 8)
        ;
      e[r + h - p] |= B * 128;
    };
  });
  te = E((Fe) => {
    var jt = tn(), Le = rn(), nn = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
    Fe.Buffer = a;
    Fe.SlowBuffer = Bl;
    Fe.INSPECT_MAX_BYTES = 50;
    var it = 2147483647;
    Fe.kMaxLength = it;
    a.TYPED_ARRAY_SUPPORT = xl();
    !a.TYPED_ARRAY_SUPPORT && typeof console < "u" && typeof console.error == "function" && console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
    function xl() {
      try {
        let e = new Uint8Array(1), t = { foo: function() {
          return 42;
        } };
        return Object.setPrototypeOf(t, Uint8Array.prototype), Object.setPrototypeOf(e, t), e.foo() === 42;
      } catch {
        return false;
      }
    }
    Object.defineProperty(a.prototype, "parent", { enumerable: true, get: function() {
      if (!!a.isBuffer(this))
        return this.buffer;
    } });
    Object.defineProperty(a.prototype, "offset", { enumerable: true, get: function() {
      if (!!a.isBuffer(this))
        return this.byteOffset;
    } });
    function ee(e) {
      if (e > it)
        throw new RangeError('The value "' + e + '" is invalid for option "size"');
      let t = new Uint8Array(e);
      return Object.setPrototypeOf(t, a.prototype), t;
    }
    function a(e, t, r) {
      if (typeof e == "number") {
        if (typeof t == "string")
          throw new TypeError('The "string" argument must be of type string. Received type number');
        return Yt(e);
      }
      return fn(e, t, r);
    }
    a.poolSize = 8192;
    function fn(e, t, r) {
      if (typeof e == "string")
        return Al(e, t);
      if (ArrayBuffer.isView(e))
        return Il(e);
      if (e == null)
        throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e);
      if (H(e, ArrayBuffer) || e && H(e.buffer, ArrayBuffer) || typeof SharedArrayBuffer < "u" && (H(e, SharedArrayBuffer) || e && H(e.buffer, SharedArrayBuffer)))
        return Ht(e, t, r);
      if (typeof e == "number")
        throw new TypeError('The "value" argument must not be of type number. Received type number');
      let n = e.valueOf && e.valueOf();
      if (n != null && n !== e)
        return a.from(n, t, r);
      let i = Tl(e);
      if (i)
        return i;
      if (typeof Symbol < "u" && Symbol.toPrimitive != null && typeof e[Symbol.toPrimitive] == "function")
        return a.from(e[Symbol.toPrimitive]("string"), t, r);
      throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e);
    }
    a.from = function(e, t, r) {
      return fn(e, t, r);
    };
    Object.setPrototypeOf(a.prototype, Uint8Array.prototype);
    Object.setPrototypeOf(a, Uint8Array);
    function sn(e) {
      if (typeof e != "number")
        throw new TypeError('"size" argument must be of type number');
      if (e < 0)
        throw new RangeError('The value "' + e + '" is invalid for option "size"');
    }
    function Rl(e, t, r) {
      return sn(e), e <= 0 ? ee(e) : t !== undefined ? typeof r == "string" ? ee(e).fill(t, r) : ee(e).fill(t) : ee(e);
    }
    a.alloc = function(e, t, r) {
      return Rl(e, t, r);
    };
    function Yt(e) {
      return sn(e), ee(e < 0 ? 0 : Kt(e) | 0);
    }
    a.allocUnsafe = function(e) {
      return Yt(e);
    };
    a.allocUnsafeSlow = function(e) {
      return Yt(e);
    };
    function Al(e, t) {
      if ((typeof t != "string" || t === "") && (t = "utf8"), !a.isEncoding(t))
        throw new TypeError("Unknown encoding: " + t);
      let r = an(e, t) | 0, n = ee(r), i = n.write(e, t);
      return i !== r && (n = n.slice(0, i)), n;
    }
    function Gt(e) {
      let t = e.length < 0 ? 0 : Kt(e.length) | 0, r = ee(t);
      for (let n = 0;n < t; n += 1)
        r[n] = e[n] & 255;
      return r;
    }
    function Il(e) {
      if (H(e, Uint8Array)) {
        let t = new Uint8Array(e);
        return Ht(t.buffer, t.byteOffset, t.byteLength);
      }
      return Gt(e);
    }
    function Ht(e, t, r) {
      if (t < 0 || e.byteLength < t)
        throw new RangeError('"offset" is outside of buffer bounds');
      if (e.byteLength < t + (r || 0))
        throw new RangeError('"length" is outside of buffer bounds');
      let n;
      return t === undefined && r === undefined ? n = new Uint8Array(e) : r === undefined ? n = new Uint8Array(e, t) : n = new Uint8Array(e, t, r), Object.setPrototypeOf(n, a.prototype), n;
    }
    function Tl(e) {
      if (a.isBuffer(e)) {
        let t = Kt(e.length) | 0, r = ee(t);
        return r.length === 0 || e.copy(r, 0, 0, t), r;
      }
      if (e.length !== undefined)
        return typeof e.length != "number" || Xt(e.length) ? ee(0) : Gt(e);
      if (e.type === "Buffer" && Array.isArray(e.data))
        return Gt(e.data);
    }
    function Kt(e) {
      if (e >= it)
        throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + it.toString(16) + " bytes");
      return e | 0;
    }
    function Bl(e) {
      return +e != e && (e = 0), a.alloc(+e);
    }
    a.isBuffer = function(t) {
      return t != null && t._isBuffer === true && t !== a.prototype;
    };
    a.compare = function(t, r) {
      if (H(t, Uint8Array) && (t = a.from(t, t.offset, t.byteLength)), H(r, Uint8Array) && (r = a.from(r, r.offset, r.byteLength)), !a.isBuffer(t) || !a.isBuffer(r))
        throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
      if (t === r)
        return 0;
      let n = t.length, i = r.length;
      for (let o = 0, l = Math.min(n, i);o < l; ++o)
        if (t[o] !== r[o]) {
          n = t[o], i = r[o];
          break;
        }
      return n < i ? -1 : i < n ? 1 : 0;
    };
    a.isEncoding = function(t) {
      switch (String(t).toLowerCase()) {
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "latin1":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return true;
        default:
          return false;
      }
    };
    a.concat = function(t, r) {
      if (!Array.isArray(t))
        throw new TypeError('"list" argument must be an Array of Buffers');
      if (t.length === 0)
        return a.alloc(0);
      let n;
      if (r === undefined)
        for (r = 0, n = 0;n < t.length; ++n)
          r += t[n].length;
      let i = a.allocUnsafe(r), o = 0;
      for (n = 0;n < t.length; ++n) {
        let l = t[n];
        if (H(l, Uint8Array))
          o + l.length > i.length ? (a.isBuffer(l) || (l = a.from(l)), l.copy(i, o)) : Uint8Array.prototype.set.call(i, l, o);
        else if (a.isBuffer(l))
          l.copy(i, o);
        else
          throw new TypeError('"list" argument must be an Array of Buffers');
        o += l.length;
      }
      return i;
    };
    function an(e, t) {
      if (a.isBuffer(e))
        return e.length;
      if (ArrayBuffer.isView(e) || H(e, ArrayBuffer))
        return e.byteLength;
      if (typeof e != "string")
        throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof e);
      let r = e.length, n = arguments.length > 2 && arguments[2] === true;
      if (!n && r === 0)
        return 0;
      let i = false;
      for (;; )
        switch (t) {
          case "ascii":
          case "latin1":
          case "binary":
            return r;
          case "utf8":
          case "utf-8":
            return Vt(e).length;
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return r * 2;
          case "hex":
            return r >>> 1;
          case "base64":
            return _n(e).length;
          default:
            if (i)
              return n ? -1 : Vt(e).length;
            t = ("" + t).toLowerCase(), i = true;
        }
    }
    a.byteLength = an;
    function Ll(e, t, r) {
      let n = false;
      if ((t === undefined || t < 0) && (t = 0), t > this.length || ((r === undefined || r > this.length) && (r = this.length), r <= 0) || (r >>>= 0, t >>>= 0, r <= t))
        return "";
      for (e || (e = "utf8");; )
        switch (e) {
          case "hex":
            return vl(this, t, r);
          case "utf8":
          case "utf-8":
            return dn(this, t, r);
          case "ascii":
            return kl(this, t, r);
          case "latin1":
          case "binary":
            return Ul(this, t, r);
          case "base64":
            return Dl(this, t, r);
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return ql(this, t, r);
          default:
            if (n)
              throw new TypeError("Unknown encoding: " + e);
            e = (e + "").toLowerCase(), n = true;
        }
    }
    a.prototype._isBuffer = true;
    function we(e, t, r) {
      let n = e[t];
      e[t] = e[r], e[r] = n;
    }
    a.prototype.swap16 = function() {
      let t = this.length;
      if (t % 2 !== 0)
        throw new RangeError("Buffer size must be a multiple of 16-bits");
      for (let r = 0;r < t; r += 2)
        we(this, r, r + 1);
      return this;
    };
    a.prototype.swap32 = function() {
      let t = this.length;
      if (t % 4 !== 0)
        throw new RangeError("Buffer size must be a multiple of 32-bits");
      for (let r = 0;r < t; r += 4)
        we(this, r, r + 3), we(this, r + 1, r + 2);
      return this;
    };
    a.prototype.swap64 = function() {
      let t = this.length;
      if (t % 8 !== 0)
        throw new RangeError("Buffer size must be a multiple of 64-bits");
      for (let r = 0;r < t; r += 8)
        we(this, r, r + 7), we(this, r + 1, r + 6), we(this, r + 2, r + 5), we(this, r + 3, r + 4);
      return this;
    };
    a.prototype.toString = function() {
      let t = this.length;
      return t === 0 ? "" : arguments.length === 0 ? dn(this, 0, t) : Ll.apply(this, arguments);
    };
    a.prototype.toLocaleString = a.prototype.toString;
    a.prototype.equals = function(t) {
      if (!a.isBuffer(t))
        throw new TypeError("Argument must be a Buffer");
      return this === t ? true : a.compare(this, t) === 0;
    };
    a.prototype.inspect = function() {
      let t = "", r = Fe.INSPECT_MAX_BYTES;
      return t = this.toString("hex", 0, r).replace(/(.{2})/g, "$1 ").trim(), this.length > r && (t += " ... "), "<Buffer " + t + ">";
    };
    nn && (a.prototype[nn] = a.prototype.inspect);
    a.prototype.compare = function(t, r, n, i, o) {
      if (H(t, Uint8Array) && (t = a.from(t, t.offset, t.byteLength)), !a.isBuffer(t))
        throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof t);
      if (r === undefined && (r = 0), n === undefined && (n = t ? t.length : 0), i === undefined && (i = 0), o === undefined && (o = this.length), r < 0 || n > t.length || i < 0 || o > this.length)
        throw new RangeError("out of range index");
      if (i >= o && r >= n)
        return 0;
      if (i >= o)
        return -1;
      if (r >= n)
        return 1;
      if (r >>>= 0, n >>>= 0, i >>>= 0, o >>>= 0, this === t)
        return 0;
      let l = o - i, u = n - r, f = Math.min(l, u), s = this.slice(i, o), d = t.slice(r, n);
      for (let c = 0;c < f; ++c)
        if (s[c] !== d[c]) {
          l = s[c], u = d[c];
          break;
        }
      return l < u ? -1 : u < l ? 1 : 0;
    };
    function cn(e, t, r, n, i) {
      if (e.length === 0)
        return -1;
      if (typeof r == "string" ? (n = r, r = 0) : r > 2147483647 ? r = 2147483647 : r < -2147483648 && (r = -2147483648), r = +r, Xt(r) && (r = i ? 0 : e.length - 1), r < 0 && (r = e.length + r), r >= e.length) {
        if (i)
          return -1;
        r = e.length - 1;
      } else if (r < 0)
        if (i)
          r = 0;
        else
          return -1;
      if (typeof t == "string" && (t = a.from(t, n)), a.isBuffer(t))
        return t.length === 0 ? -1 : on(e, t, r, n, i);
      if (typeof t == "number")
        return t = t & 255, typeof Uint8Array.prototype.indexOf == "function" ? i ? Uint8Array.prototype.indexOf.call(e, t, r) : Uint8Array.prototype.lastIndexOf.call(e, t, r) : on(e, [t], r, n, i);
      throw new TypeError("val must be string, number or Buffer");
    }
    function on(e, t, r, n, i) {
      let o = 1, l = e.length, u = t.length;
      if (n !== undefined && (n = String(n).toLowerCase(), n === "ucs2" || n === "ucs-2" || n === "utf16le" || n === "utf-16le")) {
        if (e.length < 2 || t.length < 2)
          return -1;
        o = 2, l /= 2, u /= 2, r /= 2;
      }
      function f(d, c) {
        return o === 1 ? d[c] : d.readUInt16BE(c * o);
      }
      let s;
      if (i) {
        let d = -1;
        for (s = r;s < l; s++)
          if (f(e, s) === f(t, d === -1 ? 0 : s - d)) {
            if (d === -1 && (d = s), s - d + 1 === u)
              return d * o;
          } else
            d !== -1 && (s -= s - d), d = -1;
      } else
        for (r + u > l && (r = l - u), s = r;s >= 0; s--) {
          let d = true;
          for (let c = 0;c < u; c++)
            if (f(e, s + c) !== f(t, c)) {
              d = false;
              break;
            }
          if (d)
            return s;
        }
      return -1;
    }
    a.prototype.includes = function(t, r, n) {
      return this.indexOf(t, r, n) !== -1;
    };
    a.prototype.indexOf = function(t, r, n) {
      return cn(this, t, r, n, true);
    };
    a.prototype.lastIndexOf = function(t, r, n) {
      return cn(this, t, r, n, false);
    };
    function Nl(e, t, r, n) {
      r = Number(r) || 0;
      let i = e.length - r;
      n ? (n = Number(n), n > i && (n = i)) : n = i;
      let o = t.length;
      n > o / 2 && (n = o / 2);
      let l;
      for (l = 0;l < n; ++l) {
        let u = parseInt(t.substr(l * 2, 2), 16);
        if (Xt(u))
          return l;
        e[r + l] = u;
      }
      return l;
    }
    function Fl(e, t, r, n) {
      return ot(Vt(t, e.length - r), e, r, n);
    }
    function Ml(e, t, r, n) {
      return ot(Gl(t), e, r, n);
    }
    function Cl(e, t, r, n) {
      return ot(_n(t), e, r, n);
    }
    function Ol(e, t, r, n) {
      return ot(Hl(t, e.length - r), e, r, n);
    }
    a.prototype.write = function(t, r, n, i) {
      if (r === undefined)
        i = "utf8", n = this.length, r = 0;
      else if (n === undefined && typeof r == "string")
        i = r, n = this.length, r = 0;
      else if (isFinite(r))
        r = r >>> 0, isFinite(n) ? (n = n >>> 0, i === undefined && (i = "utf8")) : (i = n, n = undefined);
      else
        throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
      let o = this.length - r;
      if ((n === undefined || n > o) && (n = o), t.length > 0 && (n < 0 || r < 0) || r > this.length)
        throw new RangeError("Attempt to write outside buffer bounds");
      i || (i = "utf8");
      let l = false;
      for (;; )
        switch (i) {
          case "hex":
            return Nl(this, t, r, n);
          case "utf8":
          case "utf-8":
            return Fl(this, t, r, n);
          case "ascii":
          case "latin1":
          case "binary":
            return Ml(this, t, r, n);
          case "base64":
            return Cl(this, t, r, n);
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return Ol(this, t, r, n);
          default:
            if (l)
              throw new TypeError("Unknown encoding: " + i);
            i = ("" + i).toLowerCase(), l = true;
        }
    };
    a.prototype.toJSON = function() {
      return { type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0) };
    };
    function Dl(e, t, r) {
      return t === 0 && r === e.length ? jt.fromByteArray(e) : jt.fromByteArray(e.slice(t, r));
    }
    function dn(e, t, r) {
      r = Math.min(e.length, r);
      let n = [], i = t;
      for (;i < r; ) {
        let o = e[i], l = null, u = o > 239 ? 4 : o > 223 ? 3 : o > 191 ? 2 : 1;
        if (i + u <= r) {
          let f, s, d, c;
          switch (u) {
            case 1:
              o < 128 && (l = o);
              break;
            case 2:
              f = e[i + 1], (f & 192) === 128 && (c = (o & 31) << 6 | f & 63, c > 127 && (l = c));
              break;
            case 3:
              f = e[i + 1], s = e[i + 2], (f & 192) === 128 && (s & 192) === 128 && (c = (o & 15) << 12 | (f & 63) << 6 | s & 63, c > 2047 && (c < 55296 || c > 57343) && (l = c));
              break;
            case 4:
              f = e[i + 1], s = e[i + 2], d = e[i + 3], (f & 192) === 128 && (s & 192) === 128 && (d & 192) === 128 && (c = (o & 15) << 18 | (f & 63) << 12 | (s & 63) << 6 | d & 63, c > 65535 && c < 1114112 && (l = c));
          }
        }
        l === null ? (l = 65533, u = 1) : l > 65535 && (l -= 65536, n.push(l >>> 10 & 1023 | 55296), l = 56320 | l & 1023), n.push(l), i += u;
      }
      return Pl(n);
    }
    var ln = 4096;
    function Pl(e) {
      let t = e.length;
      if (t <= ln)
        return String.fromCharCode.apply(String, e);
      let r = "", n = 0;
      for (;n < t; )
        r += String.fromCharCode.apply(String, e.slice(n, n += ln));
      return r;
    }
    function kl(e, t, r) {
      let n = "";
      r = Math.min(e.length, r);
      for (let i = t;i < r; ++i)
        n += String.fromCharCode(e[i] & 127);
      return n;
    }
    function Ul(e, t, r) {
      let n = "";
      r = Math.min(e.length, r);
      for (let i = t;i < r; ++i)
        n += String.fromCharCode(e[i]);
      return n;
    }
    function vl(e, t, r) {
      let n = e.length;
      (!t || t < 0) && (t = 0), (!r || r < 0 || r > n) && (r = n);
      let i = "";
      for (let o = t;o < r; ++o)
        i += Vl[e[o]];
      return i;
    }
    function ql(e, t, r) {
      let n = e.slice(t, r), i = "";
      for (let o = 0;o < n.length - 1; o += 2)
        i += String.fromCharCode(n[o] + n[o + 1] * 256);
      return i;
    }
    a.prototype.slice = function(t, r) {
      let n = this.length;
      t = ~~t, r = r === undefined ? n : ~~r, t < 0 ? (t += n, t < 0 && (t = 0)) : t > n && (t = n), r < 0 ? (r += n, r < 0 && (r = 0)) : r > n && (r = n), r < t && (r = t);
      let i = this.subarray(t, r);
      return Object.setPrototypeOf(i, a.prototype), i;
    };
    function F(e, t, r) {
      if (e % 1 !== 0 || e < 0)
        throw new RangeError("offset is not uint");
      if (e + t > r)
        throw new RangeError("Trying to access beyond buffer length");
    }
    a.prototype.readUintLE = a.prototype.readUIntLE = function(t, r, n) {
      t = t >>> 0, r = r >>> 0, n || F(t, r, this.length);
      let i = this[t], o = 1, l = 0;
      for (;++l < r && (o *= 256); )
        i += this[t + l] * o;
      return i;
    };
    a.prototype.readUintBE = a.prototype.readUIntBE = function(t, r, n) {
      t = t >>> 0, r = r >>> 0, n || F(t, r, this.length);
      let i = this[t + --r], o = 1;
      for (;r > 0 && (o *= 256); )
        i += this[t + --r] * o;
      return i;
    };
    a.prototype.readUint8 = a.prototype.readUInt8 = function(t, r) {
      return t = t >>> 0, r || F(t, 1, this.length), this[t];
    };
    a.prototype.readUint16LE = a.prototype.readUInt16LE = function(t, r) {
      return t = t >>> 0, r || F(t, 2, this.length), this[t] | this[t + 1] << 8;
    };
    a.prototype.readUint16BE = a.prototype.readUInt16BE = function(t, r) {
      return t = t >>> 0, r || F(t, 2, this.length), this[t] << 8 | this[t + 1];
    };
    a.prototype.readUint32LE = a.prototype.readUInt32LE = function(t, r) {
      return t = t >>> 0, r || F(t, 4, this.length), (this[t] | this[t + 1] << 8 | this[t + 2] << 16) + this[t + 3] * 16777216;
    };
    a.prototype.readUint32BE = a.prototype.readUInt32BE = function(t, r) {
      return t = t >>> 0, r || F(t, 4, this.length), this[t] * 16777216 + (this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3]);
    };
    a.prototype.readBigUInt64LE = fe(function(t) {
      t = t >>> 0, Ne(t, "offset");
      let r = this[t], n = this[t + 7];
      (r === undefined || n === undefined) && Ge(t, this.length - 8);
      let i = r + this[++t] * 2 ** 8 + this[++t] * 2 ** 16 + this[++t] * 2 ** 24, o = this[++t] + this[++t] * 2 ** 8 + this[++t] * 2 ** 16 + n * 2 ** 24;
      return BigInt(i) + (BigInt(o) << BigInt(32));
    });
    a.prototype.readBigUInt64BE = fe(function(t) {
      t = t >>> 0, Ne(t, "offset");
      let r = this[t], n = this[t + 7];
      (r === undefined || n === undefined) && Ge(t, this.length - 8);
      let i = r * 2 ** 24 + this[++t] * 2 ** 16 + this[++t] * 2 ** 8 + this[++t], o = this[++t] * 2 ** 24 + this[++t] * 2 ** 16 + this[++t] * 2 ** 8 + n;
      return (BigInt(i) << BigInt(32)) + BigInt(o);
    });
    a.prototype.readIntLE = function(t, r, n) {
      t = t >>> 0, r = r >>> 0, n || F(t, r, this.length);
      let i = this[t], o = 1, l = 0;
      for (;++l < r && (o *= 256); )
        i += this[t + l] * o;
      return o *= 128, i >= o && (i -= Math.pow(2, 8 * r)), i;
    };
    a.prototype.readIntBE = function(t, r, n) {
      t = t >>> 0, r = r >>> 0, n || F(t, r, this.length);
      let i = r, o = 1, l = this[t + --i];
      for (;i > 0 && (o *= 256); )
        l += this[t + --i] * o;
      return o *= 128, l >= o && (l -= Math.pow(2, 8 * r)), l;
    };
    a.prototype.readInt8 = function(t, r) {
      return t = t >>> 0, r || F(t, 1, this.length), this[t] & 128 ? (255 - this[t] + 1) * -1 : this[t];
    };
    a.prototype.readInt16LE = function(t, r) {
      t = t >>> 0, r || F(t, 2, this.length);
      let n = this[t] | this[t + 1] << 8;
      return n & 32768 ? n | 4294901760 : n;
    };
    a.prototype.readInt16BE = function(t, r) {
      t = t >>> 0, r || F(t, 2, this.length);
      let n = this[t + 1] | this[t] << 8;
      return n & 32768 ? n | 4294901760 : n;
    };
    a.prototype.readInt32LE = function(t, r) {
      return t = t >>> 0, r || F(t, 4, this.length), this[t] | this[t + 1] << 8 | this[t + 2] << 16 | this[t + 3] << 24;
    };
    a.prototype.readInt32BE = function(t, r) {
      return t = t >>> 0, r || F(t, 4, this.length), this[t] << 24 | this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3];
    };
    a.prototype.readBigInt64LE = fe(function(t) {
      t = t >>> 0, Ne(t, "offset");
      let r = this[t], n = this[t + 7];
      (r === undefined || n === undefined) && Ge(t, this.length - 8);
      let i = this[t + 4] + this[t + 5] * 2 ** 8 + this[t + 6] * 2 ** 16 + (n << 24);
      return (BigInt(i) << BigInt(32)) + BigInt(r + this[++t] * 2 ** 8 + this[++t] * 2 ** 16 + this[++t] * 2 ** 24);
    });
    a.prototype.readBigInt64BE = fe(function(t) {
      t = t >>> 0, Ne(t, "offset");
      let r = this[t], n = this[t + 7];
      (r === undefined || n === undefined) && Ge(t, this.length - 8);
      let i = (r << 24) + this[++t] * 2 ** 16 + this[++t] * 2 ** 8 + this[++t];
      return (BigInt(i) << BigInt(32)) + BigInt(this[++t] * 2 ** 24 + this[++t] * 2 ** 16 + this[++t] * 2 ** 8 + n);
    });
    a.prototype.readFloatLE = function(t, r) {
      return t = t >>> 0, r || F(t, 4, this.length), Le.read(this, t, true, 23, 4);
    };
    a.prototype.readFloatBE = function(t, r) {
      return t = t >>> 0, r || F(t, 4, this.length), Le.read(this, t, false, 23, 4);
    };
    a.prototype.readDoubleLE = function(t, r) {
      return t = t >>> 0, r || F(t, 8, this.length), Le.read(this, t, true, 52, 8);
    };
    a.prototype.readDoubleBE = function(t, r) {
      return t = t >>> 0, r || F(t, 8, this.length), Le.read(this, t, false, 52, 8);
    };
    function O(e, t, r, n, i, o) {
      if (!a.isBuffer(e))
        throw new TypeError('"buffer" argument must be a Buffer instance');
      if (t > i || t < o)
        throw new RangeError('"value" argument is out of bounds');
      if (r + n > e.length)
        throw new RangeError("Index out of range");
    }
    a.prototype.writeUintLE = a.prototype.writeUIntLE = function(t, r, n, i) {
      if (t = +t, r = r >>> 0, n = n >>> 0, !i) {
        let u = Math.pow(2, 8 * n) - 1;
        O(this, t, r, n, u, 0);
      }
      let o = 1, l = 0;
      for (this[r] = t & 255;++l < n && (o *= 256); )
        this[r + l] = t / o & 255;
      return r + n;
    };
    a.prototype.writeUintBE = a.prototype.writeUIntBE = function(t, r, n, i) {
      if (t = +t, r = r >>> 0, n = n >>> 0, !i) {
        let u = Math.pow(2, 8 * n) - 1;
        O(this, t, r, n, u, 0);
      }
      let o = n - 1, l = 1;
      for (this[r + o] = t & 255;--o >= 0 && (l *= 256); )
        this[r + o] = t / l & 255;
      return r + n;
    };
    a.prototype.writeUint8 = a.prototype.writeUInt8 = function(t, r, n) {
      return t = +t, r = r >>> 0, n || O(this, t, r, 1, 255, 0), this[r] = t & 255, r + 1;
    };
    a.prototype.writeUint16LE = a.prototype.writeUInt16LE = function(t, r, n) {
      return t = +t, r = r >>> 0, n || O(this, t, r, 2, 65535, 0), this[r] = t & 255, this[r + 1] = t >>> 8, r + 2;
    };
    a.prototype.writeUint16BE = a.prototype.writeUInt16BE = function(t, r, n) {
      return t = +t, r = r >>> 0, n || O(this, t, r, 2, 65535, 0), this[r] = t >>> 8, this[r + 1] = t & 255, r + 2;
    };
    a.prototype.writeUint32LE = a.prototype.writeUInt32LE = function(t, r, n) {
      return t = +t, r = r >>> 0, n || O(this, t, r, 4, 4294967295, 0), this[r + 3] = t >>> 24, this[r + 2] = t >>> 16, this[r + 1] = t >>> 8, this[r] = t & 255, r + 4;
    };
    a.prototype.writeUint32BE = a.prototype.writeUInt32BE = function(t, r, n) {
      return t = +t, r = r >>> 0, n || O(this, t, r, 4, 4294967295, 0), this[r] = t >>> 24, this[r + 1] = t >>> 16, this[r + 2] = t >>> 8, this[r + 3] = t & 255, r + 4;
    };
    function hn(e, t, r, n, i) {
      gn(t, n, i, e, r, 7);
      let o = Number(t & BigInt(4294967295));
      e[r++] = o, o = o >> 8, e[r++] = o, o = o >> 8, e[r++] = o, o = o >> 8, e[r++] = o;
      let l = Number(t >> BigInt(32) & BigInt(4294967295));
      return e[r++] = l, l = l >> 8, e[r++] = l, l = l >> 8, e[r++] = l, l = l >> 8, e[r++] = l, r;
    }
    function pn(e, t, r, n, i) {
      gn(t, n, i, e, r, 7);
      let o = Number(t & BigInt(4294967295));
      e[r + 7] = o, o = o >> 8, e[r + 6] = o, o = o >> 8, e[r + 5] = o, o = o >> 8, e[r + 4] = o;
      let l = Number(t >> BigInt(32) & BigInt(4294967295));
      return e[r + 3] = l, l = l >> 8, e[r + 2] = l, l = l >> 8, e[r + 1] = l, l = l >> 8, e[r] = l, r + 8;
    }
    a.prototype.writeBigUInt64LE = fe(function(t, r = 0) {
      return hn(this, t, r, BigInt(0), BigInt("0xffffffffffffffff"));
    });
    a.prototype.writeBigUInt64BE = fe(function(t, r = 0) {
      return pn(this, t, r, BigInt(0), BigInt("0xffffffffffffffff"));
    });
    a.prototype.writeIntLE = function(t, r, n, i) {
      if (t = +t, r = r >>> 0, !i) {
        let f = Math.pow(2, 8 * n - 1);
        O(this, t, r, n, f - 1, -f);
      }
      let o = 0, l = 1, u = 0;
      for (this[r] = t & 255;++o < n && (l *= 256); )
        t < 0 && u === 0 && this[r + o - 1] !== 0 && (u = 1), this[r + o] = (t / l >> 0) - u & 255;
      return r + n;
    };
    a.prototype.writeIntBE = function(t, r, n, i) {
      if (t = +t, r = r >>> 0, !i) {
        let f = Math.pow(2, 8 * n - 1);
        O(this, t, r, n, f - 1, -f);
      }
      let o = n - 1, l = 1, u = 0;
      for (this[r + o] = t & 255;--o >= 0 && (l *= 256); )
        t < 0 && u === 0 && this[r + o + 1] !== 0 && (u = 1), this[r + o] = (t / l >> 0) - u & 255;
      return r + n;
    };
    a.prototype.writeInt8 = function(t, r, n) {
      return t = +t, r = r >>> 0, n || O(this, t, r, 1, 127, -128), t < 0 && (t = 255 + t + 1), this[r] = t & 255, r + 1;
    };
    a.prototype.writeInt16LE = function(t, r, n) {
      return t = +t, r = r >>> 0, n || O(this, t, r, 2, 32767, -32768), this[r] = t & 255, this[r + 1] = t >>> 8, r + 2;
    };
    a.prototype.writeInt16BE = function(t, r, n) {
      return t = +t, r = r >>> 0, n || O(this, t, r, 2, 32767, -32768), this[r] = t >>> 8, this[r + 1] = t & 255, r + 2;
    };
    a.prototype.writeInt32LE = function(t, r, n) {
      return t = +t, r = r >>> 0, n || O(this, t, r, 4, 2147483647, -2147483648), this[r] = t & 255, this[r + 1] = t >>> 8, this[r + 2] = t >>> 16, this[r + 3] = t >>> 24, r + 4;
    };
    a.prototype.writeInt32BE = function(t, r, n) {
      return t = +t, r = r >>> 0, n || O(this, t, r, 4, 2147483647, -2147483648), t < 0 && (t = 4294967295 + t + 1), this[r] = t >>> 24, this[r + 1] = t >>> 16, this[r + 2] = t >>> 8, this[r + 3] = t & 255, r + 4;
    };
    a.prototype.writeBigInt64LE = fe(function(t, r = 0) {
      return hn(this, t, r, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
    });
    a.prototype.writeBigInt64BE = fe(function(t, r = 0) {
      return pn(this, t, r, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
    });
    function yn(e, t, r, n, i, o) {
      if (r + n > e.length)
        throw new RangeError("Index out of range");
      if (r < 0)
        throw new RangeError("Index out of range");
    }
    function wn(e, t, r, n, i) {
      return t = +t, r = r >>> 0, i || yn(e, t, r, 4, 340282346638528860000000000000000000000, -340282346638528860000000000000000000000), Le.write(e, t, r, n, 23, 4), r + 4;
    }
    a.prototype.writeFloatLE = function(t, r, n) {
      return wn(this, t, r, true, n);
    };
    a.prototype.writeFloatBE = function(t, r, n) {
      return wn(this, t, r, false, n);
    };
    function bn(e, t, r, n, i) {
      return t = +t, r = r >>> 0, i || yn(e, t, r, 8, 179769313486231570000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, -179769313486231570000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000), Le.write(e, t, r, n, 52, 8), r + 8;
    }
    a.prototype.writeDoubleLE = function(t, r, n) {
      return bn(this, t, r, true, n);
    };
    a.prototype.writeDoubleBE = function(t, r, n) {
      return bn(this, t, r, false, n);
    };
    a.prototype.copy = function(t, r, n, i) {
      if (!a.isBuffer(t))
        throw new TypeError("argument should be a Buffer");
      if (n || (n = 0), !i && i !== 0 && (i = this.length), r >= t.length && (r = t.length), r || (r = 0), i > 0 && i < n && (i = n), i === n || t.length === 0 || this.length === 0)
        return 0;
      if (r < 0)
        throw new RangeError("targetStart out of bounds");
      if (n < 0 || n >= this.length)
        throw new RangeError("Index out of range");
      if (i < 0)
        throw new RangeError("sourceEnd out of bounds");
      i > this.length && (i = this.length), t.length - r < i - n && (i = t.length - r + n);
      let o = i - n;
      return this === t && typeof Uint8Array.prototype.copyWithin == "function" ? this.copyWithin(r, n, i) : Uint8Array.prototype.set.call(t, this.subarray(n, i), r), o;
    };
    a.prototype.fill = function(t, r, n, i) {
      if (typeof t == "string") {
        if (typeof r == "string" ? (i = r, r = 0, n = this.length) : typeof n == "string" && (i = n, n = this.length), i !== undefined && typeof i != "string")
          throw new TypeError("encoding must be a string");
        if (typeof i == "string" && !a.isEncoding(i))
          throw new TypeError("Unknown encoding: " + i);
        if (t.length === 1) {
          let l = t.charCodeAt(0);
          (i === "utf8" && l < 128 || i === "latin1") && (t = l);
        }
      } else
        typeof t == "number" ? t = t & 255 : typeof t == "boolean" && (t = Number(t));
      if (r < 0 || this.length < r || this.length < n)
        throw new RangeError("Out of range index");
      if (n <= r)
        return this;
      r = r >>> 0, n = n === undefined ? this.length : n >>> 0, t || (t = 0);
      let o;
      if (typeof t == "number")
        for (o = r;o < n; ++o)
          this[o] = t;
      else {
        let l = a.isBuffer(t) ? t : a.from(t, i), u = l.length;
        if (u === 0)
          throw new TypeError('The value "' + t + '" is invalid for argument "value"');
        for (o = 0;o < n - r; ++o)
          this[o + r] = l[o % u];
      }
      return this;
    };
    var Be = {};
    function zt(e, t, r) {
      Be[e] = class extends r {
        constructor() {
          super(), Object.defineProperty(this, "message", { value: t.apply(this, arguments), writable: true, configurable: true }), this.name = `${this.name} [${e}]`, this.stack, delete this.name;
        }
        get code() {
          return e;
        }
        set code(i) {
          Object.defineProperty(this, "code", { configurable: true, enumerable: true, value: i, writable: true });
        }
        toString() {
          return `${this.name} [${e}]: ${this.message}`;
        }
      };
    }
    zt("ERR_BUFFER_OUT_OF_BOUNDS", function(e) {
      return e ? `${e} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds";
    }, RangeError);
    zt("ERR_INVALID_ARG_TYPE", function(e, t) {
      return `The "${e}" argument must be of type number. Received type ${typeof t}`;
    }, TypeError);
    zt("ERR_OUT_OF_RANGE", function(e, t, r) {
      let n = `The value of "${e}" is out of range.`, i = r;
      return Number.isInteger(r) && Math.abs(r) > 2 ** 32 ? i = un(String(r)) : typeof r == "bigint" && (i = String(r), (r > BigInt(2) ** BigInt(32) || r < -(BigInt(2) ** BigInt(32))) && (i = un(i)), i += "n"), n += ` It must be ${t}. Received ${i}`, n;
    }, RangeError);
    function un(e) {
      let t = "", r = e.length, n = e[0] === "-" ? 1 : 0;
      for (;r >= n + 4; r -= 3)
        t = `_${e.slice(r - 3, r)}${t}`;
      return `${e.slice(0, r)}${t}`;
    }
    function Wl(e, t, r) {
      Ne(t, "offset"), (e[t] === undefined || e[t + r] === undefined) && Ge(t, e.length - (r + 1));
    }
    function gn(e, t, r, n, i, o) {
      if (e > r || e < t) {
        let l = typeof t == "bigint" ? "n" : "", u;
        throw o > 3 ? t === 0 || t === BigInt(0) ? u = `>= 0${l} and < 2${l} ** ${(o + 1) * 8}${l}` : u = `>= -(2${l} ** ${(o + 1) * 8 - 1}${l}) and < 2 ** ${(o + 1) * 8 - 1}${l}` : u = `>= ${t}${l} and <= ${r}${l}`, new Be.ERR_OUT_OF_RANGE("value", u, e);
      }
      Wl(n, i, o);
    }
    function Ne(e, t) {
      if (typeof e != "number")
        throw new Be.ERR_INVALID_ARG_TYPE(t, "number", e);
    }
    function Ge(e, t, r) {
      throw Math.floor(e) !== e ? (Ne(e, r), new Be.ERR_OUT_OF_RANGE(r || "offset", "an integer", e)) : t < 0 ? new Be.ERR_BUFFER_OUT_OF_BOUNDS : new Be.ERR_OUT_OF_RANGE(r || "offset", `>= ${r ? 1 : 0} and <= ${t}`, e);
    }
    var $l = /[^+/0-9A-Za-z-_]/g;
    function jl(e) {
      if (e = e.split("=")[0], e = e.trim().replace($l, ""), e.length < 2)
        return "";
      for (;e.length % 4 !== 0; )
        e = e + "=";
      return e;
    }
    function Vt(e, t) {
      t = t || 1 / 0;
      let r, n = e.length, i = null, o = [];
      for (let l = 0;l < n; ++l) {
        if (r = e.charCodeAt(l), r > 55295 && r < 57344) {
          if (!i) {
            if (r > 56319) {
              (t -= 3) > -1 && o.push(239, 191, 189);
              continue;
            } else if (l + 1 === n) {
              (t -= 3) > -1 && o.push(239, 191, 189);
              continue;
            }
            i = r;
            continue;
          }
          if (r < 56320) {
            (t -= 3) > -1 && o.push(239, 191, 189), i = r;
            continue;
          }
          r = (i - 55296 << 10 | r - 56320) + 65536;
        } else
          i && (t -= 3) > -1 && o.push(239, 191, 189);
        if (i = null, r < 128) {
          if ((t -= 1) < 0)
            break;
          o.push(r);
        } else if (r < 2048) {
          if ((t -= 2) < 0)
            break;
          o.push(r >> 6 | 192, r & 63 | 128);
        } else if (r < 65536) {
          if ((t -= 3) < 0)
            break;
          o.push(r >> 12 | 224, r >> 6 & 63 | 128, r & 63 | 128);
        } else if (r < 1114112) {
          if ((t -= 4) < 0)
            break;
          o.push(r >> 18 | 240, r >> 12 & 63 | 128, r >> 6 & 63 | 128, r & 63 | 128);
        } else
          throw new Error("Invalid code point");
      }
      return o;
    }
    function Gl(e) {
      let t = [];
      for (let r = 0;r < e.length; ++r)
        t.push(e.charCodeAt(r) & 255);
      return t;
    }
    function Hl(e, t) {
      let r, n, i, o = [];
      for (let l = 0;l < e.length && !((t -= 2) < 0); ++l)
        r = e.charCodeAt(l), n = r >> 8, i = r % 256, o.push(i), o.push(n);
      return o;
    }
    function _n(e) {
      return jt.toByteArray(jl(e));
    }
    function ot(e, t, r, n) {
      let i;
      for (i = 0;i < n && !(i + r >= t.length || i >= e.length); ++i)
        t[i + r] = e[i];
      return i;
    }
    function H(e, t) {
      return e instanceof t || e != null && e.constructor != null && e.constructor.name != null && e.constructor.name === t.name;
    }
    function Xt(e) {
      return e !== e;
    }
    var Vl = function() {
      let e = "0123456789abcdef", t = new Array(256);
      for (let r = 0;r < 16; ++r) {
        let n = r * 16;
        for (let i = 0;i < 16; ++i)
          t[n + i] = e[r] + e[i];
      }
      return t;
    }();
    function fe(e) {
      return typeof BigInt > "u" ? Yl : e;
    }
    function Yl() {
      throw new Error("BigInt not supported");
    }
  });
  I = E((Gc, En) => {
    En.exports = { ArrayIsArray(e) {
      return Array.isArray(e);
    }, ArrayPrototypeIncludes(e, t) {
      return e.includes(t);
    }, ArrayPrototypeIndexOf(e, t) {
      return e.indexOf(t);
    }, ArrayPrototypeJoin(e, t) {
      return e.join(t);
    }, ArrayPrototypeMap(e, t) {
      return e.map(t);
    }, ArrayPrototypePop(e, t) {
      return e.pop(t);
    }, ArrayPrototypePush(e, t) {
      return e.push(t);
    }, ArrayPrototypeSlice(e, t, r) {
      return e.slice(t, r);
    }, Error, FunctionPrototypeCall(e, t, ...r) {
      return e.call(t, ...r);
    }, FunctionPrototypeSymbolHasInstance(e, t) {
      return Function.prototype[Symbol.hasInstance].call(e, t);
    }, MathFloor: Math.floor, Number, NumberIsInteger: Number.isInteger, NumberIsNaN: Number.isNaN, NumberMAX_SAFE_INTEGER: Number.MAX_SAFE_INTEGER, NumberMIN_SAFE_INTEGER: Number.MIN_SAFE_INTEGER, NumberParseInt: Number.parseInt, ObjectDefineProperties(e, t) {
      return Object.defineProperties(e, t);
    }, ObjectDefineProperty(e, t, r) {
      return Object.defineProperty(e, t, r);
    }, ObjectGetOwnPropertyDescriptor(e, t) {
      return Object.getOwnPropertyDescriptor(e, t);
    }, ObjectKeys(e) {
      return Object.keys(e);
    }, ObjectSetPrototypeOf(e, t) {
      return Object.setPrototypeOf(e, t);
    }, Promise, PromisePrototypeCatch(e, t) {
      return e.catch(t);
    }, PromisePrototypeThen(e, t, r) {
      return e.then(t, r);
    }, PromiseReject(e) {
      return Promise.reject(e);
    }, ReflectApply: Reflect.apply, RegExpPrototypeTest(e, t) {
      return e.test(t);
    }, SafeSet: Set, String, StringPrototypeSlice(e, t, r) {
      return e.slice(t, r);
    }, StringPrototypeToLowerCase(e) {
      return e.toLowerCase();
    }, StringPrototypeToUpperCase(e) {
      return e.toUpperCase();
    }, StringPrototypeTrim(e) {
      return e.trim();
    }, Symbol, SymbolAsyncIterator: Symbol.asyncIterator, SymbolHasInstance: Symbol.hasInstance, SymbolIterator: Symbol.iterator, TypedArrayPrototypeSet(e, t, r) {
      return e.set(t, r);
    }, Uint8Array };
  });
  V = E((Hc, Qt) => {
    var Kl = te(), zl = Object.getPrototypeOf(async function() {
    }).constructor, Sn = globalThis.Blob || Kl.Blob, Xl = typeof Sn < "u" ? function(t) {
      return t instanceof Sn;
    } : function(t) {
      return false;
    }, Jt = class extends Error {
      constructor(t) {
        if (!Array.isArray(t))
          throw new TypeError(`Expected input to be an Array, got ${typeof t}`);
        let r = "";
        for (let n = 0;n < t.length; n++)
          r += `    ${t[n].stack}
`;
        super(r), this.name = "AggregateError", this.errors = t;
      }
    };
    Qt.exports = { AggregateError: Jt, kEmptyObject: Object.freeze({}), once(e) {
      let t = false;
      return function(...r) {
        t || (t = true, e.apply(this, r));
      };
    }, createDeferredPromise: function() {
      let e, t;
      return { promise: new Promise((n, i) => {
        e = n, t = i;
      }), resolve: e, reject: t };
    }, promisify(e) {
      return new Promise((t, r) => {
        e((n, ...i) => n ? r(n) : t(...i));
      });
    }, debuglog() {
      return function() {
      };
    }, format(e, ...t) {
      return e.replace(/%([sdifj])/g, function(...[r, n]) {
        let i = t.shift();
        return n === "f" ? i.toFixed(6) : n === "j" ? JSON.stringify(i) : n === "s" && typeof i == "object" ? `${i.constructor !== Object ? i.constructor.name : ""} {}`.trim() : i.toString();
      });
    }, inspect(e) {
      switch (typeof e) {
        case "string":
          if (e.includes("'"))
            if (e.includes('"')) {
              if (!e.includes("`") && !e.includes("${"))
                return `\`${e}\``;
            } else
              return `"${e}"`;
          return `'${e}'`;
        case "number":
          return isNaN(e) ? "NaN" : Object.is(e, -0) ? String(e) : e;
        case "bigint":
          return `${String(e)}n`;
        case "boolean":
        case "undefined":
          return String(e);
        case "object":
          return "{}";
      }
    }, types: { isAsyncFunction(e) {
      return e instanceof zl;
    }, isArrayBufferView(e) {
      return ArrayBuffer.isView(e);
    } }, isBlob: Xl };
    Qt.exports.promisify.custom = Symbol.for("nodejs.util.promisify.custom");
  });
  ut = E((Vc, lt) => {
    var { AbortController: mn, AbortSignal: Jl } = typeof self < "u" ? self : typeof window < "u" ? window : undefined;
    lt.exports = mn;
    lt.exports.AbortSignal = Jl;
    lt.exports.default = mn;
  });
  C = E((Yc, An) => {
    var { format: Ql, inspect: ft, AggregateError: Zl } = V(), eu = globalThis.AggregateError || Zl, tu = Symbol("kIsNodeError"), ru = ["string", "function", "number", "object", "Function", "Object", "boolean", "bigint", "symbol"], nu = /^([A-Z][a-z0-9]*)+$/, iu = "__node_internal_", st = {};
    function be(e, t) {
      if (!e)
        throw new st.ERR_INTERNAL_ASSERTION(t);
    }
    function xn(e) {
      let t = "", r = e.length, n = e[0] === "-" ? 1 : 0;
      for (;r >= n + 4; r -= 3)
        t = `_${e.slice(r - 3, r)}${t}`;
      return `${e.slice(0, r)}${t}`;
    }
    function ou(e, t, r) {
      if (typeof t == "function")
        return be(t.length <= r.length, `Code: ${e}; The provided arguments length (${r.length}) does not match the required ones (${t.length}).`), t(...r);
      let n = (t.match(/%[dfijoOs]/g) || []).length;
      return be(n === r.length, `Code: ${e}; The provided arguments length (${r.length}) does not match the required ones (${n}).`), r.length === 0 ? t : Ql(t, ...r);
    }
    function M(e, t, r) {
      r || (r = Error);

      class n extends r {
        constructor(...o) {
          super(ou(e, t, o));
        }
        toString() {
          return `${this.name} [${e}]: ${this.message}`;
        }
      }
      Object.defineProperties(n.prototype, { name: { value: r.name, writable: true, enumerable: false, configurable: true }, toString: { value() {
        return `${this.name} [${e}]: ${this.message}`;
      }, writable: true, enumerable: false, configurable: true } }), n.prototype.code = e, n.prototype[tu] = true, st[e] = n;
    }
    function Rn(e) {
      let t = iu + e.name;
      return Object.defineProperty(e, "name", { value: t }), e;
    }
    function lu(e, t) {
      if (e && t && e !== t) {
        if (Array.isArray(t.errors))
          return t.errors.push(e), t;
        let r = new eu([t, e], t.message);
        return r.code = t.code, r;
      }
      return e || t;
    }
    var Zt = class extends Error {
      constructor(t = "The operation was aborted", r = undefined) {
        if (r !== undefined && typeof r != "object")
          throw new st.ERR_INVALID_ARG_TYPE("options", "Object", r);
        super(t, r), this.code = "ABORT_ERR", this.name = "AbortError";
      }
    };
    M("ERR_ASSERTION", "%s", Error);
    M("ERR_INVALID_ARG_TYPE", (e, t, r) => {
      be(typeof e == "string", "'name' must be a string"), Array.isArray(t) || (t = [t]);
      let n = "The ";
      e.endsWith(" argument") ? n += `${e} ` : n += `"${e}" ${e.includes(".") ? "property" : "argument"} `, n += "must be ";
      let i = [], o = [], l = [];
      for (let f of t)
        be(typeof f == "string", "All expected entries have to be of type string"), ru.includes(f) ? i.push(f.toLowerCase()) : nu.test(f) ? o.push(f) : (be(f !== "object", 'The value "object" should be written as "Object"'), l.push(f));
      if (o.length > 0) {
        let f = i.indexOf("object");
        f !== -1 && (i.splice(i, f, 1), o.push("Object"));
      }
      if (i.length > 0) {
        switch (i.length) {
          case 1:
            n += `of type ${i[0]}`;
            break;
          case 2:
            n += `one of type ${i[0]} or ${i[1]}`;
            break;
          default: {
            let f = i.pop();
            n += `one of type ${i.join(", ")}, or ${f}`;
          }
        }
        (o.length > 0 || l.length > 0) && (n += " or ");
      }
      if (o.length > 0) {
        switch (o.length) {
          case 1:
            n += `an instance of ${o[0]}`;
            break;
          case 2:
            n += `an instance of ${o[0]} or ${o[1]}`;
            break;
          default: {
            let f = o.pop();
            n += `an instance of ${o.join(", ")}, or ${f}`;
          }
        }
        l.length > 0 && (n += " or ");
      }
      switch (l.length) {
        case 0:
          break;
        case 1:
          l[0].toLowerCase() !== l[0] && (n += "an "), n += `${l[0]}`;
          break;
        case 2:
          n += `one of ${l[0]} or ${l[1]}`;
          break;
        default: {
          let f = l.pop();
          n += `one of ${l.join(", ")}, or ${f}`;
        }
      }
      if (r == null)
        n += `. Received ${r}`;
      else if (typeof r == "function" && r.name)
        n += `. Received function ${r.name}`;
      else if (typeof r == "object") {
        var u;
        (u = r.constructor) !== null && u !== undefined && u.name ? n += `. Received an instance of ${r.constructor.name}` : n += `. Received ${ft(r, { depth: -1 })}`;
      } else {
        let f = ft(r, { colors: false });
        f.length > 25 && (f = `${f.slice(0, 25)}...`), n += `. Received type ${typeof r} (${f})`;
      }
      return n;
    }, TypeError);
    M("ERR_INVALID_ARG_VALUE", (e, t, r = "is invalid") => {
      let n = ft(t);
      return n.length > 128 && (n = n.slice(0, 128) + "..."), `The ${e.includes(".") ? "property" : "argument"} '${e}' ${r}. Received ${n}`;
    }, TypeError);
    M("ERR_INVALID_RETURN_VALUE", (e, t, r) => {
      var n;
      let i = r != null && (n = r.constructor) !== null && n !== undefined && n.name ? `instance of ${r.constructor.name}` : `type ${typeof r}`;
      return `Expected ${e} to be returned from the "${t}" function but got ${i}.`;
    }, TypeError);
    M("ERR_MISSING_ARGS", (...e) => {
      be(e.length > 0, "At least one arg needs to be specified");
      let t, r = e.length;
      switch (e = (Array.isArray(e) ? e : [e]).map((n) => `"${n}"`).join(" or "), r) {
        case 1:
          t += `The ${e[0]} argument`;
          break;
        case 2:
          t += `The ${e[0]} and ${e[1]} arguments`;
          break;
        default:
          {
            let n = e.pop();
            t += `The ${e.join(", ")}, and ${n} arguments`;
          }
          break;
      }
      return `${t} must be specified`;
    }, TypeError);
    M("ERR_OUT_OF_RANGE", (e, t, r) => {
      be(t, 'Missing "range" argument');
      let n;
      return Number.isInteger(r) && Math.abs(r) > 2 ** 32 ? n = xn(String(r)) : typeof r == "bigint" ? (n = String(r), (r > 2n ** 32n || r < -(2n ** 32n)) && (n = xn(n)), n += "n") : n = ft(r), `The value of "${e}" is out of range. It must be ${t}. Received ${n}`;
    }, RangeError);
    M("ERR_MULTIPLE_CALLBACK", "Callback called multiple times", Error);
    M("ERR_METHOD_NOT_IMPLEMENTED", "The %s method is not implemented", Error);
    M("ERR_STREAM_ALREADY_FINISHED", "Cannot call %s after a stream was finished", Error);
    M("ERR_STREAM_CANNOT_PIPE", "Cannot pipe, not readable", Error);
    M("ERR_STREAM_DESTROYED", "Cannot call %s after a stream was destroyed", Error);
    M("ERR_STREAM_NULL_VALUES", "May not write null values to stream", TypeError);
    M("ERR_STREAM_PREMATURE_CLOSE", "Premature close", Error);
    M("ERR_STREAM_PUSH_AFTER_EOF", "stream.push() after EOF", Error);
    M("ERR_STREAM_UNSHIFT_AFTER_END_EVENT", "stream.unshift() after end event", Error);
    M("ERR_STREAM_WRITE_AFTER_END", "write after end", Error);
    M("ERR_UNKNOWN_ENCODING", "Unknown encoding: %s", TypeError);
    An.exports = { AbortError: Zt, aggregateTwoErrors: Rn(lu), hideStackFrames: Rn, codes: st };
  });
  He = E((Kc, Cn) => {
    var { ArrayIsArray: Bn, ArrayPrototypeIncludes: Ln, ArrayPrototypeJoin: Nn, ArrayPrototypeMap: uu, NumberIsInteger: tr, NumberIsNaN: fu, NumberMAX_SAFE_INTEGER: su, NumberMIN_SAFE_INTEGER: au, NumberParseInt: cu, ObjectPrototypeHasOwnProperty: du, RegExpPrototypeExec: hu, String: pu, StringPrototypeToUpperCase: yu, StringPrototypeTrim: wu } = I(), { hideStackFrames: W, codes: { ERR_SOCKET_BAD_PORT: bu, ERR_INVALID_ARG_TYPE: D, ERR_INVALID_ARG_VALUE: at, ERR_OUT_OF_RANGE: ge, ERR_UNKNOWN_SIGNAL: In } } = C(), { normalizeEncoding: gu } = V(), { isAsyncFunction: _u, isArrayBufferView: Eu } = V().types, Tn = {};
    function Su(e) {
      return e === (e | 0);
    }
    function mu(e) {
      return e === e >>> 0;
    }
    var xu = /^[0-7]+$/, Ru = "must be a 32-bit unsigned integer or an octal string";
    function Au(e, t, r) {
      if (typeof e > "u" && (e = r), typeof e == "string") {
        if (hu(xu, e) === null)
          throw new at(t, e, Ru);
        e = cu(e, 8);
      }
      return Fn(e, t), e;
    }
    var Iu = W((e, t, r = au, n = su) => {
      if (typeof e != "number")
        throw new D(t, "number", e);
      if (!tr(e))
        throw new ge(t, "an integer", e);
      if (e < r || e > n)
        throw new ge(t, `>= ${r} && <= ${n}`, e);
    }), Tu = W((e, t, r = -2147483648, n = 2147483647) => {
      if (typeof e != "number")
        throw new D(t, "number", e);
      if (!tr(e))
        throw new ge(t, "an integer", e);
      if (e < r || e > n)
        throw new ge(t, `>= ${r} && <= ${n}`, e);
    }), Fn = W((e, t, r = false) => {
      if (typeof e != "number")
        throw new D(t, "number", e);
      if (!tr(e))
        throw new ge(t, "an integer", e);
      let n = r ? 1 : 0, i = 4294967295;
      if (e < n || e > i)
        throw new ge(t, `>= ${n} && <= ${i}`, e);
    });
    function Mn(e, t) {
      if (typeof e != "string")
        throw new D(t, "string", e);
    }
    function Bu(e, t, r = undefined, n) {
      if (typeof e != "number")
        throw new D(t, "number", e);
      if (r != null && e < r || n != null && e > n || (r != null || n != null) && fu(e))
        throw new ge(t, `${r != null ? `>= ${r}` : ""}${r != null && n != null ? " && " : ""}${n != null ? `<= ${n}` : ""}`, e);
    }
    var Lu = W((e, t, r) => {
      if (!Ln(r, e)) {
        let n = Nn(uu(r, (o) => typeof o == "string" ? `'${o}'` : pu(o)), ", "), i = "must be one of: " + n;
        throw new at(t, e, i);
      }
    });
    function Nu(e, t) {
      if (typeof e != "boolean")
        throw new D(t, "boolean", e);
    }
    function er(e, t, r) {
      return e == null || !du(e, t) ? r : e[t];
    }
    var Fu = W((e, t, r = null) => {
      let n = er(r, "allowArray", false), i = er(r, "allowFunction", false);
      if (!er(r, "nullable", false) && e === null || !n && Bn(e) || typeof e != "object" && (!i || typeof e != "function"))
        throw new D(t, "Object", e);
    }), Mu = W((e, t, r = 0) => {
      if (!Bn(e))
        throw new D(t, "Array", e);
      if (e.length < r) {
        let n = `must be longer than ${r}`;
        throw new at(t, e, n);
      }
    });
    function Cu(e, t = "signal") {
      if (Mn(e, t), Tn[e] === undefined)
        throw Tn[yu(e)] !== undefined ? new In(e + " (signals must use all capital letters)") : new In(e);
    }
    var Ou = W((e, t = "buffer") => {
      if (!Eu(e))
        throw new D(t, ["Buffer", "TypedArray", "DataView"], e);
    });
    function Du(e, t) {
      let r = gu(t), n = e.length;
      if (r === "hex" && n % 2 !== 0)
        throw new at("encoding", t, `is invalid for data of length ${n}`);
    }
    function Pu(e, t = "Port", r = true) {
      if (typeof e != "number" && typeof e != "string" || typeof e == "string" && wu(e).length === 0 || +e !== +e >>> 0 || e > 65535 || e === 0 && !r)
        throw new bu(t, e, r);
      return e | 0;
    }
    var ku = W((e, t) => {
      if (e !== undefined && (e === null || typeof e != "object" || !("aborted" in e)))
        throw new D(t, "AbortSignal", e);
    }), Uu = W((e, t) => {
      if (typeof e != "function")
        throw new D(t, "Function", e);
    }), vu = W((e, t) => {
      if (typeof e != "function" || _u(e))
        throw new D(t, "Function", e);
    }), qu = W((e, t) => {
      if (e !== undefined)
        throw new D(t, "undefined", e);
    });
    function Wu(e, t, r) {
      if (!Ln(r, e))
        throw new D(t, `('${Nn(r, "|")}')`, e);
    }
    Cn.exports = { isInt32: Su, isUint32: mu, parseFileMode: Au, validateArray: Mu, validateBoolean: Nu, validateBuffer: Ou, validateEncoding: Du, validateFunction: Uu, validateInt32: Tu, validateInteger: Iu, validateNumber: Bu, validateObject: Fu, validateOneOf: Lu, validatePlainFunction: vu, validatePort: Pu, validateSignalName: Cu, validateString: Mn, validateUint32: Fn, validateUndefined: qu, validateUnion: Wu, validateAbortSignal: ku };
  });
  ir = E((zc, kn) => {
    var x = kn.exports = {}, Y, K;
    function rr() {
      throw new Error("setTimeout has not been defined");
    }
    function nr() {
      throw new Error("clearTimeout has not been defined");
    }
    (function() {
      try {
        typeof setTimeout == "function" ? Y = setTimeout : Y = rr;
      } catch {
        Y = rr;
      }
      try {
        typeof clearTimeout == "function" ? K = clearTimeout : K = nr;
      } catch {
        K = nr;
      }
    })();
    function On(e) {
      if (Y === setTimeout)
        return setTimeout(e, 0);
      if ((Y === rr || !Y) && setTimeout)
        return Y = setTimeout, setTimeout(e, 0);
      try {
        return Y(e, 0);
      } catch {
        try {
          return Y.call(null, e, 0);
        } catch {
          return Y.call(this, e, 0);
        }
      }
    }
    function $u(e) {
      if (K === clearTimeout)
        return clearTimeout(e);
      if ((K === nr || !K) && clearTimeout)
        return K = clearTimeout, clearTimeout(e);
      try {
        return K(e);
      } catch {
        try {
          return K.call(null, e);
        } catch {
          return K.call(this, e);
        }
      }
    }
    var re = [], Me = false, _e, ct = -1;
    function ju() {
      !Me || !_e || (Me = false, _e.length ? re = _e.concat(re) : ct = -1, re.length && Dn());
    }
    function Dn() {
      if (!Me) {
        var e = On(ju);
        Me = true;
        for (var t = re.length;t; ) {
          for (_e = re, re = [];++ct < t; )
            _e && _e[ct].run();
          ct = -1, t = re.length;
        }
        _e = null, Me = false, $u(e);
      }
    }
    x.nextTick = function(e) {
      var t = new Array(arguments.length - 1);
      if (arguments.length > 1)
        for (var r = 1;r < arguments.length; r++)
          t[r - 1] = arguments[r];
      re.push(new Pn(e, t)), re.length === 1 && !Me && On(Dn);
    };
    function Pn(e, t) {
      this.fun = e, this.array = t;
    }
    Pn.prototype.run = function() {
      this.fun.apply(null, this.array);
    };
    x.title = "browser";
    x.browser = true;
    x.env = {};
    x.argv = [];
    x.version = "";
    x.versions = {};
    function ne() {
    }
    x.on = ne;
    x.addListener = ne;
    x.once = ne;
    x.off = ne;
    x.removeListener = ne;
    x.removeAllListeners = ne;
    x.emit = ne;
    x.prependListener = ne;
    x.prependOnceListener = ne;
    x.listeners = function(e) {
      return [];
    };
    x.binding = function(e) {
      throw new Error("process.binding is not supported");
    };
    x.cwd = function() {
      return "/";
    };
    x.chdir = function(e) {
      throw new Error("process.chdir is not supported");
    };
    x.umask = function() {
      return 0;
    };
  });
  k = {};
  Qr(k, { default: () => Gu });
  se = yl(() => {
    ue(k, rt(ir()));
    Gu = rt(ir());
  });
  ae = E((Jc, zn) => {
    var { Symbol: dt, SymbolAsyncIterator: Un, SymbolIterator: vn } = I(), qn = dt("kDestroyed"), Wn = dt("kIsErrored"), or = dt("kIsReadable"), $n = dt("kIsDisturbed");
    function ht(e, t = false) {
      var r;
      return !!(e && typeof e.pipe == "function" && typeof e.on == "function" && (!t || typeof e.pause == "function" && typeof e.resume == "function") && (!e._writableState || ((r = e._readableState) === null || r === undefined ? undefined : r.readable) !== false) && (!e._writableState || e._readableState));
    }
    function pt(e) {
      var t;
      return !!(e && typeof e.write == "function" && typeof e.on == "function" && (!e._readableState || ((t = e._writableState) === null || t === undefined ? undefined : t.writable) !== false));
    }
    function Hu(e) {
      return !!(e && typeof e.pipe == "function" && e._readableState && typeof e.on == "function" && typeof e.write == "function");
    }
    function Ee(e) {
      return e && (e._readableState || e._writableState || typeof e.write == "function" && typeof e.on == "function" || typeof e.pipe == "function" && typeof e.on == "function");
    }
    function Vu(e, t) {
      return e == null ? false : t === true ? typeof e[Un] == "function" : t === false ? typeof e[vn] == "function" : typeof e[Un] == "function" || typeof e[vn] == "function";
    }
    function yt(e) {
      if (!Ee(e))
        return null;
      let { _writableState: t, _readableState: r } = e, n = t || r;
      return !!(e.destroyed || e[qn] || n != null && n.destroyed);
    }
    function jn(e) {
      if (!pt(e))
        return null;
      if (e.writableEnded === true)
        return true;
      let t = e._writableState;
      return t != null && t.errored ? false : typeof t?.ended != "boolean" ? null : t.ended;
    }
    function Yu(e, t) {
      if (!pt(e))
        return null;
      if (e.writableFinished === true)
        return true;
      let r = e._writableState;
      return r != null && r.errored ? false : typeof r?.finished != "boolean" ? null : !!(r.finished || t === false && r.ended === true && r.length === 0);
    }
    function Ku(e) {
      if (!ht(e))
        return null;
      if (e.readableEnded === true)
        return true;
      let t = e._readableState;
      return !t || t.errored ? false : typeof t?.ended != "boolean" ? null : t.ended;
    }
    function Gn(e, t) {
      if (!ht(e))
        return null;
      let r = e._readableState;
      return r != null && r.errored ? false : typeof r?.endEmitted != "boolean" ? null : !!(r.endEmitted || t === false && r.ended === true && r.length === 0);
    }
    function Hn(e) {
      return e && e[or] != null ? e[or] : typeof e?.readable != "boolean" ? null : yt(e) ? false : ht(e) && e.readable && !Gn(e);
    }
    function Vn(e) {
      return typeof e?.writable != "boolean" ? null : yt(e) ? false : pt(e) && e.writable && !jn(e);
    }
    function zu(e, t) {
      return Ee(e) ? yt(e) ? true : !(t?.readable !== false && Hn(e) || t?.writable !== false && Vn(e)) : null;
    }
    function Xu(e) {
      var t, r;
      return Ee(e) ? e.writableErrored ? e.writableErrored : (t = (r = e._writableState) === null || r === undefined ? undefined : r.errored) !== null && t !== undefined ? t : null : null;
    }
    function Ju(e) {
      var t, r;
      return Ee(e) ? e.readableErrored ? e.readableErrored : (t = (r = e._readableState) === null || r === undefined ? undefined : r.errored) !== null && t !== undefined ? t : null : null;
    }
    function Qu(e) {
      if (!Ee(e))
        return null;
      if (typeof e.closed == "boolean")
        return e.closed;
      let { _writableState: t, _readableState: r } = e;
      return typeof t?.closed == "boolean" || typeof r?.closed == "boolean" ? t?.closed || r?.closed : typeof e._closed == "boolean" && Yn(e) ? e._closed : null;
    }
    function Yn(e) {
      return typeof e._closed == "boolean" && typeof e._defaultKeepAlive == "boolean" && typeof e._removedConnection == "boolean" && typeof e._removedContLen == "boolean";
    }
    function Kn(e) {
      return typeof e._sent100 == "boolean" && Yn(e);
    }
    function Zu(e) {
      var t;
      return typeof e._consuming == "boolean" && typeof e._dumped == "boolean" && ((t = e.req) === null || t === undefined ? undefined : t.upgradeOrConnect) === undefined;
    }
    function ef(e) {
      if (!Ee(e))
        return null;
      let { _writableState: t, _readableState: r } = e, n = t || r;
      return !n && Kn(e) || !!(n && n.autoDestroy && n.emitClose && n.closed === false);
    }
    function tf(e) {
      var t;
      return !!(e && ((t = e[$n]) !== null && t !== undefined ? t : e.readableDidRead || e.readableAborted));
    }
    function rf(e) {
      var t, r, n, i, o, l, u, f, s, d;
      return !!(e && ((t = (r = (n = (i = (o = (l = e[Wn]) !== null && l !== undefined ? l : e.readableErrored) !== null && o !== undefined ? o : e.writableErrored) !== null && i !== undefined ? i : (u = e._readableState) === null || u === undefined ? undefined : u.errorEmitted) !== null && n !== undefined ? n : (f = e._writableState) === null || f === undefined ? undefined : f.errorEmitted) !== null && r !== undefined ? r : (s = e._readableState) === null || s === undefined ? undefined : s.errored) !== null && t !== undefined ? t : (d = e._writableState) === null || d === undefined ? undefined : d.errored));
    }
    zn.exports = { kDestroyed: qn, isDisturbed: tf, kIsDisturbed: $n, isErrored: rf, kIsErrored: Wn, isReadable: Hn, kIsReadable: or, isClosed: Qu, isDestroyed: yt, isDuplexNodeStream: Hu, isFinished: zu, isIterable: Vu, isReadableNodeStream: ht, isReadableEnded: Ku, isReadableFinished: Gn, isReadableErrored: Ju, isNodeStream: Ee, isWritable: Vn, isWritableNodeStream: pt, isWritableEnded: jn, isWritableFinished: Yu, isWritableErrored: Xu, isServerRequest: Zu, isServerResponse: Kn, willEmitClose: ef };
  });
  ce = E((Qc, ur) => {
    var Ce = (se(), pe(k)), { AbortError: nf, codes: of } = C(), { ERR_INVALID_ARG_TYPE: lf, ERR_STREAM_PREMATURE_CLOSE: Xn } = of, { kEmptyObject: Jn, once: Qn } = V(), { validateAbortSignal: uf, validateFunction: ff, validateObject: sf } = He(), { Promise: af } = I(), { isClosed: cf, isReadable: Zn, isReadableNodeStream: lr, isReadableFinished: ei, isReadableErrored: df, isWritable: ti, isWritableNodeStream: ri, isWritableFinished: ni, isWritableErrored: hf, isNodeStream: pf, willEmitClose: yf } = ae();
    function wf(e) {
      return e.setHeader && typeof e.abort == "function";
    }
    var bf = () => {
    };
    function ii(e, t, r) {
      var n, i;
      arguments.length === 2 ? (r = t, t = Jn) : t == null ? t = Jn : sf(t, "options"), ff(r, "callback"), uf(t.signal, "options.signal"), r = Qn(r);
      let o = (n = t.readable) !== null && n !== undefined ? n : lr(e), l = (i = t.writable) !== null && i !== undefined ? i : ri(e);
      if (!pf(e))
        throw new lf("stream", "Stream", e);
      let { _writableState: u, _readableState: f } = e, s = () => {
        e.writable || y();
      }, d = yf(e) && lr(e) === o && ri(e) === l, c = ni(e, false), y = () => {
        c = true, e.destroyed && (d = false), !(d && (!e.readable || o)) && (!o || h) && r.call(e);
      }, h = ei(e, false), p = () => {
        h = true, e.destroyed && (d = false), !(d && (!e.writable || l)) && (!l || c) && r.call(e);
      }, B = (N) => {
        r.call(e, N);
      }, v = cf(e), w = () => {
        v = true;
        let N = hf(e) || df(e);
        if (N && typeof N != "boolean")
          return r.call(e, N);
        if (o && !h && lr(e, true) && !ei(e, false))
          return r.call(e, new Xn);
        if (l && !c && !ni(e, false))
          return r.call(e, new Xn);
        r.call(e);
      }, b = () => {
        e.req.on("finish", y);
      };
      wf(e) ? (e.on("complete", y), d || e.on("abort", w), e.req ? b() : e.on("request", b)) : l && !u && (e.on("end", s), e.on("close", s)), !d && typeof e.aborted == "boolean" && e.on("aborted", w), e.on("end", p), e.on("finish", y), t.error !== false && e.on("error", B), e.on("close", w), v ? Ce.nextTick(w) : u != null && u.errorEmitted || f != null && f.errorEmitted ? d || Ce.nextTick(w) : (!o && (!d || Zn(e)) && (c || ti(e) === false) || !l && (!d || ti(e)) && (h || Zn(e) === false) || f && e.req && e.aborted) && Ce.nextTick(w);
      let L = () => {
        r = bf, e.removeListener("aborted", w), e.removeListener("complete", y), e.removeListener("abort", w), e.removeListener("request", b), e.req && e.req.removeListener("finish", y), e.removeListener("end", s), e.removeListener("close", s), e.removeListener("finish", y), e.removeListener("end", p), e.removeListener("error", B), e.removeListener("close", w);
      };
      if (t.signal && !v) {
        let N = () => {
          let Q = r;
          L(), Q.call(e, new nf(undefined, { cause: t.signal.reason }));
        };
        if (t.signal.aborted)
          Ce.nextTick(N);
        else {
          let Q = r;
          r = Qn((...Ie) => {
            t.signal.removeEventListener("abort", N), Q.apply(e, Ie);
          }), t.signal.addEventListener("abort", N);
        }
      }
      return L;
    }
    function gf(e, t) {
      return new af((r, n) => {
        ii(e, t, (i) => {
          i ? n(i) : r();
        });
      });
    }
    ur.exports = ii;
    ur.exports.finished = gf;
  });
  di = E((Zc, ar) => {
    var fi = globalThis.AbortController || ut().AbortController, { codes: { ERR_INVALID_ARG_TYPE: Ve, ERR_MISSING_ARGS: _f, ERR_OUT_OF_RANGE: Ef }, AbortError: z } = C(), { validateAbortSignal: Oe, validateInteger: Sf, validateObject: De } = He(), mf = I().Symbol("kWeak"), { finished: xf } = ce(), { ArrayPrototypePush: Rf, MathFloor: Af, Number: If, NumberIsNaN: Tf, Promise: oi, PromiseReject: li, PromisePrototypeThen: Bf, Symbol: si } = I(), wt = si("kEmpty"), ui = si("kEof");
    function bt(e, t) {
      if (typeof e != "function")
        throw new Ve("fn", ["Function", "AsyncFunction"], e);
      t != null && De(t, "options"), t?.signal != null && Oe(t.signal, "options.signal");
      let r = 1;
      return t?.concurrency != null && (r = Af(t.concurrency)), Sf(r, "concurrency", 1), async function* () {
        var i, o;
        let l = new fi, u = this, f = [], s = l.signal, d = { signal: s }, c = () => l.abort();
        t != null && (i = t.signal) !== null && i !== undefined && i.aborted && c(), t == null || (o = t.signal) === null || o === undefined || o.addEventListener("abort", c);
        let y, h, p = false;
        function B() {
          p = true;
        }
        async function v() {
          try {
            for await (let L of u) {
              var w;
              if (p)
                return;
              if (s.aborted)
                throw new z;
              try {
                L = e(L, d);
              } catch (N) {
                L = li(N);
              }
              L !== wt && (typeof ((w = L) === null || w === undefined ? undefined : w.catch) == "function" && L.catch(B), f.push(L), y && (y(), y = null), !p && f.length && f.length >= r && await new oi((N) => {
                h = N;
              }));
            }
            f.push(ui);
          } catch (L) {
            let N = li(L);
            Bf(N, undefined, B), f.push(N);
          } finally {
            var b;
            p = true, y && (y(), y = null), t == null || (b = t.signal) === null || b === undefined || b.removeEventListener("abort", c);
          }
        }
        v();
        try {
          for (;; ) {
            for (;f.length > 0; ) {
              let w = await f[0];
              if (w === ui)
                return;
              if (s.aborted)
                throw new z;
              w !== wt && (yield w), f.shift(), h && (h(), h = null);
            }
            await new oi((w) => {
              y = w;
            });
          }
        } finally {
          l.abort(), p = true, h && (h(), h = null);
        }
      }.call(this);
    }
    function Lf(e = undefined) {
      return e != null && De(e, "options"), e?.signal != null && Oe(e.signal, "options.signal"), async function* () {
        let r = 0;
        for await (let i of this) {
          var n;
          if (e != null && (n = e.signal) !== null && n !== undefined && n.aborted)
            throw new z({ cause: e.signal.reason });
          yield [r++, i];
        }
      }.call(this);
    }
    async function ai(e, t = undefined) {
      for await (let r of sr.call(this, e, t))
        return true;
      return false;
    }
    async function Nf(e, t = undefined) {
      if (typeof e != "function")
        throw new Ve("fn", ["Function", "AsyncFunction"], e);
      return !await ai.call(this, async (...r) => !await e(...r), t);
    }
    async function Ff(e, t) {
      for await (let r of sr.call(this, e, t))
        return r;
    }
    async function Mf(e, t) {
      if (typeof e != "function")
        throw new Ve("fn", ["Function", "AsyncFunction"], e);
      async function r(n, i) {
        return await e(n, i), wt;
      }
      for await (let n of bt.call(this, r, t))
        ;
    }
    function sr(e, t) {
      if (typeof e != "function")
        throw new Ve("fn", ["Function", "AsyncFunction"], e);
      async function r(n, i) {
        return await e(n, i) ? n : wt;
      }
      return bt.call(this, r, t);
    }
    var fr = class extends _f {
      constructor() {
        super("reduce"), this.message = "Reduce of an empty stream requires an initial value";
      }
    };
    async function Cf(e, t, r) {
      var n;
      if (typeof e != "function")
        throw new Ve("reducer", ["Function", "AsyncFunction"], e);
      r != null && De(r, "options"), r?.signal != null && Oe(r.signal, "options.signal");
      let i = arguments.length > 1;
      if (r != null && (n = r.signal) !== null && n !== undefined && n.aborted) {
        let s = new z(undefined, { cause: r.signal.reason });
        throw this.once("error", () => {
        }), await xf(this.destroy(s)), s;
      }
      let o = new fi, l = o.signal;
      if (r != null && r.signal) {
        let s = { once: true, [mf]: this };
        r.signal.addEventListener("abort", () => o.abort(), s);
      }
      let u = false;
      try {
        for await (let s of this) {
          var f;
          if (u = true, r != null && (f = r.signal) !== null && f !== undefined && f.aborted)
            throw new z;
          i ? t = await e(t, s, { signal: l }) : (t = s, i = true);
        }
        if (!u && !i)
          throw new fr;
      } finally {
        o.abort();
      }
      return t;
    }
    async function Of(e) {
      e != null && De(e, "options"), e?.signal != null && Oe(e.signal, "options.signal");
      let t = [];
      for await (let n of this) {
        var r;
        if (e != null && (r = e.signal) !== null && r !== undefined && r.aborted)
          throw new z(undefined, { cause: e.signal.reason });
        Rf(t, n);
      }
      return t;
    }
    function Df(e, t) {
      let r = bt.call(this, e, t);
      return async function* () {
        for await (let i of r)
          yield* i;
      }.call(this);
    }
    function ci(e) {
      if (e = If(e), Tf(e))
        return 0;
      if (e < 0)
        throw new Ef("number", ">= 0", e);
      return e;
    }
    function Pf(e, t = undefined) {
      return t != null && De(t, "options"), t?.signal != null && Oe(t.signal, "options.signal"), e = ci(e), async function* () {
        var n;
        if (t != null && (n = t.signal) !== null && n !== undefined && n.aborted)
          throw new z;
        for await (let o of this) {
          var i;
          if (t != null && (i = t.signal) !== null && i !== undefined && i.aborted)
            throw new z;
          e-- <= 0 && (yield o);
        }
      }.call(this);
    }
    function kf(e, t = undefined) {
      return t != null && De(t, "options"), t?.signal != null && Oe(t.signal, "options.signal"), e = ci(e), async function* () {
        var n;
        if (t != null && (n = t.signal) !== null && n !== undefined && n.aborted)
          throw new z;
        for await (let o of this) {
          var i;
          if (t != null && (i = t.signal) !== null && i !== undefined && i.aborted)
            throw new z;
          if (e-- > 0)
            yield o;
          else
            return;
        }
      }.call(this);
    }
    ar.exports.streamReturningOperators = { asIndexedPairs: Lf, drop: Pf, filter: sr, flatMap: Df, map: bt, take: kf };
    ar.exports.promiseReturningOperators = { every: Nf, forEach: Mf, reduce: Cf, toArray: Of, some: ai, find: Ff };
  });
  Se = E((ed, Ei) => {
    var de = (se(), pe(k)), { aggregateTwoErrors: Uf, codes: { ERR_MULTIPLE_CALLBACK: vf }, AbortError: qf } = C(), { Symbol: yi } = I(), { kDestroyed: Wf, isDestroyed: $f, isFinished: jf, isServerRequest: Gf } = ae(), wi = yi("kDestroy"), cr = yi("kConstruct");
    function bi(e, t, r) {
      e && (e.stack, t && !t.errored && (t.errored = e), r && !r.errored && (r.errored = e));
    }
    function Hf(e, t) {
      let r = this._readableState, n = this._writableState, i = n || r;
      return n && n.destroyed || r && r.destroyed ? (typeof t == "function" && t(), this) : (bi(e, n, r), n && (n.destroyed = true), r && (r.destroyed = true), i.constructed ? hi(this, e, t) : this.once(wi, function(o) {
        hi(this, Uf(o, e), t);
      }), this);
    }
    function hi(e, t, r) {
      let n = false;
      function i(o) {
        if (n)
          return;
        n = true;
        let { _readableState: l, _writableState: u } = e;
        bi(o, u, l), u && (u.closed = true), l && (l.closed = true), typeof r == "function" && r(o), o ? de.nextTick(Vf, e, o) : de.nextTick(gi, e);
      }
      try {
        e._destroy(t || null, i);
      } catch (o) {
        i(o);
      }
    }
    function Vf(e, t) {
      dr(e, t), gi(e);
    }
    function gi(e) {
      let { _readableState: t, _writableState: r } = e;
      r && (r.closeEmitted = true), t && (t.closeEmitted = true), (r && r.emitClose || t && t.emitClose) && e.emit("close");
    }
    function dr(e, t) {
      let { _readableState: r, _writableState: n } = e;
      n && n.errorEmitted || r && r.errorEmitted || (n && (n.errorEmitted = true), r && (r.errorEmitted = true), e.emit("error", t));
    }
    function Yf() {
      let e = this._readableState, t = this._writableState;
      e && (e.constructed = true, e.closed = false, e.closeEmitted = false, e.destroyed = false, e.errored = null, e.errorEmitted = false, e.reading = false, e.ended = e.readable === false, e.endEmitted = e.readable === false), t && (t.constructed = true, t.destroyed = false, t.closed = false, t.closeEmitted = false, t.errored = null, t.errorEmitted = false, t.finalCalled = false, t.prefinished = false, t.ended = t.writable === false, t.ending = t.writable === false, t.finished = t.writable === false);
    }
    function hr(e, t, r) {
      let { _readableState: n, _writableState: i } = e;
      if (i && i.destroyed || n && n.destroyed)
        return this;
      n && n.autoDestroy || i && i.autoDestroy ? e.destroy(t) : t && (t.stack, i && !i.errored && (i.errored = t), n && !n.errored && (n.errored = t), r ? de.nextTick(dr, e, t) : dr(e, t));
    }
    function Kf(e, t) {
      if (typeof e._construct != "function")
        return;
      let { _readableState: r, _writableState: n } = e;
      r && (r.constructed = false), n && (n.constructed = false), e.once(cr, t), !(e.listenerCount(cr) > 1) && de.nextTick(zf, e);
    }
    function zf(e) {
      let t = false;
      function r(n) {
        if (t) {
          hr(e, n ?? new vf);
          return;
        }
        t = true;
        let { _readableState: i, _writableState: o } = e, l = o || i;
        i && (i.constructed = true), o && (o.constructed = true), l.destroyed ? e.emit(wi, n) : n ? hr(e, n, true) : de.nextTick(Xf, e);
      }
      try {
        e._construct(r);
      } catch (n) {
        r(n);
      }
    }
    function Xf(e) {
      e.emit(cr);
    }
    function pi(e) {
      return e && e.setHeader && typeof e.abort == "function";
    }
    function _i(e) {
      e.emit("close");
    }
    function Jf(e, t) {
      e.emit("error", t), de.nextTick(_i, e);
    }
    function Qf(e, t) {
      !e || $f(e) || (!t && !jf(e) && (t = new qf), Gf(e) ? (e.socket = null, e.destroy(t)) : pi(e) ? e.abort() : pi(e.req) ? e.req.abort() : typeof e.destroy == "function" ? e.destroy(t) : typeof e.close == "function" ? e.close() : t ? de.nextTick(Jf, e, t) : de.nextTick(_i, e), e.destroyed || (e[Wf] = true));
    }
    Ei.exports = { construct: Kf, destroyer: Qf, destroy: Hf, undestroy: Yf, errorOrDestroy: hr };
  });
  Et = E((td, pr) => {
    var Pe = typeof Reflect == "object" ? Reflect : null, Si = Pe && typeof Pe.apply == "function" ? Pe.apply : function(t, r, n) {
      return Function.prototype.apply.call(t, r, n);
    }, gt;
    Pe && typeof Pe.ownKeys == "function" ? gt = Pe.ownKeys : Object.getOwnPropertySymbols ? gt = function(t) {
      return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t));
    } : gt = function(t) {
      return Object.getOwnPropertyNames(t);
    };
    function Zf(e) {
      console && console.warn && console.warn(e);
    }
    var xi = Number.isNaN || function(t) {
      return t !== t;
    };
    function S() {
      S.init.call(this);
    }
    pr.exports = S;
    pr.exports.once = ns;
    S.EventEmitter = S;
    S.prototype._events = undefined;
    S.prototype._eventsCount = 0;
    S.prototype._maxListeners = undefined;
    var mi = 10;
    function _t(e) {
      if (typeof e != "function")
        throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof e);
    }
    Object.defineProperty(S, "defaultMaxListeners", { enumerable: true, get: function() {
      return mi;
    }, set: function(e) {
      if (typeof e != "number" || e < 0 || xi(e))
        throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + e + ".");
      mi = e;
    } });
    S.init = function() {
      (this._events === undefined || this._events === Object.getPrototypeOf(this)._events) && (this._events = Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || undefined;
    };
    S.prototype.setMaxListeners = function(t) {
      if (typeof t != "number" || t < 0 || xi(t))
        throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + t + ".");
      return this._maxListeners = t, this;
    };
    function Ri(e) {
      return e._maxListeners === undefined ? S.defaultMaxListeners : e._maxListeners;
    }
    S.prototype.getMaxListeners = function() {
      return Ri(this);
    };
    S.prototype.emit = function(t) {
      for (var r = [], n = 1;n < arguments.length; n++)
        r.push(arguments[n]);
      var i = t === "error", o = this._events;
      if (o !== undefined)
        i = i && o.error === undefined;
      else if (!i)
        return false;
      if (i) {
        var l;
        if (r.length > 0 && (l = r[0]), l instanceof Error)
          throw l;
        var u = new Error("Unhandled error." + (l ? " (" + l.message + ")" : ""));
        throw u.context = l, u;
      }
      var f = o[t];
      if (f === undefined)
        return false;
      if (typeof f == "function")
        Si(f, this, r);
      else
        for (var s = f.length, d = Li(f, s), n = 0;n < s; ++n)
          Si(d[n], this, r);
      return true;
    };
    function Ai(e, t, r, n) {
      var i, o, l;
      if (_t(r), o = e._events, o === undefined ? (o = e._events = Object.create(null), e._eventsCount = 0) : (o.newListener !== undefined && (e.emit("newListener", t, r.listener ? r.listener : r), o = e._events), l = o[t]), l === undefined)
        l = o[t] = r, ++e._eventsCount;
      else if (typeof l == "function" ? l = o[t] = n ? [r, l] : [l, r] : n ? l.unshift(r) : l.push(r), i = Ri(e), i > 0 && l.length > i && !l.warned) {
        l.warned = true;
        var u = new Error("Possible EventEmitter memory leak detected. " + l.length + " " + String(t) + " listeners added. Use emitter.setMaxListeners() to increase limit");
        u.name = "MaxListenersExceededWarning", u.emitter = e, u.type = t, u.count = l.length, Zf(u);
      }
      return e;
    }
    S.prototype.addListener = function(t, r) {
      return Ai(this, t, r, false);
    };
    S.prototype.on = S.prototype.addListener;
    S.prototype.prependListener = function(t, r) {
      return Ai(this, t, r, true);
    };
    function es() {
      if (!this.fired)
        return this.target.removeListener(this.type, this.wrapFn), this.fired = true, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
    }
    function Ii(e, t, r) {
      var n = { fired: false, wrapFn: undefined, target: e, type: t, listener: r }, i = es.bind(n);
      return i.listener = r, n.wrapFn = i, i;
    }
    S.prototype.once = function(t, r) {
      return _t(r), this.on(t, Ii(this, t, r)), this;
    };
    S.prototype.prependOnceListener = function(t, r) {
      return _t(r), this.prependListener(t, Ii(this, t, r)), this;
    };
    S.prototype.removeListener = function(t, r) {
      var n, i, o, l, u;
      if (_t(r), i = this._events, i === undefined)
        return this;
      if (n = i[t], n === undefined)
        return this;
      if (n === r || n.listener === r)
        --this._eventsCount === 0 ? this._events = Object.create(null) : (delete i[t], i.removeListener && this.emit("removeListener", t, n.listener || r));
      else if (typeof n != "function") {
        for (o = -1, l = n.length - 1;l >= 0; l--)
          if (n[l] === r || n[l].listener === r) {
            u = n[l].listener, o = l;
            break;
          }
        if (o < 0)
          return this;
        o === 0 ? n.shift() : ts(n, o), n.length === 1 && (i[t] = n[0]), i.removeListener !== undefined && this.emit("removeListener", t, u || r);
      }
      return this;
    };
    S.prototype.off = S.prototype.removeListener;
    S.prototype.removeAllListeners = function(t) {
      var r, n, i;
      if (n = this._events, n === undefined)
        return this;
      if (n.removeListener === undefined)
        return arguments.length === 0 ? (this._events = Object.create(null), this._eventsCount = 0) : n[t] !== undefined && (--this._eventsCount === 0 ? this._events = Object.create(null) : delete n[t]), this;
      if (arguments.length === 0) {
        var o = Object.keys(n), l;
        for (i = 0;i < o.length; ++i)
          l = o[i], l !== "removeListener" && this.removeAllListeners(l);
        return this.removeAllListeners("removeListener"), this._events = Object.create(null), this._eventsCount = 0, this;
      }
      if (r = n[t], typeof r == "function")
        this.removeListener(t, r);
      else if (r !== undefined)
        for (i = r.length - 1;i >= 0; i--)
          this.removeListener(t, r[i]);
      return this;
    };
    function Ti(e, t, r) {
      var n = e._events;
      if (n === undefined)
        return [];
      var i = n[t];
      return i === undefined ? [] : typeof i == "function" ? r ? [i.listener || i] : [i] : r ? rs(i) : Li(i, i.length);
    }
    S.prototype.listeners = function(t) {
      return Ti(this, t, true);
    };
    S.prototype.rawListeners = function(t) {
      return Ti(this, t, false);
    };
    S.listenerCount = function(e, t) {
      return typeof e.listenerCount == "function" ? e.listenerCount(t) : Bi.call(e, t);
    };
    S.prototype.listenerCount = Bi;
    function Bi(e) {
      var t = this._events;
      if (t !== undefined) {
        var r = t[e];
        if (typeof r == "function")
          return 1;
        if (r !== undefined)
          return r.length;
      }
      return 0;
    }
    S.prototype.eventNames = function() {
      return this._eventsCount > 0 ? gt(this._events) : [];
    };
    function Li(e, t) {
      for (var r = new Array(t), n = 0;n < t; ++n)
        r[n] = e[n];
      return r;
    }
    function ts(e, t) {
      for (;t + 1 < e.length; t++)
        e[t] = e[t + 1];
      e.pop();
    }
    function rs(e) {
      for (var t = new Array(e.length), r = 0;r < t.length; ++r)
        t[r] = e[r].listener || e[r];
      return t;
    }
    function ns(e, t) {
      return new Promise(function(r, n) {
        function i(l) {
          e.removeListener(t, o), n(l);
        }
        function o() {
          typeof e.removeListener == "function" && e.removeListener("error", i), r([].slice.call(arguments));
        }
        Ni(e, t, o, { once: true }), t !== "error" && is(e, i, { once: true });
      });
    }
    function is(e, t, r) {
      typeof e.on == "function" && Ni(e, "error", t, r);
    }
    function Ni(e, t, r, n) {
      if (typeof e.on == "function")
        n.once ? e.once(t, r) : e.on(t, r);
      else if (typeof e.addEventListener == "function")
        e.addEventListener(t, function i(o) {
          n.once && e.removeEventListener(t, i), r(o);
        });
      else
        throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof e);
    }
  });
  xt = E((rd, Mi) => {
    var { ArrayIsArray: os, ObjectSetPrototypeOf: Fi } = I(), { EventEmitter: St } = Et();
    function mt(e) {
      St.call(this, e);
    }
    Fi(mt.prototype, St.prototype);
    Fi(mt, St);
    mt.prototype.pipe = function(e, t) {
      let r = this;
      function n(d) {
        e.writable && e.write(d) === false && r.pause && r.pause();
      }
      r.on("data", n);
      function i() {
        r.readable && r.resume && r.resume();
      }
      e.on("drain", i), !e._isStdio && (!t || t.end !== false) && (r.on("end", l), r.on("close", u));
      let o = false;
      function l() {
        o || (o = true, e.end());
      }
      function u() {
        o || (o = true, typeof e.destroy == "function" && e.destroy());
      }
      function f(d) {
        s(), St.listenerCount(this, "error") === 0 && this.emit("error", d);
      }
      yr(r, "error", f), yr(e, "error", f);
      function s() {
        r.removeListener("data", n), e.removeListener("drain", i), r.removeListener("end", l), r.removeListener("close", u), r.removeListener("error", f), e.removeListener("error", f), r.removeListener("end", s), r.removeListener("close", s), e.removeListener("close", s);
      }
      return r.on("end", s), r.on("close", s), e.on("close", s), e.emit("pipe", r), e;
    };
    function yr(e, t, r) {
      if (typeof e.prependListener == "function")
        return e.prependListener(t, r);
      !e._events || !e._events[t] ? e.on(t, r) : os(e._events[t]) ? e._events[t].unshift(r) : e._events[t] = [r, e._events[t]];
    }
    Mi.exports = { Stream: mt, prependListener: yr };
  });
  At = E((nd, Rt) => {
    var { AbortError: ls, codes: us } = C(), fs = ce(), { ERR_INVALID_ARG_TYPE: Ci } = us, ss = (e, t) => {
      if (typeof e != "object" || !("aborted" in e))
        throw new Ci(t, "AbortSignal", e);
    };
    function as(e) {
      return !!(e && typeof e.pipe == "function");
    }
    Rt.exports.addAbortSignal = function(t, r) {
      if (ss(t, "signal"), !as(r))
        throw new Ci("stream", "stream.Stream", r);
      return Rt.exports.addAbortSignalNoValidate(t, r);
    };
    Rt.exports.addAbortSignalNoValidate = function(e, t) {
      if (typeof e != "object" || !("aborted" in e))
        return t;
      let r = () => {
        t.destroy(new ls(undefined, { cause: e.reason }));
      };
      return e.aborted ? r() : (e.addEventListener("abort", r), fs(t, () => e.removeEventListener("abort", r))), t;
    };
  });
  Pi = E((od, Di) => {
    var { StringPrototypeSlice: Oi, SymbolIterator: cs, TypedArrayPrototypeSet: It, Uint8Array: ds } = I(), { Buffer: wr } = te(), { inspect: hs } = V();
    Di.exports = class {
      constructor() {
        this.head = null, this.tail = null, this.length = 0;
      }
      push(t) {
        let r = { data: t, next: null };
        this.length > 0 ? this.tail.next = r : this.head = r, this.tail = r, ++this.length;
      }
      unshift(t) {
        let r = { data: t, next: this.head };
        this.length === 0 && (this.tail = r), this.head = r, ++this.length;
      }
      shift() {
        if (this.length === 0)
          return;
        let t = this.head.data;
        return this.length === 1 ? this.head = this.tail = null : this.head = this.head.next, --this.length, t;
      }
      clear() {
        this.head = this.tail = null, this.length = 0;
      }
      join(t) {
        if (this.length === 0)
          return "";
        let r = this.head, n = "" + r.data;
        for (;(r = r.next) !== null; )
          n += t + r.data;
        return n;
      }
      concat(t) {
        if (this.length === 0)
          return wr.alloc(0);
        let r = wr.allocUnsafe(t >>> 0), n = this.head, i = 0;
        for (;n; )
          It(r, n.data, i), i += n.data.length, n = n.next;
        return r;
      }
      consume(t, r) {
        let n = this.head.data;
        if (t < n.length) {
          let i = n.slice(0, t);
          return this.head.data = n.slice(t), i;
        }
        return t === n.length ? this.shift() : r ? this._getString(t) : this._getBuffer(t);
      }
      first() {
        return this.head.data;
      }
      *[cs]() {
        for (let t = this.head;t; t = t.next)
          yield t.data;
      }
      _getString(t) {
        let r = "", n = this.head, i = 0;
        do {
          let o = n.data;
          if (t > o.length)
            r += o, t -= o.length;
          else {
            t === o.length ? (r += o, ++i, n.next ? this.head = n.next : this.head = this.tail = null) : (r += Oi(o, 0, t), this.head = n, n.data = Oi(o, t));
            break;
          }
          ++i;
        } while ((n = n.next) !== null);
        return this.length -= i, r;
      }
      _getBuffer(t) {
        let r = wr.allocUnsafe(t), n = t, i = this.head, o = 0;
        do {
          let l = i.data;
          if (t > l.length)
            It(r, l, n - t), t -= l.length;
          else {
            t === l.length ? (It(r, l, n - t), ++o, i.next ? this.head = i.next : this.head = this.tail = null) : (It(r, new ds(l.buffer, l.byteOffset, t), n - t), this.head = i, i.data = l.slice(t));
            break;
          }
          ++o;
        } while ((i = i.next) !== null);
        return this.length -= o, r;
      }
      [Symbol.for("nodejs.util.inspect.custom")](t, r) {
        return hs(this, { ...r, depth: 0, customInspect: false });
      }
    };
  });
  Tt = E((ld, Ui) => {
    var { MathFloor: ps, NumberIsInteger: ys } = I(), { ERR_INVALID_ARG_VALUE: ws } = C().codes;
    function bs(e, t, r) {
      return e.highWaterMark != null ? e.highWaterMark : t ? e[r] : null;
    }
    function ki(e) {
      return e ? 16 : 16 * 1024;
    }
    function gs(e, t, r, n) {
      let i = bs(t, n, r);
      if (i != null) {
        if (!ys(i) || i < 0) {
          let o = n ? `options.${r}` : "options.highWaterMark";
          throw new ws(o, i);
        }
        return ps(i);
      }
      return ki(e.objectMode);
    }
    Ui.exports = { getHighWaterMark: gs, getDefaultHighWaterMark: ki };
  });
  Wi = E((br, qi) => {
    var Bt = te(), X = Bt.Buffer;
    function vi(e, t) {
      for (var r in e)
        t[r] = e[r];
    }
    X.from && X.alloc && X.allocUnsafe && X.allocUnsafeSlow ? qi.exports = Bt : (vi(Bt, br), br.Buffer = me);
    function me(e, t, r) {
      return X(e, t, r);
    }
    me.prototype = Object.create(X.prototype);
    vi(X, me);
    me.from = function(e, t, r) {
      if (typeof e == "number")
        throw new TypeError("Argument must not be a number");
      return X(e, t, r);
    };
    me.alloc = function(e, t, r) {
      if (typeof e != "number")
        throw new TypeError("Argument must be a number");
      var n = X(e);
      return t !== undefined ? typeof r == "string" ? n.fill(t, r) : n.fill(t) : n.fill(0), n;
    };
    me.allocUnsafe = function(e) {
      if (typeof e != "number")
        throw new TypeError("Argument must be a number");
      return X(e);
    };
    me.allocUnsafeSlow = function(e) {
      if (typeof e != "number")
        throw new TypeError("Argument must be a number");
      return Bt.SlowBuffer(e);
    };
  });
  Gi = E((ji) => {
    var _r = Wi().Buffer, $i = _r.isEncoding || function(e) {
      switch (e = "" + e, e && e.toLowerCase()) {
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
        case "raw":
          return true;
        default:
          return false;
      }
    };
    function _s(e) {
      if (!e)
        return "utf8";
      for (var t;; )
        switch (e) {
          case "utf8":
          case "utf-8":
            return "utf8";
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return "utf16le";
          case "latin1":
          case "binary":
            return "latin1";
          case "base64":
          case "ascii":
          case "hex":
            return e;
          default:
            if (t)
              return;
            e = ("" + e).toLowerCase(), t = true;
        }
    }
    function Es(e) {
      var t = _s(e);
      if (typeof t != "string" && (_r.isEncoding === $i || !$i(e)))
        throw new Error("Unknown encoding: " + e);
      return t || e;
    }
    ji.StringDecoder = Ye;
    function Ye(e) {
      this.encoding = Es(e);
      var t;
      switch (this.encoding) {
        case "utf16le":
          this.text = Is, this.end = Ts, t = 4;
          break;
        case "utf8":
          this.fillLast = xs, t = 4;
          break;
        case "base64":
          this.text = Bs, this.end = Ls, t = 3;
          break;
        default:
          this.write = Ns, this.end = Fs;
          return;
      }
      this.lastNeed = 0, this.lastTotal = 0, this.lastChar = _r.allocUnsafe(t);
    }
    Ye.prototype.write = function(e) {
      if (e.length === 0)
        return "";
      var t, r;
      if (this.lastNeed) {
        if (t = this.fillLast(e), t === undefined)
          return "";
        r = this.lastNeed, this.lastNeed = 0;
      } else
        r = 0;
      return r < e.length ? t ? t + this.text(e, r) : this.text(e, r) : t || "";
    };
    Ye.prototype.end = As;
    Ye.prototype.text = Rs;
    Ye.prototype.fillLast = function(e) {
      if (this.lastNeed <= e.length)
        return e.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal);
      e.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, e.length), this.lastNeed -= e.length;
    };
    function gr(e) {
      return e <= 127 ? 0 : e >> 5 === 6 ? 2 : e >> 4 === 14 ? 3 : e >> 3 === 30 ? 4 : e >> 6 === 2 ? -1 : -2;
    }
    function Ss(e, t, r) {
      var n = t.length - 1;
      if (n < r)
        return 0;
      var i = gr(t[n]);
      return i >= 0 ? (i > 0 && (e.lastNeed = i - 1), i) : --n < r || i === -2 ? 0 : (i = gr(t[n]), i >= 0 ? (i > 0 && (e.lastNeed = i - 2), i) : --n < r || i === -2 ? 0 : (i = gr(t[n]), i >= 0 ? (i > 0 && (i === 2 ? i = 0 : e.lastNeed = i - 3), i) : 0));
    }
    function ms(e, t, r) {
      if ((t[0] & 192) !== 128)
        return e.lastNeed = 0, "\uFFFD";
      if (e.lastNeed > 1 && t.length > 1) {
        if ((t[1] & 192) !== 128)
          return e.lastNeed = 1, "\uFFFD";
        if (e.lastNeed > 2 && t.length > 2 && (t[2] & 192) !== 128)
          return e.lastNeed = 2, "\uFFFD";
      }
    }
    function xs(e) {
      var t = this.lastTotal - this.lastNeed, r = ms(this, e, t);
      if (r !== undefined)
        return r;
      if (this.lastNeed <= e.length)
        return e.copy(this.lastChar, t, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal);
      e.copy(this.lastChar, t, 0, e.length), this.lastNeed -= e.length;
    }
    function Rs(e, t) {
      var r = Ss(this, e, t);
      if (!this.lastNeed)
        return e.toString("utf8", t);
      this.lastTotal = r;
      var n = e.length - (r - this.lastNeed);
      return e.copy(this.lastChar, 0, n), e.toString("utf8", t, n);
    }
    function As(e) {
      var t = e && e.length ? this.write(e) : "";
      return this.lastNeed ? t + "\uFFFD" : t;
    }
    function Is(e, t) {
      if ((e.length - t) % 2 === 0) {
        var r = e.toString("utf16le", t);
        if (r) {
          var n = r.charCodeAt(r.length - 1);
          if (n >= 55296 && n <= 56319)
            return this.lastNeed = 2, this.lastTotal = 4, this.lastChar[0] = e[e.length - 2], this.lastChar[1] = e[e.length - 1], r.slice(0, -1);
        }
        return r;
      }
      return this.lastNeed = 1, this.lastTotal = 2, this.lastChar[0] = e[e.length - 1], e.toString("utf16le", t, e.length - 1);
    }
    function Ts(e) {
      var t = e && e.length ? this.write(e) : "";
      if (this.lastNeed) {
        var r = this.lastTotal - this.lastNeed;
        return t + this.lastChar.toString("utf16le", 0, r);
      }
      return t;
    }
    function Bs(e, t) {
      var r = (e.length - t) % 3;
      return r === 0 ? e.toString("base64", t) : (this.lastNeed = 3 - r, this.lastTotal = 3, r === 1 ? this.lastChar[0] = e[e.length - 1] : (this.lastChar[0] = e[e.length - 2], this.lastChar[1] = e[e.length - 1]), e.toString("base64", t, e.length - r));
    }
    function Ls(e) {
      var t = e && e.length ? this.write(e) : "";
      return this.lastNeed ? t + this.lastChar.toString("base64", 0, 3 - this.lastNeed) : t;
    }
    function Ns(e) {
      return e.toString(this.encoding);
    }
    function Fs(e) {
      return e && e.length ? this.write(e) : "";
    }
  });
  Er = E((fd, Ki) => {
    var Hi = (se(), pe(k)), { PromisePrototypeThen: Ms, SymbolAsyncIterator: Vi, SymbolIterator: Yi } = I(), { Buffer: Cs } = te(), { ERR_INVALID_ARG_TYPE: Os, ERR_STREAM_NULL_VALUES: Ds } = C().codes;
    function Ps(e, t, r) {
      let n;
      if (typeof t == "string" || t instanceof Cs)
        return new e({ objectMode: true, ...r, read() {
          this.push(t), this.push(null);
        } });
      let i;
      if (t && t[Vi])
        i = true, n = t[Vi]();
      else if (t && t[Yi])
        i = false, n = t[Yi]();
      else
        throw new Os("iterable", ["Iterable"], t);
      let o = new e({ objectMode: true, highWaterMark: 1, ...r }), l = false;
      o._read = function() {
        l || (l = true, f());
      }, o._destroy = function(s, d) {
        Ms(u(s), () => Hi.nextTick(d, s), (c) => Hi.nextTick(d, c || s));
      };
      async function u(s) {
        let d = s != null, c = typeof n.throw == "function";
        if (d && c) {
          let { value: y, done: h } = await n.throw(s);
          if (await y, h)
            return;
        }
        if (typeof n.return == "function") {
          let { value: y } = await n.return();
          await y;
        }
      }
      async function f() {
        for (;; ) {
          try {
            let { value: s, done: d } = i ? await n.next() : n.next();
            if (d)
              o.push(null);
            else {
              let c = s && typeof s.then == "function" ? await s : s;
              if (c === null)
                throw l = false, new Ds;
              if (o.push(c))
                continue;
              l = false;
            }
          } catch (s) {
            o.destroy(s);
          }
          break;
        }
      }
      return o;
    }
    Ki.exports = Ps;
  });
  Ke = E((sd, uo) => {
    var $ = (se(), pe(k)), { ArrayPrototypeIndexOf: ks, NumberIsInteger: Us, NumberIsNaN: vs, NumberParseInt: qs, ObjectDefineProperties: Ji, ObjectKeys: Ws, ObjectSetPrototypeOf: Qi, Promise: $s, SafeSet: js, SymbolAsyncIterator: Gs, Symbol: Hs } = I();
    uo.exports = g;
    g.ReadableState = Ir;
    var { EventEmitter: Vs } = Et(), { Stream: he, prependListener: Ys } = xt(), { Buffer: Sr } = te(), { addAbortSignal: Ks } = At(), zs = ce(), _ = V().debuglog("stream", (e) => {
      _ = e;
    }), Xs = Pi(), Ue = Se(), { getHighWaterMark: Js, getDefaultHighWaterMark: Qs } = Tt(), { aggregateTwoErrors: zi, codes: { ERR_INVALID_ARG_TYPE: Zs, ERR_METHOD_NOT_IMPLEMENTED: ea, ERR_OUT_OF_RANGE: ta, ERR_STREAM_PUSH_AFTER_EOF: ra, ERR_STREAM_UNSHIFT_AFTER_END_EVENT: na } } = C(), { validateObject: ia } = He(), xe = Hs("kPaused"), { StringDecoder: Zi } = Gi(), oa = Er();
    Qi(g.prototype, he.prototype);
    Qi(g, he);
    var mr = () => {
    }, { errorOrDestroy: ke } = Ue;
    function Ir(e, t, r) {
      typeof r != "boolean" && (r = t instanceof J()), this.objectMode = !!(e && e.objectMode), r && (this.objectMode = this.objectMode || !!(e && e.readableObjectMode)), this.highWaterMark = e ? Js(this, e, "readableHighWaterMark", r) : Qs(false), this.buffer = new Xs, this.length = 0, this.pipes = [], this.flowing = null, this.ended = false, this.endEmitted = false, this.reading = false, this.constructed = true, this.sync = true, this.needReadable = false, this.emittedReadable = false, this.readableListening = false, this.resumeScheduled = false, this[xe] = null, this.errorEmitted = false, this.emitClose = !e || e.emitClose !== false, this.autoDestroy = !e || e.autoDestroy !== false, this.destroyed = false, this.errored = null, this.closed = false, this.closeEmitted = false, this.defaultEncoding = e && e.defaultEncoding || "utf8", this.awaitDrainWriters = null, this.multiAwaitDrain = false, this.readingMore = false, this.dataEmitted = false, this.decoder = null, this.encoding = null, e && e.encoding && (this.decoder = new Zi(e.encoding), this.encoding = e.encoding);
    }
    function g(e) {
      if (!(this instanceof g))
        return new g(e);
      let t = this instanceof J();
      this._readableState = new Ir(e, this, t), e && (typeof e.read == "function" && (this._read = e.read), typeof e.destroy == "function" && (this._destroy = e.destroy), typeof e.construct == "function" && (this._construct = e.construct), e.signal && !t && Ks(e.signal, this)), he.call(this, e), Ue.construct(this, () => {
        this._readableState.needReadable && Lt(this, this._readableState);
      });
    }
    g.prototype.destroy = Ue.destroy;
    g.prototype._undestroy = Ue.undestroy;
    g.prototype._destroy = function(e, t) {
      t(e);
    };
    g.prototype[Vs.captureRejectionSymbol] = function(e) {
      this.destroy(e);
    };
    g.prototype.push = function(e, t) {
      return eo(this, e, t, false);
    };
    g.prototype.unshift = function(e, t) {
      return eo(this, e, t, true);
    };
    function eo(e, t, r, n) {
      _("readableAddChunk", t);
      let i = e._readableState, o;
      if (i.objectMode || (typeof t == "string" ? (r = r || i.defaultEncoding, i.encoding !== r && (n && i.encoding ? t = Sr.from(t, r).toString(i.encoding) : (t = Sr.from(t, r), r = ""))) : t instanceof Sr ? r = "" : he._isUint8Array(t) ? (t = he._uint8ArrayToBuffer(t), r = "") : t != null && (o = new Zs("chunk", ["string", "Buffer", "Uint8Array"], t))), o)
        ke(e, o);
      else if (t === null)
        i.reading = false, fa(e, i);
      else if (i.objectMode || t && t.length > 0)
        if (n)
          if (i.endEmitted)
            ke(e, new na);
          else {
            if (i.destroyed || i.errored)
              return false;
            xr(e, i, t, true);
          }
        else if (i.ended)
          ke(e, new ra);
        else {
          if (i.destroyed || i.errored)
            return false;
          i.reading = false, i.decoder && !r ? (t = i.decoder.write(t), i.objectMode || t.length !== 0 ? xr(e, i, t, false) : Lt(e, i)) : xr(e, i, t, false);
        }
      else
        n || (i.reading = false, Lt(e, i));
      return !i.ended && (i.length < i.highWaterMark || i.length === 0);
    }
    function xr(e, t, r, n) {
      t.flowing && t.length === 0 && !t.sync && e.listenerCount("data") > 0 ? (t.multiAwaitDrain ? t.awaitDrainWriters.clear() : t.awaitDrainWriters = null, t.dataEmitted = true, e.emit("data", r)) : (t.length += t.objectMode ? 1 : r.length, n ? t.buffer.unshift(r) : t.buffer.push(r), t.needReadable && Nt(e)), Lt(e, t);
    }
    g.prototype.isPaused = function() {
      let e = this._readableState;
      return e[xe] === true || e.flowing === false;
    };
    g.prototype.setEncoding = function(e) {
      let t = new Zi(e);
      this._readableState.decoder = t, this._readableState.encoding = this._readableState.decoder.encoding;
      let r = this._readableState.buffer, n = "";
      for (let i of r)
        n += t.write(i);
      return r.clear(), n !== "" && r.push(n), this._readableState.length = n.length, this;
    };
    var la = 1073741824;
    function ua(e) {
      if (e > la)
        throw new ta("size", "<= 1GiB", e);
      return e--, e |= e >>> 1, e |= e >>> 2, e |= e >>> 4, e |= e >>> 8, e |= e >>> 16, e++, e;
    }
    function Xi(e, t) {
      return e <= 0 || t.length === 0 && t.ended ? 0 : t.objectMode ? 1 : vs(e) ? t.flowing && t.length ? t.buffer.first().length : t.length : e <= t.length ? e : t.ended ? t.length : 0;
    }
    g.prototype.read = function(e) {
      _("read", e), e === undefined ? e = NaN : Us(e) || (e = qs(e, 10));
      let t = this._readableState, r = e;
      if (e > t.highWaterMark && (t.highWaterMark = ua(e)), e !== 0 && (t.emittedReadable = false), e === 0 && t.needReadable && ((t.highWaterMark !== 0 ? t.length >= t.highWaterMark : t.length > 0) || t.ended))
        return _("read: emitReadable", t.length, t.ended), t.length === 0 && t.ended ? Rr(this) : Nt(this), null;
      if (e = Xi(e, t), e === 0 && t.ended)
        return t.length === 0 && Rr(this), null;
      let n = t.needReadable;
      if (_("need readable", n), (t.length === 0 || t.length - e < t.highWaterMark) && (n = true, _("length less than watermark", n)), t.ended || t.reading || t.destroyed || t.errored || !t.constructed)
        n = false, _("reading, ended or constructing", n);
      else if (n) {
        _("do read"), t.reading = true, t.sync = true, t.length === 0 && (t.needReadable = true);
        try {
          this._read(t.highWaterMark);
        } catch (o) {
          ke(this, o);
        }
        t.sync = false, t.reading || (e = Xi(r, t));
      }
      let i;
      return e > 0 ? i = oo(e, t) : i = null, i === null ? (t.needReadable = t.length <= t.highWaterMark, e = 0) : (t.length -= e, t.multiAwaitDrain ? t.awaitDrainWriters.clear() : t.awaitDrainWriters = null), t.length === 0 && (t.ended || (t.needReadable = true), r !== e && t.ended && Rr(this)), i !== null && !t.errorEmitted && !t.closeEmitted && (t.dataEmitted = true, this.emit("data", i)), i;
    };
    function fa(e, t) {
      if (_("onEofChunk"), !t.ended) {
        if (t.decoder) {
          let r = t.decoder.end();
          r && r.length && (t.buffer.push(r), t.length += t.objectMode ? 1 : r.length);
        }
        t.ended = true, t.sync ? Nt(e) : (t.needReadable = false, t.emittedReadable = true, to(e));
      }
    }
    function Nt(e) {
      let t = e._readableState;
      _("emitReadable", t.needReadable, t.emittedReadable), t.needReadable = false, t.emittedReadable || (_("emitReadable", t.flowing), t.emittedReadable = true, $.nextTick(to, e));
    }
    function to(e) {
      let t = e._readableState;
      _("emitReadable_", t.destroyed, t.length, t.ended), !t.destroyed && !t.errored && (t.length || t.ended) && (e.emit("readable"), t.emittedReadable = false), t.needReadable = !t.flowing && !t.ended && t.length <= t.highWaterMark, no(e);
    }
    function Lt(e, t) {
      !t.readingMore && t.constructed && (t.readingMore = true, $.nextTick(sa, e, t));
    }
    function sa(e, t) {
      for (;!t.reading && !t.ended && (t.length < t.highWaterMark || t.flowing && t.length === 0); ) {
        let r = t.length;
        if (_("maybeReadMore read 0"), e.read(0), r === t.length)
          break;
      }
      t.readingMore = false;
    }
    g.prototype._read = function(e) {
      throw new ea("_read()");
    };
    g.prototype.pipe = function(e, t) {
      let r = this, n = this._readableState;
      n.pipes.length === 1 && (n.multiAwaitDrain || (n.multiAwaitDrain = true, n.awaitDrainWriters = new js(n.awaitDrainWriters ? [n.awaitDrainWriters] : []))), n.pipes.push(e), _("pipe count=%d opts=%j", n.pipes.length, t);
      let o = (!t || t.end !== false) && e !== $.stdout && e !== $.stderr ? u : v;
      n.endEmitted ? $.nextTick(o) : r.once("end", o), e.on("unpipe", l);
      function l(w, b) {
        _("onunpipe"), w === r && b && b.hasUnpiped === false && (b.hasUnpiped = true, d());
      }
      function u() {
        _("onend"), e.end();
      }
      let f, s = false;
      function d() {
        _("cleanup"), e.removeListener("close", p), e.removeListener("finish", B), f && e.removeListener("drain", f), e.removeListener("error", h), e.removeListener("unpipe", l), r.removeListener("end", u), r.removeListener("end", v), r.removeListener("data", y), s = true, f && n.awaitDrainWriters && (!e._writableState || e._writableState.needDrain) && f();
      }
      function c() {
        s || (n.pipes.length === 1 && n.pipes[0] === e ? (_("false write response, pause", 0), n.awaitDrainWriters = e, n.multiAwaitDrain = false) : n.pipes.length > 1 && n.pipes.includes(e) && (_("false write response, pause", n.awaitDrainWriters.size), n.awaitDrainWriters.add(e)), r.pause()), f || (f = aa(r, e), e.on("drain", f));
      }
      r.on("data", y);
      function y(w) {
        _("ondata");
        let b = e.write(w);
        _("dest.write", b), b === false && c();
      }
      function h(w) {
        if (_("onerror", w), v(), e.removeListener("error", h), e.listenerCount("error") === 0) {
          let b = e._writableState || e._readableState;
          b && !b.errorEmitted ? ke(e, w) : e.emit("error", w);
        }
      }
      Ys(e, "error", h);
      function p() {
        e.removeListener("finish", B), v();
      }
      e.once("close", p);
      function B() {
        _("onfinish"), e.removeListener("close", p), v();
      }
      e.once("finish", B);
      function v() {
        _("unpipe"), r.unpipe(e);
      }
      return e.emit("pipe", r), e.writableNeedDrain === true ? n.flowing && c() : n.flowing || (_("pipe resume"), r.resume()), e;
    };
    function aa(e, t) {
      return function() {
        let n = e._readableState;
        n.awaitDrainWriters === t ? (_("pipeOnDrain", 1), n.awaitDrainWriters = null) : n.multiAwaitDrain && (_("pipeOnDrain", n.awaitDrainWriters.size), n.awaitDrainWriters.delete(t)), (!n.awaitDrainWriters || n.awaitDrainWriters.size === 0) && e.listenerCount("data") && e.resume();
      };
    }
    g.prototype.unpipe = function(e) {
      let t = this._readableState, r = { hasUnpiped: false };
      if (t.pipes.length === 0)
        return this;
      if (!e) {
        let i = t.pipes;
        t.pipes = [], this.pause();
        for (let o = 0;o < i.length; o++)
          i[o].emit("unpipe", this, { hasUnpiped: false });
        return this;
      }
      let n = ks(t.pipes, e);
      return n === -1 ? this : (t.pipes.splice(n, 1), t.pipes.length === 0 && this.pause(), e.emit("unpipe", this, r), this);
    };
    g.prototype.on = function(e, t) {
      let r = he.prototype.on.call(this, e, t), n = this._readableState;
      return e === "data" ? (n.readableListening = this.listenerCount("readable") > 0, n.flowing !== false && this.resume()) : e === "readable" && !n.endEmitted && !n.readableListening && (n.readableListening = n.needReadable = true, n.flowing = false, n.emittedReadable = false, _("on readable", n.length, n.reading), n.length ? Nt(this) : n.reading || $.nextTick(ca, this)), r;
    };
    g.prototype.addListener = g.prototype.on;
    g.prototype.removeListener = function(e, t) {
      let r = he.prototype.removeListener.call(this, e, t);
      return e === "readable" && $.nextTick(ro, this), r;
    };
    g.prototype.off = g.prototype.removeListener;
    g.prototype.removeAllListeners = function(e) {
      let t = he.prototype.removeAllListeners.apply(this, arguments);
      return (e === "readable" || e === undefined) && $.nextTick(ro, this), t;
    };
    function ro(e) {
      let t = e._readableState;
      t.readableListening = e.listenerCount("readable") > 0, t.resumeScheduled && t[xe] === false ? t.flowing = true : e.listenerCount("data") > 0 ? e.resume() : t.readableListening || (t.flowing = null);
    }
    function ca(e) {
      _("readable nexttick read 0"), e.read(0);
    }
    g.prototype.resume = function() {
      let e = this._readableState;
      return e.flowing || (_("resume"), e.flowing = !e.readableListening, da(this, e)), e[xe] = false, this;
    };
    function da(e, t) {
      t.resumeScheduled || (t.resumeScheduled = true, $.nextTick(ha, e, t));
    }
    function ha(e, t) {
      _("resume", t.reading), t.reading || e.read(0), t.resumeScheduled = false, e.emit("resume"), no(e), t.flowing && !t.reading && e.read(0);
    }
    g.prototype.pause = function() {
      return _("call pause flowing=%j", this._readableState.flowing), this._readableState.flowing !== false && (_("pause"), this._readableState.flowing = false, this.emit("pause")), this._readableState[xe] = true, this;
    };
    function no(e) {
      let t = e._readableState;
      for (_("flow", t.flowing);t.flowing && e.read() !== null; )
        ;
    }
    g.prototype.wrap = function(e) {
      let t = false;
      e.on("data", (n) => {
        !this.push(n) && e.pause && (t = true, e.pause());
      }), e.on("end", () => {
        this.push(null);
      }), e.on("error", (n) => {
        ke(this, n);
      }), e.on("close", () => {
        this.destroy();
      }), e.on("destroy", () => {
        this.destroy();
      }), this._read = () => {
        t && e.resume && (t = false, e.resume());
      };
      let r = Ws(e);
      for (let n = 1;n < r.length; n++) {
        let i = r[n];
        this[i] === undefined && typeof e[i] == "function" && (this[i] = e[i].bind(e));
      }
      return this;
    };
    g.prototype[Gs] = function() {
      return io(this);
    };
    g.prototype.iterator = function(e) {
      return e !== undefined && ia(e, "options"), io(this, e);
    };
    function io(e, t) {
      typeof e.read != "function" && (e = g.wrap(e, { objectMode: true }));
      let r = pa(e, t);
      return r.stream = e, r;
    }
    async function* pa(e, t) {
      let r = mr;
      function n(l) {
        this === e ? (r(), r = mr) : r = l;
      }
      e.on("readable", n);
      let i, o = zs(e, { writable: false }, (l) => {
        i = l ? zi(i, l) : null, r(), r = mr;
      });
      try {
        for (;; ) {
          let l = e.destroyed ? null : e.read();
          if (l !== null)
            yield l;
          else {
            if (i)
              throw i;
            if (i === null)
              return;
            await new $s(n);
          }
        }
      } catch (l) {
        throw i = zi(i, l), i;
      } finally {
        (i || t?.destroyOnReturn !== false) && (i === undefined || e._readableState.autoDestroy) ? Ue.destroyer(e, null) : (e.off("readable", n), o());
      }
    }
    Ji(g.prototype, { readable: { __proto__: null, get() {
      let e = this._readableState;
      return !!e && e.readable !== false && !e.destroyed && !e.errorEmitted && !e.endEmitted;
    }, set(e) {
      this._readableState && (this._readableState.readable = !!e);
    } }, readableDidRead: { __proto__: null, enumerable: false, get: function() {
      return this._readableState.dataEmitted;
    } }, readableAborted: { __proto__: null, enumerable: false, get: function() {
      return !!(this._readableState.readable !== false && (this._readableState.destroyed || this._readableState.errored) && !this._readableState.endEmitted);
    } }, readableHighWaterMark: { __proto__: null, enumerable: false, get: function() {
      return this._readableState.highWaterMark;
    } }, readableBuffer: { __proto__: null, enumerable: false, get: function() {
      return this._readableState && this._readableState.buffer;
    } }, readableFlowing: { __proto__: null, enumerable: false, get: function() {
      return this._readableState.flowing;
    }, set: function(e) {
      this._readableState && (this._readableState.flowing = e);
    } }, readableLength: { __proto__: null, enumerable: false, get() {
      return this._readableState.length;
    } }, readableObjectMode: { __proto__: null, enumerable: false, get() {
      return this._readableState ? this._readableState.objectMode : false;
    } }, readableEncoding: { __proto__: null, enumerable: false, get() {
      return this._readableState ? this._readableState.encoding : null;
    } }, errored: { __proto__: null, enumerable: false, get() {
      return this._readableState ? this._readableState.errored : null;
    } }, closed: { __proto__: null, get() {
      return this._readableState ? this._readableState.closed : false;
    } }, destroyed: { __proto__: null, enumerable: false, get() {
      return this._readableState ? this._readableState.destroyed : false;
    }, set(e) {
      !this._readableState || (this._readableState.destroyed = e);
    } }, readableEnded: { __proto__: null, enumerable: false, get() {
      return this._readableState ? this._readableState.endEmitted : false;
    } } });
    Ji(Ir.prototype, { pipesCount: { __proto__: null, get() {
      return this.pipes.length;
    } }, paused: { __proto__: null, get() {
      return this[xe] !== false;
    }, set(e) {
      this[xe] = !!e;
    } } });
    g._fromList = oo;
    function oo(e, t) {
      if (t.length === 0)
        return null;
      let r;
      return t.objectMode ? r = t.buffer.shift() : !e || e >= t.length ? (t.decoder ? r = t.buffer.join("") : t.buffer.length === 1 ? r = t.buffer.first() : r = t.buffer.concat(t.length), t.buffer.clear()) : r = t.buffer.consume(e, t.decoder), r;
    }
    function Rr(e) {
      let t = e._readableState;
      _("endReadable", t.endEmitted), t.endEmitted || (t.ended = true, $.nextTick(ya, t, e));
    }
    function ya(e, t) {
      if (_("endReadableNT", e.endEmitted, e.length), !e.errored && !e.closeEmitted && !e.endEmitted && e.length === 0) {
        if (e.endEmitted = true, t.emit("end"), t.writable && t.allowHalfOpen === false)
          $.nextTick(wa, t);
        else if (e.autoDestroy) {
          let r = t._writableState;
          (!r || r.autoDestroy && (r.finished || r.writable === false)) && t.destroy();
        }
      }
    }
    function wa(e) {
      e.writable && !e.writableEnded && !e.destroyed && e.end();
    }
    g.from = function(e, t) {
      return oa(g, e, t);
    };
    var Ar;
    function lo() {
      return Ar === undefined && (Ar = {}), Ar;
    }
    g.fromWeb = function(e, t) {
      return lo().newStreamReadableFromReadableStream(e, t);
    };
    g.toWeb = function(e, t) {
      return lo().newReadableStreamFromStreamReadable(e, t);
    };
    g.wrap = function(e, t) {
      var r, n;
      return new g({ objectMode: (r = (n = e.readableObjectMode) !== null && n !== undefined ? n : e.objectMode) !== null && r !== undefined ? r : true, ...t, destroy(i, o) {
        Ue.destroyer(e, i), o(i);
      } }).wrap(e);
    };
  });
  Cr = E((ad, Eo) => {
    var Re = (se(), pe(k)), { ArrayPrototypeSlice: ao, Error: ba, FunctionPrototypeSymbolHasInstance: co, ObjectDefineProperty: ho, ObjectDefineProperties: ga, ObjectSetPrototypeOf: po, StringPrototypeToLowerCase: _a, Symbol: Ea, SymbolHasInstance: Sa } = I();
    Eo.exports = m;
    m.WritableState = Je;
    var { EventEmitter: ma } = Et(), ze = xt().Stream, { Buffer: Ft } = te(), Ot = Se(), { addAbortSignal: xa } = At(), { getHighWaterMark: Ra, getDefaultHighWaterMark: Aa } = Tt(), { ERR_INVALID_ARG_TYPE: Ia, ERR_METHOD_NOT_IMPLEMENTED: Ta, ERR_MULTIPLE_CALLBACK: yo, ERR_STREAM_CANNOT_PIPE: Ba, ERR_STREAM_DESTROYED: Xe, ERR_STREAM_ALREADY_FINISHED: La, ERR_STREAM_NULL_VALUES: Na, ERR_STREAM_WRITE_AFTER_END: Fa, ERR_UNKNOWN_ENCODING: wo } = C().codes, { errorOrDestroy: ve } = Ot;
    po(m.prototype, ze.prototype);
    po(m, ze);
    function Lr() {
    }
    var qe = Ea("kOnFinished");
    function Je(e, t, r) {
      typeof r != "boolean" && (r = t instanceof J()), this.objectMode = !!(e && e.objectMode), r && (this.objectMode = this.objectMode || !!(e && e.writableObjectMode)), this.highWaterMark = e ? Ra(this, e, "writableHighWaterMark", r) : Aa(false), this.finalCalled = false, this.needDrain = false, this.ending = false, this.ended = false, this.finished = false, this.destroyed = false;
      let n = !!(e && e.decodeStrings === false);
      this.decodeStrings = !n, this.defaultEncoding = e && e.defaultEncoding || "utf8", this.length = 0, this.writing = false, this.corked = 0, this.sync = true, this.bufferProcessing = false, this.onwrite = Ca.bind(undefined, t), this.writecb = null, this.writelen = 0, this.afterWriteTickInfo = null, Ct(this), this.pendingcb = 0, this.constructed = true, this.prefinished = false, this.errorEmitted = false, this.emitClose = !e || e.emitClose !== false, this.autoDestroy = !e || e.autoDestroy !== false, this.errored = null, this.closed = false, this.closeEmitted = false, this[qe] = [];
    }
    function Ct(e) {
      e.buffered = [], e.bufferedIndex = 0, e.allBuffers = true, e.allNoop = true;
    }
    Je.prototype.getBuffer = function() {
      return ao(this.buffered, this.bufferedIndex);
    };
    ho(Je.prototype, "bufferedRequestCount", { __proto__: null, get() {
      return this.buffered.length - this.bufferedIndex;
    } });
    function m(e) {
      let t = this instanceof J();
      if (!t && !co(m, this))
        return new m(e);
      this._writableState = new Je(e, this, t), e && (typeof e.write == "function" && (this._write = e.write), typeof e.writev == "function" && (this._writev = e.writev), typeof e.destroy == "function" && (this._destroy = e.destroy), typeof e.final == "function" && (this._final = e.final), typeof e.construct == "function" && (this._construct = e.construct), e.signal && xa(e.signal, this)), ze.call(this, e), Ot.construct(this, () => {
        let r = this._writableState;
        r.writing || Fr(this, r), Mr(this, r);
      });
    }
    ho(m, Sa, { __proto__: null, value: function(e) {
      return co(this, e) ? true : this !== m ? false : e && e._writableState instanceof Je;
    } });
    m.prototype.pipe = function() {
      ve(this, new Ba);
    };
    function bo(e, t, r, n) {
      let i = e._writableState;
      if (typeof r == "function")
        n = r, r = i.defaultEncoding;
      else {
        if (!r)
          r = i.defaultEncoding;
        else if (r !== "buffer" && !Ft.isEncoding(r))
          throw new wo(r);
        typeof n != "function" && (n = Lr);
      }
      if (t === null)
        throw new Na;
      if (!i.objectMode)
        if (typeof t == "string")
          i.decodeStrings !== false && (t = Ft.from(t, r), r = "buffer");
        else if (t instanceof Ft)
          r = "buffer";
        else if (ze._isUint8Array(t))
          t = ze._uint8ArrayToBuffer(t), r = "buffer";
        else
          throw new Ia("chunk", ["string", "Buffer", "Uint8Array"], t);
      let o;
      return i.ending ? o = new Fa : i.destroyed && (o = new Xe("write")), o ? (Re.nextTick(n, o), ve(e, o, true), o) : (i.pendingcb++, Ma(e, i, t, r, n));
    }
    m.prototype.write = function(e, t, r) {
      return bo(this, e, t, r) === true;
    };
    m.prototype.cork = function() {
      this._writableState.corked++;
    };
    m.prototype.uncork = function() {
      let e = this._writableState;
      e.corked && (e.corked--, e.writing || Fr(this, e));
    };
    m.prototype.setDefaultEncoding = function(t) {
      if (typeof t == "string" && (t = _a(t)), !Ft.isEncoding(t))
        throw new wo(t);
      return this._writableState.defaultEncoding = t, this;
    };
    function Ma(e, t, r, n, i) {
      let o = t.objectMode ? 1 : r.length;
      t.length += o;
      let l = t.length < t.highWaterMark;
      return l || (t.needDrain = true), t.writing || t.corked || t.errored || !t.constructed ? (t.buffered.push({ chunk: r, encoding: n, callback: i }), t.allBuffers && n !== "buffer" && (t.allBuffers = false), t.allNoop && i !== Lr && (t.allNoop = false)) : (t.writelen = o, t.writecb = i, t.writing = true, t.sync = true, e._write(r, n, t.onwrite), t.sync = false), l && !t.errored && !t.destroyed;
    }
    function fo(e, t, r, n, i, o, l) {
      t.writelen = n, t.writecb = l, t.writing = true, t.sync = true, t.destroyed ? t.onwrite(new Xe("write")) : r ? e._writev(i, t.onwrite) : e._write(i, o, t.onwrite), t.sync = false;
    }
    function so(e, t, r, n) {
      --t.pendingcb, n(r), Nr(t), ve(e, r);
    }
    function Ca(e, t) {
      let r = e._writableState, n = r.sync, i = r.writecb;
      if (typeof i != "function") {
        ve(e, new yo);
        return;
      }
      r.writing = false, r.writecb = null, r.length -= r.writelen, r.writelen = 0, t ? (t.stack, r.errored || (r.errored = t), e._readableState && !e._readableState.errored && (e._readableState.errored = t), n ? Re.nextTick(so, e, r, t, i) : so(e, r, t, i)) : (r.buffered.length > r.bufferedIndex && Fr(e, r), n ? r.afterWriteTickInfo !== null && r.afterWriteTickInfo.cb === i ? r.afterWriteTickInfo.count++ : (r.afterWriteTickInfo = { count: 1, cb: i, stream: e, state: r }, Re.nextTick(Oa, r.afterWriteTickInfo)) : go(e, r, 1, i));
    }
    function Oa({ stream: e, state: t, count: r, cb: n }) {
      return t.afterWriteTickInfo = null, go(e, t, r, n);
    }
    function go(e, t, r, n) {
      for (!t.ending && !e.destroyed && t.length === 0 && t.needDrain && (t.needDrain = false, e.emit("drain"));r-- > 0; )
        t.pendingcb--, n();
      t.destroyed && Nr(t), Mr(e, t);
    }
    function Nr(e) {
      if (e.writing)
        return;
      for (let i = e.bufferedIndex;i < e.buffered.length; ++i) {
        var t;
        let { chunk: o, callback: l } = e.buffered[i], u = e.objectMode ? 1 : o.length;
        e.length -= u, l((t = e.errored) !== null && t !== undefined ? t : new Xe("write"));
      }
      let r = e[qe].splice(0);
      for (let i = 0;i < r.length; i++) {
        var n;
        r[i]((n = e.errored) !== null && n !== undefined ? n : new Xe("end"));
      }
      Ct(e);
    }
    function Fr(e, t) {
      if (t.corked || t.bufferProcessing || t.destroyed || !t.constructed)
        return;
      let { buffered: r, bufferedIndex: n, objectMode: i } = t, o = r.length - n;
      if (!o)
        return;
      let l = n;
      if (t.bufferProcessing = true, o > 1 && e._writev) {
        t.pendingcb -= o - 1;
        let u = t.allNoop ? Lr : (s) => {
          for (let d = l;d < r.length; ++d)
            r[d].callback(s);
        }, f = t.allNoop && l === 0 ? r : ao(r, l);
        f.allBuffers = t.allBuffers, fo(e, t, true, t.length, f, "", u), Ct(t);
      } else {
        do {
          let { chunk: u, encoding: f, callback: s } = r[l];
          r[l++] = null;
          let d = i ? 1 : u.length;
          fo(e, t, false, d, u, f, s);
        } while (l < r.length && !t.writing);
        l === r.length ? Ct(t) : l > 256 ? (r.splice(0, l), t.bufferedIndex = 0) : t.bufferedIndex = l;
      }
      t.bufferProcessing = false;
    }
    m.prototype._write = function(e, t, r) {
      if (this._writev)
        this._writev([{ chunk: e, encoding: t }], r);
      else
        throw new Ta("_write()");
    };
    m.prototype._writev = null;
    m.prototype.end = function(e, t, r) {
      let n = this._writableState;
      typeof e == "function" ? (r = e, e = null, t = null) : typeof t == "function" && (r = t, t = null);
      let i;
      if (e != null) {
        let o = bo(this, e, t);
        o instanceof ba && (i = o);
      }
      return n.corked && (n.corked = 1, this.uncork()), i || (!n.errored && !n.ending ? (n.ending = true, Mr(this, n, true), n.ended = true) : n.finished ? i = new La("end") : n.destroyed && (i = new Xe("end"))), typeof r == "function" && (i || n.finished ? Re.nextTick(r, i) : n[qe].push(r)), this;
    };
    function Mt(e) {
      return e.ending && !e.destroyed && e.constructed && e.length === 0 && !e.errored && e.buffered.length === 0 && !e.finished && !e.writing && !e.errorEmitted && !e.closeEmitted;
    }
    function Da(e, t) {
      let r = false;
      function n(i) {
        if (r) {
          ve(e, i ?? yo());
          return;
        }
        if (r = true, t.pendingcb--, i) {
          let o = t[qe].splice(0);
          for (let l = 0;l < o.length; l++)
            o[l](i);
          ve(e, i, t.sync);
        } else
          Mt(t) && (t.prefinished = true, e.emit("prefinish"), t.pendingcb++, Re.nextTick(Br, e, t));
      }
      t.sync = true, t.pendingcb++;
      try {
        e._final(n);
      } catch (i) {
        n(i);
      }
      t.sync = false;
    }
    function Pa(e, t) {
      !t.prefinished && !t.finalCalled && (typeof e._final == "function" && !t.destroyed ? (t.finalCalled = true, Da(e, t)) : (t.prefinished = true, e.emit("prefinish")));
    }
    function Mr(e, t, r) {
      Mt(t) && (Pa(e, t), t.pendingcb === 0 && (r ? (t.pendingcb++, Re.nextTick((n, i) => {
        Mt(i) ? Br(n, i) : i.pendingcb--;
      }, e, t)) : Mt(t) && (t.pendingcb++, Br(e, t))));
    }
    function Br(e, t) {
      t.pendingcb--, t.finished = true;
      let r = t[qe].splice(0);
      for (let n = 0;n < r.length; n++)
        r[n]();
      if (e.emit("finish"), t.autoDestroy) {
        let n = e._readableState;
        (!n || n.autoDestroy && (n.endEmitted || n.readable === false)) && e.destroy();
      }
    }
    ga(m.prototype, { closed: { __proto__: null, get() {
      return this._writableState ? this._writableState.closed : false;
    } }, destroyed: { __proto__: null, get() {
      return this._writableState ? this._writableState.destroyed : false;
    }, set(e) {
      this._writableState && (this._writableState.destroyed = e);
    } }, writable: { __proto__: null, get() {
      let e = this._writableState;
      return !!e && e.writable !== false && !e.destroyed && !e.errored && !e.ending && !e.ended;
    }, set(e) {
      this._writableState && (this._writableState.writable = !!e);
    } }, writableFinished: { __proto__: null, get() {
      return this._writableState ? this._writableState.finished : false;
    } }, writableObjectMode: { __proto__: null, get() {
      return this._writableState ? this._writableState.objectMode : false;
    } }, writableBuffer: { __proto__: null, get() {
      return this._writableState && this._writableState.getBuffer();
    } }, writableEnded: { __proto__: null, get() {
      return this._writableState ? this._writableState.ending : false;
    } }, writableNeedDrain: { __proto__: null, get() {
      let e = this._writableState;
      return e ? !e.destroyed && !e.ending && e.needDrain : false;
    } }, writableHighWaterMark: { __proto__: null, get() {
      return this._writableState && this._writableState.highWaterMark;
    } }, writableCorked: { __proto__: null, get() {
      return this._writableState ? this._writableState.corked : 0;
    } }, writableLength: { __proto__: null, get() {
      return this._writableState && this._writableState.length;
    } }, errored: { __proto__: null, enumerable: false, get() {
      return this._writableState ? this._writableState.errored : null;
    } }, writableAborted: { __proto__: null, enumerable: false, get: function() {
      return !!(this._writableState.writable !== false && (this._writableState.destroyed || this._writableState.errored) && !this._writableState.finished);
    } } });
    var ka = Ot.destroy;
    m.prototype.destroy = function(e, t) {
      let r = this._writableState;
      return !r.destroyed && (r.bufferedIndex < r.buffered.length || r[qe].length) && Re.nextTick(Nr, r), ka.call(this, e, t), this;
    };
    m.prototype._undestroy = Ot.undestroy;
    m.prototype._destroy = function(e, t) {
      t(e);
    };
    m.prototype[ma.captureRejectionSymbol] = function(e) {
      this.destroy(e);
    };
    var Tr;
    function _o() {
      return Tr === undefined && (Tr = {}), Tr;
    }
    m.fromWeb = function(e, t) {
      return _o().newStreamWritableFromWritableStream(e, t);
    };
    m.toWeb = function(e) {
      return _o().newWritableStreamFromStreamWritable(e);
    };
  });
  Mo = E((cd, Fo) => {
    var Or = (se(), pe(k)), Ua = te(), { isReadable: va, isWritable: qa, isIterable: So, isNodeStream: Wa, isReadableNodeStream: mo, isWritableNodeStream: xo, isDuplexNodeStream: $a } = ae(), Ro = ce(), { AbortError: No, codes: { ERR_INVALID_ARG_TYPE: ja, ERR_INVALID_RETURN_VALUE: Ao } } = C(), { destroyer: We } = Se(), Ga = J(), Ha = Ke(), { createDeferredPromise: Io } = V(), To = Er(), Bo = globalThis.Blob || Ua.Blob, Va = typeof Bo < "u" ? function(t) {
      return t instanceof Bo;
    } : function(t) {
      return false;
    }, Ya = globalThis.AbortController || ut().AbortController, { FunctionPrototypeCall: Lo } = I(), Ae = class extends Ga {
      constructor(t) {
        super(t), t?.readable === false && (this._readableState.readable = false, this._readableState.ended = true, this._readableState.endEmitted = true), t?.writable === false && (this._writableState.writable = false, this._writableState.ending = true, this._writableState.ended = true, this._writableState.finished = true);
      }
    };
    Fo.exports = function e(t, r) {
      if ($a(t))
        return t;
      if (mo(t))
        return Dt({ readable: t });
      if (xo(t))
        return Dt({ writable: t });
      if (Wa(t))
        return Dt({ writable: false, readable: false });
      if (typeof t == "function") {
        let { value: i, write: o, final: l, destroy: u } = Ka(t);
        if (So(i))
          return To(Ae, i, { objectMode: true, write: o, final: l, destroy: u });
        let f = i?.then;
        if (typeof f == "function") {
          let s, d = Lo(f, i, (c) => {
            if (c != null)
              throw new Ao("nully", "body", c);
          }, (c) => {
            We(s, c);
          });
          return s = new Ae({ objectMode: true, readable: false, write: o, final(c) {
            l(async () => {
              try {
                await d, Or.nextTick(c, null);
              } catch (y) {
                Or.nextTick(c, y);
              }
            });
          }, destroy: u });
        }
        throw new Ao("Iterable, AsyncIterable or AsyncFunction", r, i);
      }
      if (Va(t))
        return e(t.arrayBuffer());
      if (So(t))
        return To(Ae, t, { objectMode: true, writable: false });
      if (typeof t?.writable == "object" || typeof t?.readable == "object") {
        let i = t != null && t.readable ? mo(t?.readable) ? t?.readable : e(t.readable) : undefined, o = t != null && t.writable ? xo(t?.writable) ? t?.writable : e(t.writable) : undefined;
        return Dt({ readable: i, writable: o });
      }
      let n = t?.then;
      if (typeof n == "function") {
        let i;
        return Lo(n, t, (o) => {
          o != null && i.push(o), i.push(null);
        }, (o) => {
          We(i, o);
        }), i = new Ae({ objectMode: true, writable: false, read() {
        } });
      }
      throw new ja(r, ["Blob", "ReadableStream", "WritableStream", "Stream", "Iterable", "AsyncIterable", "Function", "{ readable, writable } pair", "Promise"], t);
    };
    function Ka(e) {
      let { promise: t, resolve: r } = Io(), n = new Ya, i = n.signal;
      return { value: e(async function* () {
        for (;; ) {
          let l = t;
          t = null;
          let { chunk: u, done: f, cb: s } = await l;
          if (Or.nextTick(s), f)
            return;
          if (i.aborted)
            throw new No(undefined, { cause: i.reason });
          ({ promise: t, resolve: r } = Io()), yield u;
        }
      }(), { signal: i }), write(l, u, f) {
        let s = r;
        r = null, s({ chunk: l, done: false, cb: f });
      }, final(l) {
        let u = r;
        r = null, u({ done: true, cb: l });
      }, destroy(l, u) {
        n.abort(), u(l);
      } };
    }
    function Dt(e) {
      let t = e.readable && typeof e.readable.read != "function" ? Ha.wrap(e.readable) : e.readable, r = e.writable, n = !!va(t), i = !!qa(r), o, l, u, f, s;
      function d(c) {
        let y = f;
        f = null, y ? y(c) : c ? s.destroy(c) : !n && !i && s.destroy();
      }
      return s = new Ae({ readableObjectMode: !!(t != null && t.readableObjectMode), writableObjectMode: !!(r != null && r.writableObjectMode), readable: n, writable: i }), i && (Ro(r, (c) => {
        i = false, c && We(t, c), d(c);
      }), s._write = function(c, y, h) {
        r.write(c, y) ? h() : o = h;
      }, s._final = function(c) {
        r.end(), l = c;
      }, r.on("drain", function() {
        if (o) {
          let c = o;
          o = null, c();
        }
      }), r.on("finish", function() {
        if (l) {
          let c = l;
          l = null, c();
        }
      })), n && (Ro(t, (c) => {
        n = false, c && We(t, c), d(c);
      }), t.on("readable", function() {
        if (u) {
          let c = u;
          u = null, c();
        }
      }), t.on("end", function() {
        s.push(null);
      }), s._read = function() {
        for (;; ) {
          let c = t.read();
          if (c === null) {
            u = s._read;
            return;
          }
          if (!s.push(c))
            return;
        }
      }), s._destroy = function(c, y) {
        !c && f !== null && (c = new No), u = null, o = null, l = null, f === null ? y(c) : (f = y, We(r, c), We(t, c));
      }, s;
    }
  });
  J = E((dd, Do) => {
    var { ObjectDefineProperties: za, ObjectGetOwnPropertyDescriptor: ie, ObjectKeys: Xa, ObjectSetPrototypeOf: Co } = I();
    Do.exports = j;
    var kr = Ke(), U = Cr();
    Co(j.prototype, kr.prototype);
    Co(j, kr);
    {
      let e = Xa(U.prototype);
      for (let t = 0;t < e.length; t++) {
        let r = e[t];
        j.prototype[r] || (j.prototype[r] = U.prototype[r]);
      }
    }
    function j(e) {
      if (!(this instanceof j))
        return new j(e);
      kr.call(this, e), U.call(this, e), e ? (this.allowHalfOpen = e.allowHalfOpen !== false, e.readable === false && (this._readableState.readable = false, this._readableState.ended = true, this._readableState.endEmitted = true), e.writable === false && (this._writableState.writable = false, this._writableState.ending = true, this._writableState.ended = true, this._writableState.finished = true)) : this.allowHalfOpen = true;
    }
    za(j.prototype, { writable: { __proto__: null, ...ie(U.prototype, "writable") }, writableHighWaterMark: { __proto__: null, ...ie(U.prototype, "writableHighWaterMark") }, writableObjectMode: { __proto__: null, ...ie(U.prototype, "writableObjectMode") }, writableBuffer: { __proto__: null, ...ie(U.prototype, "writableBuffer") }, writableLength: { __proto__: null, ...ie(U.prototype, "writableLength") }, writableFinished: { __proto__: null, ...ie(U.prototype, "writableFinished") }, writableCorked: { __proto__: null, ...ie(U.prototype, "writableCorked") }, writableEnded: { __proto__: null, ...ie(U.prototype, "writableEnded") }, writableNeedDrain: { __proto__: null, ...ie(U.prototype, "writableNeedDrain") }, destroyed: { __proto__: null, get() {
      return this._readableState === undefined || this._writableState === undefined ? false : this._readableState.destroyed && this._writableState.destroyed;
    }, set(e) {
      this._readableState && this._writableState && (this._readableState.destroyed = e, this._writableState.destroyed = e);
    } } });
    var Dr;
    function Oo() {
      return Dr === undefined && (Dr = {}), Dr;
    }
    j.fromWeb = function(e, t) {
      return Oo().newStreamDuplexFromReadableWritablePair(e, t);
    };
    j.toWeb = function(e) {
      return Oo().newReadableWritablePairFromDuplex(e);
    };
    var Pr;
    j.from = function(e) {
      return Pr || (Pr = Mo()), Pr(e, "body");
    };
  });
  qr = E((hd, ko) => {
    var { ObjectSetPrototypeOf: Po, Symbol: Ja } = I();
    ko.exports = oe;
    var { ERR_METHOD_NOT_IMPLEMENTED: Qa } = C().codes, vr = J(), { getHighWaterMark: Za } = Tt();
    Po(oe.prototype, vr.prototype);
    Po(oe, vr);
    var Qe = Ja("kCallback");
    function oe(e) {
      if (!(this instanceof oe))
        return new oe(e);
      let t = e ? Za(this, e, "readableHighWaterMark", true) : null;
      t === 0 && (e = { ...e, highWaterMark: null, readableHighWaterMark: t, writableHighWaterMark: e.writableHighWaterMark || 0 }), vr.call(this, e), this._readableState.sync = false, this[Qe] = null, e && (typeof e.transform == "function" && (this._transform = e.transform), typeof e.flush == "function" && (this._flush = e.flush)), this.on("prefinish", ec);
    }
    function Ur(e) {
      typeof this._flush == "function" && !this.destroyed ? this._flush((t, r) => {
        if (t) {
          e ? e(t) : this.destroy(t);
          return;
        }
        r != null && this.push(r), this.push(null), e && e();
      }) : (this.push(null), e && e());
    }
    function ec() {
      this._final !== Ur && Ur.call(this);
    }
    oe.prototype._final = Ur;
    oe.prototype._transform = function(e, t, r) {
      throw new Qa("_transform()");
    };
    oe.prototype._write = function(e, t, r) {
      let n = this._readableState, i = this._writableState, o = n.length;
      this._transform(e, t, (l, u) => {
        if (l) {
          r(l);
          return;
        }
        u != null && this.push(u), i.ended || o === n.length || n.length < n.highWaterMark ? r() : this[Qe] = r;
      });
    };
    oe.prototype._read = function() {
      if (this[Qe]) {
        let e = this[Qe];
        this[Qe] = null, e();
      }
    };
  });
  $r = E((pd, vo) => {
    var { ObjectSetPrototypeOf: Uo } = I();
    vo.exports = $e;
    var Wr = qr();
    Uo($e.prototype, Wr.prototype);
    Uo($e, Wr);
    function $e(e) {
      if (!(this instanceof $e))
        return new $e(e);
      Wr.call(this, e);
    }
    $e.prototype._transform = function(e, t, r) {
      r(null, e);
    };
  });
  Ut = E((yd, Vo) => {
    var Pt = (se(), pe(k)), { ArrayIsArray: tc, Promise: rc, SymbolAsyncIterator: nc } = I(), kt = ce(), { once: ic } = V(), oc = Se(), qo = J(), { aggregateTwoErrors: lc, codes: { ERR_INVALID_ARG_TYPE: Go, ERR_INVALID_RETURN_VALUE: jr, ERR_MISSING_ARGS: uc, ERR_STREAM_DESTROYED: fc, ERR_STREAM_PREMATURE_CLOSE: sc }, AbortError: ac } = C(), { validateFunction: cc, validateAbortSignal: dc } = He(), { isIterable: je, isReadable: Gr, isReadableNodeStream: Yr, isNodeStream: Wo } = ae(), hc = globalThis.AbortController || ut().AbortController, Hr, Vr;
    function $o(e, t, r) {
      let n = false;
      e.on("close", () => {
        n = true;
      });
      let i = kt(e, { readable: t, writable: r }, (o) => {
        n = !o;
      });
      return { destroy: (o) => {
        n || (n = true, oc.destroyer(e, o || new fc("pipe")));
      }, cleanup: i };
    }
    function pc(e) {
      return cc(e[e.length - 1], "streams[stream.length - 1]"), e.pop();
    }
    function yc(e) {
      if (je(e))
        return e;
      if (Yr(e))
        return wc(e);
      throw new Go("val", ["Readable", "Iterable", "AsyncIterable"], e);
    }
    async function* wc(e) {
      Vr || (Vr = Ke()), yield* Vr.prototype[nc].call(e);
    }
    async function jo(e, t, r, { end: n }) {
      let i, o = null, l = (s) => {
        if (s && (i = s), o) {
          let d = o;
          o = null, d();
        }
      }, u = () => new rc((s, d) => {
        i ? d(i) : o = () => {
          i ? d(i) : s();
        };
      });
      t.on("drain", l);
      let f = kt(t, { readable: false }, l);
      try {
        t.writableNeedDrain && await u();
        for await (let s of e)
          t.write(s) || await u();
        n && t.end(), await u(), r();
      } catch (s) {
        r(i !== s ? lc(i, s) : s);
      } finally {
        f(), t.off("drain", l);
      }
    }
    function bc(...e) {
      return Ho(e, ic(pc(e)));
    }
    function Ho(e, t, r) {
      if (e.length === 1 && tc(e[0]) && (e = e[0]), e.length < 2)
        throw new uc("streams");
      let n = new hc, i = n.signal, o = r?.signal, l = [];
      dc(o, "options.signal");
      function u() {
        h(new ac);
      }
      o?.addEventListener("abort", u);
      let f, s, d = [], c = 0;
      function y(w) {
        h(w, --c === 0);
      }
      function h(w, b) {
        if (w && (!f || f.code === "ERR_STREAM_PREMATURE_CLOSE") && (f = w), !(!f && !b)) {
          for (;d.length; )
            d.shift()(f);
          o?.removeEventListener("abort", u), n.abort(), b && (f || l.forEach((L) => L()), Pt.nextTick(t, f, s));
        }
      }
      let p;
      for (let w = 0;w < e.length; w++) {
        let b = e[w], L = w < e.length - 1, N = w > 0, Q = L || r?.end !== false, Ie = w === e.length - 1;
        if (Wo(b)) {
          let q = function(Z) {
            Z && Z.name !== "AbortError" && Z.code !== "ERR_STREAM_PREMATURE_CLOSE" && y(Z);
          };
          var v = q;
          if (Q) {
            let { destroy: Z, cleanup: qt } = $o(b, L, N);
            d.push(Z), Gr(b) && Ie && l.push(qt);
          }
          b.on("error", q), Gr(b) && Ie && l.push(() => {
            b.removeListener("error", q);
          });
        }
        if (w === 0)
          if (typeof b == "function") {
            if (p = b({ signal: i }), !je(p))
              throw new jr("Iterable, AsyncIterable or Stream", "source", p);
          } else
            je(b) || Yr(b) ? p = b : p = qo.from(b);
        else if (typeof b == "function")
          if (p = yc(p), p = b(p, { signal: i }), L) {
            if (!je(p, true))
              throw new jr("AsyncIterable", `transform[${w - 1}]`, p);
          } else {
            var B;
            Hr || (Hr = $r());
            let q = new Hr({ objectMode: true }), Z = (B = p) === null || B === undefined ? undefined : B.then;
            if (typeof Z == "function")
              c++, Z.call(p, (Te) => {
                s = Te, Te != null && q.write(Te), Q && q.end(), Pt.nextTick(y);
              }, (Te) => {
                q.destroy(Te), Pt.nextTick(y, Te);
              });
            else if (je(p, true))
              c++, jo(p, q, y, { end: Q });
            else
              throw new jr("AsyncIterable or Promise", "destination", p);
            p = q;
            let { destroy: qt, cleanup: sl } = $o(p, false, true);
            d.push(qt), Ie && l.push(sl);
          }
        else if (Wo(b)) {
          if (Yr(p)) {
            c += 2;
            let q = gc(p, b, y, { end: Q });
            Gr(b) && Ie && l.push(q);
          } else if (je(p))
            c++, jo(p, b, y, { end: Q });
          else
            throw new Go("val", ["Readable", "Iterable", "AsyncIterable"], p);
          p = b;
        } else
          p = qo.from(b);
      }
      return (i != null && i.aborted || o != null && o.aborted) && Pt.nextTick(u), p;
    }
    function gc(e, t, r, { end: n }) {
      let i = false;
      return t.on("close", () => {
        i || r(new sc);
      }), e.pipe(t, { end: n }), n ? e.once("end", () => {
        i = true, t.end();
      }) : r(), kt(e, { readable: true, writable: false }, (o) => {
        let l = e._readableState;
        o && o.code === "ERR_STREAM_PREMATURE_CLOSE" && l && l.ended && !l.errored && !l.errorEmitted ? e.once("end", r).once("error", r) : r(o);
      }), kt(t, { readable: false, writable: true }, r);
    }
    Vo.exports = { pipelineImpl: Ho, pipeline: bc };
  });
  Jo = E((wd, Xo) => {
    var { pipeline: _c } = Ut(), vt = J(), { destroyer: Ec } = Se(), { isNodeStream: Sc, isReadable: Yo, isWritable: Ko } = ae(), { AbortError: mc, codes: { ERR_INVALID_ARG_VALUE: zo, ERR_MISSING_ARGS: xc } } = C();
    Xo.exports = function(...t) {
      if (t.length === 0)
        throw new xc("streams");
      if (t.length === 1)
        return vt.from(t[0]);
      let r = [...t];
      if (typeof t[0] == "function" && (t[0] = vt.from(t[0])), typeof t[t.length - 1] == "function") {
        let h = t.length - 1;
        t[h] = vt.from(t[h]);
      }
      for (let h = 0;h < t.length; ++h)
        if (!!Sc(t[h])) {
          if (h < t.length - 1 && !Yo(t[h]))
            throw new zo(`streams[${h}]`, r[h], "must be readable");
          if (h > 0 && !Ko(t[h]))
            throw new zo(`streams[${h}]`, r[h], "must be writable");
        }
      let n, i, o, l, u;
      function f(h) {
        let p = l;
        l = null, p ? p(h) : h ? u.destroy(h) : !y && !c && u.destroy();
      }
      let s = t[0], d = _c(t, f), c = !!Ko(s), y = !!Yo(d);
      return u = new vt({ writableObjectMode: !!(s != null && s.writableObjectMode), readableObjectMode: !!(d != null && d.writableObjectMode), writable: c, readable: y }), c && (u._write = function(h, p, B) {
        s.write(h, p) ? B() : n = B;
      }, u._final = function(h) {
        s.end(), i = h;
      }, s.on("drain", function() {
        if (n) {
          let h = n;
          n = null, h();
        }
      }), d.on("finish", function() {
        if (i) {
          let h = i;
          i = null, h();
        }
      })), y && (d.on("readable", function() {
        if (o) {
          let h = o;
          o = null, h();
        }
      }), d.on("end", function() {
        u.push(null);
      }), u._read = function() {
        for (;; ) {
          let h = d.read();
          if (h === null) {
            o = u._read;
            return;
          }
          if (!u.push(h))
            return;
        }
      }), u._destroy = function(h, p) {
        !h && l !== null && (h = new mc), o = null, n = null, i = null, l === null ? p(h) : (l = p, Ec(d, h));
      }, u;
    };
  });
  Kr = E((bd, Qo) => {
    var { ArrayPrototypePop: Rc, Promise: Ac } = I(), { isIterable: Ic, isNodeStream: Tc } = ae(), { pipelineImpl: Bc } = Ut(), { finished: Lc } = ce();
    function Nc(...e) {
      return new Ac((t, r) => {
        let n, i, o = e[e.length - 1];
        if (o && typeof o == "object" && !Tc(o) && !Ic(o)) {
          let l = Rc(e);
          n = l.signal, i = l.end;
        }
        Bc(e, (l, u) => {
          l ? r(l) : t(u);
        }, { signal: n, end: i });
      });
    }
    Qo.exports = { finished: Lc, pipeline: Nc };
  });
  fl = E((gd, ul) => {
    var { Buffer: Fc } = te(), { ObjectDefineProperty: le, ObjectKeys: tl, ReflectApply: rl } = I(), { promisify: { custom: nl } } = V(), { streamReturningOperators: Zo, promiseReturningOperators: el } = di(), { codes: { ERR_ILLEGAL_CONSTRUCTOR: il } } = C(), Mc = Jo(), { pipeline: ol } = Ut(), { destroyer: Cc } = Se(), ll = ce(), zr = Kr(), Xr = ae(), R = ul.exports = xt().Stream;
    R.isDisturbed = Xr.isDisturbed;
    R.isErrored = Xr.isErrored;
    R.isReadable = Xr.isReadable;
    R.Readable = Ke();
    for (let e of tl(Zo)) {
      let r = function(...n) {
        if (new.target)
          throw il();
        return R.Readable.from(rl(t, this, n));
      };
      Dc = r;
      let t = Zo[e];
      le(r, "name", { __proto__: null, value: t.name }), le(r, "length", { __proto__: null, value: t.length }), le(R.Readable.prototype, e, { __proto__: null, value: r, enumerable: false, configurable: true, writable: true });
    }
    var Dc;
    for (let e of tl(el)) {
      let r = function(...i) {
        if (new.target)
          throw il();
        return rl(t, this, i);
      };
      Dc = r;
      let t = el[e];
      le(r, "name", { __proto__: null, value: t.name }), le(r, "length", { __proto__: null, value: t.length }), le(R.Readable.prototype, e, { __proto__: null, value: r, enumerable: false, configurable: true, writable: true });
    }
    var Dc;
    R.Writable = Cr();
    R.Duplex = J();
    R.Transform = qr();
    R.PassThrough = $r();
    R.pipeline = ol;
    var { addAbortSignal: Oc } = At();
    R.addAbortSignal = Oc;
    R.finished = ll;
    R.destroy = Cc;
    R.compose = Mc;
    le(R, "promises", { __proto__: null, configurable: true, enumerable: true, get() {
      return zr;
    } });
    le(ol, nl, { __proto__: null, enumerable: true, get() {
      return zr.pipeline;
    } });
    le(ll, nl, { __proto__: null, enumerable: true, get() {
      return zr.finished;
    } });
    R.Stream = R;
    R._isUint8Array = function(t) {
      return t instanceof Uint8Array;
    };
    R._uint8ArrayToBuffer = function(t) {
      return Fc.from(t.buffer, t.byteOffset, t.byteLength);
    };
  });
  Jr = E((_d, A) => {
    var T = fl(), Pc = Kr(), kc = T.Readable.destroy;
    A.exports = T.Readable;
    A.exports._uint8ArrayToBuffer = T._uint8ArrayToBuffer;
    A.exports._isUint8Array = T._isUint8Array;
    A.exports.isDisturbed = T.isDisturbed;
    A.exports.isErrored = T.isErrored;
    A.exports.isReadable = T.isReadable;
    A.exports.Readable = T.Readable;
    A.exports.Writable = T.Writable;
    A.exports.Duplex = T.Duplex;
    A.exports.Transform = T.Transform;
    A.exports.PassThrough = T.PassThrough;
    A.exports.addAbortSignal = T.addAbortSignal;
    A.exports.finished = T.finished;
    A.exports.destroy = T.destroy;
    A.exports.destroy = kc;
    A.exports.pipeline = T.pipeline;
    A.exports.compose = T.compose;
    Object.defineProperty(T, "promises", { configurable: true, enumerable: true, get() {
      return Pc;
    } });
    A.exports.Stream = T.Stream;
    A.exports.default = A.exports;
  });
  Ze = {};
  Qr(Ze, { default: () => Uc });
  ue(Ze, rt(Jr()));
  Uc = rt(Jr());
  /*!
   * The buffer module from node.js, for the browser.
   *
   * @author   Feross Aboukhadijeh <https://feross.org>
   * @license  MIT
   */
  /*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
  /*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */
});

// node_modules/jszip/lib/support.js
var require_support = __commonJS((exports) => {
  exports.base64 = true;
  exports.array = true;
  exports.string = true;
  exports.arraybuffer = typeof ArrayBuffer !== "undefined" && typeof Uint8Array !== "undefined";
  exports.nodebuffer = typeof Buffer !== "undefined";
  exports.uint8array = typeof Uint8Array !== "undefined";
  if (typeof ArrayBuffer === "undefined") {
    exports.blob = false;
  } else {
    buffer = new ArrayBuffer(0);
    try {
      exports.blob = new Blob([buffer], {
        type: "application/zip"
      }).size === 0;
    } catch (e) {
      try {
        Builder = self.BlobBuilder || self.WebKitBlobBuilder || self.MozBlobBuilder || self.MSBlobBuilder;
        builder = new Builder;
        builder.append(buffer);
        exports.blob = builder.getBlob("application/zip").size === 0;
      } catch (e2) {
        exports.blob = false;
      }
    }
  }
  var buffer;
  var Builder;
  var builder;
  try {
    exports.nodestream = !!(init_stream(), __toCommonJS(exports_stream)).Readable;
  } catch (e) {
    exports.nodestream = false;
  }
});

// node_modules/jszip/lib/base64.js
var require_base64 = __commonJS((exports) => {
  var utils = require_utils();
  var support = require_support();
  var _keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  exports.encode = function(input) {
    var output = [];
    var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
    var i = 0, len = input.length, remainingBytes = len;
    var isArray = utils.getTypeOf(input) !== "string";
    while (i < input.length) {
      remainingBytes = len - i;
      if (!isArray) {
        chr1 = input.charCodeAt(i++);
        chr2 = i < len ? input.charCodeAt(i++) : 0;
        chr3 = i < len ? input.charCodeAt(i++) : 0;
      } else {
        chr1 = input[i++];
        chr2 = i < len ? input[i++] : 0;
        chr3 = i < len ? input[i++] : 0;
      }
      enc1 = chr1 >> 2;
      enc2 = (chr1 & 3) << 4 | chr2 >> 4;
      enc3 = remainingBytes > 1 ? (chr2 & 15) << 2 | chr3 >> 6 : 64;
      enc4 = remainingBytes > 2 ? chr3 & 63 : 64;
      output.push(_keyStr.charAt(enc1) + _keyStr.charAt(enc2) + _keyStr.charAt(enc3) + _keyStr.charAt(enc4));
    }
    return output.join("");
  };
  exports.decode = function(input) {
    var chr1, chr2, chr3;
    var enc1, enc2, enc3, enc4;
    var i = 0, resultIndex = 0;
    var dataUrlPrefix = "data:";
    if (input.substr(0, dataUrlPrefix.length) === dataUrlPrefix) {
      throw new Error("Invalid base64 input, it looks like a data url.");
    }
    input = input.replace(/[^A-Za-z0-9+/=]/g, "");
    var totalLength = input.length * 3 / 4;
    if (input.charAt(input.length - 1) === _keyStr.charAt(64)) {
      totalLength--;
    }
    if (input.charAt(input.length - 2) === _keyStr.charAt(64)) {
      totalLength--;
    }
    if (totalLength % 1 !== 0) {
      throw new Error("Invalid base64 input, bad content length.");
    }
    var output;
    if (support.uint8array) {
      output = new Uint8Array(totalLength | 0);
    } else {
      output = new Array(totalLength | 0);
    }
    while (i < input.length) {
      enc1 = _keyStr.indexOf(input.charAt(i++));
      enc2 = _keyStr.indexOf(input.charAt(i++));
      enc3 = _keyStr.indexOf(input.charAt(i++));
      enc4 = _keyStr.indexOf(input.charAt(i++));
      chr1 = enc1 << 2 | enc2 >> 4;
      chr2 = (enc2 & 15) << 4 | enc3 >> 2;
      chr3 = (enc3 & 3) << 6 | enc4;
      output[resultIndex++] = chr1;
      if (enc3 !== 64) {
        output[resultIndex++] = chr2;
      }
      if (enc4 !== 64) {
        output[resultIndex++] = chr3;
      }
    }
    return output;
  };
});

// node_modules/jszip/lib/nodejsUtils.js
var require_nodejsUtils = __commonJS((exports, module) => {
  module.exports = {
    isNode: typeof Buffer !== "undefined",
    newBufferFrom: function(data, encoding) {
      if (Buffer.from && Buffer.from !== Uint8Array.from) {
        return Buffer.from(data, encoding);
      } else {
        if (typeof data === "number") {
          throw new Error("The \"data\" argument must not be a number");
        }
        return new Buffer(data, encoding);
      }
    },
    allocBuffer: function(size) {
      if (Buffer.alloc) {
        return Buffer.alloc(size);
      } else {
        var buf = new Buffer(size);
        buf.fill(0);
        return buf;
      }
    },
    isBuffer: function(b) {
      return Buffer.isBuffer(b);
    },
    isStream: function(obj) {
      return obj && typeof obj.on === "function" && typeof obj.pause === "function" && typeof obj.resume === "function";
    }
  };
});

// node_modules/immediate/lib/browser.js
var require_browser = __commonJS((exports, module) => {
  function nextTick() {
    draining = true;
    var i, oldQueue;
    var len = queue.length;
    while (len) {
      oldQueue = queue;
      queue = [];
      i = -1;
      while (++i < len) {
        oldQueue[i]();
      }
      len = queue.length;
    }
    draining = false;
  }
  function immediate(task) {
    if (queue.push(task) === 1 && !draining) {
      scheduleDrain();
    }
  }
  var Mutation = global.MutationObserver || global.WebKitMutationObserver;
  var scheduleDrain;
  {
    if (Mutation) {
      called = 0;
      observer = new Mutation(nextTick);
      element = global.document.createTextNode("");
      observer.observe(element, {
        characterData: true
      });
      scheduleDrain = function() {
        element.data = called = ++called % 2;
      };
    } else if (!global.setImmediate && typeof global.MessageChannel !== "undefined") {
      channel = new global.MessageChannel;
      channel.port1.onmessage = nextTick;
      scheduleDrain = function() {
        channel.port2.postMessage(0);
      };
    } else if ("document" in global && "onreadystatechange" in global.document.createElement("script")) {
      scheduleDrain = function() {
        var scriptEl = global.document.createElement("script");
        scriptEl.onreadystatechange = function() {
          nextTick();
          scriptEl.onreadystatechange = null;
          scriptEl.parentNode.removeChild(scriptEl);
          scriptEl = null;
        };
        global.document.documentElement.appendChild(scriptEl);
      };
    } else {
      scheduleDrain = function() {
        setTimeout(nextTick, 0);
      };
    }
  }
  var called;
  var observer;
  var element;
  var channel;
  var draining;
  var queue = [];
  module.exports = immediate;
});

// node_modules/lie/lib/browser.js
var require_browser2 = __commonJS((exports, module) => {
  function INTERNAL() {
  }
  function Promise2(resolver) {
    if (typeof resolver !== "function") {
      throw new TypeError("resolver must be a function");
    }
    this.state = PENDING;
    this.queue = [];
    this.outcome = undefined;
    if (resolver !== INTERNAL) {
      safelyResolveThenable(this, resolver);
    }
  }
  function QueueItem(promise, onFulfilled, onRejected) {
    this.promise = promise;
    if (typeof onFulfilled === "function") {
      this.onFulfilled = onFulfilled;
      this.callFulfilled = this.otherCallFulfilled;
    }
    if (typeof onRejected === "function") {
      this.onRejected = onRejected;
      this.callRejected = this.otherCallRejected;
    }
  }
  function unwrap(promise, func, value) {
    immediate(function() {
      var returnValue;
      try {
        returnValue = func(value);
      } catch (e) {
        return handlers.reject(promise, e);
      }
      if (returnValue === promise) {
        handlers.reject(promise, new TypeError("Cannot resolve promise with itself"));
      } else {
        handlers.resolve(promise, returnValue);
      }
    });
  }
  function getThen(obj) {
    var then = obj && obj.then;
    if (obj && (typeof obj === "object" || typeof obj === "function") && typeof then === "function") {
      return function appyThen() {
        then.apply(obj, arguments);
      };
    }
  }
  function safelyResolveThenable(self2, thenable) {
    var called = false;
    function onError(value) {
      if (called) {
        return;
      }
      called = true;
      handlers.reject(self2, value);
    }
    function onSuccess(value) {
      if (called) {
        return;
      }
      called = true;
      handlers.resolve(self2, value);
    }
    function tryToUnwrap() {
      thenable(onSuccess, onError);
    }
    var result = tryCatch(tryToUnwrap);
    if (result.status === "error") {
      onError(result.value);
    }
  }
  function tryCatch(func, value) {
    var out = {};
    try {
      out.value = func(value);
      out.status = "success";
    } catch (e) {
      out.status = "error";
      out.value = e;
    }
    return out;
  }
  function resolve(value) {
    if (value instanceof this) {
      return value;
    }
    return handlers.resolve(new this(INTERNAL), value);
  }
  function reject(reason) {
    var promise = new this(INTERNAL);
    return handlers.reject(promise, reason);
  }
  function all(iterable) {
    var self2 = this;
    if (Object.prototype.toString.call(iterable) !== "[object Array]") {
      return this.reject(new TypeError("must be an array"));
    }
    var len = iterable.length;
    var called = false;
    if (!len) {
      return this.resolve([]);
    }
    var values = new Array(len);
    var resolved = 0;
    var i = -1;
    var promise = new this(INTERNAL);
    while (++i < len) {
      allResolver(iterable[i], i);
    }
    return promise;
    function allResolver(value, i2) {
      self2.resolve(value).then(resolveFromAll, function(error) {
        if (!called) {
          called = true;
          handlers.reject(promise, error);
        }
      });
      function resolveFromAll(outValue) {
        values[i2] = outValue;
        if (++resolved === len && !called) {
          called = true;
          handlers.resolve(promise, values);
        }
      }
    }
  }
  function race(iterable) {
    var self2 = this;
    if (Object.prototype.toString.call(iterable) !== "[object Array]") {
      return this.reject(new TypeError("must be an array"));
    }
    var len = iterable.length;
    var called = false;
    if (!len) {
      return this.resolve([]);
    }
    var i = -1;
    var promise = new this(INTERNAL);
    while (++i < len) {
      resolver(iterable[i]);
    }
    return promise;
    function resolver(value) {
      self2.resolve(value).then(function(response) {
        if (!called) {
          called = true;
          handlers.resolve(promise, response);
        }
      }, function(error) {
        if (!called) {
          called = true;
          handlers.reject(promise, error);
        }
      });
    }
  }
  var immediate = require_browser();
  var handlers = {};
  var REJECTED = ["REJECTED"];
  var FULFILLED = ["FULFILLED"];
  var PENDING = ["PENDING"];
  module.exports = Promise2;
  Promise2.prototype["finally"] = function(callback) {
    if (typeof callback !== "function") {
      return this;
    }
    var p = this.constructor;
    return this.then(resolve2, reject2);
    function resolve2(value) {
      function yes() {
        return value;
      }
      return p.resolve(callback()).then(yes);
    }
    function reject2(reason) {
      function no() {
        throw reason;
      }
      return p.resolve(callback()).then(no);
    }
  };
  Promise2.prototype["catch"] = function(onRejected) {
    return this.then(null, onRejected);
  };
  Promise2.prototype.then = function(onFulfilled, onRejected) {
    if (typeof onFulfilled !== "function" && this.state === FULFILLED || typeof onRejected !== "function" && this.state === REJECTED) {
      return this;
    }
    var promise = new this.constructor(INTERNAL);
    if (this.state !== PENDING) {
      var resolver = this.state === FULFILLED ? onFulfilled : onRejected;
      unwrap(promise, resolver, this.outcome);
    } else {
      this.queue.push(new QueueItem(promise, onFulfilled, onRejected));
    }
    return promise;
  };
  QueueItem.prototype.callFulfilled = function(value) {
    handlers.resolve(this.promise, value);
  };
  QueueItem.prototype.otherCallFulfilled = function(value) {
    unwrap(this.promise, this.onFulfilled, value);
  };
  QueueItem.prototype.callRejected = function(value) {
    handlers.reject(this.promise, value);
  };
  QueueItem.prototype.otherCallRejected = function(value) {
    unwrap(this.promise, this.onRejected, value);
  };
  handlers.resolve = function(self2, value) {
    var result = tryCatch(getThen, value);
    if (result.status === "error") {
      return handlers.reject(self2, result.value);
    }
    var thenable = result.value;
    if (thenable) {
      safelyResolveThenable(self2, thenable);
    } else {
      self2.state = FULFILLED;
      self2.outcome = value;
      var i = -1;
      var len = self2.queue.length;
      while (++i < len) {
        self2.queue[i].callFulfilled(value);
      }
    }
    return self2;
  };
  handlers.reject = function(self2, error) {
    self2.state = REJECTED;
    self2.outcome = error;
    var i = -1;
    var len = self2.queue.length;
    while (++i < len) {
      self2.queue[i].callRejected(error);
    }
    return self2;
  };
  Promise2.resolve = resolve;
  Promise2.reject = reject;
  Promise2.all = all;
  Promise2.race = race;
});

// node_modules/jszip/lib/external.js
var require_external = __commonJS((exports, module) => {
  var ES6Promise = null;
  if (typeof Promise !== "undefined") {
    ES6Promise = Promise;
  } else {
    ES6Promise = require_browser2();
  }
  module.exports = {
    Promise: ES6Promise
  };
});

// node_modules/setimmediate/setImmediate.js
var require_setImmediate = __commonJS((exports) => {
  (function(global2, undefined2) {
    if (global2.setImmediate) {
      return;
    }
    var nextHandle = 1;
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global2.document;
    var registerImmediate;
    function setImmediate2(callback) {
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      var args = new Array(arguments.length - 1);
      for (var i = 0;i < args.length; i++) {
        args[i] = arguments[i + 1];
      }
      var task = { callback, args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }
    function clearImmediate(handle) {
      delete tasksByHandle[handle];
    }
    function run(task) {
      var callback = task.callback;
      var args = task.args;
      switch (args.length) {
        case 0:
          callback();
          break;
        case 1:
          callback(args[0]);
          break;
        case 2:
          callback(args[0], args[1]);
          break;
        case 3:
          callback(args[0], args[1], args[2]);
          break;
        default:
          callback.apply(undefined2, args);
          break;
      }
    }
    function runIfPresent(handle) {
      if (currentlyRunningATask) {
        setTimeout(runIfPresent, 0, handle);
      } else {
        var task = tasksByHandle[handle];
        if (task) {
          currentlyRunningATask = true;
          try {
            run(task);
          } finally {
            clearImmediate(handle);
            currentlyRunningATask = false;
          }
        }
      }
    }
    function installNextTickImplementation() {
      registerImmediate = function(handle) {
        process.nextTick(function() {
          runIfPresent(handle);
        });
      };
    }
    function canUsePostMessage() {
      if (global2.postMessage && !global2.importScripts) {
        var postMessageIsAsynchronous = true;
        var oldOnMessage = global2.onmessage;
        global2.onmessage = function() {
          postMessageIsAsynchronous = false;
        };
        global2.postMessage("", "*");
        global2.onmessage = oldOnMessage;
        return postMessageIsAsynchronous;
      }
    }
    function installPostMessageImplementation() {
      var messagePrefix = "setImmediate$" + Math.random() + "$";
      var onGlobalMessage = function(event) {
        if (event.source === global2 && typeof event.data === "string" && event.data.indexOf(messagePrefix) === 0) {
          runIfPresent(+event.data.slice(messagePrefix.length));
        }
      };
      if (global2.addEventListener) {
        global2.addEventListener("message", onGlobalMessage, false);
      } else {
        global2.attachEvent("onmessage", onGlobalMessage);
      }
      registerImmediate = function(handle) {
        global2.postMessage(messagePrefix + handle, "*");
      };
    }
    function installMessageChannelImplementation() {
      var channel = new MessageChannel;
      channel.port1.onmessage = function(event) {
        var handle = event.data;
        runIfPresent(handle);
      };
      registerImmediate = function(handle) {
        channel.port2.postMessage(handle);
      };
    }
    function installReadyStateChangeImplementation() {
      var html = doc.documentElement;
      registerImmediate = function(handle) {
        var script = doc.createElement("script");
        script.onreadystatechange = function() {
          runIfPresent(handle);
          script.onreadystatechange = null;
          html.removeChild(script);
          script = null;
        };
        html.appendChild(script);
      };
    }
    function installSetTimeoutImplementation() {
      registerImmediate = function(handle) {
        setTimeout(runIfPresent, 0, handle);
      };
    }
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global2);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global2;
    if ({}.toString.call(global2.process) === "[object process]") {
      installNextTickImplementation();
    } else if (canUsePostMessage()) {
      installPostMessageImplementation();
    } else if (global2.MessageChannel) {
      installMessageChannelImplementation();
    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
      installReadyStateChangeImplementation();
    } else {
      installSetTimeoutImplementation();
    }
    attachTo.setImmediate = setImmediate2;
    attachTo.clearImmediate = clearImmediate;
  })(typeof self === "undefined" ? typeof global === "undefined" ? exports : global : self);
});

// node_modules/jszip/lib/utils.js
var require_utils = __commonJS((exports) => {
  function string2binary(str) {
    var result = null;
    if (support.uint8array) {
      result = new Uint8Array(str.length);
    } else {
      result = new Array(str.length);
    }
    return stringToArrayLike(str, result);
  }
  function identity(input) {
    return input;
  }
  function stringToArrayLike(str, array) {
    for (var i = 0;i < str.length; ++i) {
      array[i] = str.charCodeAt(i) & 255;
    }
    return array;
  }
  function arrayLikeToString(array) {
    var chunk = 65536, type = exports.getTypeOf(array), canUseApply = true;
    if (type === "uint8array") {
      canUseApply = arrayToStringHelper.applyCanBeUsed.uint8array;
    } else if (type === "nodebuffer") {
      canUseApply = arrayToStringHelper.applyCanBeUsed.nodebuffer;
    }
    if (canUseApply) {
      while (chunk > 1) {
        try {
          return arrayToStringHelper.stringifyByChunk(array, type, chunk);
        } catch (e) {
          chunk = Math.floor(chunk / 2);
        }
      }
    }
    return arrayToStringHelper.stringifyByChar(array);
  }
  function arrayLikeToArrayLike(arrayFrom, arrayTo) {
    for (var i = 0;i < arrayFrom.length; i++) {
      arrayTo[i] = arrayFrom[i];
    }
    return arrayTo;
  }
  var support = require_support();
  var base64 = require_base64();
  var nodejsUtils = require_nodejsUtils();
  var external = require_external();
  require_setImmediate();
  exports.newBlob = function(part, type) {
    exports.checkSupport("blob");
    try {
      return new Blob([part], {
        type
      });
    } catch (e) {
      try {
        var Builder = self.BlobBuilder || self.WebKitBlobBuilder || self.MozBlobBuilder || self.MSBlobBuilder;
        var builder = new Builder;
        builder.append(part);
        return builder.getBlob(type);
      } catch (e2) {
        throw new Error("Bug : can't construct the Blob.");
      }
    }
  };
  var arrayToStringHelper = {
    stringifyByChunk: function(array, type, chunk) {
      var result = [], k2 = 0, len = array.length;
      if (len <= chunk) {
        return String.fromCharCode.apply(null, array);
      }
      while (k2 < len) {
        if (type === "array" || type === "nodebuffer") {
          result.push(String.fromCharCode.apply(null, array.slice(k2, Math.min(k2 + chunk, len))));
        } else {
          result.push(String.fromCharCode.apply(null, array.subarray(k2, Math.min(k2 + chunk, len))));
        }
        k2 += chunk;
      }
      return result.join("");
    },
    stringifyByChar: function(array) {
      var resultStr = "";
      for (var i = 0;i < array.length; i++) {
        resultStr += String.fromCharCode(array[i]);
      }
      return resultStr;
    },
    applyCanBeUsed: {
      uint8array: function() {
        try {
          return support.uint8array && String.fromCharCode.apply(null, new Uint8Array(1)).length === 1;
        } catch (e) {
          return false;
        }
      }(),
      nodebuffer: function() {
        try {
          return support.nodebuffer && String.fromCharCode.apply(null, nodejsUtils.allocBuffer(1)).length === 1;
        } catch (e) {
          return false;
        }
      }()
    }
  };
  exports.applyFromCharCode = arrayLikeToString;
  var transform = {};
  transform["string"] = {
    string: identity,
    array: function(input) {
      return stringToArrayLike(input, new Array(input.length));
    },
    arraybuffer: function(input) {
      return transform["string"]["uint8array"](input).buffer;
    },
    uint8array: function(input) {
      return stringToArrayLike(input, new Uint8Array(input.length));
    },
    nodebuffer: function(input) {
      return stringToArrayLike(input, nodejsUtils.allocBuffer(input.length));
    }
  };
  transform["array"] = {
    string: arrayLikeToString,
    array: identity,
    arraybuffer: function(input) {
      return new Uint8Array(input).buffer;
    },
    uint8array: function(input) {
      return new Uint8Array(input);
    },
    nodebuffer: function(input) {
      return nodejsUtils.newBufferFrom(input);
    }
  };
  transform["arraybuffer"] = {
    string: function(input) {
      return arrayLikeToString(new Uint8Array(input));
    },
    array: function(input) {
      return arrayLikeToArrayLike(new Uint8Array(input), new Array(input.byteLength));
    },
    arraybuffer: identity,
    uint8array: function(input) {
      return new Uint8Array(input);
    },
    nodebuffer: function(input) {
      return nodejsUtils.newBufferFrom(new Uint8Array(input));
    }
  };
  transform["uint8array"] = {
    string: arrayLikeToString,
    array: function(input) {
      return arrayLikeToArrayLike(input, new Array(input.length));
    },
    arraybuffer: function(input) {
      return input.buffer;
    },
    uint8array: identity,
    nodebuffer: function(input) {
      return nodejsUtils.newBufferFrom(input);
    }
  };
  transform["nodebuffer"] = {
    string: arrayLikeToString,
    array: function(input) {
      return arrayLikeToArrayLike(input, new Array(input.length));
    },
    arraybuffer: function(input) {
      return transform["nodebuffer"]["uint8array"](input).buffer;
    },
    uint8array: function(input) {
      return arrayLikeToArrayLike(input, new Uint8Array(input.length));
    },
    nodebuffer: identity
  };
  exports.transformTo = function(outputType, input) {
    if (!input) {
      input = "";
    }
    if (!outputType) {
      return input;
    }
    exports.checkSupport(outputType);
    var inputType = exports.getTypeOf(input);
    var result = transform[inputType][outputType](input);
    return result;
  };
  exports.resolve = function(path) {
    var parts = path.split("/");
    var result = [];
    for (var index = 0;index < parts.length; index++) {
      var part = parts[index];
      if (part === "." || part === "" && index !== 0 && index !== parts.length - 1) {
        continue;
      } else if (part === "..") {
        result.pop();
      } else {
        result.push(part);
      }
    }
    return result.join("/");
  };
  exports.getTypeOf = function(input) {
    if (typeof input === "string") {
      return "string";
    }
    if (Object.prototype.toString.call(input) === "[object Array]") {
      return "array";
    }
    if (support.nodebuffer && nodejsUtils.isBuffer(input)) {
      return "nodebuffer";
    }
    if (support.uint8array && input instanceof Uint8Array) {
      return "uint8array";
    }
    if (support.arraybuffer && input instanceof ArrayBuffer) {
      return "arraybuffer";
    }
  };
  exports.checkSupport = function(type) {
    var supported = support[type.toLowerCase()];
    if (!supported) {
      throw new Error(type + " is not supported by this platform");
    }
  };
  exports.MAX_VALUE_16BITS = 65535;
  exports.MAX_VALUE_32BITS = -1;
  exports.pretty = function(str) {
    var res = "", code, i;
    for (i = 0;i < (str || "").length; i++) {
      code = str.charCodeAt(i);
      res += "\\x" + (code < 16 ? "0" : "") + code.toString(16).toUpperCase();
    }
    return res;
  };
  exports.delay = function(callback, args, self2) {
    setImmediate(function() {
      callback.apply(self2 || null, args || []);
    });
  };
  exports.inherits = function(ctor, superCtor) {
    var Obj = function() {
    };
    Obj.prototype = superCtor.prototype;
    ctor.prototype = new Obj;
  };
  exports.extend = function() {
    var result = {}, i, attr;
    for (i = 0;i < arguments.length; i++) {
      for (attr in arguments[i]) {
        if (Object.prototype.hasOwnProperty.call(arguments[i], attr) && typeof result[attr] === "undefined") {
          result[attr] = arguments[i][attr];
        }
      }
    }
    return result;
  };
  exports.prepareContent = function(name, inputData, isBinary, isOptimizedBinaryString, isBase64) {
    var promise = external.Promise.resolve(inputData).then(function(data) {
      var isBlob = support.blob && (data instanceof Blob || ["[object File]", "[object Blob]"].indexOf(Object.prototype.toString.call(data)) !== -1);
      if (isBlob && typeof FileReader !== "undefined") {
        return new external.Promise(function(resolve, reject) {
          var reader = new FileReader;
          reader.onload = function(e) {
            resolve(e.target.result);
          };
          reader.onerror = function(e) {
            reject(e.target.error);
          };
          reader.readAsArrayBuffer(data);
        });
      } else {
        return data;
      }
    });
    return promise.then(function(data) {
      var dataType = exports.getTypeOf(data);
      if (!dataType) {
        return external.Promise.reject(new Error("Can't read the data of '" + name + "'. Is it " + "in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"));
      }
      if (dataType === "arraybuffer") {
        data = exports.transformTo("uint8array", data);
      } else if (dataType === "string") {
        if (isBase64) {
          data = base64.decode(data);
        } else if (isBinary) {
          if (isOptimizedBinaryString !== true) {
            data = string2binary(data);
          }
        }
      }
      return data;
    });
  };
});

// node_modules/jszip/lib/stream/GenericWorker.js
var require_GenericWorker = __commonJS((exports, module) => {
  function GenericWorker(name) {
    this.name = name || "default";
    this.streamInfo = {};
    this.generatedError = null;
    this.extraStreamInfo = {};
    this.isPaused = true;
    this.isFinished = false;
    this.isLocked = false;
    this._listeners = {
      data: [],
      end: [],
      error: []
    };
    this.previous = null;
  }
  GenericWorker.prototype = {
    push: function(chunk) {
      this.emit("data", chunk);
    },
    end: function() {
      if (this.isFinished) {
        return false;
      }
      this.flush();
      try {
        this.emit("end");
        this.cleanUp();
        this.isFinished = true;
      } catch (e) {
        this.emit("error", e);
      }
      return true;
    },
    error: function(e) {
      if (this.isFinished) {
        return false;
      }
      if (this.isPaused) {
        this.generatedError = e;
      } else {
        this.isFinished = true;
        this.emit("error", e);
        if (this.previous) {
          this.previous.error(e);
        }
        this.cleanUp();
      }
      return true;
    },
    on: function(name, listener) {
      this._listeners[name].push(listener);
      return this;
    },
    cleanUp: function() {
      this.streamInfo = this.generatedError = this.extraStreamInfo = null;
      this._listeners = [];
    },
    emit: function(name, arg) {
      if (this._listeners[name]) {
        for (var i = 0;i < this._listeners[name].length; i++) {
          this._listeners[name][i].call(this, arg);
        }
      }
    },
    pipe: function(next) {
      return next.registerPrevious(this);
    },
    registerPrevious: function(previous) {
      if (this.isLocked) {
        throw new Error("The stream '" + this + "' has already been used.");
      }
      this.streamInfo = previous.streamInfo;
      this.mergeStreamInfo();
      this.previous = previous;
      var self2 = this;
      previous.on("data", function(chunk) {
        self2.processChunk(chunk);
      });
      previous.on("end", function() {
        self2.end();
      });
      previous.on("error", function(e) {
        self2.error(e);
      });
      return this;
    },
    pause: function() {
      if (this.isPaused || this.isFinished) {
        return false;
      }
      this.isPaused = true;
      if (this.previous) {
        this.previous.pause();
      }
      return true;
    },
    resume: function() {
      if (!this.isPaused || this.isFinished) {
        return false;
      }
      this.isPaused = false;
      var withError = false;
      if (this.generatedError) {
        this.error(this.generatedError);
        withError = true;
      }
      if (this.previous) {
        this.previous.resume();
      }
      return !withError;
    },
    flush: function() {
    },
    processChunk: function(chunk) {
      this.push(chunk);
    },
    withStreamInfo: function(key, value) {
      this.extraStreamInfo[key] = value;
      this.mergeStreamInfo();
      return this;
    },
    mergeStreamInfo: function() {
      for (var key in this.extraStreamInfo) {
        if (!Object.prototype.hasOwnProperty.call(this.extraStreamInfo, key)) {
          continue;
        }
        this.streamInfo[key] = this.extraStreamInfo[key];
      }
    },
    lock: function() {
      if (this.isLocked) {
        throw new Error("The stream '" + this + "' has already been used.");
      }
      this.isLocked = true;
      if (this.previous) {
        this.previous.lock();
      }
    },
    toString: function() {
      var me = "Worker " + this.name;
      if (this.previous) {
        return this.previous + " -> " + me;
      } else {
        return me;
      }
    }
  };
  module.exports = GenericWorker;
});

// node_modules/jszip/lib/utf8.js
var require_utf8 = __commonJS((exports) => {
  function Utf8DecodeWorker() {
    GenericWorker.call(this, "utf-8 decode");
    this.leftOver = null;
  }
  function Utf8EncodeWorker() {
    GenericWorker.call(this, "utf-8 encode");
  }
  var utils = require_utils();
  var support = require_support();
  var nodejsUtils = require_nodejsUtils();
  var GenericWorker = require_GenericWorker();
  var _utf8len = new Array(256);
  for (i = 0;i < 256; i++) {
    _utf8len[i] = i >= 252 ? 6 : i >= 248 ? 5 : i >= 240 ? 4 : i >= 224 ? 3 : i >= 192 ? 2 : 1;
  }
  var i;
  _utf8len[254] = _utf8len[254] = 1;
  var string2buf = function(str) {
    var buf, c, c2, m_pos, i2, str_len = str.length, buf_len = 0;
    for (m_pos = 0;m_pos < str_len; m_pos++) {
      c = str.charCodeAt(m_pos);
      if ((c & 64512) === 55296 && m_pos + 1 < str_len) {
        c2 = str.charCodeAt(m_pos + 1);
        if ((c2 & 64512) === 56320) {
          c = 65536 + (c - 55296 << 10) + (c2 - 56320);
          m_pos++;
        }
      }
      buf_len += c < 128 ? 1 : c < 2048 ? 2 : c < 65536 ? 3 : 4;
    }
    if (support.uint8array) {
      buf = new Uint8Array(buf_len);
    } else {
      buf = new Array(buf_len);
    }
    for (i2 = 0, m_pos = 0;i2 < buf_len; m_pos++) {
      c = str.charCodeAt(m_pos);
      if ((c & 64512) === 55296 && m_pos + 1 < str_len) {
        c2 = str.charCodeAt(m_pos + 1);
        if ((c2 & 64512) === 56320) {
          c = 65536 + (c - 55296 << 10) + (c2 - 56320);
          m_pos++;
        }
      }
      if (c < 128) {
        buf[i2++] = c;
      } else if (c < 2048) {
        buf[i2++] = 192 | c >>> 6;
        buf[i2++] = 128 | c & 63;
      } else if (c < 65536) {
        buf[i2++] = 224 | c >>> 12;
        buf[i2++] = 128 | c >>> 6 & 63;
        buf[i2++] = 128 | c & 63;
      } else {
        buf[i2++] = 240 | c >>> 18;
        buf[i2++] = 128 | c >>> 12 & 63;
        buf[i2++] = 128 | c >>> 6 & 63;
        buf[i2++] = 128 | c & 63;
      }
    }
    return buf;
  };
  var utf8border = function(buf, max) {
    var pos;
    max = max || buf.length;
    if (max > buf.length) {
      max = buf.length;
    }
    pos = max - 1;
    while (pos >= 0 && (buf[pos] & 192) === 128) {
      pos--;
    }
    if (pos < 0) {
      return max;
    }
    if (pos === 0) {
      return max;
    }
    return pos + _utf8len[buf[pos]] > max ? pos : max;
  };
  var buf2string = function(buf) {
    var i2, out, c, c_len;
    var len = buf.length;
    var utf16buf = new Array(len * 2);
    for (out = 0, i2 = 0;i2 < len; ) {
      c = buf[i2++];
      if (c < 128) {
        utf16buf[out++] = c;
        continue;
      }
      c_len = _utf8len[c];
      if (c_len > 4) {
        utf16buf[out++] = 65533;
        i2 += c_len - 1;
        continue;
      }
      c &= c_len === 2 ? 31 : c_len === 3 ? 15 : 7;
      while (c_len > 1 && i2 < len) {
        c = c << 6 | buf[i2++] & 63;
        c_len--;
      }
      if (c_len > 1) {
        utf16buf[out++] = 65533;
        continue;
      }
      if (c < 65536) {
        utf16buf[out++] = c;
      } else {
        c -= 65536;
        utf16buf[out++] = 55296 | c >> 10 & 1023;
        utf16buf[out++] = 56320 | c & 1023;
      }
    }
    if (utf16buf.length !== out) {
      if (utf16buf.subarray) {
        utf16buf = utf16buf.subarray(0, out);
      } else {
        utf16buf.length = out;
      }
    }
    return utils.applyFromCharCode(utf16buf);
  };
  exports.utf8encode = function utf8encode(str) {
    if (support.nodebuffer) {
      return nodejsUtils.newBufferFrom(str, "utf-8");
    }
    return string2buf(str);
  };
  exports.utf8decode = function utf8decode(buf) {
    if (support.nodebuffer) {
      return utils.transformTo("nodebuffer", buf).toString("utf-8");
    }
    buf = utils.transformTo(support.uint8array ? "uint8array" : "array", buf);
    return buf2string(buf);
  };
  utils.inherits(Utf8DecodeWorker, GenericWorker);
  Utf8DecodeWorker.prototype.processChunk = function(chunk) {
    var data = utils.transformTo(support.uint8array ? "uint8array" : "array", chunk.data);
    if (this.leftOver && this.leftOver.length) {
      if (support.uint8array) {
        var previousData = data;
        data = new Uint8Array(previousData.length + this.leftOver.length);
        data.set(this.leftOver, 0);
        data.set(previousData, this.leftOver.length);
      } else {
        data = this.leftOver.concat(data);
      }
      this.leftOver = null;
    }
    var nextBoundary = utf8border(data);
    var usableData = data;
    if (nextBoundary !== data.length) {
      if (support.uint8array) {
        usableData = data.subarray(0, nextBoundary);
        this.leftOver = data.subarray(nextBoundary, data.length);
      } else {
        usableData = data.slice(0, nextBoundary);
        this.leftOver = data.slice(nextBoundary, data.length);
      }
    }
    this.push({
      data: exports.utf8decode(usableData),
      meta: chunk.meta
    });
  };
  Utf8DecodeWorker.prototype.flush = function() {
    if (this.leftOver && this.leftOver.length) {
      this.push({
        data: exports.utf8decode(this.leftOver),
        meta: {}
      });
      this.leftOver = null;
    }
  };
  exports.Utf8DecodeWorker = Utf8DecodeWorker;
  utils.inherits(Utf8EncodeWorker, GenericWorker);
  Utf8EncodeWorker.prototype.processChunk = function(chunk) {
    this.push({
      data: exports.utf8encode(chunk.data),
      meta: chunk.meta
    });
  };
  exports.Utf8EncodeWorker = Utf8EncodeWorker;
});

// node_modules/jszip/lib/stream/ConvertWorker.js
var require_ConvertWorker = __commonJS((exports, module) => {
  function ConvertWorker(destType) {
    GenericWorker.call(this, "ConvertWorker to " + destType);
    this.destType = destType;
  }
  var GenericWorker = require_GenericWorker();
  var utils = require_utils();
  utils.inherits(ConvertWorker, GenericWorker);
  ConvertWorker.prototype.processChunk = function(chunk) {
    this.push({
      data: utils.transformTo(this.destType, chunk.data),
      meta: chunk.meta
    });
  };
  module.exports = ConvertWorker;
});

// node_modules/jszip/lib/nodejs/NodejsStreamOutputAdapter.js
var require_NodejsStreamOutputAdapter = __commonJS((exports, module) => {
  function NodejsStreamOutputAdapter(helper, options, updateCb) {
    Readable.call(this, options);
    this._helper = helper;
    var self2 = this;
    helper.on("data", function(data, meta) {
      if (!self2.push(data)) {
        self2._helper.pause();
      }
      if (updateCb) {
        updateCb(meta);
      }
    }).on("error", function(e) {
      self2.emit("error", e);
    }).on("end", function() {
      self2.push(null);
    });
  }
  var Readable = (init_stream(), __toCommonJS(exports_stream)).Readable;
  var utils = require_utils();
  utils.inherits(NodejsStreamOutputAdapter, Readable);
  NodejsStreamOutputAdapter.prototype._read = function() {
    this._helper.resume();
  };
  module.exports = NodejsStreamOutputAdapter;
});

// node_modules/jszip/lib/stream/StreamHelper.js
var require_StreamHelper = __commonJS((exports, module) => {
  function transformZipOutput(type, content, mimeType) {
    switch (type) {
      case "blob":
        return utils.newBlob(utils.transformTo("arraybuffer", content), mimeType);
      case "base64":
        return base64.encode(content);
      default:
        return utils.transformTo(type, content);
    }
  }
  function concat(type, dataArray) {
    var i, index = 0, res = null, totalLength = 0;
    for (i = 0;i < dataArray.length; i++) {
      totalLength += dataArray[i].length;
    }
    switch (type) {
      case "string":
        return dataArray.join("");
      case "array":
        return Array.prototype.concat.apply([], dataArray);
      case "uint8array":
        res = new Uint8Array(totalLength);
        for (i = 0;i < dataArray.length; i++) {
          res.set(dataArray[i], index);
          index += dataArray[i].length;
        }
        return res;
      case "nodebuffer":
        return Buffer.concat(dataArray);
      default:
        throw new Error("concat : unsupported type '" + type + "'");
    }
  }
  function accumulate(helper, updateCallback) {
    return new external.Promise(function(resolve, reject) {
      var dataArray = [];
      var { _internalType: chunkType, _outputType: resultType, _mimeType: mimeType } = helper;
      helper.on("data", function(data, meta) {
        dataArray.push(data);
        if (updateCallback) {
          updateCallback(meta);
        }
      }).on("error", function(err) {
        dataArray = [];
        reject(err);
      }).on("end", function() {
        try {
          var result = transformZipOutput(resultType, concat(chunkType, dataArray), mimeType);
          resolve(result);
        } catch (e) {
          reject(e);
        }
        dataArray = [];
      }).resume();
    });
  }
  function StreamHelper(worker, outputType, mimeType) {
    var internalType = outputType;
    switch (outputType) {
      case "blob":
      case "arraybuffer":
        internalType = "uint8array";
        break;
      case "base64":
        internalType = "string";
        break;
    }
    try {
      this._internalType = internalType;
      this._outputType = outputType;
      this._mimeType = mimeType;
      utils.checkSupport(internalType);
      this._worker = worker.pipe(new ConvertWorker(internalType));
      worker.lock();
    } catch (e) {
      this._worker = new GenericWorker("error");
      this._worker.error(e);
    }
  }
  var utils = require_utils();
  var ConvertWorker = require_ConvertWorker();
  var GenericWorker = require_GenericWorker();
  var base64 = require_base64();
  var support = require_support();
  var external = require_external();
  var NodejsStreamOutputAdapter = null;
  if (support.nodestream) {
    try {
      NodejsStreamOutputAdapter = require_NodejsStreamOutputAdapter();
    } catch (e) {
    }
  }
  StreamHelper.prototype = {
    accumulate: function(updateCb) {
      return accumulate(this, updateCb);
    },
    on: function(evt, fn) {
      var self2 = this;
      if (evt === "data") {
        this._worker.on(evt, function(chunk) {
          fn.call(self2, chunk.data, chunk.meta);
        });
      } else {
        this._worker.on(evt, function() {
          utils.delay(fn, arguments, self2);
        });
      }
      return this;
    },
    resume: function() {
      utils.delay(this._worker.resume, [], this._worker);
      return this;
    },
    pause: function() {
      this._worker.pause();
      return this;
    },
    toNodejsStream: function(updateCb) {
      utils.checkSupport("nodestream");
      if (this._outputType !== "nodebuffer") {
        throw new Error(this._outputType + " is not supported by this method");
      }
      return new NodejsStreamOutputAdapter(this, {
        objectMode: this._outputType !== "nodebuffer"
      }, updateCb);
    }
  };
  module.exports = StreamHelper;
});

// node_modules/jszip/lib/defaults.js
var require_defaults = __commonJS((exports) => {
  exports.base64 = false;
  exports.binary = false;
  exports.dir = false;
  exports.createFolders = true;
  exports.date = null;
  exports.compression = null;
  exports.compressionOptions = null;
  exports.comment = null;
  exports.unixPermissions = null;
  exports.dosPermissions = null;
});

// node_modules/jszip/lib/stream/DataWorker.js
var require_DataWorker = __commonJS((exports, module) => {
  function DataWorker(dataP) {
    GenericWorker.call(this, "DataWorker");
    var self2 = this;
    this.dataIsReady = false;
    this.index = 0;
    this.max = 0;
    this.data = null;
    this.type = "";
    this._tickScheduled = false;
    dataP.then(function(data) {
      self2.dataIsReady = true;
      self2.data = data;
      self2.max = data && data.length || 0;
      self2.type = utils.getTypeOf(data);
      if (!self2.isPaused) {
        self2._tickAndRepeat();
      }
    }, function(e) {
      self2.error(e);
    });
  }
  var utils = require_utils();
  var GenericWorker = require_GenericWorker();
  var DEFAULT_BLOCK_SIZE = 16 * 1024;
  utils.inherits(DataWorker, GenericWorker);
  DataWorker.prototype.cleanUp = function() {
    GenericWorker.prototype.cleanUp.call(this);
    this.data = null;
  };
  DataWorker.prototype.resume = function() {
    if (!GenericWorker.prototype.resume.call(this)) {
      return false;
    }
    if (!this._tickScheduled && this.dataIsReady) {
      this._tickScheduled = true;
      utils.delay(this._tickAndRepeat, [], this);
    }
    return true;
  };
  DataWorker.prototype._tickAndRepeat = function() {
    this._tickScheduled = false;
    if (this.isPaused || this.isFinished) {
      return;
    }
    this._tick();
    if (!this.isFinished) {
      utils.delay(this._tickAndRepeat, [], this);
      this._tickScheduled = true;
    }
  };
  DataWorker.prototype._tick = function() {
    if (this.isPaused || this.isFinished) {
      return false;
    }
    var size = DEFAULT_BLOCK_SIZE;
    var data = null, nextIndex = Math.min(this.max, this.index + size);
    if (this.index >= this.max) {
      return this.end();
    } else {
      switch (this.type) {
        case "string":
          data = this.data.substring(this.index, nextIndex);
          break;
        case "uint8array":
          data = this.data.subarray(this.index, nextIndex);
          break;
        case "array":
        case "nodebuffer":
          data = this.data.slice(this.index, nextIndex);
          break;
      }
      this.index = nextIndex;
      return this.push({
        data,
        meta: {
          percent: this.max ? this.index / this.max * 100 : 0
        }
      });
    }
  };
  module.exports = DataWorker;
});

// node_modules/jszip/lib/crc32.js
var require_crc32 = __commonJS((exports, module) => {
  function makeTable() {
    var c, table = [];
    for (var n = 0;n < 256; n++) {
      c = n;
      for (var k2 = 0;k2 < 8; k2++) {
        c = c & 1 ? 3988292384 ^ c >>> 1 : c >>> 1;
      }
      table[n] = c;
    }
    return table;
  }
  function crc32(crc, buf, len, pos) {
    var t = crcTable, end = pos + len;
    crc = crc ^ -1;
    for (var i = pos;i < end; i++) {
      crc = crc >>> 8 ^ t[(crc ^ buf[i]) & 255];
    }
    return crc ^ -1;
  }
  function crc32str(crc, str, len, pos) {
    var t = crcTable, end = pos + len;
    crc = crc ^ -1;
    for (var i = pos;i < end; i++) {
      crc = crc >>> 8 ^ t[(crc ^ str.charCodeAt(i)) & 255];
    }
    return crc ^ -1;
  }
  var utils = require_utils();
  var crcTable = makeTable();
  module.exports = function crc32wrapper(input, crc) {
    if (typeof input === "undefined" || !input.length) {
      return 0;
    }
    var isArray = utils.getTypeOf(input) !== "string";
    if (isArray) {
      return crc32(crc | 0, input, input.length, 0);
    } else {
      return crc32str(crc | 0, input, input.length, 0);
    }
  };
});

// node_modules/jszip/lib/stream/Crc32Probe.js
var require_Crc32Probe = __commonJS((exports, module) => {
  function Crc32Probe() {
    GenericWorker.call(this, "Crc32Probe");
    this.withStreamInfo("crc32", 0);
  }
  var GenericWorker = require_GenericWorker();
  var crc32 = require_crc32();
  var utils = require_utils();
  utils.inherits(Crc32Probe, GenericWorker);
  Crc32Probe.prototype.processChunk = function(chunk) {
    this.streamInfo.crc32 = crc32(chunk.data, this.streamInfo.crc32 || 0);
    this.push(chunk);
  };
  module.exports = Crc32Probe;
});

// node_modules/jszip/lib/stream/DataLengthProbe.js
var require_DataLengthProbe = __commonJS((exports, module) => {
  function DataLengthProbe(propName) {
    GenericWorker.call(this, "DataLengthProbe for " + propName);
    this.propName = propName;
    this.withStreamInfo(propName, 0);
  }
  var utils = require_utils();
  var GenericWorker = require_GenericWorker();
  utils.inherits(DataLengthProbe, GenericWorker);
  DataLengthProbe.prototype.processChunk = function(chunk) {
    if (chunk) {
      var length = this.streamInfo[this.propName] || 0;
      this.streamInfo[this.propName] = length + chunk.data.length;
    }
    GenericWorker.prototype.processChunk.call(this, chunk);
  };
  module.exports = DataLengthProbe;
});

// node_modules/jszip/lib/compressedObject.js
var require_compressedObject = __commonJS((exports, module) => {
  function CompressedObject(compressedSize, uncompressedSize, crc32, compression, data) {
    this.compressedSize = compressedSize;
    this.uncompressedSize = uncompressedSize;
    this.crc32 = crc32;
    this.compression = compression;
    this.compressedContent = data;
  }
  var external = require_external();
  var DataWorker = require_DataWorker();
  var Crc32Probe = require_Crc32Probe();
  var DataLengthProbe = require_DataLengthProbe();
  CompressedObject.prototype = {
    getContentWorker: function() {
      var worker = new DataWorker(external.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new DataLengthProbe("data_length"));
      var that = this;
      worker.on("end", function() {
        if (this.streamInfo["data_length"] !== that.uncompressedSize) {
          throw new Error("Bug : uncompressed data size mismatch");
        }
      });
      return worker;
    },
    getCompressedWorker: function() {
      return new DataWorker(external.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize", this.compressedSize).withStreamInfo("uncompressedSize", this.uncompressedSize).withStreamInfo("crc32", this.crc32).withStreamInfo("compression", this.compression);
    }
  };
  CompressedObject.createWorkerFrom = function(uncompressedWorker, compression, compressionOptions) {
    return uncompressedWorker.pipe(new Crc32Probe).pipe(new DataLengthProbe("uncompressedSize")).pipe(compression.compressWorker(compressionOptions)).pipe(new DataLengthProbe("compressedSize")).withStreamInfo("compression", compression);
  };
  module.exports = CompressedObject;
});

// node_modules/jszip/lib/zipObject.js
var require_zipObject = __commonJS((exports, module) => {
  var StreamHelper = require_StreamHelper();
  var DataWorker = require_DataWorker();
  var utf8 = require_utf8();
  var CompressedObject = require_compressedObject();
  var GenericWorker = require_GenericWorker();
  var ZipObject = function(name, data, options) {
    this.name = name;
    this.dir = options.dir;
    this.date = options.date;
    this.comment = options.comment;
    this.unixPermissions = options.unixPermissions;
    this.dosPermissions = options.dosPermissions;
    this._data = data;
    this._dataBinary = options.binary;
    this.options = {
      compression: options.compression,
      compressionOptions: options.compressionOptions
    };
  };
  ZipObject.prototype = {
    internalStream: function(type) {
      var result = null, outputType = "string";
      try {
        if (!type) {
          throw new Error("No output type specified.");
        }
        outputType = type.toLowerCase();
        var askUnicodeString = outputType === "string" || outputType === "text";
        if (outputType === "binarystring" || outputType === "text") {
          outputType = "string";
        }
        result = this._decompressWorker();
        var isUnicodeString = !this._dataBinary;
        if (isUnicodeString && !askUnicodeString) {
          result = result.pipe(new utf8.Utf8EncodeWorker);
        }
        if (!isUnicodeString && askUnicodeString) {
          result = result.pipe(new utf8.Utf8DecodeWorker);
        }
      } catch (e) {
        result = new GenericWorker("error");
        result.error(e);
      }
      return new StreamHelper(result, outputType, "");
    },
    async: function(type, onUpdate) {
      return this.internalStream(type).accumulate(onUpdate);
    },
    nodeStream: function(type, onUpdate) {
      return this.internalStream(type || "nodebuffer").toNodejsStream(onUpdate);
    },
    _compressWorker: function(compression, compressionOptions) {
      if (this._data instanceof CompressedObject && this._data.compression.magic === compression.magic) {
        return this._data.getCompressedWorker();
      } else {
        var result = this._decompressWorker();
        if (!this._dataBinary) {
          result = result.pipe(new utf8.Utf8EncodeWorker);
        }
        return CompressedObject.createWorkerFrom(result, compression, compressionOptions);
      }
    },
    _decompressWorker: function() {
      if (this._data instanceof CompressedObject) {
        return this._data.getContentWorker();
      } else if (this._data instanceof GenericWorker) {
        return this._data;
      } else {
        return new DataWorker(this._data);
      }
    }
  };
  var removedMethods = ["asText", "asBinary", "asNodeBuffer", "asUint8Array", "asArrayBuffer"];
  var removedFn = function() {
    throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
  };
  for (i = 0;i < removedMethods.length; i++) {
    ZipObject.prototype[removedMethods[i]] = removedFn;
  }
  var i;
  module.exports = ZipObject;
});

// node_modules/pako/lib/utils/common.js
var require_common = __commonJS((exports) => {
  function _has(obj, key) {
    return Object.prototype.hasOwnProperty.call(obj, key);
  }
  var TYPED_OK = typeof Uint8Array !== "undefined" && typeof Uint16Array !== "undefined" && typeof Int32Array !== "undefined";
  exports.assign = function(obj) {
    var sources = Array.prototype.slice.call(arguments, 1);
    while (sources.length) {
      var source = sources.shift();
      if (!source) {
        continue;
      }
      if (typeof source !== "object") {
        throw new TypeError(source + "must be non-object");
      }
      for (var p in source) {
        if (_has(source, p)) {
          obj[p] = source[p];
        }
      }
    }
    return obj;
  };
  exports.shrinkBuf = function(buf, size) {
    if (buf.length === size) {
      return buf;
    }
    if (buf.subarray) {
      return buf.subarray(0, size);
    }
    buf.length = size;
    return buf;
  };
  var fnTyped = {
    arraySet: function(dest, src, src_offs, len, dest_offs) {
      if (src.subarray && dest.subarray) {
        dest.set(src.subarray(src_offs, src_offs + len), dest_offs);
        return;
      }
      for (var i = 0;i < len; i++) {
        dest[dest_offs + i] = src[src_offs + i];
      }
    },
    flattenChunks: function(chunks) {
      var i, l, len, pos, chunk, result;
      len = 0;
      for (i = 0, l = chunks.length;i < l; i++) {
        len += chunks[i].length;
      }
      result = new Uint8Array(len);
      pos = 0;
      for (i = 0, l = chunks.length;i < l; i++) {
        chunk = chunks[i];
        result.set(chunk, pos);
        pos += chunk.length;
      }
      return result;
    }
  };
  var fnUntyped = {
    arraySet: function(dest, src, src_offs, len, dest_offs) {
      for (var i = 0;i < len; i++) {
        dest[dest_offs + i] = src[src_offs + i];
      }
    },
    flattenChunks: function(chunks) {
      return [].concat.apply([], chunks);
    }
  };
  exports.setTyped = function(on) {
    if (on) {
      exports.Buf8 = Uint8Array;
      exports.Buf16 = Uint16Array;
      exports.Buf32 = Int32Array;
      exports.assign(exports, fnTyped);
    } else {
      exports.Buf8 = Array;
      exports.Buf16 = Array;
      exports.Buf32 = Array;
      exports.assign(exports, fnUntyped);
    }
  };
  exports.setTyped(TYPED_OK);
});

// node_modules/pako/lib/zlib/trees.js
var require_trees = __commonJS((exports) => {
  function zero(buf) {
    var len = buf.length;
    while (--len >= 0) {
      buf[len] = 0;
    }
  }
  function StaticTreeDesc(static_tree, extra_bits, extra_base, elems, max_length) {
    this.static_tree = static_tree;
    this.extra_bits = extra_bits;
    this.extra_base = extra_base;
    this.elems = elems;
    this.max_length = max_length;
    this.has_stree = static_tree && static_tree.length;
  }
  function TreeDesc(dyn_tree, stat_desc) {
    this.dyn_tree = dyn_tree;
    this.max_code = 0;
    this.stat_desc = stat_desc;
  }
  function d_code(dist) {
    return dist < 256 ? _dist_code[dist] : _dist_code[256 + (dist >>> 7)];
  }
  function put_short(s, w) {
    s.pending_buf[s.pending++] = w & 255;
    s.pending_buf[s.pending++] = w >>> 8 & 255;
  }
  function send_bits(s, value, length) {
    if (s.bi_valid > Buf_size - length) {
      s.bi_buf |= value << s.bi_valid & 65535;
      put_short(s, s.bi_buf);
      s.bi_buf = value >> Buf_size - s.bi_valid;
      s.bi_valid += length - Buf_size;
    } else {
      s.bi_buf |= value << s.bi_valid & 65535;
      s.bi_valid += length;
    }
  }
  function send_code(s, c, tree) {
    send_bits(s, tree[c * 2], tree[c * 2 + 1]);
  }
  function bi_reverse(code, len) {
    var res = 0;
    do {
      res |= code & 1;
      code >>>= 1;
      res <<= 1;
    } while (--len > 0);
    return res >>> 1;
  }
  function bi_flush(s) {
    if (s.bi_valid === 16) {
      put_short(s, s.bi_buf);
      s.bi_buf = 0;
      s.bi_valid = 0;
    } else if (s.bi_valid >= 8) {
      s.pending_buf[s.pending++] = s.bi_buf & 255;
      s.bi_buf >>= 8;
      s.bi_valid -= 8;
    }
  }
  function gen_bitlen(s, desc) {
    var tree = desc.dyn_tree;
    var max_code = desc.max_code;
    var stree = desc.stat_desc.static_tree;
    var has_stree = desc.stat_desc.has_stree;
    var extra = desc.stat_desc.extra_bits;
    var base = desc.stat_desc.extra_base;
    var max_length = desc.stat_desc.max_length;
    var h;
    var n, m;
    var bits;
    var xbits;
    var f;
    var overflow = 0;
    for (bits = 0;bits <= MAX_BITS; bits++) {
      s.bl_count[bits] = 0;
    }
    tree[s.heap[s.heap_max] * 2 + 1] = 0;
    for (h = s.heap_max + 1;h < HEAP_SIZE; h++) {
      n = s.heap[h];
      bits = tree[tree[n * 2 + 1] * 2 + 1] + 1;
      if (bits > max_length) {
        bits = max_length;
        overflow++;
      }
      tree[n * 2 + 1] = bits;
      if (n > max_code) {
        continue;
      }
      s.bl_count[bits]++;
      xbits = 0;
      if (n >= base) {
        xbits = extra[n - base];
      }
      f = tree[n * 2];
      s.opt_len += f * (bits + xbits);
      if (has_stree) {
        s.static_len += f * (stree[n * 2 + 1] + xbits);
      }
    }
    if (overflow === 0) {
      return;
    }
    do {
      bits = max_length - 1;
      while (s.bl_count[bits] === 0) {
        bits--;
      }
      s.bl_count[bits]--;
      s.bl_count[bits + 1] += 2;
      s.bl_count[max_length]--;
      overflow -= 2;
    } while (overflow > 0);
    for (bits = max_length;bits !== 0; bits--) {
      n = s.bl_count[bits];
      while (n !== 0) {
        m = s.heap[--h];
        if (m > max_code) {
          continue;
        }
        if (tree[m * 2 + 1] !== bits) {
          s.opt_len += (bits - tree[m * 2 + 1]) * tree[m * 2];
          tree[m * 2 + 1] = bits;
        }
        n--;
      }
    }
  }
  function gen_codes(tree, max_code, bl_count) {
    var next_code = new Array(MAX_BITS + 1);
    var code = 0;
    var bits;
    var n;
    for (bits = 1;bits <= MAX_BITS; bits++) {
      next_code[bits] = code = code + bl_count[bits - 1] << 1;
    }
    for (n = 0;n <= max_code; n++) {
      var len = tree[n * 2 + 1];
      if (len === 0) {
        continue;
      }
      tree[n * 2] = bi_reverse(next_code[len]++, len);
    }
  }
  function tr_static_init() {
    var n;
    var bits;
    var length;
    var code;
    var dist;
    var bl_count = new Array(MAX_BITS + 1);
    length = 0;
    for (code = 0;code < LENGTH_CODES - 1; code++) {
      base_length[code] = length;
      for (n = 0;n < 1 << extra_lbits[code]; n++) {
        _length_code[length++] = code;
      }
    }
    _length_code[length - 1] = code;
    dist = 0;
    for (code = 0;code < 16; code++) {
      base_dist[code] = dist;
      for (n = 0;n < 1 << extra_dbits[code]; n++) {
        _dist_code[dist++] = code;
      }
    }
    dist >>= 7;
    for (;code < D_CODES; code++) {
      base_dist[code] = dist << 7;
      for (n = 0;n < 1 << extra_dbits[code] - 7; n++) {
        _dist_code[256 + dist++] = code;
      }
    }
    for (bits = 0;bits <= MAX_BITS; bits++) {
      bl_count[bits] = 0;
    }
    n = 0;
    while (n <= 143) {
      static_ltree[n * 2 + 1] = 8;
      n++;
      bl_count[8]++;
    }
    while (n <= 255) {
      static_ltree[n * 2 + 1] = 9;
      n++;
      bl_count[9]++;
    }
    while (n <= 279) {
      static_ltree[n * 2 + 1] = 7;
      n++;
      bl_count[7]++;
    }
    while (n <= 287) {
      static_ltree[n * 2 + 1] = 8;
      n++;
      bl_count[8]++;
    }
    gen_codes(static_ltree, L_CODES + 1, bl_count);
    for (n = 0;n < D_CODES; n++) {
      static_dtree[n * 2 + 1] = 5;
      static_dtree[n * 2] = bi_reverse(n, 5);
    }
    static_l_desc = new StaticTreeDesc(static_ltree, extra_lbits, LITERALS + 1, L_CODES, MAX_BITS);
    static_d_desc = new StaticTreeDesc(static_dtree, extra_dbits, 0, D_CODES, MAX_BITS);
    static_bl_desc = new StaticTreeDesc(new Array(0), extra_blbits, 0, BL_CODES, MAX_BL_BITS);
  }
  function init_block(s) {
    var n;
    for (n = 0;n < L_CODES; n++) {
      s.dyn_ltree[n * 2] = 0;
    }
    for (n = 0;n < D_CODES; n++) {
      s.dyn_dtree[n * 2] = 0;
    }
    for (n = 0;n < BL_CODES; n++) {
      s.bl_tree[n * 2] = 0;
    }
    s.dyn_ltree[END_BLOCK * 2] = 1;
    s.opt_len = s.static_len = 0;
    s.last_lit = s.matches = 0;
  }
  function bi_windup(s) {
    if (s.bi_valid > 8) {
      put_short(s, s.bi_buf);
    } else if (s.bi_valid > 0) {
      s.pending_buf[s.pending++] = s.bi_buf;
    }
    s.bi_buf = 0;
    s.bi_valid = 0;
  }
  function copy_block(s, buf, len, header) {
    bi_windup(s);
    if (header) {
      put_short(s, len);
      put_short(s, ~len);
    }
    utils.arraySet(s.pending_buf, s.window, buf, len, s.pending);
    s.pending += len;
  }
  function smaller(tree, n, m, depth) {
    var _n2 = n * 2;
    var _m2 = m * 2;
    return tree[_n2] < tree[_m2] || tree[_n2] === tree[_m2] && depth[n] <= depth[m];
  }
  function pqdownheap(s, tree, k2) {
    var v = s.heap[k2];
    var j = k2 << 1;
    while (j <= s.heap_len) {
      if (j < s.heap_len && smaller(tree, s.heap[j + 1], s.heap[j], s.depth)) {
        j++;
      }
      if (smaller(tree, v, s.heap[j], s.depth)) {
        break;
      }
      s.heap[k2] = s.heap[j];
      k2 = j;
      j <<= 1;
    }
    s.heap[k2] = v;
  }
  function compress_block(s, ltree, dtree) {
    var dist;
    var lc;
    var lx = 0;
    var code;
    var extra;
    if (s.last_lit !== 0) {
      do {
        dist = s.pending_buf[s.d_buf + lx * 2] << 8 | s.pending_buf[s.d_buf + lx * 2 + 1];
        lc = s.pending_buf[s.l_buf + lx];
        lx++;
        if (dist === 0) {
          send_code(s, lc, ltree);
        } else {
          code = _length_code[lc];
          send_code(s, code + LITERALS + 1, ltree);
          extra = extra_lbits[code];
          if (extra !== 0) {
            lc -= base_length[code];
            send_bits(s, lc, extra);
          }
          dist--;
          code = d_code(dist);
          send_code(s, code, dtree);
          extra = extra_dbits[code];
          if (extra !== 0) {
            dist -= base_dist[code];
            send_bits(s, dist, extra);
          }
        }
      } while (lx < s.last_lit);
    }
    send_code(s, END_BLOCK, ltree);
  }
  function build_tree(s, desc) {
    var tree = desc.dyn_tree;
    var stree = desc.stat_desc.static_tree;
    var has_stree = desc.stat_desc.has_stree;
    var elems = desc.stat_desc.elems;
    var n, m;
    var max_code = -1;
    var node;
    s.heap_len = 0;
    s.heap_max = HEAP_SIZE;
    for (n = 0;n < elems; n++) {
      if (tree[n * 2] !== 0) {
        s.heap[++s.heap_len] = max_code = n;
        s.depth[n] = 0;
      } else {
        tree[n * 2 + 1] = 0;
      }
    }
    while (s.heap_len < 2) {
      node = s.heap[++s.heap_len] = max_code < 2 ? ++max_code : 0;
      tree[node * 2] = 1;
      s.depth[node] = 0;
      s.opt_len--;
      if (has_stree) {
        s.static_len -= stree[node * 2 + 1];
      }
    }
    desc.max_code = max_code;
    for (n = s.heap_len >> 1;n >= 1; n--) {
      pqdownheap(s, tree, n);
    }
    node = elems;
    do {
      n = s.heap[1];
      s.heap[1] = s.heap[s.heap_len--];
      pqdownheap(s, tree, 1);
      m = s.heap[1];
      s.heap[--s.heap_max] = n;
      s.heap[--s.heap_max] = m;
      tree[node * 2] = tree[n * 2] + tree[m * 2];
      s.depth[node] = (s.depth[n] >= s.depth[m] ? s.depth[n] : s.depth[m]) + 1;
      tree[n * 2 + 1] = tree[m * 2 + 1] = node;
      s.heap[1] = node++;
      pqdownheap(s, tree, 1);
    } while (s.heap_len >= 2);
    s.heap[--s.heap_max] = s.heap[1];
    gen_bitlen(s, desc);
    gen_codes(tree, max_code, s.bl_count);
  }
  function scan_tree(s, tree, max_code) {
    var n;
    var prevlen = -1;
    var curlen;
    var nextlen = tree[0 * 2 + 1];
    var count = 0;
    var max_count = 7;
    var min_count = 4;
    if (nextlen === 0) {
      max_count = 138;
      min_count = 3;
    }
    tree[(max_code + 1) * 2 + 1] = 65535;
    for (n = 0;n <= max_code; n++) {
      curlen = nextlen;
      nextlen = tree[(n + 1) * 2 + 1];
      if (++count < max_count && curlen === nextlen) {
        continue;
      } else if (count < min_count) {
        s.bl_tree[curlen * 2] += count;
      } else if (curlen !== 0) {
        if (curlen !== prevlen) {
          s.bl_tree[curlen * 2]++;
        }
        s.bl_tree[REP_3_6 * 2]++;
      } else if (count <= 10) {
        s.bl_tree[REPZ_3_10 * 2]++;
      } else {
        s.bl_tree[REPZ_11_138 * 2]++;
      }
      count = 0;
      prevlen = curlen;
      if (nextlen === 0) {
        max_count = 138;
        min_count = 3;
      } else if (curlen === nextlen) {
        max_count = 6;
        min_count = 3;
      } else {
        max_count = 7;
        min_count = 4;
      }
    }
  }
  function send_tree(s, tree, max_code) {
    var n;
    var prevlen = -1;
    var curlen;
    var nextlen = tree[0 * 2 + 1];
    var count = 0;
    var max_count = 7;
    var min_count = 4;
    if (nextlen === 0) {
      max_count = 138;
      min_count = 3;
    }
    for (n = 0;n <= max_code; n++) {
      curlen = nextlen;
      nextlen = tree[(n + 1) * 2 + 1];
      if (++count < max_count && curlen === nextlen) {
        continue;
      } else if (count < min_count) {
        do {
          send_code(s, curlen, s.bl_tree);
        } while (--count !== 0);
      } else if (curlen !== 0) {
        if (curlen !== prevlen) {
          send_code(s, curlen, s.bl_tree);
          count--;
        }
        send_code(s, REP_3_6, s.bl_tree);
        send_bits(s, count - 3, 2);
      } else if (count <= 10) {
        send_code(s, REPZ_3_10, s.bl_tree);
        send_bits(s, count - 3, 3);
      } else {
        send_code(s, REPZ_11_138, s.bl_tree);
        send_bits(s, count - 11, 7);
      }
      count = 0;
      prevlen = curlen;
      if (nextlen === 0) {
        max_count = 138;
        min_count = 3;
      } else if (curlen === nextlen) {
        max_count = 6;
        min_count = 3;
      } else {
        max_count = 7;
        min_count = 4;
      }
    }
  }
  function build_bl_tree(s) {
    var max_blindex;
    scan_tree(s, s.dyn_ltree, s.l_desc.max_code);
    scan_tree(s, s.dyn_dtree, s.d_desc.max_code);
    build_tree(s, s.bl_desc);
    for (max_blindex = BL_CODES - 1;max_blindex >= 3; max_blindex--) {
      if (s.bl_tree[bl_order[max_blindex] * 2 + 1] !== 0) {
        break;
      }
    }
    s.opt_len += 3 * (max_blindex + 1) + 5 + 5 + 4;
    return max_blindex;
  }
  function send_all_trees(s, lcodes, dcodes, blcodes) {
    var rank;
    send_bits(s, lcodes - 257, 5);
    send_bits(s, dcodes - 1, 5);
    send_bits(s, blcodes - 4, 4);
    for (rank = 0;rank < blcodes; rank++) {
      send_bits(s, s.bl_tree[bl_order[rank] * 2 + 1], 3);
    }
    send_tree(s, s.dyn_ltree, lcodes - 1);
    send_tree(s, s.dyn_dtree, dcodes - 1);
  }
  function detect_data_type(s) {
    var black_mask = 4093624447;
    var n;
    for (n = 0;n <= 31; n++, black_mask >>>= 1) {
      if (black_mask & 1 && s.dyn_ltree[n * 2] !== 0) {
        return Z_BINARY;
      }
    }
    if (s.dyn_ltree[9 * 2] !== 0 || s.dyn_ltree[10 * 2] !== 0 || s.dyn_ltree[13 * 2] !== 0) {
      return Z_TEXT;
    }
    for (n = 32;n < LITERALS; n++) {
      if (s.dyn_ltree[n * 2] !== 0) {
        return Z_TEXT;
      }
    }
    return Z_BINARY;
  }
  function _tr_init(s) {
    if (!static_init_done) {
      tr_static_init();
      static_init_done = true;
    }
    s.l_desc = new TreeDesc(s.dyn_ltree, static_l_desc);
    s.d_desc = new TreeDesc(s.dyn_dtree, static_d_desc);
    s.bl_desc = new TreeDesc(s.bl_tree, static_bl_desc);
    s.bi_buf = 0;
    s.bi_valid = 0;
    init_block(s);
  }
  function _tr_stored_block(s, buf, stored_len, last) {
    send_bits(s, (STORED_BLOCK << 1) + (last ? 1 : 0), 3);
    copy_block(s, buf, stored_len, true);
  }
  function _tr_align(s) {
    send_bits(s, STATIC_TREES << 1, 3);
    send_code(s, END_BLOCK, static_ltree);
    bi_flush(s);
  }
  function _tr_flush_block(s, buf, stored_len, last) {
    var opt_lenb, static_lenb;
    var max_blindex = 0;
    if (s.level > 0) {
      if (s.strm.data_type === Z_UNKNOWN) {
        s.strm.data_type = detect_data_type(s);
      }
      build_tree(s, s.l_desc);
      build_tree(s, s.d_desc);
      max_blindex = build_bl_tree(s);
      opt_lenb = s.opt_len + 3 + 7 >>> 3;
      static_lenb = s.static_len + 3 + 7 >>> 3;
      if (static_lenb <= opt_lenb) {
        opt_lenb = static_lenb;
      }
    } else {
      opt_lenb = static_lenb = stored_len + 5;
    }
    if (stored_len + 4 <= opt_lenb && buf !== -1) {
      _tr_stored_block(s, buf, stored_len, last);
    } else if (s.strategy === Z_FIXED || static_lenb === opt_lenb) {
      send_bits(s, (STATIC_TREES << 1) + (last ? 1 : 0), 3);
      compress_block(s, static_ltree, static_dtree);
    } else {
      send_bits(s, (DYN_TREES << 1) + (last ? 1 : 0), 3);
      send_all_trees(s, s.l_desc.max_code + 1, s.d_desc.max_code + 1, max_blindex + 1);
      compress_block(s, s.dyn_ltree, s.dyn_dtree);
    }
    init_block(s);
    if (last) {
      bi_windup(s);
    }
  }
  function _tr_tally(s, dist, lc) {
    s.pending_buf[s.d_buf + s.last_lit * 2] = dist >>> 8 & 255;
    s.pending_buf[s.d_buf + s.last_lit * 2 + 1] = dist & 255;
    s.pending_buf[s.l_buf + s.last_lit] = lc & 255;
    s.last_lit++;
    if (dist === 0) {
      s.dyn_ltree[lc * 2]++;
    } else {
      s.matches++;
      dist--;
      s.dyn_ltree[(_length_code[lc] + LITERALS + 1) * 2]++;
      s.dyn_dtree[d_code(dist) * 2]++;
    }
    return s.last_lit === s.lit_bufsize - 1;
  }
  var utils = require_common();
  var Z_FIXED = 4;
  var Z_BINARY = 0;
  var Z_TEXT = 1;
  var Z_UNKNOWN = 2;
  var STORED_BLOCK = 0;
  var STATIC_TREES = 1;
  var DYN_TREES = 2;
  var MIN_MATCH = 3;
  var MAX_MATCH = 258;
  var LENGTH_CODES = 29;
  var LITERALS = 256;
  var L_CODES = LITERALS + 1 + LENGTH_CODES;
  var D_CODES = 30;
  var BL_CODES = 19;
  var HEAP_SIZE = 2 * L_CODES + 1;
  var MAX_BITS = 15;
  var Buf_size = 16;
  var MAX_BL_BITS = 7;
  var END_BLOCK = 256;
  var REP_3_6 = 16;
  var REPZ_3_10 = 17;
  var REPZ_11_138 = 18;
  var extra_lbits = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0];
  var extra_dbits = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13];
  var extra_blbits = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7];
  var bl_order = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
  var DIST_CODE_LEN = 512;
  var static_ltree = new Array((L_CODES + 2) * 2);
  zero(static_ltree);
  var static_dtree = new Array(D_CODES * 2);
  zero(static_dtree);
  var _dist_code = new Array(DIST_CODE_LEN);
  zero(_dist_code);
  var _length_code = new Array(MAX_MATCH - MIN_MATCH + 1);
  zero(_length_code);
  var base_length = new Array(LENGTH_CODES);
  zero(base_length);
  var base_dist = new Array(D_CODES);
  zero(base_dist);
  var static_l_desc;
  var static_d_desc;
  var static_bl_desc;
  var static_init_done = false;
  exports._tr_init = _tr_init;
  exports._tr_stored_block = _tr_stored_block;
  exports._tr_flush_block = _tr_flush_block;
  exports._tr_tally = _tr_tally;
  exports._tr_align = _tr_align;
});

// node_modules/pako/lib/zlib/adler32.js
var require_adler32 = __commonJS((exports, module) => {
  function adler32(adler, buf, len, pos) {
    var s1 = adler & 65535 | 0, s2 = adler >>> 16 & 65535 | 0, n = 0;
    while (len !== 0) {
      n = len > 2000 ? 2000 : len;
      len -= n;
      do {
        s1 = s1 + buf[pos++] | 0;
        s2 = s2 + s1 | 0;
      } while (--n);
      s1 %= 65521;
      s2 %= 65521;
    }
    return s1 | s2 << 16 | 0;
  }
  module.exports = adler32;
});

// node_modules/pako/lib/zlib/crc32.js
var require_crc322 = __commonJS((exports, module) => {
  function makeTable() {
    var c, table = [];
    for (var n = 0;n < 256; n++) {
      c = n;
      for (var k2 = 0;k2 < 8; k2++) {
        c = c & 1 ? 3988292384 ^ c >>> 1 : c >>> 1;
      }
      table[n] = c;
    }
    return table;
  }
  function crc32(crc, buf, len, pos) {
    var t = crcTable, end = pos + len;
    crc ^= -1;
    for (var i = pos;i < end; i++) {
      crc = crc >>> 8 ^ t[(crc ^ buf[i]) & 255];
    }
    return crc ^ -1;
  }
  var crcTable = makeTable();
  module.exports = crc32;
});

// node_modules/pako/lib/zlib/messages.js
var require_messages = __commonJS((exports, module) => {
  module.exports = {
    2: "need dictionary",
    1: "stream end",
    0: "",
    "-1": "file error",
    "-2": "stream error",
    "-3": "data error",
    "-4": "insufficient memory",
    "-5": "buffer error",
    "-6": "incompatible version"
  };
});

// node_modules/pako/lib/zlib/deflate.js
var require_deflate = __commonJS((exports) => {
  function err(strm, errorCode) {
    strm.msg = msg[errorCode];
    return errorCode;
  }
  function rank(f) {
    return (f << 1) - (f > 4 ? 9 : 0);
  }
  function zero(buf) {
    var len = buf.length;
    while (--len >= 0) {
      buf[len] = 0;
    }
  }
  function flush_pending(strm) {
    var s = strm.state;
    var len = s.pending;
    if (len > strm.avail_out) {
      len = strm.avail_out;
    }
    if (len === 0) {
      return;
    }
    utils.arraySet(strm.output, s.pending_buf, s.pending_out, len, strm.next_out);
    strm.next_out += len;
    s.pending_out += len;
    strm.total_out += len;
    strm.avail_out -= len;
    s.pending -= len;
    if (s.pending === 0) {
      s.pending_out = 0;
    }
  }
  function flush_block_only(s, last) {
    trees._tr_flush_block(s, s.block_start >= 0 ? s.block_start : -1, s.strstart - s.block_start, last);
    s.block_start = s.strstart;
    flush_pending(s.strm);
  }
  function put_byte(s, b) {
    s.pending_buf[s.pending++] = b;
  }
  function putShortMSB(s, b) {
    s.pending_buf[s.pending++] = b >>> 8 & 255;
    s.pending_buf[s.pending++] = b & 255;
  }
  function read_buf(strm, buf, start, size) {
    var len = strm.avail_in;
    if (len > size) {
      len = size;
    }
    if (len === 0) {
      return 0;
    }
    strm.avail_in -= len;
    utils.arraySet(buf, strm.input, strm.next_in, len, start);
    if (strm.state.wrap === 1) {
      strm.adler = adler32(strm.adler, buf, len, start);
    } else if (strm.state.wrap === 2) {
      strm.adler = crc32(strm.adler, buf, len, start);
    }
    strm.next_in += len;
    strm.total_in += len;
    return len;
  }
  function longest_match(s, cur_match) {
    var chain_length = s.max_chain_length;
    var scan = s.strstart;
    var match;
    var len;
    var best_len = s.prev_length;
    var nice_match = s.nice_match;
    var limit = s.strstart > s.w_size - MIN_LOOKAHEAD ? s.strstart - (s.w_size - MIN_LOOKAHEAD) : 0;
    var _win = s.window;
    var wmask = s.w_mask;
    var prev = s.prev;
    var strend = s.strstart + MAX_MATCH;
    var scan_end1 = _win[scan + best_len - 1];
    var scan_end = _win[scan + best_len];
    if (s.prev_length >= s.good_match) {
      chain_length >>= 2;
    }
    if (nice_match > s.lookahead) {
      nice_match = s.lookahead;
    }
    do {
      match = cur_match;
      if (_win[match + best_len] !== scan_end || _win[match + best_len - 1] !== scan_end1 || _win[match] !== _win[scan] || _win[++match] !== _win[scan + 1]) {
        continue;
      }
      scan += 2;
      match++;
      do {
      } while (_win[++scan] === _win[++match] && _win[++scan] === _win[++match] && _win[++scan] === _win[++match] && _win[++scan] === _win[++match] && _win[++scan] === _win[++match] && _win[++scan] === _win[++match] && _win[++scan] === _win[++match] && _win[++scan] === _win[++match] && scan < strend);
      len = MAX_MATCH - (strend - scan);
      scan = strend - MAX_MATCH;
      if (len > best_len) {
        s.match_start = cur_match;
        best_len = len;
        if (len >= nice_match) {
          break;
        }
        scan_end1 = _win[scan + best_len - 1];
        scan_end = _win[scan + best_len];
      }
    } while ((cur_match = prev[cur_match & wmask]) > limit && --chain_length !== 0);
    if (best_len <= s.lookahead) {
      return best_len;
    }
    return s.lookahead;
  }
  function fill_window(s) {
    var _w_size = s.w_size;
    var p, n, m, more, str;
    do {
      more = s.window_size - s.lookahead - s.strstart;
      if (s.strstart >= _w_size + (_w_size - MIN_LOOKAHEAD)) {
        utils.arraySet(s.window, s.window, _w_size, _w_size, 0);
        s.match_start -= _w_size;
        s.strstart -= _w_size;
        s.block_start -= _w_size;
        n = s.hash_size;
        p = n;
        do {
          m = s.head[--p];
          s.head[p] = m >= _w_size ? m - _w_size : 0;
        } while (--n);
        n = _w_size;
        p = n;
        do {
          m = s.prev[--p];
          s.prev[p] = m >= _w_size ? m - _w_size : 0;
        } while (--n);
        more += _w_size;
      }
      if (s.strm.avail_in === 0) {
        break;
      }
      n = read_buf(s.strm, s.window, s.strstart + s.lookahead, more);
      s.lookahead += n;
      if (s.lookahead + s.insert >= MIN_MATCH) {
        str = s.strstart - s.insert;
        s.ins_h = s.window[str];
        s.ins_h = (s.ins_h << s.hash_shift ^ s.window[str + 1]) & s.hash_mask;
        while (s.insert) {
          s.ins_h = (s.ins_h << s.hash_shift ^ s.window[str + MIN_MATCH - 1]) & s.hash_mask;
          s.prev[str & s.w_mask] = s.head[s.ins_h];
          s.head[s.ins_h] = str;
          str++;
          s.insert--;
          if (s.lookahead + s.insert < MIN_MATCH) {
            break;
          }
        }
      }
    } while (s.lookahead < MIN_LOOKAHEAD && s.strm.avail_in !== 0);
  }
  function deflate_stored(s, flush) {
    var max_block_size = 65535;
    if (max_block_size > s.pending_buf_size - 5) {
      max_block_size = s.pending_buf_size - 5;
    }
    for (;; ) {
      if (s.lookahead <= 1) {
        fill_window(s);
        if (s.lookahead === 0 && flush === Z_NO_FLUSH) {
          return BS_NEED_MORE;
        }
        if (s.lookahead === 0) {
          break;
        }
      }
      s.strstart += s.lookahead;
      s.lookahead = 0;
      var max_start = s.block_start + max_block_size;
      if (s.strstart === 0 || s.strstart >= max_start) {
        s.lookahead = s.strstart - max_start;
        s.strstart = max_start;
        flush_block_only(s, false);
        if (s.strm.avail_out === 0) {
          return BS_NEED_MORE;
        }
      }
      if (s.strstart - s.block_start >= s.w_size - MIN_LOOKAHEAD) {
        flush_block_only(s, false);
        if (s.strm.avail_out === 0) {
          return BS_NEED_MORE;
        }
      }
    }
    s.insert = 0;
    if (flush === Z_FINISH) {
      flush_block_only(s, true);
      if (s.strm.avail_out === 0) {
        return BS_FINISH_STARTED;
      }
      return BS_FINISH_DONE;
    }
    if (s.strstart > s.block_start) {
      flush_block_only(s, false);
      if (s.strm.avail_out === 0) {
        return BS_NEED_MORE;
      }
    }
    return BS_NEED_MORE;
  }
  function deflate_fast(s, flush) {
    var hash_head;
    var bflush;
    for (;; ) {
      if (s.lookahead < MIN_LOOKAHEAD) {
        fill_window(s);
        if (s.lookahead < MIN_LOOKAHEAD && flush === Z_NO_FLUSH) {
          return BS_NEED_MORE;
        }
        if (s.lookahead === 0) {
          break;
        }
      }
      hash_head = 0;
      if (s.lookahead >= MIN_MATCH) {
        s.ins_h = (s.ins_h << s.hash_shift ^ s.window[s.strstart + MIN_MATCH - 1]) & s.hash_mask;
        hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
        s.head[s.ins_h] = s.strstart;
      }
      if (hash_head !== 0 && s.strstart - hash_head <= s.w_size - MIN_LOOKAHEAD) {
        s.match_length = longest_match(s, hash_head);
      }
      if (s.match_length >= MIN_MATCH) {
        bflush = trees._tr_tally(s, s.strstart - s.match_start, s.match_length - MIN_MATCH);
        s.lookahead -= s.match_length;
        if (s.match_length <= s.max_lazy_match && s.lookahead >= MIN_MATCH) {
          s.match_length--;
          do {
            s.strstart++;
            s.ins_h = (s.ins_h << s.hash_shift ^ s.window[s.strstart + MIN_MATCH - 1]) & s.hash_mask;
            hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
            s.head[s.ins_h] = s.strstart;
          } while (--s.match_length !== 0);
          s.strstart++;
        } else {
          s.strstart += s.match_length;
          s.match_length = 0;
          s.ins_h = s.window[s.strstart];
          s.ins_h = (s.ins_h << s.hash_shift ^ s.window[s.strstart + 1]) & s.hash_mask;
        }
      } else {
        bflush = trees._tr_tally(s, 0, s.window[s.strstart]);
        s.lookahead--;
        s.strstart++;
      }
      if (bflush) {
        flush_block_only(s, false);
        if (s.strm.avail_out === 0) {
          return BS_NEED_MORE;
        }
      }
    }
    s.insert = s.strstart < MIN_MATCH - 1 ? s.strstart : MIN_MATCH - 1;
    if (flush === Z_FINISH) {
      flush_block_only(s, true);
      if (s.strm.avail_out === 0) {
        return BS_FINISH_STARTED;
      }
      return BS_FINISH_DONE;
    }
    if (s.last_lit) {
      flush_block_only(s, false);
      if (s.strm.avail_out === 0) {
        return BS_NEED_MORE;
      }
    }
    return BS_BLOCK_DONE;
  }
  function deflate_slow(s, flush) {
    var hash_head;
    var bflush;
    var max_insert;
    for (;; ) {
      if (s.lookahead < MIN_LOOKAHEAD) {
        fill_window(s);
        if (s.lookahead < MIN_LOOKAHEAD && flush === Z_NO_FLUSH) {
          return BS_NEED_MORE;
        }
        if (s.lookahead === 0) {
          break;
        }
      }
      hash_head = 0;
      if (s.lookahead >= MIN_MATCH) {
        s.ins_h = (s.ins_h << s.hash_shift ^ s.window[s.strstart + MIN_MATCH - 1]) & s.hash_mask;
        hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
        s.head[s.ins_h] = s.strstart;
      }
      s.prev_length = s.match_length;
      s.prev_match = s.match_start;
      s.match_length = MIN_MATCH - 1;
      if (hash_head !== 0 && s.prev_length < s.max_lazy_match && s.strstart - hash_head <= s.w_size - MIN_LOOKAHEAD) {
        s.match_length = longest_match(s, hash_head);
        if (s.match_length <= 5 && (s.strategy === Z_FILTERED || s.match_length === MIN_MATCH && s.strstart - s.match_start > 4096)) {
          s.match_length = MIN_MATCH - 1;
        }
      }
      if (s.prev_length >= MIN_MATCH && s.match_length <= s.prev_length) {
        max_insert = s.strstart + s.lookahead - MIN_MATCH;
        bflush = trees._tr_tally(s, s.strstart - 1 - s.prev_match, s.prev_length - MIN_MATCH);
        s.lookahead -= s.prev_length - 1;
        s.prev_length -= 2;
        do {
          if (++s.strstart <= max_insert) {
            s.ins_h = (s.ins_h << s.hash_shift ^ s.window[s.strstart + MIN_MATCH - 1]) & s.hash_mask;
            hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
            s.head[s.ins_h] = s.strstart;
          }
        } while (--s.prev_length !== 0);
        s.match_available = 0;
        s.match_length = MIN_MATCH - 1;
        s.strstart++;
        if (bflush) {
          flush_block_only(s, false);
          if (s.strm.avail_out === 0) {
            return BS_NEED_MORE;
          }
        }
      } else if (s.match_available) {
        bflush = trees._tr_tally(s, 0, s.window[s.strstart - 1]);
        if (bflush) {
          flush_block_only(s, false);
        }
        s.strstart++;
        s.lookahead--;
        if (s.strm.avail_out === 0) {
          return BS_NEED_MORE;
        }
      } else {
        s.match_available = 1;
        s.strstart++;
        s.lookahead--;
      }
    }
    if (s.match_available) {
      bflush = trees._tr_tally(s, 0, s.window[s.strstart - 1]);
      s.match_available = 0;
    }
    s.insert = s.strstart < MIN_MATCH - 1 ? s.strstart : MIN_MATCH - 1;
    if (flush === Z_FINISH) {
      flush_block_only(s, true);
      if (s.strm.avail_out === 0) {
        return BS_FINISH_STARTED;
      }
      return BS_FINISH_DONE;
    }
    if (s.last_lit) {
      flush_block_only(s, false);
      if (s.strm.avail_out === 0) {
        return BS_NEED_MORE;
      }
    }
    return BS_BLOCK_DONE;
  }
  function deflate_rle(s, flush) {
    var bflush;
    var prev;
    var scan, strend;
    var _win = s.window;
    for (;; ) {
      if (s.lookahead <= MAX_MATCH) {
        fill_window(s);
        if (s.lookahead <= MAX_MATCH && flush === Z_NO_FLUSH) {
          return BS_NEED_MORE;
        }
        if (s.lookahead === 0) {
          break;
        }
      }
      s.match_length = 0;
      if (s.lookahead >= MIN_MATCH && s.strstart > 0) {
        scan = s.strstart - 1;
        prev = _win[scan];
        if (prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan]) {
          strend = s.strstart + MAX_MATCH;
          do {
          } while (prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan] && scan < strend);
          s.match_length = MAX_MATCH - (strend - scan);
          if (s.match_length > s.lookahead) {
            s.match_length = s.lookahead;
          }
        }
      }
      if (s.match_length >= MIN_MATCH) {
        bflush = trees._tr_tally(s, 1, s.match_length - MIN_MATCH);
        s.lookahead -= s.match_length;
        s.strstart += s.match_length;
        s.match_length = 0;
      } else {
        bflush = trees._tr_tally(s, 0, s.window[s.strstart]);
        s.lookahead--;
        s.strstart++;
      }
      if (bflush) {
        flush_block_only(s, false);
        if (s.strm.avail_out === 0) {
          return BS_NEED_MORE;
        }
      }
    }
    s.insert = 0;
    if (flush === Z_FINISH) {
      flush_block_only(s, true);
      if (s.strm.avail_out === 0) {
        return BS_FINISH_STARTED;
      }
      return BS_FINISH_DONE;
    }
    if (s.last_lit) {
      flush_block_only(s, false);
      if (s.strm.avail_out === 0) {
        return BS_NEED_MORE;
      }
    }
    return BS_BLOCK_DONE;
  }
  function deflate_huff(s, flush) {
    var bflush;
    for (;; ) {
      if (s.lookahead === 0) {
        fill_window(s);
        if (s.lookahead === 0) {
          if (flush === Z_NO_FLUSH) {
            return BS_NEED_MORE;
          }
          break;
        }
      }
      s.match_length = 0;
      bflush = trees._tr_tally(s, 0, s.window[s.strstart]);
      s.lookahead--;
      s.strstart++;
      if (bflush) {
        flush_block_only(s, false);
        if (s.strm.avail_out === 0) {
          return BS_NEED_MORE;
        }
      }
    }
    s.insert = 0;
    if (flush === Z_FINISH) {
      flush_block_only(s, true);
      if (s.strm.avail_out === 0) {
        return BS_FINISH_STARTED;
      }
      return BS_FINISH_DONE;
    }
    if (s.last_lit) {
      flush_block_only(s, false);
      if (s.strm.avail_out === 0) {
        return BS_NEED_MORE;
      }
    }
    return BS_BLOCK_DONE;
  }
  function Config(good_length, max_lazy, nice_length, max_chain, func) {
    this.good_length = good_length;
    this.max_lazy = max_lazy;
    this.nice_length = nice_length;
    this.max_chain = max_chain;
    this.func = func;
  }
  function lm_init(s) {
    s.window_size = 2 * s.w_size;
    zero(s.head);
    s.max_lazy_match = configuration_table[s.level].max_lazy;
    s.good_match = configuration_table[s.level].good_length;
    s.nice_match = configuration_table[s.level].nice_length;
    s.max_chain_length = configuration_table[s.level].max_chain;
    s.strstart = 0;
    s.block_start = 0;
    s.lookahead = 0;
    s.insert = 0;
    s.match_length = s.prev_length = MIN_MATCH - 1;
    s.match_available = 0;
    s.ins_h = 0;
  }
  function DeflateState() {
    this.strm = null;
    this.status = 0;
    this.pending_buf = null;
    this.pending_buf_size = 0;
    this.pending_out = 0;
    this.pending = 0;
    this.wrap = 0;
    this.gzhead = null;
    this.gzindex = 0;
    this.method = Z_DEFLATED;
    this.last_flush = -1;
    this.w_size = 0;
    this.w_bits = 0;
    this.w_mask = 0;
    this.window = null;
    this.window_size = 0;
    this.prev = null;
    this.head = null;
    this.ins_h = 0;
    this.hash_size = 0;
    this.hash_bits = 0;
    this.hash_mask = 0;
    this.hash_shift = 0;
    this.block_start = 0;
    this.match_length = 0;
    this.prev_match = 0;
    this.match_available = 0;
    this.strstart = 0;
    this.match_start = 0;
    this.lookahead = 0;
    this.prev_length = 0;
    this.max_chain_length = 0;
    this.max_lazy_match = 0;
    this.level = 0;
    this.strategy = 0;
    this.good_match = 0;
    this.nice_match = 0;
    this.dyn_ltree = new utils.Buf16(HEAP_SIZE * 2);
    this.dyn_dtree = new utils.Buf16((2 * D_CODES + 1) * 2);
    this.bl_tree = new utils.Buf16((2 * BL_CODES + 1) * 2);
    zero(this.dyn_ltree);
    zero(this.dyn_dtree);
    zero(this.bl_tree);
    this.l_desc = null;
    this.d_desc = null;
    this.bl_desc = null;
    this.bl_count = new utils.Buf16(MAX_BITS + 1);
    this.heap = new utils.Buf16(2 * L_CODES + 1);
    zero(this.heap);
    this.heap_len = 0;
    this.heap_max = 0;
    this.depth = new utils.Buf16(2 * L_CODES + 1);
    zero(this.depth);
    this.l_buf = 0;
    this.lit_bufsize = 0;
    this.last_lit = 0;
    this.d_buf = 0;
    this.opt_len = 0;
    this.static_len = 0;
    this.matches = 0;
    this.insert = 0;
    this.bi_buf = 0;
    this.bi_valid = 0;
  }
  function deflateResetKeep(strm) {
    var s;
    if (!strm || !strm.state) {
      return err(strm, Z_STREAM_ERROR);
    }
    strm.total_in = strm.total_out = 0;
    strm.data_type = Z_UNKNOWN;
    s = strm.state;
    s.pending = 0;
    s.pending_out = 0;
    if (s.wrap < 0) {
      s.wrap = -s.wrap;
    }
    s.status = s.wrap ? INIT_STATE : BUSY_STATE;
    strm.adler = s.wrap === 2 ? 0 : 1;
    s.last_flush = Z_NO_FLUSH;
    trees._tr_init(s);
    return Z_OK;
  }
  function deflateReset(strm) {
    var ret = deflateResetKeep(strm);
    if (ret === Z_OK) {
      lm_init(strm.state);
    }
    return ret;
  }
  function deflateSetHeader(strm, head) {
    if (!strm || !strm.state) {
      return Z_STREAM_ERROR;
    }
    if (strm.state.wrap !== 2) {
      return Z_STREAM_ERROR;
    }
    strm.state.gzhead = head;
    return Z_OK;
  }
  function deflateInit2(strm, level, method, windowBits, memLevel, strategy) {
    if (!strm) {
      return Z_STREAM_ERROR;
    }
    var wrap = 1;
    if (level === Z_DEFAULT_COMPRESSION) {
      level = 6;
    }
    if (windowBits < 0) {
      wrap = 0;
      windowBits = -windowBits;
    } else if (windowBits > 15) {
      wrap = 2;
      windowBits -= 16;
    }
    if (memLevel < 1 || memLevel > MAX_MEM_LEVEL || method !== Z_DEFLATED || windowBits < 8 || windowBits > 15 || level < 0 || level > 9 || strategy < 0 || strategy > Z_FIXED) {
      return err(strm, Z_STREAM_ERROR);
    }
    if (windowBits === 8) {
      windowBits = 9;
    }
    var s = new DeflateState;
    strm.state = s;
    s.strm = strm;
    s.wrap = wrap;
    s.gzhead = null;
    s.w_bits = windowBits;
    s.w_size = 1 << s.w_bits;
    s.w_mask = s.w_size - 1;
    s.hash_bits = memLevel + 7;
    s.hash_size = 1 << s.hash_bits;
    s.hash_mask = s.hash_size - 1;
    s.hash_shift = ~~((s.hash_bits + MIN_MATCH - 1) / MIN_MATCH);
    s.window = new utils.Buf8(s.w_size * 2);
    s.head = new utils.Buf16(s.hash_size);
    s.prev = new utils.Buf16(s.w_size);
    s.lit_bufsize = 1 << memLevel + 6;
    s.pending_buf_size = s.lit_bufsize * 4;
    s.pending_buf = new utils.Buf8(s.pending_buf_size);
    s.d_buf = 1 * s.lit_bufsize;
    s.l_buf = (1 + 2) * s.lit_bufsize;
    s.level = level;
    s.strategy = strategy;
    s.method = method;
    return deflateReset(strm);
  }
  function deflateInit(strm, level) {
    return deflateInit2(strm, level, Z_DEFLATED, MAX_WBITS, DEF_MEM_LEVEL, Z_DEFAULT_STRATEGY);
  }
  function deflate(strm, flush) {
    var old_flush, s;
    var beg, val;
    if (!strm || !strm.state || flush > Z_BLOCK || flush < 0) {
      return strm ? err(strm, Z_STREAM_ERROR) : Z_STREAM_ERROR;
    }
    s = strm.state;
    if (!strm.output || !strm.input && strm.avail_in !== 0 || s.status === FINISH_STATE && flush !== Z_FINISH) {
      return err(strm, strm.avail_out === 0 ? Z_BUF_ERROR : Z_STREAM_ERROR);
    }
    s.strm = strm;
    old_flush = s.last_flush;
    s.last_flush = flush;
    if (s.status === INIT_STATE) {
      if (s.wrap === 2) {
        strm.adler = 0;
        put_byte(s, 31);
        put_byte(s, 139);
        put_byte(s, 8);
        if (!s.gzhead) {
          put_byte(s, 0);
          put_byte(s, 0);
          put_byte(s, 0);
          put_byte(s, 0);
          put_byte(s, 0);
          put_byte(s, s.level === 9 ? 2 : s.strategy >= Z_HUFFMAN_ONLY || s.level < 2 ? 4 : 0);
          put_byte(s, OS_CODE);
          s.status = BUSY_STATE;
        } else {
          put_byte(s, (s.gzhead.text ? 1 : 0) + (s.gzhead.hcrc ? 2 : 0) + (!s.gzhead.extra ? 0 : 4) + (!s.gzhead.name ? 0 : 8) + (!s.gzhead.comment ? 0 : 16));
          put_byte(s, s.gzhead.time & 255);
          put_byte(s, s.gzhead.time >> 8 & 255);
          put_byte(s, s.gzhead.time >> 16 & 255);
          put_byte(s, s.gzhead.time >> 24 & 255);
          put_byte(s, s.level === 9 ? 2 : s.strategy >= Z_HUFFMAN_ONLY || s.level < 2 ? 4 : 0);
          put_byte(s, s.gzhead.os & 255);
          if (s.gzhead.extra && s.gzhead.extra.length) {
            put_byte(s, s.gzhead.extra.length & 255);
            put_byte(s, s.gzhead.extra.length >> 8 & 255);
          }
          if (s.gzhead.hcrc) {
            strm.adler = crc32(strm.adler, s.pending_buf, s.pending, 0);
          }
          s.gzindex = 0;
          s.status = EXTRA_STATE;
        }
      } else {
        var header = Z_DEFLATED + (s.w_bits - 8 << 4) << 8;
        var level_flags = -1;
        if (s.strategy >= Z_HUFFMAN_ONLY || s.level < 2) {
          level_flags = 0;
        } else if (s.level < 6) {
          level_flags = 1;
        } else if (s.level === 6) {
          level_flags = 2;
        } else {
          level_flags = 3;
        }
        header |= level_flags << 6;
        if (s.strstart !== 0) {
          header |= PRESET_DICT;
        }
        header += 31 - header % 31;
        s.status = BUSY_STATE;
        putShortMSB(s, header);
        if (s.strstart !== 0) {
          putShortMSB(s, strm.adler >>> 16);
          putShortMSB(s, strm.adler & 65535);
        }
        strm.adler = 1;
      }
    }
    if (s.status === EXTRA_STATE) {
      if (s.gzhead.extra) {
        beg = s.pending;
        while (s.gzindex < (s.gzhead.extra.length & 65535)) {
          if (s.pending === s.pending_buf_size) {
            if (s.gzhead.hcrc && s.pending > beg) {
              strm.adler = crc32(strm.adler, s.pending_buf, s.pending - beg, beg);
            }
            flush_pending(strm);
            beg = s.pending;
            if (s.pending === s.pending_buf_size) {
              break;
            }
          }
          put_byte(s, s.gzhead.extra[s.gzindex] & 255);
          s.gzindex++;
        }
        if (s.gzhead.hcrc && s.pending > beg) {
          strm.adler = crc32(strm.adler, s.pending_buf, s.pending - beg, beg);
        }
        if (s.gzindex === s.gzhead.extra.length) {
          s.gzindex = 0;
          s.status = NAME_STATE;
        }
      } else {
        s.status = NAME_STATE;
      }
    }
    if (s.status === NAME_STATE) {
      if (s.gzhead.name) {
        beg = s.pending;
        do {
          if (s.pending === s.pending_buf_size) {
            if (s.gzhead.hcrc && s.pending > beg) {
              strm.adler = crc32(strm.adler, s.pending_buf, s.pending - beg, beg);
            }
            flush_pending(strm);
            beg = s.pending;
            if (s.pending === s.pending_buf_size) {
              val = 1;
              break;
            }
          }
          if (s.gzindex < s.gzhead.name.length) {
            val = s.gzhead.name.charCodeAt(s.gzindex++) & 255;
          } else {
            val = 0;
          }
          put_byte(s, val);
        } while (val !== 0);
        if (s.gzhead.hcrc && s.pending > beg) {
          strm.adler = crc32(strm.adler, s.pending_buf, s.pending - beg, beg);
        }
        if (val === 0) {
          s.gzindex = 0;
          s.status = COMMENT_STATE;
        }
      } else {
        s.status = COMMENT_STATE;
      }
    }
    if (s.status === COMMENT_STATE) {
      if (s.gzhead.comment) {
        beg = s.pending;
        do {
          if (s.pending === s.pending_buf_size) {
            if (s.gzhead.hcrc && s.pending > beg) {
              strm.adler = crc32(strm.adler, s.pending_buf, s.pending - beg, beg);
            }
            flush_pending(strm);
            beg = s.pending;
            if (s.pending === s.pending_buf_size) {
              val = 1;
              break;
            }
          }
          if (s.gzindex < s.gzhead.comment.length) {
            val = s.gzhead.comment.charCodeAt(s.gzindex++) & 255;
          } else {
            val = 0;
          }
          put_byte(s, val);
        } while (val !== 0);
        if (s.gzhead.hcrc && s.pending > beg) {
          strm.adler = crc32(strm.adler, s.pending_buf, s.pending - beg, beg);
        }
        if (val === 0) {
          s.status = HCRC_STATE;
        }
      } else {
        s.status = HCRC_STATE;
      }
    }
    if (s.status === HCRC_STATE) {
      if (s.gzhead.hcrc) {
        if (s.pending + 2 > s.pending_buf_size) {
          flush_pending(strm);
        }
        if (s.pending + 2 <= s.pending_buf_size) {
          put_byte(s, strm.adler & 255);
          put_byte(s, strm.adler >> 8 & 255);
          strm.adler = 0;
          s.status = BUSY_STATE;
        }
      } else {
        s.status = BUSY_STATE;
      }
    }
    if (s.pending !== 0) {
      flush_pending(strm);
      if (strm.avail_out === 0) {
        s.last_flush = -1;
        return Z_OK;
      }
    } else if (strm.avail_in === 0 && rank(flush) <= rank(old_flush) && flush !== Z_FINISH) {
      return err(strm, Z_BUF_ERROR);
    }
    if (s.status === FINISH_STATE && strm.avail_in !== 0) {
      return err(strm, Z_BUF_ERROR);
    }
    if (strm.avail_in !== 0 || s.lookahead !== 0 || flush !== Z_NO_FLUSH && s.status !== FINISH_STATE) {
      var bstate = s.strategy === Z_HUFFMAN_ONLY ? deflate_huff(s, flush) : s.strategy === Z_RLE ? deflate_rle(s, flush) : configuration_table[s.level].func(s, flush);
      if (bstate === BS_FINISH_STARTED || bstate === BS_FINISH_DONE) {
        s.status = FINISH_STATE;
      }
      if (bstate === BS_NEED_MORE || bstate === BS_FINISH_STARTED) {
        if (strm.avail_out === 0) {
          s.last_flush = -1;
        }
        return Z_OK;
      }
      if (bstate === BS_BLOCK_DONE) {
        if (flush === Z_PARTIAL_FLUSH) {
          trees._tr_align(s);
        } else if (flush !== Z_BLOCK) {
          trees._tr_stored_block(s, 0, 0, false);
          if (flush === Z_FULL_FLUSH) {
            zero(s.head);
            if (s.lookahead === 0) {
              s.strstart = 0;
              s.block_start = 0;
              s.insert = 0;
            }
          }
        }
        flush_pending(strm);
        if (strm.avail_out === 0) {
          s.last_flush = -1;
          return Z_OK;
        }
      }
    }
    if (flush !== Z_FINISH) {
      return Z_OK;
    }
    if (s.wrap <= 0) {
      return Z_STREAM_END;
    }
    if (s.wrap === 2) {
      put_byte(s, strm.adler & 255);
      put_byte(s, strm.adler >> 8 & 255);
      put_byte(s, strm.adler >> 16 & 255);
      put_byte(s, strm.adler >> 24 & 255);
      put_byte(s, strm.total_in & 255);
      put_byte(s, strm.total_in >> 8 & 255);
      put_byte(s, strm.total_in >> 16 & 255);
      put_byte(s, strm.total_in >> 24 & 255);
    } else {
      putShortMSB(s, strm.adler >>> 16);
      putShortMSB(s, strm.adler & 65535);
    }
    flush_pending(strm);
    if (s.wrap > 0) {
      s.wrap = -s.wrap;
    }
    return s.pending !== 0 ? Z_OK : Z_STREAM_END;
  }
  function deflateEnd(strm) {
    var status;
    if (!strm || !strm.state) {
      return Z_STREAM_ERROR;
    }
    status = strm.state.status;
    if (status !== INIT_STATE && status !== EXTRA_STATE && status !== NAME_STATE && status !== COMMENT_STATE && status !== HCRC_STATE && status !== BUSY_STATE && status !== FINISH_STATE) {
      return err(strm, Z_STREAM_ERROR);
    }
    strm.state = null;
    return status === BUSY_STATE ? err(strm, Z_DATA_ERROR) : Z_OK;
  }
  function deflateSetDictionary(strm, dictionary) {
    var dictLength = dictionary.length;
    var s;
    var str, n;
    var wrap;
    var avail;
    var next;
    var input;
    var tmpDict;
    if (!strm || !strm.state) {
      return Z_STREAM_ERROR;
    }
    s = strm.state;
    wrap = s.wrap;
    if (wrap === 2 || wrap === 1 && s.status !== INIT_STATE || s.lookahead) {
      return Z_STREAM_ERROR;
    }
    if (wrap === 1) {
      strm.adler = adler32(strm.adler, dictionary, dictLength, 0);
    }
    s.wrap = 0;
    if (dictLength >= s.w_size) {
      if (wrap === 0) {
        zero(s.head);
        s.strstart = 0;
        s.block_start = 0;
        s.insert = 0;
      }
      tmpDict = new utils.Buf8(s.w_size);
      utils.arraySet(tmpDict, dictionary, dictLength - s.w_size, s.w_size, 0);
      dictionary = tmpDict;
      dictLength = s.w_size;
    }
    avail = strm.avail_in;
    next = strm.next_in;
    input = strm.input;
    strm.avail_in = dictLength;
    strm.next_in = 0;
    strm.input = dictionary;
    fill_window(s);
    while (s.lookahead >= MIN_MATCH) {
      str = s.strstart;
      n = s.lookahead - (MIN_MATCH - 1);
      do {
        s.ins_h = (s.ins_h << s.hash_shift ^ s.window[str + MIN_MATCH - 1]) & s.hash_mask;
        s.prev[str & s.w_mask] = s.head[s.ins_h];
        s.head[s.ins_h] = str;
        str++;
      } while (--n);
      s.strstart = str;
      s.lookahead = MIN_MATCH - 1;
      fill_window(s);
    }
    s.strstart += s.lookahead;
    s.block_start = s.strstart;
    s.insert = s.lookahead;
    s.lookahead = 0;
    s.match_length = s.prev_length = MIN_MATCH - 1;
    s.match_available = 0;
    strm.next_in = next;
    strm.input = input;
    strm.avail_in = avail;
    s.wrap = wrap;
    return Z_OK;
  }
  var utils = require_common();
  var trees = require_trees();
  var adler32 = require_adler32();
  var crc32 = require_crc322();
  var msg = require_messages();
  var Z_NO_FLUSH = 0;
  var Z_PARTIAL_FLUSH = 1;
  var Z_FULL_FLUSH = 3;
  var Z_FINISH = 4;
  var Z_BLOCK = 5;
  var Z_OK = 0;
  var Z_STREAM_END = 1;
  var Z_STREAM_ERROR = -2;
  var Z_DATA_ERROR = -3;
  var Z_BUF_ERROR = -5;
  var Z_DEFAULT_COMPRESSION = -1;
  var Z_FILTERED = 1;
  var Z_HUFFMAN_ONLY = 2;
  var Z_RLE = 3;
  var Z_FIXED = 4;
  var Z_DEFAULT_STRATEGY = 0;
  var Z_UNKNOWN = 2;
  var Z_DEFLATED = 8;
  var MAX_MEM_LEVEL = 9;
  var MAX_WBITS = 15;
  var DEF_MEM_LEVEL = 8;
  var LENGTH_CODES = 29;
  var LITERALS = 256;
  var L_CODES = LITERALS + 1 + LENGTH_CODES;
  var D_CODES = 30;
  var BL_CODES = 19;
  var HEAP_SIZE = 2 * L_CODES + 1;
  var MAX_BITS = 15;
  var MIN_MATCH = 3;
  var MAX_MATCH = 258;
  var MIN_LOOKAHEAD = MAX_MATCH + MIN_MATCH + 1;
  var PRESET_DICT = 32;
  var INIT_STATE = 42;
  var EXTRA_STATE = 69;
  var NAME_STATE = 73;
  var COMMENT_STATE = 91;
  var HCRC_STATE = 103;
  var BUSY_STATE = 113;
  var FINISH_STATE = 666;
  var BS_NEED_MORE = 1;
  var BS_BLOCK_DONE = 2;
  var BS_FINISH_STARTED = 3;
  var BS_FINISH_DONE = 4;
  var OS_CODE = 3;
  var configuration_table;
  configuration_table = [
    new Config(0, 0, 0, 0, deflate_stored),
    new Config(4, 4, 8, 4, deflate_fast),
    new Config(4, 5, 16, 8, deflate_fast),
    new Config(4, 6, 32, 32, deflate_fast),
    new Config(4, 4, 16, 16, deflate_slow),
    new Config(8, 16, 32, 32, deflate_slow),
    new Config(8, 16, 128, 128, deflate_slow),
    new Config(8, 32, 128, 256, deflate_slow),
    new Config(32, 128, 258, 1024, deflate_slow),
    new Config(32, 258, 258, 4096, deflate_slow)
  ];
  exports.deflateInit = deflateInit;
  exports.deflateInit2 = deflateInit2;
  exports.deflateReset = deflateReset;
  exports.deflateResetKeep = deflateResetKeep;
  exports.deflateSetHeader = deflateSetHeader;
  exports.deflate = deflate;
  exports.deflateEnd = deflateEnd;
  exports.deflateSetDictionary = deflateSetDictionary;
  exports.deflateInfo = "pako deflate (from Nodeca project)";
});

// node_modules/pako/lib/utils/strings.js
var require_strings = __commonJS((exports) => {
  function buf2binstring(buf, len) {
    if (len < 65534) {
      if (buf.subarray && STR_APPLY_UIA_OK || !buf.subarray && STR_APPLY_OK) {
        return String.fromCharCode.apply(null, utils.shrinkBuf(buf, len));
      }
    }
    var result = "";
    for (var i = 0;i < len; i++) {
      result += String.fromCharCode(buf[i]);
    }
    return result;
  }
  var utils = require_common();
  var STR_APPLY_OK = true;
  var STR_APPLY_UIA_OK = true;
  try {
    String.fromCharCode.apply(null, [0]);
  } catch (__) {
    STR_APPLY_OK = false;
  }
  try {
    String.fromCharCode.apply(null, new Uint8Array(1));
  } catch (__) {
    STR_APPLY_UIA_OK = false;
  }
  var _utf8len = new utils.Buf8(256);
  for (q = 0;q < 256; q++) {
    _utf8len[q] = q >= 252 ? 6 : q >= 248 ? 5 : q >= 240 ? 4 : q >= 224 ? 3 : q >= 192 ? 2 : 1;
  }
  var q;
  _utf8len[254] = _utf8len[254] = 1;
  exports.string2buf = function(str) {
    var buf, c, c2, m_pos, i, str_len = str.length, buf_len = 0;
    for (m_pos = 0;m_pos < str_len; m_pos++) {
      c = str.charCodeAt(m_pos);
      if ((c & 64512) === 55296 && m_pos + 1 < str_len) {
        c2 = str.charCodeAt(m_pos + 1);
        if ((c2 & 64512) === 56320) {
          c = 65536 + (c - 55296 << 10) + (c2 - 56320);
          m_pos++;
        }
      }
      buf_len += c < 128 ? 1 : c < 2048 ? 2 : c < 65536 ? 3 : 4;
    }
    buf = new utils.Buf8(buf_len);
    for (i = 0, m_pos = 0;i < buf_len; m_pos++) {
      c = str.charCodeAt(m_pos);
      if ((c & 64512) === 55296 && m_pos + 1 < str_len) {
        c2 = str.charCodeAt(m_pos + 1);
        if ((c2 & 64512) === 56320) {
          c = 65536 + (c - 55296 << 10) + (c2 - 56320);
          m_pos++;
        }
      }
      if (c < 128) {
        buf[i++] = c;
      } else if (c < 2048) {
        buf[i++] = 192 | c >>> 6;
        buf[i++] = 128 | c & 63;
      } else if (c < 65536) {
        buf[i++] = 224 | c >>> 12;
        buf[i++] = 128 | c >>> 6 & 63;
        buf[i++] = 128 | c & 63;
      } else {
        buf[i++] = 240 | c >>> 18;
        buf[i++] = 128 | c >>> 12 & 63;
        buf[i++] = 128 | c >>> 6 & 63;
        buf[i++] = 128 | c & 63;
      }
    }
    return buf;
  };
  exports.buf2binstring = function(buf) {
    return buf2binstring(buf, buf.length);
  };
  exports.binstring2buf = function(str) {
    var buf = new utils.Buf8(str.length);
    for (var i = 0, len = buf.length;i < len; i++) {
      buf[i] = str.charCodeAt(i);
    }
    return buf;
  };
  exports.buf2string = function(buf, max) {
    var i, out, c, c_len;
    var len = max || buf.length;
    var utf16buf = new Array(len * 2);
    for (out = 0, i = 0;i < len; ) {
      c = buf[i++];
      if (c < 128) {
        utf16buf[out++] = c;
        continue;
      }
      c_len = _utf8len[c];
      if (c_len > 4) {
        utf16buf[out++] = 65533;
        i += c_len - 1;
        continue;
      }
      c &= c_len === 2 ? 31 : c_len === 3 ? 15 : 7;
      while (c_len > 1 && i < len) {
        c = c << 6 | buf[i++] & 63;
        c_len--;
      }
      if (c_len > 1) {
        utf16buf[out++] = 65533;
        continue;
      }
      if (c < 65536) {
        utf16buf[out++] = c;
      } else {
        c -= 65536;
        utf16buf[out++] = 55296 | c >> 10 & 1023;
        utf16buf[out++] = 56320 | c & 1023;
      }
    }
    return buf2binstring(utf16buf, out);
  };
  exports.utf8border = function(buf, max) {
    var pos;
    max = max || buf.length;
    if (max > buf.length) {
      max = buf.length;
    }
    pos = max - 1;
    while (pos >= 0 && (buf[pos] & 192) === 128) {
      pos--;
    }
    if (pos < 0) {
      return max;
    }
    if (pos === 0) {
      return max;
    }
    return pos + _utf8len[buf[pos]] > max ? pos : max;
  };
});

// node_modules/pako/lib/zlib/zstream.js
var require_zstream = __commonJS((exports, module) => {
  function ZStream() {
    this.input = null;
    this.next_in = 0;
    this.avail_in = 0;
    this.total_in = 0;
    this.output = null;
    this.next_out = 0;
    this.avail_out = 0;
    this.total_out = 0;
    this.msg = "";
    this.state = null;
    this.data_type = 2;
    this.adler = 0;
  }
  module.exports = ZStream;
});

// node_modules/pako/lib/deflate.js
var require_deflate2 = __commonJS((exports) => {
  function Deflate(options) {
    if (!(this instanceof Deflate))
      return new Deflate(options);
    this.options = utils.assign({
      level: Z_DEFAULT_COMPRESSION,
      method: Z_DEFLATED,
      chunkSize: 16384,
      windowBits: 15,
      memLevel: 8,
      strategy: Z_DEFAULT_STRATEGY,
      to: ""
    }, options || {});
    var opt = this.options;
    if (opt.raw && opt.windowBits > 0) {
      opt.windowBits = -opt.windowBits;
    } else if (opt.gzip && opt.windowBits > 0 && opt.windowBits < 16) {
      opt.windowBits += 16;
    }
    this.err = 0;
    this.msg = "";
    this.ended = false;
    this.chunks = [];
    this.strm = new ZStream;
    this.strm.avail_out = 0;
    var status = zlib_deflate.deflateInit2(this.strm, opt.level, opt.method, opt.windowBits, opt.memLevel, opt.strategy);
    if (status !== Z_OK) {
      throw new Error(msg[status]);
    }
    if (opt.header) {
      zlib_deflate.deflateSetHeader(this.strm, opt.header);
    }
    if (opt.dictionary) {
      var dict;
      if (typeof opt.dictionary === "string") {
        dict = strings.string2buf(opt.dictionary);
      } else if (toString.call(opt.dictionary) === "[object ArrayBuffer]") {
        dict = new Uint8Array(opt.dictionary);
      } else {
        dict = opt.dictionary;
      }
      status = zlib_deflate.deflateSetDictionary(this.strm, dict);
      if (status !== Z_OK) {
        throw new Error(msg[status]);
      }
      this._dict_set = true;
    }
  }
  function deflate(input, options) {
    var deflator = new Deflate(options);
    deflator.push(input, true);
    if (deflator.err) {
      throw deflator.msg || msg[deflator.err];
    }
    return deflator.result;
  }
  function deflateRaw(input, options) {
    options = options || {};
    options.raw = true;
    return deflate(input, options);
  }
  function gzip(input, options) {
    options = options || {};
    options.gzip = true;
    return deflate(input, options);
  }
  var zlib_deflate = require_deflate();
  var utils = require_common();
  var strings = require_strings();
  var msg = require_messages();
  var ZStream = require_zstream();
  var toString = Object.prototype.toString;
  var Z_NO_FLUSH = 0;
  var Z_FINISH = 4;
  var Z_OK = 0;
  var Z_STREAM_END = 1;
  var Z_SYNC_FLUSH = 2;
  var Z_DEFAULT_COMPRESSION = -1;
  var Z_DEFAULT_STRATEGY = 0;
  var Z_DEFLATED = 8;
  Deflate.prototype.push = function(data, mode) {
    var strm = this.strm;
    var chunkSize = this.options.chunkSize;
    var status, _mode;
    if (this.ended) {
      return false;
    }
    _mode = mode === ~~mode ? mode : mode === true ? Z_FINISH : Z_NO_FLUSH;
    if (typeof data === "string") {
      strm.input = strings.string2buf(data);
    } else if (toString.call(data) === "[object ArrayBuffer]") {
      strm.input = new Uint8Array(data);
    } else {
      strm.input = data;
    }
    strm.next_in = 0;
    strm.avail_in = strm.input.length;
    do {
      if (strm.avail_out === 0) {
        strm.output = new utils.Buf8(chunkSize);
        strm.next_out = 0;
        strm.avail_out = chunkSize;
      }
      status = zlib_deflate.deflate(strm, _mode);
      if (status !== Z_STREAM_END && status !== Z_OK) {
        this.onEnd(status);
        this.ended = true;
        return false;
      }
      if (strm.avail_out === 0 || strm.avail_in === 0 && (_mode === Z_FINISH || _mode === Z_SYNC_FLUSH)) {
        if (this.options.to === "string") {
          this.onData(strings.buf2binstring(utils.shrinkBuf(strm.output, strm.next_out)));
        } else {
          this.onData(utils.shrinkBuf(strm.output, strm.next_out));
        }
      }
    } while ((strm.avail_in > 0 || strm.avail_out === 0) && status !== Z_STREAM_END);
    if (_mode === Z_FINISH) {
      status = zlib_deflate.deflateEnd(this.strm);
      this.onEnd(status);
      this.ended = true;
      return status === Z_OK;
    }
    if (_mode === Z_SYNC_FLUSH) {
      this.onEnd(Z_OK);
      strm.avail_out = 0;
      return true;
    }
    return true;
  };
  Deflate.prototype.onData = function(chunk) {
    this.chunks.push(chunk);
  };
  Deflate.prototype.onEnd = function(status) {
    if (status === Z_OK) {
      if (this.options.to === "string") {
        this.result = this.chunks.join("");
      } else {
        this.result = utils.flattenChunks(this.chunks);
      }
    }
    this.chunks = [];
    this.err = status;
    this.msg = this.strm.msg;
  };
  exports.Deflate = Deflate;
  exports.deflate = deflate;
  exports.deflateRaw = deflateRaw;
  exports.gzip = gzip;
});

// node_modules/pako/lib/zlib/inffast.js
var require_inffast = __commonJS((exports, module) => {
  var BAD = 30;
  var TYPE = 12;
  module.exports = function inflate_fast(strm, start) {
    var state;
    var _in;
    var last;
    var _out;
    var beg;
    var end;
    var dmax;
    var wsize;
    var whave;
    var wnext;
    var s_window;
    var hold;
    var bits;
    var lcode;
    var dcode;
    var lmask;
    var dmask;
    var here;
    var op;
    var len;
    var dist;
    var from;
    var from_source;
    var input, output;
    state = strm.state;
    _in = strm.next_in;
    input = strm.input;
    last = _in + (strm.avail_in - 5);
    _out = strm.next_out;
    output = strm.output;
    beg = _out - (start - strm.avail_out);
    end = _out + (strm.avail_out - 257);
    dmax = state.dmax;
    wsize = state.wsize;
    whave = state.whave;
    wnext = state.wnext;
    s_window = state.window;
    hold = state.hold;
    bits = state.bits;
    lcode = state.lencode;
    dcode = state.distcode;
    lmask = (1 << state.lenbits) - 1;
    dmask = (1 << state.distbits) - 1;
    top:
      do {
        if (bits < 15) {
          hold += input[_in++] << bits;
          bits += 8;
          hold += input[_in++] << bits;
          bits += 8;
        }
        here = lcode[hold & lmask];
        dolen:
          for (;; ) {
            op = here >>> 24;
            hold >>>= op;
            bits -= op;
            op = here >>> 16 & 255;
            if (op === 0) {
              output[_out++] = here & 65535;
            } else if (op & 16) {
              len = here & 65535;
              op &= 15;
              if (op) {
                if (bits < op) {
                  hold += input[_in++] << bits;
                  bits += 8;
                }
                len += hold & (1 << op) - 1;
                hold >>>= op;
                bits -= op;
              }
              if (bits < 15) {
                hold += input[_in++] << bits;
                bits += 8;
                hold += input[_in++] << bits;
                bits += 8;
              }
              here = dcode[hold & dmask];
              dodist:
                for (;; ) {
                  op = here >>> 24;
                  hold >>>= op;
                  bits -= op;
                  op = here >>> 16 & 255;
                  if (op & 16) {
                    dist = here & 65535;
                    op &= 15;
                    if (bits < op) {
                      hold += input[_in++] << bits;
                      bits += 8;
                      if (bits < op) {
                        hold += input[_in++] << bits;
                        bits += 8;
                      }
                    }
                    dist += hold & (1 << op) - 1;
                    if (dist > dmax) {
                      strm.msg = "invalid distance too far back";
                      state.mode = BAD;
                      break top;
                    }
                    hold >>>= op;
                    bits -= op;
                    op = _out - beg;
                    if (dist > op) {
                      op = dist - op;
                      if (op > whave) {
                        if (state.sane) {
                          strm.msg = "invalid distance too far back";
                          state.mode = BAD;
                          break top;
                        }
                      }
                      from = 0;
                      from_source = s_window;
                      if (wnext === 0) {
                        from += wsize - op;
                        if (op < len) {
                          len -= op;
                          do {
                            output[_out++] = s_window[from++];
                          } while (--op);
                          from = _out - dist;
                          from_source = output;
                        }
                      } else if (wnext < op) {
                        from += wsize + wnext - op;
                        op -= wnext;
                        if (op < len) {
                          len -= op;
                          do {
                            output[_out++] = s_window[from++];
                          } while (--op);
                          from = 0;
                          if (wnext < len) {
                            op = wnext;
                            len -= op;
                            do {
                              output[_out++] = s_window[from++];
                            } while (--op);
                            from = _out - dist;
                            from_source = output;
                          }
                        }
                      } else {
                        from += wnext - op;
                        if (op < len) {
                          len -= op;
                          do {
                            output[_out++] = s_window[from++];
                          } while (--op);
                          from = _out - dist;
                          from_source = output;
                        }
                      }
                      while (len > 2) {
                        output[_out++] = from_source[from++];
                        output[_out++] = from_source[from++];
                        output[_out++] = from_source[from++];
                        len -= 3;
                      }
                      if (len) {
                        output[_out++] = from_source[from++];
                        if (len > 1) {
                          output[_out++] = from_source[from++];
                        }
                      }
                    } else {
                      from = _out - dist;
                      do {
                        output[_out++] = output[from++];
                        output[_out++] = output[from++];
                        output[_out++] = output[from++];
                        len -= 3;
                      } while (len > 2);
                      if (len) {
                        output[_out++] = output[from++];
                        if (len > 1) {
                          output[_out++] = output[from++];
                        }
                      }
                    }
                  } else if ((op & 64) === 0) {
                    here = dcode[(here & 65535) + (hold & (1 << op) - 1)];
                    continue dodist;
                  } else {
                    strm.msg = "invalid distance code";
                    state.mode = BAD;
                    break top;
                  }
                  break;
                }
            } else if ((op & 64) === 0) {
              here = lcode[(here & 65535) + (hold & (1 << op) - 1)];
              continue dolen;
            } else if (op & 32) {
              state.mode = TYPE;
              break top;
            } else {
              strm.msg = "invalid literal/length code";
              state.mode = BAD;
              break top;
            }
            break;
          }
      } while (_in < last && _out < end);
    len = bits >> 3;
    _in -= len;
    bits -= len << 3;
    hold &= (1 << bits) - 1;
    strm.next_in = _in;
    strm.next_out = _out;
    strm.avail_in = _in < last ? 5 + (last - _in) : 5 - (_in - last);
    strm.avail_out = _out < end ? 257 + (end - _out) : 257 - (_out - end);
    state.hold = hold;
    state.bits = bits;
    return;
  };
});

// node_modules/pako/lib/zlib/inftrees.js
var require_inftrees = __commonJS((exports, module) => {
  var utils = require_common();
  var MAXBITS = 15;
  var ENOUGH_LENS = 852;
  var ENOUGH_DISTS = 592;
  var CODES = 0;
  var LENS = 1;
  var DISTS = 2;
  var lbase = [
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    13,
    15,
    17,
    19,
    23,
    27,
    31,
    35,
    43,
    51,
    59,
    67,
    83,
    99,
    115,
    131,
    163,
    195,
    227,
    258,
    0,
    0
  ];
  var lext = [
    16,
    16,
    16,
    16,
    16,
    16,
    16,
    16,
    17,
    17,
    17,
    17,
    18,
    18,
    18,
    18,
    19,
    19,
    19,
    19,
    20,
    20,
    20,
    20,
    21,
    21,
    21,
    21,
    16,
    72,
    78
  ];
  var dbase = [
    1,
    2,
    3,
    4,
    5,
    7,
    9,
    13,
    17,
    25,
    33,
    49,
    65,
    97,
    129,
    193,
    257,
    385,
    513,
    769,
    1025,
    1537,
    2049,
    3073,
    4097,
    6145,
    8193,
    12289,
    16385,
    24577,
    0,
    0
  ];
  var dext = [
    16,
    16,
    16,
    16,
    17,
    17,
    18,
    18,
    19,
    19,
    20,
    20,
    21,
    21,
    22,
    22,
    23,
    23,
    24,
    24,
    25,
    25,
    26,
    26,
    27,
    27,
    28,
    28,
    29,
    29,
    64,
    64
  ];
  module.exports = function inflate_table(type, lens, lens_index, codes, table, table_index, work, opts) {
    var bits = opts.bits;
    var len = 0;
    var sym = 0;
    var min = 0, max = 0;
    var root = 0;
    var curr = 0;
    var drop = 0;
    var left = 0;
    var used = 0;
    var huff = 0;
    var incr;
    var fill;
    var low;
    var mask;
    var next;
    var base = null;
    var base_index = 0;
    var end;
    var count = new utils.Buf16(MAXBITS + 1);
    var offs = new utils.Buf16(MAXBITS + 1);
    var extra = null;
    var extra_index = 0;
    var here_bits, here_op, here_val;
    for (len = 0;len <= MAXBITS; len++) {
      count[len] = 0;
    }
    for (sym = 0;sym < codes; sym++) {
      count[lens[lens_index + sym]]++;
    }
    root = bits;
    for (max = MAXBITS;max >= 1; max--) {
      if (count[max] !== 0) {
        break;
      }
    }
    if (root > max) {
      root = max;
    }
    if (max === 0) {
      table[table_index++] = 1 << 24 | 64 << 16 | 0;
      table[table_index++] = 1 << 24 | 64 << 16 | 0;
      opts.bits = 1;
      return 0;
    }
    for (min = 1;min < max; min++) {
      if (count[min] !== 0) {
        break;
      }
    }
    if (root < min) {
      root = min;
    }
    left = 1;
    for (len = 1;len <= MAXBITS; len++) {
      left <<= 1;
      left -= count[len];
      if (left < 0) {
        return -1;
      }
    }
    if (left > 0 && (type === CODES || max !== 1)) {
      return -1;
    }
    offs[1] = 0;
    for (len = 1;len < MAXBITS; len++) {
      offs[len + 1] = offs[len] + count[len];
    }
    for (sym = 0;sym < codes; sym++) {
      if (lens[lens_index + sym] !== 0) {
        work[offs[lens[lens_index + sym]]++] = sym;
      }
    }
    if (type === CODES) {
      base = extra = work;
      end = 19;
    } else if (type === LENS) {
      base = lbase;
      base_index -= 257;
      extra = lext;
      extra_index -= 257;
      end = 256;
    } else {
      base = dbase;
      extra = dext;
      end = -1;
    }
    huff = 0;
    sym = 0;
    len = min;
    next = table_index;
    curr = root;
    drop = 0;
    low = -1;
    used = 1 << root;
    mask = used - 1;
    if (type === LENS && used > ENOUGH_LENS || type === DISTS && used > ENOUGH_DISTS) {
      return 1;
    }
    for (;; ) {
      here_bits = len - drop;
      if (work[sym] < end) {
        here_op = 0;
        here_val = work[sym];
      } else if (work[sym] > end) {
        here_op = extra[extra_index + work[sym]];
        here_val = base[base_index + work[sym]];
      } else {
        here_op = 32 + 64;
        here_val = 0;
      }
      incr = 1 << len - drop;
      fill = 1 << curr;
      min = fill;
      do {
        fill -= incr;
        table[next + (huff >> drop) + fill] = here_bits << 24 | here_op << 16 | here_val | 0;
      } while (fill !== 0);
      incr = 1 << len - 1;
      while (huff & incr) {
        incr >>= 1;
      }
      if (incr !== 0) {
        huff &= incr - 1;
        huff += incr;
      } else {
        huff = 0;
      }
      sym++;
      if (--count[len] === 0) {
        if (len === max) {
          break;
        }
        len = lens[lens_index + work[sym]];
      }
      if (len > root && (huff & mask) !== low) {
        if (drop === 0) {
          drop = root;
        }
        next += min;
        curr = len - drop;
        left = 1 << curr;
        while (curr + drop < max) {
          left -= count[curr + drop];
          if (left <= 0) {
            break;
          }
          curr++;
          left <<= 1;
        }
        used += 1 << curr;
        if (type === LENS && used > ENOUGH_LENS || type === DISTS && used > ENOUGH_DISTS) {
          return 1;
        }
        low = huff & mask;
        table[low] = root << 24 | curr << 16 | next - table_index | 0;
      }
    }
    if (huff !== 0) {
      table[next + huff] = len - drop << 24 | 64 << 16 | 0;
    }
    opts.bits = root;
    return 0;
  };
});

// node_modules/pako/lib/zlib/inflate.js
var require_inflate = __commonJS((exports) => {
  function zswap32(q) {
    return (q >>> 24 & 255) + (q >>> 8 & 65280) + ((q & 65280) << 8) + ((q & 255) << 24);
  }
  function InflateState() {
    this.mode = 0;
    this.last = false;
    this.wrap = 0;
    this.havedict = false;
    this.flags = 0;
    this.dmax = 0;
    this.check = 0;
    this.total = 0;
    this.head = null;
    this.wbits = 0;
    this.wsize = 0;
    this.whave = 0;
    this.wnext = 0;
    this.window = null;
    this.hold = 0;
    this.bits = 0;
    this.length = 0;
    this.offset = 0;
    this.extra = 0;
    this.lencode = null;
    this.distcode = null;
    this.lenbits = 0;
    this.distbits = 0;
    this.ncode = 0;
    this.nlen = 0;
    this.ndist = 0;
    this.have = 0;
    this.next = null;
    this.lens = new utils.Buf16(320);
    this.work = new utils.Buf16(288);
    this.lendyn = null;
    this.distdyn = null;
    this.sane = 0;
    this.back = 0;
    this.was = 0;
  }
  function inflateResetKeep(strm) {
    var state;
    if (!strm || !strm.state) {
      return Z_STREAM_ERROR;
    }
    state = strm.state;
    strm.total_in = strm.total_out = state.total = 0;
    strm.msg = "";
    if (state.wrap) {
      strm.adler = state.wrap & 1;
    }
    state.mode = HEAD;
    state.last = 0;
    state.havedict = 0;
    state.dmax = 32768;
    state.head = null;
    state.hold = 0;
    state.bits = 0;
    state.lencode = state.lendyn = new utils.Buf32(ENOUGH_LENS);
    state.distcode = state.distdyn = new utils.Buf32(ENOUGH_DISTS);
    state.sane = 1;
    state.back = -1;
    return Z_OK;
  }
  function inflateReset(strm) {
    var state;
    if (!strm || !strm.state) {
      return Z_STREAM_ERROR;
    }
    state = strm.state;
    state.wsize = 0;
    state.whave = 0;
    state.wnext = 0;
    return inflateResetKeep(strm);
  }
  function inflateReset2(strm, windowBits) {
    var wrap;
    var state;
    if (!strm || !strm.state) {
      return Z_STREAM_ERROR;
    }
    state = strm.state;
    if (windowBits < 0) {
      wrap = 0;
      windowBits = -windowBits;
    } else {
      wrap = (windowBits >> 4) + 1;
      if (windowBits < 48) {
        windowBits &= 15;
      }
    }
    if (windowBits && (windowBits < 8 || windowBits > 15)) {
      return Z_STREAM_ERROR;
    }
    if (state.window !== null && state.wbits !== windowBits) {
      state.window = null;
    }
    state.wrap = wrap;
    state.wbits = windowBits;
    return inflateReset(strm);
  }
  function inflateInit2(strm, windowBits) {
    var ret;
    var state;
    if (!strm) {
      return Z_STREAM_ERROR;
    }
    state = new InflateState;
    strm.state = state;
    state.window = null;
    ret = inflateReset2(strm, windowBits);
    if (ret !== Z_OK) {
      strm.state = null;
    }
    return ret;
  }
  function inflateInit(strm) {
    return inflateInit2(strm, DEF_WBITS);
  }
  function fixedtables(state) {
    if (virgin) {
      var sym;
      lenfix = new utils.Buf32(512);
      distfix = new utils.Buf32(32);
      sym = 0;
      while (sym < 144) {
        state.lens[sym++] = 8;
      }
      while (sym < 256) {
        state.lens[sym++] = 9;
      }
      while (sym < 280) {
        state.lens[sym++] = 7;
      }
      while (sym < 288) {
        state.lens[sym++] = 8;
      }
      inflate_table(LENS, state.lens, 0, 288, lenfix, 0, state.work, { bits: 9 });
      sym = 0;
      while (sym < 32) {
        state.lens[sym++] = 5;
      }
      inflate_table(DISTS, state.lens, 0, 32, distfix, 0, state.work, { bits: 5 });
      virgin = false;
    }
    state.lencode = lenfix;
    state.lenbits = 9;
    state.distcode = distfix;
    state.distbits = 5;
  }
  function updatewindow(strm, src, end, copy) {
    var dist;
    var state = strm.state;
    if (state.window === null) {
      state.wsize = 1 << state.wbits;
      state.wnext = 0;
      state.whave = 0;
      state.window = new utils.Buf8(state.wsize);
    }
    if (copy >= state.wsize) {
      utils.arraySet(state.window, src, end - state.wsize, state.wsize, 0);
      state.wnext = 0;
      state.whave = state.wsize;
    } else {
      dist = state.wsize - state.wnext;
      if (dist > copy) {
        dist = copy;
      }
      utils.arraySet(state.window, src, end - copy, dist, state.wnext);
      copy -= dist;
      if (copy) {
        utils.arraySet(state.window, src, end - copy, copy, 0);
        state.wnext = copy;
        state.whave = state.wsize;
      } else {
        state.wnext += dist;
        if (state.wnext === state.wsize) {
          state.wnext = 0;
        }
        if (state.whave < state.wsize) {
          state.whave += dist;
        }
      }
    }
    return 0;
  }
  function inflate(strm, flush) {
    var state;
    var input, output;
    var next;
    var put;
    var have, left;
    var hold;
    var bits;
    var _in, _out;
    var copy;
    var from;
    var from_source;
    var here = 0;
    var here_bits, here_op, here_val;
    var last_bits, last_op, last_val;
    var len;
    var ret;
    var hbuf = new utils.Buf8(4);
    var opts;
    var n;
    var order = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
    if (!strm || !strm.state || !strm.output || !strm.input && strm.avail_in !== 0) {
      return Z_STREAM_ERROR;
    }
    state = strm.state;
    if (state.mode === TYPE) {
      state.mode = TYPEDO;
    }
    put = strm.next_out;
    output = strm.output;
    left = strm.avail_out;
    next = strm.next_in;
    input = strm.input;
    have = strm.avail_in;
    hold = state.hold;
    bits = state.bits;
    _in = have;
    _out = left;
    ret = Z_OK;
    inf_leave:
      for (;; ) {
        switch (state.mode) {
          case HEAD:
            if (state.wrap === 0) {
              state.mode = TYPEDO;
              break;
            }
            while (bits < 16) {
              if (have === 0) {
                break inf_leave;
              }
              have--;
              hold += input[next++] << bits;
              bits += 8;
            }
            if (state.wrap & 2 && hold === 35615) {
              state.check = 0;
              hbuf[0] = hold & 255;
              hbuf[1] = hold >>> 8 & 255;
              state.check = crc32(state.check, hbuf, 2, 0);
              hold = 0;
              bits = 0;
              state.mode = FLAGS;
              break;
            }
            state.flags = 0;
            if (state.head) {
              state.head.done = false;
            }
            if (!(state.wrap & 1) || (((hold & 255) << 8) + (hold >> 8)) % 31) {
              strm.msg = "incorrect header check";
              state.mode = BAD;
              break;
            }
            if ((hold & 15) !== Z_DEFLATED) {
              strm.msg = "unknown compression method";
              state.mode = BAD;
              break;
            }
            hold >>>= 4;
            bits -= 4;
            len = (hold & 15) + 8;
            if (state.wbits === 0) {
              state.wbits = len;
            } else if (len > state.wbits) {
              strm.msg = "invalid window size";
              state.mode = BAD;
              break;
            }
            state.dmax = 1 << len;
            strm.adler = state.check = 1;
            state.mode = hold & 512 ? DICTID : TYPE;
            hold = 0;
            bits = 0;
            break;
          case FLAGS:
            while (bits < 16) {
              if (have === 0) {
                break inf_leave;
              }
              have--;
              hold += input[next++] << bits;
              bits += 8;
            }
            state.flags = hold;
            if ((state.flags & 255) !== Z_DEFLATED) {
              strm.msg = "unknown compression method";
              state.mode = BAD;
              break;
            }
            if (state.flags & 57344) {
              strm.msg = "unknown header flags set";
              state.mode = BAD;
              break;
            }
            if (state.head) {
              state.head.text = hold >> 8 & 1;
            }
            if (state.flags & 512) {
              hbuf[0] = hold & 255;
              hbuf[1] = hold >>> 8 & 255;
              state.check = crc32(state.check, hbuf, 2, 0);
            }
            hold = 0;
            bits = 0;
            state.mode = TIME;
          case TIME:
            while (bits < 32) {
              if (have === 0) {
                break inf_leave;
              }
              have--;
              hold += input[next++] << bits;
              bits += 8;
            }
            if (state.head) {
              state.head.time = hold;
            }
            if (state.flags & 512) {
              hbuf[0] = hold & 255;
              hbuf[1] = hold >>> 8 & 255;
              hbuf[2] = hold >>> 16 & 255;
              hbuf[3] = hold >>> 24 & 255;
              state.check = crc32(state.check, hbuf, 4, 0);
            }
            hold = 0;
            bits = 0;
            state.mode = OS;
          case OS:
            while (bits < 16) {
              if (have === 0) {
                break inf_leave;
              }
              have--;
              hold += input[next++] << bits;
              bits += 8;
            }
            if (state.head) {
              state.head.xflags = hold & 255;
              state.head.os = hold >> 8;
            }
            if (state.flags & 512) {
              hbuf[0] = hold & 255;
              hbuf[1] = hold >>> 8 & 255;
              state.check = crc32(state.check, hbuf, 2, 0);
            }
            hold = 0;
            bits = 0;
            state.mode = EXLEN;
          case EXLEN:
            if (state.flags & 1024) {
              while (bits < 16) {
                if (have === 0) {
                  break inf_leave;
                }
                have--;
                hold += input[next++] << bits;
                bits += 8;
              }
              state.length = hold;
              if (state.head) {
                state.head.extra_len = hold;
              }
              if (state.flags & 512) {
                hbuf[0] = hold & 255;
                hbuf[1] = hold >>> 8 & 255;
                state.check = crc32(state.check, hbuf, 2, 0);
              }
              hold = 0;
              bits = 0;
            } else if (state.head) {
              state.head.extra = null;
            }
            state.mode = EXTRA;
          case EXTRA:
            if (state.flags & 1024) {
              copy = state.length;
              if (copy > have) {
                copy = have;
              }
              if (copy) {
                if (state.head) {
                  len = state.head.extra_len - state.length;
                  if (!state.head.extra) {
                    state.head.extra = new Array(state.head.extra_len);
                  }
                  utils.arraySet(state.head.extra, input, next, copy, len);
                }
                if (state.flags & 512) {
                  state.check = crc32(state.check, input, copy, next);
                }
                have -= copy;
                next += copy;
                state.length -= copy;
              }
              if (state.length) {
                break inf_leave;
              }
            }
            state.length = 0;
            state.mode = NAME;
          case NAME:
            if (state.flags & 2048) {
              if (have === 0) {
                break inf_leave;
              }
              copy = 0;
              do {
                len = input[next + copy++];
                if (state.head && len && state.length < 65536) {
                  state.head.name += String.fromCharCode(len);
                }
              } while (len && copy < have);
              if (state.flags & 512) {
                state.check = crc32(state.check, input, copy, next);
              }
              have -= copy;
              next += copy;
              if (len) {
                break inf_leave;
              }
            } else if (state.head) {
              state.head.name = null;
            }
            state.length = 0;
            state.mode = COMMENT;
          case COMMENT:
            if (state.flags & 4096) {
              if (have === 0) {
                break inf_leave;
              }
              copy = 0;
              do {
                len = input[next + copy++];
                if (state.head && len && state.length < 65536) {
                  state.head.comment += String.fromCharCode(len);
                }
              } while (len && copy < have);
              if (state.flags & 512) {
                state.check = crc32(state.check, input, copy, next);
              }
              have -= copy;
              next += copy;
              if (len) {
                break inf_leave;
              }
            } else if (state.head) {
              state.head.comment = null;
            }
            state.mode = HCRC;
          case HCRC:
            if (state.flags & 512) {
              while (bits < 16) {
                if (have === 0) {
                  break inf_leave;
                }
                have--;
                hold += input[next++] << bits;
                bits += 8;
              }
              if (hold !== (state.check & 65535)) {
                strm.msg = "header crc mismatch";
                state.mode = BAD;
                break;
              }
              hold = 0;
              bits = 0;
            }
            if (state.head) {
              state.head.hcrc = state.flags >> 9 & 1;
              state.head.done = true;
            }
            strm.adler = state.check = 0;
            state.mode = TYPE;
            break;
          case DICTID:
            while (bits < 32) {
              if (have === 0) {
                break inf_leave;
              }
              have--;
              hold += input[next++] << bits;
              bits += 8;
            }
            strm.adler = state.check = zswap32(hold);
            hold = 0;
            bits = 0;
            state.mode = DICT;
          case DICT:
            if (state.havedict === 0) {
              strm.next_out = put;
              strm.avail_out = left;
              strm.next_in = next;
              strm.avail_in = have;
              state.hold = hold;
              state.bits = bits;
              return Z_NEED_DICT;
            }
            strm.adler = state.check = 1;
            state.mode = TYPE;
          case TYPE:
            if (flush === Z_BLOCK || flush === Z_TREES) {
              break inf_leave;
            }
          case TYPEDO:
            if (state.last) {
              hold >>>= bits & 7;
              bits -= bits & 7;
              state.mode = CHECK;
              break;
            }
            while (bits < 3) {
              if (have === 0) {
                break inf_leave;
              }
              have--;
              hold += input[next++] << bits;
              bits += 8;
            }
            state.last = hold & 1;
            hold >>>= 1;
            bits -= 1;
            switch (hold & 3) {
              case 0:
                state.mode = STORED;
                break;
              case 1:
                fixedtables(state);
                state.mode = LEN_;
                if (flush === Z_TREES) {
                  hold >>>= 2;
                  bits -= 2;
                  break inf_leave;
                }
                break;
              case 2:
                state.mode = TABLE;
                break;
              case 3:
                strm.msg = "invalid block type";
                state.mode = BAD;
            }
            hold >>>= 2;
            bits -= 2;
            break;
          case STORED:
            hold >>>= bits & 7;
            bits -= bits & 7;
            while (bits < 32) {
              if (have === 0) {
                break inf_leave;
              }
              have--;
              hold += input[next++] << bits;
              bits += 8;
            }
            if ((hold & 65535) !== (hold >>> 16 ^ 65535)) {
              strm.msg = "invalid stored block lengths";
              state.mode = BAD;
              break;
            }
            state.length = hold & 65535;
            hold = 0;
            bits = 0;
            state.mode = COPY_;
            if (flush === Z_TREES) {
              break inf_leave;
            }
          case COPY_:
            state.mode = COPY;
          case COPY:
            copy = state.length;
            if (copy) {
              if (copy > have) {
                copy = have;
              }
              if (copy > left) {
                copy = left;
              }
              if (copy === 0) {
                break inf_leave;
              }
              utils.arraySet(output, input, next, copy, put);
              have -= copy;
              next += copy;
              left -= copy;
              put += copy;
              state.length -= copy;
              break;
            }
            state.mode = TYPE;
            break;
          case TABLE:
            while (bits < 14) {
              if (have === 0) {
                break inf_leave;
              }
              have--;
              hold += input[next++] << bits;
              bits += 8;
            }
            state.nlen = (hold & 31) + 257;
            hold >>>= 5;
            bits -= 5;
            state.ndist = (hold & 31) + 1;
            hold >>>= 5;
            bits -= 5;
            state.ncode = (hold & 15) + 4;
            hold >>>= 4;
            bits -= 4;
            if (state.nlen > 286 || state.ndist > 30) {
              strm.msg = "too many length or distance symbols";
              state.mode = BAD;
              break;
            }
            state.have = 0;
            state.mode = LENLENS;
          case LENLENS:
            while (state.have < state.ncode) {
              while (bits < 3) {
                if (have === 0) {
                  break inf_leave;
                }
                have--;
                hold += input[next++] << bits;
                bits += 8;
              }
              state.lens[order[state.have++]] = hold & 7;
              hold >>>= 3;
              bits -= 3;
            }
            while (state.have < 19) {
              state.lens[order[state.have++]] = 0;
            }
            state.lencode = state.lendyn;
            state.lenbits = 7;
            opts = { bits: state.lenbits };
            ret = inflate_table(CODES, state.lens, 0, 19, state.lencode, 0, state.work, opts);
            state.lenbits = opts.bits;
            if (ret) {
              strm.msg = "invalid code lengths set";
              state.mode = BAD;
              break;
            }
            state.have = 0;
            state.mode = CODELENS;
          case CODELENS:
            while (state.have < state.nlen + state.ndist) {
              for (;; ) {
                here = state.lencode[hold & (1 << state.lenbits) - 1];
                here_bits = here >>> 24;
                here_op = here >>> 16 & 255;
                here_val = here & 65535;
                if (here_bits <= bits) {
                  break;
                }
                if (have === 0) {
                  break inf_leave;
                }
                have--;
                hold += input[next++] << bits;
                bits += 8;
              }
              if (here_val < 16) {
                hold >>>= here_bits;
                bits -= here_bits;
                state.lens[state.have++] = here_val;
              } else {
                if (here_val === 16) {
                  n = here_bits + 2;
                  while (bits < n) {
                    if (have === 0) {
                      break inf_leave;
                    }
                    have--;
                    hold += input[next++] << bits;
                    bits += 8;
                  }
                  hold >>>= here_bits;
                  bits -= here_bits;
                  if (state.have === 0) {
                    strm.msg = "invalid bit length repeat";
                    state.mode = BAD;
                    break;
                  }
                  len = state.lens[state.have - 1];
                  copy = 3 + (hold & 3);
                  hold >>>= 2;
                  bits -= 2;
                } else if (here_val === 17) {
                  n = here_bits + 3;
                  while (bits < n) {
                    if (have === 0) {
                      break inf_leave;
                    }
                    have--;
                    hold += input[next++] << bits;
                    bits += 8;
                  }
                  hold >>>= here_bits;
                  bits -= here_bits;
                  len = 0;
                  copy = 3 + (hold & 7);
                  hold >>>= 3;
                  bits -= 3;
                } else {
                  n = here_bits + 7;
                  while (bits < n) {
                    if (have === 0) {
                      break inf_leave;
                    }
                    have--;
                    hold += input[next++] << bits;
                    bits += 8;
                  }
                  hold >>>= here_bits;
                  bits -= here_bits;
                  len = 0;
                  copy = 11 + (hold & 127);
                  hold >>>= 7;
                  bits -= 7;
                }
                if (state.have + copy > state.nlen + state.ndist) {
                  strm.msg = "invalid bit length repeat";
                  state.mode = BAD;
                  break;
                }
                while (copy--) {
                  state.lens[state.have++] = len;
                }
              }
            }
            if (state.mode === BAD) {
              break;
            }
            if (state.lens[256] === 0) {
              strm.msg = "invalid code -- missing end-of-block";
              state.mode = BAD;
              break;
            }
            state.lenbits = 9;
            opts = { bits: state.lenbits };
            ret = inflate_table(LENS, state.lens, 0, state.nlen, state.lencode, 0, state.work, opts);
            state.lenbits = opts.bits;
            if (ret) {
              strm.msg = "invalid literal/lengths set";
              state.mode = BAD;
              break;
            }
            state.distbits = 6;
            state.distcode = state.distdyn;
            opts = { bits: state.distbits };
            ret = inflate_table(DISTS, state.lens, state.nlen, state.ndist, state.distcode, 0, state.work, opts);
            state.distbits = opts.bits;
            if (ret) {
              strm.msg = "invalid distances set";
              state.mode = BAD;
              break;
            }
            state.mode = LEN_;
            if (flush === Z_TREES) {
              break inf_leave;
            }
          case LEN_:
            state.mode = LEN;
          case LEN:
            if (have >= 6 && left >= 258) {
              strm.next_out = put;
              strm.avail_out = left;
              strm.next_in = next;
              strm.avail_in = have;
              state.hold = hold;
              state.bits = bits;
              inflate_fast(strm, _out);
              put = strm.next_out;
              output = strm.output;
              left = strm.avail_out;
              next = strm.next_in;
              input = strm.input;
              have = strm.avail_in;
              hold = state.hold;
              bits = state.bits;
              if (state.mode === TYPE) {
                state.back = -1;
              }
              break;
            }
            state.back = 0;
            for (;; ) {
              here = state.lencode[hold & (1 << state.lenbits) - 1];
              here_bits = here >>> 24;
              here_op = here >>> 16 & 255;
              here_val = here & 65535;
              if (here_bits <= bits) {
                break;
              }
              if (have === 0) {
                break inf_leave;
              }
              have--;
              hold += input[next++] << bits;
              bits += 8;
            }
            if (here_op && (here_op & 240) === 0) {
              last_bits = here_bits;
              last_op = here_op;
              last_val = here_val;
              for (;; ) {
                here = state.lencode[last_val + ((hold & (1 << last_bits + last_op) - 1) >> last_bits)];
                here_bits = here >>> 24;
                here_op = here >>> 16 & 255;
                here_val = here & 65535;
                if (last_bits + here_bits <= bits) {
                  break;
                }
                if (have === 0) {
                  break inf_leave;
                }
                have--;
                hold += input[next++] << bits;
                bits += 8;
              }
              hold >>>= last_bits;
              bits -= last_bits;
              state.back += last_bits;
            }
            hold >>>= here_bits;
            bits -= here_bits;
            state.back += here_bits;
            state.length = here_val;
            if (here_op === 0) {
              state.mode = LIT;
              break;
            }
            if (here_op & 32) {
              state.back = -1;
              state.mode = TYPE;
              break;
            }
            if (here_op & 64) {
              strm.msg = "invalid literal/length code";
              state.mode = BAD;
              break;
            }
            state.extra = here_op & 15;
            state.mode = LENEXT;
          case LENEXT:
            if (state.extra) {
              n = state.extra;
              while (bits < n) {
                if (have === 0) {
                  break inf_leave;
                }
                have--;
                hold += input[next++] << bits;
                bits += 8;
              }
              state.length += hold & (1 << state.extra) - 1;
              hold >>>= state.extra;
              bits -= state.extra;
              state.back += state.extra;
            }
            state.was = state.length;
            state.mode = DIST;
          case DIST:
            for (;; ) {
              here = state.distcode[hold & (1 << state.distbits) - 1];
              here_bits = here >>> 24;
              here_op = here >>> 16 & 255;
              here_val = here & 65535;
              if (here_bits <= bits) {
                break;
              }
              if (have === 0) {
                break inf_leave;
              }
              have--;
              hold += input[next++] << bits;
              bits += 8;
            }
            if ((here_op & 240) === 0) {
              last_bits = here_bits;
              last_op = here_op;
              last_val = here_val;
              for (;; ) {
                here = state.distcode[last_val + ((hold & (1 << last_bits + last_op) - 1) >> last_bits)];
                here_bits = here >>> 24;
                here_op = here >>> 16 & 255;
                here_val = here & 65535;
                if (last_bits + here_bits <= bits) {
                  break;
                }
                if (have === 0) {
                  break inf_leave;
                }
                have--;
                hold += input[next++] << bits;
                bits += 8;
              }
              hold >>>= last_bits;
              bits -= last_bits;
              state.back += last_bits;
            }
            hold >>>= here_bits;
            bits -= here_bits;
            state.back += here_bits;
            if (here_op & 64) {
              strm.msg = "invalid distance code";
              state.mode = BAD;
              break;
            }
            state.offset = here_val;
            state.extra = here_op & 15;
            state.mode = DISTEXT;
          case DISTEXT:
            if (state.extra) {
              n = state.extra;
              while (bits < n) {
                if (have === 0) {
                  break inf_leave;
                }
                have--;
                hold += input[next++] << bits;
                bits += 8;
              }
              state.offset += hold & (1 << state.extra) - 1;
              hold >>>= state.extra;
              bits -= state.extra;
              state.back += state.extra;
            }
            if (state.offset > state.dmax) {
              strm.msg = "invalid distance too far back";
              state.mode = BAD;
              break;
            }
            state.mode = MATCH;
          case MATCH:
            if (left === 0) {
              break inf_leave;
            }
            copy = _out - left;
            if (state.offset > copy) {
              copy = state.offset - copy;
              if (copy > state.whave) {
                if (state.sane) {
                  strm.msg = "invalid distance too far back";
                  state.mode = BAD;
                  break;
                }
              }
              if (copy > state.wnext) {
                copy -= state.wnext;
                from = state.wsize - copy;
              } else {
                from = state.wnext - copy;
              }
              if (copy > state.length) {
                copy = state.length;
              }
              from_source = state.window;
            } else {
              from_source = output;
              from = put - state.offset;
              copy = state.length;
            }
            if (copy > left) {
              copy = left;
            }
            left -= copy;
            state.length -= copy;
            do {
              output[put++] = from_source[from++];
            } while (--copy);
            if (state.length === 0) {
              state.mode = LEN;
            }
            break;
          case LIT:
            if (left === 0) {
              break inf_leave;
            }
            output[put++] = state.length;
            left--;
            state.mode = LEN;
            break;
          case CHECK:
            if (state.wrap) {
              while (bits < 32) {
                if (have === 0) {
                  break inf_leave;
                }
                have--;
                hold |= input[next++] << bits;
                bits += 8;
              }
              _out -= left;
              strm.total_out += _out;
              state.total += _out;
              if (_out) {
                strm.adler = state.check = state.flags ? crc32(state.check, output, _out, put - _out) : adler32(state.check, output, _out, put - _out);
              }
              _out = left;
              if ((state.flags ? hold : zswap32(hold)) !== state.check) {
                strm.msg = "incorrect data check";
                state.mode = BAD;
                break;
              }
              hold = 0;
              bits = 0;
            }
            state.mode = LENGTH;
          case LENGTH:
            if (state.wrap && state.flags) {
              while (bits < 32) {
                if (have === 0) {
                  break inf_leave;
                }
                have--;
                hold += input[next++] << bits;
                bits += 8;
              }
              if (hold !== (state.total & 4294967295)) {
                strm.msg = "incorrect length check";
                state.mode = BAD;
                break;
              }
              hold = 0;
              bits = 0;
            }
            state.mode = DONE;
          case DONE:
            ret = Z_STREAM_END;
            break inf_leave;
          case BAD:
            ret = Z_DATA_ERROR;
            break inf_leave;
          case MEM:
            return Z_MEM_ERROR;
          case SYNC:
          default:
            return Z_STREAM_ERROR;
        }
      }
    strm.next_out = put;
    strm.avail_out = left;
    strm.next_in = next;
    strm.avail_in = have;
    state.hold = hold;
    state.bits = bits;
    if (state.wsize || _out !== strm.avail_out && state.mode < BAD && (state.mode < CHECK || flush !== Z_FINISH)) {
      if (updatewindow(strm, strm.output, strm.next_out, _out - strm.avail_out)) {
        state.mode = MEM;
        return Z_MEM_ERROR;
      }
    }
    _in -= strm.avail_in;
    _out -= strm.avail_out;
    strm.total_in += _in;
    strm.total_out += _out;
    state.total += _out;
    if (state.wrap && _out) {
      strm.adler = state.check = state.flags ? crc32(state.check, output, _out, strm.next_out - _out) : adler32(state.check, output, _out, strm.next_out - _out);
    }
    strm.data_type = state.bits + (state.last ? 64 : 0) + (state.mode === TYPE ? 128 : 0) + (state.mode === LEN_ || state.mode === COPY_ ? 256 : 0);
    if ((_in === 0 && _out === 0 || flush === Z_FINISH) && ret === Z_OK) {
      ret = Z_BUF_ERROR;
    }
    return ret;
  }
  function inflateEnd(strm) {
    if (!strm || !strm.state) {
      return Z_STREAM_ERROR;
    }
    var state = strm.state;
    if (state.window) {
      state.window = null;
    }
    strm.state = null;
    return Z_OK;
  }
  function inflateGetHeader(strm, head) {
    var state;
    if (!strm || !strm.state) {
      return Z_STREAM_ERROR;
    }
    state = strm.state;
    if ((state.wrap & 2) === 0) {
      return Z_STREAM_ERROR;
    }
    state.head = head;
    head.done = false;
    return Z_OK;
  }
  function inflateSetDictionary(strm, dictionary) {
    var dictLength = dictionary.length;
    var state;
    var dictid;
    var ret;
    if (!strm || !strm.state) {
      return Z_STREAM_ERROR;
    }
    state = strm.state;
    if (state.wrap !== 0 && state.mode !== DICT) {
      return Z_STREAM_ERROR;
    }
    if (state.mode === DICT) {
      dictid = 1;
      dictid = adler32(dictid, dictionary, dictLength, 0);
      if (dictid !== state.check) {
        return Z_DATA_ERROR;
      }
    }
    ret = updatewindow(strm, dictionary, dictLength, dictLength);
    if (ret) {
      state.mode = MEM;
      return Z_MEM_ERROR;
    }
    state.havedict = 1;
    return Z_OK;
  }
  var utils = require_common();
  var adler32 = require_adler32();
  var crc32 = require_crc322();
  var inflate_fast = require_inffast();
  var inflate_table = require_inftrees();
  var CODES = 0;
  var LENS = 1;
  var DISTS = 2;
  var Z_FINISH = 4;
  var Z_BLOCK = 5;
  var Z_TREES = 6;
  var Z_OK = 0;
  var Z_STREAM_END = 1;
  var Z_NEED_DICT = 2;
  var Z_STREAM_ERROR = -2;
  var Z_DATA_ERROR = -3;
  var Z_MEM_ERROR = -4;
  var Z_BUF_ERROR = -5;
  var Z_DEFLATED = 8;
  var HEAD = 1;
  var FLAGS = 2;
  var TIME = 3;
  var OS = 4;
  var EXLEN = 5;
  var EXTRA = 6;
  var NAME = 7;
  var COMMENT = 8;
  var HCRC = 9;
  var DICTID = 10;
  var DICT = 11;
  var TYPE = 12;
  var TYPEDO = 13;
  var STORED = 14;
  var COPY_ = 15;
  var COPY = 16;
  var TABLE = 17;
  var LENLENS = 18;
  var CODELENS = 19;
  var LEN_ = 20;
  var LEN = 21;
  var LENEXT = 22;
  var DIST = 23;
  var DISTEXT = 24;
  var MATCH = 25;
  var LIT = 26;
  var CHECK = 27;
  var LENGTH = 28;
  var DONE = 29;
  var BAD = 30;
  var MEM = 31;
  var SYNC = 32;
  var ENOUGH_LENS = 852;
  var ENOUGH_DISTS = 592;
  var MAX_WBITS = 15;
  var DEF_WBITS = MAX_WBITS;
  var virgin = true;
  var lenfix;
  var distfix;
  exports.inflateReset = inflateReset;
  exports.inflateReset2 = inflateReset2;
  exports.inflateResetKeep = inflateResetKeep;
  exports.inflateInit = inflateInit;
  exports.inflateInit2 = inflateInit2;
  exports.inflate = inflate;
  exports.inflateEnd = inflateEnd;
  exports.inflateGetHeader = inflateGetHeader;
  exports.inflateSetDictionary = inflateSetDictionary;
  exports.inflateInfo = "pako inflate (from Nodeca project)";
});

// node_modules/pako/lib/zlib/constants.js
var require_constants = __commonJS((exports, module) => {
  module.exports = {
    Z_NO_FLUSH: 0,
    Z_PARTIAL_FLUSH: 1,
    Z_SYNC_FLUSH: 2,
    Z_FULL_FLUSH: 3,
    Z_FINISH: 4,
    Z_BLOCK: 5,
    Z_TREES: 6,
    Z_OK: 0,
    Z_STREAM_END: 1,
    Z_NEED_DICT: 2,
    Z_ERRNO: -1,
    Z_STREAM_ERROR: -2,
    Z_DATA_ERROR: -3,
    Z_BUF_ERROR: -5,
    Z_NO_COMPRESSION: 0,
    Z_BEST_SPEED: 1,
    Z_BEST_COMPRESSION: 9,
    Z_DEFAULT_COMPRESSION: -1,
    Z_FILTERED: 1,
    Z_HUFFMAN_ONLY: 2,
    Z_RLE: 3,
    Z_FIXED: 4,
    Z_DEFAULT_STRATEGY: 0,
    Z_BINARY: 0,
    Z_TEXT: 1,
    Z_UNKNOWN: 2,
    Z_DEFLATED: 8
  };
});

// node_modules/pako/lib/zlib/gzheader.js
var require_gzheader = __commonJS((exports, module) => {
  function GZheader() {
    this.text = 0;
    this.time = 0;
    this.xflags = 0;
    this.os = 0;
    this.extra = null;
    this.extra_len = 0;
    this.name = "";
    this.comment = "";
    this.hcrc = 0;
    this.done = false;
  }
  module.exports = GZheader;
});

// node_modules/pako/lib/inflate.js
var require_inflate2 = __commonJS((exports) => {
  function Inflate(options) {
    if (!(this instanceof Inflate))
      return new Inflate(options);
    this.options = utils.assign({
      chunkSize: 16384,
      windowBits: 0,
      to: ""
    }, options || {});
    var opt = this.options;
    if (opt.raw && opt.windowBits >= 0 && opt.windowBits < 16) {
      opt.windowBits = -opt.windowBits;
      if (opt.windowBits === 0) {
        opt.windowBits = -15;
      }
    }
    if (opt.windowBits >= 0 && opt.windowBits < 16 && !(options && options.windowBits)) {
      opt.windowBits += 32;
    }
    if (opt.windowBits > 15 && opt.windowBits < 48) {
      if ((opt.windowBits & 15) === 0) {
        opt.windowBits |= 15;
      }
    }
    this.err = 0;
    this.msg = "";
    this.ended = false;
    this.chunks = [];
    this.strm = new ZStream;
    this.strm.avail_out = 0;
    var status = zlib_inflate.inflateInit2(this.strm, opt.windowBits);
    if (status !== c.Z_OK) {
      throw new Error(msg[status]);
    }
    this.header = new GZheader;
    zlib_inflate.inflateGetHeader(this.strm, this.header);
    if (opt.dictionary) {
      if (typeof opt.dictionary === "string") {
        opt.dictionary = strings.string2buf(opt.dictionary);
      } else if (toString.call(opt.dictionary) === "[object ArrayBuffer]") {
        opt.dictionary = new Uint8Array(opt.dictionary);
      }
      if (opt.raw) {
        status = zlib_inflate.inflateSetDictionary(this.strm, opt.dictionary);
        if (status !== c.Z_OK) {
          throw new Error(msg[status]);
        }
      }
    }
  }
  function inflate(input, options) {
    var inflator = new Inflate(options);
    inflator.push(input, true);
    if (inflator.err) {
      throw inflator.msg || msg[inflator.err];
    }
    return inflator.result;
  }
  function inflateRaw(input, options) {
    options = options || {};
    options.raw = true;
    return inflate(input, options);
  }
  var zlib_inflate = require_inflate();
  var utils = require_common();
  var strings = require_strings();
  var c = require_constants();
  var msg = require_messages();
  var ZStream = require_zstream();
  var GZheader = require_gzheader();
  var toString = Object.prototype.toString;
  Inflate.prototype.push = function(data, mode) {
    var strm = this.strm;
    var chunkSize = this.options.chunkSize;
    var dictionary = this.options.dictionary;
    var status, _mode;
    var next_out_utf8, tail, utf8str;
    var allowBufError = false;
    if (this.ended) {
      return false;
    }
    _mode = mode === ~~mode ? mode : mode === true ? c.Z_FINISH : c.Z_NO_FLUSH;
    if (typeof data === "string") {
      strm.input = strings.binstring2buf(data);
    } else if (toString.call(data) === "[object ArrayBuffer]") {
      strm.input = new Uint8Array(data);
    } else {
      strm.input = data;
    }
    strm.next_in = 0;
    strm.avail_in = strm.input.length;
    do {
      if (strm.avail_out === 0) {
        strm.output = new utils.Buf8(chunkSize);
        strm.next_out = 0;
        strm.avail_out = chunkSize;
      }
      status = zlib_inflate.inflate(strm, c.Z_NO_FLUSH);
      if (status === c.Z_NEED_DICT && dictionary) {
        status = zlib_inflate.inflateSetDictionary(this.strm, dictionary);
      }
      if (status === c.Z_BUF_ERROR && allowBufError === true) {
        status = c.Z_OK;
        allowBufError = false;
      }
      if (status !== c.Z_STREAM_END && status !== c.Z_OK) {
        this.onEnd(status);
        this.ended = true;
        return false;
      }
      if (strm.next_out) {
        if (strm.avail_out === 0 || status === c.Z_STREAM_END || strm.avail_in === 0 && (_mode === c.Z_FINISH || _mode === c.Z_SYNC_FLUSH)) {
          if (this.options.to === "string") {
            next_out_utf8 = strings.utf8border(strm.output, strm.next_out);
            tail = strm.next_out - next_out_utf8;
            utf8str = strings.buf2string(strm.output, next_out_utf8);
            strm.next_out = tail;
            strm.avail_out = chunkSize - tail;
            if (tail) {
              utils.arraySet(strm.output, strm.output, next_out_utf8, tail, 0);
            }
            this.onData(utf8str);
          } else {
            this.onData(utils.shrinkBuf(strm.output, strm.next_out));
          }
        }
      }
      if (strm.avail_in === 0 && strm.avail_out === 0) {
        allowBufError = true;
      }
    } while ((strm.avail_in > 0 || strm.avail_out === 0) && status !== c.Z_STREAM_END);
    if (status === c.Z_STREAM_END) {
      _mode = c.Z_FINISH;
    }
    if (_mode === c.Z_FINISH) {
      status = zlib_inflate.inflateEnd(this.strm);
      this.onEnd(status);
      this.ended = true;
      return status === c.Z_OK;
    }
    if (_mode === c.Z_SYNC_FLUSH) {
      this.onEnd(c.Z_OK);
      strm.avail_out = 0;
      return true;
    }
    return true;
  };
  Inflate.prototype.onData = function(chunk) {
    this.chunks.push(chunk);
  };
  Inflate.prototype.onEnd = function(status) {
    if (status === c.Z_OK) {
      if (this.options.to === "string") {
        this.result = this.chunks.join("");
      } else {
        this.result = utils.flattenChunks(this.chunks);
      }
    }
    this.chunks = [];
    this.err = status;
    this.msg = this.strm.msg;
  };
  exports.Inflate = Inflate;
  exports.inflate = inflate;
  exports.inflateRaw = inflateRaw;
  exports.ungzip = inflate;
});

// node_modules/pako/index.js
var require_pako = __commonJS((exports, module) => {
  var assign = require_common().assign;
  var deflate = require_deflate2();
  var inflate = require_inflate2();
  var constants = require_constants();
  var pako = {};
  assign(pako, deflate, inflate, constants);
  module.exports = pako;
});

// node_modules/jszip/lib/flate.js
var require_flate = __commonJS((exports) => {
  function FlateWorker(action, options) {
    GenericWorker.call(this, "FlateWorker/" + action);
    this._pako = null;
    this._pakoAction = action;
    this._pakoOptions = options;
    this.meta = {};
  }
  var USE_TYPEDARRAY = typeof Uint8Array !== "undefined" && typeof Uint16Array !== "undefined" && typeof Uint32Array !== "undefined";
  var pako = require_pako();
  var utils = require_utils();
  var GenericWorker = require_GenericWorker();
  var ARRAY_TYPE = USE_TYPEDARRAY ? "uint8array" : "array";
  exports.magic = "\b\0";
  utils.inherits(FlateWorker, GenericWorker);
  FlateWorker.prototype.processChunk = function(chunk) {
    this.meta = chunk.meta;
    if (this._pako === null) {
      this._createPako();
    }
    this._pako.push(utils.transformTo(ARRAY_TYPE, chunk.data), false);
  };
  FlateWorker.prototype.flush = function() {
    GenericWorker.prototype.flush.call(this);
    if (this._pako === null) {
      this._createPako();
    }
    this._pako.push([], true);
  };
  FlateWorker.prototype.cleanUp = function() {
    GenericWorker.prototype.cleanUp.call(this);
    this._pako = null;
  };
  FlateWorker.prototype._createPako = function() {
    this._pako = new pako[this._pakoAction]({
      raw: true,
      level: this._pakoOptions.level || -1
    });
    var self2 = this;
    this._pako.onData = function(data) {
      self2.push({
        data,
        meta: self2.meta
      });
    };
  };
  exports.compressWorker = function(compressionOptions) {
    return new FlateWorker("Deflate", compressionOptions);
  };
  exports.uncompressWorker = function() {
    return new FlateWorker("Inflate", {});
  };
});

// node_modules/jszip/lib/compressions.js
var require_compressions = __commonJS((exports) => {
  var GenericWorker = require_GenericWorker();
  exports.STORE = {
    magic: "\0\0",
    compressWorker: function() {
      return new GenericWorker("STORE compression");
    },
    uncompressWorker: function() {
      return new GenericWorker("STORE decompression");
    }
  };
  exports.DEFLATE = require_flate();
});

// node_modules/jszip/lib/signature.js
var require_signature = __commonJS((exports) => {
  exports.LOCAL_FILE_HEADER = "PK\x03\x04";
  exports.CENTRAL_FILE_HEADER = "PK\x01\x02";
  exports.CENTRAL_DIRECTORY_END = "PK\x05\x06";
  exports.ZIP64_CENTRAL_DIRECTORY_LOCATOR = "PK\x06\x07";
  exports.ZIP64_CENTRAL_DIRECTORY_END = "PK\x06\x06";
  exports.DATA_DESCRIPTOR = "PK\x07\b";
});

// node_modules/jszip/lib/generate/ZipFileWorker.js
var require_ZipFileWorker = __commonJS((exports, module) => {
  function ZipFileWorker(streamFiles, comment, platform, encodeFileName) {
    GenericWorker.call(this, "ZipFileWorker");
    this.bytesWritten = 0;
    this.zipComment = comment;
    this.zipPlatform = platform;
    this.encodeFileName = encodeFileName;
    this.streamFiles = streamFiles;
    this.accumulate = false;
    this.contentBuffer = [];
    this.dirRecords = [];
    this.currentSourceOffset = 0;
    this.entriesCount = 0;
    this.currentFile = null;
    this._sources = [];
  }
  var utils = require_utils();
  var GenericWorker = require_GenericWorker();
  var utf8 = require_utf8();
  var crc32 = require_crc32();
  var signature = require_signature();
  var decToHex = function(dec, bytes) {
    var hex = "", i;
    for (i = 0;i < bytes; i++) {
      hex += String.fromCharCode(dec & 255);
      dec = dec >>> 8;
    }
    return hex;
  };
  var generateUnixExternalFileAttr = function(unixPermissions, isDir) {
    var result = unixPermissions;
    if (!unixPermissions) {
      result = isDir ? 16893 : 33204;
    }
    return (result & 65535) << 16;
  };
  var generateDosExternalFileAttr = function(dosPermissions) {
    return (dosPermissions || 0) & 63;
  };
  var generateZipParts = function(streamInfo, streamedContent, streamingEnded, offset, platform, encodeFileName) {
    var file = streamInfo["file"], compression = streamInfo["compression"], useCustomEncoding = encodeFileName !== utf8.utf8encode, encodedFileName = utils.transformTo("string", encodeFileName(file.name)), utfEncodedFileName = utils.transformTo("string", utf8.utf8encode(file.name)), comment = file.comment, encodedComment = utils.transformTo("string", encodeFileName(comment)), utfEncodedComment = utils.transformTo("string", utf8.utf8encode(comment)), useUTF8ForFileName = utfEncodedFileName.length !== file.name.length, useUTF8ForComment = utfEncodedComment.length !== comment.length, dosTime, dosDate, extraFields = "", unicodePathExtraField = "", unicodeCommentExtraField = "", dir = file.dir, date = file.date;
    var dataInfo = {
      crc32: 0,
      compressedSize: 0,
      uncompressedSize: 0
    };
    if (!streamedContent || streamingEnded) {
      dataInfo.crc32 = streamInfo["crc32"];
      dataInfo.compressedSize = streamInfo["compressedSize"];
      dataInfo.uncompressedSize = streamInfo["uncompressedSize"];
    }
    var bitflag = 0;
    if (streamedContent) {
      bitflag |= 8;
    }
    if (!useCustomEncoding && (useUTF8ForFileName || useUTF8ForComment)) {
      bitflag |= 2048;
    }
    var extFileAttr = 0;
    var versionMadeBy = 0;
    if (dir) {
      extFileAttr |= 16;
    }
    if (platform === "UNIX") {
      versionMadeBy = 798;
      extFileAttr |= generateUnixExternalFileAttr(file.unixPermissions, dir);
    } else {
      versionMadeBy = 20;
      extFileAttr |= generateDosExternalFileAttr(file.dosPermissions, dir);
    }
    dosTime = date.getUTCHours();
    dosTime = dosTime << 6;
    dosTime = dosTime | date.getUTCMinutes();
    dosTime = dosTime << 5;
    dosTime = dosTime | date.getUTCSeconds() / 2;
    dosDate = date.getUTCFullYear() - 1980;
    dosDate = dosDate << 4;
    dosDate = dosDate | date.getUTCMonth() + 1;
    dosDate = dosDate << 5;
    dosDate = dosDate | date.getUTCDate();
    if (useUTF8ForFileName) {
      unicodePathExtraField = decToHex(1, 1) + decToHex(crc32(encodedFileName), 4) + utfEncodedFileName;
      extraFields += "up" + decToHex(unicodePathExtraField.length, 2) + unicodePathExtraField;
    }
    if (useUTF8ForComment) {
      unicodeCommentExtraField = decToHex(1, 1) + decToHex(crc32(encodedComment), 4) + utfEncodedComment;
      extraFields += "uc" + decToHex(unicodeCommentExtraField.length, 2) + unicodeCommentExtraField;
    }
    var header = "";
    header += `
\0`;
    header += decToHex(bitflag, 2);
    header += compression.magic;
    header += decToHex(dosTime, 2);
    header += decToHex(dosDate, 2);
    header += decToHex(dataInfo.crc32, 4);
    header += decToHex(dataInfo.compressedSize, 4);
    header += decToHex(dataInfo.uncompressedSize, 4);
    header += decToHex(encodedFileName.length, 2);
    header += decToHex(extraFields.length, 2);
    var fileRecord = signature.LOCAL_FILE_HEADER + header + encodedFileName + extraFields;
    var dirRecord = signature.CENTRAL_FILE_HEADER + decToHex(versionMadeBy, 2) + header + decToHex(encodedComment.length, 2) + "\0\0" + "\0\0" + decToHex(extFileAttr, 4) + decToHex(offset, 4) + encodedFileName + extraFields + encodedComment;
    return {
      fileRecord,
      dirRecord
    };
  };
  var generateCentralDirectoryEnd = function(entriesCount, centralDirLength, localDirLength, comment, encodeFileName) {
    var dirEnd = "";
    var encodedComment = utils.transformTo("string", encodeFileName(comment));
    dirEnd = signature.CENTRAL_DIRECTORY_END + "\0\0" + "\0\0" + decToHex(entriesCount, 2) + decToHex(entriesCount, 2) + decToHex(centralDirLength, 4) + decToHex(localDirLength, 4) + decToHex(encodedComment.length, 2) + encodedComment;
    return dirEnd;
  };
  var generateDataDescriptors = function(streamInfo) {
    var descriptor = "";
    descriptor = signature.DATA_DESCRIPTOR + decToHex(streamInfo["crc32"], 4) + decToHex(streamInfo["compressedSize"], 4) + decToHex(streamInfo["uncompressedSize"], 4);
    return descriptor;
  };
  utils.inherits(ZipFileWorker, GenericWorker);
  ZipFileWorker.prototype.push = function(chunk) {
    var currentFilePercent = chunk.meta.percent || 0;
    var entriesCount = this.entriesCount;
    var remainingFiles = this._sources.length;
    if (this.accumulate) {
      this.contentBuffer.push(chunk);
    } else {
      this.bytesWritten += chunk.data.length;
      GenericWorker.prototype.push.call(this, {
        data: chunk.data,
        meta: {
          currentFile: this.currentFile,
          percent: entriesCount ? (currentFilePercent + 100 * (entriesCount - remainingFiles - 1)) / entriesCount : 100
        }
      });
    }
  };
  ZipFileWorker.prototype.openedSource = function(streamInfo) {
    this.currentSourceOffset = this.bytesWritten;
    this.currentFile = streamInfo["file"].name;
    var streamedContent = this.streamFiles && !streamInfo["file"].dir;
    if (streamedContent) {
      var record = generateZipParts(streamInfo, streamedContent, false, this.currentSourceOffset, this.zipPlatform, this.encodeFileName);
      this.push({
        data: record.fileRecord,
        meta: { percent: 0 }
      });
    } else {
      this.accumulate = true;
    }
  };
  ZipFileWorker.prototype.closedSource = function(streamInfo) {
    this.accumulate = false;
    var streamedContent = this.streamFiles && !streamInfo["file"].dir;
    var record = generateZipParts(streamInfo, streamedContent, true, this.currentSourceOffset, this.zipPlatform, this.encodeFileName);
    this.dirRecords.push(record.dirRecord);
    if (streamedContent) {
      this.push({
        data: generateDataDescriptors(streamInfo),
        meta: { percent: 100 }
      });
    } else {
      this.push({
        data: record.fileRecord,
        meta: { percent: 0 }
      });
      while (this.contentBuffer.length) {
        this.push(this.contentBuffer.shift());
      }
    }
    this.currentFile = null;
  };
  ZipFileWorker.prototype.flush = function() {
    var localDirLength = this.bytesWritten;
    for (var i = 0;i < this.dirRecords.length; i++) {
      this.push({
        data: this.dirRecords[i],
        meta: { percent: 100 }
      });
    }
    var centralDirLength = this.bytesWritten - localDirLength;
    var dirEnd = generateCentralDirectoryEnd(this.dirRecords.length, centralDirLength, localDirLength, this.zipComment, this.encodeFileName);
    this.push({
      data: dirEnd,
      meta: { percent: 100 }
    });
  };
  ZipFileWorker.prototype.prepareNextSource = function() {
    this.previous = this._sources.shift();
    this.openedSource(this.previous.streamInfo);
    if (this.isPaused) {
      this.previous.pause();
    } else {
      this.previous.resume();
    }
  };
  ZipFileWorker.prototype.registerPrevious = function(previous) {
    this._sources.push(previous);
    var self2 = this;
    previous.on("data", function(chunk) {
      self2.processChunk(chunk);
    });
    previous.on("end", function() {
      self2.closedSource(self2.previous.streamInfo);
      if (self2._sources.length) {
        self2.prepareNextSource();
      } else {
        self2.end();
      }
    });
    previous.on("error", function(e) {
      self2.error(e);
    });
    return this;
  };
  ZipFileWorker.prototype.resume = function() {
    if (!GenericWorker.prototype.resume.call(this)) {
      return false;
    }
    if (!this.previous && this._sources.length) {
      this.prepareNextSource();
      return true;
    }
    if (!this.previous && !this._sources.length && !this.generatedError) {
      this.end();
      return true;
    }
  };
  ZipFileWorker.prototype.error = function(e) {
    var sources = this._sources;
    if (!GenericWorker.prototype.error.call(this, e)) {
      return false;
    }
    for (var i = 0;i < sources.length; i++) {
      try {
        sources[i].error(e);
      } catch (e2) {
      }
    }
    return true;
  };
  ZipFileWorker.prototype.lock = function() {
    GenericWorker.prototype.lock.call(this);
    var sources = this._sources;
    for (var i = 0;i < sources.length; i++) {
      sources[i].lock();
    }
  };
  module.exports = ZipFileWorker;
});

// node_modules/jszip/lib/generate/index.js
var require_generate = __commonJS((exports) => {
  var compressions = require_compressions();
  var ZipFileWorker = require_ZipFileWorker();
  var getCompression = function(fileCompression, zipCompression) {
    var compressionName = fileCompression || zipCompression;
    var compression = compressions[compressionName];
    if (!compression) {
      throw new Error(compressionName + " is not a valid compression method !");
    }
    return compression;
  };
  exports.generateWorker = function(zip, options, comment) {
    var zipFileWorker = new ZipFileWorker(options.streamFiles, comment, options.platform, options.encodeFileName);
    var entriesCount = 0;
    try {
      zip.forEach(function(relativePath, file) {
        entriesCount++;
        var compression = getCompression(file.options.compression, options.compression);
        var compressionOptions = file.options.compressionOptions || options.compressionOptions || {};
        var { dir, date } = file;
        file._compressWorker(compression, compressionOptions).withStreamInfo("file", {
          name: relativePath,
          dir,
          date,
          comment: file.comment || "",
          unixPermissions: file.unixPermissions,
          dosPermissions: file.dosPermissions
        }).pipe(zipFileWorker);
      });
      zipFileWorker.entriesCount = entriesCount;
    } catch (e) {
      zipFileWorker.error(e);
    }
    return zipFileWorker;
  };
});

// node_modules/jszip/lib/nodejs/NodejsStreamInputAdapter.js
var require_NodejsStreamInputAdapter = __commonJS((exports, module) => {
  function NodejsStreamInputAdapter(filename, stream) {
    GenericWorker.call(this, "Nodejs stream input adapter for " + filename);
    this._upstreamEnded = false;
    this._bindStream(stream);
  }
  var utils = require_utils();
  var GenericWorker = require_GenericWorker();
  utils.inherits(NodejsStreamInputAdapter, GenericWorker);
  NodejsStreamInputAdapter.prototype._bindStream = function(stream) {
    var self2 = this;
    this._stream = stream;
    stream.pause();
    stream.on("data", function(chunk) {
      self2.push({
        data: chunk,
        meta: {
          percent: 0
        }
      });
    }).on("error", function(e) {
      if (self2.isPaused) {
        this.generatedError = e;
      } else {
        self2.error(e);
      }
    }).on("end", function() {
      if (self2.isPaused) {
        self2._upstreamEnded = true;
      } else {
        self2.end();
      }
    });
  };
  NodejsStreamInputAdapter.prototype.pause = function() {
    if (!GenericWorker.prototype.pause.call(this)) {
      return false;
    }
    this._stream.pause();
    return true;
  };
  NodejsStreamInputAdapter.prototype.resume = function() {
    if (!GenericWorker.prototype.resume.call(this)) {
      return false;
    }
    if (this._upstreamEnded) {
      this.end();
    } else {
      this._stream.resume();
    }
    return true;
  };
  module.exports = NodejsStreamInputAdapter;
});

// node_modules/jszip/lib/object.js
var require_object = __commonJS((exports, module) => {
  function isRegExp(object) {
    return Object.prototype.toString.call(object) === "[object RegExp]";
  }
  var utf8 = require_utf8();
  var utils = require_utils();
  var GenericWorker = require_GenericWorker();
  var StreamHelper = require_StreamHelper();
  var defaults = require_defaults();
  var CompressedObject = require_compressedObject();
  var ZipObject = require_zipObject();
  var generate = require_generate();
  var nodejsUtils = require_nodejsUtils();
  var NodejsStreamInputAdapter = require_NodejsStreamInputAdapter();
  var fileAdd = function(name, data, originalOptions) {
    var dataType = utils.getTypeOf(data), parent;
    var o = utils.extend(originalOptions || {}, defaults);
    o.date = o.date || new Date;
    if (o.compression !== null) {
      o.compression = o.compression.toUpperCase();
    }
    if (typeof o.unixPermissions === "string") {
      o.unixPermissions = parseInt(o.unixPermissions, 8);
    }
    if (o.unixPermissions && o.unixPermissions & 16384) {
      o.dir = true;
    }
    if (o.dosPermissions && o.dosPermissions & 16) {
      o.dir = true;
    }
    if (o.dir) {
      name = forceTrailingSlash(name);
    }
    if (o.createFolders && (parent = parentFolder(name))) {
      folderAdd.call(this, parent, true);
    }
    var isUnicodeString = dataType === "string" && o.binary === false && o.base64 === false;
    if (!originalOptions || typeof originalOptions.binary === "undefined") {
      o.binary = !isUnicodeString;
    }
    var isCompressedEmpty = data instanceof CompressedObject && data.uncompressedSize === 0;
    if (isCompressedEmpty || o.dir || !data || data.length === 0) {
      o.base64 = false;
      o.binary = true;
      data = "";
      o.compression = "STORE";
      dataType = "string";
    }
    var zipObjectContent = null;
    if (data instanceof CompressedObject || data instanceof GenericWorker) {
      zipObjectContent = data;
    } else if (nodejsUtils.isNode && nodejsUtils.isStream(data)) {
      zipObjectContent = new NodejsStreamInputAdapter(name, data);
    } else {
      zipObjectContent = utils.prepareContent(name, data, o.binary, o.optimizedBinaryString, o.base64);
    }
    var object = new ZipObject(name, zipObjectContent, o);
    this.files[name] = object;
  };
  var parentFolder = function(path) {
    if (path.slice(-1) === "/") {
      path = path.substring(0, path.length - 1);
    }
    var lastSlash = path.lastIndexOf("/");
    return lastSlash > 0 ? path.substring(0, lastSlash) : "";
  };
  var forceTrailingSlash = function(path) {
    if (path.slice(-1) !== "/") {
      path += "/";
    }
    return path;
  };
  var folderAdd = function(name, createFolders) {
    createFolders = typeof createFolders !== "undefined" ? createFolders : defaults.createFolders;
    name = forceTrailingSlash(name);
    if (!this.files[name]) {
      fileAdd.call(this, name, null, {
        dir: true,
        createFolders
      });
    }
    return this.files[name];
  };
  var out = {
    load: function() {
      throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
    },
    forEach: function(cb) {
      var filename, relativePath, file;
      for (filename in this.files) {
        file = this.files[filename];
        relativePath = filename.slice(this.root.length, filename.length);
        if (relativePath && filename.slice(0, this.root.length) === this.root) {
          cb(relativePath, file);
        }
      }
    },
    filter: function(search) {
      var result = [];
      this.forEach(function(relativePath, entry) {
        if (search(relativePath, entry)) {
          result.push(entry);
        }
      });
      return result;
    },
    file: function(name, data, o) {
      if (arguments.length === 1) {
        if (isRegExp(name)) {
          var regexp = name;
          return this.filter(function(relativePath, file) {
            return !file.dir && regexp.test(relativePath);
          });
        } else {
          var obj = this.files[this.root + name];
          if (obj && !obj.dir) {
            return obj;
          } else {
            return null;
          }
        }
      } else {
        name = this.root + name;
        fileAdd.call(this, name, data, o);
      }
      return this;
    },
    folder: function(arg) {
      if (!arg) {
        return this;
      }
      if (isRegExp(arg)) {
        return this.filter(function(relativePath, file) {
          return file.dir && arg.test(relativePath);
        });
      }
      var name = this.root + arg;
      var newFolder = folderAdd.call(this, name);
      var ret = this.clone();
      ret.root = newFolder.name;
      return ret;
    },
    remove: function(name) {
      name = this.root + name;
      var file = this.files[name];
      if (!file) {
        if (name.slice(-1) !== "/") {
          name += "/";
        }
        file = this.files[name];
      }
      if (file && !file.dir) {
        delete this.files[name];
      } else {
        var kids = this.filter(function(relativePath, file2) {
          return file2.name.slice(0, name.length) === name;
        });
        for (var i = 0;i < kids.length; i++) {
          delete this.files[kids[i].name];
        }
      }
      return this;
    },
    generate: function() {
      throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
    },
    generateInternalStream: function(options) {
      var worker, opts = {};
      try {
        opts = utils.extend(options || {}, {
          streamFiles: false,
          compression: "STORE",
          compressionOptions: null,
          type: "",
          platform: "DOS",
          comment: null,
          mimeType: "application/zip",
          encodeFileName: utf8.utf8encode
        });
        opts.type = opts.type.toLowerCase();
        opts.compression = opts.compression.toUpperCase();
        if (opts.type === "binarystring") {
          opts.type = "string";
        }
        if (!opts.type) {
          throw new Error("No output type specified.");
        }
        utils.checkSupport(opts.type);
        if (opts.platform === "darwin" || opts.platform === "freebsd" || opts.platform === "linux" || opts.platform === "sunos") {
          opts.platform = "UNIX";
        }
        if (opts.platform === "win32") {
          opts.platform = "DOS";
        }
        var comment = opts.comment || this.comment || "";
        worker = generate.generateWorker(this, opts, comment);
      } catch (e) {
        worker = new GenericWorker("error");
        worker.error(e);
      }
      return new StreamHelper(worker, opts.type || "string", opts.mimeType);
    },
    generateAsync: function(options, onUpdate) {
      return this.generateInternalStream(options).accumulate(onUpdate);
    },
    generateNodeStream: function(options, onUpdate) {
      options = options || {};
      if (!options.type) {
        options.type = "nodebuffer";
      }
      return this.generateInternalStream(options).toNodejsStream(onUpdate);
    }
  };
  module.exports = out;
});

// node_modules/jszip/lib/reader/DataReader.js
var require_DataReader = __commonJS((exports, module) => {
  function DataReader(data) {
    this.data = data;
    this.length = data.length;
    this.index = 0;
    this.zero = 0;
  }
  var utils = require_utils();
  DataReader.prototype = {
    checkOffset: function(offset) {
      this.checkIndex(this.index + offset);
    },
    checkIndex: function(newIndex) {
      if (this.length < this.zero + newIndex || newIndex < 0) {
        throw new Error("End of data reached (data length = " + this.length + ", asked index = " + newIndex + "). Corrupted zip ?");
      }
    },
    setIndex: function(newIndex) {
      this.checkIndex(newIndex);
      this.index = newIndex;
    },
    skip: function(n) {
      this.setIndex(this.index + n);
    },
    byteAt: function() {
    },
    readInt: function(size) {
      var result = 0, i;
      this.checkOffset(size);
      for (i = this.index + size - 1;i >= this.index; i--) {
        result = (result << 8) + this.byteAt(i);
      }
      this.index += size;
      return result;
    },
    readString: function(size) {
      return utils.transformTo("string", this.readData(size));
    },
    readData: function() {
    },
    lastIndexOfSignature: function() {
    },
    readAndCheckSignature: function() {
    },
    readDate: function() {
      var dostime = this.readInt(4);
      return new Date(Date.UTC((dostime >> 25 & 127) + 1980, (dostime >> 21 & 15) - 1, dostime >> 16 & 31, dostime >> 11 & 31, dostime >> 5 & 63, (dostime & 31) << 1));
    }
  };
  module.exports = DataReader;
});

// node_modules/jszip/lib/reader/ArrayReader.js
var require_ArrayReader = __commonJS((exports, module) => {
  function ArrayReader(data) {
    DataReader.call(this, data);
    for (var i = 0;i < this.data.length; i++) {
      data[i] = data[i] & 255;
    }
  }
  var DataReader = require_DataReader();
  var utils = require_utils();
  utils.inherits(ArrayReader, DataReader);
  ArrayReader.prototype.byteAt = function(i) {
    return this.data[this.zero + i];
  };
  ArrayReader.prototype.lastIndexOfSignature = function(sig) {
    var sig0 = sig.charCodeAt(0), sig1 = sig.charCodeAt(1), sig2 = sig.charCodeAt(2), sig3 = sig.charCodeAt(3);
    for (var i = this.length - 4;i >= 0; --i) {
      if (this.data[i] === sig0 && this.data[i + 1] === sig1 && this.data[i + 2] === sig2 && this.data[i + 3] === sig3) {
        return i - this.zero;
      }
    }
    return -1;
  };
  ArrayReader.prototype.readAndCheckSignature = function(sig) {
    var sig0 = sig.charCodeAt(0), sig1 = sig.charCodeAt(1), sig2 = sig.charCodeAt(2), sig3 = sig.charCodeAt(3), data = this.readData(4);
    return sig0 === data[0] && sig1 === data[1] && sig2 === data[2] && sig3 === data[3];
  };
  ArrayReader.prototype.readData = function(size) {
    this.checkOffset(size);
    if (size === 0) {
      return [];
    }
    var result = this.data.slice(this.zero + this.index, this.zero + this.index + size);
    this.index += size;
    return result;
  };
  module.exports = ArrayReader;
});

// node_modules/jszip/lib/reader/StringReader.js
var require_StringReader = __commonJS((exports, module) => {
  function StringReader(data) {
    DataReader.call(this, data);
  }
  var DataReader = require_DataReader();
  var utils = require_utils();
  utils.inherits(StringReader, DataReader);
  StringReader.prototype.byteAt = function(i) {
    return this.data.charCodeAt(this.zero + i);
  };
  StringReader.prototype.lastIndexOfSignature = function(sig) {
    return this.data.lastIndexOf(sig) - this.zero;
  };
  StringReader.prototype.readAndCheckSignature = function(sig) {
    var data = this.readData(4);
    return sig === data;
  };
  StringReader.prototype.readData = function(size) {
    this.checkOffset(size);
    var result = this.data.slice(this.zero + this.index, this.zero + this.index + size);
    this.index += size;
    return result;
  };
  module.exports = StringReader;
});

// node_modules/jszip/lib/reader/Uint8ArrayReader.js
var require_Uint8ArrayReader = __commonJS((exports, module) => {
  function Uint8ArrayReader(data) {
    ArrayReader.call(this, data);
  }
  var ArrayReader = require_ArrayReader();
  var utils = require_utils();
  utils.inherits(Uint8ArrayReader, ArrayReader);
  Uint8ArrayReader.prototype.readData = function(size) {
    this.checkOffset(size);
    if (size === 0) {
      return new Uint8Array(0);
    }
    var result = this.data.subarray(this.zero + this.index, this.zero + this.index + size);
    this.index += size;
    return result;
  };
  module.exports = Uint8ArrayReader;
});

// node_modules/jszip/lib/reader/NodeBufferReader.js
var require_NodeBufferReader = __commonJS((exports, module) => {
  function NodeBufferReader(data) {
    Uint8ArrayReader.call(this, data);
  }
  var Uint8ArrayReader = require_Uint8ArrayReader();
  var utils = require_utils();
  utils.inherits(NodeBufferReader, Uint8ArrayReader);
  NodeBufferReader.prototype.readData = function(size) {
    this.checkOffset(size);
    var result = this.data.slice(this.zero + this.index, this.zero + this.index + size);
    this.index += size;
    return result;
  };
  module.exports = NodeBufferReader;
});

// node_modules/jszip/lib/reader/readerFor.js
var require_readerFor = __commonJS((exports, module) => {
  var utils = require_utils();
  var support = require_support();
  var ArrayReader = require_ArrayReader();
  var StringReader = require_StringReader();
  var NodeBufferReader = require_NodeBufferReader();
  var Uint8ArrayReader = require_Uint8ArrayReader();
  module.exports = function(data) {
    var type = utils.getTypeOf(data);
    utils.checkSupport(type);
    if (type === "string" && !support.uint8array) {
      return new StringReader(data);
    }
    if (type === "nodebuffer") {
      return new NodeBufferReader(data);
    }
    if (support.uint8array) {
      return new Uint8ArrayReader(utils.transformTo("uint8array", data));
    }
    return new ArrayReader(utils.transformTo("array", data));
  };
});

// node_modules/jszip/lib/zipEntry.js
var require_zipEntry = __commonJS((exports, module) => {
  function ZipEntry(options, loadOptions) {
    this.options = options;
    this.loadOptions = loadOptions;
  }
  var readerFor = require_readerFor();
  var utils = require_utils();
  var CompressedObject = require_compressedObject();
  var crc32fn = require_crc32();
  var utf8 = require_utf8();
  var compressions = require_compressions();
  var support = require_support();
  var MADE_BY_DOS = 0;
  var MADE_BY_UNIX = 3;
  var findCompression = function(compressionMethod) {
    for (var method in compressions) {
      if (!Object.prototype.hasOwnProperty.call(compressions, method)) {
        continue;
      }
      if (compressions[method].magic === compressionMethod) {
        return compressions[method];
      }
    }
    return null;
  };
  ZipEntry.prototype = {
    isEncrypted: function() {
      return (this.bitFlag & 1) === 1;
    },
    useUTF8: function() {
      return (this.bitFlag & 2048) === 2048;
    },
    readLocalPart: function(reader) {
      var compression, localExtraFieldsLength;
      reader.skip(22);
      this.fileNameLength = reader.readInt(2);
      localExtraFieldsLength = reader.readInt(2);
      this.fileName = reader.readData(this.fileNameLength);
      reader.skip(localExtraFieldsLength);
      if (this.compressedSize === -1 || this.uncompressedSize === -1) {
        throw new Error("Bug or corrupted zip : didn't get enough information from the central directory " + "(compressedSize === -1 || uncompressedSize === -1)");
      }
      compression = findCompression(this.compressionMethod);
      if (compression === null) {
        throw new Error("Corrupted zip : compression " + utils.pretty(this.compressionMethod) + " unknown (inner file : " + utils.transformTo("string", this.fileName) + ")");
      }
      this.decompressed = new CompressedObject(this.compressedSize, this.uncompressedSize, this.crc32, compression, reader.readData(this.compressedSize));
    },
    readCentralPart: function(reader) {
      this.versionMadeBy = reader.readInt(2);
      reader.skip(2);
      this.bitFlag = reader.readInt(2);
      this.compressionMethod = reader.readString(2);
      this.date = reader.readDate();
      this.crc32 = reader.readInt(4);
      this.compressedSize = reader.readInt(4);
      this.uncompressedSize = reader.readInt(4);
      var fileNameLength = reader.readInt(2);
      this.extraFieldsLength = reader.readInt(2);
      this.fileCommentLength = reader.readInt(2);
      this.diskNumberStart = reader.readInt(2);
      this.internalFileAttributes = reader.readInt(2);
      this.externalFileAttributes = reader.readInt(4);
      this.localHeaderOffset = reader.readInt(4);
      if (this.isEncrypted()) {
        throw new Error("Encrypted zip are not supported");
      }
      reader.skip(fileNameLength);
      this.readExtraFields(reader);
      this.parseZIP64ExtraField(reader);
      this.fileComment = reader.readData(this.fileCommentLength);
    },
    processAttributes: function() {
      this.unixPermissions = null;
      this.dosPermissions = null;
      var madeBy = this.versionMadeBy >> 8;
      this.dir = this.externalFileAttributes & 16 ? true : false;
      if (madeBy === MADE_BY_DOS) {
        this.dosPermissions = this.externalFileAttributes & 63;
      }
      if (madeBy === MADE_BY_UNIX) {
        this.unixPermissions = this.externalFileAttributes >> 16 & 65535;
      }
      if (!this.dir && this.fileNameStr.slice(-1) === "/") {
        this.dir = true;
      }
    },
    parseZIP64ExtraField: function() {
      if (!this.extraFields[1]) {
        return;
      }
      var extraReader = readerFor(this.extraFields[1].value);
      if (this.uncompressedSize === utils.MAX_VALUE_32BITS) {
        this.uncompressedSize = extraReader.readInt(8);
      }
      if (this.compressedSize === utils.MAX_VALUE_32BITS) {
        this.compressedSize = extraReader.readInt(8);
      }
      if (this.localHeaderOffset === utils.MAX_VALUE_32BITS) {
        this.localHeaderOffset = extraReader.readInt(8);
      }
      if (this.diskNumberStart === utils.MAX_VALUE_32BITS) {
        this.diskNumberStart = extraReader.readInt(4);
      }
    },
    readExtraFields: function(reader) {
      var end = reader.index + this.extraFieldsLength, extraFieldId, extraFieldLength, extraFieldValue;
      if (!this.extraFields) {
        this.extraFields = {};
      }
      while (reader.index + 4 < end) {
        extraFieldId = reader.readInt(2);
        extraFieldLength = reader.readInt(2);
        extraFieldValue = reader.readData(extraFieldLength);
        this.extraFields[extraFieldId] = {
          id: extraFieldId,
          length: extraFieldLength,
          value: extraFieldValue
        };
      }
      reader.setIndex(end);
    },
    handleUTF8: function() {
      var decodeParamType = support.uint8array ? "uint8array" : "array";
      if (this.useUTF8()) {
        this.fileNameStr = utf8.utf8decode(this.fileName);
        this.fileCommentStr = utf8.utf8decode(this.fileComment);
      } else {
        var upath = this.findExtraFieldUnicodePath();
        if (upath !== null) {
          this.fileNameStr = upath;
        } else {
          var fileNameByteArray = utils.transformTo(decodeParamType, this.fileName);
          this.fileNameStr = this.loadOptions.decodeFileName(fileNameByteArray);
        }
        var ucomment = this.findExtraFieldUnicodeComment();
        if (ucomment !== null) {
          this.fileCommentStr = ucomment;
        } else {
          var commentByteArray = utils.transformTo(decodeParamType, this.fileComment);
          this.fileCommentStr = this.loadOptions.decodeFileName(commentByteArray);
        }
      }
    },
    findExtraFieldUnicodePath: function() {
      var upathField = this.extraFields[28789];
      if (upathField) {
        var extraReader = readerFor(upathField.value);
        if (extraReader.readInt(1) !== 1) {
          return null;
        }
        if (crc32fn(this.fileName) !== extraReader.readInt(4)) {
          return null;
        }
        return utf8.utf8decode(extraReader.readData(upathField.length - 5));
      }
      return null;
    },
    findExtraFieldUnicodeComment: function() {
      var ucommentField = this.extraFields[25461];
      if (ucommentField) {
        var extraReader = readerFor(ucommentField.value);
        if (extraReader.readInt(1) !== 1) {
          return null;
        }
        if (crc32fn(this.fileComment) !== extraReader.readInt(4)) {
          return null;
        }
        return utf8.utf8decode(extraReader.readData(ucommentField.length - 5));
      }
      return null;
    }
  };
  module.exports = ZipEntry;
});

// node_modules/jszip/lib/zipEntries.js
var require_zipEntries = __commonJS((exports, module) => {
  function ZipEntries(loadOptions) {
    this.files = [];
    this.loadOptions = loadOptions;
  }
  var readerFor = require_readerFor();
  var utils = require_utils();
  var sig = require_signature();
  var ZipEntry = require_zipEntry();
  var support = require_support();
  ZipEntries.prototype = {
    checkSignature: function(expectedSignature) {
      if (!this.reader.readAndCheckSignature(expectedSignature)) {
        this.reader.index -= 4;
        var signature = this.reader.readString(4);
        throw new Error("Corrupted zip or bug: unexpected signature " + "(" + utils.pretty(signature) + ", expected " + utils.pretty(expectedSignature) + ")");
      }
    },
    isSignature: function(askedIndex, expectedSignature) {
      var currentIndex = this.reader.index;
      this.reader.setIndex(askedIndex);
      var signature = this.reader.readString(4);
      var result = signature === expectedSignature;
      this.reader.setIndex(currentIndex);
      return result;
    },
    readBlockEndOfCentral: function() {
      this.diskNumber = this.reader.readInt(2);
      this.diskWithCentralDirStart = this.reader.readInt(2);
      this.centralDirRecordsOnThisDisk = this.reader.readInt(2);
      this.centralDirRecords = this.reader.readInt(2);
      this.centralDirSize = this.reader.readInt(4);
      this.centralDirOffset = this.reader.readInt(4);
      this.zipCommentLength = this.reader.readInt(2);
      var zipComment = this.reader.readData(this.zipCommentLength);
      var decodeParamType = support.uint8array ? "uint8array" : "array";
      var decodeContent = utils.transformTo(decodeParamType, zipComment);
      this.zipComment = this.loadOptions.decodeFileName(decodeContent);
    },
    readBlockZip64EndOfCentral: function() {
      this.zip64EndOfCentralSize = this.reader.readInt(8);
      this.reader.skip(4);
      this.diskNumber = this.reader.readInt(4);
      this.diskWithCentralDirStart = this.reader.readInt(4);
      this.centralDirRecordsOnThisDisk = this.reader.readInt(8);
      this.centralDirRecords = this.reader.readInt(8);
      this.centralDirSize = this.reader.readInt(8);
      this.centralDirOffset = this.reader.readInt(8);
      this.zip64ExtensibleData = {};
      var extraDataSize = this.zip64EndOfCentralSize - 44, index = 0, extraFieldId, extraFieldLength, extraFieldValue;
      while (index < extraDataSize) {
        extraFieldId = this.reader.readInt(2);
        extraFieldLength = this.reader.readInt(4);
        extraFieldValue = this.reader.readData(extraFieldLength);
        this.zip64ExtensibleData[extraFieldId] = {
          id: extraFieldId,
          length: extraFieldLength,
          value: extraFieldValue
        };
      }
    },
    readBlockZip64EndOfCentralLocator: function() {
      this.diskWithZip64CentralDirStart = this.reader.readInt(4);
      this.relativeOffsetEndOfZip64CentralDir = this.reader.readInt(8);
      this.disksCount = this.reader.readInt(4);
      if (this.disksCount > 1) {
        throw new Error("Multi-volumes zip are not supported");
      }
    },
    readLocalFiles: function() {
      var i, file;
      for (i = 0;i < this.files.length; i++) {
        file = this.files[i];
        this.reader.setIndex(file.localHeaderOffset);
        this.checkSignature(sig.LOCAL_FILE_HEADER);
        file.readLocalPart(this.reader);
        file.handleUTF8();
        file.processAttributes();
      }
    },
    readCentralDir: function() {
      var file;
      this.reader.setIndex(this.centralDirOffset);
      while (this.reader.readAndCheckSignature(sig.CENTRAL_FILE_HEADER)) {
        file = new ZipEntry({
          zip64: this.zip64
        }, this.loadOptions);
        file.readCentralPart(this.reader);
        this.files.push(file);
      }
      if (this.centralDirRecords !== this.files.length) {
        if (this.centralDirRecords !== 0 && this.files.length === 0) {
          throw new Error("Corrupted zip or bug: expected " + this.centralDirRecords + " records in central dir, got " + this.files.length);
        } else {
        }
      }
    },
    readEndOfCentral: function() {
      var offset = this.reader.lastIndexOfSignature(sig.CENTRAL_DIRECTORY_END);
      if (offset < 0) {
        var isGarbage = !this.isSignature(0, sig.LOCAL_FILE_HEADER);
        if (isGarbage) {
          throw new Error("Can't find end of central directory : is this a zip file ? " + "If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");
        } else {
          throw new Error("Corrupted zip: can't find end of central directory");
        }
      }
      this.reader.setIndex(offset);
      var endOfCentralDirOffset = offset;
      this.checkSignature(sig.CENTRAL_DIRECTORY_END);
      this.readBlockEndOfCentral();
      if (this.diskNumber === utils.MAX_VALUE_16BITS || this.diskWithCentralDirStart === utils.MAX_VALUE_16BITS || this.centralDirRecordsOnThisDisk === utils.MAX_VALUE_16BITS || this.centralDirRecords === utils.MAX_VALUE_16BITS || this.centralDirSize === utils.MAX_VALUE_32BITS || this.centralDirOffset === utils.MAX_VALUE_32BITS) {
        this.zip64 = true;
        offset = this.reader.lastIndexOfSignature(sig.ZIP64_CENTRAL_DIRECTORY_LOCATOR);
        if (offset < 0) {
          throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");
        }
        this.reader.setIndex(offset);
        this.checkSignature(sig.ZIP64_CENTRAL_DIRECTORY_LOCATOR);
        this.readBlockZip64EndOfCentralLocator();
        if (!this.isSignature(this.relativeOffsetEndOfZip64CentralDir, sig.ZIP64_CENTRAL_DIRECTORY_END)) {
          this.relativeOffsetEndOfZip64CentralDir = this.reader.lastIndexOfSignature(sig.ZIP64_CENTRAL_DIRECTORY_END);
          if (this.relativeOffsetEndOfZip64CentralDir < 0) {
            throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");
          }
        }
        this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir);
        this.checkSignature(sig.ZIP64_CENTRAL_DIRECTORY_END);
        this.readBlockZip64EndOfCentral();
      }
      var expectedEndOfCentralDirOffset = this.centralDirOffset + this.centralDirSize;
      if (this.zip64) {
        expectedEndOfCentralDirOffset += 20;
        expectedEndOfCentralDirOffset += 12 + this.zip64EndOfCentralSize;
      }
      var extraBytes = endOfCentralDirOffset - expectedEndOfCentralDirOffset;
      if (extraBytes > 0) {
        if (this.isSignature(endOfCentralDirOffset, sig.CENTRAL_FILE_HEADER)) {
        } else {
          this.reader.zero = extraBytes;
        }
      } else if (extraBytes < 0) {
        throw new Error("Corrupted zip: missing " + Math.abs(extraBytes) + " bytes.");
      }
    },
    prepareReader: function(data) {
      this.reader = readerFor(data);
    },
    load: function(data) {
      this.prepareReader(data);
      this.readEndOfCentral();
      this.readCentralDir();
      this.readLocalFiles();
    }
  };
  module.exports = ZipEntries;
});

// node_modules/jszip/lib/load.js
var require_load = __commonJS((exports, module) => {
  function checkEntryCRC32(zipEntry) {
    return new external.Promise(function(resolve, reject) {
      var worker = zipEntry.decompressed.getContentWorker().pipe(new Crc32Probe);
      worker.on("error", function(e) {
        reject(e);
      }).on("end", function() {
        if (worker.streamInfo.crc32 !== zipEntry.decompressed.crc32) {
          reject(new Error("Corrupted zip : CRC32 mismatch"));
        } else {
          resolve();
        }
      }).resume();
    });
  }
  var utils = require_utils();
  var external = require_external();
  var utf8 = require_utf8();
  var ZipEntries = require_zipEntries();
  var Crc32Probe = require_Crc32Probe();
  var nodejsUtils = require_nodejsUtils();
  module.exports = function(data, options) {
    var zip = this;
    options = utils.extend(options || {}, {
      base64: false,
      checkCRC32: false,
      optimizedBinaryString: false,
      createFolders: false,
      decodeFileName: utf8.utf8decode
    });
    if (nodejsUtils.isNode && nodejsUtils.isStream(data)) {
      return external.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file."));
    }
    return utils.prepareContent("the loaded zip file", data, true, options.optimizedBinaryString, options.base64).then(function(data2) {
      var zipEntries = new ZipEntries(options);
      zipEntries.load(data2);
      return zipEntries;
    }).then(function checkCRC32(zipEntries) {
      var promises = [external.Promise.resolve(zipEntries)];
      var files = zipEntries.files;
      if (options.checkCRC32) {
        for (var i = 0;i < files.length; i++) {
          promises.push(checkEntryCRC32(files[i]));
        }
      }
      return external.Promise.all(promises);
    }).then(function addFiles(results) {
      var zipEntries = results.shift();
      var files = zipEntries.files;
      for (var i = 0;i < files.length; i++) {
        var input = files[i];
        var unsafeName = input.fileNameStr;
        var safeName = utils.resolve(input.fileNameStr);
        zip.file(safeName, input.decompressed, {
          binary: true,
          optimizedBinaryString: true,
          date: input.date,
          dir: input.dir,
          comment: input.fileCommentStr.length ? input.fileCommentStr : null,
          unixPermissions: input.unixPermissions,
          dosPermissions: input.dosPermissions,
          createFolders: options.createFolders
        });
        if (!input.dir) {
          zip.file(safeName).unsafeOriginalName = unsafeName;
        }
      }
      if (zipEntries.zipComment.length) {
        zip.comment = zipEntries.zipComment;
      }
      return zip;
    });
  };
});

// node_modules/jszip/lib/index.js
var require_lib = __commonJS((exports, module) => {
  function JSZip() {
    if (!(this instanceof JSZip)) {
      return new JSZip;
    }
    if (arguments.length) {
      throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");
    }
    this.files = Object.create(null);
    this.comment = null;
    this.root = "";
    this.clone = function() {
      var newObj = new JSZip;
      for (var i in this) {
        if (typeof this[i] !== "function") {
          newObj[i] = this[i];
        }
      }
      return newObj;
    };
  }
  JSZip.prototype = require_object();
  JSZip.prototype.loadAsync = require_load();
  JSZip.support = require_support();
  JSZip.defaults = require_defaults();
  JSZip.version = "3.10.1";
  JSZip.loadAsync = function(content, options) {
    return new JSZip().loadAsync(content, options);
  };
  JSZip.external = require_external();
  module.exports = JSZip;
});

// node_modules/crypt/crypt.js
var require_crypt = __commonJS((exports, module) => {
  (function() {
    var base64map = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", crypt = {
      rotl: function(n, b) {
        return n << b | n >>> 32 - b;
      },
      rotr: function(n, b) {
        return n << 32 - b | n >>> b;
      },
      endian: function(n) {
        if (n.constructor == Number) {
          return crypt.rotl(n, 8) & 16711935 | crypt.rotl(n, 24) & 4278255360;
        }
        for (var i = 0;i < n.length; i++)
          n[i] = crypt.endian(n[i]);
        return n;
      },
      randomBytes: function(n) {
        for (var bytes = [];n > 0; n--)
          bytes.push(Math.floor(Math.random() * 256));
        return bytes;
      },
      bytesToWords: function(bytes) {
        for (var words = [], i = 0, b = 0;i < bytes.length; i++, b += 8)
          words[b >>> 5] |= bytes[i] << 24 - b % 32;
        return words;
      },
      wordsToBytes: function(words) {
        for (var bytes = [], b = 0;b < words.length * 32; b += 8)
          bytes.push(words[b >>> 5] >>> 24 - b % 32 & 255);
        return bytes;
      },
      bytesToHex: function(bytes) {
        for (var hex = [], i = 0;i < bytes.length; i++) {
          hex.push((bytes[i] >>> 4).toString(16));
          hex.push((bytes[i] & 15).toString(16));
        }
        return hex.join("");
      },
      hexToBytes: function(hex) {
        for (var bytes = [], c = 0;c < hex.length; c += 2)
          bytes.push(parseInt(hex.substr(c, 2), 16));
        return bytes;
      },
      bytesToBase64: function(bytes) {
        for (var base64 = [], i = 0;i < bytes.length; i += 3) {
          var triplet = bytes[i] << 16 | bytes[i + 1] << 8 | bytes[i + 2];
          for (var j = 0;j < 4; j++)
            if (i * 8 + j * 6 <= bytes.length * 8)
              base64.push(base64map.charAt(triplet >>> 6 * (3 - j) & 63));
            else
              base64.push("=");
        }
        return base64.join("");
      },
      base64ToBytes: function(base64) {
        base64 = base64.replace(/[^A-Z0-9+\/]/ig, "");
        for (var bytes = [], i = 0, imod4 = 0;i < base64.length; imod4 = ++i % 4) {
          if (imod4 == 0)
            continue;
          bytes.push((base64map.indexOf(base64.charAt(i - 1)) & Math.pow(2, -2 * imod4 + 8) - 1) << imod4 * 2 | base64map.indexOf(base64.charAt(i)) >>> 6 - imod4 * 2);
        }
        return bytes;
      }
    };
    module.exports = crypt;
  })();
});

// node_modules/charenc/charenc.js
var require_charenc = __commonJS((exports, module) => {
  var charenc = {
    utf8: {
      stringToBytes: function(str) {
        return charenc.bin.stringToBytes(unescape(encodeURIComponent(str)));
      },
      bytesToString: function(bytes) {
        return decodeURIComponent(escape(charenc.bin.bytesToString(bytes)));
      }
    },
    bin: {
      stringToBytes: function(str) {
        for (var bytes = [], i = 0;i < str.length; i++)
          bytes.push(str.charCodeAt(i) & 255);
        return bytes;
      },
      bytesToString: function(bytes) {
        for (var str = [], i = 0;i < bytes.length; i++)
          str.push(String.fromCharCode(bytes[i]));
        return str.join("");
      }
    }
  };
  module.exports = charenc;
});

// node_modules/is-buffer/index.js
var require_is_buffer = __commonJS((exports, module) => {
  function isBuffer(obj) {
    return !!obj.constructor && typeof obj.constructor.isBuffer === "function" && obj.constructor.isBuffer(obj);
  }
  function isSlowBuffer(obj) {
    return typeof obj.readFloatLE === "function" && typeof obj.slice === "function" && isBuffer(obj.slice(0, 0));
  }
  /*!
   * Determine if an object is a Buffer
   *
   * @author   Feross Aboukhadijeh <https://feross.org>
   * @license  MIT
   */
  module.exports = function(obj) {
    return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer);
  };
});

// node_modules/md5/md5.js
var require_md5 = __commonJS((exports, module) => {
  (function() {
    var crypt = require_crypt(), utf8 = require_charenc().utf8, isBuffer = require_is_buffer(), bin = require_charenc().bin, md5 = function(message, options) {
      if (message.constructor == String)
        if (options && options.encoding === "binary")
          message = bin.stringToBytes(message);
        else
          message = utf8.stringToBytes(message);
      else if (isBuffer(message))
        message = Array.prototype.slice.call(message, 0);
      else if (!Array.isArray(message) && message.constructor !== Uint8Array)
        message = message.toString();
      var m = crypt.bytesToWords(message), l = message.length * 8, a = 1732584193, b = -271733879, c = -1732584194, d = 271733878;
      for (var i = 0;i < m.length; i++) {
        m[i] = (m[i] << 8 | m[i] >>> 24) & 16711935 | (m[i] << 24 | m[i] >>> 8) & 4278255360;
      }
      m[l >>> 5] |= 128 << l % 32;
      m[(l + 64 >>> 9 << 4) + 14] = l;
      var { _ff: FF, _gg: GG, _hh: HH, _ii: II } = md5;
      for (var i = 0;i < m.length; i += 16) {
        var aa = a, bb = b, cc = c, dd = d;
        a = FF(a, b, c, d, m[i + 0], 7, -680876936);
        d = FF(d, a, b, c, m[i + 1], 12, -389564586);
        c = FF(c, d, a, b, m[i + 2], 17, 606105819);
        b = FF(b, c, d, a, m[i + 3], 22, -1044525330);
        a = FF(a, b, c, d, m[i + 4], 7, -176418897);
        d = FF(d, a, b, c, m[i + 5], 12, 1200080426);
        c = FF(c, d, a, b, m[i + 6], 17, -1473231341);
        b = FF(b, c, d, a, m[i + 7], 22, -45705983);
        a = FF(a, b, c, d, m[i + 8], 7, 1770035416);
        d = FF(d, a, b, c, m[i + 9], 12, -1958414417);
        c = FF(c, d, a, b, m[i + 10], 17, -42063);
        b = FF(b, c, d, a, m[i + 11], 22, -1990404162);
        a = FF(a, b, c, d, m[i + 12], 7, 1804603682);
        d = FF(d, a, b, c, m[i + 13], 12, -40341101);
        c = FF(c, d, a, b, m[i + 14], 17, -1502002290);
        b = FF(b, c, d, a, m[i + 15], 22, 1236535329);
        a = GG(a, b, c, d, m[i + 1], 5, -165796510);
        d = GG(d, a, b, c, m[i + 6], 9, -1069501632);
        c = GG(c, d, a, b, m[i + 11], 14, 643717713);
        b = GG(b, c, d, a, m[i + 0], 20, -373897302);
        a = GG(a, b, c, d, m[i + 5], 5, -701558691);
        d = GG(d, a, b, c, m[i + 10], 9, 38016083);
        c = GG(c, d, a, b, m[i + 15], 14, -660478335);
        b = GG(b, c, d, a, m[i + 4], 20, -405537848);
        a = GG(a, b, c, d, m[i + 9], 5, 568446438);
        d = GG(d, a, b, c, m[i + 14], 9, -1019803690);
        c = GG(c, d, a, b, m[i + 3], 14, -187363961);
        b = GG(b, c, d, a, m[i + 8], 20, 1163531501);
        a = GG(a, b, c, d, m[i + 13], 5, -1444681467);
        d = GG(d, a, b, c, m[i + 2], 9, -51403784);
        c = GG(c, d, a, b, m[i + 7], 14, 1735328473);
        b = GG(b, c, d, a, m[i + 12], 20, -1926607734);
        a = HH(a, b, c, d, m[i + 5], 4, -378558);
        d = HH(d, a, b, c, m[i + 8], 11, -2022574463);
        c = HH(c, d, a, b, m[i + 11], 16, 1839030562);
        b = HH(b, c, d, a, m[i + 14], 23, -35309556);
        a = HH(a, b, c, d, m[i + 1], 4, -1530992060);
        d = HH(d, a, b, c, m[i + 4], 11, 1272893353);
        c = HH(c, d, a, b, m[i + 7], 16, -155497632);
        b = HH(b, c, d, a, m[i + 10], 23, -1094730640);
        a = HH(a, b, c, d, m[i + 13], 4, 681279174);
        d = HH(d, a, b, c, m[i + 0], 11, -358537222);
        c = HH(c, d, a, b, m[i + 3], 16, -722521979);
        b = HH(b, c, d, a, m[i + 6], 23, 76029189);
        a = HH(a, b, c, d, m[i + 9], 4, -640364487);
        d = HH(d, a, b, c, m[i + 12], 11, -421815835);
        c = HH(c, d, a, b, m[i + 15], 16, 530742520);
        b = HH(b, c, d, a, m[i + 2], 23, -995338651);
        a = II(a, b, c, d, m[i + 0], 6, -198630844);
        d = II(d, a, b, c, m[i + 7], 10, 1126891415);
        c = II(c, d, a, b, m[i + 14], 15, -1416354905);
        b = II(b, c, d, a, m[i + 5], 21, -57434055);
        a = II(a, b, c, d, m[i + 12], 6, 1700485571);
        d = II(d, a, b, c, m[i + 3], 10, -1894986606);
        c = II(c, d, a, b, m[i + 10], 15, -1051523);
        b = II(b, c, d, a, m[i + 1], 21, -2054922799);
        a = II(a, b, c, d, m[i + 8], 6, 1873313359);
        d = II(d, a, b, c, m[i + 15], 10, -30611744);
        c = II(c, d, a, b, m[i + 6], 15, -1560198380);
        b = II(b, c, d, a, m[i + 13], 21, 1309151649);
        a = II(a, b, c, d, m[i + 4], 6, -145523070);
        d = II(d, a, b, c, m[i + 11], 10, -1120210379);
        c = II(c, d, a, b, m[i + 2], 15, 718787259);
        b = II(b, c, d, a, m[i + 9], 21, -343485551);
        a = a + aa >>> 0;
        b = b + bb >>> 0;
        c = c + cc >>> 0;
        d = d + dd >>> 0;
      }
      return crypt.endian([a, b, c, d]);
    };
    md5._ff = function(a, b, c, d, x, s, t) {
      var n = a + (b & c | ~b & d) + (x >>> 0) + t;
      return (n << s | n >>> 32 - s) + b;
    };
    md5._gg = function(a, b, c, d, x, s, t) {
      var n = a + (b & d | c & ~d) + (x >>> 0) + t;
      return (n << s | n >>> 32 - s) + b;
    };
    md5._hh = function(a, b, c, d, x, s, t) {
      var n = a + (b ^ c ^ d) + (x >>> 0) + t;
      return (n << s | n >>> 32 - s) + b;
    };
    md5._ii = function(a, b, c, d, x, s, t) {
      var n = a + (c ^ (b | ~d)) + (x >>> 0) + t;
      return (n << s | n >>> 32 - s) + b;
    };
    md5._blocksize = 16;
    md5._digestsize = 16;
    module.exports = function(message, options) {
      if (message === undefined || message === null)
        throw new Error("Illegal argument " + message);
      var digestbytes = crypt.wordsToBytes(md5(message, options));
      return options && options.asBytes ? digestbytes : options && options.asString ? bin.bytesToString(digestbytes) : crypt.bytesToHex(digestbytes);
    };
  })();
});

// node_modules/base64-js/index.js
var require_base64_js = __commonJS((exports) => {
  function getLens(b64) {
    var len2 = b64.length;
    if (len2 % 4 > 0) {
      throw new Error("Invalid string. Length must be a multiple of 4");
    }
    var validLen = b64.indexOf("=");
    if (validLen === -1)
      validLen = len2;
    var placeHoldersLen = validLen === len2 ? 0 : 4 - validLen % 4;
    return [validLen, placeHoldersLen];
  }
  function byteLength(b64) {
    var lens = getLens(b64);
    var validLen = lens[0];
    var placeHoldersLen = lens[1];
    return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
  }
  function _byteLength(b64, validLen, placeHoldersLen) {
    return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
  }
  function toByteArray(b64) {
    var tmp;
    var lens = getLens(b64);
    var validLen = lens[0];
    var placeHoldersLen = lens[1];
    var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen));
    var curByte = 0;
    var len2 = placeHoldersLen > 0 ? validLen - 4 : validLen;
    var i2;
    for (i2 = 0;i2 < len2; i2 += 4) {
      tmp = revLookup[b64.charCodeAt(i2)] << 18 | revLookup[b64.charCodeAt(i2 + 1)] << 12 | revLookup[b64.charCodeAt(i2 + 2)] << 6 | revLookup[b64.charCodeAt(i2 + 3)];
      arr[curByte++] = tmp >> 16 & 255;
      arr[curByte++] = tmp >> 8 & 255;
      arr[curByte++] = tmp & 255;
    }
    if (placeHoldersLen === 2) {
      tmp = revLookup[b64.charCodeAt(i2)] << 2 | revLookup[b64.charCodeAt(i2 + 1)] >> 4;
      arr[curByte++] = tmp & 255;
    }
    if (placeHoldersLen === 1) {
      tmp = revLookup[b64.charCodeAt(i2)] << 10 | revLookup[b64.charCodeAt(i2 + 1)] << 4 | revLookup[b64.charCodeAt(i2 + 2)] >> 2;
      arr[curByte++] = tmp >> 8 & 255;
      arr[curByte++] = tmp & 255;
    }
    return arr;
  }
  function tripletToBase64(num) {
    return lookup[num >> 18 & 63] + lookup[num >> 12 & 63] + lookup[num >> 6 & 63] + lookup[num & 63];
  }
  function encodeChunk(uint8, start, end) {
    var tmp;
    var output = [];
    for (var i2 = start;i2 < end; i2 += 3) {
      tmp = (uint8[i2] << 16 & 16711680) + (uint8[i2 + 1] << 8 & 65280) + (uint8[i2 + 2] & 255);
      output.push(tripletToBase64(tmp));
    }
    return output.join("");
  }
  function fromByteArray(uint8) {
    var tmp;
    var len2 = uint8.length;
    var extraBytes = len2 % 3;
    var parts = [];
    var maxChunkLength = 16383;
    for (var i2 = 0, len22 = len2 - extraBytes;i2 < len22; i2 += maxChunkLength) {
      parts.push(encodeChunk(uint8, i2, i2 + maxChunkLength > len22 ? len22 : i2 + maxChunkLength));
    }
    if (extraBytes === 1) {
      tmp = uint8[len2 - 1];
      parts.push(lookup[tmp >> 2] + lookup[tmp << 4 & 63] + "==");
    } else if (extraBytes === 2) {
      tmp = (uint8[len2 - 2] << 8) + uint8[len2 - 1];
      parts.push(lookup[tmp >> 10] + lookup[tmp >> 4 & 63] + lookup[tmp << 2 & 63] + "=");
    }
    return parts.join("");
  }
  exports.byteLength = byteLength;
  exports.toByteArray = toByteArray;
  exports.fromByteArray = fromByteArray;
  var lookup = [];
  var revLookup = [];
  var Arr = typeof Uint8Array !== "undefined" ? Uint8Array : Array;
  var code = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  for (i = 0, len = code.length;i < len; ++i) {
    lookup[i] = code[i];
    revLookup[code.charCodeAt(i)] = i;
  }
  var i;
  var len;
  revLookup["-".charCodeAt(0)] = 62;
  revLookup["_".charCodeAt(0)] = 63;
});

// node_modules/ieee754/index.js
var require_ieee754 = __commonJS((exports) => {
  /*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
  exports.read = function(buffer, offset, isLE, mLen, nBytes) {
    var e, m;
    var eLen = nBytes * 8 - mLen - 1;
    var eMax = (1 << eLen) - 1;
    var eBias = eMax >> 1;
    var nBits = -7;
    var i = isLE ? nBytes - 1 : 0;
    var d = isLE ? -1 : 1;
    var s = buffer[offset + i];
    i += d;
    e = s & (1 << -nBits) - 1;
    s >>= -nBits;
    nBits += eLen;
    for (;nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {
    }
    m = e & (1 << -nBits) - 1;
    e >>= -nBits;
    nBits += mLen;
    for (;nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {
    }
    if (e === 0) {
      e = 1 - eBias;
    } else if (e === eMax) {
      return m ? NaN : (s ? -1 : 1) * Infinity;
    } else {
      m = m + Math.pow(2, mLen);
      e = e - eBias;
    }
    return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
  };
  exports.write = function(buffer, value, offset, isLE, mLen, nBytes) {
    var e, m, c;
    var eLen = nBytes * 8 - mLen - 1;
    var eMax = (1 << eLen) - 1;
    var eBias = eMax >> 1;
    var rt2 = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
    var i = isLE ? 0 : nBytes - 1;
    var d = isLE ? 1 : -1;
    var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
    value = Math.abs(value);
    if (isNaN(value) || value === Infinity) {
      m = isNaN(value) ? 1 : 0;
      e = eMax;
    } else {
      e = Math.floor(Math.log(value) / Math.LN2);
      if (value * (c = Math.pow(2, -e)) < 1) {
        e--;
        c *= 2;
      }
      if (e + eBias >= 1) {
        value += rt2 / c;
      } else {
        value += rt2 * Math.pow(2, 1 - eBias);
      }
      if (value * c >= 2) {
        e++;
        c /= 2;
      }
      if (e + eBias >= eMax) {
        m = 0;
        e = eMax;
      } else if (e + eBias >= 1) {
        m = (value * c - 1) * Math.pow(2, mLen);
        e = e + eBias;
      } else {
        m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
        e = 0;
      }
    }
    for (;mLen >= 8; buffer[offset + i] = m & 255, i += d, m /= 256, mLen -= 8) {
    }
    e = e << mLen | m;
    eLen += mLen;
    for (;eLen > 0; buffer[offset + i] = e & 255, i += d, e /= 256, eLen -= 8) {
    }
    buffer[offset + i - d] |= s * 128;
  };
});

// node_modules/object-keys/isArguments.js
var require_isArguments = __commonJS((exports, module) => {
  var toStr = Object.prototype.toString;
  module.exports = function isArguments(value) {
    var str = toStr.call(value);
    var isArgs = str === "[object Arguments]";
    if (!isArgs) {
      isArgs = str !== "[object Array]" && value !== null && typeof value === "object" && typeof value.length === "number" && value.length >= 0 && toStr.call(value.callee) === "[object Function]";
    }
    return isArgs;
  };
});

// node_modules/object-keys/implementation.js
var require_implementation = __commonJS((exports, module) => {
  var keysShim;
  if (!Object.keys) {
    has = Object.prototype.hasOwnProperty;
    toStr = Object.prototype.toString;
    isArgs = require_isArguments();
    isEnumerable = Object.prototype.propertyIsEnumerable;
    hasDontEnumBug = !isEnumerable.call({ toString: null }, "toString");
    hasProtoEnumBug = isEnumerable.call(function() {
    }, "prototype");
    dontEnums = [
      "toString",
      "toLocaleString",
      "valueOf",
      "hasOwnProperty",
      "isPrototypeOf",
      "propertyIsEnumerable",
      "constructor"
    ];
    equalsConstructorPrototype = function(o) {
      var ctor = o.constructor;
      return ctor && ctor.prototype === o;
    };
    excludedKeys = {
      $applicationCache: true,
      $console: true,
      $external: true,
      $frame: true,
      $frameElement: true,
      $frames: true,
      $innerHeight: true,
      $innerWidth: true,
      $onmozfullscreenchange: true,
      $onmozfullscreenerror: true,
      $outerHeight: true,
      $outerWidth: true,
      $pageXOffset: true,
      $pageYOffset: true,
      $parent: true,
      $scrollLeft: true,
      $scrollTop: true,
      $scrollX: true,
      $scrollY: true,
      $self: true,
      $webkitIndexedDB: true,
      $webkitStorageInfo: true,
      $window: true
    };
    hasAutomationEqualityBug = function() {
      if (typeof window === "undefined") {
        return false;
      }
      for (var k2 in window) {
        try {
          if (!excludedKeys["$" + k2] && has.call(window, k2) && window[k2] !== null && typeof window[k2] === "object") {
            try {
              equalsConstructorPrototype(window[k2]);
            } catch (e) {
              return true;
            }
          }
        } catch (e) {
          return true;
        }
      }
      return false;
    }();
    equalsConstructorPrototypeIfNotBuggy = function(o) {
      if (typeof window === "undefined" || !hasAutomationEqualityBug) {
        return equalsConstructorPrototype(o);
      }
      try {
        return equalsConstructorPrototype(o);
      } catch (e) {
        return false;
      }
    };
    keysShim = function keys(object) {
      var isObject = object !== null && typeof object === "object";
      var isFunction = toStr.call(object) === "[object Function]";
      var isArguments = isArgs(object);
      var isString = isObject && toStr.call(object) === "[object String]";
      var theKeys = [];
      if (!isObject && !isFunction && !isArguments) {
        throw new TypeError("Object.keys called on a non-object");
      }
      var skipProto = hasProtoEnumBug && isFunction;
      if (isString && object.length > 0 && !has.call(object, 0)) {
        for (var i = 0;i < object.length; ++i) {
          theKeys.push(String(i));
        }
      }
      if (isArguments && object.length > 0) {
        for (var j = 0;j < object.length; ++j) {
          theKeys.push(String(j));
        }
      } else {
        for (var name in object) {
          if (!(skipProto && name === "prototype") && has.call(object, name)) {
            theKeys.push(String(name));
          }
        }
      }
      if (hasDontEnumBug) {
        var skipConstructor = equalsConstructorPrototypeIfNotBuggy(object);
        for (var k2 = 0;k2 < dontEnums.length; ++k2) {
          if (!(skipConstructor && dontEnums[k2] === "constructor") && has.call(object, dontEnums[k2])) {
            theKeys.push(dontEnums[k2]);
          }
        }
      }
      return theKeys;
    };
  }
  var has;
  var toStr;
  var isArgs;
  var isEnumerable;
  var hasDontEnumBug;
  var hasProtoEnumBug;
  var dontEnums;
  var equalsConstructorPrototype;
  var excludedKeys;
  var hasAutomationEqualityBug;
  var equalsConstructorPrototypeIfNotBuggy;
  module.exports = keysShim;
});

// node_modules/object-keys/index.js
var require_object_keys = __commonJS((exports, module) => {
  var slice2 = Array.prototype.slice;
  var isArgs = require_isArguments();
  var origKeys = Object.keys;
  var keysShim = origKeys ? function keys(o) {
    return origKeys(o);
  } : require_implementation();
  var originalKeys = Object.keys;
  keysShim.shim = function shimObjectKeys() {
    if (Object.keys) {
      var keysWorksWithArguments = function() {
        var args = Object.keys(arguments);
        return args && args.length === arguments.length;
      }(1, 2);
      if (!keysWorksWithArguments) {
        Object.keys = function keys(object) {
          if (isArgs(object)) {
            return originalKeys(slice2.call(object));
          }
          return originalKeys(object);
        };
      }
    } else {
      Object.keys = keysShim;
    }
    return Object.keys || keysShim;
  };
  module.exports = keysShim;
});

// node_modules/es-errors/index.js
var require_es_errors = __commonJS((exports, module) => {
  module.exports = Error;
});

// node_modules/es-errors/eval.js
var require_eval = __commonJS((exports, module) => {
  module.exports = EvalError;
});

// node_modules/es-errors/range.js
var require_range = __commonJS((exports, module) => {
  module.exports = RangeError;
});

// node_modules/es-errors/ref.js
var require_ref = __commonJS((exports, module) => {
  module.exports = ReferenceError;
});

// node_modules/es-errors/syntax.js
var require_syntax = __commonJS((exports, module) => {
  module.exports = SyntaxError;
});

// node_modules/es-errors/type.js
var require_type = __commonJS((exports, module) => {
  module.exports = TypeError;
});

// node_modules/es-errors/uri.js
var require_uri = __commonJS((exports, module) => {
  module.exports = URIError;
});

// node_modules/has-symbols/shams.js
var require_shams = __commonJS((exports, module) => {
  module.exports = function hasSymbols() {
    if (typeof Symbol !== "function" || typeof Object.getOwnPropertySymbols !== "function") {
      return false;
    }
    if (typeof Symbol.iterator === "symbol") {
      return true;
    }
    var obj = {};
    var sym = Symbol("test");
    var symObj = Object(sym);
    if (typeof sym === "string") {
      return false;
    }
    if (Object.prototype.toString.call(sym) !== "[object Symbol]") {
      return false;
    }
    if (Object.prototype.toString.call(symObj) !== "[object Symbol]") {
      return false;
    }
    var symVal = 42;
    obj[sym] = symVal;
    for (sym in obj) {
      return false;
    }
    if (typeof Object.keys === "function" && Object.keys(obj).length !== 0) {
      return false;
    }
    if (typeof Object.getOwnPropertyNames === "function" && Object.getOwnPropertyNames(obj).length !== 0) {
      return false;
    }
    var syms = Object.getOwnPropertySymbols(obj);
    if (syms.length !== 1 || syms[0] !== sym) {
      return false;
    }
    if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) {
      return false;
    }
    if (typeof Object.getOwnPropertyDescriptor === "function") {
      var descriptor = Object.getOwnPropertyDescriptor(obj, sym);
      if (descriptor.value !== symVal || descriptor.enumerable !== true) {
        return false;
      }
    }
    return true;
  };
});

// node_modules/has-symbols/index.js
var require_has_symbols = __commonJS((exports, module) => {
  var origSymbol = typeof Symbol !== "undefined" && Symbol;
  var hasSymbolSham = require_shams();
  module.exports = function hasNativeSymbols() {
    if (typeof origSymbol !== "function") {
      return false;
    }
    if (typeof Symbol !== "function") {
      return false;
    }
    if (typeof origSymbol("foo") !== "symbol") {
      return false;
    }
    if (typeof Symbol("bar") !== "symbol") {
      return false;
    }
    return hasSymbolSham();
  };
});

// node_modules/has-proto/index.js
var require_has_proto = __commonJS((exports, module) => {
  var test = {
    __proto__: null,
    foo: {}
  };
  var $Object = Object;
  module.exports = function hasProto() {
    return { __proto__: test }.foo === test.foo && !(test instanceof $Object);
  };
});

// node_modules/function-bind/implementation.js
var require_implementation2 = __commonJS((exports, module) => {
  var ERROR_MESSAGE = "Function.prototype.bind called on incompatible ";
  var toStr = Object.prototype.toString;
  var max = Math.max;
  var funcType = "[object Function]";
  var concatty = function concatty(a, b) {
    var arr = [];
    for (var i = 0;i < a.length; i += 1) {
      arr[i] = a[i];
    }
    for (var j = 0;j < b.length; j += 1) {
      arr[j + a.length] = b[j];
    }
    return arr;
  };
  var slicy = function slicy(arrLike, offset) {
    var arr = [];
    for (var i = offset || 0, j = 0;i < arrLike.length; i += 1, j += 1) {
      arr[j] = arrLike[i];
    }
    return arr;
  };
  var joiny = function(arr, joiner) {
    var str = "";
    for (var i = 0;i < arr.length; i += 1) {
      str += arr[i];
      if (i + 1 < arr.length) {
        str += joiner;
      }
    }
    return str;
  };
  module.exports = function bind(that) {
    var target = this;
    if (typeof target !== "function" || toStr.apply(target) !== funcType) {
      throw new TypeError(ERROR_MESSAGE + target);
    }
    var args = slicy(arguments, 1);
    var bound;
    var binder = function() {
      if (this instanceof bound) {
        var result = target.apply(this, concatty(args, arguments));
        if (Object(result) === result) {
          return result;
        }
        return this;
      }
      return target.apply(that, concatty(args, arguments));
    };
    var boundLength = max(0, target.length - args.length);
    var boundArgs = [];
    for (var i = 0;i < boundLength; i++) {
      boundArgs[i] = "$" + i;
    }
    bound = Function("binder", "return function (" + joiny(boundArgs, ",") + "){ return binder.apply(this,arguments); }")(binder);
    if (target.prototype) {
      var Empty = function Empty() {
      };
      Empty.prototype = target.prototype;
      bound.prototype = new Empty;
      Empty.prototype = null;
    }
    return bound;
  };
});

// node_modules/function-bind/index.js
var require_function_bind = __commonJS((exports, module) => {
  var implementation = require_implementation2();
  module.exports = Function.prototype.bind || implementation;
});

// node_modules/hasown/index.js
var require_hasown = __commonJS((exports, module) => {
  var call = Function.prototype.call;
  var $hasOwn = Object.prototype.hasOwnProperty;
  var bind = require_function_bind();
  module.exports = bind.call(call, $hasOwn);
});

// node_modules/get-intrinsic/index.js
var require_get_intrinsic = __commonJS((exports, module) => {
  var undefined2;
  var $Error = require_es_errors();
  var $EvalError = require_eval();
  var $RangeError = require_range();
  var $ReferenceError = require_ref();
  var $SyntaxError = require_syntax();
  var $TypeError = require_type();
  var $URIError = require_uri();
  var $Function = Function;
  var getEvalledConstructor = function(expressionSyntax) {
    try {
      return $Function('"use strict"; return (' + expressionSyntax + ").constructor;")();
    } catch (e) {
    }
  };
  var $gOPD = Object.getOwnPropertyDescriptor;
  if ($gOPD) {
    try {
      $gOPD({}, "");
    } catch (e) {
      $gOPD = null;
    }
  }
  var throwTypeError = function() {
    throw new $TypeError;
  };
  var ThrowTypeError = $gOPD ? function() {
    try {
      arguments.callee;
      return throwTypeError;
    } catch (calleeThrows) {
      try {
        return $gOPD(arguments, "callee").get;
      } catch (gOPDthrows) {
        return throwTypeError;
      }
    }
  }() : throwTypeError;
  var hasSymbols = require_has_symbols()();
  var hasProto = require_has_proto()();
  var getProto = Object.getPrototypeOf || (hasProto ? function(x) {
    return x.__proto__;
  } : null);
  var needsEval = {};
  var TypedArray = typeof Uint8Array === "undefined" || !getProto ? undefined2 : getProto(Uint8Array);
  var INTRINSICS = {
    __proto__: null,
    "%AggregateError%": typeof AggregateError === "undefined" ? undefined2 : AggregateError,
    "%Array%": Array,
    "%ArrayBuffer%": typeof ArrayBuffer === "undefined" ? undefined2 : ArrayBuffer,
    "%ArrayIteratorPrototype%": hasSymbols && getProto ? getProto([][Symbol.iterator]()) : undefined2,
    "%AsyncFromSyncIteratorPrototype%": undefined2,
    "%AsyncFunction%": needsEval,
    "%AsyncGenerator%": needsEval,
    "%AsyncGeneratorFunction%": needsEval,
    "%AsyncIteratorPrototype%": needsEval,
    "%Atomics%": typeof Atomics === "undefined" ? undefined2 : Atomics,
    "%BigInt%": typeof BigInt === "undefined" ? undefined2 : BigInt,
    "%BigInt64Array%": typeof BigInt64Array === "undefined" ? undefined2 : BigInt64Array,
    "%BigUint64Array%": typeof BigUint64Array === "undefined" ? undefined2 : BigUint64Array,
    "%Boolean%": Boolean,
    "%DataView%": typeof DataView === "undefined" ? undefined2 : DataView,
    "%Date%": Date,
    "%decodeURI%": decodeURI,
    "%decodeURIComponent%": decodeURIComponent,
    "%encodeURI%": encodeURI,
    "%encodeURIComponent%": encodeURIComponent,
    "%Error%": $Error,
    "%eval%": eval,
    "%EvalError%": $EvalError,
    "%Float32Array%": typeof Float32Array === "undefined" ? undefined2 : Float32Array,
    "%Float64Array%": typeof Float64Array === "undefined" ? undefined2 : Float64Array,
    "%FinalizationRegistry%": typeof FinalizationRegistry === "undefined" ? undefined2 : FinalizationRegistry,
    "%Function%": $Function,
    "%GeneratorFunction%": needsEval,
    "%Int8Array%": typeof Int8Array === "undefined" ? undefined2 : Int8Array,
    "%Int16Array%": typeof Int16Array === "undefined" ? undefined2 : Int16Array,
    "%Int32Array%": typeof Int32Array === "undefined" ? undefined2 : Int32Array,
    "%isFinite%": isFinite,
    "%isNaN%": isNaN,
    "%IteratorPrototype%": hasSymbols && getProto ? getProto(getProto([][Symbol.iterator]())) : undefined2,
    "%JSON%": typeof JSON === "object" ? JSON : undefined2,
    "%Map%": typeof Map === "undefined" ? undefined2 : Map,
    "%MapIteratorPrototype%": typeof Map === "undefined" || !hasSymbols || !getProto ? undefined2 : getProto(new Map()[Symbol.iterator]()),
    "%Math%": Math,
    "%Number%": Number,
    "%Object%": Object,
    "%parseFloat%": parseFloat,
    "%parseInt%": parseInt,
    "%Promise%": typeof Promise === "undefined" ? undefined2 : Promise,
    "%Proxy%": typeof Proxy === "undefined" ? undefined2 : Proxy,
    "%RangeError%": $RangeError,
    "%ReferenceError%": $ReferenceError,
    "%Reflect%": typeof Reflect === "undefined" ? undefined2 : Reflect,
    "%RegExp%": RegExp,
    "%Set%": typeof Set === "undefined" ? undefined2 : Set,
    "%SetIteratorPrototype%": typeof Set === "undefined" || !hasSymbols || !getProto ? undefined2 : getProto(new Set()[Symbol.iterator]()),
    "%SharedArrayBuffer%": typeof SharedArrayBuffer === "undefined" ? undefined2 : SharedArrayBuffer,
    "%String%": String,
    "%StringIteratorPrototype%": hasSymbols && getProto ? getProto(""[Symbol.iterator]()) : undefined2,
    "%Symbol%": hasSymbols ? Symbol : undefined2,
    "%SyntaxError%": $SyntaxError,
    "%ThrowTypeError%": ThrowTypeError,
    "%TypedArray%": TypedArray,
    "%TypeError%": $TypeError,
    "%Uint8Array%": typeof Uint8Array === "undefined" ? undefined2 : Uint8Array,
    "%Uint8ClampedArray%": typeof Uint8ClampedArray === "undefined" ? undefined2 : Uint8ClampedArray,
    "%Uint16Array%": typeof Uint16Array === "undefined" ? undefined2 : Uint16Array,
    "%Uint32Array%": typeof Uint32Array === "undefined" ? undefined2 : Uint32Array,
    "%URIError%": $URIError,
    "%WeakMap%": typeof WeakMap === "undefined" ? undefined2 : WeakMap,
    "%WeakRef%": typeof WeakRef === "undefined" ? undefined2 : WeakRef,
    "%WeakSet%": typeof WeakSet === "undefined" ? undefined2 : WeakSet
  };
  if (getProto) {
    try {
      null.error;
    } catch (e) {
      errorProto = getProto(getProto(e));
      INTRINSICS["%Error.prototype%"] = errorProto;
    }
  }
  var errorProto;
  var doEval = function doEval(name) {
    var value;
    if (name === "%AsyncFunction%") {
      value = getEvalledConstructor("async function () {}");
    } else if (name === "%GeneratorFunction%") {
      value = getEvalledConstructor("function* () {}");
    } else if (name === "%AsyncGeneratorFunction%") {
      value = getEvalledConstructor("async function* () {}");
    } else if (name === "%AsyncGenerator%") {
      var fn = doEval("%AsyncGeneratorFunction%");
      if (fn) {
        value = fn.prototype;
      }
    } else if (name === "%AsyncIteratorPrototype%") {
      var gen = doEval("%AsyncGenerator%");
      if (gen && getProto) {
        value = getProto(gen.prototype);
      }
    }
    INTRINSICS[name] = value;
    return value;
  };
  var LEGACY_ALIASES = {
    __proto__: null,
    "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
    "%ArrayPrototype%": ["Array", "prototype"],
    "%ArrayProto_entries%": ["Array", "prototype", "entries"],
    "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
    "%ArrayProto_keys%": ["Array", "prototype", "keys"],
    "%ArrayProto_values%": ["Array", "prototype", "values"],
    "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
    "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
    "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
    "%BooleanPrototype%": ["Boolean", "prototype"],
    "%DataViewPrototype%": ["DataView", "prototype"],
    "%DatePrototype%": ["Date", "prototype"],
    "%ErrorPrototype%": ["Error", "prototype"],
    "%EvalErrorPrototype%": ["EvalError", "prototype"],
    "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
    "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
    "%FunctionPrototype%": ["Function", "prototype"],
    "%Generator%": ["GeneratorFunction", "prototype"],
    "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
    "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
    "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
    "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
    "%JSONParse%": ["JSON", "parse"],
    "%JSONStringify%": ["JSON", "stringify"],
    "%MapPrototype%": ["Map", "prototype"],
    "%NumberPrototype%": ["Number", "prototype"],
    "%ObjectPrototype%": ["Object", "prototype"],
    "%ObjProto_toString%": ["Object", "prototype", "toString"],
    "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
    "%PromisePrototype%": ["Promise", "prototype"],
    "%PromiseProto_then%": ["Promise", "prototype", "then"],
    "%Promise_all%": ["Promise", "all"],
    "%Promise_reject%": ["Promise", "reject"],
    "%Promise_resolve%": ["Promise", "resolve"],
    "%RangeErrorPrototype%": ["RangeError", "prototype"],
    "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
    "%RegExpPrototype%": ["RegExp", "prototype"],
    "%SetPrototype%": ["Set", "prototype"],
    "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
    "%StringPrototype%": ["String", "prototype"],
    "%SymbolPrototype%": ["Symbol", "prototype"],
    "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
    "%TypedArrayPrototype%": ["TypedArray", "prototype"],
    "%TypeErrorPrototype%": ["TypeError", "prototype"],
    "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
    "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
    "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
    "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
    "%URIErrorPrototype%": ["URIError", "prototype"],
    "%WeakMapPrototype%": ["WeakMap", "prototype"],
    "%WeakSetPrototype%": ["WeakSet", "prototype"]
  };
  var bind = require_function_bind();
  var hasOwn = require_hasown();
  var $concat = bind.call(Function.call, Array.prototype.concat);
  var $spliceApply = bind.call(Function.apply, Array.prototype.splice);
  var $replace = bind.call(Function.call, String.prototype.replace);
  var $strSlice = bind.call(Function.call, String.prototype.slice);
  var $exec = bind.call(Function.call, RegExp.prototype.exec);
  var rePropName = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
  var reEscapeChar = /\\(\\)?/g;
  var stringToPath = function stringToPath(string) {
    var first = $strSlice(string, 0, 1);
    var last = $strSlice(string, -1);
    if (first === "%" && last !== "%") {
      throw new $SyntaxError("invalid intrinsic syntax, expected closing `%`");
    } else if (last === "%" && first !== "%") {
      throw new $SyntaxError("invalid intrinsic syntax, expected opening `%`");
    }
    var result = [];
    $replace(string, rePropName, function(match, number, quote, subString) {
      result[result.length] = quote ? $replace(subString, reEscapeChar, "$1") : number || match;
    });
    return result;
  };
  var getBaseIntrinsic = function getBaseIntrinsic(name, allowMissing) {
    var intrinsicName = name;
    var alias;
    if (hasOwn(LEGACY_ALIASES, intrinsicName)) {
      alias = LEGACY_ALIASES[intrinsicName];
      intrinsicName = "%" + alias[0] + "%";
    }
    if (hasOwn(INTRINSICS, intrinsicName)) {
      var value = INTRINSICS[intrinsicName];
      if (value === needsEval) {
        value = doEval(intrinsicName);
      }
      if (typeof value === "undefined" && !allowMissing) {
        throw new $TypeError("intrinsic " + name + " exists, but is not available. Please file an issue!");
      }
      return {
        alias,
        name: intrinsicName,
        value
      };
    }
    throw new $SyntaxError("intrinsic " + name + " does not exist!");
  };
  module.exports = function GetIntrinsic(name, allowMissing) {
    if (typeof name !== "string" || name.length === 0) {
      throw new $TypeError("intrinsic name must be a non-empty string");
    }
    if (arguments.length > 1 && typeof allowMissing !== "boolean") {
      throw new $TypeError('"allowMissing" argument must be a boolean');
    }
    if ($exec(/^%?[^%]*%?$/, name) === null) {
      throw new $SyntaxError("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
    }
    var parts = stringToPath(name);
    var intrinsicBaseName = parts.length > 0 ? parts[0] : "";
    var intrinsic = getBaseIntrinsic("%" + intrinsicBaseName + "%", allowMissing);
    var intrinsicRealName = intrinsic.name;
    var value = intrinsic.value;
    var skipFurtherCaching = false;
    var alias = intrinsic.alias;
    if (alias) {
      intrinsicBaseName = alias[0];
      $spliceApply(parts, $concat([0, 1], alias));
    }
    for (var i = 1, isOwn = true;i < parts.length; i += 1) {
      var part = parts[i];
      var first = $strSlice(part, 0, 1);
      var last = $strSlice(part, -1);
      if ((first === '"' || first === "'" || first === "`" || (last === '"' || last === "'" || last === "`")) && first !== last) {
        throw new $SyntaxError("property names with quotes must have matching quotes");
      }
      if (part === "constructor" || !isOwn) {
        skipFurtherCaching = true;
      }
      intrinsicBaseName += "." + part;
      intrinsicRealName = "%" + intrinsicBaseName + "%";
      if (hasOwn(INTRINSICS, intrinsicRealName)) {
        value = INTRINSICS[intrinsicRealName];
      } else if (value != null) {
        if (!(part in value)) {
          if (!allowMissing) {
            throw new $TypeError("base intrinsic for " + name + " exists, but the property is not available.");
          }
          return;
        }
        if ($gOPD && i + 1 >= parts.length) {
          var desc = $gOPD(value, part);
          isOwn = !!desc;
          if (isOwn && "get" in desc && !("originalValue" in desc.get)) {
            value = desc.get;
          } else {
            value = value[part];
          }
        } else {
          isOwn = hasOwn(value, part);
          value = value[part];
        }
        if (isOwn && !skipFurtherCaching) {
          INTRINSICS[intrinsicRealName] = value;
        }
      }
    }
    return value;
  };
});

// node_modules/es-define-property/index.js
var require_es_define_property = __commonJS((exports, module) => {
  var GetIntrinsic = require_get_intrinsic();
  var $defineProperty = GetIntrinsic("%Object.defineProperty%", true) || false;
  if ($defineProperty) {
    try {
      $defineProperty({}, "a", { value: 1 });
    } catch (e) {
      $defineProperty = false;
    }
  }
  module.exports = $defineProperty;
});

// node_modules/gopd/index.js
var require_gopd = __commonJS((exports, module) => {
  var GetIntrinsic = require_get_intrinsic();
  var $gOPD = GetIntrinsic("%Object.getOwnPropertyDescriptor%", true);
  if ($gOPD) {
    try {
      $gOPD([], "length");
    } catch (e) {
      $gOPD = null;
    }
  }
  module.exports = $gOPD;
});

// node_modules/define-data-property/index.js
var require_define_data_property = __commonJS((exports, module) => {
  var $defineProperty = require_es_define_property();
  var $SyntaxError = require_syntax();
  var $TypeError = require_type();
  var gopd = require_gopd();
  module.exports = function defineDataProperty(obj, property, value) {
    if (!obj || typeof obj !== "object" && typeof obj !== "function") {
      throw new $TypeError("`obj` must be an object or a function`");
    }
    if (typeof property !== "string" && typeof property !== "symbol") {
      throw new $TypeError("`property` must be a string or a symbol`");
    }
    if (arguments.length > 3 && typeof arguments[3] !== "boolean" && arguments[3] !== null) {
      throw new $TypeError("`nonEnumerable`, if provided, must be a boolean or null");
    }
    if (arguments.length > 4 && typeof arguments[4] !== "boolean" && arguments[4] !== null) {
      throw new $TypeError("`nonWritable`, if provided, must be a boolean or null");
    }
    if (arguments.length > 5 && typeof arguments[5] !== "boolean" && arguments[5] !== null) {
      throw new $TypeError("`nonConfigurable`, if provided, must be a boolean or null");
    }
    if (arguments.length > 6 && typeof arguments[6] !== "boolean") {
      throw new $TypeError("`loose`, if provided, must be a boolean");
    }
    var nonEnumerable = arguments.length > 3 ? arguments[3] : null;
    var nonWritable = arguments.length > 4 ? arguments[4] : null;
    var nonConfigurable = arguments.length > 5 ? arguments[5] : null;
    var loose = arguments.length > 6 ? arguments[6] : false;
    var desc = !!gopd && gopd(obj, property);
    if ($defineProperty) {
      $defineProperty(obj, property, {
        configurable: nonConfigurable === null && desc ? desc.configurable : !nonConfigurable,
        enumerable: nonEnumerable === null && desc ? desc.enumerable : !nonEnumerable,
        value,
        writable: nonWritable === null && desc ? desc.writable : !nonWritable
      });
    } else if (loose || !nonEnumerable && !nonWritable && !nonConfigurable) {
      obj[property] = value;
    } else {
      throw new $SyntaxError("This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.");
    }
  };
});

// node_modules/has-property-descriptors/index.js
var require_has_property_descriptors = __commonJS((exports, module) => {
  var $defineProperty = require_es_define_property();
  var hasPropertyDescriptors = function hasPropertyDescriptors() {
    return !!$defineProperty;
  };
  hasPropertyDescriptors.hasArrayLengthDefineBug = function hasArrayLengthDefineBug() {
    if (!$defineProperty) {
      return null;
    }
    try {
      return $defineProperty([], "length", { value: 1 }).length !== 1;
    } catch (e) {
      return true;
    }
  };
  module.exports = hasPropertyDescriptors;
});

// node_modules/define-properties/index.js
var require_define_properties = __commonJS((exports, module) => {
  var keys = require_object_keys();
  var hasSymbols = typeof Symbol === "function" && typeof Symbol("foo") === "symbol";
  var toStr = Object.prototype.toString;
  var concat2 = Array.prototype.concat;
  var defineDataProperty = require_define_data_property();
  var isFunction = function(fn) {
    return typeof fn === "function" && toStr.call(fn) === "[object Function]";
  };
  var supportsDescriptors = require_has_property_descriptors()();
  var defineProperty = function(object, name, value, predicate) {
    if (name in object) {
      if (predicate === true) {
        if (object[name] === value) {
          return;
        }
      } else if (!isFunction(predicate) || !predicate()) {
        return;
      }
    }
    if (supportsDescriptors) {
      defineDataProperty(object, name, value, true);
    } else {
      defineDataProperty(object, name, value);
    }
  };
  var defineProperties = function(object, map) {
    var predicates = arguments.length > 2 ? arguments[2] : {};
    var props = keys(map);
    if (hasSymbols) {
      props = concat2.call(props, Object.getOwnPropertySymbols(map));
    }
    for (var i = 0;i < props.length; i += 1) {
      defineProperty(object, props[i], map[props[i]], predicates[props[i]]);
    }
  };
  defineProperties.supportsDescriptors = !!supportsDescriptors;
  module.exports = defineProperties;
});

// node_modules/set-function-length/index.js
var require_set_function_length = __commonJS((exports, module) => {
  var GetIntrinsic = require_get_intrinsic();
  var define = require_define_data_property();
  var hasDescriptors = require_has_property_descriptors()();
  var gOPD = require_gopd();
  var $TypeError = require_type();
  var $floor = GetIntrinsic("%Math.floor%");
  module.exports = function setFunctionLength(fn, length) {
    if (typeof fn !== "function") {
      throw new $TypeError("`fn` is not a function");
    }
    if (typeof length !== "number" || length < 0 || length > 4294967295 || $floor(length) !== length) {
      throw new $TypeError("`length` must be a positive 32-bit integer");
    }
    var loose = arguments.length > 2 && !!arguments[2];
    var functionLengthIsConfigurable = true;
    var functionLengthIsWritable = true;
    if ("length" in fn && gOPD) {
      var desc = gOPD(fn, "length");
      if (desc && !desc.configurable) {
        functionLengthIsConfigurable = false;
      }
      if (desc && !desc.writable) {
        functionLengthIsWritable = false;
      }
    }
    if (functionLengthIsConfigurable || functionLengthIsWritable || !loose) {
      if (hasDescriptors) {
        define(fn, "length", length, true, true);
      } else {
        define(fn, "length", length);
      }
    }
    return fn;
  };
});

// node_modules/call-bind/index.js
var require_call_bind = __commonJS((exports, module) => {
  var bind = require_function_bind();
  var GetIntrinsic = require_get_intrinsic();
  var setFunctionLength = require_set_function_length();
  var $TypeError = require_type();
  var $apply = GetIntrinsic("%Function.prototype.apply%");
  var $call = GetIntrinsic("%Function.prototype.call%");
  var $reflectApply = GetIntrinsic("%Reflect.apply%", true) || bind.call($call, $apply);
  var $defineProperty = require_es_define_property();
  var $max = GetIntrinsic("%Math.max%");
  module.exports = function callBind(originalFunction) {
    if (typeof originalFunction !== "function") {
      throw new $TypeError("a function is required");
    }
    var func = $reflectApply(bind, $call, arguments);
    return setFunctionLength(func, 1 + $max(0, originalFunction.length - (arguments.length - 1)), true);
  };
  var applyBind = function applyBind() {
    return $reflectApply(bind, $apply, arguments);
  };
  if ($defineProperty) {
    $defineProperty(module.exports, "apply", { value: applyBind });
  } else {
    module.exports.apply = applyBind;
  }
});

// node_modules/object-is/implementation.js
var require_implementation3 = __commonJS((exports, module) => {
  var numberIsNaN2 = function(value) {
    return value !== value;
  };
  module.exports = function is(a, b) {
    if (a === 0 && b === 0) {
      return 1 / a === 1 / b;
    }
    if (a === b) {
      return true;
    }
    if (numberIsNaN2(a) && numberIsNaN2(b)) {
      return true;
    }
    return false;
  };
});

// node_modules/object-is/polyfill.js
var require_polyfill = __commonJS((exports, module) => {
  var implementation = require_implementation3();
  module.exports = function getPolyfill() {
    return typeof Object.is === "function" ? Object.is : implementation;
  };
});

// node_modules/object-is/shim.js
var require_shim = __commonJS((exports, module) => {
  var getPolyfill = require_polyfill();
  var define = require_define_properties();
  module.exports = function shimObjectIs() {
    var polyfill = getPolyfill();
    define(Object, { is: polyfill }, {
      is: function testObjectIs() {
        return Object.is !== polyfill;
      }
    });
    return polyfill;
  };
});

// node_modules/object-is/index.js
var require_object_is = __commonJS((exports, module) => {
  var define = require_define_properties();
  var callBind = require_call_bind();
  var implementation = require_implementation3();
  var getPolyfill = require_polyfill();
  var shim = require_shim();
  var polyfill = callBind(getPolyfill(), Object);
  define(polyfill, {
    getPolyfill,
    implementation,
    shim
  });
  module.exports = polyfill;
});

// node_modules/is-nan/implementation.js
var require_implementation4 = __commonJS((exports, module) => {
  module.exports = function isNaN(value) {
    return value !== value;
  };
});

// node_modules/is-nan/polyfill.js
var require_polyfill2 = __commonJS((exports, module) => {
  var implementation = require_implementation4();
  module.exports = function getPolyfill() {
    if (Number.isNaN && Number.isNaN(NaN) && !Number.isNaN("a")) {
      return Number.isNaN;
    }
    return implementation;
  };
});

// node_modules/is-nan/shim.js
var require_shim2 = __commonJS((exports, module) => {
  var define = require_define_properties();
  var getPolyfill = require_polyfill2();
  module.exports = function shimNumberIsNaN() {
    var polyfill = getPolyfill();
    define(Number, { isNaN: polyfill }, {
      isNaN: function testIsNaN() {
        return Number.isNaN !== polyfill;
      }
    });
    return polyfill;
  };
});

// node_modules/is-nan/index.js
var require_is_nan = __commonJS((exports, module) => {
  var callBind = require_call_bind();
  var define = require_define_properties();
  var implementation = require_implementation4();
  var getPolyfill = require_polyfill2();
  var shim = require_shim2();
  var polyfill = callBind(getPolyfill(), Number);
  define(polyfill, {
    getPolyfill,
    implementation,
    shim
  });
  module.exports = polyfill;
});

// node_modules/has-tostringtag/shams.js
var require_shams2 = __commonJS((exports, module) => {
  var hasSymbols = require_shams();
  module.exports = function hasToStringTagShams() {
    return hasSymbols() && !!Symbol.toStringTag;
  };
});

// node_modules/call-bind/callBound.js
var require_callBound = __commonJS((exports, module) => {
  var GetIntrinsic = require_get_intrinsic();
  var callBind = require_call_bind();
  var $indexOf = callBind(GetIntrinsic("String.prototype.indexOf"));
  module.exports = function callBoundIntrinsic(name, allowMissing) {
    var intrinsic = GetIntrinsic(name, !!allowMissing);
    if (typeof intrinsic === "function" && $indexOf(name, ".prototype.") > -1) {
      return callBind(intrinsic);
    }
    return intrinsic;
  };
});

// node_modules/is-arguments/index.js
var require_is_arguments = __commonJS((exports, module) => {
  var hasToStringTag = require_shams2()();
  var callBound = require_callBound();
  var $toString = callBound("Object.prototype.toString");
  var isStandardArguments = function isArguments(value) {
    if (hasToStringTag && value && typeof value === "object" && Symbol.toStringTag in value) {
      return false;
    }
    return $toString(value) === "[object Arguments]";
  };
  var isLegacyArguments = function isArguments(value) {
    if (isStandardArguments(value)) {
      return true;
    }
    return value !== null && typeof value === "object" && typeof value.length === "number" && value.length >= 0 && $toString(value) !== "[object Array]" && $toString(value.callee) === "[object Function]";
  };
  var supportsStandardArguments = function() {
    return isStandardArguments(arguments);
  }();
  isStandardArguments.isLegacyArguments = isLegacyArguments;
  module.exports = supportsStandardArguments ? isStandardArguments : isLegacyArguments;
});

// node_modules/is-generator-function/index.js
var require_is_generator_function = __commonJS((exports, module) => {
  var toStr = Object.prototype.toString;
  var fnToStr = Function.prototype.toString;
  var isFnRegex = /^\s*(?:function)?\*/;
  var hasToStringTag = require_shams2()();
  var getProto = Object.getPrototypeOf;
  var getGeneratorFunc = function() {
    if (!hasToStringTag) {
      return false;
    }
    try {
      return Function("return function*() {}")();
    } catch (e) {
    }
  };
  var GeneratorFunction;
  module.exports = function isGeneratorFunction(fn) {
    if (typeof fn !== "function") {
      return false;
    }
    if (isFnRegex.test(fnToStr.call(fn))) {
      return true;
    }
    if (!hasToStringTag) {
      var str = toStr.call(fn);
      return str === "[object GeneratorFunction]";
    }
    if (!getProto) {
      return false;
    }
    if (typeof GeneratorFunction === "undefined") {
      var generatorFunc = getGeneratorFunc();
      GeneratorFunction = generatorFunc ? getProto(generatorFunc) : false;
    }
    return getProto(fn) === GeneratorFunction;
  };
});

// node_modules/is-callable/index.js
var require_is_callable = __commonJS((exports, module) => {
  var fnToStr = Function.prototype.toString;
  var reflectApply = typeof Reflect === "object" && Reflect !== null && Reflect.apply;
  var badArrayLike;
  var isCallableMarker;
  if (typeof reflectApply === "function" && typeof Object.defineProperty === "function") {
    try {
      badArrayLike = Object.defineProperty({}, "length", {
        get: function() {
          throw isCallableMarker;
        }
      });
      isCallableMarker = {};
      reflectApply(function() {
        throw 42;
      }, null, badArrayLike);
    } catch (_) {
      if (_ !== isCallableMarker) {
        reflectApply = null;
      }
    }
  } else {
    reflectApply = null;
  }
  var constructorRegex = /^\s*class\b/;
  var isES6ClassFn = function isES6ClassFunction(value) {
    try {
      var fnStr = fnToStr.call(value);
      return constructorRegex.test(fnStr);
    } catch (e) {
      return false;
    }
  };
  var tryFunctionObject = function tryFunctionToStr(value) {
    try {
      if (isES6ClassFn(value)) {
        return false;
      }
      fnToStr.call(value);
      return true;
    } catch (e) {
      return false;
    }
  };
  var toStr = Object.prototype.toString;
  var objectClass = "[object Object]";
  var fnClass = "[object Function]";
  var genClass = "[object GeneratorFunction]";
  var ddaClass = "[object HTMLAllCollection]";
  var ddaClass2 = "[object HTML document.all class]";
  var ddaClass3 = "[object HTMLCollection]";
  var hasToStringTag = typeof Symbol === "function" && !!Symbol.toStringTag;
  var isIE68 = !(0 in [,]);
  var isDDA = function isDocumentDotAll() {
    return false;
  };
  if (typeof document === "object") {
    all = document.all;
    if (toStr.call(all) === toStr.call(document.all)) {
      isDDA = function isDocumentDotAll(value) {
        if ((isIE68 || !value) && (typeof value === "undefined" || typeof value === "object")) {
          try {
            var str = toStr.call(value);
            return (str === ddaClass || str === ddaClass2 || str === ddaClass3 || str === objectClass) && value("") == null;
          } catch (e) {
          }
        }
        return false;
      };
    }
  }
  var all;
  module.exports = reflectApply ? function isCallable(value) {
    if (isDDA(value)) {
      return true;
    }
    if (!value) {
      return false;
    }
    if (typeof value !== "function" && typeof value !== "object") {
      return false;
    }
    try {
      reflectApply(value, null, badArrayLike);
    } catch (e) {
      if (e !== isCallableMarker) {
        return false;
      }
    }
    return !isES6ClassFn(value) && tryFunctionObject(value);
  } : function isCallable(value) {
    if (isDDA(value)) {
      return true;
    }
    if (!value) {
      return false;
    }
    if (typeof value !== "function" && typeof value !== "object") {
      return false;
    }
    if (hasToStringTag) {
      return tryFunctionObject(value);
    }
    if (isES6ClassFn(value)) {
      return false;
    }
    var strClass = toStr.call(value);
    if (strClass !== fnClass && strClass !== genClass && !/^\[object HTML/.test(strClass)) {
      return false;
    }
    return tryFunctionObject(value);
  };
});

// node_modules/for-each/index.js
var require_for_each = __commonJS((exports, module) => {
  var isCallable = require_is_callable();
  var toStr = Object.prototype.toString;
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  var forEachArray = function forEachArray(array, iterator, receiver) {
    for (var i = 0, len = array.length;i < len; i++) {
      if (hasOwnProperty.call(array, i)) {
        if (receiver == null) {
          iterator(array[i], i, array);
        } else {
          iterator.call(receiver, array[i], i, array);
        }
      }
    }
  };
  var forEachString = function forEachString(string, iterator, receiver) {
    for (var i = 0, len = string.length;i < len; i++) {
      if (receiver == null) {
        iterator(string.charAt(i), i, string);
      } else {
        iterator.call(receiver, string.charAt(i), i, string);
      }
    }
  };
  var forEachObject = function forEachObject(object, iterator, receiver) {
    for (var k2 in object) {
      if (hasOwnProperty.call(object, k2)) {
        if (receiver == null) {
          iterator(object[k2], k2, object);
        } else {
          iterator.call(receiver, object[k2], k2, object);
        }
      }
    }
  };
  var forEach = function forEach(list, iterator, thisArg) {
    if (!isCallable(iterator)) {
      throw new TypeError("iterator must be a function");
    }
    var receiver;
    if (arguments.length >= 3) {
      receiver = thisArg;
    }
    if (toStr.call(list) === "[object Array]") {
      forEachArray(list, iterator, receiver);
    } else if (typeof list === "string") {
      forEachString(list, iterator, receiver);
    } else {
      forEachObject(list, iterator, receiver);
    }
  };
  module.exports = forEach;
});

// node_modules/possible-typed-array-names/index.js
var require_possible_typed_array_names = __commonJS((exports, module) => {
  module.exports = [
    "Float32Array",
    "Float64Array",
    "Int8Array",
    "Int16Array",
    "Int32Array",
    "Uint8Array",
    "Uint8ClampedArray",
    "Uint16Array",
    "Uint32Array",
    "BigInt64Array",
    "BigUint64Array"
  ];
});

// node_modules/available-typed-arrays/index.js
var require_available_typed_arrays = __commonJS((exports, module) => {
  var possibleNames = require_possible_typed_array_names();
  var g = typeof globalThis === "undefined" ? global : globalThis;
  module.exports = function availableTypedArrays() {
    var out = [];
    for (var i = 0;i < possibleNames.length; i++) {
      if (typeof g[possibleNames[i]] === "function") {
        out[out.length] = possibleNames[i];
      }
    }
    return out;
  };
});

// node_modules/which-typed-array/index.js
var require_which_typed_array = __commonJS((exports, module) => {
  var forEach = require_for_each();
  var availableTypedArrays = require_available_typed_arrays();
  var callBind = require_call_bind();
  var callBound = require_callBound();
  var gOPD = require_gopd();
  var $toString = callBound("Object.prototype.toString");
  var hasToStringTag = require_shams2()();
  var g = typeof globalThis === "undefined" ? global : globalThis;
  var typedArrays = availableTypedArrays();
  var $slice = callBound("String.prototype.slice");
  var getPrototypeOf = Object.getPrototypeOf;
  var $indexOf = callBound("Array.prototype.indexOf", true) || function indexOf(array, value) {
    for (var i = 0;i < array.length; i += 1) {
      if (array[i] === value) {
        return i;
      }
    }
    return -1;
  };
  var cache = { __proto__: null };
  if (hasToStringTag && gOPD && getPrototypeOf) {
    forEach(typedArrays, function(typedArray) {
      var arr = new g[typedArray];
      if (Symbol.toStringTag in arr) {
        var proto = getPrototypeOf(arr);
        var descriptor = gOPD(proto, Symbol.toStringTag);
        if (!descriptor) {
          var superProto = getPrototypeOf(proto);
          descriptor = gOPD(superProto, Symbol.toStringTag);
        }
        cache["$" + typedArray] = callBind(descriptor.get);
      }
    });
  } else {
    forEach(typedArrays, function(typedArray) {
      var arr = new g[typedArray];
      var fn = arr.slice || arr.set;
      if (fn) {
        cache["$" + typedArray] = callBind(fn);
      }
    });
  }
  var tryTypedArrays = function tryAllTypedArrays(value) {
    var found = false;
    forEach(cache, function(getter, typedArray) {
      if (!found) {
        try {
          if ("$" + getter(value) === typedArray) {
            found = $slice(typedArray, 1);
          }
        } catch (e) {
        }
      }
    });
    return found;
  };
  var trySlices = function tryAllSlices(value) {
    var found = false;
    forEach(cache, function(getter, name) {
      if (!found) {
        try {
          getter(value);
          found = $slice(name, 1);
        } catch (e) {
        }
      }
    });
    return found;
  };
  module.exports = function whichTypedArray(value) {
    if (!value || typeof value !== "object") {
      return false;
    }
    if (!hasToStringTag) {
      var tag = $slice($toString(value), 8, -1);
      if ($indexOf(typedArrays, tag) > -1) {
        return tag;
      }
      if (tag !== "Object") {
        return false;
      }
      return trySlices(value);
    }
    if (!gOPD) {
      return null;
    }
    return tryTypedArrays(value);
  };
});

// node_modules/is-typed-array/index.js
var require_is_typed_array = __commonJS((exports, module) => {
  var whichTypedArray = require_which_typed_array();
  module.exports = function isTypedArray(value) {
    return !!whichTypedArray(value);
  };
});

// node_modules/util/support/types.js
var require_types = __commonJS((exports) => {
  function uncurryThis(f) {
    return f.call.bind(f);
  }
  function checkBoxedPrimitive(value, prototypeValueOf) {
    if (typeof value !== "object") {
      return false;
    }
    try {
      prototypeValueOf(value);
      return true;
    } catch (e) {
      return false;
    }
  }
  function isPromise(input) {
    return typeof Promise !== "undefined" && input instanceof Promise || input !== null && typeof input === "object" && typeof input.then === "function" && typeof input.catch === "function";
  }
  function isArrayBufferView(value) {
    if (typeof ArrayBuffer !== "undefined" && ArrayBuffer.isView) {
      return ArrayBuffer.isView(value);
    }
    return isTypedArray(value) || isDataView(value);
  }
  function isUint8Array(value) {
    return whichTypedArray(value) === "Uint8Array";
  }
  function isUint8ClampedArray(value) {
    return whichTypedArray(value) === "Uint8ClampedArray";
  }
  function isUint16Array(value) {
    return whichTypedArray(value) === "Uint16Array";
  }
  function isUint32Array(value) {
    return whichTypedArray(value) === "Uint32Array";
  }
  function isInt8Array(value) {
    return whichTypedArray(value) === "Int8Array";
  }
  function isInt16Array(value) {
    return whichTypedArray(value) === "Int16Array";
  }
  function isInt32Array(value) {
    return whichTypedArray(value) === "Int32Array";
  }
  function isFloat32Array(value) {
    return whichTypedArray(value) === "Float32Array";
  }
  function isFloat64Array(value) {
    return whichTypedArray(value) === "Float64Array";
  }
  function isBigInt64Array(value) {
    return whichTypedArray(value) === "BigInt64Array";
  }
  function isBigUint64Array(value) {
    return whichTypedArray(value) === "BigUint64Array";
  }
  function isMapToString(value) {
    return ObjectToString(value) === "[object Map]";
  }
  function isMap(value) {
    if (typeof Map === "undefined") {
      return false;
    }
    return isMapToString.working ? isMapToString(value) : value instanceof Map;
  }
  function isSetToString(value) {
    return ObjectToString(value) === "[object Set]";
  }
  function isSet(value) {
    if (typeof Set === "undefined") {
      return false;
    }
    return isSetToString.working ? isSetToString(value) : value instanceof Set;
  }
  function isWeakMapToString(value) {
    return ObjectToString(value) === "[object WeakMap]";
  }
  function isWeakMap(value) {
    if (typeof WeakMap === "undefined") {
      return false;
    }
    return isWeakMapToString.working ? isWeakMapToString(value) : value instanceof WeakMap;
  }
  function isWeakSetToString(value) {
    return ObjectToString(value) === "[object WeakSet]";
  }
  function isWeakSet(value) {
    return isWeakSetToString(value);
  }
  function isArrayBufferToString(value) {
    return ObjectToString(value) === "[object ArrayBuffer]";
  }
  function isArrayBuffer(value) {
    if (typeof ArrayBuffer === "undefined") {
      return false;
    }
    return isArrayBufferToString.working ? isArrayBufferToString(value) : value instanceof ArrayBuffer;
  }
  function isDataViewToString(value) {
    return ObjectToString(value) === "[object DataView]";
  }
  function isDataView(value) {
    if (typeof DataView === "undefined") {
      return false;
    }
    return isDataViewToString.working ? isDataViewToString(value) : value instanceof DataView;
  }
  function isSharedArrayBufferToString(value) {
    return ObjectToString(value) === "[object SharedArrayBuffer]";
  }
  function isSharedArrayBuffer(value) {
    if (typeof SharedArrayBufferCopy === "undefined") {
      return false;
    }
    if (typeof isSharedArrayBufferToString.working === "undefined") {
      isSharedArrayBufferToString.working = isSharedArrayBufferToString(new SharedArrayBufferCopy);
    }
    return isSharedArrayBufferToString.working ? isSharedArrayBufferToString(value) : value instanceof SharedArrayBufferCopy;
  }
  function isAsyncFunction(value) {
    return ObjectToString(value) === "[object AsyncFunction]";
  }
  function isMapIterator(value) {
    return ObjectToString(value) === "[object Map Iterator]";
  }
  function isSetIterator(value) {
    return ObjectToString(value) === "[object Set Iterator]";
  }
  function isGeneratorObject(value) {
    return ObjectToString(value) === "[object Generator]";
  }
  function isWebAssemblyCompiledModule(value) {
    return ObjectToString(value) === "[object WebAssembly.Module]";
  }
  function isNumberObject(value) {
    return checkBoxedPrimitive(value, numberValue);
  }
  function isStringObject(value) {
    return checkBoxedPrimitive(value, stringValue);
  }
  function isBooleanObject(value) {
    return checkBoxedPrimitive(value, booleanValue);
  }
  function isBigIntObject(value) {
    return BigIntSupported && checkBoxedPrimitive(value, bigIntValue);
  }
  function isSymbolObject(value) {
    return SymbolSupported && checkBoxedPrimitive(value, symbolValue);
  }
  function isBoxedPrimitive(value) {
    return isNumberObject(value) || isStringObject(value) || isBooleanObject(value) || isBigIntObject(value) || isSymbolObject(value);
  }
  function isAnyArrayBuffer(value) {
    return typeof Uint8Array !== "undefined" && (isArrayBuffer(value) || isSharedArrayBuffer(value));
  }
  var isArgumentsObject = require_is_arguments();
  var isGeneratorFunction = require_is_generator_function();
  var whichTypedArray = require_which_typed_array();
  var isTypedArray = require_is_typed_array();
  var BigIntSupported = typeof BigInt !== "undefined";
  var SymbolSupported = typeof Symbol !== "undefined";
  var ObjectToString = uncurryThis(Object.prototype.toString);
  var numberValue = uncurryThis(Number.prototype.valueOf);
  var stringValue = uncurryThis(String.prototype.valueOf);
  var booleanValue = uncurryThis(Boolean.prototype.valueOf);
  if (BigIntSupported) {
    bigIntValue = uncurryThis(BigInt.prototype.valueOf);
  }
  var bigIntValue;
  if (SymbolSupported) {
    symbolValue = uncurryThis(Symbol.prototype.valueOf);
  }
  var symbolValue;
  exports.isArgumentsObject = isArgumentsObject;
  exports.isGeneratorFunction = isGeneratorFunction;
  exports.isTypedArray = isTypedArray;
  exports.isPromise = isPromise;
  exports.isArrayBufferView = isArrayBufferView;
  exports.isUint8Array = isUint8Array;
  exports.isUint8ClampedArray = isUint8ClampedArray;
  exports.isUint16Array = isUint16Array;
  exports.isUint32Array = isUint32Array;
  exports.isInt8Array = isInt8Array;
  exports.isInt16Array = isInt16Array;
  exports.isInt32Array = isInt32Array;
  exports.isFloat32Array = isFloat32Array;
  exports.isFloat64Array = isFloat64Array;
  exports.isBigInt64Array = isBigInt64Array;
  exports.isBigUint64Array = isBigUint64Array;
  isMapToString.working = typeof Map !== "undefined" && isMapToString(new Map);
  exports.isMap = isMap;
  isSetToString.working = typeof Set !== "undefined" && isSetToString(new Set);
  exports.isSet = isSet;
  isWeakMapToString.working = typeof WeakMap !== "undefined" && isWeakMapToString(new WeakMap);
  exports.isWeakMap = isWeakMap;
  isWeakSetToString.working = typeof WeakSet !== "undefined" && isWeakSetToString(new WeakSet);
  exports.isWeakSet = isWeakSet;
  isArrayBufferToString.working = typeof ArrayBuffer !== "undefined" && isArrayBufferToString(new ArrayBuffer);
  exports.isArrayBuffer = isArrayBuffer;
  isDataViewToString.working = typeof ArrayBuffer !== "undefined" && typeof DataView !== "undefined" && isDataViewToString(new DataView(new ArrayBuffer(1), 0, 1));
  exports.isDataView = isDataView;
  var SharedArrayBufferCopy = typeof SharedArrayBuffer !== "undefined" ? SharedArrayBuffer : undefined;
  exports.isSharedArrayBuffer = isSharedArrayBuffer;
  exports.isAsyncFunction = isAsyncFunction;
  exports.isMapIterator = isMapIterator;
  exports.isSetIterator = isSetIterator;
  exports.isGeneratorObject = isGeneratorObject;
  exports.isWebAssemblyCompiledModule = isWebAssemblyCompiledModule;
  exports.isNumberObject = isNumberObject;
  exports.isStringObject = isStringObject;
  exports.isBooleanObject = isBooleanObject;
  exports.isBigIntObject = isBigIntObject;
  exports.isSymbolObject = isSymbolObject;
  exports.isBoxedPrimitive = isBoxedPrimitive;
  exports.isAnyArrayBuffer = isAnyArrayBuffer;
  ["isProxy", "isExternal", "isModuleNamespaceObject"].forEach(function(method) {
    Object.defineProperty(exports, method, {
      enumerable: false,
      value: function() {
        throw new Error(method + " is not supported in userland");
      }
    });
  });
});

// node_modules/util/support/isBufferBrowser.js
var require_isBufferBrowser = __commonJS((exports, module) => {
  module.exports = function isBuffer(arg) {
    return arg && typeof arg === "object" && typeof arg.copy === "function" && typeof arg.fill === "function" && typeof arg.readUInt8 === "function";
  };
});

// node_modules/inherits/inherits_browser.js
var require_inherits_browser = __commonJS((exports, module) => {
  if (typeof Object.create === "function") {
    module.exports = function inherits(ctor, superCtor) {
      if (superCtor) {
        ctor.super_ = superCtor;
        ctor.prototype = Object.create(superCtor.prototype, {
          constructor: {
            value: ctor,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
      }
    };
  } else {
    module.exports = function inherits(ctor, superCtor) {
      if (superCtor) {
        ctor.super_ = superCtor;
        var TempCtor = function() {
        };
        TempCtor.prototype = superCtor.prototype;
        ctor.prototype = new TempCtor;
        ctor.prototype.constructor = ctor;
      }
    };
  }
});

// node_modules/util/util.js
var require_util = __commonJS((exports) => {
  function inspect2(obj, opts) {
    var ctx = {
      seen: [],
      stylize: stylizeNoColor
    };
    if (arguments.length >= 3)
      ctx.depth = arguments[2];
    if (arguments.length >= 4)
      ctx.colors = arguments[3];
    if (isBoolean(opts)) {
      ctx.showHidden = opts;
    } else if (opts) {
      exports._extend(ctx, opts);
    }
    if (isUndefined(ctx.showHidden))
      ctx.showHidden = false;
    if (isUndefined(ctx.depth))
      ctx.depth = 2;
    if (isUndefined(ctx.colors))
      ctx.colors = false;
    if (isUndefined(ctx.customInspect))
      ctx.customInspect = true;
    if (ctx.colors)
      ctx.stylize = stylizeWithColor;
    return formatValue(ctx, obj, ctx.depth);
  }
  function stylizeWithColor(str, styleType) {
    var style = inspect2.styles[styleType];
    if (style) {
      return "\x1B[" + inspect2.colors[style][0] + "m" + str + "\x1B[" + inspect2.colors[style][1] + "m";
    } else {
      return str;
    }
  }
  function stylizeNoColor(str, styleType) {
    return str;
  }
  function arrayToHash(array) {
    var hash = {};
    array.forEach(function(val, idx) {
      hash[val] = true;
    });
    return hash;
  }
  function formatValue(ctx, value, recurseTimes) {
    if (ctx.customInspect && value && isFunction(value.inspect) && value.inspect !== exports.inspect && !(value.constructor && value.constructor.prototype === value)) {
      var ret = value.inspect(recurseTimes, ctx);
      if (!isString(ret)) {
        ret = formatValue(ctx, ret, recurseTimes);
      }
      return ret;
    }
    var primitive = formatPrimitive(ctx, value);
    if (primitive) {
      return primitive;
    }
    var keys = Object.keys(value);
    var visibleKeys = arrayToHash(keys);
    if (ctx.showHidden) {
      keys = Object.getOwnPropertyNames(value);
    }
    if (isError(value) && (keys.indexOf("message") >= 0 || keys.indexOf("description") >= 0)) {
      return formatError(value);
    }
    if (keys.length === 0) {
      if (isFunction(value)) {
        var name = value.name ? ": " + value.name : "";
        return ctx.stylize("[Function" + name + "]", "special");
      }
      if (isRegExp(value)) {
        return ctx.stylize(RegExp.prototype.toString.call(value), "regexp");
      }
      if (isDate(value)) {
        return ctx.stylize(Date.prototype.toString.call(value), "date");
      }
      if (isError(value)) {
        return formatError(value);
      }
    }
    var base = "", array = false, braces = ["{", "}"];
    if (isArray(value)) {
      array = true;
      braces = ["[", "]"];
    }
    if (isFunction(value)) {
      var n = value.name ? ": " + value.name : "";
      base = " [Function" + n + "]";
    }
    if (isRegExp(value)) {
      base = " " + RegExp.prototype.toString.call(value);
    }
    if (isDate(value)) {
      base = " " + Date.prototype.toUTCString.call(value);
    }
    if (isError(value)) {
      base = " " + formatError(value);
    }
    if (keys.length === 0 && (!array || value.length == 0)) {
      return braces[0] + base + braces[1];
    }
    if (recurseTimes < 0) {
      if (isRegExp(value)) {
        return ctx.stylize(RegExp.prototype.toString.call(value), "regexp");
      } else {
        return ctx.stylize("[Object]", "special");
      }
    }
    ctx.seen.push(value);
    var output;
    if (array) {
      output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
    } else {
      output = keys.map(function(key) {
        return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
      });
    }
    ctx.seen.pop();
    return reduceToSingleString(output, base, braces);
  }
  function formatPrimitive(ctx, value) {
    if (isUndefined(value))
      return ctx.stylize("undefined", "undefined");
    if (isString(value)) {
      var simple = "\'" + JSON.stringify(value).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "\'";
      return ctx.stylize(simple, "string");
    }
    if (isNumber(value))
      return ctx.stylize("" + value, "number");
    if (isBoolean(value))
      return ctx.stylize("" + value, "boolean");
    if (isNull(value))
      return ctx.stylize("null", "null");
  }
  function formatError(value) {
    return "[" + Error.prototype.toString.call(value) + "]";
  }
  function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
    var output = [];
    for (var i = 0, l = value.length;i < l; ++i) {
      if (hasOwnProperty(value, String(i))) {
        output.push(formatProperty(ctx, value, recurseTimes, visibleKeys, String(i), true));
      } else {
        output.push("");
      }
    }
    keys.forEach(function(key) {
      if (!key.match(/^\d+$/)) {
        output.push(formatProperty(ctx, value, recurseTimes, visibleKeys, key, true));
      }
    });
    return output;
  }
  function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
    var name, str, desc;
    desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
    if (desc.get) {
      if (desc.set) {
        str = ctx.stylize("[Getter/Setter]", "special");
      } else {
        str = ctx.stylize("[Getter]", "special");
      }
    } else {
      if (desc.set) {
        str = ctx.stylize("[Setter]", "special");
      }
    }
    if (!hasOwnProperty(visibleKeys, key)) {
      name = "[" + key + "]";
    }
    if (!str) {
      if (ctx.seen.indexOf(desc.value) < 0) {
        if (isNull(recurseTimes)) {
          str = formatValue(ctx, desc.value, null);
        } else {
          str = formatValue(ctx, desc.value, recurseTimes - 1);
        }
        if (str.indexOf("\n") > -1) {
          if (array) {
            str = str.split("\n").map(function(line) {
              return "  " + line;
            }).join("\n").slice(2);
          } else {
            str = "\n" + str.split("\n").map(function(line) {
              return "   " + line;
            }).join("\n");
          }
        }
      } else {
        str = ctx.stylize("[Circular]", "special");
      }
    }
    if (isUndefined(name)) {
      if (array && key.match(/^\d+$/)) {
        return str;
      }
      name = JSON.stringify("" + key);
      if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
        name = name.slice(1, -1);
        name = ctx.stylize(name, "name");
      } else {
        name = name.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'");
        name = ctx.stylize(name, "string");
      }
    }
    return name + ": " + str;
  }
  function reduceToSingleString(output, base, braces) {
    var numLinesEst = 0;
    var length = output.reduce(function(prev, cur) {
      numLinesEst++;
      if (cur.indexOf("\n") >= 0)
        numLinesEst++;
      return prev + cur.replace(/\u001b\[\d\d?m/g, "").length + 1;
    }, 0);
    if (length > 60) {
      return braces[0] + (base === "" ? "" : base + "\n ") + " " + output.join(",\n  ") + " " + braces[1];
    }
    return braces[0] + base + " " + output.join(", ") + " " + braces[1];
  }
  function isArray(ar) {
    return Array.isArray(ar);
  }
  function isBoolean(arg) {
    return typeof arg === "boolean";
  }
  function isNull(arg) {
    return arg === null;
  }
  function isNullOrUndefined(arg) {
    return arg == null;
  }
  function isNumber(arg) {
    return typeof arg === "number";
  }
  function isString(arg) {
    return typeof arg === "string";
  }
  function isSymbol(arg) {
    return typeof arg === "symbol";
  }
  function isUndefined(arg) {
    return arg === undefined;
  }
  function isRegExp(re) {
    return isObject(re) && objectToString(re) === "[object RegExp]";
  }
  function isObject(arg) {
    return typeof arg === "object" && arg !== null;
  }
  function isDate(d) {
    return isObject(d) && objectToString(d) === "[object Date]";
  }
  function isError(e) {
    return isObject(e) && (objectToString(e) === "[object Error]" || e instanceof Error);
  }
  function isFunction(arg) {
    return typeof arg === "function";
  }
  function isPrimitive(arg) {
    return arg === null || typeof arg === "boolean" || typeof arg === "number" || typeof arg === "string" || typeof arg === "symbol" || typeof arg === "undefined";
  }
  function objectToString(o) {
    return Object.prototype.toString.call(o);
  }
  function pad(n) {
    return n < 10 ? "0" + n.toString(10) : n.toString(10);
  }
  function timestamp() {
    var d = new Date;
    var time = [
      pad(d.getHours()),
      pad(d.getMinutes()),
      pad(d.getSeconds())
    ].join(":");
    return [d.getDate(), months[d.getMonth()], time].join(" ");
  }
  function hasOwnProperty(obj, prop) {
    return Object.prototype.hasOwnProperty.call(obj, prop);
  }
  function callbackifyOnRejected(reason, cb) {
    if (!reason) {
      var newReason = new Error("Promise was rejected with a falsy value");
      newReason.reason = reason;
      reason = newReason;
    }
    return cb(reason);
  }
  function callbackify(original) {
    if (typeof original !== "function") {
      throw new TypeError('The "original" argument must be of type Function');
    }
    function callbackified() {
      var args = [];
      for (var i = 0;i < arguments.length; i++) {
        args.push(arguments[i]);
      }
      var maybeCb = args.pop();
      if (typeof maybeCb !== "function") {
        throw new TypeError("The last argument must be of type Function");
      }
      var self2 = this;
      var cb = function() {
        return maybeCb.apply(self2, arguments);
      };
      original.apply(this, args).then(function(ret) {
        process.nextTick(cb.bind(null, null, ret));
      }, function(rej) {
        process.nextTick(callbackifyOnRejected.bind(null, rej, cb));
      });
    }
    Object.setPrototypeOf(callbackified, Object.getPrototypeOf(original));
    Object.defineProperties(callbackified, getOwnPropertyDescriptors(original));
    return callbackified;
  }
  var getOwnPropertyDescriptors = Object.getOwnPropertyDescriptors || function getOwnPropertyDescriptors(obj) {
    var keys = Object.keys(obj);
    var descriptors = {};
    for (var i = 0;i < keys.length; i++) {
      descriptors[keys[i]] = Object.getOwnPropertyDescriptor(obj, keys[i]);
    }
    return descriptors;
  };
  var formatRegExp = /%[sdj%]/g;
  exports.format = function(f) {
    if (!isString(f)) {
      var objects = [];
      for (var i = 0;i < arguments.length; i++) {
        objects.push(inspect2(arguments[i]));
      }
      return objects.join(" ");
    }
    var i = 1;
    var args = arguments;
    var len = args.length;
    var str = String(f).replace(formatRegExp, function(x2) {
      if (x2 === "%%")
        return "%";
      if (i >= len)
        return x2;
      switch (x2) {
        case "%s":
          return String(args[i++]);
        case "%d":
          return Number(args[i++]);
        case "%j":
          try {
            return JSON.stringify(args[i++]);
          } catch (_) {
            return "[Circular]";
          }
        default:
          return x2;
      }
    });
    for (var x = args[i];i < len; x = args[++i]) {
      if (isNull(x) || !isObject(x)) {
        str += " " + x;
      } else {
        str += " " + inspect2(x);
      }
    }
    return str;
  };
  exports.deprecate = function(fn, msg) {
    if (typeof process !== "undefined" && process.noDeprecation === true) {
      return fn;
    }
    if (typeof process === "undefined") {
      return function() {
        return exports.deprecate(fn, msg).apply(this, arguments);
      };
    }
    var warned = false;
    function deprecated() {
      if (!warned) {
        if (process.throwDeprecation) {
          throw new Error(msg);
        } else if (process.traceDeprecation) {
          console.trace(msg);
        } else {
          console.error(msg);
        }
        warned = true;
      }
      return fn.apply(this, arguments);
    }
    return deprecated;
  };
  var debugs = {};
  var debugEnvRegex = /^$/;
  if (process.env.NODE_DEBUG) {
    debugEnv = process.env.NODE_DEBUG;
    debugEnv = debugEnv.replace(/[|\\{}()[\]^$+?.]/g, "\\$&").replace(/\*/g, ".*").replace(/,/g, "$|^").toUpperCase();
    debugEnvRegex = new RegExp("^" + debugEnv + "$", "i");
  }
  var debugEnv;
  exports.debuglog = function(set) {
    set = set.toUpperCase();
    if (!debugs[set]) {
      if (debugEnvRegex.test(set)) {
        var pid = process.pid;
        debugs[set] = function() {
          var msg = exports.format.apply(exports, arguments);
          console.error("%s %d: %s", set, pid, msg);
        };
      } else {
        debugs[set] = function() {
        };
      }
    }
    return debugs[set];
  };
  exports.inspect = inspect2;
  inspect2.colors = {
    bold: [1, 22],
    italic: [3, 23],
    underline: [4, 24],
    inverse: [7, 27],
    white: [37, 39],
    grey: [90, 39],
    black: [30, 39],
    blue: [34, 39],
    cyan: [36, 39],
    green: [32, 39],
    magenta: [35, 39],
    red: [31, 39],
    yellow: [33, 39]
  };
  inspect2.styles = {
    special: "cyan",
    number: "yellow",
    boolean: "yellow",
    undefined: "grey",
    null: "bold",
    string: "green",
    date: "magenta",
    regexp: "red"
  };
  exports.types = require_types();
  exports.isArray = isArray;
  exports.isBoolean = isBoolean;
  exports.isNull = isNull;
  exports.isNullOrUndefined = isNullOrUndefined;
  exports.isNumber = isNumber;
  exports.isString = isString;
  exports.isSymbol = isSymbol;
  exports.isUndefined = isUndefined;
  exports.isRegExp = isRegExp;
  exports.types.isRegExp = isRegExp;
  exports.isObject = isObject;
  exports.isDate = isDate;
  exports.types.isDate = isDate;
  exports.isError = isError;
  exports.types.isNativeError = isError;
  exports.isFunction = isFunction;
  exports.isPrimitive = isPrimitive;
  exports.isBuffer = require_isBufferBrowser();
  var months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ];
  exports.log = function() {
    console.log("%s - %s", timestamp(), exports.format.apply(exports, arguments));
  };
  exports.inherits = require_inherits_browser();
  exports._extend = function(origin, add) {
    if (!add || !isObject(add))
      return origin;
    var keys = Object.keys(add);
    var i = keys.length;
    while (i--) {
      origin[keys[i]] = add[keys[i]];
    }
    return origin;
  };
  var kCustomPromisifiedSymbol = typeof Symbol !== "undefined" ? Symbol("util.promisify.custom") : undefined;
  exports.promisify = function promisify(original) {
    if (typeof original !== "function")
      throw new TypeError('The "original" argument must be of type Function');
    if (kCustomPromisifiedSymbol && original[kCustomPromisifiedSymbol]) {
      var fn = original[kCustomPromisifiedSymbol];
      if (typeof fn !== "function") {
        throw new TypeError('The "util.promisify.custom" argument must be of type Function');
      }
      Object.defineProperty(fn, kCustomPromisifiedSymbol, {
        value: fn,
        enumerable: false,
        writable: false,
        configurable: true
      });
      return fn;
    }
    function fn() {
      var promiseResolve, promiseReject;
      var promise = new Promise(function(resolve, reject) {
        promiseResolve = resolve;
        promiseReject = reject;
      });
      var args = [];
      for (var i = 0;i < arguments.length; i++) {
        args.push(arguments[i]);
      }
      args.push(function(err, value) {
        if (err) {
          promiseReject(err);
        } else {
          promiseResolve(value);
        }
      });
      try {
        original.apply(this, args);
      } catch (err) {
        promiseReject(err);
      }
      return promise;
    }
    Object.setPrototypeOf(fn, Object.getPrototypeOf(original));
    if (kCustomPromisifiedSymbol)
      Object.defineProperty(fn, kCustomPromisifiedSymbol, {
        value: fn,
        enumerable: false,
        writable: false,
        configurable: true
      });
    return Object.defineProperties(fn, getOwnPropertyDescriptors(original));
  };
  exports.promisify.custom = kCustomPromisifiedSymbol;
  exports.callbackify = callbackify;
});

// src/external/assert/internal/util/comparisons.js
var require_comparisons = __commonJS((exports, module) => {
  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
  }
  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _unsupportedIterableToArray(o, minLen) {
    if (!o)
      return;
    if (typeof o === "string")
      return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor)
      n = o.constructor.name;
    if (n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray(o, minLen);
  }
  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length)
      len = arr.length;
    for (var i = 0, arr2 = new Array(len);i < len; i++)
      arr2[i] = arr[i];
    return arr2;
  }
  function _iterableToArrayLimit(r, l) {
    var t = r == null ? null : typeof Symbol != "undefined" && r[Symbol.iterator] || r["@@iterator"];
    if (t != null) {
      var e, n, i, u, a = [], f = true, o = false;
      try {
        if (i = (t = t.call(r)).next, l === 0) {
          if (Object(t) !== t)
            return;
          f = false;
        } else
          for (;!(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = true)
            ;
      } catch (r2) {
        o = true, n = r2;
      } finally {
        try {
          if (!f && t.return != null && (u = t.return(), Object(u) !== u))
            return;
        } finally {
          if (o)
            throw n;
        }
      }
      return a;
    }
  }
  function _arrayWithHoles(arr) {
    if (Array.isArray(arr))
      return arr;
  }
  function _typeof(o) {
    "@babel/helpers - typeof";
    return _typeof = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o2) {
      return typeof o2;
    } : function(o2) {
      return o2 && typeof Symbol == "function" && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
    }, _typeof(o);
  }
  function uncurryThis(f) {
    return f.call.bind(f);
  }
  function isNonIndex(key) {
    if (key.length === 0 || key.length > 10)
      return true;
    for (var i = 0;i < key.length; i++) {
      var code = key.charCodeAt(i);
      if (code < 48 || code > 57)
        return true;
    }
    return key.length === 10 && key >= Math.pow(2, 32);
  }
  function getOwnNonIndexProperties(value) {
    return Object.keys(value).filter(isNonIndex).concat(objectGetOwnPropertySymbols(value).filter(Object.prototype.propertyIsEnumerable.bind(value)));
  }
  function compare3(a, b) {
    if (a === b) {
      return 0;
    }
    var x = a.length;
    var y = b.length;
    for (var i = 0, len = Math.min(x, y);i < len; ++i) {
      if (a[i] !== b[i]) {
        x = a[i];
        y = b[i];
        break;
      }
    }
    if (x < y) {
      return -1;
    }
    if (y < x) {
      return 1;
    }
    return 0;
  }
  function areSimilarRegExps(a, b) {
    return regexFlagsSupported ? a.source === b.source && a.flags === b.flags : RegExp.prototype.toString.call(a) === RegExp.prototype.toString.call(b);
  }
  function areSimilarFloatArrays(a, b) {
    if (a.byteLength !== b.byteLength) {
      return false;
    }
    for (var offset = 0;offset < a.byteLength; offset++) {
      if (a[offset] !== b[offset]) {
        return false;
      }
    }
    return true;
  }
  function areSimilarTypedArrays(a, b) {
    if (a.byteLength !== b.byteLength) {
      return false;
    }
    return compare3(new Uint8Array(a.buffer, a.byteOffset, a.byteLength), new Uint8Array(b.buffer, b.byteOffset, b.byteLength)) === 0;
  }
  function areEqualArrayBuffers(buf1, buf2) {
    return buf1.byteLength === buf2.byteLength && compare3(new Uint8Array(buf1), new Uint8Array(buf2)) === 0;
  }
  function isEqualBoxedPrimitive(val1, val2) {
    if (isNumberObject(val1)) {
      return isNumberObject(val2) && objectIs(Number.prototype.valueOf.call(val1), Number.prototype.valueOf.call(val2));
    }
    if (isStringObject(val1)) {
      return isStringObject(val2) && String.prototype.valueOf.call(val1) === String.prototype.valueOf.call(val2);
    }
    if (isBooleanObject(val1)) {
      return isBooleanObject(val2) && Boolean.prototype.valueOf.call(val1) === Boolean.prototype.valueOf.call(val2);
    }
    if (isBigIntObject(val1)) {
      return isBigIntObject(val2) && BigInt.prototype.valueOf.call(val1) === BigInt.prototype.valueOf.call(val2);
    }
    return isSymbolObject(val2) && Symbol.prototype.valueOf.call(val1) === Symbol.prototype.valueOf.call(val2);
  }
  function innerDeepEqual(val1, val2, strict, memos) {
    if (val1 === val2) {
      if (val1 !== 0)
        return true;
      return strict ? objectIs(val1, val2) : true;
    }
    if (strict) {
      if (_typeof(val1) !== "object") {
        return typeof val1 === "number" && numberIsNaN2(val1) && numberIsNaN2(val2);
      }
      if (_typeof(val2) !== "object" || val1 === null || val2 === null) {
        return false;
      }
      if (Object.getPrototypeOf(val1) !== Object.getPrototypeOf(val2)) {
        return false;
      }
    } else {
      if (val1 === null || _typeof(val1) !== "object") {
        if (val2 === null || _typeof(val2) !== "object") {
          return val1 == val2;
        }
        return false;
      }
      if (val2 === null || _typeof(val2) !== "object") {
        return false;
      }
    }
    var val1Tag = objectToString(val1);
    var val2Tag = objectToString(val2);
    if (val1Tag !== val2Tag) {
      return false;
    }
    if (Array.isArray(val1)) {
      if (val1.length !== val2.length) {
        return false;
      }
      var keys1 = getOwnNonIndexProperties(val1, ONLY_ENUMERABLE);
      var keys2 = getOwnNonIndexProperties(val2, ONLY_ENUMERABLE);
      if (keys1.length !== keys2.length) {
        return false;
      }
      return keyCheck(val1, val2, strict, memos, kIsArray, keys1);
    }
    if (val1Tag === "[object Object]") {
      if (!isMap(val1) && isMap(val2) || !isSet(val1) && isSet(val2)) {
        return false;
      }
    }
    if (isDate(val1)) {
      if (!isDate(val2) || Date.prototype.getTime.call(val1) !== Date.prototype.getTime.call(val2)) {
        return false;
      }
    } else if (isRegExp(val1)) {
      if (!isRegExp(val2) || !areSimilarRegExps(val1, val2)) {
        return false;
      }
    } else if (isNativeError(val1) || val1 instanceof Error) {
      if (val1.message !== val2.message || val1.name !== val2.name) {
        return false;
      }
    } else if (isArrayBufferView(val1)) {
      if (!strict && (isFloat32Array(val1) || isFloat64Array(val1))) {
        if (!areSimilarFloatArrays(val1, val2)) {
          return false;
        }
      } else if (!areSimilarTypedArrays(val1, val2)) {
        return false;
      }
      var _keys = getOwnNonIndexProperties(val1, ONLY_ENUMERABLE);
      var _keys2 = getOwnNonIndexProperties(val2, ONLY_ENUMERABLE);
      if (_keys.length !== _keys2.length) {
        return false;
      }
      return keyCheck(val1, val2, strict, memos, kNoIterator, _keys);
    } else if (isSet(val1)) {
      if (!isSet(val2) || val1.size !== val2.size) {
        return false;
      }
      return keyCheck(val1, val2, strict, memos, kIsSet);
    } else if (isMap(val1)) {
      if (!isMap(val2) || val1.size !== val2.size) {
        return false;
      }
      return keyCheck(val1, val2, strict, memos, kIsMap);
    } else if (isAnyArrayBuffer(val1)) {
      if (!areEqualArrayBuffers(val1, val2)) {
        return false;
      }
    } else if (isBoxedPrimitive(val1) && !isEqualBoxedPrimitive(val1, val2)) {
      return false;
    }
    return keyCheck(val1, val2, strict, memos, kNoIterator);
  }
  function getEnumerables(val, keys) {
    return keys.filter(function(k2) {
      return propertyIsEnumerable(val, k2);
    });
  }
  function keyCheck(val1, val2, strict, memos, iterationType, aKeys) {
    if (arguments.length === 5) {
      aKeys = Object.keys(val1);
      var bKeys = Object.keys(val2);
      if (aKeys.length !== bKeys.length) {
        return false;
      }
    }
    var i = 0;
    for (;i < aKeys.length; i++) {
      if (!hasOwnProperty(val2, aKeys[i])) {
        return false;
      }
    }
    if (strict && arguments.length === 5) {
      var symbolKeysA = objectGetOwnPropertySymbols(val1);
      if (symbolKeysA.length !== 0) {
        var count = 0;
        for (i = 0;i < symbolKeysA.length; i++) {
          var key = symbolKeysA[i];
          if (propertyIsEnumerable(val1, key)) {
            if (!propertyIsEnumerable(val2, key)) {
              return false;
            }
            aKeys.push(key);
            count++;
          } else if (propertyIsEnumerable(val2, key)) {
            return false;
          }
        }
        var symbolKeysB = objectGetOwnPropertySymbols(val2);
        if (symbolKeysA.length !== symbolKeysB.length && getEnumerables(val2, symbolKeysB).length !== count) {
          return false;
        }
      } else {
        var _symbolKeysB = objectGetOwnPropertySymbols(val2);
        if (_symbolKeysB.length !== 0 && getEnumerables(val2, _symbolKeysB).length !== 0) {
          return false;
        }
      }
    }
    if (aKeys.length === 0 && (iterationType === kNoIterator || iterationType === kIsArray && val1.length === 0 || val1.size === 0)) {
      return true;
    }
    if (memos === undefined) {
      memos = {
        val1: new Map,
        val2: new Map,
        position: 0
      };
    } else {
      var val2MemoA = memos.val1.get(val1);
      if (val2MemoA !== undefined) {
        var val2MemoB = memos.val2.get(val2);
        if (val2MemoB !== undefined) {
          return val2MemoA === val2MemoB;
        }
      }
      memos.position++;
    }
    memos.val1.set(val1, memos.position);
    memos.val2.set(val2, memos.position);
    var areEq = objEquiv(val1, val2, strict, aKeys, memos, iterationType);
    memos.val1.delete(val1);
    memos.val2.delete(val2);
    return areEq;
  }
  function setHasEqualElement(set, val1, strict, memo) {
    var setValues = arrayFromSet(set);
    for (var i = 0;i < setValues.length; i++) {
      var val2 = setValues[i];
      if (innerDeepEqual(val1, val2, strict, memo)) {
        set.delete(val2);
        return true;
      }
    }
    return false;
  }
  function findLooseMatchingPrimitives(prim) {
    switch (_typeof(prim)) {
      case "undefined":
        return null;
      case "object":
        return;
      case "symbol":
        return false;
      case "string":
        prim = +prim;
      case "number":
        if (numberIsNaN2(prim)) {
          return false;
        }
    }
    return true;
  }
  function setMightHaveLoosePrim(a, b, prim) {
    var altValue = findLooseMatchingPrimitives(prim);
    if (altValue != null)
      return altValue;
    return b.has(altValue) && !a.has(altValue);
  }
  function mapMightHaveLoosePrim(a, b, prim, item, memo) {
    var altValue = findLooseMatchingPrimitives(prim);
    if (altValue != null) {
      return altValue;
    }
    var curB = b.get(altValue);
    if (curB === undefined && !b.has(altValue) || !innerDeepEqual(item, curB, false, memo)) {
      return false;
    }
    return !a.has(altValue) && innerDeepEqual(item, curB, false, memo);
  }
  function setEquiv(a, b, strict, memo) {
    var set = null;
    var aValues = arrayFromSet(a);
    for (var i = 0;i < aValues.length; i++) {
      var val = aValues[i];
      if (_typeof(val) === "object" && val !== null) {
        if (set === null) {
          set = new Set;
        }
        set.add(val);
      } else if (!b.has(val)) {
        if (strict)
          return false;
        if (!setMightHaveLoosePrim(a, b, val)) {
          return false;
        }
        if (set === null) {
          set = new Set;
        }
        set.add(val);
      }
    }
    if (set !== null) {
      var bValues = arrayFromSet(b);
      for (var _i = 0;_i < bValues.length; _i++) {
        var _val = bValues[_i];
        if (_typeof(_val) === "object" && _val !== null) {
          if (!setHasEqualElement(set, _val, strict, memo))
            return false;
        } else if (!strict && !a.has(_val) && !setHasEqualElement(set, _val, strict, memo)) {
          return false;
        }
      }
      return set.size === 0;
    }
    return true;
  }
  function mapHasEqualEntry(set, map, key1, item1, strict, memo) {
    var setValues = arrayFromSet(set);
    for (var i = 0;i < setValues.length; i++) {
      var key2 = setValues[i];
      if (innerDeepEqual(key1, key2, strict, memo) && innerDeepEqual(item1, map.get(key2), strict, memo)) {
        set.delete(key2);
        return true;
      }
    }
    return false;
  }
  function mapEquiv(a, b, strict, memo) {
    var set = null;
    var aEntries = arrayFromMap(a);
    for (var i = 0;i < aEntries.length; i++) {
      var _aEntries$i = _slicedToArray(aEntries[i], 2), key = _aEntries$i[0], item1 = _aEntries$i[1];
      if (_typeof(key) === "object" && key !== null) {
        if (set === null) {
          set = new Set;
        }
        set.add(key);
      } else {
        var item2 = b.get(key);
        if (item2 === undefined && !b.has(key) || !innerDeepEqual(item1, item2, strict, memo)) {
          if (strict)
            return false;
          if (!mapMightHaveLoosePrim(a, b, key, item1, memo))
            return false;
          if (set === null) {
            set = new Set;
          }
          set.add(key);
        }
      }
    }
    if (set !== null) {
      var bEntries = arrayFromMap(b);
      for (var _i2 = 0;_i2 < bEntries.length; _i2++) {
        var _bEntries$_i = _slicedToArray(bEntries[_i2], 2), _key = _bEntries$_i[0], item = _bEntries$_i[1];
        if (_typeof(_key) === "object" && _key !== null) {
          if (!mapHasEqualEntry(set, a, _key, item, strict, memo))
            return false;
        } else if (!strict && (!a.has(_key) || !innerDeepEqual(a.get(_key), item, false, memo)) && !mapHasEqualEntry(set, a, _key, item, false, memo)) {
          return false;
        }
      }
      return set.size === 0;
    }
    return true;
  }
  function objEquiv(a, b, strict, keys, memos, iterationType) {
    var i = 0;
    if (iterationType === kIsSet) {
      if (!setEquiv(a, b, strict, memos)) {
        return false;
      }
    } else if (iterationType === kIsMap) {
      if (!mapEquiv(a, b, strict, memos)) {
        return false;
      }
    } else if (iterationType === kIsArray) {
      for (;i < a.length; i++) {
        if (hasOwnProperty(a, i)) {
          if (!hasOwnProperty(b, i) || !innerDeepEqual(a[i], b[i], strict, memos)) {
            return false;
          }
        } else if (hasOwnProperty(b, i)) {
          return false;
        } else {
          var keysA = Object.keys(a);
          for (;i < keysA.length; i++) {
            var key = keysA[i];
            if (!hasOwnProperty(b, key) || !innerDeepEqual(a[key], b[key], strict, memos)) {
              return false;
            }
          }
          if (keysA.length !== Object.keys(b).length) {
            return false;
          }
          return true;
        }
      }
    }
    for (i = 0;i < keys.length; i++) {
      var _key2 = keys[i];
      if (!innerDeepEqual(a[_key2], b[_key2], strict, memos)) {
        return false;
      }
    }
    return true;
  }
  function isDeepEqual(val1, val2) {
    return innerDeepEqual(val1, val2, kLoose);
  }
  function isDeepStrictEqual(val1, val2) {
    return innerDeepEqual(val1, val2, kStrict);
  }
  var regexFlagsSupported = /a/g.flags !== undefined;
  var arrayFromSet = function arrayFromSet(set) {
    var array = [];
    set.forEach(function(value) {
      return array.push(value);
    });
    return array;
  };
  var arrayFromMap = function arrayFromMap(map) {
    var array = [];
    map.forEach(function(value, key) {
      return array.push([key, value]);
    });
    return array;
  };
  var objectIs = Object.is ? Object.is : require_object_is();
  var objectGetOwnPropertySymbols = Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols : function() {
    return [];
  };
  var numberIsNaN2 = Number.isNaN ? Number.isNaN : require_is_nan();
  var hasOwnProperty = uncurryThis(Object.prototype.hasOwnProperty);
  var propertyIsEnumerable = uncurryThis(Object.prototype.propertyIsEnumerable);
  var objectToString = uncurryThis(Object.prototype.toString);
  var _require$types = require_util().types;
  var isAnyArrayBuffer = _require$types.isAnyArrayBuffer;
  var isArrayBufferView = _require$types.isArrayBufferView;
  var isDate = _require$types.isDate;
  var isMap = _require$types.isMap;
  var isRegExp = _require$types.isRegExp;
  var isSet = _require$types.isSet;
  var isNativeError = _require$types.isNativeError;
  var isBoxedPrimitive = _require$types.isBoxedPrimitive;
  var isNumberObject = _require$types.isNumberObject;
  var isStringObject = _require$types.isStringObject;
  var isBooleanObject = _require$types.isBooleanObject;
  var isBigIntObject = _require$types.isBigIntObject;
  var isSymbolObject = _require$types.isSymbolObject;
  var isFloat32Array = _require$types.isFloat32Array;
  var isFloat64Array = _require$types.isFloat64Array;
  /*!
   * The buffer module from node.js, for the browser.
   *
   * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
   * @license  MIT
   */
  var ONLY_ENUMERABLE = undefined;
  var kStrict = true;
  var kLoose = false;
  var kNoIterator = 0;
  var kIsArray = 1;
  var kIsSet = 2;
  var kIsMap = 3;
  module.exports = {
    isDeepEqual,
    isDeepStrictEqual
  };
});

// src/external/assert/internal/errors.js
var require_errors = __commonJS((exports, module) => {
  function _typeof(o) {
    "@babel/helpers - typeof";
    return _typeof = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o2) {
      return typeof o2;
    } : function(o2) {
      return o2 && typeof Symbol == "function" && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
    }, _typeof(o);
  }
  function _defineProperties(target, props) {
    for (var i = 0;i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
    }
  }
  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", { writable: false });
    return Constructor;
  }
  function _toPropertyKey(arg) {
    var key = _toPrimitive(arg, "string");
    return _typeof(key) === "symbol" ? key : String(key);
  }
  function _toPrimitive(input, hint) {
    if (_typeof(input) !== "object" || input === null)
      return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
      var res = prim.call(input, hint || "default");
      if (_typeof(res) !== "object")
        return res;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
  }
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
    Object.defineProperty(subClass, "prototype", { writable: false });
    if (superClass)
      _setPrototypeOf(subClass, superClass);
  }
  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o2, p2) {
      o2.__proto__ = p2;
      return o2;
    };
    return _setPrototypeOf(o, p);
  }
  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived), result;
      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;
        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }
      return _possibleConstructorReturn(this, result);
    };
  }
  function _possibleConstructorReturn(self2, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
      return call;
    } else if (call !== undefined) {
      throw new TypeError("Derived constructors may only return object or undefined");
    }
    return _assertThisInitialized(self2);
  }
  function _assertThisInitialized(self2) {
    if (self2 === undefined) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self2;
  }
  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct)
      return false;
    if (Reflect.construct.sham)
      return false;
    if (typeof Proxy === "function")
      return true;
    try {
      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      }));
      return true;
    } catch (e) {
      return false;
    }
  }
  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o2) {
      return o2.__proto__ || Object.getPrototypeOf(o2);
    };
    return _getPrototypeOf(o);
  }
  function createErrorType(code, message, Base) {
    if (!Base) {
      Base = Error;
    }
    function getMessage(arg1, arg2, arg3) {
      if (typeof message === "string") {
        return message;
      } else {
        return message(arg1, arg2, arg3);
      }
    }
    var NodeError = /* @__PURE__ */ function(_Base) {
      _inherits(NodeError2, _Base);
      var _super = _createSuper(NodeError2);
      function NodeError2(arg1, arg2, arg3) {
        var _this;
        _classCallCheck(this, NodeError2);
        _this = _super.call(this, getMessage(arg1, arg2, arg3));
        _this.code = code;
        return _this;
      }
      return _createClass(NodeError2);
    }(Base);
    codes[code] = NodeError;
  }
  function oneOf(expected, thing) {
    if (Array.isArray(expected)) {
      var len = expected.length;
      expected = expected.map(function(i) {
        return String(i);
      });
      if (len > 2) {
        return "one of ".concat(thing, " ").concat(expected.slice(0, len - 1).join(", "), ", or ") + expected[len - 1];
      } else if (len === 2) {
        return "one of ".concat(thing, " ").concat(expected[0], " or ").concat(expected[1]);
      } else {
        return "of ".concat(thing, " ").concat(expected[0]);
      }
    } else {
      return "of ".concat(thing, " ").concat(String(expected));
    }
  }
  function startsWith(str, search, pos) {
    return str.substr(!pos || pos < 0 ? 0 : +pos, search.length) === search;
  }
  function endsWith(str, search, this_len) {
    if (this_len === undefined || this_len > str.length) {
      this_len = str.length;
    }
    return str.substring(this_len - search.length, this_len) === search;
  }
  function includes2(str, search, start) {
    if (typeof start !== "number") {
      start = 0;
    }
    if (start + search.length > str.length) {
      return false;
    } else {
      return str.indexOf(search, start) !== -1;
    }
  }
  var codes = {};
  var assert;
  var util;
  createErrorType("ERR_AMBIGUOUS_ARGUMENT", 'The "%s" argument is ambiguous. %s', TypeError);
  createErrorType("ERR_INVALID_ARG_TYPE", function(name, expected, actual) {
    if (assert === undefined)
      assert = require_assert();
    assert(typeof name === "string", "'name' must be a string");
    var determiner;
    if (typeof expected === "string" && startsWith(expected, "not ")) {
      determiner = "must not be";
      expected = expected.replace(/^not /, "");
    } else {
      determiner = "must be";
    }
    var msg;
    if (endsWith(name, " argument")) {
      msg = "The ".concat(name, " ").concat(determiner, " ").concat(oneOf(expected, "type"));
    } else {
      var type = includes2(name, ".") ? "property" : "argument";
      msg = "The \"".concat(name, "\" ").concat(type, " ").concat(determiner, " ").concat(oneOf(expected, "type"));
    }
    msg += ". Received type ".concat(_typeof(actual));
    return msg;
  }, TypeError);
  createErrorType("ERR_INVALID_ARG_VALUE", function(name, value) {
    var reason = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "is invalid";
    if (util === undefined)
      util = require_util();
    var inspected = util.inspect(value);
    if (inspected.length > 128) {
      inspected = "".concat(inspected.slice(0, 128), "...");
    }
    return "The argument '".concat(name, "' ").concat(reason, ". Received ").concat(inspected);
  }, TypeError, RangeError);
  createErrorType("ERR_INVALID_RETURN_VALUE", function(input, name, value) {
    var type;
    if (value && value.constructor && value.constructor.name) {
      type = "instance of ".concat(value.constructor.name);
    } else {
      type = "type ".concat(_typeof(value));
    }
    return "Expected ".concat(input, " to be returned from the \"").concat(name, "\"") + " function but got ".concat(type, ".");
  }, TypeError);
  createErrorType("ERR_MISSING_ARGS", function() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0;_key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    if (assert === undefined)
      assert = require_assert();
    assert(args.length > 0, "At least one arg needs to be specified");
    var msg = "The ";
    var len = args.length;
    args = args.map(function(a) {
      return "\"".concat(a, "\"");
    });
    switch (len) {
      case 1:
        msg += "".concat(args[0], " argument");
        break;
      case 2:
        msg += "".concat(args[0], " and ").concat(args[1], " arguments");
        break;
      default:
        msg += args.slice(0, len - 1).join(", ");
        msg += ", and ".concat(args[len - 1], " arguments");
        break;
    }
    return "".concat(msg, " must be specified");
  }, TypeError);
  exports.codes = codes;
});

// src/external/assert/internal/assert/assertion_error.js
var require_assertion_error = __commonJS((exports, module) => {
  function ownKeys(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      r && (o = o.filter(function(r2) {
        return Object.getOwnPropertyDescriptor(e, r2).enumerable;
      })), t.push.apply(t, o);
    }
    return t;
  }
  function _objectSpread(e) {
    for (var r = 1;r < arguments.length; r++) {
      var t = arguments[r] != null ? arguments[r] : {};
      r % 2 ? ownKeys(Object(t), true).forEach(function(r2) {
        _defineProperty(e, r2, t[r2]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r2) {
        Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
      });
    }
    return e;
  }
  function _defineProperty(obj, key, value) {
    key = _toPropertyKey(key);
    if (key in obj) {
      Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties(target, props) {
    for (var i = 0;i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
    }
  }
  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", { writable: false });
    return Constructor;
  }
  function _toPropertyKey(arg) {
    var key = _toPrimitive(arg, "string");
    return _typeof(key) === "symbol" ? key : String(key);
  }
  function _toPrimitive(input, hint) {
    if (_typeof(input) !== "object" || input === null)
      return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
      var res = prim.call(input, hint || "default");
      if (_typeof(res) !== "object")
        return res;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
  }
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
    Object.defineProperty(subClass, "prototype", { writable: false });
    if (superClass)
      _setPrototypeOf(subClass, superClass);
  }
  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived), result;
      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;
        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }
      return _possibleConstructorReturn(this, result);
    };
  }
  function _possibleConstructorReturn(self2, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
      return call;
    } else if (call !== undefined) {
      throw new TypeError("Derived constructors may only return object or undefined");
    }
    return _assertThisInitialized(self2);
  }
  function _assertThisInitialized(self2) {
    if (self2 === undefined) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self2;
  }
  function _wrapNativeSuper(Class) {
    var _cache = typeof Map === "function" ? new Map : undefined;
    _wrapNativeSuper = function _wrapNativeSuper(Class2) {
      if (Class2 === null || !_isNativeFunction(Class2))
        return Class2;
      if (typeof Class2 !== "function") {
        throw new TypeError("Super expression must either be null or a function");
      }
      if (typeof _cache !== "undefined") {
        if (_cache.has(Class2))
          return _cache.get(Class2);
        _cache.set(Class2, Wrapper);
      }
      function Wrapper() {
        return _construct(Class2, arguments, _getPrototypeOf(this).constructor);
      }
      Wrapper.prototype = Object.create(Class2.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } });
      return _setPrototypeOf(Wrapper, Class2);
    };
    return _wrapNativeSuper(Class);
  }
  function _construct(Parent, args, Class) {
    if (_isNativeReflectConstruct()) {
      _construct = Reflect.construct.bind();
    } else {
      _construct = function _construct(Parent2, args2, Class2) {
        var a = [null];
        a.push.apply(a, args2);
        var Constructor = Function.bind.apply(Parent2, a);
        var instance = new Constructor;
        if (Class2)
          _setPrototypeOf(instance, Class2.prototype);
        return instance;
      };
    }
    return _construct.apply(null, arguments);
  }
  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct)
      return false;
    if (Reflect.construct.sham)
      return false;
    if (typeof Proxy === "function")
      return true;
    try {
      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      }));
      return true;
    } catch (e) {
      return false;
    }
  }
  function _isNativeFunction(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
  }
  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o2, p2) {
      o2.__proto__ = p2;
      return o2;
    };
    return _setPrototypeOf(o, p);
  }
  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o2) {
      return o2.__proto__ || Object.getPrototypeOf(o2);
    };
    return _getPrototypeOf(o);
  }
  function _typeof(o) {
    "@babel/helpers - typeof";
    return _typeof = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o2) {
      return typeof o2;
    } : function(o2) {
      return o2 && typeof Symbol == "function" && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
    }, _typeof(o);
  }
  function endsWith(str, search, this_len) {
    if (this_len === undefined || this_len > str.length) {
      this_len = str.length;
    }
    return str.substring(this_len - search.length, this_len) === search;
  }
  function repeat(str, count) {
    count = Math.floor(count);
    if (str.length == 0 || count == 0)
      return "";
    var maxCount = str.length * count;
    count = Math.floor(Math.log(count) / Math.log(2));
    while (count) {
      str += str;
      count--;
    }
    str += str.substring(0, maxCount - str.length);
    return str;
  }
  function copyError(source) {
    var keys = Object.keys(source);
    var target = Object.create(Object.getPrototypeOf(source));
    keys.forEach(function(key) {
      target[key] = source[key];
    });
    Object.defineProperty(target, "message", {
      value: source.message
    });
    return target;
  }
  function inspectValue(val) {
    return inspect2(val, {
      compact: false,
      customInspect: false,
      depth: 1000,
      maxArrayLength: Infinity,
      showHidden: false,
      breakLength: Infinity,
      showProxy: false,
      sorted: true,
      getters: true
    });
  }
  function createErrDiff(actual, expected, operator) {
    var other = "";
    var res = "";
    var lastPos = 0;
    var end = "";
    var skipped = false;
    var actualInspected = inspectValue(actual);
    var actualLines = actualInspected.split("\n");
    var expectedLines = inspectValue(expected).split("\n");
    var i = 0;
    var indicator = "";
    if (operator === "strictEqual" && _typeof(actual) === "object" && _typeof(expected) === "object" && actual !== null && expected !== null) {
      operator = "strictEqualObject";
    }
    if (actualLines.length === 1 && expectedLines.length === 1 && actualLines[0] !== expectedLines[0]) {
      var inputLength = actualLines[0].length + expectedLines[0].length;
      if (inputLength <= kMaxShortLength) {
        if ((_typeof(actual) !== "object" || actual === null) && (_typeof(expected) !== "object" || expected === null) && (actual !== 0 || expected !== 0)) {
          return "".concat(kReadableOperator[operator], "\n\n") + "".concat(actualLines[0], " !== ").concat(expectedLines[0], "\n");
        }
      } else if (operator !== "strictEqualObject") {
        var maxLength = process.stderr && process.stderr.isTTY ? process.stderr.columns : 80;
        if (inputLength < maxLength) {
          while (actualLines[0][i] === expectedLines[0][i]) {
            i++;
          }
          if (i > 2) {
            indicator = "\n  ".concat(repeat(" ", i), "^");
            i = 0;
          }
        }
      }
    }
    var a = actualLines[actualLines.length - 1];
    var b = expectedLines[expectedLines.length - 1];
    while (a === b) {
      if (i++ < 2) {
        end = "\n  ".concat(a).concat(end);
      } else {
        other = a;
      }
      actualLines.pop();
      expectedLines.pop();
      if (actualLines.length === 0 || expectedLines.length === 0)
        break;
      a = actualLines[actualLines.length - 1];
      b = expectedLines[expectedLines.length - 1];
    }
    var maxLines = Math.max(actualLines.length, expectedLines.length);
    if (maxLines === 0) {
      var _actualLines = actualInspected.split("\n");
      if (_actualLines.length > 30) {
        _actualLines[26] = "".concat(blue, "...").concat(white);
        while (_actualLines.length > 27) {
          _actualLines.pop();
        }
      }
      return "".concat(kReadableOperator.notIdentical, "\n\n").concat(_actualLines.join("\n"), "\n");
    }
    if (i > 3) {
      end = "\n".concat(blue, "...").concat(white).concat(end);
      skipped = true;
    }
    if (other !== "") {
      end = "\n  ".concat(other).concat(end);
      other = "";
    }
    var printedLines = 0;
    var msg = kReadableOperator[operator] + "\n".concat(green, "+ actual").concat(white, " ").concat(red, "- expected").concat(white);
    var skippedMsg = " ".concat(blue, "...").concat(white, " Lines skipped");
    for (i = 0;i < maxLines; i++) {
      var cur = i - lastPos;
      if (actualLines.length < i + 1) {
        if (cur > 1 && i > 2) {
          if (cur > 4) {
            res += "\n".concat(blue, "...").concat(white);
            skipped = true;
          } else if (cur > 3) {
            res += "\n  ".concat(expectedLines[i - 2]);
            printedLines++;
          }
          res += "\n  ".concat(expectedLines[i - 1]);
          printedLines++;
        }
        lastPos = i;
        other += "\n".concat(red, "-").concat(white, " ").concat(expectedLines[i]);
        printedLines++;
      } else if (expectedLines.length < i + 1) {
        if (cur > 1 && i > 2) {
          if (cur > 4) {
            res += "\n".concat(blue, "...").concat(white);
            skipped = true;
          } else if (cur > 3) {
            res += "\n  ".concat(actualLines[i - 2]);
            printedLines++;
          }
          res += "\n  ".concat(actualLines[i - 1]);
          printedLines++;
        }
        lastPos = i;
        res += "\n".concat(green, "+").concat(white, " ").concat(actualLines[i]);
        printedLines++;
      } else {
        var expectedLine = expectedLines[i];
        var actualLine = actualLines[i];
        var divergingLines = actualLine !== expectedLine && (!endsWith(actualLine, ",") || actualLine.slice(0, -1) !== expectedLine);
        if (divergingLines && endsWith(expectedLine, ",") && expectedLine.slice(0, -1) === actualLine) {
          divergingLines = false;
          actualLine += ",";
        }
        if (divergingLines) {
          if (cur > 1 && i > 2) {
            if (cur > 4) {
              res += "\n".concat(blue, "...").concat(white);
              skipped = true;
            } else if (cur > 3) {
              res += "\n  ".concat(actualLines[i - 2]);
              printedLines++;
            }
            res += "\n  ".concat(actualLines[i - 1]);
            printedLines++;
          }
          lastPos = i;
          res += "\n".concat(green, "+").concat(white, " ").concat(actualLine);
          other += "\n".concat(red, "-").concat(white, " ").concat(expectedLine);
          printedLines += 2;
        } else {
          res += other;
          other = "";
          if (cur === 1 || i === 0) {
            res += "\n  ".concat(actualLine);
            printedLines++;
          }
        }
      }
      if (printedLines > 20 && i < maxLines - 2) {
        return "".concat(msg).concat(skippedMsg, "\n").concat(res, "\n").concat(blue, "...").concat(white).concat(other, "\n") + "".concat(blue, "...").concat(white);
      }
    }
    return "".concat(msg).concat(skipped ? skippedMsg : "", "\n").concat(res).concat(other).concat(end).concat(indicator);
  }
  var _require = require_util();
  var inspect2 = _require.inspect;
  var _require2 = require_errors();
  var ERR_INVALID_ARG_TYPE = _require2.codes.ERR_INVALID_ARG_TYPE;
  var blue = "";
  var green = "";
  var red = "";
  var white = "";
  var kReadableOperator = {
    deepStrictEqual: "Expected values to be strictly deep-equal:",
    strictEqual: "Expected values to be strictly equal:",
    strictEqualObject: 'Expected "actual" to be reference-equal to "expected":',
    deepEqual: "Expected values to be loosely deep-equal:",
    equal: "Expected values to be loosely equal:",
    notDeepStrictEqual: 'Expected "actual" not to be strictly deep-equal to:',
    notStrictEqual: 'Expected "actual" to be strictly unequal to:',
    notStrictEqualObject: 'Expected "actual" not to be reference-equal to "expected":',
    notDeepEqual: 'Expected "actual" not to be loosely deep-equal to:',
    notEqual: 'Expected "actual" to be loosely unequal to:',
    notIdentical: "Values identical but not reference-equal:"
  };
  var kMaxShortLength = 10;
  var AssertionError = /* @__PURE__ */ function(_Error, _inspect$custom) {
    _inherits(AssertionError2, _Error);
    var _super = _createSuper(AssertionError2);
    function AssertionError2(options) {
      var _this;
      _classCallCheck(this, AssertionError2);
      if (_typeof(options) !== "object" || options === null) {
        throw new ERR_INVALID_ARG_TYPE("options", "Object", options);
      }
      var { message, operator, stackStartFn } = options;
      var { actual, expected } = options;
      var limit = Error.stackTraceLimit;
      Error.stackTraceLimit = 0;
      if (message != null) {
        _this = _super.call(this, String(message));
      } else {
        if (process.stderr && process.stderr.isTTY) {
          if (process.stderr && process.stderr.getColorDepth && process.stderr.getColorDepth() !== 1) {
            blue = "\x1B[34m";
            green = "\x1B[32m";
            white = "\x1B[39m";
            red = "\x1B[31m";
          } else {
            blue = "";
            green = "";
            white = "";
            red = "";
          }
        }
        if (_typeof(actual) === "object" && actual !== null && _typeof(expected) === "object" && expected !== null && "stack" in actual && actual instanceof Error && "stack" in expected && expected instanceof Error) {
          actual = copyError(actual);
          expected = copyError(expected);
        }
        if (operator === "deepStrictEqual" || operator === "strictEqual") {
          _this = _super.call(this, createErrDiff(actual, expected, operator));
        } else if (operator === "notDeepStrictEqual" || operator === "notStrictEqual") {
          var base = kReadableOperator[operator];
          var res = inspectValue(actual).split("\n");
          if (operator === "notStrictEqual" && _typeof(actual) === "object" && actual !== null) {
            base = kReadableOperator.notStrictEqualObject;
          }
          if (res.length > 30) {
            res[26] = "".concat(blue, "...").concat(white);
            while (res.length > 27) {
              res.pop();
            }
          }
          if (res.length === 1) {
            _this = _super.call(this, "".concat(base, " ").concat(res[0]));
          } else {
            _this = _super.call(this, "".concat(base, "\n\n").concat(res.join("\n"), "\n"));
          }
        } else {
          var _res = inspectValue(actual);
          var other = "";
          var knownOperators = kReadableOperator[operator];
          if (operator === "notDeepEqual" || operator === "notEqual") {
            _res = "".concat(kReadableOperator[operator], "\n\n").concat(_res);
            if (_res.length > 1024) {
              _res = "".concat(_res.slice(0, 1021), "...");
            }
          } else {
            other = "".concat(inspectValue(expected));
            if (_res.length > 512) {
              _res = "".concat(_res.slice(0, 509), "...");
            }
            if (other.length > 512) {
              other = "".concat(other.slice(0, 509), "...");
            }
            if (operator === "deepEqual" || operator === "equal") {
              _res = "".concat(knownOperators, "\n\n").concat(_res, "\n\nshould equal\n\n");
            } else {
              other = " ".concat(operator, " ").concat(other);
            }
          }
          _this = _super.call(this, "".concat(_res).concat(other));
        }
      }
      Error.stackTraceLimit = limit;
      _this.generatedMessage = !message;
      Object.defineProperty(_assertThisInitialized(_this), "name", {
        value: "AssertionError [ERR_ASSERTION]",
        enumerable: false,
        writable: true,
        configurable: true
      });
      _this.code = "ERR_ASSERTION";
      _this.actual = actual;
      _this.expected = expected;
      _this.operator = operator;
      if (Error.captureStackTrace) {
        Error.captureStackTrace(_assertThisInitialized(_this), stackStartFn);
      }
      _this.stack;
      _this.name = "AssertionError";
      return _possibleConstructorReturn(_this);
    }
    _createClass(AssertionError2, [{
      key: "toString",
      value: function toString() {
        return "".concat(this.name, " [").concat(this.code, "]: ").concat(this.message);
      }
    }, {
      key: _inspect$custom,
      value: function value(recurseTimes, ctx) {
        return inspect2(this, _objectSpread(_objectSpread({}, ctx), {}, {
          customInspect: false,
          depth: 0
        }));
      }
    }]);
    return AssertionError2;
  }(/* @__PURE__ */ _wrapNativeSuper(Error), inspect2.custom);
  module.exports = AssertionError;
});

// node_modules/object.assign/implementation.js
var require_implementation5 = __commonJS((exports, module) => {
  var objectKeys = require_object_keys();
  var hasSymbols = require_shams()();
  var callBound = require_callBound();
  var toObject = Object;
  var $push = callBound("Array.prototype.push");
  var $propIsEnumerable = callBound("Object.prototype.propertyIsEnumerable");
  var originalGetSymbols = hasSymbols ? Object.getOwnPropertySymbols : null;
  module.exports = function assign(target, source1) {
    if (target == null) {
      throw new TypeError("target must be an object");
    }
    var to = toObject(target);
    if (arguments.length === 1) {
      return to;
    }
    for (var s = 1;s < arguments.length; ++s) {
      var from2 = toObject(arguments[s]);
      var keys = objectKeys(from2);
      var getSymbols = hasSymbols && (Object.getOwnPropertySymbols || originalGetSymbols);
      if (getSymbols) {
        var syms = getSymbols(from2);
        for (var j = 0;j < syms.length; ++j) {
          var key = syms[j];
          if ($propIsEnumerable(from2, key)) {
            $push(keys, key);
          }
        }
      }
      for (var i = 0;i < keys.length; ++i) {
        var nextKey = keys[i];
        if ($propIsEnumerable(from2, nextKey)) {
          var propValue = from2[nextKey];
          to[nextKey] = propValue;
        }
      }
    }
    return to;
  };
});

// node_modules/object.assign/polyfill.js
var require_polyfill3 = __commonJS((exports, module) => {
  var implementation = require_implementation5();
  var lacksProperEnumerationOrder = function() {
    if (!Object.assign) {
      return false;
    }
    var str = "abcdefghijklmnopqrst";
    var letters = str.split("");
    var map = {};
    for (var i = 0;i < letters.length; ++i) {
      map[letters[i]] = letters[i];
    }
    var obj = Object.assign({}, map);
    var actual = "";
    for (var k2 in obj) {
      actual += k2;
    }
    return str !== actual;
  };
  var assignHasPendingExceptions = function() {
    if (!Object.assign || !Object.preventExtensions) {
      return false;
    }
    var thrower = Object.preventExtensions({ 1: 2 });
    try {
      Object.assign(thrower, "xy");
    } catch (e) {
      return thrower[1] === "y";
    }
    return false;
  };
  module.exports = function getPolyfill() {
    if (!Object.assign) {
      return implementation;
    }
    if (lacksProperEnumerationOrder()) {
      return implementation;
    }
    if (assignHasPendingExceptions()) {
      return implementation;
    }
    return Object.assign;
  };
});

// src/external/assert/assert.js
var require_assert = __commonJS((exports, module) => {
  function _typeof(o) {
    "@babel/helpers - typeof";
    return _typeof = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o2) {
      return typeof o2;
    } : function(o2) {
      return o2 && typeof Symbol == "function" && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
    }, _typeof(o);
  }
  function _defineProperties(target, props) {
    for (var i = 0;i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
    }
  }
  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", { writable: false });
    return Constructor;
  }
  function _toPropertyKey(arg) {
    var key = _toPrimitive(arg, "string");
    return _typeof(key) === "symbol" ? key : String(key);
  }
  function _toPrimitive(input, hint) {
    if (_typeof(input) !== "object" || input === null)
      return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
      var res = prim.call(input, hint || "default");
      if (_typeof(res) !== "object")
        return res;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
  }
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function lazyLoadComparison() {
    var comparison = require_comparisons();
    isDeepEqual = comparison.isDeepEqual;
    isDeepStrictEqual = comparison.isDeepStrictEqual;
  }
  function innerFail(obj) {
    if (obj.message instanceof Error)
      throw obj.message;
    throw new AssertionError(obj);
  }
  function fail(actual, expected, message, operator, stackStartFn) {
    var argsLen = arguments.length;
    var internalMessage;
    if (argsLen === 0) {
      internalMessage = "Failed";
    } else if (argsLen === 1) {
      message = actual;
      actual = undefined;
    } else {
      if (warned === false) {
        warned = true;
        var warn = process.emitWarning ? process.emitWarning : console.warn.bind(console);
        warn("assert.fail() with more than one argument is deprecated. " + "Please use assert.strictEqual() instead or only pass a message.", "DeprecationWarning", "DEP0094");
      }
      if (argsLen === 2)
        operator = "!=";
    }
    if (message instanceof Error)
      throw message;
    var errArgs = {
      actual,
      expected,
      operator: operator === undefined ? "fail" : operator,
      stackStartFn: stackStartFn || fail
    };
    if (message !== undefined) {
      errArgs.message = message;
    }
    var err = new AssertionError(errArgs);
    if (internalMessage) {
      err.message = internalMessage;
      err.generatedMessage = true;
    }
    throw err;
  }
  function innerOk(fn, argLen, value, message) {
    if (!value) {
      var generatedMessage = false;
      if (argLen === 0) {
        generatedMessage = true;
        message = "No value argument passed to `assert.ok()`";
      } else if (message instanceof Error) {
        throw message;
      }
      var err = new AssertionError({
        actual: value,
        expected: true,
        message,
        operator: "==",
        stackStartFn: fn
      });
      err.generatedMessage = generatedMessage;
      throw err;
    }
  }
  function ok() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0;_key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    innerOk.apply(undefined, [ok, args.length].concat(args));
  }
  function notDeepStrictEqual(actual, expected, message) {
    if (arguments.length < 2) {
      throw new ERR_MISSING_ARGS("actual", "expected");
    }
    if (isDeepEqual === undefined)
      lazyLoadComparison();
    if (isDeepStrictEqual(actual, expected)) {
      innerFail({
        actual,
        expected,
        message,
        operator: "notDeepStrictEqual",
        stackStartFn: notDeepStrictEqual
      });
    }
  }
  function compareExceptionKey(actual, expected, key, message, keys, fn) {
    if (!(key in actual) || !isDeepStrictEqual(actual[key], expected[key])) {
      if (!message) {
        var a = new Comparison(actual, keys);
        var b = new Comparison(expected, keys, actual);
        var err = new AssertionError({
          actual: a,
          expected: b,
          operator: "deepStrictEqual",
          stackStartFn: fn
        });
        err.actual = actual;
        err.expected = expected;
        err.operator = fn.name;
        throw err;
      }
      innerFail({
        actual,
        expected,
        message,
        operator: fn.name,
        stackStartFn: fn
      });
    }
  }
  function expectedException(actual, expected, msg, fn) {
    if (typeof expected !== "function") {
      if (isRegExp(expected))
        return RegExpPrototypeTest(expected, actual);
      if (arguments.length === 2) {
        throw new ERR_INVALID_ARG_TYPE("expected", ["Function", "RegExp"], expected);
      }
      if (_typeof(actual) !== "object" || actual === null) {
        var err = new AssertionError({
          actual,
          expected,
          message: msg,
          operator: "deepStrictEqual",
          stackStartFn: fn
        });
        err.operator = fn.name;
        throw err;
      }
      var keys = Object.keys(expected);
      if (expected instanceof Error) {
        keys.push("name", "message");
      } else if (keys.length === 0) {
        throw new ERR_INVALID_ARG_VALUE("error", expected, "may not be an empty object");
      }
      if (isDeepEqual === undefined)
        lazyLoadComparison();
      keys.forEach(function(key) {
        if (typeof actual[key] === "string" && isRegExp(expected[key]) && RegExpPrototypeTest(expected[key], actual[key])) {
          return;
        }
        compareExceptionKey(actual, expected, key, msg, keys, fn);
      });
      return true;
    }
    if (expected.prototype !== undefined && actual instanceof expected) {
      return true;
    }
    if (Error.isPrototypeOf(expected)) {
      return false;
    }
    return expected.call({}, actual) === true;
  }
  function getActual(fn) {
    if (typeof fn !== "function") {
      throw new ERR_INVALID_ARG_TYPE("fn", "Function", fn);
    }
    try {
      fn();
    } catch (e) {
      return e;
    }
    return NO_EXCEPTION_SENTINEL;
  }
  function checkIsPromise(obj) {
    return isPromise(obj) || obj !== null && _typeof(obj) === "object" && typeof obj.then === "function" && typeof obj.catch === "function";
  }
  function waitForActual(promiseFn) {
    return Promise.resolve().then(function() {
      var resultPromise;
      if (typeof promiseFn === "function") {
        resultPromise = promiseFn();
        if (!checkIsPromise(resultPromise)) {
          throw new ERR_INVALID_RETURN_VALUE("instance of Promise", "promiseFn", resultPromise);
        }
      } else if (checkIsPromise(promiseFn)) {
        resultPromise = promiseFn;
      } else {
        throw new ERR_INVALID_ARG_TYPE("promiseFn", ["Function", "Promise"], promiseFn);
      }
      return Promise.resolve().then(function() {
        return resultPromise;
      }).then(function() {
        return NO_EXCEPTION_SENTINEL;
      }).catch(function(e) {
        return e;
      });
    });
  }
  function expectsError(stackStartFn, actual, error, message) {
    if (typeof error === "string") {
      if (arguments.length === 4) {
        throw new ERR_INVALID_ARG_TYPE("error", ["Object", "Error", "Function", "RegExp"], error);
      }
      if (_typeof(actual) === "object" && actual !== null) {
        if (actual.message === error) {
          throw new ERR_AMBIGUOUS_ARGUMENT("error/message", "The error message \"".concat(actual.message, "\" is identical to the message."));
        }
      } else if (actual === error) {
        throw new ERR_AMBIGUOUS_ARGUMENT("error/message", "The error \"".concat(actual, "\" is identical to the message."));
      }
      message = error;
      error = undefined;
    } else if (error != null && _typeof(error) !== "object" && typeof error !== "function") {
      throw new ERR_INVALID_ARG_TYPE("error", ["Object", "Error", "Function", "RegExp"], error);
    }
    if (actual === NO_EXCEPTION_SENTINEL) {
      var details = "";
      if (error && error.name) {
        details += " (".concat(error.name, ")");
      }
      details += message ? ": ".concat(message) : ".";
      var fnType = stackStartFn.name === "rejects" ? "rejection" : "exception";
      innerFail({
        actual: undefined,
        expected: error,
        operator: stackStartFn.name,
        message: "Missing expected ".concat(fnType).concat(details),
        stackStartFn
      });
    }
    if (error && !expectedException(actual, error, message, stackStartFn)) {
      throw actual;
    }
  }
  function expectsNoError(stackStartFn, actual, error, message) {
    if (actual === NO_EXCEPTION_SENTINEL)
      return;
    if (typeof error === "string") {
      message = error;
      error = undefined;
    }
    if (!error || expectedException(actual, error)) {
      var details = message ? ": ".concat(message) : ".";
      var fnType = stackStartFn.name === "doesNotReject" ? "rejection" : "exception";
      innerFail({
        actual,
        expected: error,
        operator: stackStartFn.name,
        message: "Got unwanted ".concat(fnType).concat(details, "\n") + "Actual message: \"".concat(actual && actual.message, "\""),
        stackStartFn
      });
    }
    throw actual;
  }
  function internalMatch(string, regexp, message, fn, fnName) {
    if (!isRegExp(regexp)) {
      throw new ERR_INVALID_ARG_TYPE("regexp", "RegExp", regexp);
    }
    var match = fnName === "match";
    if (typeof string !== "string" || RegExpPrototypeTest(regexp, string) !== match) {
      if (message instanceof Error) {
        throw message;
      }
      var generatedMessage = !message;
      message = message || (typeof string !== "string" ? 'The "string" argument must be of type string. Received type ' + "".concat(_typeof(string), " (").concat(inspect2(string), ")") : (match ? "The input did not match the regular expression " : "The input was expected to not match the regular expression ") + "".concat(inspect2(regexp), ". Input:\n\n").concat(inspect2(string), "\n"));
      var err = new AssertionError({
        actual: string,
        expected: regexp,
        message,
        operator: fnName,
        stackStartFn: fn
      });
      err.generatedMessage = generatedMessage;
      throw err;
    }
  }
  function strict() {
    for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0;_key6 < _len6; _key6++) {
      args[_key6] = arguments[_key6];
    }
    innerOk.apply(undefined, [strict, args.length].concat(args));
  }
  var _require = require_errors();
  var _require$codes = _require.codes;
  var ERR_AMBIGUOUS_ARGUMENT = _require$codes.ERR_AMBIGUOUS_ARGUMENT;
  var ERR_INVALID_ARG_TYPE = _require$codes.ERR_INVALID_ARG_TYPE;
  var ERR_INVALID_ARG_VALUE = _require$codes.ERR_INVALID_ARG_VALUE;
  var ERR_INVALID_RETURN_VALUE = _require$codes.ERR_INVALID_RETURN_VALUE;
  var ERR_MISSING_ARGS = _require$codes.ERR_MISSING_ARGS;
  var AssertionError = require_assertion_error();
  var _require2 = require_util();
  var inspect2 = _require2.inspect;
  var _require$types = require_util().types;
  var isPromise = _require$types.isPromise;
  var isRegExp = _require$types.isRegExp;
  var objectAssign = require_polyfill3()();
  var objectIs = require_polyfill()();
  var RegExpPrototypeTest = require_callBound()("RegExp.prototype.test");
  var errorCache = new Map;
  var isDeepEqual;
  var isDeepStrictEqual;
  var warned = false;
  var assert = module.exports = ok;
  var NO_EXCEPTION_SENTINEL = {};
  assert.fail = fail;
  assert.AssertionError = AssertionError;
  assert.ok = ok;
  assert.equal = function equal(actual, expected, message) {
    if (arguments.length < 2) {
      throw new ERR_MISSING_ARGS("actual", "expected");
    }
    if (actual != expected) {
      innerFail({
        actual,
        expected,
        message,
        operator: "==",
        stackStartFn: equal
      });
    }
  };
  assert.notEqual = function notEqual(actual, expected, message) {
    if (arguments.length < 2) {
      throw new ERR_MISSING_ARGS("actual", "expected");
    }
    if (actual == expected) {
      innerFail({
        actual,
        expected,
        message,
        operator: "!=",
        stackStartFn: notEqual
      });
    }
  };
  assert.deepEqual = function deepEqual(actual, expected, message) {
    if (arguments.length < 2) {
      throw new ERR_MISSING_ARGS("actual", "expected");
    }
    if (isDeepEqual === undefined)
      lazyLoadComparison();
    if (!isDeepEqual(actual, expected)) {
      innerFail({
        actual,
        expected,
        message,
        operator: "deepEqual",
        stackStartFn: deepEqual
      });
    }
  };
  assert.notDeepEqual = function notDeepEqual(actual, expected, message) {
    if (arguments.length < 2) {
      throw new ERR_MISSING_ARGS("actual", "expected");
    }
    if (isDeepEqual === undefined)
      lazyLoadComparison();
    if (isDeepEqual(actual, expected)) {
      innerFail({
        actual,
        expected,
        message,
        operator: "notDeepEqual",
        stackStartFn: notDeepEqual
      });
    }
  };
  assert.deepStrictEqual = function deepStrictEqual(actual, expected, message) {
    if (arguments.length < 2) {
      throw new ERR_MISSING_ARGS("actual", "expected");
    }
    if (isDeepEqual === undefined)
      lazyLoadComparison();
    if (!isDeepStrictEqual(actual, expected)) {
      innerFail({
        actual,
        expected,
        message,
        operator: "deepStrictEqual",
        stackStartFn: deepStrictEqual
      });
    }
  };
  assert.notDeepStrictEqual = notDeepStrictEqual;
  assert.strictEqual = function strictEqual(actual, expected, message) {
    if (arguments.length < 2) {
      throw new ERR_MISSING_ARGS("actual", "expected");
    }
    if (!objectIs(actual, expected)) {
      innerFail({
        actual,
        expected,
        message,
        operator: "strictEqual",
        stackStartFn: strictEqual
      });
    }
  };
  assert.notStrictEqual = function notStrictEqual(actual, expected, message) {
    if (arguments.length < 2) {
      throw new ERR_MISSING_ARGS("actual", "expected");
    }
    if (objectIs(actual, expected)) {
      innerFail({
        actual,
        expected,
        message,
        operator: "notStrictEqual",
        stackStartFn: notStrictEqual
      });
    }
  };
  var Comparison = /* @__PURE__ */ _createClass(function Comparison(obj, keys, actual) {
    var _this = this;
    _classCallCheck(this, Comparison);
    keys.forEach(function(key) {
      if (key in obj) {
        if (actual !== undefined && typeof actual[key] === "string" && isRegExp(obj[key]) && RegExpPrototypeTest(obj[key], actual[key])) {
          _this[key] = actual[key];
        } else {
          _this[key] = obj[key];
        }
      }
    });
  });
  assert.throws = function throws(promiseFn) {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1;_key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }
    expectsError.apply(undefined, [throws, getActual(promiseFn)].concat(args));
  };
  assert.rejects = function rejects(promiseFn) {
    for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1;_key3 < _len3; _key3++) {
      args[_key3 - 1] = arguments[_key3];
    }
    return waitForActual(promiseFn).then(function(result) {
      return expectsError.apply(undefined, [rejects, result].concat(args));
    });
  };
  assert.doesNotThrow = function doesNotThrow(fn) {
    for (var _len4 = arguments.length, args = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1;_key4 < _len4; _key4++) {
      args[_key4 - 1] = arguments[_key4];
    }
    expectsNoError.apply(undefined, [doesNotThrow, getActual(fn)].concat(args));
  };
  assert.doesNotReject = function doesNotReject(fn) {
    for (var _len5 = arguments.length, args = new Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1;_key5 < _len5; _key5++) {
      args[_key5 - 1] = arguments[_key5];
    }
    return waitForActual(fn).then(function(result) {
      return expectsNoError.apply(undefined, [doesNotReject, result].concat(args));
    });
  };
  assert.ifError = function ifError(err) {
    if (err !== null && err !== undefined) {
      var message = "ifError got unwanted exception: ";
      if (_typeof(err) === "object" && typeof err.message === "string") {
        if (err.message.length === 0 && err.constructor) {
          message += err.constructor.name;
        } else {
          message += err.message;
        }
      } else {
        message += inspect2(err);
      }
      var newErr = new AssertionError({
        actual: err,
        expected: null,
        operator: "ifError",
        message,
        stackStartFn: ifError
      });
      var origStack = err.stack;
      if (typeof origStack === "string") {
        var tmp2 = origStack.split("\n");
        tmp2.shift();
        var tmp1 = newErr.stack.split("\n");
        for (var i = 0;i < tmp2.length; i++) {
          var pos = tmp1.indexOf(tmp2[i]);
          if (pos !== -1) {
            tmp1 = tmp1.slice(0, pos);
            break;
          }
        }
        newErr.stack = "".concat(tmp1.join("\n"), "\n").concat(tmp2.join("\n"));
      }
      throw newErr;
    }
  };
  assert.match = function match(string, regexp, message) {
    internalMatch(string, regexp, message, match, "match");
  };
  assert.doesNotMatch = function doesNotMatch(string, regexp, message) {
    internalMatch(string, regexp, message, doesNotMatch, "doesNotMatch");
  };
  assert.strict = objectAssign(strict, assert, {
    equal: assert.strictEqual,
    deepEqual: assert.deepStrictEqual,
    notEqual: assert.notStrictEqual,
    notDeepEqual: assert.notDeepStrictEqual
  });
  assert.strict.strict = assert.strict;
});

// src/class/JFL/assets.ts
var import_jszip = __toESM(require_lib(), 1);
var getAssets = () => assets;
var assets;
var setupAssets = async () => {
  if (assets !== undefined)
    return console.log("[jfl] assets already set up");
  const data = await fetch("./JFLAssets/JFLAssets.zip").then((j) => j.blob());
  const zip = await import_jszip.default.loadAsync(data);
  const meshDir = zip.folder("mesh");
  const texDir = zip.folder("tex");
  const loadFile = (name, type, file) => new Promise((resolve, reject) => {
    file.async("blob").then((b) => resolve({ type, name, data: b, success: true })).catch((e) => reject({ type, name, data: e, success: false }));
  });
  let promises = [];
  for (const mesh of Object.keys(meshDir.files)) {
    const meshData = meshDir.files[mesh];
    promises.push(new Promise((resolve, reject) => {
      meshData.async("blob").then((b) => resolve({ type: "mesh", name: mesh, data: b, success: true })).catch((e) => reject({ type: "mesh", name: mesh, data: e, success: false }));
    }));
  }
  const resolves = await Promise.all(promises);
  console.log("[jfl] assets are being set up");
};

// src/class/JFL/renderers/face.ts
async function renderFace(mii) {
  getAssets();
}

// src/external/mii-js/mii.ts
var import_md5 = __toESM(require_md5(), 1);

// node_modules/buffer/index.js
function typedArraySupport() {
  try {
    const arr = new Uint8Array(1);
    const proto = { foo: function() {
      return 42;
    } };
    Object.setPrototypeOf(proto, Uint8Array.prototype);
    Object.setPrototypeOf(arr, proto);
    return arr.foo() === 42;
  } catch (e) {
    return false;
  }
}
function createBuffer(length) {
  if (length > K_MAX_LENGTH) {
    throw new RangeError('The value "' + length + '" is invalid for option "size"');
  }
  const buf = new Uint8Array(length);
  Object.setPrototypeOf(buf, Buffer2.prototype);
  return buf;
}
function Buffer2(arg, encodingOrOffset, length) {
  if (typeof arg === "number") {
    if (typeof encodingOrOffset === "string") {
      throw new TypeError('The "string" argument must be of type string. Received type number');
    }
    return allocUnsafe(arg);
  }
  return from(arg, encodingOrOffset, length);
}
function from(value, encodingOrOffset, length) {
  if (typeof value === "string") {
    return fromString(value, encodingOrOffset);
  }
  if (ArrayBuffer.isView(value)) {
    return fromArrayView(value);
  }
  if (value == null) {
    throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, " + "or Array-like Object. Received type " + typeof value);
  }
  if (isInstance(value, ArrayBuffer) || value && isInstance(value.buffer, ArrayBuffer)) {
    return fromArrayBuffer(value, encodingOrOffset, length);
  }
  if (typeof SharedArrayBuffer !== "undefined" && (isInstance(value, SharedArrayBuffer) || value && isInstance(value.buffer, SharedArrayBuffer))) {
    return fromArrayBuffer(value, encodingOrOffset, length);
  }
  if (typeof value === "number") {
    throw new TypeError('The "value" argument must not be of type number. Received type number');
  }
  const valueOf = value.valueOf && value.valueOf();
  if (valueOf != null && valueOf !== value) {
    return Buffer2.from(valueOf, encodingOrOffset, length);
  }
  const b = fromObject(value);
  if (b)
    return b;
  if (typeof Symbol !== "undefined" && Symbol.toPrimitive != null && typeof value[Symbol.toPrimitive] === "function") {
    return Buffer2.from(value[Symbol.toPrimitive]("string"), encodingOrOffset, length);
  }
  throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, " + "or Array-like Object. Received type " + typeof value);
}
function assertSize(size) {
  if (typeof size !== "number") {
    throw new TypeError('"size" argument must be of type number');
  } else if (size < 0) {
    throw new RangeError('The value "' + size + '" is invalid for option "size"');
  }
}
function alloc(size, fill, encoding) {
  assertSize(size);
  if (size <= 0) {
    return createBuffer(size);
  }
  if (fill !== undefined) {
    return typeof encoding === "string" ? createBuffer(size).fill(fill, encoding) : createBuffer(size).fill(fill);
  }
  return createBuffer(size);
}
function allocUnsafe(size) {
  assertSize(size);
  return createBuffer(size < 0 ? 0 : checked(size) | 0);
}
function fromString(string, encoding) {
  if (typeof encoding !== "string" || encoding === "") {
    encoding = "utf8";
  }
  if (!Buffer2.isEncoding(encoding)) {
    throw new TypeError("Unknown encoding: " + encoding);
  }
  const length = byteLength(string, encoding) | 0;
  let buf = createBuffer(length);
  const actual = buf.write(string, encoding);
  if (actual !== length) {
    buf = buf.slice(0, actual);
  }
  return buf;
}
function fromArrayLike(array) {
  const length = array.length < 0 ? 0 : checked(array.length) | 0;
  const buf = createBuffer(length);
  for (let i = 0;i < length; i += 1) {
    buf[i] = array[i] & 255;
  }
  return buf;
}
function fromArrayView(arrayView) {
  if (isInstance(arrayView, Uint8Array)) {
    const copy = new Uint8Array(arrayView);
    return fromArrayBuffer(copy.buffer, copy.byteOffset, copy.byteLength);
  }
  return fromArrayLike(arrayView);
}
function fromArrayBuffer(array, byteOffset, length) {
  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('"offset" is outside of buffer bounds');
  }
  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('"length" is outside of buffer bounds');
  }
  let buf;
  if (byteOffset === undefined && length === undefined) {
    buf = new Uint8Array(array);
  } else if (length === undefined) {
    buf = new Uint8Array(array, byteOffset);
  } else {
    buf = new Uint8Array(array, byteOffset, length);
  }
  Object.setPrototypeOf(buf, Buffer2.prototype);
  return buf;
}
function fromObject(obj) {
  if (Buffer2.isBuffer(obj)) {
    const len = checked(obj.length) | 0;
    const buf = createBuffer(len);
    if (buf.length === 0) {
      return buf;
    }
    obj.copy(buf, 0, 0, len);
    return buf;
  }
  if (obj.length !== undefined) {
    if (typeof obj.length !== "number" || numberIsNaN(obj.length)) {
      return createBuffer(0);
    }
    return fromArrayLike(obj);
  }
  if (obj.type === "Buffer" && Array.isArray(obj.data)) {
    return fromArrayLike(obj.data);
  }
}
function checked(length) {
  if (length >= K_MAX_LENGTH) {
    throw new RangeError("Attempt to allocate Buffer larger than maximum " + "size: 0x" + K_MAX_LENGTH.toString(16) + " bytes");
  }
  return length | 0;
}
function byteLength(string, encoding) {
  if (Buffer2.isBuffer(string)) {
    return string.length;
  }
  if (ArrayBuffer.isView(string) || isInstance(string, ArrayBuffer)) {
    return string.byteLength;
  }
  if (typeof string !== "string") {
    throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. ' + "Received type " + typeof string);
  }
  const len = string.length;
  const mustMatch = arguments.length > 2 && arguments[2] === true;
  if (!mustMatch && len === 0)
    return 0;
  let loweredCase = false;
  for (;; ) {
    switch (encoding) {
      case "ascii":
      case "latin1":
      case "binary":
        return len;
      case "utf8":
      case "utf-8":
        return utf8ToBytes(string).length;
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return len * 2;
      case "hex":
        return len >>> 1;
      case "base64":
        return base64ToBytes(string).length;
      default:
        if (loweredCase) {
          return mustMatch ? -1 : utf8ToBytes(string).length;
        }
        encoding = ("" + encoding).toLowerCase();
        loweredCase = true;
    }
  }
}
function slowToString(encoding, start, end) {
  let loweredCase = false;
  if (start === undefined || start < 0) {
    start = 0;
  }
  if (start > this.length) {
    return "";
  }
  if (end === undefined || end > this.length) {
    end = this.length;
  }
  if (end <= 0) {
    return "";
  }
  end >>>= 0;
  start >>>= 0;
  if (end <= start) {
    return "";
  }
  if (!encoding)
    encoding = "utf8";
  while (true) {
    switch (encoding) {
      case "hex":
        return hexSlice(this, start, end);
      case "utf8":
      case "utf-8":
        return utf8Slice(this, start, end);
      case "ascii":
        return asciiSlice(this, start, end);
      case "latin1":
      case "binary":
        return latin1Slice(this, start, end);
      case "base64":
        return base64Slice(this, start, end);
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return utf16leSlice(this, start, end);
      default:
        if (loweredCase)
          throw new TypeError("Unknown encoding: " + encoding);
        encoding = (encoding + "").toLowerCase();
        loweredCase = true;
    }
  }
}
function swap(b, n, m) {
  const i = b[n];
  b[n] = b[m];
  b[m] = i;
}
function bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
  if (buffer.length === 0)
    return -1;
  if (typeof byteOffset === "string") {
    encoding = byteOffset;
    byteOffset = 0;
  } else if (byteOffset > 2147483647) {
    byteOffset = 2147483647;
  } else if (byteOffset < -2147483648) {
    byteOffset = -2147483648;
  }
  byteOffset = +byteOffset;
  if (numberIsNaN(byteOffset)) {
    byteOffset = dir ? 0 : buffer.length - 1;
  }
  if (byteOffset < 0)
    byteOffset = buffer.length + byteOffset;
  if (byteOffset >= buffer.length) {
    if (dir)
      return -1;
    else
      byteOffset = buffer.length - 1;
  } else if (byteOffset < 0) {
    if (dir)
      byteOffset = 0;
    else
      return -1;
  }
  if (typeof val === "string") {
    val = Buffer2.from(val, encoding);
  }
  if (Buffer2.isBuffer(val)) {
    if (val.length === 0) {
      return -1;
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir);
  } else if (typeof val === "number") {
    val = val & 255;
    if (typeof Uint8Array.prototype.indexOf === "function") {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset);
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset);
      }
    }
    return arrayIndexOf(buffer, [val], byteOffset, encoding, dir);
  }
  throw new TypeError("val must be string, number or Buffer");
}
function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
  let indexSize = 1;
  let arrLength = arr.length;
  let valLength = val.length;
  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase();
    if (encoding === "ucs2" || encoding === "ucs-2" || encoding === "utf16le" || encoding === "utf-16le") {
      if (arr.length < 2 || val.length < 2) {
        return -1;
      }
      indexSize = 2;
      arrLength /= 2;
      valLength /= 2;
      byteOffset /= 2;
    }
  }
  function read(buf, i2) {
    if (indexSize === 1) {
      return buf[i2];
    } else {
      return buf.readUInt16BE(i2 * indexSize);
    }
  }
  let i;
  if (dir) {
    let foundIndex = -1;
    for (i = byteOffset;i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1)
          foundIndex = i;
        if (i - foundIndex + 1 === valLength)
          return foundIndex * indexSize;
      } else {
        if (foundIndex !== -1)
          i -= i - foundIndex;
        foundIndex = -1;
      }
    }
  } else {
    if (byteOffset + valLength > arrLength)
      byteOffset = arrLength - valLength;
    for (i = byteOffset;i >= 0; i--) {
      let found = true;
      for (let j = 0;j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false;
          break;
        }
      }
      if (found)
        return i;
    }
  }
  return -1;
}
function hexWrite(buf, string, offset, length) {
  offset = Number(offset) || 0;
  const remaining = buf.length - offset;
  if (!length) {
    length = remaining;
  } else {
    length = Number(length);
    if (length > remaining) {
      length = remaining;
    }
  }
  const strLen = string.length;
  if (length > strLen / 2) {
    length = strLen / 2;
  }
  let i;
  for (i = 0;i < length; ++i) {
    const parsed = parseInt(string.substr(i * 2, 2), 16);
    if (numberIsNaN(parsed))
      return i;
    buf[offset + i] = parsed;
  }
  return i;
}
function utf8Write(buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
}
function asciiWrite(buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length);
}
function base64Write(buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length);
}
function ucs2Write(buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length);
}
function base64Slice(buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf);
  } else {
    return base64.fromByteArray(buf.slice(start, end));
  }
}
function utf8Slice(buf, start, end) {
  end = Math.min(buf.length, end);
  const res = [];
  let i = start;
  while (i < end) {
    const firstByte = buf[i];
    let codePoint = null;
    let bytesPerSequence = firstByte > 239 ? 4 : firstByte > 223 ? 3 : firstByte > 191 ? 2 : 1;
    if (i + bytesPerSequence <= end) {
      let secondByte, thirdByte, fourthByte, tempCodePoint;
      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 128) {
            codePoint = firstByte;
          }
          break;
        case 2:
          secondByte = buf[i + 1];
          if ((secondByte & 192) === 128) {
            tempCodePoint = (firstByte & 31) << 6 | secondByte & 63;
            if (tempCodePoint > 127) {
              codePoint = tempCodePoint;
            }
          }
          break;
        case 3:
          secondByte = buf[i + 1];
          thirdByte = buf[i + 2];
          if ((secondByte & 192) === 128 && (thirdByte & 192) === 128) {
            tempCodePoint = (firstByte & 15) << 12 | (secondByte & 63) << 6 | thirdByte & 63;
            if (tempCodePoint > 2047 && (tempCodePoint < 55296 || tempCodePoint > 57343)) {
              codePoint = tempCodePoint;
            }
          }
          break;
        case 4:
          secondByte = buf[i + 1];
          thirdByte = buf[i + 2];
          fourthByte = buf[i + 3];
          if ((secondByte & 192) === 128 && (thirdByte & 192) === 128 && (fourthByte & 192) === 128) {
            tempCodePoint = (firstByte & 15) << 18 | (secondByte & 63) << 12 | (thirdByte & 63) << 6 | fourthByte & 63;
            if (tempCodePoint > 65535 && tempCodePoint < 1114112) {
              codePoint = tempCodePoint;
            }
          }
      }
    }
    if (codePoint === null) {
      codePoint = 65533;
      bytesPerSequence = 1;
    } else if (codePoint > 65535) {
      codePoint -= 65536;
      res.push(codePoint >>> 10 & 1023 | 55296);
      codePoint = 56320 | codePoint & 1023;
    }
    res.push(codePoint);
    i += bytesPerSequence;
  }
  return decodeCodePointsArray(res);
}
function decodeCodePointsArray(codePoints) {
  const len = codePoints.length;
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints);
  }
  let res = "";
  let i = 0;
  while (i < len) {
    res += String.fromCharCode.apply(String, codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH));
  }
  return res;
}
function asciiSlice(buf, start, end) {
  let ret = "";
  end = Math.min(buf.length, end);
  for (let i = start;i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 127);
  }
  return ret;
}
function latin1Slice(buf, start, end) {
  let ret = "";
  end = Math.min(buf.length, end);
  for (let i = start;i < end; ++i) {
    ret += String.fromCharCode(buf[i]);
  }
  return ret;
}
function hexSlice(buf, start, end) {
  const len = buf.length;
  if (!start || start < 0)
    start = 0;
  if (!end || end < 0 || end > len)
    end = len;
  let out = "";
  for (let i = start;i < end; ++i) {
    out += hexSliceLookupTable[buf[i]];
  }
  return out;
}
function utf16leSlice(buf, start, end) {
  const bytes = buf.slice(start, end);
  let res = "";
  for (let i = 0;i < bytes.length - 1; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
  }
  return res;
}
function checkOffset(offset, ext, length) {
  if (offset % 1 !== 0 || offset < 0)
    throw new RangeError("offset is not uint");
  if (offset + ext > length)
    throw new RangeError("Trying to access beyond buffer length");
}
function checkInt(buf, value, offset, ext, max, min) {
  if (!Buffer2.isBuffer(buf))
    throw new TypeError('"buffer" argument must be a Buffer instance');
  if (value > max || value < min)
    throw new RangeError('"value" argument is out of bounds');
  if (offset + ext > buf.length)
    throw new RangeError("Index out of range");
}
function wrtBigUInt64LE(buf, value, offset, min, max) {
  checkIntBI(value, min, max, buf, offset, 7);
  let lo = Number(value & BigInt(4294967295));
  buf[offset++] = lo;
  lo = lo >> 8;
  buf[offset++] = lo;
  lo = lo >> 8;
  buf[offset++] = lo;
  lo = lo >> 8;
  buf[offset++] = lo;
  let hi = Number(value >> BigInt(32) & BigInt(4294967295));
  buf[offset++] = hi;
  hi = hi >> 8;
  buf[offset++] = hi;
  hi = hi >> 8;
  buf[offset++] = hi;
  hi = hi >> 8;
  buf[offset++] = hi;
  return offset;
}
function wrtBigUInt64BE(buf, value, offset, min, max) {
  checkIntBI(value, min, max, buf, offset, 7);
  let lo = Number(value & BigInt(4294967295));
  buf[offset + 7] = lo;
  lo = lo >> 8;
  buf[offset + 6] = lo;
  lo = lo >> 8;
  buf[offset + 5] = lo;
  lo = lo >> 8;
  buf[offset + 4] = lo;
  let hi = Number(value >> BigInt(32) & BigInt(4294967295));
  buf[offset + 3] = hi;
  hi = hi >> 8;
  buf[offset + 2] = hi;
  hi = hi >> 8;
  buf[offset + 1] = hi;
  hi = hi >> 8;
  buf[offset] = hi;
  return offset + 8;
}
function checkIEEE754(buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length)
    throw new RangeError("Index out of range");
  if (offset < 0)
    throw new RangeError("Index out of range");
}
function writeFloat(buf, value, offset, littleEndian, noAssert) {
  value = +value;
  offset = offset >>> 0;
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 340282346638528860000000000000000000000, -340282346638528860000000000000000000000);
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4);
  return offset + 4;
}
function writeDouble(buf, value, offset, littleEndian, noAssert) {
  value = +value;
  offset = offset >>> 0;
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 179769313486231570000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, -179769313486231570000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000);
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8);
  return offset + 8;
}
function E2(sym, getMessage, Base) {
  errors[sym] = class NodeError extends Base {
    constructor() {
      super();
      Object.defineProperty(this, "message", {
        value: getMessage.apply(this, arguments),
        writable: true,
        configurable: true
      });
      this.name = `${this.name} [${sym}]`;
      this.stack;
      delete this.name;
    }
    get code() {
      return sym;
    }
    set code(value) {
      Object.defineProperty(this, "code", {
        configurable: true,
        enumerable: true,
        value,
        writable: true
      });
    }
    toString() {
      return `${this.name} [${sym}]: ${this.message}`;
    }
  };
}
function addNumericalSeparator(val) {
  let res = "";
  let i = val.length;
  const start = val[0] === "-" ? 1 : 0;
  for (;i >= start + 4; i -= 3) {
    res = `_${val.slice(i - 3, i)}${res}`;
  }
  return `${val.slice(0, i)}${res}`;
}
function checkBounds(buf, offset, byteLength2) {
  validateNumber(offset, "offset");
  if (buf[offset] === undefined || buf[offset + byteLength2] === undefined) {
    boundsError(offset, buf.length - (byteLength2 + 1));
  }
}
function checkIntBI(value, min, max, buf, offset, byteLength2) {
  if (value > max || value < min) {
    const n = typeof min === "bigint" ? "n" : "";
    let range;
    if (byteLength2 > 3) {
      if (min === 0 || min === BigInt(0)) {
        range = `>= 0${n} and < 2${n} ** ${(byteLength2 + 1) * 8}${n}`;
      } else {
        range = `>= -(2${n} ** ${(byteLength2 + 1) * 8 - 1}${n}) and < 2 ** ` + `${(byteLength2 + 1) * 8 - 1}${n}`;
      }
    } else {
      range = `>= ${min}${n} and <= ${max}${n}`;
    }
    throw new errors.ERR_OUT_OF_RANGE("value", range, value);
  }
  checkBounds(buf, offset, byteLength2);
}
function validateNumber(value, name) {
  if (typeof value !== "number") {
    throw new errors.ERR_INVALID_ARG_TYPE(name, "number", value);
  }
}
function boundsError(value, length, type) {
  if (Math.floor(value) !== value) {
    validateNumber(value, type);
    throw new errors.ERR_OUT_OF_RANGE(type || "offset", "an integer", value);
  }
  if (length < 0) {
    throw new errors.ERR_BUFFER_OUT_OF_BOUNDS;
  }
  throw new errors.ERR_OUT_OF_RANGE(type || "offset", `>= ${type ? 1 : 0} and <= ${length}`, value);
}
function base64clean(str) {
  str = str.split("=")[0];
  str = str.trim().replace(INVALID_BASE64_RE, "");
  if (str.length < 2)
    return "";
  while (str.length % 4 !== 0) {
    str = str + "=";
  }
  return str;
}
function utf8ToBytes(string, units) {
  units = units || Infinity;
  let codePoint;
  const length = string.length;
  let leadSurrogate = null;
  const bytes = [];
  for (let i = 0;i < length; ++i) {
    codePoint = string.charCodeAt(i);
    if (codePoint > 55295 && codePoint < 57344) {
      if (!leadSurrogate) {
        if (codePoint > 56319) {
          if ((units -= 3) > -1)
            bytes.push(239, 191, 189);
          continue;
        } else if (i + 1 === length) {
          if ((units -= 3) > -1)
            bytes.push(239, 191, 189);
          continue;
        }
        leadSurrogate = codePoint;
        continue;
      }
      if (codePoint < 56320) {
        if ((units -= 3) > -1)
          bytes.push(239, 191, 189);
        leadSurrogate = codePoint;
        continue;
      }
      codePoint = (leadSurrogate - 55296 << 10 | codePoint - 56320) + 65536;
    } else if (leadSurrogate) {
      if ((units -= 3) > -1)
        bytes.push(239, 191, 189);
    }
    leadSurrogate = null;
    if (codePoint < 128) {
      if ((units -= 1) < 0)
        break;
      bytes.push(codePoint);
    } else if (codePoint < 2048) {
      if ((units -= 2) < 0)
        break;
      bytes.push(codePoint >> 6 | 192, codePoint & 63 | 128);
    } else if (codePoint < 65536) {
      if ((units -= 3) < 0)
        break;
      bytes.push(codePoint >> 12 | 224, codePoint >> 6 & 63 | 128, codePoint & 63 | 128);
    } else if (codePoint < 1114112) {
      if ((units -= 4) < 0)
        break;
      bytes.push(codePoint >> 18 | 240, codePoint >> 12 & 63 | 128, codePoint >> 6 & 63 | 128, codePoint & 63 | 128);
    } else {
      throw new Error("Invalid code point");
    }
  }
  return bytes;
}
function asciiToBytes(str) {
  const byteArray = [];
  for (let i = 0;i < str.length; ++i) {
    byteArray.push(str.charCodeAt(i) & 255);
  }
  return byteArray;
}
function utf16leToBytes(str, units) {
  let c, hi, lo;
  const byteArray = [];
  for (let i = 0;i < str.length; ++i) {
    if ((units -= 2) < 0)
      break;
    c = str.charCodeAt(i);
    hi = c >> 8;
    lo = c % 256;
    byteArray.push(lo);
    byteArray.push(hi);
  }
  return byteArray;
}
function base64ToBytes(str) {
  return base64.toByteArray(base64clean(str));
}
function blitBuffer(src, dst, offset, length) {
  let i;
  for (i = 0;i < length; ++i) {
    if (i + offset >= dst.length || i >= src.length)
      break;
    dst[i + offset] = src[i];
  }
  return i;
}
function isInstance(obj, type) {
  return obj instanceof type || obj != null && obj.constructor != null && obj.constructor.name != null && obj.constructor.name === type.name;
}
function numberIsNaN(obj) {
  return obj !== obj;
}
function defineBigIntMethod(fn) {
  return typeof BigInt === "undefined" ? BufferBigIntNotDefined : fn;
}
function BufferBigIntNotDefined() {
  throw new Error("BigInt not supported");
}
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
var base64 = require_base64_js();
var ieee754 = require_ieee754();
var customInspectSymbol = typeof Symbol === "function" && typeof Symbol["for"] === "function" ? Symbol["for"]("nodejs.util.inspect.custom") : null;
var $Buffer = Buffer2;
var $INSPECT_MAX_BYTES = 50;
var K_MAX_LENGTH = 2147483647;
Buffer2.TYPED_ARRAY_SUPPORT = typedArraySupport();
if (!Buffer2.TYPED_ARRAY_SUPPORT && typeof console !== "undefined" && typeof console.error === "function") {
  console.error("This browser lacks typed array (Uint8Array) support which is required by " + "`buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
}
Object.defineProperty(Buffer2.prototype, "parent", {
  enumerable: true,
  get: function() {
    if (!Buffer2.isBuffer(this))
      return;
    return this.buffer;
  }
});
Object.defineProperty(Buffer2.prototype, "offset", {
  enumerable: true,
  get: function() {
    if (!Buffer2.isBuffer(this))
      return;
    return this.byteOffset;
  }
});
Buffer2.poolSize = 8192;
Buffer2.from = function(value, encodingOrOffset, length) {
  return from(value, encodingOrOffset, length);
};
Object.setPrototypeOf(Buffer2.prototype, Uint8Array.prototype);
Object.setPrototypeOf(Buffer2, Uint8Array);
Buffer2.alloc = function(size, fill, encoding) {
  return alloc(size, fill, encoding);
};
Buffer2.allocUnsafe = function(size) {
  return allocUnsafe(size);
};
Buffer2.allocUnsafeSlow = function(size) {
  return allocUnsafe(size);
};
Buffer2.isBuffer = function isBuffer(b) {
  return b != null && b._isBuffer === true && b !== Buffer2.prototype;
};
Buffer2.compare = function compare(a, b) {
  if (isInstance(a, Uint8Array))
    a = Buffer2.from(a, a.offset, a.byteLength);
  if (isInstance(b, Uint8Array))
    b = Buffer2.from(b, b.offset, b.byteLength);
  if (!Buffer2.isBuffer(a) || !Buffer2.isBuffer(b)) {
    throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
  }
  if (a === b)
    return 0;
  let x = a.length;
  let y = b.length;
  for (let i = 0, len = Math.min(x, y);i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i];
      y = b[i];
      break;
    }
  }
  if (x < y)
    return -1;
  if (y < x)
    return 1;
  return 0;
};
Buffer2.isEncoding = function isEncoding(encoding) {
  switch (String(encoding).toLowerCase()) {
    case "hex":
    case "utf8":
    case "utf-8":
    case "ascii":
    case "latin1":
    case "binary":
    case "base64":
    case "ucs2":
    case "ucs-2":
    case "utf16le":
    case "utf-16le":
      return true;
    default:
      return false;
  }
};
Buffer2.concat = function concat(list, length) {
  if (!Array.isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers');
  }
  if (list.length === 0) {
    return Buffer2.alloc(0);
  }
  let i;
  if (length === undefined) {
    length = 0;
    for (i = 0;i < list.length; ++i) {
      length += list[i].length;
    }
  }
  const buffer = Buffer2.allocUnsafe(length);
  let pos = 0;
  for (i = 0;i < list.length; ++i) {
    let buf = list[i];
    if (isInstance(buf, Uint8Array)) {
      if (pos + buf.length > buffer.length) {
        if (!Buffer2.isBuffer(buf))
          buf = Buffer2.from(buf);
        buf.copy(buffer, pos);
      } else {
        Uint8Array.prototype.set.call(buffer, buf, pos);
      }
    } else if (!Buffer2.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers');
    } else {
      buf.copy(buffer, pos);
    }
    pos += buf.length;
  }
  return buffer;
};
Buffer2.byteLength = byteLength;
Buffer2.prototype._isBuffer = true;
Buffer2.prototype.swap16 = function swap16() {
  const len = this.length;
  if (len % 2 !== 0) {
    throw new RangeError("Buffer size must be a multiple of 16-bits");
  }
  for (let i = 0;i < len; i += 2) {
    swap(this, i, i + 1);
  }
  return this;
};
Buffer2.prototype.swap32 = function swap32() {
  const len = this.length;
  if (len % 4 !== 0) {
    throw new RangeError("Buffer size must be a multiple of 32-bits");
  }
  for (let i = 0;i < len; i += 4) {
    swap(this, i, i + 3);
    swap(this, i + 1, i + 2);
  }
  return this;
};
Buffer2.prototype.swap64 = function swap64() {
  const len = this.length;
  if (len % 8 !== 0) {
    throw new RangeError("Buffer size must be a multiple of 64-bits");
  }
  for (let i = 0;i < len; i += 8) {
    swap(this, i, i + 7);
    swap(this, i + 1, i + 6);
    swap(this, i + 2, i + 5);
    swap(this, i + 3, i + 4);
  }
  return this;
};
Buffer2.prototype.toString = function toString() {
  const length = this.length;
  if (length === 0)
    return "";
  if (arguments.length === 0)
    return utf8Slice(this, 0, length);
  return slowToString.apply(this, arguments);
};
Buffer2.prototype.toLocaleString = Buffer2.prototype.toString;
Buffer2.prototype.equals = function equals(b) {
  if (!Buffer2.isBuffer(b))
    throw new TypeError("Argument must be a Buffer");
  if (this === b)
    return true;
  return Buffer2.compare(this, b) === 0;
};
Buffer2.prototype.inspect = function inspect() {
  let str = "";
  const max = $INSPECT_MAX_BYTES;
  str = this.toString("hex", 0, max).replace(/(.{2})/g, "$1 ").trim();
  if (this.length > max)
    str += " ... ";
  return "<Buffer " + str + ">";
};
if (customInspectSymbol) {
  Buffer2.prototype[customInspectSymbol] = Buffer2.prototype.inspect;
}
Buffer2.prototype.compare = function compare2(target, start, end, thisStart, thisEnd) {
  if (isInstance(target, Uint8Array)) {
    target = Buffer2.from(target, target.offset, target.byteLength);
  }
  if (!Buffer2.isBuffer(target)) {
    throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. ' + "Received type " + typeof target);
  }
  if (start === undefined) {
    start = 0;
  }
  if (end === undefined) {
    end = target ? target.length : 0;
  }
  if (thisStart === undefined) {
    thisStart = 0;
  }
  if (thisEnd === undefined) {
    thisEnd = this.length;
  }
  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError("out of range index");
  }
  if (thisStart >= thisEnd && start >= end) {
    return 0;
  }
  if (thisStart >= thisEnd) {
    return -1;
  }
  if (start >= end) {
    return 1;
  }
  start >>>= 0;
  end >>>= 0;
  thisStart >>>= 0;
  thisEnd >>>= 0;
  if (this === target)
    return 0;
  let x = thisEnd - thisStart;
  let y = end - start;
  const len = Math.min(x, y);
  const thisCopy = this.slice(thisStart, thisEnd);
  const targetCopy = target.slice(start, end);
  for (let i = 0;i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i];
      y = targetCopy[i];
      break;
    }
  }
  if (x < y)
    return -1;
  if (y < x)
    return 1;
  return 0;
};
Buffer2.prototype.includes = function includes(val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1;
};
Buffer2.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
};
Buffer2.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
};
Buffer2.prototype.write = function write(string, offset, length, encoding) {
  if (offset === undefined) {
    encoding = "utf8";
    length = this.length;
    offset = 0;
  } else if (length === undefined && typeof offset === "string") {
    encoding = offset;
    length = this.length;
    offset = 0;
  } else if (isFinite(offset)) {
    offset = offset >>> 0;
    if (isFinite(length)) {
      length = length >>> 0;
      if (encoding === undefined)
        encoding = "utf8";
    } else {
      encoding = length;
      length = undefined;
    }
  } else {
    throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
  }
  const remaining = this.length - offset;
  if (length === undefined || length > remaining)
    length = remaining;
  if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) {
    throw new RangeError("Attempt to write outside buffer bounds");
  }
  if (!encoding)
    encoding = "utf8";
  let loweredCase = false;
  for (;; ) {
    switch (encoding) {
      case "hex":
        return hexWrite(this, string, offset, length);
      case "utf8":
      case "utf-8":
        return utf8Write(this, string, offset, length);
      case "ascii":
      case "latin1":
      case "binary":
        return asciiWrite(this, string, offset, length);
      case "base64":
        return base64Write(this, string, offset, length);
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return ucs2Write(this, string, offset, length);
      default:
        if (loweredCase)
          throw new TypeError("Unknown encoding: " + encoding);
        encoding = ("" + encoding).toLowerCase();
        loweredCase = true;
    }
  }
};
Buffer2.prototype.toJSON = function toJSON() {
  return {
    type: "Buffer",
    data: Array.prototype.slice.call(this._arr || this, 0)
  };
};
var MAX_ARGUMENTS_LENGTH = 4096;
Buffer2.prototype.slice = function slice(start, end) {
  const len = this.length;
  start = ~~start;
  end = end === undefined ? len : ~~end;
  if (start < 0) {
    start += len;
    if (start < 0)
      start = 0;
  } else if (start > len) {
    start = len;
  }
  if (end < 0) {
    end += len;
    if (end < 0)
      end = 0;
  } else if (end > len) {
    end = len;
  }
  if (end < start)
    end = start;
  const newBuf = this.subarray(start, end);
  Object.setPrototypeOf(newBuf, Buffer2.prototype);
  return newBuf;
};
Buffer2.prototype.readUintLE = Buffer2.prototype.readUIntLE = function readUIntLE(offset, byteLength2, noAssert) {
  offset = offset >>> 0;
  byteLength2 = byteLength2 >>> 0;
  if (!noAssert)
    checkOffset(offset, byteLength2, this.length);
  let val = this[offset];
  let mul = 1;
  let i = 0;
  while (++i < byteLength2 && (mul *= 256)) {
    val += this[offset + i] * mul;
  }
  return val;
};
Buffer2.prototype.readUintBE = Buffer2.prototype.readUIntBE = function readUIntBE(offset, byteLength2, noAssert) {
  offset = offset >>> 0;
  byteLength2 = byteLength2 >>> 0;
  if (!noAssert) {
    checkOffset(offset, byteLength2, this.length);
  }
  let val = this[offset + --byteLength2];
  let mul = 1;
  while (byteLength2 > 0 && (mul *= 256)) {
    val += this[offset + --byteLength2] * mul;
  }
  return val;
};
Buffer2.prototype.readUint8 = Buffer2.prototype.readUInt8 = function readUInt8(offset, noAssert) {
  offset = offset >>> 0;
  if (!noAssert)
    checkOffset(offset, 1, this.length);
  return this[offset];
};
Buffer2.prototype.readUint16LE = Buffer2.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
  offset = offset >>> 0;
  if (!noAssert)
    checkOffset(offset, 2, this.length);
  return this[offset] | this[offset + 1] << 8;
};
Buffer2.prototype.readUint16BE = Buffer2.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
  offset = offset >>> 0;
  if (!noAssert)
    checkOffset(offset, 2, this.length);
  return this[offset] << 8 | this[offset + 1];
};
Buffer2.prototype.readUint32LE = Buffer2.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
  offset = offset >>> 0;
  if (!noAssert)
    checkOffset(offset, 4, this.length);
  return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 16777216;
};
Buffer2.prototype.readUint32BE = Buffer2.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
  offset = offset >>> 0;
  if (!noAssert)
    checkOffset(offset, 4, this.length);
  return this[offset] * 16777216 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
};
Buffer2.prototype.readBigUInt64LE = defineBigIntMethod(function readBigUInt64LE(offset) {
  offset = offset >>> 0;
  validateNumber(offset, "offset");
  const first = this[offset];
  const last = this[offset + 7];
  if (first === undefined || last === undefined) {
    boundsError(offset, this.length - 8);
  }
  const lo = first + this[++offset] * 2 ** 8 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 24;
  const hi = this[++offset] + this[++offset] * 2 ** 8 + this[++offset] * 2 ** 16 + last * 2 ** 24;
  return BigInt(lo) + (BigInt(hi) << BigInt(32));
});
Buffer2.prototype.readBigUInt64BE = defineBigIntMethod(function readBigUInt64BE(offset) {
  offset = offset >>> 0;
  validateNumber(offset, "offset");
  const first = this[offset];
  const last = this[offset + 7];
  if (first === undefined || last === undefined) {
    boundsError(offset, this.length - 8);
  }
  const hi = first * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + this[++offset];
  const lo = this[++offset] * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + last;
  return (BigInt(hi) << BigInt(32)) + BigInt(lo);
});
Buffer2.prototype.readIntLE = function readIntLE(offset, byteLength2, noAssert) {
  offset = offset >>> 0;
  byteLength2 = byteLength2 >>> 0;
  if (!noAssert)
    checkOffset(offset, byteLength2, this.length);
  let val = this[offset];
  let mul = 1;
  let i = 0;
  while (++i < byteLength2 && (mul *= 256)) {
    val += this[offset + i] * mul;
  }
  mul *= 128;
  if (val >= mul)
    val -= Math.pow(2, 8 * byteLength2);
  return val;
};
Buffer2.prototype.readIntBE = function readIntBE(offset, byteLength2, noAssert) {
  offset = offset >>> 0;
  byteLength2 = byteLength2 >>> 0;
  if (!noAssert)
    checkOffset(offset, byteLength2, this.length);
  let i = byteLength2;
  let mul = 1;
  let val = this[offset + --i];
  while (i > 0 && (mul *= 256)) {
    val += this[offset + --i] * mul;
  }
  mul *= 128;
  if (val >= mul)
    val -= Math.pow(2, 8 * byteLength2);
  return val;
};
Buffer2.prototype.readInt8 = function readInt8(offset, noAssert) {
  offset = offset >>> 0;
  if (!noAssert)
    checkOffset(offset, 1, this.length);
  if (!(this[offset] & 128))
    return this[offset];
  return (255 - this[offset] + 1) * -1;
};
Buffer2.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
  offset = offset >>> 0;
  if (!noAssert)
    checkOffset(offset, 2, this.length);
  const val = this[offset] | this[offset + 1] << 8;
  return val & 32768 ? val | 4294901760 : val;
};
Buffer2.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
  offset = offset >>> 0;
  if (!noAssert)
    checkOffset(offset, 2, this.length);
  const val = this[offset + 1] | this[offset] << 8;
  return val & 32768 ? val | 4294901760 : val;
};
Buffer2.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
  offset = offset >>> 0;
  if (!noAssert)
    checkOffset(offset, 4, this.length);
  return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
};
Buffer2.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
  offset = offset >>> 0;
  if (!noAssert)
    checkOffset(offset, 4, this.length);
  return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
};
Buffer2.prototype.readBigInt64LE = defineBigIntMethod(function readBigInt64LE(offset) {
  offset = offset >>> 0;
  validateNumber(offset, "offset");
  const first = this[offset];
  const last = this[offset + 7];
  if (first === undefined || last === undefined) {
    boundsError(offset, this.length - 8);
  }
  const val = this[offset + 4] + this[offset + 5] * 2 ** 8 + this[offset + 6] * 2 ** 16 + (last << 24);
  return (BigInt(val) << BigInt(32)) + BigInt(first + this[++offset] * 2 ** 8 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 24);
});
Buffer2.prototype.readBigInt64BE = defineBigIntMethod(function readBigInt64BE(offset) {
  offset = offset >>> 0;
  validateNumber(offset, "offset");
  const first = this[offset];
  const last = this[offset + 7];
  if (first === undefined || last === undefined) {
    boundsError(offset, this.length - 8);
  }
  const val = (first << 24) + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + this[++offset];
  return (BigInt(val) << BigInt(32)) + BigInt(this[++offset] * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + last);
});
Buffer2.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
  offset = offset >>> 0;
  if (!noAssert)
    checkOffset(offset, 4, this.length);
  return ieee754.read(this, offset, true, 23, 4);
};
Buffer2.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
  offset = offset >>> 0;
  if (!noAssert)
    checkOffset(offset, 4, this.length);
  return ieee754.read(this, offset, false, 23, 4);
};
Buffer2.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
  offset = offset >>> 0;
  if (!noAssert)
    checkOffset(offset, 8, this.length);
  return ieee754.read(this, offset, true, 52, 8);
};
Buffer2.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
  offset = offset >>> 0;
  if (!noAssert)
    checkOffset(offset, 8, this.length);
  return ieee754.read(this, offset, false, 52, 8);
};
Buffer2.prototype.writeUintLE = Buffer2.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength2, noAssert) {
  value = +value;
  offset = offset >>> 0;
  byteLength2 = byteLength2 >>> 0;
  if (!noAssert) {
    const maxBytes = Math.pow(2, 8 * byteLength2) - 1;
    checkInt(this, value, offset, byteLength2, maxBytes, 0);
  }
  let mul = 1;
  let i = 0;
  this[offset] = value & 255;
  while (++i < byteLength2 && (mul *= 256)) {
    this[offset + i] = value / mul & 255;
  }
  return offset + byteLength2;
};
Buffer2.prototype.writeUintBE = Buffer2.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength2, noAssert) {
  value = +value;
  offset = offset >>> 0;
  byteLength2 = byteLength2 >>> 0;
  if (!noAssert) {
    const maxBytes = Math.pow(2, 8 * byteLength2) - 1;
    checkInt(this, value, offset, byteLength2, maxBytes, 0);
  }
  let i = byteLength2 - 1;
  let mul = 1;
  this[offset + i] = value & 255;
  while (--i >= 0 && (mul *= 256)) {
    this[offset + i] = value / mul & 255;
  }
  return offset + byteLength2;
};
Buffer2.prototype.writeUint8 = Buffer2.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
  value = +value;
  offset = offset >>> 0;
  if (!noAssert)
    checkInt(this, value, offset, 1, 255, 0);
  this[offset] = value & 255;
  return offset + 1;
};
Buffer2.prototype.writeUint16LE = Buffer2.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
  value = +value;
  offset = offset >>> 0;
  if (!noAssert)
    checkInt(this, value, offset, 2, 65535, 0);
  this[offset] = value & 255;
  this[offset + 1] = value >>> 8;
  return offset + 2;
};
Buffer2.prototype.writeUint16BE = Buffer2.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
  value = +value;
  offset = offset >>> 0;
  if (!noAssert)
    checkInt(this, value, offset, 2, 65535, 0);
  this[offset] = value >>> 8;
  this[offset + 1] = value & 255;
  return offset + 2;
};
Buffer2.prototype.writeUint32LE = Buffer2.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
  value = +value;
  offset = offset >>> 0;
  if (!noAssert)
    checkInt(this, value, offset, 4, 4294967295, 0);
  this[offset + 3] = value >>> 24;
  this[offset + 2] = value >>> 16;
  this[offset + 1] = value >>> 8;
  this[offset] = value & 255;
  return offset + 4;
};
Buffer2.prototype.writeUint32BE = Buffer2.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
  value = +value;
  offset = offset >>> 0;
  if (!noAssert)
    checkInt(this, value, offset, 4, 4294967295, 0);
  this[offset] = value >>> 24;
  this[offset + 1] = value >>> 16;
  this[offset + 2] = value >>> 8;
  this[offset + 3] = value & 255;
  return offset + 4;
};
Buffer2.prototype.writeBigUInt64LE = defineBigIntMethod(function writeBigUInt64LE(value, offset = 0) {
  return wrtBigUInt64LE(this, value, offset, BigInt(0), BigInt("0xffffffffffffffff"));
});
Buffer2.prototype.writeBigUInt64BE = defineBigIntMethod(function writeBigUInt64BE(value, offset = 0) {
  return wrtBigUInt64BE(this, value, offset, BigInt(0), BigInt("0xffffffffffffffff"));
});
Buffer2.prototype.writeIntLE = function writeIntLE(value, offset, byteLength2, noAssert) {
  value = +value;
  offset = offset >>> 0;
  if (!noAssert) {
    const limit = Math.pow(2, 8 * byteLength2 - 1);
    checkInt(this, value, offset, byteLength2, limit - 1, -limit);
  }
  let i = 0;
  let mul = 1;
  let sub = 0;
  this[offset] = value & 255;
  while (++i < byteLength2 && (mul *= 256)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1;
    }
    this[offset + i] = (value / mul >> 0) - sub & 255;
  }
  return offset + byteLength2;
};
Buffer2.prototype.writeIntBE = function writeIntBE(value, offset, byteLength2, noAssert) {
  value = +value;
  offset = offset >>> 0;
  if (!noAssert) {
    const limit = Math.pow(2, 8 * byteLength2 - 1);
    checkInt(this, value, offset, byteLength2, limit - 1, -limit);
  }
  let i = byteLength2 - 1;
  let mul = 1;
  let sub = 0;
  this[offset + i] = value & 255;
  while (--i >= 0 && (mul *= 256)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1;
    }
    this[offset + i] = (value / mul >> 0) - sub & 255;
  }
  return offset + byteLength2;
};
Buffer2.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
  value = +value;
  offset = offset >>> 0;
  if (!noAssert)
    checkInt(this, value, offset, 1, 127, -128);
  if (value < 0)
    value = 255 + value + 1;
  this[offset] = value & 255;
  return offset + 1;
};
Buffer2.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
  value = +value;
  offset = offset >>> 0;
  if (!noAssert)
    checkInt(this, value, offset, 2, 32767, -32768);
  this[offset] = value & 255;
  this[offset + 1] = value >>> 8;
  return offset + 2;
};
Buffer2.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
  value = +value;
  offset = offset >>> 0;
  if (!noAssert)
    checkInt(this, value, offset, 2, 32767, -32768);
  this[offset] = value >>> 8;
  this[offset + 1] = value & 255;
  return offset + 2;
};
Buffer2.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
  value = +value;
  offset = offset >>> 0;
  if (!noAssert)
    checkInt(this, value, offset, 4, 2147483647, -2147483648);
  this[offset] = value & 255;
  this[offset + 1] = value >>> 8;
  this[offset + 2] = value >>> 16;
  this[offset + 3] = value >>> 24;
  return offset + 4;
};
Buffer2.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
  value = +value;
  offset = offset >>> 0;
  if (!noAssert)
    checkInt(this, value, offset, 4, 2147483647, -2147483648);
  if (value < 0)
    value = 4294967295 + value + 1;
  this[offset] = value >>> 24;
  this[offset + 1] = value >>> 16;
  this[offset + 2] = value >>> 8;
  this[offset + 3] = value & 255;
  return offset + 4;
};
Buffer2.prototype.writeBigInt64LE = defineBigIntMethod(function writeBigInt64LE(value, offset = 0) {
  return wrtBigUInt64LE(this, value, offset, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
});
Buffer2.prototype.writeBigInt64BE = defineBigIntMethod(function writeBigInt64BE(value, offset = 0) {
  return wrtBigUInt64BE(this, value, offset, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
});
Buffer2.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert);
};
Buffer2.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert);
};
Buffer2.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert);
};
Buffer2.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert);
};
Buffer2.prototype.copy = function copy(target, targetStart, start, end) {
  if (!Buffer2.isBuffer(target))
    throw new TypeError("argument should be a Buffer");
  if (!start)
    start = 0;
  if (!end && end !== 0)
    end = this.length;
  if (targetStart >= target.length)
    targetStart = target.length;
  if (!targetStart)
    targetStart = 0;
  if (end > 0 && end < start)
    end = start;
  if (end === start)
    return 0;
  if (target.length === 0 || this.length === 0)
    return 0;
  if (targetStart < 0) {
    throw new RangeError("targetStart out of bounds");
  }
  if (start < 0 || start >= this.length)
    throw new RangeError("Index out of range");
  if (end < 0)
    throw new RangeError("sourceEnd out of bounds");
  if (end > this.length)
    end = this.length;
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start;
  }
  const len = end - start;
  if (this === target && typeof Uint8Array.prototype.copyWithin === "function") {
    this.copyWithin(targetStart, start, end);
  } else {
    Uint8Array.prototype.set.call(target, this.subarray(start, end), targetStart);
  }
  return len;
};
Buffer2.prototype.fill = function fill(val, start, end, encoding) {
  if (typeof val === "string") {
    if (typeof start === "string") {
      encoding = start;
      start = 0;
      end = this.length;
    } else if (typeof end === "string") {
      encoding = end;
      end = this.length;
    }
    if (encoding !== undefined && typeof encoding !== "string") {
      throw new TypeError("encoding must be a string");
    }
    if (typeof encoding === "string" && !Buffer2.isEncoding(encoding)) {
      throw new TypeError("Unknown encoding: " + encoding);
    }
    if (val.length === 1) {
      const code = val.charCodeAt(0);
      if (encoding === "utf8" && code < 128 || encoding === "latin1") {
        val = code;
      }
    }
  } else if (typeof val === "number") {
    val = val & 255;
  } else if (typeof val === "boolean") {
    val = Number(val);
  }
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError("Out of range index");
  }
  if (end <= start) {
    return this;
  }
  start = start >>> 0;
  end = end === undefined ? this.length : end >>> 0;
  if (!val)
    val = 0;
  let i;
  if (typeof val === "number") {
    for (i = start;i < end; ++i) {
      this[i] = val;
    }
  } else {
    const bytes = Buffer2.isBuffer(val) ? val : Buffer2.from(val, encoding);
    const len = bytes.length;
    if (len === 0) {
      throw new TypeError('The value "' + val + '" is invalid for argument "value"');
    }
    for (i = 0;i < end - start; ++i) {
      this[i + start] = bytes[i % len];
    }
  }
  return this;
};
var errors = {};
E2("ERR_BUFFER_OUT_OF_BOUNDS", function(name) {
  if (name) {
    return `${name} is outside of buffer bounds`;
  }
  return "Attempt to access memory outside buffer bounds";
}, RangeError);
E2("ERR_INVALID_ARG_TYPE", function(name, actual) {
  return `The "${name}" argument must be of type number. Received type ${typeof actual}`;
}, TypeError);
E2("ERR_OUT_OF_RANGE", function(str, range, input) {
  let msg = `The value of "${str}" is out of range.`;
  let received = input;
  if (Number.isInteger(input) && Math.abs(input) > 2 ** 32) {
    received = addNumericalSeparator(String(input));
  } else if (typeof input === "bigint") {
    received = String(input);
    if (input > BigInt(2) ** BigInt(32) || input < -(BigInt(2) ** BigInt(32))) {
      received = addNumericalSeparator(received);
    }
    received += "n";
  }
  msg += ` It must be ${range}. Received ${received}`;
  return msg;
}, RangeError);
var INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g;
var hexSliceLookupTable = function() {
  const alphabet = "0123456789abcdef";
  const table = new Array(256);
  for (let i = 0;i < 16; ++i) {
    const i16 = i * 16;
    for (let j = 0;j < 16; ++j) {
      table[i16 + j] = alphabet[i] + alphabet[j];
    }
  }
  return table;
}();

// src/external/bitStream/bitStream.js
function readASCIIString(stream, bytes) {
  return readString(stream, bytes, false);
}
function readUTF8String(stream, bytes) {
  return readString(stream, bytes, true);
}
function readString(stream, bytes, utf8) {
  if (bytes === 0) {
    return "";
  }
  var i = 0;
  var chars = [];
  var append = true;
  var fixedLength = !!bytes;
  if (!bytes) {
    bytes = Math.floor((stream._length - stream._index) / 8);
  }
  while (i < bytes) {
    var c = stream.readUint8();
    if (c === 0) {
      append = false;
      if (!fixedLength) {
        break;
      }
    }
    if (append) {
      chars.push(c);
    }
    i++;
  }
  var string = String.fromCharCode.apply(null, chars);
  if (utf8) {
    try {
      return decodeURIComponent(escape(string));
    } catch (e) {
      return string;
    }
  } else {
    return string;
  }
}
function writeASCIIString(stream, string, bytes) {
  var length = bytes || string.length + 1;
  for (var i = 0;i < length; i++) {
    stream.writeUint8(i < string.length ? string.charCodeAt(i) : 0);
  }
}
function writeUTF8String(stream, string, bytes) {
  var byteArray = stringToByteArray(string);
  var length = bytes || byteArray.length + 1;
  for (var i = 0;i < length; i++) {
    stream.writeUint8(i < byteArray.length ? byteArray[i] : 0);
  }
}
function stringToByteArray(str) {
  var b = [], i, unicode;
  for (i = 0;i < str.length; i++) {
    unicode = str.charCodeAt(i);
    if (unicode <= 127) {
      b.push(unicode);
    } else if (unicode <= 2047) {
      b.push(unicode >> 6 | 192);
      b.push(unicode & 63 | 128);
    } else if (unicode <= 65535) {
      b.push(unicode >> 12 | 224);
      b.push(unicode >> 6 & 63 | 128);
      b.push(unicode & 63 | 128);
    } else {
      b.push(unicode >> 18 | 240);
      b.push(unicode >> 12 & 63 | 128);
      b.push(unicode >> 6 & 63 | 128);
      b.push(unicode & 63 | 128);
    }
  }
  return b;
}

class BitView {
  constructor(source, byteOffset, byteLength2) {
    var isBuffer2 = source instanceof ArrayBuffer || typeof $Buffer !== "undefined" && source instanceof $Buffer;
    if (!isBuffer2) {
      throw new Error("Must specify a valid ArrayBuffer or Buffer.");
    }
    byteOffset = byteOffset || 0;
    byteLength2 = byteLength2 || source.byteLength || source.length;
    this._view = new Uint8Array(source.buffer || source, byteOffset, byteLength2);
    this.bigEndian = false;
  }
  _setBit(offset, on) {
    if (on) {
      this._view[offset >> 3] |= 1 << (offset & 7);
    } else {
      this._view[offset >> 3] &= ~(1 << (offset & 7));
    }
  }
  getBits(offset, bits, signed) {
    var available = this._view.length * 8 - offset;
    if (bits > available) {
      throw new Error("Cannot get " + bits + " bit(s) from offset " + offset + ", " + available + " available");
    }
    var value = 0;
    for (var i = 0;i < bits; ) {
      var remaining = bits - i;
      var bitOffset = offset & 7;
      var currentByte = this._view[offset >> 3];
      var read = Math.min(remaining, 8 - bitOffset);
      var mask, readBits;
      if (this.bigEndian) {
        mask = ~(255 << read);
        readBits = currentByte >> 8 - read - bitOffset & mask;
        value <<= read;
        value |= readBits;
      } else {
        mask = ~(255 << read);
        readBits = currentByte >> bitOffset & mask;
        value |= readBits << i;
      }
      offset += read;
      i += read;
    }
    if (signed) {
      if (bits !== 32 && value & 1 << bits - 1) {
        value |= -1 ^ (1 << bits) - 1;
      }
      return value;
    }
    return value >>> 0;
  }
  setBits(offset, value, bits) {
    var available = this._view.length * 8 - offset;
    if (bits > available) {
      throw new Error("Cannot set " + bits + " bit(s) from offset " + offset + ", " + available + " available");
    }
    for (var i = 0;i < bits; ) {
      var remaining = bits - i;
      var bitOffset = offset & 7;
      var byteOffset = offset >> 3;
      var wrote = Math.min(remaining, 8 - bitOffset);
      var mask, writeBits, destMask;
      if (this.bigEndian) {
        mask = ~(~0 << wrote);
        writeBits = value >> bits - i - wrote & mask;
        var destShift = 8 - bitOffset - wrote;
        destMask = ~(mask << destShift);
        this._view[byteOffset] = this._view[byteOffset] & destMask | writeBits << destShift;
      } else {
        mask = ~(255 << wrote);
        writeBits = value & mask;
        value >>= wrote;
        destMask = ~(mask << bitOffset);
        this._view[byteOffset] = this._view[byteOffset] & destMask | writeBits << bitOffset;
      }
      offset += wrote;
      i += wrote;
    }
  }
  getBoolean(offset) {
    return this.getBits(offset, 1, false) !== 0;
  }
  getInt8(offset) {
    return this.getBits(offset, 8, true);
  }
  getUint8(offset) {
    return this.getBits(offset, 8, false);
  }
  getInt16(offset) {
    return this.getBits(offset, 16, true);
  }
  getUint16(offset) {
    return this.getBits(offset, 16, false);
  }
  getInt32(offset) {
    return this.getBits(offset, 32, true);
  }
  getUint32(offset) {
    return this.getBits(offset, 32, false);
  }
  getFloat32(offset) {
    BitView._scratch.setUint32(0, this.getUint32(offset));
    return BitView._scratch.getFloat32(0);
  }
  getFloat64(offset) {
    BitView._scratch.setUint32(0, this.getUint32(offset));
    BitView._scratch.setUint32(4, this.getUint32(offset + 32));
    return BitView._scratch.getFloat64(0);
  }
  setBoolean(offset, value) {
    this.setBits(offset, value ? 1 : 0, 1);
  }
  setInt8(offset, value) {
    this.setBits(offset, value, 8);
  }
  setUint8(offset, value) {
    this.setBits(offset, value, 8);
  }
  setInt16(offset, value) {
    this.setBits(offset, value, 16);
  }
  setUint16(offset, value) {
    this.setBits(offset, value, 16);
  }
  setInt32(offset, value) {
    this.setBits(offset, value, 32);
  }
  setUint32(offset, value) {
    this.setBits(offset, value, 32);
  }
  setFloat32(offset, value) {
    BitView._scratch.setFloat32(0, value);
    this.setBits(offset, BitView._scratch.getUint32(0), 32);
  }
  setFloat64(offset, value) {
    BitView._scratch.setFloat64(0, value);
    this.setBits(offset, BitView._scratch.getUint32(0), 32);
    this.setBits(offset + 32, BitView._scratch.getUint32(4), 32);
  }
  getArrayBuffer(offset, byteLength2) {
    var buffer = new Uint8Array(byteLength2);
    for (var i = 0;i < byteLength2; i++) {
      buffer[i] = this.getUint8(offset + i * 8);
    }
    return buffer;
  }
}
BitView._scratch = new DataView(new ArrayBuffer(8));
Object.defineProperty(BitView.prototype, "buffer", {
  get: function() {
    return typeof $Buffer !== "undefined" ? $Buffer.from(this._view.buffer) : this._view.buffer;
  },
  enumerable: true,
  configurable: false
});
Object.defineProperty(BitView.prototype, "byteLength", {
  get: function() {
    return this._view.length;
  },
  enumerable: true,
  configurable: false
});
var reader = function(name, size) {
  return function() {
    if (this._index + size > this._length) {
      throw new Error("Trying to read past the end of the stream");
    }
    var val = this._view[name](this._index);
    this._index += size;
    return val;
  };
};
var writer = function(name, size) {
  return function(value) {
    this._view[name](this._index, value);
    this._index += size;
  };
};

class BitStream {
  constructor(source, byteOffset, byteLength2) {
    var isBuffer2 = source instanceof ArrayBuffer || typeof $Buffer !== "undefined" && source instanceof $Buffer;
    if (!(source instanceof BitView) && !isBuffer2) {
      throw new Error("Must specify a valid BitView, ArrayBuffer or Buffer");
    }
    if (isBuffer2) {
      this._view = new BitView(source, byteOffset, byteLength2);
    } else {
      this._view = source;
    }
    this._index = 0;
    this._startIndex = 0;
    this._length = this._view.byteLength * 8;
  }
  readBits(bits, signed) {
    var val = this._view.getBits(this._index, bits, signed);
    this._index += bits;
    return val;
  }
  writeBits(value, bits) {
    this._view.setBits(this._index, value, bits);
    this._index += bits;
  }
  readASCIIString(bytes) {
    return readASCIIString(this, bytes);
  }
  readUTF8String(bytes) {
    return readUTF8String(this, bytes);
  }
  writeASCIIString(string, bytes) {
    writeASCIIString(this, string, bytes);
  }
  writeUTF8String(string, bytes) {
    writeUTF8String(this, string, bytes);
  }
  readBitStream(bitLength) {
    var slice2 = new BitStream(this._view);
    slice2._startIndex = this._index;
    slice2._index = this._index;
    slice2.length = bitLength;
    this._index += bitLength;
    return slice2;
  }
  writeBitStream(stream, length) {
    if (!length) {
      length = stream.bitsLeft;
    }
    var bitsToWrite;
    while (length > 0) {
      bitsToWrite = Math.min(length, 32);
      this.writeBits(stream.readBits(bitsToWrite), bitsToWrite);
      length -= bitsToWrite;
    }
  }
  readArrayBuffer(byteLength2) {
    var buffer = this._view.getArrayBuffer(this._index, byteLength2);
    this._index += byteLength2 * 8;
    return buffer;
  }
  writeArrayBuffer(buffer, byteLength2) {
    this.writeBitStream(new BitStream(buffer), byteLength2 * 8);
  }
}
Object.defineProperty(BitStream.prototype, "index", {
  get: function() {
    return this._index - this._startIndex;
  },
  set: function(val) {
    this._index = val + this._startIndex;
  },
  enumerable: true,
  configurable: true
});
Object.defineProperty(BitStream.prototype, "length", {
  get: function() {
    return this._length - this._startIndex;
  },
  set: function(val) {
    this._length = val + this._startIndex;
  },
  enumerable: true,
  configurable: true
});
Object.defineProperty(BitStream.prototype, "bitsLeft", {
  get: function() {
    return this._length - this._index;
  },
  enumerable: true,
  configurable: true
});
Object.defineProperty(BitStream.prototype, "byteIndex", {
  get: function() {
    return Math.ceil(this._index / 8);
  },
  set: function(val) {
    this._index = val * 8;
  },
  enumerable: true,
  configurable: true
});
Object.defineProperty(BitStream.prototype, "buffer", {
  get: function() {
    return this._view.buffer;
  },
  enumerable: true,
  configurable: false
});
Object.defineProperty(BitStream.prototype, "view", {
  get: function() {
    return this._view;
  },
  enumerable: true,
  configurable: false
});
Object.defineProperty(BitStream.prototype, "bigEndian", {
  get: function() {
    return this._view.bigEndian;
  },
  set: function(val) {
    this._view.bigEndian = val;
  },
  enumerable: true,
  configurable: false
});
BitStream.prototype.readBoolean = reader("getBoolean", 1);
BitStream.prototype.readInt8 = reader("getInt8", 8);
BitStream.prototype.readUint8 = reader("getUint8", 8);
BitStream.prototype.readInt16 = reader("getInt16", 16);
BitStream.prototype.readUint16 = reader("getUint16", 16);
BitStream.prototype.readInt32 = reader("getInt32", 32);
BitStream.prototype.readUint32 = reader("getUint32", 32);
BitStream.prototype.readFloat32 = reader("getFloat32", 32);
BitStream.prototype.readFloat64 = reader("getFloat64", 64);
BitStream.prototype.writeBoolean = writer("setBoolean", 1);
BitStream.prototype.writeInt8 = writer("setInt8", 8);
BitStream.prototype.writeUint8 = writer("setUint8", 8);
BitStream.prototype.writeInt16 = writer("setInt16", 16);
BitStream.prototype.writeUint16 = writer("setUint16", 16);
BitStream.prototype.writeInt32 = writer("setInt32", 32);
BitStream.prototype.writeUint32 = writer("setUint32", 32);
BitStream.prototype.writeFloat32 = writer("setFloat32", 32);
BitStream.prototype.writeFloat64 = writer("setFloat64", 64);

// src/external/mii-js/extendedBitStream.ts
class ExtendedBitStream extends BitStream {
  constructor(buffer) {
    super(buffer, buffer.byteOffset, buffer.byteLength);
  }
  swapEndian() {
    this.bigEndian = !this.bigEndian;
  }
  alignByte() {
    const nextClosestByteIndex = 8 * Math.ceil(this._index / 8);
    const bitDistance = nextClosestByteIndex - this._index;
    this.skipBits(bitDistance);
  }
  bitSeek(bitPos) {
    this._index = bitPos;
  }
  skipBits(bitCount) {
    this._index += bitCount;
  }
  skipBytes(bytes) {
    const bits = bytes * 8;
    this.skipBits(bits);
  }
  skipBit() {
    this.skipBits(1);
  }
  skipInt8() {
    this.skipBytes(1);
  }
  skipInt16() {
    this.skipBytes(2);
  }
  readBit() {
    return this.readBits(1);
  }
  readBytes(length) {
    return Array(length).fill(0).map(() => this.readUint8());
  }
  readBuffer(length) {
    return $Buffer.from(this.readBytes(length));
  }
  readUTF16String(length) {
    return this.readBuffer(length).toString("utf16le").replace(/\0.*$/, "");
  }
  writeBit(bit) {
    this.writeBits(bit, 1);
  }
  writeBuffer(buffer) {
    buffer.forEach((byte) => this.writeUint8(byte));
  }
  writeUTF16String(string) {
    const stringBuffer = $Buffer.from(string, "utf16le");
    const terminatedBuffer = $Buffer.alloc(20);
    stringBuffer.copy(terminatedBuffer);
    this.writeBuffer(terminatedBuffer);
  }
}

// src/external/mii-js/util.ts
class Util {
  static inRange(val, range) {
    return range.includes(val);
  }
  static clamp(val, min, max) {
    if (max === undefined) {
      max = min;
      min = 0;
    }
    return Math.min(Math.max(val, min), max);
  }
  static range(start, end) {
    if (end === undefined) {
      end = start;
      start = 0;
    }
    return Array.from({ length: end - start }, (_, i) => i + start);
  }
}

// src/external/mii-js/mii.ts
var import_assert = __toESM(require_assert(), 1);

// src/config.ts
var baseURL = "https://mii-renderer.nxw.pw/miis/image";
var Config = {
  renderer: {
    baseURL,
    renderHeadshotURL: `${baseURL}.png?shaderType=0&type=face&width=260&verifyCharInfo=0`,
    renderHeadshotURLNoParams: `${baseURL}.png`,
    render3DHeadURL: `${baseURL}.glb?shaderType=0&type=face&width=260&verifyCharInfo=0`,
    renderFaceURL: `${baseURL}.png?width=260&scale=1&drawStageMode=mask_only`,
    randomUserURL: "???"
  },
  version: {
    string: "v0.5",
    name: "Unfinished"
  }
};

// src/external/mii-js/mii.ts
var STUDIO_RENDER_URL_BASE = Config.renderer.baseURL;
var STUDIO_ASSET_URL_BASE = "https://mii-studio.akamaized.net/editor/1";
var STUDIO_ASSET_FILE_TYPE = "webp";
var STUDIO_RENDER_DEFAULTS = {
  type: "face",
  expression: "normal",
  width: 96,
  bgColor: "FFFFFF00",
  clothesColor: "default",
  cameraXRotate: 0,
  cameraYRotate: 0,
  cameraZRotate: 0,
  characterXRotate: 0,
  characterYRotate: 0,
  characterZRotate: 0,
  lightXDirection: 0,
  lightYDirection: 0,
  lightZDirection: 0,
  lightDirectionMode: "none",
  splitMode: "none",
  instanceCount: 1,
  instanceRotationMode: "model"
};
var STUDIO_RENDER_TYPES = ["face", "face_only", "all_body"];
var STUDIO_RENDER_EXPRESSIONS = [
  "normal",
  "smile",
  "anger",
  "sorrow",
  "surprise",
  "blink",
  "normal_open_mouth",
  "smile_open_mouth",
  "anger_open_mouth",
  "surprise_open_mouth",
  "sorrow_open_mouth",
  "blink_open_mouth",
  "wink_left",
  "wink_right",
  "wink_left_open_mouth",
  "wink_right_open_mouth",
  "like_wink_left",
  "like_wink_right",
  "frustrated"
];
var STUDIO_RENDER_CLOTHES_COLORS = [
  "default",
  "red",
  "orange",
  "yellow",
  "yellowgreen",
  "green",
  "blue",
  "skyblue",
  "pink",
  "purple",
  "brown",
  "white",
  "black"
];
var STUDIO_RENDER_LIGHT_DIRECTION_MODES = [
  "none",
  "zerox",
  "flipx",
  "camera",
  "offset",
  "set"
];
var STUDIO_SPLIT_MODES = [
  "none",
  "front",
  "back",
  "both"
];
var STUDIO_RENDER_INSTANCE_ROTATION_MODES = ["model", "camera", "both"];
var STUDIO_BG_COLOR_REGEX = /^[0-9A-F]{8}$/;

class Mii {
  bitStream;
  version;
  allowCopying;
  profanityFlag;
  regionLock;
  characterSet;
  pageIndex;
  slotIndex;
  unknown1;
  deviceOrigin;
  systemId;
  normalMii;
  dsMii;
  nonUserMii;
  isValid;
  creationTime;
  consoleMAC;
  gender;
  birthMonth;
  birthDay;
  favoriteColor;
  favorite;
  miiName;
  height;
  build;
  disableSharing;
  faceType;
  skinColor;
  wrinklesType;
  makeupType;
  hairType;
  hairColor;
  flipHair;
  eyeType;
  eyeColor;
  eyeScale;
  eyeVerticalStretch;
  eyeRotation;
  eyeSpacing;
  eyeYPosition;
  eyebrowType;
  eyebrowColor;
  eyebrowScale;
  eyebrowVerticalStretch;
  eyebrowRotation;
  eyebrowSpacing;
  eyebrowYPosition;
  noseType;
  noseScale;
  noseYPosition;
  mouthType;
  mouthColor;
  mouthScale;
  mouthHorizontalStretch;
  mouthYPosition;
  mustacheType;
  unknown2;
  beardType;
  facialHairColor;
  mustacheScale;
  mustacheYPosition;
  glassesType;
  glassesColor;
  glassesScale;
  glassesYPosition;
  moleEnabled;
  moleScale;
  moleXPosition;
  moleYPosition;
  creatorName;
  checksum;
  constructor(buffer) {
    this.bitStream = new ExtendedBitStream(buffer);
    this.decode();
  }
  validate() {
    import_assert.default.strictEqual(this.bitStream.length / 8, 96, `Invalid Mii data size. Got ${this.bitStream.length / 8}, expected 96`);
    import_assert.default.ok(this.version === 0 || this.version === 3, `Invalid Mii version. Got ${this.version}, expected 0 or 3`);
    import_assert.default.strictEqual(typeof this.allowCopying, "boolean", `Invalid Mii allow copying. Got ${this.allowCopying}, expected true or false`);
    import_assert.default.strictEqual(typeof this.profanityFlag, "boolean", `Invalid Mii profanity flag. Got ${this.profanityFlag}, expected true or false`);
    import_assert.default.ok(Util.inRange(this.regionLock, Util.range(4)), `Invalid Mii region lock. Got ${this.regionLock}, expected 0-3`);
    import_assert.default.ok(Util.inRange(this.characterSet, Util.range(4)), `Invalid Mii region lock. Got ${this.characterSet}, expected 0-3`);
    import_assert.default.ok(Util.inRange(this.pageIndex, Util.range(10)), `Invalid Mii page index. Got ${this.pageIndex}, expected 0-9`);
    import_assert.default.ok(Util.inRange(this.slotIndex, Util.range(10)), `Invalid Mii slot index. Got ${this.slotIndex}, expected 0-9`);
    import_assert.default.strictEqual(this.unknown1, 0, `Invalid Mii unknown1. Got ${this.unknown1}, expected 0`);
    import_assert.default.ok(Util.inRange(this.deviceOrigin, Util.range(0, 5)), `Invalid Mii device origin. Got ${this.deviceOrigin}, expected 1-4`);
    import_assert.default.strictEqual(this.systemId.length, 8, `Invalid Mii system ID size. Got ${this.systemId.length}, system IDs must be 8 bytes long`);
    import_assert.default.strictEqual(typeof this.normalMii, "boolean", `Invalid normal Mii flag. Got ${this.normalMii}, expected true or false`);
    import_assert.default.strictEqual(typeof this.dsMii, "boolean", `Invalid DS Mii flag. Got ${this.dsMii}, expected true or false`);
    import_assert.default.strictEqual(typeof this.nonUserMii, "boolean", `Invalid non-user Mii flag. Got ${this.nonUserMii}, expected true or false`);
    import_assert.default.strictEqual(typeof this.isValid, "boolean", `Invalid Mii valid flag. Got ${this.isValid}, expected true or false`);
    import_assert.default.ok(this.creationTime < 268435456, `Invalid Mii creation time. Got ${this.creationTime}, max value for 28 bit integer is 268,435,456`);
    import_assert.default.strictEqual(this.consoleMAC.length, 6, `Invalid Mii console MAC address size. Got ${this.consoleMAC.length}, console MAC addresses must be 6 bytes long`);
    import_assert.default.ok(Util.inRange(this.gender, Util.range(2)), `Invalid Mii gender. Got ${this.gender}, expected 0 or 1`);
    import_assert.default.ok(Util.inRange(this.birthMonth, Util.range(13)), `Invalid Mii birth month. Got ${this.birthMonth}, expected 0-12`);
    import_assert.default.ok(Util.inRange(this.birthDay, Util.range(32)), `Invalid Mii birth day. Got ${this.birthDay}, expected 0-31`);
    import_assert.default.ok(Util.inRange(this.favoriteColor, Util.range(12)), `Invalid Mii favorite color. Got ${this.favoriteColor}, expected 0-11`);
    import_assert.default.strictEqual(typeof this.favorite, "boolean", `Invalid favorite Mii flag. Got ${this.favorite}, expected true or false`);
    import_assert.default.ok($Buffer.from(this.miiName, "utf16le").length <= 20, `Invalid Mii name. Got ${this.miiName}, name may only be up to 10 characters`);
    import_assert.default.ok(Util.inRange(this.height, Util.range(128)), `Invalid Mii height. Got ${this.height}, expected 0-127`);
    import_assert.default.ok(Util.inRange(this.build, Util.range(128)), `Invalid Mii build. Got ${this.build}, expected 0-127`);
    import_assert.default.strictEqual(typeof this.disableSharing, "boolean", `Invalid disable sharing Mii flag. Got ${this.disableSharing}, expected true or false`);
    import_assert.default.ok(Util.inRange(this.faceType, Util.range(12)), `Invalid Mii face type. Got ${this.faceType}, expected 0-11`);
    import_assert.default.ok(Util.inRange(this.skinColor, Util.range(7)), `Invalid Mii skin color. Got ${this.skinColor}, expected 0-6`);
    import_assert.default.ok(Util.inRange(this.wrinklesType, Util.range(12)), `Invalid Mii wrinkles type. Got ${this.wrinklesType}, expected 0-11`);
    import_assert.default.ok(Util.inRange(this.makeupType, Util.range(12)), `Invalid Mii makeup type. Got ${this.makeupType}, expected 0-11`);
    import_assert.default.ok(Util.inRange(this.hairType, Util.range(132)), `Invalid Mii hair type. Got ${this.hairType}, expected 0-131`);
    import_assert.default.ok(Util.inRange(this.hairColor, Util.range(8)), `Invalid Mii hair color. Got ${this.hairColor}, expected 0-7`);
    import_assert.default.strictEqual(typeof this.flipHair, "boolean", `Invalid flip hair flag. Got ${this.flipHair}, expected true or false`);
    import_assert.default.ok(Util.inRange(this.eyeType, Util.range(60)), `Invalid Mii eye type. Got ${this.eyeType}, expected 0-59`);
    import_assert.default.ok(Util.inRange(this.eyeColor, Util.range(6)), `Invalid Mii eye color. Got ${this.eyeColor}, expected 0-5`);
    import_assert.default.ok(Util.inRange(this.eyeScale, Util.range(8)), `Invalid Mii eye scale. Got ${this.eyeScale}, expected 0-7`);
    import_assert.default.ok(Util.inRange(this.eyeVerticalStretch, Util.range(7)), `Invalid Mii eye vertical stretch. Got ${this.eyeVerticalStretch}, expected 0-6`);
    import_assert.default.ok(Util.inRange(this.eyeRotation, Util.range(8)), `Invalid Mii eye rotation. Got ${this.eyeRotation}, expected 0-7`);
    import_assert.default.ok(Util.inRange(this.eyeSpacing, Util.range(13)), `Invalid Mii eye spacing. Got ${this.eyeSpacing}, expected 0-12`);
    import_assert.default.ok(Util.inRange(this.eyeYPosition, Util.range(19)), `Invalid Mii eye Y position. Got ${this.eyeYPosition}, expected 0-18`);
    import_assert.default.ok(Util.inRange(this.eyebrowType, Util.range(25)), `Invalid Mii eyebrow type. Got ${this.eyebrowType}, expected 0-24`);
    import_assert.default.ok(Util.inRange(this.eyebrowColor, Util.range(8)), `Invalid Mii eyebrow color. Got ${this.eyebrowColor}, expected 0-7`);
    import_assert.default.ok(Util.inRange(this.eyebrowScale, Util.range(9)), `Invalid Mii eyebrow scale. Got ${this.eyebrowScale}, expected 0-8`);
    import_assert.default.ok(Util.inRange(this.eyebrowVerticalStretch, Util.range(7)), `Invalid Mii eyebrow vertical stretch. Got ${this.eyebrowVerticalStretch}, expected 0-6`);
    import_assert.default.ok(Util.inRange(this.eyebrowRotation, Util.range(12)), `Invalid Mii eyebrow rotation. Got ${this.eyebrowRotation}, expected 0-11`);
    import_assert.default.ok(Util.inRange(this.eyebrowSpacing, Util.range(13)), `Invalid Mii eyebrow spacing. Got ${this.eyebrowSpacing}, expected 0-12`);
    import_assert.default.ok(Util.inRange(this.eyebrowYPosition, Util.range(3, 19)), `Invalid Mii eyebrow Y position. Got ${this.eyebrowYPosition}, expected 3-18`);
    import_assert.default.ok(Util.inRange(this.noseType, Util.range(18)), `Invalid Mii nose type. Got ${this.noseType}, expected 0-17`);
    import_assert.default.ok(Util.inRange(this.noseScale, Util.range(9)), `Invalid Mii nose scale. Got ${this.noseScale}, expected 0-8`);
    import_assert.default.ok(Util.inRange(this.noseYPosition, Util.range(19)), `Invalid Mii nose Y position. Got ${this.noseYPosition}, expected 0-18`);
    import_assert.default.ok(Util.inRange(this.mouthType, Util.range(36)), `Invalid Mii mouth type. Got ${this.mouthType}, expected 0-35`);
    import_assert.default.ok(Util.inRange(this.mouthColor, Util.range(5)), `Invalid Mii mouth color. Got ${this.mouthColor}, expected 0-4`);
    import_assert.default.ok(Util.inRange(this.mouthScale, Util.range(9)), `Invalid Mii mouth scale. Got ${this.mouthScale}, expected 0-8`);
    import_assert.default.ok(Util.inRange(this.mouthHorizontalStretch, Util.range(7)), `Invalid Mii mouth stretch. Got ${this.mouthHorizontalStretch}, expected 0-6`);
    import_assert.default.ok(Util.inRange(this.mouthYPosition, Util.range(19)), `Invalid Mii mouth Y position. Got ${this.mouthYPosition}, expected 0-18`);
    import_assert.default.ok(Util.inRange(this.mustacheType, Util.range(6)), `Invalid Mii mustache type. Got ${this.mustacheType}, expected 0-5`);
    import_assert.default.ok(Util.inRange(this.beardType, Util.range(6)), `Invalid Mii beard type. Got ${this.beardType}, expected 0-5`);
    import_assert.default.ok(Util.inRange(this.facialHairColor, Util.range(8)), `Invalid Mii beard type. Got ${this.facialHairColor}, expected 0-7`);
    import_assert.default.ok(Util.inRange(this.mustacheScale, Util.range(9)), `Invalid Mii mustache scale. Got ${this.mustacheScale}, expected 0-8`);
    import_assert.default.ok(Util.inRange(this.mustacheYPosition, Util.range(17)), `Invalid Mii mustache Y position. Got ${this.mustacheYPosition}, expected 0-16`);
    import_assert.default.ok(Util.inRange(this.glassesType, Util.range(9)), `Invalid Mii glassess type. Got ${this.glassesType}, expected 0-8`);
    import_assert.default.ok(Util.inRange(this.glassesColor, Util.range(6)), `Invalid Mii glassess type. Got ${this.glassesColor}, expected 0-5`);
    import_assert.default.ok(Util.inRange(this.glassesScale, Util.range(8)), `Invalid Mii glassess type. Got ${this.glassesScale}, expected 0-7`);
    import_assert.default.ok(Util.inRange(this.glassesYPosition, Util.range(21)), `Invalid Mii glassess Y position. Got ${this.glassesYPosition}, expected 0-20`);
    import_assert.default.strictEqual(typeof this.moleEnabled, "boolean", `Invalid mole enabled flag. Got ${this.moleEnabled}, expected true or false`);
    import_assert.default.ok(Util.inRange(this.moleScale, Util.range(9)), `Invalid Mii mole scale. Got ${this.moleScale}, expected 0-8`);
    import_assert.default.ok(Util.inRange(this.moleXPosition, Util.range(17)), `Invalid Mii mole X position. Got ${this.moleXPosition}, expected 0-16`);
    import_assert.default.ok(Util.inRange(this.moleYPosition, Util.range(31)), `Invalid Mii mole Y position. Got ${this.moleYPosition}, expected 0-30`);
    if (this.nonUserMii && (this.creationTime !== 0 || this.isValid || this.dsMii || this.normalMii)) {
      import_assert.default.fail("Non-user Mii's must have all other Mii ID bits set to 0");
    }
    if (!this.normalMii && !this.disableSharing) {
      import_assert.default.fail("Special Miis must have sharing disabled");
    }
  }
  decode() {
    this.version = this.bitStream.readUint8();
    this.allowCopying = this.bitStream.readBoolean();
    this.profanityFlag = this.bitStream.readBoolean();
    this.regionLock = this.bitStream.readBits(2);
    this.characterSet = this.bitStream.readBits(2);
    this.bitStream.alignByte();
    this.pageIndex = this.bitStream.readBits(4);
    this.slotIndex = this.bitStream.readBits(4);
    this.unknown1 = this.bitStream.readBits(4);
    this.deviceOrigin = this.bitStream.readBits(3);
    this.bitStream.alignByte();
    this.systemId = this.bitStream.readBuffer(8);
    this.bitStream.swapEndian();
    this.normalMii = this.bitStream.readBoolean();
    this.dsMii = this.bitStream.readBoolean();
    this.nonUserMii = this.bitStream.readBoolean();
    this.isValid = this.bitStream.readBoolean();
    this.creationTime = this.bitStream.readBits(28);
    this.bitStream.swapEndian();
    this.consoleMAC = this.bitStream.readBuffer(6);
    this.bitStream.skipInt16();
    this.gender = this.bitStream.readBit();
    this.birthMonth = this.bitStream.readBits(4);
    this.birthDay = this.bitStream.readBits(5);
    this.favoriteColor = this.bitStream.readBits(4);
    this.favorite = this.bitStream.readBoolean();
    this.bitStream.alignByte();
    this.miiName = this.bitStream.readUTF16String(20);
    this.height = this.bitStream.readUint8();
    this.build = this.bitStream.readUint8();
    this.disableSharing = this.bitStream.readBoolean();
    this.faceType = this.bitStream.readBits(4);
    this.skinColor = this.bitStream.readBits(3);
    this.wrinklesType = this.bitStream.readBits(4);
    this.makeupType = this.bitStream.readBits(4);
    this.hairType = this.bitStream.readUint8();
    this.hairColor = this.bitStream.readBits(3);
    this.flipHair = this.bitStream.readBoolean();
    this.bitStream.alignByte();
    this.eyeType = this.bitStream.readBits(6);
    this.eyeColor = this.bitStream.readBits(3);
    this.eyeScale = this.bitStream.readBits(4);
    this.eyeVerticalStretch = this.bitStream.readBits(3);
    this.eyeRotation = this.bitStream.readBits(5);
    this.eyeSpacing = this.bitStream.readBits(4);
    this.eyeYPosition = this.bitStream.readBits(5);
    this.bitStream.alignByte();
    this.eyebrowType = this.bitStream.readBits(5);
    this.eyebrowColor = this.bitStream.readBits(3);
    this.eyebrowScale = this.bitStream.readBits(4);
    this.eyebrowVerticalStretch = this.bitStream.readBits(3);
    this.bitStream.skipBit();
    this.eyebrowRotation = this.bitStream.readBits(4);
    this.bitStream.skipBit();
    this.eyebrowSpacing = this.bitStream.readBits(4);
    this.eyebrowYPosition = this.bitStream.readBits(5);
    this.bitStream.alignByte();
    this.noseType = this.bitStream.readBits(5);
    this.noseScale = this.bitStream.readBits(4);
    this.noseYPosition = this.bitStream.readBits(5);
    this.bitStream.alignByte();
    this.mouthType = this.bitStream.readBits(6);
    this.mouthColor = this.bitStream.readBits(3);
    this.mouthScale = this.bitStream.readBits(4);
    this.mouthHorizontalStretch = this.bitStream.readBits(3);
    this.mouthYPosition = this.bitStream.readBits(5);
    this.mustacheType = this.bitStream.readBits(3);
    this.unknown2 = this.bitStream.readUint8();
    this.beardType = this.bitStream.readBits(3);
    this.facialHairColor = this.bitStream.readBits(3);
    this.mustacheScale = this.bitStream.readBits(4);
    this.mustacheYPosition = this.bitStream.readBits(5);
    this.bitStream.alignByte();
    this.glassesType = this.bitStream.readBits(4);
    this.glassesColor = this.bitStream.readBits(3);
    this.glassesScale = this.bitStream.readBits(4);
    this.glassesYPosition = this.bitStream.readBits(5);
    this.moleEnabled = this.bitStream.readBoolean();
    this.moleScale = this.bitStream.readBits(4);
    this.moleXPosition = this.bitStream.readBits(5);
    this.moleYPosition = this.bitStream.readBits(5);
    this.bitStream.alignByte();
    this.creatorName = this.bitStream.readUTF16String(20);
    this.bitStream.skipInt16();
    this.bitStream.swapEndian();
    this.checksum = this.bitStream.readUint16();
    this.bitStream.swapEndian();
    this.validate();
    if (this.checksum !== this.calculateCRC()) {
      throw new Error("Invalid Mii checksum");
    }
  }
  encode() {
    this.validate();
    this.bitStream.bitSeek(0);
    this.bitStream.writeUint8(this.version);
    this.bitStream.writeBoolean(this.allowCopying);
    this.bitStream.writeBoolean(this.profanityFlag);
    this.bitStream.writeBits(this.regionLock, 2);
    this.bitStream.writeBits(this.characterSet, 2);
    this.bitStream.alignByte();
    this.bitStream.writeBits(this.pageIndex, 4);
    this.bitStream.writeBits(this.slotIndex, 4);
    this.bitStream.writeBits(this.unknown1, 4);
    this.bitStream.writeBits(this.deviceOrigin, 3);
    this.bitStream.alignByte();
    this.bitStream.writeBuffer(this.systemId);
    this.bitStream.swapEndian();
    this.bitStream.writeBoolean(this.normalMii);
    this.bitStream.writeBoolean(this.dsMii);
    this.bitStream.writeBoolean(this.nonUserMii);
    this.bitStream.writeBoolean(this.isValid);
    this.bitStream.writeBits(this.creationTime, 28);
    this.bitStream.swapEndian();
    this.bitStream.writeBuffer(this.consoleMAC);
    this.bitStream.writeUint16(0);
    this.bitStream.writeBit(this.gender);
    this.bitStream.writeBits(this.birthMonth, 4);
    this.bitStream.writeBits(this.birthDay, 5);
    this.bitStream.writeBits(this.favoriteColor, 4);
    this.bitStream.writeBoolean(this.favorite);
    this.bitStream.alignByte();
    this.bitStream.writeUTF16String(this.miiName);
    this.bitStream.writeUint8(this.height);
    this.bitStream.writeUint8(this.build);
    this.bitStream.writeBoolean(this.disableSharing);
    this.bitStream.writeBits(this.faceType, 4);
    this.bitStream.writeBits(this.skinColor, 3);
    this.bitStream.writeBits(this.wrinklesType, 4);
    this.bitStream.writeBits(this.makeupType, 4);
    this.bitStream.writeUint8(this.hairType);
    this.bitStream.writeBits(this.hairColor, 3);
    this.bitStream.writeBoolean(this.flipHair);
    this.bitStream.alignByte();
    this.bitStream.writeBits(this.eyeType, 6);
    this.bitStream.writeBits(this.eyeColor, 3);
    this.bitStream.writeBits(this.eyeScale, 4);
    this.bitStream.writeBits(this.eyeVerticalStretch, 3);
    this.bitStream.writeBits(this.eyeRotation, 5);
    this.bitStream.writeBits(this.eyeSpacing, 4);
    this.bitStream.writeBits(this.eyeYPosition, 5);
    this.bitStream.alignByte();
    this.bitStream.writeBits(this.eyebrowType, 5);
    this.bitStream.writeBits(this.eyebrowColor, 3);
    this.bitStream.writeBits(this.eyebrowScale, 4);
    this.bitStream.writeBits(this.eyebrowVerticalStretch, 3);
    this.bitStream.skipBit();
    this.bitStream.writeBits(this.eyebrowRotation, 4);
    this.bitStream.skipBit();
    this.bitStream.writeBits(this.eyebrowSpacing, 4);
    this.bitStream.writeBits(this.eyebrowYPosition, 5);
    this.bitStream.alignByte();
    this.bitStream.writeBits(this.noseType, 5);
    this.bitStream.writeBits(this.noseScale, 4);
    this.bitStream.writeBits(this.noseYPosition, 5);
    this.bitStream.alignByte();
    this.bitStream.writeBits(this.mouthType, 6);
    this.bitStream.writeBits(this.mouthColor, 3);
    this.bitStream.writeBits(this.mouthScale, 4);
    this.bitStream.writeBits(this.mouthHorizontalStretch, 3);
    this.bitStream.writeBits(this.mouthYPosition, 5);
    this.bitStream.writeBits(this.mustacheType, 3);
    this.bitStream.writeUint8(this.unknown2);
    this.bitStream.writeBits(this.beardType, 3);
    this.bitStream.writeBits(this.facialHairColor, 3);
    this.bitStream.writeBits(this.mustacheScale, 4);
    this.bitStream.writeBits(this.mustacheYPosition, 5);
    this.bitStream.alignByte();
    this.bitStream.writeBits(this.glassesType, 4);
    this.bitStream.writeBits(this.glassesColor, 3);
    this.bitStream.writeBits(this.glassesScale, 4);
    this.bitStream.writeBits(this.glassesYPosition, 5);
    this.bitStream.writeBoolean(this.moleEnabled);
    this.bitStream.writeBits(this.moleScale, 4);
    this.bitStream.writeBits(this.moleXPosition, 5);
    this.bitStream.writeBits(this.moleYPosition, 5);
    this.bitStream.alignByte();
    this.bitStream.writeUTF16String(this.creatorName);
    this.bitStream.writeUint16(0);
    this.bitStream.swapEndian();
    this.bitStream.writeUint16(this.calculateCRC());
    this.bitStream.swapEndian();
    return $Buffer.from(this.bitStream.view._view);
  }
  calculateCRC() {
    const view = this.bitStream.view;
    const data = view._view.subarray(0, 94);
    let crc = 0;
    for (const byte of data) {
      for (let bit = 7;bit >= 0; bit--) {
        const flag = (crc & 32768) != 0;
        crc = (crc << 1 | byte >> bit & 1) ^ (flag ? 4129 : 0);
      }
    }
    for (let i = 16;i > 0; i--) {
      const flag = (crc & 32768) != 0;
      crc = crc << 1 ^ (flag ? 4129 : 0);
    }
    return crc & 65535;
  }
  encodeStudio() {
    this.validate();
    let miiStudioData = $Buffer.alloc(47);
    let next = 256;
    let pos = 1;
    function encodeMiiPart(partValue) {
      const encoded = (7 + (partValue ^ next)) % 256;
      next = encoded;
      miiStudioData.writeUInt8(encoded, pos);
      pos++;
    }
    if (this.facialHairColor === 0) {
      encodeMiiPart(8);
    } else {
      encodeMiiPart(this.facialHairColor);
    }
    encodeMiiPart(this.beardType);
    encodeMiiPart(this.build);
    encodeMiiPart(this.eyeVerticalStretch);
    encodeMiiPart(this.eyeColor + 8);
    encodeMiiPart(this.eyeRotation);
    encodeMiiPart(this.eyeScale);
    encodeMiiPart(this.eyeType);
    encodeMiiPart(this.eyeSpacing);
    encodeMiiPart(this.eyeYPosition);
    encodeMiiPart(this.eyebrowVerticalStretch);
    if (this.eyebrowColor === 0) {
      encodeMiiPart(8);
    } else {
      encodeMiiPart(this.eyebrowColor);
    }
    encodeMiiPart(this.eyebrowRotation);
    encodeMiiPart(this.eyebrowScale);
    encodeMiiPart(this.eyebrowType);
    encodeMiiPart(this.eyebrowSpacing);
    encodeMiiPart(this.eyebrowYPosition);
    encodeMiiPart(this.skinColor);
    encodeMiiPart(this.makeupType);
    encodeMiiPart(this.faceType);
    encodeMiiPart(this.wrinklesType);
    encodeMiiPart(this.favoriteColor);
    encodeMiiPart(this.gender);
    if (this.glassesColor == 0) {
      encodeMiiPart(8);
    } else if (this.glassesColor < 6) {
      encodeMiiPart(this.glassesColor + 13);
    } else {
      encodeMiiPart(0);
    }
    encodeMiiPart(this.glassesScale);
    encodeMiiPart(this.glassesType);
    encodeMiiPart(this.glassesYPosition);
    if (this.hairColor == 0) {
      encodeMiiPart(8);
    } else {
      encodeMiiPart(this.hairColor);
    }
    encodeMiiPart(this.flipHair ? 1 : 0);
    encodeMiiPart(this.hairType);
    encodeMiiPart(this.height);
    encodeMiiPart(this.moleScale);
    encodeMiiPart(this.moleEnabled ? 1 : 0);
    encodeMiiPart(this.moleXPosition);
    encodeMiiPart(this.moleYPosition);
    encodeMiiPart(this.mouthHorizontalStretch);
    if (this.mouthColor < 4) {
      encodeMiiPart(this.mouthColor + 19);
    } else {
      encodeMiiPart(0);
    }
    encodeMiiPart(this.mouthScale);
    encodeMiiPart(this.mouthType);
    encodeMiiPart(this.mouthYPosition);
    encodeMiiPart(this.mustacheScale);
    encodeMiiPart(this.mustacheType);
    encodeMiiPart(this.mustacheYPosition);
    encodeMiiPart(this.noseScale);
    encodeMiiPart(this.noseType);
    encodeMiiPart(this.noseYPosition);
    return miiStudioData;
  }
  studioUrl(queryParams = STUDIO_RENDER_DEFAULTS) {
    const params = {
      ...STUDIO_RENDER_DEFAULTS,
      ...queryParams,
      data: this.encodeStudio().toString("hex"),
      shaderType: 0
    };
    let fileExt = "png";
    if (params.ext) {
      fileExt = params.ext;
      delete params["ext"];
    }
    params.type = STUDIO_RENDER_TYPES.includes(params.type) ? params.type : STUDIO_RENDER_DEFAULTS.type;
    params.expression = STUDIO_RENDER_EXPRESSIONS.includes(params.expression) ? params.expression : STUDIO_RENDER_DEFAULTS.expression;
    params.width = Util.clamp(params.width, 512);
    params.bgColor = STUDIO_BG_COLOR_REGEX.test(params.bgColor) ? params.bgColor : STUDIO_RENDER_DEFAULTS.bgColor;
    params.clothesColor = STUDIO_RENDER_CLOTHES_COLORS.includes(params.clothesColor) ? params.clothesColor : STUDIO_RENDER_DEFAULTS.clothesColor;
    params.cameraXRotate = Util.clamp(params.cameraXRotate, 359);
    params.cameraYRotate = Util.clamp(params.cameraYRotate, 359);
    params.cameraZRotate = Util.clamp(params.cameraZRotate, 359);
    params.characterXRotate = Util.clamp(params.characterXRotate, 359);
    params.characterYRotate = Util.clamp(params.characterYRotate, 359);
    params.characterZRotate = Util.clamp(params.characterZRotate, 359);
    params.lightXDirection = Util.clamp(params.lightXDirection, 359);
    params.lightYDirection = Util.clamp(params.lightYDirection, 359);
    params.lightZDirection = Util.clamp(params.lightZDirection, 359);
    params.lightDirectionMode = STUDIO_RENDER_LIGHT_DIRECTION_MODES.includes(params.lightDirectionMode) ? params.lightDirectionMode : STUDIO_RENDER_DEFAULTS.lightDirectionMode;
    params.splitMode = STUDIO_SPLIT_MODES.includes(params.splitMode) ? params.splitMode : STUDIO_RENDER_DEFAULTS.splitMode;
    params.instanceCount = Util.clamp(params.instanceCount, 1, 16);
    params.instanceRotationMode = STUDIO_RENDER_INSTANCE_ROTATION_MODES.includes(params.instanceRotationMode) ? params.instanceRotationMode : STUDIO_RENDER_DEFAULTS.instanceRotationMode;
    const query = new URLSearchParams(Object.fromEntries(Object.entries(params).map(([key, value]) => [key, value.toString()])));
    if (params.lightDirectionMode === "none") {
      query.delete("lightDirectionMode");
      query.delete("lightXDirection");
      query.delete("lightYDirection");
      query.delete("lightZDirection");
    }
    if (params.splitMode === "none")
      query.delete("splitMode");
    return `${STUDIO_RENDER_URL_BASE}.${fileExt}?${query.toString()}`;
  }
  studioAssetUrlBody() {
    return this.studioAssetUrl(`body/${this.gender}/${this.favoriteColor}`);
  }
  studioAssetUrlHead() {
    return this.studioAssetUrl(`face/${this.faceType}/${this.wrinklesType}/${this.makeupType}/${this.skinColor}`);
  }
  studioAssetUrlFace() {
    return this.studioAssetUrlHead();
  }
  studioAssetUrlEye() {
    return this.studioAssetUrl(`eye/${this.eyeType}/${this.eyeColor + 8}`);
  }
  studioAssetUrlEyebrow() {
    let eyebrowColor = this.eyebrowColor;
    if (this.eyebrowColor === 0) {
      eyebrowColor = 8;
    }
    return this.studioAssetUrl(`eyebrow/${this.eyebrowType}/${eyebrowColor}`);
  }
  studioAssetUrlNose() {
    return this.studioAssetUrl(`nose/${this.noseType}/${this.skinColor}`);
  }
  studioAssetUrlMouth() {
    let mouthColor = 0;
    if (this.mouthColor < 4) {
      mouthColor = this.mouthColor + 19;
    }
    return this.studioAssetUrl(`mouth/${this.mouthType}/${mouthColor}`);
  }
  studioAssetUrlHair() {
    let assetPath;
    let hairColor = this.hairColor;
    if (this.hairColor == 0) {
      hairColor = 8;
    }
    if (this.hairType === 34 || this.hairType === 57) {
      assetPath = `hair/${this.hairType}/${this.faceType}/${this.favoriteColor}`;
    } else {
      assetPath = `${this.flipHair ? "hairflip" : "hair"}/${this.hairType}/${this.faceType}/${hairColor}`;
    }
    return this.studioAssetUrl(assetPath);
  }
  studioAssetUrlBeard() {
    let facialHairColor = this.facialHairColor;
    if (this.facialHairColor === 0) {
      facialHairColor = 8;
    }
    return this.studioAssetUrl(`beard/${this.beardType}/${this.faceType}/${facialHairColor}`);
  }
  studioAssetUrlMustache() {
    let facialHairColor = this.facialHairColor;
    if (this.facialHairColor === 0) {
      facialHairColor = 8;
    }
    return this.studioAssetUrl(`mustache/${this.mustacheType}/${facialHairColor}`);
  }
  studioAssetUrlGlasses() {
    let glassesColor = 0;
    if (this.glassesColor == 0) {
      glassesColor = 8;
    } else if (this.glassesColor < 6) {
      glassesColor = this.glassesColor + 13;
    }
    return this.studioAssetUrl(`glass/${this.glassesType}/${glassesColor}`);
  }
  studioAssetUrlMole() {
    return this.studioAssetUrl(`mole/${this.moleEnabled ? 1 : 0}`);
  }
  studioAssetUrl(assetPath) {
    this.validate();
    const assetPathHash = import_md5.default(assetPath);
    const char0 = assetPathHash[0];
    const char1 = assetPathHash[1];
    const char2 = assetPathHash[2];
    const fileName = assetPathHash.substring(3, 12);
    return `${STUDIO_ASSET_URL_BASE}/${STUDIO_ASSET_FILE_TYPE}/1024/${char0}/${char1}/${char2}/${fileName}.${STUDIO_ASSET_FILE_TYPE}`;
  }
}

// src/jfl-demo.ts
await setupAssets();
renderFace(new Mii($Buffer.from("AwEAAAAAAAAAAAAAgP9wmQAAAAAAAAAAAABNAGkAaQAAAAAAAAAAAAAAAAAAAEBAAAAhAQJoRBgmNEYUgRIXaA0AACkAUkhQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMNn", "base64")));
