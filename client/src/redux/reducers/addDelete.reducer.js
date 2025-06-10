const addDeleteReducer = (
  state = false,
  action
) => {
  switch (action.type) {
    case "FAVORITE_ADDED":
      return action.payload;
    default:
      return state;
  }
};

export default addDeleteReducer;
