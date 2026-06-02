class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals) {
        if (intervals.length === 0) return []
        let sortedIntervals = intervals.sort((a, b) => a[0] - b[0]);
        let lastMerged = [sortedIntervals[0]]


        for (let i = 0; i < intervals.length; i ++) {
            let last = lastMerged[lastMerged.length-1];

            let [start, end] = intervals[i];

            if (start <= last[1]) {
                last[1] = Math.max(end, last[1])
            } else {
                lastMerged.push([start,end])
            }
        }

        return lastMerged
    }
}
