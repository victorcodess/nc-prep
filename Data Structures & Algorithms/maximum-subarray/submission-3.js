class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) { // Time: O(n), Space: O(1)
        let currSum = nums[0];
        let maxSub = nums[0];

        for (let i = 1; i < nums.length; i++) {
            currSum = Math.max(nums[i], currSum + nums[i]);

            maxSub = Math.max(currSum, maxSub);
        }

        return maxSub;
    }
}
