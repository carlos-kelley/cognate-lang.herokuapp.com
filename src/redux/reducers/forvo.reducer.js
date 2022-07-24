const forvoReducer = (state = {}, action) => {
  switch (action.type) {
    case "SET_FORVO_ENGLISH":
      return action.payload;
    case "SET_FORVO_FRENCH":
      return action.payload;
    case "SET_FORVO_SPANISH":
      return action.payload;
    case "SET_FORVO_ITALIAN":
      return action.payload;
    case "SET_FORVO_PORTUGUESE":
      return action.payload;
    default:
      return state;
  }
};
// user will be on the redux state at:
// state.user
export default forvoReducer;
