/*
One popular pattern for namespacing in JavaScript is opting for a single global variable as our primary object of reference. A skeleton implementation of this where we return an object with functions and properties can be found below:
*/

var myApp =  (function () {
  var bar = "bar";
  var foo = function() {
    return bar;
  }
  return {
    foo: foo
  }
})();
