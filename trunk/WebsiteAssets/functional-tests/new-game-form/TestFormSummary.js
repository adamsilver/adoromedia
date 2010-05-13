
var TestFormSummary = new (function(){
	$(init);
	
	function init() {
		$("div.errorSummary").delegate("a", "click", function(e){
			e.preventDefault();
			var element = document.getElementById(this.hash.slice(1))
			if(!element) return;
			element.focus();			
		});
	}
});

