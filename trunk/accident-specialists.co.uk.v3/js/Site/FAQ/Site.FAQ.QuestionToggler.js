var Site = Site || {};
Site.FAQ = Site.FAQ || {};

Site.FAQ.QuestionToggler = new (function() {
	$(document).ready(init);

	function init() {

		var $questions  = $(".question");
		for(var i = 0; i < $questions.length; i++) {
			new Toggler($($questions[i]));
		}
		

	}
	
	
	function Toggler(root) {
		var $link = root.find("h2 a");
		var $answer = $(document.getElementById($link.get(0).hash.slice(1)));
		$answer.hide();

		$link.bind("click", toggle);
		
		function toggle(e) {
			if($answer.css("display") === "none") {
				$answer.show();			
			}
			else {
				$answer.hide();	
			}
			return false;
		}		
	}
	
});