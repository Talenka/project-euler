/**
 * Square digit chains
 *
 * A number chain is created by continuously adding the square of the digits in
 * a number to form a new number until it has been seen before. For example,
 * 44 → 32 → 13 → 10 → 1 → 1
 * 85 → 89 → 145 → 42 → 20 → 4 → 16 → 37 → 58 → 89
 *
 * Therefore any chain that arrives at 1 or 89 will become stuck in an endless
 * loop. What is most amazing is that EVERY starting number will eventually
 * arrive at 1 or 89.
 *
 * How many starting numbers below ten million will arrive at 89?
 *
 * @see {@link https://projecteuler.net/problem=92}
 * Solution: 8581146
 * 1 is idempotent (chain(1)=1), and all other fall into the 89 cycle.
 */
'use strict';

/**
 * @param  {BigInt} n
 * @return {BigInt}
 */
function next(n) {
  let result = 0n;

  while (n > 0n) {
    result += (n % 10n) ** 2n;
    n /= 10n;
  }

  return result;
}

/**
 * @param  {BigInt} n
 * @return {BigInt[]}
 */
function chain(n) {
  const result = [n];

  while (next(n) !== n) {
    n = next(n);

    if (result.indexOf(n) !== -1) {
      result.push(n);
      break;
    }

    result.push(n);
  }

  return result;
}

/**
 * @param  {BigInt} max
 * @return {Object.<string, integer>}
 */
function squareDigitChain89(max) {
  const result = {};

  for (let n = 1n; n <= max; n++) {
    const l = chain(n).pop();

    if (result[l] === undefined) result[l] = 0;
    result[l]++;
  }

  return result;
}

console.log(squareDigitChain89(10000000n));
