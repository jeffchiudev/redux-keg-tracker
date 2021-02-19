import kegListReducer from '../../reducers/keg-list-reducer';

describe('kegListReducer', () => {
  
  test('should return default statei f there is no action type passed into reducer', () => {
    expect(kegListReducer({}, { type: null })).toEqual({});
  });

});
