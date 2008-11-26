//  ---------------------------------------------------------------------------------------------------------
//  --- license header; ---
//  ---------------------------------------------------------------------------------------------------------
/* Copyright (c) 2007 - 2008 by James Norton
	info@j-squared.info
  
    This file is part of JSquared.
    
    JSquared is free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.
 
    JSquared is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.
 
    You should have received a copy of the GNU Lesser General Public License
    along with JSquared.  If not, see <http://www.gnu.org/licenses/>.
*/
//  ---------------------------------------------------------------------------------------------------------
//  ---------------------------------------------------------------------------------------------------------
/**
* @fileOverview FXSquared core objects
* @name FXSquared
*/
/**
* The base class for all FX
* @constructor
* @name J2.FX
* @param {Array} options The array of J2.FXOptions that define the options for this FX
*/
/**
* Anonymous function to add tools to the J2.Element object.
* The methods defined here are added to each DOM node bound to the J2.Element object.
* @class
* @static
* @name Element
* @memberOf J2.FX
* @see J2.Element
*/
J2.FX = new (function() {
		/** 
	* Add the animate element tool.
	* Directly calls the Style FX type.
	* @function
	* @name animate
	* @memberOf J2.FX.Element
	* @see J2.FX.Style
	* @see J2.FX.Transitions
	* @param {Object} types The style types to animate.  Passed as an object of CSS style names and end values.
	* @param {Number} [timeToComplete] The time taken to complete the animation in milliseconds.  Default to 500.
	* @param {J2.FX.Transitions or String} [transition] The transitional effect to use for the animation.  Passed as either the transition object or as a string representing the transition object.  Defaults to linear.
	* @param {Function} [callback]  The function to call when the animation completes.
	* @return {J2.FX} The effect created
	* @example
	* //Animate the opacity to zero (a fade out effect) over 1 second and using a Quadratic easeIn effect
	* document.getElementById("myElemet").animate( {
	*	opacity: 0
	* }, 1000, J2.FX.Transitions.Quad.easeIn );
	* @example
	* //Animate the height and width to zero and the background color to black over the default time period using an Exponential easeOut effect
	* document.getElementById("myElement").animate( {
	* 	width: 0,
	* 	height: 0,
	* 	"background-color": new J2.Core.CSSColor( 0, 0, 0 )
	* }, null, "Exp.easeOut" );
	*/
	J2.Core.addElementTool("animate", function(types, timeToComplete, transition, callback) {
		if (typeof types !== "object") return false;
		var FXOptions = [];
		for (var animation in types) {
			FXOptions.push( new J2.FXOptions(types[animation], {property:animation, timeToComplete: timeToComplete, transition: transition}) );
		}
		var fx = this.createFX("Style", FXOptions, callback);
		if (fx !== false)
			fx.start();
		return fx;
	});
	/**
	* Add the createFX element tool
	* @function
	* @name createFX
	* @memberOf J2.FX.Element
	* @see J2.FXOptions
	* @param {String} type The effect type to run.  The effect type must be created as a plugin to be created in this way.
	* @param {Array or J2.FXOptions} options An array of J2.FXOptions or an instance of J2.FXOptions defining how the effect should run.
	* @param {Function} [onFXEnd] The function to call when the effect is complete
	* @return {J2.FX} The effect created
	*/
	J2.Core.addElementTool("createFX", function(type, options, onFXEnd) {
		if (typeof J2.FX[type] !== "function") return false;
		var thisFX = this.FX;
		if (thisFX == null)
			thisFX = this.FX = {FXCallbacks:{}};
		if (typeof thisFX[type] === "object") {
			thisFX[type].stop();
			this.removeFX(type);
		}
		if (typeof onFXEnd === "function")
			thisFX.FXCallbacks[type] = onFXEnd;
		options = isArray(options) ? options : [options];
		thisFX[type] = J2.FX[type](this, options);
		thisFX[type].element = this;
		thisFX[type].type = type;
		return thisFX[type];
	});
	/**
	* Add the getFX element tool.
	* Will return the J2.FX object for the effect type specified if one is already running for this DOM node
	* @function
	* @name getFX
	* @memberOf J2.FX.Element
	* @param {String} type The effect type to get.
	* @return {J2.FX or null} The effect if it exists or null
	*/
	J2.Core.addElementTool("getFX", function(type) {
		var thisFX = this.FX;
		return thisFX == null ? null : (thisFX[type] ? thisFX[type] : null);
	});
	/**
	* Add the removeFX element tool
	* @function
	* @name removeFX
	* @memberOf J2.FX.Element
	* @param {String} type The effect type to remove
	*/
	J2.Core.addElementTool("removeFX", function(type) {
		var thisFX = this.FX;
		if (thisFX !== null) {
			delete thisFX[type];
			delete thisFX.FXCallbacks[type];
		}
	});
	/**
	* Add the removeAllFX element tool
	* @function
	* @name removeAllFX
	* @memberOf J2.FX.Element
	*/
	J2.Core.addElementTool("removeAllFX", function() {
		var thisFX = this.FX;
		if (thisFX !== null) {
			for (var type in thisFX) {
				if (type === "FXCallbacks") continue;
				this.removeFX(type);
			}
		}
	});
		function FXBase(options) {
		var interval = null, progress = 0, currentFXOptions = [], me = this;
		/**
		* The start time for this running of the effect
		* @name startTime
		* @memberOf J2.FX
		* @type Number
		*/
		this.startTime = null;
				/**
		* Initialises this FX.  Will cause a complete reset
		* @function
		* @name init
		* @memberOf J2.FX
		* @return {J2.FX} This J2.FX object
		*/
		this.init = function() {
			//go through each option and set the start value
			for (var i = options.length-1; i>=0; i--) {
				//if the option type if for a color property, create 3 separate colour options, one for each index to make the difference in colour in each step calculable
				if (/color/i.test(options[i].getProperty())) {
					//split the color one down...
					var colorVal = options[i].getEndValue(), thisColor;
					for (var j = colorVal.length-1;j>=0;j--) {
						switch (j) {
							case 2:
								thisColor = "blue";
								break;
							case 1:	
								thisColor = "green";
								break;
							case 0:
								thisColor = "red";
								break;
						}
						options.push( new J2.FXOptions(colorVal[j], {
										property: options[i].getProperty() + "_" + thisColor, 
										timeToComplete: options[i].getTimeToComplete(), 
										transition: options[i].transition
									}) );
						options[options.length-1].setStartValue(this.getCurrentValue(options[options.length-1].property));
					}
					options.splice(i,1);
					continue;
				}
				//set the start value
				options[i].setStartValue(this.getCurrentValue(options[i].getProperty()));
			}
			return this;
		};

		/**
		* Reset all options to their start value.  Does not affect timing values or effects in progress
		* @function
		* @name reset
		* @memberOf J2.FX
		*/
		this.reset = function() {
			for (var i = options.length-1; i>=0; i--)
				this.set(options[i].getNewValue(0), options[i].getProperty());
		};
		/**
		* Start the effect.
		* Will call the reset method and restart the effect if previously started.
		* @function
		* @name start
		* @memberOf J2.FX
		*/
		this.start = function() {
			this.stop();
			this.reset();
			currentFXOptions = options.copy();
			progress = 0;
			this.startTime = new Date().getTime();
			interval = setInterval( step, 10 );
		};
		/**
		* Stops the effect and set the progress to complete but will not set the option values to their end value.
		* @function
		* @name stop
		* @memberOf J2.FX
		*/
		this.stop = function() {
			clearInterval(interval);
			interval = null;
		};
		/**
		* Stops the effect and fires the onFXEnd event
		* @function
		* @name end
		* @memberOf J2.FX
		*/
		this.end = function() {
			this.stop();
			var FXCallback = this.element.FX.FXCallbacks;
			if (typeof FXCallback[this.type] === "function")
				FXCallback[this.type].call(this.element, this.type);
		};
		/**
		* Sets each option to its end value
		* @function
		* @name goToEnd
		* @memberOf J2.FX
		*/
		this.goToEnd = function() {
			this.stop();
			for (var i = currentFXOptions.length - 1; i >= 0; i--) {
				this.set(currentFXOptions[i].getNewValue(1), currentFXOptions[i].getProperty());
			}
			currentFXOptions = [];
		};
		/**
		* Check if the effect is currently running
		* @function
		* @name isRunning
		* @memberOf J2.FX
		* @return {Boolean}
		*/
		this.isRunning = function() {
			return interval !== null;
		};
		/**
		* Check if the effect has been run since its creation
		* @function
		* @name hasBeenRun
		* @memberOf J2.FX
		* @return {Boolean}
		*/
		this.hasBeenRun = function() {
			return this.startTime !== null;
		};
		/**
		* Check if the effect is complete
		* @function
		* @name isComplete
		* @memberOf J2.FX
		* @return {Boolean}
		*/
		this.isComplete = function() {
			return currentFXOptions.length === 0;
		};
		var step = function() {
			var elapsedTime = new Date().getTime() - me.startTime, timeToComplete;
			if (elapsedTime === 0) return;
			//go through all of the FX options for this animation run
			for (var i = currentFXOptions.length - 1; i >= 0; i--) {
				timeToComplete = currentFXOptions[i].getTimeToComplete();
				if (elapsedTime < timeToComplete) {
					progress = elapsedTime / timeToComplete;
					me.set(currentFXOptions[i].getNewValue(progress), currentFXOptions[i].getProperty());
				} else {
					me.set(currentFXOptions[i].getNewValue(1), currentFXOptions[i].getProperty());
					currentFXOptions.splice(i, 1);
				}
				if (currentFXOptions.length === 0) {
					me.end();
					return;
				}
			}
		};
	}
	return FXBase;
});
/**
* A single options set for an FX type.  FX types can handle multiple options.
* @constructor
* @name J2.FXOptions
* @param {Number or J2.Core.CSSColor} endValue The end value of this effect options.  This defines the value which represents the final state of the effect.  Will be used to calculate range.
* @param {Object} options The options that define this FXOptions object
* @config {String} [property] The property name for this FXOption.  The property name can be used by the FX type to define how the effect works.  Default to the empty string
* @config {Number} [timeToComplete] The time taken to complete the effect in milliseconds.  Defaults to 500
* @config {String or J2.FX.Transitions} [transition] The transition type as a transition object or its string representation.  This is used when calculating the value to be applied to this property by the FX type as the animation is in progress.  Default to linear.
*/
J2.FXOptions = function(endValue, options) {
	if (typeof options !== "object") options = {};
	var timeToComplete = isNaN(parseFloat(options.timeToComplete)) ? 500 : options.timeToComplete;
	var property = options.property || "";
	var startValue;
	var range;
	var direction = 1;
	var transition = getTransitionType();
	/**
	* Get the time to complete the effect represented by this FXOptions
	* @function
	* @name getTimeToComplete
	* @memberOf J2.FXOptions
	* @return {Number} The time to complete in milliseconds
	*/
	this.getTimeToComplete = function() {
		return timeToComplete;
	}
	/**
	* Get the name of the property represnting this FXOptions
	* @function
	* @name getProperty
	* @memberOf J2.FXOptions
	* @return {String} The property name
	*/
	this.getProperty = function() {
		return property;
	}
	/**
	* Get the end value
	* @function
	* @name getEndValue
	* @memberOf J2.FXOptions
	* @return {Number} The end value for this effect
	*/
	this.getEndValue = function() {
		return endValue;
	};
	/**
	* Set a new end value for this effect representation
	* @function
	* @name setEndValue
	* @memberOf J2.FXOptions
	* @param {Number} val The end value
	*/
	this.setEndValue = function(val) {
		endValue = val;
		setDirection();
		setRange();
	};
	/**
	* Set a start value for this effect representation - this is normally calculated when the J2.FX object containing this FXOptions initialises.
	* @function
	* @name setStartValue
	* @memberOf J2.FXOptions
	* @param {Number} val The start value
	*/
	this.setStartValue = function(val) {
		startValue = val;
		setDirection();
		setRange();
	};
	/**
	* Get the new value for the property within this effect representation based on the completed portion of the effect
	* @function
	* @name getNewValue
	* @memberOf J2.FXOptions
	* @param {Float} proportion The proportion of the effect completed ranging from 0 to 1
	* @return {Number} The proprtion value for this effect
	*/
	this.getNewValue = function(proportion) {
		return proportion === 1 ? endValue : (proportion === 0 ? startValue : transition(startValue, range, proportion, direction));
	};
	function getTransitionType() {
		var defaultTransition = J2.FX.Transitions.linear;
		if (typeof options.transition === "function") return options.transition;
		if (typeof options.transition === "string") {
			var transitionSplit = options.transition.split(".");
			switch (transitionSplit.length) {
				case 2:
					return J2.FX.Transitions[transitionSplit[0]][transitionSplit[1]] || defaultTransition;
				case 1:
					return J2.FX.Transitions[transitionSplit[0]] ? J2.FX.Transitions[transitionSplit[0]].easeIn : defaultTransition;
			}
		}
		return defaultTransition;
	}
	function setDirection() {
		direction = (startValue < endValue) ? -1 : 1;
	};
	function setRange() {
		range = Math.abs(startValue - endValue);
	};
};
/**
* Container for transition types.  All should be treated as static.
* @constructor
* @static
* @name J2.FX.Transitions
*/
J2.FX.Transitions = new (function() {
	/*
		s:	startValue
		r:	range
		p:	proportion
		d:	direction
	*/
	/**
	* Linear transition. 
	* @name linear
	* @memberOf J2.FX.Transitions
	* @type Function
	*/
	this.linear = function(s, r, p ,d) {
		return s-(r*p*d);
	};
	var transitionType = function(exp) {
		this.easeIn = function(s, r, p ,d) {
			return s-(r*exp(p)*d);
		};
		this.easeOut = function(s, r, p ,d) {
			return s-(r* (1 - exp(1-p)) *d);
		};
		this.easeInOut = function(s, r, p, d) {		
			return p <= 0.5 ? s - ((exp(2*p)/2)*r*d) : s - (((2 - exp(2 * (1-p))) / 2)*r*d);
		};
	}
	/**
	* Quadratic easeIn transition type
	* @name Quad.easeIn
	* @memberOf J2.FX.Transitions
	* @type Function
	*/
	/**
	* Quadratic easeOut transition type
	* @name Quad.easeOut
	* @memberOf J2.FX.Transitions
	* @type Function
	*/
	/**
	* Quadratic easeInOut transition type
	* @name Quad.easeInOut
	* @memberOf J2.FX.Transitions
	* @type Function
	*/
	
	/**
	* Cubic easeIn transition type
	* @name Cubic.easeIn
	* @memberOf J2.FX.Transitions
	* @type Function
	*/
	/**
	* Cubic easeOut transition type
	* @name Cubic.easeOut
	* @memberOf J2.FX.Transitions
	* @type Function
	*/
	/**
	* Cubic easeInOut transition type
	* @name Cubic.easeInOut
	* @memberOf J2.FX.Transitions
	* @type Function
	*/
	
	/**
	* Quartic easeIn transition type
	* @name Quart.easeIn
	* @memberOf J2.FX.Transitions
	* @type Function
	*/
	/**
	* Quartic easeOut transition type
	* @name Quart.easeOut
	* @memberOf J2.FX.Transitions
	* @type Function
	*/
	/**
	* Quartic easeInOut transition type
	* @name Quart.easeInOut
	* @memberOf J2.FX.Transitions
	* @type Function
	*/
	
	/**
	* Quintic easeIn transition type
	* @name Quint.easeIn
	* @memberOf J2.FX.Transitions
	* @type Function
	*/
	/**
	* Quintic easeOut transition type
	* @name Quint.easeOut
	* @memberOf J2.FX.Transitions
	* @type Function
	*/
	/**
	* Quintic easeInOut transition type
	* @name Quint.easeInOut
	* @memberOf J2.FX.Transitions
	* @type Function
	*/
	
	/**
	* Back easeIn transition type - will force the effect to step backwards at the start of its run
	* @name Back.easeIn
	* @memberOf J2.FX.Transitions
	* @type Function
	*/
	/**
	* Back easeOut transition type  - will force the effect to step backwards at the end of its run
	* @name Back.easeOut
	* @memberOf J2.FX.Transitions
	* @type Function
	*/
	/**
	* Back easeInOut transition type - will force the effect to step backwards at the start and end of its run
	* @name Back.easeInOut
	* @memberOf J2.FX.Transitions
	* @type Function
	*/
	
	/**
	* Exponential easeIn transition type
	* @name Exp.easeIn
	* @memberOf J2.FX.Transitions
	* @type Function
	*/
	/**
	* Exponential easeOut transition type
	* @name Exp.easeOut
	* @memberOf J2.FX.Transitions
	* @type Function
	*/
	/**
	* Exponential easeInOut transition type
	* @name Exp.easeInOut
	* @memberOf J2.FX.Transitions
	* @type Function
	*/
	
	/**
	* Bounce easeIn transition type - will force the effect to bounce in and out at the start of its run
	* @name Bounce.easeIn
	* @memberOf J2.FX.Transitions
	* @type Function
	*/
	/**
	* Bounce easeOut transition type - will force the effect to bounce in and out at the end of its run
	* @name Bounce.easeOut
	* @memberOf J2.FX.Transitions
	* @type Function
	*/
	/**
	* Bounce easeInOut transition type - will force the effect to bounce in and out at the start and end of its run
	* @name Bounce.easeInOut
	* @memberOf J2.FX.Transitions
	* @type Function
	*/
	this.Quad	= new transitionType(function(p) {return Math.pow(p, 2);});
	this.Cubic	= new transitionType(function(p) {return Math.pow(p, 3);});
	this.Quart	= new transitionType(function(p) {return Math.pow(p, 4);});
	this.Quint	= new transitionType(function(p) {return Math.pow(p, 5);});
	this.Back	= new transitionType(function(p) {return Math.pow(p, 2) * (3 * p - 2);});
	this.Exp	= new transitionType(function(p) {return Math.pow(2, 8*(p-1));});
	this.Bounce = new transitionType(
		function (p) {
			var a = 0, b = 1;
			while (p < (7 - 4 * a) / 11) {
				a += b;
				b /= 2;
			}
			return - Math.pow((11 - 6 * a - 11 * p) / 4, 2) + b * b;
		}
	);
});