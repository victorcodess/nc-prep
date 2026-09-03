class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) { // Time: O(n * m), Space: O(n * m)
        const queue = [];
        let head = 0;
        let goodOranges = 0;

        for (let r = 0; r < grid.length; r++) {
            for (let c = 0; c < grid[0].length; c++) {
                if (grid[r][c] === 2) {
                    queue.push([r, c, 0]);
                }

                if (grid[r][c] === 1) {
                    goodOranges++;
                }
            }
        }

        let totalMins = 0;
        const deltas = [
            [0, 1],
            [0, -1],
            [1, 0],
            [-1, 0],
        ];

        function inBounds(r, c) {
            return r >= 0 && r < grid.length && c >= 0 && c < grid[0].length;
        }

        while (head < queue.length) {
            const [cR, cC, mins] = queue[head++];

            for (let [dR, dC] of deltas) {
                const nR = cR + dR;
                const nC = cC + dC;

                if (inBounds(nR, nC) && grid[nR][nC] === 1) {
                    totalMins = Math.max(totalMins, mins + 1);
                    grid[nR][nC] = 2;
                    goodOranges--;
                    queue.push([nR, nC, mins + 1]);
                }
            }
        }

        return goodOranges === 0 ? totalMins : -1;
    }
}
