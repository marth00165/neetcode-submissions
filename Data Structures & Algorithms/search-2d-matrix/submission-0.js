class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let rows = matrix.length
        let columns = matrix[0].length
        let left = 0;
        let right = rows * columns -1
        while (left <= right) {
            let mid = Math.floor((left + right)/2);
            let row = Math.floor(mid / columns);
            let col = mid % columns;
            let midValue = matrix[row][col]
            if (midValue === target) return true
            if (midValue < target) {
                left = mid + 1
            } else {
                right = mid - 1
            }
        }
            return false
    }
}
