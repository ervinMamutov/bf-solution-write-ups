'use strict';

/**
 * Sum of two numbers.
 *
 * @param {number} num1 - The first number to sum.
 * @param {number} num2 - The second number to sum.
 * @returns {number} - Sum of num1 and num2.
 */

export const romanToInteger = (roman) => {
    const romanNumber = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };

    const convertNumber = roman.split('').map((item) => romanNumber[item]);
    const romanSum = convertNumber.reduce(
        (acc, num, i) => (num < convertNumber[i + 1] ? acc - num : acc + num),
        0,
    );

    return romanSum;
};

console.log(romanToInteger('IX'));
