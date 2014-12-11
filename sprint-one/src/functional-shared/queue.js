var Queue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.counter = 0;
  someInstance.storage = {};

  someInstance.enqueue = queueMethods.enqueue;
  someInstance.dequeue = queueMethods.dequeue;
  someInstance.size = queueMethods.size;
  return someInstance;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  for (var i = this.counter; i > 0; i--) {
    this.storage[this.counter] = this.storage[this.counter - 1];
  }
  this.storage[0] = value;
  this.counter++;
};

queueMethods.dequeue = function() {
  if (this.counter > 0) {
    this.counter--;
    var lastVal = this.storage[this.counter];
    delete this.storage[this.counter];
    return lastVal;
  }
};

queueMethods.size = function() {
  return this.counter;
};
