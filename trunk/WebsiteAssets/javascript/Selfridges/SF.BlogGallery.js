$.namespace("SF");
SF.BlogGallery = new (function(){
	//$(document).ready(init);
	
	function init() {
		var paginationNode = $("#blogList div.pagination")[0] || null;
		var carouselNode = $("#blogList div.gallery")[0] || null;
		if(!carouselNode || !paginationNode) return;
		new SF.AjaxPagination(paginationNode, carouselNode);
	};
});