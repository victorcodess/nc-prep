class Solution {
    /**
     * @param {number} n
     * @return {boolean}
     */
    isHappy(n) { // Time: O(k * d), Space: (k)
        const seen = new Set();
        let sos = this.sumOfSquares(n);

        while (sos !== 1) {
            if (seen.has(sos)) return false;
            seen.add(sos);

            sos = this.sumOfSquares(sos);
        }

        return true;
    }

    sumOfSquares(n) {
        let sum = 0;

        for (let num of String(n)) {
            sum += Number(num) * Number(num)
        }

        return sum;
    }
}
