class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let numMap = new Map();

        let buckets  = [];
        let answer = []

        for (let i = 0; i <= nums.length; i++){
            buckets.push([])
        }

        for (let num of nums){
           numMap.set(num, (numMap.get(num) ?? 0) + 1)
        }


        for (let [num, count] of numMap){
             buckets[count].push(num)
        }

        for (let j = nums.length; j >0; j--) {
            let bucket = buckets[j]

            for (let num of bucket) {
                answer.push(num)
                k--
                if (k === 0) {
                    return answer
                }
            }
        }

    }
}
