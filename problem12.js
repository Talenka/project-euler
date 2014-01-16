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
 * --> 76576500
 */


var n = 1,
    triangularNumber = 1,
    factorsNumber = 1;


function problem12()
{
  n++;

  triangularNumber += n;

  factorsNumber = factorize(triangularNumber).length;

  if (factorsNumber < 500) {
    document.title = factorsNumber + ' (' + n + ')';
    window.setTimeout(problem12, 10);
  } else document.getElementById('result').innerHTML = triangularNumber;
}


/**
 * @param {number} n
 * @return {Array.<number>}
 */
function factorize(n)
{
  var i,
      factors = [1];

  for (i = 2; i < n; i++) {
    if (n % i == 0) factors.push(i);
  }

  factors.push(n);

  return factors;
}
