class Solution {
    /**
     * @param {number[][]} matrix
     * @return {void}
     */
    setZeroes(matrix) { // Time: O(m * n), Space: O(m + n)
        const rows = new Set();
        const cols = new Set();

        for (let r = 0; r < matrix.length; r++) {
            for (let c = 0; c < matrix[0].length; c++) {
                if (matrix[r][c] === 0) {
                    rows.add(r);
                    cols.add(c);
                }
            }
        }

        for (let r = 0; r < matrix.length; r++) {
            for (let c = 0; c < matrix[0].length; c++) {
                if (rows.has(r) || cols.has(c)) {
                    matrix[r][c] = 0;
                }
            }
        }
    }
}
