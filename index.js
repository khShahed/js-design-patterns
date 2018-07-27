const chaining = require('./design-patterns/chaining');

new chaining(0)
    .add(1)
    .add(2)
    .multiply(3)
    .equals(function (result) {
      console.log(result);
    });