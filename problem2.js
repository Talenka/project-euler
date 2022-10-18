/**
 * Return the sum of even terms n < 4000000 of Fibonacci serie.
 *
 * @see https://projecteuler.net/problem=2
 * Solution: 4613732
 */
'use strict';

/** @return {number} */
function fibonacciEvenSum() {
  let previousTerm = 1;
  let currentTerm = 2;
  let nextTerm;
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
