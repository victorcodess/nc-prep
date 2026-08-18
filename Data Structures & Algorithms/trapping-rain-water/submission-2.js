class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) { // Time: O(n), Space: O(1)
        let l = 0;
        let r = height.length - 1;
        let maxL = 0;
        let maxR = 0;
        let waterCount = 0;

        while (l < r) {
            if (height[l] <= height[r]) {
                if (height[l] >= maxL) {
                    maxL = height[l];
                } else {
                    waterCount += maxL - height[l];
                }

                l++;
            } else {
                if (height[r] >= maxR) {
                    maxR = height[r];
                } else {
                    waterCount += maxR - height[r];
                }

                r--;
            }
        }

        return waterCount;
    }
}
