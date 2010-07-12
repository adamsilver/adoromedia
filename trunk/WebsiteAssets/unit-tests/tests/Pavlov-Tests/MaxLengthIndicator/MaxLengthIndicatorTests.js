QUnit.specify("Max length indicator", function(){
	
	var input, tempInput, indicator;
	
	describe("When the value of the field is changed from blank to hello and the max length is 100", function(){
	
		before(function() {
			input = $("#maxLength");
			//tempInput = input.clone(true);
			//tempInput.attr("id", "someTempId");
			indicator = $("#indicator");
			
			new MaxLengthIndicator(input, indicator, {
				maxLength: 100
			});
		});
		
		after(function(){
			//input.replaceWith(tempInput);
		});
	
		it("the max length indicator should show 95 characters remaining", function() {
			input.val("hello");
			input.trigger("keyup");
			var indicatorHtml2 = indicator.html();
			assert(indicator.html()).isEqualTo("95", "");
		});
	});
});