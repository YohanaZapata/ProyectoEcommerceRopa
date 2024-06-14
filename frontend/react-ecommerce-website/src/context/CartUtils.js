export const initialState = {
  cartItems: [],
};

export const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cartItems: state.cartItems.filter(item => item.id !== action.payload.id),
      };
    case 'CLEAR_CART':
      return {
        ...state,
        cartItems: [],
      };
    default:
      return state;
  }
};
