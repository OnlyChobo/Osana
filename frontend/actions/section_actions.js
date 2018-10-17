import * as APIUtil from '../util/api_util';

export const RECEIVE_SECTION = 'RECEIVE_SECTION';

export const receiveSection = payload => ({
  type: RECEIVE_SECTION,
  payload
});

export const createSection = (section) => dispatch => (
  APIUtil.createSection(section)
    .then(payload => dispatch(receiveSection(payload)))
);
