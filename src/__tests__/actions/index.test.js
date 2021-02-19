import * as actions from './../../actions';
import * as c from './../../actions/ActionTypes';

describe('help quue actions', () => {

  it('deleteKeg should create DELETE_KEG action', () => {
    expect(actions.deleteKeg(1)).toEqual({
      type: c.DELETE_KEG,
      id: 1,
    });
  });

  it('toggleForm should create TOGGLE_FORM action', () => {
    expect(actions.toggleForm()).toEqual({
      type: c.TOGGLE_FORM,
    });
  });

  it('addTicket should create ADD_TICKET action', () => {
    expect(actions.addKeg({ 
      name: 'Pilsner',
      brand: 'Molson',
      price: '20',
      flavor: 'water',
      quantity: '124',
      id: 1,}))
    .toEqual({
      type: c.ADD_KEG,
      name: 'Pilsner',
      brand: 'Molson',
      price: '20',
      flavor: 'water',
      quantity: '124',
      id: 1,
    });
  });

  it('toggleEdit should create TOGGLE_EDIT action', () => {
    expect(actions.toggleEdit()).toEqual({
      type: c.TOGGLE_EDIT,
    });
  });

});