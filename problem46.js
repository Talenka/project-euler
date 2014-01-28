/**
 * Goldbach's other conjecture
 *
 * It was proposed by Christian Goldbach that every odd composite number can be
 * written as the sum of a prime and twice a square. It turns out that the
 * conjecture was false. What is the smallest odd composite that cannot be
 * written as the sum of a prime and twice a square?
 *
 * Strategy: brute force
 * Source: https://projecteuler.net/problem=46
 * Result: 5777
 * Time: 160ms
 */

var max = 10000;

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
  }

  return Primes;
}

var Primes = primesSmallerThan(max);

/**
 * @param {number} n
 * @return {boolean}
 */
function isPrime(n)
{
  return Primes.indexOf(n) > -1;
}

/**
 * Is an odd composite number writeable as the sum of a prime and twice a square
 * @param {number} n
 * @return {boolean}
 */
function isGoldbachWriteable(n)
{
  for (var i = 0, j = Primes.length, d; i < j; i++) {
    d = Math.sqrt((n - Primes[i]) / 2);
    if (d == Math.floor(d)) return true;
  }

  return false;
}

for (var n = 9; n < max; n += 2) {
  if (!isPrime(n) && !isGoldbachWriteable(n)) {
    self.postMessage('First NGW : ' + n, []);
    break;
  }

  else self.postMessage(n + ' / ' + max, []);
}
