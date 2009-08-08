/****************************************************************************/
/***		Client-side JavaScript function library														***/
/***		Copyright Apache Solutions Ltd 2005																***/
/***		(unauthorised use of this code will result in prosecution by law)	***/
/****************************************************************************/



//
//	Returns true if the given variable is blank:
//
function IsBlank(value) {
	// cast to string.
	var str = "" + value;
	return ((str == "") || (str == " ") || (str == "undefined") || (str == "null") || (str == null));
}


//
//	Normalises the text in the field (i.e. makes first char of every word uppercase):
//
//	N.B	Case of characters other than 1st letter are unaffected, e.g. MA (for state) remains as is.
//	Also removes leading spaces.
//
function Normalise(field) {
	var retval = '';
	var set_upper = false;
	var first_char = false;
	for (i=0; i < field.value.length; i++) {
		var c = field.value.charAt(i);
		if (c == ' ') {
			if (first_char == false) {
				continue;
			}
			set_upper = false;
		}
		if (set_upper == false && c != ' ') {
			c = c.toUpperCase();
			set_upper = true;
			first_char = true;
		}
		retval += c;
	}
	return retval;
}

//
//	Checks whether the user has entered data in the given field, displaying the given message,
//	focusing the field and returning false if not:
//
function CheckMandatory(field, msg) {
	if (IsBlank(field.value)) {
		alert(msg);
		field.focus();
		return false;
	}
	return true;
}	

//
//	The CheckEmail function has been moved to the head.inc file as it is used in the footer.
//
//
//	Checks whether the user has entered a valid email address in the given field, displaying an appropriate message,
//	focusing the field and returning false if not:
//
//	N.B Use with 'CheckMandatory' fn above if the field is also mandatory.
//
function CheckEmail(field) {
	if (!IsBlank(field.value)) {
		// ensure that only valid characters have been used.
		var ok = "1234567890qwertyuiopasdfghjklzxcvbnm.@-_QWERTYUIOPASDFGHJKLZXCVBNM";
		for (i=0; i < field.value.length; i++) {
			if (ok.indexOf(field.value.charAt(i)) < 0) {
				alert("The email address you have entered contains an invalid character.\nIt should look something like 'name@company.com'");
				field.focus();
				return false;
			}
		}
		// on IE4+, perform additional format validation.
		if (document.images) {
	  	re = /(@.*@)|(\.\.)|(^\.)|(^@)|(@$)|(\.$)|(@\.)/;
	  	re_two = /^.+\@(\[?)[a-zA-Z0-9\-\.]+\.([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
			if (!(!field.value.match(re) && !(!field.value.match(re_two)))) {
				alert("The email address you have entered is invalid.\nIt should look something like 'name@company.com'");
				field.focus();
				return false;
			}
	 	}
		// otherwise, just make sure the at sign isn't at the start or end.
		else {
			var atPos = field.value.indexOf('@');
			if (atPos < 1 || atPos == (field.value.length - 1)) {
				alert("The email address you have entered is invalid.\nIt should look something like 'name@company.com");
				field.focus();
				return false;
			}
		}
	}
	return true;	
}

//
//	Checks whether the user has selected an option from the list, focusing the field
//	and returning false if not:
//
function CheckMandatoryList(field, msg) {
	if (field.options[field.selectedIndex].value == 0) {
		alert(msg);
		field.focus();
		return false;
	}
	return true;
}	

//
//	Checks whether the user has checked a checkbox, focusing the field
//	and returning false if not:
//
function CheckMandatoryCheckBox(field, msg) {
	if (field.checked == false) {
		alert(msg);
		field.focus();
		return false;
	}
	return true;
}	

//
//	Checks whether the user has selected a radio button in the given radio group, displaying the given message,
//	focusing the first radio button in the group and returning false if not:
//
function CheckMandatoryRadios(field, msg) {
	for (var n=0; n < field.length; n++) {
		if (field[n].checked) {
			return true;
		}
	}
	alert(msg);
	field[0].focus();
	return false;
}

//
//	Checks whether the user has entered data in the given fields, and if so checks that the same data
//	has been entered in both, and the data is of the a minimum length, displaying the appropriate message,
//	focusing the appropriate field and returning false if not:
//
//	N.B Minimum length set at five characters.
//
function CheckPasswords(field1, field2) {
	if (field1.value != field2.value) {
		alert("Please check that you typed the same password into the second box.");
		field2.focus();
		return false;
	}
	else if (!IsBlank(field1.value) && (field1.value.length < 5 || field2.value.length < 5)) {
		alert("Please ensure your password is at least five characters long.");
		field1.focus();
		return false;
	}
	return true;
}	

//
//	Checks whether the user has entered an acceptable telephone or fax number,
//	focusing the field and returning false if not:
//
//	N.B Acceptable characters set as "0-9" and spaces.
//			Use with 'CheckMandatory' fn if the field is also mandatory.
//
function CheckTel(field) {
	for (i=0; i < field.value.length; i++) {
		var c = field.value.charAt(i);
		if ((c < '0' || c > '9') && c != ' ') {
			alert("Please limit your entry to the following characters: '0-9'");
			field.focus();
			return false;
		}
		if (field.value.length < 7) {
			alert("Please check you have entered all the correct digits (including your area code).");
			field.focus();
			return false;
		}
	}
	return true;
}

//
//	Checks textarea for strings of over passed value len characters to prevent SQL database errors:
//
function CheckTextAreaLength(field, type, thelen) {
	if (field.value.length > thelen) {
		var characters = (thelen > 1 ? ' characters':' character');
		alert("Please restrict the " + type + " to a maximum of " + thelen + characters + " - it is currently " + field.value.length + " characters long.");
		field.focus();
		return false;
	}
	return true;
}

//
//	Checks whether the user has entered acceptable characters, displaying the given message,
//	focusing the field and returning false if not:
//
//	N.B Acceptable characters set as "a-z A-Z 0-9 -" and optionally spaces too.
//			Use with 'CheckMandatory' fn if the field is also mandatory.
//
function CheckCharacters(field, msg, accept_spaces) {
	for (i=0; i < field.value.length; i++) {
		var c = field.value.charAt(i);
		if ((c < 'a' || c > 'z') && (c < 'A' || c > 'Z') && (c < '0' || c > '9') && (c != '-') && ((accept_spaces && c != ' ') || !accept_spaces)) {
			alert(msg);
			field.focus();
			return false;
		}
	}
	return true;
}

//
//	Checks whether the user has entered acceptable numeric characters, displaying the message,
//	focusing the field and returning false if not:
//
//	N.B Acceptable characters set as "1-9" and optionally "0" and "." and "-" too.
//
function CheckNumbers(field, accept_zeros, accept_fractions, accept_minus) {
	for (i=0; i < field.value.length; i++) {
		var c = field.value.charAt(i);
		if (((accept_minus && c != '-') || !accept_minus) && (c < '1' || c > '9') && ((accept_zeros && c != '0') || !accept_zeros) && ((accept_fractions && c != '.') || !accept_fractions)) {
			alert("Please limit your entry to the following characters: '0-9'");
			field.focus();
			return false;
		}
	}
	return true;
}

//
//	Checks a currency value, ensuring it is between 0 and 214,748.3647
//	(the maximum that an SQL Server currency field can handle), returning
//	false if not:
//
//	N.B Use with 'CheckMandatory' fn if the field is also mandatory.
//
function CheckCurrency(field) {
	if (!IsBlank(field.value)) {
		var value = parseFloat(field.value);
		// n.b last check required as 'isNAN' returns false for numbers plus characters (eg; '123abc').
		if (isNaN(value) || value < 0 || value > 214748.3647 || value != field.value) {
			alert("Please enter only numbers and limit your numbers between (0 - 99999).");
			field.focus();
			return false;
		}
	}
	return true;
}

//
//	Checks whether the user has entered zero:
//
function CheckZero(field) {
	var c = field.value;
	if ((c == '0')) {
		alert("The level must be higher than zero.");
		field.focus();
		return false;
	}
	return true;
}

//
//	Checks to see if the year is a leap year, returning true if it is.
//
function IsLeapYear(theyear) {
	if (theyear % 4 == 0) {
		if (theyear % 100 == 0) {
			if (theyear % 400 == 0) {
	    	LeapYear = true;
			}
			else {
	    	LeapYear = false;
			}
		}
		else {
			LeapYear = true;
		}
	}
	else {
		LeapYear = false;
	}
	return LeapYear;
}

// If not mandatory if true then dont perform the check if all elements of the date are 0.
//
function CheckDate(year, month, day, field, not_mandatory) {
	// create a date object and check whether it sets the same date.
	var perform_check = true;
	if (not_mandatory == true) {
		if (year == "0" && month == "-1" && day == "0") perform_check = false;
	}
	
	if (perform_check == true) {
		var date = new Date(year, month, day);
		if (year != date.getFullYear() || month != date.getMonth() || day != date.getDate()) {
			alert("The date you have specified is invalid - please check it and try again.");
			field.focus();
			return false;
		}
	}
	return true;		
}


//-->