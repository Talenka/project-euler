/**
 * Return the sum of integers n < 1000, which are multiples of 3 or 5.
 *
 * @see https://projecteuler.net/problem=1
 * Solution: 233168
 */
'use strict';

/** @return {number} */
function main() {
  let sum = 0;

  for (let n = 3; n < 1000; n++) if (n % 3 === 0 || n % 5 === 0) sum += n;

  return sum;
}

console.log(main());
