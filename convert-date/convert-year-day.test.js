'use strict';

import { convertDate } from './convert-year-day.js';

describe('Basic Tests', () => {
    it(' 0  ->  0', () => {
        expect(convertDate(0)).toEqual(0);
    });
    it('10 -> 3650', () => {
        expect(convertDate(10)).toEqual(3650);
    });
    it('65 -> 23725', () => {
        expect(convertDate(65)).toEqual(23725);
    });
});
