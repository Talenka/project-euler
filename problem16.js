/**
 * What is the sum of the digits of the number 2**1000?
 *
 * @see {@link https://projecteuler.net/problem=16}
 * Strategy: for fun, this a workaround to avoid using BigInt.
 * Solution: 1366
 */
'use strict';

const digits = [1];
let digitsSum = 0;

/** @type {boolean} ind means increment next digits */
let ind = false;

for (let i = 1; i <= 1000; i++) {
  for (let d = 0, dl = digits.length; d < dl; d++) {
    digits[d] *= 2;

    if (ind) digits[d]++;

    if (digits[d] >= 10) {
      ind = true;
      digits[d] -= 10;

      if (d === dl - 1) {
        digits.push(1);
        ind = false;
      }
    } else ind = false;
  }
}

for (let d = 0, dl = digits.length; d < dl; d++) digitsSum += digits[d];

console.log(digitsSum);
