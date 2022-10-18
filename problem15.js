/**
 * Starting in the top left corner of a 2 * 2 grid, and only being able to move
 * to the right and down, there are exactly 6 routes to the bottom right corner.
 *
 * How many such routes are there through a N * N grid, with N = 20?
 *
 * This is just the number of permutations with repetition.
 * (See https://fr.wikipedia.org/wiki/Permutation_avec_r%C3%A9p%C3%A9tition)
 *
 * Here this is just (2N)! / (N!)^2
 *
 * @see https://projecteuler.net/problem=15
 * Result: 137846528820
 */
'use strict';

const N = 20;
let routesNumber = 1;

for (let i = 1; i <= N; i++) routesNumber *= (N + i) / i;

console.log('Routes number', routesNumber);
