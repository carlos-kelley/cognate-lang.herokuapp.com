const toggleEnglishReducer = (
  state = true,
  action
) => {
  switch (action.type) {
    case "ENGLISH_TRUE":
      state = true;
    case "ENGLISH_FALSE":
      state = false;
    default:
      return state;
  }
};

// user will be on the redux state at:
// state.user
export default toggleEnglishReducer;
