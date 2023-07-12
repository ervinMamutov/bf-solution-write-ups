'use strict';

import { numbersInt } from './solution1.js';

describe('Basic Tests', () => {
    it(' 123456', () => {
        expect(numbersInt(123456)).toEqual(6);
    });
    it('-123456', () => {
        expect(numbersInt(-123456)).toEqual(6);
    });
    it('0', () => {
        expect(numbersInt(0)).toEqual(1);
    });
});
