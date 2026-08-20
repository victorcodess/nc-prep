class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) { // Time: O(n), Space: O(n)
        if (s.length === 0) return false;
        
        const pairs = { "}": "{", ")": "(", "]": "[" };

        const stack = [];

        for (let i = 0; i < s.length; i++) {
            if (s[i] === "{" || s[i] === "(" || s[i] === "[") {
                stack.push(s[i]);
            } else {
                const opener = stack.pop();
                if (opener !== pairs[s[i]]) return false;
            }
        }


        return stack.length === 0;
    }
}
