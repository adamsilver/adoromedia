(function(){
	var tabController = tddjs.ui.tabController;
	
	function setUp() {
		/*:DOC += <ol id="tabs">
			<li><a href="#news">News</a></li>
			<li><a href="#sports">Sports</a></li>
			<li><a href="#economy">Economy</a></li>
			</ol>*/
		
		this.tabs = document.getElementById("tabs");
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
	
	TestCase("Tabcontroller activateTab", {
		setUp: function() {
			setUp.call(this);
			this.controller = tabController.create(this.tabs);
			this.links = this.tabs.getElementsByTagName("a");
			this.lis = this.tabs.getElementsByTagName("li");
		},
		"test should not fail without an anchor": function() {
			var controller = this.controller;
			assertNoException(function(){
				controller.activateTab();
			});
		},
		"test should mark anchor as active": function() {
			this.controller.activateTab(this.links[0]);
			assertClassName("active-tab", this.links[0]);
		},
		"test should deactivate previous tab": function() {
			this.controller.activateTab(this.links[0]);
			this.controller.activateTab(this.links[1]);
			assertNoMatch(/(^|\s)active-tab (\s|$)/, this.links[0]);
			assertClassName("active-tab", this.links[1]);
		}
	})
	
}());