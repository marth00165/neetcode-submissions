class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
numIslands(grid) {
  let ROWS = grid.length;
  let COLUMNS = grid[0].length;
  let directions = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
  ];
  let q = [];
  let islands = 0;

  const bfs = () => {
    while (q.length > 0) {
      let [currR, currC] = q.shift();
      for (let [dr, dc] of directions) {
        let newR = currR + dr;
        let newC = currC + dc;
        if (
          newR >= 0 &&
          newC >= 0 &&
          newR < ROWS &&
          newC < COLUMNS &&
          grid[newR][newC] === '1'
        ) {
          q.push([newR, newC]);
          grid[newR][newC] = '0';
        }
      }
    }
  };

  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLUMNS; c++) {
      if (grid[r][c] === '1') {
        grid[r][c] = '0';
        q.push([r, c]);
        bfs();
        islands++;
      }
    }
  }

  return islands;
}
}
