class Solution {
    /**
     * @param {string} s
     * @return {string[][]}
     */
    partition(s) { // Time: O(n * (2 ** n)), Space: O(n * (2 ** n))
        const result = [];
        const parts = [];

        this.findPalins(s, parts, result, 0);

        return result;
    }

    findPalins(s, parts, result, start) {
        if (start >= s.length) {
            result.push([...parts]);
            return;
        }

        let i = start;

        for (let j = i; j < s.length; j++) {
            if (this.isPalin(s, i, j)) {
                parts.push(s.slice(i, j + 1)); 
                this.findPalins(s, parts, result, j + 1);
                parts.pop();
            }
        }

        return;
    }

    isPalin(s, i, j) {
        while (i <= j) {
            if (s[i] !== s[j]) {
                return false;
            }

            i++;
            j--;
        }

        return true;
    }
}
