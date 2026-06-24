class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    jump(nums) {
        let maxReach = 0;
        let jumps = 0;
        let currentEnd = 0;

        for (let i = 0; i < nums.length - 1; i++) {
            maxReach = Math.max(maxReach, nums[i] + i);
            if (i === currentEnd) {
                jumps++;
                currentEnd = maxReach;

                if (currentEnd >= nums.length - 1) {
                    break;
                }
            }
        }

        return jumps
    }
}
