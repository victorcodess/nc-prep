class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    checkValidString(s) { // Time: O(n), Space: (1);
        let minOpen = 0;
        let maxOpen = 0;
        
        for (let ch of s) {
            if (ch === "(") {
                minOpen++;
                maxOpen++;
            } else if (ch === ")") {
                minOpen--;
                maxOpen--;
            } else {
                minOpen--;
                maxOpen++;
            }

            if (maxOpen < 0) return false;

            minOpen = Math.max(0, minOpen);
        }

        return minOpen === 0;
    }
}
