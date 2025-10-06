// ==UserScript==
// @name         Better Douyu widescreen
// @namespace    http://tampermonkey.net/
// @version      0.3
// @description  Better widescreen experience for Douyu
// @author       Hypn0s_
// @match        https://www.douyu.com/*
// @icon         https://www.google.com/s2/favicons?domain=douyu.com
// @grant        none
// ==/UserScript==

(function () {
  "use strict";

  // Wait for DOM to be ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

  function init() {
    initBetterWidescreenLayout();
    injectCustomStyles();
  }

  function initBetterWidescreenLayout() {
    const mainLayout = document.querySelector(".layout-Main");
    if (mainLayout) {
      mainLayout.style.maxWidth = "1700px";
      mainLayout.style.margin = "0 auto";
    }
  }

  function injectCustomStyles() {
    const style = document.createElement("style");
    style.textContent = `
      @media only screen and (min-width: 2160px) and (max-width: 2856px) {
        .layout-Main .layout-Cover-item {
          width: 20% !important;
        }
      }
    `;
    document.head.appendChild(style);
  }
})();
