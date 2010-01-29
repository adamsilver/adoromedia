$.namespace("SF");
SF.Finder = new (function(){
	$(document).ready(init);
	var attributes = [],
		url = null,
		form = null,
		customEvent = Salmon.UI.CustomEvents.finderChanged;
	
	function init() {
		var finder = document.getElementById("finder");
		if(!finder) return;
		form = $(finder).find("form")[0] || null;
		if(!form) return;		
		url = $(finder).find("input[name='viewURL']").val() || null;
		if(!url) return;
		
		var selects = $(finder).find("select");
		var select = null;
		for(var i = selects.length-1; i>=0; i--) {
			select = new Attribute(selects[i]);
			attributes.push(select);
		};
		
		resetFinder(finder);
		form_onSubmit();
	};
	
	function Attribute(select) {
		var name = select.name;
		$(select).bind("change", selectChange);
		
		$.subscribe(customEvent, update);

		function selectChange() {
		
			var data = $(form).serialize();
			data += serializeSpecific(":disabled[name]");
			
			$.ajax({
				url: url, 
				data: data, 
				dataType: "json", 
				success: complete
			})
		};	
				
		function update(e) {
			var data = e.data[0][name] || null;
			if(!data)  {
				select.disabled = true;
				return;
			};
			
			select.disabled = false;
			var options = jQuery.makeArray($(select).find("option"));
			
			// remove all options apart from "please select"
			for(var i = 1; i<options.length; i++) {
				$(options[i]).remove();
			};
			
			// append all the new options from the data set from the server
			for(var i = 0; i<data.length; i++) {
				if(data.length === 1) {
					$(select).append('<option selected="selected" value="'+data[i].name+'">'+data[i].value+'</option>');
					break;
				}
				$(select).append('<option value="'+data[i].name+'">'+data[i].value+'</option>');
			};
		};
	};
	
	/*
		Used to create string of serialized data for form submission.
		Serializes form using only specific selectors.
	*/		
	function serializeSpecific(selector) {
	    var obj = "";
	    $(form).find(selector).each(function () { 
	        obj += "&";
	        obj += $(this).attr("name");
	        obj += "=";
	        obj += $(this).val(); 
	    });
	    return obj;
	};
	
	/*
		Clears the finder form and reloads fields with default values
	*/	
	function resetFinder(finder) {
		$(finder).find("a.reset").bind("click", function() {
			var obj = serializeSpecific("input[type='hidden']");
			$.ajax({
				url: url, 
				data: obj, 
				dataType: "json", 
				success: complete
			})
			return false;
		});
	};
		
	function complete(data) {
		$.publish(customEvent, data);
	};
	
	function form_onSubmit() {
		$(form).bind("submit", function() {
			$(form).find(":disabled[name]").each(function () {
				this.disabled = false;
			});
		});
	}
	
});