const toggleFrenchReducer = (
  state = true,
  action
) => {
  switch (action.type) {
    case "FRENCH_TRUE":
      state = true;
    case "FRENCH_FALSE":
      state = false;
    default:
      return state;
  }
};

// user will be on the redux state at:
// state.user
export default toggleFrenchReducer;
