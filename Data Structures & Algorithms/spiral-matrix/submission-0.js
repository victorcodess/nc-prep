class Solution {
    /**
     * @param {number[][]} matrix
     * @return {number[]}
     */
    spiralOrder(matrix) { // Time: O(m * n), Space: O(1)
        const result = [];

        let top = 0;
        let bottom = matrix.length - 1;
        let left = 0;
        let right = matrix[0].length - 1;

        while (top <= bottom && left <= right) {
            // left to right
            for (let col = left; col <= right; col++) {
                result.push(matrix[top][col]);
            }

            top++;

            // top to bottom
            for (let row = top; row <= bottom; row++) {
                result.push(matrix[row][right]);
            }

            right--;

            // right to left
            if (top <= bottom) {
                for (let col = right; col >= left; col--) {
                    result.push(matrix[bottom][col]);
                }

                bottom--;
            }

            // bottom to top
            if (left <= right) {
                for (let row = bottom; row >= top; row--) {
                    result.push(matrix[row][left]);
                }

                left++;
            }
        }

        return result;
    }
}
