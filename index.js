// Chaining
const chaining = require('./design-patterns/chaining');

// new chaining(0)
//     .add(1)
//     .add(2)
//     .multiply(3)
//     .equals(function (result) {
//       console.log(result);
//     });

// Observable-Properties
const Book = require('./design-patterns/observable-properties');

const book = new Book('Testing Observable', 22.99);
console.log('The name is : ', book.name());
console.log('The price is : ', book.price());

book.onPriceChanging((bookObject, price) => {
  if (price > 100){
    console.log("Price is too high");
    return false;
  }
  return true;
});

book.onPriceChanged((changedBookObject) => {
  console.log("The book price has changed to $", changedBookObject.price());
});

book.price(50);
book.price(500);