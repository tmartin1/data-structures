var Graph = function(){
  this.nodes = [];
};

Graph.prototype.addNode = function(node){
  var newNode = {};
  newNode.value = node;
  newNode.edges = {};
  this.nodes.push(newNode);
};

Graph.prototype.contains = function(node){
  var found = false;
  this.forEachNode(function(target){
    if (target.value === node) {
      found = true;
    }
  });
  return found;
};

Graph.prototype.removeNode = function(node){
  // var nodeList = this.nodes;
  this.forEachNode(function(target, index, collection){
    if (target.value === node) {
      collection.splice(index,1);
    }
  });
};

Graph.prototype.hasEdge = function(fromNode, toNode){
  var fromToTo = false;
  var toToFrom = false;
  this.forEachNode(function(target) {
    if (target.value === fromNode) {
      if (target.edges[toNode] === toNode) {
        fromToTo = true;
      }
    }
    if (target.value === toNode){
      if (target.edges[fromNode] === fromNode) {
        toToFrom = true;
      }
    }
  });
  return fromToTo && toToFrom;
};

Graph.prototype.addEdge = function(fromNode, toNode){
  fromNode = this.nameCheck(fromNode);
  toNode = this.nameCheck(toNode);

  this.forEachNode(function(target){
    if (target.value === fromNode) {
      target.edges[toNode] = toNode;
    }
    if (target.value === toNode) {
      target.edges[fromNode] = fromNode;
    }
  });
};

Graph.prototype.nameCheck = function(target) {
  if (typeof target !== 'string') {
    target = target.value;
  }
  return target;
};

Graph.prototype.removeEdge = function(fromNode, toNode){
  fromNode = this.nameCheck(fromNode);
  toNode = this.nameCheck(toNode);

  this.forEachNode(function(target){
    if (target.value === fromNode) {
      delete target.edges[toNode];
    }
    if (target.value === toNode) {
      delete target.edges[fromNode];
    }
  });
};

Graph.prototype.forEachNode = function(cb){
  var nodes = this.nodes;
  for (var i = 0; i < nodes.length; i++) {
    cb(nodes[i], i, nodes);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
