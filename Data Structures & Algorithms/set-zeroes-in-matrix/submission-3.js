class Solution {
    /**
     * @param {number[][]} matrix
     * @return {void}
     */
    setZeroes(matrix) { // Time: O(m * n), Space: O(1)
        const n = matrix.length;
        const m = matrix[0].length;
        let row0 = false;
        let col0 = false;

        // check for cells in first row with 0s
        for (let col = 0; col < m; col++) {
            if (matrix[0][col] === 0) row0 = true;
        }

        // check for cells in first col with 0s
        for (let row = 0; row < n; row++) {
            if (matrix[row][0] === 0) col0 = true;
        }

        // check for inner cells with 0s and set first row/col cell to 0
        for (let row = 1; row < n; row++) {
            for (let col = 1; col < m; col++) {
                if (matrix[row][col] === 0) {
                    matrix[0][col] = 0;
                    matrix[row][0] = 0;
                }
            }
        }

        // check for inner cells with first row/col cells at 0, and set to 0
        for (let row = 1; row < n; row++) {
            for (let col = 1; col < m; col++) {
                if (matrix[row][0] === 0 || matrix[0][col] === 0) {
                    matrix[row][col] = 0;
                }
            }
        }

        // if 0 was in first row, set first row cells to 0
        if (row0) {
            for (let col = 0; col < m; col++) {
                matrix[0][col] = 0;
            }
        }

        // if 0 was in first col, set first col cells to 0
        if (col0) {
            for (let row = 0; row < n; row++) {
                matrix[row][0] = 0;
            }
        }
    }
}
