/**
 * Square root convergents
 *
 * It is possible to show that the square root of 2 can be expressed as an
 * infinite continued fraction : sqrt(2) = 1 + 1/(2 + 1/(2 + 1/(2 + ...)))
 * By expanding this for the first four iterations, we get:
 * 1+1/2 = 3/2
 * 1+1/(2+1/2) = 7/5
 * 1+1/(2+1/(2+1/2)) = 17/12
 * 1+1/(2+1/(2+1/(2+1/2))) = 41/29
 *
 * The next three expansions are 99/70, 239/169, and 577/408, but the eighth
 * expansion, 1393/985, is the first example where the number of digits in the
 * numerator exceeds the number of digits in the denominator.
 *
 * In the first one-thousand expansions, how many fractions contain a numerator
 * with more digits than the denominator?
 *
 * @see {@link https://projecteuler.net/problem=57}
 * Solution: 153
 * sqrt(2) = lim(n --> Inf) S(n) with: S(1) = 3/2 and S(n+1) = 1+1/(1+S(n)).
 * If S(n) = a(n)/b(n), then S(n+1)=(2*b(n)+a(n))/(b(n)+a(n))
 */
'use strict';

let result = 0n;
let a = 3n; // Numerators
let b = 2n; // Denominators

for (let n = 1n; n <= 1000n; n++) {
  [a, b] = [2n * b + a, b + a];
  if (a.toString().length > b.toString().length) result++;
}

console.log(result);
