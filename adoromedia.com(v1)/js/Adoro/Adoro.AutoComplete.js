var Adoro = Adoro || {};
Adoro.AutoComplete = function(field, data, options) {
	var data = data;
	var field = field;
	var options = options || {};
	var objectMember = options.objectMember || null;
	var workWithObjects = typeof objectMember === "string";
	var rootDisplayNode = document.createElement("ul");
	rootDisplayNode.className = "autoCompleteList";
	
	this.activate = function() {
		$(field).bind( "keyup", field_KeyUp );
		$(field).bind( "keypress", field_KeyPress );
	};
	
	// field events
	function field_KeyUp() {}
	function field_KeyPress() {}
	
	// list item events
	function node_Mouseover() {}
	function node_Mouseout() {}
	function node_Mouseclick() {}
	
	
	
	
};

$(document).ready(function(){
	var f = document.getElementById("autoCompleteField");
	var d = ["hello", "there", "cowboy"];
	var ac = new Adoro.AutoComplete(f,d);
	ac.activate();
});