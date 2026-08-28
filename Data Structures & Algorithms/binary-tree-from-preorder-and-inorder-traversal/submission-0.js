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
    buildTree(preorder, inorder, inStart = 0, inEnd = inorder.length - 1, preStart = 0, preEnd = preorder.length - 1) { // Time: O(n * m), Space: O(n)
        if (preStart > preEnd || inStart > inEnd) return null;

        const value = preorder[preStart];
        const mid = inorder.indexOf(value);

        const root = new TreeNode(value);

        const leftInStart = inStart;
        const leftInEnd = mid - 1;
        const leftPreStart = preStart + 1;
        const leftPreEnd = leftPreStart + (leftInEnd - leftInStart);

        const rightInStart = mid + 1;
        const rightInEnd = inEnd;
        const rightPreStart = leftPreEnd + 1;
        const rightPreEnd = preEnd;

        root.left = this.buildTree(preorder, inorder, leftInStart, leftInEnd, leftPreStart, leftPreEnd);
        root.right = this.buildTree(preorder, inorder, rightInStart, rightInEnd, rightPreStart, rightPreEnd);

        return root;
    }
}
