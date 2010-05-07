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

var Adoro = Adoro || {};

/**
 * @class Create a drop down menu from a nested list
 * @constructor Create a drop down menu
 * @param {Node} ul The root ul node for the drop down menu
 * @param {Object} options The options for the instance
 * @param {String} options.subMenuType The tag name type for the sub menu, default is "ul"
 * @param {String} options.cssActiveClass The active class that is added to the sub menu activator anchor, default "selected".
 * @param {String} options.cssHideClass The hide class for the menu when in off state (position off screen), default "hide".
 */
Adoro.DropDownMenu = function(ul, options) {
	if(!ul) return;
		
	var config = {
		subMenuType: "ul",
		cssActiveClass: "selected",
		cssHideClass: "hide", 
		delay: 300
	};
	
	options = options || {};
	config.subMenuType = options.subMenuType || config.subMenuType;
	config.cssActiveClass = options.cssActiveClass || config.cssActiveClass;
	config.cssHideClass = options.cssHideClass || config.cssHideClass;
	config.delay = options.delay || config.delay;
	
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
	 * @private
	 * @param {Node} link
	 * @param {Node} li
	 * @param {Node} subMenu
	 * @param {Node} subMenuLink
	 */
	function AnchorHandler(link, li, subMenu, subMenuLink) {
		var timerHide, timerShow;
		
		var me = this;
		link = link;
		li = li;
		subMenu = subMenu;
		
		var isSubMenuLink = (subMenuLink !== undefined);
		
		subMenuLink = subMenuLink || link; // subMenuLink only exists for links in the sub menu otherwise its the same as link.
		
		$(subMenu).bgiframe();

		if(config.delay > 0) {
			$(li).bind("mouseenter", showSubMenuDelay);
			$(li).bind("mouseleave", hideSubMenuDelay);
		}
		else {
			$(li).bind("mouseenter", showSubMenu);
			$(li).bind("mouseleave", hideSubMenu);
		}
		
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
		
		var hideTimer = null, showTimer;
		
		function showSubMenuDelay() {
			clearTimeout(hideTimer);
			showTimer = window.setTimeout(function(){
				showSubMenu();
			}, config.delay);
		}
		
		function hideSubMenuDelay() {
			clearTimeout(showTimer);
			hideTimer = window.setTimeout(function(){
				hideSubMenu();
			}, config.delay);
			
		}
		
	}
}