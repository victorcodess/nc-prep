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
     * @return {void}
     */
    reorderList(head) { // Time: O(n), Space: O(1)
        // find middle of list
        let slow = head, fast = head.next;
        while (fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
        }

        // reverse second half
        let second = slow.next;
        slow.next = null;
        let prev = null;
        while (second) {
            let next = second.next;
            second.next = prev;
            prev = second;
            second = next;
        }

        // merge both halves
        let first = head;
        let last = prev;
        while (first && last) {
            let next1 = first.next;
            let next2 = last.next;

            first.next = last;
            last.next = next1;

            first = next1;
            last = next2;
        }

        return head;
    }
}
