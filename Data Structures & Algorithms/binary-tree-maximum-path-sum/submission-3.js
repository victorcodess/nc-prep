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

    //           1
    //         /   \
    //       -2     -3
    //      /  \    /
    //     1    3  -2
    //    /
    //  -1

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    maxPathSum(root) { // Time: O(n), Space: O(n)
        function findMax(root, memo) {
            if (!root) return -Infinity;
            if (memo.has(root)) return memo.get(root);

            const leftMax = findMax(root.left, memo);
            const rightMax = findMax(root.right, memo);

            const currMax = Math.max(root.val, root.val + leftMax, root.val + rightMax);

            maxPath = Math.max(maxPath, currMax, root.val + leftMax + rightMax);
            
            memo.set(root, currMax);
            return currMax;
        }

        const memo = new Map();
        let maxPath = -Infinity;
        findMax(root, memo);

        return maxPath;
    }
}
