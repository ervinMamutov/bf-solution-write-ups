'use strict';

/**
 * counts the integer's number of digits
 *
 * @param {number} num - number of digits
 * @returns {number} - count
 */

export const numbersInt = (num) => {
    if (!Number.isInteger(num)) {
        throw new TypeError('num is not an integer');
    }

    return String(Math.abs(num)).length;
};

console.log(numbersInt(-123123));
