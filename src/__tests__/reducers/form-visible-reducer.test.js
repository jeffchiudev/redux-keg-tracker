import formVisibleReducer from '../../reducers/form-visible-reducer';
import * as c from './../../actions/ActionTypes';

describe ("formVisibleReducer", () => {
  
  test('should return default state if no action is recognized', () => {
    expect(formVisibleReducer(false, { type: null })).toEqual(false);
  });

  test('should toggle visibility state to true', () => {
    expect(formVisibleReducer(false, { type: c.TOGGLE_FORM })).toEqual(true);
  });

});