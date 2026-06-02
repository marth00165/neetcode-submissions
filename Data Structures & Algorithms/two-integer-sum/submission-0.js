class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let compMap = new Map();


        for (let i = 0; i < nums.length; i++) {
            let num = nums[i]
            let comp = target - num
            if (compMap.has(comp)) {
                let compIdx = (compMap.get(comp))
                return [compIdx, i]
            }
            compMap.set(num, i)
        }
    }
}
