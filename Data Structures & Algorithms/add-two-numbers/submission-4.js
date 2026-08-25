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
    addTwoNumbers(l1, l2, carry = false) { // Time: O(n + m), Space: O(n + m) 
        if (l1 === null && l2 === null && !carry) return null;
        
        const val1 = l1?.val ?? 0;
        const val2 = l2?.val ?? 0;

        const currSum = val1 + val2 + Number(carry);
        carry = Boolean(Math.floor(currSum / 10));

        let root = new ListNode(currSum % 10);
        root.next = this.addTwoNumbers(l1?.next ?? null, l2?.next ?? null, carry);

        return root;
    }
}
