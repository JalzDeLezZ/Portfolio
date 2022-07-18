const Reducer = (state, action) => {
  const {type, payload} = action;
  const {s_modal} = state;

  switch (type) {
    case "TOGGLE": {
      return {
        s_modal: !s_modal,
        s_element: payload
      };
    }
    default: {
      return state;
    }
  }
};

export default Reducer;
