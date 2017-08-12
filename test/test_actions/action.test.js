import countUp from 'actions';

describe('actions/index.js', () => {
  it('count up number', () => {
    expect(countUp()).toEqual({
      type: 'COUNT_UP_NUMBER'
    });
  });
});