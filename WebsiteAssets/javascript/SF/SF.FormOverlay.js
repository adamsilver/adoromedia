
SF.ShowFormOverlay = function(options){
	// Set option defaults
	var formUrl = options.url || "";
	var loadMethod = options.loadMethod || "GET";
	var submitMethod = options.submitMethod || "GET";
	var submitReturnDataType = options.submitReturnDataType || "html";
	var closeWhenDone = options.closeWhenDone || false;
	var buttonClicked = null;

	// Will try to get this as a parameter at some point
	var overlayContainer = document.getElementById("dialogue");

	// Must have a URL for the form
	if (!formUrl) return;

	// Load the form
	var formLoader = $.ajax({
		url: formUrl,
		cache: "false",
		contentType: "appliction/ajax",
		dataType: "html",
		type: loadMethod,
		success: function(data){
			Adoro.Dialogue.setHTML(data);
			Adoro.Dialogue.showDialogue({
				animateOverlay: true,
				showOverlay: true,
				overlayOpacity: ".4",
				closeOnOverlayClick: false
			});
			setFormEvents();
			onFormLoadActions();
		}
	});

	// Handles submitting the form
	function submitForm(form){
		var elementToAppendTo = buttonClicked ? buttonClicked.parentNode : form.get(0);
		var formSubmitLoader = new Salmon.UI.LoadingHtml(elementToAppendTo);
		formSubmitLoader.show();

		submitAction = form.attr("action");
		data = form.serialize();
		if (buttonClicked)
			data += "&" + $(buttonClicked).attr("name") + "=" + $(buttonClicked).val();
		var formLoader = $.ajax({
			url: submitAction,
			cache: "false",
			contentType: "application/x-www-form-urlencoded",
			data: data,
			dataType: submitReturnDataType,
			type: submitMethod,
			success: function(data){
				if (data.success && options.callback) {
					options.callback.call(data);
				}

				switch (submitReturnDataType){
					case "json":
					    Adoro.Dialogue.setHTML(data.pageHtml);
						break;
					case "html":
					    Adoro.Dialogue.setHTML(data);
						break;
				}

			    // ToDo: NEXT STEP - HANDLE ERRORS
				setFormEvents();
				onFormLoadActions();
			},
			error: function(a,b,c){
				alert(b + " " + c);
			}
		});

		// reset buttonClicked
		buttonClicked = null;
	};

	// Sets events for the form in the dialogue
	function setFormEvents(){
		// Grabs the last submit or image button clicked. This is so
		// we can add the button info into the data being posted to
		// the server.
		buttonClicked = null;
		$("#dialogue form input[type='submit'], #dialogue form input[type='image']").bind("click",function(){
			buttonClicked = this;
		});

		// Submitting the form
		$("#dialogue form").bind("submit",function(){
			submitForm($(this));
			return false;
		});

		$("#dialogue a.closeDialogue").bind("click",function(){
		    Adoro.Dialogue.setHTML("");
		});

		// Image button rollovers
		if (SF.ImageRollovers)
			SF.ImageRollovers.add("dialogue");

		// Closing the form on success, only if option set
		if (options.closeWhenDone){
			$("#dialogue a.successClose").bind("click",function(){
			    Adoro.Dialogue.hideDialogue();
			    Adoro.Dialogue.setHTML("");
				return false;
			});
		}
	};

	function onFormLoadActions(){
		
		var sfcmScript = $("#dialogue .sfcmScript").html();
		
		if ( sfcmScript ) 
			eval( sfcmScript );
		
		if (options.onFormLoad) {
			options.onFormLoad.call(overlayContainer);
		}
		
		
	}
};
