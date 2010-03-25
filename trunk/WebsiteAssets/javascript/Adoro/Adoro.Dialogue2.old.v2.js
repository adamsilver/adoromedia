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
$(document).ready(function(){
	Adoro.Dialogue = new (function(){
		var state = {showingOverlay:false};
		var config = {
			overlayId: "overlay", // if you change this then the css must change
			dialogueId: "dialogue", // if you change this then the css must change
			closeClass: "closeDialogue"
		};
		var IE6 = ($.browser.msie && parseInt($.browser.version) === 6);
		var FF2 = ($.browser.mozilla && parseInt($.browser.versionX) === 2);
		var overlay = (function(){
			var o;
			o = document.createElement("div");
			o.id = config.overlayId;
			if(IE6 || FF2) {
				$(o).css({position: "absolute"});
			}
			document.body.appendChild(o);
			return o;
		}());
		var dialogue = (function(){
			var o;
			o = document.createElement("div");
			o.id = config.dialogueId;
			document.body.appendChild(o);
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
		* @memberOf Adoro.Dialogue
		* @name showOverlay
		*/			
		function showOverlay(options) {
			if(state.showingOverlay) return;
			var options = options || {};
			var config = {opacity: "0.8"};
			config.opacity = options.opacity || "0.8";
			$(overlay).css({opacity: config.opacity});
			$(overlay).css("display", "block");
			state.showingOverlay = true;
		}
		
		/**
		* Hide overlay
		* @function
		* @private
		* @memberOf Adoro.Dialogue
		* @name hideOverlay
		*/			
		function hideOverlay(options){
			state.showingOverlay = false;
			$(overlay).css("display", "none");
		}
		
		/**
		* Show dialogue
		* @function
		* @public
		* @memberOf Adoro.Dialogue
		* @name showDialogue
		* @param {Object} options for the function
		* @param {Number} options.x The dialogue x coordinate for positioning, default center
		* @param {Number} options.y The dialogue y coordinate for positioning, default center
		* @param {Boolean} options.animateOverlay If true the overlay will animate, defailt false
		* @param {Boolean} options.showOverlay If true the overlay will be shown, otherwise it will not be shown, default true.
		* @param {Boolean} options.closeOnOverlayClick If true the dialogue and overlay will close when the overlay is clicked, otherwise false, default true
		* @param {String} options.overlayOpacity The opacity value between "0" and "1". Default value "0.8"
		*/			
		function showDialogue(options) {
			var options = options || {};
			var config = {};
			config.showOverlay = options.showOverlay || true;
			config.closeOnOverlayClick = options.closeOnOverlayClick || true;
			config.overlayOpacity = options.overlayOpacity || "0.8";
			config.positionX = options.x || (function(){
				var x = (($(window).width()+ - $(dialogue).width()) / 2) + $(window).scrollLeft();
				if(x < 0) x = 0;
				return x;
			}());
			config.positionY = options.y || (function(){
				var y = (($(window).height() - $(dialogue).height()) / 2) + $(window).scrollTop();
				if(y < 0) y = 0;
				return y;			
			}());
	
			if (config.closeOnOverlayClick) {
				$(overlay).bind("click", hideDialogue);
			}
			else {
				$(overlay).unbind("click", hideDialogue);			
			}			
			
			if(config.showOverlay) {
				showOverlay({opacity: config.overlayOpacity});
			}
			else {
				hideOverlay();
			}
			
			setPosition(config.positionX, config.positionY);
			$(dialogue).css({"display":"block"});
			
			if(IE6) {
				$("select, object, embed").css("display", "none");
				// needs to be done for when the dialogue increases the page size
				fixOverlay();
			}
			
			
			setFocusToDialogue();
			
			return false;
		}
		
		function setFocusToDialogue() {
			var focusElement = $(dialogue).find("a, input, textarea, select")[0] || null;
			if(focusElement) {
				focusElement.focus();
			}
		}
		
		function setPosition(x, y) {
			if(x) {
				$(dialogue).css("left", x+"px");
			}
			if(y) {
				$(dialogue).css("top", y+"px");
			}
		}
		
		/**
		* Hide dialogue
		* @function
		* @public
		* @memberOf Adoro.Dialogue
		* @name hideDialogue
		*/	
		function hideDialogue(options) {
			var options = options || {};
			var config = {};
			config.closeOverlay = options.closeOverlay || true;
				
			$(dialogue).css({left: "-99999em"});			
			if(config.closeOverlay) {
				hideOverlay();
			}
			
			if (IE6) {
				$("select, object, embed").css("display", "block");
			}
			
			return false;
		}
		
		/**
		* Set the inner HTML for the dialogue
		* @function
		* @public
		* @memberOf Adoro.Dialogue
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


/*
 
<div>
	<div id="module1"></div>
</div>

<div>
	<div id="module2"></div>
</div>

<div>
	<div class="wrap">
		<img />
	</div>
</div>

1. get html
2. show in <div>
3. work out the dimensions
4. move the <div> appropriately and show contents so that its centered

1. get img url
2. onload of image add to div
3. work out dimensions
4. move the <div> appropriately and show contents so that its centered




Adoro.Dialogue.set
*/
