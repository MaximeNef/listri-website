/*
 * Copyright (C) TIPS4DESIGN SRL - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Cristian Buleandră <support@usertrack.net>, Wed Jun 03 2020
 */

(function () {
    if (typeof NodeList.prototype.forEach !== "function") NodeList.prototype.forEach = Array.prototype.forEach;
    UST.abTests = [];

    try {
        if (top !== self && localStorage['ust_f_ab']) {
            UST.abTests = JSON.parse(localStorage['ust_f_ab']);
        }
    } catch (e) { }

    function runOnPage(p) {
        if (!p || p === '*') {
            return true;
        }
        return window.location.pathname === p;
    }

    // TODO: Make ab file for each domain
    UST.runAbTests = function () {
        for (var i = 0; i < UST.abTests.length; ++i) {
            var test = UST.abTests[i];
            if (!runOnPage(test.p)) { continue; }

            var abName = 'AB-' + test.n;

            var abKey = 'ust_ab_' + abName;
            var v;

            // Get existing variant from localStorage
            try {
                v = localStorage[abKey];
                if (v !== undefined) {
                    if (v !== '0' && v !== 'default') {
                        // Find the variant index based on name (1 based)
                        for (var j = 0; j < test.v.length; ++j) {
                            if (test.v[j] && v === test.v[j].n) {
                                v = j + 1;
                                break;
                            }
                        }
                    } else {
                        v = 0;
                    }
                }
            } catch (e) { }

            // Get a random variant
            if (isNaN(v) || (v > 0 && !test.v[v - 1])) {
                if (top !== self) {
                    v = 0;
                } else {
                    v = Math.random() * (test.v.length + 1) | 0;
                    try { 
                        // Save it in localStorage so it persits between refreshes
                        localStorage[abKey] = v > 0 ? test.v[v - 1].n : 0; 
                    } catch (e) { }
                }
            }

            if (v !== 0) {
                var changes = test.v[v - 1].c;
                if (!runOnPage(test.v[v - 1].p)) { continue; }
                for (var j = 0; j < changes.length; ++j) {
                    var c = changes[j];
                    if (!runOnPage(c.p)) { continue; }
                    var nodes = document.querySelectorAll(c.s);

                    if (nodes && nodes.length) {
                        var u = c.u;
                        nodes.forEach(function (node) {
                            if (typeof u === 'string') {
                                node.innerText = u;
                            } else {
                                for (var k = 0; k < u.length; ++k) {
                                    if (typeof u[k] === 'string') {
                                        node.innerText = u[k];
                                    } else {
                                        node.style[u[k][0]] = u[k][1];
                                    }
                                }
                            }
                        });
                    }
                }
            }

            if (top === self) {
                UST.addTag(abName + '-' + (v === 0 ? 'default' : test.v[v - 1].n));
            }
        }

        // Show body if still hidden
        var el = document.getElementById('ust_body_style');
        el && el.remove();
    }

    window.addEventListener('DOMContentLoaded', UST.runAbTests);
})();
