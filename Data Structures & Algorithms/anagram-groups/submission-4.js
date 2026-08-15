class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) { // Time: O(n * k), Space: O(n)
        const result = new Map();

        for (let str of strs) {
            const charsArr = new Array(26).fill(0);

            for (let char of str) {
                charsArr[char.charCodeAt(0) - "a".charCodeAt(0)] += 1;
            }

            const joinedChars = charsArr.join(",");

            if (!result.has(joinedChars)) result.set(joinedChars, []);
            result.get(joinedChars).push(str);
        }

        return [...result.values()]
    }
}
