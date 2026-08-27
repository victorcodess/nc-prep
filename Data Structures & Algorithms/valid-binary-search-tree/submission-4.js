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
    isValidBST(root, lowerB = -Infinity, upperB = Infinity) { // Time: O(n), Space: O(n) 
        if (!root) return true;

        if (root.val <= lowerB || root.val >= upperB) return false;

        const leftValid = this.isValidBST(root.left, lowerB, root.val);
        const rightValid = this.isValidBST(root.right, root.val, upperB);

        return leftValid && rightValid;
    }
}
