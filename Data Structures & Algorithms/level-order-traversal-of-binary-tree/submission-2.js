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
        if (!root) return []
        let q = [root]
        let answer = []

        let idx = 0;

        while (idx < q.length) {
            let level = q.length - idx;
            let tempArr = []
            for (let i = 0; i < level; i++) {
                let node = q[idx];
                idx++;
                if (node) {
                    tempArr.push(node.val)
                    if (node.left) {
                        q.push(node.left)
                    }
                    if (node.right) {
                        q.push(node.right)
                    }  
                }
            }
            answer.push(tempArr)
        }
        return answer
    }
}
