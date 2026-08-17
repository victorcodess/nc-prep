class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) { // Time: O(n), Space: O(1)
        let start = 0;
        let end = s.length - 1;

        while (start <= end) {
            while (start < end && !isAlphaNum(s[start])) {
                start++;
            }

            while (end > start && !isAlphaNum(s[end])) {
                end--;
            }

            if (s[start].toLowerCase() !== s[end].toLowerCase()) return false;

            start++;
            end--;
        }

        return true;
    }
}

function isAlphaNum(ch) {
    return (
        "a".charCodeAt(0) <= ch.charCodeAt(0) && ch.charCodeAt(0) <= "z".charCodeAt(0) 
        || "A".charCodeAt(0) <= ch.charCodeAt(0) && ch.charCodeAt(0) <=  "Z".charCodeAt(0) 
        || "0".charCodeAt(0) <= ch.charCodeAt(0) && ch.charCodeAt(0) <=  "9".charCodeAt(0) 
    )
}
