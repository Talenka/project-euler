/**
 * Return the 10001st prime number.
 *
 * Strategy: brute force
 * Source: https://projecteuler.net/problem=7
 * Result: 104743
 * Time: 905ms
 */

/** @type {Array.<number>} */
var PrimesList = [2];

/** @type {number} */
var PrimesNumber = 1;

for (var n = 3; PrimesNumber < 10001; n += 2) {

  // Find if n is divisible by one the first primes.
  for (var i = 0; i < PrimesNumber; i++) {
    if (n % PrimesList[i] == 0) break;
  }

  // If not, n is prime
  if (i == PrimesNumber) {
    PrimesList.push(n);
    PrimesNumber++;
  }
}

self.postMessage('10001st prime: ' + (n - 2), []);
