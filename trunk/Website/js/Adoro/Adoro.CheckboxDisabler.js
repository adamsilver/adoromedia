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
 * Create CheckboxDisabler instances
 * @class Represents a CheckboxDisabler module
 * @constructor
 * @param {Node[]} checkboxes A collection of checkbox nodes
 * @param {Number} maxSize The max size of selected checkboxes before the remainder become disabled
 */
Adoro.CheckboxDisabler = function(checkboxes, maxSize){
	if(checkboxes.length < 1) return;
	toggleCheckboxes();
	$(checkboxes).bind("click", toggleCheckboxes);
	
	/**
	 * Toggle checkboxes state by determining if maxSize has been reached
	 * @private
	 * @function
	 */
	function toggleCheckboxes() {
		var count = getCheckedCount();
		if (count>=maxSize) {
			disableRemainingCheckboxes();
		}
		else {
			enableCheckboxes();
		}
	}
	
	/**
	 * Get the number of checked items
	 * @private
	 * @function
	 * @return {Number} checked items as number
	 */
	function getCheckedCount() {
		var count = 0;
		for (var i=0;i<checkboxes.length; i++) {
			if (checkboxes[i].checked) {
				count++
			}
		}
		return count;
	}
	
	/**
	 * Disable remaining checkboxes
	 * @private
	 * @function
	 */
	function disableRemainingCheckboxes() {
		for (var i=0;i<checkboxes.length; i++) {
			if (!checkboxes[i].checked) {
				checkboxes[i].disabled = true;
			}
		}			
	}
	
	/**
	 * Enable checkboxes
	 * @private
	 * @function
	 */
	function enableCheckboxes() {
		for (var i=0;i<checkboxes.length; i++) {
			checkboxes[i].disabled = false;
		}
	}
}