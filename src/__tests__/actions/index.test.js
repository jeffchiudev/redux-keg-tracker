import * as actions from './../../actions';

describe('help quue actions', () => {

  it('deleteKeg should create DELETE_KEG action', () => {
    expect(actions.deleteKeg(1)).toEqual({
      type: 'DELETE_KEG',
      id: 1,
    });
  });

  it('toggleForm should create TOGGLE_FORM action', () => {
    expect(actions.toggleForm()).toEqual({
      type: 'TOGGLE_FORM'
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
      type: 'ADD_KEG',
      name: 'Pilsner',
      brand: 'Molson',
      price: '20',
      flavor: 'water',
      quantity: '124',
      id: 1,
    });
  });

});