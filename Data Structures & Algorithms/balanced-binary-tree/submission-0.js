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
     * @return {boolean}
     */
    isBalanced(root) { // Time: O(n), Space: O(n)
        if (!root) return true;

        return this.dfs(root) !== Infinity;
    }

    dfs(root) {
        if (!root) return 0;

        const leftH = this.dfs(root.left);
        const rightH = this.dfs(root.right);

        if (Math.abs(leftH - rightH) > 1) return Infinity;

        return 1 + Math.max(leftH, rightH);
    }
}
