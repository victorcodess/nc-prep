class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) { // Time: O(n * n), Space: O(1)
        const result = [];
        const sortedNums = nums.sort((a, b) => a - b); 

        for (let i = 0; i < sortedNums.length; i++) {
            if (sortedNums[i] > 0) break;
            if (i > 0 && sortedNums[i] === sortedNums[i - 1]) continue;

            const target = 0 - sortedNums[i];
            let start = i + 1;
            let end = sortedNums.length - 1;

            while (start < end) {
                const sum = sortedNums[start] + sortedNums[end];
                if (sum > target) {
                    end--;
                } else if (sum < target) {
                    start++;
                } else {
                        result.push([sortedNums[i], sortedNums[start], sortedNums[end]]);
                    start++;
                    end--;

                    while (start < end && sortedNums[start] === sortedNums[start - 1]) {
                        start++;
                    }
                }
            }
        }

        return result;
    }
}
