const forvoFrenchReducer = (
  state = {},
  action
) => {
  switch (action.type) {
    case "SET_FORVO_FRENCH":
      return action.payload;
    default:
      return state;
  }
};
// user will be on the redux state at:
// state.user
export default forvoFrenchReducer;
