import { createAction } from "redux-actions";

export const getUser = createAction("GET_USER");
export const getCart = createAction("GET_CART");
export const productAmountDel = createAction("PRODUCT_AMOUNT_DEL");
export const productAmountAdd = createAction("PRODUCT_AMOUNT_ADD");
export const productDelete = createAction("PRODUCT_DELETE");
export const clearCart = createAction("CLEAR_CART");
