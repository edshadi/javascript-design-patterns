var cartModule = (function () {
  // privates
  var cart = [];

  function removeItem(index) {
    cart.pop(index)
  }

  // Return an object exposed to the public
  return {
    addItem: function(item) {
      cart.push(item);
    },

    getItemCount: function () {
      return cart.length;
    },

    // Public alias to a  private function
    removeItem: removeItem,

    getTotal: function () {
      var count = this.getItemCount(),
          price = 0;
      while (count--) {
        price += cart[count].price;
      }
      return price;
    }
  };
}());
