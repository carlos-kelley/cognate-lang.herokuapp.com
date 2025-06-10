const forvoSpanishReducer = (
  state = {},
  action
) => {
  switch (action.type) {
    case "SET_FORVO_SPANISH":
      return action.payload;
    default:
      return state;
  }
};
// user will be on the redux state at:
// state.user
export default forvoSpanishReducer;
