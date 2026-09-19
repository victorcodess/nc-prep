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

class Codec {
    /**
     * Encodes a tree to a single string.
     *
     * @param {TreeNode} root
     * @return {string}
     */
    serialize(root) {
        const preorder = [];

        function dfs(root) {
            if (!root) {
                preorder.push("N");
                return;
            }

            preorder.push(root.val);
            dfs(root.left);
            dfs(root.right);
        }

        dfs(root);

        return preorder.join(",");
    }

    /**
     * Decodes your encoded data to tree.
     *
     * @param {string} data
     * @return {TreeNode}
     */
    deserialize(data) {
        const tree = data.split(",");
        let i = 0;

        function dfs() {
            if (tree[i] === "N") {
                i++;
                return null;
            }

            const node = new TreeNode(Number(tree[i]));
            i++;

            node.left = dfs();
            node.right = dfs();

            return node;
        }

        return dfs();
    }
}
