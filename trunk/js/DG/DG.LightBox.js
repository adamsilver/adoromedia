if (typeof DG !== "object") { var DG = {}; }
$(document).ready(function(){
	DG.LightBox = new(function(){
		$(".lightbox").lightbox();
	})
});