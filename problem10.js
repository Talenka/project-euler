/**
 * Return the sum of prime numbers < 2000000
 * N = 600851475143.
 *
 * Source: https://projecteuler.net/problem=10
 *
 * Result: 142913828922
 * Time: 230s
 */

var Primes = [2],
    PrimesSum = 2,
    PrimesNumber = 1,
    Max = 2000000;


var i, j;

for (i = 3; i < Max; i += 2) {

  for (j = 0; j < PrimesNumber; j++) {
    if (i % Primes[j] == 0) break;
  }

  // If i is not divisible by any previous primes, it's prime
  if (j == PrimesNumber) {
    Primes.push(i);
    PrimesSum += i;
    PrimesNumber++;

    self.postMessage({type: 'progress', current: i, max: Max});
  }
}

self.postMessage({type: 'result', result: 'Primes sum: ' + PrimesSum});
