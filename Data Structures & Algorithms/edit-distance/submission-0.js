class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {number}
     */
    minDistance(word1, word2, i = 0, j = 0, memo = new Map()) { // Time: O(n * m), Space: O(n * m)
        if (i >= word1.length && j >= word2.length) return 0;
        if (j >= word2.length) return word1.length - i;
        if (i >= word1.length) return word2.length - j;

        const key = i + "," + j;
        if (memo.has(key)) return memo.get(key);

        let skip = 0;
        let fix = 0;

        if (word1[i] === word2[j]) {
            skip = this.minDistance(word1, word2, i + 1, j + 1, memo);
        } else {
            let insert = 1 + this.minDistance(word1, word2, i, j + 1, memo);
            let remove = 1 + this.minDistance(word1, word2, i + 1, j, memo);
            let replace = 1 + this.minDistance(word1, word2, i + 1, j + 1, memo);

            fix = Math.min(insert, remove, replace);
        }

        memo.set(key, skip + fix);
        return skip + fix; 
    }
}
