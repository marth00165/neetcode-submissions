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
        let q = [[root, -Infinity, Infinity]]

        let rootVal = root.val;




        while (q.length) {
            let [node, low, high] = q.shift();

            if (!node) {
                continue
            }
            if (node.val <= low || node.val >= high) return false

            if (node.right) {
                q.push([node.right, node.val, high]);
            }

            if (node.left) {
                q.push([node.left, low, node.val]);
            }
        }

        return true
    }
}
