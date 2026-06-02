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
     * @return {TreeNode}
     */
    invertTree(root) {
        let queue = [root];

        if (!root) {
            return root
        }


        while (queue.length > 0) {
            let node = queue.pop();

            let tempLeft = node.left;
            let tempRight = node.right;

            node.left = tempRight;
            node.right = tempLeft;


            if (node.left) {
                queue.push(node.left)
            }

            if (node.right) {
                queue.push(node.right)
            }
        }

        return root
    }
}
