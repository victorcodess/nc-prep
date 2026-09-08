class Solution {
    /**
     * @param {string} text1
     * @param {string} text2
     * @return {number}
     */
    longestCommonSubsequence(text1, text2, i = 0, j = 0, memo = new Map()) { // Time: O(n * m), Space: O(n * m)
        if (i >= text1.length || j >= text2.length) return 0;

        const key = i + "," + j;
        if (memo.has(key)) return memo.get(key);

        if (text1[i] === text2[j]) {
            const result = 1 + this.longestCommonSubsequence(text1, text2, i + 1, j + 1, memo);
            memo.set(key, result);
            return result;
        }


        const noResult = Math.max(this.longestCommonSubsequence(text1, text2, i + 1, j, memo), this.longestCommonSubsequence(text1, text2, i, j + 1, memo));
        memo.set(key, noResult);
        return noResult;
    }
}
