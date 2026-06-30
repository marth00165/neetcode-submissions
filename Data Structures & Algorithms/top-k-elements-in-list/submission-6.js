class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let buckets = [];
        let numMap = new Map();
        let answer = [];



        for (let i = 0; i <= nums.length; i++) {
            buckets.push([])
            let num = nums[i];
            if (num !== undefined) {
                numMap.set(num, (numMap.get(num) ?? 0) + 1)
            }
        }

        for (let [num, count] of numMap) {
            buckets[count].push(num)
        }

        for (let f = buckets.length -1; f>0; f--) {
            let bucket = buckets[f];
            for (let num of bucket){
                answer.push(num);
                k--
                if (k==0) return answer
            }
        }

    }
}
