export const initialState = {
  basket: [
    ],
    
    user: null
  };
  
  // Selector
  export const getBasketTotal = (basket) => 
    basket?.reduce((amount, item) => item.price + amount, 0);
  
  const reducer = (state, action) => {
    console.log(action);
   switch (action.type) {
     case 'addToBasket':
     return {
       ...state,
       basket:[...state.basket,action.item],
     };
     case "removeFromBasket":

     const index=state.basket.findIndex(
       (basketItem) => basketItem.id === action.id
     );
     let newBasket =[...state.basket];
     
     if (index >= 0){
      newBasket.splice(index,1)
     }else{
       console.warn(`there is not product at this time`)
     }
    
     return {
      ...state,
      basket:newBasket  
     };

    
     default:
     return {
       ...state
     };
   }
  };
  
  export default reducer;