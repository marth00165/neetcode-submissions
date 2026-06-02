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
    diameterOfBinaryTree(root) {

        if (!root) return 0;

        let stack = [[root, false]];
        let heightMap = new Map();

        let maxWidth = 0


        while (stack.length) {
            let [node, visited] = stack.pop();

            if (!node) continue;
            if (!visited) {
                stack.push([node, true])

                if (node.left) {
                    stack.push([node.left, false])
                }
                if (node.right) {
                    stack.push([node.right, false])
                }
             } else {
                const lh = heightMap.get(node.left) ?? 0;
                const rh = heightMap.get(node.right) ?? 0;

                maxWidth = Math.max(maxWidth, lh + rh);
                heightMap.set(node, 1 + Math.max(lh, rh));
             }

        }

        return maxWidth
    }
}
