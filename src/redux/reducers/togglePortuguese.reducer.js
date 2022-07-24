const togglePortugueseReducer = (
  state = true,
  action
) => {
  switch (action.type) {
    case "TOGGLE_PORTUGUESE":
      return action.payload;
    default:
      return state;
  }
};
// user will be on the redux state at:
// state.user
export default togglePortugueseReducer;
