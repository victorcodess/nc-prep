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

        const values = [];
        this.findInOrder(root, values);

        return values[k - 1];
    }

    findInOrder(root, values) {
        if (!root) return;

        this.findInOrder(root.left, values);
        values.push(root.val);
        this.findInOrder(root.right, values);
    }
}
