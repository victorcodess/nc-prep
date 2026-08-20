class MinStack {
    constructor() {
        this.stack = [];
        this.minVals = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push(val);
        const topMin = this.minVals[this.minVals.length - 1] ?? Infinity;
        this.minVals.push(Math.min(topMin, val));
    }

    /**
     * @return {void}
     */
    pop() {
        this.minVals.pop()
        return this.stack.pop();
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack[this.stack.length - 1];
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.minVals[this.minVals.length - 1];
    }
}
