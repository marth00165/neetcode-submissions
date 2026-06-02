class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
        let rows = grid.length
        let columns = grid[0].length


        let fresh = 0;
        let queue = [];

        const directions = [
            [0, 1],  // right
            [1, 0],  // down
            [-1, 0], // up
            [0, -1]  // left
        ];

        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < columns; c++) {
                let cell = grid[r][c]
                if (cell === 1) {
                    fresh = fresh+1;
                }

                if (cell === 2) {
                    queue.push([r, c])
                }
            }
        }

        let minutes = 0;

        while(queue.length && fresh > 0) {
            let rottenLevel = queue.length


            for (let i = 0; i < rottenLevel; i ++) {
                let [r, c] = queue.shift()


                for (let [dr, dc] of directions) {
                    let newRow = r + dr;
                    let newColumn = c + dc;


                    if (newRow >= 0 && newRow < rows && newColumn >= 0 && newColumn < columns) {
                        let newFruit = grid[newRow][newColumn]
                        if (newFruit === 1) {
                            grid[newRow][newColumn] = 2
                            queue.push([newRow, newColumn])
                            fresh--
                        }
                    }
                }
            }

            minutes = minutes + 1;
        }


        if (fresh === 0) {
            return minutes
        } else {
            return -1
        }
    }
}
