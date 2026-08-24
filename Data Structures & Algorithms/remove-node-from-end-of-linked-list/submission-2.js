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
    removeNthFromEnd(head, n) { // Time: O(n), Space: O(1)
        // get fast pointer to pos n from start
        let dummyHead = new ListNode(null, head);
        let slow = dummyHead;
        let fast = head;

        let count = n;
        while (count !== 0) {
            fast = fast.next;
            count--;
        }

        // get slow pointer to before pos to be removed
        while (fast) {
            slow = slow.next;
            fast = fast.next;
        }

        // remove node
        let after = slow.next;
        slow.next = after.next;
        after.next = null;

        // return root
        return dummyHead.next;
    }
}
