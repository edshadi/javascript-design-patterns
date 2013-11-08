/*
This variation of the pattern demonstrates how globals (e.g jQuery, Underscore) can be passed in as arguments to our module's anonymous function. This effectively allows us to import them and locally alias them as we wish.
*/

var myModule = (function(SweetQuery, SweetUnderscore) {
  var privateMethod = function(todo) {
    SweetQuery('.todos').append(todo);
  }
  var privateMethod2 = function(array){
    console.log( SweetUnderscore.min(array) );
  }

  return {
    addTodo: function(todo) {
      privateMethod(todo);
    },
    minArray: function(array) {
      privateMethod2(array);
    }
  }
// import  jQuery and Underscore
}(jQuery, _));
