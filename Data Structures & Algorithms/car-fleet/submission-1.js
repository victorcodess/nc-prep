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

        const stack = [];

        for (let [pos, speed] of pairs) {
            const timeToTarget = (target - pos) / speed;
            stack.push(timeToTarget);

            if (stack.length >= 2) {
                if (stack[stack.length - 1] <= stack[stack.length - 2]) {
                    stack.pop();
                }
            }
        }

        return stack.length;
    }
}
