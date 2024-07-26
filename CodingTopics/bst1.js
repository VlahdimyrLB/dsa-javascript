// BINARY SEARCH TREE
// explanation in bst.js

// Node class represent each node in the tree
class Node {
  constructor(data, left = null, right = null) {
    this.data = data; // to be stored data
    this.left = left; // left node
    this.right = right; // right node
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  // add data to the tree
  add(data) {
    const node = this.root;

    // if this is the first node then set the data to be the root node
    if (node === null) {
      this.root = new Node(data);
      return;

      // if not the first node, figure out where to put the data
    } else {
      const searchTree = function (node) {
        // node param is the root node
        if (data < node.data) {
          if (node.left === null) {
            node.left = new Node(data); // assign left node to new node data
            return;
          } else if (node.left !== null) {
            return searchTree(node.left); // recursion, continue searching but pass in the node.left
          }
        } else if (data > node.data) {
          if (node.right === null) {
            node.right = new Node(data); // Insert new node
            return;
          } else if (node.right !== null) {
            return searchTree(node.right); // Continue searching but pass in the node.left
          }
        } else {
          // Data is equal, so no action is taken (no duplicates)
          return null;
        }
      };

      return searchTree(node);
    }
  }

  findMin() {
    let current = this.root;
    while (current.left !== null) {
      current = current.left;
    }
    return current.data;
  }

  findMax() {
    let current = this.root;
    while (current.right !== null) {
      current = current.right;
    }
    return current.data;
  }

  // returns the node
  find(data) {
    let current = this.root;
    while (current.data !== data) {
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }

      if (current === null) {
        return null;
      }
    }
    return current;
  }

  // returns true or false
  isPresent(data) {
    let current = this.root;
    while (current) {
      if (data === current.data) {
        return true;
      }

      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return false;
  }

  // remove
  remove(data) {
    const removeNode = function (node, data) {
      // Base case: if the current node is null, simply return null
      // This means we've reached a position where there is no node, so nothing to remove
      if (node == null) {
        return null;
      }

      // If the current node contains the data to be removed
      if (data == node.data) {
        // Case 1: The node has no children (leaf node)
        if (node.left == null && node.right == null) {
          // Removing a leaf node: just return null
          return null;
        }

        // Case 2: The node has only a right child
        if (node.left == null) {
          // No left child, so return the right child
          return node.right;
        }

        // Case 3: The node has only a left child
        if (node.right == null) {
          // No right child, so return the left child
          return node.left;
        }

        // Case 4: The node has two children
        // Find the in-order successor (smallest value in the right subtree)
        var tempNode = node.right;

        // Move to the leftmost node in the right subtree
        while (tempNode.left !== null) {
          tempNode = tempNode.left;
        }

        // Replace the data in the current node with the data from the in-order successor
        node.data = tempNode.data;

        // Remove the in-order successor node from the right subtree
        // We need to recursively call removeNode to remove the duplicate node
        node.right = removeNode(node.right, tempNode.data);

        // Return the updated node
        return node;
      } else if (data < node.data) {
        // If the data to be removed is less than the current node's data,
        // it means we need to search in the left subtree
        node.left = removeNode(node.left, data);
        return node;
      } else {
        // If the data to be removed is greater than the current node's data,
        // it means we need to search in the right subtree
        node.right = removeNode(node.right, data);
        return node;
      }
    };

    // call the function, recursion
    this.root = removeNode(this.root, data);
  }

  /* TREE HEIGHT represents the distance from the root node to any given leaf node 
    - starts at left node*/

  isBalanced() {
    return this.findMinHeight() >= this.findMaxHeight() - 1;
  }

  // get the distance of the ROOT node and first LEAF node WITHOUT 2 children
  findMinHeight(node = this.root) {
    if (node == null) {
      return -1;
    }

    // recursion
    let left = this.findMinHeight(node.left);
    let right = this.findMinHeight(node.right);
    if (left < right) {
      return left + 1;
    } else {
      return right + 1;
    }
  }

  // get the distance of the most bottom node
  findMaxHeight(node = this.root) {
    if (node == null) {
      return -1;
    }
    let left = this.findMaxHeight(node.left);
    let right = this.findMaxHeight(node.right);
    if (left > right) {
      return left + 1;
    } else {
      return right + 1;
    }
  }

  /* TREE TRAVERSAL - to explore tree data structures and FIND ALL the values in the TREE */

  // begin the search in the LEFT MOST node
  inOrder() {
    if (this.root == null) {
      return null;
    } else {
      var result = new Array();
      function traverseInOrder(node) {
        node.left && traverseInOrder(node.left);
        result.push(node.data);
        node.right && traverseInOrder(node.right);
      }
      traverseInOrder(this.root);
      return result;
    }
  }

  // explores the ROOT nodes before the LEAVES || ROOT NODES FIRST
  preOrder() {
    if (this.root == null) {
      return null;
    } else {
      var result = new Array();
      function traversePreOrder(node) {
        result.push(node.data);
        node.left && traversePreOrder(node.left);
        node.right && traversePreOrder(node.right);
      }
      traversePreOrder(this.root);
      return result;
    }
  }

  // explores the LEAF nodes before the ROOTSS  || LEAF NODES FIRST
  postOrder() {
    if (this.root == null) {
      return null;
    } else {
      var result = new Array();
      function traversePostOrder(node) {
        node.left && traversePostOrder(node.left);
        node.right && traversePostOrder(node.right);
        result.push(node.data);
      }
      traversePostOrder(this.root);
      return result;
    }
  }

  // explores nodes by level
  levelOrder() {
    let result = [];
    let Q = [];
    if (this.root != null) {
      Q.push(this.root);
      while (Q.length > 0) {
        let node = Q.shift();
        result.push(node.data);
        if (node.left != null) {
          Q.push(node.left);
        }
        if (node.right != null) {
          Q.push(node.right);
        }
      }
      return result;
    } else {
      return null;
    }
  }
}

const bst = new BST();

bst.add(9);
bst.add(4);
bst.add(17);
bst.add(3);
bst.add(6);
bst.add(22);
bst.add(5);
bst.add(7);
bst.add(20);
bst.remove(4);

console.log("Minimum: ", bst.findMin()); // Minimum:  3
console.log("Maximum: ", bst.findMax()); // Maximum:  22
console.log("Is 4 present: ", bst.isPresent(4)); // Is 4 present:  false

// TREE HEIGHT
console.log("Min height: ", bst.findMinHeight()); // Min height:  1
console.log("Max height: ", bst.findMaxHeight()); // Max height:  3
console.log("Is it balanced: ", bst.isBalanced()); // Is it balanced:  false

bst.add(10); // added to balance the tree

console.log("Min height: ", bst.findMinHeight()); // Min height:  2
console.log("Max height: ", bst.findMaxHeight()); // Max height:  3
console.log("Is it balanced: ", bst.isBalanced()); // Is it balanced:  true

/* the DIFFERENCE between MIN and MAX HEIGHT should be 0 or 1 to be BALANCED */
/* SEARCHING through BALANCE Tree is much more efficient
    There are ways to create a balanced tree automatically */

// TREE TRAVERSAL
console.log("inOrder: " + bst.inOrder()); // inOrder: 3,5,6,7,9,10,17,20,22
console.log("preOrder: " + bst.preOrder()); // preOrder: 9,5,3,6,7,17,10,22,20
console.log("postOrder: " + bst.postOrder()); // postOrder: 3,7,6,5,10,20,22,17,9

console.log("levelOrder: " + bst.levelOrder()); // levelOrder: 9,5,17,3,6,10,22,7,20
