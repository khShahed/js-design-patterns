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

module.exports = Calc;