class Solution {
    /**
     * @param {string} S
     * @return {number[]}
     */
    partitionLabels(S) { // Time: O(n), Space: O(1)
        const ends = new Map();

        for (let i = 0; i < S.length; i++) {
            const char = S[i];
            ends.set(char, i);
        }

        const parts = [];
        let i = 0;
        let size = 0;
        let end = 0;

        while (i < S.length) {
            const char = S[i];
            end = Math.max(end, ends.get(char));
            size++; 

            if (i === end) {
                parts.push(size);
                size = 0;
                end = 0;
            }

            i++;
        }

        return parts;
    }
}
