/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {number}
     */
    minMeetingRooms(intervals) { // Time: O(nlog(n)), Space: O(n)
        intervals.sort((a, b) => a.start - b.start);

        const minHeap = new MinPriorityQueue();

        for (let interval of intervals) {
            if (!minHeap.isEmpty() && minHeap.front() <= interval.start) {
                minHeap.dequeue();
            }

            minHeap.enqueue(interval.end);
        }

        return minHeap.size();
    }
}
