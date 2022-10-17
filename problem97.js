/**
 * Square digit chains (problem #97)
 * =================================
 * The first known prime found to exceed one million digits was discovered in
 * 1999, and is a Mersenne prime of the form 2**6972593−1; it contains exactly
 * 2098960 digits. Subsequently other Mersenne primes, of the form 2**p−1, have
 * been found which contain more digits.
 *
 * However, in 2004 there was found a massive non-Mersenne prime which contains
 * 2357207 digits: 28433×2**7830457+1.
 *
 * Find the last ten digits of this prime number.
 *
 * @see {@link https://projecteuler.net/problem=97}
 *
 * Solution: 8739992577
 */
'use strict';

/**
 * @param  {BigInt} n
 * @param  {BigInt} power
 * @param  {BigInt} modulus
 * @return {BigInt} n**power (mod modules)
 */
function powMod(n, power, modulus) {
  let r = n % modulus;

  while (power > 1n) {
    r *= n;
    r = r % modulus;
    power--;
  }

  return r;
}

console.log((28433n * powMod(2n, 7830457n, 10n**10n) + 1n) % (10n**10n));
