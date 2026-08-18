class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) { // Time: O(n), Space: O(1)
        let i = 0;
        let j = heights.length - 1;
        let maxA = 0;

        while (i < j) {
            const area = (j - i) * Math.min(heights[i], heights[j]);
            maxA = Math.max(maxA, area);

            if (heights[j] < heights[i]) {
                j--;
            } else {
                i++;
            }
        }

        return maxA;
    }
}
