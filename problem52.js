/**
 * Permuted multiples (problem #52)
 * =============================
 * It can be seen that the number, 125874, and its double, 251748, contain
 * exactly the same digits, but in a different order.
 *
 * Find the smallest positive integer, x, such that 2x, 3x, 4x, 5x, and 6x,
 * contain the same digits.
 *
 * @see {@link https://projecteuler.net/problem=52}
 *
 * Solution: 142857
 */
'use strict';


/**
 * @param {BigInt|number|string} n
 * @return {BigInt}
 */
function smallestPermutationOf(n) {
  return n.toString().split('').sort().join('');
}

/**
 * @return {?number}
 */
function smallestMultiplicativeAnagram() {
  for (let n = 1; n < 200000; n++) {
    const p = smallestPermutationOf(n);
    if (p === smallestPermutationOf(2*n) &&
        p === smallestPermutationOf(3*n) &&
        p === smallestPermutationOf(4*n) &&
        p === smallestPermutationOf(5*n) &&
        p === smallestPermutationOf(6*n)) {
      return n;
    }
  }

  return null;
}

console.log(smallestMultiplicativeAnagram());
