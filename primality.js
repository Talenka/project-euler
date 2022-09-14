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
   * @type {Array.<BigInt>}
   */
  primes: [2n, 3n],

  /**
   * @param {BigInt} n
   */
  addPrime: function(n) {
    n = this.unsign(n);

    if (this.primes.indexOf(n) !== -1) {
      throw new Error('trying to add an already known prime to list:', n);
    }

    this.primes.push(n);
  },

  /**
   * @param {BigInt} n
   */
  countPrimesUnder: function(n) {
    console.time('BigMath.countPrimesUnder');
    const alreadyFoundPrimes = this.primes.length;

    for (let i = this.primes[this.primes.length - 1]; i < n; i += 2n) {
      this.isPrime(i);
    }

    console.log('primes number:', this.primes.length);
    console.log('New primes:', this.primes.length - alreadyFoundPrimes);
    console.timeLog('BigMath.countPrimesUnder');
  },

  // Try to convert n to a BigInt
  /**
   * @param {number|string|BitInt} n
   * @return {BigInt}
   */
  big: function(n) {
    return BigInt(n);
  },

  /**
   * Returns factors of n in an array [[m_i, a_i], ...] which are respectively
   * factors and corresponding exponents giving n, i.e.:
   * n = m_0 ** e_0 ... * m_? ** e_?
   * n, m_i and e_i are BigInt
   *
   * @param {BigInt} n
   * @return {Array.<Array.<BigInt>>}
   * */
  factorize: function(n) {
    n = this.unsign(n);

    if (this.isPrime(n)) {
      return [[n, 1n]];
    }
  },

  /**
   * @param {BigInt} n
   * @return {BigInt}
   */
  factorial: function(n) {
    n = this.unsign(n);

    let f = 1n;

    while (n > 1n) {
      f *= n;
      n--;
    }

    return f;
  },

  init: function() {
    // Is firstPrimes.js is included before, we use it:
    if (firstPrimes && firstPrimes instanceof Array) this.primes = firstPrimes;
  },

  /**
   * @param {BigInt} n
   * @return {boolean}
   */
  isPrime: function(n) {
    // We do not care about sign here
    n = this.unsign(n);

    // One and Zero are not eligible for primality.
    if (n < 2n) {
      return false;
    }

    const p = this.primes;

    // If n a known prime, nothing more to do
    if (p.indexOf(n) !== -1) {
      return true;
    }

    // The square root of n is the upper limit for a factor for n
    const max = this.sqrt(n);

    // If n is divisible by a known prime, it is not a prime
    for (let i = 0, l = p.length; i < l; i++) {
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
   * @param {BigInt} n
   * @return {BigInt}
   */
  log2: function(n) {
    n = this.unsign(n);

    if (n === 0n) {
      throw new Error('log2(0) is negative infinity.');
    }

    let powerOfTwo = 0n;

    while (n >= 2n) {
      powerOfTwo ++;
      n /= 2n; // Alternatively, n = n >> 1n.
    }

    return powerOfTwo;
  },

  /**
   * @param {BigInt} n
   * @return {BigInt}
   */
  sqrt: function(n) {
    if (n < 0n) {
      throw new Error('sqrt(n < 0) is not BigInt. n: ' + n.toString());
    }

    n = n.toString() * 1;

    return this.big(Math.ceil(Math.sqrt(n)));
  },


  /**
   * @param {BigInt} n
   * @return {BigInt}
   */
  unsign: function(n) {
    if (typeof n !== 'bigint') {
      throw new TypeError(n.toString() + ' is not BigInt.');
    }

    if (n < 0n) {
      n *= -1n;
    }

    return n;
  },
};

BigMath.init();
