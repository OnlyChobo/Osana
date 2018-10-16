import * as APIUtil from '../util/api_util';

export const RECEIVE_TASK = 'RECEIVE_TASK';
export const RECEIVE_TASKS = 'RECEIVE_TASKS';

export const receiveTask = payload => ({
  type: RECEIVE_TASK,
  payload
});

export const fetchTask = (id) => dispatch => (
  APIUtil.fetchTask(id)
    .then(payload => dispatch(receiveTask(payload)))
);

export const fetchTasks = (data) => dispatch => (
  APIUtil.fetchTasks(data)
    .then(payload => console.log(payload))
);
