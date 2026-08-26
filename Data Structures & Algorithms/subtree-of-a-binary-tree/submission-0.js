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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) { // Time: O(r + s), Space: O(r + s)
        if (!root && !subRoot) return true;
        if (!root || !subRoot) return false;

        const stack = [root];

        while (stack.length) {
            const curr = stack.pop()

            if (curr.val === subRoot.val) {
                if (this.isSameTree(curr, subRoot)) return true;
            }

            if (curr.right) stack.push(curr.right);
            if (curr.left) stack.push(curr.left);
        }

        return false;
    }

    isSameTree(curr, subRoot) {
        if (!curr && !subRoot) return true;
        if (!curr || !subRoot) return false;

        if (curr.val !== subRoot.val) return false;

        return this.isSameTree(curr.left, subRoot.left) && this.isSameTree(curr.right, subRoot.right);
    }
}
