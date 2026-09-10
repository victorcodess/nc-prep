class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    jump(nums, i = 0, memo = new Map()) { // Time: O(n^2), Space: O(n)
        if (i >= nums.length) return Infinity;
        if (i === nums.length - 1) return 0;
        if (nums[i] === 0) return Infinity;
        if (memo.has(i)) return memo.get(i);

        const range = nums[i];
        let minJumps = Infinity;

        for (let j = 1; j <= range; j++) {
            const currJumps = 1 + this.jump(nums, i + j, memo);
            minJumps = Math.min(minJumps, currJumps);
        }

        memo.set(i, minJumps)
        return minJumps;
    }
}
