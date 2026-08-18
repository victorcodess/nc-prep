class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) { // Time: O(n), Space: O(1)
        if (!height.length) return 0;

        let l = 0;
        let r = height.length - 1;
        let maxL = height[l];
        let maxR = height[r];
        let waterCount = 0;

        while (l < r) {
            if (maxL < maxR) {
                l++;
                maxL = Math.max(maxL, height[l]);
                waterCount += maxL - height[l];
            } else {
                r--;
                maxR = Math.max(maxR, height[r]);
                waterCount += maxR - height[r];
            }
        }

        return waterCount;
    }
}
