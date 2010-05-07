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
$(document).ready(function(){ 

	Adoro.Promo = new (function() {
		var promos = $("div.promotions");
		for (var i = promos.length-1; i >= 0; i--) {
			create(promos[i]);
		}

		this.create = create;
		/**
		 * Adds a new promotion object
		 * @public
		 * @function
		 * @memberOf Adoro.Promo
		 * @name create
		 * @param {Node} container Container node for promotional set
		 */		
		function create(node) {
			new Promo(node);
		}

		function Promo(promo){
			var config = {delay: 500,speed: 3000}
			
			if(getPromos().length < 2) return;
			
			waitAndPlay();
			
			function getPromos() {
				return $("li.promo", promo);
			}			
			
			function waitAndPlay() {
				window.setTimeout(animate, config.delay);
			}
			
			function animate() {
				var li = getLastLi();
				$(li).fadeOut(config.speed,animateComplete);
			}
			
			function getLastLi() {
				var lis = getPromos();
				var li = lis[lis.length-1];
				return li;
			}			
			
			function animateComplete() {
				var li = this;
				$(li).show();
				$(promo).find("ul").prepend(li);
				waitAndPlay();
			}
		}
	})
});