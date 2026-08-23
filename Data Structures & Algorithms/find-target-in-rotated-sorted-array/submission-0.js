class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) { // Time: O(logn), Space: O(1)
        let l = 0, r = nums.length - 1;

        while (l < r) {
            const mid = Math.floor((l + r) / 2);

            if (nums[mid] > nums[r]) {
                l = mid + 1;
            } else if (nums[mid] < nums[r]) {
                r = mid;
            } 
        }

        const start = l;

        if (findNum(nums, target, 0, start - 1) === -1) {
            return findNum(nums, target, start, nums.length - 1);
        } else {
            return findNum(nums, target, 0, start - 1);
        }
    }
}

function findNum(nums, target, l, r) {
    while (l <= r) {
        const mid = Math.floor((l + r) / 2);

        if (nums[mid] < target) {
            l = mid + 1;
        } else if (nums[mid] > target) {
            r = mid - 1;
        } else {
            return mid;
        }
    }

    return -1;
}
