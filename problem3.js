/**
 * Return the largest prime factor of N = 600851475143.
 *
 * TODO : too much recursion
 *
 * Source: https://projecteuler.net/problem=3
 * @return {number}
 */
function problem3()
{
  var N = 600851475143,
      Max = Math.sqrt(N),
      n;

  // Find the least integer which divide N
  for (n = 2; n <= Max; n++) {
    if (N % n == 0) return Math.max(n, problem3(N / n));
  }

  // If there is none, N is prime.
  return N;
}
