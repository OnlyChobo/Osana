export const TOGGLE_LEFT_NAV = 'TOGGLE_LEFT_NAV';
export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';
export const OPEN_COMMENT_PANE = 'OPEN_COMMENT_PANE';
export const CLOSE_COMMENT_PANE = 'CLOSE_COMMENT_PANE';
export const OPEN_DROPDOWN = 'OPEN_DROPDOWN';
export const CLOSE_DROPDOWN = 'CLOSE_DROPDOWN';
export const SELECT_PROJECT = 'SELECT_PROJECT';
export const SET_HEADER = 'SET_HEADER';
export const SET_MODAL_POSITIONS = 'SET_MODAL_POSITIONS';
export const SEARCH_BAR_TEXT = 'SEARCH_BAR_TEXT';

export const toggleLeftNav = () => ({
  type: TOGGLE_LEFT_NAV
});

export const openModal = modal => {
  return {
    type: OPEN_MODAL,
    modal
  };
};

export const closeModal = () => {
  return {
    type: CLOSE_MODAL
  };
};

export const openCommentPane = (id) => {
  return {
    type: OPEN_COMMENT_PANE,
    id
  };
};

export const closeCommentPane = () => {
  return {
    type: CLOSE_COMMENT_PANE
  };
};

export const openDropdown = dropdown => {
  return {
    type: OPEN_DROPDOWN,
    dropdown
  };
};

export const closeDropdown = () => {
  return {
    type: CLOSE_DROPDOWN
  };
};

export const selectProject = (project) => {
  return {
    type: SELECT_PROJECT,
    project
  };
};

export const unselectProject = () => {
  return {
    type: UNSELECT_PROJECT
  };
};

export const setHeader = header => {
  return {
    type: SET_HEADER,
    header
  };
};

export const setModalPositions = element => {
  return {
    type: SET_MODAL_POSITIONS,
    element
  };
};

export const searchBarText = text => {
  return {
    type: SEARCH_BAR_TEXT,
    text
  };
};
