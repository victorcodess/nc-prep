class Solution {
    /**
     * @param {number} n
     * @return {boolean}
     */
    isHappy(n) { // Time: O(k * d), Space: (1)
        let slow = n;
        let fast = this.sumOfSquares(n);

        while (slow !== fast) {
            fast = this.sumOfSquares(fast);
            fast = this.sumOfSquares(fast);
            slow = this.sumOfSquares(slow);
        }

        return fast === 1;
    }

    sumOfSquares(n) {
        let sum = 0;

        for (let num of String(n)) {
            sum += Number(num) * Number(num)
        }

        return sum;
    }
}
