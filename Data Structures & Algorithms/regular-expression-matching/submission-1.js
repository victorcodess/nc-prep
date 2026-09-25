class Solution {
    /**
     * @param {string} s
     * @param {string} p
     * @return {boolean}
     */
    isMatch(s, p, i = 0, j = 0, memo = new Map()) { // Time: O(n * m), Space: O(n * m)
        if (j >= p.length) return i >= s.length;

        const key = i + "," + j;
        if (memo.has(key)) return memo.get(key);

        const match = (i < s.length && (s[i] === p[j] || p[j] === "."));

        if (j + 1 < p.length && p[j + 1] === "*") {
            const take = match && this.isMatch(s, p, i + 1, j, memo);
            const skip = this.isMatch(s, p, i, j + 2, memo);
            const result = take || skip;

            memo.set(key, result);
            return result;
        } else {
            const result = match && this.isMatch(s, p, i + 1, j + 1, memo);

            memo.set(key, result);
            return result;
        }
    }
}
