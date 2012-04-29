
var ajtalk = require('../lib/ajtalk');
var Smalltalk = ajtalk.Smalltalk;

exports['Load Squeak Object'] = function(test) {
	ajtalk.load(__dirname + '/../squeak/Object.st');

	test.ok(Smalltalk.Object);
	
	test.done();
};

exports['Load Pharo Point'] = function(test) {
	ajtalk.load(__dirname + '/../pharo/Point.st');

	test.ok(Smalltalk.Point);
	
	test.done();
};

exports['Load Pharo Rectangle'] = function(test) {
	ajtalk.load(__dirname + '/../pharo/Rectangle.st');

	test.ok(Smalltalk.Point);
	
	test.done();
};

exports['Load Pharo Kernel Objects'] = function(test) {
	ajtalk.load(__dirname + '/../pharo/KernelObjects.st');

	test.ok(Smalltalk.ProtoObject);
	test.ok(Smalltalk.Object);
	test.ok(Smalltalk.Boolean);
	
	test.done();
};
