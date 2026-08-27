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
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) { // Time: O(n), Space: O(n)
        if (!root) return null;

        this.result = null;
        this.k = k;
        this.findInOrder(root);

        return this.result;
    }

    findInOrder(root) {
        if (!root || this.result) return;

        this.findInOrder(root.left);

        this.k--;
        if (this.k === 0) {
            this.result = root.val;

            return;
        }

        this.findInOrder(root.right);
    }
}
