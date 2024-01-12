import React, { useReducer } from 'react';
import axios from "axios";
import setAuthToken from "../../utils/setAuthToken";
import ProductContext from './ProductContext';
import ProductReducer from './ProductReducer';

import {
    CONFIG_API_URL,
    API_URL,
    PRODUCT_ERROR,
    CLEAR_ALL_STATE_PRODUCT,
    CLEAR_CURRENT_PRODUCT,
    CLEAR_PRODUCTS,
    GET_ALL_PRODUCTS,
    GET_PRODUCT_BY_ID,
    SET_CURRENT_PRODUCT,
    SET_PRODUCTS,
} from "../types";

const ProductState = (props) => {

    // initial state
    const initialState = {
        products: null,
        current_product: null,
    };

    const [state, dispatch] = useReducer(ProductReducer, initialState);


    // get all products
    const getAllProducts = async () => {
        //setAuthToken(process.env.????);

        try {
            await axios
                .get(
                    `${API_URL}/METTRE_URLBACK`,
                    CONFIG_API_URL
                )
                .then(
                    (res) => {
                        dispatch({
                            type: GET_ALL_PRODUCTS,
                            payload: res,
                        });
                    },
                    (error) => {
                        console.log("getAllProducts error", error?.response?.data);
                    }
                );
        } catch (err) {
            console.log("getAllProducts catch error", err);

            dispatch({
                type: PRODUCT_ERROR,
                payload: "getAllProducts catch error",
            });
        }
    };

    // get one product by id
    const getProductById = async (id) => {
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
                            type: GET_PRODUCT_BY_ID,
                            payload: res,
                        });
                    },
                    (error) => {
                        console.log("getProductById error", error?.response?.data);
                    }
                );
        } catch (err) {
            console.log("getProductById catch error", err);

            dispatch({
                type: PRODUCT_ERROR,
                payload: "getProductById catch error",
            });
        }
    };

    // set current product
    const setCurrentProduct = (product) => {
        dispatch({
            type: SET_CURRENT_PRODUCT,
            payload: product
        });
    };

    // set products
    const setProducts = (products) => {
        dispatch({
            type: SET_PRODUCTS,
            payload: products
        });
    };

    // clear products
    const clearProducts = () => {
        dispatch({
            type: CLEAR_PRODUCTS,
        });
    };

    // clear current product
    const clearCurrentProduct = () => {
        dispatch({
            type: CLEAR_CURRENT_PRODUCT,
        });
    };

    // clear all state product
    const clearAllStateProduct = () => {
        dispatch({
            type: CLEAR_ALL_STATE_PRODUCT,
        });
    };

    return (
        <ProductContext.Provider
            value={{
                products: state.products,
                current_product: state.current_product,
                getAllProducts,
                getProductById,
                setCurrentProduct,
                setProducts,
                clearProducts,
                clearCurrentProduct,
                clearAllStateProduct,
            }}>
            {props.children}
        </ProductContext.Provider>
    );
};

export default ProductState;
