/*
http://benalman.com/news/2010/11/immediately-invoked-function-expression/
Immediately-invoked Function Expressions is effectively an unnamed function, immediately invoked after it's been defined (self-executing or self-invoked ).

IIFEs are a popular approach to encapsulating application logic to protect it from the global namespace but also have their use in the world of namespacing.
*/

var myApp = myApp || {};
(function(namespace) {
  namespace.foo = function() {
    return namespace.bar;
  };
  namespace.bar = "bar";
}(myApp));

// another way of writing it:
(function(namespace) {
  namespace.foo = function() {
    return namespace.bar;
  };
  namespace.bar = "bar";
})(myApp);


// non-namespace useage:
var App = function() {
  (function(app) {
    // some initialization logic
    app.bar = "bar";

  }(this))
  this.foo = function() {
    return this.bar;
  }
}
