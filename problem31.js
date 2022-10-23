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

const ways = {1: 1n};
const coins = [1, 2, 5, 10, 20, 50, 100, 200];

/**
 * @param {number} sum
 * @return {BigInt}
 */
function differentWaysOfObtain(sum) {
  if (typeof ways[sum] === 'bigint') return ways[sum];

  console.log(ways);

  let result = 0n;

  // eslint-disable-next-line guard-for-in
  for (const c in coins) {
    const remain = sum - coins[c];
    console.log(coins[c], remain);
    if (remain < 1) break;

    if (typeof ways[remain] === 'bigint') {
      result += ways[remain];
      continue;
    }

    const w = differentWaysOfObtain(remain);
    result += w;
    ways[remain] = w;
  }

  return result;
}

console.log(differentWaysOfObtain(2));
