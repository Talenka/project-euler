/**
 * The following iterative sequence is defined for the set of positive integers:
 * n --> n / 2        (if n is even)
 * n --> 3 * n + 1    (if n is odd)
 *
 * Which starting number i < 1000000, produces the longest chain?
 *
 * @see {@link https://projecteuler.net/problem=14}
 * Solution: 837799 (525-long chain)
 */
'use strict';

/**
 * @param  {integer} n
 * @return {integer}
 */
function chainLength(n) {
  chain = 1;

  while (n > 1) {
    if (n % 2 === 0) n /= 2;
    else n = 3 * n + 1;
    chain++;
  }

  return chain;
}

let longestChain = 1;
let longestChainStart;
let chain;

for (let i = 1; i < 1000000; i++) {
  chain = chainLength(i);
  if (chain > longestChain) [longestChain, longestChainStart] = [chain, i];
}

console.log(longestChain, longestChainStart);
