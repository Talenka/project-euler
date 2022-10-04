/**
 * Triangular, pentagonal, and hexagonal numbers
 * are generated by the following formulae:
 *
 * Triangular T(n) = n * (n + 1) / 2   : 1, 3, 6, 10, 15, ...
 * Pentagonal P(n) = n * (3*n − 1) / 2 : 1, 5, 12, 22, 35, ...
 * Hexagonal  H(n) = n * (2*n − 1)     : 1, 6, 15, 28, 45, ...
 *
 * It can be verified that T(285) = P(165) = H(143) = 40755.
 *
 * Find the next triangle number that is also pentagonal and hexagonal.
 *
 * Strategy: brute force (with an arbitrary ceil at 100000).
 * Source: https://projecteuler.net/problem=45
 * Result: 1533776805
 * Time: 17s
 */
'use strict';

const triangulars = [];
const pentagonals = [];
const hexagonals = [];

for (let i = 0; i < 100000; i++) {
  triangulars[i] = i * (i + 1) / 2;
  pentagonals[i] = i * (3 * i - 1) / 2;
  hexagonals[i] = i * (2 * i - 1);
}

// We strip not-pentagonals (then hexagonals) from triangulars, this is it.
const tripentahexas = triangulars.filter(function(e) {
  return pentagonals.indexOf(e) !== -1;
}).filter(function(e) {
  return hexagonals.indexOf(e) !== -1;
});

console.log('Tri-Penta-Hexagonal numbers: ', tripentahexas);
