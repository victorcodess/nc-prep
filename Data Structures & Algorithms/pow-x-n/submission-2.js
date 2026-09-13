class Solution {
    /**
     * @param {number} x
     * @param {number} n
     * @return {number}
     */
    myPow(x, n) { // Time: O(log(n)), Space: O(1)
        if (x === 0) return 0;
        if (n === 0) return 1;

        let num = x;
        let pow = Math.abs(n);
        let result = 1;

        while (pow > 0) {
            if (pow % 2 === 1) {
                result *= num;
            }

            num *= num;
            pow = Math.floor(pow / 2);
        }

        return n > 0 ? result : 1 / result;
    }
}
