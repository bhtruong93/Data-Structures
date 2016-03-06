/* A binary search tree is a binary tree, but it only allows you to store nodes with lesser values on the left side and nodes with greater values on the right side.
The diagram in the previous topic exempli es a binary search tree.
*/

function BinarySearchTree() {
  var Node = function(val) {
    this.val = val;
    this.right = null;
    this.left = null;
  };
  var root = null;

  this.insert = function(val) {
    var newNode = new Node(val);

    if(root === null) {
      root = newNode;
      return;
    }
    insertNode(root, newNode);
  };

  this.search = function(val) {
    return searchNode(root, val);
  };

  this.inOrderTraverse = function(callback) {
    inOrderTraverseNode(root, callback);
  };

  this.preOrderTraverse = function(callback) {
    preOrderTraverseNode(root, callback);
  };

  this.postOrderTraverse = function(callback) {
    postOrderTraverseNode(root, callback);
  };

  this.min = function() {
    return minNode(root);
  };

  this.max = function() {
    return maxNode(root);
  };

  this.remove = function(val) {
    removeNode(root, val);
  };

  this.print = function() {
    console.log(JSON.stringify(root));
  };

  /// HELPER FUNCTIONS

  var insertNode = function(node, newNode) {
    if(node.val > newNode.val) {
      if(node.left === null) {
        node.left = newNode;
      }
      else{
        insertNode(node.left, newNode);
      }
    }
    else{
      if(node.right === null) {
        node.right = newNode;
      }
      else{
        insertNode(node.right, newNode);
      }
    }
  };

  var searchNode = function(node, val) {
    if(node === null) {
      return false;
    }
    if(node.val === val) {
      return true;
    }
    if(node.val > val) {
      return searchNode(node.left, val);
    }
    else {
      return searchNode(node.right, val);
    }
  };

  var inOrderTraverseNode = function(node, callback) {
    if(node !== null) {
      inOrderTraverseNode(node.left, callback);
      callback(node.key);
      inOrderTraverseNode(node.right, callback);
    }
  };

  var preOrderTraverseNode = function(node, callback) {
    if(node !== null) {
      callback(node);
      preOrderTraverseNode(node.left, callback);
      preOrderTraverseNode(node.right, callback);
    }
  };

  var postOrderTraverseNode = function(node, callback) {
    if(node !== null) {
      postOrderTraverseNode(node.left, callback);
      postOrderTraverseNode(node.right, callback);
      callback(node);
    }
  };

  var minNode = function(node) {
    if(node) {
      while(node && node.left !== null) {
        node = node.left;
      }
      return node;
    }
    return null;
  };

  var maxNode = function(node) {
    if(node) {
      while(node && node.right !== null) {
        node = node.right;
      }
      return node.val;
    }
    return null;
  };

  var removeNode = function(node, val) {
    if(node === null) {
      return null;
    }
    if(val < node.val) {
      node.left = removeNode(node.left, val);
      return node;
    }
    else if(val > node.val) {
      node.right = removeNode(node.right, val);
      return node;
    }
    // Else node val == val
    else {
      // Node is a leaf
      if(node.right === null && node.left === null) {
        node = null;
        return node;
      }
      // Node has 1 child
      if(node.left === null) {
        node = node.right;
        return node;
      }
      if(node.right === null) {
        node = node.left;
        return node;
      }
      // Node has 2 children, must find the successor either by finding max from left or min from right, I'm going to use right
      var minRight = minNode(node.right);
      node.val = minRight.val;
      removeNode(node.right, minRight);
      return node;
    }
  };
}
