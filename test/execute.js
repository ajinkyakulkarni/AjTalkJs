
var ajtalk = require('..');

exports['evaluate number'] = function (test) {
    var result = ajtalk.execute('1');
    
    test.ok(result);
    test.equal(result, 1);
}

exports['evaluate integer sum'] = function (test) {
    var result = ajtalk.execute('1 + 3');
    
    test.ok(result);
    test.equal(result, 4);
}

exports['evaluate real sum'] = function (test) {
    var result = ajtalk.execute('1.2 + 3.4');
    
    test.ok(result);
    test.equal(result, 1.2 + 3.4);
}

exports['execute assign'] = function (test) {
    var result = ajtalk.execute('a := 1. a');
    
    test.ok(result);
    test.equal(result, 1);
}

exports['evaluate native property'] = function (test) {
    var result = ajtalk.execute("'foo' nat: 'length'");
    
    test.ok(result);
    test.equal(result, 3);
}

exports['evaluate native method'] = function (test) {
    var result = ajtalk.execute("'foo' napply: 'toUpperCase' with: { }");
    
    test.ok(result);
    test.equal(result, 'FOO');
}

exports['create native object'] = function (test) {
    var result = ajtalk.execute("NativeObject new");
    
    test.ok(result);
    test.equal(typeof result, 'object');
    test.equal(result.__proto__, Object.prototype);
    test.equal(Object.keys(result).length, 0);
}

exports['create native object using native new'] = function (test) {
    var result = ajtalk.execute("NativeObject nnew: { }");
    
    test.ok(result);
    test.equal(typeof result, 'object');
    test.equal(result.__proto__, Object.prototype);
    test.equal(Object.keys(result).length, 0);
}

exports['block as native function'] = function (test) {
    var result = ajtalk.execute("[:a | a + 1 ] toFunction");
    
    test.ok(result);
    test.equal(typeof result, 'function');
    test.equal(result(1), 2);
}

exports['evaluate native function using value'] = function (test) {
    var result = ajtalk.execute("foo := [ 3 ] toFunction. foo value");
    
    test.ok(result);
    test.equal(result, 3);
}

exports['evaluate Smalltalk'] = function (test) {
    var result = ajtalk.execute("Smalltalk");
    
    test.ok(result);
    test.strictEqual(result, ajtalk.Smalltalk);
}
