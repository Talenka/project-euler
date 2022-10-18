/**
 * Sub-string divisibility (problem #43)
 * =====================================
 * The number, 1406357289, is a 0 to 9 pandigital number because it is made up
 * of each of the digits 0 to 9 in some order, but it also has a rather
 * interesting sub-string divisibility property.
 * Let d(1) be the 1st digit, d(2) be the 2nd digit, and so on. In this way, we
 * note the following:
 *
 * d(2) * d(3) * d(4)  = 406 is divisible by 2
 * d(3) * d(4) * d(5)  = 063 is divisible by 3
 * d(4) * d(5) * d(6)  = 635 is divisible by 5
 * d(5) * d(6) * d(7)  = 357 is divisible by 7
 * d(6) * d(7) * d(8)  = 572 is divisible by 11
 * d(7) * d(8) * d(9)  = 728 is divisible by 13
 * d(8) * d(9) * d(10) = 289 is divisible by 17
 *
 * Find the sum of all 0 to 9 pandigital numbers with this property.
 *
 * @see {@link https://projecteuler.net/problem=43}
 * Solution: 16695334890
 */
'use strict';

/**
 * @param {number|string} n
 * @return {boolean} Is n 0 to 9 pandigital number ?
 */
function isPandigital(n) {
  if (typeof n !== 'string') n = n.toString();
  if (n.length !== 10) return false;

  for (let i = 0; i <= 9; i++) {
    if (n.indexOf(i.toString()) === -1) return false;
  }

  return true;
}

/** @return {BigInt} Sum of all 0-9 pandigital ints */
function problem43() {
  let sum = 0n;

  for (let i = 1234567890n; i < 9876543210n; i++) {
    const d = i.toString();

    if (isPandigital(d)) {
      if (BigInt(d.substr(1, 3)) % 2n === 0n &&
        BigInt(d.substr(2, 3)) % 3n === 0n &&
        BigInt(d.substr(3, 3)) % 5n === 0n &&
        BigInt(d.substr(4, 3)) % 7n === 0n &&
        BigInt(d.substr(5, 3)) % 11n === 0n &&
        BigInt(d.substr(6, 3)) % 13n === 0n &&
        BigInt(d.substr(7, 3)) % 17n === 0n) {
        sum += i;
      }
    }
  }

  return sum;
}

console.log(problem43());
