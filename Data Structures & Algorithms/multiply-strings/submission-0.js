class Solution {
    /**
     * @param {string} num1
     * @param {string} num2
     * @return {string}
     */
    multiply(num1, num2) { // Time: O(n * m), Space: O(n + m)
        if (num1 === "0" || num2 === "0") return "0";

        const result = new Array(num1.length + num2.length).fill(0);

        for (let i = num1.length - 1; i >= 0; i--) {
            for (let j = num2.length - 1; j >= 0; j--) {
                const pos = i + j + 1;
                const prod = Number(num1[i]) * Number(num2[j]);

                result[pos] += prod;
                result[pos - 1] += Math.floor(result[pos] / 10);
                result[pos] = result[pos] % 10;
            }
        }

        let start = 0;

        while (result[start] === 0) {
            start++;
        }

        return result.slice(start).join("");
    }
}
