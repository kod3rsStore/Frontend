const reducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_PRODUCT_QTY':
      for(let i = 0; i < state.shopping_cart.length; i++){
         if(state.shopping_cart[i].id_products === action.payload.id_products){
            state.shopping_cart[i].pcs = action.payload.pcs
         }
      }
      return {
        ...state,
        shopping_cart: [...state.shopping_cart],
      };
    case 'DELETE_PRODUCT':
      return {
        ...state,
        shopping_cart: state.shopping_cart.filter((items) => items.id_products !== action.payload),
      };
    case 'ADD_PRODUCT':
      console.log(action.payload.pcs)
      for(let i = 0; i < state.shopping_cart.length; i++){
        if(state.shopping_cart[i].id_products === action.payload.id_products){
           state.shopping_cart[i].pcs = action.payload.pcs + state.shopping_cart[i].pcs;
            return {
              ...state,
              shopping_cart: [...state.shopping_cart],
            };
        }
      }
      return{
        ...state,
        shopping_cart: [...state.shopping_cart, action.payload]
      };
    default:
      return state;
  }
};

export default reducer;