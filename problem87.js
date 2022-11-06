/**
 * Prime power triples
 *
 * The smallest number expressible as the sum of a prime square, prime cube, and
 * prime fourth power is 28. In fact, there are exactly four numbers below fifty
 * that can be expressed in such a way:
 * 28 = 2**2 + 2**3 + 2**4
 * 33 = 3**2 + 2**3 + 2**4
 * 49 = 5**2 + 2**3 + 2**4
 * 47 = 2**2 + 3**3 + 2**4
 *
 * How many numbers below fifty million can be expressed as the sum of a prime
 * square, prime cube, and prime fourth power?
 *
 * @see {@link https://projecteuler.net/problem=87}
 * Solution: 1097343
 */
'use strict';

/**
 * @param  {BigInt} max
 * @return {integer}
 */
function problem87(max) {
  const p = BigMath.primesUnder(BigMath.sqrt(max));
  const l = p.length;
  const list = [];

  for (let a = 0; a < l; a++) {
    const i = p[a]**4n;
    if (i > max) break;
    for (let b = 0; b < l; b++) {
      const j = i + p[b]**3n;
      if (j > max) break;
      for (let c = 0; c < l; c++) {
        const k = j + p[c]**2n;
        if (k > max) break;
        if (!list.includes(k)) list.push(k);
      }
    }
  }

  return list.length;
}

console.log(problem87(50000000n));
