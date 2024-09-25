import axios from 'axios';

export const login = (email, password) => async (dispatch) => {
  const res = await axios.post('/api/auth/login', { email, password });
  dispatch({ type: 'LOGIN_SUCCESS', payload: res.data });
};

export const fetchMenu = () => async (dispatch, getState) => {
  const token = getState().auth.token;
  const res = await axios.get('/api/menu', { headers: { 'auth-token': token } });
  dispatch({ type: 'FETCH_MENU_SUCCESS', payload: res.data });
};
