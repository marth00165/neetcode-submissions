class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        if (!nums) return -1;
        if (nums.length === 1) {
            if (nums[0] === target) {
                return 0
            } else {
                return -1
            }
        };
        // 1. Initialize left and right pointers
        let left = 0;
        let right = nums.length - 1;

        // 2. While left pointer doesn't cross right
        while (left <= right) {
            // 3. Find mid index
            let mid = Math.floor((left + right) / 2);

            // 4. Check if mid value is target
            if (nums[mid] === target) {
                return mid;
            }

            // 5. If mid value is less than target, move left pointer
            else if (mid < target) {
                left = left + 1;
            }

            // 6. If mid value is greater than target, move right pointer
            else {
                right = right - 1;
            }
        }

        // 7. Target not found
        return -1;
    }
}
