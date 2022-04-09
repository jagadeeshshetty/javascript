
const linearSearch = require('../../../src/algorithms/search/linearSearch');
const expect = require('chai').expect;

describe('linear search', () => {
  it('should get 0 index for first item', () => {
    expect(linearSearch([1, 2, 3, 4, 5, 6], 1)).to.equal(0);
  });

  it('should get 5 index for last item', () => {
    expect(linearSearch([1, 2, 3, 4, 5, 6], 6)).to.equal(5);
  });

  it('should get -1 as item not present in the array', () => {
    expect(linearSearch([1, 2, 3, 4, 5, 6], 7)).to.equal(-1);
  });

  it('should get -1 for an empty array', () => {
    expect(linearSearch([], 7)).to.equal(-1);
  });
});
