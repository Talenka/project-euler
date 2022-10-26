/**
 * 145 is a curious number, as 1! + 4! + 5! = 1 + 24 + 120 = 145.
 *
 * Find the sum of all numbers which are equal to the sum of the factorial of
 * their digits.
 * Note: as 1! = 1 and 2! = 2 are not sums they are not included.
 *
 * @see {@link https://projecteuler.net/problem=34}
 * Solution: 40730
 */
'use strict';

/**
 * @param  {integer} n
 * @return {integer} n!
 */
function factorial(n) {
  let f = 1;
  while (n > 1) f *= n--;
  return f;
}

/**
 * @param  {integer} n
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

for (let n = 10; n <= 50000; n++) if (isCuriousNumber(n)) curiousSum += n;

console.log(curiousSum);
