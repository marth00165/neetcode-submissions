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
        let answer = []

        if (!root) return answer;


        const q = [];
        q.push(root);


        while (q.length > 0) {
            let level = []

            for (let i = q.length; i >0; i--) {
                let node = q.shift();
                if (node !== null) {
                    level.push(node.val)
                    q.push(node.left)
                    q.push(node.right)
                }
            }
            if (level.length > 0) {
                answer.push(level);
            }
        }

        return answer
    }
}
