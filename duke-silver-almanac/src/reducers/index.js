import { GET_QUOTES_START, GET_QUOTES_SUCCESS, GET_QUOTES_FAILURE } from '../actions';

const initialState = {
  requestNum: '1',
  apiURL: 'https://ron-swanson-quotes.herokuapp.com/v2/quotes/',
  quotes: [],
  error: '',
  isGetting: false
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
    default:
      return state;
  }
}