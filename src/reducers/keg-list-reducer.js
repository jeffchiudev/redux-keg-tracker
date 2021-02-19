export default (state = {}, action ) => {
  const { name, brand, price, flavor, quantity, id } = action;
  switch (action.type) {
    case 'ADD_KEG':
    return Object.assign({}, state, {
      [id] : {
        name,
        brand,
        price,
        flavor,
        quantity,
        id,
      }
    });
    default:
      return state;
  }
};