var Site = Site || {};
Site.Projects = Site.Projects || {};
Site.Projects.DefaultTextControl = new (function(){
	$(document).ready(function(){
		var myInputDefault1 = new Adoro.DefaultTextControl(document.getElementById("search2"));
		var myInputDefault2 = new Adoro.DefaultTextControl(document.getElementById("different"));
	});
});