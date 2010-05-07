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
		

	this.eventIndexes = new (function() {
		var first = 999, last = -999;
		this.first = function() { return first--; };

		this.last = function() { return last++; };
	});

	this.listen = function(fn, context, sortIndex) {
		var event = [fn, context || this, sortIndex || 99]
		if (handler.firing)
			handler.listen(event);
		else
			events.push(event);
		return fn;
	};

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

	this.removeAllListeners = function() {
		if (handler.firing)
			handler.removeAllListeners();
		else
			events = [];
	}

	this.fire = handler.fire;
};
