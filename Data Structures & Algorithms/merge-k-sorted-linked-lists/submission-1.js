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
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists) { // Time: O(nlog(k)), Space: O(k)
        if (!lists.length) return null;

        while (lists.length > 1) {
            const mergedLists = [];

            for (let i = 0; i < lists.length; i += 2) {
                const l1 = lists[i];
                const l2 = (i + 1) < lists.length ? lists[i + 1] : null;

                const merged = this.merge(l1, l2);
                mergedLists.push(merged);
            }

            lists = mergedLists;
        }

        return lists[0];
    }

    merge(root1, root2) {
        if (!root1) return root2;
        if (!root2) return root1;

        const dummyHead = new ListNode(null);
        let root = dummyHead;

        let n1 = root1;
        let n2 = root2;

        while (n1 && n2) {
            const v1 = n1.val;
            const v2 = n2.val;

            if (v1 <= v2) {
                root.next = new ListNode(v1);
                root = root.next;
                n1 = n1.next;
            } else {
                root.next = new ListNode(v2);
                root = root.next;
                n2 = n2.next;
            }
        }

        root.next = n1 ?? n2;

        return dummyHead.next;
    }
}
