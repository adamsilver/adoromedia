$.namespace("SF.Checkout");

SF.Checkout.DeliveryChoices = new (function(){
	$(document).ready(init);
	
	function init() {
		hideButtons();
		var deliveryGroupNodes = $("fieldset.deliveryOptions");
		for(var i = 0; i < deliveryGroupNodes.length; i++) {
			new DeliveryGroup(deliveryGroupNodes[i]);
		};
		sendAddressRequest();
		sendNominatedRequest();
		sendStoreCollectRequest();
	};
	
	//handles the show hide of the delivery group methods
	function DeliveryGroup(rootNode) {
		var divs = $(rootNode).find("div.choice");
		var deliveryMethods = [], deliveryMethod = null;
		
		for(var i = 0; i < divs.length; i++) {
			deliveryMethod = new DeliveryMethod(divs[i]);
			deliveryMethods.push(deliveryMethod);
		};
			
		function DeliveryMethod(rootNode, options) {
			var radio = $(rootNode).find('div.heading input[type="radio"]')[0] || null;
			if(!radio) return null;
			var panel = $(rootNode).find('div.subChoices')[0] || null;
			if(!panel) return null;
			
			$(radio).bind("click", radioClick);
			
			if(!$(radio).attr("checked")) {
				closePanel();
			}
			
			function radioClick() {
				closePanels();
				if($(this).attr("checked")) {
					openPanel();
				}
				else {
					closePanel();
				}
			};
			
			function openPanel() {
				$(panel).css("display", "block");
			};
			
			function closePanel() {
				$(panel).css("display", "none");
			};
			
			this.closePanel = closePanel;
			this.openPanel = openPanel;			
		};
			
		function closePanels() {
			for(var i = 0; i < deliveryMethods.length; i++) {
				deliveryMethods[i].closePanel();
			};
		};
		
	};
	
	function sendAddressRequest() {
		var changeAddress = $(".changeAddress");
		if(!changeAddress) return;
		for(var i = 0; i < changeAddress.length; i++) {
			var select = $(changeAddress[i]).find("select")[0];
			$(select).bind("change", selectChange);
		}
		
		function selectChange() {
			form = $("form[name='deliveryoptions']")[0] || null;
			if(!form) return;	
			createNewFormElement(form, "updateDeliveryAddress", "true");
			form.submit();
		};	
		
	};
	
	function sendNominatedRequest() {
		var nominatedDelivery = $(".changeNominatedDelivery");
		if(!nominatedDelivery) return;
		for(var i = 0; i < nominatedDelivery.length; i++) {
			var select = $(nominatedDelivery[i]).find("select")[0];
			$(select).bind("change", selectChange);
		}
		
		function selectChange() {
			form = $("form[name='deliveryoptions']")[0] || null;
			if(!form) return;	
			createNewFormElement(form, "retrieveNominated", "true");
			form.submit();
		};	
		
	};
	
	function sendStoreCollectRequest() {
		var storeCollect = $(".changeStoreCollect");
		if(!storeCollect) return;
		for(var i = 0; i < storeCollect.length; i++) {
			var select = $(storeCollect[i]).find("select")[0];
			$(select).bind("change", selectChange);
		}
		
		function selectChange() {
			form = $("form[name='deliveryoptions']")[0] || null;
			if(!form) return;	
			createNewFormElement(form, "updateStoreAddress", "true");
			form.submit();
		};	
		
	};
	
	function hideButtons() {
		$(".update").css("display","none");
	};
	
	function createNewFormElement(inputForm, elementName, elementValue){
		var newElement = document.createElement("input");
		newElement.name = elementName;
		newElement.type = "hidden";
		inputForm.appendChild(newElement);
		newElement.value = elementValue;
		return newElement;
	}

});


