class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canJump(nums, i = 0, memo = new Map()) { // Time: O(n^2), Space: O(n)
        if (i === nums.length - 1) return true;
        if (i >= nums.length || nums[i] === 0) return false;

        if (memo.has(i)) return memo.get(i);

        const range = nums[i];

        for (let j = 1; j <= range; j++) {
            if (this.canJump(nums, i + j, memo)) {
                memo.set(i, true);
                return true;
            }
        }

        memo.set(i, false);
        return false;
    }
}
