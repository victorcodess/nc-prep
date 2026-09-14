class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    missingNumber(nums) { // Time: O(nlog(n)), Space: O(1)
        nums.sort((a, b) => a - b);

        for (let i = 0; i < nums.length; i++) {
            if (i !== nums[i]) return i;
        }

        return nums.length;
    }
}
