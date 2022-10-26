/**
 * Pass-code derivation
 *
 * A common security method used for online banking is to ask the user for three
 * random characters from a pass-code.
 *
 * For example, if the pass-code was 531278, they may ask for the 2nd, 3rd, and
 * 5th characters; the expected reply would be: 317.
 *
 * Here we know fifty successful login attempts.
 *
 * Given that the three characters are always asked for in order, analyze keylog
 * so as to determine the shortest possible secret pass-code of unknown length.
 *
 * @see {@link https://projecteuler.net/problem=79}
 * Solution: 73162890
 */
'use strict';

/** @return {{exists: integer[], precedes: integer[]}} */
function understandKeylog() {
  const keylog = [319, 680, 180, 690, 129, 620, 762, 689, 762, 318, 368, 710,
    720, 710, 629, 168, 160, 689, 716, 731, 736, 729, 316, 729, 729, 710, 769,
    290, 719, 680, 318, 389, 162, 289, 162, 718, 729, 319, 790, 680, 890, 362,
    319, 760, 316, 729, 380, 319, 728, 716];

  const existences = []; // List of "there is a X in the pass-code"
  const precedences = {}; // List of "there is a X before a Y in the pass-code"

  for (let i = 0, k = keylog.length; i < k; i++) {
    const l = keylog[i].toString().split('');

    for (let j = 0, jm = l.length; j < jm; j++) {
      if (existences.indexOf(l[j]) === -1) {
        existences.push(l[j]);
        precedences[l[j]] = [];
      }

      if (j < jm - 1) {
        if (precedences[l[j]].indexOf(l[j+1]) === -1) {
          precedences[l[j]].push(l[j+1]);
        }
      }
    }
  }

  return {'exists': existences, 'precedes': precedences};
}

/**
 * @param  {string} passcode
 * @param  {{exists: integer[], precedes: integer[]}} conditions
 * @return {boolean}
 */
function testPasscode(passcode, conditions) {
  if (passcode.length < conditions.exists.length) {
    console.log('Length must be ≥ ' + conditions.exists.length, passcode);
    return false;
  }

  for (const e in conditions.exists) {
    if (passcode.indexOf(conditions.exists[e]) === -1) {
      console.log('Pass-code contains ' + conditions.exists[e], passcode);
      return false;
    }
  }

  // eslint-disable-next-line guard-for-in
  for (const p in conditions.precedes) {
    const b = conditions.precedes[p];
    for (let i = 0; i < b.length; i++) {
      if (passcode.indexOf(p) > passcode.indexOf(b[i])) {
        console.log(p + ' must be before ' + b[i]);
        return false;
      }
    }
  }

  return true;
}

console.log(testPasscode('73162890', understandKeylog()));
