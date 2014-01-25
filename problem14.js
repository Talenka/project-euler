/**
 * The following iterative sequence is defined for the set of positive integers:
 *
 * n --> n / 2        (if n is even)
 * n --> 3 * n + 1    (if n is odd)
 *
 * Which starting number i < 1000000, produces the longest chain?
 *
 * Strategy: brute force
 * Source : https://projecteuler.net/problem=14
 * Result: 837799 (525-long chain)
 * Time: 2.46s
 */

/**
 * @param {number} n
 * @return {number}
 */
function chainLength(n)
{
  chain = 1;

  while (n > 1) {
    if (n % 2 == 0) n /= 2;
    else n = 3 * n + 1;
    chain++;
  }

  return chain;
}

/** @type {number} */
var longestChain = 1;

/** @type {number} */
var longestChainStart;

/** @type {number} */
var chain;

for (var i = 1; i < 1000000; i++) {

  chain = chainLength(i);

  if (chain > longestChain) {
    longestChain = chain;
    longestChainStart = i;
  }
}

self.postMessage('Longest chain start: ' + longestChainStart, []);
