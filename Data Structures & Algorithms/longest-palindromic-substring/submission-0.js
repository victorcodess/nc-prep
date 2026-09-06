class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    longestPalindrome(s) { // Time: O(n^2), Space: O(n)
        if (!s.length) return "";

        let maxPalin = "";

        function findPalin(l, r) {
            if (l < 0 || r >= s.length) return;
            if (s[l] !== s[r]) return;

            if ((r - l + 1) >= maxPalin.length) maxPalin = s.slice(l, r + 1);

            findPalin(l - 1, r + 1);
        }

        for (let i = 0; i < s.length; i++) {
            findPalin(i, i);
            findPalin(i, i + 1);
        }

        return maxPalin;
    }
}
