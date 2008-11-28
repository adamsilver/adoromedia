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

// nooby code so they can just do SOMETHING with minimal effort
$(document).ready(function(){
	new Adoro.LightBoxImageGroup($("a.lightBoxImage"));
});

/**
 * @constructor
 * @class Represents a light box image group
 */
Adoro.LightBoxImageGroup = function(anchors, options) {
	if(anchors.length === 0) return null;
	var lightBoxImages = [];

	var i = 0, imageSrc, anchor, lightBoxImage;
	for(i; i<anchors.length; i++) {
		anchor = anchors[i];
		imageSrc = $(anchor).attr("href");
		lightBoxImage = new LightBoxImage(imageSrc, i, anchor);
		lightBoxImages.push(lightBoxImage);
	}
			
	if(typeof options ==="object") {
		// none yet
	}
	
	function LightBoxImage(imageSrc, index, anchor) {
		var html = '<img src="'+imageSrc+'" alt="" />';
		anchor.onclick = show;
		this.show = show;
		function show() {
			LightBox.hideLightBox();
			LightBox.setHTML(html);
			$("back").bind("click", function(){
				showItem(index-1);
			});
			$("next").bind("click", function(){
				showItem(index+1);
			});			
			LightBox.showLightBox();
		}
	}
	
	function showItem(index) {
		lightBoxImages[index].show();
	}
	
	// if dynamically adding a new anchor/lightboximage then need to run this method
	this.reInstantiate = reInstantiate;
	function reInstantiate() {
		// delete array and init() again;
	}
}
