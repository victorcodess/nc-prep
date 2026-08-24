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
        // reverse list
        let prev = null;
        let current = head;
        while (current) {
            const next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }

        // remove node
        let start = prev;
        let before = null;
        let count = 1;

        while (count !== n) {
            before = start;
            start = start.next;
            count++;
        }

        const after = start.next;
        if (count === 1) {
            prev = after;
        } else {
            before.next = after;
            start.next = null;
        }

        

        // reverse list again
        let prev2 = null;
        let current2 = prev;
        while (current2) {
            const next2 = current2.next;
            current2.next = prev2;
            prev2 = current2;
            current2 = next2;
        }

        let root = prev2
        return root;
    }
}
