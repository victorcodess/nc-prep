class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) { // Time: O(n), Space: O(n)
        const sArr = [];
        const letters = "abcdefghijklmnopqrstuvwxyz0123456789"

        for (let char of s) {
            if (letters.includes(char.toLowerCase())) {
                sArr.push(char.toLowerCase())
            }
        }

        let start = 0;
        let end = sArr.length - 1;

        while (start <= end) {
            if (sArr[start] !== sArr[end]) return false;
            start++;
            end--;
        }

        return true;
    }
}
