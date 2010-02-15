$.namespace("SF");

SF.ProductForm = function(form, productId, quickLookPanel){

	var customEvents = {
		addToFittingRoom: Salmon.UI.CustomEvents.productAddedToFittingRoom,
		addToShoppingBag: Salmon.UI.CustomEvents.productAddedToShoppingBag,
		stockAvailabilityChecked: Salmon.UI.CustomEvents.stockAvailabilityChanged+productId
	};

	$.subscribe(customEvents.stockAvailabilityChecked, checkStock);
	
	var inputs = {
		addToFittingRoom: $(form).find("input.addToFittingRoom")[0] || null,
		addToShoppingBag: $(form).find("input.addToShoppingBag")[0] || null
	};
	
	var submitFunction = addToBag;
	$(inputs.addToFittingRoom).bind("click", function(e){
		submitFunction = addToFittingRoom;
	});
	$(inputs.addToShoppingBag).bind("click", function(e){
		submitFunction = addToBag;
	});	
	
	var loadingIndicator = new Salmon.UI.LoadingHtml(form);
	
	var suffix = "_disabled",
		addToBagButtonSrc = {
			def: inputs.addToShoppingBag.src,
			dis: getDisabledSrcFromButtonSrc(inputs.addToShoppingBag.src)
		};
	
	var fields = $(form).find("div.attribute input, div.attribute select, div.quantity input");
	var formValidator = new Adoro.FormValidator(form,{
		onSuccess: function() {
			submitFunction();
			return false;
		},
		errorSummaryID: quickLookPanel ? "quickLookErrorSummary"+productId : null
	});
	
	var fieldName = null, method = null, params = {};
	for(var i = 0; i < fields.length; i++) {
		if(fieldName === fields[i].name) continue;
		fieldName = fields[i].name;
		
		switch(fields[i].tagName.toUpperCase()) {
			case "INPUT":
				switch(fields[i].type.toUpperCase()) {
					case "RADIO":
						method =  Adoro.FormRules.minChecked;
						params = {minChecked: 1};
						break;
					case "TEXT":
						method = Adoro.FormRules.notEmpty;
						params = {};
						break;
					case "SUBMIT":
						method = null;
						params = {};
						break;
					default:
						method = null;
						params = {};
						break;
				};
				break;
			default: 
				method = Adoro.FormRules.notEmpty;
				params = {};
		};
		
		
		if(method===null) continue;
		formValidator.addValidator(fields[i].name, [{
			method: method,
			params: params,
			message: "Please choose a " + fields[i].name.toLowerCase()
		}]);
	};
	
	//disableAddToBag();
	
	function addToBag() {
		var action = "/webapp/wcs/stores/servlet/BasketAdd";
    	var viewParams = "&URL=MiniShoppingBagView";
    	$(form).find("input[name='errorViewName']")[0].value = "GenericAjaxErrorJSONView";
    	var formData = $(form).serialize();
    	var buttonData = "&addToBagButton.x=1";
    	var data = formData + viewParams + buttonData;
		
		loadingIndicator.show();
		
		var ajax = $.ajax({
			url: action,
			contentType : "application/x-www-form-urlencoded",
			cache: false,
			dataType: "json",
			type: "post",
			success: function(response, textStatus){
				loadingIndicator.hide();
				if(Salmon.UI.ajaxResponseInvalid(response)) {
					return false;
				};				
				$.publish(Salmon.UI.CustomEvents.productAddedToShoppingBag, response);
				submitFunction = addToBag;
				if(quickLookPanel) {
					quickLookPanel.closeOverlay();
				};
				SF.ImageRollovers.add("miniShoppingBag");
			},
			data: data,
			error: Salmon.UI.AjaxError
		});
	};
	
	function addToFittingRoom() {
		var action = "/webapp/wcs/stores/servlet/BasketAdd";
    	var viewParams = "&URL=MiniFittingRoomView";
    	$(form).find("input[name='errorViewName']")[0].value = "GenericAjaxErrorJSONView";
    	var formData = $(form).serialize();
    	var buttonData = "&addToFittingRoomButton.x=1";
    	var data = formData + viewParams + buttonData;
   		
   		loadingIndicator.show();
   		
		var ajax = $.ajax({
			url: action,
			contentType : "application/x-www-form-urlencoded",
			cache: false,
			dataType: "json",
			type: "post",
			success: function(response) {
				loadingIndicator.hide();
				if(Salmon.UI.ajaxResponseInvalid(response)) {
					return false;
				};	
				$.publish(Salmon.UI.CustomEvents.productAddedToFittingRoom, response);
				submitFunction = addToBag;
				if(quickLookPanel) {
					quickLookPanel.closeOverlay();
				};
				SF.ImageRollovers.add("miniFittingRoom");	
			},
			data: data,
			error: Salmon.UI.AjaxError
		});
	};
	
	function checkStock(e) {
		return;
		var data = e.data[0].stockLevel;
		if(data === "0") {
			disableAddToBag();
		}
		else {
			enableAddToBag();
			SF.ImageRollovers.add(form);
		}
		
	};
	
	function disableAddToBag() {
		inputs.addToShoppingBag.disabled = true;
		inputs.addToShoppingBag.src = addToBagButtonSrc.dis;
	};
	
	function enableAddToBag() {
		inputs.addToShoppingBag.disabled = false;
		inputs.addToShoppingBag.src = addToBagButtonSrc.def;
	};
	
	
	
	function getDisabledSrcFromButtonSrc(imageSrc) {
		var extensionIndex = imageSrc.lastIndexOf(".");
		var originalSourceWithoutExtension = imageSrc.substring(0,extensionIndex);
		var extension = imageSrc.substring(extensionIndex, imageSrc.length);
		return originalSourceWithoutExtension + suffix + extension;
	};
	
};