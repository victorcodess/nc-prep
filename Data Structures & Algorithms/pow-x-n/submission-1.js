class Solution {
    /**
     * @param {number} x
     * @param {number} n
     * @return {number}
     */
    myPow(x, n) { // Time: O(log(n)), Space: O(log(n))
        function pow(num, p) {
            if (num === 0) return 0;
            if (p === 0) return 1;

            let res = pow(num, Math.floor(p / 2));
            res = res * res;

            return p % 2 === 0 ? res : res * num;
        }

        const result = pow(x, Math.abs(n));

        return n >= 0 ? result : 1 / result;
    }
}
