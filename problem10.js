/**
 * Return the sum of prime numbers < 2000000
 * N = 600851475143.
 *
 * @see {@link https://projecteuler.net/problem=10}
 * Solution: 142913828922
 */
'use strict';

const Primes = [2];
let PrimesSum = 2;
let PrimesNumber = 1;
const Max = 2000000;

for (let i = 3; i < Max; i += 2) {
  let j;
  for (j = 0; j < PrimesNumber; j++) {
    if (i % Primes[j] === 0) break;
  }

  // If i is not divisible by any previous primes, it's prime
  if (j === PrimesNumber) {
    Primes.push(i);
    PrimesSum += i;
    PrimesNumber++;
  }
}

console.log(PrimesSum);
