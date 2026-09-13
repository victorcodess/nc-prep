class Solution {
    /**
     * @param {number[]} digits
     * @return {number[]}
     */
    plusOne(digits) { // Time: O(n), Space: O(n)
        let carry = 1;
        let i = 0;
        digits.reverse();

        while (carry) {
            if (i < digits.length) {
                if (digits[i] === 9) {
                    digits[i] = 0;
                } else {
                    digits[i] += 1;
                    carry = 0;
                }
            } else {
                digits.push(1);
                carry = 0;
            }

            i++;
        }

        return digits.reverse();
    }
}
