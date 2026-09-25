class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    swimInWater(grid) { // Time: O(n^2log(n)), Space: O(n^2)
        const visited = new Set(["0,0"]);
        const minHeap = new MinPriorityQueue((pos) => pos[0]);
        minHeap.enqueue([grid[0][0], 0, 0]);
        const N = grid.length;
        const M = grid[0].length;

        const deltas = [
            [0, 1],
            [0, -1],
            [1, 0],
            [-1, 0],
        ];

        while (!minHeap.isEmpty()) {
            const [time, r, c] = minHeap.dequeue();

            if (r === N - 1 && c === M - 1) return time;

            for (let [dr, dc] of deltas) {
                const nr = r + dr;
                const nc = c + dc;

                if (!visited.has(nr + "," + nc) && (nr >= 0 && nr < N && nc >= 0 && nc < M)) {
                    const maxT = Math.max(time, grid[nr][nc]);
                    visited.add(nr + "," + nc);
                    minHeap.enqueue([maxT, nr, nc]);
                }
            }
        }

        return null;
    }
}
