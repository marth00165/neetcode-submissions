class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let numSet = new Set(nums);

        let maxLen = 0;

        for (let num of nums) {
            if (!numSet.has(num -1)) {
                let count = 1;

                while (numSet.has(num+1)) {
                    num++
                    count++
                }

                maxLen = Math.max(count, maxLen)
            }
        }
        return maxLen
    }
}
