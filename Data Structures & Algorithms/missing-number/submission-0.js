class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    missingNumber(nums) {
        let sumNum = 0;

        for (let num of nums) {
            sumNum += num
        }

        let n = nums.length

        let sum = (n * (n +1))/2

        return sum - sumNum
    }
}
