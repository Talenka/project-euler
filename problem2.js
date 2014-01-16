/**
 * Return the sum of even terms n < 4000000 of Fibonacci serie.
 *
 * Source: https://projecteuler.net/problem=2
 * @return {number}
 */
function problem2()
{
  var previousTerm = 1,
      currentTerm = 2,
      nextTerm,
      sum = 0;

  while (currentTerm < 4000000) {

    if (currentTerm % 2 == 0) sum += currentTerm;

    nextTerm = currentTerm + previousTerm;
    previousTerm = currentTerm;
    currentTerm = nextTerm;
  }

  return sum; // --> 4613732
}
