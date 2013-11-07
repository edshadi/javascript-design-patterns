// top-level namespace being assigned an object literal
var myApp = myApp || {};

var extend = function(parent, namespaces) {
  var namespaces = namespaces.split('.');
  for(var i=0; i < namespaces.length; i++) {
    if (!parent[namespaces[i]]) parent[namespaces[i]] = {};
    parent = parent[namespaces[i]];
  }
  return parent;
}

//Useage
extend(myApp, 'moduleA.moduleB')
console.log(myApp) // { moduleA: { moduleB: {} } }
