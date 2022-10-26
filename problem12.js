/**
 * Highly divisible triangular number
 *
 * The n-th triangular number is the sum of the n first natural integers:
 * T(n) = 1 + 2 + 3 + ... + n = n * (n + 1) /2
 *
 * We are looking for the smallest triangular number that have over five hundred
 * divisors.
 *
 * @see {@link https://projecteuler.net/problem=12}
 * Solution: 76576500 (12376th triangular number)
 */
'use strict';

/**
 * @param  {integer} n
 * @return {integer}
 */
function factorize(n) {
  let factors = 2;
  for (let i = 2, m = n / 2; i <= m; i++) if (n % i === 0) factors++;
  return factors;
}

let n = 1;
let triangularNumber = 1;
let factorsNumber = 1;
let maxFactorsNumber = 1;

while (factorsNumber < 500) {
  n++;
  triangularNumber += n;
  factorsNumber = factorize(triangularNumber);
  maxFactorsNumber = Math.max(maxFactorsNumber, factorsNumber);
}

console.log('500 factors triangular number', triangularNumber);
