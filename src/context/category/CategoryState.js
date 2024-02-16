import React, { useReducer } from 'react';
import axios from "axios";
import setAuthToken from "../../utils/setAuthToken";
import CategoryContext from './CategoryContext';
import CategoryReducer from './CategoryReducer';

import {
  CONFIG_API_URL,
  API_URL,
  GET_ALL_CATEGORIES,
  GET_CATEGORY_BY_ID,
  CATEGORY_ERROR,
  CLEAR_CATEGORIES,
  CLEAR_CURRENT_CATEGORY,
  CLEAR_ALL_STATE_CATEGORY,
  SET_CURRENT_CATEGORY,
  SET_CATEGORIES
} from "../types";

const CategoryState = (props) => {

  // initial state
  const initialState = {
    categories: null,
    current_category: null,
  };

  const [state, dispatch] = useReducer(CategoryReducer, initialState);


  // get all products categories
  const getAllCategories = async () => {
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
              type: GET_ALL_CATEGORIES,
              payload: res,
            });
          },
          (error) => {
            console.log("getAllCategories error", error?.response?.data);
          }
        );
    } catch (err) {
      console.log("getAllCategories catch error", err);

      dispatch({
        type: CATEGORY_ERROR,
        payload: "getAllCategories catch error",
      });
    }
  };

  // get one category by id
  const getCategoryById = async (id) => {
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
              type: GET_CATEGORY_BY_ID,
              payload: res,
            });
          },
          (error) => {
            console.log("getCategoryById error", error?.response?.data);
          }
        );
    } catch (err) {
      console.log("getCategoryById catch error", err);

      dispatch({
        type: CATEGORY_ERROR,
        payload: "getCategoryById catch error",
      });
    }
  };

  // set current category
  const setCurrentCategory = (category) => {
    dispatch({
      type: SET_CURRENT_CATEGORY,
      payload: category
    });
  };

  // set categories
  const setCategories = (categories) => {
    dispatch({
      type: SET_CATEGORIES,
      payload: categories
    });
  };

  // clear categories
  const clearCategories = () => {
    dispatch({
      type: CLEAR_CATEGORIES,
    });
  };

  // clear current category
  const clearCurrentCategory = () => {
    dispatch({
      type: CLEAR_CURRENT_CATEGORY,
    });
  };

  // clear all state category
  const clearAllStateCategory = () => {
    dispatch({
      type: CLEAR_ALL_STATE_CATEGORY,
    });
  };

  return (
    <CategoryContext.Provider
      value={{
        categories: state.categories,
        current_category: state.current_category,
        getAllCategories,
        getCategoryById,
        setCurrentCategory,
        setCategories,
        clearCategories,
        clearCurrentCategory,
        clearAllStateCategory
      }}>
      {props.children}
    </CategoryContext.Provider>
  );
};

export default CategoryState;
