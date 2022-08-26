/**
 * Return the sum of prime numbers < 2000000
 * N = 600851475143.
 *
 * Source: https://projecteuler.net/problem=10
 *
 * Result: 142913828922
 * Time: 210s
 */
'use strict';

/** @type {Array.<number>} */
let Primes = [2];

/** @type {number} */
let PrimesSum = 2;

/** @type {number} */
let PrimesNumber = 1;

/** @type {number} */
const Max = 2000000;

for (let i = 3; i < Max; i += 2) {

  for (let j = 0; j < PrimesNumber; j++) {
    if (i % Primes[j] === 0) {
      break;
    }
  }

  // If i is not divisible by any previous primes, it's prime
  if (j === PrimesNumber) {
    Primes.push(i);
    PrimesSum += i;
    PrimesNumber++;
  }
}

if (console) console.log('Primes sum: ' + PrimesSum);
