class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        if (height.length === 0) return 0;

        let n = height.length
        let leftMax = new Array(n);
        let rightMax = new Array(n);


        leftMax[0] = height[0];

        for (let i = 1; i < n; i ++) {
            leftMax[i] = Math.max(leftMax[i-1], height[i]);
        }

        rightMax[n-1] = height[n-1];

        for (let j = n - 2; j >= 0; j --) {
            rightMax[j] = Math.max(rightMax[j+1], height[j]);
        }

        let totalWater = 0;

        for (let i = 0; i < n; i ++) {
            const waterAtI = Math.min(leftMax[i], rightMax[i]) - height[i];
            totalWater += waterAtI;
        }

        return totalWater;
    }
}
