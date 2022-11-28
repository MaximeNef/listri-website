/* global html2canvas */
/**
 * This file is injected into the iframe to get access to the contentWindow.
 * This is done only when the site is viewed in the userTrack dashboard.
 */

(function () {
    var elementUnder = null;
    var lastElement = null;
    var lastEvent = null;

    /**
     * Hides the WP admin bar and removes the html
     */
    UST.removeWpAdminBar = function () {
        var bar = document.getElementById('wpadminbar');
        if (bar === null) return;

        // Remove margin
        document.documentElement.style.setProperty('margin-top', '0', 'important');
        // Hide the bar
        bar.style.display = 'none';
    };

    // Stop paint flashing when scrolling iframe
    document.documentElement.style.backfaceVisibility = 'hidden';

    // Hide the WP admin bar, make sure it was loaded
    setTimeout(UST.removeWpAdminBar, 300);

    // Decompress the compressed (i) with > *:nth-child(i);
    function uncompressSelector(selector) {
        return selector.replace(/\((\d+)\)/g, ' > *:nth-child($1)');
    }

    /**
     * Text selection might return a Text Node.
     * As it can not be selected by querySelector we use the #T# flag
     * And immediately before it we have the index of the node in its parent's children list.
     * 
     * eg. #content .blah 31#T# - Means get the 31st node of .blah children list
     * @param {any} selector 
     */
    function getElementNodeIncludingTextNode(selector) {
        var selector = uncompressSelector(selector);

        var node = null;
        if (selector.indexOf('#T#') !== -1) {
            var sel = selector.replace('#T#', '');
            var lastSpace = sel.lastIndexOf(' ');
            var textNodeIndex = +sel.slice(lastSpace);
            sel = sel.slice(0, lastSpace);

            node = document.querySelector(sel);
            // Get the nextNode element, 0 indexed
            node = node.childNodes.item(textNodeIndex - 1);
        } else {
            node = document.querySelector(selector);
        }

        return node;
    }

    // Allow cross-domain interactions using HTML5 postMessage
    var receiver = function (event) {

        // Don't filter requests by domain, no security problems
        if (event.origin === UST.settings.serverPath || true) {
            // Check if JSON
            if (event.data[0] === '!' || (event.data[0] > 'A' && event.data[0] < 'z'))
                return;

            var data = JSON.parse(event.data);

            if (data.task !== undefined)
                lastEvent = event;

            switch (data.task) {
                // Allow hover events to be triggered, alter stylesheet
                case 'CSS':
                    // Also remove the admin bar when the stylsheet update is called
                    UST.removeWpAdminBar();

                    for (var i = 0; ; ++i) {
                        var classes = document.styleSheets[i];
                        if (classes === undefined || classes === null)
                            break;

                        try {
                            classes = classes.rules;
                        } catch (e) {
                            console.warn("Can't read the css rules of: " + classes.href, e);
                            continue;
                        }

                        if (classes === undefined || classes === null)
                            continue;

                        for (var x = 0; x < classes.length; x++) {
                            if (classes[x].selectorText !== undefined) {
                                classes[x].selectorText = classes[x].selectorText.replace(':hover', '.hover');
                            }
                        }
                    }
                    break;

                // Set element under
                case 'EL':
                    elementUnder = document.elementFromPoint(data.x - window.scrollX, data.y - window.scrollY);
                    break;

                // Trigger hover
                case 'HOV':
                    iframeHover();
                    break;

                // Trigger click
                case 'CLK':
                    iframeRealClick();
                    break;

                // Update input value
                case 'VAL':
                    jQuery(uncompressSelector(data.sel)).trigger('focus').val(data.val);
                    break;

                // Return iframe size
                case 'SZ':
                    event.source.postMessage(JSON.stringify({
                        task: 'SZ',
                        w: Math.max(jQuery(document).width(), jQuery('html').width(), window.innerWidth),
                        h: Math.max(jQuery(document).height(), jQuery('html').height(), window.innerHeight)
                    }), event.origin);
                    break;

                // Scroll iframe
                case 'SCR':
                    // Try to scroll either (both) window and body, depending which ones has the scrollbar
                    window.scrollTo(data.left, data.top);
                    document.body.scrollTo(data.left, data.top);
                    break;

                // Set selection
                case 'SEL':
                    window.getSelection().removeAllRanges();

                    if (data.startElPath !== null) {
                        var range = document.createRange();

                        // Start
                        var startEl = getElementNodeIncludingTextNode(data.startElPath);
                        range.setStart(startEl, data.start);

                        // End
                        var endEl = getElementNodeIncludingTextNode(data.endElPath);
                        range.setEnd(endEl, data.end);

                        window.getSelection().addRange(range);
                    }
                    break;

                // X position of first div
                case 'STATIC':
                    event.source.postMessage(JSON.stringify({ task: 'STATIC', X: UST.DOM.offset(UST.getContentDiv()).left }), event.origin);
                    break;

                // Set AB variables
                case 'UST_INIT': {
                    let shouldRefresh = false;

                    // Update AB test variants to match what user saw
                    for (const key in data.forceAb) {
                        const abKey = 'ust_ab_' + key;
                        if (localStorage[abKey] !== data.forceAb[key]) {
                            shouldRefresh = true;
                            localStorage[abKey] = data.forceAb[key];
                        }
                    }

                    // Remove AB tests variants stored in localStorage that user didn't have
                    for (const key in localStorage) {
                        if (key.indexOf('ust_ab_') !== 0) continue;
                        const abKey = key.replace('ust_ab_', '');
                        if (!(abKey in data.forceAb)) {
                            shouldRefresh = true;
                            localStorage.removeItem(key);
                        }
                    }

                    // Make sure we clear any local A/B tests that were being edited
                    if (localStorage['ust_f_ab']) {
                        localStorage.removeItem('ust_f_ab');
                        shouldRefresh = true;
                    }

                    if (shouldRefresh) {
                        window.location.reload();
                    }
                }
                    break;

                case 'SET_NODE_SELECTION_MODE': {
                    if (data.enabled) {
                        enableNodeSelectionMode();
                    } else {
                        disableNodeSelectionMode();
                    }
                    break;
                }

                case 'FORCE_AB_TEST_VARIANT': {
                    var shouldRefresh = false;
                    var abName = 'AB-' + data.testName;
                    var abKey = 'ust_ab_' + abName;
                    var abTest = UST.abTests.find((t) => t.n === data.testName);
                    var variant = data.variantIndex > 0 && abTest && abTest.v[data.variantIndex - 1] ? abTest.v[data.variantIndex - 1].n : 'default';
                    if (localStorage[abKey] !== variant) {
                        localStorage.clear();
                        localStorage[abKey] = variant;
                        shouldRefresh = true;
                    }

                    // Set local AB tests
                    if (data.localABTests && localStorage['ust_f_ab'] !== data.localABTests) {
                        localStorage['ust_f_ab'] = data.localABTests;
                        shouldRefresh = true;
                    }

                    if (shouldRefresh) {
                        window.location.reload();
                    }
                    break;
                }

                // Return current iframe path
                case 'PTH':
                    event.source.postMessage(JSON.stringify({ task: 'PTH', p: location.pathname }), event.origin);
                    break;

                case 'RELOAD_URL':
                    window.location.href = data.url;
                    break;

                // Append the html2canvas library
                case 'addHtml2canvas':
                    if (typeof window.html2canvasAdded === "undefined") {
                        window.html2canvasAdded = true;
                        var s = document.createElement("script");
                        s.type = "text/javascript";
                        document.body.appendChild(s);
                        s.onload = function () {
                            event.source.postMessage(JSON.stringify({ task: 'html2canvasAdded' }), event.origin);
                        };
                        s.src = UST.settings.serverPath + '/lib/html2canvas/html2canvas.js';
                    } else {
                        // The script is already added
                        event.source.postMessage(JSON.stringify({ task: 'html2canvasAdded' }), event.origin);
                    }
                    break;

                // Return a screenshot of the site
                case 'screenshot':
                    // Scroll to top before trying to add the screenshot
                    jQuery(document).scrollTop(0);
                    jQuery(document).scrollLeft(0);

                    html2canvas(document.body, {
                        logging: false,
                        useCORS: false,
                        proxy: UST.settings.serverPath + '/lib/html2canvas/proxy.php'
                    }).then(function (canvas) {
                        var img = new Image();
                        img.onload = function () {
                            img.onload = null;
                            event.source.postMessage(JSON.stringify({ task: 'screenshot', img: img.src }), event.origin);
                        };
                        img.onerror = function () {
                            img.onerror = null;
                            window.console.log("Not loaded image from canvas.toDataURL");

                        };
                        img.src = canvas.toDataURL("image/png");
                    });
                    break;
            }
        }
    };

    // Send scroll event back to panel
    //iframe is scrolled
    window.addEventListener('scroll', ustIframeScrolled, { passive: true });
    function addBodyScrollListener() {
        document.body.addEventListener('scroll', ustIframeScrolled, { passive: true });
    }
    UST.DOM.ready(addBodyScrollListener);

    function ustIframeScrolled() {
        var top = UST.DOM.docScrollTop();
        var left = UST.DOM.docScrollLeft();
        if (lastEvent !== null) {
            lastEvent.source.postMessage(JSON.stringify({ task: 'SCROLL', top: top, left: left }), lastEvent.origin);
        } else {
            console.log("Scroll event happened before parent call to iframe");
        }
    };

    // Triger click
    var iframeRealClick = function () {
        if (elementUnder !== null) {
            if (elementUnder.nodeName === 'SELECT') {
                jQuery(elementUnder).get(0).setAttribute('size', elementUnder.options.length);
            } else {
                var link = jQuery(elementUnder).closest('a').eq(0);
                if (link !== undefined) {
                    link = link.attr('href');
                    if (link !== undefined && (link.indexOf('//') !== -1 || link.indexOf('www.') !== -1)
                        && link.indexOf(window.location.host) === -1)
                        link = 'external';
                }

                // Check for page leave
                if (link !== 'external') {
                    // Don't trigger click if element has class UST_noClick
                    if (!jQuery(elementUnder).closest('.UST_noClick').length) {
                        fireEvent(elementUnder, 'click');
                    } else {
                        UST.DEBUG && console.log("Didn't trigger the click. Had class UST_noClick");
                    }
                } else {
                    // User clicked on an external link, don't trigger the click
                    UST.DEBUG && console.log("Didn't trigger click on external link");
                }
            }
        }

        if (lastElement !== null && lastElement.nodeName === 'SELECT')
            jQuery(lastElement).get(0).setAttribute('size', 1);
        lastElement = elementUnder;
    };

    // Trigger hover event
    var lastHover = null;
    var lastParents = null;
    var iframeHover = function () {
        if (lastHover !== elementUnder) {
            var parents = jQuery(elementUnder).parents().addBack();

            if (lastParents !== null) {
                lastParents.removeClass("hover");
                lastParents.trigger("mouseout");
            }

            parents.addClass("hover");
            parents.trigger("mouseover");

            lastParents = parents;
        } else {
            return 1;
        }

        // No element is currently hovered
        lastHover = elementUnder;
        return 0;
    };

    // Function used to trigger click event
    var fireEvent = function (element, event) {
        // If the element already has a .click() method use that
        // HTMLElements usually have `click`
        if (event === 'click' && typeof element.click === 'function') {
            return element.click();
        }

        var evt;
        if (document.createEvent) {
            // Dispatch for firefox + others
            evt = document.createEvent("HTMLEvents");
            evt.initEvent(event, true, true); // event type,bubbling,cancelable
            return !element.dispatchEvent(evt);
        } else {
            // Dispatch for IE
            evt = document.createEventObject();
            return element.fireEvent('on' + event, evt);
        }
    };

    window.addEventListener('message', receiver, false);


    function getVerboseUniquePath(element) {
        //https://github.com/rishihahs/domtalk/blob/master/index.js
        if (element === document.documentElement) {
            return ':root';
        } else if (element.tagName && element.tagName.toUpperCase() === 'BODY') {
            return 'body';
        } else if (element.id) {
            return '#' + element.id;
        }


        var parent = element.parentNode;
        var parentLoc = getVerboseUniquePath(parent);

        var children = parent.childNodes;

        var index = 0;
        for (var i = 0; i < children.length; i++) {
            // nodeType is 1 if ELEMENT_NODE
            // or if current element is textNode, also count previous textNodes
            if (children[i].nodeType === 1 || element.nodeType === 3) {
                if (children[i] === element) {
                    break;
                }

                index++;
            }
        }

        var loc = parentLoc + ' > *:nth-child(' + (index + 1) + ')';

        if (element.classList[0]) {
            loc = loc.replace('*', '.' + element.classList[0]);
        } else {
            loc = loc.replace('*', element.tagName.toLowerCase());
        }
        return loc;
    }

    // Send selected element to parent iframe, useful for creating A/B tests or adding tags
    let prevSelTarget = null;
    let selTooltip = document.createElement('div');
    selTooltip.style.position = 'fixed';
    selTooltip.style.background = 'rgba(0,0,0,0.9)';
    selTooltip.style.padding = '10px';
    selTooltip.style.zIndex = '10000000';
    selTooltip.style.borderRadius = '10px';
    selTooltip.style.color = 'white';
    selTooltip.style.display = 'none';

    function updateAuxSelectedElement(target) {
        if (prevSelTarget) {
            prevSelTarget.style.boxShadow = null;
        }

        if (target) {
            target.style.boxShadow = "0px 0px 0px 1px cyan";
            const pos = target.getBoundingClientRect();
            selTooltip.style.transform = `translate(${pos.x}px, ${pos.y}px)`;
            selTooltip.style.display = 'block';
            selTooltip.innerText = getVerboseUniquePath(target);
        } else {
            selTooltip.style.display = 'none';
        }

        prevSelTarget = target;
    }

    function onNSMouseMove(e) {
        window.clearTimeout(updateElSelTimeout);
        updateElSelTimeout = window.setTimeout(() => updateAuxSelectedElement(e.target), 20);
    }
    function onNSClick(e) {
        e.preventDefault();
        e.stopPropagation();

        if (prevSelTarget) {
            // Return the selector and text of currently clicked node
            if (prevSelTarget) {
                lastEvent.source.postMessage(
                    JSON.stringify({
                        task: 'NODE_SELECTED',
                        sel: getVerboseUniquePath(prevSelTarget),
                        text: prevSelTarget.innerHTML,
                        currentPath: window.location.pathname,
                    }),
                    lastEvent.origin
                );
            }
        }
    }

    let updateElSelTimeout;
    function enableNodeSelectionMode() {
        document.body.style.cursor = 'pointer';
        window.addEventListener('mousemove', onNSMouseMove, true);
        window.addEventListener('click', onNSClick, true);
        document.body.appendChild(selTooltip);
    }

    function disableNodeSelectionMode() {
        document.body.style.cursor = null;
        window.clearTimeout(updateElSelTimeout);
        window.removeEventListener('mousemove', onNSMouseMove);
        window.removeEventListener('click', onNSClick);
        if (document.body.contains(selTooltip)) {
            document.body.removeChild(selTooltip);
        }
    }
})();
