$.namespace("SF");

SF.ProductImage = new (function() {
	
	$(init);
	
	var mainImage, altImages, productZoom, productSpin, productSwatches;
	
	this.get = getMainImage;
	this.update = updateImage;
	
	function init() {
		mainImage = document.getElementById("largeImage");
		if(!mainImage) { return }
		
		altImages = new SF.ProductAltImages;
		productZoom = new SF.ProductZoom.Controller;
	}
	
	function updateImage(src) {
		
		//update the Product Image
		changeProductImage(src);

		//update the altImages carousel
			
				
		//update productZoom
		
		
		//update productSpin
		
		//updateImageData();
	}
	
	function getMainImage() {
		return mainImage;
	}

	function changeProductImage(path) {
		mainImage.src = path;
	}	
});



