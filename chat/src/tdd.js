var tddjs = (function() {
	
	function namespace(str) {
		var object = this;
		var levels = str.split(".");
		
		for(var i = 0, l = levels.length; i < l; i++) {
			if(typeof object[levels[i]] == "undefined") {
				object[levels[i]] = {};				
			}
			object = object[levels[i]];
		}
		
		return object;		
	}
	
	return {
		namespace: namespace
	}
	
}());

(function(){
	var id = 0;
	
	function uid(obj) {		
		if(typeof obj.__uid != "number") {		
			obj.__uid = id++;
		}
		return obj.__uid;
	}
	
	if(typeof tddjs === "object") {
		tddjs.uid = uid;
	}
	
}());

tddjs.isOwnProperty = (function(){
	var hasOwn = Object.prototype.hasOwnProperty;
	if(typeof hasOwn == "function") {
		return function(object, property) {
			return hasOwn.call(object, property);
		};
	}
	else {
		// don't do this pg 86
	}
}());

tddjs.each = (function(){
	
	function unEnumerated(object, properties) {
		var length = properties.length;
		
		for(var i = 0; i < length; i++) {
			object[properties[i]] = true;
		}
		
		var enumerated = length;
		
		
		
		for(var prop in object) {
			if(tddjs.isOwnProperty(object, prop)) {
				enumerated -= 1;
				object[prop] = false;
			}
		}
		
		if(!enumerated) {
			return;
		}
		
		var needsFix = [];
		
		for(i = 0; i < length; i++) {
			if(object[properties[i]]) {
				needsFix.push(properties[i]);
			}
		}
		
		return needsFix;
	}
	
	var oFixes = unEnumerated({}, 
		["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "constructor", "propertyIsEnumerable"]);
		
	var fFixes = unEnumerated(function() {}, ["call", "apply", "prototype"]);
	
	if(oFixes && fFixes) {
		fFixes = oFixes.concat(fFixes);
	}
	
	var needsFix = {"object": oFixes, "function": fFixes };
	
	return function(object, callback) {
		if(typeof callback != "function") {
			throw new TypeError("callback is not a function");
		}
		
		for(var prop in object) {
			if(tddjs.isOwnProperty(object, prop)) {
				callback(prop, object[prop]);
			}
		}
		
		var fixes = needsFix[typeof object];
		
		if(fixes) {
			var property;
			
			for(var i = 0, l = fixes.length; i < l; i++) {
				property = fixes[i];
				if(tddjs.isOwnProperty(object, prop)) {
					callback(property, object[property]);
				}
			}
		}
		
	}
	
}());

if(!Object.create) {
	(function(){
		function F() {}
		Object.create = function(object) {
			F.prototype = object;
			return new F();
		}
	}());
}

