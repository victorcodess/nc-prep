class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) { // Time: O(n * klogk), Space: O(n * k)
        const result = {};

        for (let str of strs) {
            const sortedStr = str.split("").sort().join("");

            if (!result[sortedStr]) result[sortedStr] = [];
            result[sortedStr].push(str);
        }

        return Object.values(result);
    }
}
