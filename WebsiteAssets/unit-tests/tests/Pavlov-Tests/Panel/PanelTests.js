QUnit.specify("Panel", function(){
	
	var button, panel, realButton, docTitle = document.title;
	
	describe("When the page loads the panel", function() {
		
		before(function(){
			panel = $("#panel");
		});
		
		it("is hidden", function() {
			assert(panel.is(":visible")).isFalse();
		});
	});
	
	describe("When the button is clicked", function(){
	
		before(function(){
			button = $("#button");
			realButton = button.clone(true);
			panel = $("#panel");
		})
		
		after(function(){
			button.replaceWith(realButton);
			panel.hide();
			panel.css("backgroundColor", "");
			document.title = docTitle;
		})
		
		it("shows the panel", function(){
			button.click();
			assert(panel.is(":visible")).isTrue();
		});	
		
		it("changes panels colour", function(){
			var originalColor = panel.css("backgroundColor");
			button.click();
			var newColor = panel.css("backgroundColor");
			assert(newColor).isNotEqualTo(originalColor);
		});
		
		
		it("changes the title of the document", function(){
			var docTitle = document.title;
			button.click();
			assert(document.title).isNotEqualTo(docTitle);
		});
	});
});