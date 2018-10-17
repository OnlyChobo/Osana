import {combineReducers} from 'redux';
import modalReducer from './modal_reducer';
import navBarReducer from './nav_bar_reducer';
import commentPaneReducer from './comment_pane_reducer';
import headerReducer from './header_reducer';
import positionReducer from './position_reducer';

const uiReducer = combineReducers({
  modal: modalReducer,
  navBar: navBarReducer,
  commentPane: commentPaneReducer,
  header: headerReducer,
  position: positionReducer
});

export default uiReducer;
