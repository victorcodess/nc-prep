class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) { // Time: O(n), Space: O(n)
        let maxA = 0;
        const stack = [];

        for (let i = 0; i < heights.length; i++) {
            let start = i;

            while (stack.length && stack[stack.length - 1][1] > heights[i]) {
                const [prevS, prevH] = stack.pop();
                maxA = Math.max(maxA, prevH * (i - prevS));
                start = prevS;
            }

            stack.push([start, heights[i]]);
        }

        for (let [currS, currH] of stack) {
            maxA = Math.max(maxA, currH * (heights.length - currS));
        }

        return maxA;
    }
}
