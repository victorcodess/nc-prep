class Solution {
    /**
     * @param {character[]} tasks
     * @param {number} n
     * @return {number}
     */
    leastInterval(tasks, n) { // Time: O(m), Space: O(1)
        let count = new Array(26).fill(0);

        for (let char of tasks) {
            let idx = char.charCodeAt(0) - "A".charCodeAt(0);
            count[idx] += 1;
        }

        const maxF = Math.max(...count);
        let maxCount = 0;

        for (let freq of count) {
            if (freq === maxF) {
                maxCount++;
            }
        }

        const time = (maxF - 1) * (n + 1) + maxCount;
        
        return Math.max(time, tasks.length);
    }
}
