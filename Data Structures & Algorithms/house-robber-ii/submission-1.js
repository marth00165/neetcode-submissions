class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        if (nums.length === 1) return nums[0]
        let houses1 = nums.slice(0, nums.length - 1);
        let houses2 = nums.slice(1, nums.length);


        let [robH1, robH2, robH3, robH4] = [0, 0, 0, 0];


        for (let house of houses1) {
            let temp = Math.max(house + robH1, robH2);
            robH1 = robH2;
            robH2 = temp;
        }

           for (let house of houses2) {
            let temp = Math.max(house + robH3, robH4);
            robH3 = robH4;
            robH4 = temp;
        }


        let maxMoney = Math.max(robH2, robH4);

        return maxMoney


    }
}
