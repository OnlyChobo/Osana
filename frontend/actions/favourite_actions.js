import * as APIUtil from '../util/api_util';

export const REMOVE_FAVOURITE = 'REMOVE_FAVOURITE';
export const RECEIVE_FAVOURITE = 'RECEIVE_FAVOURITE';

export const receiveFavourite = favourite => ({
  type: RECEIVE_FAVOURITE,
  favourite
});

export const removeFavourite = favourite => ({
  type: REMOVE_FAVOURITE,
  favourite
});

export const createFavourite = favourite => dispatch => (
  APIUtil.createFavourite(favourite)
    .then(favourite => dispatch(receiveFavourite(favourite)))
);

export const deleteFavourite = (id) => dispatch => (
  APIUtil.deleteFavourite(id).then(
    favourite => dispatch(removeFavourite(favourite))
  ));
