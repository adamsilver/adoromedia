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

if (typeof Adoro !== "object") var Adoro = {};

/**
 * Create a carousel
 * @constructor
 * @class Represents a Carousel
 * @param {Node} container DOM reference to container element
 * @param {Object} options The options for this instance
 * @param {Number} options.scrollCount How many elements to scroll
 * @param {Number} options.speed How quickly the carousel scrolls
 * @param {Boolean} options.automatic If true then no previous/next controls present and animates always
 */
Adoro.Carousel = function(container, options) {
	if(container === null) return;
	var ul = container.getElementsByTagName("ul")[0] || null;
	if (!ul) return null;
	var config = { 
		scrollCount: 8, 
		speed: 250,
		automatic: false,
		previousHTML: "Previous",
		nextHTML: "Next",
		stopHTML: "Stop",
		startHTML: "Start"
	}
	var state = {animate: false, animating: false}
	if(typeof options === "object") {
		config.scrollCount =( typeof options.scrollCount === "number" ) ?  options.scrollCount : config.scrollCount;
		config.speed = (typeof options.speed === "number" ) ? options.speed : config.speed;
		config.automatic = (typeof options.automatic === "boolean" ) ? options.automatic : config.automatic;
		config.previousHTML = (typeof options.previousHTML === "string" ) ? options.previousHTML : config.previousHTML;
		config.nextHTML = (typeof options.nextHTML === "string" ) ? options.nextHTML : config.nextHTML;
		config.stopHTML = (typeof options.stopHTML === "string" ) ? options.stopHTML : config.stopHTML;
		config.startHTML = (typeof options.startHTML === "string" ) ? options.startHTML : config.startHTML;
	}
	
	/********************************************************************
	 * before trying to animate or do things with the carousel we need to 
	 * check if it can animate, by seeing if any lis are beyond view
	 * do we check ul width vs container width? i think so
	 */
	
	$(ul).css({
		position: "relative",
		overflow: "hidden",
		width: (function(){
			var lis = $(this).find("li");
			var width = 0;
			var li;
			for(var i = lis.length-1; i>=0; i--) {
				li = lis[i];
				if (li.parentNode !== ul) continue;
				$(li).css({"display": "inline","float": "left"});
				width = width + $(li).outerWidth();
				width = width + parseInt($(li).css("marginLeft").split("px")[0]) + parseInt($(li).css("marginRight").split("px")[0]);
			}
			return width;
		}.call(ul))	
	});
	
	if(!config.automatic) {
		// create back and next links
		var previousLink = $(Adoro.Carousel.previousLink).clone()[0];
		previousLink.innerHTML = config.previousHTML;
		var nextLink = $(Adoro.Carousel.nextLink).clone()[0];
		nextLink.innerHTML = config.nextHTML;
		$(previousLink).bind("click", previous_onClick);
		$(nextLink).bind("click", next_onClick);
		container.appendChild(previousLink);
		container.appendChild(nextLink);
	}
	
	if(config.automatic) {
		// set state
		state.animate = true;
		automaticAnimate();
		// create stop and start links
		var stopLink = $(Adoro.Carousel.stopLink).clone()[0];
		stopLink.innerHTML = config.stopHTML;
		$(stopLink).bind("click", stop_onClick);
		container.appendChild(stopLink);
		var startLink = $(Adoro.Carousel.startLink).clone()[0];
		startLink.innerHTML = config.startHTML;
		$(startLink).bind("click", start_onClick);
		container.appendChild(startLink);		
	}
	
	function automaticAnimate() {
		if(!state.animate) return;
		var lis = $(ul).find("li");
		var firstLi = lis[0];
		$(ul).animate({left: -getLiWidth(firstLi)}, {duration: config.speed, easing: "linear", complete: function(){
			$(ul).append(firstLi);
			$(ul).css({left: "0px"});
			automaticAnimate();
		}});
	}
	
	function stop_onClick() {
		state.animate = false;
		return false;
	}
	
	function start_onClick() {
		if(state.animate) return false;;
		state.animate = true;
		automaticAnimate();
		return false;
	}	
	
	var count = 0; // used for previous and next click
	function previous_onClick() {
		if(state.animating) return;
		if(count === config.scrollCount) {
			count = 0;
			return false;
		}
		var lis = $(ul).find("li");
		var lastLi = $(ul).find("li")[lis.length-1];
		$(ul).prepend(lastLi);
		$(ul).css("left", -getLiWidth(lastLi));
		state.animating = true;
		$(ul).animate({left: "0px"}, {duration: config.speed, easing: "linear", complete: function(){
			count++
			state.animating = false;
			previous_onClick();
		}});
		return false;
	}
	
	function getLiWidth(li) {
		return $(li).outerWidth() + parseInt($(li).css("marginLeft").split("px")[0]) + parseInt($(li).css("marginRight").split("px")[0]);
	}
	
	function next_onClick() {
		if(state.animating) return;
		if(count === config.scrollCount) {
			count = 0;
			return false;
		}		
		var lis = $(ul).find("li");
		var firstLi = lis[0];
		state.animating = true;	
		$(ul).animate({left: -getLiWidth(firstLi)}, {duration: config.speed, easing: "linear", complete: function(){
			count++
			$(ul).append(firstLi);
			$(ul).css({left: "0px"});
			state.animating = false;
			next_onClick();
		}});
		return false;
	}
}

/**
 * Previous link
 * @property 
 * @type {Node} previousLink The DOM reference
 */
Adoro.Carousel.previousLink = $('<a href="#" class="previous">Previous</a>');

/**
 * Next link
 * @property 
 * @type {Node} nextLink The DOM reference
 */
Adoro.Carousel.nextLink = $('<a href="#" class="next">Next</a>');

/**
 * Stop link
 * @property 
 * @type {Node} stopLink The DOM reference
 */
Adoro.Carousel.stopLink = $('<a href="#" class="stop">Stop</a>');

/**
 * Start link
 * @property 
 * @type {Node} startLink The DOM reference
 */
Adoro.Carousel.startLink = $('<a href="#" class="start">Start</a>');