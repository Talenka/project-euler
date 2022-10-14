/**
 * Reciprocal cycles (problem #26)
 * ===============================
 * 
 * A unit fraction contains 1 in the numerator. The decimal representation of
 * the unit fractions with denominators 2 to 10 are given:
 *
 * 1/2 = 0.5
 * 1/3 = 0.(3)
 * 1/4 = 0.25
 * 1/5 = 0.2
 * 1/6 = 0.1(6)
 * 1/7 = 0.(142857)
 * 1/8 = 0.125
 * 1/9 = 0.(1)
 * 1/10 = 0.1
 *
 * Where 0.1(6) means 0.166666..., and has a 1-digit recurring cycle. It can be
 * seen that 1/7 has a 6-digit recurring cycle.
 *
 * Find the value of d < 1000 for which 1/d contains the longest recurring cycle
 * in its decimal fraction part.
 *
 * ========
 * Solution
 * ========
 * If there is a reciprocal cycle for n > 1, it mean there we can write:
 *
 * 1/n = x * Sum(i=1 to Inf)[10**-(l*e)]
 *
 * With cycle x is of length l, i.e. l = Floor(log10(x)), and 1 <= x < 10**l
 *
 * Sum(i=1 to Inf)[1/(base**e)] = 1 / (base - 1), it is a well known result for
 * geometric series, here with base = 10**length.
 *
 * We can write 1/n = x / (10 ** length - 1)
 *
 * Which mean (10 ** length - 1) is divisible by n. The reciprocal cycle for n
 * is the lowest length for which (10 ** length - 1) is divisible by n.
 *
 * Optimization: we can note also that max length for a cycle is n - 1.
 * Result: 983, with a reciprocal cycle of 982 digits.
 */
'use strict';


/**
 * @param {BigInt} max
 */
function longestReciprocalCycleBelow(max) {
  const cycles = {};

  for (let n = 2n; n < max; n++) {
    for (let length = n - 1n; length > 0; length--) {
      if ((10n ** length - 1n) % n === 0n) {
        cycles[n] = length;
      }
    }
  }

  let maxLength = 0n;
  let maxCycle = 0n;

  for (const n in cycles) {
    if (cycles[n] > maxLength) {
      maxLength = cycles[n];
      maxCycle = n;
    }
  }

  console.log(maxCycle, maxLength);
  console.log(cycles);
}

longestReciprocalCycleBelow(1000n);
