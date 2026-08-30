class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums, start = 0) { // Time: O(n!), Space: O(n!)
        if (start >= nums.length) return [[]];

        const first = nums[start];
        const withoutFirst = this.permute(nums, start + 1);

        const result = [];

        for (let comb of withoutFirst) {
            for (let i = 0; i <= comb.length; i++) {
                result.push([...comb.slice(0, i), first, ...comb.slice(i)]);
            }
        }

        return result;
    }
}
