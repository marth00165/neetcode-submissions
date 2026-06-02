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
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        let curr = head;



        let length = 0;


        while (curr) {
            curr = curr.next;
            length ++;
        }


        const dummy = new ListNode(null, head); // sentinel simplifies head removal
        let prev = dummy;
        curr = head;


        while (curr) {
            if (length === n) {
                prev.next = curr.next;
                break;    
            }
            prev = curr;
            curr = curr.next;
            length--
        }
        return dummy.next;
    }
}
