class Solution {
    /**
     * @param {number} n
     * @return {string[][]}
     */
    solveNQueens(n) { // Time: O(n!), Space: O(n^2)
        const cols = new Set();
        const posDiags = new Set();
        const negDiags = new Set();

        const board = new Array(n).fill(null).map(() => new Array(n).fill("."));
        const result = [];


        function backtrack(row) {
            if (row === n) {
                result.push(board.map(ro => ro.join("")));
                return;
            }

            for (let col = 0; col < n; col++) {
                if (cols.has(col) || posDiags.has(row + col) || negDiags.has(row - col)) {
                    continue;
                }

                cols.add(col);
                posDiags.add(row + col);
                negDiags.add(row - col);
                board[row][col] = "Q";

                backtrack(row + 1);

                cols.delete(col);
                posDiags.delete(row + col);
                negDiags.delete(row - col);
                board[row][col] = ".";
            }

            return;
        }


        backtrack(0);
        return result;
    }
}
