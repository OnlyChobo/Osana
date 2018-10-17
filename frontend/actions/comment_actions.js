import * as APIUtil from '../util/api_util';

export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';

export const receiveComment = payload => ({
  type: RECEIVE_COMMENT,
  payload
});

export const createComment = (comment) => dispatch => (
  APIUtil.createComment(comment)
    .then(payload => dispatch(receiveComment(payload)))
);
