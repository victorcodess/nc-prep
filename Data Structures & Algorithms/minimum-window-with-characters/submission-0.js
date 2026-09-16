class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) { // Time: O(s + t), Space: O(s + t)
        const need = new Map();

        for (let ch of t) {
            need.set(ch, (need.get(ch) || 0) + 1);
        }

        let left = 0;
        let count = 0;
        let result = "";

        for (let right = 0; right < s.length; right++) {
            const rightChar = s[right];

            if (need.has(rightChar)) {
                need.set(rightChar, need.get(rightChar) - 1);

                if (need.get(rightChar) >= 0) {
                    count++;
                }
            }

            while (count === t.length) {
                const window = s.slice(left, right + 1);

                if (!result.length || window.length < result.length) {
                    result = window;
                }

                const leftChar = s[left];

                if (need.has(leftChar)) {
                    need.set(leftChar, need.get(leftChar) + 1);

                    if (need.get(leftChar) > 0) {
                        count--;
                    }
                }

                left++;
            }
        }

        return result;
    }
}
