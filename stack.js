/* A stack is an ordered collection of items that follows the LIFO (short for Last In First Out) principle.
The end of the stack is known as the top and the opposite is known as the base.
The newest elements are near the top, and the oldest elements are near the base.
*/

function Stack() {
  var items = [];

  this.push = function(val) {
    items.push(val);
  };

  this.pop = function() {
    return items.pop();
  };

  this.peek = function() {
    return items[items.length - 1];
  };

  this.isEmpty = function() {
    return items.length === 0;
  };

  this.clear = function() {
    items = [];
  };

  this.size = function() {
    return items.length;
  };

  this.print = function() {
    console.log(items.toString());
  };
}
