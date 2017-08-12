import CountupReducer from 'reducers';

describe('reducers/index.js', () => {
  it('should handle initial state', () => {
    expect(CountupReducer(undefined, {})).toEqual({
      number: 0
    });
  });

  it('should handle COUNT_UP_NUMBER', () => {
    expect(CountupReducer({
      number: 3
    }, {
      type: 'COUNT_UP_NUMBER'
    })).toEqual({
      number: 4
    });
  });
});
