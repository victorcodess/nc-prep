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
     * @return {ListNode}
     */
    reverseList(head) { // Time: O(n), Space: O(1)
        if (head === null) return null;

        let root = head;
        let tail = null;

        while (root) {
            let next = root.next;
            root.next = tail;
            tail = root;
            root = next;
        }

        return tail;
    }
}
