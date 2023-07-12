'use strict';

/**
 * Sum of digits
 *
 * @param {number} num1 - The first number to sum.
 * @param {number} num2 - The second number to sum.
 * @returns {number} - Sum of num1 and num2.
 */

/*
16  -->  1 + 6 = 7
   942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2
*/

export const sumInteger = (num) => {
    /*  if (!Number.isInteger(num)) {
        throw new TypeError('num is not an integer');
    } */
    const numberString = String(num);

    const sum = numberString
        .split('')
        .reduce((acc, str) => acc + Number(str), 0);

    return sum >= 10 ? sumInteger(sum) : sum;
};

console.log(sumInteger(132189));
