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
    hasCycle(head) { // Time: O(n), Space: O(n)
        const seen = new Map();

        let current = head;

        while (current) {
            if (seen.has(current.val)) {
                if (current.next) {
                    return current.next.val === seen.get(current.val);
                } else {
                    current.next === seen.get(current.val)
                }
            }

            seen.set(current.val, current.next ? current.next.val : null);
            current = current.next;
        }

        return false;
    }
}
