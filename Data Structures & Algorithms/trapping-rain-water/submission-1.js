class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        if (!height || height.length === 0) return 0;

        let n = height.length
   




        let l = 0;
        let r = n -1;

        let leftMax = height[l];
        let rightMax = height[r];


        let totalWater = 0;
      while (l < r) {
            if (leftMax < rightMax) {
                l++;
                leftMax = Math.max(leftMax, height[l]);
                totalWater += leftMax - height[l];
            } else {
                r--;
                rightMax = Math.max(rightMax, height[r]);
                totalWater += rightMax - height[r];
            }
        }

        return totalWater;

    }
}
