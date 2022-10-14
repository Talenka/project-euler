/**
 * Truncatable primes (problem #37)
 * ========================================
 * The number 3797 has an interesting property. Being prime itself, it is
 * possible to continuously remove digits from left to right, and remain prime
 * at each stage: 3797, 797, 97, and 7. Similarly we can work from right to
 * left: 3797, 379, 37, and 3.
 *
 * Find the sum of the only eleven primes that are both truncatable from left to
 * right and right to left.
 *
 * @see {@link https://projecteuler.net/problem=37}
 *
 * Solution: 748317
 */
'use strict';


/**
 * @param {BigInt} n
 * @return {boolean}
 */
function isTruncatablePrime(n) {
  if (!BigMath.isPrime(n)) return false;

  // NOTE: 2, 3, 5, and 7 are not considered to be truncatable primes.
  if (n < 10n) return false;

  if (!isRightTruncatablePrime(n)) return false;
  if (!isLeftTruncatablePrime(n)) return false;

  return true;
}

/**
 * @param {BigInt} n
 * @return {boolean}
 */
function isRightTruncatablePrime(n) {
  if (!BigMath.isPrime(n)) return false;
  if (n < 10n) return true;
  return isRightTruncatablePrime(n / 10n);
}

/**
 * @param {BigInt} n
 * @return {boolean}
 */
function isLeftTruncatablePrime(n) {
  if (!BigMath.isPrime(n)) return false;
  if (n < 10n) return true;
  return isLeftTruncatablePrime(BigInt(n.toString().substr(1)));
}

/**
 * @return {Array}
 */
function searchTruncatablePrimes() {
  if (BigMath === undefined) throw Error('Requires bigmath.js');

  BigMath.init();

  const truncatablePrimes = [];
  const p = BigMath.primes;

  for (let i = 0; i < p.length; i++) {
    if (isTruncatablePrime(p[i])) {
      truncatablePrimes.push(p[i]);
    }
  }

  return truncatablePrimes;
}

console.log(searchTruncatablePrimes().reduce((sum, x) => sum + x));
