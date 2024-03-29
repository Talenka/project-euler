/**
 * Coded triangle numbers
 *
 * The n-th term of the sequence of triangle numbers is given by, tn = n(n+1)/2;
 * so the first ten triangle numbers are:
 * 1, 3, 6, 10, 15, 21, 28, 36, 45, 55, ...
 * By converting each letter in a word to a number corresponding to its
 * alphabetical position and adding these values we form a word value.
 * For example, the word value for SKY is 19 + 11 + 25 = 55 = t10.
 * If the word value is a triangle number then we shall call the word a triangle
 * word.
 *
 * Using p042_words.js, a 16K text file containing nearly two-thousand common
 * English words, how many are triangle words?
 *
 * @see {@link https://projecteuler.net/problem=42}
 * Solution: 162
 */
'use strict';

/**
 * @param  {string} word
 * @return {integer}
 */
function wordValue(word) {
  let result = 0;
  for (let i = 0; i < word.length; i++) {
    result += word.charCodeAt(i) - 64;
  }
  return result;
}

/** @return {integer} */
function searchTriangleWords() {
  const triangles = [];
  let triangleWords = 0;

  for (let t = 1; t < 42; t++) triangles[t] = t * (t + 1) / 2;

  console.log(triangles);

  for (let i = 0; i < words.length; i++) {
    if (triangles.indexOf(wordValue(words[i])) !== -1) triangleWords++;
  }

  return triangleWords;
}

console.log(searchTriangleWords());
