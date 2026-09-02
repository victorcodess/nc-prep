class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) { // Time: O(n * m), Space: O(n * m)
        let count = 0;
        const visited = new Set();

        for (let r = 0; r < grid.length; r++) {
            for (let c = 0; c < grid[0].length; c++) {
                const pos = r + "," + c;
                if (grid[r][c] === "1" && !visited.has(pos)) {
                    this.visitIsland(grid, r, c, visited);
                    count++;
                }
            }
        }

        return count;
    }

    visitIsland(grid, r, c, visited) {
        if (0 > r || r >= grid.length || 0 > c || c >= grid[0].length) return;
        if (grid[r][c] === "0") return;

        const pos = r + "," + c;
        if (visited.has(pos)) return;
        visited.add(pos);

        const deltas = [
            [1, 0],
            [-1, 0],
            [0, 1],
            [0, -1],
        ];

        for (let [dR, dC] of deltas) {
            this.visitIsland(grid, r + dR, c + dC, visited);
        }

        return;
    }
}
