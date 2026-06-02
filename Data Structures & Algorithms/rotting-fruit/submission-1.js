class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
        /*
         - create a queue
         - track total number of fresh
         - add the rotten fruit to queue
         - iterate through each level of the queue per minute
         - rot fresh oranges and add them to queue
         */
        let rows = grid.length;
        let columns = grid[0].length;
        let fresh = 0;
        let minutes = 0;
        let q = []
        let qIdx = 0;

        let directions = [[0,1], [1,0], [0, -1], [-1, 0]];

        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < columns; c++) {
                let fruit = grid[r][c];

                if (fruit === 1) {
                    fresh++
                }

                if (fruit === 2) {
                    q.push([r,c])
                }
            }
        }

        while (qIdx < q.length && fresh > 0) {
            let rotLevel = q.length - qIdx;
            for (let i = 0; i < rotLevel; i++) {
                let [r, c] = q[qIdx];
                qIdx++;

                for (let [dr,dc] of directions) {
                    let newRow = r + dr;
                    let newCol = c + dc;
                   
                    if (newRow >= 0 && newRow < rows && newCol >= 0 && newCol < columns) {
                         let fruit = grid[newRow][newCol]
                         if (fruit === 1) {
                            grid[newRow][newCol] = 2;
                            q.push([newRow, newCol]);
                            fresh--
                         }
                       
                    }
                }
            }
            minutes++
        }

        if (fresh === 0) {
            return minutes
        } else {
            return -1
        }
    }
}
