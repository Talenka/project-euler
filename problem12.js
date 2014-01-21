/**
 * Highly divisible triangular number
 *
 * The n-th triangular number is the sum of the n first natural integers.
 *
 * T(n) = 1 + 2 + 3 + ... + n = n * (n + 1) /2
 *
 * We are looking for the smallest triangular number that have over five hundred
 * divisors.
 *
 * Source : https://projecteuler.net/problem=12
 *
 * Result: 76576500 (12376th triangular number)
 * Time: 764s
 */


var n = 1,
    triangularNumber = 1,
    factorsNumber = 1,
    maxFactorsNumber = 1;


while (factorsNumber < 500)
{
  n++;

  triangularNumber += n;

  factorsNumber = factorize(triangularNumber).length;

  maxFactorsNumber = Math.max(maxFactorsNumber, factorsNumber);

  self.postMessage({type: 'progress',
                    current: maxFactorsNumber,
                    max: 500,
                    info: n});
}

self.postMessage({type: 'result',
                  result: '500 factors triangular number: ' +
                          triangularNumber});


/**
 * @param {number} n
 * @return {Array.<number>}
 */
function factorize(n)
{
  var i,
      factors = [1];

  for (i = 2; i <= n / 2; i++) {
    if (n % i == 0) factors.push(i);
  }

  factors.push(n);

  return factors;
}
