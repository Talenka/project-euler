/**
 * You are given the following information, but you may prefer to do some
 * research for yourself.
 *
 * * 1 Jan 1900 was a Monday.
 * * Thirty days has September, April, June and November.
 *   All the rest have thirty-one,
 *   Saving February alone,
 *   Which has twenty-eight, rain or shine.
 *   And on leap years, twenty-nine.
 * * A leap year occurs on any year evenly divisible by 4, but not on a century
 *   unless it is divisible by 400.
 *
 * How many Sundays fell on the first of the month during the twentieth
 * century (1 Jan 1901 to 31 Dec 2000)?
 *
 * Source : https://projecteuler.net/problem=19
 * Result : 171
 * Time: 19ms
 */
'use strict';


/**
 * @param {number} m
 * @param {number} y
 * @return {number}
 */
function monthLength(m, y) {
  if (m === 2) return isLeapYear(y) ? 29 : 28;
  if (m === 4 || m === 6 || m === 9 || m === 11) return 30;
  return 31;
}


/**
 * @param {number} y
 * @return {boolean}
 */
function isLeapYear(y) {
  return (y % 4 === 0 && (y % 100 !== 0 || y % 400 === 0)) ? true : false;
}

let current = [1900, 1, 1];

const start = [1901, 1, 1];

const end = [2000, 12, 31];

let sundaysFirst = 0;

let dayOfTheWeek = 1;

let year;
let month;
let day;

while (current[0] < end[0] || current[1] < end[1] || current[2] < end[2]) {
  year = current[0];
  month = current[1];
  day = current[2];

  if (dayOfTheWeek % 7 === 0 &&
      day === 1 &&
      current[0] >= start[0] &&
      current[1] >= start[1] &&
      current[2] >= start[2]) {
    sundaysFirst++;
  }

  dayOfTheWeek++;

  if (day === monthLength(month, year)) {
    if (month === 12) current = [year + 1, 1, 1];
    else current = [year, month + 1, 1];
  } else current = [year, month, day + 1];
}

self.postMessage('Sundays first of a month: ' + sundaysFirst, []);
