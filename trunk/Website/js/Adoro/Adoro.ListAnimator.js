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
Adoro.ListAnimator = function(lis, options){
	if (lis.length === 0) return null;
	var config = {
		cssStart: {"opacity": "0"},
		cssEnd: {"opacity": "1"},
		speed: 200
	};
	
	if(typeof options === "object") {
		config.cssStart = (typeof options.cssStart === "object") ? options.cssStart : config.cssStart;
		config.cssEnd = (typeof options.cssEnd === "object") ? options.cssEnd : config.cssEnd;
		config.speed = (typeof options.speed === "number") ? options.speed : config.speed;
	}
	
	this.start = start;
	function start() {
		$(lis).css(config.cssStart);
		animate();
	}
	
	var count = 0;
	function animate(){
		if (count === length - 1) return;
		$(lis[count]).animate(config.cssEnd, config.speed, animate_onComplete);
	}
	function animate_onComplete(){
		count++;
		animate();
	}
}