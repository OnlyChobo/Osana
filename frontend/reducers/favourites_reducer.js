import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_FAVOURITE, REMOVE_FAVOURITE } from '../actions/favourite_actions';
import merge from 'lodash/merge';

const favouritesReducer = (state = {}, action) => {
  let newState;
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return merge( {}, state, action.payload.favourites);
    case RECEIVE_FAVOURITE:
      return merge( {}, state, {[action.favourite.id]: action.favourite});
    case REMOVE_FAVOURITE:
      newState = merge({}, state);
      delete newState[action.favourite.id];
      return newState;
    default:
      return state;
  }
};

export default favouritesReducer;
