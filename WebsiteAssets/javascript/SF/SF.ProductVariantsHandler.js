$.namespace("SF.ProductVariantsHandler");

/**
* Create a new product variant handler - can be more than 1 on a page (e.g. bundle)
* @class Represents a product variant handler
* @constructor
* @name SF.ProductVariantsHandler
* @param {HTMLElement} root As DOM reference to product description panel
*/
SF.ProductVariantsHandler = function(root, async) {
	var productID = $(root).find("input[name='productId']").val() || null;
	var childItemId = $(root).find("input[name='childItemId']").val() || null;
	if(!productID) return null;
	var customEvent = Salmon.UI.CustomEvents.productAttributeChanged+productID;
	
	var form = $(root).find("form")[0] || null;
	
	var fields, attributeCollection = [];
	
	// find all form fields on the page that are attributes
	var attributeElements = $(root).find(".attribute");
	
	for(var i = attributeElements.length-1; i>=0; i--) {
		fields = $(attributeElements[i]).find("input[type='radio'], select");
		attributeCollection.push(new Attribute(fields));
	};
	
	/**
	* Create a new attribute
	* @class Represents a product attribute
	* @constructor
	* @name Attribute
	* @param {Nodes[]} fields Array of DOM nodes
	*/
	function Attribute(fields) {
		var name = $(fields)[0].name;
		// has to be hard coded
		if(name==="Colour" || name==="Fragrance" || name==="Flavour") {
			return new ColourAttribute(fields);
		}
		else {
			return new SelectAttribute(fields[0]);
		}
	};
	
	/**
	* Create a new colour attribute in the form of radios
	* This has now been extended to work for Fragrance and Flavour also
	* @class Represents a colour attribute
	* @constructor
	* @name ColourAttribute
	* @param {Nodes[]} radios Array of DOM nodes (radios)
	*/	
	function ColourAttribute(radios) {
 		var me = this;
		var hoverClass = "hover";
		var selectedClass = "selected";
		var currentColour = "no colour";
		var value = null;
		this.value = value;
		
		// hide radios with css
		$(radios).parents("div.attribute").addClass("colourAttributeEnhanced");
		
		// add indicator to show selected color
		var indicator = document.createElement("p");
		indicator.className = "indicator";
		indicator.innerHTML = currentColour;
		$(radios).parents("div.radios").append(indicator);
		
		var labels = (function(){
			var labels = [];
			for ( var i = 0; i < radios.length; i++ ) {
				radio = radios[i];
				label = getLabel(radio);
				labels.push(label);
			};
			return labels;
		}());
		
		setupLabels();
		
		function setupLabels() {
			var radio,
				label;
			for ( var i = 0; i < radios.length; i++ ) {
				radio = radios[i];
				label = getLabel(radio);
				label.colour = getLabelColour(radio);
				
				$(label).bind("click", label_onClick);
				$(label).bind("mouseover", label_onMouseover);
				$(label).bind("mouseout", label_onMouseout);
				
				if(radio.checked) {
					label_onClick.call(label);
				};
				
			};
		};
		
		function getLabels() {
			return labels;
		};

		function getLabel(radioNode) {
			return $(radioNode).next("label")[0] || $(radioNode).prev("label")[0] || null;
		};
		
		function getLabelColour(radioNode) {
			return radioNode.value;
		};
		
		function setValue(value) {
			me.value = value;
		};
		
		function removeSelectedClass(nodeToIgnore) {
			var labels = getLabels();
			for(var i = 0; i< labels.length; i++) {
				if(labels[i] === nodeToIgnore) continue;
				$(labels[i]).removeClass(selectedClass);
			};
		};

		function setCurrentColour(value) {
			currentColour = value;
		};
		
		function updateIndicator() {
			indicator.innerHTML = currentColour;
		};
		
		function label_onClick() {
			if(this.colour === getCurrentColour()) {
				return false;
			};
			setCurrentColour(this.colour);
			setValue(this.colour);
			updateIndicator();
			$(this).addClass(selectedClass);
			removeSelectedClass(this);
			updateVariants();
		};
		
		function getCurrentColour() {
			return currentColour;
		};
		
		function label_onMouseover() {
			$(this).addClass(hoverClass);
		};
		
		function label_onMouseout() {
			$(this).removeClass(hoverClass);
		};	
		
	};
	
	/**
	* Create a new select attribute in the form of a select box
	* @class Represents a product attribute
	* @constructor
	* @name SelectAttribute
	* @param {HTMLElement} select As DOM reference
	*/		
	function SelectAttribute(select) {
		var me = this;
		var value = null;
		this.value = value;
		
		var name = select.name;
		$(select).bind("change", change);
		$.subscribe(customEvent, updateMe);
		
		function change() {
			me.value = $(this).val();
			updateVariants();
		};
		
		function updateMe(e) {
			var data = e.data[0] || null;
			if(!data) return;
			if(data.attributeName === name) {
				removeOptions();
				addOptions(data.attributeValues);
			}
		};
		
		function removeOptions() {
			var options = select.options;
			var option = null;
			var optionsToRemove = [];
			for(var i = 1; i<options.length; i++) {
				option = options[i];
				if(option.value === "") continue;
				optionsToRemove.push(option);				
			}
			$(optionsToRemove).remove();		
		};
		
		function addOptions(options) {
			var option = null;
			for(var i = 0; i<options.length; i++) {
				option = document.createElement("option");
				option.value = options[i];
				option.innerHTML = options[i];
				select.appendChild(option);
			}
		};
	};
	
	/**
	* Creates the price handler
	* @constructor
	* @static
	* @name Price
	*/		
	var Price = new (function(){
		var node = $(root).find("p.price")[0] || null;
		if(!node) return;
		$.subscribe(customEvent, update);
		function update(e) {
			var data = e.data[0] || null;
			if(!data) return;
			var prices = data.prices || null;
			if(!prices) return;
			var price = prices[0] || null;
			if(typeof price !== "string") return;
			$(node).html(price);
		}	
	});
	
	/**
	* Creates the was price handler
	* @constructor
	* @static
	* @name WasPrice
	*/		
	var WasPrice = new (function(){
		var node = $(root).find("p.wasPrice")[0] || null;
		if(!node) return;
		$.subscribe(customEvent, update);
		function update(e) {
			var data = e.data[0] || null;
			if(!data) return;
			var prices = data.prices || null;
			if(!prices) return;
			var price = prices[1] || null;
			if(typeof price !== "string") return;
			$(node).html(price);
		}	
	});
	
	var PriceDisplay = new (function(){
		var node = $(root).find("div.prices")[0] || null;
		var ul = $(node).find("ul")[0] || null;
		if(!node || !ul) return null;
		
		$.subscribe(customEvent, update);
		
		function update(e) {
			var data = e.data[0] || null;
			if(!data) return;
			var prices = data.prices || null;
			if(prices.length === 0) return;
			setPrices(prices);
		};
		
		// Defect 2621: Start (Display Prices in Was/Was/Now order)
		function setPrices(prices) {
			var html = '';
			var className = "wasPrice";
			//Only display the top 3 prices from the list
			var lastEntry = prices.length - 1;
			for(var i = 0; i<prices.length && i <= 2; i++) {
				if(i == lastEntry) {
					className = "price";
				}
				html +=	'<li class='+className+'>'+prices[i]+'</li>';
			}
			ul.innerHTML = html;
		};
		// Defect 2621: End

	});	

	
	/**
	* Creates the price history handler
	* @constructor
	* @static
	* @name PriceHistory
	*/		
	var PriceHistory = new (function(){
		var hideClass = "hide";
		var node = $(root).find("div.priceHistory")[0] || null;
		if(!node) return;
		
		
		$(node).addClass("priceHistoryEnhanced");
		var a = $(node).find("a.activator")[0] || null;
		if(!a) return;
		a.href="#";
		var details = $(node).find("div.details")[0] || null;
		if(!details) return;
		
		
		$(details).bgiframe();
		var ul = $(details).find("ul")[0] || null;
		if(!ul) return;
		$(details).addClass(hideClass);
		$(a).bind("mouseenter", showPanel);
		$(node).bind("mouseleave", hidePanel);
		function showPanel() {
			// Coremetrics price history tagging.
			var sfcmScript = $(details).find( ".sfcmScript" ).html(); 
			
			if ( sfcmScript ) 
				eval( sfcmScript );
			
			$(details).removeClass(hideClass);
		}
		
		function hidePanel() {
			$(details).addClass(hideClass);
		}
		
		function update(e) {
			var data = e.data[0] || null;
			if(!data) return;
			var priceHistory = data.priceHistory || null;
			if(priceHistory.length === 0) return;
			setPriceHistory(priceHistory);
		}
		
		function setPriceHistory(priceHistory) {
			var html = '';
			for(var i = 0; i<priceHistory.length; i++) {
				html +=	"<li>" + priceHistory[i] + "</li>";
			}
			ul.innerHTML = html;
		}
		
		
		$.subscribe(customEvent, update);
	});
	
	/**
	* Creates the image preview panel
	* -every product has an image to update
	* -sometimes that image has a related link "preview" which updates the MAIN IMAGE
	* -there is always a MAIN IMAGE	
	* @constructor
	* @static
	* @name ImagePreview
	*/		
	var ImagePreview = new (function(){
	
		var mainImage = $("#largeImage")[0] || null;
		var previewImage = $(root).find(".previewImage img")[0] || mainImage;
		var previewLink = $(root).find(".previewImage p a")[0] || null;
		var quickLookImage = $(root).find(".quickLookImage img")[0] || null;
		var hiddenImageURL = $(root).find("input[name='replacementMainImageURL']").val() || null;		
		var zoomImageURL = null;
		if(!(previewImage || quickLookImage)) return;
		
		if(previewLink) {
			$(previewLink).bind("click", previewLinkClick);
		}

		$.subscribe(customEvent, update);

		function update(e) {
			var data = e.data[0] || null;
			if(!data) return;
			var staticImageURL = data.staticImageURL;			
		
			if(staticImageURL.length===0) return;
			
			var bigImageURL = data.staticImageURL+Salmon.PageContext.IMAGEPARAMXTRALARGE;
			var mediumImageURL = data.staticImageURL+Salmon.PageContext.IMAGEPARAMMEDIUM;
			var mediumLargeImageURL = data.staticImageURL+Salmon.PageContext.IMAGEPARAMMEDIUMLARGE;			
						
			// if we are updating a small window (product bundle)
			if(previewLink) {
				zoomImageURL = data.zoomImageURL;
				previewImage.src = mediumImageURL;
				previewImage.alt = data.altImageText;
				previewLink.href = bigImageURL;
			}
			// if we are updating a quicklook image panel
			else if(quickLookImage) {
				zoomImageURL = data.zoomImageURL;
				quickLookImage.src = mediumLargeImageURL;
				quickLookImage.alt = data.altImageText;
			}
			else {
				previewImage.className = data.imageReference;
				previewImage.src = bigImageURL;
				previewImage.alt = data.altImageText;
				zoomImageURL = data.zoomImageURL;
				
				if(SF.ProductAltImages) {
					SF.ProductAltImages.init();
				}
								
				largeImageChanged(data);
			}
		}
		
		function largeImageChanged(sku) {
			$.publish(Salmon.UI.CustomEvents.productLargeImageChanged, sku);
		};
		
		//Replace main image with the image ref from that in the preview window
		function previewLinkClick() {
			mainImage.src = hiddenImageURL;
			largeImageChanged(zoomImageURL);
			return false;
		}	
		
	});
	
	/**
	* Updates the hidden form field with the sku
	* @constructor
	* @static
	* @name SkuHandler
	*/	
	var SkuHandler = new (function(){
		var node = form.catEntryId || null;
		if(!node) return;
		
		$.subscribe(customEvent, update);
		function update(e) {
			var data = e.data[0] || null;
			if(!data) return;
			var sku = data.itemSKU;
			if(sku.length===0) return;
			node.value = sku;
		}
	});
	
	
	/**
	* Creates the stock availability panel
	* @constructor
	* @static
	* @name StockAvailability
	*/		
	var StockAvailability = new (function() {
		var node = $(root).find("p.stockAvailability")[0] || null;
		if(!node) return;
		var span = $(node).find("span")[0] || null;
		if(!span) return;
		$.subscribe(customEvent, update);
					
		//Conditionally run the stock check on load (only if a single item exists for this product)
		if (childItemId) {
			sendRequest(childItemId);
		}
		
		function update(e) {
			var data = e.data[0] || null;
			if(!data) return;
			var sku = data.itemSKU;
			if(sku.length===0) return;
			sendRequest(sku);
		};
		
		function sendRequest(sku) {
			var data = $(form).serialize();
			data += "&itemId="+sku;
			$.ajax({
				async: async,
				url: "/webapp/wcs/stores/servlet/AjaxStockIndicationView",
				type: "post", 
				dataType: "json",
				success: showStock,
				data: data,
				error: Salmon.UI.AjaxError
			});
		}
		
		function showStock(data) {
			$.publish(Salmon.UI.CustomEvents.stockAvailabilityChanged+productID, data);
			span.innerHTML = data.stockText;
		}
	});
	
	/**
	* Updates the description section of PDP, and details and specification sections
	* of overlay with sku specific short, long and aux description
	* @constructor
	* @static
	* @name DescriptionUpdate
	*/		
	var DescriptionUpdate = new (function() {
		var detailsId = "PTP_details_"+productID;
		var detailsDiv = document.getElementById(detailsId);
		if(!detailsDiv) return;
		
		var descriptionText = $("p.description span").get(0);
		
		//We may have either specification, or ingredients, or neither		
		var auxId = "PTP_ingredients_"+productID;
		var auxDiv = document.getElementById(auxId);
		if(!auxDiv) {
			var auxId = "PTP_specification_"+productID;
			var auxDiv = document.getElementById(auxId);
		}
		
		$.subscribe(customEvent, update);
		
		function update(e) {
			var data = e.data[0] || null;
			if(!data) return;

			if (descriptionText) {
				var shortDesc = data.shortDescription;
				if (shortDesc) {
					descriptionText.innerHTML = shortDesc;
				}
			}
			
			var description = data.longDescription;
			if (description) {
				detailsDiv.innerHTML = description;
			}

			//as stated, we may not have a spec or ingredients tab
			if(auxDiv) {
				var aux = data.auxDescription1;
				if(aux) {
					auxDiv.innerHTML = aux;
				}
			}
		};
		
	});
	
	function getCurrentKey() {
		var val = "P"+productID;
		var attrValue = null;
		for(var i = attributeCollection.length-1; i>=0; i--) {
			attrValue = attributeCollection[i].value;
			if(attrValue === null || attrValue === "") continue;
			val += "_"+attributeCollection[i].value;
		}		
		return val;
	};
	
	
	function updateVariants() {
		var currentKey = $.trim(getCurrentKey());
		
		if(!SF.ProductData.data) {
			return;
		}
		
		var newDetails = SF.ProductData.data[currentKey];	
		$.publish(customEvent, newDetails);
	};
}