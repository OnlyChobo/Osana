import * as APIUtil from '../util/session_api_util';
import { CLOSE_MODAL, closeModal } from './ui_actions';


export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

export const receiveCurrentUser = (payload) => ({
  type: RECEIVE_CURRENT_USER,
  payload
});

export const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const signup = currentUser => dispatch => (
  APIUtil.signup(currentUser).then(currentUser => (
    dispatch(receiveCurrentUser(currentUser))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const login = currentUser => dispatch => (
  APIUtil.login(currentUser).then(currentUser => (
    dispatch(receiveCurrentUser(currentUser))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const logout = () => dispatch => (
  APIUtil.logout().then(() => (
    dispatch(logoutCurrentUser())
  ))
);

export const getUserInfo = currentUser => dispatch => (
  APIUtil.getUserInfo(currentUser).then(currentUser => (
    dispatch(receiveCurrentUser(currentUser))
)));

export const updateUser = (user) => dispatch => (
  APIUtil.updateUser(user).then(currentUser => (
    dispatch(receiveCurrentUser(currentUser))
  ))
);
