/**
 * Return the 10001st prime number.
 *
 * Source: https://projecteuler.net/problem=7
 *
 * Result: 104743
 * Time: 923ms
 */

var PrimesList = [2],
    PrimesNumber = 1,
    n = 2;

while (PrimesNumber < 10001) {

  n++;

  // Find if n is divisible by one the first primes.
  for (i = 0; i < PrimesNumber; i++) {
    if (n % PrimesList[i] == 0) break;
  }

  // If not, n is prime
  if (i == PrimesNumber) {
    PrimesList.push(n);
    PrimesNumber++;

    self.postMessage({type: 'progress', current: PrimesNumber, max: 10001});
  }
}

self.postMessage({type: 'result', result: '10001st prime: ' + n});
