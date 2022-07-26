const searchedTextReducer = (
  state = '',
  action
) => {
  switch (action.type) {
    case "SET_SEARCHED_TEXT":
      return action.payload;
    default:
      return state;
  }
};

// user will be on the redux state at:
// state.user
export default searchedTextReducer;
