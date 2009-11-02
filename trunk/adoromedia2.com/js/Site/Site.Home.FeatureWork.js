var Site = Site || {};
Site.Home = Site.Home || {};
Site.Home.FeaturedWork = new (function() {
	$(init);
	function init() {
		var root = $("#work div.showreel")[0] || null;
		if(!root) return;
		new Adoro.Carousel(root);
	};
});
