var Mock = (function() {
	
	function addToSetUp(f) {
		var oldSetUp = typeof setUp === "function" ? setUp : Mock.Function.empty;
		setUp = function() {
			f();
			oldSetUp();
		}
	}
	
	function createArrayFromArgumentsList(args) {
		var list = [];
		for (var i = 0; i < args.length; i++) {
			list.push(args[i]);
		}
		return list;
	}
		
	var functions = {
		empty: function() {},
		returnTrue: function() {return true;},
		returnFalse: function() {return false;}
	}
	
	return {
		Function: {
			empty: function() {
				return functions.empty;
			},
			returnTrue: function() {
				return functions.returnTrue;
			},
			returnFalse: function() {
				return functions.returnFalse;
			},
			returnValue: function(value) {
				return (function(val) {
					return function() {
						return val;
					}
				})(value);
			},
			getAsDisconnected: function(f) {
				eval("var x = " + f.toString());
				return x;
			},
			checkCalled: function() {
				return (function(args) {
					var func = function() {
						if (args && args[0] && args[0] === Mock.Function.emptyArgsList) {
							assertTrue("Checking for empty arguments list: ", arguments.length === 0);
						} else if (args && args.length && args.length > 0) {
							assertArrayEquals("Checking arguments list: ", args, createArrayFromArgumentsList(arguments));
						}
						func.wasCalled = true;
					}
					func.wasCalled = false;
					func.reset = function() {
						func.wasCalled = false;
					}
					addToSetUp(func.reset);
					return func;
				})(createArrayFromArgumentsList(arguments));
			},
			emptyArgsList: "<empty arguments list>"
		},
		Test: {
			createParameterisedTest: function(name, values, baseFunction) {
				for (var i = 0; i < values.length; i++) {
					window[name + i] = (function(val) {
						return function() {
							baseFunction(val);
						};
					})(values[i]);
				}
			}
		}
	}
	
})();