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
		containerID: "lightbox",
		imageContainerID: "lightboxImage",
		htmlBefore: '<div class="header"><h2>Lightbox</h2><a href="#" class="closeDialogue">Close</a></div>',
		htmlAfter: '<div class="footer">This is the footer or whatever you want</div>',
		htmlBack: '<a class="back" href="#">Back</a>',
		htmlNext: '<a class="next" href="#">Next</a>',
		htmlLoading: '<div id="lightboxLoading">Loading...</div>',
		overlayOpacity: "0.9"
	}
	
	if(typeof options ==="object") {
		config.containerID = (typeof options.containerID === "string") ? options.containerID : config.containerID;
		config.imageContainerID = (typeof options.imageContainerID === "string") ? options.imageContainerID : config.imageContainerID;
		config.htmlBefore = (typeof options.htmlBefore === "string") ? options.htmlBefore : config.htmlBefore;
		config.htmlAfter = (typeof options.htmlAfter === "string") ? options.htmlAfter : config.htmlAfter;
		config.htmlBack = (typeof options.htmlBack === "string") ? options.htmlBack : config.htmlBack;
		config.htmlNext = (typeof options.htmlNext === "string") ? options.htmlNext : config.htmlNext;
		config.htmlLoading = (typeof options.htmlLoading === "string") ? options.htmlLoading : config.htmlLoading;
		config.overlayOpacity = (typeof options.overlayOpacity === "string") ? options.overlayOpacity : config.overlayOpacity;
	}
	
	var HTML = 		'<div id="'+config.containerID+'">';
		HTML +=			config.htmlBefore;
		HTML +=				'<div id="'+config.imageContainerID+'"></div>';
		HTML +=			config.htmlAfter;
		HTML += 	'</div>';
		
	function LightBoxImage(imageSrc, index, anchor) {
		anchor.onclick = show;
		this.show = show;
		
		function show() {
			// set loading html
			Adoro.Dialogue.hideDialogue();
			Adoro.Dialogue.setHTML(config.htmlLoading);
			Adoro.Dialogue.showDialogue({overlayOpacity: config.overlayOpacity});
			// preload image
			var objImage = new Image();
			objImage.onload = imageOnLoad;
			objImage.src = imageSrc; // have to do second for IE
			return false;
		}
		
		function imageOnLoad() {
			Adoro.Dialogue.hideDialogue({closeOverlay: false});
			Adoro.Dialogue.setHTML(HTML);
			
			// inject image
			var imageContainer = document.getElementById(config.imageContainerID);
			if(!imageContainer) return;
			imageContainer.appendChild(this);
			
			// set width of container
			var lightboxContainer = document.getElementById(config.containerID);
			if(!lightboxContainer) return;
			$(lightboxContainer).css({"width": this.width+"px"});
			
			addBackButton();
			addNextButton();
			
			Adoro.Dialogue.showDialogue({animateDialogue: true});
		}
		
		function addBackButton() {
			if(lightBoxImages[index-1] !== undefined) {
				var back = $(config.htmlBack)[0] || null;
				if(!back) return;
				
				var lightboxContainer = document.getElementById(config.containerID);
				if(!lightboxContainer) return;
				$(lightboxContainer).append(back);
				
				$(back).bind("click", function(){
					showItem(index-1);
					return false;
				});
			}		
		}
		
		function addNextButton() {
			if(lightBoxImages[index+1] !== undefined) {
				var next = $(config.htmlNext)[0] || null;
				if(!next) return;
				
				var lightboxContainer = document.getElementById(config.containerID);
				if(!lightboxContainer) return;
				$(lightboxContainer).append(next);
				
				$(next).bind("click", function(){
					showItem(index+1);
					return false;
				});
			}		
		}
		
	}
	
	this.showItem = showItem;
	function showItem(index) {
		var lightBoxImage = lightBoxImages[index];
		if(lightBoxImage === undefined) {
			Adoro.Dialogue.hideDialogue();
		}
		lightBoxImage.show();
	}
	
	// if dynamically adding a new anchor/lightboximage then need to run this method
	// not important for now
	//this.reInstantiate = reInstantiate;
	//function reInstantiate() {
		// delete array and init() again;
	//}
}
