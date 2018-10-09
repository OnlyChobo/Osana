import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

export const receiveCurrentUser = (payload) => ({
  type: RECEIVE_CURRENT_USER,
  payload
});

export const logoutCurrentUser = () => ({
  type: RECEIVE_CURRENT_USER
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const signup = currentUser => dispatch => (
  APIUtil.signup(currentUser).then(
    currentUser => dispatch(receiveCurrentUser(currentUser))
  )
);

export const login = currentUser => dispatch => (
  APIUtil.login(currentUser).then(
    currentUser => dispatch(receiveCurrentUser(currentUser))
  )
);

export const logout = () => dispatch => (
  APIUtil.signup().then(
    () => dispatch(logoutCurrentUser())
  )
);
