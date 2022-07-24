const toggleSpanishReducer = (
  state = true,
  action
) => {
  switch (action.type) {
    case "TOGGLE_SPANISH":
      return action.payload;
    case "TOGGLE_REFRESH":
      return true;
    default:
      return state;
  }
};
// user will be on the redux state at:
// state.user
export default toggleSpanishReducer;
