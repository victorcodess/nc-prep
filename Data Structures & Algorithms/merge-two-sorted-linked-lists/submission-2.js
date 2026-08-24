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
    mergeTwoLists(list1, list2) {
        if (list1 === null) return list2;
        if (list2 === null) return list1;

        let dummyHead = new ListNode(null);
        let root = dummyHead;

        if (list1.val <= list2.val) {
            root = list1;
            root.next = this.mergeTwoLists(list1.next, list2);
        } else {
            root = list2;
            root.next = this.mergeTwoLists(list1, list2.next);
        }

        return root;
    }
}
