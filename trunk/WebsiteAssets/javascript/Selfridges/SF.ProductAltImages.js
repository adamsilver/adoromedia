$.namespace("SF");

SF.ProductAltImages = function() {
	
	var config = {
		company: "SelfridgesRetailLimited",
		carouselLimit: 12,
		showInCarousel: 2,
		altPrefix: "_ALT",
		imageIdSuffix: "_M"
	}
	
	var productImage, loadComplete;
	
	/* Public methods */
	this.createImage = createImage;
	this.init = init;
	
	$(init);
	
	function init() {
		if(! SF.ProductImage) { return }
		productImage = SF.ProductImage.get();
		performCheck(getImageId());
	};
	
	function getImageId() {
		return $(productImage).attr("class");
	}
	
	function getAltImageId(imageId, count) {
		var number, imageSuffix;
		
		//Add leading zero to single digits, e.g. ALT01, ALT02 ... ALT12
		number = count < 10 ? "0" + count.toString() : count.toString();
		
		//Remove any instances of _M from main image id
		imageSuffix = imageId.substring(imageId.length - 2, imageId.length);
		imageId = imageSuffix == config.imageIdSuffix ? imageId.substring(0, imageId.length - 2) : imageId;
		
		return imageId + config.altPrefix + number;
	}
	
	/*
	 * Takes the alternative image ID and checks for it's presence in the
	 * list of available alternate images provided by the data bean
	 * Also creates carousel container for Scene7 images to be placed.
	 */
	function performCheck(imageId) {
		var carousel = document.getElementById("alternateImages");
		carousel.innerHTML = "";
		
		var clipContainer = document.createElement("div");
		clipContainer.className = "clip";
		carousel.appendChild(clipContainer);
		
		var ul = document.createElement("ul");
		clipContainer.appendChild(ul);
		
		if (!SF.ProductAltImageData.data || !SF.ProductAltImageData.data.images) return;	
		
		
		var imageArray = SF.ProductAltImageData.data.images;
		
		if (!Array.prototype.indexOf) {
			Array.prototype.indexOf = function (obj, start) {
				for (var i = (start || 0); i < this.length; i++) {
					if (this[i] == obj) {
						return i;
					}
				}
				return -1;
			}
		}
		
		//loop through all alternate image possibilities, checking for presence
		for (i = 1;i <= config.carouselLimit; i++) {
		  	var imageName = getAltImageId(imageId, i);
			var imageURL = S7Config.isRoot + config.company + "/" + imageName;
		  	
		  	if (imageArray.indexOf && imageArray.indexOf(imageName) != -1) {
		  		createImage(ul, imageURL);
		  	}
		}
  		createCarousel();
	}
	
	function createCarousel() {
		var carouselRoot = $("div#primary").find(".carousel")[0] || null;
		var carousel = $(carouselRoot).find("div.clip ul")[0];
		
		if(!carouselRoot || !carousel) return;
		
		//Append default image to carousel
		var listItems = $(carousel).find("li");
		
		if(listItems.length >= 1) {
			createImage(carousel, S7Config.isRoot + "/" + config.company + "/" + productImage.className);
			listItems = $(carousel).find("li");
		}
		
		if(listItems.length >= config.showInCarousel) {
			var backContainer = document.createElement("div");
			backContainer.className = "backContainer";
			$(carouselRoot).prepend(backContainer);
			
			var forwardContainer = document.createElement("div");
			forwardContainer.className = "forwardContainer";
			$(carouselRoot).append(forwardContainer);
			
			var carousel = new Adoro.Carousel(carouselRoot, {
				scrollCount: 1,
				stopButton: false,
				startButton: false,
				animateSpeed: 300,
				isCircular: false,
				indicators: false,
				backButtonAppendTo: backContainer,
				forwardButtonAppendTo: forwardContainer
			});
		}
		
		$(listItems).bind("click", switchImage);
	}
	
	function switchImage() {
		var newPath = $(this).find("img").attr("class");
		SF.ProductImage.update(newPath);
		return false;
	}
	
	function createImage(ul, path, id) {
		var li = document.createElement("li");
		
		var anchor = document.createElement("a");
		anchor.href="#";
		
		var img = document.createElement("img");
		img.className = path + Salmon.PageContext.IMAGEPARAMXTRALARGE;
		img.src = path + Salmon.PageContext.IMAGEPARAMXTRASMALL;
		img.alt = "";
		img.setAttribute("rel", id);
		
		ul.appendChild(li);
		anchor.appendChild(img);
		li.appendChild(anchor);	
	}
};

