
const linearSearch = require('../../../src/algorithms/search/search');
const expect = require('chai').expect;

describe('search', () => {
  it('should get 0 index for first item', () => {
    const search = new linearSearch([1, 2, 3, 4, 5, 6], 1);
    expect(search.linearSearch()).to.equal(0);
  });

  it('should get 5 index for last item', () => {
    const search = new linearSearch([1, 2, 3, 4, 5, 6], 6);
    expect(search.linearSearch([1, 2, 3, 4, 5, 6], 6)).to.equal(5);
  });

  it('should get -1 as item not present in the array', () => {
    const search = new linearSearch([1, 2, 3, 4, 5, 6], 7);
    expect(search.linearSearch([1, 2, 3, 4, 5, 6], 7)).to.equal(-1);
  });

  it('should get -1 for an empty array', () => {
    const search = new linearSearch([], 7);
    expect(search.linearSearch([], 7)).to.equal(-1);
  });
});
