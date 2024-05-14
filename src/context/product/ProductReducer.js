import {
    CLEAR_ALL_STATE_PRODUCT,
    CLEAR_CURRENT_PRODUCT,
    CLEAR_PRODUCTS,
    GET_ALL_PRODUCTS,
    GET_PRODUCT_BY_ID,
    SET_CURRENT_PRODUCT,
    SET_PRODUCTS
} from '../types';
// eslint-disable-next-line
export default (state, action) => {
    switch (action.type) {
        case GET_ALL_PRODUCTS:
            return {
                ...state,
                products: action.payload,
            };
        case GET_PRODUCT_BY_ID:
            return {
                ...state,
                current_product: action.payload,
            };
        case SET_CURRENT_PRODUCT:
            return {
                ...state,
                current_product: action.payload,
            };
        case SET_PRODUCTS:
            return {
                ...state,
                products: action.payload,
            };
        case CLEAR_PRODUCTS:
            return {
                ...state,
                products: null,
            };
        case CLEAR_CURRENT_PRODUCT:
            return {
                ...state,
                current_product: null,
            };
        case CLEAR_ALL_STATE_PRODUCT:
            return {
                ...state,
                products: null,
                current_product: null,
            };
        default:
            return state;
    }
};