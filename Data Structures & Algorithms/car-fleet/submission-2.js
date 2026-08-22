class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) { // Time: O(nlogn), Space: O(n)
        const pairs = position.map((p, i) => [p, speed[i]]);
        pairs.sort((a, b) => b[0] - a[0]);

        let fleets = 0;
        let prevTime = -Infinity;

        for (let i = 0; i < position.length; i++) {
            const currTime = (target - pairs[i][0]) / pairs[i][1];

            if (currTime > prevTime) {
                fleets++;
                prevTime = currTime;
            }

        }

        return fleets;
    }
}
