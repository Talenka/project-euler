/**
 * Highly divisible triangular number
 *
 * The n-th triangular number is the sum of the n first natural integers:
 * T(n) = 1 + 2 + 3 + ... + n = n * (n + 1) /2
 *
 * We are looking for the smallest triangular number that have over five hundred
 * divisors.
 *
 * Source : https://projecteuler.net/problem=12
 * Result: 76576500 (12376th triangular number)
 * Time: 764s
 */

/** @type {number} */
var n = 1;

/** @type {number} */
var triangularNumber = 1;

/** @type {number} */
var factorsNumber = 1;

/** @type {number} */
var maxFactorsNumber = 1;

while (factorsNumber < 500)
{
  n++;

  if (n % 100 == 0) self.postMessage(maxFactorsNumber + ' (n=' + n + ')', []);

  triangularNumber += n;

  factorsNumber = factorize(triangularNumber);

  maxFactorsNumber = Math.max(maxFactorsNumber, factorsNumber);
}

self.postMessage('500 factors triangular number: ' + triangularNumber, []);

/**
 * @param {number} n
 * @return {number}
 */
function factorize(n)
{
  /** @type {number} */
  var factors = 2;

  for (var i = 2; i <= n / 2; i++)
    if (n % i == 0) factors++;

  return factors;
}
