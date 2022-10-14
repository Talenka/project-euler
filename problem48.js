/**
 * Self powers (problem #48)
 * =========================
 * The series, 1**1 + 2**2 + 3**3 + ... + 10**10 = 10405071317.
 *
 * Find the last ten digits of the series, 1**1 + 2**2 + ... + 1000**1000.
 *
 * @see {@link https://projecteuler.net/problem=48}
 *
 * Solution: 9110846700
 */
'use strict';

/**
 * @param {BigInt} n
 * @return {BigInt}
 */
function selfPowerLastDigits(n) {
  let lastDigits = 0n;

  for (let i = 1n; i <= n; i++) {
    lastDigits = (lastDigits + i ** i) % (10n ** 10n);
  }

  return lastDigits;
}

console.log(selfPowerLastDigits(1000n));
