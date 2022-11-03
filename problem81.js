/**
 * Path sum: two ways
 *
 * In the 5 by 5 matrix below, the minimal path sum from the top left to the
 * bottom right, by only moving to the right and down, is indicated in bold red
 * and is equal to 2427.
 *
 * 131 673 234 103  18
 * 201  96 342 965 150
 * 630 803 746 422 111
 * 537 699 497 121 956
 * 805 732 524  37 331
 *
 * Find the minimal path sum from the top left to the bottom right by only
 * moving right and down in p081_matrix.js, a file containing an 80 x 80 matrix.
 *
 * @see {@link https://projecteuler.net/problem=81}
 * Solution: 427337
 */
'use strict';

/**
 * @param  {Array.<integer[]>} matrix Square s by s matrix
 * @return {integer}                  Minimum path sum from (0,0) to (s-1, s-1)
 */
function minPathSumTwoWays(matrix) {
  const s = matrix.length;
  const minPathsSum = [];

  for (let i = s - 1; i >= 0; i--) {
    minPathsSum[i] = [];

    for (let j = s - 1; j >= 0; j--) {
      const sumRight = (i < s - 1) ? minPathsSum[i + 1][j] : 0;
      const sumBottom = (j < s - 1) ? minPathsSum[i][j + 1] : 0;

      if (i === s - 1) minPathsSum[i][j] = matrix[i][j] + sumBottom;
      else if (j === s - 1) minPathsSum[i][j] = matrix[i][j] + sumRight;
      else minPathsSum[i][j] = matrix[i][j] + Math.min(sumRight, sumBottom);
    }
  }

  return minPathsSum[0][0];
}

console.log(minPathSumTwoWays(matrix));
