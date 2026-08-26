/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    maxDepth(root) { // Time: O(n), Space: O(n)
        if (!root) return 0;

        const queue = [[root, 1]];
        let head = 0;
        let maxDep = 1;

        while (head < queue.length) {
            const [curr, depth] = queue[head++];

            maxDep = Math.max(depth, maxDep);

            if (curr.left) queue.push([curr.left, depth + 1]);
            if (curr.right) queue.push([curr.right, depth + 1]);
        }

        return maxDep;
    }
}
