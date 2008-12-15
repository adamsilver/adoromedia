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
* Create a new accordian
* @class Represents an accordian
* @constructor
* @name Adoro.Accordian
* @param {Object} options The options for this accordian instance
* @param {HTMLElement} options.container The container node
* @param {Object} options.animationShowParams Different animation styles when the element is shown
* @param {Object} options.animationHideParams Different animation styles when the element is hidden
* @param {Number} options.animationShowSpeed Number in milleseconds
* @param {Number} options.animationHideSpeed Number in milleseconds
* @param {String} options.event Event that triggers accordian interaction
* @param {String} options.activatorClass Class name for the activator
* @param {String} options.panelClass Class name for the panel
* @param {String} options.activatorActiveClass Class name for the activator when in active mode
* @param {String} options.panelActiveClass Class name for the panel when in active mode
* @example
* var myAccordian = new Adoro.Accordian({container: document.getElementById("container")})
*/
Adoro.Accordian = function(options) {
	if(typeof options !== "object") return null;
	var state = {animating: false};
	var config = {
		container: options.container || null,
		animationShowParams: options.animationShowParams || {height: "show"},
		animationHideParams: options.animationHideParams || {height: "hide"},
		animationShowSpeed: options.animationShowSpeed || 300,
		animationHideSpeed: options.animationShowSpeed || 300,
		event: options.event || "click",
		activatorClass: options.activatorClass || "accordianActivator",
		panelClass: options.panelClass || "accordianPanel",
		activatorActiveClass: options.activatorActiveClass || "activatedActivator",
		panelActiveClass: options.panelActiveClass || "activatedPanel"
	}
	
	if(config.container === null) return null;
	var activators = $(config.container).find("."+config.activatorClass);
	var panels = $(config.container).find("."+config.panelClass);
	if(activators.length === 0 || panels.length === 0) return null;
	
	for(var i = activators.length-1; i>=0; i--) {
		$(activators[i]).css("cursor", "pointer");
		$(panels[i]).css("width", $(panels[i]).innerWidth()+"px");
		$(panels[i]).css("height", $(panels[i]).innerHeight()+"px");

		if(!$(activators[i]).hasClass(config.activatorActiveClass)) {
			$(panels[i]).css({display: "none"});	
		}
		(function(i){
			$(activators[i]).bind(config.event, function(){
				toggle_activate.call(this, this, panels[i]);
				return false;
			});
		})(i);
	}
	
	function toggle_activate(activator, panel) {
		if(state.animating) return;
		var current = getCurrentlyOpened();
			
		// close an open panel
		if(current !== null) {
			$(current.panel).removeClass(config.panelActiveClass);
			$(current.activator).removeClass(config.activatorActiveClass);
			close(current.panel);
			if(current.activator === activator) {
				return; // dont try and open what we just closed
			}
		}
		$(panel).addClass(config.panelActiveClass);
		$(activator).addClass(config.activatorActiveClass);
		open(panel);
	}
	
	function close(panel) {
		state.animating = true;
		$(panel).animate(config.animationHideParams, {duration: config.animationHideSpeed, complete: function(){
			state.animating = false;
		}});
	}
	
	function open(panel) {
		$(panel).animate(config.animationShowParams, {duration: config.animationShowSpeed});
	}
	
	function getCurrentlyOpened() {
		var o = null;
		for(var i = 0; i < activators.length; i++) {
			if($(activators[i]).hasClass(config.activatorActiveClass)) {
				o = {activator: activators[i],panel: panels[i]};
				break;
			}
		}
		return o;
	}	
}

