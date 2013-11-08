
var myModule = (function() {
  var module = {};
  var privateVar = "bar";

  var privateMethod = function() {
    console.log(privateVar);
  }
  var privateMethod2 = function() {
    return Math.random(2);
  }
  module.publicMethod = privateMethod;
  module.publicVar = privateMethod2();

  return module;
}());
