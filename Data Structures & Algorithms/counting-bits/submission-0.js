class Solution {
    /**
     * @param {number} n
     * @return {number[]}
     */
    countBits(n) { // Time: O(n * k), Space: O(n)
        const output = [];

        function count(num) {
            let result = 0;

            while (num !== 0) {
                num &= num - 1;
                result++;
            }

            return result;
        }

        for (let i = 0; i <= n; i++) {
            output.push(count(i));
        }

        return output;
    }
}
