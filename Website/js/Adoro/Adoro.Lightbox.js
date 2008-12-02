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
	new Adoro.Lightbox($("a.lightbox"));
});

/**
 * @constructor
 * @class Represents a light box image group
 */
Adoro.Lightbox = function(anchors, options) {
	if(anchors.length === 0) return null;
	var lightBoxImages = [];

	var i = 0, imageSrc, anchor, lightBoxImage;
	for(i; i<anchors.length; i++) {
		anchor = anchors[i];
		imageSrc = $(anchor).attr("href");
		lightBoxImage = new LightBoxImage(imageSrc, i, anchor);
		lightBoxImages.push(lightBoxImage);
	}
	
	var config = {
		htmlBefore: '<div id="lightbox"><div class="header">Header and close here perhaps<a href="#" class="closeDialogue">Close</a></div><div class="image">',
		htmlAfter: '</div><div class="footer">Footer and close here perhaps</div></div>',
		backHTML: '<a class="back" href="#">Back</a>',
		nextHTML: '<a class="next" href="#">Next</a>'
	}
	
	if(typeof options ==="object") {
		// none yet
	}
	
	function LightBoxImage(imageSrc, index, anchor) {
		anchor.onclick = show;
		this.show = show;
		
		function show() {
			Adoro.Dialogue.setHTML(config.htmlBefore+config.htmlAfter);
			var lightbox = document.getElementById("lightbox");
			var objImage = new Image();
			objImage.onload = function() {
				var lightboxImage = $("#lightbox div.image")[0];
				lightboxImage.appendChild(objImage);
				
				$(lightbox).css({
					"height": $(lightbox).height()+"px",
					"width": $(lightbox).width()+"px"
				});
				Adoro.Dialogue.hideDialogue();
				Adoro.Dialogue.showOverlay();
				Adoro.Dialogue.showDialogue();
			}				
			
			if(lightBoxImages[index-1] !== undefined) {
				var back = $(config.backHTML)[0];
				lightbox.appendChild(back);
				
				$(back).bind("click", function(){
					showItem(index-1);
					return false;
				});
			}
			
			if(lightBoxImages[index+1] !== undefined) {
				var next = $(config.nextHTML)[0];
				lightbox.appendChild(next);
				
				$(next).bind("click", function(){
					showItem(index+1);
					return false;
				});
			}
			
		
			
			objImage.src = imageSrc;
			return false;
		}
	}
	
	function showItem(index) {
		var lightBoxImage = lightBoxImages[index];
		if(lightBoxImage === undefined) return;
		lightBoxImage.show();
	}
	
	// if dynamically adding a new anchor/lightboximage then need to run this method
	// not important for now
	//this.reInstantiate = reInstantiate;
	//function reInstantiate() {
		// delete array and init() again;
	//}
}
