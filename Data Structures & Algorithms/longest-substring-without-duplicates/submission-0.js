class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) { // Time: O(n), Space: O(m)
        const map = new Set();
        let i = 0;
        let j = i;
        let maxSub = 0

        while (j < s.length) {
            if (map.has(s[j])) {
                map.delete(s[i]);
                i++;
                
            } else {
                const len = j - i + 1;
                maxSub = Math.max(len, maxSub);
                map.add(s[j]);

                j++;
            }
        }

        return maxSub;
    }
}
