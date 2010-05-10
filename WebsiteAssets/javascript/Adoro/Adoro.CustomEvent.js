var Adoro = Adoro || {};

/**
 * @class Very basic custom event object
 * @constructor
 * @author Adam Silver
 * @example
 * var myEvent = new Adoro.CustomEvent();
 */
Adoro.CustomEvent = function() {
	this.listeners = []; // stores the eventHandlers
}
Adoro.CustomEvent.prototype = {
	/**
	 * add listener to custom event
	 * @param {function} fn The function which handles the event
	 * @param {scope} scope The scope in which the function is called
	 * @example
	 * function myFunc() {}
	 * var myEvent = new Adoro.CustomEvent();
	 * myEvent.addListener(myFunc);
	 */
	addListener: function(fn, scope) {
		this.listeners.push({fn:fn, scope: scope ? scope : this });
	},
	
	/**
	 * fire custom event
	 * <br/><br/>Note: The events parsed to this method will be parsed to the event handler
	 * @example
	 * function myFunc() {}
	 * var myEvent = new Adoro.CustomEvent();
	 * myEvent.fire();
	 */
	fire: function() {
		var listener = null;
		for(var i = 0; i < this.listeners.length; i++) {
			listener = this.listeners[i];
			listener.fn.apply(listener.scope, arguments);
		}
	},
	
	/**
	 * remove listener from custom event
	 * @param {function} fn The function that identifies the listener
	 * @example
	 * function myFunc() {}
	 * var myEvent = new Adoro.CustomEvent();
	 * myEvent.removeListener(myFunc);
	 */
	removeListener: function(fn) {
		for(var i = 0; i < this.listeners.length; i++) {
			if(this.listeners[i].fn === fn) {
				this.listeners.splice(i, 1);
			}
		}
	}
}