/**
 * The Fibonacci sequence is defined by the recurrence relation:
 * Fn = Fn−1 + Fn−2, where F1 = 1 and F2 = 1.
 *
 * The 12th term, F12 = 144, is the first term to contain three digits.
 * What is the first term in the Fibonacci sequence to contain 1000 digits?
 *
 * Strategy: brute force
 * Source: https://projecteuler.net/problem=25
 * Result: 4782th
 * Time: 164ms
 */

/**
 * @param {Array.<number>} a
 * @param {Array.<number>} b
 * @return {Array.<number>}
 */
function digitsArraySum(a, b)
{
  if (a.length < b.length) {
    var c = a;
    a = b;
    b = c;
  }

  while (a.length > b.length) b.push(0);

  var sum = [];
  var ind = 0;

  for (var i = 0, j = a.length; i < j; i++) {

    var d = a[i] + b[i] + ind;

    if (d >= 10) {
      d -= 10;

      ind = 1;

      sum[i] = d;

      if (i == j - 1) {
        sum[i + 1] = 1;
      }

    } else {
      sum[i] = d;
      ind = 0;
    }
  }

  return sum;
}

var Fnmo = [1];
var Fn = [1];
var maxDigitsNumber = 1000;
var Fnpo;
var index = 2;

while (Fn.length < maxDigitsNumber) {
  Fnpo = digitsArraySum(Fn, Fnmo);
  Fnmo = Fn;
  Fn = Fnpo;
  index++;
}

self.postMessage('First Fibonacci: ' + index, []);
