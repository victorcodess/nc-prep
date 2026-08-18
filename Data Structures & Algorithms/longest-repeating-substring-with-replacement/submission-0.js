class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) { // Time: O(n * m), Space: O(m)
        let count = new Map();
        let result = 0;
        let i = 0;
        let j = 0;

        while (j < s.length) {
            count.set(s[j], (count.get(s[j]) || 0) + 1);

            while (j - i + 1 - Math.max(...count.values()) > k) {
                count.set(s[i], count.get(s[i]) - 1);
                i++;
            }

            result = Math.max(j - i + 1, result);
            j++;
        }

        return result;
    }
}
