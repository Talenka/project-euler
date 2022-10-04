/**
 * Coin sums
 * In the United Kingdom the currency is made up of pound (£) and pence (p).
 * There are eight coins in general circulation:
 * 1p, 2p, 5p, 10p, 20p, 50p, £1 (100p), and £2 (200p).
 *
 * It is possible to make £2 in the following way:
 * 1×£1 + 1×50p + 2×20p + 1×5p + 1×2p + 3×1p
 *
 * How many different ways can £2 be made using any number of coins?
 */
'use strict';

const coins = [200, 100, 50, 20, 10, 5, 2, 1];

/**
 * @param {number} n
 * @param {number} i
 * @return {number}
 * @todo
 */
function differentWayForSumming(n, i) {
  if (n === 0) return 0;

  let sum = 0;
  let dways = 0;

  for (let j = coins.length; i < j; i++) {
    if (sum + coins[i] === n) dways++;
  }

  return dways;
}

console.log(differentWayForSumming(200, 0));
