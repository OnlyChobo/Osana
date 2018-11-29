import * as APIUtil from '../util/api_util';

export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';
export const RECEIVE_ADDITIONAL_COMMENTS = 'RECEIVE_ADDITIONAL_COMMENTS';

export const receiveComment = payload => ({
  type: RECEIVE_COMMENT,
  payload
});

export const receiveAdditionalComments = payload => ({
  type: RECEIVE_ADDITIONAL_COMMENTS,
  payload
});

export const receiveComments = payload => ({
  type: RECEIVE_COMMENTS,
  payload
});

export const createComment = (comment) => dispatch => (
  APIUtil.createComment(comment)
    .then(payload => dispatch(receiveComment(payload)))
);

export const fetchComment = (id) => dispatch => (
  APIUtil.fetchComment(id)
    .then(payload => dispatch(receiveComment(payload)))
);

export const fetchComments = (data) => dispatch => (
  APIUtil.fetchComments(data)
    .then(payload => dispatch(receiveComments(payload)))
);

export const fetchAdditionalComments = (data) => dispatch => (
  APIUtil.fetchComments(data)
    .then(payload => dispatch(receiveAdditionalComments(payload)))
);