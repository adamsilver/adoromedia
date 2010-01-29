$.namespace("SF");
/**
 * SF.Gallery constructs the browse gallery
 * @constructor
 * @static
 * @name SF.Gallery
 */
SF.Gallery = new (function(){
	$(document).ready(init);
	
	function init() {
		var paginationNode = $("#browseGallery div.pagination")[0] || null;
		var carouselNode = $("#browseGallery div.gallery")[0] || null;
		var displayType = $(carouselNode).find("#browseGallery div.displayType3")[0] || null;
		if(!carouselNode || !paginationNode || displayType) return;
		new SF.AjaxPagination(paginationNode, carouselNode, {
			indicatorNode: document.getElementById("brandGroupIndicator")
		});
	};
	
});