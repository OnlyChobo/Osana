import {combineReducers} from 'redux';
import modalReducer from './modal_reducer';
import navBarReducer from './nav_bar_reducer';
import commentPaneReducer from './comment_pane_reducer';

const uiReducer = combineReducers({
  modal: modalReducer,
  navBar: navBarReducer,
  commentPane: commentPaneReducer
});

export default uiReducer;
