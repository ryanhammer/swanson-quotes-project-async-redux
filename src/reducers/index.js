import { GET_QUOTES_START, GET_QUOTES_SUCCESS, GET_QUOTES_FAILURE, ADD_QUOTES, SEARCH_QUOTES, CHANGE_FEATURE, RESET_QUOTES } from '../actions';

const initialState = {
  requestNum: '',
  apiURL: 'https://ron-swanson-quotes.herokuapp.com/v2/quotes/',
  quotes: [],
  error: '',
  isGetting: false,
  searchValue: '',
  searchFeature: false
};

export const reducer = (state=initialState, action) => {
  switch (action.type) {
    case GET_QUOTES_START:
      return {
        ...state,
        error: '',
        isGetting: true
      };
    case GET_QUOTES_SUCCESS:
      return {
        ...state,
        quotes: action.payload,
        isGetting: false
      };
    case GET_QUOTES_FAILURE:
      return {
        ...state,
        error: action.payload,
        isGetting: false
      };
    case ADD_QUOTES:
      return {
        ...state,
        requestNum: action.payload
      };
    case SEARCH_QUOTES:
      return {
        ...state,
        searchValue: action.payload
      };
    case CHANGE_FEATURE:
      return { 
        ...state,
        searchFeature: !action.payload
      };
    case RESET_QUOTES:
      return {
        ...state,
        requestNum: '',
        searchValue: '',
        quotes: []
      }
    default:
      return state;
  }
}