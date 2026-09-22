class Solution {
    /**
     * @param {number[][]} matrix
     * @return {number}
     */
    longestIncreasingPath(matrix) { // Time: O(n * m), Space: (n * m)
        const memo = new Map();
        const visiting = new Set();
        const N = matrix.length;
        const M = matrix[0].length;
        let maxP = 0;

        for (let r = 0; r < N; r++) {
            for (let c = 0; c < M; c++) {
                const currP = dfs(r, c);
                maxP = Math.max(maxP, currP);

                visiting.clear();
            }
        }

        function dfs(r, c) {
            const key = r + "," + c;
            if (memo.has(key)) return memo.get(key);
            if (visiting.has(key)) return 0;

            visiting.add(key);

            const deltas = [
                [1, 0],
                [-1, 0],
                [0, 1],
                [0, -1],
            ];

            let maxIP = 1;

            for (let [dr, dc] of deltas) {
                const nr = r + dr;
                const nc = c + dc;

                if (0 > nr || nr >= N || 0 > nc || nc >= M) continue;
                if (matrix[nr][nc] <= matrix[r][c]) continue;
                
                const currIP = 1 + dfs(nr, nc);
                maxIP = Math.max(maxIP, currIP);
            }

            memo.set(key, maxIP);
            return maxIP;
        }

        return maxP
    }
}
