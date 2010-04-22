var Playground = Playground || {};
Playground.suite = function() {
	var s = new top.jsUnitTestSuite();
	//s.addTestPage("../tests/Playground/tests/Sum.html");
	s.addTestPage("../tests/Playground/tests/animate.html");
	return s;
}