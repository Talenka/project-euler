/**
 * Coin sums
 *
 * In the United Kingdom the currency is made up of pound (£) and pence (p).
 * There are eight coins in general circulation:
 * 1p, 2p, 5p, 10p, 20p, 50p, £1 (100p), and £2 (200p).
 *
 * It is possible to make £2 in the following way:
 * 1×£1 + 1×50p + 2×20p + 1×5p + 1×2p + 3×1p
 *
 * How many different ways can £2 be made using any number of coins?
 *
 * @see {@link https://projecteuler.net/problem=31}
 * Solution: 73682
 */
'use strict';

const coins = [1, 2, 5, 10, 20, 50, 100, 200];

/**
 * @param  {integer} sum
 * @return {integer}
 */
function differentWaysToGet(sum) {
  if (sum < 0) return 0;
  const ways = new Uint32Array(sum + 1); // Zero-filled
  ways[0] = 1;

  for (let i = 0; i < coins.length; i++) {
    for (let j = coins[i]; j <= sum; j++) ways[j] += ways[j - coins[i]];
  }

  return ways[sum];
}

console.log(differentWaysToGet(200));
