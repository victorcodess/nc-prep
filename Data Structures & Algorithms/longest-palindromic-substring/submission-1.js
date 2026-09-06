class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    longestPalindrome(s) { // Time: O(n^2), Space: O(1)
        if (!s.length) return "";

        let maxPalin = "";

        function findPalin(l, r) {
            while(s[l] === s[r] && l >= 0 && r < s.length) {
                if ((r - l + 1) >= maxPalin.length) {
                    maxPalin = s.slice(l, r + 1);
                }

                l--;
                r++;
            }
        }

        for (let i = 0; i < s.length; i++) {
            findPalin(i, i);
            findPalin(i, i + 1);
        }

        return maxPalin;
    }
}
