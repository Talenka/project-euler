/**
 * Champernowne's constant
 *
 * An irrational decimal fraction is created by concatenating the positive
 * integers: 0.12345678910(1)112131415161718192021...
 *
 * It can be seen that the 12th digit of the fractional part is 1.
 * If d(n) represents the nth digit of the fractional part, find the value of:
 * d1 × d10 × d100 × d1000 × d10000 × d100000 × d1000000
 *
 * @see {@link https://projecteuler.net/problem=40}
 * Solution: 210
 */
'use strict';

/**
 * @param  {integer} n
 * @return {integer}
 */
function d(n) {
  let s = '';

  for (let c = 1; s.length < n; c++) s = s.concat(c);

  return Number.parseInt(s.substr(n - 1, 1));
}

console.log(d(10) * d(100) * d(1000) * d(10000) * d(100000) * d(1000000));
