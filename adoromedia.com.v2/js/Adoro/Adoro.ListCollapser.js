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

if(typeof Adoro !== "object") var Adoro = {};

/**
 * Create a collapseable list
 * @class Represents a collapseable list
 * @constructor 
 * @param {Node} activator DOM reference to activator which controls the showing and hiding
 * @param {Node} ul The DOM reference to the UL which has collapseable list items
 * @param {Object} options The options for the instance
 * @param {Number} options.limit The number of list items before the rest become collapseable
 * @param {String} options.showHTML The innerHTML for the activator when in hide mode
 * @param {String} options.hideHTML The innerHTML for the activator when in show mode
 * @param {Boolean} options.startOpen When true the collapseable area starts open otherwise closed
 */
Adoro.ListCollapser = function(activator, ul, options) {
	if(activator === null || activator === undefined || ul === null || ul === undefined || ul.tagName.toLowerCase() !== "ul") return;
	
	var state = {open: false};
	
	var config = {
		limit: 5,
		hideClass: "hide",
		lis: (function(){
			var lis = [];
			var tempLis = $(ul).find("li");
			for(var i = 0; i < tempLis.length; i++) {
				if(tempLis[i].parentNode !== ul) continue;
				lis.push(tempLis[i]);
			}
			return lis;
		}()),
		hideHTML: "Show less",
		showHTML: "Show more",
		startOpen: false
	}
	
	if(typeof options === "object") {
		config.limit = (typeof options.limit === "number") ? options.limit : config.limit;
		config.hideHTML = (typeof options.hideHTML === "string") ? options.hideHTML : config.hideHTML;
		config.showHTML = (typeof options.showHTML === "string") ? options.showHTML : config.showHTML;
		config.startOpen = (typeof options.startOpen === "boolean") ? options.startOpen : config.startOpen;
	}
	
	state.open = config.startOpen;
	
	if(state.open) {
		showItems();
	}
	else {
		hideItems();
	}
	
	$(activator).bind("click", toggle);
	
	function hideItems() {
		for(var i = 0; i < config.lis.length; i++) {
			if(i<config.limit) continue;
			$(config.lis[i]).addClass(config.hideClass);
		}
		state.open = false;
		activator.innerHTML = config.showHTML;		
	}
	
	function showItems() {
		for(var i = 0; i < config.lis.length; i++) {
			if(i<config.limit) continue;
			$(config.lis[i]).removeClass(config.hideClass);
		}
		state.open = true;
		activator.innerHTML = config.hideHTML;
	}
	
	function toggle() {
		if(state.open) {
			hideItems();
		}
		else {
			showItems();
		}
		return false;
	}
	
}