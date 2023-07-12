'use strict';

/**
 * Returns the sum of all integers numbers included in a number that is a divisible of 3 or 5.
 *
 * @param {number} number - Checked number.
 * @returns {number} - Sum of all integers number a divisible of 3 or 5.
 */

const solution = (number) => {
    let sum = 0;
    for (let i = 0; i < number; i++) {
        if (i % 3 <= 0 || i % 5 <= 0) {
            sum += i;
        }
    }
    return sum;
};

export default solution;
