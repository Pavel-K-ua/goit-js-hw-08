function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var r={id:e,exports:{}};return o[e]=r,t.call(r.exports,r,r.exports),r.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){n[e]=t},t.parcelRequired7c6=r);var l=r("k6Lsx"),a=r("kEUo3");const f={form:document.querySelector(".feedback-form")};let s={};f.form.addEventListener("input",e(a).throttle((function(e){const t=e.target.value,o=e.target.name;s[o]=t,l.default.save("feedback-form-state",s)}),500)),function(){const e=l.default.load("feedback-form-state")||{};s=e,f.form.elements.email.value=e?.email||"",f.form.elements.message.value=e?.message||""}(),f.form.addEventListener("submit",(function(e){if(e.preventDefault(),""===f.form.elements.email.value||""===f.form.elements.message.value)return void console.log("please fill inputs");console.log(s),s={},e.target.reset(),localStorage.removeItem("feedback-form-state")}));
//# sourceMappingURL=03-feedback.5ade2ba0.js.map
