class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const result = {};

        for (let str of strs) {
            const charsArr = new Array(26).fill(0);

            for (let char of str) {
                charsArr[char.charCodeAt(0) - "a".charCodeAt(0)] += 1;
            }

            charsArr.join(",");

            if (!(charsArr in result)) result[charsArr] = [];
            result[charsArr].push(str);
        }

        return Object.values(result);
    }
}
