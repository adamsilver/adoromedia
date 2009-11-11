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
 * Creates a collapseable area which can toggle show and hide
 * @constructor
 * @class Represents a collapseable object
 * @param {Node} panel The DOM reference to the collapseable panel
 * @param {Object} options The options for the instance
 * @param {Boolean} options.startOpen When true the collapseable panel is open on object creation (typically onload/domready)
 * @param {String} option.hideClass The class name that will be used as a hook for the hide declaration in a CSS file
 * @param {String} options.activatorActiveHTML The innerHTML for the activator when the collapseable panel is open
 * @param {String} options.activatorInactiveHTML The innerHTML for the activator when the collapseable panel is closed
 * @param {String} options.activatorClass The class name that will be used as a hook for the activator declaration in a CSS file
 * @param {Boolean} options.animate If true the show hide effects will be animated
 * @param {Number} options.speed Speed of the animation in milliseconds
 * @param {Nodes[]} options.nodesToAddHideClassTo Any dom nodes to add a hidden view class to (useful for styling states)
 * @param {String} options.nodesHiddenViewClass Hidden view class used for styling states
 */

Adoro.Collapser = function(panel, activator, options) {
	if(panel === undefined || panel === null || activator === undefined || activator === null) return null;
	
	var state = {
		open: false
	};
	
	var config = {
		hideClass: "hide",
		activatorActiveHTML: "Hide",
		activatorInactiveHTML: "Show",
		startOpen: false,
		activatorClass: "toggle",
		animate: false,
		speed: 500,
		nodesToAddHideClassTo: [],
		nodesHiddenViewClass: "hiddenView"
	};

	if(typeof options === "object") {
		config.startOpen = (typeof options.startOpen === "boolean") ? options.startOpen : config.startOpen;
		config.hideClass = (typeof options.hideClass === "string") ? options.hideClass : config.hideClass;
		config.activatorActiveHTML = (typeof options.activatorActiveHTML === "string") ? options.activatorActiveHTML : config.activatorActiveHTML;
		config.activatorInactiveHTML = (typeof options.activatorInactiveHTML === "string") ? options.activatorInactiveHTML : config.activatorInactiveHTML;
		config.activatorClass = (typeof options.activatorClass === "string") ? options.activatorClass : config.activatorClass;
		config.animate = (typeof options.animate === "boolean") ? options.animate : config.animate;
		config.speed = (typeof options.animate === "number") ? options.speed : config.speed;
		config.nodesToAddHideClassTo = (Adoro.isArray(options.nodesToAddHideClassTo)) ? options.nodesToAddHideClassTo : config.nodesToAddHideClassTo;
		config.nodesHiddenViewClass = (typeof options.nodesHiddenViewClass === "string") ? options.nodesHiddenViewClass : config.nodesHiddenViewClass;
	}
		
	$(activator).addClass(config.activatorClass);
	activator.onclick = (config.animate) ? slideTogglePanel : togglePanel;
	
	// override "startOpen" instation option settings if the server/markup already outputted the hideClass on the node
	// useful when server defines state.
	if($(panel).hasClass(config.hideClass)) {
		config.startOpen = false;
	}
	
	if(config.startOpen) {
		state.open = true;
		activator.innerHTML = config.activatorActiveHTML;
	}
	else {
		$(panel).addClass(config.hideClass);
		$(config.nodesToAddHideClassTo).addClass(config.nodesHiddenViewClass);
		activator.innerHTML = config.activatorInactiveHTML;
	}
	
	/**
	 * toggles the collapseable area
	 * @function
	 * @private
	 */
	function togglePanel() {
		if(state.open) {
			// hide
			state.open = false;
			$(panel).addClass(config.hideClass);
			$(config.nodesToAddHideClassTo).addClass(config.nodesHiddenViewClass);
			activator.innerHTML = config.activatorInactiveHTML;
		}
		else {
			// show
			state.open = true;
			$(panel).removeClass(config.hideClass);
			$(config.nodesToAddHideClassTo).removeClass(config.nodesHiddenViewClass);
			activator.innerHTML = config.activatorActiveHTML;
		}
		return false;
	}
	
	/**
	 * toggles the collapseable area with animation slide effects
	 * @function
	 * @private
	 */
	function slideTogglePanel() {
		if(state.open) {
			// hide
			state.open = false;
			activator.innerHTML = config.activatorInactiveHTML;
			$(panel).slideUp(config.speed, function(){
				$(panel).addClass(config.hideClass);
				$(config.nodesToAddHideClassTo).addClass(config.nodesHiddenViewClass);
			});
		}
		else {
			// show
			state.open = true;
			activator.innerHTML = config.activatorActiveHTML;
			$(panel).slideDown(config.speed, function(){
				$(panel).removeClass(config.hideClass);
				$(config.nodesToAddHideClassTo).removeClass(config.nodesHiddenViewClass);
			});
		}
		return false;
	}
}