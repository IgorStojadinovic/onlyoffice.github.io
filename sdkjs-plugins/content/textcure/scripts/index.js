import { c as callCommand, e as executeMethod, g as getFullUrl, b as getDocumentTitle, d as getWebSocketPort, S as Settings } from "../assets/utils-BZMHhtPK.js";
var w = [];
for (let n4 = 0; n4 < 256; ++n4) w.push((n4 + 256).toString(16).slice(1));
function gt(n4, e = 0) {
  return (w[n4[e + 0]] + w[n4[e + 1]] + w[n4[e + 2]] + w[n4[e + 3]] + "-" + w[n4[e + 4]] + w[n4[e + 5]] + "-" + w[n4[e + 6]] + w[n4[e + 7]] + "-" + w[n4[e + 8]] + w[n4[e + 9]] + "-" + w[n4[e + 10]] + w[n4[e + 11]] + w[n4[e + 12]] + w[n4[e + 13]] + w[n4[e + 14]] + w[n4[e + 15]]).toLowerCase();
}
var Pe, un = new Uint8Array(16);
function ke() {
  if (!Pe) {
    if (typeof crypto > "u" || !crypto.getRandomValues) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    Pe = crypto.getRandomValues.bind(crypto);
  }
  return Pe(un);
}
var dn = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), Te = { randomUUID: dn };
function fn(n4, e, t) {
  if (Te.randomUUID && !e && !n4) return Te.randomUUID();
  n4 = n4 || {};
  let s = n4.random ?? n4.rng?.() ?? ke();
  if (s.length < 16) throw new Error("Random bytes length must be >= 16");
  if (s[6] = s[6] & 15 | 64, s[8] = s[8] & 63 | 128, e) {
    if (t = t || 0, t < 0 || t + 16 > e.length) throw new RangeError(`UUID byte range ${t}:${t + 15} is out of buffer bounds`);
    for (let i = 0; i < 16; ++i) e[t + i] = s[i];
    return e;
  }
  return gt(s);
}
var ee = fn;
var hn = /^[v^~<>=]*?(\d+)(?:\.([x*]|\d+)(?:\.([x*]|\d+)(?:\.([x*]|\d+))?(?:-([\da-z\-]+(?:\.[\da-z\-]+)*))?(?:\+[\da-z\-]+(?:\.[\da-z\-]+)*)?)?)?$/i, Re = (n4) => {
  if (typeof n4 != "string") throw new TypeError("Invalid argument expected string");
  let e = n4.match(hn);
  if (!e) throw new Error(`Invalid argument not valid semver ('${n4}' received)`);
  return e.shift(), e;
}, mt = (n4) => n4 === "*" || n4 === "x" || n4 === "X", xt = (n4) => {
  let e = parseInt(n4, 10);
  return isNaN(e) ? n4 : e;
}, pn = (n4, e) => typeof n4 != typeof e ? [String(n4), String(e)] : [n4, e], gn = (n4, e) => {
  if (mt(n4) || mt(e)) return 0;
  let [t, s] = pn(xt(n4), xt(e));
  return t > s ? 1 : t < s ? -1 : 0;
}, $e = (n4, e) => {
  for (let t = 0; t < Math.max(n4.length, e.length); t++) {
    let s = gn(n4[t] || "0", e[t] || "0");
    if (s !== 0) return s;
  }
  return 0;
};
var wt = (n4, e) => {
  let t = Re(n4), s = Re(e), i = t.pop(), o = s.pop(), r = $e(t, s);
  return r !== 0 ? r : i && o ? $e(i.split("."), o.split(".")) : i || o ? i ? -1 : 1 : 0;
};
var Ie = (n4, e, t) => {
  mn(t);
  let s = wt(n4, e);
  return bt[t].includes(s);
}, bt = { ">": [1], ">=": [0, 1], "=": [0], "<=": [-1, 0], "<": [-1], "!=": [-1, 1] }, yt = Object.keys(bt), mn = (n4) => {
  if (yt.indexOf(n4) === -1) throw new Error(`Invalid operator, expected one of ${yt.join("|")}`);
};
var De = class extends Error {
  constructor() {
    super("Version 12.3.3 ou supérieure nécessaire pour obtenir la fonction de récupération / Version 12.3.3 or later required to get the function");
  }
};
function St() {
  let n4 = document.getElementById("antidoteapi_jsconnect_actif");
  if (n4 == null) return false;
  let e = n4.attributes.getNamedItem("antidoteapi_jsconnect_version");
  return e != null && Ie(e.value, "1.1.0", ">=");
}
function vt() {
  document.getElementsByTagName("html").item(0)?.setAttribute("antidoteapi_jsconnect", "true"), window.postMessage({ type: "TypeContentScriptAntidoteAPIJSConnectAnnonce", message: "annoncePresence" }, "*");
}
function Ot(n4) {
  let e = ee();
  for (let s of n4) s.dataset.antidoteapi_jsconnect_groupe_id = e;
  let t = { type: "TypeContentScriptAntidoteAPIJSConnect", message: "lanceOutilConnect", id: e };
  window.postMessage(t, "*");
}
async function Nt() {
  if (window.recuperePortWebSocket) return window.recuperePortWebSocket();
  throw new De();
}
var xn = { isDetected: function() {
  return St();
}, announcePresence: function() {
  vt();
}, launchCorrector: function(n4) {
  Ot(n4);
}, getWebSocketPort: async function() {
  return Nt();
} };
var F;
(function(n4) {
  n4[n4.selectionne = 0] = "selectionne", n4[n4.remplace = 1] = "remplace";
})(F || (F = {}));
window.onblur = function() {
};
var Mt = { "Retour à l’application": "Back to the application" };
var Ft = { "Retour à l’application": "Retour à l’application" };
var g = (n4) => typeof n4 == "string", se = () => {
  let n4, e, t = new Promise((s, i) => {
    n4 = s, e = i;
  });
  return t.resolve = n4, t.reject = e, t;
}, jt = (n4) => n4 == null ? "" : "" + n4, kn = (n4, e, t) => {
  n4.forEach((s) => {
    e[s] && (t[s] = e[s]);
  });
}, Tn = /###/g, Ut = (n4) => n4 && n4.indexOf("###") > -1 ? n4.replace(Tn, ".") : n4, Vt = (n4) => !n4 || g(n4), ie = (n4, e, t) => {
  let s = g(e) ? e.split(".") : e, i = 0;
  for (; i < s.length - 1; ) {
    if (Vt(n4)) return {};
    let o = Ut(s[i]);
    !n4[o] && t && (n4[o] = new t()), Object.prototype.hasOwnProperty.call(n4, o) ? n4 = n4[o] : n4 = {}, ++i;
  }
  return Vt(n4) ? {} : { obj: n4, k: Ut(s[i]) };
}, Wt = (n4, e, t) => {
  let { obj: s, k: i } = ie(n4, e, Object);
  if (s !== void 0 || e.length === 1) {
    s[i] = t;
    return;
  }
  let o = e[e.length - 1], r = e.slice(0, e.length - 1), a = ie(n4, r, Object);
  for (; a.obj === void 0 && r.length; ) o = `${r[r.length - 1]}.${o}`, r = r.slice(0, r.length - 1), a = ie(n4, r, Object), a?.obj && typeof a.obj[`${a.k}.${o}`] < "u" && (a.obj = void 0);
  a.obj[`${a.k}.${o}`] = t;
}, Rn = (n4, e, t, s) => {
  let { obj: i, k: o } = ie(n4, e, Object);
  i[o] = i[o] || [], i[o].push(t);
}, xe = (n4, e) => {
  let { obj: t, k: s } = ie(n4, e);
  if (t && Object.prototype.hasOwnProperty.call(t, s)) return t[s];
}, $n = (n4, e, t) => {
  let s = xe(n4, t);
  return s !== void 0 ? s : xe(e, t);
}, Gt = (n4, e, t) => {
  for (let s in e) s !== "__proto__" && s !== "constructor" && (s in n4 ? g(n4[s]) || n4[s] instanceof String || g(e[s]) || e[s] instanceof String ? t && (n4[s] = e[s]) : Gt(n4[s], e[s], t) : n4[s] = e[s]);
  return n4;
}, J = (n4) => n4.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&"), In = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;", "/": "&#x2F;" }, Dn = (n4) => g(n4) ? n4.replace(/[&<>"'\/]/g, (e) => In[e]) : n4, Be = class {
  constructor(e) {
    this.capacity = e, this.regExpMap = /* @__PURE__ */ new Map(), this.regExpQueue = [];
  }
  getRegExp(e) {
    let t = this.regExpMap.get(e);
    if (t !== void 0) return t;
    let s = new RegExp(e);
    return this.regExpQueue.length === this.capacity && this.regExpMap.delete(this.regExpQueue.shift()), this.regExpMap.set(e, s), this.regExpQueue.push(e), s;
  }
}, Mn = [" ", ",", "?", "!", ";"], Fn = new Be(20), jn = (n4, e, t) => {
  e = e || "", t = t || "";
  let s = Mn.filter((r) => e.indexOf(r) < 0 && t.indexOf(r) < 0);
  if (s.length === 0) return true;
  let i = Fn.getRegExp(`(${s.map((r) => r === "?" ? "\\?" : r).join("|")})`), o = !i.test(n4);
  if (!o) {
    let r = n4.indexOf(t);
    r > 0 && !i.test(n4.substring(0, r)) && (o = true);
  }
  return o;
}, Ze = (n4, e, t = ".") => {
  if (!n4) return;
  if (n4[e]) return Object.prototype.hasOwnProperty.call(n4, e) ? n4[e] : void 0;
  let s = e.split(t), i = n4;
  for (let o = 0; o < s.length; ) {
    if (!i || typeof i != "object") return;
    let r, a = "";
    for (let c = o; c < s.length; ++c) if (c !== o && (a += t), a += s[c], r = i[a], r !== void 0) {
      if (["string", "number", "boolean"].indexOf(typeof r) > -1 && c < s.length - 1) continue;
      o += c - o + 1;
      break;
    }
    i = r;
  }
  return i;
}, oe = (n4) => n4?.replace("_", "-"), Un = { type: "logger", log(n4) {
  this.output("log", n4);
}, warn(n4) {
  this.output("warn", n4);
}, error(n4) {
  this.output("error", n4);
}, output(n4, e) {
  console?.[n4]?.apply?.(console, e);
} }, Ge = class n {
  constructor(e, t = {}) {
    this.init(e, t);
  }
  init(e, t = {}) {
    this.prefix = t.prefix || "i18next:", this.logger = e || Un, this.options = t, this.debug = t.debug;
  }
  log(...e) {
    return this.forward(e, "log", "", true);
  }
  warn(...e) {
    return this.forward(e, "warn", "", true);
  }
  error(...e) {
    return this.forward(e, "error", "");
  }
  deprecate(...e) {
    return this.forward(e, "warn", "WARNING DEPRECATED: ", true);
  }
  forward(e, t, s, i) {
    return i && !this.debug ? null : (g(e[0]) && (e[0] = `${s}${this.prefix} ${e[0]}`), this.logger[t](e));
  }
  create(e) {
    return new n(this.logger, { prefix: `${this.prefix}:${e}:`, ...this.options });
  }
  clone(e) {
    return e = e || this.options, e.prefix = e.prefix || this.prefix, new n(this.logger, e);
  }
}, k = new Ge(), B = class {
  constructor() {
    this.observers = {};
  }
  on(e, t) {
    return e.split(" ").forEach((s) => {
      this.observers[s] || (this.observers[s] = /* @__PURE__ */ new Map());
      let i = this.observers[s].get(t) || 0;
      this.observers[s].set(t, i + 1);
    }), this;
  }
  off(e, t) {
    if (this.observers[e]) {
      if (!t) {
        delete this.observers[e];
        return;
      }
      this.observers[e].delete(t);
    }
  }
  emit(e, ...t) {
    this.observers[e] && Array.from(this.observers[e].entries()).forEach(([i, o]) => {
      for (let r = 0; r < o; r++) i(...t);
    }), this.observers["*"] && Array.from(this.observers["*"].entries()).forEach(([i, o]) => {
      for (let r = 0; r < o; r++) i.apply(i, [e, ...t]);
    });
  }
}, we = class extends B {
  constructor(e, t = { ns: ["translation"], defaultNS: "translation" }) {
    super(), this.data = e || {}, this.options = t, this.options.keySeparator === void 0 && (this.options.keySeparator = "."), this.options.ignoreJSONStructure === void 0 && (this.options.ignoreJSONStructure = true);
  }
  addNamespaces(e) {
    this.options.ns.indexOf(e) < 0 && this.options.ns.push(e);
  }
  removeNamespaces(e) {
    let t = this.options.ns.indexOf(e);
    t > -1 && this.options.ns.splice(t, 1);
  }
  getResource(e, t, s, i = {}) {
    let o = i.keySeparator !== void 0 ? i.keySeparator : this.options.keySeparator, r = i.ignoreJSONStructure !== void 0 ? i.ignoreJSONStructure : this.options.ignoreJSONStructure, a;
    e.indexOf(".") > -1 ? a = e.split(".") : (a = [e, t], s && (Array.isArray(s) ? a.push(...s) : g(s) && o ? a.push(...s.split(o)) : a.push(s)));
    let c = xe(this.data, a);
    return !c && !t && !s && e.indexOf(".") > -1 && (e = a[0], t = a[1], s = a.slice(2).join(".")), c || !r || !g(s) ? c : Ze(this.data?.[e]?.[t], s, o);
  }
  addResource(e, t, s, i, o = { silent: false }) {
    let r = o.keySeparator !== void 0 ? o.keySeparator : this.options.keySeparator, a = [e, t];
    s && (a = a.concat(r ? s.split(r) : s)), e.indexOf(".") > -1 && (a = e.split("."), i = t, t = a[1]), this.addNamespaces(t), Wt(this.data, a, i), o.silent || this.emit("added", e, t, s, i);
  }
  addResources(e, t, s, i = { silent: false }) {
    for (let o in s) (g(s[o]) || Array.isArray(s[o])) && this.addResource(e, t, o, s[o], { silent: true });
    i.silent || this.emit("added", e, t, s);
  }
  addResourceBundle(e, t, s, i, o, r = { silent: false, skipCopy: false }) {
    let a = [e, t];
    e.indexOf(".") > -1 && (a = e.split("."), i = s, s = t, t = a[1]), this.addNamespaces(t);
    let c = xe(this.data, a) || {};
    r.skipCopy || (s = JSON.parse(JSON.stringify(s))), i ? Gt(c, s, o) : c = { ...c, ...s }, Wt(this.data, a, c), r.silent || this.emit("added", e, t, s);
  }
  removeResourceBundle(e, t) {
    this.hasResourceBundle(e, t) && delete this.data[e][t], this.removeNamespaces(t), this.emit("removed", e, t);
  }
  hasResourceBundle(e, t) {
    return this.getResource(e, t) !== void 0;
  }
  getResourceBundle(e, t) {
    return t || (t = this.options.defaultNS), this.getResource(e, t);
  }
  getDataByLanguage(e) {
    return this.data[e];
  }
  hasLanguageSomeTranslations(e) {
    let t = this.getDataByLanguage(e);
    return !!(t && Object.keys(t) || []).find((i) => t[i] && Object.keys(t[i]).length > 0);
  }
  toJSON() {
    return this.data;
  }
}, Qt = { processors: {}, addPostProcessor(n4) {
  this.processors[n4.name] = n4;
}, handle(n4, e, t, s, i) {
  return n4.forEach((o) => {
    e = this.processors[o]?.process(e, t, s, i) ?? e;
  }), e;
} }, Yt = /* @__PURE__ */ Symbol("i18next/PATH_KEY");
function Vn() {
  let n4 = [], e = /* @__PURE__ */ Object.create(null), t;
  return e.get = (s, i) => (t?.revoke?.(), i === Yt ? n4 : (n4.push(i), t = Proxy.revocable(s, e), t.proxy)), Proxy.revocable(/* @__PURE__ */ Object.create(null), e).proxy;
}
function Qe(n4, e) {
  let { [Yt]: t } = n4(Vn());
  return t.join(e?.keySeparator ?? ".");
}
var _t = {}, ze = (n4) => !g(n4) && typeof n4 != "boolean" && typeof n4 != "number", ye = class n2 extends B {
  constructor(e, t = {}) {
    super(), kn(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], e, this), this.options = t, this.options.keySeparator === void 0 && (this.options.keySeparator = "."), this.logger = k.create("translator");
  }
  changeLanguage(e) {
    e && (this.language = e);
  }
  exists(e, t = { interpolation: {} }) {
    let s = { ...t };
    if (e == null) return false;
    let i = this.resolve(e, s);
    if (i?.res === void 0) return false;
    let o = ze(i.res);
    return !(s.returnObjects === false && o);
  }
  extractFromKey(e, t) {
    let s = t.nsSeparator !== void 0 ? t.nsSeparator : this.options.nsSeparator;
    s === void 0 && (s = ":");
    let i = t.keySeparator !== void 0 ? t.keySeparator : this.options.keySeparator, o = t.ns || this.options.defaultNS || [], r = s && e.indexOf(s) > -1, a = !this.options.userDefinedKeySeparator && !t.keySeparator && !this.options.userDefinedNsSeparator && !t.nsSeparator && !jn(e, s, i);
    if (r && !a) {
      let c = e.match(this.interpolator.nestingRegexp);
      if (c && c.length > 0) return { key: e, namespaces: g(o) ? [o] : o };
      let l = e.split(s);
      (s !== i || s === i && this.options.ns.indexOf(l[0]) > -1) && (o = l.shift()), e = l.join(i);
    }
    return { key: e, namespaces: g(o) ? [o] : o };
  }
  translate(e, t, s) {
    let i = typeof t == "object" ? { ...t } : t;
    if (typeof i != "object" && this.options.overloadTranslationOptionHandler && (i = this.options.overloadTranslationOptionHandler(arguments)), typeof i == "object" && (i = { ...i }), i || (i = {}), e == null) return "";
    typeof e == "function" && (e = Qe(e, { ...this.options, ...i })), Array.isArray(e) || (e = [String(e)]);
    let o = i.returnDetails !== void 0 ? i.returnDetails : this.options.returnDetails, r = i.keySeparator !== void 0 ? i.keySeparator : this.options.keySeparator, { key: a, namespaces: c } = this.extractFromKey(e[e.length - 1], i), l = c[c.length - 1], d = i.nsSeparator !== void 0 ? i.nsSeparator : this.options.nsSeparator;
    d === void 0 && (d = ":");
    let u = i.lng || this.language, p = i.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
    if (u?.toLowerCase() === "cimode") return p ? o ? { res: `${l}${d}${a}`, usedKey: a, exactUsedKey: a, usedLng: u, usedNS: l, usedParams: this.getUsedParamsDetails(i) } : `${l}${d}${a}` : o ? { res: a, usedKey: a, exactUsedKey: a, usedLng: u, usedNS: l, usedParams: this.getUsedParamsDetails(i) } : a;
    let f = this.resolve(e, i), h = f?.res, m = f?.usedKey || a, x = f?.exactUsedKey || a, L = ["[object Number]", "[object Function]", "[object RegExp]"], b = i.joinArrays !== void 0 ? i.joinArrays : this.options.joinArrays, D = !this.i18nFormat || this.i18nFormat.handleAsObject, O = i.count !== void 0 && !g(i.count), R = n2.hasDefaultValue(i), V = O ? this.pluralResolver.getSuffix(u, i.count, i) : "", W = i.ordinal && O ? this.pluralResolver.getSuffix(u, i.count, { ordinal: false }) : "", dt = O && !i.ordinal && i.count === 0, $ = dt && i[`defaultValue${this.options.pluralSeparator}zero`] || i[`defaultValue${V}`] || i[`defaultValue${W}`] || i.defaultValue, A = h;
    D && !h && R && (A = $);
    let cn = ze(A), ln = Object.prototype.toString.apply(A);
    if (D && A && cn && L.indexOf(ln) < 0 && !(g(b) && Array.isArray(A))) {
      if (!i.returnObjects && !this.options.returnObjects) {
        this.options.returnedObjectHandler || this.logger.warn("accessing an object - but returnObjects options is not enabled!");
        let E = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(m, A, { ...i, ns: c }) : `key '${a} (${this.language})' returned an object instead of string.`;
        return o ? (f.res = E, f.usedParams = this.getUsedParamsDetails(i), f) : E;
      }
      if (r) {
        let E = Array.isArray(A), C = E ? [] : {}, ft = E ? x : m;
        for (let P in A) if (Object.prototype.hasOwnProperty.call(A, P)) {
          let T = `${ft}${r}${P}`;
          R && !h ? C[P] = this.translate(T, { ...i, defaultValue: ze($) ? $[P] : void 0, joinArrays: false, ns: c }) : C[P] = this.translate(T, { ...i, joinArrays: false, ns: c }), C[P] === T && (C[P] = A[P]);
        }
        h = C;
      }
    } else if (D && g(b) && Array.isArray(h)) h = h.join(b), h && (h = this.extendTranslation(h, e, i, s));
    else {
      let E = false, C = false;
      !this.isValidLookup(h) && R && (E = true, h = $), this.isValidLookup(h) || (C = true, h = a);
      let P = (i.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey) && C ? void 0 : h, T = R && $ !== h && this.options.updateMissing;
      if (C || E || T) {
        if (this.logger.log(T ? "updateKey" : "missingKey", u, l, a, T ? $ : h), r) {
          let v = this.resolve(a, { ...i, keySeparator: false });
          v && v.res && this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.");
        }
        let q = [], ce = this.languageUtils.getFallbackCodes(this.options.fallbackLng, i.lng || this.language);
        if (this.options.saveMissingTo === "fallback" && ce && ce[0]) for (let v = 0; v < ce.length; v++) q.push(ce[v]);
        else this.options.saveMissingTo === "all" ? q = this.languageUtils.toResolveHierarchy(i.lng || this.language) : q.push(i.lng || this.language);
        let ht = (v, M, X) => {
          let pt = R && X !== h ? X : P;
          this.options.missingKeyHandler ? this.options.missingKeyHandler(v, l, M, pt, T, i) : this.backendConnector?.saveMissing && this.backendConnector.saveMissing(v, l, M, pt, T, i), this.emit("missingKey", v, l, M, h);
        };
        this.options.saveMissing && (this.options.saveMissingPlurals && O ? q.forEach((v) => {
          let M = this.pluralResolver.getSuffixes(v, i);
          dt && i[`defaultValue${this.options.pluralSeparator}zero`] && M.indexOf(`${this.options.pluralSeparator}zero`) < 0 && M.push(`${this.options.pluralSeparator}zero`), M.forEach((X) => {
            ht([v], a + X, i[`defaultValue${X}`] || $);
          });
        }) : ht(q, a, $));
      }
      h = this.extendTranslation(h, e, i, f, s), C && h === a && this.options.appendNamespaceToMissingKey && (h = `${l}${d}${a}`), (C || E) && this.options.parseMissingKeyHandler && (h = this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? `${l}${d}${a}` : a, E ? h : void 0, i));
    }
    return o ? (f.res = h, f.usedParams = this.getUsedParamsDetails(i), f) : h;
  }
  extendTranslation(e, t, s, i, o) {
    if (this.i18nFormat?.parse) e = this.i18nFormat.parse(e, { ...this.options.interpolation.defaultVariables, ...s }, s.lng || this.language || i.usedLng, i.usedNS, i.usedKey, { resolved: i });
    else if (!s.skipInterpolation) {
      s.interpolation && this.interpolator.init({ ...s, interpolation: { ...this.options.interpolation, ...s.interpolation } });
      let c = g(e) && (s?.interpolation?.skipOnVariables !== void 0 ? s.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables), l;
      if (c) {
        let u = e.match(this.interpolator.nestingRegexp);
        l = u && u.length;
      }
      let d = s.replace && !g(s.replace) ? s.replace : s;
      if (this.options.interpolation.defaultVariables && (d = { ...this.options.interpolation.defaultVariables, ...d }), e = this.interpolator.interpolate(e, d, s.lng || this.language || i.usedLng, s), c) {
        let u = e.match(this.interpolator.nestingRegexp), p = u && u.length;
        l < p && (s.nest = false);
      }
      !s.lng && i && i.res && (s.lng = this.language || i.usedLng), s.nest !== false && (e = this.interpolator.nest(e, (...u) => o?.[0] === u[0] && !s.context ? (this.logger.warn(`It seems you are nesting recursively key: ${u[0]} in key: ${t[0]}`), null) : this.translate(...u, t), s)), s.interpolation && this.interpolator.reset();
    }
    let r = s.postProcess || this.options.postProcess, a = g(r) ? [r] : r;
    return e != null && a?.length && s.applyPostProcessor !== false && (e = Qt.handle(a, e, t, this.options && this.options.postProcessPassResolved ? { i18nResolved: { ...i, usedParams: this.getUsedParamsDetails(s) }, ...s } : s, this)), e;
  }
  resolve(e, t = {}) {
    let s, i, o, r, a;
    return g(e) && (e = [e]), e.forEach((c) => {
      if (this.isValidLookup(s)) return;
      let l = this.extractFromKey(c, t), d = l.key;
      i = d;
      let u = l.namespaces;
      this.options.fallbackNS && (u = u.concat(this.options.fallbackNS));
      let p = t.count !== void 0 && !g(t.count), f = p && !t.ordinal && t.count === 0, h = t.context !== void 0 && (g(t.context) || typeof t.context == "number") && t.context !== "", m = t.lngs ? t.lngs : this.languageUtils.toResolveHierarchy(t.lng || this.language, t.fallbackLng);
      u.forEach((x) => {
        this.isValidLookup(s) || (a = x, !_t[`${m[0]}-${x}`] && this.utils?.hasLoadedNamespace && !this.utils?.hasLoadedNamespace(a) && (_t[`${m[0]}-${x}`] = true, this.logger.warn(`key "${i}" for languages "${m.join(", ")}" won't get resolved as namespace "${a}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")), m.forEach((L) => {
          if (this.isValidLookup(s)) return;
          r = L;
          let b = [d];
          if (this.i18nFormat?.addLookupKeys) this.i18nFormat.addLookupKeys(b, d, L, x, t);
          else {
            let O;
            p && (O = this.pluralResolver.getSuffix(L, t.count, t));
            let R = `${this.options.pluralSeparator}zero`, V = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
            if (p && (t.ordinal && O.indexOf(V) === 0 && b.push(d + O.replace(V, this.options.pluralSeparator)), b.push(d + O), f && b.push(d + R)), h) {
              let W = `${d}${this.options.contextSeparator || "_"}${t.context}`;
              b.push(W), p && (t.ordinal && O.indexOf(V) === 0 && b.push(W + O.replace(V, this.options.pluralSeparator)), b.push(W + O), f && b.push(W + R));
            }
          }
          let D;
          for (; D = b.pop(); ) this.isValidLookup(s) || (o = D, s = this.getResource(L, x, D, t));
        }));
      });
    }), { res: s, usedKey: i, exactUsedKey: o, usedLng: r, usedNS: a };
  }
  isValidLookup(e) {
    return e !== void 0 && !(!this.options.returnNull && e === null) && !(!this.options.returnEmptyString && e === "");
  }
  getResource(e, t, s, i = {}) {
    return this.i18nFormat?.getResource ? this.i18nFormat.getResource(e, t, s, i) : this.resourceStore.getResource(e, t, s, i);
  }
  getUsedParamsDetails(e = {}) {
    let t = ["defaultValue", "ordinal", "context", "replace", "lng", "lngs", "fallbackLng", "ns", "keySeparator", "nsSeparator", "returnObjects", "returnDetails", "joinArrays", "postProcess", "interpolation"], s = e.replace && !g(e.replace), i = s ? e.replace : e;
    if (s && typeof e.count < "u" && (i.count = e.count), this.options.interpolation.defaultVariables && (i = { ...this.options.interpolation.defaultVariables, ...i }), !s) {
      i = { ...i };
      for (let o of t) delete i[o];
    }
    return i;
  }
  static hasDefaultValue(e) {
    let t = "defaultValue";
    for (let s in e) if (Object.prototype.hasOwnProperty.call(e, s) && t === s.substring(0, t.length) && e[s] !== void 0) return true;
    return false;
  }
}, be = class {
  constructor(e) {
    this.options = e, this.supportedLngs = this.options.supportedLngs || false, this.logger = k.create("languageUtils");
  }
  getScriptPartFromCode(e) {
    if (e = oe(e), !e || e.indexOf("-") < 0) return null;
    let t = e.split("-");
    return t.length === 2 || (t.pop(), t[t.length - 1].toLowerCase() === "x") ? null : this.formatLanguageCode(t.join("-"));
  }
  getLanguagePartFromCode(e) {
    if (e = oe(e), !e || e.indexOf("-") < 0) return e;
    let t = e.split("-");
    return this.formatLanguageCode(t[0]);
  }
  formatLanguageCode(e) {
    if (g(e) && e.indexOf("-") > -1) {
      let t;
      try {
        t = Intl.getCanonicalLocales(e)[0];
      } catch {
      }
      return t && this.options.lowerCaseLng && (t = t.toLowerCase()), t || (this.options.lowerCaseLng ? e.toLowerCase() : e);
    }
    return this.options.cleanCode || this.options.lowerCaseLng ? e.toLowerCase() : e;
  }
  isSupportedCode(e) {
    return (this.options.load === "languageOnly" || this.options.nonExplicitSupportedLngs) && (e = this.getLanguagePartFromCode(e)), !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.indexOf(e) > -1;
  }
  getBestMatchFromCodes(e) {
    if (!e) return null;
    let t;
    return e.forEach((s) => {
      if (t) return;
      let i = this.formatLanguageCode(s);
      (!this.options.supportedLngs || this.isSupportedCode(i)) && (t = i);
    }), !t && this.options.supportedLngs && e.forEach((s) => {
      if (t) return;
      let i = this.getScriptPartFromCode(s);
      if (this.isSupportedCode(i)) return t = i;
      let o = this.getLanguagePartFromCode(s);
      if (this.isSupportedCode(o)) return t = o;
      t = this.options.supportedLngs.find((r) => {
        if (r === o) return r;
        if (!(r.indexOf("-") < 0 && o.indexOf("-") < 0) && (r.indexOf("-") > 0 && o.indexOf("-") < 0 && r.substring(0, r.indexOf("-")) === o || r.indexOf(o) === 0 && o.length > 1)) return r;
      });
    }), t || (t = this.getFallbackCodes(this.options.fallbackLng)[0]), t;
  }
  getFallbackCodes(e, t) {
    if (!e) return [];
    if (typeof e == "function" && (e = e(t)), g(e) && (e = [e]), Array.isArray(e)) return e;
    if (!t) return e.default || [];
    let s = e[t];
    return s || (s = e[this.getScriptPartFromCode(t)]), s || (s = e[this.formatLanguageCode(t)]), s || (s = e[this.getLanguagePartFromCode(t)]), s || (s = e.default), s || [];
  }
  toResolveHierarchy(e, t) {
    let s = this.getFallbackCodes((t === false ? [] : t) || this.options.fallbackLng || [], e), i = [], o = (r) => {
      r && (this.isSupportedCode(r) ? i.push(r) : this.logger.warn(`rejecting language code not found in supportedLngs: ${r}`));
    };
    return g(e) && (e.indexOf("-") > -1 || e.indexOf("_") > -1) ? (this.options.load !== "languageOnly" && o(this.formatLanguageCode(e)), this.options.load !== "languageOnly" && this.options.load !== "currentOnly" && o(this.getScriptPartFromCode(e)), this.options.load !== "currentOnly" && o(this.getLanguagePartFromCode(e))) : g(e) && o(this.formatLanguageCode(e)), s.forEach((r) => {
      i.indexOf(r) < 0 && o(this.formatLanguageCode(r));
    }), i;
  }
}, Ht = { zero: 0, one: 1, two: 2, few: 3, many: 4, other: 5 }, Kt = { select: (n4) => n4 === 1 ? "one" : "other", resolvedOptions: () => ({ pluralCategories: ["one", "other"] }) }, Ye = class {
  constructor(e, t = {}) {
    this.languageUtils = e, this.options = t, this.logger = k.create("pluralResolver"), this.pluralRulesCache = {};
  }
  addRule(e, t) {
    this.rules[e] = t;
  }
  clearCache() {
    this.pluralRulesCache = {};
  }
  getRule(e, t = {}) {
    let s = oe(e === "dev" ? "en" : e), i = t.ordinal ? "ordinal" : "cardinal", o = JSON.stringify({ cleanedCode: s, type: i });
    if (o in this.pluralRulesCache) return this.pluralRulesCache[o];
    let r;
    try {
      r = new Intl.PluralRules(s, { type: i });
    } catch {
      if (!Intl) return this.logger.error("No Intl support, please use an Intl polyfill!"), Kt;
      if (!e.match(/-|_/)) return Kt;
      let c = this.languageUtils.getLanguagePartFromCode(e);
      r = this.getRule(c, t);
    }
    return this.pluralRulesCache[o] = r, r;
  }
  needsPlural(e, t = {}) {
    let s = this.getRule(e, t);
    return s || (s = this.getRule("dev", t)), s?.resolvedOptions().pluralCategories.length > 1;
  }
  getPluralFormsOfKey(e, t, s = {}) {
    return this.getSuffixes(e, s).map((i) => `${t}${i}`);
  }
  getSuffixes(e, t = {}) {
    let s = this.getRule(e, t);
    return s || (s = this.getRule("dev", t)), s ? s.resolvedOptions().pluralCategories.sort((i, o) => Ht[i] - Ht[o]).map((i) => `${this.options.prepend}${t.ordinal ? `ordinal${this.options.prepend}` : ""}${i}`) : [];
  }
  getSuffix(e, t, s = {}) {
    let i = this.getRule(e, s);
    return i ? `${this.options.prepend}${s.ordinal ? `ordinal${this.options.prepend}` : ""}${i.select(t)}` : (this.logger.warn(`no plural rule found for: ${e}`), this.getSuffix("dev", t, s));
  }
}, zt = (n4, e, t, s = ".", i = true) => {
  let o = $n(n4, e, t);
  return !o && i && g(t) && (o = Ze(n4, t, s), o === void 0 && (o = Ze(e, t, s))), o;
}, Je = (n4) => n4.replace(/\$/g, "$$$$"), qe = class {
  constructor(e = {}) {
    this.logger = k.create("interpolator"), this.options = e, this.format = e?.interpolation?.format || ((t) => t), this.init(e);
  }
  init(e = {}) {
    e.interpolation || (e.interpolation = { escapeValue: true });
    let { escape: t, escapeValue: s, useRawValueToEscape: i, prefix: o, prefixEscaped: r, suffix: a, suffixEscaped: c, formatSeparator: l, unescapeSuffix: d, unescapePrefix: u, nestingPrefix: p, nestingPrefixEscaped: f, nestingSuffix: h, nestingSuffixEscaped: m, nestingOptionsSeparator: x, maxReplaces: L, alwaysFormat: b } = e.interpolation;
    this.escape = t !== void 0 ? t : Dn, this.escapeValue = s !== void 0 ? s : true, this.useRawValueToEscape = i !== void 0 ? i : false, this.prefix = o ? J(o) : r || "{{", this.suffix = a ? J(a) : c || "}}", this.formatSeparator = l || ",", this.unescapePrefix = d ? "" : u || "-", this.unescapeSuffix = this.unescapePrefix ? "" : d || "", this.nestingPrefix = p ? J(p) : f || J("$t("), this.nestingSuffix = h ? J(h) : m || J(")"), this.nestingOptionsSeparator = x || ",", this.maxReplaces = L || 1e3, this.alwaysFormat = b !== void 0 ? b : false, this.resetRegExp();
  }
  reset() {
    this.options && this.init(this.options);
  }
  resetRegExp() {
    let e = (t, s) => t?.source === s ? (t.lastIndex = 0, t) : new RegExp(s, "g");
    this.regexp = e(this.regexp, `${this.prefix}(.+?)${this.suffix}`), this.regexpUnescape = e(this.regexpUnescape, `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`), this.nestingRegexp = e(this.nestingRegexp, `${this.nestingPrefix}((?:[^()"']+|"[^"]*"|'[^']*'|\\((?:[^()]|"[^"]*"|'[^']*')*\\))*?)${this.nestingSuffix}`);
  }
  interpolate(e, t, s, i) {
    let o, r, a, c = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {}, l = (f) => {
      if (f.indexOf(this.formatSeparator) < 0) {
        let L = zt(t, c, f, this.options.keySeparator, this.options.ignoreJSONStructure);
        return this.alwaysFormat ? this.format(L, void 0, s, { ...i, ...t, interpolationkey: f }) : L;
      }
      let h = f.split(this.formatSeparator), m = h.shift().trim(), x = h.join(this.formatSeparator).trim();
      return this.format(zt(t, c, m, this.options.keySeparator, this.options.ignoreJSONStructure), x, s, { ...i, ...t, interpolationkey: m });
    };
    this.resetRegExp();
    let d = i?.missingInterpolationHandler || this.options.missingInterpolationHandler, u = i?.interpolation?.skipOnVariables !== void 0 ? i.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables;
    return [{ regex: this.regexpUnescape, safeValue: (f) => Je(f) }, { regex: this.regexp, safeValue: (f) => this.escapeValue ? Je(this.escape(f)) : Je(f) }].forEach((f) => {
      for (a = 0; o = f.regex.exec(e); ) {
        let h = o[1].trim();
        if (r = l(h), r === void 0) if (typeof d == "function") {
          let x = d(e, o, i);
          r = g(x) ? x : "";
        } else if (i && Object.prototype.hasOwnProperty.call(i, h)) r = "";
        else if (u) {
          r = o[0];
          continue;
        } else this.logger.warn(`missed to pass in variable ${h} for interpolating ${e}`), r = "";
        else !g(r) && !this.useRawValueToEscape && (r = jt(r));
        let m = f.safeValue(r);
        if (e = e.replace(o[0], m), u ? (f.regex.lastIndex += r.length, f.regex.lastIndex -= o[0].length) : f.regex.lastIndex = 0, a++, a >= this.maxReplaces) break;
      }
    }), e;
  }
  nest(e, t, s = {}) {
    let i, o, r, a = (c, l) => {
      let d = this.nestingOptionsSeparator;
      if (c.indexOf(d) < 0) return c;
      let u = c.split(new RegExp(`${d}[ ]*{`)), p = `{${u[1]}`;
      c = u[0], p = this.interpolate(p, r);
      let f = p.match(/'/g), h = p.match(/"/g);
      ((f?.length ?? 0) % 2 === 0 && !h || h.length % 2 !== 0) && (p = p.replace(/'/g, '"'));
      try {
        r = JSON.parse(p), l && (r = { ...l, ...r });
      } catch (m) {
        return this.logger.warn(`failed parsing options string in nesting for key ${c}`, m), `${c}${d}${p}`;
      }
      return r.defaultValue && r.defaultValue.indexOf(this.prefix) > -1 && delete r.defaultValue, c;
    };
    for (; i = this.nestingRegexp.exec(e); ) {
      let c = [];
      r = { ...s }, r = r.replace && !g(r.replace) ? r.replace : r, r.applyPostProcessor = false, delete r.defaultValue;
      let l = /{.*}/.test(i[1]) ? i[1].lastIndexOf("}") + 1 : i[1].indexOf(this.formatSeparator);
      if (l !== -1 && (c = i[1].slice(l).split(this.formatSeparator).map((d) => d.trim()).filter(Boolean), i[1] = i[1].slice(0, l)), o = t(a.call(this, i[1].trim(), r), r), o && i[0] === e && !g(o)) return o;
      g(o) || (o = jt(o)), o || (this.logger.warn(`missed to resolve ${i[1]} for nesting ${e}`), o = ""), c.length && (o = c.reduce((d, u) => this.format(d, u, s.lng, { ...s, interpolationkey: i[1].trim() }), o.trim())), e = e.replace(i[0], o), this.regexp.lastIndex = 0;
    }
    return e;
  }
}, Wn = (n4) => {
  let e = n4.toLowerCase().trim(), t = {};
  if (n4.indexOf("(") > -1) {
    let s = n4.split("(");
    e = s[0].toLowerCase().trim();
    let i = s[1].substring(0, s[1].length - 1);
    e === "currency" && i.indexOf(":") < 0 ? t.currency || (t.currency = i.trim()) : e === "relativetime" && i.indexOf(":") < 0 ? t.range || (t.range = i.trim()) : i.split(";").forEach((r) => {
      if (r) {
        let [a, ...c] = r.split(":"), l = c.join(":").trim().replace(/^'+|'+$/g, ""), d = a.trim();
        t[d] || (t[d] = l), l === "false" && (t[d] = false), l === "true" && (t[d] = true), isNaN(l) || (t[d] = parseInt(l, 10));
      }
    });
  }
  return { formatName: e, formatOptions: t };
}, Jt = (n4) => {
  let e = {};
  return (t, s, i) => {
    let o = i;
    i && i.interpolationkey && i.formatParams && i.formatParams[i.interpolationkey] && i[i.interpolationkey] && (o = { ...o, [i.interpolationkey]: void 0 });
    let r = s + JSON.stringify(o), a = e[r];
    return a || (a = n4(oe(s), i), e[r] = a), a(t);
  };
}, _n = (n4) => (e, t, s) => n4(oe(t), s)(e), Xe = class {
  constructor(e = {}) {
    this.logger = k.create("formatter"), this.options = e, this.init(e);
  }
  init(e, t = { interpolation: {} }) {
    this.formatSeparator = t.interpolation.formatSeparator || ",";
    let s = t.cacheInBuiltFormats ? Jt : _n;
    this.formats = { number: s((i, o) => {
      let r = new Intl.NumberFormat(i, { ...o });
      return (a) => r.format(a);
    }), currency: s((i, o) => {
      let r = new Intl.NumberFormat(i, { ...o, style: "currency" });
      return (a) => r.format(a);
    }), datetime: s((i, o) => {
      let r = new Intl.DateTimeFormat(i, { ...o });
      return (a) => r.format(a);
    }), relativetime: s((i, o) => {
      let r = new Intl.RelativeTimeFormat(i, { ...o });
      return (a) => r.format(a, o.range || "day");
    }), list: s((i, o) => {
      let r = new Intl.ListFormat(i, { ...o });
      return (a) => r.format(a);
    }) };
  }
  add(e, t) {
    this.formats[e.toLowerCase().trim()] = t;
  }
  addCached(e, t) {
    this.formats[e.toLowerCase().trim()] = Jt(t);
  }
  format(e, t, s, i = {}) {
    let o = t.split(this.formatSeparator);
    if (o.length > 1 && o[0].indexOf("(") > 1 && o[0].indexOf(")") < 0 && o.find((a) => a.indexOf(")") > -1)) {
      let a = o.findIndex((c) => c.indexOf(")") > -1);
      o[0] = [o[0], ...o.splice(1, a)].join(this.formatSeparator);
    }
    return o.reduce((a, c) => {
      let { formatName: l, formatOptions: d } = Wn(c);
      if (this.formats[l]) {
        let u = a;
        try {
          let p = i?.formatParams?.[i.interpolationkey] || {}, f = p.locale || p.lng || i.locale || i.lng || s;
          u = this.formats[l](a, f, { ...d, ...i, ...p });
        } catch (p) {
          this.logger.warn(p);
        }
        return u;
      } else this.logger.warn(`there was no format function for ${l}`);
      return a;
    }, e);
  }
}, Hn = (n4, e) => {
  n4.pending[e] !== void 0 && (delete n4.pending[e], n4.pendingCount--);
}, et = class extends B {
  constructor(e, t, s, i = {}) {
    super(), this.backend = e, this.store = t, this.services = s, this.languageUtils = s.languageUtils, this.options = i, this.logger = k.create("backendConnector"), this.waitingReads = [], this.maxParallelReads = i.maxParallelReads || 10, this.readingCalls = 0, this.maxRetries = i.maxRetries >= 0 ? i.maxRetries : 5, this.retryTimeout = i.retryTimeout >= 1 ? i.retryTimeout : 350, this.state = {}, this.queue = [], this.backend?.init?.(s, i.backend, i);
  }
  queueLoad(e, t, s, i) {
    let o = {}, r = {}, a = {}, c = {};
    return e.forEach((l) => {
      let d = true;
      t.forEach((u) => {
        let p = `${l}|${u}`;
        !s.reload && this.store.hasResourceBundle(l, u) ? this.state[p] = 2 : this.state[p] < 0 || (this.state[p] === 1 ? r[p] === void 0 && (r[p] = true) : (this.state[p] = 1, d = false, r[p] === void 0 && (r[p] = true), o[p] === void 0 && (o[p] = true), c[u] === void 0 && (c[u] = true)));
      }), d || (a[l] = true);
    }), (Object.keys(o).length || Object.keys(r).length) && this.queue.push({ pending: r, pendingCount: Object.keys(r).length, loaded: {}, errors: [], callback: i }), { toLoad: Object.keys(o), pending: Object.keys(r), toLoadLanguages: Object.keys(a), toLoadNamespaces: Object.keys(c) };
  }
  loaded(e, t, s) {
    let i = e.split("|"), o = i[0], r = i[1];
    t && this.emit("failedLoading", o, r, t), !t && s && this.store.addResourceBundle(o, r, s, void 0, void 0, { skipCopy: true }), this.state[e] = t ? -1 : 2, t && s && (this.state[e] = 0);
    let a = {};
    this.queue.forEach((c) => {
      Rn(c.loaded, [o], r), Hn(c, e), t && c.errors.push(t), c.pendingCount === 0 && !c.done && (Object.keys(c.loaded).forEach((l) => {
        a[l] || (a[l] = {});
        let d = c.loaded[l];
        d.length && d.forEach((u) => {
          a[l][u] === void 0 && (a[l][u] = true);
        });
      }), c.done = true, c.errors.length ? c.callback(c.errors) : c.callback());
    }), this.emit("loaded", a), this.queue = this.queue.filter((c) => !c.done);
  }
  read(e, t, s, i = 0, o = this.retryTimeout, r) {
    if (!e.length) return r(null, {});
    if (this.readingCalls >= this.maxParallelReads) {
      this.waitingReads.push({ lng: e, ns: t, fcName: s, tried: i, wait: o, callback: r });
      return;
    }
    this.readingCalls++;
    let a = (l, d) => {
      if (this.readingCalls--, this.waitingReads.length > 0) {
        let u = this.waitingReads.shift();
        this.read(u.lng, u.ns, u.fcName, u.tried, u.wait, u.callback);
      }
      if (l && d && i < this.maxRetries) {
        setTimeout(() => {
          this.read.call(this, e, t, s, i + 1, o * 2, r);
        }, o);
        return;
      }
      r(l, d);
    }, c = this.backend[s].bind(this.backend);
    if (c.length === 2) {
      try {
        let l = c(e, t);
        l && typeof l.then == "function" ? l.then((d) => a(null, d)).catch(a) : a(null, l);
      } catch (l) {
        a(l);
      }
      return;
    }
    return c(e, t, a);
  }
  prepareLoading(e, t, s = {}, i) {
    if (!this.backend) return this.logger.warn("No backend was added via i18next.use. Will not load resources."), i && i();
    g(e) && (e = this.languageUtils.toResolveHierarchy(e)), g(t) && (t = [t]);
    let o = this.queueLoad(e, t, s, i);
    if (!o.toLoad.length) return o.pending.length || i(), null;
    o.toLoad.forEach((r) => {
      this.loadOne(r);
    });
  }
  load(e, t, s) {
    this.prepareLoading(e, t, {}, s);
  }
  reload(e, t, s) {
    this.prepareLoading(e, t, { reload: true }, s);
  }
  loadOne(e, t = "") {
    let s = e.split("|"), i = s[0], o = s[1];
    this.read(i, o, "read", void 0, void 0, (r, a) => {
      r && this.logger.warn(`${t}loading namespace ${o} for language ${i} failed`, r), !r && a && this.logger.log(`${t}loaded namespace ${o} for language ${i}`, a), this.loaded(e, r, a);
    });
  }
  saveMissing(e, t, s, i, o, r = {}, a = () => {
  }) {
    if (this.services?.utils?.hasLoadedNamespace && !this.services?.utils?.hasLoadedNamespace(t)) {
      this.logger.warn(`did not save key "${s}" as the namespace "${t}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");
      return;
    }
    if (!(s == null || s === "")) {
      if (this.backend?.create) {
        let c = { ...r, isUpdate: o }, l = this.backend.create.bind(this.backend);
        if (l.length < 6) try {
          let d;
          l.length === 5 ? d = l(e, t, s, i, c) : d = l(e, t, s, i), d && typeof d.then == "function" ? d.then((u) => a(null, u)).catch(a) : a(null, d);
        } catch (d) {
          a(d);
        }
        else l(e, t, s, i, a, c);
      }
      !e || !e[0] || this.store.addResource(e[0], t, s, i);
    }
  }
}, Bt = () => ({ debug: false, initAsync: true, ns: ["translation"], defaultNS: ["translation"], fallbackLng: ["dev"], fallbackNS: false, supportedLngs: false, nonExplicitSupportedLngs: false, load: "all", preload: false, simplifyPluralSuffix: true, keySeparator: ".", nsSeparator: ":", pluralSeparator: "_", contextSeparator: "_", partialBundledLanguages: false, saveMissing: false, updateMissing: false, saveMissingTo: "fallback", saveMissingPlurals: true, missingKeyHandler: false, missingInterpolationHandler: false, postProcess: false, postProcessPassResolved: false, returnNull: false, returnEmptyString: true, returnObjects: false, joinArrays: false, returnedObjectHandler: false, parseMissingKeyHandler: false, appendNamespaceToMissingKey: false, appendNamespaceToCIMode: false, overloadTranslationOptionHandler: (n4) => {
  let e = {};
  if (typeof n4[1] == "object" && (e = n4[1]), g(n4[1]) && (e.defaultValue = n4[1]), g(n4[2]) && (e.tDescription = n4[2]), typeof n4[2] == "object" || typeof n4[3] == "object") {
    let t = n4[3] || n4[2];
    Object.keys(t).forEach((s) => {
      e[s] = t[s];
    });
  }
  return e;
}, interpolation: { escapeValue: true, format: (n4) => n4, prefix: "{{", suffix: "}}", formatSeparator: ",", unescapePrefix: "-", nestingPrefix: "$t(", nestingSuffix: ")", nestingOptionsSeparator: ",", maxReplaces: 1e3, skipOnVariables: true }, cacheInBuiltFormats: true }), Zt = (n4) => (g(n4.ns) && (n4.ns = [n4.ns]), g(n4.fallbackLng) && (n4.fallbackLng = [n4.fallbackLng]), g(n4.fallbackNS) && (n4.fallbackNS = [n4.fallbackNS]), n4.supportedLngs?.indexOf?.("cimode") < 0 && (n4.supportedLngs = n4.supportedLngs.concat(["cimode"])), typeof n4.initImmediate == "boolean" && (n4.initAsync = n4.initImmediate), n4), me = () => {
}, Kn = (n4) => {
  Object.getOwnPropertyNames(Object.getPrototypeOf(n4)).forEach((t) => {
    typeof n4[t] == "function" && (n4[t] = n4[t].bind(n4));
  });
}, tt = class n3 extends B {
  constructor(e = {}, t) {
    if (super(), this.options = Zt(e), this.services = {}, this.logger = k, this.modules = { external: [] }, Kn(this), t && !this.isInitialized && !e.isClone) {
      if (!this.options.initAsync) return this.init(e, t), this;
      setTimeout(() => {
        this.init(e, t);
      }, 0);
    }
  }
  init(e = {}, t) {
    this.isInitializing = true, typeof e == "function" && (t = e, e = {}), e.defaultNS == null && e.ns && (g(e.ns) ? e.defaultNS = e.ns : e.ns.indexOf("translation") < 0 && (e.defaultNS = e.ns[0]));
    let s = Bt();
    this.options = { ...s, ...this.options, ...Zt(e) }, this.options.interpolation = { ...s.interpolation, ...this.options.interpolation }, e.keySeparator !== void 0 && (this.options.userDefinedKeySeparator = e.keySeparator), e.nsSeparator !== void 0 && (this.options.userDefinedNsSeparator = e.nsSeparator);
    let i = (l) => l ? typeof l == "function" ? new l() : l : null;
    if (!this.options.isClone) {
      this.modules.logger ? k.init(i(this.modules.logger), this.options) : k.init(null, this.options);
      let l;
      this.modules.formatter ? l = this.modules.formatter : l = Xe;
      let d = new be(this.options);
      this.store = new we(this.options.resources, this.options);
      let u = this.services;
      u.logger = k, u.resourceStore = this.store, u.languageUtils = d, u.pluralResolver = new Ye(d, { prepend: this.options.pluralSeparator, simplifyPluralSuffix: this.options.simplifyPluralSuffix }), this.options.interpolation.format && this.options.interpolation.format !== s.interpolation.format && this.logger.deprecate("init: you are still using the legacy format function, please use the new approach: https://www.i18next.com/translation-function/formatting"), l && (!this.options.interpolation.format || this.options.interpolation.format === s.interpolation.format) && (u.formatter = i(l), u.formatter.init && u.formatter.init(u, this.options), this.options.interpolation.format = u.formatter.format.bind(u.formatter)), u.interpolator = new qe(this.options), u.utils = { hasLoadedNamespace: this.hasLoadedNamespace.bind(this) }, u.backendConnector = new et(i(this.modules.backend), u.resourceStore, u, this.options), u.backendConnector.on("*", (f, ...h) => {
        this.emit(f, ...h);
      }), this.modules.languageDetector && (u.languageDetector = i(this.modules.languageDetector), u.languageDetector.init && u.languageDetector.init(u, this.options.detection, this.options)), this.modules.i18nFormat && (u.i18nFormat = i(this.modules.i18nFormat), u.i18nFormat.init && u.i18nFormat.init(this)), this.translator = new ye(this.services, this.options), this.translator.on("*", (f, ...h) => {
        this.emit(f, ...h);
      }), this.modules.external.forEach((f) => {
        f.init && f.init(this);
      });
    }
    if (this.format = this.options.interpolation.format, t || (t = me), this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
      let l = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
      l.length > 0 && l[0] !== "dev" && (this.options.lng = l[0]);
    }
    !this.services.languageDetector && !this.options.lng && this.logger.warn("init: no languageDetector is used and no lng is defined"), ["getResource", "hasResourceBundle", "getResourceBundle", "getDataByLanguage"].forEach((l) => {
      this[l] = (...d) => this.store[l](...d);
    }), ["addResource", "addResources", "addResourceBundle", "removeResourceBundle"].forEach((l) => {
      this[l] = (...d) => (this.store[l](...d), this);
    });
    let a = se(), c = () => {
      let l = (d, u) => {
        this.isInitializing = false, this.isInitialized && !this.initializedStoreOnce && this.logger.warn("init: i18next is already initialized. You should call init just once!"), this.isInitialized = true, this.options.isClone || this.logger.log("initialized", this.options), this.emit("initialized", this.options), a.resolve(u), t(d, u);
      };
      if (this.languages && !this.isInitialized) return l(null, this.t.bind(this));
      this.changeLanguage(this.options.lng, l);
    };
    return this.options.resources || !this.options.initAsync ? c() : setTimeout(c, 0), a;
  }
  loadResources(e, t = me) {
    let s = t, i = g(e) ? e : this.language;
    if (typeof e == "function" && (s = e), !this.options.resources || this.options.partialBundledLanguages) {
      if (i?.toLowerCase() === "cimode" && (!this.options.preload || this.options.preload.length === 0)) return s();
      let o = [], r = (a) => {
        if (!a || a === "cimode") return;
        this.services.languageUtils.toResolveHierarchy(a).forEach((l) => {
          l !== "cimode" && o.indexOf(l) < 0 && o.push(l);
        });
      };
      i ? r(i) : this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach((c) => r(c)), this.options.preload?.forEach?.((a) => r(a)), this.services.backendConnector.load(o, this.options.ns, (a) => {
        !a && !this.resolvedLanguage && this.language && this.setResolvedLanguage(this.language), s(a);
      });
    } else s(null);
  }
  reloadResources(e, t, s) {
    let i = se();
    return typeof e == "function" && (s = e, e = void 0), typeof t == "function" && (s = t, t = void 0), e || (e = this.languages), t || (t = this.options.ns), s || (s = me), this.services.backendConnector.reload(e, t, (o) => {
      i.resolve(), s(o);
    }), i;
  }
  use(e) {
    if (!e) throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
    if (!e.type) throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
    return e.type === "backend" && (this.modules.backend = e), (e.type === "logger" || e.log && e.warn && e.error) && (this.modules.logger = e), e.type === "languageDetector" && (this.modules.languageDetector = e), e.type === "i18nFormat" && (this.modules.i18nFormat = e), e.type === "postProcessor" && Qt.addPostProcessor(e), e.type === "formatter" && (this.modules.formatter = e), e.type === "3rdParty" && this.modules.external.push(e), this;
  }
  setResolvedLanguage(e) {
    if (!(!e || !this.languages) && !(["cimode", "dev"].indexOf(e) > -1)) {
      for (let t = 0; t < this.languages.length; t++) {
        let s = this.languages[t];
        if (!(["cimode", "dev"].indexOf(s) > -1) && this.store.hasLanguageSomeTranslations(s)) {
          this.resolvedLanguage = s;
          break;
        }
      }
      !this.resolvedLanguage && this.languages.indexOf(e) < 0 && this.store.hasLanguageSomeTranslations(e) && (this.resolvedLanguage = e, this.languages.unshift(e));
    }
  }
  changeLanguage(e, t) {
    this.isLanguageChangingTo = e;
    let s = se();
    this.emit("languageChanging", e);
    let i = (a) => {
      this.language = a, this.languages = this.services.languageUtils.toResolveHierarchy(a), this.resolvedLanguage = void 0, this.setResolvedLanguage(a);
    }, o = (a, c) => {
      c ? this.isLanguageChangingTo === e && (i(c), this.translator.changeLanguage(c), this.isLanguageChangingTo = void 0, this.emit("languageChanged", c), this.logger.log("languageChanged", c)) : this.isLanguageChangingTo = void 0, s.resolve((...l) => this.t(...l)), t && t(a, (...l) => this.t(...l));
    }, r = (a) => {
      !e && !a && this.services.languageDetector && (a = []);
      let c = g(a) ? a : a && a[0], l = this.store.hasLanguageSomeTranslations(c) ? c : this.services.languageUtils.getBestMatchFromCodes(g(a) ? [a] : a);
      l && (this.language || i(l), this.translator.language || this.translator.changeLanguage(l), this.services.languageDetector?.cacheUserLanguage?.(l)), this.loadResources(l, (d) => {
        o(d, l);
      });
    };
    return !e && this.services.languageDetector && !this.services.languageDetector.async ? r(this.services.languageDetector.detect()) : !e && this.services.languageDetector && this.services.languageDetector.async ? this.services.languageDetector.detect.length === 0 ? this.services.languageDetector.detect().then(r) : this.services.languageDetector.detect(r) : r(e), s;
  }
  getFixedT(e, t, s) {
    let i = (o, r, ...a) => {
      let c;
      typeof r != "object" ? c = this.options.overloadTranslationOptionHandler([o, r].concat(a)) : c = { ...r }, c.lng = c.lng || i.lng, c.lngs = c.lngs || i.lngs, c.ns = c.ns || i.ns, c.keyPrefix !== "" && (c.keyPrefix = c.keyPrefix || s || i.keyPrefix);
      let l = this.options.keySeparator || ".", d;
      return c.keyPrefix && Array.isArray(o) ? d = o.map((u) => (typeof u == "function" && (u = Qe(u, { ...this.options, ...r })), `${c.keyPrefix}${l}${u}`)) : (typeof o == "function" && (o = Qe(o, { ...this.options, ...r })), d = c.keyPrefix ? `${c.keyPrefix}${l}${o}` : o), this.t(d, c);
    };
    return g(e) ? i.lng = e : i.lngs = e, i.ns = t, i.keyPrefix = s, i;
  }
  t(...e) {
    return this.translator?.translate(...e);
  }
  exists(...e) {
    return this.translator?.exists(...e);
  }
  setDefaultNamespace(e) {
    this.options.defaultNS = e;
  }
  hasLoadedNamespace(e, t = {}) {
    if (!this.isInitialized) return this.logger.warn("hasLoadedNamespace: i18next was not initialized", this.languages), false;
    if (!this.languages || !this.languages.length) return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty", this.languages), false;
    let s = t.lng || this.resolvedLanguage || this.languages[0], i = this.options ? this.options.fallbackLng : false, o = this.languages[this.languages.length - 1];
    if (s.toLowerCase() === "cimode") return true;
    let r = (a, c) => {
      let l = this.services.backendConnector.state[`${a}|${c}`];
      return l === -1 || l === 0 || l === 2;
    };
    if (t.precheck) {
      let a = t.precheck(this, r);
      if (a !== void 0) return a;
    }
    return !!(this.hasResourceBundle(s, e) || !this.services.backendConnector.backend || this.options.resources && !this.options.partialBundledLanguages || r(s, e) && (!i || r(o, e)));
  }
  loadNamespaces(e, t) {
    let s = se();
    return this.options.ns ? (g(e) && (e = [e]), e.forEach((i) => {
      this.options.ns.indexOf(i) < 0 && this.options.ns.push(i);
    }), this.loadResources((i) => {
      s.resolve(), t && t(i);
    }), s) : (t && t(), Promise.resolve());
  }
  loadLanguages(e, t) {
    let s = se();
    g(e) && (e = [e]);
    let i = this.options.preload || [], o = e.filter((r) => i.indexOf(r) < 0 && this.services.languageUtils.isSupportedCode(r));
    return o.length ? (this.options.preload = i.concat(o), this.loadResources((r) => {
      s.resolve(), t && t(r);
    }), s) : (t && t(), Promise.resolve());
  }
  dir(e) {
    if (e || (e = this.resolvedLanguage || (this.languages?.length > 0 ? this.languages[0] : this.language)), !e) return "rtl";
    try {
      let i = new Intl.Locale(e);
      if (i && i.getTextInfo) {
        let o = i.getTextInfo();
        if (o && o.direction) return o.direction;
      }
    } catch {
    }
    let t = ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam", "ckb"], s = this.services?.languageUtils || new be(Bt());
    return e.toLowerCase().indexOf("-latn") > 1 ? "ltr" : t.indexOf(s.getLanguagePartFromCode(e)) > -1 || e.toLowerCase().indexOf("-arab") > 1 ? "rtl" : "ltr";
  }
  static createInstance(e = {}, t) {
    let s = new n3(e, t);
    return s.createInstance = n3.createInstance, s;
  }
  cloneInstance(e = {}, t = me) {
    let s = e.forkResourceStore;
    s && delete e.forkResourceStore;
    let i = { ...this.options, ...e, isClone: true }, o = new n3(i);
    if ((e.debug !== void 0 || e.prefix !== void 0) && (o.logger = o.logger.clone(e)), ["store", "services", "language"].forEach((a) => {
      o[a] = this[a];
    }), o.services = { ...this.services }, o.services.utils = { hasLoadedNamespace: o.hasLoadedNamespace.bind(o) }, s) {
      let a = Object.keys(this.store.data).reduce((c, l) => (c[l] = { ...this.store.data[l] }, c[l] = Object.keys(c[l]).reduce((d, u) => (d[u] = { ...c[l][u] }, d), c[l]), c), {});
      o.store = new we(a, i), o.services.resourceStore = o.store;
    }
    return o.translator = new ye(o.services, i), o.translator.on("*", (a, ...c) => {
      o.emit(a, ...c);
    }), o.init(i, t), o.translator.options = i, o.translator.backendConnector.services.utils = { hasLoadedNamespace: o.hasLoadedNamespace.bind(o) }, o;
  }
  toJSON() {
    return { options: this.options, store: this.store, language: this.language, languages: this.languages, resolvedLanguage: this.resolvedLanguage };
  }
}, y = tt.createInstance();
y.createInstance;
y.dir;
y.init;
y.loadResources;
y.reloadResources;
y.use;
y.changeLanguage;
y.getFixedT;
y.t;
y.exists;
y.setDefaultNamespace;
y.hasLoadedNamespace;
y.loadNamespaces;
y.loadLanguages;
var { slice: zn, forEach: Jn } = [];
function Bn(n4) {
  return Jn.call(zn.call(arguments, 1), (e) => {
    if (e) for (let t in e) n4[t] === void 0 && (n4[t] = e[t]);
  }), n4;
}
function Zn(n4) {
  return typeof n4 != "string" ? false : [/<\s*script.*?>/i, /<\s*\/\s*script\s*>/i, /<\s*img.*?on\w+\s*=/i, /<\s*\w+\s*on\w+\s*=.*?>/i, /javascript\s*:/i, /vbscript\s*:/i, /expression\s*\(/i, /eval\s*\(/i, /alert\s*\(/i, /document\.cookie/i, /document\.write\s*\(/i, /window\.location/i, /innerHTML/i].some((t) => t.test(n4));
}
var qt = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/, Gn = function(n4, e) {
  let s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : { path: "/" }, i = encodeURIComponent(e), o = `${n4}=${i}`;
  if (s.maxAge > 0) {
    let r = s.maxAge - 0;
    if (Number.isNaN(r)) throw new Error("maxAge should be a Number");
    o += `; Max-Age=${Math.floor(r)}`;
  }
  if (s.domain) {
    if (!qt.test(s.domain)) throw new TypeError("option domain is invalid");
    o += `; Domain=${s.domain}`;
  }
  if (s.path) {
    if (!qt.test(s.path)) throw new TypeError("option path is invalid");
    o += `; Path=${s.path}`;
  }
  if (s.expires) {
    if (typeof s.expires.toUTCString != "function") throw new TypeError("option expires is invalid");
    o += `; Expires=${s.expires.toUTCString()}`;
  }
  if (s.httpOnly && (o += "; HttpOnly"), s.secure && (o += "; Secure"), s.sameSite) switch (typeof s.sameSite == "string" ? s.sameSite.toLowerCase() : s.sameSite) {
    case true:
      o += "; SameSite=Strict";
      break;
    case "lax":
      o += "; SameSite=Lax";
      break;
    case "strict":
      o += "; SameSite=Strict";
      break;
    case "none":
      o += "; SameSite=None";
      break;
    default:
      throw new TypeError("option sameSite is invalid");
  }
  return s.partitioned && (o += "; Partitioned"), o;
}, Xt = { create(n4, e, t, s) {
  let i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : { path: "/", sameSite: "strict" };
  t && (i.expires = /* @__PURE__ */ new Date(), i.expires.setTime(i.expires.getTime() + t * 60 * 1e3)), s && (i.domain = s), document.cookie = Gn(n4, e, i);
}, read(n4) {
  let e = `${n4}=`, t = document.cookie.split(";");
  for (let s = 0; s < t.length; s++) {
    let i = t[s];
    for (; i.charAt(0) === " "; ) i = i.substring(1, i.length);
    if (i.indexOf(e) === 0) return i.substring(e.length, i.length);
  }
  return null;
}, remove(n4, e) {
  this.create(n4, "", -1, e);
} }, Qn = { name: "cookie", lookup(n4) {
  let { lookupCookie: e } = n4;
  if (e && typeof document < "u") return Xt.read(e) || void 0;
}, cacheUserLanguage(n4, e) {
  let { lookupCookie: t, cookieMinutes: s, cookieDomain: i, cookieOptions: o } = e;
  t && typeof document < "u" && Xt.create(t, n4, s, i, o);
} }, Yn = { name: "querystring", lookup(n4) {
  let { lookupQuerystring: e } = n4, t;
  if (typeof window < "u") {
    let { search: s } = window.location;
    !window.location.search && window.location.hash?.indexOf("?") > -1 && (s = window.location.hash.substring(window.location.hash.indexOf("?")));
    let o = s.substring(1).split("&");
    for (let r = 0; r < o.length; r++) {
      let a = o[r].indexOf("=");
      a > 0 && o[r].substring(0, a) === e && (t = o[r].substring(a + 1));
    }
  }
  return t;
} }, qn = { name: "hash", lookup(n4) {
  let { lookupHash: e, lookupFromHashIndex: t } = n4, s;
  if (typeof window < "u") {
    let { hash: i } = window.location;
    if (i && i.length > 2) {
      let o = i.substring(1);
      if (e) {
        let r = o.split("&");
        for (let a = 0; a < r.length; a++) {
          let c = r[a].indexOf("=");
          c > 0 && r[a].substring(0, c) === e && (s = r[a].substring(c + 1));
        }
      }
      if (s) return s;
      if (!s && t > -1) {
        let r = i.match(/\/([a-zA-Z-]*)/g);
        return Array.isArray(r) ? r[typeof t == "number" ? t : 0]?.replace("/", "") : void 0;
      }
    }
  }
  return s;
} }, Z = null, en = () => {
  if (Z !== null) return Z;
  try {
    if (Z = typeof window < "u" && window.localStorage !== null, !Z) return false;
    let n4 = "i18next.translate.boo";
    window.localStorage.setItem(n4, "foo"), window.localStorage.removeItem(n4);
  } catch {
    Z = false;
  }
  return Z;
}, Xn = { name: "localStorage", lookup(n4) {
  let { lookupLocalStorage: e } = n4;
  if (e && en()) return window.localStorage.getItem(e) || void 0;
}, cacheUserLanguage(n4, e) {
  let { lookupLocalStorage: t } = e;
  t && en() && window.localStorage.setItem(t, n4);
} }, G = null, tn = () => {
  if (G !== null) return G;
  try {
    if (G = typeof window < "u" && window.sessionStorage !== null, !G) return false;
    let n4 = "i18next.translate.boo";
    window.sessionStorage.setItem(n4, "foo"), window.sessionStorage.removeItem(n4);
  } catch {
    G = false;
  }
  return G;
}, es = { name: "sessionStorage", lookup(n4) {
  let { lookupSessionStorage: e } = n4;
  if (e && tn()) return window.sessionStorage.getItem(e) || void 0;
}, cacheUserLanguage(n4, e) {
  let { lookupSessionStorage: t } = e;
  t && tn() && window.sessionStorage.setItem(t, n4);
} }, ts = { name: "navigator", lookup(n4) {
  let e = [];
  if (typeof navigator < "u") {
    let { languages: t, userLanguage: s, language: i } = navigator;
    if (t) for (let o = 0; o < t.length; o++) e.push(t[o]);
    s && e.push(s), i && e.push(i);
  }
  return e.length > 0 ? e : void 0;
} }, ns = { name: "htmlTag", lookup(n4) {
  let { htmlTag: e } = n4, t, s = e || (typeof document < "u" ? document.documentElement : null);
  return s && typeof s.getAttribute == "function" && (t = s.getAttribute("lang")), t;
} }, ss = { name: "path", lookup(n4) {
  let { lookupFromPathIndex: e } = n4;
  if (typeof window > "u") return;
  let t = window.location.pathname.match(/\/([a-zA-Z-]*)/g);
  return Array.isArray(t) ? t[typeof e == "number" ? e : 0]?.replace("/", "") : void 0;
} }, is = { name: "subdomain", lookup(n4) {
  let { lookupFromSubdomainIndex: e } = n4, t = typeof e == "number" ? e + 1 : 1, s = typeof window < "u" && window.location?.hostname?.match(/^(\w{2,5})\.(([a-z0-9-]{1,63}\.[a-z]{2,6})|localhost)/i);
  if (s) return s[t];
} }, nn = false;
try {
  document.cookie, nn = true;
} catch {
}
var sn = ["querystring", "cookie", "localStorage", "sessionStorage", "navigator", "htmlTag"];
nn || sn.splice(1, 1);
var os = () => ({ order: sn, lookupQuerystring: "lng", lookupCookie: "i18next", lookupLocalStorage: "i18nextLng", lookupSessionStorage: "i18nextLng", caches: ["localStorage"], excludeCacheFor: ["cimode"], convertDetectedLanguage: (n4) => n4 }), re = class {
  constructor(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.type = "languageDetector", this.detectors = {}, this.init(e, t);
  }
  init() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : { languageUtils: {} }, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    this.services = e, this.options = Bn(t, this.options || {}, os()), typeof this.options.convertDetectedLanguage == "string" && this.options.convertDetectedLanguage.indexOf("15897") > -1 && (this.options.convertDetectedLanguage = (i) => i.replace("-", "_")), this.options.lookupFromUrlIndex && (this.options.lookupFromPathIndex = this.options.lookupFromUrlIndex), this.i18nOptions = s, this.addDetector(Qn), this.addDetector(Yn), this.addDetector(Xn), this.addDetector(es), this.addDetector(ts), this.addDetector(ns), this.addDetector(ss), this.addDetector(is), this.addDetector(qn);
  }
  addDetector(e) {
    return this.detectors[e.name] = e, this;
  }
  detect() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.options.order, t = [];
    return e.forEach((s) => {
      if (this.detectors[s]) {
        let i = this.detectors[s].lookup(this.options);
        i && typeof i == "string" && (i = [i]), i && (t = t.concat(i));
      }
    }), t = t.filter((s) => s != null && !Zn(s)).map((s) => this.options.convertDetectedLanguage(s)), this.services && this.services.languageUtils && this.services.languageUtils.getBestMatchFromCodes ? t : t.length > 0 ? t[0] : null;
  }
  cacheUserLanguage(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.options.caches;
    t && (this.options.excludeCacheFor && this.options.excludeCacheFor.indexOf(e) > -1 || t.forEach((s) => {
      this.detectors[s] && this.detectors[s].cacheUserLanguage(e, this.options);
    }));
  }
};
re.type = "languageDetector";
y.use(re).init({ fallbackLng: "en", resources: { en: { translation: Mt }, fr: { translation: Ft } } });
function st(n4) {
  return JSON.parse(n4);
}
function rn(n4) {
  return JSON.stringify(n4);
}
async function an(n4, e, t = 2e3) {
  let s = (a) => new Promise((c, l) => {
    let d;
    try {
      d = new WebSocket(a);
    } catch {
      l(new Error("Impossible d'initialiser le WebSocket"));
      return;
    }
    let u = setTimeout(() => {
      d.close(), l(new Error("Timeout de connexion"));
    }, t);
    d.onopen = () => {
      clearTimeout(u), c(d);
    }, d.onerror = () => {
      clearTimeout(u), l(new Error("Erreur WebSocket"));
    }, d.onclose = () => {
      clearTimeout(u), l(new Error("Connexion fermée avant l'ouverture"));
    };
  }), i = `wss://${n4}${e}`;
  try {
    let a = await s(i);
    return console.log("Connecté en WSS :", i), a;
  } catch {
    console.warn("WSS non disponible, tentative WS…");
  }
  let o = `ws://${n4}${e}`, r = await s(o);
  return console.log("Connecté en WS :", o), r;
}
var U = class {
  idMessage;
  data;
  constructor(e, t) {
    this.idMessage = e, this.data = t;
  }
  toJSON() {
    return JSON.stringify({ idMessage: this.idMessage, data: this.data });
  }
}, Se = class extends U {
}, ve = class extends U {
}, Oe = class {
  idMessage;
  constructor(e, t) {
    this.idMessage = e, Object.assign(this, t);
  }
  toJSON() {
    let { idMessage: e, ...t } = this;
    return JSON.stringify({ idMessage: e, ...t });
  }
}, Ne = class extends U {
}, Le = class extends U {
}, Ce = class extends U {
};
var S;
(function(n4) {
  n4.INIT = "init", n4.DOCUMENT_PATH = "documentPath", n4.DOC_IS_AVAILABLE = "docIsAvailable", n4.GET_TEXT_ZONES = "getTextZones", n4.ALLOW_EDIT = "allowEdit", n4.REPLACE = "replace", n4.SELECT = "select", n4.RETURN_TO_DOCUMENT = "returnToDocument", n4.NEW_CORRECTION_MEMORY = "newCorrectionMemory", n4.SEND = "send", n4.ANTIOOPS_RESPONSE = "antiOopsResponse";
})(S || (S = {}));
var Ae;
(function(n4) {
  n4.launchTool = "LaunchTool", n4.antiOops = "AntiOops";
})(Ae || (Ae = {}));
var Q;
(function(n4) {
  n4.corrector = "Corrector", n4.dictionaries = "Dictionaries", n4.guides = "Guides";
})(Q || (Q = {}));
var Y = class {
  toolApi;
  constructor(e) {
    this.toolApi = e;
  }
  toJSON() {
    return JSON.stringify({ toolApi: this.toolApi, message: Ae.launchTool, apiVersion: 2 });
  }
}, Ee = class {
  subject;
  body;
  recipients;
  id;
  constructor(e, t, s, i) {
    this.subject = e, this.body = t, this.recipients = s, this.id = i;
  }
  toJSON() {
    return JSON.stringify({ subject: this.subject, body: this.body, recipients: this.recipients, id: this.id, message: Ae.antiOops, apiVersion: 2 });
  }
};
var it = class {
  wordProcessorAgent;
  websocket;
  port;
  receivedPackets = [];
  initialized = false;
  getWebSocketPort;
  messageHandlers;
  constructor(e, t) {
    this.wordProcessorAgent = e, this.getWebSocketPort = t, this.messageHandlers = { [S.INIT]: this.handleInitMessage.bind(this), [S.DOCUMENT_PATH]: this.handleDocumentPath.bind(this), [S.DOC_IS_AVAILABLE]: this.handleDocIsAvailable.bind(this), [S.GET_TEXT_ZONES]: this.handleGetTextZones.bind(this), [S.ALLOW_EDIT]: this.handleAllowEdit.bind(this), [S.REPLACE]: this.handleReplace.bind(this), [S.SELECT]: this.handleSelect.bind(this), [S.RETURN_TO_DOCUMENT]: this.handleReturnToDocument.bind(this), [S.NEW_CORRECTION_MEMORY]: this.handleNewCorrectionMemory.bind(this), [S.SEND]: this.handleSend.bind(this), [S.ANTIOOPS_RESPONSE]: this.handleAntiOopsResponse.bind(this) };
  }
  async connectWithAntidote() {
    this.websocket || await this.startWS();
  }
  launchCorrector() {
    if (this.initialized) {
      let e = new Y(Q.corrector);
      this.sendMessage(e);
    }
  }
  launchDictionaries() {
    if (this.initialized) {
      let e = new Y(Q.dictionaries);
      this.sendMessage(e);
    }
  }
  launchGuides() {
    if (this.initialized) {
      let e = new Y(Q.guides);
      this.sendMessage(e);
    }
  }
  launchAntiOops(e, t, s, i) {
    if (this.initialized) {
      let o = new Ee(e, t, s, i);
      this.sendMessage(o);
    }
  }
  close() {
    this.websocket && this.websocket.close();
  }
  async startWS() {
    try {
      this.port = await this.getWebSocketPort();
    } catch (e) {
      throw e || new Error("Fail to get the WebSocket port");
    }
    await this.runWebSocket();
  }
  async runWebSocket() {
    this.websocket = await an(`127.0.0.1:${this.port}`, "/", 2e3), this.initialized = true, this.websocket.addEventListener("close", () => {
      this.initialized = false, this.websocket = void 0, this.wordProcessorAgent.sessionEnded();
    }), this.websocket.addEventListener("message", (e) => {
      let t = st(e.data);
      console.debug("received:", t), this.digest(t);
    });
  }
  sendMessage(e) {
    let t = { idFrame: 0, totalFrame: 1, data: e.toJSON() };
    console.debug("send_message:", e.toJSON()), this.websocket ? this.websocket.send(rn(t)) : console.debug("WebSocket closed");
  }
  digest(e) {
    if (this.receivedPackets.length < e.totalFrame && (this.receivedPackets = Array(e.totalFrame).fill(null)), this.receivedPackets[e.idFrame] = e.data, cs(this.receivedPackets)) {
      let t = ls(this.receivedPackets);
      this.receivedPackets = [], this.handleCompleteMessage(t);
    }
  }
  handleInitMessage(e) {
    this.wordProcessorAgent.sessionStarted();
    let t = this.wordProcessorAgent.configuration(), s = new Oe(e.idMessage, t);
    this.sendMessage(s);
  }
  handleDocumentPath(e) {
    let t = new Se(e.idMessage, this.wordProcessorAgent.documentPath());
    this.sendMessage(t);
  }
  handleDocIsAvailable(e) {
    let t = new ve(e.idMessage, this.wordProcessorAgent.textZonesAvailable());
    this.sendMessage(t);
  }
  handleGetTextZones(e) {
    let t = as(e), s = this.wordProcessorAgent.zonesToCorrect(t), i = new Ce(e.idMessage, s);
    this.sendMessage(i);
  }
  handleAllowEdit(e) {
    let t = e.data || {}, s = new Ne(e.idMessage, this.wordProcessorAgent.allowEdit(t));
    this.sendMessage(s);
  }
  handleReplace(e) {
    let t = e.data || {}, s = new Le(e.idMessage, this.wordProcessorAgent.correctIntoWordProcessor(t));
    this.sendMessage(s);
  }
  handleSelect(e) {
    let t = e.data || {};
    this.wordProcessorAgent.selectInterval(t);
  }
  handleReturnToDocument(e) {
    this.wordProcessorAgent.returnToWordProcessor();
  }
  handleNewCorrectionMemory(e) {
    let t = e.data || {};
    this.wordProcessorAgent.newCorrectionMemory(t);
  }
  handleSend(e) {
    this.wordProcessorAgent.send();
  }
  handleAntiOopsResponse(e) {
    let t = e.data || {};
    this.wordProcessorAgent.responseAntiOops(t);
  }
  handleCompleteMessage(e) {
    let t = st(e), s = this.messageHandlers[t.message];
    s ? s(t) : console.error("Unable to process message", e);
  }
};
function as(n4) {
  return n4.data ? n4.data : n4.forActiveSelection != null ? { forActiveSelection: n4.forActiveSelection } : {};
}
function cs(n4) {
  return n4.every((e) => e !== null);
}
function ls(n4) {
  return n4.filter((e) => e !== null).join("");
}
var ot = class {
  impl;
  constructor(e, t) {
    this.impl = new it(e, t);
  }
  async connectWithAntidote() {
    await this.impl.connectWithAntidote();
  }
  launchCorrector() {
    this.impl.launchCorrector();
  }
  launchDictionaries() {
    this.impl.launchDictionaries();
  }
  launchGuides() {
    this.impl.launchGuides();
  }
  launchAntiOops(e, t, s, i) {
    this.impl.launchAntiOops(e, t, s, i);
  }
  close() {
    this.impl.close();
  }
};
var ae = class {
  sessionStarted() {
  }
  sessionEnded() {
  }
  textZonesAvailable() {
    return true;
  }
  documentPath() {
    return "";
  }
  selectInterval(e) {
  }
  newCorrectionMemory(e) {
  }
  putFocusOnDocument() {
  }
  returnToWordProcessor() {
  }
  responseAntiOops(e) {
  }
  send() {
  }
};
var at;
(function(n4) {
  n4.errors = "errors", n4.typography = "typography", n4.attachments = "attachments", n4.inactiveLanguage = "inactiveLanguage", n4.abrasiveTone = "abrasiveTone";
})(at || (at = {}));
var ct;
(function(n4) {
  n4.text = "text", n4.markdown = "markdown", n4.latex = "latex", n4.subrip = "subrip", n4.html = "html";
})(ct || (ct = {}));
var lt;
(function(n4) {
  n4.forcePath = "forcePath";
})(lt || (lt = {}));
var ut;
(function(n4) {
  n4.bold = "bold", n4.italic = "italic", n4.superscript = "superscript", n4.subscript = "subscript", n4.strike = "strike";
})(ut || (ut = {}));
const E_CANCELED = new Error("request for lock canceled");
var __awaiter$2 = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
class Semaphore {
  constructor(_value, _cancelError = E_CANCELED) {
    this._value = _value;
    this._cancelError = _cancelError;
    this._queue = [];
    this._weightedWaiters = [];
  }
  acquire(weight = 1, priority = 0) {
    if (weight <= 0)
      throw new Error(`invalid weight ${weight}: must be positive`);
    return new Promise((resolve, reject) => {
      const task = { resolve, reject, weight, priority };
      const i = findIndexFromEnd(this._queue, (other) => priority <= other.priority);
      if (i === -1 && weight <= this._value) {
        this._dispatchItem(task);
      } else {
        this._queue.splice(i + 1, 0, task);
      }
    });
  }
  runExclusive(callback_1) {
    return __awaiter$2(this, arguments, void 0, function* (callback, weight = 1, priority = 0) {
      const [value, release] = yield this.acquire(weight, priority);
      try {
        return yield callback(value);
      } finally {
        release();
      }
    });
  }
  waitForUnlock(weight = 1, priority = 0) {
    if (weight <= 0)
      throw new Error(`invalid weight ${weight}: must be positive`);
    if (this._couldLockImmediately(weight, priority)) {
      return Promise.resolve();
    } else {
      return new Promise((resolve) => {
        if (!this._weightedWaiters[weight - 1])
          this._weightedWaiters[weight - 1] = [];
        insertSorted(this._weightedWaiters[weight - 1], { resolve, priority });
      });
    }
  }
  isLocked() {
    return this._value <= 0;
  }
  getValue() {
    return this._value;
  }
  setValue(value) {
    this._value = value;
    this._dispatchQueue();
  }
  release(weight = 1) {
    if (weight <= 0)
      throw new Error(`invalid weight ${weight}: must be positive`);
    this._value += weight;
    this._dispatchQueue();
  }
  cancel() {
    this._queue.forEach((entry) => entry.reject(this._cancelError));
    this._queue = [];
  }
  _dispatchQueue() {
    this._drainUnlockWaiters();
    while (this._queue.length > 0 && this._queue[0].weight <= this._value) {
      this._dispatchItem(this._queue.shift());
      this._drainUnlockWaiters();
    }
  }
  _dispatchItem(item) {
    const previousValue = this._value;
    this._value -= item.weight;
    item.resolve([previousValue, this._newReleaser(item.weight)]);
  }
  _newReleaser(weight) {
    let called = false;
    return () => {
      if (called)
        return;
      called = true;
      this.release(weight);
    };
  }
  _drainUnlockWaiters() {
    if (this._queue.length === 0) {
      for (let weight = this._value; weight > 0; weight--) {
        const waiters = this._weightedWaiters[weight - 1];
        if (!waiters)
          continue;
        waiters.forEach((waiter) => waiter.resolve());
        this._weightedWaiters[weight - 1] = [];
      }
    } else {
      const queuedPriority = this._queue[0].priority;
      for (let weight = this._value; weight > 0; weight--) {
        const waiters = this._weightedWaiters[weight - 1];
        if (!waiters)
          continue;
        const i = waiters.findIndex((waiter) => waiter.priority <= queuedPriority);
        (i === -1 ? waiters : waiters.splice(0, i)).forEach(((waiter) => waiter.resolve()));
      }
    }
  }
  _couldLockImmediately(weight, priority) {
    return (this._queue.length === 0 || this._queue[0].priority < priority) && weight <= this._value;
  }
}
function insertSorted(a, v) {
  const i = findIndexFromEnd(a, (other) => v.priority <= other.priority);
  a.splice(i + 1, 0, v);
}
function findIndexFromEnd(a, predicate) {
  for (let i = a.length - 1; i >= 0; i--) {
    if (predicate(a[i])) {
      return i;
    }
  }
  return -1;
}
var __awaiter$1 = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
class Mutex {
  constructor(cancelError) {
    this._semaphore = new Semaphore(1, cancelError);
  }
  acquire() {
    return __awaiter$1(this, arguments, void 0, function* (priority = 0) {
      const [, releaser] = yield this._semaphore.acquire(1, priority);
      return releaser;
    });
  }
  runExclusive(callback, priority = 0) {
    return this._semaphore.runExclusive(() => callback(), 1, priority);
  }
  isLocked() {
    return this._semaphore.isLocked();
  }
  waitForUnlock(priority = 0) {
    return this._semaphore.waitForUnlock(1, priority);
  }
  release() {
    if (this._semaphore.isLocked())
      this._semaphore.release();
  }
  cancel() {
    return this._semaphore.cancel();
  }
}
function getUpdateDelayMS() {
  const updateDelayMS = window.localStorage.getItem("UPDATE_DELAY_MS");
  if (updateDelayMS) {
    return Number(updateDelayMS);
  }
  return 200;
}
class WordProcessorAgentOnlyOffice extends ae {
  constructor(title) {
    super();
    this.title = title;
    this.replacingQueue = [];
    this.mutexQueue = new Mutex();
    this.updatingByAntidote = false;
    this.mutexDocument = new Mutex();
    this.mutexUpdateText = new Mutex();
    this.isAvailable = true;
  }
  sessionStarted() {
    window.Asc.plugin.attachEditorEvent("onParagraphText", (data) => {
      if (!this.updatingByAntidote) {
        setTimeout(() => {
          if (!this.updatingByAntidote) {
            this._internalUpdateText();
          }
        }, getUpdateDelayMS());
      }
    });
  }
  sessionEnded() {
    super.sessionEnded();
    window.Asc.plugin.detachEditorEvent("onParagraphText");
    window.Asc.plugin.executeCommand("close", "");
    this.isAvailable = false;
  }
  _internalUpdateText() {
    this.mutexUpdateText.cancel();
    return this.mutexUpdateText.runExclusive(
      () => this.mutexDocument.runExclusive(
        () => this.updateText()
      )
    ).catch((err) => {
      if (err === E_CANCELED) {
        return;
      }
      throw err;
    });
  }
  correctIntoWordProcessor(params) {
    this.mutexQueue.runExclusive(() => {
      this.replacingQueue.push(params);
    }).then(() => {
      this.applyCorrections();
    });
    return true;
  }
  async applyCorrections() {
    await this.mutexDocument.runExclusive(async () => {
      this.updatingByAntidote = true;
      let params = await this.mutexQueue.runExclusive(() => {
        return this.replacingQueue.shift();
      });
      while (params) {
        await this.applyCorrection(params);
        params = await this.mutexQueue.runExclusive(() => {
          return this.replacingQueue.shift();
        });
      }
      this.updatingByAntidote = false;
    });
  }
  callCommand(func, isClose = false, isCalc = true) {
    return callCommand(func, isClose, isCalc);
  }
  executeMethod(name, params) {
    return executeMethod(name, params);
  }
}
class WordProcessorAgentOnlyOfficeDocument extends WordProcessorAgentOnlyOffice {
  constructor(title) {
    super(title);
    this.paragraphs = null;
    this.replacingQueue = [];
  }
  findIndex(pos, eager = false) {
    if (!this.paragraphs) {
      throw new Error("Data is empty");
    }
    let elementIndex = 0;
    if (eager) {
      while (elementIndex + 1 < this.paragraphs.length && this.paragraphs[elementIndex + 1].globalPos <= pos)
        elementIndex++;
    } else {
      while (elementIndex + 1 < this.paragraphs.length && this.paragraphs[elementIndex + 1].globalPos < pos)
        elementIndex++;
    }
    return elementIndex;
  }
  applyCorrection(params) {
    let elementIndex = this.findIndex(params.positionStartReplace, true);
    const globalPos = this.paragraphs[elementIndex].globalPos;
    let text = this.paragraphs[elementIndex].text;
    let newText = (text.substring(0, params.positionStartReplace - globalPos) + params.newString + text.substring(params.positionReplaceEnd - globalPos)).replace(/(\r\n)*$/, "");
    window.Asc.scope.paramsReplace = { elementIndex, text: newText };
    return this.callCommand(
      () => {
        const { elementIndex: elementIndex2, text: text2 } = Asc.scope.paramsReplace;
        var oDocument = Api.GetDocument();
        var oElement = oDocument.GetElement(elementIndex2);
        var oldText = oElement.GetText({ "Numbering": false }).replace(/(\r\n)*$/, "");
        oElement.Select();
        Api.ReplaceTextSmart([text2]);
        const newText2 = oElement.GetText({ "Numbering": false }).replace(/(\r\n)*$/, "");
        return {
          text: newText2,
          diff: newText2.length - oldText.length
        };
      },
      false,
      true
    ).then((res) => {
      this.paragraphs[elementIndex].text = res.text;
      for (let i = elementIndex + 1; i < this.paragraphs.length; i++) {
        this.paragraphs[i].globalPos += res.diff;
      }
    });
  }
  configuration() {
    return {
      documentTitle: this.title,
      activeMarkup: ct.text
    };
  }
  allowEdit(params) {
    return true;
  }
  textZonesAvailable() {
    if (this.replacingQueue.length > 0 && !this.mutexQueue.isLocked() && !this.mutexDocument.isLocked())
      return false;
    return !!this.paragraphs;
  }
  zonesToCorrect(_params) {
    const text = this.paragraphs.map((el) => el.text).join("\r\n\r\n");
    return [{
      text,
      zoneId: "",
      zoneIsFocused: true
    }];
  }
  updateText() {
    this.paragraphs = null;
    return this.callCommand(
      () => {
        const oDocument = Api.GetDocument();
        let paragraphs = [], globalPos = 0;
        for (let i = 0; i < oDocument.GetElementsCount(); i++) {
          const element = oDocument.GetElement(i);
          if (element.GetClassType() === "paragraph") {
            const text = element.GetText({ "Numbering": false }).replace(/(\r\n)*$/, "");
            paragraphs.push({ globalPos, text });
            globalPos += text.length;
          } else {
            paragraphs.push({ globalPos });
          }
        }
        return paragraphs;
      },
      false,
      false
    ).then((paragraphs) => {
      for (let i = 1; i < paragraphs.length; i++) {
        paragraphs[i].globalPos += 4 * i;
      }
      this.paragraphs = paragraphs;
    });
  }
}
class WordProcessorAgentOnlyOfficeUniversalSelection extends WordProcessorAgentOnlyOffice {
  constructor(title) {
    super(title);
    this.text = null;
    this.alternativeText = null;
  }
  configuration() {
    return {
      documentTitle: `${this.title} [selection]`,
      activeMarkup: ct.text,
      carriageReturn: "\r\n"
    };
  }
  applyCorrection(params) {
    this.text = this.text.substring(0, params.positionStartReplace) + params.newString + this.text.substring(params.positionReplaceEnd);
    const textArr = this.text.replace(/(?:\r\n)+$/, "").split(/(?:\r\n){2}|\t/g);
    return this.executeMethod("ReplaceTextSmart", [textArr, String.fromCharCode(160)]);
  }
  textZonesAvailable() {
    if (this.replacingQueue.length > 0 && !this.mutexQueue.isLocked() && !this.mutexDocument.isLocked())
      return false;
    return !!this.text;
  }
  allowEdit(params) {
    if (this.text)
      return true;
    return false;
  }
  zonesToCorrect(params) {
    return [
      {
        text: this.text ?? "Nothing to correct",
        zoneId: "",
        zoneIsFocused: true
      }
    ];
  }
  setAlternativeText(text) {
    this.alternativeText = text ? text.replace("\r\n", "\r\n\r\n") : null;
  }
  updateText() {
    this.text = null;
    return this.executeMethod("GetSelectedText", [{
      Numbering: false,
      Math: false,
      ParaSeparator: "\r\n\r\n",
      TableRowSeparator: "\r\n\r\n",
      TabSymbol: String.fromCharCode(160)
    }]).then((text) => {
      console.log(`The Text: ${JSON.stringify(text)}`);
      this.text = text === "" ? this.alternativeText : text;
      console.log(`This Text: ${JSON.stringify(this.text)}`);
    });
  }
}
function setupPlugin() {
  let wordProcessorAgent;
  const connectionErrorModal = {
    url: getFullUrl("connection-error.html"),
    // Same HTML as config variationnt
    description: window.Asc.plugin.tr("Error"),
    isVisual: true,
    EditorsSupport: ["word"],
    isModal: true,
    isInsideMode: false,
    initDataType: "none",
    initData: "",
    size: [350, 150],
    buttons: [
      {
        text: window.Asc.plugin.tr("Close"),
        primary: true
      }
    ]
  };
  let connectionErrorModalId;
  const launchCorrector = () => {
    xn.announcePresence();
    if (xn.isDetected()) {
      console.log("Antidote Connector is detected");
    }
    const agent = new ot(
      wordProcessorAgent,
      Settings.getForceSetPort() ? async () => Settings.getAntidotePort() : xn.isDetected() ? xn.getWebSocketPort : getWebSocketPort
    );
    agent.connectWithAntidote().then(() => agent.launchCorrector()).catch((error) => {
      const errorDialog = new window.Asc.PluginWindow();
      errorDialog.show(connectionErrorModal);
      connectionErrorModalId = errorDialog.id;
      console.log(error);
    });
  };
  window.Asc.plugin.init = (text) => {
    const alternativeText = text.length === 0 ? null : text;
    if (wordProcessorAgent && wordProcessorAgent.isAvailable) {
      if (!wordProcessorAgent.updatingByAntidote) {
        if (wordProcessorAgent instanceof WordProcessorAgentOnlyOfficeUniversalSelection) {
          setTimeout(() => {
            wordProcessorAgent.setAlternativeText(alternativeText);
            if (wordProcessorAgent && !wordProcessorAgent.updatingByAntidote) {
              wordProcessorAgent.updateText();
            }
          }, Settings.getUpdateDelayMS());
        }
      }
    } else {
      getDocumentTitle().then((title) => {
        switch (window.Asc.plugin.info.editorType) {
          case "word":
            if (!alternativeText) {
              wordProcessorAgent = new WordProcessorAgentOnlyOfficeDocument(
                title
              );
              break;
            }
          case "slide":
          case "cell":
            wordProcessorAgent = new WordProcessorAgentOnlyOfficeUniversalSelection(
              title
            );
            wordProcessorAgent.setAlternativeText(alternativeText);
            break;
        }
      }).then(() => wordProcessorAgent.updateText()).then(launchCorrector);
    }
  };
  window.Asc.plugin.button = (id, windowId) => {
    if (connectionErrorModalId && windowId === connectionErrorModalId) {
      window.Asc.plugin.executeCommand("close", "");
    }
  };
}
setupPlugin();
