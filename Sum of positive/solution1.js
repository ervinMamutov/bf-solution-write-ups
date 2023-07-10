'use strict';

/**
 * return the sum of all of the positives numbers
 * @param [number] arr origin array
 * @returns [number] sum of ten number
 */

function positiveSum(arr) {
    let sum = 0;
    for (let i of arr) {
        if (i > 0) {
            sum += i;
        }
    }
    return sum;
}
