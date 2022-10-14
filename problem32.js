/**
 * Pandigital products (problem #32)
 * =================================
 * We shall say that an n-digit number is pandigital if it makes use of all the
 * digits 1 to n exactly once; for example, the 5-digit number, 15234, is 1
 * through 5 pandigital.
 *
 * The product 7254 is unusual, as the identity, 39 × 186 = 7254, containing
 * multiplicand, multiplier, and product is 1 through 9 pandigital.
 *
 * Find the sum of all products whose multiplicand/multiplier/product identity
 * can be written as a 1 through 9 pandigital.
 *
 * HINT: Some products can be obtained in more than one way so be sure to only
 * include it once in your sum.
 *
 * @see {@link https://projecteuler.net/problem=32}
 *
 * Solution: 45228
 */
'use strict';

/**
 * @param {number|string} n
 * @return {boolean} Is n pandigital number ?
 */
function isPandigital(n) {
  if (typeof n !== 'string') n = n.toString();
  if (n.length !== 9 || n.indexOf('0') !== -1) return false;

  for (let i = 1; i <= 9; i++) {
    if (n.indexOf(i.toString()) === -1) return false;
  }

  return true;
}

/**
 * @return {number}
 */
function pandigitalProductsSum() {
  const max = 2000;
  const pandigitalProducts = [];

  // We start at a = 2 because if a = 1, a*b=b --> not pandigital
  for (let a = 2; a < max; a++) {
    // We start at b = a + 1, to avoid double-check the same product (a*b = b*a)
    for (let b = a + 1; b < max; b++) {
      const c = a * b;
      const p = c.toString().concat(a).concat(b);

      if (pandigitalProducts.indexOf(c) === -1 && isPandigital(p)) {
        pandigitalProducts.push(c);
      }
    }
  }

  return (pandigitalProducts.reduce((sum, i) => sum + i));
}

console.log(pandigitalProductsSum());
