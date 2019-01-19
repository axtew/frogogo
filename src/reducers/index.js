import {
  getUser,
  getCart,
  productAmountAdd,
  productAmountDel,
  productDelete,
  clearCart
} from "../actions";

const initState = {
  cart: [],
  user: []
};

export default (state = initState, action) => {
  const currentProduct = {
    ...state.cart.find(product => product.id === Number(action.payload))
  };

  switch (action.type) {
    case getUser.toString():
      return {
        ...state,
        user: action.payload
      };

    case getCart.toString():
      return {
        ...state,
        cart: action.payload
      };

    case productAmountAdd.toString():
      currentProduct.amount++;

      return {
        ...state,
        cart: state.cart.map(product =>
          product.id === currentProduct.id ? currentProduct : product
        )
      };

    case productAmountDel.toString():
      if (currentProduct.amount > 1) {
        currentProduct.amount--;
      }

      return {
        ...state,
        cart: state.cart.map(product =>
          product.id === currentProduct.id ? currentProduct : product
        )
      };

    case productDelete.toString():
      let currentCart;

      currentCart = state.cart.filter(
        product => product.id !== currentProduct.id
      );
      let gift = state.cart.filter(product => product.price === 0);

      if (state.cart.length === 2 && gift.length && currentProduct.price !== 0) {
        currentCart = [];
      }

      return {
        ...state,
        cart: currentCart
      };

    case clearCart.toString():
      return {
        ...state,
        cart: []
      };

    default:
      return state;
  }
};
