QUnit.specify("Tabset", function(){
	
	var realRootNode;
	var rootNode;
	
	describe("When the tabset is loaded", function() {
		
		var tabsetControl;
		var tabPanel1;
		var tabPanel2;
		var tabPanel3;
		
		before(function() {
			rootNode = $("div.tabset");
			realRootNode = rootNode.clone(true);
			tabsetControl = new Tabset(rootNode);
			tabPanel1 = $("#tabPanel1");
			tabPanel2 = $("#tabPanel2");
			tabPanel3 = $("#tabPanel3");
		})
		
		after(function() {
			rootNode.replaceWith(realRootNode);
		})
		
		it("shows the first tabbed panel and hides the other panels", function() {
			assert(tabPanel1.is(":visible")).isTrue();
			assert(tabPanel2.is(":visible")).isFalse();
			assert(tabPanel3.is(":visible")).isFalse();
		});
	});
	/*
	describe("When a tab is clicked", function() {
		var tabsetControl;
		var tabPanel1;
		var tabPanel2;
		var tabPanel3;
		var tab2;
		
		before(function() {
			rootNode = $("div.tabset");
			realRootNode = rootNode.clone(true);
			tabsetControl = new Tabset(rootNode);
			tabPanel1 = $("#tabPanel1");
			tabPanel2 = $("#tabPanel2");
			tabPanel3 = $("#tabPanel3");
			tab2 = rootNode.find("a.tab").get(1);
		})
		
		after(function() {
			//rootNode.replaceWith(realRootNode);
		})
		
		it("shows the related tab", function() {
			$(tab2).click();
			assert(tabPanel1.is(":visible")).isFalse();
			assert(tabPanel2.is(":visible")).isTrue();
			assert(tabPanel3.is(":visible")).isFalse();
		});
		
	});
	*/
	describe("When a tab is clicked", function() {
		
		var tabs;
		var panels;
		
		before(function(){
			rootNode = $("div.tabset");
			tabs = rootNode.find(".tab");
			panels = rootNode.find(".tabPanel");
		});

		after(function() {
			//rootNode.replaceWith(realRootNode);
		})

		it("shows it's related tab", function() {
			var tab = null;
			var related = null;
			for(var i = 0; i < tabs.length; i++) {
				tab = tabs[i];
				related = $("#"+tab.hash.slice(1));
				$(tabs[i]).click();
				assert(related.is(":visible")).isTrue();
			}
		});
		
		it("hides all other tabs", function() {
			var tab = null;
			var related = null;
			var others = null;
			for(var i = 0; i < tabs.length; i++) {
				tab = tabs[i];
				related = $("#"+tab.hash.slice(1));
				$(tabs[i]).click();
				others = panels.not(related);
				console.log("others");
				for(var j = 0; j < others.length; j++) {
					console.log(others[j]);
					console.log($(others[j]).is(":visible"));
					assert($(others[j]).is(":visible")).isFalse();
				}
				
				
			}
		});
		
		//it("highlights the tab", function() {
			
		//});
		
	});
	
	
});