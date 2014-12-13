var BinarySearchTree = function(value){
  var someInstance = {};
  someInstance.left = null;
  someInstance.right = null;
  someInstance.value = value;

  someInstance.insert = function(value) {
    var newTree = new BinarySearchTree(value);
    if (this.value === value) {
      return;
    }

    if (value > this.value) {
      if (this.right === null) {
        this.right = newTree;
      } else {
        this.right.insert(value);
      }
    } else {
      if (this.left === null) {
        this.left = newTree;
      } else {
        this.left.insert(value);
      }
    }
  };

  someInstance.contains = function(target) {
    if (this.value === target) {
      return true;
    }

    if (target < this.value) {
      if (this.left === null) {
        return false;
      }
      return this.left.contains(target);
    } else {
      if (this.right === null) {
        return false;
      }
      return this.right.contains(target);
    }
    return false;
  };

  someInstance.depthFirstLog = function(cb) {
    cb(this.value);
    if (this.left !== null) {
      this.left.depthFirstLog(cb);
    }
    if (this.right !== null) {
      this.right.depthFirstLog(cb);
    }
  };

  return someInstance;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


