'use strict';

import solution from './solution1.js';

describe('basic tests', () => {
    it('number ends in zero', () => {
        expect(solution(10)).toEqual(23);
    });
    it('number ends in zero', () => {
        expect(solution(20)).toEqual(78);
    });
    it('number ends in zero', () => {
        expect(solution(200)).toEqual(9168);
    });
});
describe('small tests', () => {
    it('number ends in zero', () => {
        expect(solution(-1)).toEqual(0);
    });
    it('number ends in zero', () => {
        expect(solution(0)).toEqual(0);
    });
    it('number ends in zero', () => {
        expect(solution(1)).toEqual(0);
    });
    it('number ends in zero', () => {
        expect(solution(2)).toEqual(0);
    });
    it('number ends in zero', () => {
        expect(solution(3)).toEqual(0);
    });
    it('number ends in zero', () => {
        expect(solution(4)).toEqual(3);
    });
    it('number ends in zero', () => {
        expect(solution(5)).toEqual(3);
    });
    it('number ends in zero', () => {
        expect(solution(6)).toEqual(8);
    });
});
