class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        if (!this.keyStore.has(key)) this.keyStore.set(key, []);
        this.keyStore.get(key).push([value, timestamp]);
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        if (!this.keyStore.has(key)) return "";

        let result = "";
        const stamps = this.keyStore.get(key);
        let l = 0, r = stamps.length - 1;

        while (l <= r) {
            const mid = Math.floor((l + r) / 2);

            if (stamps[mid][1] <= timestamp) {
               result = stamps[mid][0];
               l = mid + 1
            } else {
                r = mid - 1;
            }
        }
        
        return result;
    }
}
