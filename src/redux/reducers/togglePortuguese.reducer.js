const togglePortugueseReducer = (
  state = true,
  action
) => {
  switch (action.type) {
    case "PORTUGUESE_TRUE":
      state = true;
    case "PORTUGUESE_FALSE":
      state = false;
    default:
      return state;
  }
};

// user will be on the redux state at:
// state.user
export default togglePortugueseReducer;
