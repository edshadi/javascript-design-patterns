/*
Namespace injection is another variation on the IIFE where we "inject" the methods and properties for a specific namespace from within a function wrapper using this as a namespace proxy. The benefit this pattern offers is easy application of functional behaviour to multiple objects or namespaces and can come in useful when applying a set of base methods to be built on later (e.g. getters and setters).
*/

var myApp = myApp || {};
myApp.utils =  {};

(function() {
  var val = 5;
  this.getValue = function () {
    return val;
  };
}.apply(myApp.utils));
