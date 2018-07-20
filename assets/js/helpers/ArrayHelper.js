Array.prototype.last = function() {
  return this[this.length - 1];
}

Array.prototype.chunk = function(size) {
  var result = [];
  for (var i = 0; i < this.length; i+= size) {
    result.push(this.slice(i, i + size));
  }

  return result;
}
