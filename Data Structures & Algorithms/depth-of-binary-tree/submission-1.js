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

        const stack = [[root, 1]];
        let maxDep = 1;

        while (stack.length) {
            const [curr, depth] = stack.pop();

            maxDep = Math.max(depth, maxDep)

            if (curr.right) stack.push([curr.right, depth + 1]);
            if (curr.left) stack.push([curr.left, depth + 1]);
        }

        return maxDep;
    }
}
