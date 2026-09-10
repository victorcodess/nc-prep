class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) { // Time: O(n), Space: O(1)
        let maxSub = nums[0];
        let currSum = 0;

        for (let num of nums) {
            if (currSum < 0) currSum = 0;

            currSum += num;
            maxSub = Math.max(currSum, maxSub);
        }

        return maxSub;
    }
}
