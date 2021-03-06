import rootReducer from '../../reducers/index';
import { createStore } from 'redux';
import formVisibleReducer from '../../reducers/form-visible-reducer';
import kegListReducer from '../../reducers/keg-list-reducer';
import editingReducer from '../../reducers/edit-reducer';
import * as c from './../../actions/ActionTypes';

let store = createStore(rootReducer);

describe ("rootReducer", () => {

  test('should return default state if no action type is recognized', () => {
    expect(rootReducer({}, { type: null })).toEqual({
      masterKegList: {},
      formVisibleOnPage: false,
      editing: false
    });
  });

  test('check that initial state of kegListReducer matches root reducer', () => {
    expect(store.getState().masterKegList).toEqual(kegListReducer(undefined, { type: null }));
  });

  test('check that initial state of formVisibleReducer matches root reducer', () => {
    expect(store.getState().formVisibleOnPage).toEqual(formVisibleReducer(undefined, { type: null}))
  });

  test('check that ADD_KEG works for kegListReducer and root reducer', () => {
    const action = {
      type: c.ADD_KEG,
      name: 'Pilsner',
      brand: 'Molson',
      price: '20',
      flavor: 'water',
      quantity: '124',
      id: 1,
    }
    store.dispatch(action);
    expect(store.getState().masterKegList).toEqual(kegListReducer(undefined, action));
  });

  test('Check that TOGGLE_FORM action works for formVisibleReducer and root reducer', () => {
    const action = {
      type: c.TOGGLE_FORM,
    }
    store.dispatch(action);
    expect(store.getState().formVisibleOnPage).toEqual(formVisibleReducer(undefined, action));
  });

  test('Check that TOGGLE_EDIT action works for formVisible and rootReducer', () => {
    const action = {
      type: c.TOGGLE_EDIT,
    }
    store.dispatch(action);
    expect(store.getState().editing).toEqual(editingReducer(undefined, action));
  });

});