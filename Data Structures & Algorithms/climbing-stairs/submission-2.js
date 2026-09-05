class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n, memo = new Map()) { // Time: O(2^n), Space: O(2^n)
        if (memo.has(n)) return memo.get(n);
        if (n === 0) return 1;
        if (n < 0) return 0;

        const withOne = this.climbStairs(n - 1, memo);
        const withTwo = this.climbStairs(n - 2, memo);

        memo.set(n, withOne + withTwo)
        return memo.get(n);
    }
}
