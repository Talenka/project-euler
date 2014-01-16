/**
 * Return the 10001st prime number.
 *
 * Source: https://projecteuler.net/problem=7
 * @return {number}
 */
function problem7()
{
  var PrimesList = [2],
      PrimesNumber = 1,
      n = 2;

  while (PrimesNumber < 10001) {

    n++;

    // Find if n is divisible by one the first primes.
    for (i = 0; i < PrimesNumber; i++) {
      if (n % PrimesList[i] == 0) break;
    }

    // If not, n is prime
    if (i == PrimesNumber) {
      PrimesList.push(n);
      PrimesNumber++;
    }
  }

  return n; // --> 104743
}
