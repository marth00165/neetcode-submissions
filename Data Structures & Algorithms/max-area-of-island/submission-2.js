class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {
        let rows = grid.length
        let columns = grid[0].length
        let directions = [[0, 1], [1, 0], [-1, 0], [0, -1]]
        let islands = [];
        let numIslands = 0;
        let maxArea = 0;
        let queue = [];
        let visited = new Set();
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < columns; j++) {
                let cell = grid[i][j]
                let key = `${i},${j}`
                if (cell === 1 && !visited.has(key)) {
                    numIslands++
                    queue.push([i, j]);
                    visited.add(key);
                    let area = 0
                    // BFS
                    while (queue.length) {
                        let level = queue.length
                        for (let x = 0; x < level; x ++) {
                            let [oldR, oldC] = queue.shift();
                            area++;
                            for (let [dr, dc] of directions) {
                                let newR = dr + oldR;
                                let newC = dc + oldC;
                                if (newR >= 0 && newC >= 0 && newR < rows && newC < columns) {
                                    let tempKey = `${newR},${newC}`
                                    if (grid[newR][newC] === 1 && !visited.has(tempKey)) {
                                        queue.push([newR, newC]);
                                        visited.add(tempKey)
                                        
                                    }
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
