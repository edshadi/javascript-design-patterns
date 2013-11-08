/*
simply define all of our functions and variables in the private scope and return an anonymous object with pointers to the private functionality we wished to reveal as public.
*/

var cartModule = (function () {
  // privates
  var cart = [];

  function removeItem(index) {
    cart.pop(index)
  }
  function getItemCount() {
    return cart.length;
  }
  function addItem(item) {
    cart.push(item);
  }
  function getTotal() {
    var count = this.getItemCount(),
        price = 0;
    while (count--) {
      price += cart[count].price;
    }
    return price;
  }

  // Return an object exposed to the public
  return {
    addItem: addItem,
    getItemCount: getItemCount,
    removeItem: removeItem,
    getTotal: getTotal
  };
}());

/*
Disadvantage:
A disadvantage of this pattern is that if a public function refers to a private function, that public function can't be overridden if a patch is necessary. This is because the private function will continue to refer to the private implementation and the pattern doesn't apply to public members, only to functions.

Public object members which refer to private variables are also subject to the no-patch rule notes above.
*/

//you can't do this:
cartModule.removeItem = function(index) { cart.pop(); return cart.sort(); } // you have no access to cart.

