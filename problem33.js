/**
 * Digit cancelling fractions (problem #33)
 * ========================================
 * The fraction 49/98 is a curious fraction, as an inexperienced mathematician
 * in attempting to simplify it may incorrectly believe that 49/98 = 4/8, which
 * is correct, is obtained by cancelling the 9s.
 *
 * We shall consider fractions like, 30/50 = 3/5, to be trivial examples.
 *
 * There are exactly four non-trivial examples of this type of fraction, less
 * than one in value, and containing two digits in the numerator & denominator.
 *
 * If the product of these four fractions is given in its lowest common terms,
 * find the value of the denominator.
 *
 * @see {@link https://projecteuler.net/problem=33}
 *
 * Solution: 100
 * A curious fraction is when a/b == floor(a/10)/(b%10) or a*(b%10) = b*fl(a/10)
 * But not when fraction is trivial, like 11/22, 22/33, 10/30, ...
 */
'use strict';

/**
 * @return {Array.<number>}
 */
function searchCuriousFractions() {
  const curiousNumerators = [];
  const curiousDenominators = [];

  // Bounds a to [10; 98] to have 2 digits at numerator...
  for (let a = 12; a <= 98; a++) {
    // Skips trivials 11/xx, 22/xx...
    if (a % 11 === 0) continue;

    // Bounds b to [a+1; 99] so a / b < 1
    for (let b = a + 1; b <= 99; b++) {
      if (a * (b % 10) === b * Math.floor(a / 10)) {
        // Skips last trivial ones
        if (a % 10 !== b % 10 && a % 10 === Math.floor(b / 10)) {
          curiousNumerators.push(a);
          curiousDenominators.push(b);
        }
      }
    }
  }

  const numeratorsProd = curiousNumerators.reduce((p, i) => p * i, 1);
  const denominatorsProd = curiousDenominators.reduce((p, i) => p * i, 1);

  return [numeratorsProd, denominatorsProd];
}

console.log(searchCuriousFractions());
