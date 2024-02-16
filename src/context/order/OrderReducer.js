import {
    ADD_TO_CART,
    CLEAR_ALL_STATE_ORDER,
    CLEAR_CURRENT_ORDER,
    CLEAR_ORDERS,
    GET_ALL_ORDERS,
    GET_ORDERS_BY_USER_ID,
    GET_ORDER_BY_ID,
    MODIFY_CART,
} from '../types';
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
            return {
                ...state,
                cart: state.cart && state.cart !== undefined ? ([state.cart, action.payload]).flat() : [action.payload],
            };
        case MODIFY_CART:
            console.log(state.cart.filter((item) => item.product.id === action.payload.id));
            return {
                ...state,
                cart: action.payload.qty === 0 
                ? state.cart.filter((item) => item.product.id !== action.payload.id)
                : (state.cart.filter((item) => item.product.id === action.payload.id)).map((item) => item.quantity = action.payload.qty),
            };
        case CLEAR_ORDERS:
            return {
                ...state,
                orders: null,
            };
        case CLEAR_CURRENT_ORDER:
            return {
                ...state,
                current_order: null,
            };
        case CLEAR_ALL_STATE_ORDER:
            return {
                ...state,
                orders: null,
                current_order: null,
            };
        default:
            return state;
    }
};