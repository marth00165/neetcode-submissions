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
     * @return {number[][]}
     */
levelOrder(root) {
    if (!root) return [];
    let result = [];
    let q = [root];

    while (q.length > 0) {
        let level = [];
        let next = [];

        for (let node of q) {
            level.push(node.val);
            if (node.left) next.push(node.left);
            if (node.right) next.push(node.right);
        }

        result.push(level);
        q = next;
    }

    return result;
}


}
