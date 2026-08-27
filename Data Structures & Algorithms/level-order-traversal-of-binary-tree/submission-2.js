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

        const stack = [[root, 0]];

        const result = [];

        while (stack.length) {
            const [curr, level] = stack.pop();

            if (!result[level]) result[level] = [];
            result[level].push(curr.val);

            if (curr.right) stack.push([curr.right, level + 1]);
            if (curr.left) stack.push([curr.left, level + 1]);
        }

        return result;
    }
}
