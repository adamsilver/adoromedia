var Adoro = Adoro || {};
Adoro.suite = function() {
	var s = new top.jsUnitTestSuite();
	s.addTestPage("../tests/Adoro/tests/Adoro.FormValidator.html");
	return s;
}	