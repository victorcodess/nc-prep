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
    diameterOfBinaryTree(root) { // Time: O(n), Space: O(n)
        this.maxDia = 0;
        this.dfs(root);

        return this.maxDia;
    }

    dfs(root) {
        if (root === null) return 0;

        let maxL = this.dfs(root.left);
        let maxR = this.dfs(root.right);

        this.maxDia = Math.max(this.maxDia, maxL + maxR);
        return 1 + Math.max(maxL, maxR); 
    }
}
