export const initialState = {
  cart: [],
  user: null,
};
export const getCartTotal = (cart) =>
  cart?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_USER": //Update user when the log in/log out
      return {
        ...state,
        user: action.user,
      };
    case "ADD_TO_CART":
      return {
        ...state, //Return it how it  currently looks but change the basket
        cart: [...state.cart, action.item], //Include whatever we had in the current basket, as well the new item
      };

    case "REMOVE_FROM_CART":
      let newCart = [...state.cart];
      const i = state.cart.findIndex((cartItem) => cartItem.id === action.id);

      if (i >= 0) {
        //If item is in cart, remove it
        newCart.splice(i, 1); //Got to its index and remove it from the array
      } else {
        console.warn(`Can't remove product (id: ${action.id})`);
      }
      return { ...state, cart: newCart };
    default:
      return state;
  }
};

export default reducer;
