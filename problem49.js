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
 *
 * Solution: {2597,5927,9257}
 */
'use strict';

/**
 * @param {BigInt|number|string} n
 * @param {number} a origin digit index
 * @param {number} b digit index to swap with
 * @return {BigInt}
 */
function permutDigits(n, a, b) {
  if (typeof a !== 'number') throw new TypeError();
  if (typeof b !== 'number') throw new TypeError();

  const s = n.toString();

  if (a < 0 || a >= s.length) throw new RangeError();
  if (b < 0 || b >= s.length) throw new RangeError();

  if (a === b) return n;

  if (b < a) {
    const c = a;
    a = b;
    b = c;
  }

  return BigInt(s.substr(0, a) + s[b] +
                s.substr(a + 1, b - a - 1) + s[a] +
                s.substr(b + 1));
}

/**
 * @param {BigInt|number|string} n
 * @return {Array.<BigInt>}
 */
function permutationsOf(n) {
  const l = n.toString().length;
  const p = [];

  for (let a = 0; a < l - 1; a++) {
    for (let b = a + 1; b < l; b++) {
      p.push(permutDigits(n, a, b));
    }
  }

  return p;
}

/**
 * @return {Array.<Array.<Bigint>>} List of permutative 4-digits primes.
 */
function searchPermutativePrimesTrio() {
  // We've load the first primes from bigmath.js and firstPrimes.js
  const p = BigMath.primes;

  // Permutative primes
  const pp = {};

  // We bounds the search to 4-digits primes, hence the bounds ]1000; 9999[
  const min = 1000n;
  const max = 9999n;

  for (let i = 0, l = p.length; i < l; i++) {
    if (p[i] < min) continue;
    if (p[i] > max) break;

    const q = permutationsOf(p[i]).sort();

    const k = q[0];
    if (pp[k] === undefined) pp[k] = [k];

    for (let j = 0, m = q.length; j < m && p[i] !== q[j] && q[j] > min; j++) {
      if (p.indexOf(q[j]) !== -1) {
        if (pp[k].indexOf(q[j]) === -1) pp[k].push(q[j]);
      }
    }
  }

  // Arithmetic permutative primes
  const app = [];

  for (const i in pp) {
    if (pp[i].length >= 3) {
      pp[i].sort();

      // Given a sorted serie, we search 3 items that form aritmetic serie.
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
