/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {boolean}
     */
    hasCycle(head) {
        let nodeSet = new Set();

        while(head) {
            let node = head;

            if (nodeSet.has(node)) {
                return true
            }

            nodeSet.add(node);
            head = node.next
        }

        return false
    }
}
