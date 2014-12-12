var Tree = function(value){
  var newTree = {};
  newTree.value = value;

  newTree.children = [];
  newTree.addChild = treeMethods.addChild;
  newTree.contains = treeMethods.contains;

  return newTree;
};


var treeMethods = {};

treeMethods.addChild = function(value){
  var newChild = new Tree(value);
  this.children.push(newChild);
};

treeMethods.contains = function(target, result){
  var result = result || false;
  if (result || this.value === target) {
    return true;
  }

  var nodes = this.children;
  for (var i=0; i<nodes.length; i++) {
    result = nodes[i].contains(target, result);
  }

  return result;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
