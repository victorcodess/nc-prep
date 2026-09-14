class Solution {
    /**
     * @param {number} n - a positive integer
     * @return {number}
     */
    hammingWeight(n) { // Time: O(k), Space: O(k)
        let result = 0;

        while (n !== 0) {
            n &= n - 1;
            result++;
        }

        return result;
    }
}
