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

        let stack = [[root, 1]];


        while (stack.length > 0) {
            let [node, depth] = stack.pop();

            maxDepth = Math.max(maxDepth, depth);

            if (node.left) {
                stack.push([node.left, depth + 1]);
            }

            if (node.right) {
                stack.push([node.right, depth + 1])
            }
        }

        return maxDepth
    }
}
