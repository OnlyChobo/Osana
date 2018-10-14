import * as APIUtil from '../util/api_util';

export const RECEIVE_TASK = 'RECEIVE_TASK';

export const receiveTask = payload => ({
  type: RECEIVE_TASK,
  payload
});

export const fetchTask = (id) => dispatch => (
  APIUtil.fetchTask(id)
    .then(payload => dispatch(receiveTask(payload)))
);
