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

var Adoro = Adoro || {};
Adoro.Dialogue = {};
$(document).ready(function(){
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
		var FF2 = ($.browser.mozilla && parseInt($.browser.versionX) === 2);
		var state = {showingOverlay: false};
		var overlay = (function(){
			var o;
			o = document.createElement("div");
			o.id = config.overlayID;
			if(IE6 || FF2) {
				$(o).css({position: "absolute"});
			}
			document.body.appendChild(o);
			return o;
		}());
		var dialogue = (function(){
			var o;
			o = document.createElement("div");
			o.id = config.dialogueID;
			document.body.appendChild(o);
			return o;
		}());
		
		if(IE6 || FF2) {
			$(window).resize(fixOverlay);
			$(window).scroll(fixOverlay);
		}
		
		function showOverlay(options) {
			if(state.showingOverlay) return;
			var config = {animate: false,opacity: "0.8"};
			if(typeof options === "object") {
				config.animate = (typeof options.animate === "boolean" && options.animate === true) ? true : false;
				config.opacity = (typeof options.opacity === "string") ? options.opacity : config.opacity;
			}
			
			$(overlay).css({opacity: config.opacity});
			
			if(config.animate) {
				$(overlay).fadeIn();
			}
			else {
				$(overlay).css("display", "block");
			}
			state.showingOverlay = true;
		}

		function hideOverlay(options){
			state.showingOverlay = false;
			$(overlay).css("display", "none");
		}
				
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
				$("select, object, embed").css("display", "none");
				fixOverlay();
			}
			
			var focusElement = $(dialogue).find("a, input, textarea, select")[0] || null;
			if(focusElement) {
				focusElement.focus();
			}
			return false;
		}
		
		function hideDialogue(options) {
			var config = {
				closeOverlay: true
			};
			
			if(typeof options === "object") {
				config.closeOverlay = (typeof options.closeOverlay === "boolean" && options.closeOverlay === false) ? false : true;
			}
			
			$(dialogue).css({left: "-99999em"});			
			if(config.closeOverlay) {
				hideOverlay();
			}
			
			if (IE6) {
				$("select, object, embed").css("display", "block");
			}
			
			return false;
		}
		
		function setHTML(html) {
			dialogue.innerHTML = html;
			setCloseEvent();
		}

		function setCloseEvent() {
			$(dialogue).find("a."+config.closeClass).bind("click", hideDialogue);
		}		

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