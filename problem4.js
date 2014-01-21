/**
 * Return the largest Palindrom number which is the product of two 3-digits
 * numbers, i.e. from 100 to 999.
 *
 * Source: https://projecteuler.net/problem=4
 *
 * Result: 906609
 * Time: 71ms
 */


var a,
    b,
    largestPalindrom = 0;

/**
 * @param {number} n
 * @return {boolean}
 */
function isPalindrom(n)
{
  n = n + ''; // stringify n

  return (n[0] == n[5] && n[1] == n[4] && n[2] == n[3]);
}


for (a = 999; a > 100; a--)
  for (b = a; b > 100; b--)
    if (isPalindrom(a * b))
      largestPalindrom = Math.max(largestPalindrom, a * b);

self.postMessage({type: 'result',
                  result: 'Largest palindrom: ' + largestPalindrom});
