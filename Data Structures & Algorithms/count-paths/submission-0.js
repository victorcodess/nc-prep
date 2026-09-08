class Solution {
    /**
     * @param {number} m
     * @param {number} n
     * @return {number}
     */
    uniquePaths(m, n, r = 0, c = 0, memo = new Map()) { // Time: O(n * m), Space: O(n * m)
        if (0 > r || r >= m || 0 > c || c >= n) return 0;
        if (r === (m - 1) && c === (n - 1)) return 1;

        const pos = r + "," + c;
        if (memo.has(pos)) return memo.get(pos);

        let paths = 0;

        const deltas = [
            [1, 0],
            [0, 1],
        ];

        for (let [dR, dC] of deltas) {
            const nR = r + dR;
            const nC = c + dC;

            paths += this.uniquePaths(m, n, nR, nC, memo); 
        }

        memo.set(pos, paths);
        return memo.get(pos);
    }
}
