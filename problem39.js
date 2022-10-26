/**
 * Integer right triangles
 *
 * If p is the perimeter of a right angle triangle with integral length sides,
 * {a,b,c}, there are exactly three solutions for p = 120:
 * {20,48,52}, {24,45,51}, {30,40,50}
 *
 * For which value of p ≤ 1000, is the number of solutions maximized?
 *
 * @see {@link https://projecteuler.net/problem=39}
 * Solution: 840
 */
'use strict';

/** @return {integer} */
function maxDiffPerimeters() {
  const max = 1000;
  const perimeters = [];
  let pMax = 12; // 1st integer right triangle {3,4,5}

  for (let a = 1; a <= max; a++) {
    for (let b = a; b <= max; b++) {
      for (let c = a; c <= max; c++) {
        if (a*a + b*b === c*c) {
          const p = a + b + c;
          perimeters[p] = (p in perimeters) ? perimeters[p] + 1 : 1;
          if (perimeters[p] > perimeters[pMax] && p < max) pMax = p;
        }
      }
    }
  }

  return pMax;
}

console.log(maxDiffPerimeters());
