var app = {
	getMe: function() {
		return "adam";
	}
}



QUnit.specify("app example", function(){
    describe("app", function(){
        
		describe("getting me", function() {
			it("gets me as adam", function() {
				assert(app.getMe()).equals("adam");
			});
		});
		
        /*var foo;
        
        before(function(){
            foo = "bar";                        
        });
        
        after(function(){
            foo = "baz";
        });*/
        
        //it("can be specified like so", function(){
            //assert("as").equals('bar');            
        //});
        
		return;
		
        given([2,2,4], [5,2,7], [6,-4,2]).
            it("can generate row data tests", function(a, b, c) {
                assert(c).equals(a + b);
            });
        
        it("can contain as many specs as necessary", function(){
            assert(function(){
                throw "Exception!";
            }).throwsException();          
        });
        
        describe("can also have nested examples", function(){
            
            before(function(){
                foo = foo + "bar";
            });
            
            it("with their own specs", function(){
                assert(foo).equals("barbar");                
            });
            
        });
                
    });
    
});
