// ==UserScript==
// @name        Charity Overlay secret styles
// @namespace   faction.place.secret
// @description The most widely used overlay system on r/place.
// @icon        https://raw.githubusercontent.com/PlaceCharity/Charity/main/app/userscript/assets/icon.png
// @icon64      https://raw.githubusercontent.com/PlaceCharity/Charity/main/app/userscript/assets/icon64.png
// @version     0.2.9
// @author      Mikarific, Nagol
// @match       https://thesecretsproject.com/place*
// @run-at      document-start
// @connect     *
// @allFrames   true
// @supportURL  https://discord.gg/anBdazHcrH
// @homepageURL https://discord.gg/anBdazHcrH
// @license     MIT
// @require     https://greasemonkey.github.io/gm4-polyfill/gm4-polyfill.js
// @require     https://cdn.jsdelivr.net/npm/@violentmonkey/dom@2
// @require     https://cdn.jsdelivr.net/npm/@violentmonkey/ui@0.7
// @require     https://cdn.jsdelivr.net/npm/@violentmonkey/dom@2/dist/solid.min.js
// @require     https://cdn.jsdelivr.net/npm/@violentmonkey/shortcut@1
// @resource    mask-1-4 https://raw.githubusercontent.com/PlaceCharity/Charity/main/app/userscript/assets/masks/1-4.png
// @resource    mask-1-3 https://raw.githubusercontent.com/PlaceCharity/Charity/main/app/userscript/assets/masks/1-3.png
// @resource    mask-1-2 https://raw.githubusercontent.com/PlaceCharity/Charity/main/app/userscript/assets/masks/1-2.png
// @resource    mask-2-3 https://raw.githubusercontent.com/PlaceCharity/Charity/main/app/userscript/assets/masks/2-3.png
// @resource    mask-3-4 https://raw.githubusercontent.com/PlaceCharity/Charity/main/app/userscript/assets/masks/3-4.png
// @resource    settings https://raw.githubusercontent.com/PlaceCharity/Charity/main/app/userscript/assets/icons/settings.svg
// @resource    close https://raw.githubusercontent.com/PlaceCharity/Charity/main/app/userscript/assets/icons/close.svg
// @resource    back https://raw.githubusercontent.com/PlaceCharity/Charity/main/app/userscript/assets/icons/back.svg
// @resource    keyboard https://raw.githubusercontent.com/PlaceCharity/Charity/main/app/userscript/assets/icons/keyboard.svg
// @resource    version https://raw.githubusercontent.com/PlaceCharity/Charity/main/app/userscript/assets/version.png
// @resource    discord https://raw.githubusercontent.com/PlaceCharity/Charity/main/app/userscript/assets/icons/discord.svg
// @resource    github https://raw.githubusercontent.com/PlaceCharity/Charity/main/app/userscript/assets/icons/github.svg
// @resource    charity-logo https://raw.githubusercontent.com/PlaceCharity/Charity/main/app/userscript/assets/logo.png
// @resource    faction-pride https://raw.githubusercontent.com/PlaceCharity/Charity/main/app/userscript/assets/factions/pride.gif
// @resource    faction-osu https://raw.githubusercontent.com/PlaceCharity/Charity/main/app/userscript/assets/factions/osu.png
// @grant       GM.addValueChangeListener
// @grant       GM.deleteValue
// @grant       GM.getResourceUrl
// @grant       GM.getValue
// @grant       GM.registerMenuCommand
// @grant       GM.setValue
// @grant       GM.xmlHttpRequest
// @grant       GM_addStyle
// @grant       unsafeWindow
// ==/UserScript==

(function (solidJs, web, ui, shortcut) {
'use strict';

function _interopNamespaceDefault(e) {
var n = Object.create(null);
if (e) {
Object.keys(e).forEach(function (k) {
if (k !== 'default') {
var d = Object.getOwnPropertyDescriptor(e, k);
Object.defineProperty(n, k, d.get ? d : {
enumerable: true,
get: function () { return e[k]; }
});
}
});
}
n.default = e;
return Object.freeze(n);
}

var shortcut__namespace = /*#__PURE__*/_interopNamespaceDefault(shortcut);

var css_248z = "*,:after,:before{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 transparent;--un-ring-shadow:0 0 transparent;--un-shadow-inset: ;--un-shadow:0 0 transparent;--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgba(147,197,253,.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: }::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 transparent;--un-ring-shadow:0 0 transparent;--un-shadow-inset: ;--un-shadow:0 0 transparent;--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgba(147,197,253,.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: }.charity-overlay-container{pointer-events:none!important;position:absolute!important;transform-origin:top left!important}.charity-overlay{height:100%!important;image-rendering:-moz-crisp-edges;image-rendering:-webkit-crisp-edges;image-rendering:pixelated;image-rendering:crisp-edges;pointer-events:none!important;width:100%!important}.charity-settings-icon{--un-shadow:8px 8px 0px 0px var(--un-shadow-color,rgba(0,0,0,.75))!important;--un-bg-opacity:1!important;--un-border-opacity:1!important;align-items:center!important;background-color:rgb(255 255 255/var(--un-bg-opacity))!important;border-color:rgb(0 0 0/var(--un-border-opacity))!important;border-style:solid!important;border-width:3px!important;box-shadow:var(--un-ring-offset-shadow),var(--un-ring-shadow),var(--un-shadow)!important;box-sizing:content-box!important;display:flex!important;height:38px!important;justify-content:center!important;padding:0!important;position:relative!important;visibility:visible!important;width:38px!important}\n\n.charity-settings-icon:active,.charity-settings-icon:hover{--un-bg-opacity:1!important;background-color:rgb(255 255 255/var(--un-bg-opacity))!important}.charity-settings-icon:active{--un-scale-x:0.95!important;--un-scale-y:0.95!important;background-image:linear-gradient(rgba(0,0,0,.3) 0 0)!important;transform:translateX(var(--un-translate-x)) translateY(var(--un-translate-y)) translateZ(var(--un-translate-z)) rotate(var(--un-rotate)) rotateX(var(--un-rotate-x)) rotateY(var(--un-rotate-y)) rotate(var(--un-rotate-z)) skewX(var(--un-skew-x)) skewY(var(--un-skew-y)) scaleX(var(--un-scale-x)) scaleY(var(--un-scale-y)) scaleZ(var(--un-scale-z))!important}.charity-settings-icon:hover{background-image:linear-gradient(rgba(0,0,0,.2) 0 0)!important;cursor:pointer!important}.charity-settings-icon>img{margin:0!important;padding:8px!important;width:38px!important}.charity-panel{visibility:visible!important}.charity-panel-divider{--un-border-opacity:1!important;--un-border-top-opacity:var(--un-border-opacity)!important;border-top:3px solid rgb(0 0 0/var(--un-border-top-opacity))!important;height:0!important;margin:0!important;width:100%!important}.charity-outdated-panel,.charity-welcome-panel{--un-shadow:8px 8px 0px 0px var(--un-shadow-color,rgba(0,0,0,.75))!important;--un-bg-opacity:1!important;--un-text-opacity:1!important;--un-border-opacity:1!important;border-color:rgb(0 0 0/var(--un-border-opacity))!important;border-style:solid!important;border-width:3px!important;box-shadow:var(--un-ring-offset-shadow),var(--un-ring-shadow),var(--un-shadow)!important;box-sizing:content-box!important;color:rgb(0 0 0/var(--un-text-opacity))!important;cursor:move!important;max-width:500px!important;padding:0!important;visibility:visible!important}.charity-outdated-panel,.charity-panel-changelog,.charity-welcome-panel{background-color:rgb(255 255 255/var(--un-bg-opacity))!important;display:flex!important;flex-direction:column!important}.charity-panel-changelog{--un-bg-opacity:1!important;align-items:center!important;justify-content:center!important;padding:21px!important;z-index:50!important}.charity-panel-changelog>h3{font-size:20px!important;margin:0!important;padding:0!important;z-index:10!important}.charity-panel-changelog>h3,.charity-panel-changelog>ul{--un-text-opacity:1!important;color:rgb(0 0 0/var(--un-text-opacity))!important;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji!important;font-weight:600!important;line-height:24px!important}.charity-panel-changelog>ul{font-size:18px!important;margin:10px 0 0!important;width:100%!important}.charity-settings-panel{--un-bg-opacity:1!important;--un-text-opacity:1!important;--un-border-opacity:1!important;background-color:rgb(0 0 0/var(--un-bg-opacity))!important;border-color:rgb(0 0 0/var(--un-border-opacity))!important;border-style:solid!important;border-width:3px 0 3px 3px!important;box-sizing:border-box!important;color:rgb(0 0 0/var(--un-text-opacity))!important;display:flex!important;flex-direction:column!important;height:100%!important;overflow-y:auto!important;padding:0 3px 0 0!important;position:fixed!important;right:0!important;scrollbar-width:thin!important;top:0!important;visibility:visible!important;width:100%!important}\n\n@media (min-width:640px){.charity-settings-panel{width:400px!important}}.charity-settings-container{min-height:100%!important}.charity-panel-header,.charity-settings-container{--un-bg-opacity:1!important;background-color:rgb(255 255 255/var(--un-bg-opacity))!important;display:flex!important;flex-direction:column!important}.charity-panel-header{align-items:center!important;justify-content:center!important;padding:21px!important;position:sticky!important;top:0!important;z-index:50!important}.charity-panel-header>h2{--un-text-opacity:1!important;color:rgb(0 0 0/var(--un-text-opacity))!important;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji!important;font-size:24px!important;font-weight:600!important;line-height:28px!important;margin:0!important;padding:0!important;z-index:10!important}.charity-panel-header:after{--un-gradient-from-position:0%!important;--un-gradient-from:transparent var(--un-gradient-from-position)!important;--un-gradient-to:hsla(0,0%,100%,0) var(--un-gradient-to-position)!important;--un-gradient-stops:var(--un-gradient-from),var(--un-gradient-to)!important;--un-gradient-to-position:100%!important;--un-gradient-to:rgb(255 255 255/var(--un-to-opacity,1)) var(--un-gradient-to-position)!important;--un-gradient-shape:to top!important;--un-gradient:var(--un-gradient-shape),var(--un-gradient-stops)!important;background-image:linear-gradient(var(--un-gradient))!important;content:\"\"!important;height:32px!important;opacity:0!important;pointer-events:none!important;position:absolute!important;top:100%!important;width:100%!important}.charity-panel-header.charity-panel-header-fade:after{opacity:1!important}.charity-panel-body{align-items:center!important;display:flex!important;flex-direction:column!important;flex-grow:1!important;padding-left:21px!important;padding-right:21px!important}.charity-panel-text{--un-text-opacity:1!important;color:rgb(0 0 0/var(--un-text-opacity))!important;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji!important;font-size:14px!important;font-weight:600!important;line-height:20px!important;margin:10px 0 0!important}.charity-panel-body-setting-header{align-items:center!important;display:flex!important;gap:8px!important;justify-content:space-between!important;margin-top:5px!important;max-width:500px!important;padding:0!important;width:100%!important}.charity-panel-body-setting-header>h2{--un-text-opacity:1!important;font-size:18px!important;line-height:24px!important;margin-bottom:8px!important;margin-top:8px!important;white-space:nowrap!important}.charity-panel-body-setting-header>h2,.charity-setting-button{color:rgb(0 0 0/var(--un-text-opacity))!important;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji!important;font-weight:600!important}.charity-setting-button{--un-bg-opacity:1!important;--un-text-opacity:1!important;--un-border-opacity:1!important;--un-shadow:0 0 var(--un-shadow-color,transparent)!important;align-items:center!important;background-color:rgb(212 215 217/var(--un-bg-opacity))!important;border-color:rgb(0 0 0/var(--un-border-opacity))!important;border-radius:0!important;border-style:solid!important;border-width:3px!important;box-shadow:var(--un-ring-offset-shadow),var(--un-ring-shadow),var(--un-shadow)!important;box-sizing:border-box!important;cursor:pointer!important;display:flex!important;font-size:14px!important;height:auto!important;line-height:20px!important;padding:9px 0 9px 13px!important;width:100%!important}\n\n.charity-setting-button:hover{background-image:linear-gradient(rgba(0,0,0,.2) 0 0)!important}.charity-setting-button:focus{outline:2px solid transparent!important;outline-offset:2px!important}\n\n.charity-setting-button:focus-visible{outline:2px solid transparent!important;outline-offset:2px!important}\n\n.charity-setting-button:hover{cursor:pointer!important}.charity-setting-button>img{height:20px!important;margin:0 8px 0 0!important;width:20px!important}.charity-setting-range{--un-shadow:0 0 var(--un-shadow-color,transparent)!important;--un-border-opacity:1!important;-webkit-appearance:none!important;appearance:none!important;border-color:rgb(0 0 0/var(--un-border-opacity))!important;border-radius:0!important;border-style:solid!important;border-width:3px!important;box-shadow:var(--un-ring-offset-shadow),var(--un-ring-shadow),var(--un-shadow)!important;box-sizing:border-box!important;cursor:pointer!important;height:32px!important;max-width:500px!important;overflow:hidden!important;padding:0!important;width:100%!important}\n\n.charity-setting-range:focus{outline:2px solid transparent!important;outline-offset:2px!important}.charity-setting-range::-webkit-slider-runnable-track{--un-bg-opacity:1!important;background-color:rgb(212 215 217/var(--un-bg-opacity))!important}.charity-setting-range::-webkit-slider-thumb{--un-shadow:-500px 0 0 500px var(--un-shadow-color,#ff4500)!important;--un-bg-opacity:1!important;--un-outline-color-opacity:1!important;-webkit-appearance:none!important;appearance:none!important;background-color:rgb(255 255 255/var(--un-bg-opacity))!important;border-radius:0!important;border-style:none!important;box-shadow:var(--un-ring-offset-shadow),var(--un-ring-shadow),var(--un-shadow)!important;box-sizing:border-box!important;height:32px!important;outline-color:rgb(0 0 0/var(--un-outline-color-opacity))!important;outline-style:solid!important;outline-width:3px!important;width:26px!important}.charity-setting-range::-moz-range-track{--un-bg-opacity:1!important;background-color:rgb(212 215 217/var(--un-bg-opacity))!important;height:32px!important}.charity-setting-range::-moz-range-thumb{--un-shadow:-500px 0 0 500px var(--un-shadow-color,#ff4500)!important;--un-bg-opacity:1!important;--un-outline-color-opacity:1!important;background-color:rgb(255 255 255/var(--un-bg-opacity))!important;border-radius:0!important;border-style:none!important;box-shadow:var(--un-ring-offset-shadow),var(--un-ring-shadow),var(--un-shadow)!important;box-sizing:border-box!important;height:32px!important;outline-color:rgb(0 0 0/var(--un-outline-color-opacity))!important;outline-style:solid!important;outline-width:3px!important;width:26px!important}.charity-setting-range::-ms-fill-lower{--un-bg-opacity:1!important;background-color:rgb(255 69 0/var(--un-bg-opacity))!important}.charity-setting-range::-ms-thumb{--un-bg-opacity:1!important;--un-outline-color-opacity:1!important;background-color:rgb(255 255 255/var(--un-bg-opacity))!important;border-radius:0!important;border-style:none!important;box-sizing:border-box!important;height:32px!important;outline-color:rgb(0 0 0/var(--un-outline-color-opacity))!important;outline-style:solid!important;outline-width:3px!important;width:26px!important}.charity-setting-range::-ms-ticks-after,.charity-setting-range::-ms-ticks-before{display:none!important}.charity-setting-range::-ms-track{--un-bg-opacity:1!important;background-color:rgb(212 215 217/var(--un-bg-opacity))!important;border-style:none!important;color:transparent!important;height:32px!important}.charity-setting-range::-ms-tooltip{display:none!important}.charity-setting-toggle{--un-shadow:inset -32px 0 0 3px #d4d7d9,inset 0 0 0 3px #d4d7d9!important;--un-bg-opacity:1!important;-webkit-appearance:none!important;appearance:none!important;background-color:rgb(0 0 0/var(--un-bg-opacity))!important;border:3px solid #000!important;border-radius:0!important;box-shadow:var(--un-ring-offset-shadow),var(--un-ring-shadow),var(--un-shadow)!important;box-sizing:border-box!important;cursor:pointer!important;height:32px!important;margin:0!important;transition-duration:.15s!important;transition-duration:.2s!important;transition-property:box-shadow!important;transition-timing-function:cubic-bezier(.4,0,.2,1)!important;transition-timing-function:cubic-bezier(0,0,.2,1)!important;width:64px!important}\n\n.charity-setting-toggle:focus{outline:2px solid transparent!important;outline-offset:2px!important}.charity-setting-toggle:checked{--un-shadow:inset 32px 0 0 3px #00cc78,inset 0 0 0 3px #00cc78!important}.charity-setting-keybind,.charity-setting-toggle:checked{box-shadow:var(--un-ring-offset-shadow),var(--un-ring-shadow),var(--un-shadow)!important}.charity-setting-keybind{--un-bg-opacity:1!important;--un-text-opacity:1!important;--un-border-opacity:1!important;--un-shadow:0 0 var(--un-shadow-color,transparent)!important;align-items:center!important;background-color:rgb(212 215 217/var(--un-bg-opacity))!important;border-color:rgb(0 0 0/var(--un-border-opacity))!important;border-radius:0!important;border-style:solid!important;border-width:3px!important;box-sizing:border-box!important;color:rgb(0 0 0/var(--un-text-opacity))!important;cursor:pointer!important;display:flex!important;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji!important;font-size:14px!important;font-weight:600!important;height:auto!important;justify-content:center!important;line-height:20px!important;min-height:44px!important;min-width:44px!important;padding:9px 13px!important;width:auto!important}\n\n.charity-setting-keybind:hover{background-image:linear-gradient(rgba(0,0,0,.2) 0 0)!important}.charity-setting-keybind:focus{outline:2px solid transparent!important;outline-offset:2px!important}.charity-setting-keybind:hover{cursor:pointer!important}.charity-panel-back{--un-border-right-opacity:var(--un-border-opacity)!important;--un-border-opacity:1!important;--un-border-bottom-opacity:var(--un-border-opacity)!important;align-items:center!important;border-bottom:3px solid rgb(0 0 0/var(--un-border-bottom-opacity))!important;border-right:3px solid rgb(0 0 0/var(--un-border-right-opacity))!important;box-sizing:content-box!important;cursor:pointer!important;display:flex!important;height:29px!important;justify-content:center!important;left:0!important;position:absolute!important;top:0!important;width:29px!important}.charity-panel-back>img{height:20px!important;margin:0!important;width:20px!important}.charity-panel-close{--un-border-left-opacity:var(--un-border-opacity)!important;--un-border-opacity:1!important;--un-border-bottom-opacity:var(--un-border-opacity)!important;align-items:center!important;border-bottom:3px solid rgb(0 0 0/var(--un-border-bottom-opacity))!important;border-left:3px solid rgb(0 0 0/var(--un-border-left-opacity))!important;box-sizing:content-box!important;cursor:pointer!important;display:flex!important;height:29px!important;justify-content:center!important;position:absolute!important;right:0!important;top:0!important;width:29px!important}.charity-panel-close>img{height:20px!important;margin:0!important;width:20px!important}.charity-panel-footer{--un-bg-opacity:1!important;--un-border-opacity:1!important;--un-border-top-opacity:var(--un-border-opacity)!important;background-color:rgb(255 255 255/var(--un-bg-opacity))!important;border-top:3px solid rgb(0 0 0/var(--un-border-top-opacity))!important;bottom:0!important;box-sizing:border-box!important;left:0!important;position:sticky!important;width:100%!important}.charity-panel-footer-outdated{--un-bg-opacity:1!important;align-items:center!important;background-color:rgb(0 0 0/var(--un-bg-opacity))!important;display:flex!important;gap:3px!important}.charity-panel-footer-outdated>a,.charity-panel-footer-outdated>button{--un-text-opacity:1!important;--un-bg-opacity:1!important;background-color:rgb(255 255 255/var(--un-bg-opacity))!important;color:rgb(0 0 0/var(--un-text-opacity))!important;flex-grow:1!important;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji!important;font-size:18px!important;font-weight:600!important;height:56px!important;line-height:24px!important;margin:0!important;padding:16px!important;text-align:center!important;text-decoration:none!important;vertical-align:bottom!important}\n\n.charity-panel-footer-outdated>a:hover,.charity-panel-footer-outdated>button:hover{--un-bg-opacity:1!important;background-color:rgb(255 255 255/var(--un-bg-opacity))!important;background-image:linear-gradient(rgba(0,0,0,.2) 0 0)!important;cursor:pointer!important}.charity-panel-footer-branding{--un-bg-opacity:1!important;--un-border-opacity:1!important;--un-border-top-opacity:var(--un-border-opacity)!important;align-items:center!important;background-color:rgb(255 153 170/var(--un-bg-opacity))!important;border-top:3px solid rgb(0 0 0/var(--un-border-top-opacity))!important;box-sizing:border-box!important;display:flex!important}.charity-panel-footer-branding>div{align-items:flex-end!important;display:flex!important;flex-grow:1!important;gap:16px!important;justify-content:center!important}.charity-panel-footer-branding>div>img{height:32px!important;margin:0!important;padding:0!important;vertical-align:bottom!important}.charity-panel-footer-branding>div>canvas,.charity-panel-footer-branding>div>img{image-rendering:-moz-crisp-edges;image-rendering:-webkit-crisp-edges;image-rendering:pixelated;image-rendering:crisp-edges;pointer-events:none!important}.charity-panel-footer-branding>div>canvas{height:16px!important}.charity-panel-footer-branding>a>img{--un-bg-opacity:1!important;--un-text-opacity:1!important;--un-border-opacity:1!important;--un-border-left-opacity:var(--un-border-opacity)!important;background-color:rgb(255 255 255/var(--un-bg-opacity))!important;border-left:3px solid rgb(0 0 0/var(--un-border-left-opacity))!important;box-sizing:content-box!important;color:rgb(0 0 0/var(--un-text-opacity))!important;height:24px!important;margin:0!important;padding:16px!important;vertical-align:bottom!important}\n\n.charity-panel-footer-branding>a>img:hover{--un-bg-opacity:1!important;background-color:rgb(255 255 255/var(--un-bg-opacity))!important;background-image:linear-gradient(rgba(0,0,0,.2) 0 0)!important;cursor:pointer!important}.charity-panel-footer-credits{display:flex!important;flex-direction:column!important;padding:16px!important;text-align:center!important;white-space:nowrap!important}.charity-panel-footer-credits>span{--un-text-opacity:1!important;color:rgb(0 0 0/var(--un-text-opacity))!important;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji!important;font-size:18px!important;font-weight:600!important;line-height:24px!important}.charity-panel-footer-credits>ul{align-self:center!important;margin:0!important;padding:0!important;text-align:left!important}.charity-panel-footer-credits>ul>li{height:24px!important;list-style-position:inside!important;list-style-type:square!important}.charity-panel-footer-credits>ul>li>span{--un-text-opacity:1!important;color:rgb(0 0 0/var(--un-text-opacity))!important;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji!important;font-size:18px!important;font-weight:600!important;line-height:24px!important;text-decoration:none!important}\n\n.charity-panel-footer-credits>ul>li>span:hover{text-decoration:none!important}.charity-panel-footer-credits>ul>li>a{--un-text-opacity:1!important;color:rgb(0 0 0/var(--un-text-opacity))!important;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji!important;font-size:18px!important;font-weight:600!important;height:32px!important;line-height:24px!important;margin:0!important;text-decoration:none!important;vertical-align:middle!important}\n\n.charity-panel-footer-credits>ul>li>a:hover{text-decoration:none!important}.charity-panel-footer-credits>ul>li>a>span{--un-text-opacity:1!important;color:rgb(0 0 0/var(--un-text-opacity))!important;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji!important;font-size:18px!important;font-weight:600!important;line-height:24px!important;text-decoration-line:underline!important}.charity-panel-footer-credits>ul>li>a>img{height:32px!important;margin:0!important;vertical-align:middle!important}.charity-contact-info{pointer-events:none!important;position:absolute!important;z-index:50!important}.charity-contact-panel{--un-shadow:8px 8px 0px 0px var(--un-shadow-color,rgba(0,0,0,.75))!important;--un-bg-opacity:1!important;--un-text-opacity:1!important;--un-border-opacity:1!important;background-color:rgb(255 255 255/var(--un-bg-opacity))!important;border-color:rgb(0 0 0/var(--un-border-opacity))!important;border-style:solid!important;border-width:3px!important;box-shadow:var(--un-ring-offset-shadow),var(--un-ring-shadow),var(--un-shadow)!important;box-sizing:content-box!important;color:rgb(0 0 0/var(--un-text-opacity))!important;display:flex!important;flex-direction:column!important;padding:16px!important;visibility:visible!important}.charity-contact-panel-line{color:rgb(0 0 0/var(--un-text-opacity))!important;font-size:18px!important;line-height:24px!important}.charity-contact-panel-line,.charity-contact-panel-subtext{--un-text-opacity:1!important;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji!important;font-weight:600!important;margin:0!important;padding:0!important;white-space:nowrap!important}.charity-contact-panel-subtext{color:rgb(107 114 128/var(--un-text-opacity))!important;font-size:14px!important;line-height:20px!important;text-align:center!important;top:5px!important}";

const mask14 = GM.info.scriptHandler !== 'FireMonkey' ? GM.getResourceUrl('mask-1-4') : Promise.resolve('https://raw.githubusercontent.com/PlaceCharity/Charity/main/app/userscript/assets/masks/1-4.png');
const mask13 = GM.info.scriptHandler !== 'FireMonkey' ? GM.getResourceUrl('mask-1-3') : Promise.resolve('https://raw.githubusercontent.com/PlaceCharity/Charity/main/app/userscript/assets/masks/1-3.png');
const mask12 = GM.info.scriptHandler !== 'FireMonkey' ? GM.getResourceUrl('mask-1-2') : Promise.resolve('https://raw.githubusercontent.com/PlaceCharity/Charity/main/app/userscript/assets/masks/1-2.png');
const mask23 = GM.info.scriptHandler !== 'FireMonkey' ? GM.getResourceUrl('mask-2-3') : Promise.resolve('https://raw.githubusercontent.com/PlaceCharity/Charity/main/app/userscript/assets/masks/2-3.png');
const mask34 = GM.info.scriptHandler !== 'FireMonkey' ? GM.getResourceUrl('mask-3-4') : Promise.resolve('https://raw.githubusercontent.com/PlaceCharity/Charity/main/app/userscript/assets/masks/3-4.png');
const settings = GM.info.scriptHandler !== 'FireMonkey' ? GM.getResourceUrl('settings') : Promise.resolve('https://raw.githubusercontent.com/PlaceCharity/Charity/main/app/userscript/assets/icons/settings.svg');
const close = GM.info.scriptHandler !== 'FireMonkey' ? GM.getResourceUrl('close') : Promise.resolve('https://raw.githubusercontent.com/PlaceCharity/Charity/main/app/userscript/assets/icons/close.svg');
const back = GM.info.scriptHandler !== 'FireMonkey' ? GM.getResourceUrl('back') : Promise.resolve('https://raw.githubusercontent.com/PlaceCharity/Charity/main/app/userscript/assets/icons/back.svg');
const version = GM.info.scriptHandler !== 'FireMonkey' ? GM.getResourceUrl('version') : Promise.resolve('https://raw.githubusercontent.com/PlaceCharity/Charity/main/app/userscript/assets/version.png');
const keyboard = GM.info.scriptHandler !== 'FireMonkey' ? GM.getResourceUrl('keyboard') : Promise.resolve('https://raw.githubusercontent.com/PlaceCharity/Charity/main/app/userscript/assets/icons/keyboard.svg');
const discord = GM.info.scriptHandler !== 'FireMonkey' ? GM.getResourceUrl('discord') : Promise.resolve('https://raw.githubusercontent.com/PlaceCharity/Charity/main/app/userscript/assets/icons/discord.svg');
const github = GM.info.scriptHandler !== 'FireMonkey' ? GM.getResourceUrl('github') : Promise.resolve('https://raw.githubusercontent.com/PlaceCharity/Charity/main/app/userscript/assets/icons/github.svg');
const charityLogo = GM.info.scriptHandler !== 'FireMonkey' ? GM.getResourceUrl('charity-logo') : Promise.resolve('https://raw.githubusercontent.com/PlaceCharity/Charity/main/app/website/static/img/logo.png');
const factionPride = GM.info.scriptHandler !== 'FireMonkey' ? GM.getResourceUrl('faction-pride') : Promise.resolve('https://raw.githubusercontent.com/PlaceCharity/Charity/main/app/userscript/assets/factions/pride.gif');
const factionOsu = GM.info.scriptHandler !== 'FireMonkey' ? GM.getResourceUrl('faction-osu') : Promise.resolve('https://raw.githubusercontent.com/PlaceCharity/Charity/main/app/userscript/assets/factions/osu.png');

function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}

function asyncAddStyleSupport() {
  return typeof GM.addStyle !== 'undefined';
}
function valueChangeListenerSupport() {
  return typeof GM.addValueChangeListener !== 'undefined';
}
function menuCommandSupport() {
  return typeof GM.registerMenuCommand !== 'undefined';
}
function windowIsEmbedded() {
  return window.top !== window.self;
}
async function sleep(ms) {
  await new Promise(resolve => setTimeout(resolve, ms));
}
function negativeSafeModulo(a, b) {
  return (a % b + b) % b;
}
function findJSONTemplateInParams(urlString) {
  const urlSearchParams = new URLSearchParams(urlString);
  return urlSearchParams.get('charity');
}
function findJSONTemplateInURL(url) {
  return findJSONTemplateInParams(url.hash.substring(1)) || findJSONTemplateInParams(url.search.substring(1));
}
function findElementOfType(element, type) {
  const rv = [];
  if (element instanceof type) {
    rv.push(element);
  }

  // find in Shadow DOM elements
  if (element instanceof HTMLElement && element.shadowRoot) {
    rv.push(...findElementOfType(element.shadowRoot, type));
  }
  // find in children
  for (let c = 0; c < element.children.length; c++) {
    rv.push(...findElementOfType(element.children[c], type));
  }
  return rv;
}
function isValidURL(url) {
  try {
    new URL(url);
    return true;
  } catch (err) {
    return false;
  }
}
function getUniqueString(string) {
  if (!isValidURL(string)) return null;
  const url = new URL(string);
  return `${url.origin}${url.pathname}`;
}
function getCacheBustString() {
  return Math.floor(Date.now() / 1000 * 60 * 2).toString(36);
}
function fetch(details) {
  return new Promise((resolve, reject) => {
    GM.xmlHttpRequest(_extends({}, details, {
      onload: response => resolve(response),
      onerror: err => reject(err),
      timeout: 10000
    }));
  });
}

let jsonTemplate;
const alreadyLoaded = [];
const templateCache = new Map();
const templateTree = new Map();
async function findTemplate() {
  let sleep$1 = 0;
  while (jsonTemplate === undefined) {
    const scriptValue = await GM.getValue('jsonTemplate', null);
    if (scriptValue === null) {
      await sleep(1000 * sleep$1);
      sleep$1++;
    } else {
      jsonTemplate = scriptValue;
      break;
    }
  }
  await GM.deleteValue('jsonTemplate');
}
async function init$5() {
  await findTemplate();
  templateTree.set(getUniqueString(jsonTemplate), new Map());
  loadTemplateFromURL(jsonTemplate, templateTree.get(jsonTemplate));
}
async function loadTemplateFromURL(jsonTemplate, templateTree, parentName = 'Unknown') {
  if (!isValidURL(jsonTemplate)) return;
  const templateURL = new URL(jsonTemplate);
  templateURL.searchParams.append('date', getCacheBustString());
  const uniqueString = getUniqueString(jsonTemplate);
  alreadyLoaded.push(uniqueString);
  let json;
  try {
    const response = await fetch({
      method: 'GET',
      url: templateURL.href
    });
    json = JSON.parse(response.responseText);
  } catch (e) {
    // TODO: Failed to load toast.
    return;
  }
  if (json) {
    if (json.whitelist instanceof Array) {
      for (const whitelistObject of json.whitelist) {
        var _whitelistObject$name, _whitelistObject$url;
        const whitelistName = (_whitelistObject$name = whitelistObject.name) != null ? _whitelistObject$name : 'Unknown';
        const whitelistURL = getUniqueString((_whitelistObject$url = whitelistObject.url) != null ? _whitelistObject$url : '');
        if (whitelistURL !== null) {
          templateTree.set(whitelistURL, new Map());
          if (!alreadyLoaded.includes(whitelistURL)) {
            loadTemplateFromURL(whitelistURL, templateTree.get(whitelistURL), whitelistName);
          }
        }
      }
    }
    if (json.templates instanceof Array) {
      for (let i = 0; i < json.templates.length; i++) {
        var _json$templates$i$sou, _json$faction, _json$contact, _json$templates$i$nam, _json$templates$i$sou2, _json$templates$i$fra, _json$templates$i$fra2, _json$templates$i$fra3, _ref, _ref2, _json$templates$i$sec, _ref3, _json$templates$i$sta, _json$templates$i$loo, _json$templates$i$fra4;
        if (typeof json.templates[i].x !== 'number') return;
        if (typeof json.templates[i].y !== 'number') return;
        const bitmap = await getImageFromTemplateSources((_json$templates$i$sou = json.templates[i].sources) != null ? _json$templates$i$sou : []);
        json.templates[i] = {
          faction: (_json$faction = json.faction) != null ? _json$faction : parentName,
          contact: (_json$contact = json.contact) != null ? _json$contact : 'None',
          name: (_json$templates$i$nam = json.templates[i].name) != null ? _json$templates$i$nam : 'Untitled',
          sources: (_json$templates$i$sou2 = json.templates[i].sources) != null ? _json$templates$i$sou2 : [],
          x: json.templates[i].x,
          y: json.templates[i].y,
          frameWidth: (_json$templates$i$fra = json.templates[i].frameWidth) != null ? _json$templates$i$fra : null,
          frameHeight: (_json$templates$i$fra2 = json.templates[i].frameHeight) != null ? _json$templates$i$fra2 : null,
          frameCount: (_json$templates$i$fra3 = json.templates[i].frameCount) != null ? _json$templates$i$fra3 : 1,
          secondsPerFrame: (_ref = (_ref2 = (_json$templates$i$sec = json.templates[i].secondsPerFrame) != null ? _json$templates$i$sec : json.templates[i].frameRate) != null ? _ref2 : json.templates[i].frameSpeed) != null ? _ref : Infinity,
          startTimestamp: (_ref3 = (_json$templates$i$sta = json.templates[i].startTimestamp) != null ? _json$templates$i$sta : json.templates[i].startTime) != null ? _ref3 : 0,
          looping: (_json$templates$i$loo = json.templates[i].looping) != null ? _json$templates$i$loo : ((_json$templates$i$fra4 = json.templates[i].frameCount) != null ? _json$templates$i$fra4 : 1) > 1,
          currentFrame: -1,
          bitmap: bitmap,
          image: getImageDataFromBitmap(bitmap)
        };
      }
      templateCache.set(uniqueString, json);
    }
  }
}
async function getImageFromTemplateSources(sources) {
  const requests = sources.sort(() => 0.5 - Math.random()).slice(0, 3).map(t => fetch({
    method: 'HEAD',
    url: t,
    responseType: 'blob'
  }));
  return await getImageFromTemplateSource(requests);
}
async function getImageFromTemplateSource(requests) {
  const headResponse = Promise.any(requests);
  requests.splice(requests.indexOf(headResponse));
  const headResponseHeaders = Object.fromEntries((await headResponse).responseHeaders.split('\n').map(l => [l.slice(0, l.indexOf(':')).trim().toLowerCase(), l.slice(l.indexOf(':') + 1).trim()]));
  if (parseInt(headResponseHeaders['content-length']) > 100000000) return getImageFromTemplateSource(requests);
  if (!headResponseHeaders['content-type'].startsWith('image')) return getImageFromTemplateSource(requests);
  const response = await fetch({
    method: 'GET',
    url: (await headResponse).finalUrl,
    responseType: 'blob'
  });
  if (!(response.response instanceof Blob)) return getImageFromTemplateSource(requests);
  if (!response.response.type.startsWith('image')) return getImageFromTemplateSource(requests);
  return createImageBitmap(response.response);
}
function getImageDataFromBitmap(imageBitmap) {
  const templateCanvas = document.createElement('canvas');
  templateCanvas.width = imageBitmap.width;
  templateCanvas.height = imageBitmap.height;
  const templateCtx = templateCanvas.getContext('2d');
  templateCtx.drawImage(imageBitmap, 0, 0);
  return templateCtx.getImageData(0, 0, templateCanvas.width, templateCanvas.height);
}
function getInitialTraverseQueue() {
  if (!jsonTemplate) return [];
  const jsonTemplateTree = templateTree.get(getUniqueString(jsonTemplate));
  if (!jsonTemplateTree) return [];
  return [{
    url: getUniqueString(jsonTemplate),
    tree: templateTree.get(getUniqueString(jsonTemplate))
  }];
}
function getTemplateCache() {
  return templateCache;
}

// ---------------------------------------------------------------------------
// Site adapters
//
// The canvases Charity runs on almost always paint their art 1:1 into a
// <canvas>, which lets the overlay drop a template straight onto the grid.
// Pixel Place (thesecretsproject.com/place) instead pans and zooms its art
// inside a single <canvas>, so the overlay has to reuse that same transform.
// Everything site specific lives in an adapter; without one the overlay keeps
// its original 1:1 behaviour.
// ---------------------------------------------------------------------------
function createSecretsProjectAdapter() {
  const BOARD_SELECTOR = 'canvas.place-board';
  // The board paints its art as
  //   setTransform(dpr, 0, 0, dpr, 0, 0)
  //   drawImage(art, ox, oy, size * scale, size * scale)
  // where `scale` is CSS pixels per art pixel, (ox, oy) is the pan offset in CSS
  // pixels and `dpr` is Math.min(2, devicePixelRatio).
  const MAIN_CANVAS_SIZE = 1000; // .place-court::before is a fixed 1000x1000 backdrop
  const INITIAL_SCALE = 20; // the board opens at 20 CSS pixels per art pixel
  const INITIAL_FOCUS = {x: 500, y: 500}; // ...centred on the starting pixel
  // Coordinates used to ask the surface where a known art pixel ended up.
  const PROBES = [INITIAL_FOCUS, {x: 250, y: 250}, {x: 750, y: 750}, {x: 250, y: 750}, {x: 750, y: 250}, {x: 100, y: 100}, {x: 900, y: 900}, {x: 100, y: 900}, {x: 900, y: 100}, {x: 500, y: 100}, {x: 500, y: 900}, {x: 100, y: 500}, {x: 900, y: 500}];
  let applied = '';
  const state = {
    attached: false,
    surface: null,
    probe: null,
    pointer: null,
    touched: false,
    warned: false,
    checked: false,
    reported: false,
    hinted: false,
    dotSize: 2,
    view: null,
    boardSize: null,
    templates: {total: 0, visible: 0}
  };
  function matches() {
    if (!/(^|\.)thesecretsproject\.com$/.test(location.hostname)) return false;
    if (!state.attached) {
      state.attached = true;
      // The island publishes its live view as a "cursor surface": fromShared()
      // maps art coordinates to viewport coordinates, so a single non-null
      // answer yields both the zoom level and the pan offset. It announces
      // itself exactly once, while it mounts, which is why this script runs at
      // document-start; it withdraws with `detail: null` when it unmounts.
      document.addEventListener('secrets:cursor-surface', e => {
        state.surface = e.detail || null;
        state.probe = null;
      });
      // Any interaction with the board moves it away from its opening view,
      // which is the only view that can be derived without the surface.
      const markTouched = e => {
        const board = getBoard();
        if (!board || board !== e.target) return;
        state.touched = true;
      };
      document.addEventListener('pointerdown', markTouched, true);
      document.addEventListener('wheel', markTouched, true);
      document.addEventListener('keydown', markTouched, true);
    }
    return true;
  }
  function getBoard() {
    if (selectedCanvas && selectedCanvas.classList && selectedCanvas.classList.contains('place-board')) return selectedCanvas;
    const board = document.querySelector(BOARD_SELECTOR);
    return board && board.isConnected ? board : null;
  }
  function usesBoard() {
    return !!(selectedCanvas && selectedCanvas.classList && selectedCanvas.classList.contains('place-board'));
  }
  // The canvas is server rendered with the default 300x150 backing store and
  // resized by the island the moment it hydrates.
  function isSized(board) {
    return board.width > 300 || board.height > 150;
  }
  function surfaceView(board) {
    const surface = state.surface;
    if (!surface || typeof surface.fromShared !== 'function') return null;
    const rect = board.getBoundingClientRect();
    if (rect.width <= 0 || rect.height <= 0) return null;
    const candidates = [];
    // The selected pixel sits under the centre of the viewport, so it is the
    // one coordinate that is guaranteed to still be on screen.
    let selection = null;
    try {
      selection = typeof surface.selection === 'function' ? surface.selection() : null;
    } catch (e) {
      selection = null;
    }
    if (selection && Number.isInteger(selection.x) && Number.isInteger(selection.y)) candidates.push(selection);
    if (state.probe) candidates.push(state.probe);
    for (const probe of PROBES) candidates.push(probe);
    for (const probe of candidates) {
      const mapped = mapArtPixel(probe.x, probe.y);
      if (!mapped) continue;
      const scale = mapped.width; // fromShared sizes its rect as one art pixel
      state.probe = probe;
      return {
        rect: rect,
        scale: scale,
        ox: mapped.x - rect.left - probe.x * scale,
        oy: mapped.y - rect.top - probe.y * scale
      };
    }
    return null;
  }
  function mapArtPixel(x, y) {
    const surface = state.surface;
    if (!surface || typeof surface.fromShared !== 'function') return null;
    try {
      return surface.fromShared(x, y) || null;
    } catch (e) {
      return null;
    }
  }
  // sizeCanvas() clamps the pan so the art can never be dragged past the centre.
  function clampPan(offset, extent, scale) {
    return Math.min(extent / 2 - scale / 2, Math.max(extent / 2 - (MAIN_CANVAS_SIZE - 0.5) * scale, offset));
  }
  // The island hydrates on intersection, so it can announce its surface before
  // this script runs. Until the visitor pans or zooms, the board is still at the
  // opening view that sizeCanvas() sets up.
  function openingView(board) {
    if (state.touched || new URLSearchParams(location.search).has('canvas')) return null;
    const rect = board.getBoundingClientRect();
    if (rect.width <= 0 || rect.height <= 0) return null;
    return {
      rect: rect,
      scale: INITIAL_SCALE,
      ox: clampPan(rect.width / 2 - (INITIAL_FOCUS.x + 0.5) * INITIAL_SCALE, rect.width, INITIAL_SCALE),
      oy: clampPan(rect.height / 2 - (INITIAL_FOCUS.y + 0.5) * INITIAL_SCALE, rect.height, INITIAL_SCALE)
    };
  }
  // The island can only be asked about its view while it is mounted, ready and
  // on screen, so a silent overlay needs to explain which of those is missing.
  function describe(board) {
    const loading = document.querySelector('.place-loading');
    const status = document.querySelector('.place-status');
    let selection = null;
    try {
      selection = state.surface && typeof state.surface.selection === 'function' ? state.surface.selection() : null;
    } catch (e) {
      selection = null;
    }
    return {
      surface: !!state.surface,
      selection: selection,
      touched: state.touched,
      hidden: document.hidden,
      board: `${board.width}x${board.height}`,
      artLoaded: loading ? loading.hasAttribute('hidden') : null,
      status: status ? status.textContent : null
    };
  }
  function applyDrawTransform(context) {
    const board = getBoard();
    if (!board || !usesBoard()) return false;
    // The island only maps coordinates while its tab is on screen, and there is
    // nothing to look at while it is not, so there is nothing to draw either.
    if (document.hidden) return false;
    const view = surfaceView(board) || openingView(board);
    if (!view) {
      if (!state.warned) {
        state.warned = true;
        console.warn('[Charity] Pixel Place did not share its canvas view, the overlay stays hidden.', describe(board));
      }
      return false;
    }
    state.view = view;
    const dpr = Math.min(2, window.devicePixelRatio || 1);
    state.boardSize = `${board.width}x${board.height}`;
    context.imageSmoothingEnabled = false;
    // Templates are authored one image pixel per art pixel, so the site's pan
    // and zoom map straight onto the overlay canvas.
    context.setTransform(dpr * view.scale, 0, 0, dpr * view.scale, dpr * view.ox, dpr * view.oy);
    if (!state.checked) checkAlignment(board, view);
    state.templates.total = 0;
    state.templates.visible = 0;
    return true;
  }
  // Palette symbols are baked into each art pixel, so every symbol stays
  // aligned to the board at any zoom and never blends with neighbouring pixels.
  const SYMBOL_SIZE = 7;
  const SYMBOLS_PER_ROW = 16;
  const SYMBOL_SHEET_URL = 'https://raw.githubusercontent.com/TheWaffleLord37/Random-Templates/refs/heads/main/The%20Secrets%20Project/symbols.png';
  const PALETTE = ['ffffff','d4d7dc','898d90','111111','ffa8c5','e83b46','ff943b','986341','ffd635','fff3b0','a4df44','00a368','7ce3c3','51d4e8','3690ea','294494','b7a5ef','824cb5','d94bba','f7bc91','fff8e7','d9bc8c','b58a36','64758c','424650','f7d4d8','ff7868','bc6747','68432e','3e2723','a5b98b','6d793a','1d5b43','167d8d','c4eff5','dcccf4','7488cf','19263f','512c62','7d243a'].map(hex => [parseInt(hex.slice(0,2),16), parseInt(hex.slice(2,4),16), parseInt(hex.slice(4,6),16)]);
  const paletteLookup = new Map(PALETTE.map((rgb, i) => [rgb.join(','), i]));
  const symbolSheet = new Image();
  symbolSheet.src = SYMBOL_SHEET_URL;
  symbolSheet.onload = () => updateOverlayCanvas(state.dotSize);
  function symbolIndex(r, g, b) {
    const exact = paletteLookup.get(`${r},${g},${b}`);
    if (exact !== undefined) return exact;
    // Templates sometimes contain slightly shifted colours; pick the closest palette entry.
    let best = 0, bestDistance = Infinity;
    for (let i = 0; i < PALETTE.length; i++) {
      const c = PALETTE[i];
      const distance = (r-c[0])**2 + (g-c[1])**2 + (b-c[2])**2;
      if (distance < bestDistance) { bestDistance = distance; best = i; }
    }
    return best;
  }
  function symbolBitmap(template) {
    const image = template.image;
    if (!image || !image.width || !image.height || !symbolSheet.complete || !symbolSheet.naturalWidth) return null;
    if (template.symbolSprite && template.symbolSource === image) return { bitmap: template.symbolSprite, scale: SYMBOL_SIZE };
    const sprite = document.createElement('canvas');
    sprite.width = image.width * SYMBOL_SIZE;
    sprite.height = image.height * SYMBOL_SIZE;
    const spriteCtx = sprite.getContext('2d');
    spriteCtx.imageSmoothingEnabled = false;
    for (let y = 0; y < image.height; y++) {
      for (let x = 0; x < image.width; x++) {
        const index = (y * image.width + x) * 4;
        const alpha = image.data[index + 3] / 255;
        if (alpha <= 0.01) continue;
        const paletteIndex = symbolIndex(image.data[index], image.data[index + 1], image.data[index + 2]);
        const sourceX = (paletteIndex % SYMBOLS_PER_ROW) * SYMBOL_SIZE;
        const sourceY = Math.floor(paletteIndex / SYMBOLS_PER_ROW) * SYMBOL_SIZE;
        spriteCtx.globalAlpha = alpha;
        spriteCtx.drawImage(symbolSheet, sourceX, sourceY, SYMBOL_SIZE, SYMBOL_SIZE, x * SYMBOL_SIZE, y * SYMBOL_SIZE, SYMBOL_SIZE, SYMBOL_SIZE);
      }
    }
    spriteCtx.globalAlpha = 1;
    template.symbolSprite = sprite;
    template.symbolSource = image;
    return { bitmap: sprite, scale: SYMBOL_SIZE };
  }
  function dotBitmap(template, size) {
    const image = template.image;
    if (!image || !image.width || !image.height || size < 1 || size > 6) return null;

    // Odd dots need an odd grid to be centered on whole pixels, even dots an even one.
    const cells = size % 2 ? 7 : 6;

    if (template.dotSprites && template.dotSource === image && template.dotSprites[size]) {
      return { bitmap: template.dotSprites[size], scale: cells };
    }

    const sprite = document.createElement('canvas');
    sprite.width = image.width * cells;
    sprite.height = image.height * cells;

    const spriteCtx = sprite.getContext('2d');
    spriteCtx.imageSmoothingEnabled = false;

    const offset = (cells - size) / 2; // always an integer now

    for (let y = 0; y < image.height; y++) {
      for (let x = 0; x < image.width; x++) {
        const index = (y * image.width + x) * 4;
        const alpha = image.data[index + 3] / 255;
        if (alpha <= 0.01) continue;

        spriteCtx.fillStyle = `rgba(${image.data[index]},${image.data[index + 1]},${image.data[index + 2]},${alpha})`;
        spriteCtx.fillRect(x * cells + offset, y * cells + offset, size, size);
      }
    }

    template.dotSprites ||= {};
    template.dotSource = image;
    template.dotSprites[size] = sprite;

    return { bitmap: sprite, scale: cells };
  }
  const SYMBOL_MODE = 7;

  function bitmapFor(template) {
    if (state.dotSize === SYMBOL_MODE) {
      return symbolBitmap(template) || { bitmap: template.bitmap, scale: 1 };
    }

    if (state.dotSize >= 1 && state.dotSize <= 6) {
      return dotBitmap(template, state.dotSize) || { bitmap: template.bitmap, scale: 1 };
    }

    return { bitmap: template.bitmap, scale: 1 };
  }
  // The first good frame is the only chance to catch a view measured against the
  // wrong pixel, or an overlay that is not actually sitting on the board.
  function checkAlignment(board, view) {
    state.checked = true;
    const overlay = canvas.getBoundingClientRect();
    const target = board.getBoundingClientRect();
    if (Math.max(Math.abs(overlay.x - target.x), Math.abs(overlay.y - target.y)) > 1 || Math.max(Math.abs(overlay.width - target.width), Math.abs(overlay.height - target.height)) > 1) {
      console.warn('[Charity] the Pixel Place overlay is not sitting on the board.', {overlay: [overlay.x, overlay.y, overlay.width, overlay.height], board: [target.x, target.y, target.width, target.height]});
    }
    // Re-ask the surface about a coordinate it was not used to build the view,
    // which is what a view measured against a stale or mixed up pixel looks like.
    for (const probe of PROBES) {
      if (state.probe && probe.x === state.probe.x && probe.y === state.probe.y) continue;
      const mapped = mapArtPixel(probe.x, probe.y);
      if (!mapped) continue;
      const driftX = mapped.x - (view.rect.left + view.ox + probe.x * view.scale);
      const driftY = mapped.y - (view.rect.top + view.oy + probe.y * view.scale);
      if (Math.abs(driftX) > 1 || Math.abs(driftY) > 1) {
        console.warn('[Charity] the Pixel Place view failed its own cross check.', {probe: probe, driftX: Math.round(driftX), driftY: Math.round(driftY)});
      }
      return;
    }
  }
  // Asks the site where one of our own templates ended up and compares that to
  // where the overlay was told to draw it. Unlike the view cross check this uses
  // a coordinate the view was never built from, so it is not self confirming.
  function checkTemplate(view) {
    if (!view || !getTemplateCache().size) return null;
    for (const templateJson of getTemplateCache().values()) {
      if (!templateJson || !templateJson.templates) continue;
      for (const template of templateJson.templates) {
        if (!template || !template.image) continue;
        const mapped = mapArtPixel(template.x, template.y);
        if (!mapped) continue;
        // Where the overlay draws it, in CSS pixels from the board's top left.
        const drawnX = view.ox + template.x * view.scale;
        const drawnY = view.oy + template.y * view.scale;
        const siteX = mapped.x - view.rect.left;
        const siteY = mapped.y - view.rect.top;
        return {
          template: template.name,
          at: `${template.x}, ${template.y}`,
          overlay: `${Math.round(drawnX)}, ${Math.round(drawnY)}`,
          board: `${Math.round(siteX)}, ${Math.round(siteY)}`,
          off: `${Math.round(drawnX - siteX)}, ${Math.round(drawnY - siteY)} px`
        };
      }
    }
    return null;
  }
  // The art window that the board is currently showing, in art coordinates.
  function visibleRegion() {
    const view = state.view;
    if (!view || !view.rect || !(view.scale > 0)) return null;
    return {
      x0: Math.floor(-view.ox / view.scale),
      y0: Math.floor(-view.oy / view.scale),
      x1: Math.ceil((view.rect.width - view.ox) / view.scale),
      y1: Math.ceil((view.rect.height - view.oy) / view.scale)
    };
  }
  // At the opening zoom the board shows a small slice of its 1000x1000 art, so
  // most templates are off screen and worth skipping before they are drawn.
  function isTemplateVisible(template) {
    const region = visibleRegion();
    if (!region || !template || !template.image) return true;
    const width = template.frameWidth != null ? template.frameWidth : template.image.width;
    const height = template.frameHeight != null ? template.frameHeight : template.image.height;
    if (!(width > 0) || !(height > 0)) return true;
    state.templates.total++;
    const visible = template.x + width > region.x0 && template.x < region.x1 && template.y + height > region.y0 && template.y < region.y1;
    if (visible) state.templates.visible++;
    return visible;
  }
  function reportFrame() {
    const total = state.templates.total;
    if (total === 0 || !state.view) return;
    const visible = state.templates.visible;
    const region = visibleRegion();
    if (!state.reported) {
      state.reported = true;
      console.info('[Charity] Pixel Place overlay', {
        board: `${state.boardSize}`,
        dpr: Math.min(2, window.devicePixelRatio || 1),
        zoom: `${round(state.view.scale)}x`,
        view: `ox ${Math.round(state.view.ox)}, oy ${Math.round(state.view.oy)}`,
        visible: region ? `art x ${region.x0}-${region.x1}, y ${region.y0}-${region.y1} of ${MAIN_CANVAS_SIZE}x${MAIN_CANVAS_SIZE}` : null,
        templates: `${visible} of ${total} in view`,
        placement: checkTemplate(state.view)
      });
    } else if (visible === 0 && !state.hinted) {
      state.hinted = true;
      console.info('[Charity] no templates in view', `${total} loaded, showing art x ${region.x0}-${region.x1}, y ${region.y0}-${region.y1} of ${MAIN_CANVAS_SIZE}x${MAIN_CANVAS_SIZE} - zoom out to find them`);
    } else if (visible > 0) {
      state.hinted = false;
    }
  }
  function round(value) {
    return Math.round(value * 100) / 100;
  }
  function toArtPixel(clientX, clientY) {
    const board = getBoard();
    if (!board || !usesBoard()) return null;
    const view = surfaceView(board) || openingView(board);
    if (!view) return null;
    return {
      x: Math.floor((clientX - view.rect.left - view.ox) / view.scale),
      y: Math.floor((clientY - view.rect.top - view.oy) / view.scale)
    };
  }
  // Elements that must always draw on top of the overlay.
  const ABOVE_OVERLAY_SELECTOR = '.place-cooldown.place-float, .place-picker.game-floating-card';
  // The overlay sits just above the board but below the lowest numeric z-index
  // among the elements above, so those elements always cover it.
  function getOverlayZIndex(board) {
    const boardZ = parseInt(getComputedStyle(board).zIndex, 10);
    const base = Number.isNaN(boardZ) ? 0 : boardZ;
    let lowest = Infinity;
    for (const element of document.querySelectorAll(ABOVE_OVERLAY_SELECTOR)) {
      const z = parseInt(getComputedStyle(element).zIndex, 10);
      if (!Number.isNaN(z) && z < lowest) lowest = z;
    }
    if (lowest === Infinity) return String(base);
    return String(Math.max(base, lowest - 1));
  }
  function updateOverlayStyles() {
    const board = getBoard();
    const parent = board && board.parentElement;
    if (!board || !usesBoard() || !parent) return false;
    const rect = board.getBoundingClientRect();
    const parentRect = parent.getBoundingClientRect();
    // Sit directly after the board in the DOM, so that any later sibling (such
    // as a floating card with an automatic z-index) paints over the overlay.
    if (canvasContainer.parentElement !== parent || canvasContainer.previousSibling !== board) {
      parent.insertBefore(canvasContainer, board.nextSibling);
    }
    // The board can be moved around without resizing it - a collapsing header
    // or an opening dialog is enough - so this runs every frame and only writes
    // styles that actually changed.
    const style = {
      width: `${board.width}px`,
      height: `${board.height}px`,
      left: `${rect.left - parentRect.left - parent.clientLeft}px`,
      top: `${rect.top - parentRect.top - parent.clientTop}px`,
      zIndex: getOverlayZIndex(board),
      transform: board.width ? `scale(${rect.width / board.width})` : 'none'
    };
    if (JSON.stringify(style) === applied) return true;
    applied = JSON.stringify(style);
    // Keep one overlay pixel per board pixel and scale the layer down with CSS,
    // exactly how the board itself maps its backing store onto CSS pixels.
    canvasContainer.style.width = style.width;
    canvasContainer.style.height = style.height;
    canvasContainer.style.left = style.left;
    canvasContainer.style.top = style.top;
    canvasContainer.style.zIndex = style.zIndex;
    canvasContainer.style.transform = style.transform;
    return true;
  }
  function preferCanvases(canvasElements) {
    const board = document.querySelector(BOARD_SELECTOR);
    if (!board || !board.isConnected) return canvasElements;
    return [board];
  }
  async function waitForBoard() {
    for (let i = 0; i < 40; i++) {
      const board = document.querySelector(BOARD_SELECTOR);
      if (board && isSized(board)) return true;
      await sleep(250);
    }
    return false;
  }
  return {
    matches: matches,
    preferCanvases: preferCanvases,
    waitForBoard: waitForBoard,
    updateOverlayStyles: updateOverlayStyles,
    applyDrawTransform: applyDrawTransform,
    isTemplateVisible: isTemplateVisible,
    reportFrame: reportFrame,
    bitmapFor: bitmapFor,
    setDotSize: dotSize => {
      state.dotSize = dotSize;
    },
    setPointer: (clientX, clientY) => {
      state.pointer = {x: clientX, y: clientY};
      return toArtPixel(clientX, clientY);
    },
    syncPointer: () => {
      if (!state.pointer) return;
      const pixel = toArtPixel(state.pointer.x, state.pointer.y);
      if (!pixel) return;
      currentX = pixel.x;
      currentY = pixel.y;
    }
  };
}
const siteAdapters = [createSecretsProjectAdapter()];
let siteAdapter;
function getSiteAdapter() {
  if (siteAdapter === undefined) siteAdapter = siteAdapters.find(adapter => adapter.matches()) || null;
  return siteAdapter;
}

const canvasContainer = document.createElement('div');
let canvasElements = [];
let selectedCanvas;
const canvasObserver = new MutationObserver(updateOverlayStyles);
const canvas = document.createElement('canvas');
let ctx;
let canvasBounds;
let scaleFactor;
canvasContainer.classList.add('charity-overlay-container');
canvas.classList.add('charity-overlay');
async function findCanvases() {
  while (document.readyState !== 'complete') {
    await sleep(1000);
  }
  let sleep$1 = 0;
  while (canvasElements.length === 0) {
    if ((await GM.getValue('canvasFound', false)) && !windowIsEmbedded()) return;
    await sleep(1000 * sleep$1);
    sleep$1++;
    canvasElements = findElementOfType(document.documentElement, HTMLCanvasElement);
    let plurple_canvas = document.querySelector('#canvas-image-wrapper')
    if (plurple_canvas)
        canvasElements.push(plurple_canvas)
  }
  GM.setValue('canvasFound', true);
}
function selectBestCanvas(canvasElements) {
  const adapter = getSiteAdapter();
  if (adapter) canvasElements = adapter.preferCanvases(canvasElements);
  if (canvasElements.length === 0) return null;
  selectedCanvas = canvasElements[0];
  let selectionChanged = false;
  let selectedBounds = selectedCanvas.getBoundingClientRect();
  for (let i = 0; i < canvasElements.length; i++) {
    const canvas = canvasElements[i];
    const attemptBounds = canvas.getBoundingClientRect();
    const selectedArea = selectedBounds.width * selectedBounds.height;
    const attemptArea = attemptBounds.width * attemptBounds.height;
    if (attemptArea > selectedArea || i === 0) {
      selectedCanvas = canvas;
      selectedBounds = attemptBounds;
      selectionChanged = true;
    }
  }
  if (selectionChanged) {
    canvasObserver.disconnect();
    canvasObserver.observe(selectedCanvas, {
      attributes: true
    });
  }
  updateOverlayStyles();
}
function updateOverlayStyles() {
  const adapter = getSiteAdapter();
  if (adapter && adapter.updateOverlayStyles()) return;
  const computedStyle = getComputedStyle(selectedCanvas);
  const selectedBounds = selectedCanvas.getBoundingClientRect();
  canvasContainer.style.width = `${selectedCanvas.width}px`;
  canvasContainer.style.height = `${selectedCanvas.height}px`;
  canvasContainer.style.left = computedStyle.left === 'auto' || computedStyle.left === '0px' ? '0px' : `${selectedBounds.x}px`;
  canvasContainer.style.top = computedStyle.top === 'auto' || computedStyle.top === '0px' ? '0px' : `${selectedBounds.y}px`;
  canvasContainer.style.zIndex = computedStyle.zIndex;
  canvasContainer.style.transform = computedStyle.transform === 'none' ? 'none' : `scale(${selectedBounds.width / selectedCanvas.width})`;
}
async function updateOverlayCanvas(dotSize = 2) {
  if (!selectedCanvas) return;
  canvas.width = selectedCanvas.width;
  canvas.height = selectedCanvas.height;
  ctx = canvas.getContext('2d');
  const adapter = getSiteAdapter();
  if (adapter) {
    // The adapter draws dots into the art, so no mask is wanted here.
    adapter.setDotSize(dotSize);
    templateBitmap = adapter.bitmapFor;
    canvas.style.maskImage = '';
    canvas.style.display = dotSize === 0 ? 'none' : '';
    canvasContainer.appendChild(canvas);
    return;
  }
  const dotSizes = [0, await mask14, await mask13, await mask12, await mask23, await mask34, 1, 1];
  if (dotSizes[dotSize] === 0) {
    canvas.style.maskImage = '';
    canvas.style.display = 'none';
  } else if (dotSizes[dotSize] === 1) {
    canvas.style.maskImage = '';
    canvas.style.display = '';
  } else {
    canvas.style.maskImage = `url(${dotSizes[dotSize]})`;
    canvas.style.maskSize = `1px 1px`;
    canvas.style.display = '';
  }
  canvasContainer.appendChild(canvas);
}
async function init$4() {
  const adapter = getSiteAdapter();
  if (adapter) await adapter.waitForBoard();
  await findCanvases();
  if (canvasElements === undefined) return;
  selectBestCanvas(canvasElements);
  if (selectedCanvas === undefined) return;
  console.log('Found Canvas:');
  console.log(selectedCanvas);
  selectedCanvas.parentElement.appendChild(canvasContainer);
  const style = document.createElement('style');
  style.setAttribute('type', 'text/css');
  style.textContent = css_248z;
  selectedCanvas.parentElement.appendChild(style);
  updateOverlayCanvas();
  draw();
}
function draw() {
  const siteAdapter = getSiteAdapter();
  // A canvas that pans and zooms inside a fixed element can also be moved
  // around by the page, so its layer is glued back to it every frame.
  if (siteAdapter) siteAdapter.updateOverlayStyles();
  canvas.width = selectedCanvas.width || selectedCanvas.clientWidth;
  canvas.height = selectedCanvas.height || selectedCanvas.clientHeight;
  canvasBounds = canvas.getBoundingClientRect();
  scaleFactor = canvasBounds.width / canvas.width;
  const left = Math.floor(canvasBounds.x * -1 / scaleFactor) - 5;
  const top = Math.floor(canvasBounds.y * -1 / scaleFactor) - 5;
  const right = canvas.width - (left + Math.ceil(window.innerWidth / scaleFactor) + 10);
  const bottom = canvas.height - (top + Math.ceil(window.innerHeight / scaleFactor) + 10);
  canvas.style.clipPath = `inset(${top}px ${right}px ${bottom}px ${left}px)`;
  ctx.reset();
  ctx.globalCompositeOperation = 'destination-over';
  // A canvas that pans and zooms its art needs the overlay to follow along, so
  // the site's transform is applied before any template is drawn.
  const drawTemplates = !siteAdapter || siteAdapter.applyDrawTransform(ctx);
  if (drawTemplates && siteAdapter) siteAdapter.syncPointer();
  const currentSeconds = Date.now() / 1000;
  const seenList = new Set();
  const traverseQueue = getInitialTraverseQueue();
  while (drawTemplates && traverseQueue.length > 0) {
    traverseQueue[0].tree.forEach((value, key) => {
      if (!seenList.has(key)) {
        traverseQueue.push({
          url: key,
          tree: value
        });
      } else {
        traverseQueue[0].tree.delete(key);
      }
    });
    if (!seenList.has(traverseQueue[0].url) && getTemplateCache().has(traverseQueue[0].url)) {
      const templateJson = getTemplateCache().get(traverseQueue[0].url);
      if (templateJson && templateJson.templates) {
        for (const template of templateJson.templates) {
          try {
            if (siteAdapter && !siteAdapter.isTemplateVisible(template)) continue;
            drawTemplate(template, currentSeconds);
            updateContactInfo(template, currentSeconds);
          } catch (e) {
            console.error(e);
          }
        }
      }
    }
    seenList.add(traverseQueue.shift().url);
  }
  if (drawTemplates && siteAdapter) siteAdapter.reportFrame();
  resetContactInfo();
  previousX = currentX;
  previousY = currentY;
  currentContactInfoTemplate = null;
  requestAnimationFrame(draw);
}
// Lets a site adapter swap the bitmap a template is drawn from, which is how
// dots are rendered at art resolution instead of through a canvas pixel mask.
// The scale is how many source pixels there are per art pixel.
let templateBitmap = template => ({
  bitmap: template.bitmap,
  scale: 1
});
function getCurrentFrameIndex(template, currentSeconds) {
  if (!template.looping && template.startTimestamp + template.frameCount * template.secondsPerFrame < currentSeconds) return template.frameCount - 1;
  return negativeSafeModulo(Math.floor((currentSeconds - template.startTimestamp) / template.secondsPerFrame), template.frameCount);
}
function drawTemplate(template, currentSeconds) {
  var _ref, _ref2, _ref3, _template$frameWidth, _template$frameHeight, _template$frameWidth2, _template$frameHeight2;
  if (!template.looping && currentSeconds > template.startTimestamp + template.secondsPerFrame * template.frameCount) return;
  if (!template.image) return;
  const frameIndex = getCurrentFrameIndex(template, currentSeconds);
  if (template.image.width === 0 || template.image.height === 0) return;
  // A site adapter may hand back a bitmap that is not 1:1 with the art, such as
  // one with the dots baked in at sub pixel resolution, so the source rectangle
  // is scaled to match while the destination stays in art pixels.
  const source = templateBitmap(template);
  const gridWidth = Math.round((_ref = template.image.width / template.frameWidth) != null ? _ref : template.image.width);
  const gridX = frameIndex % gridWidth;
  const gridY = Math.floor(frameIndex / gridWidth);
  ctx.drawImage(source.bitmap, ((_ref2 = gridX * template.frameWidth) != null ? _ref2 : template.image.width) * source.scale, ((_ref3 = gridY * template.frameHeight) != null ? _ref3 : template.image.height) * source.scale, ((_template$frameWidth = template.frameWidth) != null ? _template$frameWidth : template.image.width) * source.scale, ((_template$frameHeight = template.frameHeight) != null ? _template$frameHeight : template.image.height) * source.scale, template.x, template.y, (_template$frameWidth2 = template.frameWidth) != null ? _template$frameWidth2 : template.image.width, (_template$frameHeight2 = template.frameHeight) != null ? _template$frameHeight2 : template.image.height);
  template.currentFrame = frameIndex;
}
let currentX = -1;
let currentY = -1;
let previousX = -1;
let previousY = -1;
async function updateContactPosition(e) {
  if (!(await GM.getValue('contactInfo', false))) return;
  const adapter = getSiteAdapter();
  if (adapter) {
    const pixel = adapter.setPointer(e.clientX, e.clientY);
    if (!pixel) return;
    if (currentX === pixel.x && currentY === pixel.y) return;
    currentX = pixel.x;
    currentY = pixel.y;
    return;
  }
  const x = Math.floor((e.clientX - canvasBounds.x) / scaleFactor);
  const y = Math.floor((e.clientY - canvasBounds.y) / scaleFactor);
  if (currentX === x && currentY === y) return;
  currentX = x;
  currentY = y;
}
let currentContactInfoTemplate = null;
const [faction$1, setFaction] = solidJs.createSignal('');
const [contact$1, setContact] = solidJs.createSignal('');
const [templateName$1, setTemplateName] = solidJs.createSignal('');
const [contactVisible, setContactVisible] = solidJs.createSignal(false);
async function updateContactInfo(template, currentSeconds) {
  var _template$frameWidth3, _template$frameHeight3, _ref4;
  if (currentX === previousX && currentY === previousY) return;
  if (currentContactInfoTemplate !== null) return;
  const x1 = template.x;
  const y1 = template.y;
  const x2 = x1 + ((_template$frameWidth3 = template.frameWidth) != null ? _template$frameWidth3 : template.image.width);
  const y2 = y1 + ((_template$frameHeight3 = template.frameHeight) != null ? _template$frameHeight3 : template.image.height);
  if (currentX < x1) return;
  if (currentY < y1) return;
  if (currentX >= x2) return;
  if (currentY >= y2) return;
  const frameIndex = getCurrentFrameIndex(template, currentSeconds);
  if (template.image.width === 0 || template.image.height === 0) return;
  const gridWidth = Math.round((_ref4 = template.image.width / template.frameWidth) != null ? _ref4 : template.image.width);
  const x = frameIndex % gridWidth * template.frameWidth + (currentX - x1);
  const y = Math.floor(frameIndex / gridWidth) * template.frameHeight + (currentY - y1);
  const alpha = template.image.data[y * (template.image.width * 4) + x * 4 + 3];
  if (alpha <= 127) return;
  currentContactInfoTemplate = template;
  setFaction(currentContactInfoTemplate.faction);
  setContact(currentContactInfoTemplate.contact);
  setTemplateName(currentContactInfoTemplate.name);
  setContactVisible(true);
}
function resetContactInfo() {
  if (currentX === previousX && currentY === previousY) return;
  if (currentContactInfoTemplate !== null) return;
  setContactVisible(false);
}
function hideOverlay() {
  canvas.style.opacity = '0%';
}
function showOverlay() {
  canvas.style.opacity = '';
}

var _tmpl$$3 = /*#__PURE__*/web.template(`<div class=charity-panel-body><div class=charity-panel-body-setting-header><h2>Show Overlay</h2><button class=charity-setting-keybind></button></div><div class=charity-panel-body-setting-header><h2>Increase Dot Size</h2><button class=charity-setting-keybind></button></div><div class=charity-panel-body-setting-header><h2>Decrease Dot Size</h2><button class=charity-setting-keybind></button></div><div class=charity-panel-body-setting-header><h2>Contact Info</h2><button class=charity-setting-keybind></button></div><div class=charity-panel-body-setting-header><h2>Open Settings</h2><button class=charity-setting-keybind>`);
const [changingKeybind, setChangingKeybind] = solidJs.createSignal('');
let showOverlayKeybind;
let setShowOverlayKeybind;
let dotSizeIncreaseKeybind;
let setDotSizeIncreaseKeybind;
let dotSizeDecreaseKeybind;
let setDotSizeDecreaseKeybind;
let contactInfoKeybind;
let setContactInfoKeybind;
let openSettingsKeybind;
let setOpenSettingsKeybind;
async function init$3() {
  [showOverlayKeybind, setShowOverlayKeybind] = solidJs.createSignal(await GM.getValue('showOverlayKeybind', {
    display: 'V',
    register: 'v'
  }));
  [dotSizeIncreaseKeybind, setDotSizeIncreaseKeybind] = solidJs.createSignal(await GM.getValue('dotSizeIncreaseKeybind', {
    display: 'PageUp',
    register: 'pageup'
  }));
  [dotSizeDecreaseKeybind, setDotSizeDecreaseKeybind] = solidJs.createSignal(await GM.getValue('dotSizeDecreaseKeybind', {
    display: 'PageDown',
    register: 'pagedown'
  }));
  [contactInfoKeybind, setContactInfoKeybind] = solidJs.createSignal(await GM.getValue('contactInfoKeybind', {
    display: 'C',
    register: 'c'
  }));
  [openSettingsKeybind, setOpenSettingsKeybind] = solidJs.createSignal(await GM.getValue('openSettingsKeybind', {
    display: 'T',
    register: 't'
  }));
}
function KeybindsBody() {
  return (() => {
    var _el$ = _tmpl$$3(),
      _el$2 = _el$.firstChild,
      _el$3 = _el$2.firstChild,
      _el$4 = _el$3.nextSibling,
      _el$5 = _el$2.nextSibling,
      _el$6 = _el$5.firstChild,
      _el$7 = _el$6.nextSibling,
      _el$8 = _el$5.nextSibling,
      _el$9 = _el$8.firstChild,
      _el$10 = _el$9.nextSibling,
      _el$11 = _el$8.nextSibling,
      _el$12 = _el$11.firstChild,
      _el$13 = _el$12.nextSibling,
      _el$14 = _el$11.nextSibling,
      _el$15 = _el$14.firstChild,
      _el$16 = _el$15.nextSibling;
    _el$4.$$focusout = resetChangingKeybind;
    _el$4.$$click = () => {
      setChangingKeybind('showOverlay');
    };
    _el$4.$$keydown = setKeybind;
    web.insert(_el$4, web.createComponent(solidJs.Show, {
      get when() {
        return changingKeybind() === 'showOverlay';
      },
      children: "..."
    }), null);
    web.insert(_el$4, web.createComponent(solidJs.Show, {
      get when() {
        return changingKeybind() !== 'showOverlay';
      },
      get children() {
        return showOverlayKeybind().display;
      }
    }), null);
    _el$7.$$focusout = resetChangingKeybind;
    _el$7.$$click = () => {
      setChangingKeybind('dotSizeIncrease');
    };
    _el$7.$$keydown = setKeybind;
    web.insert(_el$7, web.createComponent(solidJs.Show, {
      get when() {
        return changingKeybind() === 'dotSizeIncrease';
      },
      children: "..."
    }), null);
    web.insert(_el$7, web.createComponent(solidJs.Show, {
      get when() {
        return changingKeybind() !== 'dotSizeIncrease';
      },
      get children() {
        return dotSizeIncreaseKeybind().display;
      }
    }), null);
    _el$10.$$focusout = resetChangingKeybind;
    _el$10.$$click = () => {
      setChangingKeybind('dotSizeDecrease');
    };
    _el$10.$$keydown = setKeybind;
    web.insert(_el$10, web.createComponent(solidJs.Show, {
      get when() {
        return changingKeybind() === 'dotSizeDecrease';
      },
      children: "..."
    }), null);
    web.insert(_el$10, web.createComponent(solidJs.Show, {
      get when() {
        return changingKeybind() !== 'dotSizeDecrease';
      },
      get children() {
        return dotSizeDecreaseKeybind().display;
      }
    }), null);
    _el$13.$$focusout = resetChangingKeybind;
    _el$13.$$click = () => {
      setChangingKeybind('contactInfo');
    };
    _el$13.$$keydown = setKeybind;
    web.insert(_el$13, web.createComponent(solidJs.Show, {
      get when() {
        return changingKeybind() === 'contactInfo';
      },
      children: "..."
    }), null);
    web.insert(_el$13, web.createComponent(solidJs.Show, {
      get when() {
        return changingKeybind() !== 'contactInfo';
      },
      get children() {
        return contactInfoKeybind().display;
      }
    }), null);
    _el$16.$$focusout = resetChangingKeybind;
    _el$16.$$click = () => {
      setChangingKeybind('openSettings');
    };
    _el$16.$$keydown = setKeybind;
    web.insert(_el$16, web.createComponent(solidJs.Show, {
      get when() {
        return changingKeybind() === 'openSettings';
      },
      children: "..."
    }), null);
    web.insert(_el$16, web.createComponent(solidJs.Show, {
      get when() {
        return changingKeybind() !== 'openSettings';
      },
      get children() {
        return openSettingsKeybind().display;
      }
    }), null);
    return _el$;
  })();
}
function setKeybind(e) {
  if (changingKeybind() === '') return;
  e.preventDefault();
  if (!e.key || ['ctrl', 'control', 'shift', 'alt', 'meta', 'cmd'].includes(e.key.toLowerCase())) return;
  const shortcutKey = shortcut__namespace.buildKey({
    base: e.key,
    modifierState: {
      c: e.ctrlKey,
      s: e.shiftKey,
      a: e.altKey,
      m: e.metaKey
    },
    caseSensitive: false
  }).replace(/^i:/, '');
  const shortcutComponents = shortcutKey.split('-');
  let displayKey = '';
  if (shortcutComponents[0] === 'm' && shortcutComponents.length > 1) {
    displayKey += 'Meta + ';
    shortcutComponents.shift();
  }
  if (shortcutComponents[0] === 'c' && shortcutComponents.length > 1) {
    displayKey += 'Ctrl + ';
    shortcutComponents.shift();
  }
  if (shortcutComponents[0] === 's' && shortcutComponents.length > 1) {
    displayKey += 'Shift + ';
    shortcutComponents.shift();
  }
  if (shortcutComponents[0] === 'a' && shortcutComponents.length > 1) {
    displayKey += 'Alt + ';
    shortcutComponents.shift();
  }
  const keyCode = e.code.replace(/^Key|Digit/, '').charAt(0).toUpperCase() + e.code.replace(/^Key|Digit/, '').slice(1);
  displayKey += keyCode === '' ? e.key : keyCode;
  if (changingKeybind() === 'showOverlay') {
    if (e.key === 'Escape' && !e.ctrlKey && !e.shiftKey && !e.altKey && !e.metaKey) {
      setShowOverlayKeybind({
        display: 'None',
        register: ''
      });
      GM.setValue('showOverlayKeybind', showOverlayKeybind());
    } else {
      setShowOverlayKeybind({
        display: displayKey,
        register: shortcutKey
      });
      GM.setValue('showOverlayKeybind', showOverlayKeybind());
    }
  }
  if (changingKeybind() === 'dotSizeIncrease') {
    if (e.key === 'Escape' && !e.ctrlKey && !e.shiftKey && !e.altKey && !e.metaKey) {
      setDotSizeIncreaseKeybind({
        display: 'None',
        register: ''
      });
      GM.setValue('dotSizeIncreaseKeybind', dotSizeIncreaseKeybind());
    } else {
      setDotSizeIncreaseKeybind({
        display: displayKey,
        register: shortcutKey
      });
      GM.setValue('dotSizeIncreaseKeybind', dotSizeIncreaseKeybind());
    }
  }
  if (changingKeybind() === 'dotSizeDecrease') {
    if (e.key === 'Escape' && !e.ctrlKey && !e.shiftKey && !e.altKey && !e.metaKey) {
      setDotSizeDecreaseKeybind({
        display: 'None',
        register: ''
      });
      GM.setValue('dotSizeDecreaseKeybind', dotSizeDecreaseKeybind());
    } else {
      setDotSizeDecreaseKeybind({
        display: displayKey,
        register: shortcutKey
      });
      GM.setValue('dotSizeDecreaseKeybind', dotSizeDecreaseKeybind());
    }
  }
  if (changingKeybind() === 'contactInfo') {
    if (e.key === 'Escape' && !e.ctrlKey && !e.shiftKey && !e.altKey && !e.metaKey) {
      setContactInfoKeybind({
        display: 'None',
        register: ''
      });
      GM.setValue('contactInfoKeybind', contactInfoKeybind());
    } else {
      setContactInfoKeybind({
        display: displayKey,
        register: shortcutKey
      });
      GM.setValue('contactInfoKeybind', contactInfoKeybind());
    }
  }
  if (changingKeybind() === 'openSettings') {
    if (e.key === 'Escape' && !e.ctrlKey && !e.shiftKey && !e.altKey && !e.metaKey) {
      setOpenSettingsKeybind({
        display: 'None',
        register: ''
      });
      GM.setValue('openSettingsKeybind', openSettingsKeybind());
    } else {
      setOpenSettingsKeybind({
        display: displayKey,
        register: shortcutKey
      });
      GM.setValue('openSettingsKeybind', openSettingsKeybind());
    }
  }
  setChangingKeybind('');
}
function resetChangingKeybind() {
  setChangingKeybind('');
}
web.delegateEvents(["keydown", "click", "focusout"]);

var _tmpl$$2 = /*#__PURE__*/web.template(`<div><p class=charity-contact-panel-line>Artwork: </p><p class=charity-contact-panel-line>Faction: </p><p class=charity-contact-panel-line>Contact: </p><p class=charity-contact-panel-subtext>(Press [<!>] to hide)`);
const contactPanel = ui.getPanel({
  className: 'charity-contact-info',
  shadow: false,
  theme: 'dark'
});
contactPanel.body.classList.add('charity-contact-panel');
let contactPanelOpen = false;
function openContactPanel() {
  if (!contactPanelOpen) {
    contactPanel.show();
    document.body.parentElement.appendChild(contactPanel.host);
    centerContactPanel();
    contactPanelOpen = true;
  }
}
function closeContactPanel() {
  contactPanel.hide();
  contactPanelOpen = false;
}
let templateName = '';
let faction = '';
let contact = '';
solidJs.createEffect(() => {
  if (templateName === templateName$1()) return;
  if (faction === faction$1()) return;
  if (contact === contact$1()) return;
  centerContactPanel();
  templateName = templateName$1();
  faction = faction$1();
  contact = contact$1();
});
solidJs.createEffect(() => {
  if (contactVisible()) {
    contactPanel.wrapper.style.display = '';
    centerContactPanel();
  } else {
    contactPanel.wrapper.style.display = 'none';
  }
});
function centerContactPanel() {
  const {
    width
  } = contactPanel.body.getBoundingClientRect();
  const x = window.innerWidth / 2 - width / 2;
  contactPanel.wrapper.style.inset = `28px auto auto ${x}px`;
}
async function init$2() {
  function ContactPanel() {
    return (() => {
      var _el$ = _tmpl$$2(),
        _el$2 = _el$.firstChild;
        _el$2.firstChild;
        var _el$4 = _el$2.nextSibling;
        _el$4.firstChild;
        var _el$6 = _el$4.nextSibling;
        _el$6.firstChild;
        var _el$8 = _el$6.nextSibling,
        _el$9 = _el$8.firstChild,
        _el$11 = _el$9.nextSibling;
        _el$11.nextSibling;
      web.insert(_el$2, () => templateName$1(), null);
      web.insert(_el$4, () => faction$1(), null);
      web.insert(_el$6, () => contact$1(), null);
      web.insert(_el$8, () => contactInfoKeybind().display, _el$11);
      return _el$;
    })();
  }
  web.render(ContactPanel, contactPanel.body);
  document.documentElement.addEventListener('mousemove', e => {
    updateContactPosition(e);
  });
}

var _tmpl$$1 = /*#__PURE__*/web.template(`<img>`),
  _tmpl$2$1 = /*#__PURE__*/web.template(`<div class=charity-panel-back><img>`),
  _tmpl$3 = /*#__PURE__*/web.template(`<div class=charity-panel-body-setting-header><h2>Settings Icon</h2><input type=checkbox class=charity-setting-toggle>`),
  _tmpl$4 = /*#__PURE__*/web.template(`<div class=charity-panel-body><button class=charity-setting-button><img>Keybinds...</button><div class=charity-panel-body-setting-header><h2>Show Overlay</h2><input type=checkbox class=charity-setting-toggle></div><div class=charity-panel-body-setting-header><h2>Style</h2><h2></h2></div><input class=charity-setting-range type=range min=0 max=7 step=1><div class=charity-panel-body-setting-header><h2>Contact Info</h2><input type=checkbox class=charity-setting-toggle></div><div class=charity-panel-body-setting-header><h2>Check For Updates</h2><input type=checkbox class=charity-setting-toggle>`),
  _tmpl$5 = /*#__PURE__*/web.template(`<div class=charity-settings-container><div><h2></h2><div class=charity-panel-close><img></div></div><div class=charity-panel-footer><div class=charity-panel-footer-credits><span>Made&nbsp;with&nbsp;❤️&nbsp;by</span><ul><li><span>Mikarific&nbsp;from&nbsp;</span><a href=https://pride.place/ target=_blank><img>&nbsp;<span>r/PlacePride</span></a>.</li><li><span>April&nbsp;&&nbsp;Endu&nbsp;from&nbsp;</span><a href=https://osu.place/ target=_blank><img>&nbsp;<span>r/osuplace</span></a>.</li></ul></div><div class=charity-panel-footer-branding><div><img></div><a href=https://discord.gg/anBdazHcrH target=_blank><img></a><a href=https://github.com/PlaceCharity/Charity target=_blank><img>`);
if (!windowIsEmbedded()) {
  if (menuCommandSupport()) {
    GM.registerMenuCommand('Open Settings', () => GM.setValue('openSettings', true));
  }
}
async function init$1() {
  const settingsIconResource = await settings;
  const closeIconResource = await close;
  const backIconResource = await back;
  const keyboardIconResource = await keyboard;
  const versionResource = await version;
  const discordIconResource = await discord;
  const githubIconResource = await github;
  const charityLogoResource = await charityLogo;
  const factionPrideResource = await factionPride;
  const factionOsuResource = await factionOsu;
  const [showOverlay$1, setShowOverlay] = solidJs.createSignal(await GM.getValue('showOverlay', true));
  const [dotSize, setDotSize] = solidJs.createSignal(Math.min(7, await GM.getValue('dotSize', 1)));
  GM.setValue('dotSize', dotSize());
  const [contactInfo, setContactInfo] = solidJs.createSignal(await GM.getValue('contactInfo', false));
  const [settingsIconEnabled, setSettingsIconEnabled] = solidJs.createSignal(await GM.getValue('settingsIconEnabled', true));
  const [checkForUpdates, setCheckForUpdates] = solidJs.createSignal(await GM.getValue('checkForUpdates', true));
  solidJs.createEffect(() => {
    if (showOverlay$1()) {
      showOverlay();
    } else {
      hideOverlay();
    }
  });
  solidJs.createEffect(() => {
    updateOverlayCanvas(dotSize());
  });
  solidJs.createEffect(() => {
    if (contactInfo()) {
      openContactPanel();
    } else {
      closeContactPanel();
    }
  });
  await init$3();
  if (valueChangeListenerSupport()) {
    GM.addValueChangeListener('openSettings', (key, oldValue, newValue) => {
      if (newValue) {
        openSettings();
        GM.deleteValue('openSettings');
      }
    });
  } else {
    setInterval(async () => {
      if (await GM.getValue('openSettings')) {
        openSettings();
        GM.deleteValue('openSettings');
      }
    }, 500);
  }
  const settingsIcon = ui.getPanel({
    className: 'charity-panel',
    shadow: false,
    theme: 'dark'
  });
  settingsIcon.setMovable(true);
  settingsIcon.body.classList.add('charity-settings-icon');
  if (settingsIconEnabled()) {
    web.render(() => {
      let disableClick = false;
      return (() => {
        var _el$ = _tmpl$$1();
        _el$.$$click = () => {
          if (!disableClick) openSettings();
          disableClick = false;
        };
        _el$.$$mousemove = e => {
          if (e.buttons !== 0) disableClick = true;
        };
        web.setAttribute(_el$, "src", settingsIconResource);
        return _el$;
      })();
    }, settingsIcon.body);
    settingsIcon.show();
    settingsIcon.wrapper.style.inset = `87px auto auto ${window.innerWidth - 60}px`;
  }
  const settingsPanel = ui.getPanel({
    className: 'charity-panel',
    shadow: false,
    theme: 'dark'
  });
  settingsPanel.body.classList.add('charity-settings-panel');
  const [fadeShown, setFadeShown] = solidJs.createSignal(false);
  const [keybindPanelOpen, setKeybindPanelOpen] = solidJs.createSignal(false);
  let settingsPanelOpen = false;
  function openSettings() {
    if (!settingsPanelOpen) {
      settingsIcon.hide();
      settingsPanel.show();
      document.body.appendChild(settingsPanel.host);
      settingsPanelOpen = !settingsPanelOpen;
    }
  }
  function closeSettings() {
    settingsPanel.hide();
    if (settingsIconEnabled()) settingsIcon.show();
    settingsPanelOpen = false;
  }
  function SettingsPanel() {
    const versionCanvas = document.createElement('canvas');
    const versionCtx = versionCanvas.getContext('2d');
    const versionImage = new Image();
    versionImage.src = versionResource;
    versionImage.onload = () => {
      let versionWidth = 9;
      const versionCharacters = [...GM.info.script.version];
      for (let i = 0; i < versionCharacters.length; i++) {
        if (['.'].includes(versionCharacters[i])) versionWidth += 3;
        if (['1'].includes(versionCharacters[i])) versionWidth += 4;
        if (['7'].includes(versionCharacters[i])) versionWidth += 7;
        if (['2', '5'].includes(versionCharacters[i])) versionWidth += 8;
        if (['0', '3', '4', '6', '8', '9'].includes(versionCharacters[i])) versionWidth += 9;
      }
      versionCanvas.width = versionWidth;
      versionCanvas.height = 16;
      let versionCursor = 9;
      versionCtx.drawImage(versionImage, 0, 0, 9, 16, 0, 0, 9, 16);
      for (let i = 0; i < versionCharacters.length; i++) {
        if (versionCharacters[i] === '.') versionCtx.drawImage(versionImage, 9, 0, 3, 16, versionCursor, 0, 3, 16);
        if (versionCharacters[i] === '0') versionCtx.drawImage(versionImage, 12, 0, 9, 16, versionCursor, 0, 9, 16);
        if (versionCharacters[i] === '1') versionCtx.drawImage(versionImage, 21, 0, 4, 16, versionCursor, 0, 4, 16);
        if (versionCharacters[i] === '2') versionCtx.drawImage(versionImage, 25, 0, 8, 16, versionCursor, 0, 8, 16);
        if (versionCharacters[i] === '3') versionCtx.drawImage(versionImage, 33, 0, 9, 16, versionCursor, 0, 9, 16);
        if (versionCharacters[i] === '4') versionCtx.drawImage(versionImage, 42, 0, 9, 16, versionCursor, 0, 9, 16);
        if (versionCharacters[i] === '5') versionCtx.drawImage(versionImage, 51, 0, 8, 16, versionCursor, 0, 8, 16);
        if (versionCharacters[i] === '6') versionCtx.drawImage(versionImage, 59, 0, 9, 16, versionCursor, 0, 9, 16);
        if (versionCharacters[i] === '7') versionCtx.drawImage(versionImage, 68, 0, 7, 16, versionCursor, 0, 7, 16);
        if (versionCharacters[i] === '8') versionCtx.drawImage(versionImage, 75, 0, 9, 16, versionCursor, 0, 9, 16);
        if (versionCharacters[i] === '9') versionCtx.drawImage(versionImage, 84, 0, 9, 16, versionCursor, 0, 9, 16);
        if (['.'].includes(versionCharacters[i])) versionCursor += 3;
        if (['1'].includes(versionCharacters[i])) versionCursor += 4;
        if (['7'].includes(versionCharacters[i])) versionCursor += 7;
        if (['2', '5'].includes(versionCharacters[i])) versionCursor += 8;
        if (['0', '3', '4', '6', '8', '9'].includes(versionCharacters[i])) versionCursor += 9;
      }
    };
    return (() => {
      var _el$2 = _tmpl$5(),
        _el$3 = _el$2.firstChild,
        _el$6 = _el$3.firstChild,
        _el$7 = _el$6.nextSibling,
        _el$8 = _el$7.firstChild,
        _el$28 = _el$3.nextSibling,
        _el$29 = _el$28.firstChild,
        _el$30 = _el$29.firstChild,
        _el$31 = _el$30.nextSibling,
        _el$32 = _el$31.firstChild,
        _el$33 = _el$32.firstChild,
        _el$34 = _el$33.nextSibling,
        _el$35 = _el$34.firstChild,
        _el$36 = _el$32.nextSibling,
        _el$37 = _el$36.firstChild,
        _el$38 = _el$37.nextSibling,
        _el$39 = _el$38.firstChild,
        _el$40 = _el$29.nextSibling,
        _el$41 = _el$40.firstChild,
        _el$42 = _el$41.firstChild,
        _el$43 = _el$41.nextSibling,
        _el$44 = _el$43.firstChild,
        _el$45 = _el$43.nextSibling,
        _el$46 = _el$45.firstChild;
      web.insert(_el$3, web.createComponent(solidJs.Show, {
        get when() {
          return keybindPanelOpen();
        },
        get children() {
          var _el$4 = _tmpl$2$1(),
            _el$5 = _el$4.firstChild;
          _el$4.$$click = () => setKeybindPanelOpen(false);
          web.setAttribute(_el$5, "src", backIconResource);
          return _el$4;
        }
      }), _el$6);
      web.insert(_el$6, () => keybindPanelOpen() ? 'Keybinds' : 'Charity Settings');
      _el$7.$$click = closeSettings;
      web.setAttribute(_el$8, "src", closeIconResource);
      web.insert(_el$2, web.createComponent(solidJs.Show, {
        get when() {
          return !keybindPanelOpen();
        },
        get children() {
          var _el$9 = _tmpl$4(),
            _el$10 = _el$9.firstChild,
            _el$11 = _el$10.firstChild,
            _el$12 = _el$10.nextSibling,
            _el$13 = _el$12.firstChild,
            _el$14 = _el$13.nextSibling,
            _el$15 = _el$12.nextSibling,
            _el$16 = _el$15.firstChild,
            _el$17 = _el$16.nextSibling,
            _el$18 = _el$15.nextSibling,
            _el$19 = _el$18.nextSibling,
            _el$20 = _el$19.firstChild,
            _el$21 = _el$20.nextSibling,
            _el$25 = _el$19.nextSibling,
            _el$26 = _el$25.firstChild,
            _el$27 = _el$26.nextSibling;
          _el$10.$$click = () => {
            setKeybindPanelOpen(true);
          };
          web.setAttribute(_el$11, "src", keyboardIconResource);
          _el$14.$$click = () => {
            setShowOverlay(!showOverlay$1());
            GM.setValue('showOverlay', showOverlay$1());
          };
          web.insert(_el$17, () =>
            dotSize() === 0 ? 'Off' :
            dotSize() === 6 ? 'Solid' :
            dotSize() === 7 ? 'Symbols' :
            `Dots (${dotSize()}/5)`
          );
          _el$18.$$input = e => {
            setDotSize(parseInt(e.target.value));
            GM.setValue('dotSize', dotSize());
            updateOverlayCanvas(dotSize());
          };
          _el$21.$$click = () => {
            setContactInfo(!contactInfo());
            GM.setValue('contactInfo', contactInfo());
          };
          web.insert(_el$9, web.createComponent(solidJs.Show, {
            get when() {
              return menuCommandSupport();
            },
            get children() {
              var _el$22 = _tmpl$3(),
                _el$23 = _el$22.firstChild,
                _el$24 = _el$23.nextSibling;
              _el$24.$$click = () => {
                setSettingsIconEnabled(!settingsIconEnabled());
                GM.setValue('settingsIconEnabled', settingsIconEnabled());
              };
              web.effect(() => _el$24.checked = settingsIconEnabled());
              return _el$22;
            }
          }), _el$25);
          _el$27.$$click = () => {
            setCheckForUpdates(!checkForUpdates());
            GM.setValue('checkForUpdates', checkForUpdates());
          };
          web.effect(() => _el$14.checked = showOverlay$1());
          web.effect(() => _el$18.value = dotSize());
          web.effect(() => _el$21.checked = contactInfo());
          web.effect(() => _el$27.checked = checkForUpdates());
          return _el$9;
        }
      }), _el$28);
      web.insert(_el$2, web.createComponent(solidJs.Show, {
        get when() {
          return keybindPanelOpen();
        },
        get children() {
          return web.createComponent(KeybindsBody, {});
        }
      }), _el$28);
      web.setAttribute(_el$35, "src", factionPrideResource);
      web.setAttribute(_el$39, "src", factionOsuResource);
      web.setAttribute(_el$42, "src", charityLogoResource);
      web.insert(_el$41, versionCanvas, null);
      web.setAttribute(_el$44, "src", discordIconResource);
      web.setAttribute(_el$46, "src", githubIconResource);
      web.effect(() => web.className(_el$3, `charity-panel-header ${fadeShown() ? 'charity-panel-header-fade' : ''}`));
      return _el$2;
    })();
  }
  web.render(SettingsPanel, settingsPanel.body);
  settingsPanel.body.addEventListener('scroll', () => {
    if (settingsPanel.body.scrollTop === 0) setFadeShown(false);
    if (settingsPanel.body.scrollTop !== 0) setFadeShown(true);
  });
  document.documentElement.addEventListener('keydown', e => {
    if (!e.key || ['ctrl', 'control', 'shift', 'alt', 'meta', 'cmd'].includes(e.key.toLowerCase())) return;
    const shortcutKey = shortcut__namespace.buildKey({
      base: e.key,
      modifierState: {
        c: e.ctrlKey,
        s: e.shiftKey,
        a: e.altKey,
        m: e.metaKey
      },
      caseSensitive: false
    }).replace(/^i:/, '');
    if (showOverlayKeybind().register === shortcutKey) {
      setShowOverlay(!showOverlay$1());
      GM.setValue('showOverlay', showOverlay$1());
      e.preventDefault();
    }
    if (dotSizeIncreaseKeybind().register === shortcutKey) {
      setDotSize(Math.min(dotSize() + 1, 7));
      GM.setValue('dotSize', dotSize());
      updateOverlayCanvas(dotSize());
      e.preventDefault();
    }
    if (dotSizeDecreaseKeybind().register === shortcutKey) {
      setDotSize(Math.max(dotSize() - 1, 0));
      GM.setValue('dotSize', dotSize());
      updateOverlayCanvas(dotSize());
      e.preventDefault();
    }
    if (contactInfoKeybind().register === shortcutKey) {
      setContactInfo(!contactInfo());
      GM.setValue('contactInfo', contactInfo());
      e.preventDefault();
    }
    if (openSettingsKeybind().register === shortcutKey) {
      if (settingsPanelOpen) {
        closeSettings();
      } else {
        openSettings();
      }
      e.preventDefault();
    }
  });
}
web.delegateEvents(["mousemove", "click", "input"]);

var _tmpl$ = /*#__PURE__*/web.template(`<div><div class=charity-panel-header><h2>Charity is out of date!</h2><div class=charity-panel-close><img></div><p class=charity-panel-text>You are on v<!>! The latest verion is v<!>!</p></div><hr class=charity-panel-divider><div class=charity-panel-changelog><h3>Latest Changelog</h3><ul></ul></div><div class=charity-panel-footer><div class=charity-panel-footer-outdated><button>Continue Anyways</button><a role=button>Update`),
  _tmpl$2 = /*#__PURE__*/web.template(`<li>`);
async function init() {
  const [newestVersion, setNewestVersion] = solidJs.createSignal(GM.info.script.version);
  const [changelog, setChangelog] = solidJs.createSignal([]);
  function semverCompare(current, latest) {
    if (current.startsWith(latest + '-')) return -1;
    if (latest.startsWith(current + '-')) return 1;
    return current.localeCompare(latest, undefined, {
      numeric: true,
      sensitivity: 'case',
      caseFirst: 'upper'
    }) === -1;
  }
  const closeIconResource = await close;
  const outdatedPanel = ui.getPanel({
    className: 'charity-panel',
    shadow: false,
    theme: 'dark'
  });
  outdatedPanel.setMovable(true);
  outdatedPanel.body.classList.add('charity-outdated-panel');
  web.render(OutdatedPanel, outdatedPanel.body);
  let outdatedPanelOpen = false;
  function openOutdatedPanel() {
    if (!outdatedPanelOpen) {
      outdatedPanel.show();
      document.body.appendChild(outdatedPanel.host);
      outdatedPanel.wrapper.style.inset = `0px auto auto 0px`;
      const {
        width,
        height
      } = outdatedPanel.body.getBoundingClientRect();
      const x = window.innerWidth / 2 - width / 2;
      const y = window.innerHeight / 2 - height / 2;
      outdatedPanel.wrapper.style.inset = `${y}px auto auto ${x}px`;
      outdatedPanelOpen = true;
    }
  }
  function closeOutdatedPanel() {
    outdatedPanel.hide();
    outdatedPanelOpen = false;
  }
  function OutdatedPanel() {
    return (() => {
      var _el$ = _tmpl$(),
        _el$2 = _el$.firstChild,
        _el$3 = _el$2.firstChild,
        _el$4 = _el$3.nextSibling,
        _el$5 = _el$4.firstChild,
        _el$6 = _el$4.nextSibling,
        _el$7 = _el$6.firstChild,
        _el$10 = _el$7.nextSibling,
        _el$8 = _el$10.nextSibling,
        _el$11 = _el$8.nextSibling;
        _el$11.nextSibling;
        var _el$12 = _el$2.nextSibling,
        _el$13 = _el$12.nextSibling,
        _el$14 = _el$13.firstChild,
        _el$15 = _el$14.nextSibling,
        _el$16 = _el$13.nextSibling,
        _el$17 = _el$16.firstChild,
        _el$18 = _el$17.firstChild,
        _el$19 = _el$18.nextSibling;
      _el$4.$$click = closeOutdatedPanel;
      web.setAttribute(_el$5, "src", closeIconResource);
      web.insert(_el$6, () => GM.info.script.version, _el$10);
      web.insert(_el$6, newestVersion, _el$11);
      web.insert(_el$15, web.createComponent(solidJs.For, {
        get each() {
          return changelog();
        },
        children: change => (() => {
          var _el$20 = _tmpl$2();
          web.insert(_el$20, change);
          return _el$20;
        })()
      }));
      _el$18.$$click = () => outdatedPanel.hide();
      _el$19.$$click = () => outdatedPanel.hide();
      web.effect(() => {
        var _GM$info$script$downl;
        return web.setAttribute(_el$19, "href", (_GM$info$script$downl = GM.info.script.downloadURL) != null ? _GM$info$script$downl : 'https://github.com/PlaceCharity/Charity/releases/latest/download/CharityOverlay.user.js');
      });
      return _el$;
    })();
  }
  if (await GM.getValue('checkForUpdates', true)) {
    const response = await fetch({
      method: 'GET',
      url: 'https://api.github.com/repos/PlaceCharity/Charity/releases/latest'
    });
    if (response.status !== 200) return;
    const responseJSON = JSON.parse(response.responseText);
    const version = responseJSON['tag_name'].replace(/^userscript@/, '');
    if (!semverCompare(GM.info.script.version, version)) return;
    setNewestVersion(version);
    const responseChangelog = responseJSON.body.trim().split('\n').map(change => change.replace(/^[0-9a-f]{7} userscript: /, ''));
    setChangelog(responseChangelog);
    openOutdatedPanel();
  }
}
web.delegateEvents(["click"]);

// At document-start the document may not have a <head> yet, so the shared
// stylesheet is injected as soon as there is somewhere to put it.
function addStyle() {
  if (document.head || document.readyState !== 'loading') {
    if (asyncAddStyleSupport()) {
      GM.addStyle(css_248z);
    } else {
      GM_addStyle(css_248z);
    }
    return;
  }
  document.addEventListener('readystatechange', function onReadyStateChange() {
    if (!document.head && document.readyState === 'loading') return;
    document.removeEventListener('readystatechange', onReadyStateChange);
    addStyle();
  });
}
addStyle();
(async () => {
  // Reset GM values from top window
  if (!windowIsEmbedded()) {
    var _utils$findJSONTempla;
    GM.deleteValue('openSettings');
    GM.deleteValue('canvasFound');
    GM.setValue('jsonTemplate', (_utils$findJSONTempla = findJSONTemplateInURL(window.location)) != null ? _utils$findJSONTempla : '');
  }
  await init$4();
  await init$5();
  await init$1();
  await init$2();
  await init();
})();

})(VM.solid, VM.solid.web, VM, VM.shortcut);
