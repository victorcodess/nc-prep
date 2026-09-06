class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    countSubstrings(s) { // Time: O(n^2), Space: O(1)
        if (!s.length) return 0;

        let count = 0;

        function findPalin(l, r) {
            while (s[l] === s[r] && l >= 0 && r < s.length) {
                count++;
                l--;
                r++;
            }
        }

        for (let i = 0; i < s.length; i++) {
            findPalin(i, i);
            findPalin(i, i + 1);
        }

        return count;
    }
}
