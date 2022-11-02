/**
 * Some hopefully useful functions to deal with (positive) big integers
 *
 * @author: Boudah Talenka (https://boudah.pl)
 * @license: GNU GPL v3+ (https://www.gnu.org/licenses/gpl-3.0.html)
 */
'use strict';

const BigMath = {

  /**
   * List of already found primes integers
   * @see firstPrimes.js for a lot more
   * @type {BigInt[]}
   */
  primes: [2n, 3n, 5n, 7n, 11n, 13n, 17n, 19n, 23n, 29n, 31n, 37n, 41n, 43n],

  /**
   * @param {BigInt} n
   */
  addPrime: function(n) {
    this.checkBigNat(n);

    if (this.primes.indexOf(n) !== -1) {
      // console.debug('trying to add an already known prime to list', n);
      return;
    }

    this.primes.push(n);
  },

  /**
   * Throw appropriate error if a number is not positive (natural) BigInt.
   * @param {BigInt} n
   */
  checkBigNat: function checkIfBigNatural(n) {
    if (typeof n !== 'bigint') throw new TypeError('bigint parameter required');
    if (n < 0n) throw new RangeError('positive integers only');
  },

  /**
   * @param  {BigInt} n
   * @return {integer}
   */
  countPrimesUnder: function(n) {
    this.checkBigNat(n);

    console.time('BigMath');

    for (let i = this.primes[this.primes.length - 1]; i < n; i += 2n) {
      this.isPrime(i);
    }

    console.timeEnd('BigMath');

    return this.primes.length;
  },

  /**
   * Try to convert n to a BigInt
   * @param  {number|string|BitInt} n
   * @return {BigInt}
   */
  big: function(n) {
    return BigInt(n);
  },

  /**
   * @param  {BigInt} n
   * @return {BigInt}
   */
  factorial: function(n) {
    this.checkBigNat(n);

    let f = 1n;

    while (n > 1n) {
      f *= n--;
    }

    return f;
  },

  /**
   * @param  {BigInt} n
   * @return {BigInt[]}
   * @todo
   * */
  factorize: function(n) {
    this.checkBigNat(n);

    const max = this.sqrt(n);

    this.countPrimesUnder(max);

    if (this.isPrime(n)) return [n];

    const p = this.primes;

    const factors = [];

    for (let i = 0, l = p.length; i < l && p[i] <= max; i++) {
      // console.log(n, p[i], max);
      if (n % p[i] === 0n) {
        factors.push(p[i]);
        n /= p[i];
        i = -1;
        // @todo max = this.sqrt(n);
      }
    }

    if (this.isPrime(n)) factors.push(n);

    return factors;
  },

  init: function() {
    // Is firstPrimes.js is included before, we use it:
    if (firstPrimes && firstPrimes instanceof Array) this.primes = firstPrimes;
  },

  /**
   * @see https://en.wikipedia.org/wiki/Greatest_common_divisor
   * Section #Using_Euclid.27s_algorithm
   *
   * @param  {BigInt} a
   * @param  {BigInt} b
   * @return {BigInt}
   */
  gcd: function greatestCommonDivisor(a, b) {
    let c;

    if (b > a) {
      c = b;
      b = a;
      a = c;
    }

    if (a % b === 0n) return b;
    return this.gcd(b, a % b);
  },

  /**
   * @param  {BigInt} n
   * @return {boolean}
   */
  isPrime: function(n) {
    // We do not care about sign here
    n = this.unsign(n);

    // One and Zero are not eligible for primality.
    if (n < 2n) return false;

    const p = this.primes;

    // If n a known prime, nothing more to do
    if (p.indexOf(n) !== -1) return true;

    // The square root of n is the upper limit for a factor for n
    const max = this.sqrt(n);

    // If n is divisible by a known prime, it is not a prime
    for (let i = 0, l = p.length; i < l && p[i] <= max; i++) {
      if (n % p[i] === 0n) return false;
    }

    // At this point we do know that n is not divisible by any known prime.
    // Given that n > 2, primes are always even, so we start at 3 and then
    // increment the counter by 2.
    for (let i = p[p.length - 1]; i < max; i += 2n) {
      // If n is divisible by an integer i, it is not prime.
      if (n % i === 0n) {
        return false;
      }
    }

    this.addPrime(n);

    return true;
  },

  /**
   * @see https://en.wikipedia.org/wiki/Least_common_multiple
   * Section #Reduction_by_the_greatest_common_divisor
   *
   * @param  {BigInt} a
   * @param  {BigInt} b
   * @return {BigInt}
   */
  lcm: function leastCommonMultiple(a, b) {
    a = this.unsign(a);
    b = this.unsign(b);
    return a * b / this.gcd(a, b);
  },

  /**
   * @param  {BigInt} n
   * @return {BigInt}
   */
  log2: function logarithmBaseTwo(n) {
    this.checkBigNat(n);

    if (n === 0n) throw new Error('log2(0) is negative infinity.');

    let powerOfTwo = 0n;

    while (n >= 2n) {
      powerOfTwo++;
      n /= 2n; // Alternatively, n = n >> 1n.
    }

    return powerOfTwo;
  },

  /**
   * @param  {BigInt|number|string} n
   * @param  {integer} a origin digit index
   * @param  {integer} b digit index to swap with
   * @return {BigInt}
   */
  permutDigits: function(n, a, b) {
    if (typeof a !== 'number') throw new TypeError();
    if (typeof b !== 'number') throw new TypeError();

    const s = n.toString();

    if (a < 0 || a >= s.length) throw new RangeError();
    if (b < 0 || b >= s.length) throw new RangeError();

    if (a === b) return n;
    if (b < a) [a, b] = [b, a];

    return BigInt(s.substr(0, a) + s[b] +
                  s.substr(a + 1, b - a - 1) + s[a] +
                  s.substr(b + 1));
  },

  /**
   * @param  {BigInt}   n
   * @return {BigInt[]}
   */
  primesUnder: function(n) {
    this.checkBigNat(n);

    if (this.primes[this.primes.length - 1] < n) this.countPrimesUnder(n);

    const result = [];

    for (let i = 0; this.primes[i] <= n; i++) result.push(this.primes[i]);

    return result;
  },

  /**
   * @todo test
   * @param  {BigInt} a
   * @param  {BigInt} b
   * @return {BigInt[]} numerator and denominator of simplified function
   */
  reduceFraction: function(a, b) {
    while (b % a === 0) {
      const d = Math.min(a, b);
      a /= d;
      b /= d;
    }

    return [a, b];
  },

  /**
   * Based on Waldemar Horwat's work (MIT license),
   * @see    {@link https://github.com/waldemarhorwat/integer-roots/}
   * @todo   Clarify
   * @param  {BigInt} n
   * @return {BigInt}
   */
  sqrt: function squareRootOf(n) {
    this.checkBigNat(n);

    if (n === 0n) return 0n;

    let x = 1n << (this.log2(n) >> 1n); // Initial guess

    let next = (x + n / x) >> 1n;

    do {
      x = next;
    } while ((next = (x + n / x) >> 1n) < x);

    return x;
  },

  /**
   * @param  {BigInt} n
   * @return {BigInt}
   */
  unsign: function(n) {
    if (typeof n !== 'bigint') throw new TypeError('bigint parameter required');
    if (n < 0n) n *= -1n;
    return n;
  },

};

BigMath.init();
