/*
 * Copyright (C) TIPS4DESIGN SRL - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Cristian Buleandră <support@usertrack.net>, Wed Jun 03 2020
 */

/**
 * Tracker, to be included on the pages where user movement must be monitored.
 * Part of userTrack system.
 */

'use strict';

if (typeof UST !== 'undefined' && UST.settings) {
    alert("userTrack: [tracker.js] was included twice on this page. Please remove one instance.");
}

// Polyfills
if (typeof NodeList.prototype.forEach !== "function") NodeList.prototype.forEach = Array.prototype.forEach;

var UST = {
    DEBUG: false,
    settings: {},
    internalSettings: {
        minIdleTime: 2,
    },
    s: UST.s || Date.now(),
    loadTime: UST.s ? (Date.now() - UST.s) : 0,
    abTests: UST.abTests || [],
    addTag: UST.addTag,
    addEvent: UST.addEvent,
    runAbTests: UST.runAbTests || function () { },
    // Callbacks
    onLoaded: UST.onLoaded,
    onTrackingStarted: UST.onTrackingStarted,
    onSessionCreated: UST.onSessionCreated,
    onPageViewCreated: UST.onPageViewCreated,
    onDataSent: UST.onDataSent,
    onTagAdded: UST.onTagAdded,
    onGDPRAccepted: UST.onGDPRAccepted,
    onGDPRDeclined: UST.onGDPRDeclined,
};

UST.tokenSize = 16; // This matches DB schema for `token`
UST.randomToken = function () {
    var a = '';
    do {
        a += Math.random().toString(36).substr(2);
    } while (a.length < UST.tokenSize);

    return a.substr(0, UST.tokenSize);
};

UST.enableRecord = function () {
    localStorage.noRecord = 'false';
    return 'Recording of this device has been ENABLED.';
};

UST.disableRecord = function () {
    localStorage.noRecord = 'true';
    return 'Recording of this device has been DISABLED.';
};

// Store a random percentage for this user, in case we only want to record X% of all users
UST.randomPerc = Math.random() * 100;

UST.canRecord = function () {

    // If this specific variable is set
    if (window.UST_NO_TRACK) {
        return false;
    }

    // If it is in iframe, don't record (so it doesn't record while watching site in userTrack dashboard)
    if (top !== self) {
        return false;
    }

    // If we don't want to be recorded
    if (localStorage.noRecord === 'true') {
        return false;
    }

    // If doNotTrack flag is true and we should respect it
    if (navigator.doNotTrack === '1' && UST.settings.respectDoNotTrack === true) {
        return false;
    }

    // If is mobile device
    UST.isMobileDevice = (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i).test(navigator.userAgent);
    if (UST.isMobileDevice && !UST.settings.enableMobileTracking) {
        return false;
    }

    // If we only have to record a percentage of visitors
    // If the visitor was not already being recorded
    if (sessionStorage.getItem('token') === null) {
        if (UST.randomPerc >= UST.settings.percentangeRecorded) {
            UST.disableRecord();
            return false;
        }
    }

    return true;
};

/**
 * Helper function to find the main content area.
 * @return {HTMLElement} - The the Element that probably contains the content.
 */
UST.getContentDiv = function () {

    var mostProbable = document.body;
    var maxP = 0;
    var documentWidth = window.innerWidth;
    var documentHeight = window.innerHeight;

    var divList = document.getElementsByTagName('div');
    Array.prototype.forEach.call(divList, function (el) {
        var probability = 0;
        var style = el.currentStyle || window.getComputedStyle(el);

        if (style.position === 'static' || style.position === 'relative')
            probability += 2;

        if (el.scrollHeight > documentHeight / 2)
            probability += 3;

        if (el.parentElement.nodeName === 'BODY')
            probability++;

        if (style.marginLeft === style.marginRight)
            probability++;

        if (el.getAttribute('id') === 'main')
            probability += 3;

        if (el.getAttribute('id') === 'content')
            probability += 2;

        if (el.classList.contains('content'))
            probability += 2;

        if (el.getAttribute('id') === 'container')
            probability++;

        if (el.scrollWidth !== documentWidth)
            probability += 2;

        if (probability > maxP) {
            maxP = probability;
            mostProbable = el;
        }
    });

    return mostProbable;
};

// Get root url to website/ to server
UST.getContextPath = function () {
    return UST.settings.serverPath + '/';
};

// Get domain name, without www.
UST.getDomain = function () {
    var url = document.createElement('a');
    url.setAttribute('href', location.href);

    var port = url.port ? ':' + url.port : '';

    // Always remove www. from the begining
    if (document.domain.indexOf('www.') === 0) {
        return document.domain.substr(4) + port;
    }

    return document.domain + port;
};

UST.removeURLParam = function (key, url) {
    var rtn = url.split("?")[0],
        param,
        paramsArr = [],
        queryString = (url.indexOf("?") !== -1) ? url.split("?")[1] : "";
    if (queryString !== "") {
        paramsArr = queryString.split("&");
        for (var i = paramsArr.length - 1; i >= 0; i -= 1) {
            param = paramsArr[i].split("=")[0];
            if (param === key) {
                paramsArr.splice(i, 1);
            }
        }
        rtn = rtn + "?" + paramsArr.join("&");
    }
    return rtn;
};

// Get the current URL and remove unwanted GET params
UST.getCleanPageURL = function () {
    var currentURL = window.location.pathname + window.location.search;

    // Only compute again if different from last URL
    if (UST.lastURL !== currentURL) {
        UST.lastURL = currentURL;

        UST.cleanPageURL = currentURL;
        for (var key in UST.settings.ignoreGET) {
            var param = UST.settings.ignoreGET[key];
            UST.cleanPageURL = UST.removeURLParam(param, UST.cleanPageURL);

            if (UST.cleanPageURL[UST.cleanPageURL.length - 1] === '?') {
                UST.cleanPageURL = UST.cleanPageURL.slice(0, -1);
            }
        }
    }

    return UST.cleanPageURL;
};

// https://github.com/Cristy94/dynamic-listener
!function (e) { "use strict"; Element.prototype.matches || (Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector || function (e) { for (var t = (this.document || this.ownerDocument).querySelectorAll(e), r = t.length; --r >= 0 && t.item(r) !== this;); return r > -1 }), e.addDynamicEventListener = function (e, t, r, o, n) { e.addEventListener(t, function (e, t) { return function (r) { if (r.target && r.target.matches(e)) return r.delegatedTarget = r.target, void t.apply(this, arguments); var o = event.path || event.composedPath && event.composedPath(); if (o) for (var n = 0; n < o.length; ++n) { var a = o[n]; if (a.matches(e) && (r.delegatedTarget = a, t.apply(this, arguments)), a === r.currentTarget) return } } }(r, o), n) } }(this);

// Functions to store/load numbers as 4 digit numbers
UST.coord4 = {
    // Auxiliary function to prepend '0' to get a 4 digit number
    fillZeros: function (x) {
        x = x.toString();

        while (x.length < 4) {
            x = '0' + x;
        }

        return x;
    },

    // Auxiliary function to get a point from a string, space separated resolution
    get2DPoint: function (x) {

        x = x.toString();

        var p = {
            x: x.substring(0, 4),
            y: x.substring(4)
        };

        // Remove prepending 0s
        while (p.x[0] === '0') {
            p.x = p.x.substring(1);
        }

        while (p.y[0] === '0') {
            p.y = p.y.substring(1);
        }

        return p;
    }
};

// Auxiliarry DOM functions
UST.DOM = {

    ready: function (fn) {
        if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading") fn();
        else document.addEventListener('DOMContentLoaded', fn);
    },

    postAjax: function (url, data, success) {
        var params = typeof data == 'string' ? data : Object.keys(data).map(
            function (k) { return encodeURIComponent(k) + '=' + encodeURIComponent(data[k]); }
        ).join('&');

        var xhr = new XMLHttpRequest();
        xhr.open('POST', url);
        xhr.onreadystatechange = function () {
            if (xhr.readyState > 3 && +xhr.status === 200) { success(xhr.responseText); }
        };
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.send(params);
        return xhr;
    },

    /**
     * Returns the position of the element relative to the document.
     * @param  {HTMLElement} el
     * @return {Object} The `top` and `left` offset.
     */
    offset: function (el) {
        var rect = el.getBoundingClientRect();

        return {
            top: rect.top + UST.DOM.docScrollTop() | 0,
            left: rect.left + UST.DOM.docScrollLeft() | 0
        };
    },

    /**
     * Returns the document scroll top position converted to an integer.
     */
    docScrollTop: function () {
        return (document.body.scrollTop || window.pageYOffset || document.documentElement.scrollTop) | 0;
    },

    /**
     * Returns the document scroll left position converted to an integer.
     */
    docScrollLeft: function () {
        return (document.body.scrollLeft || window.pageXOffset || document.documentElement.scrollLeft) | 0;
    },

    windowWidth: function () {
        return Math.max(document.documentElement.clientWidth, window.innerWidth || 0) | 0;
    },

    windowHeight: function () {
        return (window.innerHeight || document.documentElement.clientHeight) | 0;
    },

    hasClass: function (elem, className) {
        return (" " + elem.className + " ").indexOf(" " + className + " ") > -1;
    },

    getClosest: function (elem, selector) {
        while (elem !== document.body && elem !== document.documentElement && elem) {
            if (elem.matches(selector)) return elem;
            elem = elem.parentElement;
        }
        return null;
    },

    // Get unqiue path to element
    getUniquePath: function (element) {
        //https://github.com/rishihahs/domtalk/blob/master/index.js
        if (element === document.documentElement) {
            return ':root';
        } else if (element.tagName && element.tagName.toUpperCase() === 'BODY') {
            return 'body';
        } else if (element.id) {
            return '#' + element.id;
        }

        var parent = element.parentNode;
        var parentLoc = UST.DOM.getUniquePath(parent);

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
        return parentLoc + '(' + (index + 1) + ')';
    },

    getSelection: function () {
        return window.getSelection();
    }
};

UST.init = function () {

    UST.DEBUG && console.log(localStorage);

    // If tracking is disabled for this device or globally or the user should not be tracked
    if (!UST.canRecord()) return;

    UST.onTrackingStarted && UST.onTrackingStarted();

    // Constants
    var VAL_SEPARATOR = '^';
    var EVT_SEPARATOR = '~';
    var KEY_SEPARATOR = "`";

    // Tagging
    UST.addTag = function (tag) {

        if (!tag) {
            return 0;
        }

        // addTag is also an alias to addEvent if an object is given
        if (typeof tag !== 'string') {
            return UST.addEvent(tag);
        }

        UST.DOM.postAjax(getContextPath() + 'addTag.php', {
            clientID: sessionStorage.getItem('clientID'),
            tagContent: tag
        }, function () {
            UST.DEBUG && console.log('Tag ' + tag + 'added');
            UST.onTagAdded && UST.onTagAdded(tag);
        });

        return 1;
    };

    // Events
    UST.addEvent = function (eventData) {

        if (!eventData.category) {
            console.warn("Event category missing!");
            return 0;
        }

        if (!eventData.action) {
            console.warn("Event action missing!");
            return 0;
        }

        var postArgs = {};
        // Copy object, IE safe
        Object.keys(eventData).forEach(function (key) {
            postArgs[key] = eventData[key];
        });

        postArgs.clientID = sessionStorage.getItem('clientID');
        postArgs.clientPageID = sessionStorage.getItem('clientPageID');
        if (postArgs.data && typeof postArgs.data !== 'string') {
            postArgs.data = JSON.stringify(eventData.data);
        }

        UST.DOM.postAjax(getContextPath() + 'addEvent.php', postArgs, function () {
            UST.DEBUG && console.log('Event added', postArgs);
            UST.onEventAdded && UST.onEventAdded(postArgs);
        });

        return 1;
    };

    // Aliases
    var getContextPath = UST.getContextPath;
    var getDomain = UST.getDomain;

    // Store the last data sent index
    var partialLastIndex = -1;


    /**
     * Just join the Array objects.
     * The Array elements are already strings and compressed.
     *
     * Compressed data has this format:
     * eg.
     * {'t': 'm', 'x': 100, 'y': 500} becomes
     * m_100_500
     * 
     * @param {Array} arr - The array to compress.
     * @return {String}
     */
    UST.ArrayToCompressedData = function (arr) {
        // Empty data guard
        if (!arr || arr.length === 0) return '';

        // Separate events by ~
        // !TODO: Better separate events in order not to have collisions with user input.
        return arr.join(EVT_SEPARATOR);
    };

    /**
     * Calls recurseSend immediately and resets the recurseSendTimeout and sendDataDelay.
     * This might be used to force send all data on page unload or when a specific action happens.
     */
    UST.forceSendData = function () {
        UST.sendDataDelay = 300;
        clearTimeout(UST.recurseSendTimeout);
        recurseSend();
        return 'Data sending has been successfully queued!';
    };

    var hadPreviousSelection = true;
    UST.getSelectionData = function () {
        // Wait a bit for selection/deselection to complete
        setTimeout(function () {
            try {

                var selection = UST.DOM.getSelection();

                if (selection) {

                    if (selection.anchorNode === null) {
                        if (hadPreviousSelection) {
                            record.push('a' + KEY_SEPARATOR + '0');
                            hadPreviousSelection = false;
                        }
                        return;
                    }

                    // If it's a text node replace the last (1) with 1#T#
                    var startElPath = UST.DOM.getUniquePath(selection.anchorNode);
                    if (selection.anchorNode.nodeType === 3) startElPath = startElPath.replace(/\((\d+)\)$/g, ' $1#T#');
                    var endElPath = UST.DOM.getUniquePath(selection.focusNode);
                    if (selection.focusNode.nodeType === 3) endElPath = endElPath.replace(/\((\d+)\)$/g, ' $1#T#');
                    var selStart = selection.anchorOffset;
                    var selEnd = selection.focusOffset;

                    // Make sure end is always larger than start
                    if (selStart > selEnd) {
                        var t = selStart;
                        selStart = selEnd;
                        selEnd = t;

                        t = startElPath;
                        startElPath = endElPath;
                        endElPath = t;
                    }

                    hadPreviousSelection = true;

                    record.push(
                        'a' + KEY_SEPARATOR +
                        encodeURIComponent(startElPath) +
                        VAL_SEPARATOR +
                        encodeURIComponent(endElPath) +
                        VAL_SEPARATOR +
                        encodeURIComponent(selStart) +
                        VAL_SEPARATOR +
                        encodeURIComponent(selEnd)
                    );
                }
            } catch (e) { console.log(e); }
        }, 10);
    };

    UST.compressMovements = function (mapCount) {
        if (!mapCount) {
            return '';
        }

        var arr = [];
        for (var v in mapCount) {
            var obj = UST.coord4.get2DPoint(v);
            obj.count = mapCount[v];
            arr.push(obj.x + VAL_SEPARATOR + obj.y + VAL_SEPARATOR + obj.count);
        }
        return arr.join(EVT_SEPARATOR);
    };

    // If data is given send only given data, otherwise send current data
    UST.sendData = function (clientPageID, data) {

        var wasCached = data !== undefined;

        // Send all data at once, fewer requests
        data = {
            movements: wasCached ? data.movements || '' : '',
            clicks: wasCached ? data.clicks || '' : '',
            partial: wasCached ? data.partial || '' : ''
        };

        if (!wasCached) {

            /**
             * Add movements to data
             */
            var movesString = UST.compressMovements(movements);
            if (movesString.length > 0) {
                data.movements = movesString;
                // Clear old movements
                movements = {};
            }

            /**
             * Add clicks to data
             */
            var clicksString = UST.compressMovements(clicks);
            if (clicksString.length > 0) {
                data.clicks = clicksString;
                // Clear old clicks
                clicks = {};
            }


            // Add partial to data
            var cachedRecords = sessionStorage.getItem('record');

            if (cachedRecords !== null) {
                // Get new data since last sent
                cachedRecords = JSON.parse(cachedRecords);
                data.partial = cachedRecords.slice(partialLastIndex + 1, cachedRecords.length);

                // Update last index sent
                partialLastIndex = cachedRecords.length - 1;
            }

            // Data should be sent, reset our activity
            activityCount = 0;
        }

        /**
         * Send the data if we have new data
         */
        if (data.movements.length || data.clicks.length || data.partial.length) {
            UST.startDataTransferBatch(data, clientPageID);
        } else {
            // No data to send. If both sessions and heatmaps tracking are disabled
            // we still trigger a request to update session duration
            if (UST.settings.recordClickHeatmaps === false &&
                UST.settings.recordMoveHeatmaps === false &&
                UST.settings.enableSessionRecordings === false) {
                UST.transferDataViaPixel(['i=' + clientPageID]);
            }
        }
    };

    /**
     * URIEncode the given value if the setting to encode is true
     */
    UST.encodeIfNecessary = function (val) {
        if (UST.settings.encodeUriData !== true || !val) {
            return val;
        }
        return encodeURIComponent(val);
    }

    /**
     * Starts a request for the `addData.php` tracking pixel.
     * This adds heatmap data and partial session tracking data.
     * @param  {Object} data         The data to send and store on the server.
     * @param  {Number} clientPageID The ID of the current page visit of the current client.
     */
    UST.startDataTransferBatch = function (data, clientPageID) {
        UST.transferDataViaPixel([
            'm=' + UST.encodeIfNecessary(data.movements), // movements, already in string format
            'c=' + UST.encodeIfNecessary(data.clicks), // clicks, already in string format
            'p=' + UST.encodeIfNecessary(UST.ArrayToCompressedData(data.partial) + EVT_SEPARATOR), // partial, is an Array
            'i=' + clientPageID, // clientPageID
        ]);
    };

    UST.startFinalRecordTransfer = function (cachedRecords, clientPageID) {
        UST.transferDataViaPixel([
            'r=' + UST.encodeIfNecessary(UST.ArrayToCompressedData(cachedRecords)),
            'w=1',
            'i=' + clientPageID
        ]);
    };

    var trackingPixelURL = getContextPath() + '/tracker/addData.php';

    /**
     * Adds the given URL params to the tracking pixel src and sets the .src
     * @param  {Array} params A list of parameters to add in the form ['key=value',...]
     */
    UST.transferDataViaPixel = function (params) {
        // Create an image each time, we might have several requests happening at once
        var trackingPixelImg = new Image();

        // Remove empty params (their format is 'v=', length is 2)
        params = params.filter(function (el) {
            return el.length > 2;
        });

        trackingPixelImg.src = trackingPixelURL + '?' + params.join('&');
        UST.onDataSent && UST.onDataSent(params);
    };

    UST.partialToFinal = function () {
        // Send complete record stored in sessionStorage to server
        var cachedRecords = sessionStorage.getItem('record');
        var clientPageID = sessionStorage.getItem('clientPageID');
        sessionStorage.removeItem('record');

        UST.DEBUG && console.log('Trying to save final for clientPage #' + clientPageID, cachedRecords);

        if (cachedRecords !== null) {
            UST.startFinalRecordTransfer(JSON.parse(cachedRecords), clientPageID);
        }
    };

    // Save last page recording as final.
    UST.partialToFinal();

    // Client token, session based on sessionStorage length
    if (sessionStorage.getItem('token') === null) {
        // Erase old clientID (this might not be needed anymore)
        sessionStorage.removeItem('clientID');
        // New token
        sessionStorage.setItem('token', UST.randomToken());
    }

    var token = sessionStorage.getItem('token');

    // Make sure tab is focused while recording
    // @TODO: Record window blur/focus events instead.
    // var focused = true;
    // (document).hover(function () { focused = true; },
    //                       function () { focused = false; });

    /*** Tracker ***/
    var lastDate = 0;
    var lastActionDate = Date.now();
    var movements = {};
    var clicks = {};
    var record = [];
    var activityCount = 0;

    // Last movement coordinates, relX -> static anchor
    var lastX, lastY;
    var relX = 0;

    // If wordpress admin bar is visible, offset all postions vertically
    var offsetY = 0;
    var wpAdminBar = document.getElementById('wpadminbar');
    if (wpAdminBar) {
        offsetY = -wpAdminBar.offsetHeight | 0;
    }

    // Send clicks cached for previous page
    var cachedClicks = sessionStorage.getItem('clicks');
    if (cachedClicks !== null && cachedClicks !== undefined) {
        UST.sendData(sessionStorage.getItem('clientPageID'), { clicks: UST.compressMovements(JSON.parse(cachedClicks)) });
    }

    // Get clientPageID (based on token and current page info)
    var clientPageID;

    UST.DOM.postAjax(
        getContextPath() + 'tracker/createClient.php',
        {
            // Resolution
            r: UST.DOM.windowWidth() + ' ' + UST.DOM.windowHeight(),
            // Token
            t: token,
            // URL
            u: UST.getCleanPageURL(),
            // Domain
            d: getDomain(),
            // Referrer
            s: document.referrer,
            // Device type
            v: UST.isMobileDevice === true ? 1 : 0,
            // Previous clientPageID
            i: sessionStorage.getItem('clientPageID') || 0,
            // Hash IP
            hip: UST.settings.hashIP || false,
        },
        function (data) {
            UST.DEBUG && console.log(data);
            if (data) data = JSON.parse(data);

            // Save current page session ID
            clientPageID = data.clientPageID;

            // Also cache client id
            if (sessionStorage.getItem('clientID') !== '' + data.clientID) {
                sessionStorage.setItem('clientID', data.clientID);
                UST.onSessionCreated && UST.onSessionCreated(+data.clientID);
            }

            // Cache clientPageID for sending full recording on next page load
            sessionStorage.setItem('clientPageID', clientPageID);
            UST.onPageViewCreated && UST.onPageViewCreated(+data.clientID, +clientPageID);

            startSendingData();
        }
    );

    if (UST.settings.static) {
        relX = UST.DOM.offset(UST.getContentDiv()).left;
    }

    // Tag triggers
    addDynamicEventListener(document.body, 'click', '[data-ust_click_tag]', function (e) {
        if (!e.delegatedTarget) return;
        var tag = e.delegatedTarget.dataset.ust_click_tag;
        UST.addTag(tag);
    });

    // Helper function to record delay
    function addIdleTime(curDate, interpTime) {
        var idleTime = curDate - lastActionDate;
        if (typeof interpTime === 'undefined') interpTime = 0;

        if (idleTime >= UST.internalSettings.minIdleTime) {

            idleTime -= interpTime;
            if (idleTime >= UST.internalSettings.minIdleTime) {
                record.push('i' + KEY_SEPARATOR + idleTime);
            }
        }

        lastActionDate = curDate;
    }

    function handleClickEvent(e, isRightClick) {
        // Ignore artificial clicks
        if (typeof e.pageX === 'undefined' || !e.target) {
            return;
        }

        var clickPos = {
            x: UST.DOM.docScrollLeft() + e.clientX | 0,
            y: UST.DOM.docScrollTop() + e.clientY | 0
        };

        // If click was dynamically triggered, get the center of the target
        if (e.pageX === e.pageY && e.pageX === 0) {
            var offset = UST.DOM.offset(e.target);

            clickPos.x = offset.left + (e.target.clientWidth / 2) | 0;
            clickPos.y = offset.top + (e.target.clientHeight / 2) | 0;
        }

        // Click heatmaps
        if (UST.settings.recordClickHeatmaps !== false) {
            var p = UST.coord4.fillZeros(clickPos.x - relX).toString() + UST.coord4.fillZeros(clickPos.y + offsetY);

            if (clicks[p] === undefined) {
                clicks[p] = 0;
            }

            clicks[p]++;

            // If we are likely to navigate to a different page, save current heatmap click data so it's not lost
            if (UST.DOM.getClosest(e.target, 'a') !== null) {
                sessionStorage.setItem('clicks', JSON.stringify(clicks));
            }
        }

        if (UST.settings.enableSessionRecordings !== false) {
            // Record time since last action    
            addIdleTime(Date.now());

            // Save the data into sessionStorage
            var clickData = 'c' + KEY_SEPARATOR + clickPos.x + VAL_SEPARATOR + (clickPos.y + offsetY);
            if (isRightClick) {
                clickData += VAL_SEPARATOR + 'R';
            }
            record.push(clickData);
            sessionStorage.setItem('record', JSON.stringify(record));
            activityCount += 10;
        }
    }

    function handleMouseMove(e) {
        // Invalid or artificial movement triggered
        if (typeof e.pageX === 'undefined') {
            return;
        }

        var curDate = Date.now();
        if (curDate - lastDate < UST.settings.delay) return;

        if (lastX !== undefined && UST.settings.recordMoveHeatmaps !== false) {
            var p = UST.coord4.fillZeros(lastX).toString() + UST.coord4.fillZeros(lastY);

            // Also filter some possible invalid movements
            if (!(lastX === 0 || lastY === 0)) {
                if (movements[p] === undefined)
                    movements[p] = 0;
                movements[p]++;
            }
        }

        var mousePos = {
            x: UST.DOM.docScrollLeft() + e.clientX | 0,
            y: UST.DOM.docScrollTop() + e.clientY | 0
        };

        if (UST.settings.enableSessionRecordings !== false) {
            // A new mousemove should be recorded, record idle time prior to this movement
            addIdleTime(curDate, UST.settings.delay);

            if (!(lastX === 0 || lastY === 0)) {
                record.push('m' + KEY_SEPARATOR + mousePos.x + VAL_SEPARATOR + (mousePos.y + offsetY));
                sessionStorage.setItem('record', JSON.stringify(record));
                activityCount++;
            }
        }

        lastDate = curDate;
        lastX = mousePos.x;
        lastY = mousePos.y + offsetY;
        if (UST.settings.static) {
            lastX -= relX;
        }
    }

    // Events/listeners that are used for both heatmaps and session recordings
    UST.attachSharedRecorder = function () {
        /**
         * RECORD CLICKS
         */
        document.addEventListener('click', handleClickEvent);
        document.addEventListener('contextmenu', function (e) {
            handleClickEvent(e, true);
        });

        /**
        * RECORD MOUSE MOVEMENTS
        */
        document.addEventListener('mousemove', handleMouseMove);

    }
    if (UST.settings.recordMoveHeatmaps !== false ||
        UST.settings.recordClickHeatmaps !== false ||
        UST.settings.enableSessionRecordings !== false) {
        UST.attachSharedRecorder();
    }

    UST.attachSessionRecorder = function () {
        /**
         * RECORD CLICKS
         */
        document.addEventListener('keyup', UST.getSelectionData);
        document.addEventListener('mouseup', UST.getSelectionData);

        /**
         * RECORD WINDOW RESIZE
         */
        function recordCurrentWindowSize() {
            record.push(
                'r' + KEY_SEPARATOR +
                UST.DOM.windowWidth() +
                VAL_SEPARATOR +
                UST.DOM.windowHeight()
            );
        }
        var resizeTimeout;
        window.addEventListener('resize', function () {
            // Debounce, once every 150ms
            if (!resizeTimeout) {
                resizeTimeout = setTimeout(function () {
                    resizeTimeout = null;
                    recordCurrentWindowSize();
                }, 150);
            }
        }, true);


        /**
         * RECORD WINDOW SCROLL
         */
        // Record scroll events, use passive event
        var supportsPassive = false;
        try {
            var opts = Object.defineProperty({}, 'passive', {
                get: function () {
                    supportsPassive = true;
                    return true;
                }
            });
            window.addEventListener("test", null, opts);
        } catch (e) { }
        var lastScrollDate = -1;
        var scrollTimeout = null;
        function addScrollEvent(_, forceScroll) {
            var now = Date.now();
            clearTimeout(scrollTimeout);

            // We start scrolling
            if (!forceScroll && lastScrollDate === -1) {
                lastScrollDate = now;
            }

            // Save scroll if 100ms have passed while scrolling
            if (forceScroll || (lastScrollDate !== -1 && now - lastScrollDate >= 100)) {
                // If we force save the scroll event or save it from timeout, reset lastScrollDate 
                // (otherwise next time we start scrolling we immediately send the new position)
                lastScrollDate = forceScroll ? -1 : now;
                addIdleTime(now, 100);
                record.push(
                    's' + KEY_SEPARATOR +
                    UST.DOM.docScrollLeft() +
                    VAL_SEPARATOR +
                    UST.DOM.docScrollTop()
                );
                UST.DEBUG && console.log('Scroll event recorded!', record[record.length - 1]);
                sessionStorage.setItem('record', JSON.stringify(record));
                activityCount++;
            } else if (!forceScroll) {
                // Also save scroll 100ms after the last scroll event (so the final position is set)
                scrollTimeout = setTimeout(addScrollEventNoThrottle, 100);
            }
        }
        var addScrollEventNoThrottle = addScrollEvent.bind(null, null, true);

        window.addEventListener('scroll', addScrollEvent, supportsPassive ? { passive: true } : false);
        document.body.addEventListener('scroll', addScrollEvent, supportsPassive ? { passive: true } : false);
        // If window starts scrolled, send initial scroll
        if (UST.DOM.docScrollTop() !== 0 || UST.DOM.docScrollLeft() !== 0) {
            addScrollEventNoThrottle();
        }

        /**
         * RECORD KEYBOARD INPUT
         */
        if (UST.settings.recordKey || UST.settings.recordKeyboard) {
            addDynamicEventListener(document.body, 'focusout', 'input:not([type="submit"]):not([type="button"]), textarea', function (e) {
                if (!e.delegatedTarget) return;
                var el = e.delegatedTarget;

                //Don't record val change on password inputs or 
                //  elements with class 'noRecord'
                if (UST.DOM.hasClass(el, 'noRecord') || el.type === 'password')
                    return;

                // Record time since last action    
                addIdleTime(Date.now());

                // Add unique selector to the blured element
                var uniquePath = UST.DOM.getUniquePath(el);
                record.push(
                    'b' + KEY_SEPARATOR +
                    encodeURIComponent(uniquePath) +
                    VAL_SEPARATOR +
                    encodeURIComponent(el.value)
                );
                sessionStorage.setItem('record', JSON.stringify(record));
            });
        }

        /**
         * RECORD SELECT/DROPDOWN
         */
        addDynamicEventListener(document.body, 'change', 'select', function (e) {
            if (!e.delegatedTarget) return;
            var el = e.delegatedTarget;

            if (UST.DOM.hasClass(el, 'noRecord'))
                return;

            var uniquePath = UST.DOM.getUniquePath(el);
            record.push(
                'b' + KEY_SEPARATOR +
                encodeURIComponent(uniquePath) +
                VAL_SEPARATOR +
                encodeURIComponent(el.value)
            );
            sessionStorage.setItem('record', JSON.stringify(record));
        });
    }

    if (UST.settings.enableSessionRecordings !== false) {
        UST.attachSessionRecorder();
    }

    // Start sending data after clientPageID is received
    function startSendingData() {
        // Send cached tags
        while (window.UST_CT && window.UST_CT.length) {
            var tag = window.UST_CT.shift();
            UST.addTag(tag);
        }
        // Send data to server once in a while, exponential
        UST.sendDataDelay = 800;
        recurseSend();
    }

    function recurseSend() {
        UST.DEBUG && console.log("Sending data for clientPageID: ", clientPageID);
        // Max delay between data sending is 8 seconds
        if (UST.sendDataDelay < 8000)
            UST.sendDataDelay += 500;

        // Reduce delay if activity happened soon
        if (UST.sendDataDelay > 2000 && sessionStorage.getItem('record') && activityCount > 10) {
            UST.sendDataDelay = 800;
        }

        UST.sendData(clientPageID);
        UST.recurseSendTimeout = setTimeout(recurseSend, UST.sendDataDelay);
    }
};

/**
 * Show a consent banner than can be accepted or declined.
 * As soon as the user accepts it, userTrack cand will sending data.
 * No data prior to accepting the consent will be stored in any way.
 * The response is solved in localStorage so once the user accepts/declines, it won't be shown again.
 * 
 * @param {string} text The text info to display
 * @param {function} acceptCallback Callback to be called if user presses Accept
 * @param {function} cancelCallback Callback to be called if user declines
 */
UST.showConfirmForm = function (text, acceptCallback, cancelCallback) {
    var wrap = document.createElement('div');
    wrap.style = ['background: white; border-radius: 5px; box-shadow: 0px 0px 5px rgba(0,0,0,0.2);z-index: 10001;',
        'position: fixed; right: 20px; bottom: 20px; font-family: Arial; text-align: center; transform-origin: center right;',
        'width: 350px;  padding: 20px; opacity: 0; transform: scaleX(0); transition: opacity 0.2s ease-out, transform 0.2s ease-out;'].join('');
    wrap.id = 'usertrack-consent';
    var buttonStyle = 'padding: 15px;background: #740e58;color: white; font-size: 16px; cursor: pointer; margin: 10px 0px; text-align: center;';

    var acceptButton = document.createElement('div');
    acceptButton.id = 'usertrack-consent__button';
    acceptButton.innerText = 'Accept!';
    acceptButton.style = buttonStyle;
    acceptButton.onclick = function () {
        acceptCallback();
        wrap.remove();
    };

    var link = document.createElement('a');
    link.style = 'font-size: 12px; vertical-align: center; color: #740e58;';
    link.href = 'https://docs.usertrack.net/personal-data-information.html';
    link.target = '_blank';
    link.innerText = 'Learn more';

    var cancelLink = document.createElement('a');
    cancelLink.style = 'color: #a3a3a3; text-decoration: none; font-size: 12px;';
    cancelLink.href = '#';
    cancelLink.innerText = 'No, I do not want an improved experience.';
    cancelLink.onclick = function (e) {
        e.preventDefault();
        cancelCallback();
        wrap.remove();
        return false;
    };

    document.head.insertAdjacentHTML('beforeend', '<style>#usertrack-consent__button:hover {background: #9c2477 !important;}</style>');
    wrap.appendChild(document.createTextNode(text));
    wrap.appendChild(link);
    wrap.appendChild(acceptButton);
    wrap.appendChild(cancelLink);
    document.body.appendChild(wrap);
    setTimeout(function () {
        wrap.style.opacity = 1;
        wrap.style.transform = 'scaleX(1)';
    }, 100);
};

// Checks if the given IP matches the ignoredIPs list
// The list IPs can contain wildcard characters '*'
UST.isIPignored = function (ip) {
    var otherIP, i, ipParts, otherParts, match, partIdx, lastPart, currentPart;
    for (i = 0; i < UST.settings.ignoreIPs.length; ++i) {
        otherIP = UST.settings.ignoreIPs[i];

        if (otherIP === ip) {
            return true;
        }

        ipParts = ip.split('.');
        otherParts = otherIP.split('.');

        lastPart = undefined;
        match = true;
        for (partIdx = 0; partIdx < ipParts.length; ++partIdx) {
            currentPart = otherParts[partIdx];

            // If last part is a wildcard, continue with '*'
            if (currentPart === undefined && lastPart === '*') {
                currentPart = '*';
            }

            if (ipParts[partIdx] !== currentPart && currentPart !== '*') {
                match = false;
                break;
            }

            lastPart = currentPart;
        }

        if (match) {
            return true;
        }
    }
    return false;
};

// Main entry function
UST.start = function () {
    // Check if we have to get the user IP (in case it is ignored)
    if (UST.canRecord() && UST.settings.ignoreIPs && UST.settings.ignoreIPs.length > 0
        && UST.settings.ignoreIPs[0] !== '') {

        // Adding the script tag to the head as suggested before
        var head = document.getElementsByTagName('head')[0];
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = UST.getContextPath() + 'helpers/getIP.php';

        var initCalled = false;

        // Then bind the event to the callback function.
        // There are several events for cross browser compatibility.
        script.onreadystatechange = script.onload = function () {
            // Make sure event is called only once
            if (initCalled) return;
            initCalled = true;

            // If this IP is not ignored start tracking
            /* global ust_myIP */
            if (!UST.isIPignored(ust_myIP)) {
                UST.init();
            } else {
                UST.disableRecord();
            }
        };

        // Fire the loading
        head.appendChild(script);
    } else {
        UST.init();
    }
};

// Users can also opt-out or in using the URL hash
if (window.location.search.indexOf('ust-opt-out') !== -1) {
    localStorage.ustGDPRaccepted = 'false';
}
if (window.location.search.indexOf('ust-opt-in') !== -1) {
    localStorage.ustGDPRaccepted = 'true';
}

if (UST.onLoaded) {
    UST.onLoaded();
    UST.onLoadedCalled = true;
}

// DOM ready event, try starting userTrack
UST.DOM.ready(function () {

    // If somehow onLoaded was defined by not called (eg. tracker.js included sync before user code)
    if (UST.onLoaded && !UST.onLoadedCalled) {
        UST.onLoaded();
    }

    // Don't do anything if GDPR was declined or recording is disabled anyway
    if (localStorage.ustGDPRaccepted === 'false' || !UST.canRecord()) {
        return;
    }

    if (!UST.settings.showTrackingConsent || localStorage.ustGDPRaccepted === 'true') {
        UST.start();
    } else {
        UST.showConfirmForm(
            'This site can store session data in order to improve your experience. ',
            function () {
                localStorage.ustGDPRaccepted = 'true';
                UST.onGDPRAccepted && UST.onGDPRAccepted();
                UST.start();
            }, function () {
                localStorage.ustGDPRaccepted = 'false';
                UST.onGDPRDeclined && UST.onGDPRDeclined();
            });
    }
});


/**
 * Playback Functions
 *
 * Used if frame is insider userTrack admin panel
 */
if (top !== self) {
    (function () {
        var head = document.getElementsByTagName('head')[0];

        if (typeof jQuery === 'undefined') {
            var jqScriptTag = document.createElement('script');
            jqScriptTag.type = 'text/javascript';
            jqScriptTag.async = false;
            jqScriptTag.src = UST.getContextPath() + 'tracker/jquery.1.12.4.min.js';
            head.appendChild(jqScriptTag);
        }


        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.async = false;
        script.src = UST.getContextPath() + 'tracker/inject.js';
        head.appendChild(script);
    })();
}
