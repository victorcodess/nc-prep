class TrieNode {
    constructor() {
        this.children = new Map();
        this.endOfWord = false;
    }

    add(word) {
        let node = this;

        for (let ch of word) {
            let curr = node.children;
            if (!curr.has(ch)) {
                curr.set(ch, new TrieNode());
            }

            node = curr.get(ch);
        }

        node.endOfWord = true;
    }
}

class Solution {
    /**
     * @param {character[][]} board
     * @param {string[]} words
     * @return {string[]}
     */
    findWords(board, words) { // Time: O(m * n * (3^t)), Space: O(s)
        const trie = new TrieNode();

        for (let word of words) {
            trie.add(word);
        }

        const N = board.length;
        const M = board[0].length;

        const result = new Set();
        const visiting = new Set();

        function dfs(r, c, trie, word) {
            if (0 > r || r >= N || 0 > c || c >= M) return;
            if (visiting.has(`${r},${c}`)) return;
            if (!trie.children.has(board[r][c])) return;

            visiting.add(`${r},${c}`);
            const ch = board[r][c];
            trie = trie.children.get(ch);
            word += ch;

            if (trie.endOfWord) {
                result.add(word);
            }

            const deltas = [
                [0, 1],
                [0, -1],
                [1, 0],
                [-1, 0],
            ];

            for (let [dr, dc] of deltas) {
                dfs(r + dr, c + dc, trie, word);
            }

            visiting.delete(`${r},${c}`);
        }


        for (let r = 0; r < N; r++) {
            for (let c = 0; c < M; c++) {
                dfs(r, c, trie, "");
            }
        }

        return Array.from(result);
    }
}
