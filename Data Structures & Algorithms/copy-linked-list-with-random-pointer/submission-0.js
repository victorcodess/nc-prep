// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) { // Time: O(n), Space: O(n)
        const oldToCopy = new Map();
        oldToCopy.set(null, null);

        let curr = head;
        while (curr) {
            const copy = new Node(curr.val);
            oldToCopy.set(curr, copy);
            curr = curr.next;
        }

        curr = head;
        while (curr) {
            const copy = oldToCopy.get(curr);
            copy.next = oldToCopy.get(curr.next);
            copy.random = oldToCopy.get(curr.random);
            curr = curr.next;
        }

        return oldToCopy.get(head);
    }
}
