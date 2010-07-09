var dataStore = (function() { 
    var data = []; 
    return { 
        push: function (item) { 
            data.push(item); 
        }, 
        pop: function() { 
            return data.pop(); 
        }, 
        length: function() { 
            return data.length; 
        },
		clear: function() {
			data = [];
		}
    }; 
}()); 