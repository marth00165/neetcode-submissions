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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    isSameTree(p, q) {
        let q1 = [p]
        let pointer = 0;
        let q2 = [q]

        while (pointer < q1.length) {
            let node1 = q1[pointer];
            let node2 = q2[pointer];
            pointer++;

            if (!node1 && node2) return false
            if (!node2 && node1) return false
            if (!node1 && !node2) continue

            if (node1.val !== node2?.val) return false
                q1.push(node1.left)
                q1.push(node1.right)
                q2.push(node2.left);
                q2.push(node2.right);
        }
        return true
    }
}
