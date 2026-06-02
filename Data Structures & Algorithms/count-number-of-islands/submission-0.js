class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        let islands = 0;
        let queue = [];
        let rows = grid.length;
        let columns = grid[0].length;
        let directions = [[0, 1], [1,0], [-1, 0], [0, -1]];
        let visited = new Set();


        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < columns; c++) {
                if (grid[r][c] === '1' && !visited.has(`${r},${c}`)) {
                    queue.push([r, c])
                    visited.add(`${r},${c}`)
                    islands++;
                }
                // BFS
                while (queue.length) {
                    let level = queue.length;
                    for (let i = 0; i < level; i ++) {
                        let [islandR, islandC] = queue.shift();
                        for (let [dr, dc] of directions) {
                            let newR = islandR + dr;
                            let newC = islandC + dc;

                            if (newR >= 0 && newC >= 0 && newR < rows && newC < columns) {
                                if (grid[newR][newC] === '1' && !visited.has(`${newR},${newC}`)){
                                    queue.push([newR, newC])
                                    visited.add(`${newR},${newC}`)
                                }
                            }
                        }
                    }
                }
            }
        }

        return islands

    }
}
