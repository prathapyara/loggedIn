const initialState = {
  token: localStorage.getItem('token'),
  user: null,
  isAuthenticated: false,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      localStorage.setItem('token', action.payload.token);
      return { ...state, token: action.payload.token, isAuthenticated: true };
    default:
      return state;
  }
}
