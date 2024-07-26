/* BINARY SEARCH TREE (BST) - A data structure for efficiently storing and retrieving data
                            - can only have TWO BRANCHES
                            - each left subtree is < parent node 
                            - each right subtree is > parent node
                            - better tahn linear faster than finding items by key of sorted array
                            - but slower than hash table
                            - a clear advantage with Binary Search Trees is that operations like search, delete, and insert are fast and done without having to shift values in memory.
    Nodes - each element in the tree is called a node, which holds a value and links to other nodes.
    Root node - the topmost node of the tree. It has no parent and is the entry point for all operations.
    Parent node - node that has one or more child nodes. Each node (except the root) has exactly one parent.
    Child node - node that is directly below another node in the hierarchy. A parent node can have zero or more children.
    Leaf node - node that does not have any children. Leaf nodes are the endpoints of the tree where no further branching occurs.
    Sibling node - nodes that share the same parent. They are at the same level in the tree and are direct descendants of the same parent.
    Subtree - portion of the tree consisting of a node and all its descendants. Every node in the tree represents the root of a subtree.
    
    The BST property:
    - For any given node, its left subtree contains nodes with values less than the node's value.
    - Its right subtree contains nodes with values greater than the node's value.
    
    Example structure:
    
          10 (Root node)
         /  \
       5    15 (Child nodes of root node)
      / \   / \
     3   7 12  20 (Leaf nodes)
     
    In this example:
    - Node 10 is the root node.
    - Nodes 5 and 15 are children of the root node 10.
    - Nodes 3, 7, 12, and 20 are leaf nodes.
    - Nodes 3 and 7 are siblings, as they share the same parent node 5.
    - The subtree rooted at node 5 consists of nodes 5, 3, and 7.
*/
