class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) { // Time: O(n * m), Space: O(n + m)
        const s1Map = new Map();
        
        for (let s of s1) {
            s1Map.set(s, (s1Map.get(s) || 0) + 1);
        }

        let i = 0;
        let j = i + s1.length - 1;

        while (j < s2.length) {
           if (s1Map.has(s2[i])) {
            const s2Sub = new Map();
            let count = 0;

            for (let s of s2.slice(i, j + 1)) {
                s2Sub.set(s, (s2Sub.get(s) || 0) + 1);
            }

            for (let [letter, freq] of s2Sub) {
                if (!s1Map.has(letter)) break;
                if (freq !== s1Map.get(letter)) break;

                count++;
            }

            if (count === s1Map.size) return true;
           }

           i++;
           j = i + s1.length - 1;
        }

        return false;
    }
}
