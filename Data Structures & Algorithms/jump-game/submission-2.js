class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canJump(nums) { // Time: O(n), Space: O(1)
        const n = nums.length
        let goal = n - 1;

        for (let i = n - 1; i >= 0; i--) {
            if (nums[i] + i >= goal) {
                goal = i;
            }
        }

        return goal === 0;
    }
}
