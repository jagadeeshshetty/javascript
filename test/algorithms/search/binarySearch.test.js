
const binarySearch = require('../../../src/algorithms/search/binarySearch');
const expect = require('chai').expect;

describe('binary search', () => {
  it('should get 0 index for first item', () => {
    expect(binarySearch([1, 2, 3, 4, 5, 6], 1)).to.equal(0);
  });

  it('should get 3 index for the mid item', () => {
    expect(binarySearch([1, 2, 3, 4, 5, 6, 7], 4)).to.equal(3);
  });

  it('should get 5 index for last item', () => {
    expect(binarySearch([1, 2, 3, 4, 5, 6], 6)).to.equal(5);
  });

  it('should get 1 index for the item less than the middle', () => {
    expect(binarySearch([1, 2, 3, 4, 5, 6], 2)).to.equal(1);
  });

  it('should get 4 index for the item greater than the middle', () => {
    expect(binarySearch([1, 2, 3, 4, 5, 6], 5)).to.equal(4);
  });

  it('should get -1 as item not present in the array', () => {
    expect(binarySearch([1, 2, 3, 4, 5, 6], 7)).to.equal(-1);
  });

  it('should get -1 for an empty array', () => {
    expect(binarySearch([], 7)).to.equal(-1);
  });
});
