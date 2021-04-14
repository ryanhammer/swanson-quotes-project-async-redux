const initialState = {
  requestType: '',
  apiURL: 'https://ron-swanson-quotes.herokuapp.com/v2/quotes',
  quotes: []
};

export const reducer = (state=initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
}