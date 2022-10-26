/**
 * The Fibonacci sequence is defined by the recurrence relation:
 * F(n) = F(n−1) + F(n−2), where F(1) = 1 and F(2) = 1.
 *
 * The 12th term, F(12) = 144, is the first term to contain three digits.
 * What is the first term in the Fibonacci sequence to contain 1000 digits?
 *
 * @see {@link https://projecteuler.net/problem=25}
 * Solution: 4782th
 */
'use strict';

/**
 * @param  {integer[]} a
 * @param  {integer[]} b
 * @return {integer[]}
 */
function digitsArraySum(a, b) {
  if (a.length < b.length) [a, b] = [b, a];

  while (a.length > b.length) b.push(0);

  const sum = [];
  let ind = 0;

  for (let i = 0, j = a.length; i < j; i++) {
    let d = a[i] + b[i] + ind;

    if (d >= 10) {
      d -= 10;

      ind = 1;

      sum[i] = d;

      if (i === j - 1) sum[i + 1] = 1;
    } else {
      sum[i] = d;
      ind = 0;
    }
  }

  return sum;
}

let Fnmo = [1];
let Fn = [1];
const maxDigitsNumber = 1000;
let Fnpo;
let index = 2;

while (Fn.length < maxDigitsNumber) {
  Fnpo = digitsArraySum(Fn, Fnmo);
  Fnmo = Fn;
  Fn = Fnpo;
  index++;
}

console.log('First Fibonacci with', maxDigitsNumber, 'digits:', index);
