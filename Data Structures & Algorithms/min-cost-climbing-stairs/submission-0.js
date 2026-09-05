class Solution {
    /**
     * @param {number[]} cost
     * @return {number}
     */
    minCostClimbingStairs(cost) { // Time: O(n), Space: O(n) 
        const memo = new Map();
        const startZero = this.findMin(cost, 0, memo);
        const startOne = this.findMin(cost, 1, memo);
        
        return Math.min(startZero, startOne);
    }

    findMin(cost, pos, memo) {
        if (memo.has(pos)) return memo.get(pos);
        if (pos >= cost.length) return 0;

        const price = cost[pos];

        const moveOne = this.findMin(cost, pos + 1, memo); 
        const moveTwo = this.findMin(cost, pos + 2, memo);

        memo.set(pos, price + Math.min(moveOne, moveTwo))
        return memo.get(pos);
    }
}
