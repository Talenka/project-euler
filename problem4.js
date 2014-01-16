/**
 * Return the largest Palindrom number which is the product of two 3-digits
 * numbers, i.e. from 100 to 999.
 *
 * Source: https://projecteuler.net/problem=4
 * @return {number}
 */
function problem4()
{
  var a,
      b,
      largestPalindrom = 0;

  for (a = 999; a > 100; a--)
    for (b = a; b > 100; b--)
      if (isPalindrom(a * b))
        largestPalindrom = Math.max(largestPalindrom, a * b);

  return largestPalindrom; // --> 906609
}


/**
 * @param {number} n
 * @return {boolean}
 */
function isPalindrom(n)
{
  n = n + ''; // stringify n

  return (n[0] == n[5] && n[1] == n[4] && n[2] == n[3]);
}
