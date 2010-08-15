(function(){
	var tabController = tddjs.ui.tabController;
	
	function setUp() {
		/*:DOC += <ol id="tabs">
			<li><a href="#news">News</a></li>
			<li><a href="#sports">Sports</a></li>
			<li><a href="#economy">Economy</a></li>
			</ol>*/
		
		this.tabs = document.getElementById("tabs");
		//jstestdriver.console.log(this.tabs);
	}
	
	TestCase("TabController tests", {
		setUp: setUp,
		"test should fail without element":function() {
			assertException(function(){
				tabController.create();
			}, "TypeError");
		},
		"test should fail without element class": function() {
			assertException(function(){
				tabController.create({});
			}, "TypeError");
		},
		"test should return object": function() {
			var controller = tabController.create(this.tabs);
			assertObject(controller);
		},
		"test should add js-tabs class to element": function() {
			var tabs = tabController.create(this.tabs);
			assertClassName("js-tab-controller", this.tabs);
		}
	});
	
}());