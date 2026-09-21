class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums) { // Time: O(n * 2 ** n), Space: O(2 ** n)
        const result = [];
        const subs = [];
        nums.sort((a, b) => a - b);

        function backtrack(i) {
            if (i >= nums.length) {
                result.push([...subs]);
                return;
            }

            subs.push(nums[i]);

            backtrack(i + 1);

            subs.pop();

            while (i + 1 < nums.length && nums[i + 1] === nums[i]) {
                i++;
            }

            backtrack(i + 1);
        }

        backtrack(0);

        return result;
    }
}
