class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    missingNumber(nums) { // Time: O(n), Space: O(1)
        let compX = 0;
        let currX = nums[0];

        for (let i = 1; i <= nums.length; i++) {
            compX ^= i;
        }

        for (let i = 1; i < nums.length; i++) {
            currX ^= nums[i];
        }

        return compX ^ currX;
    }
}
