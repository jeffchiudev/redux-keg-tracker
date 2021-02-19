import kegListReducer from '../../reducers/keg-list-reducer';

describe('kegListReducer', () => {

  let action;
  const kegData = {
    name: 'Pilsner',
    brand: 'Molson',
    price: '20',
    flavor: 'water',
    quantity: '124',
    id: 1,
  };
  
  test('should return default state if there is no action type passed into reducer', () => {
    expect(kegListReducer({}, { type: null })).toEqual({});
  });

  test('should successfully add new keg data to masterKegList', () => {
    const { name, brand, price, flavor, quantity, id } = kegData;
    action = {
      type: 'ADD_KEG',
      name,
      brand,
      price,
      flavor,
      quantity,
      id,
    };

    expect(kegListReducer({}, action)).toEqual({
      [id] : {
        name,
        brand,
        price,
        flavor,
        quantity,
        id,
      }
    });

  })

});
