import {
    CLEAR_ALL_STATE_CATEGORY,
    CLEAR_CATEGORIES,
    CLEAR_CURRENT_CATEGORY,
    GET_ALL_CATEGORIES,
    GET_CATEGORY_BY_ID,
    SET_CATEGORIES,
    SET_CURRENT_CATEGORY,
} from '../types';
// eslint-disable-next-line
export default (state, action) => {
    switch (action.type) {
        case GET_ALL_CATEGORIES:
            return {
                ...state,
                categories: action.payload,
            };
        case GET_CATEGORY_BY_ID:
            return {
                ...state,
                current_category: action.payload,
            };
        case SET_CURRENT_CATEGORY:
            return {
                ...state,
                current_category: action.payload,
            };
        case SET_CATEGORIES:
            return {
                ...state,
                categories: action.payload,
            };
        case CLEAR_CATEGORIES:
            return {
                ...state,
                categories: null,
            };
        case CLEAR_CURRENT_CATEGORY:
            return {
                ...state,
                current_category: null,
            };
        case CLEAR_ALL_STATE_CATEGORY:
            return {
                ...state,
                categories: null,
                current_category: null,
            };
        default:
            return state;
    }
};