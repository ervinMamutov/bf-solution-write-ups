'use strict';

/**
 * reverse an integer
 *
 * @param {number} x
 * @return {number}
 */

export const reverseInt = function (x) {
    const sign = Math.sign(x);
    const stringNumber = String(Math.abs(x));
    const num = parseInt(stringNumber.split('').reverse().join(''), 10);
    return num > (-2) ** 31 && num < 2 ** 31 - 1 ? num * sign : 0;
};
