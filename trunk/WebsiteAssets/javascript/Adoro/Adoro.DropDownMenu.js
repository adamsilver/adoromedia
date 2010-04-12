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

/**
 * @class Represents a drop down menu
 * @constructor Create a drop down menu
 * @param {Node} ul The root ul node for the drop down menu
 * @param {Object} options The options for the instance
 * @param {String} options.subMenuType The tag name type for the sub menu, default is "ul"
 * @param {String} options.cssActiveClass The active class that is added to the sub menu activator anchor, default "selected".
 * @param {String} options.cssHideClass The hide class for the menu when in off state (position off screen), default "hide".
 */
Adoro.DropDownMenu = function(ul, options) {
	if(!ul) return;
	alert(1);
	var config = {
		subMenuType: "ul",
		cssActiveClass: "selected",
		cssHideClass: "hide"
	};
	
	if(typeof options === "object") {
		config.subMenuType = (typeof options.subMenuType === "string") ? options.subMenuType : config.subMenuType;
		config.cssActiveClass = (typeof options.cssActiveClass === "string") ? options.cssActiveClass : config.cssActiveClass;
		config.cssHideClass = (typeof options.cssHideClass === "string") ? options.cssHideClass : config.cssHideClass;
	}
	
	var links = $(ul).find("a"), link, subMenu, subLinks, li;
	for(var i=links.length-1; i>=0;i--) {
		link = links[i];
		
		li = $(link).parent("li")[0] || null;
		// if the link hasn't even got an li then don't handle it
		if(!li) continue;
		
		subMenu = $(li).find(config.subMenuType)[0] || null;
		// if the link doesn't have a sub menu then don't handle it
		if(!subMenu) continue;
		
		new AnchorHandler(link, li, subMenu);
		
		subLinks = $(subMenu).find("a");
		for(var j = subLinks.length-1; j>=0;j-- ) {
			new AnchorHandler(subLinks[j], li, subMenu, link);
		}
	}
	
	/**
	 * The abstraction to handle the interaction between a link and the associated sub menu.
	 * @param {Node} link
	 * @param {Node} li
	 * @param {Node} subMenu
	 * @param {Node} subMenuLink
	 */
	function AnchorHandler(link, li, subMenu, subMenuLink) {
		
		console.log([link, li, subMenu, subMenuLink]);
		
		var me = this;
		link = link;
		li = li;
		subMenu = subMenu;
		subMenuLink = subMenuLink || link; // subMenuLink only exists for links in the sub menu otherwise its the same as link.
		
		$(subMenu).bgiframe();
		
		// sublinks do not need this bit - only focus and blur - so not sure best way to make efficient yet
		$(link).bind("mouseenter", showSubMenu);
		$(li).bind("mouseleave", hideSubMenu);
		
		$(link).bind("focus", showSubMenu);
		$(link).bind("blur", hideSubMenu);
		
		function showSubMenu() {
			$(subMenu).removeClass(config.cssHideClass);
			$(subMenuLink).addClass(config.cssActiveClass);
		}

		function hideSubMenu() {
			$(subMenu).addClass(config.cssHideClass);
			$(subMenuLink).removeClass(config.cssActiveClass); // could probably add class instead?
		}
	}
}