/**
 * Return the sum of integers n < 1000, which are multiples of 3 or 5.
 *
 * Source: https://projecteuler.net/problem=1
 *
 * Result: 233168
 * Time: 12ms
 */


var n = 3;
var sum = 0;

while (n < 1000) {
  if (n % 3 == 0 || n % 5 == 0) sum += n;

  n++;
}

self.postMessage('Sum: ' + sum, []);
