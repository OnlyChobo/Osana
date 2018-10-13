import * as APIUtil from '../util/api_util';

export const RECEIVE_PROJECTS = 'RECEIVE_PROJECTS';
export const RECEIVE_PROJECT = 'RECEIVE_PROJECT';
export const REMOVE_PROJECT = 'REMOVE_PROJECT';

export const receiveProjects = projects => ({
  type: RECEIVE_PROJECTS,
  projects
});

export const receiveProject = payload => ({
  type: RECEIVE_PROJECT,
  payload
});

export const removeProject = project => ({
  type: REMOVE_PROJECT,
  project
});

export const fetchProject = (id) => dispatch => (
  APIUtil.fetchProject(id)
    .then(payload => dispatch(receiveProject(payload)))
);

export const createProject = project => dispatch => (
  APIUtil.createProject(project)
    .then(project => dispatch(receiveProject(project)))
);
