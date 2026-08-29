class Twitter {
    constructor() {
        this.time = 0;
        this.following = new Map();
        this.tweets = new Map()
    }

    /**
     * @param {number} userId
     * @param {number} tweetId
     * @return {void}
     */
    postTweet(userId, tweetId) {
        if (!this.tweets.has(userId)) this.tweets.set(userId, []);

        this.tweets.get(userId).push([this.time, tweetId]);
        this.time++;
    }

    /**
     * @param {number} userId
     * @return {number[]}
     */
    getNewsFeed(userId) {
        const results = [];
        let maxHeap = new MaxPriorityQueue((post) => post.timeStamp );

        const follows = new Set(this.following.get(userId) || []);
        follows.add(userId);

        for (let followeeId of follows) {
            const posts = this.tweets.get(followeeId) || [];

            for (let [timeStamp, postId] of posts) {
                maxHeap.enqueue({ postId, timeStamp });
            }
        }

        while (maxHeap.size() && results.length < 10) {
            const post = maxHeap.dequeue();
            results.push(post.postId);
        }

        return results;
    }

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    follow(followerId, followeeId) {
        if (followerId === followeeId) return;

        if (!this.following.has(followerId)) {
            this.following.set(followerId, new Set());
        }

        this.following.get(followerId).add(followeeId);
    }

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    unfollow(followerId, followeeId) {
        if (this.following.has(followerId)) {
            if (this.following.get(followerId).has(followeeId)) {
                this.following.get(followerId).delete(followeeId);
            }
        }
    }
}
