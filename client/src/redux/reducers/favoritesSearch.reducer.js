const favoritesSearchReducer = (
  state = [],
  action
) => {
  switch (action.type) {
    case "SET_FAVORITES_SEARCH":
      return action.payload;
    default:
      return state;
  }
};

// user will be on the redux state at:
// state.user
export default favoritesSearchReducer;
