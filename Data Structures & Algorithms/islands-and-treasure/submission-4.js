class Solution {
    /**
     * @param {number[][]} grid
     */
    islandsAndTreasure(grid) {  // Time: O(n * m), Space: O(n * m)
        const queue = [];
        let head = 0;

        for (let r = 0; r < grid.length; r++) {
            for (let c = 0; c < grid[0].length; c++) {
                if (grid[r][c] === 0) {
                    queue.push([r, c, 0]);
                }
            }
        }

        const deltas = [
            [0, 1],
            [0, -1],
            [1, 0],
            [-1, 0],
        ];

        function inBounds(grid, r, c) {
            return 0 <= r && r < grid.length && 0 <= c && c < grid[0].length;
        }
        
        while (head < queue.length) {
            const [cR, cC, dist] = queue[head++];

            for (let [dR, dC] of deltas) {
                const nR = cR + dR;
                const nC = cC + dC;

                if (inBounds(grid, nR, nC) && grid[nR][nC] === 2147483647) {
                    grid[nR][nC] = dist + 1;
                    queue.push([nR, nC, dist + 1]);
                }
            }    
        }

        return grid;
    }
}
