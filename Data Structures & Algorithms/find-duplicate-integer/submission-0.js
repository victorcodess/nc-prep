class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) { // Time: O(n), Space: O(n)
        const seen = new Set();

        for (let num of nums) {
            if (seen.has(num)) return num;
            seen.add(num);
        }

        return null;
    }
}
