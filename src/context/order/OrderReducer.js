import {
    ADD_TO_CART,
    CLEAR_ALL_STATE_ORDER,
    CLEAR_CURRENT_ORDER,
    CLEAR_ORDERS,
    GET_ALL_ORDERS,
    GET_ORDERS_BY_USER_ID,
    GET_ORDER_BY_ID,
    MODIFY_CART,
    SET_CURRENT_ORDER_ADDRESS,
    SET_CURRENT_ORDER_PAYMENT,
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
            console.log(action.payload)
            return {
                ...state,
                cart: state.cart && state.cart !== undefined ? ([state.cart, action.payload]).flat() : [action.payload],
                total_order: state.total_order + (action.payload.product.price * action.payload.quantity)
            };
        case MODIFY_CART:
            return {
                ...state,
                cart: action.payload.qty === 0
                    ? state.cart.filter((item) => item?.product?.id !== action.payload.id)
                    : action.payload.newCart?.flat(),
                total_order: action.payload.total
            };
        case SET_CURRENT_ORDER_ADDRESS:
            return {
                ...state,
                current_order: { ...state.current_order, current_order_address: action.payload}
            };
        case SET_CURRENT_ORDER_PAYMENT:
            return {
                ...state,
                current_order: { ...state.current_order, current_order_payment: action.payload}
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