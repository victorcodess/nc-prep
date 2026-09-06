class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums, i = 0, hasFirst = false, memo = new Map()) {
        if (i >= nums.length) return 0;
        if (hasFirst && i === nums.length - 1) return 0;
        const key = String(i) + String(hasFirst);
        if (memo.has(key)) return memo.get(key);

        const curr = nums[i];
        const tookFirst = i === 0 ? true : hasFirst;

        const doTake = curr + this.rob(nums, i + 2, tookFirst, memo);
        const dontTake = this.rob(nums, i + 1, hasFirst, memo);

        memo.set(key, Math.max(doTake, dontTake));
        return memo.get(key);
    }
}
