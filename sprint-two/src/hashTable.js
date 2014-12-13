var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var data = this._storage.get(i) || [];
  data.push([k,v]);
  this._storage.set(i,data);
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);
  if (!bucket) {
    return null;
  }
  for (var j=0; j<bucket.length; j++) {
    if (bucket[j][0] === k) {
      return bucket[j][1];
    }
  }
  return null;
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);
  if (!bucket) {
    return;
  }
  for (var j=0; j<bucket.length; j++) {
    if (bucket[j][0] === k) {
      bucket.splice(j,1);
    }
  }
  this._storage.set(i, bucket);
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
