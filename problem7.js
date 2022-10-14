/**
 * Return the 10001st prime number.
 *
 * Strategy: brute force
 * @see https://projecteuler.net/problem=7
 * Result: 104743
 * Time: 905ms
 */
'use strict';

/**
 * @return {number}
 */
function nthPrime() {
  /** @type {Array.<number>} */
  const PrimesList = [2];

  /** @type {number} */
  let PrimesNumber = 1;

  for (let n = 3; PrimesNumber < 10001; n += 2) {
    // Find if n is divisible by one the first primes.
    for (let i = 0; i < PrimesNumber; i++) {
      if (n % PrimesList[i] === 0) break;
    }

    // If not, n is prime
    if (i === PrimesNumber) {
      PrimesList.push(n);
      PrimesNumber++;
    }
  }

  // Given the n+=2 loop outcome, n-th prime is actually n - 2
  return n - 2;
}

console.log(nthPrime());
