class Solution {
    /**
     * @param {number[]} gas
     * @param {number[]} cost
     * @return {number}
     */
    canCompleteCircuit(gas, cost) { // Time: O(n), Space: (1)
        const n = gas.length;
        let fuel = 0;
        let start = 0;

        const gasSum = gas.reduce((a, b) => a + b , 0);
        const costSum = cost.reduce((a, b) => a + b , 0);

        if (gasSum < costSum) return -1;

        for (let i = 0; i < n; i++) {
            fuel += gas[i] - cost[i];

            if (fuel < 0) {
                fuel = 0;
                start = i + 1;
                continue;
            }
        }

        return start;
    }
}
