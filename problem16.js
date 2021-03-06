/**
 * What is the sum of the digits of the number 2^1000?
 *
 * Source : https://projecteuler.net/problem=16
 * Result: 1366
 * Time: 18ms
 */

/** @type {Array.<number>} */
var digits = [1];

/** @type {number} */
var digitsSum = 0;

/** @type {boolean} ind means increment next digits */
var ind = false;

for (var i = 1; i <= 1000; i++) {

  for (var d = 0, dl = digits.length; d < dl; d++) {

    digits[d] *= 2;

    if (ind) digits[d]++;

    if (digits[d] >= 10) {

      ind = true;
      digits[d] -= 10;

      if (d == dl - 1) {
        digits.push(1);
        ind = false;
      }

    } else ind = false;
  }
}

for (d = 0, dl = digits.length; d < dl; d++) digitsSum += digits[d];

self.postMessage('Digits sum: ' + digitsSum, []);
