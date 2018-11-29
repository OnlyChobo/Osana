import { RECEIVE_TASK } from '../actions/task_actions';
import { RECEIVE_COMMENT, RECEIVE_COMMENTS, RECEIVE_ADDITIONAL_COMMENTS } from '../actions/comment_actions';
import merge from 'lodash/merge';

const commentsReducer = (state={}, action) => {
  Object.freeze(state);
  let newState = {};
  switch(action.type) {
    case RECEIVE_TASK:
      return merge({}, action.payload.comments);
    case RECEIVE_ADDITIONAL_COMMENTS:
      return merge({}, state, action.payload);
    case RECEIVE_COMMENTS:
      return action.payload;
    case RECEIVE_COMMENT:
      return merge({}, state, action.payload.comment);
    default:
      return state;
  }
};

export default commentsReducer;
