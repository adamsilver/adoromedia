var Adoro = Adoro || {};
/**
* Cookie object for adding, getting, setting and deleting cookies.
* @constructor
* @name Adoro.Cookie
* @static
*/
Adoro.Cookie = new (function() {
	var Collection = null;
	function init() {
		Collection = {};
		var cookies = document.cookie.split(";");
		var cookie;
		for (var i = cookies.length - 1; i >= 0; i--) {
			cookie = cookies[i].split("=");
			if (cookie.length >= 2)
				Collection[cookie[0]] = cookie[1];
		}
		init = function() {};
	}
	/**
	* Set the value of a cookie
	* @function
	* @name set
	* @memberOf Adoro.Cookie
	* @param {String} name The name of the cookie
	* @param {String} value The value of the cookie
	* @param {Number or Date} [days] The number of days this cookie should last or the date it should expire as a Date object
	*/
	this.set = function(name, value, days) {
		init();
		var expires = "";
		if (days) {
			var date = days;
			if (!(date instanceof Date)) {
				date = new Date()
				date.setDate(date.getDate() + (days || -1));
			}
			expires = "expires=" + date.toGMTString();
		}
		var cookie = name + "=" + value + ";expires=" + expires + ";path=/";
		document.cookie = cookie;
		Collection[name] = value;
	}
	/**
	* Get the value of a cookie
	* @function
	* @name get
	* @memberOf Adoro.Cookie
	* @param {String} name The name of the cookie to get
	* @return {String} The value of the cookie
	*/
	this.get = function(name) {
		init();
		return Collection[name] || "";
	}
	/**
	* Remove a cookie
	* @function
	* @name remove
	* @memberOf Adoro.Cookie
	* @param {String} name The name of the cookie to remove
	*/
	this.remove = function(name) {
		init();
		this.set(name, "", -1);
		delete Collection[name];
	}
});