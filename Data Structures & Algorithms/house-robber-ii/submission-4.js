class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        if (nums.length === 1) return nums[0]

        const robLinear = (houses, start, end) => {
            let rob1 = 0;
            let rob2 = 0;
            for (let i = start; i <= end; i++) { // 10
                let house = houses[i]
                // [9, 0, 9, 10,0,0] -> 19
                let temp = Math.max(rob1 + house, rob2); // 19, 18
                rob1 = rob2; 
                rob2 = temp; 
            }
            return rob2
        }

        let rob1 = robLinear(nums, 0, nums.length - 2);
        let rob2 = robLinear(nums, 1, nums.length - 1)
      

        let maxMoney = Math.max(rob1, rob2);

        return maxMoney

    }
}
