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
 */
Adoro.Carousel = function(container, options) {
	var container = container || null;
	if(!container) return;
	var ul = container.getElementsByTagName("ul")[0] || null;
	if (!ul) return null;
	var lis = getLis();
	
	var state = {animating: false, currentIndex: 0};
	var config = {
		animate: false,
		animationSpeed: 300,
		automatic: false,
		automaticDelay: 300,
		animationEasing: "linear",
		scrollCount: 3,
		isCircular: true,
		
		automaticDirection: "forwards", // STILL TO DO
		mouseWheel: true, // STILL TO DO
		vertical: false, // STILL TO DO
		revealAmount: 150, // STILL TO DO
		beforeStartCallback: null, // STILL TO DO
		afterEndCallback: null, // STILL TO DO
		
		// indicator - STILL TO DO
		hasIndicator: true,
		indicatorContainerClass: "indicatorContainer",
		indicatorItemHTML: '<span class="indicator">Go </span>',
		indicatorItemClass: 'go',
		indicatorAppend: container,
		
		// start button
		hasStartButton: false,
		startButtonHTML: '<span>Start</span>',
		startButtonClass: "start",
		startButtonDisabledClass: "startDisabled", // to do
		startButtonAppend: container,
		
		// stop/pause button
		hasStopButton: false,
		stopButtonHTML: '<span>Stop</span>',
		stopButtonClass: "stop",
		stopButtonDisabledClass: "stopDisabled", // to do
		stopButtonAppend: container,
		
		// previous button
		hasPreviousButton: true,
		previousButtonHTML: '<span>Previous</span>',
		previousButtonClass: "previous",
		previousButtonDisabledClass: "previousDisabled", // to do
		previousButtonAppend: container,
		
		// next button
		hasNextButton: true,
		nextButtonHTML: '<span>Next</span>',
		nextButtonClass: "next",
		nextButtonDisabledClass: "nextDisabled", // to do
		nextButtonAppend: container		
	}
	
	if(typeof options === "object") {
		// general
		config.animate = (typeof options.animate === "boolean") ? options.animate : config.animate;
		config.animationSpeed = (typeof options.animationSpeed === "number") ? options.animationSpeed : config.animationSpeed;
		config.automatic = (typeof options.automatic === "boolean") ? options.automatic : config.automatic;
		config.automaticDelay = (typeof options.automaticDelay === "number") ? options.automaticDelay : config.automaticDelay;
		config.scrollCount = (typeof options.scrollCount === "number") ? options.scrollCount : config.scrollCount;
		config.animationEasing = (typeof options.animationEasing === "string") ? options.animationEasing : config.animationEasing;
		config.isCircular = (typeof options.isCircular === "boolean") ? options.isCircular : config.isCircular;
		
		// previous button
		config.hasPreviousButton = (typeof options.hasPreviousButton === "boolean") ? options.hasPreviousButton : config.hasPreviousButton;
		config.previousButtonHTML = (typeof options.previousButtonHTML === "string") ? options.previousButtonHTML : config.previousButtonHTML;
		config.previousButtonClass = (typeof options.previousButtonClass === "string") ? options.previousButtonClass : config.previousButtonClass;
		config.previousButtonDisabledClass = (typeof options.previousButtonDisabledClass === "string") ? options.previousButtonDisabledClass : config.previousButtonDisabledClass;		
		config.previousButtonAppend = options.previousButtonAppend || config.previousButtonAppend;	
		
		// next button		
		config.hasNextButton = (typeof options.hasNextButton === "boolean") ? options.hasNextButton : config.hasNextButton;
		config.nextButtonHTML = (typeof options.nextButtonHTML === "string") ? options.nextButtonHTML : config.nextButtonHTML;
		config.nextButtonClass = (typeof options.nextButtonClass === "string") ? options.nextButtonClass : config.nextButtonClass;
		config.nextButtonAppend = options.nextButtonAppend || config.nextButtonAppend;
		
		// start button		
		config.hasStartButton = (typeof options.hasStartButton === "boolean") ? options.hasStartButton : config.hasStartButton;
		config.startButtonHTML = (typeof options.startButtonHTML === "string") ? options.startButtonHTML : config.startButtonHTML;
		config.startButtonClass = (typeof options.startButtonClass === "string") ? options.startButtonClass : config.startButtonClass;
		config.startButtonAppend = options.startButtonAppend || config.startButtonAppend;
		
		// stop button		
		config.hasStopButton = (typeof options.hasStopButton === "boolean") ? options.hasStopButton : config.hasStopButton;
		config.stopButtonHTML = (typeof options.stopButtonHTML === "string") ? options.stopButtonHTML : config.stopButtonHTML;
		config.stopButtonClass = (typeof options.stopButtonClass === "string") ? options.stopButtonClass : config.stopButtonClass;
		config.stopButtonAppend = options.stopButtonAppend || config.stopButtonAppend;
	}
	
	// setting general styling
	if(config.vertical) {
		$(ul).find("li").css({"display": "block","float": "none"});
		$(ul).css({"width": getLisHeight() + "px"});
	}
	else {
		$(ul).find("li").css({"display": "inline","float": "left"});
		$(ul).css({"width": getLisWidth(lis) + "px"});
	}
	
	// add indicator control
	if(config.hasIndicator) {
		var indicatorContainer = $('<div></div>')[0];
		indicatorContainer.className = config.indicatorContainerClass;
		config.indicatorAppend.appendChild(indicatorContainer);
		var indicatorLis = getLis().reverse();
		var indicatorItem = null;
		for(var i = 0; i<indicatorLis.length; i++) {
			indicatorItem = $(Adoro.Carousel.button).clone()[0];
			indicatorItem.className = config.indicatorItemClass;
			indicatorItem.innerHTML = config.indicatorItemHTML+i;
			
			(function(i){
				$(indicatorItem).bind("click", function(){
					var move = i - state.currentIndex;
					moveBy(move);
					return false;
				});
			})(i);

			indicatorContainer.appendChild(indicatorItem);
		}
	}
	
	// add previous button
	if(config.hasPreviousButton) {
		var previousButton = $(Adoro.Carousel.button).clone()[0];
		previousButton.innerHTML = config.previousButtonHTML;
		previousButton.className = config.previousButtonClass;
		$(previousButton).bind("click", function(){
			moveBy(-config.scrollCount);
			return false;
		});
		config.previousButtonAppend.appendChild(previousButton);
	}	
	
	// add next button
	if(config.hasNextButton) {
		var nextButton = $(Adoro.Carousel.button).clone()[0];
		nextButton.innerHTML = config.nextButtonHTML;
		nextButton.className = config.nextButtonClass;
		$(nextButton).bind("click", function(){
			moveBy(config.scrollCount);
			return false;
		});
		config.nextButtonAppend.appendChild(nextButton);
	}
	
	// add stop button
	if(config.hasStopButton) {
		var stopButton = $(Adoro.Carousel.button).clone()[0];
		stopButton.innerHTML = config.stopButtonHTML;
		stopButton.className = config.stopButtonClass;
		$(stopButton).bind("click", function(){
			config.automatic = false;
			return false;
		});
		config.stopButtonAppend.appendChild(stopButton);
	}
	
	// add start button
	if(config.hasStartButton) {
		var startButton = $(Adoro.Carousel.button).clone()[0];
		startButton.innerHTML = config.startButtonHTML;
		startButton.className = config.startButtonClass;
		$(startButton).bind("click", function(){
			config.automatic = true;
			play();
			return false;
		});
		config.startButtonAppend.appendChild(startButton);
	}
	
	if(config.automatic) {
		play();
	}
	
	function play() {
		window.setTimeout(function(){
			moveBy(config.scrollCount);
		},config.automaticDelay);
	}
	
	
	/**
	 * get list items
	 * @param {Number} from The from index of the lis to return
	 * @param {Number} to The to index of the lis to return
	 * @return {Array} lis The list items
	 */
	function getLis(from, to) {
		var lis = [];
		var allLis = $(ul).find("li");
		var li = null;
		for(var i = allLis.length-1; i>=0; i--) {
			li = allLis[i];
			if(from !== undefined && i<from) continue;
			if(to !== undefined && i>to-1) continue;
			if (li.parentNode !== ul) continue;
			lis.push(li);
		}
		return lis;
	}
	
	/**
	 * TO DO
	 */
	function getLisHeight() {
		return 100;
	}
	
	/**
	 * Get the total width in pixels of the list items
	 * @param {Array} lis The array of list items to measure
	 * @return {Number} width
	 */
	function getLisWidth(lis) {
		var lis = lis;
		var width = 0;
		var li;
		for(var i = lis.length-1; i>=0; i--) {
			li = lis[i];
			if (li.parentNode !== ul) continue;
			width = width + $(li).outerWidth({margin: true});
			// OLD - width = width + parseInt($(li).css("marginLeft").split("px")[0]) + parseInt($(li).css("marginRight").split("px")[0]);
		}
		return width;
	}
	
	/**
	 * move list items
	 * @param {Number} move The amount of list items to move +1 goes forward 1, -1 goes back 1
	 */
	function moveBy(move) {
		if(state.animating || move === 0) return;
		if(move < 0) {
			goBackwards(move);
		}
		else {
			goForwards(move);
		}
	}
	
	/**
	 * move backwards
	 * can be made more efficient
	 * @param {Number} move Amount of list items to move backwards by
	 */
	function goBackwards(move) {
		var lisToManipulate = getLis(lis.length+move, lis.length).reverse();
		
		// at the beginning so don't go further back
		if(!config.isCircular && (state.currentIndex <= 0)) return;

		// animate
		if(config.animate) {
			$(ul).css("left", -getLisWidth(lisToManipulate));
			$(ul).prepend(lisToManipulate);
			state.animating = true;
			$(ul).animate({"left": "0px"}, {"duration": config.animationSpeed, "easing": config.animationEasing, "complete": function(){
				state.animating = false;
							
				if(state.currentIndex + move < 0) {
					state.currentIndex = lis.length + move + state.currentIndex;
				}
				else {
					state.currentIndex += move;
				}
				
				if(config.automatic) {
					play();
				}
			}});
		}
		// non-animate
		else {
			$(ul).prepend(lisToManipulate);
			if(state.currentIndex + move < 0) {
				state.currentIndex = lis.length + move + state.currentIndex;
			}
			else {
				state.currentIndex += move;
			}
			if(config.automatic) {
				play();
			}
		}
	}
	
	/**
	 * move forwards
	 * can be made more efficient
	 * @param {Number} move Amount of list items to move forwards by
	 */
	function goForwards(move) {
		var	lisToManipulate = getLis(0, move).reverse();
		
		// we are at the end, so don't go further forward
		if(!config.isCircular && (state.currentIndex + config.scrollCount > lis.length - config.scrollCount)) return;
		// animate
		if(config.animate) {
			state.animating = true;
			$(ul).animate({left: -getLisWidth(lisToManipulate)}, {"duration": config.animationSpeed,"easing": config.animationEasing,"complete": function(){
				$(ul).append(lisToManipulate);
				$(ul).css({left: "0px"});
				state.animating = false;
				
				if(state.currentIndex+move > lis.length-1) {
					state.currentIndex = state.currentIndex - lis.length + move;
				}
				else {
					state.currentIndex += move;
				}
				
				if (config.automatic) {
					play();
				}
			}});
		}
		// no animate
		else {
			$(ul).append(lisToManipulate);
			if(state.currentIndex+move > lis.length-1) {
				state.currentIndex = state.currentIndex - lis.length + move;
			}
			else {
				state.currentIndex += move;
			}
			if(config.automatic) {
				play();
			}
		}	
	}
	
}

Adoro.Carousel.button = $('<a href="#"></a>');