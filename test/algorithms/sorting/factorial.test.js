
const bubbleSort = require('../../../src/algorithms/sorting/bubble_sort');
const expect = require('chai').expect;

describe('bubble sort', () => {
  it('should get sorted array', () => {
    expect(bubbleSort([4, 3, 2, 1])).to.deep.equal([1, 2, 3, 4]);
    expect(bubbleSort([1, 2, 3, 4])).to.deep.equal([1, 2, 3, 4]);
    expect(bubbleSort([4, 3])).to.deep.equal([3, 4]);
    expect(bubbleSort([4])).to.deep.equal([4]);
    expect(bubbleSort([])).to.deep.equal([]);
  });
});
