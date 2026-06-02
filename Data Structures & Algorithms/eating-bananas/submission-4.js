class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let left = 1;

        let right = Math.max(...piles);

        while (left < right) {
            let mid = Math.floor((left+right)/2)
            let totalTime = 0;

            for (let pile of piles) {
                totalTime += Math.ceil(pile/mid);
            }

            if (totalTime <= h) {
                right = mid;
            } else {
                left = mid + 1;
            };
        }

        return left
    }
}
