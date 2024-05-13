import {
  ADD_TO_CART,
  CLEAR_ALL_STATE_ORDER,
  CLEAR_CART,
  CLEAR_CURRENT_ORDER,
  CLEAR_ORDERS,
  GET_ALL_ORDERS,
  GET_ORDERS_BY_USER_ID,
  GET_ORDER_BY_ID,
  MODIFY_CART,
  SAVE_ORDER,
  SET_CURRENT_ORDER_ADDRESS,
  SET_CURRENT_ORDER_ITEMS,
  SET_CURRENT_ORDER_PAYMENT,
} from "../types";
// eslint-disable-next-line
export default (state, action) => {
  switch (action.type) {
    case GET_ALL_ORDERS:
      return {
        ...state,
        orders: action.payload,
      };
    case GET_ORDERS_BY_USER_ID:
      return {
        ...state,
        orders: action.payload,
      };
    case GET_ORDER_BY_ID:
      return {
        ...state,
        current_order: action.payload,
      };
    case ADD_TO_CART:
      console.log(action.payload);
      return {
        ...state,
        cart:
          state.cart && state.cart !== undefined
            ? [state.cart, action.payload].flat()
            : [action.payload],
        total_order:
          state.total_order +
          action.payload.product.price * action.payload.quantity,
      };
    case MODIFY_CART:
      return {
        ...state,
        cart: action.payload.newCart?.flat(),
        total_order: action.payload.total,
      };
    case SAVE_ORDER:
      return {
        ...state,
        orders: action.payload.actualOrders,
        last_order_number: action.payload.orderNumber,
      };
    case SET_CURRENT_ORDER_ADDRESS:
      return {
        ...state,
        current_order: {
          ...state.current_order,
          current_order_address: action.payload,
        },
      };
    case SET_CURRENT_ORDER_PAYMENT:
      return {
        ...state,
        current_order: {
          ...state.current_order,
          current_order_payment: action.payload,
        },
      };
    case SET_CURRENT_ORDER_ITEMS:
      return {
        ...state,
        current_order: {
          ...state.current_order,
          current_order_items: action.payload,
        },
      };
    case CLEAR_ORDERS:
      return {
        ...state,
        orders: [],
      };
    case CLEAR_CART:
      return {
        ...state,
        cart: [],
      };
    case CLEAR_CURRENT_ORDER:
      return {
        ...state,
        current_order: {
          current_order_address: {
            firstname: "",
            lastname: "",
            email: "",
            address1: "",
            address2: "",
            city: "",
            department: "",
            zipcode: "",
            country: "",
          },
          current_order_payment: {
            cardTitulaire: "",
            cardNumber: "",
            cardDate: "2000-01",
            cardPincode: "",
          },
          current_order_items: [],
          current_order_number: "",
        },
        total_order: 0,
      };
    case CLEAR_ALL_STATE_ORDER:
      return {
        ...state,
        orders: [],
        current_order: {
          current_order_address: {
            firstname: "",
            lastname: "",
            email: "",
            address1: "",
            address2: "",
            city: "",
            department: "",
            zipcode: "",
            country: "",
          },
          current_order_payment: {
            cardTitulaire: "",
            cardNumber: "",
            cardDate: "2000-01",
            cardPincode: "",
          },
          current_order_items: [],
          current_order_number: "",
        },
        last_order_number: "",
        cart: [],
        total_order: 0,
      };
    default:
      return state;
  }
};
