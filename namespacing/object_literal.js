/*
Object literal notation can be thought of as an object containing a collection of key:value pairs with a colon separating each pair of keys and values where keys can also represent new namespaces.
Object literals have the advantage of not polluting the global namespace but assist in organizing code and parameters logically. They are truly beneficial if we wish to create easily-readable structures that can be expanded to support deep nesting. Unlike simple global variables, object literals often also take into account tests for the existence of a variable by the same name so the chances of collision occurring are significantly reduced.

*/
var myApp = {
  foo: function() {
    return this.bar;
  },
  bar: 'bar'
}

// add/modify properties:
myApp.oterhBar = 'otherBar';
myApp.bar = 'foo';

