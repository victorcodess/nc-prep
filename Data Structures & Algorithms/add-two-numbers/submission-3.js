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
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) { // Time: O(n + m), Space: O(1) 
        let pointer1 = l1, pointer2 = l2;

        let dummyHead = new ListNode(null);
        let root = dummyHead;

        let carry = false;

        while (pointer1 || pointer2 || carry) {
            const val1 = pointer1?.val ?? 0;
            const val2 = pointer2?.val ?? 0;

            const currSum = val1 + val2 + Number(carry);

            root.next = new ListNode(currSum % 10);
            root = root.next;

            carry = Boolean(Math.floor(currSum / 10));

            if (pointer1) pointer1 = pointer1.next;
            if (pointer2) pointer2 = pointer2.next;
        }

        return dummyHead.next;
    }
}
