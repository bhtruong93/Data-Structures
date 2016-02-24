/* A queue is an ordered collection of items that follows the FIFO (which stands for First In First Out, also known as  first-come first-served) principle.
The addition of new elements in a queue is at the tail and the removal is from the front.
The newest element added to the queue must wait at the end of the queue.
*/

function Queue() {
  var items = [];

  this.enqueue = function(val) {
    items.push(val);

    // If trying to not use Array methods...
      // items[items.length] = val;
  };

  this.dequeue = function(val) {
    return items.shift();

    // If trying to not use Array methods...
      // if(!!items[0]) {
      //   var temp = items[0];
      //   for (var i = 0; i < items.length; i++) {
      //     items[i] = items[i+1];
      //   }
      //   items.length = items.length - 1;
      // }
  };

  this.front = function(val) {
    return items[0];
  };

  this.clear = function() {
    items = [];
  };

  this.isEmpty = function(val) {
    return items.length === 0;
  };

  this.size = function(val) {
    return items.length;
  };

  this.print = function(val) {
    console.log(items.toString());
  };
}
