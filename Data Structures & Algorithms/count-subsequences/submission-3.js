class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {number}
     */
    // xxy xy
    numDistinct(s, t, i = 0, j = 0, memo = new Map()) { // Time: O(n * m), Space: O(n * m)
        if (i >= s.length && j < t.length) return 0;
        if (t.length - j > s.length - i) return 0;
        if (j >= t.length) return 1;

        const key = i + "," + j;
        if (memo.has(key)) return memo.get(key);

        const skip = this.numDistinct(s, t, i + 1, j, memo);

        if (s[i] === t[j]) {
            const take = this.numDistinct(s, t, i + 1, j + 1, memo);

            memo.set(key, take + skip);
            return take + skip;
        }

        memo.set(key, skip);
        return skip;
    }
}
