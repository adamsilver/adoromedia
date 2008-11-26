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
	var config = {delay: 10};
	var iframe = (function(){
		iframe = null;
		if (IE6) {
			iframe = document.createElement("iframe");
			iframe.src = "javascript:'<html></html>'";
			iframe.scrolling = "no";
			iframe.frameborder = "no";
			$(iframe).css({height: "1px",position: "absolute",top: "0px",left: "0px",width: "200px",filter: "alpha(opacity=0)",	display: "none",border: "0px"});
		}
		return iframe;
	}());
	
	var links = $(ul).find("a"), link, subMenu, parentLi, menuActivator, menuActivatorSubMenu;
	for(var i=links.length-1; i>=0;i--) {
		link = links[i];
		subMenu = $(link).parent("li").find("ul")[0] || null;
		parentLi = $(link).parent("li")[0] || null;
		menuActivator = $(link).parents("ul").parent("li").children("a")[0] || null;		
		menuActivatorSubMenu = $(menuActivator).parent("li").find("ul")[0] || null;
		
		if(subMenu) {
			link.subMenu = subMenu;
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
		
		if(this.iframe !== null) {
			$(this.iframe).css({
				left: this.offsetLeft-1+"px",
				top: this.offsetTop+this.offsetHeight+"px",
				zIndex: 9,
				height: this.subMenu.offsetHeight+"px"
			});
		}
	}
	
	function hideSubMenu() {
		$(this.subMenu).css({"left": "-999999em"});
		if(this.iframe !== null) {
			$(this.iframe).css({"left": "-999999em"});
		}	
	}	

}