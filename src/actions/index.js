export const deleteKeg = id => ({
  type: 'DELETE_KEG',
  id,
});

export const toggleForm = id => ({
  type: 'TOGGLE_FORM'
});

export const addKeg = (keg) => {
  const {  name, brand, price, flavor, quantity, id} = keg;
  return {
    type: 'ADD_KEG',
    name,
    brand,
    price,
    flavor,
    quantity,
    id
  }
};

export const toggleEdit = () => ({
  type: 'TOGGLE_EDIT'
});