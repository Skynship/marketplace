import combineReducers from 'react-combine-reducers';
import { createContext, useContext, useMemo, useReducer } from "react";

// TODO: showcases what the fields are expected for components to work
// const INITIAL_CART = [{
//   qty: 1,
//   price: 210,
//   slug: "silver-high-neck-sweater",
//   name: "Silver High Neck Sweater",
//   id: "6e8f151b-277b-4465-97b6-547f6a72e5c9",
//   imgUrl: "/assets/images/products/Fashion/Clothes/1.SilverHighNeckSweater.png"
// }];

// const CART_INITIAL_STATE = {
//   items: []
// };

// const PAYMENT_INITIAL_STATE = {
//   contact: {
//     email_address: '',
//   },
//   shipping_address: {
//     full_name: '',
//     phone_number: '',
//     company: '',
//     zip: '',
//     country: '',
//     address: ''
//   },
//   billing_address: {
//     full_name: '',
//     phone_number: '',
//     company: '',
//     zip: '',
//     country: '',
//     address: ''
//   },
//   credit_card: {
//     number: '',
//     expiry_date: '',
//     name: '',
//     security_code: ''
//   }
// };

const AppContext = createContext({
  state: {},
  dispatch: () => {}
});

// const cartReducer = (state, action) => {
//   switch (action.type) {
//     case "CHANGE_CART_AMOUNT":
//       let cartList = state.items;

//       let cartItem = action.payload;
//       let exist = cartList.find(item => item.id === cartItem.id);
//       if (cartItem.qty < 1) {
//         const filteredCart = cartList.filter(item => item.id !== cartItem.id);
//         return {
//           ...state,
//           items: filteredCart
//         };
//       }

//       // IF PRODUCT ALREADY EXITS IN CART
//       if (exist) {
//         const newCart = cartList.map(item => item.id === cartItem.id ? {
//           ...item,
//           qty: cartItem.qty
//         } : item);
//         return {
//           ...state,
//           items: newCart
//         };
//       }
//       return {
//         ...state,
//         items: [...cartList, cartItem]
//       };
//     default:
//       {
//         return state;
//       }
//   }
// };

// const paymentFlowReducer = (state, action) => {
//   switch (action.type) {
//     case "CHANGE_ADDRESSES":
//       const { contact = {}, shipping = {}, billing = {}, isBillingSameAsShipping = false } = action.payload;

//       return {
//         ...state,
//         contact: {
//           ...contact
//         },
//         shipping_address: {
//           ...shipping
//         },
//         billing_address: isBillingSameAsShipping ? {...shipping} : {...billing}
//       };
//     case "CHANGE_CREDIT_CARD":
//       const { credit_card = {} } = action.payload;

//       return {
//         ...state,
//         credit_card: {
//           ...state.credit_card,
//           ...credit_card
//         }
//       };
//     default: 
//       return state;
//   }
// };

// const [
//   rootReducerCombined, initialStateCombined
// ] = combineReducers(
//   {
//     cart: [cartReducer, CART_INITIAL_STATE],
//     payment: [paymentFlowReducer, PAYMENT_INITIAL_STATE]
//   }
// );


// // =======================================================

// // =======================================================

export const AppProvider = ({
  children
}) => {
  // const [state, dispatch] = useReducer(rootReducerCombined, initialStateCombined);

  // const contextValue = useMemo(() => ({
  //   state,
  //   dispatch
  // }), [state, dispatch]);

  return <div>{children}</div>;
};
export const useAppContext = () => {
  return {};
};
export default AppContext;