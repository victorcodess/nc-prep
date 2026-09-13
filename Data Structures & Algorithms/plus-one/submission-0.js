class Solution {
    /**
     * @param {number[]} digits
     * @return {number[]}
     */
    plusOne(digits) { // Time: O(n), Space: O(n)
        const result = Number(digits.join("")) + 1;
        return String(result).split("").map(num => Number(num));
    }
}
