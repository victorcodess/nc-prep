class Solution {
    /**
     * @param {string} beginWord
     * @param {string} endWord
     * @param {string[]} wordList
     * @return {number}
     */
    ladderLength(beginWord, endWord, wordList) { // Time: O(n^2 * m), Space: O(n^2)
        if (!wordList.includes(endWord)) return 0;

        const graph = {};
        const combinations = {};
        for (let word of wordList) {
            if (!(word in combinations)) combinations[word] = [];

            for (let i = 0; i < word.length; i++) {
                const comb = word.slice(0, i) + "*" + word.slice(i + 1);
                if (!(comb in graph)) graph[comb] = [];
                graph[comb].push(word);

                combinations[word].push(comb);
            }
        }

        const queue = [[beginWord, 1]];
        let head = 0;
        const visited = new Set([beginWord]);

        while (head < queue.length) {
            const [curr, num] = queue[head++];

            if (curr === endWord) return num;
            
            for (let i = 0; i < curr.length; i++) {
                const comb = curr.slice(0, i) + "*" + curr.slice(i + 1);

                if (comb in graph) {
                    for (let nextWord of graph[comb]) {
                        if (!visited.has(nextWord)) {
                            visited.add(nextWord);
                            queue.push([nextWord, num + 1]);
                        }
                    }
                }
            }
        }

        return 0;
    }
}
