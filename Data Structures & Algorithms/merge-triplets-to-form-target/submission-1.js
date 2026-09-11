class Solution {
    /**
     * @param {number[][]} triplets
     * @param {number[]} target
     * @return {boolean}
     */
    mergeTriplets(triplets, target) { // Time: O(n), Space: O(1)
        const [t1, t2, t3] = target;
        const found = [0, 0, 0];

        for (let [x, y, z] of triplets) {
            if (x > t1 || y > t2 || z > t3) continue;

            if (x === t1) found[0] = 1;
            if (y === t2) found[1] = 1;
            if (z === t3) found[2] = 1;
        }

        return Math.min(...found) === 1;
    }
}
