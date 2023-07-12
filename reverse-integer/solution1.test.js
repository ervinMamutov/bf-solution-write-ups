'use strict';

import { reverseInt } from './solution1.js';

describe('Basic Tests', () => {
    it(' 1 + 2  ->  3', () => {
        expect(reverseInt(123)).toEqual(321);
    });
    it('should return 3 when 8 is passed', () => {
        expect(reverseInt(-123)).toEqual(-321);
    });
    it('should return 4 when 11 is passed', () => {
        expect(reverseInt(1534236469)).toEqual(0);
    });
});
