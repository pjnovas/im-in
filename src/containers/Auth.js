import React, {
  Component
} from 'react';

import { connect } from 'react-redux';
import { sendToken, logout } from 'actions/auth';

import Login from 'components/auth/Login';
import Profile from 'components/auth/Profile';

@connect( store => ({ auth: store.auth }), { sendToken, logout })
export default class Auth extends Component {

  render() {
    let {
      auth,
      sendToken,
      logout
    } = this.props;

    return (
      <div>
        { !auth.loggingIn && !auth.loggedIn &&
          <Login {...auth} sendToken={sendToken}/>
        }
        { auth.loggedIn && !auth.loggingOut &&
          <Profile {...auth} logout={logout} />
        }
      </div>
    );
  }
}

Auth.propTypes = {};
