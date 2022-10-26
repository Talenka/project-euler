/**
 * Starting in the top left corner of a 2 * 2 grid, and only being able to move
 * to the right and down, there are exactly 6 routes to the bottom right corner.
 *
 * How many such routes are there through a N * N grid, with N = 20?
 *
 * This is just the number of permutations with repetition.
 * @see {@link https://fr.wikipedia.org/wiki/Permutation_avec_répétition}
 *
 * Strategy: here this is just (2N)! / (N!)^2
 * @see {@link https://projecteuler.net/problem=15}
 * Solution: 137846528820
 */
'use strict';

const N = 20;
let routesNumber = 1;

for (let i = 1; i <= N; i++) routesNumber *= (N + i) / i;

console.log(routesNumber);
