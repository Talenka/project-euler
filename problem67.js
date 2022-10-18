/**
 * Maximum path sum II (problem #67)
 * =====================================
 * By starting at the top of the triangle below and moving to adjacent numbers
 * on the row below, the maximum total from top to bottom is 23.
 *
 *        3
 *       7 4
 *      2 4 6
 *     8 5 9 3
 *
 * That is, 3 + 7 + 4 + 9 = 23.
 *
 * max(2+8, 2+5)
 * Find the maximum total from top to bottom in p067_triangle.js, a 15K file
 * containing a triangle with one-hundred rows.
 *
 * NOTE: This is a much more difficult version of Problem 18. It is not possible
 * to try every route to solve this problem, as there are 299 altogether! If you
 * could check one trillion (10**12) routes every second it would take over
 * twenty billion years to check them all.
 * There is an efficient algorithm to solve it. ;o)
 *
 * @see {@link https://projecteuler.net/problem=67}
 *
 * Solution: 7273
 */
'use strict';

/**
 * @param {Array.<number[]>} triangle
 * @return {number[]}
 */
function maximumPathSum2(triangle) {
  // The trick is to start at the bottom of the triangle...
  let sums = triangle[triangle.length - 1];

  for (let n = triangle.length - 2; n >= 0; n--) {
    const s = triangle[n];
    const p = [];

    // ... and to constitute an array of maximum path sum with respect to the
    // previous line.
    for (let i = 0, l = s.length; i < l; i++) {
      p[i] = Math.max(sums[i] + s[i], sums[i+1] + s[i]);
    }

    sums = p;
  }

  return sums;
}

console.log(maximumPathSum2(triangle));
