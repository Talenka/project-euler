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
function digitsArraySum(a, b) {
  if (a.length < b.length) {
    const c = a;
    a = b;
    b = c;
  }

  while (a.length > b.length) b.push(0);

  let sum = [];
  let ind = 0;

  for (let i = 0, j = a.length; i < j; i++) {
    let d = a[i] + b[i] + ind;

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

console.log('First Fibonacci:', index);
