import editingReducer from '../../reducers/edit-reducer';
import * as c from './../../actions/ActionTypes';

describe ("editingReducer", () => {

  test('should return default state if no action type is recognized', () => {
    expect(editingReducer(false, { type: null })).toEqual(false);
  });

  test('should toggle visibility state to true', () => {
    expect(editingReducer(false, { type: c.TOGGLE_EDIT})).toEqual(true);
  });
})