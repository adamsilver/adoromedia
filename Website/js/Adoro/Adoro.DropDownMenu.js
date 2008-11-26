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

if (typeof Adoro !== "object") { var Adoro = {}; }

Adoro.DropDownMenu = function(ul, options) {
	var ul = ul || null;
	if(!ul) return;
	var IE6 = ($.browser.msie && parseInt($.browser.version) <=6);

	// TO DO
		// set config to change events handling for onlick etc



	var links = $(ul).find("a"), link, subMenu, parentLi, menuActivator, menuActivatorSubMenu;
	for(var i=links.length-1; i>=0;i--) {
		link = links[i];
		subMenu = $(link).parent("li").find("ul")[0] || null;
		parentLi = $(link).parent("li")[0] || null;
		menuActivator = $(link).parents("ul").parent("li").children("a")[0] || null;		
		menuActivatorSubMenu = $(menuActivator).parent("li").find("ul")[0] || null;
		
		if(subMenu) {
			link.subMenu = subMenu;
			$(link.subMenu).bgiframe();
			$(link).bind("mouseenter", showSubMenu);
		}
		
		if(parentLi) {
			parentLi.subMenu = subMenu;
			$(parentLi).bind("mouseleave", hideSubMenu);
		}
		
		if(menuActivator && menuActivatorSubMenu) {
			link.subMenu = menuActivatorSubMenu;
			$(link).bind("focus", showSubMenu);
			$(link).bind("blur", hideSubMenu);
		}
	}
	
	function showSubMenu() {
		$(this.subMenu).css({
			left: this.offsetLeft-1+"px",
			top: this.offsetTop+this.offsetHeight+"px",
			zIndex: 10
		});
	}
	
	function hideSubMenu() {
		$(this.subMenu).css({"left": "-999999em"});
	}	
}