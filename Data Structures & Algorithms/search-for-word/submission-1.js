class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) { // Time: O(n * m), Space: O(n * m)
        const visited = new Set();

        for (let r = 0; r < board.length; r++) {
            for (let c = 0; c < board[0].length; c++) {
                if (board[r][c] === word[0]) {
                    if (this.findWord(board, word, r, c, 0, visited)) {
                        return true;
                    }
                }
            }
        }

        return false;
    }

    findWord(board, word, r, c, char, visited) {
        if (0 > r || r >= board.length || 0 > c || c >= board[0].length) return false;
        if (char >= word.length) return false;
        if (board[r][c] !== word[char]) return false;

        const pos = r + "," + c;
        if (visited.has(pos)) return false;
        visited.add(pos);

        if (char === (word.length - 1)) return true;
        
        const deltas = [
            [1, 0],
            [-1, 0],
            [0, -1],
            [0, 1],
        ];

        for (let [dR, dC] of deltas) {
            const newR = r + dR;
            const newC = c + dC;

            if (this.findWord(board, word, newR, newC, char + 1, visited)) {
                return true;
            }
        }

        visited.delete(pos);
        return false;
    }
}
