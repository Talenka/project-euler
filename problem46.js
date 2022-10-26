/**
 * Goldbach's other conjecture
 *
 * It was proposed by Christian Goldbach that every odd composite number can be
 * written as the sum of a prime and twice a square. It turns out that the
 * conjecture was false. What is the smallest odd composite that cannot be
 * written as the sum of a prime and twice a square?
 *
 * @see {@link https://projecteuler.net/problem=46}
 * Result: 5777
 */
'use strict';

const max = 10000n;

// From bigmath.js
const p = BigMath.primesUnder(max);

/**
 * Is an odd composite number writable as the sum of a prime and twice a square
 * @param  {BigInt} n
 * @return {boolean}
 */
function isGoldbachWriteable(n) {
  for (let i = 0, l = p.length, d; i < l; i++) {
    if (n >= p[i]) {
      d = BigMath.sqrt((n - p[i]) / 2n);
      if (d % 2n === 1n) return true;
    }
  }

  return false;
}

for (let n = 9n; n < max; n += 2n) {
  if (!p.includes(n) && !isGoldbachWriteable(n)) {
    console.log('First Non-goldbach-wrtieable number', n);
    break;
  }
}
