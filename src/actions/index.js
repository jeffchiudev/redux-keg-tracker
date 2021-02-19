import * as c from './ActionTypes'

export const deleteKeg = id => ({
  type: c.DELETE_KEG,
  id,
});

export const toggleForm = id => ({
  type: c.TOGGLE_FORM,
});

export const addKeg = (keg) => {
  const {  name, brand, price, flavor, quantity, id} = keg;
  return {
    type: c.ADD_KEG,
    name,
    brand,
    price,
    flavor,
    quantity,
    id
  }
};

export const toggleEdit = () => ({
  type: c.TOGGLE_EDIT,
});