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
     * @return {number}
     */
    maxDepth(root) {
        let maxDepth = 0;

        if (!root) return 0;

        function _dfs(node, depth = 0) {
            depth = depth + 1;
            maxDepth = Math.max(depth, maxDepth)
            if (node.right) {
                _dfs(node.right, depth)
            }

            if (node.left) {
                _dfs(node.left, depth)
            }
        }

        _dfs(root);

        return maxDepth;
    }
}
