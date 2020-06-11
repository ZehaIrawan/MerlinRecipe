const initialState = {};
function query(state = initialState, action) {
  switch (action.type) {
    case 'UPDATE_KEYWORD':
      return { ...state, keyword: action.payload };
    default:
      return state;
  }
}

export default query;
