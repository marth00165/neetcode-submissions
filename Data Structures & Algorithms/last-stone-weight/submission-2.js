class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
        stones.sort((a, b) => a - b);
        while (stones.length > 1) {
            console.log(stones)
            let stone2 = stones.pop();
            let stone1 = stones.pop();

            let stoneResult = stone2 - stone1;

            if (stoneResult !== 0) {
                stones.push(stoneResult);
                stones.sort((a, b) => a - b);
            }
        }


        return stones.length ? stones[0] : 0;
    }
}
