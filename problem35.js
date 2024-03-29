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
 * @see https://projecteuler.net/problem=35
 * Result: 55
 * Time: 66s
 */
'use strict';

/**
 * @param  {integer} n
 * @return {integer[]}
 * @todo debug
 */
function primesSmallerThan(n) {
  const Primes = [2];

  for (let i = 3; i < n; i += 2) {
    for (let j = 0, k = Primes.length; j < k; j++) {
      if (i % Primes[j] === 0) break;
    }

    if (j === k) Primes.push(i);
  }

  return Primes;
}

const Primes = primesSmallerThan(1000000);

/**
 * @param  {integer} n
 * @return {boolean}
 */
function isPrime(n) {
  return (Primes.indexOf(n) !== -1);
}

/**
 * @param  {integer} n
 * @return {integer}
 */
function circularPermutation(n) {
  if (n < 10) return n;

  const r = n.toString().length;

  return (n % 10) * Math.pow(10, r - 1) + Math.floor(n / 10);
}

/**
 * @param  {integer} n
 * @return {boolean}
 */
function isCircularPrimes(n) {
  for (let i = 0; i < 6; i++) {
    n = circularPermutation(n);
    if (!isPrime(n)) return false;
  }

  return true;
}

let circularPrimesNumber = 0;

for (let i = 0, j = Primes.length; i < j; i++) {
  if (isCircularPrimes(Primes[i])) circularPrimesNumber++;
}

console.log('Circuler primes number : ' + circularPrimesNumber, []);
