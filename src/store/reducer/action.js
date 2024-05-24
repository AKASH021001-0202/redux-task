export const addToCart = (product) => ({
  type: 'add_to_cart',
  product,
});

export const remove_from_cart = (productId) => {
  return {
    type: 'remove_from_cart',
    id: productId
  };
};

export const updateQuantity = (id, quantity) => ({
  type: 'update_quantity',
  id,
  quantity,
});

