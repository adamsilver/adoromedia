var Adoro = Adoro || {};

/**
 * 
 * @memberOf Adoro
 *
 */
Adoro.CustomEvent = function() {
	this.listeners = []; // stores the eventHandlers
}
Adoro.CustomEvent.prototype = {
	/**
	 * add listener to custom event
	 * @function
	 * @public
	 * @memberOf Adoro.CustomEvent
	 * @param {function} fn The function which handles the event
	 * @param {scope} scope The scope in which the function is called
	 */
	addListener: function(fn, scope) {
		this.listeners.push({fn:fn, scope: scope ? scope : this });
	},
	
	/**
	 * fire custom event
	 * <br/><br/>Note: The events parsed to this method will be parsed tot he event handler
	 * @function
	 * @public
	 * @memberOf Adoro.CustomEvent
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
	 * @function
	 * @public
	 * @memberOf Adoro.CustomEvent
	 * @param {function} fn The function that identifies the listener
	 */
	removeListener: function(fn) {
		for(var i = 0; i < this.listeners.length; i++) {
			if(this.listeners[i].fn === fn) {
				this.listeners.splice(i, 1);
			}
		}
	}
}