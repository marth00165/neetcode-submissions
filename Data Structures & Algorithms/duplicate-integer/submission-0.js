class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let map = new Map();

        for (let num of nums) {

            if (!map.has(num)) {
                map.set(num, true)
            } else {
                return true
            } 
        }

        return false
    }
}
