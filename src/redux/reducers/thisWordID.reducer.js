const thisWordIDReducer = (state = {}, action) => {
  switch (action.type) {
    case "SET_THIS_WORD_ID":
      return action.payload;
    default:
      return state;
  }
};

export default thisWordIDReducer;
