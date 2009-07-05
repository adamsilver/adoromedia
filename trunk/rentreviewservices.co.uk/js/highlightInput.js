function textareaFocus(input) {
	addToClassName(input,"onfocus");
	return false;
}

function textareaBlur(input) {
	delFromClassName(input,"onfocus");
	return false;
}

function inputFocus(input) {
	if (input.getAttribute("type")=="text") {
		addToClassName(input,"onfocus");
	}
	return false;
}

function inputBlur(input) {
	if (input.getAttribute("type")=="text") {
		delFromClassName(input,"onfocus");
	}
	return false;
}

function prepareForm() {
	if (!document.getElementsByTagName) return false;
	if (!document.getElementById) return false;
	if (!document.getElementById("contactform")) return false;
	var contactform = document.getElementById("contactform");
	var inputs = contactform.getElementsByTagName("input");
	for ( var i=0; i < inputs.length; i++) {
		inputs[i].onfocus = function() {
			inputFocus(this);
		}
		inputs[i].onblur = function() {
			inputBlur(this);
		}						
	}
	
	var textareas = contactform.getElementsByTagName("textarea");
	for ( var i=0; i < textareas.length; i++) {
		textareas[i].onfocus = function() {
			textareaFocus(this);
		}
		textareas[i].onblur = function() {
			textareaBlur(this);
		}						
	}
}

///////////////////////////////////////////
// GLOBAL FUNCTIONS ///////////////////////
///////////////////////////////////////////

function addLoadEvent(func) 
{
	var oldonload = window.onload;
	if (typeof window.onload != 'function') 
	{
		window.onload = func;
	} 
	else 
	{
		window.onload = function() 
		{
			oldonload();
			func();
		}
	}
}

function isInCssClass(obj, className) {
	if (!obj.className) return false;
	return (obj.className.indexOf(className) >=0);
}

function addToClassName(obj, className) {
	if (obj.className == null) return;
	if (obj.className.indexOf(className) >= 0) return;
	obj.className += " " + className;
}

function delFromClassName(obj, className) {
	while (obj.className.indexOf(className) >= 0) {
		obj.className = obj.className.replace(" " + className ,"");
		obj.className = obj.className.replace(className ,"");
	} 
}

addLoadEvent(prepareForm);