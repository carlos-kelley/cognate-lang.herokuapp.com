const toggleSpanishReducer = (
  state = true,
  action
) => {
  switch (action.type) {
    case "SPANISH_TRUE":
      state = true;
    case "SPANISH_FALSE":
      state = false;
    default:
      return state;
  }
};

// user will be on the redux state at:
// state.user
export default toggleSpanishReducer;
