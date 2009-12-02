var touchScreen = {};
touchScreen.inputHandler = {
	initalFieldID: "FirstName",
	init: function() {
		var initialField = document.getElementById(touchScreen.inputHandler.initalFieldID);
		if(initialField == null) {
			return;
		}
		initialField.focus();
	},
	changeFieldValue: function(field) {
		var focusedElement = document.getElementById(touchScreen.inputHandler.getFocusedFieldID()) || document.getElementById(touchScreen.inputHandler.initalFieldID);
		if (focusedElement == null) {
			return;
		}
		var keyValue = field.value;
		switch(keyValue) {
			case "backspace":
				focusedElement.value = focusedElement.value.slice(0,-1);
				break;
			case "space":
				focusedElement.value+=" ";
				break;
			default: 
				focusedElement.value+=keyValue;
				break;
		}
	},		
	setFocusedField: function(field) {
		var hiddenField = document.getElementById("focusedField");
		if (hiddenField != null) {
			hiddenField.value = field.id;
		}
	},
	getFocusedFieldID: function() {
		var id = "";
		var hiddenField = document.getElementById("focusedField")
		if (hiddenField != null) {
			id = hiddenField.value;
		}	
		return id;
	}
}

touchScreen.navigator = {
	tabbableFields : [],
	init: function() {
		touchScreen.navigator.addTabbableFields();
	},
	getTabbableFields: function() {
		fields = [];
		for(var i=0;i<document.forms.length;i++) {
			var form = document.forms[i];
			for(var j=0;j<form.elements.length;j++) {
				if(form.elements[j].className.indexOf("tabbable") != -1) {
					fields.push(form.elements[j]);
				}
			}
		}
		return fields;
	},
	addTabbableFields: function() {
		var fields = touchScreen.navigator.getTabbableFields();
		for(var i=0;i<fields.length;i++) {
			touchScreen.navigator.tabbableFields.push(fields[i]);
		}
	},
	getCurrentTabbableFocusedField: function() {
		var field = document.getElementById(touchScreen.inputHandler.getFocusedFieldID()) || document.getElementById(touchScreen.inputHandler.initalFieldID);
		return field;
	},
	getPreviousTabbableField: function() {
		var field = null;
		var currentField = touchScreen.navigator.getCurrentTabbableFocusedField();
		for(var i=0;i<touchScreen.navigator.tabbableFields.length;i++) {
			if(touchScreen.navigator.tabbableFields[i]==currentField) {
				if(i == 0) {
					field = touchScreen.navigator.tabbableFields[touchScreen.navigator.tabbableFields.length-1];
				}
				else {
					field = touchScreen.navigator.tabbableFields[(i-1)];
				}
				break;
			}
		}
		return field;
	},
	getNextTabbableField: function() {
		var field = null;
		var currentField = touchScreen.navigator.getCurrentTabbableFocusedField();
		for(var i=0;i<touchScreen.navigator.tabbableFields.length;i++) {
			if(touchScreen.navigator.tabbableFields[i]==currentField) {
				// last
				if(i == touchScreen.navigator.tabbableFields.length-1) {
					field = touchScreen.navigator.tabbableFields[0];
				}
				else {
					field = touchScreen.navigator.tabbableFields[(i+1)];
				}
				break;
			}
		}
		return field;
	},	
	tabForward: function() {
		var nextField = touchScreen.navigator.getNextTabbableField();
		if (nextField == null) {
			return;
		}
		nextField.focus();
	},
	tabBackward: function() {
		var previousField = touchScreen.navigator.getPreviousTabbableField();
		if (previousField == null) {
			return;
		}
		previousField.focus();
	}
}

touchScreen.navigator.scroll = {
	scrollPointsCollection: [],
	currentScrollPoint: 1,
	scrollClipContainter: null,
	init: function() {
		var scrollClipContainter = document.getElementById("scrollArea");
		if(scrollClipContainter == null) {
			return;
		}
		touchScreen.navigator.scroll.scrollClipContainter = scrollClipContainter;
		
		touchScreen.navigator.scroll.setScrollPoints();
		touchScreen.navigator.scroll.prepareButtons();
	},
	setScrollPoints: function() {
		var scrollArea = document.getElementById("scrollArea");
		var scrollanchors = scrollArea.getElementsByTagName("a");
		for(var i=0; i < scrollanchors.length; i++) {
			if(scrollanchors[i].className.indexOf("scrollpoint")!= -1) {
				touchScreen.navigator.scroll.scrollPointsCollection.push(scrollanchors[i]);
			}
		}
	},
	prepareButtons: function() {
		var scrollUp = document.getElementById("scrollUp");
		var scrollDown = document.getElementById("scrollDown");
		if(scrollUp == null || scrollDown == null) {
			return;
		}
		scrollUp.onclick = touchScreen.navigator.scroll.scrollUp;
		scrollDown.onclick = touchScreen.navigator.scroll.scrollDown;
	},
	scrollUp: function() {
		if(touchScreen.navigator.scroll.currentScrollPoint == 1) {
			return;
		}
		touchScreen.navigator.scroll.scrollPointsCollection[touchScreen.navigator.scroll.currentScrollPoint-1-1].focus();
		touchScreen.navigator.scroll.currentScrollPoint = touchScreen.navigator.scroll.currentScrollPoint - 1;
	},
	scrollDown: function() {
		if(!(touchScreen.navigator.scroll.currentScrollPoint < touchScreen.navigator.scroll.scrollPointsCollection.length)) {
			return;
		}
		touchScreen.navigator.scroll.scrollPointsCollection[touchScreen.navigator.scroll.currentScrollPoint+1-1].focus();
		touchScreen.navigator.scroll.currentScrollPoint = touchScreen.navigator.scroll.currentScrollPoint+1;
	},
	scrollDownReal: function() {
		var clipContainer = touchScreen.navigator.scroll.scrollClipContainter;
		//clip.scrollTop = clip.scrollTop+50;
		
		var clip = document.getElementById("clip");
		//alert(clip);
		value = 100;
		clip.style.top = value + "px";
		
	},
	scrollUpReal: function() {
		var clip = touchScreen.navigator.scroll.scrollClipContainter;
		//clip.scrollTop = clip.scrollTop-50;
	}
}

window.onload = function() {
	touchScreen.inputHandler.init();
	touchScreen.navigator.init();
	touchScreen.navigator.scroll.init();
}