import axios from 'axios';

export const GET_QUOTES_START = "GET_QUOTES_START";
export const GET_QUOTES_SUCCESS = "GET_QUOTES_SUCCESS";
export const GET_QUOTES_FAILURE = "GET_QUOTES_FAILURE";

export const getQuotes = (URL) => dispatch => {
  dispatch({ type:GET_QUOTES_START });
  axios.get(URL)
    .then( res => {
      dispatch({ type: GET_QUOTES_SUCCESS, payload: res.data});
    })
    .catch( err => {
      console.log(err);
      dispatch({ type: GET_QUOTES_FAILURE, payload: err});
    })
};

export const ADD_QUOTES = "ADD_QUOTES";
export const addQuotes = (value) => {
  return { type: ADD_QUOTES, payload: value }
};

export const SEARCH_QUOTES = "SEARCH_QUOTES";
export const searchQuotes = (value) => {
  return { type: SEARCH_QUOTES, payload: value }
};

export const CHANGE_FEATURE = "CHANGE_FEATURE";
export const changeFeature = (value) => {
  return { type: CHANGE_FEATURE, payload: value };
}

export const RESET_QUOTES = "RESET_QUOTES";
export const resetQuotes = () => {
  return { type: RESET_QUOTES };
};
