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

$(document).ready(function(){
	var tabsets = $(".tabset").each(function(i) {
		new Adoro.Tabset(this);
	});
});

/**
 * Create a new tabset module.
 * @constructor
 * @class Represents a tabset.
 * @param {Node} container The root node for the tabset module
 * @param {Object} options The options for the instance
 * @param {String} options.activatorClass The activator class name. Default is "tabAcivator".
 * @param {String} options.activatorSelectedClass The activator selected class name. Default is "selected".
 * @param {String} options.tabHideClass The tab hidden class name. Default is "unselected".
 */
Adoro.Tabset = function(container, options) {
	if(container === null || container === undefined) return null;
	var config = {
		activatorClass: "tabActivator",
		activatorSelectedClass: "selected",
		tabHideClass: "unselected",
		selectedTab: null
	};
	
	if(typeof options === "object") {
		config.activatorClass = (typeof options.activatorClass === "string") ? options.activatorClass : config.activatorClass;
		config.activatorSelectedClass = (typeof options.activatorSelectedClass === "string") ? options.activatorSelectedClass : config.activatorSelectedClass;
		config.tabHideClass = (typeof options.tabHideClass === "string") ? options.tabHideClass : config.tabHideClass;
	}
	
	var activators = $(container).find("a."+config.activatorClass);
	for (var i=0; i < activators.length; i++) {
		activators[i].relatedTab = document.getElementById(activators[i].hash.slice(1));
		$(activators[i]).click( tab_onClick );
		if ($(activators[i]).hasClass(config.activatorSelectedClass)) {
			config.selectedTab = activators[i].relatedTab;
		}
	}
	hideTabs(config.selectedTab);

	function hideTabs(ignoreNode) {
		for ( var i = activators.length-1; i >= 0; i--) {
			if (activators[i].relatedTab !== ignoreNode) {
				$(activators[i]).removeClass(config.activatorSelectedClass);
				$(activators[i].relatedTab).addClass(config.tabHideClass);
			}
		}
	}
	
	function tab_onClick() {
		hideTabs(this.relatedTab);
		$(this).addClass(config.activatorSelectedClass);
		$(this.relatedTab).removeClass(config.tabHideClass);
		return false;
	}
	
}












