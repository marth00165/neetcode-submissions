class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {
        let rows = grid.length
        let columns = grid[0].length
        let directions = [[0, 1], [1, 0], [-1, 0], [0, -1]]
        let maxArea = 0;
        let queue = [];
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < columns; j++) {
                let cell = grid[i][j]
                if (cell === 1) {
                    queue.push([i, j]);
                    grid[i][j] = 0
                    let area = 0
                    // BFS
                    while (queue.length) {
                        let [oldR, oldC] = queue.shift();
                        area++;
                        for (let [dr, dc] of directions) {
                            let newR = dr + oldR;
                            let newC = dc + oldC;
                            if (newR >= 0 && newC >= 0 && newR < rows && newC < columns) {
                                if (grid[newR][newC] === 1) {
                                    queue.push([newR, newC]);
                                    grid[newR][newC] = 0;
                                }
                            }
                        }
                    }                  
                    maxArea = Math.max(maxArea, area)
                }
            }
        }
        return maxArea
    }
}
