class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) { // Time: O(log(n * m)), Space: O(1)
        let rowL = 0, rowR = matrix.length - 1;
        let colL = 0, colR = matrix[0].length - 1;

        while (rowL <= rowR) {
            const midRow = Math.floor((rowL + rowR) / 2);

            if (matrix[midRow][0] > target) {
                rowR = midRow - 1;
            } else if (matrix[midRow][matrix[midRow].length - 1] < target) {
                rowL = midRow + 1;
            } else {

                while (colL <= colR) {
                    const midCol = Math.floor((colL + colR) / 2);

                    if (matrix[midRow][midCol] < target) {
                        colL = midCol + 1;
                    } else if (matrix[midRow][midCol] > target) {
                        colR = midCol - 1;
                    } else {
                        return true;
                    }
                }
                
                return false;
            }
        }

        return false;
    }
}
