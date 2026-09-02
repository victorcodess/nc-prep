/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */

class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */
    cloneGraph(node) { // Time: O(v + e), Space: O(v + e)
        if (!node) return null;

        const oldToNew = new Map();

        function clone(node) {
            if (oldToNew.has(node)) return oldToNew.get(node);

            const copy = new Node(node.val);
            oldToNew.set(node, copy);
            

            for (let neigh of node.neighbors) {
                copy.neighbors.push(clone(neigh));
            }

            return copy;
        }

        return clone(node);
    }
}
