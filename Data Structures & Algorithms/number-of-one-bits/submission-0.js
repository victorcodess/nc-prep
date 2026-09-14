class Solution {
    /**
     * @param {number} n - a positive integer
     * @return {number}
     */
    hammingWeight(n) { // Time: O(k), Space: O(k)
        return String(n.toString(2)).split("").reduce((a,b) => Number(a) + Number(b), 0)
    }
}
