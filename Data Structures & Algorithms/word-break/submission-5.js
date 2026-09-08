class Solution {
    /**
     * @param {string} s
     * @param {string[]} wordDict
     * @return {boolean}
     */
    wordBreak(s, wordDict, i = 0, memo = new Map()) { // Time: O(n * m * t), Space: O(n)
        if (i >= s.length) return true;
        if (memo.has(i)) return memo.get(i);

        for (let word of wordDict) {
            if (s.startsWith(word, i)) {
                const result = this.wordBreak(s, wordDict, i + word.length, memo);

                if (result) {
                    memo.set(i, true);
                    return true;
                }
            }
        }

        memo.set(i, false);
        return false;
    }
}
