if (typeof DG !== "object") { var DG = {}; }
$(document).ready(function(){
	DG.Map = new(function(){
		new Adoro.GoogleMap(document.getElementById("map"), "81 College Road, Kensal Green, NW10 5ES");
	})
});