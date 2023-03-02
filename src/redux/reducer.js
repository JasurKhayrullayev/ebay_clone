const initialState ={
    email: ""
  }

  const basketInitialState= {
    bookedProducts: []
  }
  
  
  const reducer = (state = initialState, action) => {
    switch(action.type){
      case "CREATE_USER":
        return {email: action.email}
      default:
        return state
    }
  }

  const basketReducer = (state = basketInitialState, action) => {
    switch(action.type){
      case "ADD_TO_BASKET":
        return {
          bookedProducts: [...state.bookedProducts, action.product]
        }
        case "REMOVE_FROM_BASKET":
      const indexOfDeleteProduct = state.bookedProducts.findIndex(p => p.id === action.id);
      state.bookedProducts.splice(indexOfDeleteProduct, 1);
      return {
        bookedProducts: [...state.bookedProducts]
      }
      default:
        return state
    }
  }
  
  export { reducer , basketReducer };