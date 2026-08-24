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
    hasCycle(head) { // Time: O(n), Space: O(1)
        if (head === null) return false;

        let slow = head, fast = head;

        while (fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;

            if (fast === slow) return true;
        }

        return false; 
    }
}
