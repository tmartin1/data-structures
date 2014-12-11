var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var counter = 0;

  // Implement the methods below

  someInstance.enqueue = function(value){
    for (var i=counter; i>0; i--) {
      storage[i] = storage[i-1];
    }
    storage[0] = value;
    counter++;
  };

  someInstance.dequeue = function(){
    if (counter > 0) {
      counter--;
      var lastVal = storage[counter];
      delete storage[counter];
      return lastVal;
    }
  };

  someInstance.size = function(){
    return counter;
  };

  return someInstance;
};
