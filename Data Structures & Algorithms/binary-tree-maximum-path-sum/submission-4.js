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
    maxPathSum(root) { // Time: O(n), Space: O(h)
        function findMax(root) {
            if (!root) return -Infinity;

            const leftMax = findMax(root.left);
            const rightMax = findMax(root.right);

            const currMax = Math.max(root.val, root.val + leftMax, root.val + rightMax);

            maxPath = Math.max(maxPath, currMax, root.val + leftMax + rightMax);
            
            return currMax;
        }

        let maxPath = -Infinity;
        findMax(root);

        return maxPath;
    }
}
