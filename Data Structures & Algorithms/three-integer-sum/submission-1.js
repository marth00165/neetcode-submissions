class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        let answer = []

        nums.sort((a, b) => a - b);


        for (let i = 0; i < nums.length; i ++) {
            let base = nums[i];
            let prevBase = i > 0 ? nums[i - 1] : null
            if (i > 0 && base === prevBase) continue;

            let left = i+1;
            let right = nums.length - 1;

            while (left < right) {
                let total = base + nums[left] + nums[right]
                if (total === 0) {
                    answer.push([base, nums[left], nums[right]]) 
                    left++
                    right--

                    while (left < right && nums[left] === nums[left - 1]) {
                        left++
                    }

                    while (left < right && nums[right] === nums[right + 1]) {
                        right--
                    }
                }

                if (total > 0) {
                    right--
                }
                if (total < 0) {
                    left++
                }
            }
        }
        return answer
    }
}
