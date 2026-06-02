class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let left = 0;
        let right = heights.length - 1;
        let maxWater = 0;

        while (left < right) {
            let leftWall = heights[left];
            let rightWall = heights[right];

            let height = Math.min(leftWall, rightWall);
            let width = right - left;

            let area = height * width;

            maxWater = Math.max(maxWater, area);

            if (height === leftWall) {
                left++
            } if (height === rightWall) {
                right--
            }
        }
        return maxWater;
    }
}
