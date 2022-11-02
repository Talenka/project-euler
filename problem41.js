/**
 * Pandigital prime
 *
 * We shall say that an n-digit number is pandigital if it makes use of all the
 * digits 1 to n exactly once. For example, 2143 is a 4-digit pandigital and is
 * also prime. What is the largest n-digit pandigital prime that exists?
 *
 * @see {@link https://projecteuler.net/problem=41}
 * Solution: 7652413
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

  return result;
}

const pp = permutationsOf(1234567n);

for (let il = pp.length, i = il - 1; i >= 0; i --) {
  if (BigMath.isPrime(pp[i])) {
    console.log(pp[i]);
    break;
  }
}
