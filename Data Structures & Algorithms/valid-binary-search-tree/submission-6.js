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
    isValidBST(root) { // Time: O(n), Space: O(n)
        if (!root) return true;

        const values = [];
        this.findInOrder(root, values);

        for (let i = 0; i < values.length - 1; i++) {
            if (values[i + 1] <= values[i]) return false;
        }

        return true;
    }

    findInOrder(root, values) {
        if (!root) return;

        this.findInOrder(root.left, values);
        values.push(root.val);
        this.findInOrder(root.right, values);
    }
}
