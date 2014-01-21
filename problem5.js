/**
 * Return the smallest integer N evenly divisible by all integers n < 20.
 *
 * Source: https://projecteuler.net/problem=5
 *
 * In fact, this is just the least common multiple of 1, 2, 3, ..., 20.
 *
 * Result: 232792560
 * Time: 18ms
 */

var N = 1,
    n;

for (n = 2; n < 20; n++) N = leastCommonMultiple(N, n);

self.postMessage({type: 'result',
                  result: 'Least common multiple: ' + N});


/**
 * See https://en.wikipedia.org/wiki/Least_common_multiple
 * Section #Reduction_by_the_greatest_common_divisor
 *
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
function leastCommonMultiple(a, b)
{
  return a * b / greatestCommonDivisor(a, b);
}


/**
 * See https://en.wikipedia.org/wiki/Greatest_common_divisor
 * Section #Using_Euclid.27s_algorithm
 *
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
function greatestCommonDivisor(a, b)
{
  var c;

  if (b > a) {
    c = b;
    b = a;
    a = c;
  }

  if (a % b == 0) return b;
  else return greatestCommonDivisor(b, a % b);
}
