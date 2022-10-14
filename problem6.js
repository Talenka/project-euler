/**
 * Return the difference between the square of the sum of integers n < 100,
 * A(n), and the sum of squared integers, B(n).
 *
 * Strategy: litteral simplification
 * A(n) = 1 + 4 + 9 + ... + n^2
 * B(n) = (1 + 2 + 3 + ... + n)^2
 *
 * We are looking for D(n) = B(n) - A(n), with n = 100.
 *
 * The strategy is to study how A, B, and D grow versus n.
 *
 * A(n + 1) = A(n) + (n + 1)^2
 *
 * Let X = 1 + 2 + 3 + ... + n = n * (n + 1) / 2
 *
 * B(n + 1) = (X + (n + 1))^2
 *          = B(n) + (n + 1)^2 + 2 * X * (n + 1)
 *          = B(n) + (n + 1)^3
 *
 * Hence:
 * D(n + 1) - D(n) = (n + 1)^3 - (n + 1)^2 = n * (n + 1)^2
 *
 * Finally, all we have to do is to sum this formula over integers n < 100.
 *
 * @see https://projecteuler.net/problem=6
 * Result: 25164150
 * Time: 14ms
 */
'use strict';

/**
 * @return {number}
 */
function squaresSumDifference() {
  /** @type {number} */
  let difference = 0;

  for (let n = 1; n <= 100; n++) {
    difference += (n - 1) * n * n;
  }

  console.log(difference);
  return difference;
}

console.log(squaresSumDifference());
