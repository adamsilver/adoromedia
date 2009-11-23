var Salmon = Salmon || {};
Salmon.ImageRollover = function(image, newSrc) {
	
	var origingalSrc = image.src;
	$(image).bind("mouseover", imageMouseOver);
	$(image).bind("mouseout", imageMouseOut);
	
	var newImage = new Image();
	newImage.src = newSrc;
	
	function imageMouseOver() {
		
		image.src = newSrc;
	};
	
	function imageMouseOut() {
		image.src = origingalSrc;
	};
};
