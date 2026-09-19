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
     * @param {number} k
     * @return {ListNode}
     */
    reverseKGroup(head, k) { // Time: O(n), Space: O(1)
        const dummy = new ListNode(null, head);
        let groupPrev = dummy;

        while (true) {
            // find kth node
            let kth = groupPrev;

            for (let i = 0; i < k; i++) {
                kth = kth.next;

                if (!kth) return dummy.next;
            }

            let groupNext = kth.next;

            // reverse group 
            let prev = groupNext;
            let curr = groupPrev.next;

            while (curr !== groupNext) {
                const next = curr.next;
                curr.next = prev;
                prev = curr;
                curr = next;
            }

            // connect reversed group to dummy
            const oldStart = groupPrev.next;
            groupPrev.next = kth;
            groupPrev = oldStart;
        }
    }
}
