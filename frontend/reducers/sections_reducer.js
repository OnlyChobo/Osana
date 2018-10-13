import { RECEIVE_PROJECT } from '../actions/project_actions';
import merge from 'lodash/merge';

const sectionsReducer = (state={}, action) => {
  Object.freeze(state);
  let newState = {};
  switch(action.type) {
    case RECEIVE_PROJECT:
      return merge({}, action.payload.sections);
    default:
      return state;
  }
};

export default sectionsReducer;
