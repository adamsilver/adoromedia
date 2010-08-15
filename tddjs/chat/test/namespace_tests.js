TestCase("NamespaceTest", {
	tearDown: function() {
		delete tddjs.nstest;
	},
	"test should create non-existent object": function() {
		tddjs.namespace("nstest");
		assertObject(tddjs.nstest);
	},
	"test should not overwrite existing object": function() {
		tddjs.nstest = { nested: {} };
		var result = tddjs.namespace("nstest.nested");		
		assertSame(tddjs.nstest.nested, result);
	},
	"test should only create missing parts of object": function() {
		var existing = {};
		tddjs.nstest = { nested: { existing: existing } };
		var result = tddjs.namespace("nstest.nested.ui");
		assertSame(existing, tddjs.nstest.nested.existing);
		assertObject(tddjs.nstest.nested.ui);
	}
});