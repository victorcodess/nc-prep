class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums, start = 0) { // Time: O(2 ** n), Space: O(2 ** n)
        if (start >= nums.length) return [[]];
        if (start === 0) nums.sort((a, b) => a - b);

        const first = nums[start];
        const withoutFirst = this.subsetsWithDup(nums, start + 1);

        const withFirst = [];
        for (let sub of withoutFirst) {
            withFirst.push([first, ...sub]);
        }

        let next = start + 1;
        while (next < nums.length && nums[next] === nums[[start]]) {
            next++;
        }

        const withoutFirstDups = this.subsetsWithDup(nums, next);

        return [...withFirst, ...withoutFirstDups];
    }
}
