class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let left = 0;

        let right = nums.length -1;


        if (nums[left] <= nums[right]) {
            return nums[left]
        }
        while (left < right) {
            const mid = Math.floor((left + right) / 2);

            // If mid element is greater than right element, min is to the right
            if (nums[mid] > nums[right]) {
            left = mid + 1;
            } else {
            // Min is at mid or to the left
            right = mid;
            }
        }

        return nums[left]
    }
}
