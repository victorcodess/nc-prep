class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) { // Time: O(logn), Space: O(1)
        let l = 0, r = nums.length - 1;

        while (l < r) {
            const mid = Math.floor((l + r) / 2);

            if (nums[mid] > nums[r]) {
                l = mid + 1;
            } else {
                r = mid;
            }
        }

        return nums[l];
    }
}
