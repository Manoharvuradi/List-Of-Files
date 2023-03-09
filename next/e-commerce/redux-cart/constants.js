export const addItemToCart = (add, counter) => {
  return {
    type: "ADD_ITEM_TO_CART",
    payload: add,
    counter: counter,
  };
};

export const removeItemFromCart = (remove) => {
  return {
    type: "REMOVE_ITEMS_FROM_CART",
    payload: remove,
  };
};

export const setQuantityToIncrease = (id, counter) => {
  return {
    type: "INCREMENT",
    id: id,
    counter: counter,
  };
};

export const setQuantityToDecrease = () => {
  return {
    type: "DECREMENT",
  };
};
