/*
One solution to namespacing, as mentioned by Peter Michaux, is to use prefix namespacing. It's a simple concept at heart, but the idea is we select a unique prefix namespace we wish to use (in this example, myApplication_) and then define any methods, variables or other objects after the prefix as follows:
*/

var myApplication_propertyA = {};
var myApplication_propertyB = {};
function myApplication_myMethod(){
  //...
}

/*
  The biggest issue with the pattern is that it can result in a large number of global objects once our application starts to grow. There is also quite a heavy reliance on our prefix not being used by any other developers in the global namespace, so be careful if opting to use this.
*/
