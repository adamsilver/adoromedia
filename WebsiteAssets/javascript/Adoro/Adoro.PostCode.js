function postcodeHasCIKMOV() {
		var valid = true;
		var field = this;
		if (field.length > 1) return valid;
		
		var fieldStringValue = field[0].value;

		if(hasCIKMOV(fieldStringValue.substring(fieldStringValue.length, fieldStringValue.length-2).toLowerCase(),"c","i","k","m","o","v")) {
			valid = false;
		}		
		return valid;		
	}
	
	function hasCIKMOV(refStr) {
		var seqError = false;
		for (var i=0; i<refStr.length; i++) 
		{
			if (arrayContainsElement(hasCIKMOV.arguments,hasCIKMOV.arguments[0].charAt(i))) seqError = true;
		}
		return seqError;
	}

	function postcodePartial() {
		var valid = true;
		var field = this;
		if (field.length > 1) return valid;

		if(!isValidPartialPostcode(field[0])) {
			valid = false;
		}		
		return valid;			
	}

	function isValidPartialPostcode(field) {
		var outwardPass = false;
		var postcodeStr = trimSpaces(""+field.value);
		//Check for partial postcode 
		//AN
		if((postcodeStr.length == 2 || postcodeStr.length == 5) && (isAlpha(postcodeStr.charAt(0)) && isNumeric(postcodeStr.charAt(1)))) outwardPass=true;
		//ANN & AAN & ANA
		if((postcodeStr.length == 3 || postcodeStr.length == 6) && (isAlpha(postcodeStr.charAt(0)) && isNumeric(postcodeStr.charAt(1)) && isNumeric(postcodeStr.charAt(2)) || isAlpha(postcodeStr.charAt(0)) && isAlpha(postcodeStr.charAt(1)) && isNumeric(postcodeStr.charAt(2)) || isAlpha(postcodeStr.charAt(0)) && isNumeric(postcodeStr.charAt(1)) && isAlpha(postcodeStr.charAt(2)))) outwardPass=true;
		//AANN & AANA
		if((postcodeStr.length == 4 || postcodeStr.length == 7) && (isAlpha(postcodeStr.charAt(0)) && isAlpha(postcodeStr.charAt(1)) && isNumeric(postcodeStr.charAt(2)) && isNumeric(postcodeStr.charAt(3)) || isAlpha(postcodeStr.charAt(0)) && isAlpha(postcodeStr.charAt(1)) && isNumeric(postcodeStr.charAt(2)) && isAlpha(postcodeStr.charAt(3)))) outwardPass=true;
		return outwardPass;
	}
	
	
	function postcodeFinal() {
		var valid = true;
		var field = this;
		if (field.length > 1) return valid;
		
		var postcodeStr = field[0].value;
		
		//Check for 1st char numeric and last three numeric,alpha,alpha
		if (!isAlpha(postcodeStr.charAt(0)) || !isAlpha(postcodeStr.charAt(postcodeStr.length-1)) || 
			!isAlpha(postcodeStr.charAt(postcodeStr.length-2)) || !isNumeric(postcodeStr.charAt(postcodeStr.length-3))) 
		{
			valid = false;
		}	
		return valid;		
	}