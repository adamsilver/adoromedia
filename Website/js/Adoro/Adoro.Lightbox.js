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
		htmlBefore: '<div id="lightbox"><div class="header"><h2>Lightbox</h2><a href="#" class="closeDialogue">Close</a></div><div class="image">',
		htmlAfter: '</div><div class="footer">Footer and close here perhaps</div></div>',
		backHTML: '<a class="back" href="#">Back</a>',
		nextHTML: '<a class="next" href="#">Next</a>',
		loadingHTML: '<div id="lightboxLoading">Loading...</div>'
	}
	
	if(typeof options ==="object") {
		// none yet
	}
	
	function LightBoxImage(imageSrc, index, anchor) {
		anchor.onclick = show;
		this.show = show;
		
		function show() {
			// set loading html
			Adoro.Dialogue.hideDialogue();
			Adoro.Dialogue.setHTML(config.loadingHTML);
			Adoro.Dialogue.showOverlay();
			Adoro.Dialogue.showDialogue();

			// preload image
			var objImage = new Image();
			objImage.onload = imageOnLoad;
			objImage.src = imageSrc; // have to do second for IE
			return false;
		}
		
		function imageOnLoad() {
			Adoro.Dialogue.hideDialogue();
			Adoro.Dialogue.setHTML(config.htmlBefore+config.htmlAfter);
			var lightboxImage = $("#lightbox div.image")[0];
			lightboxImage.appendChild(this);
			$("#lightbox").css({"width": this.width+"px"});
			addBackButton();
			addNextButton();
			Adoro.Dialogue.showOverlay({animate: true});
			Adoro.Dialogue.showDialogue({animate: true});
		}
		
		function addBackButton() {
			if(lightBoxImages[index-1] !== undefined) {
				var back = $(config.backHTML)[0];
				$("#lightbox").append(back);
				$(back).bind("click", function(){
					showItem(index-1);
					return false;
				});
			}		
		}
		
		function addNextButton() {
			if(lightBoxImages[index+1] !== undefined) {
				var next = $(config.nextHTML)[0];
				$("#lightbox").append(next);
				
				$(next).bind("click", function(){
					showItem(index+1);
					return false;
				});
			}		
		}
		
	}
	
	function clear() {
		var dialogue = document.getElementById("dialogue") || null;
		if(!dialogue) return;
		dialogue.innerHTML = '<div id="lightbox"></div>';
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
