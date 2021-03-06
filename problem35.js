/**
 * Circular primes
 *
 * The number, 197, is called a circular prime because all rotations of the
 * digits: 197, 971, and 719, are themselves prime.
 *
 * There are thirteen such primes below 100: 2, 3, 5, 7, 11, 13, 17, 31, 37, 71,
 * 73, 79, and 97.
 *
 * How many circular primes are there below one million?
 *
 * Strategy: brute force
 * Source: https://projecteuler.net/problem=35
 * Result: 55
 * Time: 66s
 */

/**
 * @param {number} n
 * @return {Array.<number>}
 */
function primesSmallerThan(n)
{
  var Primes = [2];

  for (var i = 3; i < n; i += 2) {
    for (var j = 0, k = Primes.length; j < k; j++)
      if (i % Primes[j] == 0) break;

    if (j == k) Primes.push(i);
  }

  return Primes;
}

var Primes = primesSmallerThan(1000000);

/**
 * @param {number} n
 * @return {boolean}
 */
function isPrime(n)
{
  return Primes.indexOf(n) > -1;
}

/**
 * @param {number} n
 * @return {number}
 */
function circularPermutation(n)
{
  if (n < 10) return n;

  var r = n.toString().length;

  return (n % 10) * Math.pow(10, r - 1) + Math.floor(n / 10);
}

/**
 * @param {number} n
 * @return {boolean}
 */
function isCircularPrimes(n)
{
  for (var i = 0; i < 6; i++) {
    n = circularPermutation(n);
    if (!isPrime(n)) return false;
  }

  return true;
}

var circularPrimesNumber = 0;

for (var i = 0, j = Primes.length; i < j; i++) {
  if (isCircularPrimes(Primes[i])) circularPrimesNumber++;
}

self.postMessage('Circuler primes number : ' + circularPrimesNumber, []);
