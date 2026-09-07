class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    numDecodings(s, i = 0, memo = new Map()) { // Time: O(n), Space: O(n)
        if (s[i] === "0") return 0;
        if (memo.has(i)) return memo.get(i);
        if (i >= s.length) return 1;

        const takeOne = this.numDecodings(s, i + 1, memo);
        
        let takeTwo = 0;
        const sub = s.slice(i, i + 2);

        if (Number(sub) >= 10 && Number(sub) <= 26) {
            takeTwo = this.numDecodings(s, i + 2, memo);
        }

        memo.set(i, takeOne + takeTwo);
        return memo.get(i);

    }
}
