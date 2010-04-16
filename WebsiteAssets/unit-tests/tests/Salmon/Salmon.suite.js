var Salmon = Salmon || {};
Salmon.suite = function() {
	var s = new top.jsUnitTestSuite();
	//s.addTestPage("../tests/Salmon/tests/Salmon.Utilities.html");
	s.addTestPage("../tests/Salmon/tests/ProductAdder.html");
	return s;
}	