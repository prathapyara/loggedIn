const initialState = {
  menu: [],
};

export default function(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_MENU_SUCCESS':
      return { ...state, menu: action.payload };
    default:
      return state;
  }
}
