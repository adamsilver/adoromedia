var Adoro = Adoro || {};
Adoro.Event = function() {
	//create events array for storing the handlers and event handler object
	var events = [];
	var handler = new (function() {
		var tempEvents,
			eventsAdded = false,
			eventsRemoved = false;
		this.firing = false;
		function start() {
			this.firing = true;
			tempEvents = [];
			eventsAdded = eventsRemoved = false;
		}
		function end() {
			if (eventsRemoved) {
				for (var i = events.length-1; i>=0; i--) {
					if (events[i][3]) events.splice(i, 1);
				}
			}
			if (eventsAdded) {
				for (var i = tempEvents.length-1; i>=0; i--)
					events.push(tempEvents[i]);
			}
			this.firing = false;
		}
		this.fire = function() {
			start.call(handler);
			var	returnVal = true, 
				funcReturnVal,
				i = 0,
				j = events.length;
			//sort the event handlers by the event indexes
			events.sort(function(a, b) {
				return a[2] === b[2] ? 0 : (a[2] < b[2] ? 1 : -1);
			});
			//loop through the event handlers and call the function in the scope of source element
			for (i; i < j; i++) {
				//store the return value from each handler.  If any are false, set the master event return value to false
				funcReturnVal = events[i][0].apply(events[i][1], arguments);
				if (returnVal && funcReturnVal === false) returnVal = false;
			} 
			end.call(handler);
			return returnVal;
		}
		this.listen = function(event) {
			eventsAdded = true;
			tempEvents.push(event);
		}
		this.removeListener = function(i) {
			eventsRemoved = true;
			events[i][3] = true;
		}
		this.removeAllListeners = function() {
			for (var i = events.length-1; i>=0; i--)
				this.removeListener(i);
		}
	});
	this.handler = handler;
	this.events = events;
		
	/**
	* Contains accessor methods for the first and last indexes.
	* Created automatically with each instance of J2.Event
	* @class
	* @static
	* @name eventIndexes
	* @memberOf J2.Event
	*/
	this.eventIndexes = new (function() {
		var first = 999, last = -999;
		/**
		* Retrieve the first index.
		* Decrements the value of the first index each time. 
		* @name first
		* @function
		* @memberOf J2.Event.eventIndexes
		* @return {Number}
		*/
		this.first = function() { return first--; };
		/**
		* Retrieve the last index.
		* Increments the value of the first index each time. 
		* @name last
		* @function
		* @memberOf J2.Event.eventIndexes
		* @return {Number}
		*/
		this.last = function() { return last++; };
	});
	/**
	* Add a new subscriber to this event 
	* @name listen
	* @memberOf Adoro.Event
	* @function
	* @param {Function} fn The function to subscribe to this event handler
	* @param {Object} [context] The context that the handler should be called in.  Defaults to the event handler object itself.
	* @param {Number} [sortIndex] The sort index for this subscriber
	* @return {Function} The function subscribed to the event handler
	*/
	this.listen = function(fn, context, sortIndex) {
		var event = [fn, context || this, sortIndex || 99]
		if (handler.firing)
			handler.listen(event);
		else
			events.push(event);
		return fn;
	};
	/**
	* Remove a subscriber from this event
	* @name removeListener
	* @memberOf J2.Event
	* @function
	* @param {Function} fn The function to remove as a subscriber from the event handler
	*/
	this.removeListener = function(fn) {
		//find the event handler
		//the event handler could have been added multiple times hence loop through complete array
		for (var i = events.length - 1; i >= 0; i--) {
			if (events[i][0] === fn) {
				if (handler.firing)
					handler.removeListener(i);
				else
					events.splice(i, 1);
			}
		}
	};
	/**
	* Remove all subscribers from this event
	* @name removeAllListeners
	* @memberOf J2.Event
	* @function
	*/
	this.removeAllListeners = function() {
		if (handler.firing)
			handler.removeAllListeners();
		else
			events = [];
	}
	/**
	* Event handler binding function.
	* Use this function to fire the event this instance of the J2.Event is being used for
	* Can be called directly to manually fire the event handling routing
	* @name fire
	* @memberOf J2.Event
	* @function
	* @param {Object} e Event object (or empty object for manual firing)
	* @return {Boolean} Subscriber return values.  Default return is true. If any subscriber returns false, handleEvent will return false
	*/
	this.fire = handler.fire;
};
