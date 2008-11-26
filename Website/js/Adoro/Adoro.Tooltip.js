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
 * Create a new tooltip
 * @class Represents a tooltip
 * @constructor
 * @param {Node} activator The element that triggers the showing of a tooltip
 * @param {String} content The "innerHTML" for the contents of the tooltip
 * @param {Object} options The options for this instance
 * @param {String} options.showEvent The event that will show a tooltip
 * @param {String} options.hideEvent The event that will hide a tooltip, no default (hides on a timeout)
 * @param {Number} options.delay The delay in milleseconds until the tooltip hides
 * @param {Number} options.offsetLeft The left offset for the tooltip in relation to mouse
 * @param {Number} options.offsetTop The top offset for the tooltip in relation to mouse
 * @param {Boolean} options.followMouse If set to true then there are no delays, and hideEvent is always mouseout
 * @example
 * new Adoro.ToolTip(document.getElementById("act"), "The tooltip", {
 * showEvent: "mouseover",
 * delay: 500});
 */
Adoro.Tooltip = function(activator, content, options) {
	if(!activator) return null;
	var tooltip = $(Adoro.Tooltip.tooltip).clone()[0];
	tooltip.innerHTML = content;
	$(tooltip).css({zIndex: "5001",position: "absolute",left: "-99999em",top: "0px"});		
	var state = {isActivated: false};
	var config = {
		showEvent: "mouseover",
		hideEvent: null,
		delay: 1000,
		offsetLeft: 10, 
		offsetTop: 10,
		followMouse: false
	};
	
	if(typeof options === "object") {
		config.showEvent = options.showEvent || config.showEvent;
		config.hideEvent = options.hideEvent || config.hideEvent;
		config.delay = options.delay || config.delay;
		config.offsetLeft = options.offsetLeft || config.offsetLeft;
		config.followMouse = (typeof options.followMouse === "boolean") ? options.followMouse : config.followMouse;	
	}
	$(activator).bind(config.showEvent, show);
	if(config.hideEvent !== null && !config.follow) {
		$(activator).bind(config.hideEvent, hide);
	}
	
	if(config.followMouse) {
		$(activator).bind("mousemove", show);
		$(activator).bind("mouseout", hide);
	}
	
	function show(e){
		if (!config.followMouse && state.isActivated) return;
		state.isActivated = true;
		document.body.appendChild(tooltip);
		var tooltipPosition = {left: e.pageX + config.offsetLeft, top: e.pageY + config.offsetTop};
		var tooltipWidth = $(tooltip).outerWidth({margin: true});
		var tooltipHeight = $(tooltip).outerHeight({margin: true});
		if(tooltipPosition.left + tooltipWidth > $(window).width()) {
			tooltipPosition.left = - tooltipWidth - config.offsetLeft + e.pageX;
		}
		if(tooltipPosition.top + tooltipHeight > $(window).height()) {
			tooltipPosition.top = - tooltipHeight - config.offsetLeft + e.pageY;
		}		
		$(tooltip).css({left: tooltipPosition.left+"px",top: tooltipPosition.top+"px"});
		
		// if we are not following mouse then hide after timeout
		if (!config.followMouse) {
			window.setTimeout(hide, config.delay);
		}
	};
	
	function hide() {
		$(tooltip).remove();
		state.isActivated = false;
	};
}
Adoro.Tooltip.tooltip = $('<div class="tooltip"></div>');