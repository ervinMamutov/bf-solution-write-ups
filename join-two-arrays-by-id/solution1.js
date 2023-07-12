'use strict';

/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */

const join = (arr1, arr2) => {
    const mergedObject = {};

    for (const obj of arr1.concat(arr2)) {
        const objId = obj.id;
        if (mergedObject[objId]) {
            Object.assign(mergedObject[objId], obj);
        } else {
            mergedObject[objId] = { ...obj };
        }
    }

    const joinArray = Object.values(mergedObject);
    joinArray.sort((a, b) => a.id - b.id);

    return joinArray;
};

console.log(
    join(
        [
            { id: 1, x: 2, y: 3 },
            { id: 2, x: 3, y: 6 },
        ],
        [
            { id: 2, x: 10, y: 20 },
            { id: 3, x: 0, y: 0 },
        ],
    ),
);
