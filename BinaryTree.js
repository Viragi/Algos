/*
Q- Find height of a bonary tree
Q- find depth of a bonary tree

*/

function findHeight(root) {
  if (!root) {
    return 0;
  }
  // if (!root.left && !root.right) return 0; 
  return  Math.max(findHeight(root.left) , findHeight(root.right)) + 1;
}  

function findDepth (root) {
    if (!root) {
        return 0;
    }
    if (!root.left && !root.right) {
        return 0;
    }
    return (root.left) + (root.right) + 1;

}