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
 * @see {@link https://projecteuler.net/problem=24}
 * Solution: 2783915460
 */
'use strict';

/**
 * @param  {integer} n
 * @return {integer} n!
 */
function factorial(n) {
  let f = 1;
  while (n > 1) f *= n--;
  return f;
}

/**
 * @param  {integer[]} a
 * @param  {integer}   n
 * @return {integer[]}
 */
function deleteElement(a, n) {
  return a.filter((i) => i !== n);
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
