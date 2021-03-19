// ==UserScript==
// @name         Better Douyu widescreen
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Better widescrren experience for douyu
// @author       Hypn0s_
// @match        https://www.douyu.com/1448854
// @icon         https://www.google.com/s2/favicons?domain=douyu.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    initbetterForWideScreen();
    function initbetterForWideScreen(){
        var mainPlayer = document.getElementsByClassName("layout-Main")[0];
        mainPlayer.style['max-width'] = '1700px';
        mainPlayer.style.margin = '0 auto';
    }
})();
