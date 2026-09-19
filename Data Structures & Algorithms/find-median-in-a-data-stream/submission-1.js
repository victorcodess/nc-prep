class MedianFinder {
    constructor() {
        this.small = new MaxPriorityQueue();
        this.large = new MinPriorityQueue();
    }

    /**
     *
     * @param {number} num
     * @return {void}
     */
    addNum(num) {
        if (this.large.isEmpty() || num > this.large.front()) {
            this.large.enqueue(num);
        } else {
            this.small.enqueue(num);
        }

        if (this.large.size() - this.small.size() >= 2) {
            this.small.enqueue(this.large.dequeue());
        } else if (this.small.size() - this.large.size() >= 2) {
            this.large.enqueue(this.small.dequeue());
        }
    }

    /**
     * @return {number}
     */
    findMedian() {
        if (this.small.size() > this.large.size()) {
            return this.small.front();
        } else if (this.small.size() < this.large.size()) {
            return this.large.front();
        } else {
            return (this.small.front() + this.large.front()) / 2;
        }
    }
}
