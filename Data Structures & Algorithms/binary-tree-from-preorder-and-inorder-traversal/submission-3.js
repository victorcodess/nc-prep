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
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */
    buildTree(preorder, inorder) { // Time: O(n), Space: O(n)
        let preStart = 0;
        const positions = new Map();
        inorder.forEach((val, i) => positions.set(val, i));

        function dfs(inStart, inEnd) {
            if (inStart > inEnd) return null;

            const value = preorder[preStart++];
            const root = new TreeNode(value);
            const mid = positions.get(value);

            root.left = dfs(inStart, mid - 1);
            root.right = dfs(mid + 1, inEnd);

            return root;
        }

        return dfs(0, inorder.length - 1);
    }
}
