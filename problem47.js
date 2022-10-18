/**
 * Distinct primes factors
 *
 * The first two consecutive numbers to have two distinct prime factors are:
 * 14 = 2 × 7
 * 15 = 3 × 5
 *
 * The first three consecutive numbers to have three distinct prime factors are:
 * 644 = 2² × 7 × 23
 * 645 = 3 × 5 × 43
 * 646 = 2 × 17 × 19.
 *
 * Find the first four consecutive integers to have four distinct prime factors.
 * What is the first of these numbers?
 *
 * Strategy: brute force
 * @see https://projecteuler.net/problem=47
 * Result: 134043
 * Time: 560ms
 */
'use strict';

/**
 * @param {number} n
 * @return {number[]}
 */
function primesSmallerThan(n) {
  const Primes = [2];

  for (let i = 3; i < n; i += 2) {
    for (let j = 0, k = Primes.length; j < k; j++) {
      if (i % Primes[j] === 0) break;
    }

    if (j === k) Primes.push(i);
  }

  return Primes;
}

const Primes = primesSmallerThan(1000);

/**
 * @param {number} n
 * @return {number[]}
 */
function distinctPrimesFactorsList(n) {
  const factors = [];
  let p;

  for (let i = 0, j = Primes.length; i < j; i++) {
    p = Primes[i];

    if (n % p === 0) {
      if (factors.indexOf(p) === -1) factors.push(p);
      n = n / p;
    }
  }

  return factors;
}

const requiredDistinctPrimesFactors = 4;
const matchingConsecutiveNumbers = [];

for (let n = 2; n < 200000; n++) {
  if (distinctPrimesFactorsList(n).length === requiredDistinctPrimesFactors) {
    matchingConsecutiveNumbers.push(n);

    if (matchingConsecutiveNumbers.length === requiredDistinctPrimesFactors) {
      break;
    } else {
      matchingConsecutiveNumbers = [];
    }
  }
}

console.log('Consecutive numbers with ', requiredDistinctPrimesFactors);
console.log('distinct prime factors: ', matchingConsecutiveNumbers);
