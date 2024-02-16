export const API_URL = "https://graph.facebook.com"

export const ADMIN_KEY =
  process.env.REACT_APP_ENV === "staging" || process.env.REACT_APP_ENV === "dev"
    ? "1408571f-2488-4c5c-b64a-388fa3282f9b"
    : "991709ef-b896-43dd-9d46-4737e4720f2f";

export const CONFIG_API_URL = {
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
};

export const TOKEN = sessionStorage.getItem("token")
  ? sessionStorage.getItem("token")
  : null;


// format delete date
export const FORMAT_DELETE_DATE = (date) => {
  let d = new Date(date),
    month = "" + (d.getMonth() + 1),
    day = "" + d.getDate(),
    year = d.getFullYear(),
    hour = "" + d.getHours(),
    minutes = "" + d.getMinutes(),
    seconds = "" + d.getSeconds();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;
  if (hour.length < 2) hour = "0" + hour;
  if (minutes.length < 2) minutes = "0" + minutes;
  if (seconds.length < 2) seconds = "0" + seconds;

  return (
    [year, month, day].join("-") +
    "T" +
    [hour, minutes, seconds].join(":") +
    ".000Z"
  );
};

export const FORMAT_DATE_TODAY_MIDNIGHT = (date) => {
  let d = new Date(date),
    month = "" + (d.getMonth() + 1),
    day = "" + d.getDate(),
    year = d.getFullYear(),
    hour = "00",
    minutes = "00",
    seconds = "00";

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return (
    [year, month, day].join("-") +
    "T" +
    [hour, minutes, seconds].join(":") +
    ".000Z"
  );
};

// types for categories
export const GET_ALL_CATEGORIES = "GET_ALL_CATEGORIES";
export const GET_CATEGORY_BY_ID = "GET_CATEGORY_BY_ID";
export const SET_CURRENT_CATEGORY = "SET_CURRENT_CATEGORY";
export const SET_CATEGORIES = "SET_CATEGORIES";
export const CLEAR_CATEGORIES = "CLEAR_ALL_ORDERS";
export const CLEAR_CURRENT_CATEGORY = "CLEAR_CURRENT_ORDER";
export const CLEAR_ALL_STATE_CATEGORY = "CLEAR_ALL_STATE_ORDER";
export const CATEGORY_ERROR = "CATEGORY_ERROR";

// types for orders
export const GET_ALL_ORDERS = "GET_ALL_ORDERS";
export const GET_ORDERS_BY_USER_ID = "GET_ORDERS_BY_USER_ID";
export const GET_ORDER_BY_ID = "GET_ORDER_BY_ID";
export const ADD_TO_CART = "ADD_TO_CART";
export const MODIFY_CART = "MODIFY_CART";
export const CLEAR_ORDERS = "CLEAR_ALL_ORDERS";
export const CLEAR_CURRENT_ORDER = "CLEAR_CURRENT_ORDER";
export const CLEAR_ALL_STATE_ORDER = "CLEAR_ALL_STATE_ORDER";
export const ORDER_ERROR = "ORDER_ERROR";

// types for products
export const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS";
export const GET_PRODUCT_BY_ID = "GET_PRODUCT_BY_ID";
export const SET_CURRENT_PRODUCT = "SET_CURRENT_PRODUCT";
export const SET_PRODUCTS = "SET_PRODUCTS";
export const CLEAR_PRODUCTS = "CLEAR_PRODUCTS";
export const CLEAR_CURRENT_PRODUCT = "CLEAR_CURRENT_PRODUCT";
export const CLEAR_ALL_STATE_PRODUCT = "CLEAR_ALL_STATE_PRODUCT";
export const PRODUCT_ERROR = "PRODUCT_ERROR";

// types for users
export const GET_USER_BY_ID = "GET_USER_BY_ID";
export const CLEAR_CURRENT_USER = "CLEAR_CURRENT_USER";
export const CLEAR_ALL_STATE_USER = "CLEAR_ALL_STATE_USER";
export const USER_ERROR = "USER_ERROR";

export const SET_CONFIRM_DELETE_ELEMENT = "SET_CONFIRM_DELETE_ELEMENT";
export const SET_DIALOG_DELETE = "SET_DIALOG_DELETE";
export const CLEAR_ALL_STATE_DELETE = "CLEAR_ALL_STATE_DELETE";
