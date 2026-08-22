class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) { // Time: O(logn), Space: O(1)
        let i = 0;
        let j = nums.length - 1;

        while (i <= j) {
            const mid = Math.floor((j + i) / 2);

            if (target < nums[mid]) {
                j = mid - 1;
            } else if (target > nums[mid]) {
                i = mid + 1;
            } else {
                return mid;
            }
        }

        return -1;
    }
}
