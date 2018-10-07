import { connect } from 'react-redux';
import Login from './login';
import { login } from '../../actions/session_actions';

const mapStateToProps = (state) => ({
  currentUser: state.entities.users[state.session.id]
});

const mapDispatchToProps = (dispatch) => ({
  login: (user) => dispatch(login(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
