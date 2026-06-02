class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        let num1 = 0; // 18
        let num2 = 0; // 19
        for (let num of nums) { // 10
            // [9, 0, 9, 10,0,0] -> 19
            let temp = Math.max(num1 + num, num2); // 19, 18
            num1 = num2; 
            num2 = temp; 
        }
        return num2; 
    }
}
