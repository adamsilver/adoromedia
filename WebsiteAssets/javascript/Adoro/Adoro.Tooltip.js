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
 * @class Create tooltips that can optionally follow the mouse and detect viewport thresholds.
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
		delay: 2000,
		offsetLeft: 10, 
		offsetTop: 10,
		followMouse: false
	};
	
	if(typeof options === "object") {
		config.delay = (typeof options.delay === "number") ? options.delay : config.delay;
		config.offsetLeft = (typeof options.offsetLeft === "number") ? options.offsetLeft : config.offsetLeft;
		config.offsetTop = (typeof options.offsetTop === "number") ? options.offsetTop : config.offsetTop;
		config.followMouse = (typeof options.followMouse === "boolean") ? options.followMouse : config.followMouse;	
	}
	
	$(activator).bind("mouseover", show);
	if(config.followMouse) {
		$(activator).bind("mousemove", show);
	}
	$(activator).bind("mouseout", hide);
	
	function show(e){
		if (!config.followMouse && state.isActivated) return;
		state.isActivated = true;
		document.body.appendChild(tooltip);
		$(tooltip).bgiframe();
		
		var tooltipInfo = {
			width: $(tooltip).outerWidth({margin: true}),
			height: $(tooltip).outerHeight({margin: true}),
			positionX: e.pageX + config.offsetLeft,
			positionY: e.pageY + config.offsetTop
		}
		
		// check for off screen X
		if(tooltipInfo.positionX + tooltipInfo.width > $(window).width()) {
			tooltipInfo.positionX = - tooltipInfo.width + tooltipInfo.positionX;
		}
		
		// check for off screen Y
		if(tooltipInfo.positionY + tooltipInfo.height > $(window).height()) {
			tooltipInfo.positionY = - tooltipInfo.height + tooltipInfo.positionY;
		}

		$(tooltip).css({"left": tooltipInfo.positionX+"px","top": tooltipInfo.positionY+"px"});
		
		if (config.delay > 0) {
			window.setTimeout(hide, config.delay);
		}
	};
	
	function hide() {
		$(tooltip).remove();
		state.isActivated = false;
	};
}
Adoro.Tooltip.tooltip = $('<div class="tooltip"></div>');