/**
 * Return the 10001st prime number.
 *
 * @see {@link https://projecteuler.net/problem=7}
 * Solution: 104743
 */
'use strict';

const PrimesList = [2];
let PrimesNumber = 1;
let n;

for (n = 3; PrimesNumber < 10001; n += 2) {
  let i;

  // Find if n is divisible by one the first primes.
  for (i = 0; i < PrimesNumber; i++) if (n % PrimesList[i] === 0) break;

  // If not, n is prime
  if (i === PrimesNumber) {
    PrimesList.push(n);
    PrimesNumber++;
  }
}

// Given the n+=2 loop outcome, n-th prime is actually n - 2
console.log(n - 2);
