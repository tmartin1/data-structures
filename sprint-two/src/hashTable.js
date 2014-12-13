var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var data = this.retrieve(k) || [];
  data.push([k,v]);
  this._storage.set(i,data);
  console.log(k,'added, bucket is',data);
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
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  delete this._storage[i];
  // var bucket = this._storage.get(i);
  // console.log('k is',k);
  // console.log('bucket is',bucket, bucket[0]);
  // if (!bucket) {
  //   return;
  // }
  // for (var j=0; j<bucket.length; j++) {
  //   if (bucket[j][0] === k) {
  //     bucket.splice(j,1);
  //   }
  // }
};


/*
 * Complexity: What is the time complexity of the above functions?
 */

/*

test._storage.get
function (index){
  checkLimit(index);
  return storage[index];
}

test._storage.set
function (index, value){
  checkLimit(index);
  storage[index] = value;
}

test._storage.each
function (callback){
  for(var i = 0; i < storage.length; i++){
    callback(storage[i], i, storage);
  }
}

*/
