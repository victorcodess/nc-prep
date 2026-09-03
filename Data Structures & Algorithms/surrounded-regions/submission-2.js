class Solution {
    /**
     * @param {character[][]} board
     * @return {void} Do not return anything, modify board in-place instead.
     */
    solve(board) { // Time: O(n * m), Space: O(n * m)
        const row = board.length, col = board[0].length;

        for (let r = 0; r < row; r++) {
            for (let c = 0; c < col; c++) {
                if (r === 0 || r === row - 1 || c === 0 || c === col - 1) {
                    if (board[r][c] === "O") {
                        this.findCS(board, r, c);
                    }
                }
            }
        }

        for (let r = 0; r < row; r++) {
            for (let c = 0; c < col; c++) {
                if (board[r][c] === "O") {
                    board[r][c] = "X";
                }

                if (board[r][c] === "T") {
                    board[r][c] = "O";
                }
            }
        }

    }

    findCS(board, r, c) {
        if (r < 0 || r >= board.length || c < 0 || c >= board[0].length) return;
        if (board[r][c] !== "O") return;

        board[r][c] = "T";

        this.findCS(board, r + 1, c);
        this.findCS(board, r - 1, c);
        this.findCS(board, r, c + 1);
        this.findCS(board, r, c - 1);
    }

}
