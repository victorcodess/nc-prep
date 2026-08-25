// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    constructor() {
        this.oldToCopy = new Map();
    }
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) { // Time: O(n), Space: O(n)
        if (head === null) return null;
        if (this.oldToCopy.has(head)) return this.oldToCopy.get(head);

        const copy = new Node(head.val);
        this.oldToCopy.set(head, copy);

        copy.next = this.copyRandomList(head.next);
        copy.random = this.oldToCopy.get(head.random) || null;

        return copy;
    }
}
