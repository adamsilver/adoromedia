
function sum(a, b) {
	if(arguments.length === 0) return 0;
	if(!b) return a;	
	if(typeof a !== "number") return b;
	if(typeof b !== "number") return a;
	return a+b;
}

function MyObject(firstName) {
	var firstName = firstName;
	this.getFirstName = function() {
		return firstName;
	}
}