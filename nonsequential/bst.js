/* A binary search tree is a binary tree, but it only allows you to store nodes with lesser values on the left side and nodes with greater values on the right side.
The diagram in the previous topic exempli es a binary search tree.
*/

var BinarySearchTree = {
  Node: function(val){
    return {
        val: val,
        right: null,
        left: null
    };
  },

  root: null,

  insert: function(val) {
    var newNode = this.Node(val);

    if(this.root === null) {
      this.root = newNode;
      return;
    }
    insertNode(this.root, newNode);
  },

  search: function(val) {
    return searchNode(this.root, val);
  },

  inOrderTraverse: function(callback) {
    inOrderTraverseNode(this.root, callback);
  },

  preOrderTraverse: function(callback) {
    preOrderTraverseNode(this.root, callback);
  },

  postOrderTraverse: function(callback) {
    postOrderTraverseNode(this.root, callback);
  },

  min: function() {
    return minNode(this.root);
  },

  max: function() {
    return maxNode(this.root);
  },

  remove: function(val) {
    removeNode(this.root, val);
  },

  print: function() {
    console.log(JSON.stringify(this.root));
  }
};

  /// HELPER FUNCTIONS

function insertNode(node, newNode) {
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
  }

function searchNode(node, val) {
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
  }

function inOrderTraverseNode(node, callback) {
    if(node !== null) {
      inOrderTraverseNode(node.left, callback);
      callback(node);
      inOrderTraverseNode(node.right, callback);
    }
  }

function preOrderTraverseNode(node, callback) {
    if(node !== null) {
      callback(node);
      preOrderTraverseNode(node.left, callback);
      preOrderTraverseNode(node.right, callback);
    }
  }

function postOrderTraverseNode(node, callback) {
    if(node !== null) {
      postOrderTraverseNode(node.left, callback);
      postOrderTraverseNode(node.right, callback);
      callback(node);
    }
  }

function minNode(node) {
    if(node) {
      while(node && node.left !== null) {
        node = node.left;
      }
      return node;
    }
    return null;
  }

function maxNode(node) {
    if(node) {
      while(node && node.right !== null) {
        node = node.right;
      }
      return node.val;
    }
    return null;
  }

function removeNode(node, val) {
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
}
