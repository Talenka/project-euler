/**
 * Digit fifth powers
 *
 * Surprisingly there are only three numbers that can be written as the sum of
 * fourth powers of their digits:
 * 1634 = 1^4 + 6^4 + 3^4 + 4^4
 * 8208 = 8^4 + 2^4 + 0^4 + 8^4
 * 9474 = 9^4 + 4^4 + 7^4 + 4^4
 * As 1 = 1^4 is not a sum it is not included.
 *
 * The sum of these numbers is 1634 + 8208 + 9474 = 19316.
 *
 * Find the sum of all the numbers that can be written as the sum of fifth
 * powers of their digits.
 *
 * Strategy: brute force
 * Source: https://projecteuler.net/problem=30
 * Result: 443839
 * Time: 56ms
 */
'use strict';


/**
 * @param {Array.<number>} a
 * @return {number}
 */
function arraySum(a) {
  if (a.length === 0) return 0;
  return a.reduce(function(sum, n) {
    return sum + n;
  });
}


/**
 * @param {number} n
 * @return {number}
 */
function fifthPowerSumOfNumberDigits(n) {
  let sum = 0;

  while (n > 0) {
    sum += fifthPower(n % 10);

    n = Math.floor(n / 10);
  }

  return sum;
}


/**
 * @param {number} n
 * @return {number}
 */
function fifthPower(n) {
  return n ** 5;
}

const digitsFifthPowers = [];

for (let n = 10; n < 200000; n++) {
  if (n === fifthPowerSumOfNumberDigits(n)) {
    digitsFifthPowers.push(n);
  }
}

console.log(arraySum(digitsFifthPowers));
