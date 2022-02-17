
const includes = require('../src/includes');
const assert = require('chai').assert;
const expect = require('chai').expect;

describe('includes', () => {
    it('should return true', () => {
        expect(includes([1, 2, 3, 4, 5], 3)).to.equal(true);
    });

    it('should return false', () => {
        expect(includes([1, 2, 3, 4, 5], 6)).to.equal(false);
    });
});
