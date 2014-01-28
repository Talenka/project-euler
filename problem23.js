/**
 * Non-abundant sums
 *
 * A perfect number is a number for which the sum of its proper divisors is
 * exactly equal to the number. For example, the sum of the proper divisors of
 * 28 would be 1 + 2 + 4 + 7 + 14 = 28, which means that 28 is a perfect number.
 *
 * A number n is called deficient if the sum of its proper divisors is less than
 * n and it is called abundant if this sum exceeds n.
 *
 * As 12 is the smallest abundant number, 1 + 2 + 3 + 4 + 6 = 16, the smallest
 * number that can be written as the sum of two abundant numbers is 24. By
 * mathematical analysis, it can be shown that all integers greater than 28123
 * can be written as the sum of two abundant numbers. However, this upper limit
 * cannot be reduced any further by analysis even though it is known that the
 * greatest number that cannot be expressed as the sum of two abundant numbers
 * is less than this limit.
 *
 * Find the sum of all the positive integers which cannot be written as the sum
 * of two abundant numbers.
 *
 * Strategy: brute force
 * Source: https://projecteuler.net/problem=23
 * Result: 4179871
 * Time: 247s
 */

/**
 * @param {Array.<number>} a
 * @return {number}
 */
function arraySum(a)
{
  return a.reduce(function(sum, n) { return sum + n; });
}

/**
 * @param {number} n
 * @return {boolean}
 */
function isAbundant(n)
{
  return (arraySum(divisorsList(n)) > n);
}

/**
 * @param {number} n
 * @return {Array.<number>}
 */
function divisorsList(n)
{
  var divisors = [1];

  for (var i = 2; i <= n / 2; i++) {
    if (n % i == 0) divisors.push(i);
  }

  return divisors;
}

/**
 * @param {number} n
 * @return {Array.<number>}
 */
function abundantNumbersSmallerThan(n)
{
  var abundantNumbers = [];

  for (var i = 12; i < n; i++) if (isAbundant(i)) abundantNumbers.push(i);

  return abundantNumbers;
}

/**
 * @param {number} n
 * @return {boolean}
 */
function isSumOfTwoAbundantNumbers(n)
{
  return (abundantSums.indexOf(n) != -1);
}


/**
 * @param {number} n
 * @return {Array.<number>}
 */
function abundantSumSmallerThan(n)
{
  var sums = [];
  var sum = 0;

  for (var i = 0, j = abundantNumbers.length; i < j; i++)
    for (var k = 0; k < j; k++) {
      sum = abundantNumbers[i] + abundantNumbers[k];
      if (sum > n) k = j;
      else if (sums.indexOf(sum) == -1) sums.push(sum);
    }

  return sums;
}

var greatestNonAbundantSum = 28123;
var abundantNumbers = abundantNumbersSmallerThan(greatestNonAbundantSum);
var abundantSums = abundantSumSmallerThan(greatestNonAbundantSum);
var nonAbundantSums = [];

for (var i = 1; i < greatestNonAbundantSum; i++)
  if (!isSumOfTwoAbundantNumbers(i)) nonAbundantSums.push(i);

self.postMessage('Non abundant sum: ' + arraySum(nonAbundantSums), []);
