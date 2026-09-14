class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    missingNumber(nums) { // Time: O(n), Space: O(1)
        let compS = 0;
        let currS = 0;

        for (let i = 0; i <= nums.length; i++) {
            compS += i;
        }

        for (let i = 0; i < nums.length; i++) {
            currS += nums[i];
        }

        return compS - currS;
    }
}
