class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) { // Time: O(m + n), Space: O(m + n)
        const mergedArr = [];
        let i = 0, j = 0;

        while (i < nums1.length && j < nums2.length) {
            if (nums1[i] <= nums2[j]) {
                mergedArr.push(nums1[i]);
                i++;
            } else {
                mergedArr.push(nums2[j])
                j++;
            }
        }

        if (i >= nums1.length) {
            while (j < nums2.length) {
                mergedArr.push(nums2[j])
                j++;
            }
        } else if (j >= nums2.length) {
            while (i < nums1.length) {
                mergedArr.push(nums1[i])
                i++;
            }
        }

        const mid = Math.floor((mergedArr.length - 1) / 2);

        if (mergedArr.length % 2 === 0) {
            return (mergedArr[mid] + mergedArr[mid + 1]) / 2;
        } else {
            return mergedArr[mid];
        }
    }
}
