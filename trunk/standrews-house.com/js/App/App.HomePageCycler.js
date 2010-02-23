var App = App || {};
App.HomePageCycler = new (function() {
	$(init);
	function init() {
		var banner = document.getElementById("homePageImage");
		if(!banner) return;
		
		var img = new Image();
		img.src = "img/banner02.jpg";
		
		var img2 = new Image();
		img2.src = "img/banner03.jpg";
		
		banner.appendChild(img);
		banner.appendChild(img2);
		
		$(banner).cycle('fade');
	};
});
