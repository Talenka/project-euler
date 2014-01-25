/**
 * Return the sum of prime numbers < 2000000
 * N = 600851475143.
 *
 * Source: https://projecteuler.net/problem=10
 *
 * Result: 142913828922
 * Time: 210s
 */

/** @type {Array.<number>} */
var Primes = [2];

/** @type {number} */
var PrimesSum = 2;

/** @type {number} */
var PrimesNumber = 1;

/** @type {number} */
var Max = 2000000;

for (var i = 3; i < Max; i += 2) {

  for (var j = 0; j < PrimesNumber; j++)
    if (i % Primes[j] == 0) break;

  // If i is not divisible by any previous primes, it's prime
  if (j == PrimesNumber) {
    Primes.push(i);
    PrimesSum += i;
    PrimesNumber++;
  }
}

self.postMessage('Primes sum: ' + PrimesSum, []);
