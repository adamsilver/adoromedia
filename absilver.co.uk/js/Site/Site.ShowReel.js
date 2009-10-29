var Site = Site || {};
Site.ShowReel = new (function() {
	$(init);
	

	function init() {
		var root = $("#work div.showreel")[0] || null;
		if(!root) return;
		new Adoro.Carousel(root);
	};
	
	
	
});
