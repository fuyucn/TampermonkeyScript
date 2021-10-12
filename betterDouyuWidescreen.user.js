// ==UserScript==
// @name         Better Douyu widescreen
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  Better widescrren experience for douyu
// @author       Hypn0s_
// @match        https://www.douyu.com/*
// @icon         https://www.google.com/s2/favicons?domain=douyu.com
// @grant        none
// ==/UserScript==

(function () {
  "use strict";
  initbetterForWideScreen();
  cssInjection();

  function initbetterForWideScreen() {
    var mainPlayer = document.getElementsByClassName("layout-Main")[0];
    mainPlayer.style["max-width"] = "1700px";
    mainPlayer.style.margin = "0 auto";
  }

  function cssInjection() {
    // # min width of card for myFollow page
    var style = document.createElement("style");
    style.type = "text/css";
    if (style.styleSheet) {
      style.styleSheet.cssText =
        "@media only screen and (max-width: 2856px) , (min-width: 2160px) {.layout-Main .layout-Cover-item {width: 20% !important;}}";
    } else {
      style.appendChild(
        document.createTextNode(
          "@media only screen and (max-width: 2856px) , (min-width: 2160px) { .layout-Main .layout-Cover-item {width: 20% !important;}}",
        ),
      );
    }
    document.getElementsByTagName("head")[0].appendChild(style);
  }
})();
