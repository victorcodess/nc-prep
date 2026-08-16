class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) { // Time: O(n + m), Space: O(n + m)
        let result = [];

        for (let str of strs) {
            result.push(str.length + "#" + str);
        }

        return result.join("");
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) { // Time: O(n + m), Space: O(n + m)
        const result = [];
        let i = 0;

        while (i < str.length) {
            let j = i;

            while (str[j] !== "#") {
                j++;
            }

            const length = Number(str.slice(i, j));

            const currStr = str.slice(j + 1, j + 1 + length);
            result.push(currStr);

            i = j + 1 + length;
        }

        return result;
    }
}
