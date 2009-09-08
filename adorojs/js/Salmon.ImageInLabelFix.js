$.namespace("Salmon");
/*
 * Label with images fix for Internet Explorer 6 and 7
 * @constructor
 * @static
 * @name Salmon.ImageInLabelFix
 */
Salmon.ImageInLabelFix = new (function(){
	$(window).bind("load", init);
	$.subscribe(Salmon.UI.CustomEvents.quickLookDataReceived, init);
	
	
	var imageLabels = [];
	
	function init() {
		var labels = document.getElementsByTagName("label"),
		length = labels.length-1,
		label = null,
		childNode, 
		imageLabel;
		for(var i = length; i>=0; i--) {
			label = labels[i];
			if(!label.hasChildNodes) continue;
			for(var j = label.childNodes.length-1; j>=0;j--) {
				childNode = label.childNodes[j];
				if(!childNode.tagName) continue;
				if(childNode.tagName.toUpperCase() !== "IMG") continue;
				if(imageLabelExists(childNode)) continue;
				imageLabel = new ImageLabel(childNode, label);
				imageLabels.push(imageLabel);
			};			
		};
	};
	
	function ImageLabel(imageNode, labelNode) {
		this.imageNode = imageNode;

		var field = document.getElementById(labelNode.htmlFor);
		if(!field) return null;
		
		$(imageNode).bind("click", imageClick)
		
		function imageClick() {
			switch(field.tagName.toUpperCase()) {
				case "INPUT":
					switch(field.type.toUpperCase()) {
						case "RADIO":
							field.checked = true;
							break;
						case "CHECKBOX":
							if(field.checked) {
								field.checked = false;
							}
							else {
								field.checked = true;
							}
							break;
						case "TEXT":
						case "PASSWORD":
							field.focus();
							break;
						
					};
					break;
				case "SELECT":
					field.focus();
					break;
				case "TEXTAREA":
					field.focus();
					break;
			};
		
		};
	};
	

	function imageLabelExists(imageNode) {
		var found = false;
		for(var i = imageLabels.length-1; i>=0; i--) {
			if(imageLabels[i].imageNode === imageNode) {
				found = true;
				break;
			}
		};
		return found;
	};
	
});