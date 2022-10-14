/**
 * Lexicographic permutations
 *
 * A permutation is an ordered arrangement of objects. For example, 3124 is one
 * possible permutation of the digits 1, 2, 3 and 4. If all of the permutations
 * are listed numerically or alphabetically, we call it lexicographic order.
 * The lexicographic permutations of 0, 1 and 2 are:
 * 012   021   102   120   201   210
 *
 * What is the millionth lexicographic permutation of the digits 0, 1, 2, 3, 4,
 * 5, 6, 7, 8 and 9?
 *
 * Strategy: reduction by sort
 * @see https://projecteuler.net/problem=24
 * Result: 2783915460
 * Time: 13ms
 */
'use strict';

/**
 * @param {number} n
 * @return {number}
 */
function factorial(n) {
  if (n < 2) return 1;
  return n * factorial(n - 1);
}

/**
 * @param {Array.<number>} a
 * @param {number} n
 * @return {Array.<number>}
 */
function deleteElement(a, n) {
  return a.filter(function(i) {
    return i !== n;
  });
}

let result = '';
let permutationIndex = 1000000 - 1;
let elements = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let elementsNumber = elements.length;
let e;

while (elementsNumber > 0) {
  e = Math.floor(permutationIndex / factorial(elementsNumber - 1));

  result += elements[e];

  permutationIndex -= e * factorial(elementsNumber - 1);

  elements = deleteElement(elements, elements[e]);

  elementsNumber--;
}

console.log('N-th permutation:', result);
