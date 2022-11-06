/**
 * Right triangles with integer coordinates
 *
 * The points P (x1, y1) and Q (x2, y2) are plotted at integer co-ordinates and
 * are joined to the origin, O(0,0), to form ΔOPQ.
 *
 * There are exactly fourteen triangles containing a right angle that can be
 * formed when each co-ordinate lies between 0 and 2 inclusive; that is,
 * 0 ≤ x1, y1, x2, y2 ≤ 2.
 *
 * Given that 0 ≤ x1, y1, x2, y2 ≤ 50, how many right triangles can be formed?
 *
 * @see {@link https://projecteuler.net/problem=91}
 * Solution: 14234
 */
'use strict';

/**
 * @param  {integer} max
 * @return {integer}
 */
function integerRightTriangles(max) {
  let count = 0;

  for (let x1 = 0; x1 <= max; x1++) {
    for (let y1 = 0; y1 <= max; y1++) {
      const a = x1**2 + y1**2;
      if (a === 0) continue;
      for (let x2 = 0; x2 <= max; x2++) {
        for (let y2 = 0; y2 <= max; y2++) {
          const b = x2**2 + y2**2;
          if (b === 0) continue;
          const c = (x2-x1)**2 + (y2-y1)**2;
          if (c === 0) continue;
          if (c === a + b || a === c + b || b === a + c) count++;
        }
      }
    }
  }

  return count / 2;
}

console.log(integerRightTriangles(50));
