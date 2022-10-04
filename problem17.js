/**
 * If the numbers 1 to 5 are written out in words: one, two, three, four, five,
 * then there are 3 + 3 + 5 + 4 + 4 = 19 letters used in total.
 *
 * If all the numbers from 1 to 1000 (one thousand) inclusive were written out
 * in words, how many letters would be used?
 *
 * NOTE: Do not count spaces or hyphens. For example, 342 (three hundred and
 * forty-two) contains 23 letters and 115 (one hundred and fifteen) contains 20
 * letters. The use of "and" when writing out numbers is in compliance with
 * British usage.
 *
 * Source : https://projecteuler.net/problem=17
 *
 * Result: 21124
 * Time: 14ms
 */
'use strict';


/**
 * @param {number} n
 * @return {string}
 */
function numberName(n) {
  if (n === 1000) {
    return 'one' + 'thousand';
  } else if (n >= 100) {
    return numberNames[Math.floor(n / 100)] + 'hundred' +
           ((n % 100 === 0) ? '' : 'and' + numberName(n % 100));
  } else if (n >= 20) {
    return tensNumberNames[Math.floor(n / 10)] +
           ((n % 10 === 0) ? '' : numberName(n % 10));
  } else return numberNames[n];
}

/** @type {number} */
let totalLettersNumbers = 0;

/** @type {Array.<string>} */
const numberNames = [
  'zero',
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine',
  'ten',
  'eleven',
  'twelve',
  'thirteen',
  'fourteen',
  'fifteen',
  'sixteen',
  'seventeen',
  'eighteen',
  'nineteen'];

/** @type {Array.<string>} */
const tensNumberNames = [
  'zero',
  'ten',
  'twenty',
  'thirty',
  'forty',
  'fifty',
  'sixty',
  'seventy',
  'eighty',
  'ninety'];


for (let i = 1; i <= 1000; i++) totalLettersNumbers += numberName(i).length;

console.log('Letters number:', totalLettersNumbers);
