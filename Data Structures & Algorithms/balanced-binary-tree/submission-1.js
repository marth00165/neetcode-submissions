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
    isBalanced(root) {

        if (!root) return true

        let height = new Map();


        let stack = [[root, false]];

        while (stack.length) {
            let [node, visited] = stack.pop();

            if (!node) continue;

            if (!visited) {
                stack.push([node, true])
                if (node.left) stack.push([node.left, false]);
                if (node.right) stack.push([node.right, false]);
            } else {
                let lh = height.get(node.left) ?? 0;
                let rh = height.get(node.right) ?? 0;
                if (Math.abs(lh - rh) > 1) return false;
                height.set(node, 1 + Math.max(lh, rh));
            } 
        }
        return true
    }
}
