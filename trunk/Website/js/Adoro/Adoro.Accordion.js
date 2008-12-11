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
* Create a new accordion
* @class Represents an accordion
* @constructor
* @name Adoro.Accordian
* @param {Object} options The options for this accordion instance
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
*/
Adoro.Accordion = function(anchors, options) {
	var state = {animating: false};
	var config = {
		alwaysOneVisible: true, // TO DO
		animate: true,
		cssActiveClass: "selectedBlah",
		animationShowParams: {height: "show"},
		animationHideParams: {height: "hide"},
		animationShowSpeed: 300,
		animationHideSpeed: 300		
	};
	
	var panels = [];
	
	var anchor, section, panel, open = false;
	for(var i = anchors.length-1; i>=0; i--) {
		anchor = anchors[i];
		section = document.getElementById(anchors[i].hash.slice(1));
		open = $(anchor).hasClass(config.cssActiveClass);
		if(panel === null) continue;
		panel = new Panel(anchor, section);
		panels.push(panel);
		
		if(!open) {
			panel.close();
		}
	}
	
	// TO DO: make sure all are closed but 1
	
	function Panel(anchor, section) {
		var me = this;
		this.anchor = anchor;
		this.section = section;
		this.isOpen = $(this.anchor).hasClass(config.cssActiveClass);
		
		if(!config.animate){
			if(this.isOpen) {
				$(this.section).removeClass(config.cssHidePanelClass);
			}
			else {
				$(this.section).addClass(config.cssHidePanelClass);
			}
		}
		else {
			$(me.section).css("width", $(me.section).innerWidth()+"px");
			$(me.section).css("height", $(me.section).innerHeight()+"px");
		}
		
		$(anchor).bind("click", function(){
			toggle.call(me);
			return false;
		});
		
		this.close = close;
		function close() {
			$(me.anchor).removeClass(config.cssActiveClass);
			$(me.section).css("display", "none");
			me.isOpen = false;
		}
		
		this.open = open;
		function open() {
			$(me.anchor).addClass(config.cssActiveClass);
			$(me.section).css("display", "block");
			me.isOpen = true;
		}		
		
		this.closeAnimate = closeAnimate;
		function closeAnimate() {
			$(me.anchor).removeClass(config.cssActiveClass);
			$(me.section).animate(config.animationHideParams, {duration: config.animationHideSpeed, complete: function(){
				me.isOpen = false;
			}});
		}
		
		this.openAnimate = openAnimate;
		function openAnimate() {
			state.animating = true;
			$(me.anchor).addClass(config.cssActiveClass);
			$(me.section).animate(config.animationShowParams, {duration: config.animationShowSpeed, complete: function(){
				state.animating = false;
				me.isOpen = true;
			}});
		}
	}
	
	function toggle() {
		if(state.animating) return;
		var currentlyOpened = getCurrentlyOpened();
		if(currentlyOpened !== null) {
			if(config.animate) {
				currentlyOpened.closeAnimate();
			}
			else {
				currentlyOpened.close();
			}			
		}
		
		// this can be better i am sure
		if(currentlyOpened === this) {
			return; // dont try and open what we just closed
		}
		
		if(config.animate) {
			this.openAnimate();
		}
		else {
			this.open();
		}
	}
	
	function getCurrentlyOpened() {
		var o = null;
		for(var i = panels.length-1; i>=0; i--){
			if(panels[i].isOpen) {
				o = panels[i];
				break;
			}
		}
		return o;		
	}
}

