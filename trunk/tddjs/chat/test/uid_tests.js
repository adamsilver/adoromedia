TestCase("uid tests", {
	tearDown: function() {
	},
	"test should return numeric id": function() {
		var id = tddjs.uid({});
		assertNumber(id);
	},
	"test should return consistent id for same object": function() {
		var obj = {};
		var id = tddjs.uid(obj);
		var id2 = tddjs.uid(obj);
		assertSame(id,id2);
	},
	"test should return unique id": function() {
		var obj1 = {};
		var obj2 = {};
		var id1 = tddjs.uid(obj1);
		var id2 = tddjs.uid(obj2);
		assertNotSame(id1,id2);
	}
});