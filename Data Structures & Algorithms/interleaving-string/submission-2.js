class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @param {string} s3
     * @return {boolean}
     */
    isInterleave(s1, s2, s3, i = 0, j = 0, memo = new Map()) { // Time: O(n * m), Space: O(n * m)
        if (i + j >= s3.length) return true;
        if (s1.length + s2.length !== s3.length) return false;

        const key = i + "," + j;
        if (memo.has(key)) return memo.get(key);

        const k = i + j;

        if (s3[k] === s1[i] && s3[k] === s2[j]) {
            const inBoth = this.isInterleave(s1, s2, s3, i + 1, j, memo) || this.isInterleave(s1, s2, s3, i, j + 1, memo);
            memo.set(key, inBoth);

            return inBoth;
        } else if (s3[k] === s1[i]) {
            const inOne = this.isInterleave(s1, s2, s3, i + 1, j, memo);
            memo.set(key, inOne);

            return inOne;
        } else if (s3[k] === s2[j]) {
            const inTwo = this.isInterleave(s1, s2, s3, i, j + 1, memo);
            memo.set(key, inTwo);

            return inTwo;
        }

        memo.set(key, false);
        return false;
    }
}
