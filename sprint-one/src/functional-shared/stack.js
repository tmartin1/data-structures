var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var someInstance = {};
  someInstance.counter = 0;
  someInstance.storage = {};

  someInstance.push = stackMethods.push;
  someInstance.pop = stackMethods.pop;
  someInstance.size = stackMethods.size;

  return someInstance;
};

var stackMethods = {};

stackMethods.push = function(value) {
  this.storage[this.counter] = value;
  this.counter++;
};

stackMethods.pop = function() {
  if (this.counter > 0) {
    this.counter--;
    var lastVal = this.storage[this.counter];
    delete this.storage[this.counter];
    return lastVal;
  }
};

stackMethods.size = function() {
  return this.counter;
};

