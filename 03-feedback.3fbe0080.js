!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},r={},n=t.parcelRequired7c6;null==n&&((n=function(e){if(e in o)return o[e].exports;if(e in r){var t=r[e];delete r[e];var n={id:e,exports:{}};return o[e]=n,t.call(n.exports,n,n.exports),n.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){r[e]=t},t.parcelRequired7c6=n);var l,a=n("hwlyO"),f=n("1WSnx"),d={form:document.querySelector(".feedback-form")},i={};d.form.addEventListener("input",e(f).throttle((function(e){var t=e.target.value,o=e.target.name;i[o]=t,a.default.save("feedback-form-state",i)}),500)),l=a.default.load("feedback-form-state")||{},i=l,d.form.elements.email.value=(null==l?void 0:l.email)||"",d.form.elements.message.value=(null==l?void 0:l.message)||"",d.form.addEventListener("submit",(function(e){if(e.preventDefault(),!d.form.elements.email.value||!d.form.elements.message.value)return void console.log("error");console.log(i),i={},e.target.reset(),localStorage.removeItem("feedback-form-state")}))}();
//# sourceMappingURL=03-feedback.3fbe0080.js.map
