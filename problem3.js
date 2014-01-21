/**
 * Return the largest prime factor of N = 600851475143.
 *
 * TODO : too much recursion
 *
 * Source: https://projecteuler.net/problem=3
 *
 * Result: 6857
 * Time: 32ms
 */

var N = 600851475143, Max = Math.sqrt(N), n, largestFactor = 1;

for (n = 2; n <= Max; n++) {

  if (N % n == 0) {

    self.postMessage({type: 'progress', current: n, max: Max});

    largestFactor = Math.max(largestFactor, n);
    N /= n;
    n = 2;
  }
}

self.postMessage({type: 'progress', current: n, max: Max});

self.postMessage({type: 'result', result: 'Largest factor: ' + largestFactor});
