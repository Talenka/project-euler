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

/**
 * @param {number} sum
 * @return {BigInt}
 */
function differentWaysOfObtain(sum) {
  const coins = [1, 2, 5, 10, 20, 50, 100, 200];
  const ways = {1: 1n, 200: 1n};

  let result = 0n;

  for (let i = 1; i <= sum / 2; i++) {
    for (const c in coins) {
      if (sum - coins[c] >= 0) {
        ways[i] = ways[coins[c]] * ways[sum - coins[c]];
        result += ways[i];
      } else {
      }
    }
  }

  return result;
}

console.log(differentWaysOfObtain(200));
