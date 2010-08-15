(function(){
	var tabController = tddjs.ui.tabController;
	
	function setUp() {
		/*: DOC += <ol id="tabs">
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
				//tabController.create();
			}, "TypeError");
		}
	});
	
}());