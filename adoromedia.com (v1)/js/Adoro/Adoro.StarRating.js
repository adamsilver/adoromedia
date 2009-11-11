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
 * Create a new star rating GUI.
 * @class Represents a StarRating
 * @constructor
 * @param {Nodes[]} radios Collection of radio input elements
 */
Adoro.StarRating = function(radios) {
	if(radios.length === 0) return null;
	var config = {enhanceClass: "starRatingEnhanced", labelHoverClass: "starOn", radioFocusClass: "radioFocus"};
	
	// add enhanced class to each input radio
	for (var i = radios.length-1 ; i>=0;i--) {
		radio = radios[i];
		$(radio).addClass(config.enhanceClass);
	}
	
	// assign current rating based on which radio is checked
	var currentRating = (function(){
		var radio = null;
		var value = 0;
		for (var i = radios.length-1 ; i>=0;i--) {
			radio = radios[i];
			if(radio.checked) {
				value = parseInt(radio.value);
				break;
			}
		}
		return value;
	}());
	
	// assign labels array from radios collection and bind events
	var labels = (function(){
		var labels = [];
		var label = null;
		for (var i = 0; i<radios.length;i++) {
			radio = radios[i];
			label = $(radio).next("label")[0] || $(radio).prev("label")[0];
			label.rating = parseInt(document.getElementById($(label).attr("for")).value);
			label.onmouseover = rating_onMouseover;
			label.onmouseout = rating_onMouseOut;
			label.onclick = rating_onClick;
			radio.rating = parseInt(document.getElementById($(label).attr("for")).value);
			radio.onchange = radio_onChange;
			radio.onfocus = radio_onFocus;
			radio.onblur = radio_onBlur;
			
			$(label).addClass(config.enhanceClass);
			labels.push(label);
		}
		return labels;
	}());
	
	function radio_onFocus() {
		$(this).parents("div.radios").addClass(config.radioFocusClass);
	}
	
	function radio_onBlur() {
		$(this).parents("div.radios").removeClass(config.radioFocusClass);
	}	
	
	/**
	 * When a label is moused over showStars with its associated rating
	 * @private
	 * @function
	 */
	function rating_onMouseover() {
		showStars(this.rating);
	}
	
	/**
	 * When a label is moused out showStars with current rating
	 * @private
	 * @function
	 */
	function rating_onMouseOut() {
		showStars(getCurrentRating());
	}
	
	/**
	 * When a label is clicked set the current rating
	 * @private
	 * @function
	 */
	function rating_onClick() {
		setCurrentRating(this.rating);
	}
	
	/**
	 * When a label is clicked set the current rating
	 * @private
	 * @function
	 */
	function radio_onChange() {
		setCurrentRating(this.rating);
		showStars(getCurrentRating());
	}	
	
	/**
	 * Show stars based on a passed in rating
	 * @private
	 * @function
	 * @param {Number} rating
	 */
	function showStars(rating) {
		for(var i=0;i<labels.length;i++) {
			if(i<rating) {
				$(labels[i]).addClass(config.labelHoverClass);
			}
			else {
				$(labels[i]).removeClass(config.labelHoverClass);
			}
		}		
	}
	
	/**
	 * Get the current rating
	 * @private
	 * @function
	 * @return {Number} rating
	 */
	function getCurrentRating() {
		return currentRating;
	}
	
	/**
	 * Set the current rating
	 * @private
	 * @function
	 * @param {String} value
	 */
	function setCurrentRating(value) {
		currentRating = value;
	}
}