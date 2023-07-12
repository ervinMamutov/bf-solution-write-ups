'use strict';

import { sumInteger } from './solution1.js';

describe('Basic Tests', () => {
    it('16  -->  1 + 6 = 7', () => {
        expect(sumInteger(16)).toEqual(7);
    });
    it('942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6', () => {
        expect(sumInteger(942)).toEqual(6);
    });
    it('132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6', () => {
        expect(sumInteger(132189)).toEqual(6);
    });
    it('493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2', () => {
        expect(sumInteger(493193)).toEqual(2);
    });
});
