var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var newNode = new Node(value);
    if (list.head === null) {
      list.head = newNode;
    }
    if (list.tail !== null) {
      list.tail.next = newNode;
    }
    list.tail = newNode;
  };

  list.removeHead = function(){
    if (list.head !== null) {
      var headVal = list.head.value;
      list.head = list.head.next;
      return headVal;
    }
  };

  list.contains = function(target){
    var pointer = list.head;

    if (list.head === null) {
      return false;
    }
    if (pointer.value === target) {
      return true;
    }
    while (pointer.next !== null) {
      if (pointer.next.value === target) {
        return true;
      }
      pointer = pointer.next;
    }
    return false;
  };
  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
