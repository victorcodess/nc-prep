class Solution {
    /**
     * @param {number[][]} matrix
     * @return {void}
     */
    rotate(matrix) { // Time: O((n * m)^2), Space: O(1)
        for (let r = 0; r < matrix.length; r++) {
            for (let c = r + 1; c < matrix[0].length; c++) {
                [matrix[r][c], matrix[c][r]] = [matrix[c][r], matrix[r][c]];
            }
        }

        for (let row of matrix) {
            row.reverse();
        }
    }
}
