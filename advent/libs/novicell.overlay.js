'use strict';
/**
 * @name Novicell overlay
 * @desc Simple script that opens an overlay / modal with some content form either a selector or an URL
 * @author Danni Larsen (DLA), Michael Sølvsteen (MSL), Signe Helbo Poulsen (SHP)
 * @example novicell.overlay.create({ 'selector': SELECTOR, 'url': URL,  'class':'CLASSNAME', 'onCreate': FUNCTIONNAME, 'onLoaded': FUNCTIONNAME, 'onDestroy': FUNCTIONNAME });
 * @requires none
 */

var novicell = novicell || {};

novicell.overlay = novicell.overlay || new function () {
    var self = this;
    var options = {};
    var overlayElem;
    var overlayContainer;
    var overlayContent;
    var backdrop;
    var content;
    var onCreate;
    var onLoaded;
    var onDestroy;
    var isVideo = false;

    this.create = function (opts) {
        var self = this;
        // Set global options
        options = opts;

        // Call onCreate callback
        if (typeof options.onCreate === 'function') {
            options.onCreate();
        }

        // Remove existing overlays
        self.destroy();

        // Check if content comes from a HTML element
        if (options.hasOwnProperty('selector') && options.selector !== null) {
            var element = document.querySelector(options.selector);
            
            if (element) {
                content = element.innerHTML;
                constructOverlay();
            } else {
                console.warn('novicell.overlay: element does not exist. Please provide a valid selector for use in document.querySelector.');
                return;
            }
        }
        // Or if content comes from an URL
        else if (options.hasOwnProperty('videoId')) {
            if (options.videoId !== null) {
                var src = '';
                isVideo = true;

                if(options.type == 'vimeo') {
                    src = 'https://player.vimeo.com/video/' + options.videoId;
                }
                else if(options.type == 'youtube') {
                    src = 'https://www.youtube.com/embed/' + options.videoId +'?ecver=2';
                }
                else {
                    return;
                }

                var iframe = document.createElement('iframe');
                iframe.setAttribute('src', src);
                iframe.setAttribute('frameborder', 0);
                iframe.setAttribute('allowfullscreen', '');
                iframe.setAttribute('width', '100%');
                iframe.setAttribute('height', '100%');

                content = iframe.outerHTML;
                
                constructOverlay();
            } else {
                console.warn('novicell.overlay: video-id is empty. Please provide a video-id for use in video embed code (we support only Vimeo and YouTube).');
                return;
            }
        }
        // If nothing is working, send error to los consolé
        else {
            console.error('novicell.overlay: no content to display! Please set a selector or a url to load.')
            return;
        }
    };

    this.destroy = function () {
        if(document.querySelector('#js-novi-overlay')) {
            // Remove elements
            overlayElem.parentElement.removeChild(overlayElem);
            backdrop.parentElement.removeChild(backdrop);

            // Stop listening for close overlay events
            document.removeEventListener('keyup', self.destroy);

            // Remove class on body
            document.documentElement.classList.remove('no-scroll', 'novi-overlay--open');

            // Reset video variable
            isVideo = false;

            // Call onDestroy callback
            if (typeof options.onDestroy === 'function') {
                options.onDestroy();
            }
        }
    };

    function constructOverlay() {
        // Create backdrop
        setupBackdrop();

        // Create the overlay
        setupOverlay();

        // Create content for overlay
        setupOverlayContainer();

        // Create close button
        setupCloseButton();

        // Add class to body-element
        document.documentElement.classList.add('no-scroll');

        // Call onLoaded callback
        if (typeof options.onLoaded === 'function') {
            options.onLoaded();
        }
    };

    function setupBackdrop() {
        // Create the backdrop
        backdrop = document.createElement('div');
        backdrop.classList.add('novi-backdrop');
        backdrop.id = 'js-novi-backdrop';

        backdrop.addEventListener('click', function(e){
            if(e.target.classList.contains('novi-overlay') || e.target.classList.contains('novi-overlay__container')) {
                self.destroy();
            }
        });

        // Add backdrop to overlay element
        document.querySelector('body').appendChild(backdrop);
    };

    /*
     * Helper functions for HTML elements
     */
    function setupOverlay() {
        // Create the overlay
        overlayElem = document.createElement('div');
        overlayElem.classList.add('novi-overlay');
        overlayElem.id = 'js-novi-overlay';

        // Set class for the overlay, if set in options
        if (options.hasOwnProperty('class')) {
            overlayElem.classList.add(options.class);
        }

        // Add overlay to overlay element
        // document.querySelector('body').appendChild(overlayElem);
        backdrop.appendChild(overlayElem);
    };

    function setupOverlayContainer() {
        // Create content for overlay
        overlayContainer = document.createElement('div');
        overlayContainer.classList.add('novi-overlay__container');

        // Create scroll element
        overlayContent = document.createElement('div');
        overlayContent.classList.add('novi-overlay__content');

        if(isVideo) {
            overlayContent.classList.add('novi-overlay__content--video')
        }

        // Set content
        overlayContent.innerHTML = content;
        overlayContainer.appendChild(overlayContent);

        // Add overlayContainer to overlay element
        overlayElem.appendChild(overlayContainer);
    };

    function setupCloseButton() {
        // Create the button
        var btnClose = document.createElement('button');
        btnClose.classList.add('novi-overlay-close', 'button--close');
        btnClose.type = 'button';
        btnClose.id = 'js-novi-overlay-close';

        // Add eventlistener for button click
        btnClose.addEventListener('click', self.destroy);

        // Add eventlistener for esc key
        document.addEventListener('keydown', function (e) {
            if (e.keyCode === 27) {
                self.destroy();
            }
        });

        // Add close button to overlay element
        overlayContent.appendChild(btnClose);
    };

    /*
     * Helper functions for getting content
     */
    function get(url) {
        // Return a new promise.
        return new Promise(function (resolve, reject) {
            // Do the usual XHR stuff
            var req = new XMLHttpRequest();
            req.open('GET', url);

            req.onload = function () {
                if (req.status >= 200 && req.status < 400) {
                    // Success!!
                    resolve(req.response);
                } else {
                    // Error!!
                    reject(Error(req.statusText));
                }
            };

            // Handle network errors
            req.onerror = function () {
                reject(Error("Network Error"));
            };

            // Make the request
            req.send();
        });
    };

}();