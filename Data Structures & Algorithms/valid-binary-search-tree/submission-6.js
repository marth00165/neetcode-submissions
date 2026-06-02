/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {boolean}
     */
    isValidBST(root) {
        // set up Q for BFS (bread first)
        let q = [[root, -Infinity, Infinity]];
        let idx = 0;

        // this is more optimal than shift() 
        while (q.length > idx) {
            // get the node and that levels min and max
            let [node, min, max] = q[idx++];
            if (node) {
                    // validate its inbounds
                    if (node.val <= min || node.val >= max) {
                        return false
                    }
                    // push children if valid values
                    if (node.left) {
                        q.push([node.left, min, node.val])
                    }

                    if (node.right) {
                        q.push([node.right, node.val, max])
                    } 
                }
            }
        return true
    }
}
