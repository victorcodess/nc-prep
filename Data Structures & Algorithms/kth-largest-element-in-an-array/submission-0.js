class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    findKthLargest(nums, k) { // Time: O(nlogn), Space: O(1)
        nums.sort((a, b) => b - a);

        return nums[k - 1];
    }
}
