class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) { // Time: O(n), Space: O(n)
        const prefixMax = new Array(height.length).fill(0);
        const postfixMax = new Array(height.length).fill(0);
        let preMaxH = 0;
        let postMaxH = 0;
        let waterCount = 0;

        for (let i = 1; i < height.length; i++) {
            preMaxH = Math.max(preMaxH, height[i - 1]);
            prefixMax[i] = preMaxH;
        }

        for (let i = height.length - 2; i >= 0; i--) {
            postMaxH = Math.max(postMaxH, height[i + 1]);
            postfixMax[i] = postMaxH;
        }

        for (let i = 0; i < height.length; i++) {
            const count = Math.min(prefixMax[i], postfixMax[i]) - height[i];
            if (count > 0) waterCount += count;
        }

        return waterCount;
    }
}
