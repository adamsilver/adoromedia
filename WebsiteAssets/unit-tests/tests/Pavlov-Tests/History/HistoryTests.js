QUnit.specify("History", function(){
	
	window.location.hash = "";
	
	describe("When the hash portion of the url is changed", function() {
		
		before(function() {
			//window.location.hash = "adam=1";
		});
		
		describe("and a particular param is being listened to", function() {
			
			it("fires the event handler", function() {
				
				var calledMyHandler = false;
				var myHandler = function() {
					calledMyHandler = true;
				}
				
				History.listen("adam", myHandler);
				window.location.hash = "adam=2";

				// wait long enough for timeout to have completed
				wait(0, function(){
					assert(calledMyHandler).isTrue();
				}); 
				
			});
			
		});
		
	});
	
});