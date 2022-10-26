/**
 * Largest exponential
 *
 * Comparing two numbers written in index form like 2**11 and 3**7 is not
 * difficult, as any calculator would confirm that 2**11 = 2048 < 37 = 2**187.
 *
 * However, confirming that 632382**518061 > 519432**525806 would be much more
 * difficult, as both numbers contain over three million digits.
 *
 * Using p099_base_exp, a 22K text file containing one thousand lines with a
 * base/exponent pair on each line, determine which line number has the greatest
 * numerical value.
 *
 * NOTE: The first two lines in the file represent the numbers in the example
 * given above.
 *
 * @see {@link https://projecteuler.net/problem=99}
 * Solution: 709 (just take logarithms)
 */
'use strict';

let greatestValue = 0;
let greatestIndex;

for (let i = 0, l = baseExp.length; i < l; i++) {
  const n = Math.log(baseExp[i][0]) * baseExp[i][1];
  if (n > greatestValue) [greatestIndex, greatestValue] = [i, n];
}

// The +1 is because line 1 index is 0;
console.log(greatestIndex + 1, greatestValue);
