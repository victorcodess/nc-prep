class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) { // Time: O(n), Space: O(n)
        const stack = [];
        const result = new Array(temperatures.length).fill(0);

        for (let i = 0; i < temperatures.length; i++) {
            while (stack.length && stack[stack.length - 1][0] < temperatures[i]) {
                const [prevT, pIdx] = stack.pop();
                result[pIdx] = i - pIdx;
            }

            stack.push([temperatures[i], i]);
        }

        return result;
    }
}
