const toggleItalianReducer = (
  state = true,
  action
) => {
  switch (action.type) {
    case "TOGGLE_ITALIAN":
      return action.payload;
    case "TOGGLE_REFRESH":
      return true;
    default:
      return state;
  }
};
// user will be on the redux state at:
// state.user
export default toggleItalianReducer;
