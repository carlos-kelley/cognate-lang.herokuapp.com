const thisWordReducer = (
  state = [],
  action
) => {
  switch (action.type) {
    case "SET_THIS_WORD":
      return action.payload;
    default:
      return state;
  }
};


export default thisWordReducer;
