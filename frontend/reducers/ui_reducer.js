import {combineReducers} from 'redux';
import modalReducer from './modal_reducer';
import navBarReducer from './nav_bar_reducer';

const uiReducer = combineReducers({
  modal: modalReducer,
  navBar: navBarReducer
});

export default uiReducer;
