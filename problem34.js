/**
 * 145 is a curious number, as 1! + 4! + 5! = 1 + 24 + 120 = 145.
 *
 * Find the sum of all numbers which are equal to the sum of the factorial of
 * their digits.
 * Note: as 1! = 1 and 2! = 2 are not sums they are not included.
 *
 * Strategy: brute force
 * @see https://projecteuler.net/problem=34
 * Result: 40730
 * Time: 35ms
 */
'use strict';

/**
 * @param {number} n
 * @return {number}
 */
function factorial(n) {
  if (n < 2) return 1;
  return n * factorial(n - 1);
}

/**
 * @param {number} n
 * @return {boolean}
 */
function isCuriousNumber(n) {
  let sum = 0;
  let i = n;

  while (i > 0) {
    sum += factorial(i % 10);
    i = Math.floor(i / 10);
  }

  return (sum === n);
}

let curiousSum = 0;

for (let n = 10; n <= 50000; n++) {
  if (isCuriousNumber(n)) curiousSum += n;

  if (n % 100 === 0) {
    console.log('Curiosity: ' + n + ' : ' + curiousSum);
  }
}
