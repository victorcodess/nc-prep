class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) { // Time: O(n * m), Space: O(n * m)
        if (!grid.length) return 0;

        let maxA = 0;

        for (let r = 0; r < grid.length; r++) {
            for (let c = 0; c < grid[0].length; c++) {
                const pos = r + "," + c;
                if (grid[r][c] === 1) {
                    const area = this.countLand(grid, r, c);
                    maxA = Math.max(maxA, area);
                }
            }
        }

        return maxA;
    }

    countLand(grid, r, c) {
        if (0 > r || r >= grid.length || 0 > c || c >= grid[0].length) return 0;
        if (grid[r][c] !== 1) return 0;

        grid[r][c] = -1;

        const deltas = [
            [0, 1],
            [0, -1],
            [1, 0],
            [-1, 0],
        ];

        let count = 1;

        for (let [dR, dC] of deltas) {
            count += this.countLand(grid, r + dR, c + dC);
        }

        return count;
    }
}
