var Playground = Playground || {};
Playground.suite = function() {
	var s = new top.jsUnitTestSuite();
	s.addTestPage("../tests/Playground/tests/Sum.html");
	return s;
}