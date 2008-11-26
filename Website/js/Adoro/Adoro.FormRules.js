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
/**
 * @namespace Holds all the rules as functions to be used in Adoro.Form form validation
 * @name Adoro.FormRules
 * @static
 */
Adoro.FormRules = {
	/**
	 * @description 
	 * Checks to see if a field is empty or not.
	 * @return {boolean} true when not empty otherwise false
	 */
	notEmpty: function(){
		var valid = true;
		var field = this;
		if (field.length > 1) return valid;
		if (field[0].value === "") {
			valid = false;
		}
		return valid;
	},
	/**
	 * @description
	 * Checks to see if the field value is a specific length
	 * @param {Object} params The parameters for the function
	 * @param {Number} params.length The length of characters the field should have
	 * @return {Boolean} true when the length is correct otherwise false
	 */
	isLength: function(params){
		var length = 10;
		if(typeof params === "object") {
			length = (typeof params.length === "number") ? params.length : length;
		}
		var valid = true;
		var field = this;
		if (field.length > 1) return valid;
		if (field[0].value.length !== length) {
			valid = false;
		}
		return valid;
	},
	/**
	 * Checks to see if the amount of checked items is the above or equal to the minChecked argument
	 * @param {Object} params The parameters for the function
	 * @param {Number} params.minChecked The number of items to be checked in field collection
	 * @return {Boolean} true when the minimum has been checked otherwise false
	 */
	minChecked: function(params){
		var minChecked = 0;
		if(typeof params === "object") {
			minChecked = (typeof params.minChecked === "number") ? params.minChecked : minChecked;
		}
		var valid = true;
		var field = this;
		var checkedCount = 0;
		for (var i = 0; i < field.length; i++) {
			if (field[i].checked) {
				checkedCount++;
			}
		}
		if (checkedCount < minChecked) {
			valid = false;
		}
		return valid;
	},
	/**
	 * Checks to see if the field is a valid string in the pattern of an email address.
	 * @return {Boolean} true when the value field value is an email address otherwise false
	 */
	emailAddress: function(){
		var valid = true;
		var field = this;
		if (field.length > 1) return valid;
		var r = new RegExp("^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$");
		if (!r.test(field[0].value)) {
			valid = false;
		}
		return valid;
	},
	/**
	 * Check to see if the field is made of valid "name characters" only
	 * @return {Boolean} true when contains valid name characters otherwise false
	 */
	nameCharacters: function(){
		var valid = true;
		var field = this;
		if (field.length > 1) return valid;
		var r = new RegExp("^([a-zA-Z0-9- '`])+$");
		if (!r.test(field[0].value)) {
			valid = false;
		}		
		return valid;
	},
	/**
	 * Checks to see if the field is a valid phone number
	 * @return {Boolean} true when the value is a valid phone number otherwise false
	 */
	phoneNumber: function() {
		var valid = true;
		var field = this;
		if (field.length > 1) return valid;
		var regex = new RegExp("^[+]?[0-9 ]*\\({1}[0-9]+\\){1}[0-9 ]+$|^[+]?[0-9 ]+$");
		if (!r.test(field[0].value)) {
			valid = false;
		}		
		return valid;		
	},
	/**
	 * Check to see if the field value is a valid password
	 * @return {Boolean} true when the value is a valid password otherwise false
	 */
	password: function() {
		var valid = true;
		var field = this;
		if (field.length > 1) return valid;
		var regex = new RegExp("(^[A-Za-z0-9]{6,12}$)");
		if (!r.test(field[0].value)) {
			valid = false;
		}		
		return valid;		
	},
	/**
	 * Check to see if the field value is a valid number
	 * @return {Boolean} true when the field is a number otherwise false
	 */
	number: function() {
		var valid = true;
		var field = this;
		if (field.length > 1) return valid;
		var regex = new RegExp("^([0-9])+$");
		if (!r.test(field[0].value)) {
			valid = false;
		}		
		return valid;		
	},	
	/**
	 * Check to see if the field value is a string made up of alpha digit special characters, full stops
	 * @return {Boolean} true when regex is matched otherwise false
	 */
	alphadigitsspecialfullstop: function() {
		var valid = true;
		var field = this;
		if (field.length > 1) return valid;
		var regex = new RegExp("^([a-zA-Z0-9- '`.])+$");
		if (!r.test(field[0].value)) {
			valid = false;
		}		
		return valid;		
	},
	/**
	 * Check to see if the value of the field is the same as the matchField argument value
	 * @param {Object} matchField
	 * @return {Boolean} true when the two fields match otherwise false
	 */
	matches: function(params) {
		var matchField = null;
		if(typeof options === "object") {
			matchField = (typeof params.matchField === "object") ? params.matchField : matchField;
		}
		var valid = true;
		var field = this;
		if (field.length > 1) return valid;
		if(matchField === null) return valid;
		if(field[0].value !== matchField.value) {
			valid = false;
		}	
		return valid;
	}
}
