var Site = Site || {};
Site.Projects = Site.Projects || {};
Site.Projects.Gallery = new (function(){
	$(document).ready(init);
	function init() {
		var galleryItems = $('#project .subSection02 a');
		$(galleryItems).lightBox();
		
		var viewGalleryLink = $("#project p.viewGallery a")[0] || null;
		if(!viewGalleryLink) return;
		$(viewGalleryLink).bind("click", function(e){
			$(galleryItems[0]).trigger("click");
			return false;
		});
	};
});