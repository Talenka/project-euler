/**
 * Pandigital multiples (problem #38)
 * ==================================
 * Take the number 192 and multiply it by each of 1, 2, and 3:
 * 192 × 1 = 192
 * 192 × 2 = 384
 * 192 × 3 = 576
 *
 * By concatenating each product we get the 1 to 9 pandigital, 192384576. We
 * will call 192384576 the concatenated product of 192 and (1,2,3).
 *
 * The same can be achieved by starting with 9 and multiplying by 1, 2, 3, 4,
 * and 5, giving the pandigital, 918273645, which is the concatenated product of
 * 9 and (1,2,3,4,5).
 *
 * What is the largest 1 to 9 pandigital 9-digit number that can be formed as
 * the concatenated product of an integer with (1,2, ... , n) where n > 1?
 *
 * @see {@link https://projecteuler.net/problem=38}
 *
 * Solution: 932718654
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
function searchConcatenedPandigitalProduct() {
  const max = 50000;
  let greatestCPP = 0;
  for (let i = 0; i < max; i++) {
    let p = '';

    for (let j = 1; j < 9; j++) {
      p = p.concat(i * j);

      if (j > 1 && isPandigital(p)) {
        if (p > greatestCPP) greatestCPP = p;
      }
    }
  }

  return greatestCPP;
}

console.log(searchConcatenedPandigitalProduct());
