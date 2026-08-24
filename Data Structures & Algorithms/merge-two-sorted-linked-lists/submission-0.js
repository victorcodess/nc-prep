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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) { // Time: O(n), Space: O(1)
        let head1 = list1, head2 = list2;
        let dummyHead = new ListNode(null);
        let root = dummyHead;

        while (head1 && head2) {
            if (head1.val <= head2.val) {
                root.next = head1;
                head1 = head1.next;
                root = root.next;
            } else {
                root.next = head2;
                head2 = head2.next;
                root = root.next;
            }
        }

        if (head1) {
            root.next = head1;
        } else if (head2) {
            root.next = head2;
        }

        return dummyHead.next
    }
}
