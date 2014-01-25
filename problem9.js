/**
 * Return the product of an pythagorean triplet whose sum is 1000.
 *
 * A pythagorean triplet is a triplet of integers (a, b, c), 0 < a < b < c,
 * which satisfy :
 *
 * [1]    a^2 + b^2 = c^2
 *
 * In fact this is a rectangle triangle whose sides dimensions are integers.
 *
 * Here we are looking for the product a * b * c of the special pythagorean
 * triplet that satisfy :
 *
 * [2]    a + b + c = 1000
 *
 * Equation [2] is equivalent to c = 1000 - a - b, which can be introduced in
 * equation [1] to find a relation for integers a and b:
 *
 * 0 = (1000 - a - b)^2 - a^2 - b^2
 *   = (1000000 + a^2 + b^2 - 2000 * a - 2000 * b + 2 * a * b) - a^2 - b^2
 *   = 1000000 - 2000 * a - 2000 * b + 2 * a * b
 *
 * Hence:
 * [3]    a + b - 500 = a * b / 1000
 *
 *
 * Plus, we have sympathetic upper bounds: a < 500 and b < 500.
 *
 * Source: https://projecteuler.net/problem=9
 * Result: 31875000 (a = 200; b = 375, c = 425)
 * Time: 15ms
 */

/** @type {number} */
var c;

for (var a = 1; a < 500; a++) {
  for (var b = a + 1; b < 500; b++) {

    c = 1000 - a - b;

    if (a * a + b * b == c * c) {
      self.postMessage('The product: ' + a * b * c, []);

      self.close();
    }
  }
}
