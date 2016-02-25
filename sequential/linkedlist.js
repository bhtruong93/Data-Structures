/* Linked lists store a sequential collection of elements; but unlike arrays, in linked lists the elements are not placed contiguously in memory.
Each element consists of a node that stores the element itself and also a reference (also known as a pointer or link) that points to the next element.
*/

function LinkedList() {
  var Node = function(val) {
    this.val = val;
    this.next = null;
  };
  var length = 0;
  var head = null;

  this.append = function(val) {
    var node = new Node(val);
    if(head === null) {
      head = node;
    }
    else {
      var curr = head;
      while(curr.next) {
        curr = curr.next;
      }
      curr.next = node;
      length++;
    }
  };

  this.insertAt = function(pos, val) {
    var counter = 0,
        curr = head,
        node = new Node(val);
    if(length < pos) {
      console.error("Position greater than length");
    }
    while(counter < pos) {
      counter++;
      curr = curr.next;
    }
    if(counter + 1 == pos) {
      node.next = curr.next;
      curr.next = node;
      length++;
    }
  };

  this.removeAt = function(pos) {
    var counter = 0,
        curr = head;
    if(length < pos) {
      console.error("Position greater than length");
    }
    if(length == pos) {
      head = curr.next;
      return;
    }
    while(counter + 1 < pos) {
      counter++;
      curr = curr.next;
    }
    curr.next = curr.next.next;
    length--;
  };

  this.remove = function(val) {
    var curr = head;
    if(curr.val == val) {
      head = curr.next;
      length--;
    }
    while(curr.next) {
      if(curr.next.val == val) {
        curr.next = curr.next.next;
        length--;
      }
      else {
        curr = curr.next;
      }
    }
  };

  this.indexOf = function(val) {
    var counter = 0,
        curr = head;
    while(curr) {
      if(curr.val == val) {
        return counter;
      }
      else {
        curr = curr.next;
        counter++;
      }
    }
    return "Not Found";
  };

  this.isEmpty = function() {
    return !head;
  };

  this.size = function() {
    return length;
  };

  this.toString = function() {
    return JSON.stringify(head);
  };
}
