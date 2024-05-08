import React, { useReducer } from 'react';
import axios from "axios";
import setAuthToken from "../../utils/setAuthToken";
import OrderContext from './OrderContext';
import OrderReducer from './OrderReducer';

import {
    CONFIG_API_URL,
    API_URL,
    GET_ALL_ORDERS,
    GET_ORDERS_BY_USER_ID,
    GET_ORDER_BY_ID,
    ORDER_ERROR,
    CLEAR_ORDERS,
    CLEAR_CURRENT_ORDER,
    CLEAR_ALL_STATE_ORDER,
    ADD_TO_CART,
    MODIFY_CART,
    SET_CURRENT_ORDER_ADDRESS,
    SET_CURRENT_ORDER_PAYMENT
} from "../types";

const OrderState = (props) => {

    // initial state
    const initialState = {
        orders: null,
        current_order: {
            current_order_address: {
                firstname: "",
                lastname: "",
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
                cardDate: "",
                cardPincode: ""
            },
            current_order_items: []
        },
        cart: [],
        total_order: 0,
    };

    const [state, dispatch] = useReducer(OrderReducer, initialState);


    // get all orders
    const getAllOrders = async () => {
        //setAuthToken(process.env.????);

        try {
            await axios
                .get(
                    `${API_URL}/orders`,
                    CONFIG_API_URL
                )
                .then(
                    (res) => {
                        dispatch({
                            type: GET_ALL_ORDERS,
                            payload: res,
                        });
                    },
                    (error) => {
                        console.log("getAllOrders error", error?.response?.data);
                    }
                );
        } catch (err) {
            console.log("getAllOrders catch error", err);

            dispatch({
                type: ORDER_ERROR,
                payload: "getAllOrders catch error",
            });
        }
    };

    // get orders of one user
    const getOrdersByUserId = async (user_id) => {
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
                            type: GET_ORDERS_BY_USER_ID,
                            payload: res,
                        });
                    },
                    (error) => {
                        console.log("getOrdersByUserId error", error?.response?.data);
                    }
                );
        } catch (err) {
            console.log("getOrdersByUserId catch error", err);

            dispatch({
                type: ORDER_ERROR,
                payload: "getOrdersByUserId catch error",
            });
        }
    };

    // get one order by id
    const getOrderById = async (id) => {
        //setAuthToken(process.env.????);

        try {
            await axios
                .get(
                    `${API_URL}/orders/${id}`,
                    CONFIG_API_URL
                )
                .then(
                    (res) => {
                        dispatch({
                            type: GET_ORDER_BY_ID,
                            payload: res,
                        });
                    },
                    (error) => {
                        console.log("getOrderById error", error?.response?.data);
                    }
                );
        } catch (err) {
            console.log("getOrderById catch error", err);

            dispatch({
                type: ORDER_ERROR,
                payload: "getOrderById catch error",
            });
        }
    };

    // add a product to cart
    const addToCart = (product) => {
        console.log(product);
        dispatch({
            type: ADD_TO_CART,
            payload: product
        });
    };

    // modify or delete a product in cart
    const modifyCart = (product_id, quantity) => {
        let difference = 0
        let newTotal = 0
        if (quantity === 0) {
            let actualObject = state.cart.filter((item) => item?.product?.id === product_id)
            difference = actualObject[0].product.price * actualObject[0].quantity
        } else {
            let actualObject = state.cart.filter((item) => item?.product?.id === product_id)
            let numberToAdd = quantity - actualObject[0]?.quantity
            difference = actualObject[0]?.product?.price * numberToAdd
            newTotal = state.total_order + (difference)
        }
        let indexToReplace = state.cart.findIndex((item) => item?.product?.id === product_id)
        let actualObject = state.cart.filter((item) => item?.product?.id === product_id)
        if (actualObject[0]) {
            actualObject[0].quantity = quantity
        }
        let newCart = state.cart.splice(indexToReplace, 1, actualObject)
        dispatch({
            type: MODIFY_CART,
            payload: { id: product_id, qty: quantity, newCart: newCart, total: newTotal }
        });
    };


    // setCurrentOrderAddress
    const setCurrentOrderAddress = (address) => {
        dispatch({
            type: SET_CURRENT_ORDER_ADDRESS,
            payload: address
        });
    };

    // setCurrentOrderPayment
    const setCurrentOrderPayment = (payment) => {
        dispatch({
            type: SET_CURRENT_ORDER_PAYMENT,
            payload: payment
        });
    };

    // clear orders
    const clearOrders = () => {
        dispatch({
            type: CLEAR_ORDERS,
        });
    };

    // clear current order
    const clearCurrentOrder = () => {
        dispatch({
            type: CLEAR_CURRENT_ORDER,
        });
    };

    // clear all state order
    const clearAllStateOrder = () => {
        dispatch({
            type: CLEAR_ALL_STATE_ORDER,
        });
    };

    return (
        <OrderContext.Provider
            value={{
                orders: state.orders,
                current_order: state.current_order,
                cart: state.cart,
                total_order: state.total_order,
                getAllOrders,
                getOrdersByUserId,
                getOrderById,
                addToCart,
                modifyCart,
                setCurrentOrderAddress,
                setCurrentOrderPayment,
                clearOrders,
                clearCurrentOrder,
                clearAllStateOrder,
            }}>
            {props.children}
        </OrderContext.Provider>
    );
};

export default OrderState;
