$.namespace("SF");
SF.SizeSelector = new (function(){
	var fieldset = null,
		radios = null,
		cssFemale = "femalesizes",
		cssMale = "malesizes";
	
	this.init = init;
	function init() {
		fieldset = document.getElementById("sizeSelector");
		if(!fieldset) return;
		radios = $(fieldset).find("input[name='gender']");
		
		// bind events
		for(var i = radios.length; i>=0; i--) {
			$(radios[i]).bind("click", radiosChanged);
		};
		
		radiosChanged();
	};
	
	function radiosChanged() {
		var checkedRadio = getCheckedRadio();
		if(checkedRadio) {
			showFields(checkedRadio);
		};
	};
	
	function getCheckedRadio() {
		var radio = null;
		for(var i = radios.length-1; i>=0; i--) {
			if(radios[i].checked) {
				radio = radios[i];
				break;
			}
		};
		return radio;
	};
	
	function showFields(radio) {
		var radioId = radio.id;
		if(radioId === "genderfemale") {
			$(fieldset).addClass(cssFemale);
			$(fieldset).removeClass(cssMale);
		}
		else if(radioId === "gendermale") {
			$(fieldset).addClass(cssMale);
			$(fieldset).removeClass(cssFemale);
		}
		else {
			$(fieldset).removeClass(cssMale);
			$(fieldset).removeClass(cssFemale);
		}
	};

});