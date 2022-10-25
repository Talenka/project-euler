/**
 * Roman numerals (problem #89)
 * ============================
 * For a number written in Roman numerals to be considered valid there are basic
 * rules which must be followed. Even though the rules allow some numbers to be
 * expressed in more than one way there is always a "best" way of writing a
 * particular number.
 *
 * For example, it would appear that there are at least six ways of writing the
 * number sixteen:
 * IIIIIIIIIIIIIII
 * VIIIIIIIIII
 * VVIIIII
 * XIIIII
 * VVV
 * XVI
 * However, according to the rules only XIIIIII and XVI are valid, and the last
 * example is considered to be the most efficient, as it uses the least number
 * of numerals.
 *
 * The 11K text file, roman.txt (right click and 'Save Link/Target As...'),
 * contains one thousand numbers written in valid, but not necessarily minimal,
 * Roman numerals; see https://projecteuler.net/about=roman_numerals for the
 * definitive rules for this problem.
 *
 * Find the number of characters saved by writing each of these in their minimal
 * form. Note: You can assume that all the Roman numerals in the file contain no
 * more than four consecutive identical units.
 *
 * @see {@link https://projecteuler.net/problem=89}
 * Solution: 743
 */
'use strict';

/**
 * @param  {string} litteral
 * @return {number}
 */
function romanToDecimal(litteral) {
  const expansion = litteral.replace('IV', 'IIII')
      .replace('IX', 'IIIIIIIII')
      .replace('XL', 'XXXX')
      .replace('XC', 'XXXXXXXXX')
      .replace('CD', 'CCCC')
      .replace('CM', 'CCCCCCCCC');

  const values = {M: 1000, D: 500, C: 100, L: 50, X: 10, V: 5, I: 1};
  let result = 0;

  for (let i = 0, l = expansion.length; i < l; i++) {
    result += values[expansion[i]];
  }

  return result;
}

/**
 * @param  {number} n
 * @return {string}
 */
function decimalToRoman(n) {
  let result = '';

  while (n >= 1000) {
    result += 'M';
    n -= 1000;
  }

  if (n >= 900) {
    result += 'CM';
    n -= 900;
  }

  if (n >= 500) {
    result += 'D';
    n -= 500;
  }

  if (n >= 400) {
    result += 'CD';
    n -= 400;
  }

  while (n >= 100) {
    result += 'C';
    n -= 100;
  }

  if (n >= 90) {
    result += 'XC';
    n -= 90;
  }

  if (n >= 50) {
    result += 'L';
    n -= 50;
  }

  if (n >= 40) {
    result += 'XL';
    n -= 40;
  }

  while (n >= 10) {
    result += 'X';
    n -= 10;
  }

  if (n >= 9) {
    result += 'IX';
    n -= 9;
  }

  if (n >= 5) {
    result += 'V';
    n -= 5;
  }

  if (n >= 4) {
    result += 'IV';
    n -= 4;
  }

  while (n >= 1) {
    result += 'I';
    n--;
  }

  return result;
}

/**
 * @param  {string[]} litterals
 * @return {number}
 */
function shrinkRomans(litterals) {
  let gain = 0;

  for (let i = 0, l = litterals.length; i < l; i++) {
    const s = decimalToRoman(romanToDecimal(litterals[i]));
    const g = litterals[i].length - s.length;
    if (g > 0) gain += g;
  }

  return gain;
}

console.log(shrinkRomans(romans));
