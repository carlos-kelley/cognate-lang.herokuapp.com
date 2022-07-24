const toggleItalianReducer = (
  state = true,
  action
) => {
  switch (action.type) {
    case "ITALIAN_TRUE":
      state = true;
    case "ITALIAN_FALSE":
      state = false;
    default:
      return state;
  }
};

// user will be on the redux state at:
// state.user
export default toggleItalianReducer;
