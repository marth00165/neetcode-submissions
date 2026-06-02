class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
        let A = nums1;
        let B = nums2;

        let smaller = A
        let bigger = B

        let total = nums1.length+nums2.length

        let half = Math.floor((total + 1)/2);

        if (B.length < A.length) {
             smaller = B;
             bigger = A;
        }

        let left = 0;
        let right = smaller.length;


        while (left <= right){
            let i = Math.floor((left + right )/ 2); // Smaller
            let j = half - i; // Bigger

            let sLeft = i > 0 ? smaller[i - 1] : -Infinity;
            let sRight = i < smaller.length ? smaller[i] : Infinity;

            let bLeft = j > 0 ? bigger[j - 1] : - Infinity;
            let bRight = j < bigger.length ? bigger[j] : Infinity;


            if (sLeft <= bRight && bLeft <= sRight) {
                 if (total % 2 !== 0) {
                    return Math.max(sLeft, bLeft); // odd
                 }
                return (Math.max(sLeft, bLeft) + Math.min(sRight, bRight))/ 2 // even 
            } else if (sLeft > bRight) {
                right = i - 1;
            } else {
                left = i + 1;
            }
        }

        return -1;
    }
}
