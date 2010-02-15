$.namespace("SF");
SF.QuantityChanger = function(field, options) {
	var options = options || {};
	var increaseButton = options.increaseButton || null;
	var decreaseButton = options.decreaseButton || null;
	var onIncrement = options.onIncrement || null;
	var onDecrement = options.onDecrement || null;
	var isFloat = options.isFloat || false;
	var range = options.range || {lowerLimit: 0, upperLimit: null};
	if(range.upperLimit === null){
		range.upperLimit = 999;
	};
	
	$(increaseButton).bind("click",incrementClick);
	$(decreaseButton).bind("click",decrementClick);
	
	function decrementClick() {
		if(typeof range.lowerLimit === "number" && field.value <= range.lowerLimit ) return false;
		if(typeof onDecrement === "function") {
			onDecrement();
		};	

		var value = getValue();
		value--;
		if(value < range.lowerLimit){
			value = range.lowerLimit;
		}
		field.value = formattedValue(value);
		return false;
	};
	
	function incrementClick() {
		if(typeof range.upperLimit === "number" && field.value >= range.upperLimit) return false;
		if(typeof onIncrement === "function") {
			onIncrement();
		};
		var value = getValue();
		value++;
		if(value > range.upperLimit){
			value = range.upperLimit;
		}
		field.value = formattedValue(value);	
		return false;
	};
	
	function getValue() {
		var value = getUnformattedValue(field.value);
		value = (isFloat) ? parseFloat(value) : parseInt(value);
		if(isNaN(value)) value = 0;
		return value;
	};
		
	function formattedValue(num){
		if(String(num).indexOf(".") == -1){
			num = num + ".00";
		}
		var parts = String(num).replace(/[^\.0-9]/g,'').split('.');
		if(String(parts[1]).length == 1){
			parts[1] = parts[1]+"0";
		} else if(String(parts[1]).length > 2) {
			var temp = "0."+parts[1];
			parts[1] = Math.round((temp * 100));
		}
		var dec = (String(parts[1]).length == 1) ? ".0" + parts[1] : "." + parts[1];
		if(isFloat){
			num = formatNumber(parts[0]) + dec;
		} else {
			num = formatNumber(parts[0]);
		}
		return num;
	}
	function formatNumber(num) {
		num = String(num);
		if (num.length <= 3) {
			return num;
		} else {
			var last3nums = num.substring(num.length - 3, num.length);
			var remindingPart = num.substring(0, num.length - 3);
			return formatNumber(remindingPart) + ',' + last3nums;
		}
	}

	function getUnformattedValue(num){
		num = String(num).replace(/[^\.0-9]/g,'');
		return num;
	}
};