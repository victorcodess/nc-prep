class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(heights) { // Time: O(n * m), Space: O(n * m)
        const pacific = new Set();
        const atlantic = new Set();

        for (let r = 0; r < heights.length; r++) {
            for (let c = 0; c < heights[0].length; c++) {
                if (r === 0 || c === 0) {
                    this.dfs(heights, r, c, pacific);
                }

                if (r === (heights.length - 1) || c === (heights[0].length - 1)) {
                    this.dfs(heights, r, c, atlantic);
                }
            }
        }

        const result = [];

        for (let pos of pacific) {
            if (atlantic.has(pos)) {
                result.push(pos.split(",").map(Number));
            }
        }

        return result;
    }

    inBound(heights, r, c) {
        return r >= 0 && r < heights.length && c >= 0 && c < heights[0].length;
    }

    dfs(heights, r, c, sea) {
        if (!this.inBound(heights, r, c)) return;
        const pos = r + "," + c;
        if (sea.has(pos)) return;
        sea.add(pos);

        const deltas = [
            [0, 1],
            [0, -1],
            [1, 0],
            [-1, 0],
        ];
        
        for (let [dR, dC] of deltas) {
            const nR = r + dR;
            const nC = c + dC;

            if (this.inBound(heights, nR, nC) && heights[nR][nC] >= heights[r][c]) {
                this.dfs(heights, nR, nC, sea);
            }
        }
        
        return;
    }
}
