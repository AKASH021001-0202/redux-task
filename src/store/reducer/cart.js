const initialState = {
  cartItems: [],
  quantities: {},
  count: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'add_to_cart':
      const productExists = state.cartItems.some((item) => item.id === action.product.id);
      if (productExists) {
        const updatedQuantities = {
          ...state.quantities,
          [action.product.id]: (state.quantities[action.product.id] || 1) + 1,
        };
        return {
          ...state,
          quantities: updatedQuantities,
          count: state.count + 1,
        };
      }
      return {
        ...state,
        cartItems: [...state.cartItems, action.product],
        quantities: { ...state.quantities, [action.product.id]: 1 },
        count: state.count + 1,
      };
      case 'remove_from_cart':
        const updatedItems = state.cartItems.filter((item) => item.id !== action.id);
        const removedQuantity = state.quantities[action.id] || 0; 
        const { [action.id]: removedItemQuantity, ...restQuantities } = state.quantities; 
        const newCount = state.count - removedQuantity;
        return {
          ...state,
          cartItems: updatedItems,
          quantities: restQuantities,
          count: Math.max(0, newCount), 
        };
      
    case 'update_quantity':
      const newQuantities = {
        ...state.quantities,
        [action.id]: action.quantity,
      };
      return {
        ...state,
        quantities: newQuantities,
      };
    default:
      return state;
  }
};

export default cartReducer;
