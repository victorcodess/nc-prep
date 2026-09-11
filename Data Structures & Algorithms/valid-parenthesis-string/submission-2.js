class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    checkValidString(s, i = 0, count = 0, memo = new Map()) { // Time: O(n^3), Space: (n^3);
        if (i >= s.length) return count === 0;
        if (count < 0) return false;

        const key = i + "," + count;
        if (memo.has(key)) return memo.get(key);

        const ch = s[i];

        if (ch === "(") {
            const res1 = this.checkValidString(s, i + 1, count + 1, memo);
            memo.set(key, res1);

            return res1;
        }

        if (ch === ")") {
            const res2 = this.checkValidString(s, i + 1, count - 1, memo);
            memo.set(key, res2);

            return res2;
        }

        if (ch === "*") {
            const res3 = this.checkValidString(s, i + 1, count - 1, memo) || this.checkValidString(s, i + 1, count, memo) || this.checkValidString(s, i + 1, count + 1, memo);
            memo.set(key, res3);

            return res3;
        }
    }
}
