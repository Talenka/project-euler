/**
 * Return the sum of integers n < 1000, which are multiples of 3 or 5.
 *
 * Source: https://projecteuler.net/problem=1
 *
 * Result: 233168
 * Time: 12ms
 */


var n, sum = 0;

for (n = 3; n < 1000; n++) {
  if (n % 3 == 0 || n % 5 == 0) sum += n;
}

self.postMessage({type: 'result', result: 'Sum: ' + sum});
