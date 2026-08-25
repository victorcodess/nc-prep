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
    addTwoNumbers(l1, l2) {
        // when lists same length add
        // keep carry var
        // use 2 pointers and dummy head

        let pointer1 = l1, pointer2 = l2;
        let dummyHead = new ListNode(null);
        let root = dummyHead;
        let carry = false;

        while (pointer1 && pointer2) {
            const currSum = pointer1.val + pointer2.val + Number(carry);

            root.next = new ListNode(currSum % 10);
            root = root.next;

            carry = currSum > 9;

            pointer1 = pointer1.next;
            pointer2 = pointer2.next;
        }

        while (pointer1) {
            const sum = pointer1.val + Number(carry);

            root.next = new ListNode(sum % 10);
            root = root.next;
            carry = sum > 9;
            
            pointer1 = pointer1.next;
        }

        while (pointer2) {
            const sum = pointer2.val + Number(carry);

            root.next = new ListNode(sum % 10);
            root = root.next;
            carry = sum > 9;

            pointer2 = pointer2.next;
        }

        if (!pointer1 && !pointer2 && carry) root.next = new ListNode(1);


        return dummyHead.next;
    }
}
