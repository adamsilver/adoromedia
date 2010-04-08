var Adoro = Adoro || {};
Adoro.suite = function() {
	var s = new top.jsUnitTestSuite();
	s.addTestPage("../tests/Adoro/tests/Adoro.FormValidator.html");
	s.addTestPage("../tests/Adoro/tests/Adoro.History.html");
	return s;
}	