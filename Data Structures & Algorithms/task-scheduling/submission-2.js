class Solution {
    /**
     * @param {character[]} tasks
     * @param {number} n
     * @return {number}
     */
    leastInterval(tasks, n) { // Time: O(m), Space: O(1)
        let count = new Array(26).fill(0);
        for (let task of tasks) {
            const idx = task.charCodeAt(0) - "A".charCodeAt(0);
            count[idx] += 1;
        }

        let maxHeap = new MaxPriorityQueue();
        for (let i = 0; i < 26; i++) {
            if (count[i] > 0) maxHeap.push(count[i]);
        }

        let time = 0;
        let queue = [];
        let head = 0;

        while (maxHeap.size() > 0 || head < queue.length) {
            time++;

            if (maxHeap.size() > 0) {
                let maxF = maxHeap.pop();
                let usedF = maxF - 1;
                let nextTime = time + n;

                if (usedF !== 0) {
                    queue.push([usedF, nextTime]);
                }
            }

            if (head < queue.length && queue[head][1] === time) {
                maxHeap.push(queue[head][0]);
                head++;
            }
        }

        return time;
    }
}
