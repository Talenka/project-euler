/**
 * Return the sum of prime numbers < 2000000
 * N = 600851475143.
 *
 * Source: https://projecteuler.net/problem=10
 */

var Primes = [2];
var PrimesSum = 2;
var N = 1;
var CurrentNumber = 3;
var MaxStep = 1000;

function problem10(Max) // Max = 2000000
{
  var i, j, cMax = Math.min(Max, CurrentNumber + MaxStep);

  for (i = CurrentNumber; i < cMax; i += 2) {

    for (j = 0; j < N; j++) {
      if (i % Primes[j] == 0) break;
    }

    // If i is not divisible by any previous primes, it's prime
    if (j == N) {
      Primes.push(i);
      PrimesSum += i;
      N++;
    }
  }

  CurrentNumber = i;

  document.title = CurrentNumber + ' / ' + Max;
  document.getElementById('result').value = PrimesSum;

  if (CurrentNumber < Max) window.setTimeout('problem10(' + Max + ')', 10);
}
