class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.cache = new Map();
        this.limit = capacity;
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if (this.cache.has(key)) {
            const value = this.cache.get(key);
            this.cache.delete(key);
            this.cache.set(key, value);

            return value;
        }

        return -1;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        if (this.cache.has(key)) {
            this.cache.delete(key);
        } else if (this.cache.size === this.limit) {
            const firstKey = this.cache.keys().next().value;
            this.cache.delete(firstKey);
        }

        this.cache.set(key, value);
    }
}
