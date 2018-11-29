import * as APIUtil from '../util/api_util';

export const RECEIVE_SECTION = 'RECEIVE_SECTION';
export const RECEIVE_SECTIONS = 'RECEIVE_SECTIONS';

export const receiveSections = payload => ({
  type: RECEIVE_SECTIONS,
  payload
});

export const receiveSection = payload => ({
  type: RECEIVE_SECTION,
  payload
});

export const createSection = (section) => dispatch => (
  APIUtil.createSection(section)
    .then(payload => dispatch(receiveSection(payload)))
);

export const fetchSection = (id) => dispatch => (
  APIUtil.fetchSection(id)
    .then(payload => dispatch(receiveSection(payload)))
);

export const fetchSections = (data) => dispatch => (
  APIUtil.fetchSections(data)
    .then(payload => dispatch(receiveSections(payload)))
);