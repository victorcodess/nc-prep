class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums, i = 0) { // Time: (2 ** n), Space: O(2 ** n)
        if (i >= nums.length) return [[]];

        const first = nums[i];
        const withoutFirst = this.subsets(nums, i + 1); // [[2],[3]]

        const withFirst = [];
        for (let subset of withoutFirst) {
            withFirst.push([first, ...subset]);
        }

        return [...withFirst, ...withoutFirst];
    }
}
