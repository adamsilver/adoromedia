$.namespace("SF.MyAccount.Returns");

SF.MyAccount.Returns.ReturnsQuantityHandler = new (function() {
	
	var field, items, increaseButton, decreaseButton, upperLimit, lowerLimit, range, el;
	
	//$(init);
	
	function init() {
		var items = $(".grouptop td.quantity");	
		if(items === null) return;	
		
		for (var i=0; i<items.length; i++) {
			
			el = items[i];
			
			field = $(el).find("input.quantity").get(0);
			increaseButton = $(el).find("input.increase").get(0);
			decreaseButton = $(el).find("input.decrease").get(0);
			upperLimit = $(el).find("input.maximum").val();
			lowerLimit = 0;
			range = [upperLimit, lowerLimit];
			debugger;
			SF.QuantityChanger( {
				field: field,
				increaseButton: increaseButton,
				decreaseButton: decreaseButton,
				range: range
			});
			
			return false;
		};
	}
});

SF.MyAccount.Returns.ReturnAllHandler = new (function() {
	
	var controller, checkboxes;
	
	$(init);
	
	function init() {
		controller = $("#returnAllItems").get(0);
		if (controller === null) return;
		
		checkboxes = $(".deliveryGroup td.select input:not(:disabled)").bind("click change", updateOneItem);
		$(controller).bind("click change", updateAllItems);
	}
	
	function updateAllItems() {
		var checked = this.checked ? true : false;
		for(var i=0; i<checkboxes.length; i++) {
			checkboxes[i].checked = checked;
			$(checkboxes[i]).trigger("change");
		}
	}
	
	function updateOneItem(checkbox) {

		var checkbox, quantity, maxQuantity;
		
		checkbox = this;
		quantity = $(checkbox).parents(".grouptop").find("td.quantity input.text:not(:disabled)").get(0);

		if(checkbox === undefined || quantity === undefined) {
			return;
		}

		maxQuantity = checkbox.value;
				
		if(checkbox.checked) {
			//uncheck this input and set return quantity to zero 
			checkbox.checked = true;
			setQuantity(quantity, maxQuantity);
		} else {
			//Check this input and return the maximum allowable quantity
			checkbox.checked = false;
			controller.checked = false;
		}
	}
	
	function setQuantity(input, value) {
		input.value = value;
	}
	
});
	
