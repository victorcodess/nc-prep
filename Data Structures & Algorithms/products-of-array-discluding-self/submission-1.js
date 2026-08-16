class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const result = new Array(nums.length).fill(1);
        let prefixProd = 1;
        let postfixProd = 1;

        for (let i = 0; i < nums.length; i++) {
            result[i] *= prefixProd;
            prefixProd *= nums[i]; // 1, 2,
        }
        // [1,1,2,8]

        for (let i = nums.length - 1; i >= 0; i--) {
            result[i] *= postfixProd;
            postfixProd *= nums[i]; // 6, 24, 48, 48
        }

        // [48,24,6,1]

        return result;
    }
}
