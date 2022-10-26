/**
 * Digit factorial chains (problem #74)
 * ====================================
 * The number 145 is well known for the property that the sum of the factorial
 * of its digits is equal to 145:
 * 1! + 4! + 5! = 1 + 24 + 120 = 145
 *
 * Perhaps less well known is 169, in that it produces the longest chain of
 * numbers that link back to 169; it turns out that there are only three such
 * loops that exist:
 * 169 → 363601 → 1454 → 169
 * 871 → 45361 → 871
 * 872 → 45362 → 872
 *
 * It is not difficult to prove that EVERY starting number will eventually get
 * stuck in a loop. For example,
 * 69 → 363600 → 1454 → 169 → 363601 (→ 1454)
 * 78 → 45360 → 871 → 45361 (→ 871)
 * 540 → 145 (→ 145)
 *
 * Starting with 69 produces a chain of five non-repeating terms, but the
 * longest non-repeating chain with a starting number below one million is sixty
 * terms. How many chains, with a starting number below one million, contain
 * exactly sixty non-repeating terms?
 *
 * @see {@link https://projecteuler.net/problem=74}
 * Solution:
 */
'use strict';

const knownChains = {145: [145]};

/**
 * @param  {number} n
 * @return {number} n!
 */
function factorial(n) {
  let f = 1;
  while (n > 1) f *= n--;
  return f;
}

/** @param  {number} n */
function digitFactorialChain(n) {
  const chain = [n];

  while (!(knownChains[n] instanceof Array)) {
    const digits = n.toString().split('').map((x) => Number.parseInt(x));
    n = digits.reduce((sum, x) => sum + factorial(x), 0);
    if (chain.indexOf(n) === -1) chain.push(n);
    else {
      knownChains[chain[0]] = chain;
    }
    console.log(chain);
    if (chain.length > 6) break;
  }
}

/**
 * @param  {number} max
 * @return {Object.<number, number[]>}
 */
function digitFactorialChains(max) {
  for (let n = 2; n <= max; n++) digitFactorialChain(n);

  return knownChains;
}


console.log(digitFactorialChains(5));
