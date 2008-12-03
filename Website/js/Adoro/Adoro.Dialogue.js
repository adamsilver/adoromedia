//  ---------------------------------------------------------------------------------------------------------
//  --- license header; ---
//  ---------------------------------------------------------------------------------------------------------
/* Copyright (c) 2008 - 2009 by Adoro Media
	info@adoromedia.com
  	
  	This file is part of Adoro Media open source projects
  	
    Adoro Media projects are free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.
 
    The projects are distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.
 
    See <http://www.gnu.org/licenses/> for information on the GNU Lesser General Public License.
*/
//  ---------------------------------------------------------------------------------------------------------
//  ---------------------------------------------------------------------------------------------------------

if (typeof Adoro !== "object") { var Adoro = {}; }
Adoro.LightBox = {};
$(document).ready(function(){
	/**
	 * LightBox object which will append an overlay and dialogue to the HTML page with various public methods
	 * @constructor
	 * @static
	 */
	Adoro.Dialogue = new (function(){
		/*
		 * Known, fixed issues.
		 * a) IE6 cannot do the overlay correctly with position fixed width and height 100%
		 * b) FF2 and below cannot show a cursor inside form elements when inside absolute lightbox on top of fixed overlay
		 * c) IE6 has zIndex issues with flash elements and select elements
		 */
		var me = this;
		var config = {
			overlayID: "overlay", // if you change this then the css must change
			dialogueID: "dialogue", // if you change this then the css must change
			closeClass: "closeDialogue"
		};
		var IE6 = ($.browser.msie && parseInt($.browser.version) === 6);
		var IE7 = ($.browser.msie && parseInt($.browser.version) === 7);
		var FF2 = ($.browser.mozilla && parseInt($.browser.versionX) === 2);
		var overlay = (function(){
			var o;
			o = document.createElement("div");
			o.id = config.overlayID;
			if(IE6 || FF2) {
				$(o).css({position: "absolute"});
			}
			document.body.appendChild(o);
			$(o).bgiframe();
			return o;
		}());
		var dialogue = (function(){
			var o;
			o = document.createElement("div");
			o.id = config.dialogueID;
			document.body.appendChild(o);
			$(o).bgiframe();
			return o;
		}());
		
		if(IE6 || FF2) {
			$(window).resize(fixOverlay);
			$(window).scroll(fixOverlay);
		}
		
		/**
		* Show overlay
		* @function
		* @private
		* @memberOf Adoro.LightBox
		* @name showOverlay
		*/			
		function showOverlay(options) {
			var config = {animate: false,opacity: "0.8"};
			if(typeof options === "object") {
				config.animate = (typeof options.animate === "boolean" && options.animate === true) ? true : false;
				config.opacity = (typeof options.opacity === "string") ? options.opacity : config.opacity;
			}
			
			$(overlay).css({opacity: config.opacity});
			
			if(config.animate) {
				$(overlay).fadeIn("slow");
			}
			else {
				$(overlay).css("display", "block");
			}
		}

		/**
		* Hide overlay
		* @function
		* @private
		* @memberOf Adoro.LightBox
		* @name hideOverlay
		*/			
		function hideOverlay(options){
			$(overlay).css("display", "none");
		}
		
		/**
		* Show dialogue
		* @function
		* @public
		* @memberOf Adoro.LightBox
		* @name showLightBox
		* @param {Object} options for the function
		* @param {Number} options.x The dialogue x coordinate for positioning, default center
		* @param {Number} options.y The dialogue y coordinate for positioning, default center
		* @param {Boolean} options.animateDialogue If true the dialogue will animate, default false
		* @param {Boolean} options.animateOverlay If true the overlay will animate, defailt false
		* @param {Boolean} options.showOverlay If true the overlay will be shown, otherwise it will not be shown, default true.
		* @param {Boolean} options.closeOnOverlayClick If true the dialogue and overlay will close when the overlay is clicked, otherwise false, default true
		* @param {String} options.overlayOpacity The opacity value between "0" and "1". Default value "0.8"
		*/			
		function showDialogue(options) {
			var config = {
				animateDialogue: false,
				animateOverlay: false,
				showOverlay: true,
				closeOnOverlayClick: true,
				overlayOpacity: "0.8",
				positionX: (function(){
					var x = (($(window).width()+ - $(dialogue).width()) / 2) + $(window).scrollLeft();
					if(x < 0) x = 0;
					return x;
				}()),
				positionY: (function(){
					var y = (($(window).height() - $(dialogue).height()) / 2) + $(window).scrollTop();
					if(y < 0) y = 0;
					return y;			
				}())
			}
			
			if(typeof options === "object") {
				config.positionX = (typeof options.x === "number") ? options.x : config.positionX;
				config.positionY = (typeof options.y === "number") ? options.y : config.positionY;
				config.animateDialogue = (typeof options.animateDialogue === "boolean" && options.animateDialogue === true) ? true : false;
				config.animateOverlay = (typeof options.animateOverlay === "boolean" && options.animateOverlay === true) ? true : false;
				config.showOverlay = (typeof options.showOverlay === "boolean" && options.showOverlay === false) ? false : true;
				config.closeOnOverlayClick = (typeof options.closeOnOverlayClick === "boolean" && options.closeOnOverlayClick === false) ? false : true;
				config.overlayOpacity = (typeof options.overlayOpacity === "string") ? options.overlayOpacity : config.overlayOpacity;
			}
			
			if (config.closeOnOverlayClick) {
				$(overlay).bind("click", hideDialogue);
			}
			else {
				$(overlay).unbind("click", hideDialogue);			
			}			
			
			if(config.showOverlay) {
				showOverlay({
					animate: config.animateOverlay,
					opacity: config.overlayOpacity
				});
			}
			else {
				hideOverlay();
			}
			
			$(dialogue).css({"left":config.positionX+"px","top":config.positionY+"px", "display":"block"});
			
			if(config.animateDialogue) {
				$(dialogue).css({"display":"none"});
				$(dialogue).fadeIn();
			}
			
			// needs to be done for when the lightbox increases the page size
			if(IE6) {
				fixOverlay();
			}
			
			var focusElement = $(dialogue).find("a, input, textarea, select")[0] || null;
			if(focusElement) {
				focusElement.focus();
			}
			return false;
		}
		
		/**
		* Hide dialogue
		* @function
		* @public
		* @memberOf Adoro.LightBox
		* @name hideLightBox
		*/	
		function hideDialogue() {
			$(dialogue).css({left: "-99999em"});
			hideOverlay();
			return false;
		}

		/**
		* Set the inner HTML for the dialogue
		* @function
		* @public
		* @memberOf Adoro.LightBox
		* @name setHTML
		*/			
		function setHTML(html) {
			dialogue.innerHTML = html;
			setCloseEvent();
		}
		
		/**
		 * apply close event to close buttons
		 * @function
		 * @private
		 */
		function setCloseEvent() {
			$(dialogue).find("a."+config.closeClass).bind("click", hideDialogue);
		}		
		
		/**
		 * Fixes overlay by setting coordinates and dimensions
		 * @function
		 * @private
		 */
		function fixOverlay() {
			$(overlay).css({
				height: $(window).height()+"px",
				width: $(window).width()+"px",
				left: $(window).scrollLeft()+"px",
				top: $(window).scrollTop()+"px"
			});
		}
		
		// public members
		this.showDialogue = showDialogue;
		this.hideDialogue = hideDialogue;
		this.setHTML = setHTML;
	});
});