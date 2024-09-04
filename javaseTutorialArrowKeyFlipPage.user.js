// ==UserScript==
// @name         JavaSE Tutorial Arrow Key Flip Page
// @namespace    https://4kliksAlex.github.com/
// @version      2024-08-28
// @description  Trigger navigation elements with left and right arrow keys
// @author       4kliksAlex
// @match        https://docs.oracle.com/javase/tutorial/**
// @icon         https://www.google.com/s2/favicons?sz=64&domain=oracle.com
// @grant        none
// @liscense     GPLv3
// ==/UserScript==

(function() {
    'use strict';

    document.addEventListener('keydown', function(event) {
        if (event.key === 'ArrowLeft') {
            event.preventDefault();
            const leftButton = document.querySelector('#MainFlow > div:nth-child(7) > a:nth-child(1)');
            if (leftButton) {
                leftButton.click();
            }
        } else if (event.key === 'ArrowRight') {
            event.preventDefault();
            const rightButton = document.querySelector('#MainFlow > div:nth-child(7) > a:nth-child(3)');
            if (rightButton) {
                rightButton.click();
            }
        }
    });
})();
