class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) { // Time: O(n * m), Space: O(n * m)
        if (!grid.length) return 0;

        let maxA = 0;
        const visited = new Set();

        for (let r = 0; r < grid.length; r++) {
            for (let c = 0; c < grid[0].length; c++) {
                const pos = r + "," + c;
                if (grid[r][c] === 1 && !visited.has(pos)) {
                    const area = this.countLand(grid, r, c, visited);
                    maxA = Math.max(maxA, area);
                }
            }
        }

        return maxA;
    }

    countLand(grid, r, c, visited) {
        if (0 > r || r >= grid.length || 0 > c || c >= grid[0].length) return 0;
        if (grid[r][c] === 0) return 0;

        const pos = r + "," + c;
        if (visited.has(pos)) return 0;
        visited.add(pos);

        const deltas = [
            [0, 1],
            [0, -1],
            [1, 0],
            [-1, 0],
        ];

        let count = 1;

        for (let [dR, dC] of deltas) {
            count += this.countLand(grid, r + dR, c + dC, visited);
        }

        return count;
    }
}
