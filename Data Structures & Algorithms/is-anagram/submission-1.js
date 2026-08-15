class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) { // Time: O(n + m), Space: O(n)
        if (s.length !== t.length) return false;

        const lettersT = new Map();

        for (let char of t) {
            lettersT.set(char, (lettersT.get(char) || 0) + 1);
        }

        for (let char of s) {
            if (lettersT.has(char)) {
                if (lettersT.get(char) > 1) {
                lettersT.set(char, lettersT.get(char) - 1);
                } else {
                    lettersT.delete(char);
                }
            }
        }

        return lettersT.size === 0;
    }
}
