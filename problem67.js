const Pyramid = require("./0067_triangle.json");

function maxPathSum(tri, i, j, row, col) {
  if (j == col) {
    return 0;
  }

  if (i == row - 1) {
    return tri[i][j] || 0;
  }

  return (tri[i][j] || 0) + Math.max(maxPathSum(tri, i + 1, j, row, col), maxPathSum(tri, i + 1, j + 1, row, col));
}

console.log(maxPathSum(Pyramid, 0, 0, 100, 100)); // not efficient enough
