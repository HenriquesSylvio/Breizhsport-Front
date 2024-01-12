import {
    CLEAR_ALL_STATE_USER,
    CLEAR_CURRENT_USER,
    GET_USER_BY_ID,
} from '../types';
// eslint-disable-next-line
export default (state, action) => {
    switch (action.type) {
        case GET_USER_BY_ID:
            return {
                ...state,
                current_user: action.payload,
            };
        case CLEAR_CURRENT_USER:
            return {
                ...state,
                current_user: null,
            };
        case CLEAR_ALL_STATE_USER:
            return {
                ...state,
                current_user: null,
            };
        default:
            return state;
    }
};