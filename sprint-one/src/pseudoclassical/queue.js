var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.counter = 0;
};

Queue.prototype.enqueue = function(value) {
  for (var i = this.counter; i > 0; i--) {
    this.storage[this.counter] = this.storage[this.counter - 1];
  }
  this.storage[0] = value;
  this.counter++;
};

Queue.prototype.dequeue = function() {
  if (this.counter > 0) {
    this.counter--;
    var lastVal = this.storage[this.counter];
    delete this.storage[this.counter];
    return lastVal;
  }
};

Queue.prototype.size = function() {
  return this.counter;
};
