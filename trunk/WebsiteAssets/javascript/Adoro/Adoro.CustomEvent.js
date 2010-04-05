var Adoro = Adoro || {};
Adoro.CustomEvent = function() {
	this.listeners = []; // stores the eventHandlers
}
Adoro.CustomEvent.prototype = {
	addListener: function(fn, scope) { // to do: scope
		this.listeners.push(fn);
	},
	fire: function() {
		for(var i = 0; i < this.listeners.length; i++) {
			this.listeners[i].apply(this, arguments);
		}
	},
	removeListener: function(fn) {
		for(var i = 0; i < this.listeners.length; i++) {
			if(this.listeners[i] === fn) {
				this.listeners.splice(i, 1);
			}
		}
	}
}