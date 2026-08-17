class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) { // Time: O(9 * 9), Space: O(9 * 9)
        const rows = new Map();
        const cols = new Map();
        const subs = new Map();

        for (let r = 0; r < 9; r++) {
            for (let c = 0; c < 9; c++) {
                const cell = board[r][c];
                const subCell = Math.floor(r / 3) + "," + Math.floor(c / 3)

                if (cell === ".") continue;

                if (!rows.has(r)) rows.set(r, new Set());
                if (!cols.has(c)) cols.set(c, new Set());
                if (!subs.has(subCell)) subs.set(subCell, new Set());

                if (rows.get(r).has(cell)) return false;
                if (cols.get(c).has(cell)) return false;
                if (subs.get(subCell).has(cell)) return false;

                rows.get(r).add(cell);
                cols.get(c).add(cell);
                subs.get(subCell).add(cell);
            }
        }

        return true;
    }
}
