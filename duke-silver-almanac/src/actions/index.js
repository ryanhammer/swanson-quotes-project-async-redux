export const ADD_QUOTES = "ADD_QUOTES";
export const addFeature = (feature) => {
  return { type: ADD_QUOTES, payload: feature};
};

// export const REMOVE_FEATURE = "REMOVE_FEATURE";
// export const removeFeature = (feature) => {
//   return { type: REMOVE_FEATURE, payload: feature};
// };