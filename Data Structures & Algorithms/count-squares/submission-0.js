class CountSquares {
    constructor() {
        this.points = new Map();
    }

    /**
     * @param {number[]} point
     * @return {void}
     */
    add(point) {
        const pos = point.join(",");
        this.points.set(pos, (this.points.get(pos) || 0) + 1);
    }

    /**
     * @param {number[]} point
     * @return {number}
     */
    count(point) {
        let count = 0;
        const [x1, y1] = point;

        for (let [pos, freq] of this.points) {
            const [x2, y2] = pos.split(",").map(Number);

            if (y1 !== y2 || x1 === x2) continue;

            const side = x2 - x1;

            const p1 = x1 + "," + (y1 + side);
            const p2 = x2 + "," + (y2 + side);

            if (this.points.has(p1) && this.points.has(p2)) {
                count += freq * this.points.get(p1) * this.points.get(p2);
            }

            const p3 = x1 + "," + (y1 - side);
            const p4 = x2 + "," + (y2 - side);

            if (this.points.has(p3) && this.points.has(p4)) {
                count += freq * this.points.get(p3) * this.points.get(p4);
            }
        }

        return count;
    }
}
