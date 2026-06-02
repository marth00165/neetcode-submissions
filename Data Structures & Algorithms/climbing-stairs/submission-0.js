class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        if (n <= 1) return 1;
        let prev = 1;
        let prev2 = 1;

        for (let i = 2; i <= n; i++) {
            let current = prev + prev2;
            prev2 = prev
            prev = current
        }

        return prev
    }
}
