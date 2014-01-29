/**
 * Euler discovered the remarkable quadratic formula:
 * n² + n + 41
 *
 * It turns out that the formula will produce 40 primes for the consecutive
 * values n = 0 to 39. However, when n = 40, 402 + 40 + 41 = 40(40 + 1) + 41 is
 * divisible by 41, and certainly when n = 41, 41² + 41 + 41 is clearly
 * divisible by 41.
 * The incredible formula  n² − 79n + 1601 was discovered, which produces 80
 * primes for the consecutive values n = 0 to 79. The product of the
 * coefficients, −79 and 1601, is −126479.
 *
 * Considering quadratics of the form:
 * n² + an + b, where |a| < 1000 and |b| < 1000
 *
 * Find the product of the coefficients, a and b, for the quadratic expression
 * that produces the maximum number of primes for consecutive values of n,
 * starting with n = 0.
 *
 * Strategy: brute force
 * Source: https://projecteuler.net/problem=27
 * Result: -59231 (consecutive primes = 71; a = -61; b=971)
 * Time: 200s
 */

/**
 * @param {number} n
 * @return {Array.<number>}
 */
function primesSmallerThan(n)
{

  var Primes = [2];

  for (var i = 3; i < n; i += 2) {
    for (var j = 0, k = Primes.length; j < k; j++)
      if (i % Primes[j] == 0) break;

    if (j == k) Primes.push(i);
    if (i % 1000 == 1) self.postMessage('Searching Primes: ' + i + '/' + n, []);
  }

  return Primes;
}

var Primes = primesSmallerThan(400000);

/**
 * @param {number} n
 * @return {boolean}
 */
function isPrime(n)
{
  return Primes.indexOf(n) > -1;
}

/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
function quadradicFormulaConsecutivePrimes(a, b)
{
  var n = 0;
  var current = b;

  while (isPrime(current)) {
    n++;
    current = n * n + a * n + b;
  }

  return n;
}

var currentConsecutivePrimes = 0;
var maxConsecutivePrimes = 0;
var maxA;
var maxB;

var span = 1000;

for (var a = -span; a <= span; a++) {

  self.postMessage(a + ' : ' + maxConsecutivePrimes, []);

  for (var b = -span; b <= span; b++) {

    currentConsecutivePrimes = quadradicFormulaConsecutivePrimes(a, b);

    if (currentConsecutivePrimes > maxConsecutivePrimes) {
      maxConsecutivePrimes = currentConsecutivePrimes;
      maxA = a;
      maxB = b;
    }
  }
}

self.postMessage('Max consecutive primes: ' + maxConsecutivePrimes +
                 '; a=' + maxA + '; b=' + maxB, []);
