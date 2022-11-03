/**
 * Cuboid route
 *
 * A spider, S, sits in one corner of a cuboid room, measuring 6 by 5 by 3, and
 * a fly, F, sits in the opposite corner. By traveling on the surfaces of the
 * room the shortest "straight line" distance from S to F is 10 and the path is
 * shown on the diagram.
 *
 * However, there are up to three "shortest" path candidates for any given
 * cuboid and the shortest route doesn't always have integer length.
 * It can be shown that there are exactly 2060 distinct cuboids, ignoring
 * rotations, with integer dimensions, up to a maximum size of M by M by M, for
 * which the shortest route has integer length when M = 100. This is the least
 * value of M for which the number of solutions first exceeds two thousand; the
 * number of solutions when M = 99 is 1975.
 *
 * Find the least value of M such that the number of solutions first exceeds one
 * million.
 *
 * @see {@link https://projecteuler.net/problem=86}
 * Solution:
 *
 * For a triplet (a, b, c), the shortest paths are hypotenuses h of the right
 * triangle formed by one side and the sum of the other sides (Pythagoras):
 *    h**2 = a**2 + (b+c)**2,
 * or h**2 = b**2 + (a+c)**2,
 * or h**2 = c**2 + (a+b)**2.
 *
 * Given that we do not count rotations, idem est permutations of (a, b, c), we
 * can arrange that 0 < a ≤ b ≤ c ≤ Max. Hence the shortest path is always :
 * h = sqrt(c**2 + (a+b)**2) ≤ Max * sqrt(5).
 *
 * It is not said explicitly, but we do not consider a, b, or c equal zero.
 */
'use strict';

/**
 * Naive version (work perfectly but slow)
 * @param  {number}  max Maximum length of shortest paths
 * @return {integer}
 */
function countDistinctCuboidsWithIntegerShortestPath(max) {
  let count = 0;
  const m = max * Math.sqrt(5);

  for (let a = 1; a <= max; a++) {
    for (let b = a; b <= max; b++) {
      const r = (a+b)**2;
      for (let c = b; c <= max; c++) {
        const f = c*c+r;
        for (let d = c; d < m; d++) {
          const g = d*d;
          if (g > f) break;
          if (g === f) {
            count++;
            break;
          }
        }
      }
    }
  }

  return count;
}

console.time();
console.log(countDistinctCuboidsWithIntegerShortestPath(666));
console.timeEnd();
