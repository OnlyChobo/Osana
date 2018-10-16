import * as APIUtil from '../util/api_util';

export const RECEIVE_ALL_TEAM_MEMBERSHIPS = 'RECEIVE_ALL_TEAM_MEMBERSHIPS';
export const RECEIVE_TEAM_MEMBERSHIP = 'RECEIVE_TEAM_MEMBERSHIP';
export const REMOVE_TEAM_MEMBERSHIP = 'REMOVE_TEAM_MEMBERSHIP';

export const receiveAllTeamMemberships = teamMemberships => ({
  type: RECEIVE_ALL_TEAM_MEMBERSHIPS,
  teamMemberships
});

export const receiveTeamMembership = teamMembership => ({
  type: RECEIVE_TEAM_MEMBERSHIP,
  teamMembership
});

export const removeTeamMembership = teamMembership => ({
  type: REMOVE_TEAM_MEMBERSHIP,
  teamMembership
});

export const fetchTeamMemberships = () => dispatch => (
  APIUtil.fetchTeamMemberships().then(
    teamMemberships => dispatch(receiveAllTeamMemberships(teamMemberships))
  )
);

export const fetchTeamMembership = (id) => dispatch => (
  APIUtil.fetchTeamMembership(id).then(
    teamMembership => dispatch(receiveTeamMemberships(teamMemberships))
  )
);

export const createTeamMembership = (membership) => dispatch => (
  APIUtil.createTeamMembership(membership).then(
    teamMembership => dispatch(receiveTeamMemberships(teamMemberships))
  )
);

export const deleteTeamMembership = (id) => dispatch => (
  APIUtil.deleteTeamMembership(id).then(
    teamMembership => dispatch(removeTeamMembership(teamMembership))
  )
);
