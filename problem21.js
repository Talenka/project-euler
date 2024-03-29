/**
 * Let d(n) be defined as the sum of proper divisors of n (numbers less than n
 * which divide evenly into n). If d(a) = b and d(b) = a, where a ≠ b, then a
 * and b are an amicable pair and each of a and b are called amicable numbers.
 *
 * For example, the proper divisors of 220 are 1, 2, 4, 5, 10, 11, 20, 22, 44,
 * 55 and 110; therefore d(220) = 284. The proper divisors of 284 are 1, 2, 4,
 * 71 and 142; so d(284) = 220.
 *
 * Evaluate the sum of all the amicable numbers under 10000.
 *
 * @see {@link https://projecteuler.net/problem=21}
 * Solution: 31626
 */
'use strict';

/**
 * @param  {integer} n
 * @return {integer}
 */
function divisorsSum(n) {
  let sum = 1;

  for (let i = 2, j = Math.sqrt(n); i <= j; i++) {
    if (n % i === 0) {
      sum += i;
      if (i * i !== n) sum += n / i;
    }
  }

  return sum;
}

const divisorsSums = [0, 0];
let amicableNumbersSum = 0;
const max = 10000;

for (let i = 2; i <= max; i++) divisorsSums[i] = divisorsSum(i);

for (let i = 2, j = divisorsSums.length; i < j; i++) {
  if (divisorsSums[i] < j &&
      divisorsSums[i] !== i &&
      divisorsSums[divisorsSums[i]] === i) {
    amicableNumbersSum += i;
  }
}

console.log(amicableNumbersSum);
