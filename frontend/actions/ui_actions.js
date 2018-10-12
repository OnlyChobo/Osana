export const TOGGLE_LEFT_NAV = 'RECEIVE_PROJECTS';
export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';
export const OPEN_DROPDOWN = 'OPEN_DROPDOWN';
export const CLOSE_DROPDOWN = 'CLOSE_DROPDOWN';

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
