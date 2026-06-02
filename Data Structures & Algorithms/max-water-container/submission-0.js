class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let maximumWater = 0;

        let left = 0;
        let right = heights.length - 1;


        while (left < right) {
            let maxHeight = Math.min(heights[left], heights[right]);
            let width = right - left
            let tempArea = maxHeight * width;
            maximumWater = Math.max(maximumWater, tempArea)
            if (heights[left] < heights[right]) {
                left++
            } else {
                right--
            }
        }

        return maximumWater
    }
}
