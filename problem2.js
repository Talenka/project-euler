/**
 * Return the sum of even terms n < 4000000 of Fibonacci serie.
 *
 * Source: https://projecteuler.net/problem=2
 *
 * Result: 4613732
 * Time: 7ms
 */
'use strict';


/**
 * @return {number}
 */
function fibonacciEvenSum() {
  /** @type {number} */
  let previousTerm = 1;

  /** @type {number} */
  let currentTerm = 2;

  /** @type {number} */
  let nextTerm;

  /** @type {number} */
  let sum = 0;

  while (currentTerm < 4000000) {
    if (currentTerm % 2 === 0) {
      sum += currentTerm;
    }

    // Iterating Fibonacci's serie
    nextTerm = currentTerm + previousTerm;
    previousTerm = currentTerm;
    currentTerm = nextTerm;
  }

  return sum;
}

console.log(fibonacciEvenSum());
