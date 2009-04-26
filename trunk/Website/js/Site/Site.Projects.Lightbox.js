$(document).ready(function(){
	// create a lightbox effect by finding all anchors with a class of lightbox
	new Adoro.Lightbox($("a.lightbox"), {
		htmlBefore: '<div class="beforeShizzle"><a class="closeDialogue" href="#">Close the lightbox</a></div>',
		htmlAfter: '<div class="afterShizzle">Could put something after like this if you want</div>',
		htmlBack: '<a class="back" href="#">Previous gallery image</a>',
		htmlNext: '<a class="next" href="#">Next gallery image</a>',
		htmlLoading: '<div id="lightboxLoading"><img src="../../img/loading.gif" alt="Loading image"/></div>',
		overlayOpacity: "0.78"
	});
});