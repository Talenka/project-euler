/**
 * Consecutive prime sum (problem #49)
 * ===================================
 * The arithmetic sequence, 1487, 4817, 8147, in which each of the terms
 * increases by 3330, is unusual in two ways: (i) each of the three terms are
 * prime, and, (ii) each of the 4-digit numbers are permutations of one another.
 *
 * There are no arithmetic sequences made up of three 1-, 2-, or 3-digit primes,
 * exhibiting this property, but there is one other 4-digit increasing sequence.
 *
 * What 12-digit number do you form by concatenating the three terms in this
 * sequence?
 *
 * @see {@link https://projecteuler.net/problem=49}
 * Solution: {2969, 6299, 9629}
 */
'use strict';

/**
 * @param {BigInt|number|string} n
 * @return {BigInt[]}
 */
function permutationsOf(n) {
  const s = n.toString();
  const l = s.length;
  if (l === 1) return [BigInt(n)];
  if (l === 2) return [BigInt(n), BigInt(s.split('').reverse().join(''))];

  const result = [];

  for (let a = 0; a < l; a++) {
    const i = s.substr(a, 1);
    const p = permutationsOf(s.substr(0, a).concat(s.substr(a + 1)));

    for (let b = 0, bl = p.length; b < bl; b++) {
      result.push(BigInt(i.concat(p[b].toString())));
    }
  }

  if (BigInt(result.length) !== BigMath.factorial(BigInt(l))) throw new Error();

  return result;
}

/** @return {Array.<BigInt[]>} List of permutative 4-digits primes. */
function searchPermutativePrimesTrio() {
  // We've load the first primes from bigmath.js and firstPrimes.js
  const p = BigMath.primes;

  // Permutative primes
  const pp = {};

  // We bounds the search to 4-digits primes, hence the bounds ]1000; 9999[
  const [min, max] = [1000n, 9999n];

  for (let i = 0, l = p.length; i < l; i++) {
    if (p[i] < min) continue;
    if (p[i] > max) break;

    const q = permutationsOf(p[i]).sort();

    const k = q[0];
    if (pp[k] === undefined) pp[k] = [];

    for (let j = 0, m = q.length; j < m && q[j] > min; j++) {
      if (BigMath.isPrime(q[j]) && pp[k].indexOf(q[j]) === -1) pp[k].push(q[j]);
    }
  }

  // Arithmetic permutative primes
  const app = [];

  for (const i in pp) {
    if (pp[i].length >= 3) {
      pp[i] = pp[i].sort();

      // Given a sorted serie, we search 3 items that form arithmetic serie.
      for (let a = 0, al = pp[i].length; a < al - 2; a++) {
        for (let b = a + 1; b < al - 1; b++) {
          for (let c = b + 1; c < al; c++) {
            if (pp[i][c] - pp[i][b] === pp[i][b] - pp[i][a]) {
              app.push([pp[i][a], pp[i][b], pp[i][c]]);
            }
          }
        }
      }
    }
  }

  return app;
}

console.log(searchPermutativePrimesTrio());
