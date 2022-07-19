const globalSearchReducer = (state = {}, action) => {
  switch (action.type) {
    case "SET_GLOBAL_SEARCH":
      return action.payload;
    default:
      return state;
  }
};

// user will be on the redux state at:
// state.user
export default globalSearchReducer;
