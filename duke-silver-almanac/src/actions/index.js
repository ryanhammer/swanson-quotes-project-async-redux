import axios from 'axios';

export const GET_QUOTES_START = "GET_QUOTES_START";
export const GET_QUOTES_SUCCESS = "GET_QUOTES_SUCCESS";
export const GET_QUOTES_FAILURE = "GET_QUOTES_FAILURE";
export const ADD_QUOTES = "ADD_QUOTES";

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

export const addQuotes = (value) => {
  console.log('hello from addQuotes');
  return { type: ADD_QUOTES, payload: value }
};

export const RESET_QUOTES = "RESET_QUOTES";
export const resetQuotes = () => {
  return { type: RESET_QUOTES };
};