import * as APIUtil from '../util/api_util';

export const RECEIVE_TEAMS = 'RECEIVE_TEAMS';
export const RECEIVE_TEAM = 'RECEIVE_TEAM';
export const REMOVE_TEAM = 'REMOVE_TEAM';

export const receiveTeams = payloads => ({
  type: RECEIVE_TEAMS,
  payloads
});

export const receiveTeam = payload => ({
  type: RECEIVE_TEAM,
  payload
});

export const removeTeam = payload => ({
  type: REMOVE_TEAM,
  payload
});

export const fetchTeam = team => dispatch => (
  APIUtil.fetchTeam(team)
    .then(team => dispatch(receiveTeam(team)))
);
