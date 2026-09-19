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
    reverseKGroup(head, k) { // Time: O(n), Space: O(n)
        const list = [];
        let node = head;

        while (node) {
            list.push(node.val);
            node = node.next;
        }

        const reversedList = list.slice(0);

        for (let i = 0; i < list.length; i += k) {
            let end = i + k - 1;

            if (end >= list.length) break;

            for (let j = i; j < i + k; j++) {
                reversedList[end--] = list[j];
            }
        }

        let dummy = new ListNode(null);
        let root = dummy;
        let curr = 0;


        while (curr < reversedList.length) {
            root.next = new ListNode(reversedList[curr++]);
            root = root.next;
        }

        return dummy.next;
    }
}
