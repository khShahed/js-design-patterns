const Calc = function (start) {
  let that = this;
  this.add = function (x) {
    start = start + x;
    return that;
  };
  
  this.multiply = function (x) {
    start = start * x;
    return that;
  };
  this.equals = function (callback) {
    callback(start);
    return start;
  };
};

new Calc(0)
    .add(1)
    .add(2)
    .multiply(3)
    .equals(function (result) {
      console.log(result);
    });