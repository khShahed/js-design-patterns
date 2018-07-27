function Book(name, price) {
  const priceChanging =[],
        priceChanged = [];
  this.name = function () {
    return name;
  };
  this.price = function (val) {
    if (val !== undefined && val !== price){
      for (let i = 0; i < priceChanging.length; i++){
        // Check if updating value pass through all
        // priceChanging callback functions
        // If any of the callback return false then
        // we'll not proceed further.
        if (!priceChanging[i](this, val)){
          return price;
        }
      }
      price = val;
      for (let i = 0; i < priceChanged.length; i++){
        priceChanged[i](this);
      }
    }
    return price;
  };
  this.onPriceChanging = function (callback) {
    priceChanging.push(callback);
  };
  this.onPriceChanged = function (callback) {
    priceChanged.push(callback);
  }
}

module.exports = Book;