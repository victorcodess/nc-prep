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
     * @return {number[]}
     */
    rightSideView(root) { // Time: O(n), Space: O(n)
        if (!root) return [];

        const result = [];
        const queue = [[root, 0]];
        let head = 0;

        while (head < queue.length) {
            const [curr, level] = queue[head++];

            if (head >= queue.length || level !== queue[head][1]) result.push(curr.val);

            if (curr.left) queue.push([curr.left, level + 1]);
            if (curr.right) queue.push([curr.right, level + 1]);
        }

        return result;
    }
}
