/**
 * Return the sum of even terms n < 4000000 of Fibonacci serie.
 *
 * Source: https://projecteuler.net/problem=2
 *
 * Result: 4613732
 * Time: 12ms
 */


/** @type {number} */
var previousTerm = 1;

/** @type {number} */
var currentTerm = 2;

/** @type {number} */
var nextTerm;

/** @type {number} */
var sum = 0;

while (currentTerm < 4000000) {

  if (currentTerm % 2 == 0) sum += currentTerm;

  nextTerm = currentTerm + previousTerm;
  previousTerm = currentTerm;
  currentTerm = nextTerm;
}

self.postMessage('Sum: ' + sum, []);
