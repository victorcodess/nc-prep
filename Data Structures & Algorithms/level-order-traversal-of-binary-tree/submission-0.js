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
     * @return {number[][]}
     */
    levelOrder(root) { // Time: O(n), Space: O(n)
        if (!root) return [];

        const levels = [];
        this.findLevels(root, levels, 0);

        return levels;
    }

    findLevels(root, levels, lev) {
        if (!root) return;

        if (!levels[lev]) levels[lev] = [];
        levels[lev].push(root.val);

        this.findLevels(root.left, levels, lev + 1);
        this.findLevels(root.right, levels, lev + 1);
    }
}
