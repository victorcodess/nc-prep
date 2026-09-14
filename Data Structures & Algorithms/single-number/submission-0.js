class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    singleNumber(nums) { // Time: O(n), Space: O(1)
        let result = 0;

        for (let num of nums) {
            result = result ^ num;
        }

        return result;
    }
}
