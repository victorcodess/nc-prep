class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums, i = 0, memo = new Map()) { // Time: O(n), Space: O(n)
        if (i >= nums.length) return 0;
        if (memo.has(i)) return memo.get(i);

        const curr = nums[i];

        const doTake = curr + this.rob(nums, i + 2, memo);

        const dontTake = this.rob(nums, i + 1, memo);

        memo.set(i, Math.max(doTake, dontTake))
        return memo.get(i);
    }
}
