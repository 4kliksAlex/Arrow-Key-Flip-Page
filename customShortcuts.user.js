// ==UserScript==
// @name         Custom Shortcuts
// @namespace    https://4kliksAlex.github.com/
// @version      2024-08-28
// @description  Trigger elements with custom shortcuts
// @author       4kliksAlex
// @match        *://*/*
// @icon         https://upload.wikimedia.org/wikipedia/commons/c/c7/Computer_keyboard_German-key-4.svg
// @grant        none
// @license      GPLv3
// ==/UserScript==

(function () {
    "use strict";

    const selectors = {
      "*://*.oracle.com/javase/tutorial/*": {
        ArrowLeft: "body > div.MainFlow_wide > div:nth-child(6) > a:nth-child(1)",
        ArrowRight:
          "body > div.MainFlow_wide > div:nth-child(6) > a:nth-child(3)",
      },
      "*://*.google.com/search?*": {
        ArrowLeft: "#pnprev",
        ArrowRight: "#pnnext",
      },
    };

    function getSelectorsForCurrentURL() {
      const url = window.location.href;
      for (const pattern in selectors) {
        const urlPattern = new URLPattern(pattern, {
          ignoreCase: true,
        });
        const patternMatch = urlPattern.test(url);
        console.info(pattern, patternMatch);
        if (patternMatch) {
          return selectors[pattern];
        }
      }
      return null;
    }

    const currentSelectors = getSelectorsForCurrentURL();
    if (currentSelectors) {
      document.addEventListener("keydown", function (event) {
        const selector = currentSelectors[event.key];
        if (selector) {
          event.preventDefault();
          const element = document.querySelector(selector);
          if (element) {
            element.click();
          }
        }
      });
    }
})();
