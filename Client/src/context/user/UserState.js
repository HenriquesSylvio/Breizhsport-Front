import React, { useReducer } from 'react';
import axios from "axios";
import UserContext from './UserContext';
import UserReducer from './UserReducer';

import {
    CONFIG_API_URL,
    API_URL,
    USER_ERROR,
    CLEAR_ALL_STATE_USER,
    CLEAR_CURRENT_USER,
    GET_USER_BY_ID,
} from "../types";

const UserState = (props) => {

    // initial state
    const initialState = {
        products: null,
        current_product: null,
    };

    const [state, dispatch] = useReducer(UserReducer, initialState);


    // get one product by id
    const getUserById = async (id) => {
        //setAuthToken(process.env.????);

        try {
            await axios
                .get(
                    `${API_URL}/METTRE_URLBACK_ET_PARAMS`,
                    CONFIG_API_URL
                )
                .then(
                    (res) => {
                        dispatch({
                            type: GET_USER_BY_ID,
                            payload: res,
                        });
                    },
                    (error) => {
                        console.log("getUserById error", error?.response?.data);
                    }
                );
        } catch (err) {
            console.log("getUserById catch error", err);

            dispatch({
                type: USER_ERROR,
                payload: "getUserById catch error",
            });
        }
    };

    // clear current product
    const clearCurrentUser = () => {
        dispatch({
            type: CLEAR_CURRENT_USER,
        });
    };

    // clear all state product
    const clearAllStateUser = () => {
        dispatch({
            type: CLEAR_ALL_STATE_USER,
        });
    };

    return (
        <UserContext.Provider
            value={{
                products: state.products,
                current_product: state.current_product,
                getUserById,
                clearCurrentUser,
                clearAllStateUser,
            }}>
            {props.children}
        </UserContext.Provider>
    );
};

export default UserState;
