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
    goodNodes(root) { // Time: O(n), Space: O(n)
        if (!root) return 0;

        const stack = [[root, -Infinity]];
        let count = 0;

        while (stack.length) {
            const [curr, maxVal] = stack.pop();

            if (maxVal <= curr.val) count++;

            let newMax = Math.max(maxVal, curr.val);

            if (curr.right) stack.push([curr.right, newMax]);
            if (curr.left) stack.push([curr.left, newMax]);
        }

        return count;
    }
}
